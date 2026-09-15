import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  ShieldCheck,
  ExternalLink,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { useAdmin } from "../../context/AdminContext";
import { companyDetails } from "../../data/companyDetails";

export function Footer() {
  const { settings } = useAdmin();

  const phone = settings?.phone || companyDetails.contact;
  const whatsapp = settings?.whatsapp || companyDetails.whatsapp;
  const address = settings?.address || companyDetails.address;
  const email = settings?.email || companyDetails.email;

  const rawWa = whatsapp.replace(/[^0-9]/g, "");
  const cleanWaNumber = rawWa.length === 10 ? `91${rawWa}` : rawWa;

  return (
    <footer className="mt-auto border-t border-[#D9E9ED] bg-white text-[#083258] transition-colors">
      {/* Top Clinic Info & Contact Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 1. Direct Phone Helpline */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5FBFC] border border-[#E1F1F3] hover:border-[#0AADA8]/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#0AADA8]/10 text-[#0AADA8] flex items-center justify-center shrink-0 group-hover:bg-[#0AADA8] group-hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64849E] block">
                Helpline Support
              </span>
              <a
                href={`tel:${phone}`}
                className="text-xs sm:text-sm font-extrabold text-[#083258] hover:text-[#0AADA8] transition-colors block truncate"
              >
                +91 {phone.replace(/^(\+91|91)/, "").trim()}
              </a>
              <span className="text-[10px] text-[#789BB3]">
                Mon – Sat (9:00 AM – 8:00 PM)
              </span>
            </div>
          </div>

          {/* 2. Direct WhatsApp Hotline */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] hover:border-emerald-400 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700/80 block">
                WhatsApp Chat
              </span>
              <a
                href={`https://wa.me/${cleanWaNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-extrabold text-[#083258] hover:text-emerald-600 transition-colors block truncate"
              >
                +91 {whatsapp.replace(/^(\+91|91)/, "").trim()}
              </a>
              <span className="text-[10px] text-emerald-600/80 font-medium">
                Instant patient messaging
              </span>
            </div>
          </div>

          {/* 3. Clinic Location & Address */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5FBFC] border border-[#E1F1F3] hover:border-[#0AADA8]/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#026EB9]/10 text-[#026EB9] flex items-center justify-center shrink-0 group-hover:bg-[#026EB9] group-hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64849E] block">
                Clinic Location
              </span>
              <p className="text-xs font-bold text-[#083258] line-clamp-2" title={address}>
                {address}
              </p>
              <span className="text-[10px] text-[#789BB3]">Rajasthan, India</span>
            </div>
          </div>

          {/* 4. Official Administration Email */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5FBFC] border border-[#E1F1F3] hover:border-[#0AADA8]/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#083258]/10 text-[#083258] flex items-center justify-center shrink-0 group-hover:bg-[#083258] group-hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64849E] block">
                Admin Support
              </span>
              <a
                href={`mailto:${email}`}
                className="text-xs sm:text-sm font-extrabold text-[#083258] hover:text-[#0AADA8] transition-colors block truncate"
                title={email}
              >
                {email}
              </a>
              <span className="text-[10px] text-[#789BB3]">
                Official clinic enquiries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & System Status */}
      <div className="border-t border-[#E5F0F2] bg-[#F8FDFF] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64849E]">
          {/* Left: Copyright */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#083258]">
              Prism Dental Clinic Portal
            </span>
            <span className="text-gray-300">•</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Right: Badges & Links */}
          <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-4">
             

            

            <a
              href="https://prism-dental.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0AADA8] hover:text-[#088c88] transition-colors"
            >
              <span>View Main Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
