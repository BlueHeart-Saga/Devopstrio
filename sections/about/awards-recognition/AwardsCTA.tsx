"use client";
import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function AwardsCTA() {
  return (
    <RepresentativeCTA
      title="Partner With An Award-Winning"
      highlightText="Technology Leader"
      description="Leverage our proven engineering excellence, ISO & SOC certifications, and industry-recognized teams to build high-performance, resilient digital ecosystems."
      primaryBtnText="START A PROJECT"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE SERVICES"
      secondaryBtnHref="/services"
    />
  );
}

