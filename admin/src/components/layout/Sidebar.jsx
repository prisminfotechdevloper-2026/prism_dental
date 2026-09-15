import {
  LayoutDashboard,
  CalendarClock,
  UserRoundCheck,
  Stethoscope,
  MessageSquareText,
  Star,
  Images,
  BookOpenText,
  Settings,
  ExternalLink,
  RotateCcw,
  Phone,
  MessageSquare,
  MapPin,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { useAuth } from "../../context/AuthContext";

export function Sidebar({ mobileOpen, setMobileOpen }) {
  const { currentTab, setCurrentTab, stats, settings, resetToFactoryData } =
    useAdmin();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const NAV_ITEMS = [
    {
      id: "dashboard",
      name: "Dashboard Overview",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      id: "appointments",
      name: "Appointments",
      icon: CalendarClock,
      path: "/appointments",
      badge: stats.newAppointmentsCount > 0 ? stats.newAppointmentsCount : null,
      badgeColor: "bg-amber-500",
    },
    {
      id: "doctors",
      name: "Dental Doctors",
      icon: UserRoundCheck,
      path: "/doctors",
    },
    {
      id: "treatments",
      name: "Treatments Catalog",
      icon: Stethoscope,
      path: "/treatments",
    },
    {
      id: "enquiries",
      name: "Patient Messages",
      icon: MessageSquareText,
      path: "/enquiries",
      badge: stats.newEnquiriesCount > 0 ? stats.newEnquiriesCount : null,
      badgeColor: "bg-[#026EB9]",
    },
    {
      id: "testimonials",
      name: "Patient Reviews",
      icon: Star,
      path: "/testimonials",
    },
    {
      id: "gallery",
      name: "Before & After Gallery",
      icon: Images,
      path: "/gallery",
    },
    {
      id: "blog",
      name: "Dental Tips Blog",
      icon: BookOpenText,
      path: "/blog",
    },
    {
      id: "settings",
      name: "Clinic Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const handleNavClick = (item) => {
    setCurrentTab(item.id);
    navigate(item.path);
    if (setMobileOpen) setMobileOpen(false);
  };

  const isItemActive = (item) => {
    if (item.path === "/") {
      return location.pathname === "/" || location.pathname === "/dashboard";
    }
    return location.pathname === item.path;
  };

  const rawPhone = (settings.whatsapp || settings.phone || "8239239249").replace(
    /[^0-9]/g,
    ""
  );
  const cleanWaNumber =
    rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#083258] border-r border-[#062442] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-xl ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Branding */}
        <div>
          <div className="p-5 border-b border-white/10 flex items-center gap-3 bg-[#062544]/80">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-xs">
              <img
                src="/logo.png"
                alt="Prism Dental"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[15px] text-white tracking-tight">
                  Prism Dental
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#0AADA8] text-white">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-[#93B4CB] font-medium truncate">
                Clinic Management Portal
              </p>
            </div>
          </div>

          {/* Direct Company Contact Bar */}
          <div className="px-4 py-2.5 bg-[#051C33] border-b border-white/10 text-[11px] space-y-1.5">
            <div className="flex items-center justify-between text-[#C2DBEC]">
              <span className="font-semibold text-white/90 flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#16C4BE]" />
                Call Helpline:
              </span>
              <a
                href={`tel:${settings.phone || "8239239249"}`}
                className="font-bold text-[#16C4BE] hover:underline"
              >
                {settings.phone || "8239239249"}
              </a>
            </div>

            <div className="flex items-center justify-between text-[#C2DBEC]">
              <span className="font-semibold text-white/90 flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                WhatsApp:
              </span>
              <a
                href={`https://wa.me/${cleanWaNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 hover:underline flex items-center gap-0.5"
              >
                {settings.whatsapp || "8239239249"}
              </a>
            </div>

            <div className="flex items-start gap-1 text-[10px] text-[#7A9EB8] pt-0.5 border-t border-white/10">
              <MapPin className="w-3 h-3 text-[#16C4BE] shrink-0 mt-0.5" />
              <span className="truncate">{settings.address || "Ramganjmandi, Kota, Rajasthan"}</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-360px)]">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#7A9EB8]">
              Main Menu
            </div>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isItemActive(item);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#0AADA8] to-[#089692] text-white shadow-[0_4px_16px_rgba(10,173,168,0.35)] font-bold"
                      : "text-[#C2DBEC] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        active ? "text-white" : "text-[#7A9EB8]"
                      }`}
                    />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${
                        item.badgeColor || "bg-amber-500"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Website Link */}
        <div className="p-3 border-t border-white/10 space-y-2 bg-[#051C33]">
          {/* Quick link to public website */}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-[#16C4BE] hover:bg-white/10 rounded-xl transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              View Public Website
            </span>
            <span className="text-[10px] bg-[#0AADA8]/20 text-[#16C4BE] border border-[#0AADA8]/30 px-1.5 py-0.2 rounded font-semibold">
              Live
            </span>
          </a>

          {/* Reset Demo Data Button */}
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to restore default clinic seed data?"
                )
              ) {
                resetToFactoryData();
              }
            }}
            className="w-full flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium text-[#7A9EB8] hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restore Sample Data
          </button>

          {/* Sign Out Action Button */}
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-rose-300 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out Admin</span>
          </button>

          {/* Clinic status indicator */}
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <div className="truncate">
              <p className="font-semibold text-white leading-tight">
                Clinic System Online
              </p>
              <p className="text-[#93B4CB] text-[10px]">
                {stats.availableDoctorsCount} Doctors Available Now
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
