"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MessageCircle,
  Phone,
  UsersRound,
  MonitorCog,
  BadgeDollarSign,
  HeartPulse,
  ArrowRight,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// Social media SVG icons
function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export const LandingHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4FBFC] via-[#F8FDFF] to-white pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-[#D5ECF0]/50">
      {/* Soft Background Glow Circles */}
      <div className="pointer-events-none absolute -left-28 -top-10 h-96 w-96 rounded-full bg-[#0AADA8]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] rounded-full bg-[#026EB9]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-64 w-[600px] bg-[#E8F8F8]/40 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16">

          {/* =====================================================
              LEFT CONTENT: Headline, Description & Call To Actions
          ===================================================== */}
          <div className="z-10 max-w-xl lg:max-w-none">

            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0AADA8]/30 bg-[#E8F8F8] px-3.5 py-1.5 text-xs font-semibold text-[#0AADA8] shadow-sm transition-all sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#0AADA8] animate-pulse" />
              <span>Healthy Smile</span>
              <span className="h-1 w-1 rounded-full bg-[#0AADA8]" />
              <span className="flex items-center gap-1 text-[#083258]">
                Happy Life
                <ArrowRight className="h-3.5 w-3.5 text-[#0AADA8]" />
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#083258] sm:text-5xl md:text-[54px] lg:text-[56px] xl:text-[62px]">
              Your Smile
              <span className="block text-[#0AADA8] drop-shadow-sm">
                Our Priority
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#426480] sm:text-base sm:leading-7">
              Experience compassionate, pain-free dental care equipped with the latest
              German 3D imaging technology. From routine checkups to complete smile transformations,
              our specialists are here for you.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Primary: Book Appointment Route */}
              <Link
                href="/appointment"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0AADA8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(10,173,168,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#089692] hover:shadow-[0_12px_28px_rgba(10,173,168,0.38)] focus:outline-none focus:ring-2 focus:ring-[#0AADA8] focus:ring-offset-2"
              >
                <CalendarDays className="h-4.5 w-4.5 text-white transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
                <ArrowRight className="h-4 w-4 text-white/80 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary: Chat on WhatsApp */}
              <a
                href="https://wa.me/919876543210?text=Hello%20SmileCare%20Dental,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments%20and%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#BCEBE9] bg-white px-5 py-3.5 text-sm font-semibold text-[#083258] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0AADA8] hover:bg-[#E8F8F8]/60 hover:text-[#0AADA8] focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
              >
                <MessageCircle className="h-4.5 w-4.5 text-[#0AADA8] transition-transform group-hover:scale-110" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights / Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#426480]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0AADA8]" />
                Zero Waiting Time
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0AADA8]" />
                Pain-free Procedures
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0AADA8]" />
                Insurance & EMI Accepted
              </span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px w-full bg-[#D5ECF0]/80" />

            {/* =================================================
                3 PILLAR FEATURES
            ================================================= */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
              {/* Feature 1: Expert Doctors */}
              <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F8] text-[#0AADA8] ring-1 ring-[#BCEBE9]">
                  <UsersRound className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#083258]">
                    Expert Doctors
                  </h2>
                  <p className="mt-0.5 text-[11px] font-medium text-[#6B8BA2]">
                    15+ Specialists
                  </p>
                </div>
              </div>

              {/* Feature 2: Modern Technology */}
              <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF4FB] text-[#026EB9] ring-1 ring-[#B9DAF3]">
                  <MonitorCog className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#083258]">
                    Modern Tech
                  </h2>
                  <p className="mt-0.5 text-[11px] font-medium text-[#6B8BA2]">
                    3D Digital Scanners
                  </p>
                </div>
              </div>

              {/* Feature 3: Affordable Care */}
              <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F8] text-[#0AADA8] ring-1 ring-[#BCEBE9]">
                  <BadgeDollarSign className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#083258]">
                    Affordable Care
                  </h2>
                  <p className="mt-0.5 text-[11px] font-medium text-[#6B8BA2]">
                    Transparent Pricing
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* =====================================================
              RIGHT VISUAL: Dental Hero Image + Overlays + Emergency Card
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            
            {/* Main Visual Image Card */}
            <div className="relative aspect-[4/3] sm:aspect-[14/11] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl sm:rounded-[32px] border border-[#D5ECF0] bg-white shadow-[0_20px_50px_rgba(8,50,88,0.08)]">
              <Image
                src="/images/heroimg.png"
                alt="SmileCare dental surgeon and patient in a modern dental clinic"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                className="object-cover object-center transition-transform duration-700 hover:scale-102"
              />

              {/* Soft Gradient Overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#083258]/30 via-transparent to-transparent" />

              {/* Handwritten Stamp / Note */}
              <div className="absolute left-4 top-4 z-10 hidden sm:block rotate-[-4deg] rounded-2xl bg-white/85 px-4 py-2.5 shadow-md backdrop-blur-md border border-white/70">
                <p className="font-serif text-sm font-semibold italic text-[#083258]">
                  Healthy Teeth,
                  <br />
                  <span className="text-[#0AADA8]">Brighter Smiles</span>
                </p>
                <div className="text-center text-xs font-bold text-[#0AADA8] mt-0.5">
                  ˘⌣˘
                </div>
              </div>

              {/* Floating Social Proof / Rating Pill (Bottom Left of Image) */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md border border-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF8E6] text-[#F59E0B]">
                  <Star className="h-5 w-5 fill-[#F59E0B]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-[#083258]">4.9 / 5.0</span>
                    <span className="text-[10px] text-[#6B8BA2] font-medium">(1,400+ reviews)</span>
                  </div>
                  <p className="text-[10.5px] font-medium text-[#0AADA8]">
                    Top Rated Dental Care
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                EMERGENCY 24/7 OVERLAY CARD
            ================================================= */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:right-[-12px] sm:-bottom-8 lg:right-[-18px] lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto z-20 w-full sm:w-[260px] rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_18px_45px_rgba(8,50,88,0.14)] backdrop-blur-lg">
              
              {/* Emergency Icon with Pulse */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F8F8] text-[#0AADA8] ring-2 ring-[#BCEBE9]">
                  <HeartPulse className="h-6 w-6 animate-pulse" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FEF2F2] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#EF4444] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444] animate-ping" />
                  Live 24/7
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-3 text-sm font-bold leading-snug text-[#083258] sm:text-base">
                Need Emergency
                <br />
                Dental Care?
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#6B8BA2]">
                Severe toothache or dental trauma? We are ready to assist immediately.
              </p>

              {/* Direct Call Button */}
              <a
                href="tel:+919876543210"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0AADA8] py-2.5 px-3 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#089692] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>+91 98765 43210</span>
              </a>

              {/* Divider */}
              <div className="my-3.5 h-px bg-[#D5ECF0]" />

              {/* Social Channels */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#6B8BA2]">
                  Follow Clinic
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SmileCare on Facebook"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5FBFC] text-[#083258] transition-all hover:bg-[#0AADA8] hover:text-white"
                  >
                    <FacebookIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SmileCare on Instagram"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5FBFC] text-[#083258] transition-all hover:bg-[#0AADA8] hover:text-white"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SmileCare on YouTube"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5FBFC] text-[#083258] transition-all hover:bg-[#0AADA8] hover:text-white"
                  >
                    <YouTubeIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SmileCare on LinkedIn"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5FBFC] text-[#083258] transition-all hover:bg-[#0AADA8] hover:text-white"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingHero;