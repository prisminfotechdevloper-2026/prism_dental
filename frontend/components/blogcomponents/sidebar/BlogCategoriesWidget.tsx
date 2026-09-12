"use client";

import React from "react";
import {
  ShieldCheck,
  HeartPulse,
  FileSpreadsheet,
  Sparkles,
  Smile,
  Baby,
  Activity,
  Layers,
} from "lucide-react";
import { BlogCategoryItem } from "../types";

interface BlogCategoriesWidgetProps {
  categories: BlogCategoryItem[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function BlogCategoriesWidget({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogCategoriesWidgetProps) {
  // Helper to map iconName to Lucide icon
  const getCategoryIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-[#0AADA8] shrink-0";
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className={iconClass} />;
      case "HeartPulse":
        return <HeartPulse className={iconClass} />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "Smile":
        return <Smile className={iconClass} />;
      case "Baby":
        return <Baby className={iconClass} />;
      case "Activity":
        return <Activity className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#E5F2F5] shadow-[0_2px_12px_rgba(8,50,88,0.03)]">
      <h3 className="text-base font-bold text-[#083258] mb-3.5">Categories</h3>

      <div className="space-y-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => onSelectCategory(cat.name)}
              className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#E8F8F8] text-[#0AADA8] font-bold"
                  : "text-[#426480] hover:bg-[#F5FBFC] hover:text-[#083258]"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {getCategoryIcon(cat.iconName)}
                <span className="text-xs sm:text-[13px] truncate">{cat.name}</span>
              </div>

              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                  isActive
                    ? "bg-[#0AADA8] text-white"
                    : "text-[#8BA2B5] bg-[#F0F8FA]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
