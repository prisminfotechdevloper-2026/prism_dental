"use client";

import React from "react";
import Image from "next/image";

 

const TESTIMONIALS = [
  {
    name: "Ananya Singh",
    image: "/images/testimonials/patient-ananya.jpg",
    rating: 5,
    treatment: "Teeth Whitening",
    quote:
      "I had my teeth whitening treatment at SmileCare, and I couldn't be happier! The results are amazing, and the staff is so friendly and professional. Highly recommended!",
    date: "12 Aug 2025",
  },
  {
    name: "Rohit Sharma",
    image: "/images/testimonials/patient-rohit.jpg",
    rating: 5,
    treatment: "Dental Implants",
    quote:
      "The implant procedure was smooth and completely painless. The team explained everything clearly, and now I have a perfect smile. Thank you, SmileCare!",
    date: "05 Aug 2025",
  },
  {
    name: "Pooja Mehta",
    image: "/images/testimonials/patient-pooja.jpg",
    rating: 4,
    treatment: "Braces & Aligners",
    quote:
      "I got my braces here and the journey has been amazing. The doctors are very patient and supportive. My teeth look so much better now!",
    date: "28 Jul 2025",
  },
  {
    name: "Amit Verma",
    image: "/images/testimonials/patient-amit.jpg",
    rating: 4,
    treatment: "Root Canal",
    quote:
      "I was nervous about the root canal, but the entire experience was so smooth. Dr. Priya and the team made me feel comfortable. Highly professional and caring!",
    date: "20 Jul 2025",
  },
  {
    name: "Sneha Patel",
    image: "/images/testimonials/patient-sneha.jpg",
    rating: 5,
    treatment: "Cosmetic Dentistry",
    quote:
      "The cosmetic treatment gave me the confidence I needed. My smile looks natural and beautiful. The clinic is clean, modern and the staff is wonderful!",
    date: "12 Jul 2025",
  },
  {
    name: "Karan Malhotra",
    image: "/images/testimonials/patient-karan.jpg",
    rating: 5,
    treatment: "General Dentistry",
    quote:
      "Great experience overall! From consultation to treatment, everything was well explained. I appreciate the care and attention to detail. Definitely my go-to dental clinic!",
    date: "02 Jul 2025",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STAR RATING
// ─────────────────────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#F59E0B]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE REVIEW CARD
// ─────────────────────────────────────────────────────────────────────────────

function ReviewCard({ item }: { item: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E4F3F5] shadow-[0_2px_16px_rgba(8,50,88,0.06)] p-4 sm:p-6 flex flex-col gap-4 hover:shadow-[0_6px_28px_rgba(10,173,168,0.12)] transition-shadow duration-300">
      {/* Header: avatar + name + stars + treatment badge */}
      <div className="flex items-center gap-3.5">
        {/* Circular Avatar */}
        <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-[#0AADA8]/20 shadow-sm">
          <Image
            src={item.image}
            alt={`${item.name} - patient testimonial`}
            fill
            sizes="56px"
            className="object-cover object-top"
          />
        </div>

        {/* Name + Stars + Badge */}
        <div className="flex-1 min-w-0">
          <p className="text-[14px] sm:text-[15px] font-bold text-[#083258] leading-tight truncate">
            {item.name}
          </p>
          <Stars count={item.rating} />
          <span className="inline-block mt-1.5 px-2.5 py-[3px] rounded-full bg-[#E8F8F8] border border-[#0AADA8]/25 text-[#0AADA8] text-[10.5px] font-semibold tracking-wide">
            {item.treatment}
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="flex gap-2.5 items-start">
        {/* Opening quote icon */}
        <svg
          className="w-7 h-5 text-[#0AADA8] shrink-0 mt-0.5"
          viewBox="0 0 30 22"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 22V13.273C0 5.91 4.455 1.636 13.364 0l1.818 2.727C11.273 3.636 9 5.727 8.182 9.091H13.636V22H0zm16.364 0V13.273C16.364 5.91 20.818 1.636 29.727 0L31.545 2.727C27.636 3.636 25.364 5.727 24.545 9.091H30V22H16.364z" />
        </svg>
        <p className="text-[12.5px] sm:text-[13px] text-[#426480] leading-relaxed italic">
          {item.quote}
        </p>
      </div>

      {/* Date */}
      <p className="text-[11px] text-[#6B8BA2] font-medium mt-auto pt-1 border-t border-[#E4F3F5]">
        {item.date}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────────

export function TestimonialsGrid() {
  return (
    <section className="w-full bg-[#F8FDFF] py-2 sm:py-3 lg:py-5" aria-label="Patient testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">

          {/* Left: label + heading + description */}
          <div className="max-w-xl">
            {/* Section label */}
            <p className="text-[11px] sm:text-[12px] font-bold text-[#0AADA8] uppercase tracking-widest mb-2">
              Our Patients&apos; Testimonials
            </p>

            {/* Main heading */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#083258] tracking-tight leading-[1.15] mb-3">
              Real People. Real Experiences.
            </h2>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-[#426480] leading-relaxed max-w-lg">
              We are proud to have helped thousands of patients achieve healthier,
              brighter smiles. Here&apos;s what some of them have to say about their
              journey with us.
            </p>
          </div>

          {/* Right: Trust card — matching reference top-right box */}
          <div className="flex-shrink-0 lg:mt-1">
            <div className="flex items-start gap-3.5 bg-[#E8F8F8] border border-[#0AADA8]/25 rounded-2xl px-5 py-4 max-w-[260px] shadow-sm">
              {/* Teal quote icon box */}
              <div className="w-10 h-10 rounded-xl bg-[#0AADA8] flex items-center justify-center shrink-0 shadow-md shadow-[#0AADA8]/30">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 21V12.818C3 7.182 6.818 3.455 14.455 2l1.363 2.045c-3.09.818-4.909 2.545-5.545 5.228H14V21H3zm13 0V12.818C16 7.182 19.818 3.455 27.455 2l1.363 2.045c-3.09.818-4.909 2.545-5.545 5.228H27V21H16z" />
                </svg>
              </div>
              {/* Text */}
              <div>
                <p className="text-[13px] font-bold text-[#083258] leading-tight">
                  Your Trust<br />Inspires Us
                </p>
                <p className="text-[11px] text-[#426480] mt-1 leading-snug">
                  Thank you for choosing<br />SmileCare Dental Clinic!
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3×2 REVIEWS GRID ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {TESTIMONIALS.map((item) => (
            <ReviewCard key={item.name} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
