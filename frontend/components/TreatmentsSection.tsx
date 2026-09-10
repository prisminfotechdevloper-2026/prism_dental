"use client";

import React from "react";
import Link from "next/link";

// ─────────────────────────────────────────────
// DENTAL SVG ICONS  (all teal, outlined style)
// ─────────────────────────────────────────────

function ImplantIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* tooth body */}
      <path d="M14 6c-3 0-5 2-5 5 0 4 2 6 4 9l1.5 8h11L27 20c2-3 4-5 4-9 0-3-2-5-5-5-1.5 0-3 .8-4 2-1-.8-2.5-2-4-2z" />
      {/* implant pin */}
      <line x1="20" y1="28" x2="20" y2="36" />
      <line x1="17" y1="32" x2="23" y2="32" />
    </svg>
  );
}

function RootCanalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 6c-3 0-5 2-5 5 0 4 2 6 4 9l1.5 8h11L27 20c2-3 4-5 4-9 0-3-2-5-5-5-1.5 0-3 .8-4 2-1-.8-2.5-2-4-2z" />
      {/* root lines */}
      <line x1="17" y1="22" x2="15" y2="34" />
      <line x1="23" y1="22" x2="25" y2="34" />
      <line x1="20" y1="23" x2="20" y2="35" />
    </svg>
  );
}

function WhiteningIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 6c-3 0-5 2-5 5 0 4 2 6 4 9l1.5 8h11L27 20c2-3 4-5 4-9 0-3-2-5-5-5-1.5 0-3 .8-4 2-1-.8-2.5-2-4-2z" />
      {/* sparkle */}
      <line x1="28" y1="7" x2="28" y2="11" />
      <line x1="26" y1="9" x2="30" y2="9" />
      <line x1="33" y1="4" x2="33" y2="7" />
      <line x1="31.5" y1="5.5" x2="34.5" y2="5.5" />
    </svg>
  );
}

function AlignersIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* aligner tray top */}
      <path d="M7 15 Q20 8 33 15" />
      <path d="M7 15 Q8 22 20 23 Q32 22 33 15" />
      {/* aligner tray bottom */}
      <path d="M7 25 Q20 18 33 25" />
      <path d="M7 25 Q8 32 20 33 Q32 32 33 25" />
      {/* bracket markers */}
      <rect x="11" y="12" width="4" height="5" rx="1" />
      <rect x="18" y="11" width="4" height="5" rx="1" />
      <rect x="25" y="12" width="4" height="5" rx="1" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* crown shape */}
      <path d="M10 28 L10 16 L16 21 L20 12 L24 21 L30 16 L30 28 Z" />
      {/* crown base */}
      <line x1="8" y1="28" x2="32" y2="28" />
      <line x1="10" y1="31" x2="30" y2="31" />
    </svg>
  );
}

function ExtractionIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8c-3 0-5 2-5 5 0 4 2 6 4 9l1.5 7h11L27 22c2-3 4-5 4-9 0-3-2-5-5-5-1.5 0-3 .8-4 2-1-.8-2.5-2-4-2z" />
      {/* extraction arrow up */}
      <line x1="30" y1="32" x2="30" y2="22" />
      <polyline points="27,25 30,22 33,25" />
    </svg>
  );
}

function PediatricIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* child face */}
      <circle cx="20" cy="17" r="9" />
      {/* eyes */}
      <circle cx="16.5" cy="15.5" r="1.2" fill="#0AADA8" stroke="none" />
      <circle cx="23.5" cy="15.5" r="1.2" fill="#0AADA8" stroke="none" />
      {/* smile */}
      <path d="M15.5 20 Q20 24 24.5 20" />
      {/* hair */}
      <path d="M11.5 13 Q15 8 20 8 Q25 8 28.5 13" />
      {/* small tooth */}
      <path d="M17 30 Q17 35 20 35 Q23 35 23 30" />
    </svg>
  );
}

function CosmeticIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* lips */}
      <path d="M10 20 Q20 14 30 20 Q20 30 10 20Z" />
      {/* upper lip curve */}
      <path d="M10 20 Q15 17 20 18 Q25 17 30 20" />
      {/* smile highlight */}
      <path d="M15 21 Q20 24 25 21" />
    </svg>
  );
}

function GumTreatmentIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" stroke="#0AADA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* gum line */}
      <path d="M8 22 Q14 14 20 18 Q26 14 32 22" />
      {/* teeth */}
      <rect x="13" y="18" width="5" height="8" rx="2" />
      <rect x="22" y="18" width="5" height="8" rx="2" />
      {/* gum fill hint */}
      <path d="M8 22 Q14 28 20 27 Q26 28 32 22" strokeDasharray="2 2" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// TREATMENT DATA
// ─────────────────────────────────────────────
const treatments = [
  {
    id: 1,
    icon: <ImplantIcon />,
    title: "Dental Implants",
    subtitle: "Permanent solution for missing teeth",
    href: "/treatments#dental-implants",
  },
  {
    id: 2,
    icon: <RootCanalIcon />,
    title: "Root Canal Treatment",
    subtitle: "Save your natural tooth",
    href: "/treatments#root-canal",
  },
  {
    id: 3,
    icon: <WhiteningIcon />,
    title: "Teeth Whitening",
    subtitle: "Brighter & whiter smile",
    href: "/treatments#teeth-whitening",
  },
  {
    id: 4,
    icon: <AlignersIcon />,
    title: "Braces & Aligners",
    subtitle: "Straighten your teeth",
    href: "/treatments#braces-aligners",
  },
  {
    id: 5,
    icon: <CrownIcon />,
    title: "Dental Crowns & Bridges",
    subtitle: "Restore your smile",
    href: "/treatments#crowns-bridges",
  },
  {
    id: 6,
    icon: <ExtractionIcon />,
    title: "Tooth Extraction",
    subtitle: "Safe & painless procedure",
    href: "/treatments#tooth-extraction",
  },
  {
    id: 7,
    icon: <PediatricIcon />,
    title: "Pediatric Dentistry",
    subtitle: "Special care for kids",
    href: "/treatments#pediatric",
  },
  {
    id: 8,
    icon: <CosmeticIcon />,
    title: "Cosmetic Dentistry",
    subtitle: "Enhance your natural beauty",
    href: "/treatments#cosmetic",
  },
  {
    id: 9,
    icon: <GumTreatmentIcon />,
    title: "Gum Treatment",
    subtitle: "Healthy gums, healthy smile",
    href: "/treatments#gum-treatment",
  },
];

// ─────────────────────────────────────────────
// TREATMENT CARD
// ─────────────────────────────────────────────
function TreatmentCard({
  icon,
  title,
  subtitle,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 bg-white border border-[#E4EEF2] rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:border-[#0AADA8]/40 hover:shadow-[0_6px_24px_rgba(10,173,168,0.10)] hover:-translate-y-0.5 cursor-pointer"
    >
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-xl bg-[#E8F8F8] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#D6F3F2]">
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-sm sm:text-[14.5px] font-bold text-[#0D243F] leading-snug group-hover:text-[#008489] transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-0.5 text-[12px] sm:text-[12.5px] text-[#6B8BA2] leading-snug">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION EXPORT
// ─────────────────────────────────────────────
export const TreatmentsSection = () => {
  const row1 = treatments.slice(0, 5);
  const row2 = treatments.slice(5, 9);

  return (
    <section className="w-full bg-[#F8FDFF] py-10 sm:py-12 lg:py-14 border-t border-[#E4EEF2]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex items-start justify-between gap-4 mb-7 sm:mb-8">
          <div>
            {/* Eyebrow label */}
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-widest text-[#0AADA8] mb-1.5">
              Our Treatments
            </p>
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0D243F] leading-tight">
              Popular Dental Treatments
            </h2>
            {/* Sub-description */}
            <p className="mt-1.5 text-sm sm:text-[14.5px] text-[#6B8BA2] max-w-xl leading-relaxed">
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          {/* View All Link */}
          <Link
            href="/treatments"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors duration-200 whitespace-nowrap mt-1 shrink-0"
          >
            View All Treatments
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* ── Row 1: 5 cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {row1.map((t) => (
            <TreatmentCard
              key={t.id}
              icon={t.icon}
              title={t.title}
              subtitle={t.subtitle}
              href={t.href}
            />
          ))}
        </div>

        {/* ── Row 2: 4 cards (left-aligned) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {row2.map((t) => (
            <TreatmentCard
              key={t.id}
              icon={t.icon}
              title={t.title}
              subtitle={t.subtitle}
              href={t.href}
            />
          ))}
        </div>

        {/* ── Mobile: View All Link ── */}
        <div className="flex sm:hidden justify-center mt-6">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors duration-200"
          >
            View All Treatments
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
