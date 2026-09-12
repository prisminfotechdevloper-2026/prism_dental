"use client";

import React from "react";
import { BlogArticle } from "./types";
import { BlogArticleCard } from "./BlogArticleCard";

interface BlogArticleGridProps {
  articles: BlogArticle[];
  onSelectArticle: (article: BlogArticle) => void;
  onResetFilters: () => void;
}

export function BlogArticleGrid({
  articles,
  onSelectArticle,
  onResetFilters,
}: BlogArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-2xl border border-[#E5F2F5]">
        <div className="w-14 h-14 rounded-full bg-[#E8F8F8] flex items-center justify-center text-[#0AADA8] mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-[#083258] mb-1">No articles found</h3>
        <p className="text-xs text-[#426480] max-w-sm mb-4">
          We couldn't find any articles matching your selected criteria. Try adjusting your search or category filter.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="px-4 py-2 rounded-full bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
        >
          View All Articles
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {articles.map((article) => (
        <BlogArticleCard
          key={article.id}
          article={article}
          onSelect={onSelectArticle}
        />
      ))}
    </div>
  );
}
