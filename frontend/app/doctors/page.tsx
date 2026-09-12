import React from "react";
import Link from "next/link";
 
import { DoctorsHero } from "@/components/doctorscomponents/DoctorsHero";
 
 

export default function DoctorsPage() {
  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen">
      {/* 1. DOCTORS HERO BANNER */}
      <DoctorsHero />

       
    </div>
  );
}
