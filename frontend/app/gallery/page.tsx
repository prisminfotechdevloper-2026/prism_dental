"use client";

import React from "react";
import { GalleryHero } from "@/components/gallerycomponents/GalleryHero";
import { GalleryShowcase } from "@/components/gallerycomponents/GalleryShowcase";
import { GalleryBeforeAfterStudio } from "@/components/gallerycomponents/GalleryBeforeAfterStudio";
import { GalleryClinicTour } from "@/components/gallerycomponents/GalleryClinicTour";
import { GalleryCtaBanner } from "@/components/gallerycomponents/GalleryCtaBanner";

export default function GalleryPage() {
  return (
    <main className="w-full bg-[#FFFFFF] min-h-screen">
      {/* 1. HERO SECTION (Already Implemented) */}
      <GalleryHero />

      {/* 2. CREATIVE PORTFOLIO SHOWCASE (Bento Story Grid, Filter Pills, Search, Lightbox) */}
      <GalleryShowcase />

      {/* 3. INTERACTIVE TRANSFORMATION STUDIO (Draggable Before & After Split-Slider) */}
      <GalleryBeforeAfterStudio />

      {/* 4. VIRTUAL CLINIC AMBIENCE & FACILITIES WALKTHROUGH */}
      <GalleryClinicTour />

      {/* 5. TRUST METRICS & 3D CONSULTATION ACTION BANNER */}
      <GalleryCtaBanner />
    </main>
  );
}
