import { Mail, MapPin, Phone } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

const phone = "9466195421";
const email = "Elighttravels12399@gmail.com";
const mapQuery = import.meta.env.VITE_MAP_QUERY || "Elight Travels";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

export default function Contact() {
  return (
    <main className="bg-[#fbfaf8] text-stone-900">
      <section className="mx-auto max-w-[1320px] px-4 pb-32 pt-12 sm:px-7 sm:pb-20 sm:pt-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            Let&apos;s plan something memorable
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your next journey starts here.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            Tell us where you&apos;d like to go, and our team will help make the
            details feel easy.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <section className="border border-stone-200 bg-white p-5 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Send an enquiry
            </p>
            <h2 className="mb-6 mt-2 font-serif text-2xl sm:text-3xl">
              How can we help?
            </h2>
            <EnquiryForm />
          </section>

          <aside className="flex flex-col border border-stone-200 bg-white">
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-stone-800 transition hover:text-amber-700"
                >
                  <Mail size={15} />
                  {email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Call
                </p>
                <a
                  href={`tel:${phone}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-stone-800 transition hover:text-amber-700"
                >
                  <Phone size={15} />
                  +91 {phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 border-y border-stone-200 px-5 py-3 text-xs text-stone-600 sm:px-6">
              <MapPin size={15} className="shrink-0" />
              <span>Explore our location on the map</span>
            </div>
            <iframe
              title={`Map search for ${mapQuery}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="min-h-[320px] w-full flex-1 border-0 sm:min-h-[400px]"
            />
            <p className="border-t border-stone-200 px-5 py-3 text-xs leading-5 text-stone-500 sm:px-6">
              The map shows a search for “{mapQuery}”. Set{" "}
              <code className="font-mono text-stone-700">VITE_MAP_QUERY</code>{" "}
              to your verified business location.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
