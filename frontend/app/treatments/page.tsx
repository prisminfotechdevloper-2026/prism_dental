import React from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CalendarDays,
  ArrowRight,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Dental Treatments & Services | SmileCare Dental Clinic",
  description: "Explore advanced dental procedures at SmileCare: Dental Implants, Single-Sitting RCT, Clear Aligners, Teeth Whitening, and Cosmetic Dentistry.",
};

const TREATMENTS_LIST = [
  {
    id: "whitening",
    name: "Teeth Whitening",
    badge: "Cosmetic Excellence",
    tagline: "Professional In-Office Laser Whitening",
    description: "Remove deep stains caused by tea, coffee, smoking, or natural aging. Our cold-blue laser light technology brightens your teeth up to 8 shades in a single safe, 45-minute treatment.",
    highlights: [
      "Instant 8-shade brightening in 45 minutes",
      "Enamel-safe, zero dental sensitivity formula",
      "Long-lasting shine with take-home maintenance kit",
    ],
    duration: "45 Minutes",
    recovery: "Immediate",
    price: "From ₹3,499",
  },
  {
    id: "implants",
    name: "Dental Implants",
    badge: "Permanent Tooth Replacement",
    tagline: "Swiss & German Titanium Implants",
    description: "The gold standard for replacing missing teeth. A biocompatible titanium root is placed into the jawbone and capped with a custom zirconia crown that looks and feels 100% natural.",
    highlights: [
      "Permanent restoration with lifetime clinical warranty",
      "Restores 100% natural chewing and biting force",
      "Prevents bone loss and facial sagging",
    ],
    duration: "2 - 3 Visits",
    recovery: "3 - 5 Days",
    price: "From ₹18,999",
  },
  {
    id: "root-canal",
    name: "Single-Sitting Root Canal (RCT)",
    badge: "Tooth Saving Therapy",
    tagline: "Pain-Free Rotary Microscope Endodontics",
    description: "Save deeply infected or painful teeth without extraction. Our microscopic rotary endodontic equipment enables us to complete thorough cleaning and sealing in one comfortable visit.",
    highlights: [
      "100% pain-free with computerized local anesthesia",
      "Completed in a single 60-minute visit in most cases",
      "Protected with high-strength zirconia ceramic crown",
    ],
    duration: "60 Minutes",
    recovery: "1 - 2 Days",
    price: "From ₹4,199",
  },
  {
    id: "orthodontics",
    name: "Clear Aligners & Orthodontics",
    badge: "Smile Alignment",
    tagline: "Discreet Custom 3D Invisible Aligners",
    description: "Straighten crooked, crowded, or gapped teeth without noticeable metal brackets and wires. Removable, virtually invisible, and custom-engineered using digital 3D scans.",
    highlights: [
      "Virtually invisible - smile with complete confidence",
      "Removable while eating and brushing",
      "3D digital preview of your final smile before starting",
    ],
    duration: "6 - 14 Months",
    recovery: "Zero downtime",
    price: "0% Interest EMI Available",
  },
  {
    id: "cosmetic",
    name: "Cosmetic Veneers & Smile Design",
    badge: "Aesthetic Dentistry",
    tagline: "Custom Porcelain Laminates",
    description: "Transform chipped, uneven, or stained teeth with ultra-thin porcelain veneers. Custom crafted by senior ceramists to match your ideal facial symmetry and shade preference.",
    highlights: [
      "Stain-resistant high-gloss porcelain",
      "Minimal tooth preparation preserves natural structure",
      "Flawless Hollywood smile in 2 painless appointments",
    ],
    duration: "2 Appointments",
    recovery: "Immediate",
    price: "Custom Smile Package",
  },
  {
    id: "pediatric",
    name: "Pediatric Dental Care",
    badge: "Gentle Kids Dentistry",
    tagline: "Fun & Fear-Free Child Dental Health",
    description: "Specialized care for infants, children, and teenagers. Our friendly pediatric dentists focus on preventive care, fluoride varnish, cavity prevention, and gentle habit correction.",
    highlights: [
      "Welcoming play-friendly clinic environment",
      "Painless fluoride applications & pit and fissure sealants",
      "Habit breaking appliances (thumb sucking, tongue thrusting)",
    ],
    duration: "30 - 45 Minutes",
    recovery: "Immediate",
    price: "From ₹1,200",
  },
  {
    id: "wisdom-teeth",
    name: "Wisdom Tooth Extraction",
    badge: "Oral Surgery",
    tagline: "Gentle Surgical & Non-Surgical Removal",
    description: "Relieve jaw pain, swelling, and crowding caused by impacted wisdom teeth. Our experienced maxillofacial surgeons ensure a smooth, quick, and stress-free extraction.",
    highlights: [
      "3D OPG imaging to map nerve pathways accurately",
      "Minimal trauma surgical technique for rapid healing",
      "Post-operative care kit and dedicated follow-up",
    ],
    duration: "45 - 60 Minutes",
    recovery: "2 - 4 Days",
    price: "From ₹3,999",
  },
  {
    id: "gum-therapy",
    name: "Gum Care & Periodontics",
    badge: "Periodontal Health",
    tagline: "Deep Scaling & Laser Gum Treatment",
    description: "Treat bleeding gums, bad breath, and loose teeth caused by gingivitis and periodontitis. We use ultrasonic deep scaling and dental lasers to restore healthy pink gums.",
    highlights: [
      "Ultrasonic pain-free calculus & plaque removal",
      "Dental laser gum depigmentation & contouring",
      "Stops gum bleeding and prevents tooth mobility",
    ],
    duration: "45 Minutes",
    recovery: "1 Day",
    price: "From ₹1,999",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Care
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Our Dental Treatments
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            We provide state-of-the-art dental treatments tailored to your unique oral health needs. Every procedure is guided by digital 3D precision and pain-free clinical standards.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="space-y-8">
          {TREATMENTS_LIST.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(8,50,88,0.05)] transition-all hover:border-[#0AADA8]/40 hover:shadow-[0_12px_35px_rgba(8,50,88,0.08)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Info Column */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0AADA8] bg-[#E8F8F8] px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#6B8BA2] font-medium">
                      {item.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#083258]">
                    {item.name}
                  </h2>

                  <p className="text-sm text-[#426480] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#083258]">
                        <CheckCircle2 className="w-4 h-4 text-[#0AADA8] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs & Booking Card Column */}
                <div className="lg:col-span-4 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0] p-6 space-y-4">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-[#D5ECF0]/60">
                      <span className="text-[#6B8BA2]">Duration:</span>
                      <span className="font-bold text-[#083258]">{item.duration}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#D5ECF0]/60">
                      <span className="text-[#6B8BA2]">Recovery Time:</span>
                      <span className="font-bold text-[#083258]">{item.recovery}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#D5ECF0]/60">
                      <span className="text-[#6B8BA2]">Pricing:</span>
                      <span className="font-bold text-[#0AADA8] text-sm">{item.price}</span>
                    </div>
                  </div>

                  <Link
                    href="/appointment"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <CalendarDays className="w-4 h-4" />
                    <span>Book {item.name}</span>
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#D5ECF0] hover:bg-white text-[#083258] text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#026EB9]" />
                    <span>Call To Ask Questions</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#083258] to-[#0AADA8] p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Not sure which treatment you need?</h2>
          <p className="mt-2 text-sm text-slate-200 max-w-xl mx-auto">
            Book a comprehensive dental checkup and digital X-ray. Our senior dentists will inspect your teeth and design a transparent, customized treatment plan.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/appointment"
              className="px-7 py-3 rounded-xl bg-white text-[#083258] hover:bg-slate-50 font-bold text-xs shadow-lg transition-all"
            >
              Schedule Initial Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
