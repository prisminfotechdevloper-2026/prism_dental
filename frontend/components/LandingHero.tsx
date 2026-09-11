"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Calendar icon for "Book Appointment" button
function CalendarIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

// WhatsApp outline / chat icon
function WhatsAppIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.004 2c-5.518 0-9.998 4.477-9.998 9.997 0 1.76.459 3.477 1.332 4.992L2 22.001l5.143-1.312c1.472.804 3.136 1.229 4.861 1.229 5.518 0 9.998-4.477 9.998-9.997 0-5.52-4.48-9.997-9.998-9.997zm5.834 14.152c-.244.686-1.42 1.309-1.954 1.393-.505.074-1.144.106-1.838-.117-.424-.135-.97-.316-1.666-.618-2.934-1.267-4.839-4.22-4.986-4.415-.145-.195-1.192-1.579-1.192-3.012 0-1.432.748-2.138 1.013-2.43.266-.293.582-.366.776-.366.195 0 .388.002.558.01.178.009.418-.067.655.502.242.585.832 2.025.906 2.172.073.146.122.317.024.512-.098.196-.146.317-.293.489-.146.171-.307.382-.439.513-.146.145-.298.303-.128.595.17.293.758 1.25 1.626 2.025 1.116.996 2.057 1.303 2.349 1.449.292.146.463.122.634-.073.17-.195.731-.854.926-1.147.195-.292.389-.244.657-.146.268.098 1.705.805 1.998.951.293.146.488.22.56.342.074.122.074.707-.17 1.393z" />
    </svg>
  );
}

// Phone icon
function PhoneIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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
    </svg>
  );
}

// Heart + Cross Emergency Emblem
function EmergencyEmblemIcon({ className = "w-5 h-5" }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </svg>
  );
}

