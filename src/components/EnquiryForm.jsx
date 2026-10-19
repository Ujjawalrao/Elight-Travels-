import { useId, useState } from "react";

const API_BASE_URL = import.meta.env.DEV
  ? ""
  : (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const honeypotId = useId();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiry = Object.fromEntries(formData.entries());
    delete enquiry.website;

    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...enquiry,
          website: formData.get("website"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: result.message || "We could not send your enquiry. Please try again.",
        });
        return;
      }

      form.reset();
      setFeedback({
        type: "success",
        message: "Thank you. Your enquiry has been sent, and our team will be in touch.",
      });
    } catch {
      setFeedback({
        type: "error",
        message: "We could not reach the enquiry service. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="absolute h-px w-px overflow-hidden whitespace-nowrap" aria-hidden="true">
        <label htmlFor={honeypotId}>Leave this field empty</label>
        <input
          id={honeypotId}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-medium text-stone-700">
          Name <span aria-hidden="true" className="text-amber-700">*</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={120}
            required
            placeholder="Your name"
            className="mt-2 min-h-11 w-full rounded-xs border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
          />
        </label>
        <label className="block text-xs font-medium text-stone-700">
          Email <span aria-hidden="true" className="text-amber-700">*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="you@example.com"
            className="mt-2 min-h-11 w-full rounded-xs border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
          />
        </label>
      </div>

      <label className="block text-xs font-medium text-stone-700">
        Phone number <span aria-hidden="true" className="text-amber-700">*</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          maxLength={25}
          minLength={7}
          required
          placeholder="+91 98765 43210"
          className="mt-2 min-h-11 w-full rounded-xs border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
        />
      </label>

      <label className="block text-xs font-medium text-stone-700">
        Message <span aria-hidden="true" className="text-amber-700">*</span>
        <textarea
          name="message"
          rows={5}
          maxLength={5000}
          required
          placeholder="Tell us a little about the trip you have in mind..."
          className="mt-2 w-full resize-y rounded-xs border border-stone-300 bg-white px-3 py-3 text-sm leading-6 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-700 focus:ring-2 focus:ring-stone-200"
        />
      </label>

      {feedback && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          className={`text-sm leading-6 ${
            feedback.type === "error" ? "text-red-700" : "text-emerald-800"
          }`}
        >
          {feedback.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-xs bg-stone-950 px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
      <p className="text-xs leading-5 text-stone-500">
        Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}
