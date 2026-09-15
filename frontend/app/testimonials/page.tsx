"use client";

import React, { useState } from "react";
import { TestimonialsHero } from "@/components/testimonialscomponents/TestimonialsHero";
import { TestimonialsGrid } from "@/components/testimonialscomponents/TestimonialsGrid";
import { TestimonialsStats } from "@/components/testimonialscomponents/TestimonialsStats";
import { ShareFeedbackModal } from "@/components/testimonialscomponents/ShareFeedbackModal";

export default function TestimonialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <>
      <TestimonialsHero onOpenShareModal={() => setIsModalOpen(true)} />
      <TestimonialsGrid
        key={refreshKey}
        onOpenShareModal={() => setIsModalOpen(true)}
      />
      <TestimonialsStats />
      <ShareFeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => setRefreshKey((prev) => prev + 1)}
      />
    </>
  );
}
