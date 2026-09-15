import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Star, CheckCircle, Trash2, ShieldCheck, MessageSquare, AlertCircle } from "lucide-react";

export function TestimonialsManager() {
  const {
    testimonials,
    toggleTestimonialFeatured,
    toggleTestimonialVerified,
    deleteTestimonial,
  } = useAdmin();

  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (item) => {
    if (
      window.confirm(
        `Are you sure you want to permanently delete the review by "${item.patientName}"? This cannot be undone.`
      )
    ) {
      setDeletingId(item.id);
      await deleteTestimonial(item.id);
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-[#083258]">
              Patient Reviews &amp; Testimonials ({testimonials.length})
            </h2>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E8F8F8] text-[#0AADA8] border border-[#BCEBE9]">
              Live From Website
            </span>
          </div>
          <p className="text-xs text-[#6B8BA2] mt-1">
            Patient reviews submitted from the website. Clinic admin can moderate reviews and remove invalid or spam submissions.
          </p>
        </div>

        {/* Live sync indicator */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F5FBFC] border border-[#D5ECF0] text-xs font-semibold text-[#083258] self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Website Live Stream Active</span>
        </div>
      </div>

      {/* Testimonials Grid */}
      {testimonials.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-12 text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center mx-auto">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-[#083258]">
            No Patient Reviews in Database
          </h3>
          <p className="text-xs text-[#6B8BA2] max-w-sm mx-auto">
            When patients share their experience on the website, their reviews and photos will appear here for admin moderation.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Bar: Profile Photo, Name, Rating */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  {/* Avatar / Cloudinary Photo */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs bg-[#E8F8F8] flex items-center justify-center shrink-0 ring-1 ring-[#D5ECF0]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.patientName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <span className="text-base font-extrabold text-[#0AADA8]">
                        {item.patientName?.charAt(0) || "P"}
                      </span>
                    )}
                  </div>

                  {/* Name + Source Tag */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[#083258] truncate">
                        {item.patientName}
                      </h4>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-slate-100 text-slate-500 shrink-0">
                        #{String(item.id).slice(-4)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < (item.rating || 5)
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-[#F59E0B]">
                        {item.rating || 5}.0
                      </span>
                    </div>

                    <p className="text-[11px] text-[#0AADA8] font-semibold truncate mt-0.5">
                      {item.treatment || "General Dental Care"}
                    </p>
                  </div>
                </div>

                {/* Review Quote */}
                <div className="p-3 rounded-2xl bg-[#F8FDFF] border border-[#E8F1F5] mb-3">
                  <p className="text-xs text-[#426480] italic leading-relaxed line-clamp-4">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Date and verified badge */}
                <div className="flex items-center justify-between text-[11px] text-[#6B8BA2] mb-1 px-1">
                  <span>{item.date || "Recent"}</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-[#E8F8F8] text-[#0AADA8]">
                    Website Submission
                  </span>
                </div>
              </div>

              {/* Bottom Actions: Toggle Featured / Verified & Delete */}
              <div className="pt-3.5 mt-2 border-t border-[#E8F1F5] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleTestimonialVerified(item.id)}
                    className={`text-[11px] font-medium flex items-center gap-1 px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                      item.verified
                        ? "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
                        : "text-gray-400 bg-gray-50 hover:bg-gray-100"
                    }`}
                    title="Click to toggle verified status"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{item.verified ? "Verified" : "Unverified"}</span>
                  </button>

                  <button
                    onClick={() => toggleTestimonialFeatured(item.id)}
                    className={`text-[10px] font-bold px-2 py-1 rounded-lg cursor-pointer transition-colors ${
                      item.featured
                        ? "bg-amber-100 text-amber-800"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    title="Click to toggle featured status on website"
                  >
                    {item.featured ? "★ Featured" : "Standard"}
                  </button>
                </div>

                {/* Prominent Delete Button */}
                <button
                  onClick={() => handleDelete(item)}
                  disabled={deletingId === item.id}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-xl transition-all cursor-pointer shadow-2xs"
                  title="Permanently remove this review from database"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
