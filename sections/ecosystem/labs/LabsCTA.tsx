"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function LabsCTA() {
  return (
    <RepresentativeCTA
      title="Let's Build The Future Of Innovation"
      highlightText="Together?"
      description={null}
      primaryBtnText="EXPLORE RESEARCH"
      primaryBtnHref="#showcase"
      secondaryBtnText="TALK TO INNOVATION TEAM"
      secondaryBtnHref="/contact#contact-form"
    />
  );
}
