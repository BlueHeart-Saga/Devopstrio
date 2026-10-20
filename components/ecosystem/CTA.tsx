"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export interface CTAProps {
  ctaTitle?: string;
  ctaHighlight?: string;
  ctaDesc?: React.ReactNode;
  ctaBtnText?: string;
  backLink?: string;
}

export function CTA({
  ctaTitle = "Ready to Build the Future of Enterprise Systems",
  ctaHighlight = "Together?",
  ctaDesc,
  ctaBtnText = "GET IN TOUCH",
  backLink = "/ecosystem"
}: CTAProps) {
  return (
    <RepresentativeCTA
      title={ctaTitle}
      highlightText={ctaHighlight}
      description={ctaDesc || "Partner with our global engineering teams to accelerate your cloud modernization, AI frameworks, and resilient platform delivery."}
      primaryBtnText={ctaBtnText ? ctaBtnText.toUpperCase() : "GET IN TOUCH"}
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE ECOSYSTEM"
      secondaryBtnHref={backLink}
    />
  );
}

export default CTA;
