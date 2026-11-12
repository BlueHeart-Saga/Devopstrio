"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

interface LocationCTAProps {
  locationName?: string;
  serviceTitle?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

export function LocationCTA({
  locationName = "the UK",
  serviceTitle,
  primaryBtnText = "SCHEDULE TECHNICAL SCOPING",
  secondaryBtnText = "EXPLORE UK COVERAGE"
}: LocationCTAProps) {
  const heading = serviceTitle
    ? `Ready to Deploy ${serviceTitle} in`
    : "Partner with Principal Cloud Architects Across";

  const description = (
    <>
      Schedule a technical scoping session with our UK solutions architects. We review your architecture, calculate cloud ROI, and establish guaranteed <span className="underline decoration-1 underline-offset-4 font-semibold">24/7 SRE SLAs</span> tailored for {locationName} organizations.
    </>
  );

  return (
    <RepresentativeCTA
      title={heading}
      highlightText={locationName}
      description={description}
      primaryBtnText={primaryBtnText}
      primaryBtnHref="/contact#contact-form"
      secondaryBtnText={secondaryBtnText}
      secondaryBtnHref="/locations/uk"
      imageSrc="/webp/assets/components/cta-img-001.webp"
      imageAlt={`Devopstrio Solutions Lead for ${locationName}`}
    />
  );
}
