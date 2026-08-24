"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function GlobalCTA() {
  return (
    <RepresentativeCTA
      title="Connect With Our Global"
      highlightText="Engineering Hubs"
      description="Whether you need strategic consulting from the UK, engineering scale from India, or regional operations in North America, Devopstrio provides 24/7 global delivery with local accountability."
      primaryBtnText="CONTACT REGIONAL TEAM"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="BOOK CONSULTATION"
      secondaryBtnHref="/contact#schedule-call"
    />
  );
}

