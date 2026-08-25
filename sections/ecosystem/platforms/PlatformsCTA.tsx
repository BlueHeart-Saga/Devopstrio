"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function PlatformsCTA() {
  return (
    <RepresentativeCTA
      title="Let's Build Your Enterprise"
      highlightText="Platform Infrastructure?"
      description={null}
      primaryBtnText="REQUEST DEMO"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="CONTACT CONSULTING"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
