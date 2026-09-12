import React from "react";
import { DoctorsHero } from "@/components/doctorscomponents/DoctorsHero";
import { WhyChooseOurDoctors } from "@/components/doctorscomponents/WhyChooseOurDoctors";
import { DoctorIdentificationSection } from "@/components/doctorscomponents/DoctorIdentificationSection";
import { MeetOurTeam } from "@/components/doctorscomponents/MeetOurTeam";

export const metadata = {
  title: "Our Expert Doctors | SmileCare Dental Clinic",
  description:
    "Meet our team of experienced, certified dental specialists dedicated to your healthy smile and gentle care.",
};

export default function DoctorsPage() {
  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen">
      {/* 1. DOCTORS HERO BANNER */}
      <DoctorsHero />

      {/* 2. WHY CHOOSE OUR DOCTORS FEATURE BANNER */}
      <WhyChooseOurDoctors />

      {/* 3. DOCTOR IDENTIFICATION — All 8 Specialists with Category Filter */}
      <DoctorIdentificationSection />

      {/* 4. MEET OUR DEDICATED TEAM */}
      <MeetOurTeam />
    </div>
  );
}
