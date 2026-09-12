"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  treatment?: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "The best dental clinic I've ever been to! The staff is very friendly and the treatment was painless. My smile has never looked better!",
    author: "Neha Gupta",
    treatment: "Laser Teeth Whitening",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "I was nervous about dental implants, but Dr. Vikram made the entire procedure completely pain-free. Truly world-class infrastructure and care.",
    author: "Vikramjit Singh",
    treatment: "Dental Implants",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Clear aligners gave me the confident smile I always dreamed of in just 8 months. The doctors and staff are exceptionally supportive and caring.",
    author: "Pooja Deshmukh",
    treatment: "Clear 3D Aligners",
    rating: 5,
  },
];

export function PatientFeedbackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeReview = TESTIMONIALS[activeIndex];

  // Auto slide every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="flex flex-col justify-between h-full w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Header: Eyebrow + Heading (Standardized Height) */}
      <div className="min-h-[58px] flex flex-col justify-start mb-4">
        <span className="text-xs sm:text-sm font-semibold text-[#0AADA8] tracking-wide block">
          What Our Patients Say
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-[#083258] mt-0.5 tracking-tight">
          Trusted by Thousands
        </h3>
      </div>

      {/* 2. Testimonial Card (Standardized Height: h-[220px] sm:h-[235px]) */}
      <div className="h-[220px] sm:h-[235px] w-full flex items-center">
        <div className="bg-white border border-[#E4EEF2] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(8,50,88,0.03)] hover:shadow-[0_8px_28px_rgba(8,50,88,0.06)] hover:border-[#0AADA8]/30 transition-all duration-300 flex flex-col justify-between w-full h-full">
          {/* Top Row: Teal Circle with Quote Icon */}
          <div>
            <div className="w-8 h-8 rounded-full bg-[#0AADA8] text-white flex items-center justify-center shrink-0 mb-3 shadow-sm">
              {/* Double quotation SVG mark */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.324 1.433-4.423 3.42-4.423 5.347.382-.124.787-.19 1.205-.19 2.073 0 3.754 1.681 3.754 3.754 0 2.074-1.681 3.755-3.754 3.755-.838 0-1.611-.274-2.122-.546zm10.295 0C13.848 16.227 13.295 15 13.295 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.324 1.433-4.423 3.42-4.423 5.347.382-.124.787-.19 1.205-.19 2.073 0 3.754 1.681 3.754 3.754 0 2.074-1.681 3.755-3.754 3.755-.838 0-1.611-.274-2.122-.546z" />
              </svg>
            </div>

            {/* Testimonial Quote */}
            <p className="text-xs sm:text-[13.5px] text-[#426480] leading-relaxed transition-opacity duration-300">
              &ldquo;{activeReview.quote}&rdquo;
            </p>
          </div>

          {/* Author & Star Rating */}
          <div className="pt-2 border-t border-[#F0F6F8]">
            <p className="text-xs sm:text-[13px] font-bold text-[#083258] tracking-tight">
              &mdash; {activeReview.author}
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Carousel Dots Navigation (Standardized Height: h-10) */}
      <div className="mt-4 h-10 flex items-center justify-center gap-1.5">
        {TESTIMONIALS.map((t, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? "w-5 h-2 bg-[#0AADA8]"
                  : "w-2 h-2 bg-[#CFE8EC] hover:bg-[#A6DCE3]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
