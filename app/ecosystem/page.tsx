"use client";

import React from "react";
import { EcosystemHero } from "@/sections/ecosystem/EcosystemHero";
import { EcosystemOverview } from "@/sections/ecosystem/EcosystemOverview";
import { EcosystemPillars } from "@/sections/ecosystem/EcosystemPillars";
import { PlatformPortfolio } from "@/sections/ecosystem/PlatformPortfolio";
import { TechnologyLandscape } from "@/sections/ecosystem/TechnologyLandscape";
import { AllianceNetwork } from "@/sections/ecosystem/AllianceNetwork";
import { GlobalDelivery } from "@/sections/ecosystem/GlobalDelivery";
import { DomainExcellence } from "@/sections/ecosystem/domain/DomainExcellence";
import { InnovationLabs } from "@/sections/ecosystem/InnovationLabs";
import { EcosystemMetrics } from "@/sections/ecosystem/EcosystemMetrics";
import { EcosystemCTA } from "@/sections/ecosystem/EcosystemCTA";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

const ecosystemSections = [
  { id: "overview", label: "Overview" },
  { id: "domains", label: "Domains" },
  { id: "portfolio", label: "Portfolio" },
  { id: "landscape", label: "Landscape" },
  { id: "alliances", label: "Alliances" },
  { id: "delivery", label: "Delivery" },
  { id: "excellence", label: "Excellence" },
  { id: "labs", label: "Labs" },
  { id: "metrics", label: "Metrics" }
];

export default function EcosystemLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">

      {/* 1. Ecosystem Hero Section */}
      <div className="flex flex-col bg-black">
        <EcosystemHero />
      </div>

      {/* Sticky Section Sub-Navbar */}
      <SectionNavbar sections={ecosystemSections} />

      {/* 2. Ecosystem Overview */}
      <div id="overview">
        <EcosystemOverview />
      </div>
      <SvgWaveLine variant="smooth" />

      {/* 3. Core Ecosystem Domains (Pillars) */}
      <div id="domains">
        <EcosystemPillars />
      </div>
      <SvgWaveLine variant="liquid" />

      {/* 4. Platform Portfolio */}
      <div id="portfolio">
        <PlatformPortfolio />
      </div>
      {/* <SvgWaveLine variant="dashed" /> */}

      {/* 5. Technology Landscape */}
      <div id="landscape">
        <TechnologyLandscape />
      </div>
      {/* <SvgWaveLine variant="particles" /> */}

      {/* 6. Strategic Alliance Network */}
      <div id="alliances">
        <AllianceNetwork />
      </div>
      <SvgWaveLine variant="smooth" />

      {/* 7. Global Delivery Network */}
      <div id="delivery">
        <GlobalDelivery />
      </div>
      <SvgWaveLine variant="grid" />

      {/* 8. Engineering Excellence */}
      <div id="excellence">
        <DomainExcellence />
      </div>
      <SvgWaveLine variant="liquid" />

      {/* 9. Innovation Labs */}
      <div id="labs">
        <InnovationLabs />
      </div>
      {/* <SvgWaveLine variant="dashed" /> */}

      {/* 10. Ecosystem Metrics (Business Outcomes) */}
      <div id="metrics">
        <EcosystemMetrics />
      </div>
      {/* <SvgWaveLine variant="particles" /> */}

      {/* 11. Final CTA */}
      <EcosystemCTA />

    </main>
  );
}

// Pure SVG Code Wave Divider components (High-Level Designs matching the About, Services and Contact Page)
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad-ecosystem" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow-ecosystem" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      {/* Grid specific fading gradient */}
      <linearGradient id="grid-fade-ecosystem" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0.2" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
    </defs>
  );

  return (
    <div className="w-full h-16 md:h-24 relative bg-transparent flex items-center justify-center overflow-hidden -my-8 md:-my-12 z-10 pointer-events-none">
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <GradientDef />

        {/* 1. Smooth Wave */}
        {variant === "smooth" && (
          <>
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow-ecosystem)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {/* 2. Dashed Neon Wave */}
        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad-ecosystem)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {/* 3. Particle Wave (Sine wave with scattered dots) */}
        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad-ecosystem)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad-ecosystem)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
          </>
        )}

        {/* 4. Grid Wave */}
        {variant === "grid" && (
          <>
            {/* Vertical grid lines dropping down */}
            <g opacity="0.4">
              {[...Array(40)].map((_, i) => {
                const y1 = 48 + Math.sin((i / 40) * Math.PI) * 24;
                return (
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade-ecosystem)" strokeWidth="1" />
                );
              })}
            </g>
            {/* Base line */}
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {/* 5. Liquid Wave (Overlapping fluid strokes) */}
        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad-ecosystem)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad-ecosystem)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad-ecosystem)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad-ecosystem)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}
