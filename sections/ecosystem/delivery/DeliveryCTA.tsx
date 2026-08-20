"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function DeliveryCTA() {
  return (
    <RepresentativeCTA
      title="One Global Engineering Team."
      highlightText="Unlimited Possibilities."
      description="Leverage Devopstrio's global delivery network to accelerate innovation, scale operations, and achieve enterprise outcomes through world-class engineering and consulting expertise."
      primaryBtnText="EXPLORE GLOBAL PRESENCE"
      primaryBtnHref="/about/global-presence"
      secondaryBtnText="CONNECT WITH DELIVERY TEAM"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
