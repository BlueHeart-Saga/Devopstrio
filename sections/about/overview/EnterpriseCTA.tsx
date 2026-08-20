"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function EnterpriseCTA() {
  return (
    <RepresentativeCTA
      title="Ready To Co-Develop Your Next"
      highlightText="High-Integrity System?"
      description="Connect with our principal architects to design state-of-the-art AI applications, optimize multi-cloud infrastructure, and co-develop robust enterprise systems."
      primaryBtnText="BOOK CONSULTATION"
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText="CONTACT EXPERTS"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
