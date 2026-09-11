"use client";

import React, { useState } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SVG ICONS
// ─────────────────────────────────────────────────────────────────────────────

// Chevron Left
function ChevronLeftIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

// Chevron Right
function ChevronRightIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#0AADA8]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// Star Rating Icon
function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  comment: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ritika Verma",
    avatar: "/images/doctors/doctor-sneha.jpg",
    comment:
      "I got my smile makeover at SmileCare Dental Clinic, and I couldn't be happier! The results are natural, beautiful and my confidence has grown so much.",
  },
  {
    id: "t2",
    name: "Aakash Sharma",
    avatar: "/images/doctors/doctor-rahul.jpg",
    comment:
      "The clear aligners treatment completely transformed my smile in just 8 months. The doctors were gentle, professional, and guided me at every step.",
  },
  {
    id: "t3",
    name: "Meera Patel",
    avatar: "/images/doctors/doctor-priya.jpg",
    comment:
      "Laser teeth whitening was quick, completely painless and gave me 7 shades brighter teeth for my special day. Highly recommend SmileCare!",
  },
  {
    id: "t4",
    name: "Vikram Malhotra",
    avatar: "/images/doctors/doctor-amit.jpg",
    comment:
      "Outstanding cosmetic dental veneers! The precision, cleanliness of the clinic, and expert care made all the difference in my confidence.",
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is cosmetic dentistry safe?",
    answer:
      "Yes, absolutely. When performed by experienced and certified dental specialists using modern equipment, cosmetic dental procedures like whitening, veneers, and bonding are completely safe, effective, and minimally invasive.",
  },
  {
    id: "faq-2",
    question: "How long do veneers last?",
    answer:
      "High-quality porcelain veneers typically last between 10 to 15+ years with proper oral hygiene, regular dental check-ups, and mindful care.",
  },
  {
    id: "faq-3",
    question: "Does teeth whitening cause sensitivity?",
    answer:
      "Mild, temporary sensitivity can occur for 24–48 hours after in-office whitening. We use advanced desensitizing gels and gentle laser wavelengths to minimize any discomfort.",
  },
  {
    id: "faq-4",
    question: "Can I get a smile makeover in one visit?",
    answer:
      "Certain cosmetic treatments like professional laser teeth whitening and composite bonding can be completed in a single 1-hour session. Comprehensive makeovers like porcelain veneers or aligners may take 2 to 3 visits.",
  },
  {
    id: "faq-5",
    question: "What is the cost of cosmetic dentistry?",
    answer:
      "The cost depends on the specific treatment plan, ranging from ₹ 10,000 for laser whitening to ₹ 1,50,000+ for custom porcelain veneers or comprehensive smile makeovers. We also provide flexible EMI options.",
  },
];

export function TreatmentTestimonialsAndFaq() {
  // Left Slider State
  const [activeSlide, setActiveSlide] = useState(0);

  // Right FAQ Accordion Single Selection State (Only one question open at a time)
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const handlePrev = () => {
    setActiveSlide((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const toggleFaq = (id: string) => {
    // Single selection feature: clicking the open one closes it, clicking another closes the previous and opens the new one
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const currentTestimonial = TESTIMONIALS[activeSlide];

  return (
    <section className="w-full bg-[#FFFFFF] py-2 sm:py-2 lg:py-4 border-b border-[#E8F3F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* 2 Sub-components Side-by-Side on Desktop */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 xl:gap-12">
          
          {/* ─────────────────────────────────────────────────────────────
              1. LEFT SUB-COMPONENT: PATIENT TESTIMONIALS (SLIDER)
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[48%] flex flex-col justify-between">
            
            {/* Header */}
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#083258] tracking-tight mb-1">
                Patient Testimonials
              </h2>
              <p className="text-xs sm:text-[13px] font-semibold text-[#426480]">
                Real Stories. Real Smiles.
              </p>
            </div>

            {/* Testimonial Card with Floating Slider Arrows */}
            <div className="relative w-full">
              
              {/* Card Container */}
              <div className="bg-white rounded-3xl border border-[#D5ECF0] p-6 sm:p-7 shadow-[0_4px_24px_rgba(8,50,88,0.04)] transition-all duration-300 min-h-[220px] flex items-center">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
                  
                  {/* Patient Avatar Photo */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-slate-100">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top transition-opacity duration-300"
                    />
                  </div>

                  {/* Comment & Author Details */}
                  <div className="flex-1 text-center sm:text-left">
                    
                    {/* Quotation Mark */}
                    <div className="text-[#0AADA8] text-3xl font-serif font-bold leading-none mb-1 select-none">
                      “
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs sm:text-[13px] text-[#083258] leading-relaxed mb-3">
                      &quot;{currentTestimonial.comment}&quot;
                    </p>

                    {/* Patient Name */}
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#083258] tracking-tight">
                      {currentTestimonial.name}
                    </h3>

                    {/* 5-Star Rating */}
                    <div className="flex items-center justify-center sm:justify-start gap-0.5 mt-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D5ECF0] shadow-md flex items-center justify-center text-[#0AADA8] hover:bg-[#E8F8FA] hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <ChevronLeftIcon />
              </button>

              {/* Floating Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#D5ECF0] shadow-md flex items-center justify-center text-[#0AADA8] hover:bg-[#E8F8FA] hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <ChevronRightIcon />
              </button>

            </div>

            {/* Pagination Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              {TESTIMONIALS.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setActiveSlide(dotIndex)}
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === dotIndex
                      ? "w-6 bg-[#0AADA8]"
                      : "w-2 bg-[#D5ECF0] hover:bg-[#0AADA8]/50"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* ─────────────────────────────────────────────────────────────
              VERTICAL DIVIDER (Desktop Only)
              ───────────────────────────────────────────────────────────── */}
          <div className="hidden lg:block w-[1px] bg-[#E0EFF2] self-stretch my-2" />

          {/* ─────────────────────────────────────────────────────────────
              2. RIGHT SUB-COMPONENT: FAQS (SINGLE SELECTION ACCORDION)
              ───────────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[48%] flex flex-col justify-between">
            
            {/* Header */}
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#083258] tracking-tight mb-1">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-[13px] font-semibold text-[#426480]">
                Get answers to common questions about cosmetic dentistry.
              </p>
            </div>

            {/* 5 Accordion Questions (Single Selection Feature) */}
            <div className="space-y-2.5 w-full">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                      isOpen
                        ? "border-[#0AADA8] shadow-[0_4px_16px_rgba(10,173,168,0.1)]"
                        : "border-[#D5ECF0] hover:border-[#0AADA8]/50 shadow-2xs"
                    }`}
                  >
                    {/* Question Toggle Button */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left cursor-pointer select-none"
                    >
                      <span className="text-xs sm:text-[13.5px] font-bold text-[#083258] tracking-tight leading-snug">
                        {faq.question}
                      </span>

                      {/* Plus / Minus Indicator */}
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-base font-bold transition-transform duration-200 ${
                          isOpen
                            ? "text-[#0AADA8] rotate-45"
                            : "text-[#0AADA8]"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Answer Body with Smooth Transition */}
                    {isOpen && (
                      <div className="px-5 pb-4 pt-0 border-t border-[#F0FAFB]">
                        <p className="text-xs sm:text-[12.5px] text-[#426480] leading-relaxed pt-2">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
