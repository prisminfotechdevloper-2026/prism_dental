"use client";

import React, { useState } from "react";
import Image from "next/image";


// Phone Icon for "Call Us Now" Button

function PhoneCallIcon({ className = "w-3.5 h-3.5 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────────────────────

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need to book an appointment in advance?",
    answer:
      "While we do accommodate walk-ins for urgent dental emergencies, we strongly recommend booking in advance to ensure minimal wait time and dedicated care with your preferred specialist.",
  },
  {
    id: "faq-2",
    question: "What are your clinic timings?",
    answer:
      "Our clinic is open Monday through Saturday from 9:00 AM to 8:30 PM, and Sundays from 10:00 AM to 2:00 PM for scheduled consultations and emergency procedures.",
  },
  {
    id: "faq-3",
    question: "Is the first consultation free?",
    answer:
      "Yes! We offer a complimentary initial dental examination and smile consultation to evaluate your oral health and discuss the best personalized treatment options.",
  },
  {
    id: "faq-4",
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept all major dental and health insurance networks, corporate healthcare packages, and offer 0% interest EMI payment plans for major treatments.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, UPI payments (Google Pay, PhonePe, Paytm), net banking, cash, and easy monthly financing installments.",
  },
];

export function ContactFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F8FDFF] pb-10 sm:pb-14 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────
              CARD 1 (LEFT): "Your Smile Our Priority" (4 cols on lg)
              Split container: Operatory image on left + message on right
              ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 bg-[#EDF8FA] rounded-2xl sm:rounded-3xl border border-[#D5ECF0] overflow-hidden shadow-[0_3px_18px_rgba(8,50,88,0.04)] flex flex-col sm:flex-row h-full group hover:shadow-[0_6px_24px_rgba(8,50,88,0.07)] transition-all duration-300">
            {/* Left Half: Dental Operatory Clinic Image */}
            <div className="relative w-full sm:w-[48%] min-h-[190px] sm:min-h-full shrink-0 overflow-hidden bg-[#D8EFF2]">
              <Image
                src="/images/contact/clinic-chair.jpg"
                alt="Modern dental operatory room with high-tech dental chair"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-[#EDF8FA]/15 pointer-events-none" />
            </div>

            {/* Right Half: Text & Branding Info - Top-aligned layout */}
            <div className="w-full sm:w-[52%] p-5 sm:p-5 lg:p-5.5 flex flex-col justify-start pt-5 sm:pt-6 bg-[#EDF8FA]">
              {/* Header: Logo + 2-line title */}
              <div className="flex items-center gap-2 mb-2.5">
                <Image
                  src="/images/logo.png"
                  alt="Prism Dental Logo"
                  width={28}
                  height={28}
                  className="w-auto h-auto object-contain shrink-0"
                />
                <h3 className="text-[16.5px] sm:text-[17.5px] font-extrabold text-[#083258] leading-tight tracking-tight">
                  Your Smile <br />
                  <span className="text-[#083258]">Our Priority</span>
                </h3>
              </div>

              {/* Subtext */}
              <p className="text-xs sm:text-[12px] text-[#426480] leading-relaxed font-normal">
                We believe that a healthy smile builds confidence and a happier life.
                Let&apos;s work together for a brighter, healthier future.
              </p>

              {/* Decorative Teal Horizontal Accent Indicator */}
              <div className="pt-3 sm:pt-3.5">
                <div className="w-9 sm:w-10 h-[3px] bg-[#0AADA8] rounded-full" />
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────
              CARD 2 (MIDDLE): Frequently Asked Questions (5 cols on lg)
              Compact, elegant FAQ accordion
              ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl border border-[#D5ECF0] p-4.5 sm:p-5 lg:p-6 shadow-[0_3px_18px_rgba(8,50,88,0.04)] flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="mb-3.5 sm:mb-4">
                <h2 className="text-lg sm:text-[20px] font-extrabold text-[#083258] tracking-tight mb-0.5">
                  Frequently Asked Questions
                </h2>
                <p className="text-[11.5px] sm:text-xs text-[#426480] leading-snug">
                  Find quick answers to common questions about our clinic and dental services.
                </p>
              </div>

              {/* FAQ Accordion List - Compact spacing */}
              <div className="space-y-1.5 sm:space-y-2">
                {FAQ_LIST.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "border-[#0AADA8] bg-white shadow-[0_2px_12px_rgba(10,173,168,0.1)]"
                          : "border-[#E5F2F5] bg-[#F8FDFF] hover:border-[#0AADA8]/40 hover:bg-white"
                      }`}
                    >
                      {/* Accordion Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                        className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between text-left gap-2.5 cursor-pointer select-none transition-colors"
                      >
                        <span className="text-xs sm:text-[12.5px] font-bold text-[#083258] leading-snug">
                          {faq.question}
                        </span>
                        <span
                          className={`w-4 h-4 flex items-center justify-center shrink-0 text-base font-bold text-[#0AADA8] transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* Accordion Content */}
                      {isOpen && (
                        <div className="px-3.5 sm:px-4 pb-2.5 pt-0.5 border-t border-[#F0FAFB] animate-in fade-in-50 duration-200">
                          <p className="text-[11.5px] sm:text-xs text-[#426480] leading-relaxed pt-1">
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

          {/* ─────────────────────────────────────────────────────────
              CARD 3 (RIGHT): "Still Have Questions?" (3 cols on lg)
              Support prompt, Call Us Now CTA & telephone link
              Balanced, compact vertical centering with no excessive gap
              ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3 bg-[#EDF8FA] rounded-2xl sm:rounded-3xl border border-[#D5ECF0] p-4.5 sm:p-5 lg:p-6 shadow-[0_3px_18px_rgba(8,50,88,0.04)] flex flex-col items-center justify-center text-center h-full group hover:shadow-[0_6px_24px_rgba(8,50,88,0.07)] transition-all duration-300">
            {/* Logo Image */}
            <div className="mb-2 sm:mb-2.5 transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Prism Dental Logo"
                width={80}
                height={80}
                className="w-auto h-auto object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="text-base sm:text-lg font-extrabold text-[#083258] tracking-tight mb-1">
              Still Have Questions?
            </h3>

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-[#426480] max-w-[200px] leading-relaxed mb-3.5 sm:mb-4">
              Feel free to reach out to us. Our team is always happy to help!
            </p>

            {/* Call Us Now Action Button */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#0AADA8] hover:bg-[#089691] text-white font-bold text-xs sm:text-[13px] shadow-[0_3px_12px_rgba(10,173,168,0.25)] hover:shadow-[0_5px_18px_rgba(10,173,168,0.35)] active:scale-[0.98] transition-all duration-200"
            >
              <span>Call Us Now</span>
              <PhoneCallIcon className="w-3.5 h-3.5 text-white" />
            </a>

            {/* Telephone Number Display */}
            <a
              href="tel:+919876543210"
              className="text-[#083258] font-extrabold text-xs sm:text-[13.5px] mt-2.5 sm:mt-3 hover:text-[#0AADA8] tracking-wide transition-colors"
            >
              +91 98765 43210
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
