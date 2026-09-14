import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Modal } from "../common/Modal";
import {
  Plus,
  Star,
  Phone,
  Edit2,
  Trash2,
} from "lucide-react";

export function DoctorsManager() {
  const {
    doctors,
    addDoctor,
    updateDoctor,
    toggleDoctorAvailability,
    deleteDoctor,
  } = useAdmin();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    specialty: "",
    degree: "",
    experience: "",
    phone: "",
    email: "",
    consultationFee: 700,
    languages: "English, Hindi",
  });

  const handleOpenAdd = () => {
    setEditingDoctor(null);
    setFormData({
      name: "",
      role: "Dental Surgeon",
      specialty: "Prosthodontist",
      degree: "BDS, MDS",
      experience: "5+ Years",
      phone: "+91 98000 00000",
      email: "doctor@smilecare.com",
      consultationFee: 700,
      languages: "English, Hindi",
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (doc) => {
    setEditingDoctor(doc);
    setFormData({
      name: doc.name,
      role: doc.role,
      specialty: doc.specialty,
      degree: doc.degree,
      experience: doc.experience,
      phone: doc.phone || "",
      email: doc.email || "",
      consultationFee: doc.consultationFee || 700,
      languages: Array.isArray(doc.languages) ? doc.languages.join(", ") : doc.languages,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      languages: formData.languages.split(",").map((s) => s.trim()),
    };

    if (editingDoctor) {
      updateDoctor(editingDoctor.id, payload);
    } else {
      addDoctor(payload);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#083258]">
            Clinic Dental Specialists ({doctors.length})
          </h2>
          <p className="text-xs text-[#6B8BA2] mt-0.5">
            Manage doctor profiles, active duties, and consultation fees
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Specialist</span>
        </button>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Top info with availability toggle */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F8F8] border border-[#BCEBE9] flex items-center justify-center text-[#0AADA8] font-bold text-sm shadow-xs">
                    {doc.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#083258] leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#0AADA8] font-semibold mt-0.5">
                      {doc.role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleDoctorAvailability(doc.id)}
                  title="Toggle Active Duty"
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                    doc.available
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-gray-100 text-gray-500 border-gray-200"
                  }`}
                >
                  {doc.available ? "Available" : "Off Duty"}
                </button>
              </div>

              {/* Specialization & Degree */}
              <div className="p-3 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0] text-xs space-y-1.5 my-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B8BA2]">Specialty:</span>
                  <span className="font-bold text-[#083258]">{doc.specialty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B8BA2]">Degree:</span>
                  <span className="font-medium text-[#083258]">{doc.degree}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B8BA2]">Experience:</span>
                  <span className="font-medium text-[#083258]">
                    {doc.experience}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B8BA2]">Consult Fee:</span>
                  <span className="font-bold text-emerald-700">
                    ₹{doc.consultationFee || 700}
                  </span>
                </div>
              </div>

              {/* Rating & Contact */}
              <div className="text-xs text-[#6B8BA2] space-y-1">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-[#083258]">
                    {doc.rating || 5.0}
                  </span>
                  <span>({doc.reviewCount || 100}+ reviews)</span>
                </div>
                {doc.phone && (
                  <p className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#0AADA8]" />
                    {doc.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-[#E8F1F5] flex items-center justify-between">
              <button
                onClick={() => handleOpenEdit(doc)}
                className="flex items-center gap-1 text-xs font-semibold text-[#026EB9] hover:underline cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>

              <button
                onClick={() => {
                  if (
                    window.confirm(
                      `Remove ${doc.name} from the active clinic roster?`
                    )
                  ) {
                    deleteDoctor(doc.id);
                  }
                }}
                className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Doctor Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingDoctor ? "Edit Doctor Profile" : "Add Dental Specialist"}
        subtitle="Doctor information appears across patient booking and team directory"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Doctor Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Aryan Saxena"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Clinical Role
              </label>
              <input
                type="text"
                placeholder="Senior Prosthodontist"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Specialty
              </label>
              <input
                type="text"
                placeholder="Endodontics / Implants"
                value={formData.specialty}
                onChange={(e) =>
                  setFormData({ ...formData, specialty: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Degrees / Qualifications
              </label>
              <input
                type="text"
                placeholder="BDS, MDS"
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Experience
              </label>
              <input
                type="text"
                placeholder="10+ Years"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Consultation Fee (₹)
              </label>
              <input
                type="number"
                placeholder="700"
                value={formData.consultationFee}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    consultationFee: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Spoken Languages (comma-separated)
            </label>
            <input
              type="text"
              placeholder="English, Hindi, Marathi"
              value={formData.languages}
              onChange={(e) =>
                setFormData({ ...formData, languages: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
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
              {editingDoctor ? "Save Changes" : "Create Specialist"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
