import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { StatusBadge } from "../common/Badge";
import {
  CalendarDays,
  Clock,
  UserCheck,
  AlertCircle,
  CalendarClock,
  MessageSquare,
  ArrowUpRight,
  TrendingUp,
  Calendar,
  Sparkles,
} from "lucide-react";

export function DashboardOverview({
  onOpenDetail,
  onOpenWhatsApp,
}) {
  const {
    appointments,
    doctors,
    enquiries,
    stats,
    setCurrentTab,
    updateAppointmentStatus,
  } = useAdmin();
  const navigate = useNavigate();

  const todayStr = new Date().toISOString().split("T")[0];
  const todayAppointments = appointments.filter((a) => a.date === todayStr);
  const pendingEnquiries = appointments.filter((a) => a.status === "New");

  return (
    <div className="space-y-6">
      {/* ── 1. KPI STATS SUMMARY CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Appointments */}
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B8BA2]">
              Total Bookings
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#E8F8F8] text-[#0AADA8] flex items-center justify-center">
              <CalendarDays className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#083258]">
              {stats.totalAppointments}
            </span>
            <span className="text-xs font-semibold text-[#0AADA8] flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
              All-time
            </span>
          </div>
          <p className="text-xs text-[#6B8BA2] mt-1">
            {stats.completedAppointmentsCount} Completed successfully
          </p>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-3xl border border-[#BCEBE9] p-5 shadow-xs hover:shadow-md transition-shadow bg-gradient-to-br from-white to-[#F5FBFC]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0AADA8]">
              Today's Schedule
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#0AADA8] text-white flex items-center justify-center shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#083258]">
              {todayAppointments.length}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              Today
            </span>
          </div>
          <p className="text-xs text-[#426480] mt-1">
            {todayAppointments.filter((a) => a.status === "Confirmed").length} Confirmed for today
          </p>
        </div>

        {/* New Pending Enquiries */}
        <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Action Required
            </span>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#083258]">
              {stats.newAppointmentsCount}
            </span>
            <span className="text-xs font-semibold text-amber-600">
              New Enquiries
            </span>
          </div>
          <button
            onClick={() => setCurrentTab("appointments")}
            className="text-xs text-[#026EB9] hover:underline font-semibold mt-1 flex items-center gap-1 cursor-pointer"
          >
            Review Enquiries <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Active Specialist Doctors */}
        <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B8BA2]">
              Specialists On Duty
            </span>
            <div className="w-10 h-10 rounded-2xl bg-[#EBF4FB] text-[#026EB9] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#083258]">
              {stats.availableDoctorsCount}
            </span>
            <span className="text-xs text-[#6B8BA2]">
              / {stats.totalDoctorsCount} Total
            </span>
          </div>
          <p className="text-xs text-emerald-600 font-medium mt-1">
            Clinic operating at regular capacity
          </p>
        </div>
      </div>

      {/* ── 2. QUICK ACTIONS BAR ── */}
      <div className="bg-gradient-to-r from-[#083258] to-[#0AADA8] rounded-3xl p-5 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-[#16C4BE]" />
            <h2 className="text-sm sm:text-base font-bold tracking-tight">
              Quick Operations Hub
            </h2>
          </div>
          <p className="text-xs text-white/80">
            Review incoming website bookings, notify patients via WhatsApp, or manage clinical staff
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => {
              setCurrentTab("appointments");
              navigate("/appointments");
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#083258] hover:bg-[#F5FBFC] text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <CalendarClock className="w-3.5 h-3.5 text-[#0AADA8]" />
            <span>Manage Appointments ({stats.newAppointmentsCount} New)</span>
          </button>
          <button
            onClick={() => {
              setCurrentTab("appointments");
              navigate("/appointments");
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>All Bookings ({appointments.length})</span>
          </button>
          <button
            onClick={() => setCurrentTab("doctors")}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>View Doctors</span>
          </button>
        </div>
      </div>

      {/* ── 3. TWO-COLUMN MAIN WORKFLOW ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT (8 cols): Today's Schedule & Actionable Enquiries */}
        <div className="lg:col-span-8 space-y-6">
          {/* Today's Schedule Card */}
          <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8F1F5] pb-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#083258] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0AADA8]" />
                  Today's Patient Schedule ({todayAppointments.length})
                </h3>
                <p className="text-xs text-[#6B8BA2]">
                  Consultations scheduled for today: {todayStr}
                </p>
              </div>
              <button
                onClick={() => setCurrentTab("appointments")}
                className="text-xs font-semibold text-[#026EB9] hover:underline cursor-pointer"
              >
                View Full Calendar
              </button>
            </div>

            {todayAppointments.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#6B8BA2]">
                No appointments booked for today.
              </div>
            ) : (
              <div className="divide-y divide-[#E8F1F5] space-y-3">
                {todayAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#EBF4FB] text-[#026EB9] flex flex-col items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-[#083258]">
                            {apt.name}
                          </span>
                          <StatusBadge status={apt.status} />
                        </div>
                        <p className="text-xs text-[#426480] font-medium">
                          {apt.treatment} • {apt.doctor}
                        </p>
                        <p className="text-[11px] text-[#6B8BA2] mt-0.5">
                          ⏰ {apt.timeSlot} • 📞 {apt.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 self-end sm:self-center">
                      <button
                        onClick={() => onOpenWhatsApp(apt)}
                        title="WhatsApp Patient"
                        className="p-1.5 rounded-lg border border-[#D5ECF0] text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onOpenDetail(apt)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#F5FBFC] border border-[#D5ECF0] text-[#083258] hover:bg-[#E8F1F5] cursor-pointer"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending New Enquiries needing Confirmation */}
          {pendingEnquiries.length > 0 && (
            <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
                  <h3 className="text-sm font-bold text-[#083258]">
                    New Enquiries Waiting for Confirmation ({pendingEnquiries.length})
                  </h3>
                </div>
                <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold">
                  Priority
                </span>
              </div>

              <div className="space-y-2">
                {pendingEnquiries.slice(0, 3).map((enq) => (
                  <div
                    key={enq.id}
                    className="p-3 rounded-2xl bg-[#FFFDF5] border border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#083258]">
                          {enq.name}
                        </span>
                        <span className="text-[11px] text-[#6B8BA2]">
                          ({enq.phone})
                        </span>
                      </div>
                      <p className="text-xs text-[#426480] mt-0.5">
                        Requested: <strong>{enq.treatment}</strong> on {enq.date} ({enq.timeSlot})
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => updateAppointmentStatus(enq.id, "Confirmed")}
                        className="px-3 py-1 text-xs font-bold text-white bg-[#0AADA8] hover:bg-[#089692] rounded-lg shadow-xs cursor-pointer"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => onOpenWhatsApp(enq)}
                        className="p-1 rounded-lg border border-emerald-300 text-emerald-600 hover:bg-emerald-50 cursor-pointer"
                        title="Send WhatsApp Confirmation"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT (4 cols): Breakdown & Specialist Availability */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status Breakdown Card */}
          <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">
              Appointment Status Breakdown
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#0AADA8]">Confirmed Slots</span>
                  <span className="text-[#083258] font-bold">
                    {stats.confirmedAppointmentsCount}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-[#0AADA8] rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (stats.confirmedAppointmentsCount /
                          (stats.totalAppointments || 1)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-emerald-700">Completed Visits</span>
                  <span className="text-[#083258] font-bold">
                    {stats.completedAppointmentsCount}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (stats.completedAppointmentsCount /
                          (stats.totalAppointments || 1)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-amber-600">New Enquiries</span>
                  <span className="text-[#083258] font-bold">
                    {stats.newAppointmentsCount}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (stats.newAppointmentsCount /
                          (stats.totalAppointments || 1)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-rose-600">Cancelled</span>
                  <span className="text-[#083258] font-bold">
                    {stats.cancelledAppointmentsCount}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-rose-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (stats.cancelledAppointmentsCount /
                          (stats.totalAppointments || 1)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Specialist Doctors Roster Card */}
          <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#E8F1F5] pb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">
                Doctor Availability
              </h3>
              <button
                onClick={() => setCurrentTab("doctors")}
                className="text-[11px] font-semibold text-[#026EB9] hover:underline cursor-pointer"
              >
                Manage
              </button>
            </div>

            <div className="space-y-2.5">
              {doctors.slice(0, 4).map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between text-xs p-2 rounded-xl hover:bg-[#F5FBFC] transition-colors"
                >
                  <div className="truncate">
                    <p className="font-bold text-[#083258] truncate">{doc.name}</p>
                    <p className="text-[11px] text-[#6B8BA2] truncate">
                      {doc.specialty}
                    </p>
                  </div>
                  <div className="shrink-0">
                    {doc.available ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        On Duty
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        Off Duty
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Website Contact Messages Card */}
          <div className="bg-white rounded-3xl border border-[#D5ECF0] p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#E8F1F5] pb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#083258]">
                Recent Contact Messages
              </h3>
              <button
                onClick={() => setCurrentTab("enquiries")}
                className="text-[11px] font-semibold text-[#026EB9] hover:underline cursor-pointer"
              >
                All ({enquiries.length})
              </button>
            </div>

            <div className="space-y-2">
              {enquiries.slice(0, 2).map((msg) => (
                <div
                  key={msg.id}
                  className="p-2.5 rounded-xl bg-[#F8FDFF] border border-[#D5ECF0] text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#083258]">{msg.name}</span>
                    <span className="text-[10px] text-[#6B8BA2]">{msg.date}</span>
                  </div>
                  <p className="text-[#426480] text-[11px] line-clamp-2">
                    "{msg.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
