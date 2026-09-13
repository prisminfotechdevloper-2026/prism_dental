"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING DESIGN SYSTEM (Crisp Outline Style)
// ─────────────────────────────────────────────────────────────────────────────

// 1. Instant Confirmation (Calendar with checkmark)
function InstantConfirmationIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

// 2. Zero Wait Time (Speedy Clock / Lightning Priority)
function ZeroWaitTimeIcon() {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// 3. Senior Specialists (Doctor Stethoscope / Clipboard)
function SeniorSpecialistsIcon() {
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

// 4. Gentle & Pain-Free Care (Shield with Heart / Tooth)
function PainFreeCareIcon() {
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

export function AppointmentHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND HERO IMAGE (Reception & Scheduling Desk)
          Spans across the center and right side matching reference UI
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[62%] 2xl:w-[60%] h-full pointer-events-none z-0">
        <Image
          src="/images/appointment/hero.jpg"
          alt="Modern dental clinic reception desk with care coordinator scheduling patient appointments"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover object-center lg:object-right opacity-25 sm:opacity-35 lg:opacity-100 transition-opacity duration-300"
        />

        {/* Left smooth gradient blend (Desktop only) */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-44 sm:w-60 lg:w-72 xl:w-80 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/85 to-transparent z-[1]" />
        {/* Edge softening (Desktop only) */}
        <div className="hidden lg:block absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#E8F6F8]/60 to-transparent z-[1]" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#E8F6F8]/80 to-transparent z-[1]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN (Center-Middle Gap)
          "Easy Booking \n Healthy Smiles \n :)"
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute left-[43%] xl:left-[46%] top-9 xl:top-12 z-20 pointer-events-none -rotate-6 select-none text-center">
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Easy Booking
        </p>
        <p className="font-handwriting text-xl xl:text-2xl font-bold text-[#083258] leading-tight drop-shadow-xs">
          Healthy Smiles
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12">
        <div className="w-full max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#0AADA8] mb-2 sm:mb-2.5"
          >
            <Link href="/" className="hover:underline transition-colors opacity-80 hover:opacity-100">
              Home
            </Link>
            <span className="text-[#0AADA8] font-normal opacity-60">&gt;</span>
            <span className="text-[#0AADA8] font-semibold">Appointment</span>
          </nav>

          {/* Pill Tag: Easy Online Booking */}
          <div className="mb-2 sm:mb-2.5">
            <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-[#DDF4F6] border border-[#0AADA8]/25 text-[#0AADA8] text-[11px] sm:text-xs font-bold tracking-wide shadow-2xs">
              Easy Online Booking
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.1] mb-2 sm:mb-2.5">
            <span className="text-[#083258]">Book Your </span>
            <span className="block sm:inline text-[#0AADA8]">Appointment</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xs sm:text-base lg:text-[17px] font-bold text-[#083258] tracking-tight mb-2 sm:mb-3">
            Quick Scheduling. Zero Wait Time. Gentle Specialists.
          </h2>

          {/* Description Paragraph */}
          <p className="text-[11.5px] sm:text-sm lg:text-[14px] text-[#426480] leading-relaxed max-w-lg mb-5 sm:mb-6">
            Book your priority consultation with our senior dental specialists in under a minute. Zero waiting time, pain-free diagnosis, and upfront transparent pricing.
          </p>

          {/* 4 Feature Badges (Single Horizontal Row) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 xl:gap-4 pt-1">
            {/* 1. Instant Confirmation */}
            <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-xl border border-white/80 sm:border-transparent shadow-xs sm:shadow-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <InstantConfirmationIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Instant<br />Confirmation
              </span>
            </div>

            {/* 2. Zero Wait Time */}
            <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-xl border border-white/80 sm:border-transparent shadow-xs sm:shadow-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <ZeroWaitTimeIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Zero Wait<br />Time
              </span>
            </div>

            {/* 3. Expert Specialists */}
            <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-xl border border-white/80 sm:border-transparent shadow-xs sm:shadow-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <SeniorSpecialistsIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                Certified<br />Doctors
              </span>
            </div>

            {/* 4. Gentle & Pain-Free Care */}
            <div className="flex items-center gap-2.5 bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-xl border border-white/80 sm:border-transparent shadow-xs sm:shadow-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 hover:scale-105">
                <PainFreeCareIcon />
              </div>
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#083258] leading-tight">
                100% Gentle<br />Care
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
