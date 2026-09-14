import { useAdmin } from "../../context/AdminContext";
import { StatusBadge } from "../common/Badge";
import {
  Phone,
  Mail,
  CheckCircle,
  Archive,
  Trash2,
  Calendar,
} from "lucide-react";

export function ContactEnquiries() {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } =
    useAdmin();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-[#083258]">
          Patient Inquiries &amp; Contact Messages ({enquiries.length})
        </h2>
        <p className="text-xs text-[#6B8BA2] mt-0.5">
          Messages received from the public website contact &amp; enquiry forms
        </p>
      </div>

      {/* Messages List */}
      {enquiries.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-12 text-center text-xs text-[#6B8BA2]">
          No contact inquiries received.
        </div>
      ) : (
        <div className="space-y-4">
          {enquiries.map((enq) => (
            <div
              key={enq.id}
              className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8F1F5] pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EBF4FB] text-[#026EB9] flex items-center justify-center font-bold text-xs">
                    {enq.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#083258]">
                        {enq.name}
                      </span>
                      <StatusBadge status={enq.status} />
                    </div>
                    <p className="text-xs font-semibold text-[#0AADA8] mt-0.5">
                      Subject: {enq.subject}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#6B8BA2]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {enq.date}
                  </span>
                </div>
              </div>

              {/* Message text */}
              <p className="text-xs text-[#426480] bg-[#F8FDFF] p-4 rounded-2xl border border-[#E8F1F5] leading-relaxed">
                "{enq.message}"
              </p>

              {/* Bottom Actions & Contact Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-4 text-xs font-medium text-[#426480]">
                  <a
                    href={`tel:${enq.phone}`}
                    className="flex items-center gap-1.5 hover:text-[#026EB9]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0AADA8]" />
                    <span>{enq.phone}</span>
                  </a>
                  <a
                    href={`mailto:${enq.email}`}
                    className="flex items-center gap-1.5 hover:text-[#026EB9]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#026EB9]" />
                    <span>{enq.email}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  {enq.status !== "Responded" && (
                    <button
                      onClick={() => updateEnquiryStatus(enq.id, "Responded")}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors cursor-pointer"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Mark Responded</span>
                    </button>
                  )}

                  {enq.status !== "Archived" && (
                    <button
                      onClick={() => updateEnquiryStatus(enq.id, "Archived")}
                      className="p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      title="Archive Enquiry"
                    >
                      <Archive className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (window.confirm("Delete this inquiry?")) {
                        deleteEnquiry(enq.id);
                      }
                    }}
                    className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
