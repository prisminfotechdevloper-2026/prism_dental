"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_SPACES, ClinicSpace } from "./galleryData";

export function GalleryClinicTour() {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  const activeSpace: ClinicSpace = CLINIC_SPACES[activeSpaceIndex];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D5ECF0] relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0AADA8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F5F6] border border-[#0AADA8]/30 text-[#0AADA8] text-xs font-extrabold tracking-wide uppercase shadow-2xs mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0AADA8]" />
              Virtual Clinic Ambience &amp; Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#083258] tracking-tight leading-tight">
              Hospital-Grade Standards. <span className="text-[#0AADA8]">Spa-Like Comfort.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#426480] max-w-md leading-relaxed">
            Take a closer look inside SmileCare Dental Center. Every square foot is engineered for clinical sterility, patient serenity, and world-class dental excellence.
          </p>
        </div>

        {/* Space Selector Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {CLINIC_SPACES.map((space, index) => {
            const isActive = activeSpaceIndex === index;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpaceIndex(index)}
                className={`p-3 sm:p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#083258] text-white border-[#083258] shadow-md -translate-y-0.5"
                    : "bg-[#F8FDFF] text-[#083258] border-[#D5ECF0] hover:bg-[#EBF7F9]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10.5px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#0AADA8] text-white"
                        : "bg-[#E8F8F8] text-[#0AADA8]"
                    }`}
                  >
                    Suite 0{index + 1}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-[#65F4F0]" : "bg-[#D5ECF0]"
                    }`}
                  />
                </div>
                <div className="text-xs sm:text-sm font-extrabold leading-tight">
                  {space.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Space Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8FDFF] rounded-3xl border border-[#D5ECF0] p-4 sm:p-6 lg:p-8 shadow-sm">
          
          {/* Main Panorama Image with Hotspots (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5ECF0] bg-slate-900 group">
            <Image
              src={activeSpace.imageUrl}
              alt={activeSpace.name}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#083258] text-xs font-bold shadow-md border border-[#D5ECF0]">
              {activeSpace.tagline}
            </div>

            {/* Pulse Hotspot Point on Image */}
            <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#0AADA8]" />
              <span>Certified ISO 9001 Hygiene</span>
            </div>
          </div>

          {/* Space Details & Specifications (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold text-[#0AADA8] uppercase tracking-wider mb-1">
                Facility Spotlight
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#083258] tracking-tight mb-2">
                {activeSpace.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#426480] leading-relaxed mb-5">
                {activeSpace.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2 mb-6">
                {activeSpace.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#083258]">
                    <div className="w-4 h-4 rounded-full bg-[#E0F5F6] text-[#0AADA8] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-2xl bg-white border border-[#D5ECF0]">
                {activeSpace.specs.map((spec, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-[10px] uppercase font-bold text-[#52687F]">
                      {spec.label}
                    </div>
                    <div className="text-xs font-black text-[#083258] mt-0.5">
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="pt-2">
              <Link
                href="/appointment"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#083258] hover:bg-[#0AADA8] text-white py-3.5 px-5 text-xs sm:text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Schedule a Visit to Our Clinic</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
