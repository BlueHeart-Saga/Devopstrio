"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export const SupportCTA = () => {
  return (
    <RepresentativeCTA
      title="Need Immediate Technical Assistance &"
      highlightText="24/7 Support?"
      description="Resolve issues faster, optimize your enterprise cloud platforms, and accelerate business outcomes — with expert engineers available around the clock."
      primaryBtnText="OPEN SUPPORT REQUEST"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="TALK TO AN EXPERT"
      secondaryBtnHref="/contact#contact-form"
    />
  );
};
