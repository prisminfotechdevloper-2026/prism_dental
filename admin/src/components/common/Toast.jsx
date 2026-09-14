import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isError = toast.type === "error";
  const isInfo = toast.type === "info";

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border text-sm font-medium ${
          isError
            ? "bg-red-50 border-red-200 text-red-800"
            : isInfo
            ? "bg-[#EBF4FB] border-[#B9DAF3] text-[#026EB9]"
            : "bg-[#E8F8F8] border-[#BCEBE9] text-[#083258]"
        }`}
      >
        {isError ? (
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
        ) : isInfo ? (
          <Info className="w-5 h-5 text-[#026EB9] shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-[#0AADA8] shrink-0" />
        )}
        <span>{toast.message}</span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-black/5 rounded-lg text-gray-500 hover:text-gray-700 ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
