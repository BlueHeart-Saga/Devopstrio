"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function ServicesCTA() {
  return (
    <RepresentativeCTA
      title="Ready To Design Your"
      highlightText="Cloud & Engineering Roadmap?"
      description="Book a dedicated consultation with our senior solutions architects to review your systems footprint, security audit needs, and enterprise scaling plans."
      primaryBtnText="CONSULT A SENIOR ARCHITECT"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE ALL SERVICES"
      secondaryBtnHref="/services"
    />
  );
}
