"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "./galleryData";

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export function GalleryLightboxModal({
  item,
  allItems,
  onClose,
  onNavigate,
}: GalleryLightboxModalProps) {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  // Reset tab when item changes
  useEffect(() => {
    setActiveTab("after");
  }, [item?.id]);

  const currentIndex = item ? allItems.findIndex((i) => i.id === item.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allItems.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      onNavigate(allItems[currentIndex - 1]);
    }
  }, [hasPrev, currentIndex, allItems, onNavigate]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      onNavigate(allItems[currentIndex + 1]);
    }
  }, [hasNext, currentIndex, allItems, onNavigate]);

  // Keyboard shortcut listeners
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [item, handlePrev, handleNext, onClose]);

  if (!item) return null;

  const hasDualView = Boolean(item.beforeUrl && item.afterUrl);
  const displayImage =
    hasDualView && activeTab === "before"
      ? item.beforeUrl!
      : item.afterUrl || item.imageUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-[#082238]/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D5ECF0] flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#083258] border border-[#D5ECF0] flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── LEFT: IMAGE DISPLAY & COMPARISON AREA ───────────────── */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[420px] lg:min-h-[540px] bg-[#0A1A2A] flex items-center justify-center p-4">
          
          {/* Main Displayed Image */}
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <Image
              src={displayImage}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Dual View Toggle Pill (Before vs After) */}
          {hasDualView && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center bg-[#083258]/80 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-lg">
              <button
                onClick={() => setActiveTab("before")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "before"
                    ? "bg-[#0AADA8] text-white shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setActiveTab("after")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "after"
                    ? "bg-[#0AADA8] text-white shadow-xs"
                    : "text-white/80 hover:text-white"
                }`}
              >
                After Result
              </button>
            </div>
          )}

          {/* Prev Arrow */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Next Arrow */}
          {hasNext && (
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Index Counter Indicator */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium border border-white/10">
            {currentIndex + 1} / {allItems.length}
          </div>
        </div>

        {/* ── RIGHT: CLINICAL METADATA & DOCTOR DETAILS ─────────── */}
        <div className="w-full lg:w-[380px] xl:w-[420px] p-6 lg:p-7 flex flex-col justify-between overflow-y-auto bg-white border-t lg:border-t-0 lg:border-l border-[#D5ECF0]">
          <div>
            
            {/* Category & Stats Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-[#E8F8F8] text-[#0AADA8] text-xs font-extrabold tracking-wide uppercase border border-[#0AADA8]/20">
                {item.category}
              </span>
              {item.statsHighlight && (
                <span className="px-2.5 py-1 rounded-full bg-[#EBF4FB] text-[#026EB9] text-xs font-bold border border-[#026EB9]/20">
                  {item.statsHighlight}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#083258] tracking-tight leading-snug mb-1">
              {item.title}
            </h2>
            <p className="text-xs sm:text-[13px] font-semibold text-[#0AADA8] mb-4">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#426480] leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-lg bg-[#F3F9FA] text-[#083258] text-[11px] font-semibold border border-[#D5ECF0]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Patient Testimonial Quote if present */}
            {item.patientQuote && (
              <div className="p-3.5 rounded-2xl bg-[#EBF7F9] border border-[#D5ECF0] mb-5">
                <div className="flex items-center gap-1.5 text-[#0AADA8] mb-1">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span className="text-[11px] font-bold text-[#083258]">
                    {item.patientName || "Verified Patient"}
                  </span>
                </div>
                <p className="text-xs italic text-[#426480] leading-relaxed">
                  &ldquo;{item.patientQuote}&rdquo;
                </p>
              </div>
            )}

            {/* Specialist Doctor Attribution */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F8FDFF] border border-[#E0F0F3] mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0AADA8]/40 shrink-0">
                <Image
                  src={item.doctor.avatar}
                  alt={item.doctor.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-[#0AADA8] uppercase tracking-wider">
                  Treating Specialist
                </div>
                <div className="text-sm font-extrabold text-[#083258]">
                  {item.doctor.name}
                </div>
                <div className="text-xs text-[#52687F]">
                  {item.doctor.role}
                </div>
              </div>
            </div>

            {/* Quick Fact Duration */}
            <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-[#F8FAFC] border border-gray-100 text-[#52687F] mb-4">
              <span className="font-semibold text-[#083258]">Typical Treatment Timeline:</span>
              <span className="font-bold text-[#0AADA8]">{item.duration}</span>
            </div>
          </div>

          {/* Direct CTA Action */}
          <div className="pt-2">
            <Link
              href={`/appointment?treatment=${encodeURIComponent(item.title)}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0AADA8] hover:bg-[#089691] text-white py-3 px-5 text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>Consult For This Treatment</span>
              <span className="text-base font-normal">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
