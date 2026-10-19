import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  CirclePlay,
  Globe,
  Mail,
  Phone,
  Plane,
} from "lucide-react";

const PHONE = "9466195421";
const EMAIL = "Elighttravels12399@gmail.com";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/#destinations" },
  { label: "About us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/", icon: Globe },
  { label: "Instagram", href: "https://instagram.com/", icon: Camera },
  { label: "YouTube", href: "https://youtube.com/", icon: CirclePlay },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-[#fbfaf8] text-stone-900">
      <div className="mx-auto max-w-[1320px] px-5 pb-24 pt-12 sm:px-7 sm:pb-10 lg:px-10 lg:pt-16">
        <div className="grid gap-10 border-b border-stone-200 pb-10 sm:grid-cols-3 sm:gap-8 lg:gap-16 lg:pb-14">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2"
              aria-label="Elight Travels home"
            >
              <Plane size={19} strokeWidth={1.7} />
              <span className="font-serif text-2xl tracking-tight">Elight</span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Travels
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600">
              Thoughtfully planned journeys, scenic road trips and memorable
              escapes across India. Take the scenic route with Elight Travels.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xs border border-stone-300 text-stone-600 transition hover:border-stone-900 hover:text-stone-950"
                >
                  <Icon size={16} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-stone-700 transition hover:text-stone-950"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Get in touch
            </h2>
            <p className="mt-4 text-sm leading-6 text-stone-600">
              Tell us where you would like to go. We’ll help you plan the
              journey.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-4 flex items-center gap-3 text-sm text-stone-800 transition hover:text-stone-950"
            >
              <Phone size={16} strokeWidth={1.7} />
              +91 {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 flex items-center gap-3 break-all text-sm text-stone-800 transition hover:text-stone-950"
            >
              <Mail size={16} className="shrink-0" strokeWidth={1.7} />
              {EMAIL}
            </a>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-xs font-semibold uppercase tracking-wide"
            >
              Plan your trip
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[11px] text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:pr-36">
          <p>© {currentYear} Elight Travels. All rights reserved.</p>
          <p className="font-serif text-sm italic text-stone-600">
            Explore more. Travel better.
          </p>
        </div>
      </div>
    </footer>
  );
}
