"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING UI REFERENCE (Crisp Outline Style)
// ─────────────────────────────────────────────────────────────────────────────

// 1. Experienced Specialists (Clipboard with medical cross)
function SpecialistsIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M12 11v6" />
      <path d="M9 14h6" />
    </svg>
  );
}

// 2. Modern Technology (Device / Handpiece / Tech Waves)
function ModernTechIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14 2a8 8 0 0 1 8 8" />
      <path d="M14 6a4 4 0 0 1 4 4" />
    </svg>
  );
}

// 3. Personalized Treatment Plans (Calendar with checkmark)
function TreatmentPlansIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

// 4. Patient-Centric Care (Care shield / heart emblem)
function PatientCareIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
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

export function DoctorsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
      
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND IMAGE (Doctor in Operatory Suite)
          Shifted towards the right side for balanced composition
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] h-full pointer-events-none z-0">
        <Image
          src="/images/doctor/hero.png"
          alt="Expert dentist in modern dental clinic operatory suite"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-[70%_center] lg:object-left"
        />
        {/* Soft horizontal gradient fade into the left text background */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-28 lg:w-32 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/70 to-transparent" />
        {/* Mobile vertical gradient overlay for clean readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/60 to-transparent lg:hidden" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN ON THE FAR RIGHT
          "Your Smile Our Priority :)"
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute right-8 xl:right-14 top-10 xl:top-12 z-20 pointer-events-none rotate-3 select-none text-right">
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Your Smile
        </p>
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Our Priority
        </p>
        <div className="flex justify-end pr-2 pt-1">
          <span className="font-handwriting text-2xl xl:text-3xl font-bold text-[#0AADA8]">
            :)
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOREGROUND CONTENT WRAPPER
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12">
        <div className="w-full lg:max-w-[520px] xl:max-w-[560px]">
          
          {/* Pill Tag: Our Doctors */}
          <div className="mb-2.5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#DDF4F6] border border-[#0AADA8]/25 text-[#0AADA8] text-xs font-bold tracking-wide shadow-2xs">
              Our Doctors
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.1] mb-2.5">
            <span className="text-[#083258]">Meet Our Expert </span>
            <span className="block text-[#0AADA8]">Dental Team</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#083258] tracking-tight mb-3">
            Skilled. Compassionate. Dedicated to Your Smile.
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#426480] leading-relaxed max-w-lg mb-6">
            At SmileCare Dental Clinic, our team of experienced and certified dentists is committed to providing you with the best possible care. We combine advanced technology with a personal touch to ensure you get healthy, beautiful smiles.
          </p>

          {/* 4 Feature Badges (Single Horizontal Row) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4 pt-1">
            
            {/* 1. Experienced Specialists */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <SpecialistsIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Experienced<br />Specialists
              </span>
            </div>

            {/* 2. Modern Technology */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <ModernTechIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Modern<br />Technology
              </span>
            </div>

            {/* 3. Personalized Treatment Plans */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <TreatmentPlansIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Personalized<br />Treatment Plans
              </span>
            </div>

            {/* 4. Patient-Centric Care */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <PatientCareIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Patient-Centric<br />Care
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
