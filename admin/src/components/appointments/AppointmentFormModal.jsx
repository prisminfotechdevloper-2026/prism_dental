import { useState } from "react";
import { Modal } from "../common/Modal";
import { useAdmin } from "../../context/AdminContext";
import { User, Phone, Mail, Stethoscope, IndianRupee } from "lucide-react";

const TIME_SLOTS = [
  "09:00 AM - 10:30 AM",
  "10:30 AM - 12:00 PM",
  "12:00 PM - 01:30 PM",
  "02:30 PM - 04:00 PM",
  "04:00 PM - 05:30 PM",
  "05:30 PM - 07:00 PM",
  "07:00 PM - 08:30 PM",
];

function AppointmentFormContent({
  initialData,
  onClose,
  doctors,
  treatments,
  addAppointment,
  updateAppointment,
}) {
  const [formData, setFormData] = useState(() => {
    if (initialData) return initialData;
    return {
      name: "",
      phone: "",
      email: "",
      treatment: treatments[0]?.name || "General Dental Checkup & Consultation",
      doctor: doctors[0]?.name || "Dr. Rohan Mehta",
      date: new Date().toISOString().split("T")[0],
      timeSlot: "10:30 AM - 12:00 PM",
      notes: "",
      status: "New",
      paymentStatus: "Pending",
      paymentAmount: "₹800",
      onlineConsultation: false,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter patient name and contact number");
      return;
    }

    if (initialData && initialData.id) {
      updateAppointment(initialData.id, formData);
    } else {
      addAppointment(formData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Patient Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Patient Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-3" />
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Patel"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-3" />
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Email & Payment Amount */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-3" />
            <input
              type="email"
              placeholder="patient@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Estimated Fee / Bill
          </label>
          <div className="relative">
            <IndianRupee className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="₹800"
              value={formData.paymentAmount}
              onChange={(e) => setFormData({ ...formData, paymentAmount: e.target.value })}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Treatment & Doctor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Treatment / Procedure *
          </label>
          <div className="relative">
            <Stethoscope className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-3" />
            <select
              value={formData.treatment}
              onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
            >
              {treatments.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Assigned Specialist *
          </label>
          <select
            value={formData.doctor}
            onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
          >
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name} ({d.specialty})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date & Time Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Consultation Date *
          </label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Time Slot *
          </label>
          <select
            value={formData.timeSlot}
            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Status & Payment Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Appointment Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
          >
            <option value="New">New Enquiry</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Payment Status
          </label>
          <select
            value={formData.paymentStatus}
            onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value })}
            className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid in Full</option>
            <option value="Partial">Partial Advance</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
            Consultation Mode
          </label>
          <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-[#083258]">
            <input
              type="checkbox"
              checked={formData.onlineConsultation}
              onChange={(e) =>
                setFormData({ ...formData, onlineConsultation: e.target.checked })
              }
              className="rounded border-[#D5ECF0] text-[#0AADA8] focus:ring-[#0AADA8]"
            />
            <span>Online Video Consult</span>
          </label>
        </div>
      </div>

      {/* Symptoms / Clinical Notes */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
          Patient Symptoms &amp; Clinical Notes
        </label>
        <textarea
          rows={3}
          placeholder="Record symptoms, allergies, tooth number, or special requests..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8F1F5]">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all cursor-pointer"
        >
          {initialData ? "Save Changes" : "Confirm & Schedule"}
        </button>
      </div>
    </form>
  );
}

export function AppointmentFormModal({ isOpen, onClose, initialData = null }) {
  const { doctors, treatments, addAppointment, updateAppointment } = useAdmin();

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? "Reschedule & Edit Appointment" : "Reschedule Appointment"}
      subtitle={initialData ? `Record ID: ${initialData.id} • Website Patient Booking` : "Update patient consultation schedule and details"}
      maxWidth="max-w-2xl"
    >
      <AppointmentFormContent
        key={initialData?.id || "new"}
        initialData={initialData}
        onClose={onClose}
        doctors={doctors}
        treatments={treatments}
        addAppointment={addAppointment}
        updateAppointment={updateAppointment}
      />
    </Modal>
  );
}
