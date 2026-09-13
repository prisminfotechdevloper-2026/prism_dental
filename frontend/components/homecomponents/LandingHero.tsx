"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   CUSTOM SVG ICONS MATCHING UI REFERENCE
   ───────────────────────────────────────────── */

function CalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function WhatsAppOutlineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3-.6.6-.6.9-.6.2 0 .4 0 .6.1.2.1.4.6.5.9.2.4.5 1.1.5 1.3 0 .2-.1.4-.3.6l-.3.3c-.1.1-.2.3-.1.5.2.4.6 1.1 1.3 1.7.9.8 1.6 1 2 1.2.2.1.4 0 .5-.1l.5-.6c.2-.2.4-.3.6-.2.2.1 1.3.6 1.5.7.2.1.4.2.4.3 0 .3-.2 1-.7 1.3-.5.3-1.1.4-1.8.2-1-.3-2.5-1.1-3.8-2.4-1.4-1.4-2.2-3-2.5-4-.2-.7 0-1.3.3-1.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// 1. Expert Doctors Icon
function ExpertDoctorIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#008489]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </svg>
  );
}

// 2. Modern Technology Icon (Monitor / Equipment)
function ModernTechnologyIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#008489]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 8l2.5 2.5L12 8l2.5 2.5L17 8" />
    </svg>
  );
}

// 3. Affordable Care Icon (Shield with medical cross)
function AffordableCareIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#008489]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   FEATURE BADGE ITEM
   ───────────────────────────────────────────── */
function FeatureItem({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-full bg-white/90 sm:bg-[#D6F0F1] shadow-2xs border border-[#008489]/20 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
        {icon}
      </div>
      <div>
        <h4 className="text-[13px] font-bold text-[#083258] leading-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
          {title}
        </h4>
        <p className="text-[11px] text-[#083258]/85 sm:text-[#62778A] mt-0.5 leading-tight font-semibold sm:font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
          {sub}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT: LandingHero
   ───────────────────────────────────────────── */
export const LandingHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] flex items-center"
      aria-label="Welcome hero section"
    >
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND HERO IMAGE
          Stretches all the way to the right edge with zero margin
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[68%] lg:w-[64%] xl:w-[60%] 2xl:w-[58%] h-full pointer-events-none z-0">
        <Image
          src="/images/heroimg.png"
          alt="Smiling patient receiving dental care"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 65vw, 60vw"
          className="object-cover object-center md:object-[68%_center] lg:object-[64%_center]"
        />

        {/* Left smooth gradient blend into the section background (Desktop only) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-72 xl:w-88 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/85 to-transparent z-1" />

        {/* Top and bottom edge softening (Desktop only) */}
        <div className="hidden md:block absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#E8F6F8]/60 to-transparent z-1" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#E8F6F8]/80 to-transparent z-1" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN & SMILEY
          "Healthy Teeth / Brighter Smiles :)"
          ───────────────────────────────────────────────────────────── */}
      <div
        className="hidden md:block absolute left-[44%] lg:left-[43%] xl:left-[45%] 2xl:left-[46%] top-6 lg:top-8 xl:top-10 z-20 pointer-events-none select-none text-center"
        style={{ transform: "rotate(-7deg)" }}
      >
        <p className="font-handwriting text-xl lg:text-[23px] xl:text-[25px] font-bold text-[#083258] leading-tight drop-shadow-xs">
          Healthy Teeth
        </p>
        <p className="font-handwriting text-xl lg:text-[23px] xl:text-[25px] font-bold text-[#083258] leading-tight drop-shadow-xs">
          Brighter Smiles
        </p>
        <div className="flex justify-center mt-1">
          <svg
            className="w-8 h-6 text-[#083258] rotate-[4deg]"
            viewBox="0 0 40 28"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="7" r="2.4" />
            <circle cx="26" cy="7" r="2.4" />
            <path
              d="M 9 14 C 13 26, 25 26, 29 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOREGROUND CONTENT WRAPPER
          Matches max-w-7xl used by all other hero sections
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 lg:py-14">
        <div className="w-full max-w-xl lg:max-w-[520px] xl:max-w-[560px]">

          {/* Eyebrow: Healthy Smiles • Happy Life ✦ */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#008D96] tracking-wide mb-2 sm:mb-3">
            <span>Healthy Smiles</span>
            <span className="text-[#008D96]/60 font-bold mx-0.5">•</span>
            <span>Happy Life</span>
            <span className="ml-1 text-[15px] font-normal leading-none">⌁</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight leading-[1.08] mb-3 sm:mb-3.5">
            <span className="block text-[#083258]">Your Smile</span>
            <span className="block text-[#008489] mt-0.5 sm:mt-1">Our Priority</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#244662] sm:text-[#526880] font-medium sm:font-normal drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] leading-relaxed max-w-[430px] mb-5 sm:mb-7">
            We provide advanced &amp; affordable dental care with modern
            technology and expert doctors. Get the best care for a healthier,
            brighter smile.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-6 sm:mb-9">
            {/* Book Appointment CTA */}
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2
                         rounded-xl bg-[#008489] hover:bg-[#007377]
                         text-white px-5 sm:px-6 py-2.5 sm:py-3
                         text-xs sm:text-[13.5px] font-semibold
                         shadow-[0_4px_16px_rgba(0,132,137,0.25)]
                         transition-all duration-200
                         hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Book Appointment</span>
              <span className="text-[15px] font-normal">→</span>
            </Link>

            {/* Chat on WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments%20and%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         rounded-xl border-2 border-[#008489]
                         bg-white hover:bg-[#F0F9FA]
                         text-[#083258] px-5 sm:px-6 py-2.5 sm:py-3
                         text-xs sm:text-[13.5px] font-semibold
                         shadow-xs
                         transition-all duration-200
                         hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <WhatsAppOutlineIcon className="w-4 h-4 text-[#008489]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3-Pillar Feature Badges */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-6 lg:gap-8 pt-1">
            <FeatureItem
              icon={<ExpertDoctorIcon />}
              title="Expert Doctors"
              sub="Skilled & Experienced"
            />
            <FeatureItem
              icon={<ModernTechnologyIcon />}
              title="Modern Technology"
              sub="Advanced Equipment"
            />
            <FeatureItem
              icon={<AffordableCareIcon />}
              title="Affordable Care"
              sub="Quality at Best Price"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingHero;
