import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, Plane, X } from "lucide-react";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Destinations", to: "/#destinations" },
  { label: "Packages", to: "/contact" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbfaf8] text-stone-900">
      <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-4 sm:px-7 lg:px-10">
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-9 w-9 place-items-center rounded-xs border border-stone-300 lg:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-xs font-medium tracking-wide text-stone-600 transition hover:text-stone-950"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          onClick={closeMenu}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap"
          aria-label="Elight Travels home"
        >
          <Plane size={18} strokeWidth={1.7} />
          <span className="font-serif text-xl tracking-tight sm:text-2xl">Elight</span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Travels
          </span>
        </Link>

        <Link
          to="/contact"
          className="ml-auto inline-flex h-9 items-center gap-2 rounded-xs bg-stone-950 px-3.5 text-xs font-medium text-white transition hover:bg-stone-700 sm:px-4"
        >
          <span className="hidden sm:inline">Plan your trip</span>
          <span className="sm:hidden">Let&apos;s talk</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-stone-200 bg-[#fbfaf8] px-5 py-3 shadow-md lg:hidden"
        >
          {navigation.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMenu}
              className="block border-b border-stone-200 py-3 text-sm text-stone-700 last:border-0"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
