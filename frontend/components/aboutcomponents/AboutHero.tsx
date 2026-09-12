"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING DESIGN SYSTEM (Crisp Outline Style)
// ─────────────────────────────────────────────────────────────────────────────

// 1. Trusted Care (Shield with checkmark)
function TrustedCareIcon() {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// 2. Modern Clinic (Operatory Suite / Building)
function ModernSuiteIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

// 3. Expert Doctors (Clipboard with cross)
function CertifiedExpertsIcon() {
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

// 4. Patient-First Approach (Care Heart)
function CompassionateCareIcon() {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
      
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND IMAGE (Clinic Operatory Suite)
          Generous width spanning 74%-82% across with smooth luxury fade
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[74%] xl:w-[78%] 2xl:w-[82%] h-full pointer-events-none z-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Modern dental clinic operatory suite with state-of-the-art equipment"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 78vw"
          className="object-cover object-[center_right] lg:object-right"
        />
        {/* Wide multi-layer soft gradient fade into the left text background */}
        <div className="absolute inset-y-0 left-0 w-44 sm:w-60 lg:w-96 xl:w-[460px] bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/85 to-transparent z-1" />
        {/* Edge softening */}
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#E8F6F8]/40 to-transparent z-1" />
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#E8F6F8]/40 to-transparent z-1" />
        {/* Mobile vertical gradient overlay for clean readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/65 to-transparent lg:hidden z-1" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN ON THE FAR RIGHT
          "Caring for Your Smile :)"
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute right-8 xl:right-14 top-10 xl:top-12 z-20 pointer-events-none rotate-3 select-none text-right">
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Caring for
        </p>
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Your Smile
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
        <div className="w-full lg:max-w-[540px] xl:max-w-[580px]">
          
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#0AADA8] mb-2.5"
          >
            <Link href="/" className="hover:underline transition-colors opacity-80 hover:opacity-100">
              Home
            </Link>
            <span className="text-[#0AADA8] font-normal opacity-60">&gt;</span>
            <span className="text-[#0AADA8] font-semibold">About Us</span>
          </nav>

          {/* Pill Tag: About SmileCare */}
          <div className="mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#0AADA8]/30 text-[#0AADA8] text-xs font-bold tracking-wide shadow-2xs">
               About SmileCare
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight leading-[1.1] mb-2.5">
            <span className="text-[#083258]">About </span>
            <span className="text-[#0AADA8]">Us</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm sm:text-base lg:text-[17px] xl:text-[18px] font-bold text-[#083258] tracking-tight mb-3">
            Healthy Smiles. Happier Lives. Compassionate Care.
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#426480] leading-relaxed max-w-lg mb-6">
            At SmileCare Dental Clinic, we believe that a healthy smile is not just about appearance—it&apos;s about confidence, well-being and a better quality of life. We are committed to providing world-class dental care with compassion, expertise and modern technology.
          </p>

          {/* 4 Feature Badges (Single Horizontal Row) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4 pt-1">
            
            {/* 1. Trusted Care */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <TrustedCareIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Trusted<br />Care
              </span>
            </div>

            {/* 2. Modern Clinic */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <ModernSuiteIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Modern<br />Clinic
              </span>
            </div>

            {/* 3. Expert Doctors */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <CertifiedExpertsIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Expert<br />Doctors
              </span>
            </div>

            {/* 4. Patient-First */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <CompassionateCareIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Patient-First<br />Care
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}