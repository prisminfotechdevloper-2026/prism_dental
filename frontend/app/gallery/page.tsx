import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Camera,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Clinic Gallery & Smile Transformations | SmileCare Dental Clinic",
  description: "View our modern clinic facilities, Class-B sterilization lounge, and real patient smile transformation results at SmileCare.",
};

const TRANSFORMATIONS = [
  {
    title: "Laser Teeth Whitening",
    category: "Cosmetic",
    procedure: "In-Office Laser Session (45 Mins)",
    result: "7 Shades Lighter",
    desc: "Severe tea and smoking stains eliminated in one appointment with zero gum irritation.",
  },
  {
    title: "Full Arch Dental Implants",
    category: "Implantology",
    procedure: "All-on-4 German Titanium Implants",
    result: "Full Chewing Restoration",
    desc: "Replaced failing lower dentition with permanent zirconia fixed teeth.",
  },
  {
    title: "Invisible Aligners Makeover",
    category: "Orthodontics",
    procedure: "Custom 3D Clear Aligners (8 Months)",
    result: "Even Teeth & Closed Gap",
    desc: "Corrected front teeth midline gap and mild lower crowding discreetly.",
  },
  {
    title: "Porcelain Veneers (6 Units)",
    category: "Smile Design",
    procedure: "Minimal Prep Ceramic Veneers",
    result: "Symmetrical Hollywood Smile",
    desc: "Fixed chipped enamel and intrinsic discoloration on upper front teeth.",
  },
  {
    title: "Single-Sitting Molar RCT & Crown",
    category: "Endodontics",
    procedure: "Rotary Microscope RCT + CAD/CAM Crown",
    result: "Complete Pain Relief",
    desc: "Deep decay treated painlessly in 60 minutes and restored with monolithic zirconia.",
  },
  {
    title: "Gingival Depigmentation",
    category: "Laser Dentistry",
    procedure: "Soft-Tissue Laser Therapy",
    result: "Healthy Coral Pink Gums",
    desc: "Dark melanin hyperpigmentation safely removed with minimal discomfort and instant healing.",
  },
];

const CLINIC_AREAS = [
  {
    name: "Advanced Operatory Suites",
    desc: "Equipped with ergonomic German dental units, intraoral cameras, and ceiling entertainment screens.",
    tag: "Patient Comfort",
  },
  {
    name: "Class-B Sterilization Lounge",
    desc: "Strict multi-barrier sterilization protocols ensuring 100% infection-free instrument packaging.",
    tag: "Hospital Safety",
  },
  {
    name: "3D Digital Diagnostic Lab",
    desc: "Low-radiation 3D CBCT, digital panoramic OPG, and high-resolution intraoral scanners.",
    tag: "Precision Tech",
  },
  {
    name: "Pediatric Care Zone",
    desc: "Specially crafted colorful and friendly operatory designed to keep children cheerful and calm.",
    tag: "Kids Friendly",
  },
];

export default function GalleryPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            Visual Proof & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083258] tracking-tight">
            Clinic Gallery & Transformations
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#426480]">
            Explore our state-of-the-art clinic infrastructure and real smile transformations created by our senior dental surgeons.
          </p>
        </div>

        {/* SECTION 1: Smile Transformations */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0AADA8]">Case Studies</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083258] tracking-tight">
              Real Smile Transformation Results
            </h2>
            <p className="text-xs sm:text-sm text-[#426480] mt-1">
              Every procedure is documented with high-definition digital radiography and photographic records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {TRANSFORMATIONS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#D5ECF0] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(8,50,88,0.05)] hover:border-[#0AADA8]/40 hover:shadow-[0_12px_35px_rgba(8,50,88,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#026EB9] bg-[#EBF4FB] px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-[10.5px] font-bold text-[#0AADA8] bg-[#E8F8F8] px-2.5 py-0.5 rounded-full">
                      {item.result}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#083258]">
                    {item.title}
                  </h3>

                  <div className="mt-2 text-xs font-semibold text-[#0AADA8]">
                    {item.procedure}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#426480] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D5ECF0]/60 flex items-center justify-between">
                  <span className="text-xs text-[#6B8BA2]">Verified Result</span>
                  <Link
                    href="/appointment"
                    className="text-xs font-bold text-[#0AADA8] hover:text-[#089692] inline-flex items-center gap-1"
                  >
                    <span>Consult Doctor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Clinic Facilities & Sterile Infrastructure */}
        <div className="rounded-3xl border border-[#D5ECF0] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_4px_25px_rgba(8,50,88,0.05)]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0AADA8]">Infrastructure</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083258] tracking-tight">
              Modern Clinical Suites & Hygiene
            </h2>
            <p className="text-xs sm:text-sm text-[#426480] mt-1">
              Engineered to meet the stringent standards set by the Indian Dental Association and European healthcare directives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_AREAS.map((area, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#D5ECF0] bg-[#F8FDFF] p-5 hover:bg-white hover:border-[#0AADA8]/40 transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#E8F8F8] px-2 py-0.5 rounded">
                  {area.tag}
                </span>
                <h3 className="text-sm font-bold text-[#083258] mt-3">{area.name}</h3>
                <p className="text-xs text-[#426480] mt-1.5 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
