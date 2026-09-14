import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Modal } from "../common/Modal";
import { Plus, Edit2, Trash2 } from "lucide-react";

export function TreatmentsManager() {
  const {
    treatments,
    addTreatment,
    updateTreatment,
    toggleTreatmentActive,
    deleteTreatment,
  } = useAdmin();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTreatment, setEditingTreatment] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "General Dentistry",
    priceRange: "₹1,000 - ₹3,000",
    duration: "45 Mins",
    description: "",
  });

  const handleOpenAdd = () => {
    setEditingTreatment(null);
    setFormData({
      name: "",
      category: "General Dentistry",
      priceRange: "₹1,000 - ₹3,000",
      duration: "45 Mins",
      description: "",
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (t) => {
    setEditingTreatment(t);
    setFormData({
      name: t.name,
      category: t.category,
      priceRange: t.priceRange,
      duration: t.duration,
      description: t.description,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTreatment) {
      updateTreatment(editingTreatment.id, formData);
    } else {
      addTreatment(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#083258]">
            Treatments &amp; Clinical Services ({treatments.length})
          </h2>
          <p className="text-xs text-[#6B8BA2] mt-0.5">
            Configure clinical procedures, estimated pricing, and duration
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Treatment</span>
        </button>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {treatments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category & Active Toggle */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#E8F8F8] px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>

                <button
                  onClick={() => toggleTreatmentActive(item.id)}
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-md cursor-pointer ${
                    item.active
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {item.active ? "Active" : "Inactive"}
                </button>
              </div>

              {/* Title */}
              <h3 className="font-bold text-sm text-[#083258] leading-snug">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#426480] mt-2 leading-relaxed">
                {item.description}
              </p>

              {/* Pricing & Duration Bar */}
              <div className="mt-4 p-3 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0] grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-[#6B8BA2] block uppercase font-bold">
                    Est. Cost
                  </span>
                  <span className="font-bold text-emerald-700">
                    {item.priceRange}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B8BA2] block uppercase font-bold">
                    Duration
                  </span>
                  <span className="font-semibold text-[#083258]">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 mt-4 border-t border-[#E8F1F5] flex items-center justify-between">
              <button
                onClick={() => handleOpenEdit(item)}
                className="flex items-center gap-1 text-xs font-semibold text-[#026EB9] hover:underline cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Service</span>
              </button>

              <button
                onClick={() => {
                  if (
                    window.confirm(`Delete treatment "${item.name}" from catalog?`)
                  ) {
                    deleteTreatment(item.id);
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

      {/* Add / Edit Treatment Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTreatment ? "Edit Dental Procedure" : "Add Clinical Service"}
        subtitle="This service will appear in the patient booking dropdown and pricing list"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Treatment Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Laser Teeth Whitening"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                <option value="General Dentistry">General Dentistry</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                <option value="Endodontics">Endodontics</option>
                <option value="Orthodontics">Orthodontics</option>
                <option value="Restorative Dentistry">Restorative Dentistry</option>
                <option value="Oral Surgery">Oral Surgery</option>
                <option value="Periodontics">Periodontics</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Average Duration
              </label>
              <input
                type="text"
                placeholder="45-60 Mins"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Estimated Price Range (₹)
            </label>
            <input
              type="text"
              placeholder="₹3,000 - ₹5,500"
              value={formData.priceRange}
              onChange={(e) =>
                setFormData({ ...formData, priceRange: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Description &amp; Procedure Notes
            </label>
            <textarea
              rows={3}
              placeholder="Clinical description of steps and indications..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
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
              {editingTreatment ? "Save Changes" : "Create Service"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
