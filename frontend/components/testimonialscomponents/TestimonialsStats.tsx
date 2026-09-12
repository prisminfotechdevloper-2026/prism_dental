"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// PEOPLE / PATIENTS GROUP ICON  (outline, matches reference exactly)
// ─────────────────────────────────────────────────────────────────────────────
function PatientsIcon() {
  return (
    <svg
      className="w-12 h-12 text-white opacity-90 shrink-0"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Center person */}
      <circle cx="24" cy="14" r="5" />
      <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" />
      {/* Left person */}
      <circle cx="10" cy="17" r="4" />
      <path d="M2 36c0-4.418 3.582-8 8-8" />
      {/* Right person */}
      <circle cx="38" cy="17" r="4" />
      <path d="M46 36c0-4.418-3.582-8-8-8" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATS DATA
// ─────────────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "1000+", label: "Happy Patients" },
  { value: "12+",   label: "Years of Experience" },
  { value: "5★",    label: "Average Rating" },
  { value: "98%",   label: "Satisfaction Rate" },
];


// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS STATS BANNER
// ─────────────────────────────────────────────────────────────────────────────
export function TestimonialsStats() {
  return (
    <section
      className="w-[95%] rounded-lg py-5 mb-4 mx-auto  sm:py-6"
      style={{
        background: "linear-gradient(135deg, #083258 0%, #0a4a6e 40%, #0AADA8 100%)",
      }}
      aria-label="Clinic statistics"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Single flat row — all 5 items share equal space with dividers */}
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch py-1">

          {/* ── 1. Icon + "Our Patients Love Us" ─────────────────────────── */}
          <div className="flex items-center gap-3.5 flex-1 justify-center py-3 sm:py-0">
            <PatientsIcon />
            <div className="leading-tight">
              <p className="text-white font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-snug">
                Our Patients
              </p>
              <p className="text-white font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-snug">
                Love Us
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-white/20 my-3 shrink-0" aria-hidden="true" />

          {/* ── 2–5. Four stat items with dividers between them ──────────── */}
          {STATS.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col items-center justify-center flex-1 py-3 sm:py-0">
                <span className="text-[#4DD9D4] font-extrabold text-[24px] sm:text-[26px] lg:text-[28px] leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/75 text-[11.5px] sm:text-[12.5px] font-medium mt-1.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
              {idx < STATS.length - 1 && (
                <div className="hidden sm:block w-px bg-white/20 my-3 shrink-0" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}
