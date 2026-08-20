"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

interface IndustryCTAProps {
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: React.ReactNode;
  ctaBtnText: string;
}

export function IndustryCTA({
  ctaTitle,
  ctaHighlight,
  ctaDesc,
  ctaBtnText
}: IndustryCTAProps) {
  return (
    <RepresentativeCTA
      title={ctaTitle}
      highlightText={ctaHighlight}
      description={ctaDesc}
      primaryBtnText={ctaBtnText}
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="BACK TO INDUSTRIES INDEX"
      secondaryBtnHref="/industries"
    />
  );
}
