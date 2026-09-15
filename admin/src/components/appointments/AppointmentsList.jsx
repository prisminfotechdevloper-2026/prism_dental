import { useState, useMemo } from "react";
import { useAdmin } from "../../context/AdminContext";
import { PaymentBadge } from "../common/Badge";
import {
  Search,
  Calendar,
  Phone,
  MessageSquare,
  Eye,
  Edit2,
  Trash2,
  Download,
  Plus,
  Clock,
  Video,
} from "lucide-react";

export function AppointmentsList({
  onOpenDetail,
  onOpenEdit,
  onOpenWhatsApp,
}) {
  const {
    appointments,
    doctors,
    updateAppointmentStatus,
    deleteAppointment,
    searchQuery,
    setSearchQuery,
    showToast,
  } = useAdmin();

  const [statusFilter, setStatusFilter] = useState("all");
  const [doctorFilter, setDoctorFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const todayStr = new Date().toISOString().split("T")[0];
  const tomorrowStr = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  })();

  // Filtered appointments
  const filteredAppointments = useMemo(() => {
    return appointments.filter((apt) => {
      // Global / local search
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        apt.name.toLowerCase().includes(q) ||
        apt.phone.toLowerCase().includes(q) ||
        (apt.email && apt.email.toLowerCase().includes(q)) ||
        apt.treatment.toLowerCase().includes(q) ||
        apt.doctor.toLowerCase().includes(q) ||
        apt.id.toLowerCase().includes(q);

      // Status filter
      const matchStatus =
        statusFilter === "all" ||
        apt.status.toLowerCase() === statusFilter.toLowerCase();

      // Doctor filter
      const matchDoctor =
        doctorFilter === "all" || apt.doctor === doctorFilter;

      // Date filter
      let matchDate = true;
      if (dateFilter === "today") {
        matchDate = apt.date === todayStr;
      } else if (dateFilter === "tomorrow") {
        matchDate = apt.date === tomorrowStr;
      }

      return matchSearch && matchStatus && matchDoctor && matchDate;
    });
  }, [appointments, searchQuery, statusFilter, doctorFilter, dateFilter, todayStr, tomorrowStr]);

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Patient Name",
      "Phone",
      "Email",
      "Treatment",
      "Doctor",
      "Date",
      "Time Slot",
      "Status",
      "Payment Status",
      "Fee",
      "Notes",
    ];

    const rows = filteredAppointments.map((a) => [
      a.id,
      `"${a.name}"`,
      `"${a.phone}"`,
      `"${a.email || ""}"`,
      `"${a.treatment}"`,
      `"${a.doctor}"`,
      a.date,
      `"${a.timeSlot}"`,
      a.status,
      a.paymentStatus,
      `"${a.paymentAmount || ""}"`,
      `"${(a.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `smilecare-appointments-${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Appointment roster exported to CSV");
  };

  return (
    <div className="space-y-6">
      {/* Filters & Actions Bar */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] p-4 sm:p-5 shadow-xs space-y-4">
        {/* Top bar: Tabs & Export/Create */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5FBFC] rounded-2xl border border-[#E4F3F5] w-full lg:w-auto">
            {[
              { id: "all", label: "All Enquiries", count: appointments.length },
              {
                id: "new",
                label: "New",
                count: appointments.filter((a) => a.status === "New").length,
              },
              {
                id: "confirmed",
                label: "Confirmed",
                count: appointments.filter((a) => a.status === "Confirmed").length,
              },
              {
                id: "completed",
                label: "Completed",
                count: appointments.filter((a) => a.status === "Completed").length,
              },
              {
                id: "cancelled",
                label: "Cancelled",
                count: appointments.filter((a) => a.status === "Cancelled").length,
              },
            ].map((tab) => {
              const active = statusFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-white text-[#083258] shadow-xs"
                      : "text-[#6B8BA2] hover:text-[#083258]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      active
                        ? "bg-[#E8F8F8] text-[#0AADA8] font-bold"
                        : "bg-gray-200/60 text-gray-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-end lg:self-center">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#083258] bg-[#F5FBFC] hover:bg-[#E8F1F5] rounded-xl border border-[#D5ECF0] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#0AADA8]" />
              <span>Export CSV</span>
            </button>

            <div className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#083258] bg-[#E8F8F8] border border-[#BCEBE9] rounded-xl shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0AADA8] animate-pulse"></span>
              <span>Website Bookings Live</span>
            </div>
          </div>
        </div>

        {/* Secondary Filter Bar: Search, Doctor & Date select */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#E8F1F5]">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by patient name, phone, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] placeholder-[#6B8BA2] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
            />
          </div>

          {/* Doctor Filter */}
          <div>
            <select
              value={doctorFilter}
              onChange={(e) => setDoctorFilter(e.target.value)}
              className="w-full px-3 py-1.5 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8] cursor-pointer"
            >
              <option value="all">Filter: All Specialist Doctors</option>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Filter */}
          <div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-3 py-1.5 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8] cursor-pointer"
            >
              <option value="all">Schedule: All Dates</option>
              <option value="today">Today's Appointments</option>
              <option value="tomorrow">Tomorrow's Schedule</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointments Data Table */}
      <div className="bg-white rounded-3xl border border-[#D5ECF0] shadow-xs overflow-hidden">
        {filteredAppointments.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#083258]">
              No appointments found
            </h3>
            <p className="text-xs text-[#6B8BA2] max-w-sm mx-auto">
              No appointments found matching your selected search terms or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setDoctorFilter("all");
                setDateFilter("all");
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-xl transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E8F1F5] bg-[#F8FDFF] text-[11px] font-bold uppercase tracking-wider text-[#6B8BA2]">
                  <th className="py-3 px-4">Patient Info</th>
                  <th className="py-3 px-4">Treatment</th>
                  <th className="py-3 px-4">Assigned Doctor</th>
                  <th className="py-3 px-4">Date &amp; Slot</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8F1F5] text-xs">
                {filteredAppointments.map((apt) => (
                  <tr
                    key={apt.id}
                    className="hover:bg-[#F5FBFC]/80 transition-colors group"
                  >
                    {/* Patient Info */}
                    <td className="py-3.5 px-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#083258] text-[13px]">
                            {apt.name}
                          </span>
                          <span className="text-[10px] text-[#6B8BA2] font-mono">
                            {apt.id}
                          </span>
                          <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-md bg-[#E8F8F8] text-[#0AADA8] border border-[#BCEBE9]">
                            Website
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[#426480] text-[11px] mt-0.5">
                          <a
                            href={`tel:${apt.phone}`}
                            className="hover:text-[#026EB9] flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3 text-[#0AADA8]" />
                            {apt.phone}
                          </a>
                        </div>
                      </div>
                    </td>

                    {/* Treatment */}
                    <td className="py-3.5 px-4">
                      <div>
                        <p className="font-medium text-[#083258] truncate max-w-[200px]">
                          {apt.treatment}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <PaymentBadge status={apt.paymentStatus} />
                          {apt.onlineConsultation && (
                            <span className="text-[10px] text-[#026EB9] flex items-center gap-0.5">
                              <Video className="w-3 h-3" /> Online
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Assigned Doctor */}
                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-[#083258]">{apt.doctor}</p>
                      <p className="text-[11px] text-[#6B8BA2]">Specialist</p>
                    </td>

                    {/* Date & Slot */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 font-semibold text-[#083258]">
                        <Calendar className="w-3 h-3 text-[#0AADA8]" />
                        <span>{apt.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#426480] mt-0.5">
                        <Clock className="w-3 h-3 text-[#6B8BA2]" />
                        <span>{apt.timeSlot}</span>
                      </div>
                    </td>

                    {/* Status with Quick Dropdown */}
                    <td className="py-3.5 px-4">
                      <select
                        value={apt.status}
                        onChange={(e) =>
                          updateAppointmentStatus(apt.id, e.target.value)
                        }
                        className="text-xs font-semibold rounded-lg px-2 py-1 border border-[#D5ECF0] bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0AADA8]"
                      >
                        <option value="New">🟡 New</option>
                        <option value="Confirmed">🟢 Confirmed</option>
                        <option value="Completed">🔵 Completed</option>
                        <option value="Cancelled">🔴 Cancelled</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* WhatsApp launcher */}
                        <button
                          title="Send WhatsApp Notification"
                          onClick={() => onOpenWhatsApp(apt)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            apt.whatsappSent
                              ? "bg-emerald-50 border-emerald-200 text-[#25D366]"
                              : "border-[#D5ECF0] text-gray-500 hover:bg-emerald-50 hover:text-[#25D366] hover:border-emerald-300"
                          }`}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>

                        {/* View Details */}
                        <button
                          title="View Full Patient Dossier"
                          onClick={() => onOpenDetail(apt)}
                          className="p-1.5 rounded-lg border border-[#D5ECF0] text-[#083258] hover:bg-[#F5FBFC] hover:border-[#0AADA8] transition-all cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Edit */}
                        <button
                          title="Edit Appointment"
                          onClick={() => onOpenEdit(apt)}
                          className="p-1.5 rounded-lg border border-[#D5ECF0] text-[#426480] hover:bg-blue-50 hover:text-[#026EB9] transition-all cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        {/* Delete */}
                        <button
                          title="Delete Appointment"
                          onClick={() => {
                            if (
                              window.confirm(
                                `Delete appointment ${apt.id} for ${apt.name}?`
                              )
                            ) {
                              deleteAppointment(apt.id);
                            }
                          }}
                          className="p-1.5 rounded-lg border border-[#D5ECF0] text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
