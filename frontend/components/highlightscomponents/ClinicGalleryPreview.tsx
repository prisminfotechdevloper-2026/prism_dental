"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  tag: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "reception",
    title: "Reception & Consultation Desk",
    image: "/images/gallery/reception.jpg",
    tag: "Welcome Lounge",
  },
  {
    id: "operatory",
    title: "Modern 3D Operatory Suite",
    image: "/images/gallery/operatory.jpg",
    tag: "Treatment Suite",
  },
  {
    id: "lounge",
    title: "Patient Relaxation Lounge",
    image: "/images/gallery/lounge.jpg",
    tag: "Comfort Zone",
  },
  {
    id: "corridor",
    title: "Sterile Clinical Corridor",
    image: "/images/gallery/corridor.jpg",
    tag: "Clean Zone",
  },
];

export function ClinicGalleryPreview() {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      {/* 1. Header: Eyebrow + Heading (Standardized Height) */}
      <div className="min-h-[58px] flex flex-col justify-start mb-4">
        <span className="text-xs sm:text-sm font-semibold text-[#0AADA8] tracking-wide block">
          Our Clinic Gallery
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-[#083258] mt-0.5 tracking-tight">
          A Glimpse of Our Facilities
        </h3>
      </div>

      {/* 2. Visual Content Area: 2x2 Image Grid (Standardized Height: h-[220px] sm:h-[235px]) */}
      <div className="h-[220px] sm:h-[235px] w-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-2.5 h-full w-full">
          {GALLERY_IMAGES.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-[#E8F3F6] shadow-sm block hover:shadow-md transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 45vw, 160px"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              {/* Subtle hover overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#083258]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-2.5">
                <span className="text-white text-[10px] sm:text-[11px] font-semibold leading-tight drop-shadow-sm">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Bottom CTA Link (Standardized Height: h-10, Aligned right) */}
      <div className="mt-4 h-10 flex items-center justify-end">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#0AADA8] hover:text-[#089692] transition-all hover:translate-x-0.5"
        >
          <span>View Gallery</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
