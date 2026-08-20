"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function ExcellenceCTA() {
  return (
    <RepresentativeCTA
      title="Engineering Excellence That Drives"
      highlightText="Real Business Outcomes?"
      description="From cloud-native platforms to AI-powered solutions, our engineering teams help enterprise organizations innovate faster, operate securely, and scale confidently."
      primaryBtnText="START YOUR TRANSFORMATION"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="MEET OUR ENGINEERS"
      secondaryBtnHref="/about/leadership-team"
    />
  );
}
