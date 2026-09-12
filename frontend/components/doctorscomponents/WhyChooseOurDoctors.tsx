"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// NOTE ON FONT:
// The handwriting text ("Better Oral Health / Brighter Future") needs a
// cursive Google Font. Add this to your layout.tsx / globals.css:
//
//   import { Caveat } from "next/font/google";
//   const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwriting" });
//   // then add `className={caveat.variable}` to <html> or <body>
//
// And in tailwind.config.js:
//   fontFamily: { handwriting: ["var(--font-handwriting)", "cursive"] }
//
// Until you add that, this component falls back to a safe cursive stack
// so it never renders as plain sans-serif.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// SVG ICONS
// ─────────────────────────────────────────────────────────────────────────────

function GraduationCapIcon() {
  return (
    <svg className="w-7 h-7 text-[#0AADA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-7 h-7 text-[#0AADA8]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-7 h-7 text-[#0AADA8]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="w-7 h-7 text-[#0AADA8]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURES DATA
// ─────────────────────────────────────────────────────────────────────────────

const features = [
  { icon: <GraduationCapIcon />, label: "Highly Qualified\n& Certified" },
  { icon: <TeamIcon />,          label: "Years of\nExperience" },
  { icon: <HeartIcon />,         label: "Personalized\nCare" },
  { icon: <ShieldCheckIcon />,   label: "Safe & Modern\nFacilities" },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function WhyChooseOurDoctors() {
  return (
    <div className="w-[97%] max-w-[1400px] mx-auto my-6 sm:my-8">
      <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#C9E8EC] shadow-sm bg-[#E5F6F7]">

        {/* ── LEFT TEXT PANEL ── basis 32% ─────────────────────────────── */}
        <div className="px-6 py-8 sm:px-8 sm:py-9 flex flex-col justify-center lg:basis-[32%] lg:shrink-0">
          <h2 className="text-[22px] sm:text-[24px] lg:text-[25px] font-extrabold text-[#083258] tracking-tight leading-[1.2] mb-3">
            Why Choose Our Doctors?
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#426480] leading-relaxed mb-6 max-w-[320px]">
            Our dentists are not just skilled professionals, they are people who care. With years of experience and a passion for dental health, they are here to guide you at every step of your journey.
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-[#0AADA8] hover:bg-[#089692] text-white px-5 py-2.5 text-[13px] font-bold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Appointment <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── CENTER ICONS PANEL ── basis 36% ──────────────────────────── */}
        <div className="lg:basis-[36%] lg:shrink-0 flex items-center justify-center px-6 py-8 sm:px-8 border-t lg:border-t-0 lg:border-l border-[#C9E8EC]">
          <div className="flex items-start justify-between w-full max-w-[420px] mx-auto">
            {features.map(({ icon, label }, i) => (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center text-center gap-2.5 flex-1 min-w-0 group">
                  <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(8,50,88,0.08)] transition-transform duration-200 group-hover:scale-105 group-hover:shadow-[0_4px_14px_rgba(10,173,168,0.25)]">
                    {icon}
                  </div>
                  <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#083258] leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
                {i < features.length - 1 && (
                  <div className="w-px self-stretch bg-[#C9E8EC] mx-1 sm:mx-2 mt-[30px] hidden sm:block" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── RIGHT IMAGE PANEL ── basis 32% ───────────────────────────── */}
        <div className="relative lg:basis-[32%] lg:shrink-0 w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-auto lg:h-auto">
          <Image
            src="/images/doctor/image.png"
            alt="Dentist providing gentle care to a smiling patient"
            fill
            sizes="(max-width: 1024px) 100vw, 32vw"
            className="object-cover object-[30%_center]"
            priority
          />
          {/* Floating handwritten overlay */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right select-none pointer-events-none">
            <p
              className="text-[16px] sm:text-[18px] font-bold text-[#083258] leading-snug drop-shadow-sm"
              style={{ fontFamily: "var(--font-handwriting, 'Segoe Script', 'Bradley Hand', cursive)" }}
            >
              Better<br />Oral Health
            </p>
            <p
              className="text-[16px] sm:text-[18px] font-bold text-[#083258] leading-snug mt-2 drop-shadow-sm"
              style={{ fontFamily: "var(--font-handwriting, 'Segoe Script', 'Bradley Hand', cursive)" }}
            >
              Brighter<br />Future
            </p>
            <div className="flex justify-end mt-1.5">
              <svg className="w-6 h-5 text-[#083258]" viewBox="0 0 36 28" fill="currentColor">
                <circle cx="11" cy="8" r="2.2" />
                <circle cx="23" cy="8" r="2.2" />
                <path d="M 8 14 C 12 25, 22 25, 26 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}