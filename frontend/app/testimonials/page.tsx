"use client";

import React from "react";
import { TestimonialsHero } from "@/components/testimonialscomponents/TestimonialsHero";
import { TestimonialsGrid } from "@/components/testimonialscomponents/TestimonialsGrid";
import { TestimonialsStats } from "@/components/testimonialscomponents/TestimonialsStats";

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
    </>
  );
}


