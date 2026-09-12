"use client";

import React from "react";

interface BlogFilterTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
} 

 
export function BlogFilterTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogFilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-[#0AADA8] text-white shadow-[0_3px_12px_rgba(10,173,168,0.28)]"
                : "bg-white text-[#426480] border border-[#D8EBF0] hover:border-[#0AADA8] hover:text-[#0AADA8] shadow-xs"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
