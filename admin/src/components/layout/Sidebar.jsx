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
} from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

export function Sidebar({ mobileOpen, setMobileOpen }) {
  const { currentTab, setCurrentTab, stats, settings, resetToFactoryData } =
    useAdmin();

  const NAV_ITEMS = [
    {
      id: "dashboard",
      name: "Dashboard Overview",
      icon: LayoutDashboard,
    },
    {
      id: "appointments",
      name: "Appointments",
      icon: CalendarClock,
      badge: stats.newAppointmentsCount > 0 ? stats.newAppointmentsCount : null,
      badgeColor: "bg-amber-500",
    },
    {
      id: "doctors",
      name: "Dental Doctors",
      icon: UserRoundCheck,
    },
    {
      id: "treatments",
      name: "Treatments Catalog",
      icon: Stethoscope,
    },
    {
      id: "enquiries",
      name: "Patient Messages",
      icon: MessageSquareText,
      badge: stats.newEnquiriesCount > 0 ? stats.newEnquiriesCount : null,
      badgeColor: "bg-[#026EB9]",
    },
    {
      id: "testimonials",
      name: "Patient Reviews",
      icon: Star,
    },
    {
      id: "gallery",
      name: "Before & After Gallery",
      icon: Images,
    },
    {
      id: "blog",
      name: "Dental Tips Blog",
      icon: BookOpenText,
    },
    {
      id: "settings",
      name: "Clinic Settings",
      icon: Settings,
    },
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    if (setMobileOpen) setMobileOpen(false);
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
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white border-r border-[#D5ECF0] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Branding */}
        <div>
          <div className="p-5 border-b border-[#E8F1F5] flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8F8F8] border border-[#BCEBE9] flex items-center justify-center p-1.5 shadow-xs">
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
                <span className="font-extrabold text-[15px] text-[#083258] tracking-tight">
                  Prism Dental
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#E8F8F8] text-[#0AADA8]">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-[#6B8BA2] font-medium truncate">
                Clinic Management Portal
              </p>
            </div>
          </div>

          {/* Direct Company Contact Bar */}
          <div className="px-4 py-2.5 bg-[#F5FBFC] border-b border-[#E8F1F5] text-[11px] space-y-1.5">
            <div className="flex items-center justify-between text-[#426480]">
              <span className="font-semibold text-[#083258] flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#0AADA8]" />
                Call Helpline:
              </span>
              <a
                href={`tel:${settings.phone || "8239239249"}`}
                className="font-bold text-[#026EB9] hover:underline"
              >
                {settings.phone || "8239239249"}
              </a>
            </div>

            <div className="flex items-center justify-between text-[#426480]">
              <span className="font-semibold text-[#083258] flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-emerald-600" />
                WhatsApp:
              </span>
              <a
                href={`https://wa.me/${cleanWaNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:underline flex items-center gap-0.5"
              >
                {settings.whatsapp || "8239239249"}
              </a>
            </div>

            <div className="flex items-start gap-1 text-[10px] text-[#6B8BA2] pt-0.5 border-t border-[#E8F1F5]/80">
              <MapPin className="w-3 h-3 text-[#0AADA8] shrink-0 mt-0.5" />
              <span className="truncate">{settings.address || "Ramganjmandi, Kota, Rajasthan"}</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-320px)]">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6B8BA2]">
              Main Menu
            </div>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#0AADA8] text-white shadow-[0_4px_12px_rgba(10,173,168,0.25)]"
                      : "text-[#426480] hover:bg-[#F5FBFC] hover:text-[#083258]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-white" : "text-[#6B8BA2]"
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
        <div className="p-3 border-t border-[#E8F1F5] space-y-2 bg-[#F8FDFF]">
          {/* Quick link to public website */}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-[#026EB9] hover:bg-[#EBF4FB] rounded-xl transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              View Public Website
            </span>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded font-semibold">
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
            className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restore Sample Data
          </button>

          {/* Clinic status indicator */}
          <div className="p-2.5 rounded-xl bg-white border border-[#D5ECF0] text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <div className="truncate">
              <p className="font-semibold text-[#083258] leading-tight">
                Clinic System Online
              </p>
              <p className="text-[#6B8BA2] text-[10px]">
                {stats.availableDoctorsCount} Doctors Available Now
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
