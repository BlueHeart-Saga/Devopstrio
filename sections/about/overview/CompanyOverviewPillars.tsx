"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface OverviewPillar {
  id: string;
  title: string;
  subtitle: string;
  mainLink: string;
  ctaText: string;
  items: { name: string; href: string }[];
}

const overviewPillars: OverviewPillar[] = [
  {
    id: "people",
    title: "Our People",
    subtitle: "The People Behind Every Solution",
    mainLink: "/about/company-overview",
    ctaText: "Discover Our Team",
    items: [
      { name: "Global Engineering Talent", href: "/about/company-overview" },
      { name: "Leadership & Domain Experts", href: "/about/company-overview" },
      { name: "Culture of Collaboration", href: "/about/company-overview" },
      { name: "Inclusive & Diverse Teams", href: "/careers" },
    ],
  },
  {
    id: "values",
    title: "Our Values",
    subtitle: "The Principles That Guide Us",
    mainLink: "/about/company-overview#vision",
    ctaText: "Explore Our Principles",
    items: [
      { name: "Integrity & Transparency", href: "/about/company-overview#vision" },
      { name: "Excellence in Execution", href: "/about/company-overview#vision" },
      { name: "Client-Centric Innovation", href: "/about/company-overview#vision" },
      { name: "Continuous Learning & R&D", href: "/about/company-overview#vision" },
    ],
  },
  {
    id: "future",
    title: "Our Future",
    subtitle: "Building What's Next",
    mainLink: "/about/company-overview#future",
    ctaText: "See Future Innovations",
    items: [
      { name: "AI & Automation R&D", href: "/services/ai-data-innovation" },
      { name: "Next-Gen Cloud Architecture", href: "/services/cloud-services" },
      { name: "Sustainable Tech Ecosystems", href: "/about/company-overview#future" },
      { name: "Global Enterprise Scale", href: "/about/company-overview#future" },
    ],
  },
];

export function CompanyOverviewPillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative">
      {/* Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        {/* <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
              Driven by <span className="text-rose-500 font-bold">Purpose</span>. Defined by <span className="text-rose-500 font-bold">Excellence</span>.
            </h2>
          </Reveal>
        </div> */}

        {/* 3 Pillar Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/40 backdrop-blur-md rounded-2xl overflow-hidden min-h-[480px] md:min-h-[520px]">
          {overviewPillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-8 md:p-12 flex flex-col justify-center h-full relative min-h-[480px] md:min-h-[520px] cursor-pointer group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20" : "bg-transparent"
                  }`}
                >
                  {/* Background Image Reveal - ONLY on the hovered card (aligned across 3 columns) */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <img
                      src="/assets/About-page/card/singlecardto3.png"
                      alt={pillar.title}
                      style={{
                        width: "300%",
                        maxWidth: "none",
                        marginLeft: idx === 0 ? "0%" : idx === 1 ? "-100%" : "-200%",
                      }}
                      className={`h-full object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isHovered ? "opacity-90 scale-105 filter brightness-105" : "opacity-0 scale-100"
                      }`}
                    />
                    {/* Gradient Overlay for Text Contrast */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 transition-opacity duration-700 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Content Words (Centered by default, smoothly glides UP towards top on hover) */}
                  <div
                    className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered ? "-translate-y-28 md:-translate-y-36" : "translate-y-0"
                    }`}
                  >
                    <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-rose-500 mb-4 font-sans transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className={`text-lg md:text-xl font-semibold tracking-wide leading-relaxed transition-all duration-500 ${
                        isHovered ? "text-white opacity-100" : "text-zinc-300 opacity-90"
                      }`}
                    >
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
