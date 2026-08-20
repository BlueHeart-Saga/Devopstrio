"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function CTA() {
  return (
    <RepresentativeCTA
      title="Ready To Design Your Next"
      highlightText="Enterprise System?"
      description="Connect directly with our engineering architects. We will audit your cloud estate, optimize database indices, and design high-integrity system architectures."
      primaryBtnText="BOOK CONSULTATION"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="CONTACT EXPERTS"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
