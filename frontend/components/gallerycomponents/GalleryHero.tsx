"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING UI REFERENCE (Crisp Outline Style)
// ─────────────────────────────────────────────────────────────────────────────

// 1. Real Patient Stories (Camera outline icon)
function CameraIcon() {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

// 2. Before & After Transformations (Heart emblem icon)
function TransformationsIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// 3. Modern Technology & Facilities (Tooth with tech bar icon)
function ModernTechFacilitiesIcon() {
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
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
      <path d="M10 11h4" />
    </svg>
  );
}

// 4. Healthy Smiles Everyday (Happy smiley face icon)
function HealthySmilesIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
    </svg>
  );
}

export function GalleryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
      
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND HERO IMAGE (Clinic Operatory Suite)
          Spans across the center and right side matching reference UI
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[62%] 2xl:w-[60%] h-full pointer-events-none z-0">
        <Image
          src="/images/gallery/hero.png"
          alt="State-of-the-art dental clinic operatory suite and treatment facility"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover object-[center_right] lg:object-right"
        />
        {/* Soft horizontal gradient blend into the solid left-column background */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/80 to-transparent z-1" />
        {/* Mobile vertical gradient overlay for clean contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/65 to-transparent lg:hidden z-1" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN (Center-Middle Gap)
          "Healthy Smiles \n Happy Lives \n :)"
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute left-[43%] xl:left-[46%] top-10 xl:top-12 z-20 pointer-events-none -rotate-6 select-none text-center">
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Healthy Smiles
        </p>
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Happy Lives
        </p>
        {/* Cute hand-drawn smiley face */}
        <div className="flex justify-center mt-1">
          <svg className="w-8 h-6 text-[#083258] rotate-3" viewBox="0 0 36 28" fill="currentColor">
            <circle cx="11" cy="8" r="2.2" />
            <circle cx="23" cy="8" r="2.2" />
            <path
              d="M 8 14 C 12 25, 22 25, 26 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
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
            <span className="text-[#0AADA8] font-semibold">Gallery</span>
          </nav>

          {/* Pill Tag: Our Gallery */}
          <div className="mb-2.5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#DDF4F6] border border-[#0AADA8]/25 text-[#0AADA8] text-xs font-bold tracking-wide shadow-2xs">
              Our Gallery
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.1] mb-2.5">
            <span className="text-[#083258]">Smile Moments </span>
            <span className="block text-[#0AADA8]">Gallery</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#083258] tracking-tight mb-3">
            Real People. Real Smiles. Real Transformations.
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#426480] leading-relaxed max-w-lg mb-6">
            Explore our gallery to see the beautiful smiles we&apos;ve created and the happy patients who trust SmileCare Dental Clinic.
          </p>

          {/* 4 Feature Badges (Single Horizontal Row) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4 pt-1">
            
            {/* 1. Real Patient Stories */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <CameraIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Real Patient<br />Stories
              </span>
            </div>

            {/* 2. Before & After Transformations */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <TransformationsIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Before &amp; After<br />Transformations
              </span>
            </div>

            {/* 3. Modern Technology & Facilities */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <ModernTechFacilitiesIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Modern Technology<br />&amp; Facilities
              </span>
            </div>

            {/* 4. Healthy Smiles Everyday */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <HealthySmilesIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Healthy Smiles<br />Everyday
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
