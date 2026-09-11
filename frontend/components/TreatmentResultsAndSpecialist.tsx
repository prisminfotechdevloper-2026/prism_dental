"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM OUTLINE SVG ICONS MATCHING DESIGN SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

// Chevron Left
function ChevronLeftIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

// Chevron Right
function ChevronRightIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// Degree / Qualification Icon
function DegreeIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

// Experience Icon
function ExperienceIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

// Stethoscope / Specialization Icon
function StethoscopeIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

// Quick Fact 1: Duration
function DurationIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="14" r="8" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="14" x2="15" y2="11" />
    </svg>
  );
}

// Quick Fact 2: Success Rate
function HeartShieldIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8c-1.5-1.5-3.5 0-3.5 1.5 0 2 3.5 4 3.5 4s3.5-2 3.5-4c0-1.5-2-1.5-3.5-1.5Z" />
    </svg>
  );
}

// Quick Fact 3: Cost Range
function CostIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M5 6l7-3 7 3" />
      <path d="M4 10v11" />
      <path d="M20 10v11" />
      <path d="M8 14v4" />
      <path d="M12 14v4" />
      <path d="M16 14v4" />
    </svg>
  );
}

interface SliderCase {
  id: string;
  title: string;
  beforeImg: string;
  afterImg: string;
}

const SLIDER_CASES: SliderCase[] = [
  {
    id: "case-whitening",
    title: "Laser Teeth Whitening Case",
    beforeImg: "/images/before_after/smile_before.jpg",
    afterImg: "/images/before_after/smile_after.jpg",
  },
  {
    id: "case-diastema",
    title: "Clear Aligners Diastema Closure",
    beforeImg: "/images/before_after/case2_before.jpg",
    afterImg: "/images/before_after/case2_after.jpg",
  },
  {
    id: "case-aesthetic",
    title: "Cosmetic Veneers Makeover",
    beforeImg: "/images/before_after/smile_before.jpg",
    afterImg: "/images/treatment/cosmetic-before-after.jpg",
  },
];

