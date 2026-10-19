import { MessageCircle, Phone } from "lucide-react";

const PHONE = "9466195421";
const WHATSAPP_PHONE = "919466195421";

export default function FloatingContactButtons() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex gap-3 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(15,23,42,0.12)] backdrop-blur md:inset-x-auto md:bottom-6 md:right-6 md:flex-col md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xs bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#1fbd5b] md:flex-none"
      >
        <MessageCircle size={19} />
        WhatsApp
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xs bg-[#002F7F] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-900 md:flex-none"
      >
        <Phone size={19} />
        Call Now
      </a>
    </div>
  );
}
