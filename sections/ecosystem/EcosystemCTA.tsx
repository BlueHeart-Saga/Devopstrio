"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function EcosystemCTA() {
  return (
    <RepresentativeCTA
      title="Join Our Strategic"
      highlightText="Alliance Network?"
      description="Collaborate on software prototypes, deploy co-engineered accelerators, and integrate cloud architectures with our partner portal and global delivery network."
      primaryBtnText="REQUEST PARTNER ACCESS"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE ECOSYSTEM"
      secondaryBtnHref="/ecosystem"
    />
  );
}