export function TreatmentResultsAndSpecialist() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? SLIDER_CASES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === SLIDER_CASES.length - 1 ? 0 : prev + 1));
  };

  const currentCase = SLIDER_CASES[activeSlide];

  return (
    <section className="w-full bg-white py-2 sm:py-2 lg:py-4 border-b border-[#E8F3F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* 3 Balanced Sections in a Single Row on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────────
              1. LEFT SECTION: BEFORE & AFTER INTERACTIVE SLIDER
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-[0_4px_20px_rgba(8,50,88,0.03)]">
            
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#083258] tracking-tight mb-1">
                Before &amp; After
              </h2>
              <p className="text-xs sm:text-[13px] font-semibold text-[#0AADA8]">
                Real Results. Happier Smiles.
              </p>
            </div>

            {/* Slider Container with Floating Navigation Arrows */}
            <div className="relative w-full my-auto">
              
              {/* Images Grid (Before & After Side-by-Side) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                
                {/* Before Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-[#E0F0F3] bg-[#F8FDFF] group">
                  <Image
                    src={currentCase.beforeImg}
                    alt={`${currentCase.title} - Before`}
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className="object-cover object-center transition-all duration-500"
                  />
                  {/* Before Pill Label */}
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[#083258] text-[11px] font-bold shadow-2xs">
                    Before
                  </span>
                </div>

                {/* After Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-[#E0F0F3] bg-[#F8FDFF] group">
                  <Image
                    src={currentCase.afterImg}
                    alt={`${currentCase.title} - After`}
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className="object-cover object-center transition-all duration-500"
                  />
                  {/* After Pill Label */}
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[#083258] text-[11px] font-bold shadow-2xs">
                    After
                  </span>
                </div>

              </div>

              {/* Floating Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous case"
                className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D5ECF0] shadow-md flex items-center justify-center text-[#0AADA8] hover:bg-[#E8F8FA] hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <ChevronLeftIcon />
              </button>

              {/* Floating Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next case"
                className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D5ECF0] shadow-md flex items-center justify-center text-[#0AADA8] hover:bg-[#E8F8FA] hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <ChevronRightIcon />
              </button>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              {SLIDER_CASES.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setActiveSlide(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === dotIndex
                      ? "w-6 bg-[#0AADA8]"
                      : "w-2 bg-[#D5ECF0] hover:bg-[#0AADA8]/50"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────
              2. CENTER SECTION: MEET OUR SPECIALIST
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white rounded-3xl border border-[#D5ECF0] p-5 sm:p-6 shadow-[0_4px_20px_rgba(8,50,88,0.03)]">
            
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#083258] tracking-tight">
                Meet Our Specialist
              </h2>
            </div>

            {/* Specialist Profile Content */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-start sm:items-center lg:items-start xl:items-center my-auto">
              
              {/* Doctor Photo */}
              <div className="relative w-28 h-36 sm:w-32 sm:h-40 shrink-0 rounded-2xl overflow-hidden border border-[#D5ECF0] bg-[#F7FCFD] shadow-xs">
                <Image
                  src="/images/doctors/doctor-priya.jpg"
                  alt="Dr. Priya Sharma - Chief Cosmetic Dentist"
                  fill
                  sizes="130px"
                  className="object-cover object-top"
                />
              </div>

              {/* Doctor Details */}
              <div className="space-y-2.5">
                <div>
                  <h3 className="text-base sm:text-[17px] font-extrabold text-[#083258] tracking-tight leading-snug">
                    Dr. Priya Sharma
                  </h3>
                  <p className="text-xs font-bold text-[#0AADA8] tracking-wide">
                    Chief Cosmetic Dentist
                  </p>
                </div>

                {/* 3 Detail Bullets */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center gap-2 text-xs text-[#426480]">
                    <DegreeIcon />
                    <span>BDS, MDS (Prosthodontics)</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#426480]">
                    <ExperienceIcon />
                    <span>10+ Years Experience</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-[#426480] leading-tight">
                    <StethoscopeIcon />
                    <span>Expert in Smile Makeovers, Veneers &amp; Aesthetic Dentistry</span>
                  </div>
                </div>

                {/* Book Appointment CTA */}
                <div className="pt-2">
                  <Link
                    href="/appointment?doctor=Dr.%20Priya%20Sharma"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0AADA8] hover:bg-[#089691] text-white px-4 py-2 text-xs font-bold shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Book Appointment</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>

              </div>

            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────
              3. RIGHT SECTION: QUICK FACTS CARD
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col justify-between rounded-3xl bg-[#EBF7F9] border border-[#D2EFF3] p-5 sm:p-6 shadow-xs">
            
            {/* Header */}
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-[#083258] tracking-tight mb-5">
                Quick Facts
              </h2>

              {/* 3 Quick Fact Items */}
              <div className="space-y-4">
                
                {/* 1. Treatment Duration */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                    <DurationIcon />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-extrabold text-[#083258] leading-tight">
                      Treatment Duration
                    </h3>
                    <p className="text-[11.5px] text-[#52687F] leading-tight mt-0.5">
                      1 – 2 Hours <span className="text-[#426480]/70">(per session)</span>
                    </p>
                  </div>
                </div>

                {/* 2. Success Rate */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                    <HeartShieldIcon />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-extrabold text-[#083258] leading-tight">
                      Success Rate
                    </h3>
                    <p className="text-[11.5px] text-[#52687F] leading-tight mt-0.5">
                      95%+
                    </p>
                  </div>
                </div>

                {/* 3. Cost Range */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                    <CostIcon />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-extrabold text-[#083258] leading-tight">
                      Cost Range
                    </h3>
                    <p className="text-[11.5px] font-semibold text-[#083258] leading-tight mt-0.5">
                      ₹ 10,000 – ₹ 1,50,000
                    </p>
                    <p className="text-[10.5px] text-[#52687F] leading-tight">
                      (Varies by treatment)
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
