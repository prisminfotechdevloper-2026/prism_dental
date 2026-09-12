"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "./galleryData";

interface GalleryBentoGridProps {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
}

export function GalleryBentoGrid({ items, onSelect }: GalleryBentoGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-16 bg-[#F8FCFD] rounded-3xl border border-dashed border-[#D5ECF0]">
        <p className="text-sm font-bold text-[#083258]">No gallery cases found</p>
        <p className="text-xs text-[#52687F] mt-1">Try selecting a different category or clearing search</p>
      </div>
    );
  }

  // Pick primary featured items for creative asymmetrical Bento placement
  const heroItem = items.find((i) => i.bentoSpan === "hero") || items[0];
  const otherItems = items.filter((i) => i.id !== heroItem?.id);

  return (
    <div className="w-full">
      {/* ── BENTO ASYMMETRICAL STORY GRID ───────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[300px]">
        
        {/* 1. HERO SPOTLIGHT CARD (Spans 8 Cols & 2 Rows on Desktop) */}
        {heroItem && (
          <div
            onClick={() => onSelect(heroItem)}
            onMouseEnter={() => setHoveredId(heroItem.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative sm:col-span-2 lg:col-span-8 lg:row-span-2 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(8,50,88,0.06)] border border-[#D5ECF0] bg-[#0A1D2F] cursor-pointer transition-all duration-500 hover:shadow-[0_16px_40px_rgba(10,173,168,0.15)] hover:border-[#0AADA8]/50"
          >
            {/* Background Image with Hover Scale */}
            <Image
              src={heroItem.afterUrl || heroItem.imageUrl}
              alt={heroItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-95"
              priority
            />

            {/* Gradient Overlays for Readability & Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#082238] via-[#082238]/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#082238]/60 via-transparent to-transparent z-10" />

            {/* Floating Top Header Badges */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0AADA8] text-white text-xs font-black tracking-wide shadow-md uppercase">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  Featured Showcase
                </span>
                {heroItem.category === "transformations" && (
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                    Dual View Available
                  </span>
                )}
              </div>

              {/* Inspect Button Icon */}
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0AADA8]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {heroItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight mb-1 text-white group-hover:text-[#65F4F0] transition-colors">
                {heroItem.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-white/80 font-medium line-clamp-2 max-w-2xl mb-3">
                {heroItem.description}
              </p>

              {/* Patient Quote or Stats Strip */}
              <div className="flex items-center justify-between pt-2 border-t border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#0AADA8]">
                    <Image
                      src={heroItem.doctor.avatar}
                      alt={heroItem.doctor.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-white block leading-tight">{heroItem.doctor.name}</span>
                    <span className="text-[10.5px] text-[#65F4F0]">{heroItem.doctor.role}</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#65F4F0] flex items-center gap-1">
                  <span>Inspect Case</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. SUBSEQUENT ITEMS: TALL, WIDE & STANDARD CARDS */}
        {otherItems.map((item, idx) => {
          // Layout rules: create visual rhythmic asymmetry
          const isWide = item.bentoSpan === "wide" || idx % 5 === 2;
          const isTall = item.bentoSpan === "tall" || idx % 5 === 0;

          let colSpan = "col-span-1 sm:col-span-1 lg:col-span-4";
          let rowSpan = "row-span-1";

          if (isWide && !isTall) {
            colSpan = "sm:col-span-2 lg:col-span-8";
          } else if (isTall) {
            colSpan = "col-span-1 sm:col-span-1 lg:col-span-4";
            rowSpan = "sm:row-span-2";
          }

          return (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-3xl overflow-hidden shadow-xs border border-[#D5ECF0] bg-white cursor-pointer transition-all duration-400 hover:shadow-xl hover:border-[#0AADA8]/40 hover:-translate-y-1 ${colSpan} ${rowSpan}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 bg-[#EBF4FB]">
                <Image
                  src={item.afterUrl || item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-108"
                />
              </div>

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082238]/90 via-[#082238]/30 to-transparent z-10 transition-opacity duration-300" />

              {/* Category Pill Tag on Top-Left */}
              <div className="absolute top-3.5 left-3.5 z-20">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#083258] text-[10.5px] font-extrabold uppercase tracking-wide shadow-xs border border-white/40">
                  {item.category}
                </span>
              </div>

              {/* Quick Inspect Icon on Top-Right */}
              <div className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 hover:bg-[#0AADA8]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 text-white">
                
                {/* Stats / Highlight */}
                {item.statsHighlight && (
                  <div className="mb-1 text-[10.5px] font-bold text-[#65F4F0] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0AADA8]" />
                    <span>{item.statsHighlight}</span>
                  </div>
                )}

                <h4 className="text-base sm:text-lg font-bold leading-snug tracking-tight text-white group-hover:text-[#65F4F0] transition-colors mb-1">
                  {item.title}
                </h4>

                <p className="text-[11.5px] sm:text-xs text-white/80 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Extended Details on Tall Cards */}
                {isTall && item.patientQuote && (
                  <div className="mt-3 pt-2.5 border-t border-white/20 hidden sm:block">
                    <p className="text-[11px] italic text-white/90 line-clamp-2">
                      &ldquo;{item.patientQuote}&rdquo;
                    </p>
                    <span className="text-[10px] font-bold text-[#65F4F0] mt-1 block">
                      — {item.patientName}
                    </span>
                  </div>
                )}

                {/* Doctor Attribution */}
                <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80">
                  <span className="font-semibold">{item.doctor.name}</span>
                  <span className="text-[#65F4F0] font-bold group-hover:translate-x-0.5 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
