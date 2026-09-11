"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, SlidersHorizontal, Columns2 } from "lucide-react";

interface CaseItem {
  id: string;
  title: string;
  treatment: string;
  beforeImg: string;
  afterImg: string;
  shadeDifference: string;
}

const CASES: CaseItem[] = [
  {
    id: "case-1",
    title: "Laser Teeth Whitening",
    treatment: "Cosmetic Dentistry",
    beforeImg: "/images/before_after/smile_before.jpg",
    afterImg: "/images/before_after/smile_after.jpg",
    shadeDifference: "8 Shades Brighter",
  },
  {
    id: "case-2",
    title: "Clear Aligners Diastema Closure",
    treatment: "Orthodontics",
    beforeImg: "/images/before_after/case2_before.jpg",
    afterImg: "/images/before_after/case2_after.jpg",
    shadeDifference: "Gap Completely Closed",
  },
];

export function BeforeAfterSlider() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"side-by-side" | "slider">("side-by-side");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const currentCase = CASES[currentCaseIndex];

  const handlePrev = () => {
    setCurrentCaseIndex((prev) => (prev === 0 ? CASES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCaseIndex((prev) => (prev === CASES.length - 1 ? 0 : prev + 1));
  };

  const handleSliderMove = useCallback(
    (clientX: number) => {
      if (!sliderContainerRef.current) return;
      const rect = sliderContainerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percentage = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleSliderMove(e.touches[0].clientX);
    },
    [isDragging, handleSliderMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleSliderMove(e.clientX);
    },
    [isDragging, handleSliderMove]
  );

  return (
    <div className="flex flex-col justify-between h-full w-full">
      {/* 1. Header: Eyebrow + Heading (Standardized Height) */}
      <div className="min-h-[58px] flex flex-col justify-start mb-4">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-semibold text-[#0AADA8] tracking-wide block">
            Before &amp; After
          </span>
          {/* Mode Toggle Button */}
          <button
            onClick={() => setViewMode((m) => (m === "side-by-side" ? "slider" : "side-by-side"))}
            title={viewMode === "side-by-side" ? "Switch to Interactive Drag Slider" : "Switch to Side-by-Side View"}
            className="inline-flex items-center gap-1 text-[11px] text-[#6B8BA2] hover:text-[#0AADA8] font-medium transition-colors bg-[#F0F9FA] hover:bg-[#E2F5F6] px-2.5 py-0.5 rounded-full cursor-pointer"
          >
            {viewMode === "side-by-side" ? (
              <>
                <SlidersHorizontal className="w-3 h-3 text-[#0AADA8]" />
                <span>Drag Slider</span>
              </>
            ) : (
              <>
                <Columns2 className="w-3 h-3 text-[#0AADA8]" />
                <span>Split View</span>
              </>
            )}
          </button>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#083258] mt-0.5 tracking-tight">
          Real Results, Happy Smiles
        </h3>
      </div>

      {/* 2. Visual Content Area (Standardized Height: h-[220px] sm:h-[235px]) */}
      <div className="h-[220px] sm:h-[235px] w-full flex items-center justify-center">
        {viewMode === "side-by-side" ? (
          /* ========================================================
             EXACT REFERENCE DESIGN: Tall Side-by-Side Cards with Chevrons
             ======================================================== */
          <div className="flex items-center justify-between gap-1 sm:gap-2 w-full h-full">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous before and after case"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#6B8BA2] hover:text-[#083258] hover:bg-[#F0F9FA] transition-all shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Images Grid taking full height of container */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 flex-1 h-full">
              {/* Before Card */}
              <div className="flex flex-col items-center h-full">
                <div className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-sm border border-[#E8F3F6] bg-slate-100 group">
                  <Image
                    src={currentCase.beforeImg}
                    alt={`${currentCase.title} - Before treatment`}
                    fill
                    sizes="(max-width: 768px) 45vw, 200px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="mt-1.5 text-xs font-semibold text-[#6B8BA2] shrink-0">
                  Before
                </span>
              </div>

              {/* After Card */}
              <div className="flex flex-col items-center h-full">
                <div className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-sm border border-[#E8F3F6] bg-slate-100 group">
                  <Image
                    src={currentCase.afterImg}
                    alt={`${currentCase.title} - After treatment`}
                    fill
                    sizes="(max-width: 768px) 45vw, 200px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="mt-1.5 text-xs font-semibold text-[#0AADA8] shrink-0">
                  After
                </span>
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next before and after case"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#6B8BA2] hover:text-[#083258] hover:bg-[#F0F9FA] transition-all shrink-0 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          /* ========================================================
             INTERACTIVE DRAGGABLE COMPARISON SLIDER MODE
             ======================================================== */
          <div
            ref={sliderContainerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full h-full rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-sm border border-[#E8F3F6] bg-slate-100"
          >
            {/* After Image (Full Base) */}
            <Image
              src={currentCase.afterImg}
              alt="After smile transformation"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover object-center pointer-events-none"
            />
            <span className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded-md bg-[#083258]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
              After
            </span>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : "100%" }}>
                <Image
                  src={currentCase.beforeImg}
                  alt="Before smile transformation"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-center pointer-events-none"
                />
              </div>
              <span className="absolute bottom-3 left-3 z-10 px-2 py-0.5 rounded-md bg-[#083258]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                Before
              </span>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#0AADA8] shadow-lg flex items-center justify-center text-[#0AADA8]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Bottom CTA Button (Standardized Height: h-10) */}
      <div className="mt-4 h-10 flex items-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>View More Results</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
