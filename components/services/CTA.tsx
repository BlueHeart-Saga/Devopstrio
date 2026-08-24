"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export interface CTAProps {
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: React.ReactNode;
  ctaBtnText: string;
  backLink?: string;
  className?: string;
}

export function CTA({
  ctaTitle,
  ctaHighlight,
  ctaDesc,
  ctaBtnText,
  backLink = "/services"
}: CTAProps) {
  return (
    <RepresentativeCTA
      title={ctaTitle}
      highlightText={ctaHighlight}
      description={ctaDesc}
      primaryBtnText={ctaBtnText ? ctaBtnText.toUpperCase() : "CONSULT AN ARCHITECT"}
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE SERVICES"
      secondaryBtnHref={backLink}
    />
  );
}

