"use client";

import React from "react";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export function ContactCTA() {
  return (
    <RepresentativeCTA
      title="Your Enterprise Infrastructure Deserves Better."
      highlightText="Let's Build It Today."
      description="Slow deployments, runaway cloud costs, and security compliance gaps aren't inevitable — they're solvable. Connect directly with our engineering leadership."
      primaryBtnText="START YOUR JOURNEY"
      primaryBtnHref="#fullName"
      secondaryBtnText="TALK TO AN EXPERT"
      secondaryBtnHref="#fullName"
    />
  );
}
