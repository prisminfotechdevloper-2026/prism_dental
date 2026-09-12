"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogArticle } from "./types";

interface BlogArticleCardProps {
  article: BlogArticle;
  onSelect: (article: BlogArticle) => void;
}

export function BlogArticleCard({ article, onSelect }: BlogArticleCardProps) {
  return (
    <article
      onClick={() => onSelect(article)}
      className="group flex flex-col bg-white rounded-2xl border border-[#E5F2F5] shadow-[0_2px_12px_rgba(8,50,88,0.04)] hover:shadow-[0_8px_24px_rgba(8,50,88,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer h-full"
    >
      {/* Card Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#E8F8F8]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Category Badge on Bottom-Left of Image */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0AADA8] text-white text-[11px] font-semibold shadow-xs">
            {article.categoryBadge || article.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Title */}
        <h3 className="text-sm sm:text-[15px] font-bold text-[#083258] group-hover:text-[#0AADA8] leading-snug line-clamp-2 transition-colors duration-200 mb-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[12px] sm:text-[12.5px] text-[#426480] leading-relaxed line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

        {/* Card Footer: Meta Info & Read More */}
        <div className="pt-2 border-t border-[#F0F8FA] flex flex-col gap-2.5 mt-auto">
          {/* Date & Read Time */}
          <div className="flex items-center gap-3 text-[#426480] text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0AADA8] shrink-0" />
              <span>{article.date}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0AADA8] shrink-0" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Read More Link */}
          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0AADA8] group-hover:text-[#089692] transition-colors duration-200">
              Read More
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
