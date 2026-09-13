"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// TREATMENT DATA (PNG LOGOS FROM images/teeth_home)
// ─────────────────────────────────────────────
const treatments = [
  {
    id: 1,
    image: "/images/teeth_home/teeth1.png",
    title: "Dental Implants",
    subtitle: "Permanent solution for missing teeth",
    href: "/treatments#dental-implants",
  },
  {
    id: 2,
    image: "/images/teeth_home/teeth1.png",
    title: "Root Canal Treatment",
    subtitle: "Save your natural tooth",
    href: "/treatments#root-canal",
  },
  {
    id: 3,
    image: "/images/teeth_home/teeth_whiting.png",
    title: "Teeth Whitening",
    subtitle: "Brighter & whiter smile",
    href: "/treatments#teeth-whitening",
  },
  {
    id: 4,
    image: "/images/teeth_home/braces_dental.png",
    title: "Braces & Aligners",
    subtitle: "Straighten your teeth",
    href: "/treatments#braces-aligners",
  },
  {
    id: 5,
    image: "/images/teeth_home/teeth1.png",
    title: "Dental Crowns & Bridges",
    subtitle: "Restore your smile",
    href: "/treatments#crowns-bridges",
  },
  {
    id: 6,
    image: "/images/teeth_home/teeth1.png",
    title: "Tooth Extraction",
    subtitle: "Safe & painless procedure",
    href: "/treatments#tooth-extraction",
  },
  {
    id: 7,
    image: "/images/teeth_home/pediatrics.png",
    title: "Pediatric Dentistry",
    subtitle: "Special care for kids",
    href: "/treatments#pediatric",
  },
  {
    id: 8,
    image: "/images/teeth_home/teeth_whiting.png",
    title: "Cosmetic Dentistry",
    subtitle: "Enhance your natural beauty",
    href: "/treatments#cosmetic",
  },
  {
    id: 9,
    image: "/images/teeth_home/gum_treatment.png",
    title: "Gum Treatment",
    subtitle: "Healthy gums, healthy smile",
    href: "/treatments#gum-treatment",
  },
];

// ─────────────────────────────────────────────
// TREATMENT CARD (SAME ORIGINAL SIZING & WIDTH)
// ─────────────────────────────────────────────
function TreatmentCard({
  image,
  title,
  subtitle,
  href,
}: {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 bg-white border border-[#E4EEF2] rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:border-[#0AADA8]/40 hover:shadow-[0_6px_24px_rgba(10,173,168,0.10)] hover:-translate-y-0.5 cursor-pointer h-full"
    >
      {/* Icon Badge with PNG Logo */}
      <div className="w-12 h-12 rounded-xl bg-[#E8F8F8] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#D6F3F2] p-2">
        <Image
          src={image}
          alt={title}
          width={36}
          height={36}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-sm sm:text-[14.5px] font-bold text-[#0D243F] leading-snug group-hover:text-[#008489] transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-0.5 text-[12px] sm:text-[12.5px] text-[#6B8BA2] leading-snug">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────
// MAIN SECTION EXPORT
// ─────────────────────────────────────────────
export const TreatmentsSection = () => {
  return (
    <section className="w-full bg-[#F8FDFF] py-4 sm:py-6 lg:py-8 border-t border-[#E4EEF2]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex items-start justify-between gap-4 mb-6 sm:mb-7">
          <div>
            {/* Eyebrow label */}
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-widest text-[#0AADA8] mb-1.5">
              Our Treatments
            </p>
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0D243F] leading-tight">
              Popular Dental Treatments
            </h2>
            {/* Sub-description */}
            <p className="mt-1.5 text-sm sm:text-[14.5px] text-[#6B8BA2] max-w-xl leading-relaxed">
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          {/* View All Link */}
          <Link
            href="/treatments"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors duration-200 whitespace-nowrap mt-1 shrink-0"
          >
            View All Treatments
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* ── Grid with original column widths: grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {treatments.map((t) => (
            <TreatmentCard
              key={t.id}
              image={t.image}
              title={t.title}
              subtitle={t.subtitle}
              href={t.href}
            />
          ))}
        </div>

        {/* ── Mobile: View All Link ── */}
        <div className="flex sm:hidden justify-center mt-6">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors duration-200"
          >
            View All Treatments
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
