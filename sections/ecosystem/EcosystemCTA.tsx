"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function EcosystemCTA() {
  return (
    <RepresentativeCTA
      title="Join Our Strategic"
      highlightText="Alliance Network?"
      description=""
      primaryBtnText="REQUEST PARTNER ACCESS"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE ECOSYSTEM"
      secondaryBtnHref="/ecosystem"
    />
  );
}
