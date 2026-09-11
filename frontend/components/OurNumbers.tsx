"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING STATS BAR REFERENCE EXACTLY
// ─────────────────────────────────────────────────────────────────────────────

// 1. Happy Patients Icon (3 people / community group)
function HappyPatientsIcon() {
  return (
    <svg
      className="w-7 h-7 text-[#21D2CC]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Center person */}
      <circle cx="12" cy="7" r="3" />
      <path d="M7 21v-2a5 5 0 0 1 10 0v2" />
      {/* Left person */}
      <circle cx="5" cy="9" r="2.2" />
      <path d="M2 21v-1.5a4 4 0 0 1 4-3.5" />
      {/* Right person */}
      <circle cx="19" cy="9" r="2.2" />
      <path d="M22 21v-1.5a4 4 0 0 0-4-3.5" />
    </svg>
  );
}

// 2. Expert Dentists Icon (Doctor with scrub/stethoscope)
function ExpertDentistsIcon() {
  return (
    <svg
      className="w-7 h-7 text-[#21D2CC]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
      <path d="M10 16.5v1a2 2 0 0 0 4 0v-1" />
    </svg>
  );
}

// 3. Years of Experience Icon (Molar Tooth outline)
function ToothExperienceIcon() {
  return (
    <svg
      className="w-7 h-7 text-[#21D2CC]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4.5C9.5 3 8.5 2 6.5 2 4.5 2 3.5 3.5 3.5 6c0 3.5 1.5 5.5 3 8l1.5 7c.3 1 1.5 1 2 .2L12 17l2 6.2c.5.8 1.7.8 2-.2l1.5-7c1.5-2.5 3-4.5 3-8 0-2.5-1-4-3-4-2 0-3 1-5.5 2.5Z" />
    </svg>
  );
}

// 4. Patient Satisfaction Icon (5-Point Star outline)
function StarSatisfactionIcon() {
  return (
    <svg
      className="w-7 h-7 text-[#21D2CC]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// 5. Decorative Smile Face (Far Right)
function SmileEmoticon() {
  return (
    <svg
      className="w-10 h-10 text-[#21D2CC] opacity-90 transition-transform duration-300 hover:scale-110"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Eyes */}
      <circle cx="11" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="21" cy="11" r="1.5" fill="currentColor" stroke="none" />
      {/* Smile arc */}
      <path d="M8 18c2.5 5 13.5 5 16 0" />
    </svg>
  );
}

export function OurNumbers() {
  const stats = [
    {
      id: "happy-patients",
      icon: <HappyPatientsIcon />,
      value: "10,000+",
      label: "Happy Patients",
    },
    {
      id: "expert-dentists",
      icon: <ExpertDentistsIcon />,
      value: "50+",
      label: "Expert Dentists",
    },
    {
      id: "years-experience",
      icon: <ToothExperienceIcon />,
      value: "15+",
      label: "Years of Experience",
    },
    {
      id: "satisfaction",
      icon: <StarSatisfactionIcon />,
      value: "4.8/5",
      label: "Patient Satisfaction",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#01506D] via-[#026284] to-[#014B67] py-8 sm:py-10">
      {/* Subtle background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(33,210,204,0.12),_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT TITLE: "Our Numbers Speak for Themselves"
              ───────────────────────────────────────────────────────────── */}
          <div className="shrink-0 text-center lg:text-left lg:pr-8 xl:pr-10">
            <h2 className="text-xl sm:text-[22px] lg:text-2xl font-bold text-white tracking-tight leading-tight">
              Our Numbers
              <span className="block font-bold text-white">
                Speak for Themselves
              </span>
            </h2>
          </div>

          {/* Vertical Divider after Title (Desktop) */}
          <div className="hidden lg:block w-[1px] h-14 bg-white/20 shrink-0" />

          {/* ─────────────────────────────────────────────────────────────
              4 STATS ITEMS (With Dividers)
              ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:justify-around gap-6 sm:gap-4 lg:gap-0 w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <React.Fragment key={stat.id}>
                <div className="flex flex-col items-center text-center px-3 sm:px-4 group">
                  <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#A6E9E8] font-normal whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>

                {/* Divider between stats (desktop only) */}
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-14 bg-white/20 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ─────────────────────────────────────────────────────────────
              FAR RIGHT SMILE ACCENT
              ───────────────────────────────────────────────────────────── */}
          <div className="hidden xl:flex items-center justify-center pl-6 xl:pl-8 shrink-0">
            <SmileEmoticon />
          </div>

        </div>
      </div>
    </section>
  );
}
