import { LandingHero } from "@/components/homecomponents/LandingHero";
import { TreatmentsSection } from "@/components/homecomponents/TreatmentsSection";
import { AboutUsSection } from "@/components/homecomponents/AboutUsSection";
import { DoctorsSection } from "@/components/homecomponents/DoctorsSection";
import { ClinicHighlightsSection } from "@/components/homecomponents/ClinicHighlightsSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <LandingHero />

      {/* 2. TREATMENTS SECTION */}
      <TreatmentsSection />

      {/* 3. ABOUT US SECTION */}
      <AboutUsSection />

      {/* 4. DOCTORS SECTION */}
      <DoctorsSection />

      {/* 5. CLINIC HIGHLIGHTS (BEFORE/AFTER, FEEDBACK, GALLERY PREVIEW) */}
      <ClinicHighlightsSection />
    </div>
  );
}
