"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Cpu,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Clock,
  Target,
  Eye,
  CheckCircle2,
  Award,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

export function WhyChooseUs() {
  const clinicalPillars = [
    {
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />,
      tag: "Doctor-Led Care",
      title: "MDS Certified Specialists",
      description:
        "Treatments executed exclusively by board-certified dental surgeons specializing in Orthodontics, Endodontics, Implantology, and Cosmetic Smile Design.",
      highlight: "15+ Years Combined Clinical Experience",
      badge: "IDA & DCI Certified",
    },
    {
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      tag: "Digital Radiology",
      title: "Advanced 3D & Laser Diagnostics",
      description:
        "High-definition intraoral 3D scanners, ultra-low radiation digital RVG X-rays, and soft-tissue dental lasers for pinpoint clinical precision.",
      highlight: "90% Less Radiation Than Traditional X-Rays",
      badge: "HD Digital Imaging",
    },
    {
      icon: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />,
      tag: "Patient Comfort",
      title: "Painless & Gentle Dental Protocols",
      description:
        "Topical computerized anesthesia, ultra-fine micro-needles, and anxiety-free soothing operatory suites ensure a relaxed, fear-free appointment.",
      highlight: "Zero-Pain Comfort Assurance",
      badge: "Gentle Sedation Ready",
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
      tag: "Infection Control",
      title: "Hospital-Grade Class-B Sterilization",
      description:
        "Strict compliance with European EN13060 standards. All dental instruments undergo a rigorous 6-stage autoclave process and are unsealed in front of you.",
      highlight: "100% Cross-Contamination Prevention",
      badge: "ISO 9001:2015 Hygiene",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      tag: "Ethical Practice",
      title: "Transparent & Accessible Pricing",
      description:
        "Clear digital diagnosis with upfront, itemized estimates before starting any procedure. Zero hidden costs with 0% interest monthly EMI support.",
      highlight: "No Hidden Costs • 0% EMI Options",
      badge: "Honest Medical Billing",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      tag: "Urgent Care",
      title: "24/7 Priority Emergency Dental Care",
      description:
        "Immediate emergency triage for acute toothaches, fractured teeth, root infections, and dental sports injuries with an on-call doctor standing by.",
      highlight: "Instant Trauma & Toothache Relief",
      badge: "24/7 On-Call Desk",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#F3F9FB] via-white to-[#F8FCFD] border-b border-[#E2EFF2] py-3 sm:py-4 lg:py-5 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#0AADA8]/8 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#083258]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative">

        {/* ─────────────────────────────────────────────────────────────
            1. SECTION HEADER (Clinical Doctor Credibility)
           ───────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
           
 

          <p className="mt-3.5 text-sm sm:text-base text-[#55738E] leading-relaxed">
            Doctor-led dentistry designed around absolute clinical precision, medical-grade hygiene, and compassionate, pain-free patient care.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. OUR MISSION & VISION (Dual Clinical Commitment Cards)
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">

          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEEF2] shadow-[0_4px_24px_rgba(8,50,88,0.04)] hover:shadow-[0_12px_32px_rgba(10,173,168,0.1)] hover:border-[#0AADA8]/40 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#E6F8F8] to-transparent rounded-bl-full pointer-events-none opacity-80 group-hover:scale-110 transition-transform duration-500" />

            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E6F8F8] to-[#CFEFF0] border border-[#0AADA8]/20 flex items-center justify-center text-[#0AADA8] shadow-sm group-hover:bg-[#0AADA8] group-hover:text-white transition-all duration-300 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0AADA8] block">
                    Core Clinical Oath
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#083258] tracking-tight">
                    Our Medical Mission
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4C6D87] leading-relaxed">
                To deliver patient-first, evidence-based dentistry using world-class medical equipment and gentle anesthetic methods — making exceptional oral health safe, accessible, and transparent for every patient.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#EDF5F7] flex flex-wrap items-center gap-2 text-xs font-semibold text-[#083258]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1F8FA] text-[#0AADA8] text-[11px]">
                <BadgeCheck className="w-3.5 h-3.5" /> Zero-Pain Focus
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1F8FA] text-[#0AADA8] text-[11px]">
                <BadgeCheck className="w-3.5 h-3.5" /> Transparent Guidance
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1F8FA] text-[#0AADA8] text-[11px]">
                <BadgeCheck className="w-3.5 h-3.5" /> Sterile Bio-Safety
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEEF2] shadow-[0_4px_24px_rgba(8,50,88,0.04)] hover:shadow-[0_12px_32px_rgba(10,173,168,0.1)] hover:border-[#0AADA8]/40 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#E9F3FB] to-transparent rounded-bl-full pointer-events-none opacity-80 group-hover:scale-110 transition-transform duration-500" />

            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8F2FB] to-[#D5E6F6] border border-[#026EB9]/20 flex items-center justify-center text-[#026EB9] shadow-sm group-hover:bg-[#026EB9] group-hover:text-white transition-all duration-300 shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#026EB9] block">
                    Future of Oral Health
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#083258] tracking-tight">
                    Our Clinical Vision
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4C6D87] leading-relaxed">
                To be Rajasthan&apos;s most trusted multi-specialty dental destination, pioneering minimally invasive laser therapies, AI-assisted smile design, and lifetime preventive dental wellness.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#EDF5F7] flex flex-wrap items-center gap-2 text-xs font-semibold text-[#083258]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1F8FA] text-[#026EB9] text-[11px]">
                <BadgeCheck className="w-3.5 h-3.5" /> 3D Digital Imaging
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1F8FA] text-[#026EB9] text-[11px]">
                <BadgeCheck className="w-3.5 h-3.5" /> Laser Micro-Surgery
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F1F8FA] text-[#026EB9] text-[11px]">
                <BadgeCheck className="w-3.5 h-3.5" /> Preventive Longevity
              </span>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. SIX PILLARS OF CLINICAL EXCELLENCE (Doctor Feature Cards)
           ───────────────────────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0AADA8] block">
                The Prism Standard
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#083258] tracking-tight">
                6 Pillars of Clinical Distinction
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#55738E] bg-[#EAF5F8] px-3.5 py-1.5 rounded-full border border-[#D5EBF0]">
              <ShieldCheck className="w-4 h-4 text-[#0AADA8]" />
              <span>Certified Healthcare Protocols</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {clinicalPillars.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#E2EFF2] shadow-[0_4px_20px_rgba(8,50,88,0.04)] hover:shadow-[0_14px_36px_rgba(8,50,88,0.09)] hover:border-[#0AADA8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6F8F8] to-[#CFEFF0] border border-[#0AADA8]/25 flex items-center justify-center text-[#0AADA8] shadow-sm group-hover:bg-[#0AADA8] group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#0AADA8]/10 px-2.5 py-1 rounded-full border border-[#0AADA8]/15">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Medical Subtext */}
                  <h4 className="text-base sm:text-[17px] font-bold text-[#083258] group-hover:text-[#0AADA8] transition-colors leading-snug mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-[#55738E] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Clinical Highlight Assurance */}
                <div className="pt-3 border-t border-[#EEF5F7] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#083258]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0AADA8] shrink-0" />
                    <span className="leading-tight">{item.highlight}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#7896AC] font-medium pt-0.5">
                    <span>Standard:</span>
                    <span className="text-[#0AADA8] font-bold">{item.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. BOTTOM CLINICAL TRUST RIBBON & CTA
           ───────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl bg-gradient-to-r from-[#083258] via-[#0B3D6B] to-[#0AADA8] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3BF3ED] bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero-Compromise Patient Safety</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Experience the Clinical Difference at Prism Dental
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
              Book a comprehensive 3D oral diagnosis consultation with our senior dental specialists today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/appointment"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#083258] font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+918239239249"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Call Emergency Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
