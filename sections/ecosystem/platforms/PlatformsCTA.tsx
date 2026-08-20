"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function PlatformsCTA() {
  return (
    <RepresentativeCTA
      title="Let's Build Your Enterprise"
      highlightText="Platform Infrastructure?"
      description="Accelerate digital transformation by launching your enterprise-grade SaaS, PaaS, or AI platform solution with Devopstrio."
      primaryBtnText="REQUEST DEMO"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="CONTACT CONSULTING"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
