import {
  Menu,
  Search,
  Plus,
  Bell,
} from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

export function Header({ setMobileOpen, onOpenNewAppointment }) {
  const { currentTab, searchQuery, setSearchQuery, stats } = useAdmin();

  const getTabTitle = () => {
    switch (currentTab) {
      case "dashboard":
        return {
          title: "Clinic Operations & Analytics",
          subtitle: "Real-time appointments, patient flow & doctor schedules",
        };
      case "appointments":
        return {
          title: "Appointment Management",
          subtitle: "Review enquiries, assign doctors & trigger WhatsApp reminders",
        };
      case "doctors":
        return {
          title: "Dental Doctors & Specialists",
          subtitle: "Manage specialist profiles, consultation hours & availability",
        };
      case "treatments":
        return {
          title: "Treatments & Clinical Services",
          subtitle: "Catalog of dental procedures, pricing ranges & session durations",
        };
      case "enquiries":
        return {
          title: "Contact Form Inquiries",
          subtitle: "Patient messages submitted from website contact page",
        };
      case "testimonials":
        return {
          title: "Patient Reviews & Testimonials",
          subtitle: "Manage verified ratings and homepage featured feedback",
        };
      case "gallery":
        return {
          title: "Before & After Clinical Cases",
          subtitle: "Document smile transformations with verified patient consent",
        };
      case "blog":
        return {
          title: "Dental Care Blog & Tips",
          subtitle: "Publish patient education articles and oral health guides",
        };
      case "settings":
        return {
          title: "Clinic Portal Configuration",
          subtitle: "Emergency helpline, automated notifications & clinic details",
        };
      default:
        return {
          title: "Admin Dashboard",
          subtitle: "Prism Dental Clinic",
        };
    }
  };

  const { title, subtitle } = getTabTitle();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#D5ECF0] px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Left: Mobile hamburger & title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 rounded-xl text-gray-600 hover:bg-gray-100 lg:hidden cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-base sm:text-lg font-bold text-[#083258] leading-tight flex items-center gap-2">
            {title}
          </h1>
          <p className="text-xs text-[#6B8BA2] hidden sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Center/Right: Quick Search & Actions */}
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <div className="relative hidden md:block w-64">
          <Search className="w-4 h-4 text-[#6B8BA2] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search patient, phone, doc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl border border-[#D5ECF0] text-xs text-[#083258] placeholder-[#6B8BA2] bg-[#F8FDFF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
          />
        </div>

        {/* Quick New Appointment Button */}
        <button
          onClick={onOpenNewAppointment}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">New Appointment</span>
        </button>

        {/* Notification indicator */}
        <div className="relative">
          <div className="p-2 rounded-xl border border-[#D5ECF0] text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
            <Bell className="w-4 h-4 text-[#083258]" />
            {stats.newAppointmentsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            )}
          </div>
        </div>

        {/* User avatar badge */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#D5ECF0]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#083258] to-[#0AADA8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            AD
          </div>
          <div className="hidden xl:block text-left">
            <p className="text-xs font-bold text-[#083258] leading-tight">Admin Doctor</p>
            <p className="text-[10px] text-[#0AADA8] font-medium">Chief Clinic Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
