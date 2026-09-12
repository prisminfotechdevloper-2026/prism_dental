"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from "./galleryData";
import { GalleryBentoGrid } from "./GalleryBentoGrid";
import { GalleryLightboxModal } from "./GalleryLightboxModal";

interface CategoryFilterTab {
  id: GalleryCategory;
  label: string;
}

const FILTER_TABS: CategoryFilterTab[] = [
  { id: "all", label: "All Showcase" },
  { id: "transformations", label: "Transformations (Before & After)" },
  { id: "clinic", label: "Clinic & Suites" },
  { id: "treatments", label: "Treatments & Tech" },
  { id: "patients", label: "Patient Stories" },
];

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"bento" | "mosaic">("bento");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Compute category counts for pills
  const counts = useMemo(() => {
    const countsMap: Record<GalleryCategory, number> = {
      all: GALLERY_ITEMS.length,
      transformations: GALLERY_ITEMS.filter((i) => i.category === "transformations").length,
      clinic: GALLERY_ITEMS.filter((i) => i.category === "clinic").length,
      treatments: GALLERY_ITEMS.filter((i) => i.category === "treatments").length,
      patients: GALLERY_ITEMS.filter((i) => i.category === "patients").length,
    };
    return countsMap;
  }, []);

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchSubtitle = item.subtitle.toLowerCase().includes(query);
      const matchDoctor = item.doctor.name.toLowerCase().includes(query);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(query));

      return matchTitle || matchSubtitle || matchDoctor || matchTags;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full bg-[#FFFFFF] py-10 sm:py-14 lg:py-16 border-b border-[#D5ECF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* ── TOP CONTROLS BAR: CATEGORY TABS, SEARCH & VIEW SWITCHER ── */}
        <div className="flex flex-col gap-6 mb-8 sm:mb-10">
          
          {/* Header & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F5F6] border border-[#0AADA8]/30 text-[#0AADA8] text-xs font-black tracking-wide uppercase shadow-2xs mb-2">
                <span className="w-2 h-2 rounded-full bg-[#0AADA8]" />
                Curated Clinical Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#083258] tracking-tight">
                Explore Our Smile <span className="text-[#0AADA8]">Masterpieces</span>
              </h2>
            </div>

            {/* View Mode Toggle & Search Box */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative min-w-[220px] sm:min-w-[260px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search veneers, aligners, suites..."
                  aria-label="Search gallery treatments and facilities"
                  className="w-full pl-9 pr-4 py-2.5 rounded-full text-xs font-semibold bg-[#F8FDFF] border border-[#D5ECF0] text-[#083258] placeholder-[#52687F] focus:outline-hidden focus:ring-2 focus:ring-[#0AADA8] focus:border-transparent transition-all"
                />
                <svg
                  className="w-4 h-4 text-[#52687F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Mode Toggle Switch */}
              <div className="flex items-center p-1 bg-[#F0F8FA] rounded-full border border-[#D5ECF0]">
                <button
                  onClick={() => setViewMode("bento")}
                  aria-label="Creative Bento Story View"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "bento"
                      ? "bg-[#083258] text-white shadow-xs"
                      : "text-[#52687F] hover:text-[#083258]"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="11" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="18" width="7" height="3" rx="1" />
                  </svg>
                  <span className="hidden sm:inline">Bento Story</span>
                </button>

                <button
                  onClick={() => setViewMode("mosaic")}
                  aria-label="Mosaic Grid View"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "mosaic"
                      ? "bg-[#083258] text-white shadow-xs"
                      : "text-[#52687F] hover:text-[#083258]"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  <span className="hidden sm:inline">Mosaic Grid</span>
                </button>
              </div>

            </div>
          </div>

          {/* Interactive Filter Pills Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              const count = counts[tab.id];

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-2xs ${
                    isActive
                      ? "bg-[#0AADA8] text-white shadow-md scale-102"
                      : "bg-[#F8FDFF] text-[#426480] hover:bg-[#E8F8F8] hover:text-[#083258] border border-[#D5ECF0]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-black transition-colors ${
                      isActive
                        ? "bg-white text-[#0AADA8]"
                        : "bg-[#E0F5F6] text-[#083258]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* ── MAIN CONTENT AREA ── */}
        {viewMode === "bento" ? (
          <GalleryBentoGrid
            items={filteredItems}
            onSelect={(item) => setSelectedItem(item)}
          />
        ) : (
          /* MOSAIC FULL GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-3xl overflow-hidden shadow-xs border border-[#D5ECF0] bg-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#0AADA8]/50 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBF4FB]">
                  <Image
                    src={item.afterUrl || item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-106"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#083258] text-[10.5px] font-black uppercase tracking-wide shadow-xs border border-white/40">
                      {item.category}
                    </span>
                  </div>
                  {/* Hover Inspect Icon */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#0AADA8]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5">
                  {item.statsHighlight && (
                    <div className="text-[11px] font-extrabold text-[#0AADA8] mb-1">
                      {item.statsHighlight}
                    </div>
                  )}

                  <h3 className="text-base sm:text-[17px] font-extrabold text-[#083258] leading-tight mb-1.5 group-hover:text-[#0AADA8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#52687F] line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F0F8FA] text-xs">
                    <span className="font-semibold text-[#083258]">
                      {item.doctor.name}
                    </span>
                    <span className="text-[#0AADA8] font-bold group-hover:translate-x-1 transition-transform">
                      Inspect →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Full-Screen Accessible Lightbox Modal */}
      <GalleryLightboxModal
        item={selectedItem}
        allItems={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
}
