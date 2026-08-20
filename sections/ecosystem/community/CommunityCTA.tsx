"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function CommunityCTA() {
  return (
    <RepresentativeCTA
      title="Join The Devopstrio Global"
      highlightText="Technology Community?"
      description="Connect with engineers, innovators, researchers, and technology leaders shaping the future of digital transformation and open-source infrastructure."
      primaryBtnText="JOIN COMMUNITY"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE CAREERS"
      secondaryBtnHref="/careers"
    />
  );
}
