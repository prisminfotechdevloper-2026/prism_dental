import React from "react";
import { TreatmentsHero } from "@/components/TreatmentsHero";
import { AboutCosmeticDentistry } from "@/components/AboutCosmeticDentistry";
import { TreatmentProcess } from "@/components/TreatmentProcess";
import { TreatmentResultsAndSpecialist } from "@/components/TreatmentResultsAndSpecialist";
import { TreatmentTestimonialsAndFaq } from "@/components/TreatmentTestimonialsAndFaq";

export const metadata = {
  title: "Braces & Aligners | Treatments | SmileCare Dental Clinic",
  description:
    "Straighter Teeth, Healthier Smile, Greater Confidence. Modern orthodontic solutions with braces and clear aligners at SmileCare Dental Clinic.",
};

export default function TreatmentsPage() {
  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen">
      {/* 1. TREATMENTS HERO */}
      <TreatmentsHero />

      {/* 2. WHAT IS COSMETIC DENTISTRY */}
      <AboutCosmeticDentistry />

      {/* 3. TREATMENT PROCESS (HOW DOES IT WORK) */}
      <TreatmentProcess />

      {/* 4. BEFORE & AFTER SLIDER, SPECIALIST & QUICK FACTS */}
      <TreatmentResultsAndSpecialist />

      {/* 5. PATIENT TESTIMONIALS SLIDER & FAQS (SINGLE SELECTION ACCORDION) */}
      <TreatmentTestimonialsAndFaq />
    </div>
  );
}
