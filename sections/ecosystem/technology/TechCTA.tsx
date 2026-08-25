"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function TechCTA() {
  return (
    <RepresentativeCTA
      title="Technology That Powers"
      highlightText="Digital Transformation?"
      description={null}
      primaryBtnText="SCHEDULE CONSULTATION"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE SERVICES"
      secondaryBtnHref="/services"
    />
  );
}
