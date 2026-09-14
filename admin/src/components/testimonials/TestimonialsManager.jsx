import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Modal } from "../common/Modal";
import { Star, Plus, CheckCircle, Trash2 } from "lucide-react";

export function TestimonialsManager() {
  const {
    testimonials,
    addTestimonial,
    toggleTestimonialFeatured,
    toggleTestimonialVerified,
    deleteTestimonial,
  } = useAdmin();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    treatment: "Cosmetic Smile Design",
    rating: 5,
    comment: "",
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(formData);
    setIsModalOpen(false);
    setFormData({
      patientName: "",
      treatment: "Cosmetic Smile Design",
      rating: 5,
      comment: "",
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#083258]">
            Patient Testimonials &amp; Reviews ({testimonials.length})
          </h2>
          <p className="text-xs text-[#6B8BA2] mt-0.5">
            Manage patient review cards displayed across homepage and testimonials section
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl shadow-xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Patient Review</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Top rating and flags */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating
                          ? "text-amber-500 fill-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleTestimonialFeatured(item.id)}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full cursor-pointer transition-colors ${
                      item.featured
                        ? "bg-amber-100 text-amber-800"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.featured ? "Featured" : "Standard"}
                  </button>
                </div>
              </div>

              {/* Comment */}
              <p className="text-xs text-[#426480] italic leading-relaxed mb-4">
                "{item.comment}"
              </p>

              {/* Patient info */}
              <div className="border-t border-[#E8F1F5] pt-3">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-xs text-[#083258]">
                    {item.patientName}
                  </p>
                  <span className="text-[10px] text-[#6B8BA2]">{item.date}</span>
                </div>
                <p className="text-[11px] text-[#0AADA8] font-semibold mt-0.5">
                  Treatment: {item.treatment}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 mt-3 border-t border-[#E8F1F5] flex items-center justify-between">
              <button
                onClick={() => toggleTestimonialVerified(item.id)}
                className={`text-[11px] font-medium flex items-center gap-1 cursor-pointer ${
                  item.verified ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{item.verified ? "Verified Patient" : "Unverified"}</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm("Delete this patient review?")) {
                    deleteTestimonial(item.id);
                  }
                }}
                className="p-1 text-gray-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Patient Testimonial"
        subtitle="Record patient feedback, treatment category, and star rating"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Patient Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Shalini Deshpande"
              value={formData.patientName}
              onChange={(e) =>
                setFormData({ ...formData, patientName: e.target.value })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Treatment
              </label>
              <input
                type="text"
                placeholder="Dental Implants"
                value={formData.treatment}
                onChange={(e) =>
                  setFormData({ ...formData, treatment: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] focus:ring-2 focus:ring-[#0AADA8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
                Star Rating
              </label>
              <select
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: Number(e.target.value) })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-white focus:ring-2 focus:ring-[#0AADA8] focus:outline-none cursor-pointer"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                <option value={3}>⭐⭐⭐ (3 Stars)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#083258] mb-1">
              Review Testimonial *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Patient's experience and words regarding treatment and doctor care..."
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
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
              Add Review
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
