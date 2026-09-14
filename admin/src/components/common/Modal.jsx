import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-2xl" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#083258]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal dialog */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className={`relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 w-full ${maxWidth} border border-[#D5ECF0] animate-in fade-in zoom-in-95 duration-200`}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-[#E8F1F5] bg-[#F8FDFF]">
            <div>
              <h3 className="text-lg font-bold text-[#083258]">{title}</h3>
              {subtitle && (
                <p className="text-xs text-[#426480] mt-1">{subtitle}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
