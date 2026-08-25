"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function AcceleratorsCTA() {
  return (
    <RepresentativeCTA
      title="Ready To Build Faster &"
      highlightText="Scale Smarter?"
      description={null}
      primaryBtnText="START YOUR PROJECT"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="EXPLORE FRAMEWORKS"
      secondaryBtnHref="#framework"
    />
  );
}

