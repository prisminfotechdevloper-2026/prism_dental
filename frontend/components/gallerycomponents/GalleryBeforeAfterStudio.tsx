"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { BEFORE_AFTER_CASES, BeforeAfterCase } from "./galleryData";

export function GalleryBeforeAfterStudio() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase: BeforeAfterCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const rawPercent = (offsetX / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, rawPercent));
    setSliderPosition(clamped);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section className="w-full bg-[#F5FBFC] py-12 sm:py-16 lg:py-20 border-b border-[#D5ECF0] relative overflow-hidden">
      
      {/* Background Accent Subtle Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0AADA8]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#026EB9]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F5F6] border border-[#0AADA8]/30 text-[#0AADA8] text-xs font-extrabold tracking-wide uppercase shadow-2xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0AADA8]" />
            Interactive Smile Studio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#083258] tracking-tight leading-tight mb-3">
            Slide to Reveal Real Patient <span className="text-[#0AADA8]">Transformations</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#426480] max-w-xl mx-auto leading-relaxed">
            Drag the slider handle sideways to compare clinical before and after results. Every case is documented directly from our SmileCare surgical suite.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-2xs ${
                activeCaseIndex === idx
                  ? "bg-[#083258] text-white shadow-md scale-102"
                  : "bg-white text-[#426480] hover:bg-[#EBF7F9] hover:text-[#083258] border border-[#D5ECF0]"
              }`}
            >
              <span>{item.title}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeCaseIndex === idx
                    ? "bg-[#0AADA8] text-white"
                    : "bg-[#F0F8FA] text-[#0AADA8]"
                }`}
              >
                {item.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Studio Main Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-[#D5ECF0] p-4 sm:p-6 lg:p-8 shadow-[0_10px_40px_rgba(8,50,88,0.04)]">
          
          {/* LEFT: INTERACTIVE DUAL-VIEW SLIDER (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div
              ref={containerRef}
              tabIndex={0}
              role="slider"
              aria-label="Before and After Comparison Slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onKeyDown={handleKeyDown}
              className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5ECF0] shadow-sm select-none cursor-ew-resize touch-none focus:outline-hidden focus:ring-2 focus:ring-[#0AADA8]"
            >
              {/* Layer 1: AFTER IMAGE (Full width behind) */}
              <div className="absolute inset-0">
                <Image
                  src={currentCase.afterImg}
                  alt={`${currentCase.title} - After`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Floating "After" Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#083258] text-xs font-black shadow-md border border-[#D5ECF0] pointer-events-none">
                  After Result ✨
                </div>
              </div>

              {/* Layer 2: BEFORE IMAGE (Clipped on top based on sliderPosition) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={currentCase.beforeImg}
                  alt={`${currentCase.title} - Before`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Floating "Before" Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#083258]/90 backdrop-blur-md text-white text-xs font-black shadow-md border border-white/20 pointer-events-none">
                  Before Condition
                </div>
              </div>

              {/* DIVIDER HANDLE LINE */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Vertical Line */}
                <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" />

                {/* Circular Slider Thumb */}
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#0AADA8] shadow-xl flex items-center justify-center text-[#083258] transition-transform duration-100 hover:scale-110">
                  <svg className="w-5 h-5 text-[#0AADA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="8 7 3 12 8 17" />
                    <polyline points="16 7 21 12 16 17" />
                  </svg>
                </div>
              </div>

              {/* Subtle Instructional Hint at Bottom */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium pointer-events-none">
                ↔ Drag sideways to compare
              </div>
            </div>

            {/* Range Slider for Accessible Touch Control */}
            <div className="w-full max-w-sm flex items-center gap-3 pt-3">
              <span className="text-[11px] font-bold text-[#52687F]">Before</span>
              <input
                type="range"
                min="0"
                max="100"
                value={Math.round(sliderPosition)}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="Fine adjustment comparison slider"
                className="flex-1 accent-[#0AADA8] cursor-pointer h-1.5 bg-[#D5ECF0] rounded-lg"
              />
              <span className="text-[11px] font-bold text-[#0AADA8]">After</span>
            </div>

          </div>

          {/* RIGHT: CLINICAL CASE FACTS & ATTRIBUTION (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Badge & Timeline */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-bold">
                  {currentCase.tag}
                </span>
                <span className="text-xs text-[#52687F] font-medium">
                  • {currentCase.duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#083258] tracking-tight mb-2">
                {currentCase.title}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-[#026EB9] mb-3">
                Procedure: {currentCase.procedure}
              </p>

              <p className="text-xs sm:text-sm text-[#426480] leading-relaxed mb-5">
                {currentCase.summary}
              </p>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5">
                {currentCase.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-2.5 sm:p-3 rounded-2xl bg-[#F7FCFD] border border-[#D5ECF0] text-center"
                  >
                    <div className="text-xs sm:text-sm font-black text-[#083258]">
                      {metric.value}
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] text-[#52687F] font-medium mt-0.5 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Specialist Doctor Attribution */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#EBF7F9] border border-[#D2EFF3]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#0AADA8] shrink-0">
                  <Image
                    src={currentCase.doctorAvatar}
                    alt={currentCase.doctor}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#0AADA8] tracking-wider">
                    Lead Doctor
                  </div>
                  <div className="text-sm font-black text-[#083258]">
                    {currentCase.doctor}
                  </div>
                  <div className="text-xs text-[#52687F]">
                    {currentCase.doctorRole}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={`/appointment?doctor=${encodeURIComponent(currentCase.doctor)}&treatment=${encodeURIComponent(currentCase.procedure)}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0AADA8] hover:bg-[#089691] text-white py-3.5 px-5 text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Book This Smile Transformation</span>
                <span className="text-base font-normal">→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
