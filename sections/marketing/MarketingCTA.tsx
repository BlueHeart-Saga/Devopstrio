"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function MarketingCTA({ onRequestCustom }: { onRequestCustom: () => void }) {
  return (
    <RepresentativeCTA
      title="Need A Customized Presentation Or"
      highlightText="Solution Deck?"
      description="Our marketing and solution architecture teams can create co-branded decks, custom industry blueprints, or tailored ROI models for your enterprise client proposals."
      primaryBtnText="REQUEST CUSTOM MATERIALS"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="CONTACT SALES TEAM"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
