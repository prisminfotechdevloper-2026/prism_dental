"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  HeartPulse,
} from "lucide-react";

// Social Icons
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#051E36] text-white overflow-hidden relative">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#0AADA8]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#026EB9]/15 blur-3xl" />

      {/* ========================================================
          PRE-FOOTER BANNER: Immediate CTA
         ======================================================== */}
      <div className="border-b border-white/10 bg-[#072847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0AADA8]/20 text-[#0AADA8] text-xs font-semibold uppercase tracking-wider mb-2">
                <HeartPulse className="w-3.5 h-3.5" />
                Prompt & Painless Appointments
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to restore your smile confidence?
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Book your comprehensive dental checkup today or consult our specialist doctors online.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(10,173,168,0.35)] transition-all hover:-translate-y-0.5"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 hover:border-[#0AADA8] bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-[#0AADA8]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MAIN FOOTER CONTENT
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="SmileCare Dental Clinic Logo"
                  width={38}
                  height={38}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  Smile<span className="text-[#0AADA8]">Care</span>
                </span>
                <span className="text-xs font-medium text-slate-300 tracking-wider mt-1">
                  Advanced Dental Clinic
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Providing modern, compassionate, and affordable dental care for patients of all ages. 
              Equipped with cutting-edge 3D diagnostic tools and sterile European-standard sterilization suites.
            </p>

            {/* Certifications & Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0AADA8]" />
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#0AADA8]" />
                IDA Certified Clinic
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SmileCare on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0AADA8] border border-white/10 text-white flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SmileCare on Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0AADA8] border border-white/10 text-white flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SmileCare on YouTube"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0AADA8] border border-white/10 text-white flex items-center justify-center transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SmileCare on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0AADA8] border border-white/10 text-white flex items-center justify-center transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#0AADA8] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  Oral Health Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#0AADA8] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0AADA8]/70" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#0AADA8] pl-2.5">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/treatments#whitening" className="text-slate-300 hover:text-[#0AADA8] transition-colors flex items-center justify-between">
                  <span>Teeth Whitening</span>
                  <span className="text-[11px] text-slate-400">Cosmetic</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments#implants" className="text-slate-300 hover:text-[#0AADA8] transition-colors flex items-center justify-between">
                  <span>Dental Implants</span>
                  <span className="text-[11px] text-slate-400">Titanium</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments#root-canal" className="text-slate-300 hover:text-[#0AADA8] transition-colors flex items-center justify-between">
                  <span>Root Canal Therapy</span>
                  <span className="text-[11px] text-slate-400">Single Visit</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments#orthodontics" className="text-slate-300 hover:text-[#0AADA8] transition-colors flex items-center justify-between">
                  <span>Braces & Clear Aligners</span>
                  <span className="text-[11px] text-slate-400">Invisalign</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments#cosmetic" className="text-slate-300 hover:text-[#0AADA8] transition-colors flex items-center justify-between">
                  <span>Veneers & Smile Design</span>
                  <span className="text-[11px] text-slate-400">Aesthetic</span>
                </Link>
              </li>
              <li>
                <Link href="/treatments#pediatric" className="text-slate-300 hover:text-[#0AADA8] transition-colors flex items-center justify-between">
                  <span>Pediatric Dentistry</span>
                  <span className="text-[11px] text-slate-400">Kids</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#0AADA8] pl-2.5">
              Clinic Contact & Hours
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0AADA8] shrink-0 mt-1" />
                <span>104, Healthcare Towers, Opp. City Central Park, Medical Enclave</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0AADA8] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#0AADA8] transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0AADA8] shrink-0" />
                <a href="mailto:care@smilecaredental.com" className="hover:text-[#0AADA8] transition-colors">
                  care@smilecaredental.com
                </a>
              </div>

              {/* Working Hours Box */}
              <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <Clock className="w-3.5 h-3.5 text-[#0AADA8]" />
                  <span>Clinic Timings:</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Mon – Sat:</span>
                  <span className="font-medium text-white">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Sunday:</span>
                  <span className="font-medium text-white">10:00 AM – 2:00 PM</span>
                </div>
                <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[#EF4444] font-semibold">
                  <span>Emergency:</span>
                  <span className="bg-[#EF4444]/20 px-2 py-0.5 rounded text-[10px]">24/7 On-Call</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2">
                Subscribe for dental health tips:
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#0AADA8] bg-[#0AADA8]/10 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! You have subscribed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#0AADA8]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================
          BOTTOM COPYRIGHT & LEGAL BAR
         ======================================================== */}
      <div className="border-t border-white/10 bg-[#031527]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} SmileCare Dental Clinic. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#0AADA8] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#0AADA8] transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-[#0AADA8] transition-colors">
                Patient Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
