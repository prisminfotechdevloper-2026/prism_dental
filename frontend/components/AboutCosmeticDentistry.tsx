"use client";

import React from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING DESIGN SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

// Tooth Outline Icon for callout quote box
function ToothOutlineIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
    </svg>
  );
}

// Crisp Checkmark inside filled teal circle
function BenefitCheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#0AADA8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
      <svg
        className="w-3 h-3 stroke-[3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export function AboutCosmeticDentistry() {
  const benefits = [
    "Enhances the appearance of your smile",
    "Boosts self-confidence",
    "Improves oral health and function",
    "Corrects imperfections (stains, gaps, chips, etc.)",
    "Long-lasting and natural-looking results",
  ];

  return (
    <section className="w-full bg-white py-3 sm:py-3 lg:py-2 border-b border-[#E8F3F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* 3-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: HEADLINE, DESCRIPTION & CALLOUT QUOTE
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            {/* Eyebrow / Tag */}
            <span className="text-xs font-extrabold tracking-wider text-[#0AADA8] uppercase mb-2">
              ABOUT COSMETIC DENTISTRY
            </span>

            {/* Main Section Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-extrabold text-[#083258] tracking-tight leading-[1.18] mb-3.5">
              What is Cosmetic Dentistry?
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-[#426480] leading-relaxed mb-6">
              Cosmetic dentistry includes a range of dental treatments designed to
              enhance the look of your teeth, gums and overall smile. It&apos;s not just
              about appearance — it also improves your oral health, functionality
              and self-confidence.
            </p>

            {/* Quote / Callout Box */}
            <div className="rounded-2xl bg-[#E8F8FA] border border-[#D0F0F5] p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#0AADA8]/25 text-[#0AADA8] flex items-center justify-center shrink-0 shadow-2xs">
                <ToothOutlineIcon />
              </div>
              <p className="text-xs sm:text-[12.5px] font-medium text-[#083258] leading-snug">
                A beautiful smile can change the way you look, feel and even how
                others perceive you.
              </p>
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────
              CENTER COLUMN: BEFORE & AFTER SMILE SPLIT COMPARISON CARD
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[390px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(8,50,88,0.08)] border border-[#D5ECF0] bg-[#F7FCFD] group">
              
              {/* Split Before/After Macro Dental Image */}
              <Image
                src="/images/treatment/cosmetic-before-after.jpg"
                alt="Before and after cosmetic dentistry teeth whitening smile transformation"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />

              {/* Vertical Division Split Line */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/90 shadow-sm z-10" />

              {/* Handwritten "Before" Label with Curved Pointer */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 select-none text-left">
                <p className="font-handwriting text-2xl sm:text-[28px] font-bold text-[#083258] leading-none drop-shadow-xs">
                  Before
                </p>
                <div className="pl-1 pt-0.5">
                  <svg
                    className="w-6 h-5 text-[#083258]"
                    viewBox="0 0 28 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M 4 4 C 4 14, 16 14, 18 6" />
                    <path d="M 14 7 L 18 6 L 19 11" />
                  </svg>
                </div>
              </div>

              {/* Handwritten "After" Label with Curved Pointer */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 select-none text-right">
                <p className="font-handwriting text-2xl sm:text-[28px] font-bold text-[#083258] leading-none drop-shadow-xs">
                  After
                </p>
                <div className="flex justify-end pr-1 pt-0.5">
                  <svg
                    className="w-6 h-5 text-[#083258]"
                    viewBox="0 0 28 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M 24 4 C 24 14, 12 14, 10 6" />
                    <path d="M 14 7 L 10 6 L 9 11" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: BENEFITS OF COSMETIC DENTISTRY CARD
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-[#EBF7F9] border border-[#D2EFF3] p-6 sm:p-7 shadow-xs">
              
              {/* Card Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-[#083258] tracking-tight mb-4 sm:mb-5">
                Benefits of Cosmetic Dentistry
              </h3>

              {/* 5 Benefits List */}
              <ul className="space-y-3.5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BenefitCheckIcon />
                    <span className="text-xs sm:text-[13px] font-semibold text-[#083258] leading-snug pt-0.5">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
