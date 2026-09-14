import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import {
  Building,
  MessageSquare,
  Clock,
  Save,
  RotateCcw,
} from "lucide-react";

export function ClinicSettings() {
  const { settings, updateSettings, resetToFactoryData } = useAdmin();

  const [formData, setFormData] = useState({ ...settings });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(formData);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-[#083258]">
          Clinic Settings &amp; Automated Templates
        </h2>
        <p className="text-xs text-[#6B8BA2] mt-0.5">
          Configure clinic coordinates, operating schedules, and WhatsApp message templates
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Clinic Identity & Coordinates */}
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#0AADA8] flex items-center gap-1.5">
            <Building className="w-4 h-4" />
            Clinic Details &amp; Contact Numbers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Clinic Name
              </label>
              <input
                type="text"
                value={formData.clinicName}
                onChange={(e) =>
                  setFormData({ ...formData, clinicName: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Tagline / Slogan
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) =>
                  setFormData({ ...formData, tagline: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Primary Phone (Click-to-Call)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                WhatsApp Business Number
              </label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Emergency 24/7 Helpline
              </label>
              <input
                type="tel"
                value={formData.emergencyHelpline}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emergencyHelpline: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Official Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Physical Clinic Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#026EB9] flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Clinic Working Hours
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Weekday Timings (Mon - Sat)
              </label>
              <input
                type="text"
                value={formData.workingHoursWeekday}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    workingHoursWeekday: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Sunday Timings
              </label>
              <input
                type="text"
                value={formData.workingHoursSunday}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    workingHoursSunday: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Automated WhatsApp Templates */}
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" />
            Automated WhatsApp Notification Templates
          </h3>
          <p className="text-xs text-[#6B8BA2]">
            Variables available: {"{PATIENT_NAME}"}, {"{TREATMENT}"}, {"{DOCTOR}"}, {"{DATE}"}, {"{TIME_SLOT}"}
          </p>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Booking Confirmation Template
            </label>
            <textarea
              rows={3}
              value={formData.whatsappBookingTemplate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  whatsappBookingTemplate: e.target.value,
                })
              }
              className="w-full p-3 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] font-mono leading-relaxed focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Slot Reminder Template (Sent 24h Before)
            </label>
            <textarea
              rows={3}
              value={formData.whatsappReminderTemplate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  whatsappReminderTemplate: e.target.value,
                })
              }
              className="w-full p-3 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] font-mono leading-relaxed focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>
        </div>

        {/* Submit & Reset actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-3xl border border-[#D5ECF0]">
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Reset all clinic demo data (appointments, doctors, treatments) to initial factory seed?"
                )
              ) {
                resetToFactoryData();
              }
            }}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Demo Data to Factory State</span>
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Clinic Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
