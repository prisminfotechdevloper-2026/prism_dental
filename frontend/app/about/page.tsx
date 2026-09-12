import React from "react";
import { AboutHero } from "@/components/aboutcomponents/AboutHero";
import { WhyChooseUs } from "@/components/aboutcomponents/WhyChooseUs";
import { OurNumbers } from "@/components/aboutcomponents/OurNumbers";
import { MeetOurTeam } from "@/components/doctorscomponents/MeetOurTeam";
import { OurTechnology } from "@/components/aboutcomponents/OurTechnology";

export const metadata = {
  title: "About Us | SmileCare Dental Clinic",
  description:
    "Learn about SmileCare Dental Clinic's 15+ years of patient-first dental care, cutting-edge technology, and certified specialists.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen">
      {/* 1. ABOUT US HERO BANNER */}
      <AboutHero />

      {/* 2. WHY CHOOSE US / MISSION & VISION */}
      <WhyChooseUs />

      {/* 3. OUR NUMBERS STATS BANNER */}
      <OurNumbers />

      {/* 4. MEET OUR DEDICATED TEAM */}
      <MeetOurTeam />

      {/* 5. OUR TECHNOLOGY FOR BETTER DENTAL CARE */}
      <OurTechnology />
    </div>
  );
}
