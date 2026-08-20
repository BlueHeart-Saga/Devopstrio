"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function PartnershipCTA() {
  return (
    <RepresentativeCTA
      title="Build The Future Of Enterprise Systems"
      highlightText="Together?"
      description="Partner with Devopstrio to co-develop cloud, AI, data engineering, and digital transformation solutions at enterprise scale."
      primaryBtnText="BECOME A PARTNER"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="TALK TO ALLIANCE TEAM"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
