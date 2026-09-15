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
  LogOut,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";
import { useAuth } from "../../context/AuthContext";

export function Sidebar({ mobileOpen, setMobileOpen }) {
  const { setCurrentTab, stats, resetToFactoryData } = useAdmin();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const NAV_SECTIONS = [
    {
      title: "Clinic Operations",
      items: [
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
          id: "enquiries",
          name: "Patient Messages",
          icon: MessageSquareText,
          path: "/enquiries",
          badge: stats.newEnquiriesCount > 0 ? stats.newEnquiriesCount : null,
          badgeColor: "bg-[#026EB9]",
        },
      ],
    },
    {
      title: "Clinical Management",
      items: [
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
          id: "gallery",
          name: "Before & After Gallery",
          icon: Images,
          path: "/gallery",
        },
      ],
    },
    {
      title: "Content & Reviews",
      items: [
        {
          id: "testimonials",
          name: "Patient Reviews",
          icon: Star,
          path: "/testimonials",
        },
        {
          id: "blog",
          name: "Dental Tips Blog",
          icon: BookOpenText,
          path: "/blog",
        },
      ],
    },
    {
      title: "Settings & System",
      items: [
        {
          id: "settings",
          name: "Clinic Settings",
          icon: Settings,
          path: "/settings",
        },
      ],
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

  return (
    <>
      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#083258] border-r border-[#062442] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-2xl ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Branding Section */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#062544]/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-sm">
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
              <p className="text-[11px] text-[#93B4CB] font-medium">
                Clinic Management
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-1">
              <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#7A9EB8]">
                {section.title}
              </div>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = isItemActive(item);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer group ${
                        active
                          ? "bg-gradient-to-r from-[#0AADA8] to-[#089692] text-white shadow-[0_4px_14px_rgba(10,173,168,0.35)] font-bold"
                          : "text-[#C2DBEC] hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                            active
                              ? "text-white scale-105"
                              : "text-[#7A9EB8] group-hover:text-white group-hover:scale-105"
                          }`}
                        />
                        <span className="truncate">{item.name}</span>
                      </div>
                      {item.badge ? (
                        <span
                          className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 ${
                            item.badgeColor || "bg-amber-500"
                          }`}
                        >
                          {item.badge}
                        </span>
                      ) : active ? (
                        <ChevronRight className="w-3.5 h-3.5 text-white/70" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Profile & Session Management */}
        <div className="p-3 border-t border-white/10 space-y-2 bg-[#051C33] shrink-0">
          {/* Admin User Profile Card */}
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0AADA8] to-[#026EB9] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs">
                {user?.avatarInitials || "PA"}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white text-xs truncate leading-tight">
                  {user?.name || "Prism Admin"}
                </p>
                <p className="text-[10px] text-[#93B4CB] truncate">
                  {user?.email || "contact.prisminfotech@gmail.com"}
                </p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34d399]" title="Session active" />
          </div>

          {/* Action: View Public Website */}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-[#16C4BE] hover:bg-white/10 rounded-xl transition-colors group"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              View Public Website
            </span>
            <span className="text-[10px] bg-[#0AADA8]/20 text-[#16C4BE] border border-[#0AADA8]/30 px-1.5 py-0.2 rounded font-bold">
              Live
            </span>
          </a>

          {/* Action: Restore Demo Seed Data */}
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
            <span>Restore Sample Data</span>
          </button>

          {/* Sign Out Button */}
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-rose-300 hover:bg-rose-500/20 hover:text-rose-200 border border-rose-500/30 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out Admin</span>
          </button>
        </div>
      </aside>
    </>
  );
}
