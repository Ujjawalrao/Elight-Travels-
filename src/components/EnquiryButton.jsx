import { forwardRef } from "react";
import { Mail } from "lucide-react";

const EnquiryButton = forwardRef(function EnquiryButton(
  { onClick, isOpen },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label="Enquiry now"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      className="fixed right-0 top-1/2 z-50 isolate inline-flex -translate-y-1/2 flex-col items-center gap-2 overflow-hidden rounded-xs bg-amber-500 px-3 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-xs border-2 border-amber-300" />
      <Mail size={18} className="relative" />
      <span className="relative [writing-mode:vertical-rl]">Enquiry Now</span>
    </button>
  );
});

export default EnquiryButton;
