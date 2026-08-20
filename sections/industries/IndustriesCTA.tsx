"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function IndustriesCTA() {
  return (
    <RepresentativeCTA
      title="Ready To Design Your Industry"
      highlightText="Regulatory & Cloud Roadmap?"
      description="Book an architectural consult with our domain specialists to review your security audits, compliance standards, payment gateways, and real-time enterprise telemetry."
      primaryBtnText="CONSULT AN INDUSTRY EXPERT"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE ALL SECTORS"
      secondaryBtnHref="/industries"
    />
  );
}
