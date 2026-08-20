"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function TechCTA() {
  return (
    <RepresentativeCTA
      title="Technology That Powers"
      highlightText="Digital Transformation?"
      description="Build scalable, secure, and intelligent digital platforms with Devopstrio's comprehensive technology ecosystem."
      primaryBtnText="SCHEDULE CONSULTATION"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE SERVICES"
      secondaryBtnHref="/services"
    />
  );
}
