import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal({ onClose, triggerRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("input[name='name']")?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [onClose, triggerRef]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-stone-950/60 p-4 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-dialog-title"
        className="relative my-auto w-full max-w-2xl rounded-xs border border-stone-200 bg-[#fbfaf8] p-5 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xs border border-stone-300 text-stone-600 transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        >
          <X size={18} />
        </button>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          Start planning
        </p>
        <h2
          id="enquiry-dialog-title"
          className="mt-2 pr-10 font-serif text-3xl text-stone-900 sm:text-4xl"
        >
          Tell us about your trip
        </h2>
        <p className="mb-6 mt-2 max-w-lg text-sm leading-6 text-stone-600">
          Share a few details and our travel team will help you plan the next step.
        </p>
        <EnquiryForm />
      </section>
    </div>
  );
}
