"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[380px] sm:min-h-[410px] lg:min-h-[440px] xl:min-h-[460px] flex items-center"
      aria-label="Contact hero section"
    >
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND HERO IMAGE (Dentist / Receptionist on call)
          Positioned towards the right with optimized soft left blend
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[58%] 2xl:w-[55%] h-full pointer-events-none z-0">
        <Image
          src="/images/contact/hero.png"
          alt="Friendly SmileCare receptionist assisting on phone call in dental clinic"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-[70%_center] sm:object-[72%_center] lg:object-[64%_center]"
        />
        {/* Optimized subtle edge blend: smooth transition without covering/washing out the clinic background */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-44 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/50 to-transparent z-1" />
        {/* Mobile vertical gradient overlay for clean contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/60 to-transparent lg:hidden z-1" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN 1 (Left of doctor)
          "Healthy Smiles \n Happy Lives \n :)"
          ───────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col items-center absolute left-[43%] xl:left-[45%] 2xl:left-[47%] bottom-12 xl:bottom-16 z-20 pointer-events-none select-none text-center"
        style={{
          transform: "rotate(-10deg)",
        }}
      >
        <p className="font-handwriting text-2xl xl:text-[28px] font-bold text-[#1E4D7A] leading-tight drop-shadow-xs whitespace-nowrap">
          Healthy Smiles
        </p>
        <p className="font-handwriting text-2xl xl:text-[28px] font-bold text-[#1E4D7A] leading-tight drop-shadow-xs whitespace-nowrap">
          Happy Lives
        </p>

        {/* Hand-drawn smiley face */}
        <div className="flex justify-center mt-0.5">
          <svg
            className="w-6 h-4 text-[#1E4D7A]"
            viewBox="0 0 28 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="19" cy="5" r="1.4" fill="currentColor" stroke="none" />
            <path d="M 7 9.5 Q 14 17 21 9.5" />
          </svg>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN 2 (Upper right / above dental chair)
          "Your Smile \n Our Priority \n :)"
          ───────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col items-center absolute right-8 xl:right-14 2xl:right-16 top-9 xl:top-12 z-20 pointer-events-none select-none text-center"
        style={{
          transform: "rotate(-8deg)",
        }}
      >
        <p className="font-handwriting text-2xl xl:text-[28px] font-bold text-[#1E4D7A] leading-tight drop-shadow-xs whitespace-nowrap">
          Your Smile
        </p>
        <p className="font-handwriting text-2xl xl:text-[28px] font-bold text-[#1E4D7A] leading-tight drop-shadow-xs whitespace-nowrap">
          Our Priority
        </p>

        {/* Hand-drawn smiley face */}
        <div className="flex justify-center mt-0.5">
          <svg
            className="w-6 h-4 text-[#1E4D7A]"
            viewBox="0 0 28 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="19" cy="5" r="1.4" fill="currentColor" stroke="none" />
            <path d="M 7 9.5 Q 14 17 21 9.5" />
          </svg>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOREGROUND CONTENT WRAPPER (LEFT COLUMN)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-14 lg:py-16">
        <div className="w-full lg:max-w-[480px] xl:max-w-[520px]">
          {/* Breadcrumb Pill */}
          <div className="mb-5 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D7F2F6] border border-[#BCEBE9]/60 text-xs font-semibold shadow-2xs">
              <Link href="/" className="text-[#0AADA8] hover:underline">
                Home
              </Link>
              <span className="text-[#0AADA8]/70 text-[10px]">&gt;</span>
              <span className="text-[#0AADA8] font-bold">Contact Us</span>
            </span>
          </div>

          {/* Eyebrow Label */}
          <div className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#0AADA8] mb-2 sm:mb-2.5">
            GET IN TOUCH
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-5">
            <span className="text-[#083258] block">We&apos;re Here to</span>
            <span className="text-[#0AADA8] block">Help You</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-[#426480] leading-relaxed max-w-[450px]">
            Have a question, need an appointment, or want to know more about our services? We&apos;re just a message or call away.
            <span className="block mt-1 sm:mt-0.5">Your smile is our priority!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
