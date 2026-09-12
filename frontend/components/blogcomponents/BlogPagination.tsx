"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 mt-8 sm:mt-10">
      {pages.map((pageNum) => {
        const isActive = pageNum === currentPage;
        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-[#0AADA8] text-white shadow-[0_2px_8px_rgba(10,173,168,0.3)]"
                : "bg-white text-[#426480] border border-[#D5ECF0] hover:border-[#0AADA8] hover:text-[#0AADA8]"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next arrow button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full bg-white text-[#426480] border border-[#D5ECF0] hover:border-[#0AADA8] hover:text-[#0AADA8] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 cursor-pointer"
        aria-label="Next page"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
