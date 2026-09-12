"use client";

import React from "react";
import { TestimonialsHero } from "@/components/TestimonialsHero";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { TestimonialsStats } from "@/components/TestimonialsStats";

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
    </>
  );
}


