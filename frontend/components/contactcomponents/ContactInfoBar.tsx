"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM CRISP SVG ICONS MATCHING REFERENCE UI
// ─────────────────────────────────────────────────────────────────────────────

function PhoneCallIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function EmailEnvelopeIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function Clock24Icon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT INFO BAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function ContactInfoBar() {
  return (
    <section className="w-full bg-[#F8FDFF] py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F6F8] border border-[#D5ECF0] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_rgba(8,50,88,0.03)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x lg:divide-x divide-[#D5ECF0]/80">
            
            {/* 1. CALL US */}
            <div className="flex items-start gap-3.5 sm:gap-4 pb-5 sm:pb-0 sm:pr-4 lg:pr-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0AADA8] to-[#047773] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 hover:scale-105">
                <PhoneCallIcon />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="text-xs font-semibold text-[#083258]">
                  Call Us
                </h3>
                <a
                  href="tel:+919876543210"
                  className="block text-sm sm:text-base font-bold text-[#083258] hover:text-[#0AADA8] transition-colors truncate"
                >
                  +91 98765 43210
                </a>
                <p className="text-[11.5px] sm:text-xs text-[#426480]">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            {/* 2. EMAIL US */}
            <div className="flex items-start gap-3.5 sm:gap-4 py-5 sm:py-0 sm:px-4 lg:px-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0AADA8] to-[#047773] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 hover:scale-105">
                <EmailEnvelopeIcon />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="text-xs font-semibold text-[#083258]">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@smilecare.com"
                  className="block text-sm sm:text-base font-bold text-[#083258] hover:text-[#0AADA8] transition-colors truncate"
                >
                  contact@smilecare.com
                </a>
                <p className="text-[11.5px] sm:text-xs text-[#426480]">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            {/* 3. VISIT US */}
            <div className="flex items-start gap-3.5 sm:gap-4 py-5 sm:py-0 sm:px-4 lg:px-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0AADA8] to-[#047773] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 hover:scale-105">
                <LocationPinIcon />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="text-xs font-semibold text-[#083258]">
                  Visit Us
                </h3>
                <div className="text-xs sm:text-[13px] font-bold text-[#083258] leading-tight">
                  <p>Near Bus Stand, Ramganj Mandi,</p>
                  <p className="mt-0.5">Kota, Raj - 326519</p>
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-[#426480]">
                  (Opp. Main Bus Stand)
                </p>
              </div>
            </div>

            {/* 4. EMERGENCY */}
            <div className="flex items-start gap-3.5 sm:gap-4 pt-5 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0AADA8] to-[#047773] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 hover:scale-105">
                <Clock24Icon />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h3 className="text-xs font-semibold text-[#083258]">
                  Emergency
                </h3>
                <a
                  href="tel:+919876543210"
                  className="block text-sm sm:text-base font-bold text-[#083258] hover:text-[#EF4444] transition-colors truncate"
                >
                  +91 98765 43210
                </a>
                <p className="text-[11.5px] sm:text-xs text-[#426480]">
                  24/7 Available
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
