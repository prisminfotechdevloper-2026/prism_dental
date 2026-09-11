"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING UI REFERENCE (Crisp Outline Style)
// ─────────────────────────────────────────────────────────────────────────────

// 1. Better Alignment (Tooth Outline)
function BetterAlignmentIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
    </svg>
  );
}

// 2. Improved Bite (Mouth / Smile Arc)
function ImprovedBiteIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5c0 4.4 3.6 7.5 8 7.5s8-3.1 8-7.5" />
      <path d="M4 10.5c0-1 .5-1.5 1.5-1.5h13c1 0 1.5.5 1.5 1.5" />
    </svg>
  );
}

// 3. Enhanced Oral Health (Heart / Shield Health)
function EnhancedHealthIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20s-7-4.35-9.5-9C1 7.5 3 4 6.5 4c2 0 3.5 1.3 4.5 2.5C12 5.3 13.5 4 15.5 4 19 4 21 7.5 21.5 11c-2.5 4.65-9.5 9-9.5 9Z" />
    </svg>
  );
}

// 4. Boosts Confidence (Happy Smile Face)
function BoostsConfidenceIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13a4 4 0 0 0 8 0" />
      <circle cx="9" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Calendar Icon
function CalendarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

// WhatsApp Official Icon
function WhatsAppIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#25D366]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function TreatmentsHero() {
  const router = useRouter();
  const [selectedTreatment, setSelectedTreatment] = useState("Braces & Aligners");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Priya Sharma");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/appointment?treatment=${encodeURIComponent(
        selectedTreatment
      )}&doctor=${encodeURIComponent(selectedDoctor)}&date=${encodeURIComponent(
        selectedDate
      )}`
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#E8F6F8] border-b border-[#D5ECF0] min-h-[400px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
      
      {/* ─────────────────────────────────────────────────────────────
          PANORAMIC BACKGROUND HERO IMAGE (Girl + Glass Clinic Operatory)
          Spans across the center and right side, placing the girl
          directly in the middle and the glass background under the card
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[72%] xl:w-[70%] h-full pointer-events-none z-0">
        <Image
          src="/images/treatment/hero.png"
          alt="Braces and aligners smiling patient in modern dental clinic"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover object-left"
        />
        {/* Soft horizontal gradient blend into the solid left-column background */}
        <div className="absolute inset-y-0 left-0 w-28 sm:w-36 lg:w-48 bg-gradient-to-r from-[#E8F6F8] via-[#E8F6F8]/80 to-transparent" />
        {/* Mobile vertical gradient overlay for clean contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8F6F8] via-[#E8F6F8]/60 to-transparent lg:hidden" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING HANDWRITTEN SLOGAN
          Placed right beside her head in the middle gap
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute left-[39%] xl:left-[41%] top-6 xl:top-8 z-20 pointer-events-none -rotate-6 select-none">
        <p className="font-handwriting text-lg xl:text-[21px] font-bold text-[#083258] leading-tight drop-shadow-sm">
          Straight
        </p>
        <p className="font-handwriting text-lg xl:text-[21px] font-bold text-[#083258] leading-tight pl-2 drop-shadow-sm">
          Teeth
        </p>
        <p className="font-handwriting text-lg xl:text-[21px] font-bold text-[#083258] leading-tight drop-shadow-sm">
          Brighter
        </p>
        <p className="font-handwriting text-lg xl:text-[21px] font-bold text-[#083258] leading-tight pl-3 drop-shadow-sm">
          Future
        </p>
        
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FOREGROUND CONTENT WRAPPER
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: BREADCRUMB, HEADLINE, DESCRIPTION & 4 PILLS
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[40%] xl:w-[38%] shrink-0 z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#0AADA8] mb-2"
            >
              <Link href="/" className="hover:underline transition-colors">
                Home
              </Link>
              <span className="text-[#0AADA8] font-normal">&gt;</span>
              <Link href="/treatments" className="hover:underline transition-colors">
                Treatments
              </Link>
              <span className="text-[#0AADA8] font-normal">&gt;</span>
              <span className="text-[#0AADA8] font-semibold">Braces & Aligners</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#DDF4F6] border border-[#0AADA8]/25 text-[#0AADA8] text-xs font-bold tracking-wide shadow-2xs">
                Braces & Aligners
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.1] mb-2.5">
              <span className="text-[#083258]">Braces </span>
              <span className="text-[#0AADA8]">& Aligners</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#083258] tracking-tight mb-3">
              Straighter Teeth. Healthier Smile. Greater Confidence.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-[14px] text-[#426480] leading-relaxed max-w-[440px] mb-5">
              Braces and aligners are modern orthodontic solutions that help
              correct misaligned teeth, improve your bite and give you a
              beautiful, confident smile. Whether you prefer traditional braces
              or invisible aligners, we have the right solution for you.
            </p>

            {/* 4 Feature Badges in Single Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 xl:gap-5 pt-1">
              {/* 1. Better Alignment */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                  <BetterAlignmentIcon />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#083258] leading-tight whitespace-nowrap">
                  Better<br />Alignment
                </span>
              </div>

              {/* 2. Improved Bite */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                  <ImprovedBiteIcon />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#083258] leading-tight whitespace-nowrap">
                  Improved<br />Bite
                </span>
              </div>

              {/* 3. Enhanced Oral Health */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                  <EnhancedHealthIcon />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#083258] leading-tight whitespace-nowrap">
                  Enhanced<br />Oral Health
                </span>
              </div>

              {/* 4. Boosts Confidence */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white border border-[#0AADA8]/30 flex items-center justify-center shrink-0 shadow-2xs">
                  <BoostsConfidenceIcon />
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-bold text-[#083258] leading-tight whitespace-nowrap">
                  Boosts<br />Confidence
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              MIDDLE SPACER FOR DESKTOP
              Leaves the girl in the background perfectly visible & clear
              ───────────────────────────────────────────────────────────── */}
          <div className="hidden lg:block lg:flex-1 min-w-[240px] pointer-events-none" />

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: "BOOK YOUR CONSULTATION" POPUP / CARD
              Top-aligned, floating cleanly over the glass background
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full sm:w-[290px] xl:w-[310px] shrink-0 z-10 lg:self-center">
            <div className="w-full bg-white rounded-2xl shadow-[0_12px_36px_rgba(8,50,88,0.09)] border border-[#D5ECF0] p-4 sm:p-5 transition-all hover:shadow-[0_16px_44px_rgba(8,50,88,0.13)]">
              {/* Card Header */}
              <div className="mb-3">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#083258] tracking-tight leading-tight">
                  Book Your Consultation
                </h3>
                <p className="text-[10.5px] sm:text-[11px] text-[#6B8BA2] mt-0.5">
                  Get expert advice for your perfect smile.
                </p>
              </div>

              {/* Consultation Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* 1. Select Treatment */}
                <div>
                  <label
                    htmlFor="treatment-select"
                    className="block text-[10.5px] font-semibold text-[#54738C] mb-1"
                  >
                    Select Treatment
                  </label>
                  <div className="relative">
                    <select
                      id="treatment-select"
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full appearance-none bg-[#F8FCFD] border border-[#D5ECF0] rounded-lg px-3 py-1.5 text-[11.5px] text-[#083258] font-medium focus:outline-none focus:border-[#0AADA8] focus:ring-1 focus:ring-[#0AADA8] transition-colors cursor-pointer"
                    >
                      <option value="Braces & Aligners">Braces & Aligners</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                      <option value="Cosmetic Veneers">Cosmetic Veneers</option>
                    </select>
                    {/* Dropdown Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#0AADA8]">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. Select Doctor */}
                <div>
                  <label
                    htmlFor="doctor-select"
                    className="block text-[10.5px] font-semibold text-[#54738C] mb-1"
                  >
                    Select Doctor
                  </label>
                  <div className="relative">
                    <select
                      id="doctor-select"
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full appearance-none bg-[#F8FCFD] border border-[#D5ECF0] rounded-lg px-3 py-1.5 text-[11.5px] text-[#083258] font-medium focus:outline-none focus:border-[#0AADA8] focus:ring-1 focus:ring-[#0AADA8] transition-colors cursor-pointer"
                    >
                      <option value="Dr. Priya Sharma">Dr. Priya Sharma</option>
                      <option value="Dr. Rohan Mehta">Dr. Rohan Mehta</option>
                      <option value="Dr. Amit Verma">Dr. Amit Verma</option>
                      <option value="Dr. Sneha Patel">Dr. Sneha Patel</option>
                    </select>
                    {/* Dropdown Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#0AADA8]">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 3. Select Date */}
                <div>
                  <label
                    htmlFor="date-select"
                    className="block text-[10.5px] font-semibold text-[#54738C] mb-1"
                  >
                    Select Date
                  </label>
                  <div className="relative">
                    <input
                      id="date-select"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#F8FCFD] border border-[#D5ECF0] rounded-lg px-3 py-1.5 text-[11.5px] text-[#083258] font-medium focus:outline-none focus:border-[#0AADA8] focus:ring-1 focus:ring-[#0AADA8] transition-colors cursor-pointer"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
                      <CalendarIcon />
                    </div>
                  </div>
                </div>

                {/* 4. Book Appointment Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#0AADA8] hover:bg-[#089692] text-white text-xs sm:text-[12.5px] font-bold rounded-lg shadow-[0_4px_14px_rgba(10,173,168,0.25)] hover:shadow-[0_6px_20px_rgba(10,173,168,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  <span>Book Appointment</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>

              {/* WhatsApp Quick Chat */}
              <div className="mt-2.5 text-center">
                <a
                  href="https://wa.me/919876543210?text=Hi%20SmileCare,%20I%20would%20like%20to%20consult%20about%20Braces%20and%20Aligners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-[11px] text-[#083258] hover:text-[#0AADA8] font-semibold transition-colors"
                >
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}