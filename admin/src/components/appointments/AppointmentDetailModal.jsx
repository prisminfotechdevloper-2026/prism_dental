import { Modal } from "../common/Modal";
import { StatusBadge, PaymentBadge } from "../common/Badge";
import { useAdmin } from "../../context/AdminContext";
import {
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
  Edit2,
  Trash2,
  FileText,
  Video,
} from "lucide-react";

export function AppointmentDetailModal({
  isOpen,
  onClose,
  appointment,
  onEdit,
  onOpenWhatsApp,
}) {
  const {
    updateAppointmentStatus,
    deleteAppointment,
    markEmailSent,
    showToast,
  } = useAdmin();

  if (!appointment) return null;

  const handleStatusChange = (newStatus) => {
    updateAppointmentStatus(appointment.id, newStatus);
  };

  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete appointment ${appointment.id}?`
      )
    ) {
      deleteAppointment(appointment.id);
      onClose();
    }
  };

  const handleSendEmailReminder = () => {
    markEmailSent(appointment.id);
    showToast(`Email reminder dispatched to ${appointment.email || appointment.name}`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Appointment Patient Dossier"
      subtitle={`Enquiry ID: ${appointment.id} • Registered on ${appointment.createdDate || "Recent"}`}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Status bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#083258]">
              Current Status:
            </span>
            <StatusBadge status={appointment.status} />
            <PaymentBadge status={appointment.paymentStatus} />
            {appointment.onlineConsultation && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#026EB9] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                <Video className="w-3 h-3" />
                Online Consult
              </span>
            )}
          </div>

          {/* Quick status change buttons */}
          <div className="flex items-center gap-1.5">
            {appointment.status !== "Confirmed" && (
              <button
                onClick={() => handleStatusChange("Confirmed")}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#E8F8F8] text-[#0AADA8] hover:bg-[#0AADA8] hover:text-white border border-[#BCEBE9] transition-colors cursor-pointer"
              >
                Confirm
              </button>
            )}
            {appointment.status !== "Completed" && (
              <button
                onClick={() => handleStatusChange("Completed")}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-colors cursor-pointer"
              >
                Complete
              </button>
            )}
            {appointment.status !== "Cancelled" && (
              <button
                onClick={() => handleStatusChange("Cancelled")}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white border border-rose-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Patient & Booking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Patient Details */}
          <div className="p-4 rounded-2xl border border-[#D5ECF0] space-y-2.5 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0AADA8] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              Patient Information
            </h4>
            <div className="text-xs space-y-2">
              <div className="flex justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#6B8BA2]">Full Name:</span>
                <span className="font-bold text-[#083258]">{appointment.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#6B8BA2]">Phone Number:</span>
                <a
                  href={`tel:${appointment.phone}`}
                  className="font-bold text-[#026EB9] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  {appointment.phone}
                </a>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#6B8BA2]">Email:</span>
                <span className="font-medium text-[#083258]">
                  {appointment.email || "Not Provided"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B8BA2]">Consultation Bill:</span>
                <span className="font-bold text-emerald-700">
                  {appointment.paymentAmount || "₹800"}
                </span>
              </div>
            </div>
          </div>

          {/* Appointment Schedule Details */}
          <div className="p-4 rounded-2xl border border-[#D5ECF0] space-y-2.5 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#026EB9] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Consultation Schedule
            </h4>
            <div className="text-xs space-y-2">
              <div className="flex justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#6B8BA2]">Treatment:</span>
                <span className="font-bold text-[#083258] text-right truncate max-w-[180px]">
                  {appointment.treatment}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#6B8BA2]">Doctor:</span>
                <span className="font-bold text-[#083258] text-right">
                  {appointment.doctor}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[#6B8BA2]">Date:</span>
                <span className="font-bold text-[#083258]">{appointment.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B8BA2]">Time Slot:</span>
                <span className="font-bold text-[#0AADA8]">
                  {appointment.timeSlot}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms / Clinical Notes */}
        <div className="p-4 rounded-2xl border border-[#D5ECF0] bg-[#F8FDFF] space-y-1.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#083258] flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#0AADA8]" />
            Patient Symptoms &amp; Notes
          </h4>
          <p className="text-xs text-[#426480] leading-relaxed italic bg-white p-3 rounded-xl border border-[#E8F1F5]">
            "{appointment.notes || "No specific symptoms or special notes provided."}"
          </p>
        </div>

        {/* Automated Messaging triggers (as in PDF) */}
        <div className="p-4 rounded-2xl border border-[#BCEBE9] bg-[#E8F8F8]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-0.5 text-left">
            <p className="text-xs font-bold text-[#083258]">
              Automated Messaging &amp; Reminders
            </p>
            <p className="text-[11px] text-[#426480]">
              WhatsApp: {appointment.whatsappSent ? "✅ Sent" : "⏳ Pending"} • Email:{" "}
              {appointment.emailSent ? "✅ Sent" : "⏳ Pending"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(appointment);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleSendEmailReminder}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#026EB9] hover:bg-[#025B9A] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Reminder</span>
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8F1F5]">
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete Appointment</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onEdit(appointment);
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#083258] bg-[#F5FBFC] hover:bg-[#E8F1F5] rounded-xl border border-[#D5ECF0] transition-colors cursor-pointer"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
