"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS MATCHING TECHNOLOGY LIST REFERENCE
// ─────────────────────────────────────────────────────────────────────────────

// 1. Digital X-Ray & 3D Imaging
function DigitalXRayIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="15" x="3" y="4.5" rx="2.5" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// 2. Laser Treatment
function LaserTreatmentIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="11" r="5" />
      <path d="M12 2v4" />
      <path d="M12 16v6" />
      <path d="M4 11h2" />
      <path d="M18 11h2" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 3. CAD/CAM Technology (3D Tooth Scanner / Milling)
function CadCamIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7V4h3" />
      <path d="M20 7V4h-3" />
      <path d="M4 17v3h3" />
      <path d="M20 17v3h-3" />
      {/* Tooth profile in scanner */}
      <path d="M9 10c0-1.5 1-2.5 3-2.5s3 1 3 2.5c0 2-1 3-1 5h-4c0-2-1-3-1-5Z" />
    </svg>
  );
}

// 4. Advanced Sterilization (Clean / Hygiene / Shield Spark)
function SterilizationIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  );
}

// Arrow Right Icon
function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function OurTechnology() {
  const techFeatures = [
    {
      id: "digital-xray",
      title: "Digital X-Ray & 3D Imaging",
      description: "Accurate diagnosis with low radiation",
      icon: <DigitalXRayIcon />,
    },
    {
      id: "laser-treatment",
      title: "Laser Treatment",
      description: "Painless & faster recovery",
      icon: <LaserTreatmentIcon />,
    },
    {
      id: "cad-cam",
      title: "CAD/CAM Technology",
      description: "Same-day crowns & restorations",
      icon: <CadCamIcon />,
    },
    {
      id: "sterilization",
      title: "Advanced Sterilization",
      description: "Safe & hygienic treatment environment",
      icon: <SterilizationIcon />,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 border-b border-[#E8F1F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: CLINIC OPERATORY IMAGE WITH HANDWRITING OVERLAY
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[38%] xl:w-[39%] shrink-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[14/10] rounded-2xl overflow-hidden shadow-[0_6px_25px_rgba(8,50,88,0.06)] border border-[#E2EEF2] group">
              <Image
                src="/images/about-clinic.jpg"
                alt="Modern dental clinic operatory suite with high-tech dental chair and monitor"
                fill
                sizes="(max-width: 1024px) 100vw, 39vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Decorative Handwritten Slogan Overlay on Operatory Wall */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-6 pointer-events-none text-right -rotate-3 sm:-rotate-6 select-none">
                <p className="font-handwriting text-lg sm:text-xl lg:text-[22px] font-bold text-[#083258] leading-tight drop-shadow-sm">
                  Modern Technology
                </p>
                <p className="font-handwriting text-lg sm:text-xl lg:text-[22px] font-bold text-[#083258] leading-tight drop-shadow-sm">
                  Better Results
                </p>
                <div className="flex justify-end pr-2 pt-1">
                  <span className="font-handwriting text-2xl font-bold text-[#083258]">
                    :)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              CENTER COLUMN: HEADLINE, DESCRIPTION & CTA BUTTON
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[32%] xl:w-[31%] lg:px-6 xl:px-8 flex flex-col items-start justify-center">
            {/* Eyebrow / Tag */}
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0AADA8] mb-2">
              OUR TECHNOLOGY
            </span>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#083258] leading-tight tracking-tight mb-3">
              Modern Technology for Better Dental Care
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] text-[#426480] leading-relaxed mb-6">
              We use the latest dental technology to ensure accurate diagnosis, comfortable treatment and long-lasting results.
            </p>

            {/* Learn More Button */}
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-[0_4px_14px_rgba(10,173,168,0.25)] hover:shadow-[0_6px_20px_rgba(10,173,168,0.35)] active:scale-95 group"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Vertical Divider Between Center and Right Column (Desktop) */}
          <div className="hidden lg:block w-[1px] h-64 bg-[#D7EBF0] shrink-0 self-center" />

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: 4 TECHNOLOGY FEATURE ITEMS
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[28%] xl:w-[28%] lg:pl-6 xl:pl-8 flex flex-col justify-center space-y-4 sm:space-y-5">
            {techFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-3.5 group cursor-default"
              >
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-[#DFF4F6] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-[#083258] leading-snug group-hover:text-[#0AADA8] transition-colors duration-200">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#54738C] leading-snug mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
