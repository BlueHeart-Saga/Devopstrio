"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function ExcellenceCTA() {
  return (
    <RepresentativeCTA
      title="Engineering Excellence That Drives"
      highlightText="Real Business Outcomes?"
      description={null}
      primaryBtnText="START YOUR TRANSFORMATION"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="MEET OUR ENGINEERS"
      secondaryBtnHref="/about/leadership-team"
    />
  );
}
