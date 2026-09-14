import { useState } from "react";
import { Modal } from "../common/Modal";
import { useAdmin } from "../../context/AdminContext";
import { Send, MessageSquare, CheckCircle, ExternalLink, Copy } from "lucide-react";

export function WhatsAppModal({ isOpen, onClose, appointment }) {
  const { settings, markWhatsAppSent, showToast } = useAdmin();

  function generateMessage(type, apt) {
    if (!apt) return "";

    if (type === "confirmation") {
      return `Hello ${apt.name},

Thank you for choosing SmileCare Dental Clinic! 🦷

Your appointment has been confirmed:
📋 Procedure: ${apt.treatment}
👨‍⚕️ Specialist: ${apt.doctor}
📅 Date: ${apt.date}
⏰ Time: ${apt.timeSlot}
📍 Location: 104, Healthcare Towers, Opp. City Central Park

Please arrive 10 minutes before your slot. For any assistance, call us at ${settings.phone}.`;
    }

    if (type === "reminder") {
      return `Gentle Reminder from SmileCare Dental: 🦷

Hi ${apt.name}, you have a dental appointment scheduled tomorrow:
📅 Date: ${apt.date}
⏰ Time: ${apt.timeSlot}
👨‍⚕️ Specialist: ${apt.doctor}

Please reply "YES" to confirm or "RESCHEDULE" if you need to adjust your time.`;
    }

    if (type === "followUp") {
      return `Dear ${apt.name},

We hope you are recovering comfortably following your recent visit for ${apt.treatment} with ${apt.doctor}! 🦷

Kindly remember to take prescribed medications and avoid hard foods today. If you experience any sensitivity or questions, our clinic helpline is open 24/7 at ${settings.emergencyHelpline}.`;
    }

    return "";
  }

  const [templateType, setTemplateType] = useState("confirmation");
  const [customMessage, setCustomMessage] = useState(() => {
    return generateMessage("confirmation", appointment);
  });

  if (!appointment) return null;

  const handleTemplateChange = (type) => {
    setTemplateType(type);
    setCustomMessage(generateMessage(type, appointment));
  };

  const handleSendWhatsApp = () => {
    const rawPhone = appointment.phone || "";
    let cleanPhone = rawPhone.replace(/[^0-9]/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = `91${cleanPhone}`;
    }

    const encodedText = encodeURIComponent(customMessage);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

    markWhatsAppSent(appointment.id);
    window.open(waUrl, "_blank");
    onClose();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(customMessage);
    showToast("Message copied to clipboard!");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Send WhatsApp Notification"
      subtitle={`Patient: ${appointment.name} (${appointment.phone})`}
      maxWidth="max-w-xl"
    >
      <div className="space-y-4">
        {/* Template Selector Tabs */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1.5">
            Select Notification Template
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleTemplateChange("confirmation")}
              className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                templateType === "confirmation"
                  ? "bg-[#E8F8F8] border-[#0AADA8] text-[#0AADA8]"
                  : "border-[#D5ECF0] text-[#426480] hover:bg-gray-50"
              }`}
            >
              Appointment Confirmed
            </button>
            <button
              type="button"
              onClick={() => handleTemplateChange("reminder")}
              className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                templateType === "reminder"
                  ? "bg-[#E8F8F8] border-[#0AADA8] text-[#0AADA8]"
                  : "border-[#D5ECF0] text-[#426480] hover:bg-gray-50"
              }`}
            >
              Slot Reminder
            </button>
            <button
              type="button"
              onClick={() => handleTemplateChange("followUp")}
              className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                templateType === "followUp"
                  ? "bg-[#E8F8F8] border-[#0AADA8] text-[#0AADA8]"
                  : "border-[#D5ECF0] text-[#426480] hover:bg-gray-50"
              }`}
            >
              Post-Care Follow-up
            </button>
          </div>
        </div>

        {/* Message Preview / Editor */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#083258]">
              Personalized Message (Editable)
            </label>
            <button
              type="button"
              onClick={handleCopyText}
              className="text-[11px] font-semibold text-[#026EB9] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Copy className="w-3 h-3" />
              Copy Text
            </button>
          </div>
          <div className="relative">
            <textarea
              rows={8}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full p-3 rounded-2xl border border-[#D5ECF0] bg-[#F8FDFF] text-xs font-mono text-[#083258] leading-relaxed focus:bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>
        </div>

        {/* Notification Status info */}
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Target Phone: <strong>{appointment.phone}</strong>
            </span>
          </div>
          {appointment.whatsappSent && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
              <CheckCircle className="w-3.5 h-3.5" />
              Previously Sent
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8F1F5]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl shadow-[0_4px_12px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Launch WhatsApp &amp; Send</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </Modal>
  );
}
