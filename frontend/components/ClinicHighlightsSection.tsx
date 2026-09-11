"use client";

import React from "react";
import { BeforeAfterSlider } from "./highlights/BeforeAfterSlider";
import { PatientFeedbackCarousel } from "./highlights/PatientFeedbackCarousel";
import { ClinicGalleryPreview } from "./highlights/ClinicGalleryPreview";

export function ClinicHighlightsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] border-b border-[#E8F3F6] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Responsive Grid matching Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8F3F6] items-stretch">
          
          {/* Column 1: Before & After Smile Slider */}
          <div className="lg:pr-8 xl:pr-10 flex flex-col justify-between">
            <BeforeAfterSlider />
          </div>

          {/* Column 2: What Our Patients Say (Feedback Carousel) */}
          <div className="lg:px-8 xl:px-10 flex flex-col justify-between pt-6 lg:pt-0 border-t lg:border-t-0 border-[#E8F3F6]">
            <PatientFeedbackCarousel />
          </div>

          {/* Column 3: Our Clinic Gallery Preview */}
          <div className="lg:pl-8 xl:pl-10 flex flex-col justify-between pt-6 lg:pt-0 border-t lg:border-t-0 border-[#E8F3F6]">
            <ClinicGalleryPreview />
          </div>

        </div>

      </div>
    </section>
  );
}
