"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface BlogSearchWidgetProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
}

export function BlogSearchWidget({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: BlogSearchWidgetProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit();
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#E5F2F5] shadow-[0_2px_12px_rgba(8,50,88,0.03)]">
      <h3 className="text-base font-bold text-[#083258] mb-3">Search Blog</h3>
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-[#F8FDFF] border border-[#D5ECF0] focus:border-[#0AADA8] focus:bg-white rounded-xl pl-3.5 pr-16 py-2.5 text-xs sm:text-[13px] text-[#083258] placeholder-[#8BA2B5] transition-colors outline-none"
        />

        <div className="absolute right-1.5 flex items-center gap-1">
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="p-1 text-[#8BA2B5] hover:text-[#083258] transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="submit"
            className="w-8 h-8 rounded-lg bg-[#0AADA8] hover:bg-[#089692] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            aria-label="Search articles"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
