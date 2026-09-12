"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING UI REFERENCE EXACTLY
// ─────────────────────────────────────────────────────────────────────────────

// 1. Bullseye / Target Icon with Arrow (Our Mission)
function TargetMissionIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M15.5 8.5 21 3" />
      <path d="M18 3h3v3" />
    </svg>
  );
}

// 2. Eye Icon (Our Vision)
function EyeVisionIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

// 3. Experienced Dental Experts (Doctor in scrub cap)
function DoctorExpertIcon() {
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
      {/* Surgeon / Scrub Cap */}
      <path d="M7 10a5 5 0 0 1 10 0v1H7v-1Z" />
      <circle cx="12" cy="10" r="3" />
      {/* Lab coat / shoulders */}
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      {/* Stethoscope */}
      <path d="M10 16.5v1a2 2 0 0 0 4 0v-1" />
    </svg>
  );
}

// 4. Advanced Technology (Microchip / CPU)
function AdvancedTechIcon() {
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
      <rect width="12" height="12" x="6" y="6" rx="2" />
      <rect width="4" height="4" x="10" y="10" />
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M9 18v4" />
      <path d="M15 18v4" />
      <path d="M2 9h4" />
      <path d="M2 15h4" />
      <path d="M18 9h4" />
      <path d="M18 15h4" />
    </svg>
  );
}

// 5. Personalized Treatment Plans (Solid Heart)
function PersonalizedHeartIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// 6. Clean & Comfortable Environment (Clinic / Home)
function CleanEnvironmentIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

// 7. Affordable Pricing (Shield Check)
function AffordablePricingIcon() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// 8. 24/7 Emergency Dental Care (Circular Arrow with 24)
function EmergencyDentalIcon() {
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
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <path d="M21 3v6h-6" />
      <text
        x="11"
        y="14"
        fontSize="6.5"
        fontWeight="800"
        fontFamily="sans-serif"
        fill="currentColor"
        stroke="none"
        textAnchor="middle"
      >
        24
      </text>
    </svg>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F4F9FB] border-b border-[#E2EFF2] py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
          
          {/* ─────────────────────────────────────────────────────────────
              COLUMN 1: OUR MISSION
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:w-[22%] xl:w-[23%] lg:pr-8 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#DFF4F6] flex items-center justify-center mb-3.5 shrink-0 transition-transform duration-200 hover:scale-105">
              <TargetMissionIcon />
            </div>
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#083258] mb-2 tracking-tight">
              Our Mission
            </h3>
            <p className="text-xs sm:text-[13px] text-[#426480] leading-relaxed">
              To provide high-quality, affordable and compassionate dental care using advanced technology and a patient-centered approach.
            </p>
          </div>

          {/* Vertical Divider Between Mission & Vision */}
          <div className="hidden lg:block w-[1px] bg-[#D7EBF0] self-stretch shrink-0" />
          <div className="block lg:hidden w-full h-[1px] bg-[#E2EFF2]" />

          {/* ─────────────────────────────────────────────────────────────
              COLUMN 2: OUR VISION
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:w-[23%] xl:w-[24%] lg:px-8 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#DFF4F6] flex items-center justify-center mb-3.5 shrink-0 transition-transform duration-200 hover:scale-105">
              <EyeVisionIcon />
            </div>
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#083258] mb-2 tracking-tight">
              Our Vision
            </h3>
            <p className="text-xs sm:text-[13px] text-[#426480] leading-relaxed">
              To be the most trusted and preferred dental clinic, known for excellence, innovation and long-term patient relationships.
            </p>
          </div>

          {/* Vertical Divider Between Vision & Why Choose Us */}
          <div className="hidden lg:block w-[1px] bg-[#D7EBF0] self-stretch shrink-0" />
          <div className="block lg:hidden w-full h-[1px] bg-[#E2EFF2]" />

          {/* ─────────────────────────────────────────────────────────────
              COLUMN 3: WHY CHOOSE US?
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:flex-1 lg:pl-8 xl:pl-10 flex flex-col justify-start">
            
            {/* Header with teal accent underline */}
            <div className="mb-5">
              <h2 className="text-xl sm:text-[22px] font-bold text-[#083258] tracking-tight">
                Why Choose Us?
              </h2>
              <div className="w-10 h-[3px] bg-[#0AADA8] rounded-full mt-1.5" />
            </div>

            {/* 3 Columns x 2 Rows Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 lg:gap-x-7 lg:gap-y-6">
              
              {/* Item 1: Experienced Dental Experts */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <DoctorExpertIcon />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#083258] leading-snug">
                  Experienced<br className="hidden sm:inline" /> Dental Experts
                </span>
              </div>

              {/* Item 2: Advanced Technology */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <AdvancedTechIcon />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#083258] leading-snug">
                  Advanced<br className="hidden sm:inline" /> Technology
                </span>
              </div>

              {/* Item 3: Personalized Treatment Plans */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <PersonalizedHeartIcon />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#083258] leading-snug">
                  Personalized<br className="hidden sm:inline" /> Treatment Plans
                </span>
              </div>

              {/* Item 4: Clean & Comfortable Environment */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <CleanEnvironmentIcon />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#083258] leading-snug">
                  Clean & Comfortable<br className="hidden sm:inline" /> Environment
                </span>
              </div>

              {/* Item 5: Affordable Pricing */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <AffordablePricingIcon />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#083258] leading-snug">
                  Affordable<br className="hidden sm:inline" /> Pricing
                </span>
              </div>

              {/* Item 6: 24/7 Emergency Dental Care */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <EmergencyDentalIcon />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#083258] leading-snug">
                  24/7 Emergency<br className="hidden sm:inline" /> Dental Care
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
