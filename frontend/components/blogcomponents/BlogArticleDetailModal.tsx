"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight } from "lucide-react";
import { BlogArticle } from "./types";

interface BlogArticleDetailModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export function BlogArticleDetailModal({
  article,
  onClose,
}: BlogArticleDetailModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!article) return;
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [article, handleKeyDown]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#083258]/60 backdrop-blur-sm p-3.5 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Article: ${article.title}`}
    >
      <div
        className="relative w-full max-w-2xl lg:max-w-3xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HERO IMAGE */}
        <div className="relative w-full h-52 sm:h-64 shrink-0 bg-[#E8F8F8]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083258]/70 via-transparent to-black/20" />

          {/* Category Badge */}
          <span className="absolute bottom-4 left-5 bg-[#0AADA8] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-md">
            {article.categoryBadge || article.category}
          </span>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#083258] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 py-6">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#083258] tracking-tight leading-snug mb-3.5">
            {article.title}
          </h2>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 pb-4 border-b border-[#EDF8FA] text-xs text-[#426480]">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#0AADA8]" />
              <span className="font-bold text-[#083258]">{article.author}</span>
              <span className="text-[#8BA2B5]">({article.authorRole})</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0AADA8]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0AADA8]" />
              {article.readTime}
            </span>
          </div>

          {/* Excerpt / Lead Callout */}
          <div className="mb-6 p-4 rounded-xl bg-[#E8F8F8]/60 border-l-4 border-[#0AADA8]">
            <p className="text-xs sm:text-[13.5px] text-[#083258] font-medium leading-relaxed italic">
              "{article.excerpt}"
            </p>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-xs sm:text-[13.5px] text-[#426480] leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="mt-7 p-4 sm:p-5 rounded-2xl bg-[#F8FDFF] border border-[#D5ECF0]">
            <h4 className="text-xs sm:text-sm font-bold text-[#083258] mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0AADA8]" />
              Key Clinical Takeaways
            </h4>
            <ul className="space-y-1.5 text-xs text-[#426480]">
              <li className="flex items-start gap-2">
                <span className="text-[#0AADA8] font-bold">•</span>
                <span>Prioritize preventative dental checkups every 6 months to avoid complications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0AADA8] font-bold">•</span>
                <span>Consistency in daily brushing and flossing is the most effective defense against decay.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0AADA8] font-bold">•</span>
                <span>Always consult a certified dental specialist for personalized treatment plans.</span>
              </li>
            </ul>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-[#EDF8FA]">
              <span className="text-xs font-semibold text-[#8BA2B5] mr-1">Tags:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#F0F8FA] text-[#0AADA8] border border-[#D5ECF0]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer Consultation Action */}
          <div className="mt-6 pt-5 border-t border-[#EDF8FA] flex flex-col sm:flex-row items-center justify-between gap-3.5">
            <p className="text-xs text-[#426480] text-center sm:text-left">
              Have questions or need expert advice regarding this topic?
            </p>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-[#D5ECF0] hover:border-[#0AADA8] text-xs font-bold text-[#426480] hover:text-[#0AADA8] transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-[#0AADA8] hover:bg-[#089692] text-white text-xs font-bold shadow-[0_2px_10px_rgba(10,173,168,0.25)] transition-all cursor-pointer"
              >
                Book Appointment
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
