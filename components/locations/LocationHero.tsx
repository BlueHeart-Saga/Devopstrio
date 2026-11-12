"use client";

import React, { useState, useEffect } from "react";
import RippleGrid from "@/components/ui/RippleGrid";

export const DEFAULT_PARTICULAR_SERVICES = [
  "Cloud Services",
  "DevOps Services",
  "IT Services",
  "Managed Services",
  "Cybersecurity",
  "AI Services",
  "Cloud Migration",
  "Software Development"
];

interface LocationHeroProps {
  badge?: string;
  title?: string | React.ReactNode;
  rotatingServices?: string[];
  locationName?: string;
  locationHighlightClass?: string;
  nearMeConnector?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  officeStatus?: string;
  verifiedAddress?: string;
  stats?: { value: string; label: string }[];
}

export function LocationHero({
  title,
  rotatingServices = DEFAULT_PARTICULAR_SERVICES,
  locationName,
  locationHighlightClass = "text-rose-500",
  nearMeConnector = "Near Me in"
}: LocationHeroProps) {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    if (!locationName || rotatingServices.length <= 1) return;

    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingServices.length);
        setFadeState("in");
      }, 250);
    }, 2800);

    return () => clearInterval(interval);
  }, [locationName, rotatingServices]);

  const activeService = rotatingServices[index] || rotatingServices[0];

  return (
    <section className="relative w-full min-h-[38vh] sm:min-h-[44vh] md:min-h-[50vh] lg:min-h-[54vh] flex flex-col items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-black text-white overflow-hidden font-sans">
      {/* RippleGrid Background Effect from React Bits */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <RippleGrid
          color="#f43f5e"
          cellSize={46}
          lineWidth={1}
          glow={0.7}
          rippleStrength={1.2}
          rippleSpeed={0.9}
          rippleSize={1.1}
          fade={0.65}
          opacity={0.8}
          autoRipple="center"
          rippleInterval={2.8}
          mouseInteraction={true}
          clickRipple={true}
          lightMode={false}
        />
      </div>

      {/* Ambient gradient overlays for smooth top and bottom fade into bg-black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] bg-rose-500/[0.07] rounded-full blur-[140px] pointer-events-none z-[1]" />

      {/* Hero Content: Centered Title ONLY */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.18] text-center">
          {locationName ? (
            <>
              <span
                key={index}
                className={`inline-block transition-all duration-300 transform ${
                  fadeState === "in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                {activeService}
              </span>{" "}
              <span>{nearMeConnector}</span>{" "}
              <span className={locationHighlightClass}>{locationName}</span>
            </>
          ) : (
            title
          )}
        </h1>
      </div>
    </section>
  );
}
