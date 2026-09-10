"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// 2. Chevron Down Icon for "Treatments" dropdown
function ChevronDownIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// 3. Phone with signal waves icon matching the screenshot
function PhoneCallIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.5 2.5a8.5 8.5 0 0 1 7 7" />
      <path d="M14.5 6a5 5 0 0 1 3.5 3.5" />
    </svg>
  );
}

// 4. White Calendar Icon inside "Book Appointment" button
function CalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
      <circle cx="8" cy="18" r="1" fill="currentColor" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
      <circle cx="16" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

// Navigation links list
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Treatments", href: "/treatments", hasDropdown: true },
  { name: "Doctors", href: "/doctors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog", isActive: true }, // Highlighted as active in screenshot
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#D5ECF0]/80 shadow-[0_2px_12px_rgba(8,50,88,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* ========================================================
              LEFT PART: LOGO (Part 1: logo.png image + Part 2: text)
             ======================================================== */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0AADA8] rounded-xl group transition-transform hover:opacity-95"
            aria-label="SmileCare Dental Clinic Home"
          >
            {/* Part 1: Logo Icon from /imags/logo.png */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Image
                src="/imags/logo.png"
                alt="SmileCare Dental Clinic Logo"
                width={42}
                height={40}
                priority
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              />
            </div>

            {/* Part 2: Logo Text */}
            <div className="flex flex-col justify-center select-none">
              <div className="text-[21px] font-bold tracking-tight leading-none text-[#083258]">
                Smile<span className="text-[#0AADA8]">Care</span>
              </div>
              <span className="text-[11px] font-medium text-[#6B8BA2] tracking-normal mt-[3px] leading-none">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* ========================================================
              MIDDLE PART: NAVBAR LINKS
             ======================================================== */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_ITEMS.map((item) => {
              if (item.isActive) {
                // Active link: "Blog" with teal text and bottom indicator line
                return (
                  <div key={item.name} className="relative flex flex-col items-center">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-[#0AADA8] transition-colors py-1 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                    {/* Active Underline Indicator matching logo teal */}
                    <span className="absolute -bottom-2 w-5 h-[2.5px] bg-[#0AADA8] rounded-full" />
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#426480] hover:text-[#0AADA8] transition-colors py-1 focus:outline-none"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-3.5 h-3.5 text-[#6B8BA2] mt-0.5" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================
              RIGHT PART: 2 DIVS
              Div 1: Phone Icon + Mobile & Emergency 24/7
              Div 2: Book Appointment Button
             ======================================================== */}
          <div className="hidden sm:flex items-center gap-6 xl:gap-7">
            
            {/* Div 1: Contact Info (Blue Icon + Mobile Number + Emergency 24/7) */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              {/* Phone Icon (Ocean Blue #026EB9 matching right tooth stroke) */}
              <div className="w-8 h-8 flex items-center justify-center text-[#026EB9] group-hover:scale-105 transition-transform shrink-0">
                <PhoneCallIcon className="w-[22px] h-[22px]" />
              </div>

              {/* Mobile Number & Emergency Status */}
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[13px] font-bold text-[#083258] tracking-tight group-hover:text-[#026EB9] transition-colors">
                  +91 98765 43210
                </span>
                <span className="text-[10.5px] font-semibold text-[#EF4444] tracking-wide mt-0.5">
                  Emergency 24/7
                </span>
              </div>
            </a>

            {/* Div 2: Book Appointment Button */}
            <div>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0AADA8] hover:bg-[#089692] text-white text-[13px] font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_14px_rgba(10,173,168,0.28)] hover:shadow-[0_6px_20px_rgba(10,173,168,0.38)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:ring-offset-2"
              >
                <CalendarIcon className="w-4 h-4 text-white shrink-0" />
                <span>Book Appointment</span>
              </Link>
            </div>

          </div>

          {/* Mobile Menu Hamburger (for smaller screens) */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/appointment"
              className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0AADA8] text-white text-xs font-semibold"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#083258] hover:bg-[#E8F8F8] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D5ECF0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.isActive
                    ? "text-[#0AADA8] bg-[#E8F8F8] font-semibold"
                    : "text-[#426480] hover:bg-[#F5FBFC] hover:text-[#0AADA8]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#D5ECF0] space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg bg-[#F5FBFC] text-[#083258]"
            >
              <PhoneCallIcon className="w-5 h-5 text-[#026EB9]" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold">+91 98765 43210</span>
                <span className="text-[10px] font-semibold text-[#EF4444]">Emergency 24/7</span>
              </div>
            </a>

            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#0AADA8] text-white text-xs font-semibold shadow-sm"
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
