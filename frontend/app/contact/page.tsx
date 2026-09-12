"use client";

import React from "react";
import { ContactHero } from "@/components/contactcomponents/ContactHero";
import { ContactInfoBar } from "@/components/contactcomponents/ContactInfoBar";
import { ContactBookingAndLocation } from "@/components/contactcomponents/ContactBookingAndLocation";
import { ContactFaqSection } from "@/components/contactcomponents/ContactFaqSection";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F8FDFF] min-h-screen">
      {/* 1. CONTACT HERO SECTION */}
      <ContactHero />

      {/* 2. CONTACT QUICK INFO BAR */}
      <ContactInfoBar />

      {/* 3. BOOK YOUR APPOINTMENT & OUR CLINIC LOCATION */}
      <ContactBookingAndLocation />

      {/* 4. FREQUENTLY ASKED QUESTIONS & ASSISTANCE */}
      <ContactFaqSection />
    </div>
  );
}
