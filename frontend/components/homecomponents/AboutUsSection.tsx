"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// CUSTOM DENTAL SVG ICONS (Outlined Teal Style)
// ─────────────────────────────────────────────

// 1. Doctor / Experience Icon (Stat 1)
function ExperienceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="#0AADA8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  );
}

// 2. Happy Patients Icon (Stat 2)
function HappyPatientsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="#0AADA8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </svg>
  );
}

// 3. Satisfaction / Quality Ribbon Icon (Stat 3)
function SatisfactionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="#0AADA8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      <polyline points="9 8 11 10 15 6" />
    </svg>
  );
}

// 4. Modern Infrastructure Icon (Feature 1 - Clean Dental Chair / Clinic)
function InfrastructureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
      stroke="#0AADA8"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Tooth with sterile sparkles */}
      <path d="M7 4.5C5 4.5 4 6 4 8.5C4 12 5.5 13.5 7 16L8 20H16L17 16C18.5 13.5 20 12 20 8.5C20 6 19 4.5 17 4.5C15.5 4.5 14.5 5.5 12 7C9.5 5.5 8.5 4.5 7 4.5Z" />
      <path d="M10 11.5L14 11.5" />
      <path d="M12 9.5L12 13.5" />
    </svg>
  );
}

// 5. Advanced Technology Icon (Feature 2 - Digital Screen / Laser / X-Ray)
function AdvancedTechnologyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
      stroke="#0AADA8"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M12 16v4" />
      <path d="M8 20h8" />
      {/* Crosshair / laser target inside monitor */}
      <circle cx="12" cy="9.5" r="2.5" />
      <line x1="12" y1="5.5" x2="12" y2="6.5" />
      <line x1="12" y1="12.5" x2="12" y2="13.5" />
      <line x1="8" y1="9.5" x2="9" y2="9.5" />
      <line x1="15" y1="9.5" x2="16" y2="9.5" />
    </svg>
  );
}

// 6. Expert Team Icon (Feature 3 - Doctor with Medical Cap / Mask)
function ExpertTeamIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
      stroke="#0AADA8"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Doctor head with medical cap */}
      <path d="M7 9a5 5 0 0 1 10 0v2H7V9z" />
      <path d="M6 11h12v2a6 6 0 0 1-12 0v-2z" />
      <path d="M9 13.5h6" />
      {/* Body / Coat */}
      <path d="M4 21a8 8 0 0 1 16 0" />
      <path d="M12 16v5" />
    </svg>
  );
}

// 7. Personalized Care Icon (Feature 4 - Heart with Smiling Face)
function PersonalizedCareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
      stroke="#0AADA8"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      {/* Smile inside */}
      <path d="M9.5 11.5c.8 1 2.2 1 3 0" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export const AboutUsSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      icon: <InfrastructureIcon />,
      title: "Modern Infrastructure",
      subtitle: "Clean & Sterile Environment",
    },
    {
      icon: <AdvancedTechnologyIcon />,
      title: "Advanced Technology",
      subtitle: "Digital X-Ray, Laser Treatment",
    },
    {
      icon: <ExpertTeamIcon />,
      title: "Expert Team",
      subtitle: "Experienced & Caring Doctors",
    },
    {
      icon: <PersonalizedCareIcon />,
      title: "Personalized Care",
      subtitle: "Every Smile Matters",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-t border-[#E8F1F5]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ─────────────────────────────────────────── */}
          {/* 1. LEFT: CLINIC IMAGE WITH TOUR BADGE       */}
          {/* ─────────────────────────────────────────── */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[14/10] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(8,50,88,0.06)] border border-[#E2EEF2] group">
              <Image
                src="/images/about-clinic.jpg"
                alt="SmileCare Modern Dental Clinic Interior"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Tour Trigger Overlay (Centered / Lower Center) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                {/* Play Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play clinic tour video"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0AADA8] hover:bg-[#089692] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(10,173,168,0.45)] ring-4 ring-white/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer mb-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Glass Pill Badge: "Watch Our Clinic Tour" */}
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="cursor-pointer bg-white/95 hover:bg-white backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_8px_24px_rgba(8,50,88,0.12)] border border-white/80 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <p className="text-xs sm:text-[13px] font-bold text-[#083258] leading-tight">
                    Watch Our Clinic Tour
                  </p>
                  <p className="text-[10.5px] sm:text-[11.5px] font-medium text-[#6B8BA2] mt-0.5">
                    See Our Modern Facilities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────── */}
          {/* 2. MIDDLE: ABOUT TEXT + STATS + BUTTON     */}
          {/* ─────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Small Eyebrow */}
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[#0AADA8] mb-2">
              ABOUT US
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#083258] leading-[1.2] tracking-tight">
              Trusted Dental Care <br />
              for Every Smile
            </h2>

            {/* Description Paragraph */}
            <p className="mt-3.5 text-xs sm:text-[13.5px] text-[#54738C] leading-relaxed">
              At SmileCare Dental Clinic, we believe in providing painless, personalized and
              affordable dental care. Our team of experienced dentists uses the latest technology
              to ensure the best treatment and a comfortable experience.
            </p>

            {/* 3 Stats Counters Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 my-6 pt-1">
              {/* Stat 1 */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#E8F8F8] flex items-center justify-center shrink-0">
                  <ExperienceIcon />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-extrabold text-[#083258] leading-none">
                    10+
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#6B8BA2] font-medium mt-1 leading-tight">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#E8F8F8] flex items-center justify-center shrink-0">
                  <HappyPatientsIcon />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-extrabold text-[#083258] leading-none">
                    5K+
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#6B8BA2] font-medium mt-1 leading-tight">
                    Happy Patients
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#E8F8F8] flex items-center justify-center shrink-0">
                  <SatisfactionIcon />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-extrabold text-[#083258] leading-none">
                    100%
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#6B8BA2] font-medium mt-1 leading-tight">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-[#0AADA8] hover:bg-[#089692] text-white font-semibold text-xs sm:text-[13px] rounded-xl shadow-[0_4px_14px_rgba(10,173,168,0.25)] hover:shadow-[0_6px_20px_rgba(10,173,168,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ─────────────────────────────────────────── */}
          {/* 3. RIGHT: 4 VERTICAL FEATURE HIGHLIGHTS     */}
          {/* ─────────────────────────────────────────── */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#E8F0F3] lg:pl-8 xl:pl-9 flex flex-col justify-between space-y-6 pt-4 lg:pt-0">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 group">
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F8] group-hover:bg-[#D4F3F2] flex items-center justify-center shrink-0 transition-colors duration-200">
                  {item.icon}
                </div>

                {/* Titles */}
                <div>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-[#083258] leading-tight group-hover:text-[#0AADA8] transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-[#6B8BA2] mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────── */}
      {/* VIDEO TOUR MODAL (Popup when play clicked)  */}
      {/* ─────────────────────────────────────────── */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#083258] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#062643]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0AADA8]" />
                <h3 className="text-sm font-bold text-white">
                  SmileCare Dental Clinic - Virtual Tour
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Video / Preview Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="SmileCare Dental Clinic Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUsSection;
