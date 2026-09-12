"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM CRISP OUTLINE SVG ICONS MATCHING UI REFERENCE
// ─────────────────────────────────────────────────────────────────────────────

// 1. Initial Consultation (Tooth with top accent dot)
function Step1Icon() {
  return (
    <svg
      className="w-7 h-7 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6.5" cy="5" r="1.1" fill="currentColor" />
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
    </svg>
  );
}

// 2. Smile Analysis (Tooth with inner analysis scan arc)
function Step2Icon() {
  return (
    <svg
      className="w-7 h-7 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
      <path d="M8.5 11c1.8 1.8 5.2 1.8 7 0" />
    </svg>
  );
}

// 3. Treatment Plan (Tooth outline)
function Step3Icon() {
  return (
    <svg
      className="w-7 h-7 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
    </svg>
  );
}

// 4. Treatment Procedure (Tooth with precision dot)
function Step4Icon() {
  return (
    <svg
      className="w-7 h-7 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5.5" r="1.1" fill="currentColor" />
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
    </svg>
  );
}

// 5. Stunning New Smile (Joyful mouth smile arc)
function Step5Icon() {
  return (
    <svg
      className="w-7 h-7 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5c0 4.8 3.8 8 8 8s8-3.2 8-8" />
      <path d="M4 10.5C4 9.2 5 8 6.5 8h11C19 8 20 9.2 20 10.5" />
    </svg>
  );
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We assess your smile, discuss your goals and create a custom treatment plan.",
    icon: <Step1Icon />,
  },
  {
    step: 2,
    title: "Smile Analysis",
    description:
      "We take photos, scans and X-rays to plan the best approach for you.",
    icon: <Step2Icon />,
  },
  {
    step: 3,
    title: "Treatment Plan",
    description:
      "We suggest the right combination of treatments (veneers, whitening, contouring, etc.).",
    icon: <Step3Icon />,
  },
  {
    step: 4,
    title: "Treatment Procedure",
    description:
      "We carefully perform the treatment with precision and advanced technology.",
    icon: <Step4Icon />,
  },
  {
    step: 5,
    title: "Stunning New Smile",
    description:
      "You walk out with a brighter, healthier and more confident smile!",
    icon: <Step5Icon />,
  },
];

export function TreatmentProcess() {
  return (
    <section className="w-full bg-[#F6FCFD] py-3 sm:py-4 lg:py-5 border-b border-[#E8F3F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* ─────────────────────────────────────────────────────────────
            SECTION HEADER
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow Tag */}
          <span className="inline-block text-xs font-extrabold tracking-wider text-[#0AADA8] uppercase mb-2">
            TREATMENT PROCESS
          </span>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#083258] tracking-tight leading-[1.18] mb-2.5">
            How Does It Work?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#426480] leading-relaxed max-w-2xl">
            Your smile makeover follows a simple and personalized process, designed
            for the best results:
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5 PROCESS STEPS ROW WITH CONNECTING ARROWS
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 xl:gap-4 items-stretch">
          {PROCESS_STEPS.map((item, index) => (
            <div key={item.step} className="relative flex flex-col">
              
              {/* Card Container */}
              <div className="group relative w-full h-full bg-white rounded-2xl sm:rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-[0_4px_20px_rgba(8,50,88,0.03)] hover:shadow-[0_12px_32px_rgba(8,50,88,0.08)] hover:border-[#0AADA8]/45 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                
                <div>
                  {/* Top Bar: Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#0AADA8] text-white text-[11px] font-extrabold flex items-center justify-center shadow-2xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Circular Icon Container */}
                  <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#E8F8FA] border border-[#D0F0F5] flex items-center justify-center group-hover:scale-108 group-hover:bg-[#DDF4F6] transition-all duration-300 shadow-2xs">
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#083258] tracking-tight mb-2 text-left">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#52687F] leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Connecting Right Arrow (Desktop only, between cards) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-2.5 xl:-right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <span className="text-[#0AADA8] font-bold text-base select-none">
                    →
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