// Social media round SVG icons
function FacebookIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export const LandingHero = () => {
  return (
    <section className="relative w-full bg-[#EDF7FA] overflow-hidden">
      {/* ========================================================
          MAIN BOUNDED HERO CONTAINER (Reduced width, exact match)
          ======================================================== */}
      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-8 sm:py-9 lg:py-11 min-h-[400px] lg:min-h-[440px] flex items-center">
        
        {/* ======================================================
            HERO IMAGE (Shifted to Left, natural scale, seamless fade)
            ====================================================== */}
        <div className="absolute right-0 top-0 bottom-0 w-[62%] lg:w-[66%] pointer-events-none select-none overflow-hidden hidden md:block z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/heroimg.png"
              alt="Healthy Teeth Brighter Smiles - Patient and Dentist"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-[40%_center] lg:object-[42%_center]"
            />
            {/* Smooth fade on the left edge into #EDF7FA */}
            <div className="absolute inset-y-0 left-0 w-32 lg:w-44 bg-gradient-to-r from-[#EDF7FA] via-[#EDF7FA]/80 to-transparent z-1" />
            {/* Subtle edge softening */}
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#EDF7FA]/30 to-transparent z-1" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#EDF7FA]/30 to-transparent z-1" />
          </div>
        </div>

        {/* ======================================================
            PLAYFUL HANDWRITTEN DOODLE: "Healthy Teeth \n Brighter Smiles \n ⌣"
            (Positioned right above patient's head on the left)
            ====================================================== */}
        <div className="hidden md:block absolute top-2 lg:top-4 left-[44%] lg:left-[46%] pointer-events-none select-none z-20">
          <div className="font-handwriting text-[#1E3A5F] -rotate-6 text-center">
            <p className="text-xl lg:text-[23px] font-bold leading-tight drop-shadow-sm">
              Healthy Teeth
            </p>
            <p className="text-xl lg:text-[23px] font-bold leading-tight drop-shadow-sm">
              Brighter Smiles
            </p>
            {/* Cute Hand-drawn Smiley Face */}
            <div className="flex justify-center mt-0.5">
              <svg className="w-7 h-5 text-[#1E3A5F] rotate-[6deg]" viewBox="0 0 36 28" fill="currentColor">
                <circle cx="11" cy="7" r="2.2" />
                <circle cx="23" cy="7" r="2.2" />
                <path
                  d="M 8 13 C 12 24, 22 24, 26 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ======================================================
            FLOATING EMERGENCY CARD (Far Right Side)
            ====================================================== */}
         

        {/* ======================================================
            LEFT COLUMN CONTENT (Shifted slightly to the right)
            ====================================================== */}
        <div className="w-full max-w-[460px] lg:max-w-[490px] pl-2 sm:pl-6 lg:pl-8 z-10 relative">

          {/* Subtitle / Eyebrow Text */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#008D96] tracking-wide">
            <span>Healthy Smile</span>
            <span className="text-[#008D96]/50 font-normal">|</span>
            <span>Happy Life</span>
            <span className="text-base transition-transform duration-200">→</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-[45px] font-extrabold tracking-tight leading-[1.08]">
            <span className="block text-[#0D243F]">Your Smile</span>
            <span className="block text-[#008489] mt-0.5">Our Priority</span>
          </h1>

          {/* Description Paragraph */}
          <p className="mt-3 text-sm lg:text-[14.5px] text-[#52687F] leading-relaxed max-w-[440px]">
            We provide advanced &amp; affordable dental care with modern technology and expert doctors. Get the best care for a healthier, brighter smile.
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Primary CTA: Book Appointment */}
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#008489] hover:bg-[#007377] text-white px-5 py-2.5 text-sm font-semibold shadow-[0_4px_14px_rgba(0,132,137,0.22)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarIcon className="w-4.5 h-4.5 text-white" />
              <span>Book Appointment</span>
            </Link>

            {/* Secondary CTA: Chat on WhatsApp */}
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments%20and%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-[#F2FAFA] border border-[#BCE3E5] hover:border-[#008489] text-[#0D243F] px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-4.5 h-4.5 text-[#008489]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3 Pillar Features Row */}
          <div className="mt-7 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 lg:gap-6">
            {/* Feature 1: Expert Doctors */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#DEF1F2] text-[#008489] flex items-center justify-center shrink-0">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0D243F] leading-tight">
                  Expert Doctors
                </h4>
                <p className="text-[10.5px] text-[#62778A] mt-0.5 leading-tight">
                  Skilled &amp; Experienced
                </p>
              </div>
            </div>

            {/* Feature 2: Modern Technology */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#DEF1F2] text-[#008489] flex items-center justify-center shrink-0">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M9 10l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0D243F] leading-tight">
                  Modern Technology
                </h4>
                <p className="text-[10.5px] text-[#62778A] mt-0.5 leading-tight">
                  Advanced Equipment
                </p>
              </div>
            </div>

            {/* Feature 3: Affordable Care */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#DEF1F2] text-[#008489] flex items-center justify-center shrink-0">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0D243F] leading-tight">
                  Affordable Care
                </h4>
                <p className="text-[10.5px] text-[#62778A] mt-0.5 leading-tight">
                  Quality at Best Price
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Only: Image & Floating Emergency Card (Stacked neatly below for small screens) */}
          <div className="block md:hidden mt-7">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm">
              <Image
                src="/images/heroimg.png"
                alt="Healthy Teeth Brighter Smiles - Patient and Dentist"
                fill
                priority
                className="object-cover object-[42%_center]"
              />
            </div>

            {/* Mobile Emergency Card */}
            <div className="w-full rounded-2xl bg-white p-4 shadow-md border border-white/90">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E0F7F6] text-[#008D96] flex items-center justify-center shrink-0">
                  <EmergencyEmblemIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D243F]">
                    Need Emergency Dental Care?
                  </h3>
                  <p className="text-[11px] text-[#62778A]">
                    We&apos;re here for you 24/7
                  </p>
                </div>
              </div>

              <a
                href="tel:+919876543210"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#008489] hover:bg-[#007377] py-2.5 px-3 text-xs font-semibold text-white shadow-sm"
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LandingHero;