"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG BADGE ICONS MATCHING UI REFERENCE (Crisp Outline Style)
// ─────────────────────────────────────────────────────────────────────────────

// Search Icon
function SearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// 1. Expert Dental Advice (Tooth Outline)
function ToothAdviceIcon() {
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
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
    </svg>
  );
}

// 2. Better Oral Health (Shield with Checkmark)
function BetterOralHealthIcon() {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// 3. Healthy Smiles for Life (Heart in Circle Emblem)
function HealthySmilesForLifeIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 15.5s-3-2-3.8-3.3c-.6-1-.2-2.2.8-2.5.9-.2 2 .4 3 1.3 1-.9 2.1-1.5 3-1.3 1 .3 1.4 1.5.8 2.5-.8 1.3-3.8 3.3-3.8 3.3z" />
    </svg>
  );
}

export function BlogHero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] flex items-center"
      aria-label="Blog hero section"
    >
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND HERO IMAGE
          Anchored towards the right with smooth horizontal blend
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[56%] xl:w-[53%] 2xl:w-[50%] h-full pointer-events-none z-0">
        <Image
          src="/images/blog/hero.png"
          alt="Smiling happy patient in modern dental clinic chair"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-[78%_center] lg:object-[82%_center]"
        />
        {/* Soft horizontal gradient blend into solid left-column background */}
        <div className="absolute inset-y-0 left-0 w-36 sm:w-48 lg:w-64 xl:w-72 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/85 to-transparent z-1" />
        {/* Mobile vertical gradient overlay for clean contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/65 to-transparent lg:hidden z-1" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN & ACCENT RAYS
          "Healthy Smiles \n Happy Lives \n :)"
          ───────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col items-center absolute right-16 lg:right-20 xl:right-28 2xl:right-32 top-10 xl:top-12 z-20 pointer-events-none select-none text-center"
        style={{
          transform: "rotate(-6deg)",
        }}
      >
        {/* Decorative teal smile accent rays */}
        <div className="flex gap-1.5 self-end mr-3 mb-1">
          <span className="w-1 h-3 bg-[#0AADA8] rounded-full rotate-[-30deg]" />
          <span className="w-1 h-3.5 bg-[#0AADA8] rounded-full rotate-[5deg]" />
        </div>

        <p className="font-handwriting text-2xl xl:text-[27px] font-bold text-[#083258] leading-tight drop-shadow-xs whitespace-nowrap">
          Healthy Smiles
        </p>
        <p className="font-handwriting text-2xl xl:text-[27px] font-bold text-[#083258] leading-tight drop-shadow-xs whitespace-nowrap">
          Happy Lives
        </p>

        {/* Hand-drawn smiley face */}
        <div className="flex justify-center mt-1">
          <svg
            className="w-7 h-5 text-[#083258]"
            viewBox="0 0 36 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="10" cy="7" r="1.8" fill="currentColor" stroke="none" />
            <circle cx="26" cy="7" r="1.8" fill="currentColor" stroke="none" />
            <path d="M 8 13 Q 18 23 28 13" />
          </svg>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOREGROUND CONTENT WRAPPER (LEFT COLUMN - ENRICHED & BALANCED)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 lg:py-14">
        <div className="w-full lg:max-w-[560px] xl:max-w-[600px]">
          
          {/* Top Pill Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5 sm:mb-4">
            {/* Breadcrumb Pill */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D7F2F6] border border-[#0AADA8]/25 text-xs font-semibold shadow-2xs">
              <Link href="/" className="text-[#0AADA8] hover:underline">
                Home
              </Link>
              <span className="text-[#0AADA8]/60 text-[11px]">&gt;</span>
              <span className="text-[#0AADA8] font-bold">Blog</span>
            </span>

            {/* Editorial Trust Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D5ECF0] text-[11px] font-semibold text-[#426480] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0AADA8] animate-pulse" />
              Doctor-Reviewed Articles
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight leading-[1.12] mb-3">
            <span className="text-[#083258]">Our Dental </span>
            <span className="text-[#0AADA8]">Blog</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#083258] tracking-tight mb-2.5">
            Tips, Insights &amp; Expert Advice for a Healthier Smile.
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#426480] leading-relaxed max-w-[500px] mb-5 sm:mb-6">
            Stay informed with the latest dental care tips, treatment guides, oral health advice and updates from our dental experts. Because a healthy smile is always in style!
          </p>

          {/* Quick Search Bar to make left side interactive and purposeful */}
          <form onSubmit={handleSearch} className="relative max-w-[460px] mb-6">
            <div className="flex items-center bg-white border border-[#D5ECF0] rounded-xl shadow-xs overflow-hidden focus-within:border-[#0AADA8] focus-within:ring-2 focus-within:ring-[#0AADA8]/20 transition-all">
              <div className="pl-3.5 pr-2">
                <SearchIcon />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dental tips, guides, treatments..."
                className="w-full py-2.5 text-xs sm:text-[13px] text-[#083258] placeholder-[#6B8BA2] bg-transparent outline-none"
              />
              <button
                type="submit"
                className="mr-1.5 px-4 py-1.5 bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* 3 Feature Badges in a well-spaced, prominent row */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 xl:gap-6 pt-1">
            
            {/* 1. Expert Dental Advice */}
            <div className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#0AADA8]/35 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <ToothAdviceIcon />
              </div>
              <span className="text-[11.5px] sm:text-[12px] font-bold text-[#083258] leading-tight">
                Expert<br />Dental Advice
              </span>
            </div>

            {/* 2. Better Oral Health */}
            <div className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#0AADA8]/35 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <BetterOralHealthIcon />
              </div>
              <span className="text-[11.5px] sm:text-[12px] font-bold text-[#083258] leading-tight">
                Better<br />Oral Health
              </span>
            </div>

            {/* 3. Healthy Smiles for Life */}
            <div className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#0AADA8]/35 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <HealthySmilesForLifeIcon />
              </div>
              <span className="text-[11.5px] sm:text-[12px] font-bold text-[#083258] leading-tight">
                Healthy<br />Smiles for Life
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
