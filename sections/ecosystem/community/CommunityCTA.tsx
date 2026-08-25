"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function CommunityCTA() {
  return (
    <RepresentativeCTA
      title="Join The Devopstrio Global"
      highlightText="Technology Community?"
      description={null}
      primaryBtnText="JOIN COMMUNITY"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE CAREERS"
      secondaryBtnHref="/careers"
    />
  );
}
