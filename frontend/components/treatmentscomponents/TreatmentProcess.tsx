"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Scan,
  ClipboardList,
  Sparkles,
  Smile,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

interface ProcessStep {
  step: number;
  stepLabel: string;
  category: string;
  title: string;
  description: string;
  image: string;
  companionIcon: React.ReactNode;
  highlight: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    stepLabel: "Step 01",
    category: "Consultation",
    title: "Initial Assessment",
    description:
      "Comprehensive oral evaluation, clinical smile examination, and in-depth discussion about your aesthetic goals.",
    image: "/images/teeth_home/teeth1.png",
    companionIcon: <Stethoscope className="w-3.5 h-3.5 text-white" />,
    highlight: "1-on-1 Doctor Assessment",
  },
  {
    step: 2,
    stepLabel: "Step 02",
    category: "3D Imaging",
    title: "Digital Smile Scan",
    description:
      "High-definition intraoral 3D scanning, low-dose digital RVG X-rays, and facial aesthetic mapping for precision diagnosis.",
    image: "/images/teeth_home/teeth1.png",
    companionIcon: <Scan className="w-3.5 h-3.5 text-white" />,
    highlight: "3D Virtual Oral Mapping",
  },
  {
    step: 3,
    stepLabel: "Step 03",
    category: "Planning",
    title: "Custom Roadmap",
    description:
      "Tailored clinical roadmap selecting the optimal treatment combination (aligners, veneers, or whitening) with transparent costs.",
    image: "/images/teeth_home/braces_dental.png",
    companionIcon: <ClipboardList className="w-3.5 h-3.5 text-white" />,
    highlight: "Pre-Visualized Simulation",
  },
  {
    step: 4,
    stepLabel: "Step 04",
    category: "Procedure",
    title: "Gentle Treatment",
    description:
      "Painless clinical execution using computerized local numbing, sterile Class-B instruments, and advanced laser equipment.",
    image: "/images/teeth_home/gum_treatment.png",
    companionIcon: <Sparkles className="w-3.5 h-3.5 text-white" />,
    highlight: "100% Painless & Sterile Care",
  },
  {
    step: 5,
    stepLabel: "Step 05",
    category: "Final Reveal",
    title: "Stunning New Smile",
    description:
      "Walk out with a brighter, symmetrical, and confident smile along with personalized long-term dental maintenance advice.",
    image: "/images/teeth_home/teeth_whiting.png",
    companionIcon: <Smile className="w-3.5 h-3.5 text-white" />,
    highlight: "Radiant & Confident Results",
  },
];

export function TreatmentProcess() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6FCFD] via-white to-[#F0F9FB] py-3 sm:py-4 lg:py-5 border-b border-[#E3F0F4] relative overflow-hidden">
      {/* Ambient background soft glow */}
      <div className="pointer-events-none absolute -top-20 right-1/4 w-96 h-96 bg-[#0AADA8]/6 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 bg-[#083258]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative">
        
        {/* ─────────────────────────────────────────────────────────────
            SECTION HEADER
           ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#0AADA8] uppercase mb-2 px-3 py-1 rounded-full bg-[#E6F8F8] border border-[#0AADA8]/20">
              <CalendarCheck className="w-3.5 h-3.5" />
              Treatment Journey &amp; Process
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#083258] tracking-tight leading-tight">
              How Your Smile Transformation Works
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-[#52687F] leading-relaxed">
              A structured 5-step clinical pathway engineered for maximum comfort, zero guesswork, and predictable aesthetic outcomes.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#083258] bg-white px-3.5 py-2 rounded-xl border border-[#D7EBF0] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0AADA8]" />
            <span>Doctor-Supervised Protocol</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5 PROCESS STEPS ROW WITH CONNECTING ARROWS
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 xl:gap-4 items-stretch">
          {PROCESS_STEPS.map((item, index) => (
            <div key={item.step} className="relative flex flex-col">
              
              {/* Card Container */}
              <div className="group relative w-full h-full bg-white rounded-2xl border border-[#D5ECF0] p-5 sm:p-5.5 shadow-[0_4px_20px_rgba(8,50,88,0.03)] hover:shadow-[0_12px_32px_rgba(10,173,168,0.12)] hover:border-[#0AADA8]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                
                <div>
                  {/* Top Bar: Step Number + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#083258] to-[#0AADA8] text-white text-xs font-extrabold flex items-center justify-center shadow-xs">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0AADA8] bg-[#0AADA8]/10 px-2.5 py-0.5 rounded-full border border-[#0AADA8]/15">
                      {item.category}
                    </span>
                  </div>

                  {/* Dental PNG Icon Container with Micro-Badge */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E6F8F8] via-[#F4FBFA] to-[#D5F3F2] border border-[#0AADA8]/25 flex items-center justify-center p-2.5 shadow-xs group-hover:scale-105 group-hover:border-[#0AADA8]/45 transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={44}
                        height={44}
                        className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Companion Mini Icon */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0AADA8] flex items-center justify-center shadow-xs">
                        {item.companionIcon}
                      </div>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#083258] tracking-tight mb-1.5 text-center group-hover:text-[#0AADA8] transition-colors">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#52687F] leading-relaxed text-center mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Assurance */}
                <div className="pt-2.5 border-t border-[#EEF6F8] flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#0AADA8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0AADA8] shrink-0" />
                  <span className="leading-tight">{item.highlight}</span>
                </div>

              </div>

              {/* Connecting Circular Arrow (Desktop only, between cards) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 xl:-right-3.5 top-[38%] -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#0AADA8]/35 shadow-xs flex items-center justify-center text-[#0AADA8] group-hover:border-[#0AADA8]">
                    <ArrowRight className="w-3 h-3 text-[#0AADA8]" />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM TRUST STRIP & CONSULTATION CTA
           ───────────────────────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-white border border-[#D5ECF0] p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-[#083258]">
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0AADA8]" />
              No-Obligation Consultation
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0AADA8]" />
              3D Virtual Smile Preview
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0AADA8]" />
              0% Interest Monthly EMI
            </span>
          </div>

          <Link
            href="/appointment"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-bold transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group shrink-0"
          >
            <span>Book Smile Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default TreatmentProcess;
