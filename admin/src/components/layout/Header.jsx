import {
  Menu,
  Search,
  Bell,
  LogOut,
  CalendarClock,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { useAuth } from "../../context/AuthContext";

export function Header({ setMobileOpen }) {
  const { searchQuery, setSearchQuery, stats } = useAdmin();
  const { user, logout } = useAuth();
  const location = useLocation();

  const getTabTitle = () => {
    const path = location.pathname.replace(/^\//, "") || "dashboard";
    switch (path) {
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
          title: "Dental Tips Blog & Tips",
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

        {/* Quick Website Bookings Link & Count */}
        <Link
          to="/appointments"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8F8F8] hover:bg-[#D5ECF0] text-[#083258] text-xs font-semibold border border-[#BCEBE9] transition-all"
        >
          <CalendarClock className="w-3.5 h-3.5 text-[#0AADA8]" />
          <span className="hidden sm:inline">Online Bookings</span>
          <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#0AADA8] text-white">
            {stats.newAppointmentsCount}
          </span>
        </Link>

        {/* Notification indicator */}
        <div className="relative">
          <div className="p-2 rounded-xl border border-[#D5ECF0] text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
            <Bell className="w-4 h-4 text-[#083258]" />
            {stats.newAppointmentsCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center">
                {stats.newAppointmentsCount}
              </span>
            )}
          </div>
        </div>

        {/* User avatar badge & sign out */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#D5ECF0]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#083258] to-[#0AADA8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            {user?.avatarInitials || "AD"}
          </div>
          <div className="hidden xl:block text-left">
            <p className="text-xs font-bold text-[#083258] leading-tight">
              {user?.name || "Admin Doctor"}
            </p>
            <p className="text-[10px] text-[#0AADA8] font-medium">
              {user?.role || "Chief Clinic Admin"}
            </p>
          </div>

          {/* Quick Sign Out Button */}
          <button
            onClick={logout}
            title="Sign Out from Admin"
            className="p-1.5 ml-1 rounded-xl text-gray-500 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
            aria-label="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
