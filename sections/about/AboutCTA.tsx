"use client";

import React from "react";
import { RepresentativeCTA, RepresentativeCTAProps } from "@/components/ui/RepresentativeCTA";

export type GlobalCTAProps = RepresentativeCTAProps;

export function GlobalCTA(props: GlobalCTAProps) {
  return <RepresentativeCTA {...props} />;
}

export function AboutCTA() {
  return <RepresentativeCTA />;
}
