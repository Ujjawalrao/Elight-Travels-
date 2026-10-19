import "dotenv/config";
import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";
import process from "node:process";

const requiredSettings = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "EMAIL_FROM",
  "EMAIL_TO",
  "CORS_ORIGIN",
];
const missingSettings = requiredSettings.filter((setting) => !process.env[setting]?.trim());

if (missingSettings.length > 0) {
  throw new Error(`Missing required mail configuration: ${missingSettings.join(", ")}`);
}

const smtpPort = Number(process.env.SMTP_PORT);
if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
  throw new Error("SMTP_PORT must be a valid port number.");
}

const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid port number.");
}

const allowedOrigins = new Set(
  (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

if (allowedOrigins.has("*")) {
  throw new Error("CORS_ORIGIN must list specific trusted origins, not '*'.");
}
if (allowedOrigins.size === 0) {
  throw new Error("CORS_ORIGIN must contain at least one trusted origin.");
}

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", process.env.TRUST_PROXY === "true");
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }

      const error = new Error("Origin not allowed by CORS.");
      error.status = 403;
      callback(error);
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    maxAge: 600,
  }),
);
app.use(express.json({ limit: "32kb", strict: true }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true,
  maxConnections: 3,
  maxMessages: 100,
});

const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
const requestsByIp = new Map();

const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of requestsByIp) {
    if (now - record.startedAt >= rateLimitWindowMs) requestsByIp.delete(ip);
  }
}, 60 * 1000);
cleanupInterval.unref();

function limitEnquiries(req, res, next) {
  const now = Date.now();
  const clientIp = req.ip;
  let record = requestsByIp.get(clientIp);

  if (!record || now - record.startedAt >= rateLimitWindowMs) {
    record = { startedAt: now, count: 0 };
    requestsByIp.set(clientIp, record);
  }

  record.count += 1;
  if (record.count > rateLimitMaxRequests) {
    const retryAfter = Math.ceil(
      (rateLimitWindowMs - (now - record.startedAt)) / 1000,
    );
    res.set("Retry-After", String(retryAfter));
    res.status(429).json({
      message: "Too many enquiries from this connection. Please try again later.",
    });
    return;
  }

  next();
}

function validateEnquiry(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Please submit a valid enquiry." };
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return { error: "Your enquiry could not be accepted." };
  }

  const { name, email, phone, message } = body;
  if (
    [name, email, phone, message].some(
      (value) => typeof value !== "string" || !value.trim(),
    )
  ) {
    return { error: "Name, email, phone number and message are required." };
  }

  const enquiry = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
  };

  if (
    enquiry.name.length > 120 ||
    hasControlCharacters(enquiry.name)
  ) {
    return { error: "Please enter a valid name (up to 120 characters)." };
  }
  if (
    enquiry.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)
  ) {
    return { error: "Please enter a valid email address." };
  }
  if (
    enquiry.phone.length > 25 ||
    !/^[+()\d .-]+$/.test(enquiry.phone) ||
    (enquiry.phone.match(/\d/g) || []).length < 7
  ) {
    return { error: "Please enter a valid phone number." };
  }
  if (
    enquiry.message.length > 5000 ||
    hasControlCharacters(enquiry.message, true)
  ) {
    return { error: "Please keep your message under 5,000 characters." };
  }

  function hasControlCharacters(value, allowMessageWhitespace = false) {
    for (const character of value) {
      const code = character.charCodeAt(0);
      if (code === 127) return true;
      if (code < 32 && !(allowMessageWhitespace && [9, 10, 13].includes(code))) {
        return true;
      }
    }
    return false;
  }

  return { enquiry };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/enquiries", limitEnquiries, async (req, res) => {
  const { enquiry, error } = validateEnquiry(req.body);
  if (error) {
    res.status(400).json({ message: error });
    return;
  }

  const safeMessage = escapeHtml(enquiry.message).replace(/\r?\n/g, "<br>");
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: enquiry.email,
      subject: "New website travel enquiry",
      text: [
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Phone: ${enquiry.phone}`,
        "",
        "Message:",
        enquiry.message,
      ].join("\n"),
      html: [
        "<h2>New website travel enquiry</h2>",
        `<p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>`,
        `<p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>`,
        `<p><strong>Message:</strong><br>${safeMessage}</p>`,
      ].join(""),
    });
  } catch (error) {
    console.error("Failed to deliver enquiry email.", {
      code: error.code,
      command: error.command,
    });
    res.status(502).json({
      message: "Your enquiry could not be delivered right now. Please try again later.",
    });
    return;
  }

  res.status(201).json({ message: "Enquiry sent successfully." });
});

app.use((error, _req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }

  if (error.type === "entity.too.large") {
    res.status(413).json({ message: "Your enquiry is too large to submit." });
    return;
  }
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    res.status(400).json({ message: "Please submit valid JSON." });
    return;
  }

  const status = error.status === 403 ? 403 : 500;
  if (status === 500) console.error("Request processing failed.", error);
  res.status(status).json({
    message: status === 403 ? "This website origin is not allowed." : "An unexpected error occurred.",
  });
});

app.listen(port, () => {
  console.log(`Enquiry API listening on port ${port}.`);
});