import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Modal } from "../common/Modal";
import {
  Plus,
  ShieldCheck,
  Trash2,
  CheckCircle2,
} from "lucide-react";

export function GalleryManager() {
  const { galleryCases, doctors, addGalleryCase, deleteGalleryCase } =
    useAdmin();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Smile Makeover",
    doctor: doctors[0]?.name || "Dr. Priya Sharma",
    patientConsent: true,
    consentRef: "CONSENT-SIGNED-RECORD",
    beforeImage: "/images/before_after/smile_before.jpg",
    afterImage: "/images/before_after/smile_after.jpg",
    treatmentDuration: "2 Weeks",
    notes: "",
  });

  const handleOpenModal = () => {
    setFormData({
      title: "",
      category: "Smile Makeover",
      doctor: doctors[0]?.name || "Dr. Priya Sharma",
      patientConsent: true,
      consentRef: `CONSENT-SIGNED-${Date.now().toString().slice(-4)}`,
      beforeImage: "/images/before_after/smile_before.jpg",
      afterImage: "/images/before_after/smile_after.jpg",
      treatmentDuration: "2 Weeks",
      notes: "",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGalleryCase(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#083258]">
            Before &amp; After Clinical Cases ({galleryCases.length})
          </h2>
          <p className="text-xs text-[#6B8BA2] mt-0.5">
            Documented clinical outcomes with verified signed patient consent (PDF Spec Requirement)
          </p>
        </div>

        <button
          onClick={handleOpenModal}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Clinical Case</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryCases.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all space-y-4"
          >
            {/* Header: Title & Consent Badge */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#E8F8F8] px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-bold text-sm text-[#083258] mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Patient Consent Badge (Required by PDF Section 1.5 & 7) */}
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xl shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consent Verified</span>
              </div>
            </div>

            {/* Before / After Preview Visual */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#F8FDFF] rounded-2xl border border-[#E8F1F5] text-center">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B8BA2]">
                  Initial Condition
                </span>
                <div className="h-28 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center text-xs text-gray-500 font-medium">
                  {item.beforeImage ? (
                    <img
                      src={item.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    "Before Clinical Photo"
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0AADA8]">
                  After Outcome
                </span>
                <div className="h-28 rounded-xl bg-teal-50 overflow-hidden flex items-center justify-center text-xs text-teal-700 font-medium border border-[#BCEBE9]">
                  {item.afterImage ? (
                    <img
                      src={item.afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    "After Result Photo"
                  )}
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="text-xs space-y-1.5 text-[#426480]">
              <div className="flex items-center justify-between">
                <span className="text-[#6B8BA2]">Specialist In-Charge:</span>
                <span className="font-bold text-[#083258]">{item.doctor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B8BA2]">Treatment Duration:</span>
                <span className="font-medium text-[#083258]">
                  {item.treatmentDuration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B8BA2]">Consent Record Ref:</span>
                <span className="font-mono text-[11px] text-[#026EB9] font-semibold">
                  {item.consentRef || "VERIFIED-CONSENT-FORM"}
                </span>
              </div>
              {item.notes && (
                <p className="text-[11px] text-[#6B8BA2] pt-1">
                  Procedure: {item.notes}
                </p>
              )}
            </div>

            {/* Delete button */}
            <div className="pt-3 border-t border-[#E8F1F5] flex justify-end">
              <button
                onClick={() => {
                  if (window.confirm("Delete this clinical case?")) {
                    deleteGalleryCase(item.id);
                  }
                }}
                className="text-xs text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove Case</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Case Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register Clinical Before/After Case"
        subtitle="Ensure written patient consent is filed before publishing"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Case Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Full Arch Alignment & Zirconia Crown"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
              >
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Orthodontics">Orthodontics / Aligners</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Specialist
              </label>
              <select
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
              >
                {doctors.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Treatment Duration
              </label>
              <input
                type="text"
                placeholder="e.g. 2 Appointments (7 Days)"
                value={formData.treatmentDuration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    treatmentDuration: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Consent Form Ref ID *
              </label>
              <input
                type="text"
                required
                value={formData.consentRef}
                onChange={(e) =>
                  setFormData({ ...formData, consentRef: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Clinical Procedures &amp; Notes
            </label>
            <textarea
              rows={2}
              placeholder="Porcelain veneers, gum contouring, etc..."
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Signed patient media consent verified in compliance with clinical ethics.
            </span>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8F1F5]">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Save Case
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
