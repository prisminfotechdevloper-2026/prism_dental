"use client";

import React from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// STAT BADGE ICONS — teal outline circle style matching reference UI
// ─────────────────────────────────────────────────────────────────────────────

function StarIcon() {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SmileyIcon() {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
    </svg>
  );
}

function ShieldIcon() {
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
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS HERO COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function TestimonialsHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[380px] sm:min-h-[400px] lg:min-h-[400px] flex items-center"
      aria-label="Testimonials hero section"
    >
      {/* ─────────────────────────────────────────────────────────────────────
          HERO IMAGE — woman in dental chair, right 55–60% of banner
          ───────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[58%] h-full pointer-events-none z-0">
        <Image
          src="/images/testimonials/hero.png"
          alt="Happy patient smiling in a dental chair at SmileCare Dental Clinic"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-[center_top]"
        />
        {/* Horizontal gradient: blends image into the teal background on the left */}
        <div className="absolute inset-y-0 left-0 w-44 sm:w-56 lg:w-72 xl:w-80 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/80 to-transparent z-10" />
        {/* Mobile: vertical bottom-up fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/55 to-transparent lg:hidden z-10" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN (center gap between text and image)
          "Happy Patients / Healthy Smiles :)"  — tilted ~-6deg, Caveat font
          ───────────────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col items-start absolute z-20 pointer-events-none select-none"
        style={{
          right: "5%",
          top: "18%",
          transform: "rotate(-8deg)",
        }}
      >
        <p className="font-handwriting text-[20px] xl:text-[23px] font-bold text-[#0a3d6b] leading-snug">
          Happy
        </p>
        <p className="font-handwriting text-[20px] xl:text-[23px] font-bold text-[#0a3d6b] leading-snug pl-2">
          Patients
        </p>
        <p className="font-handwriting text-[20px] xl:text-[23px] font-bold text-[#0a3d6b] leading-snug mt-2">
          Healthy
        </p>
        <p className="font-handwriting text-[20px] xl:text-[23px] font-bold text-[#0a3d6b] leading-snug pl-2">
          Smiles
        </p>
        {/* Hand-drawn smiley — matches reference ":)" style */}
        <svg
          className="w-8 h-6 text-[#0a3d6b] mt-1 ml-4"
          viewBox="0 0 36 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Eyes as dots */}
          <circle cx="11" cy="9" r="2" fill="currentColor" stroke="none" />
          <circle cx="24" cy="9" r="2" fill="currentColor" stroke="none" />
          {/* Smile curve */}
          <path d="M 8 16 Q 17 26 28 16" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          FOREGROUND CONTENT — left-aligned text column
          ───────────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-9 sm:py-11 lg:py-12">
        <div className="w-full lg:max-w-[480px] xl:max-w-[520px]">

          {/* Pill tag */}
          <div className="mb-3">
            <span className="inline-block px-3 py-[5px] rounded-full bg-white/80 border border-[#0AADA8]/30 text-[#0AADA8] text-[11px] sm:text-[12px] font-semibold tracking-wide shadow-sm">
              Real Stories, Real Smiles
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-extrabold tracking-tight leading-[1.1] mb-3">
            <span className="text-[#083258]">What Our Patients</span>
            <br />
            <span className="text-[#0AADA8]">Say About Us</span>
          </h1>

          {/* Description */}
          <p className="text-[12px] sm:text-[13px] lg:text-sm text-[#426480] leading-relaxed max-w-[400px] mb-4">
            Your smile means everything to us. Here&apos;s what our patients
            have to say about their experience at SmileCare Dental Clinic.
          </p>

          {/* ─────────────────────────────────────────────────────────────────
              GOOGLE RATING ROW
              ─────────────────────────────────────────────────────────────── */}
          <div className="flex items-center gap-2.5 mb-5">
            {/* Google G icon */}
            <div className="w-7 h-7 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            {/* Stars */}
            <div className="flex items-center gap-0.5" aria-label="4.8 out of 5 stars">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#FBBC05]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* Half star */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" aria-hidden="true">
                <defs>
                  <linearGradient id="half-star-testi">
                    <stop offset="50%" stopColor="#FBBC05" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-star-testi)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-[11px] sm:text-[12px] text-[#426480] font-medium">
              <strong className="text-[#083258]">4.8</strong> on Google · 200+ reviews
            </span>
          </div>

          {/* ───────────────────────────────────────────────────────────────
              3 STAT BADGES — icon circle + number label, horizontal row
              ─────────────────────────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-6 mb-6">

            {/* 1 — 1000+ Happy Patients */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white border border-[#0AADA8]/35 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 hover:scale-105">
                <StarIcon />
              </div>
              <div className="leading-tight">
                <p className="text-[12px] sm:text-[13px] font-extrabold text-[#083258]">1000+</p>
                <p className="text-[10.5px] sm:text-[11px] text-[#426480] font-medium">Happy Patients</p>
              </div>
            </div>

            {/* 2 — 4.8/5 Average Rating */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white border border-[#0AADA8]/35 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 hover:scale-105">
                <SmileyIcon />
              </div>
              <div className="leading-tight">
                <p className="text-[12px] sm:text-[13px] font-extrabold text-[#083258]">4.8/5</p>
                <p className="text-[10.5px] sm:text-[11px] text-[#426480] font-medium">Average Rating</p>
              </div>
            </div>

            {/* 3 — Trusted by Families */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white border border-[#0AADA8]/35 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 hover:scale-105">
                <ShieldIcon />
              </div>
              <div className="leading-tight">
                <p className="text-[12px] sm:text-[13px] font-extrabold text-[#083258]">Trusted by</p>
                <p className="text-[10.5px] sm:text-[11px] text-[#426480] font-medium">Families</p>
              </div>
            </div>

          </div>

          {/* ───────────────────────────────────────────────────────────────
              MINI PATIENT QUOTE CARD
              ─────────────────────────────────────────────────────────────── */}
          <div className="relative flex items-start gap-3 bg-white/70 backdrop-blur-sm border border-[#0AADA8]/20 rounded-2xl px-4 py-3 shadow-sm max-w-[390px]">
            {/* Large decorative quote mark */}
            <span className="text-[#0AADA8] text-3xl font-serif leading-none select-none mt-[-2px]">&ldquo;</span>
            <div>
              <p className="text-[11.5px] sm:text-[12.5px] text-[#426480] leading-relaxed italic">
                Best dental experience I&apos;ve ever had. The team is warm, professional, and genuinely cares.
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-5 h-5 rounded-full bg-[#0AADA8]/20 flex items-center justify-center text-[9px] font-bold text-[#0AADA8]">P</div>
                <span className="text-[10px] font-semibold text-[#083258]">Priya M.</span>
                <span className="text-[10px] text-[#426480]">· Verified Patient</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
