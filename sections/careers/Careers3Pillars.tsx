"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const careerPillars = [
  {
    id: "learn",
    title: "Learn",
    subtitle: "Continuous Skill Acquisition & Mentorship",
    description: "Master modern cloud architectures, AI tools, and enterprise DevOps alongside industry veterans.",
    mainLink: "#growth",
    capabilities: [
      { name: "Sponsored Cloud Certifications", href: "#growth" },
      { name: "1-on-1 Architecture Mentorship", href: "#growth" },
      { name: "AI & LLM Engineering Workshops", href: "#growth" },
      { name: "Global Internship Programs", href: "/about/global-internship" },
      { name: "Internal R&D Lab Access", href: "#growth" }
    ],
    ctaHref: "#growth"
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Next-Gen Enterprise Infrastructure & Platforms",
    description: "Engineer resilient, automated digital ecosystems that power global Fortune 500 enterprises.",
    mainLink: "#open-positions",
    capabilities: [
      { name: "Autonomous DevOps & IaC Pipelines", href: "#open-positions" },
      { name: "Zero-Trust Security Architectures", href: "#open-positions" },
      { name: "High-Throughput Cloud Platforms", href: "#open-positions" },
      { name: "GenAI & Agentic Automation", href: "#open-positions" },
      { name: "Site Reliability Engineering (SRE)", href: "#open-positions" }
    ],
    ctaHref: "#open-positions"
  },
  {
    id: "grow",
    title: "Grow",
    subtitle: "Rapid Career Advancement & Global Impact",
    description: "Accelerate your career path with clear promotion tracks, competitive packages, and international mobility.",
    mainLink: "#why-join",
    capabilities: [
      { name: "Fast-Track Leadership Pathways", href: "#why-join" },
      { name: "Global Office Mobility Options", href: "#why-join" },
      { name: "Performance Spot Bonuses & Equity", href: "#perks" },
      { name: "Flexible Hybrid Work Freedom", href: "#perks" },
      { name: "Direct Executive Team Synergy", href: "#why-join" }
    ],
    ctaHref: "#why-join"
  }
];

export function Careers3Pillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full pt-12 pb-2 md:pt-16 md:pb-4 bg-[#030303] text-white relative overflow-hidden border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 relative">
            {/* Top-to-bottom arrow PNG */}
            <div className="flex justify-center mb-4 pointer-events-none select-none">
              <img
                src="/assets/components/streight-toptobuttm.png"
                alt="Arrow indicator"
                className="w-12 sm:w-16 md:w-20 h-auto object-contain filter drop-shadow-[0_0_18px_rgba(244,63,94,0.5)]"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight font-sans">
              Build your{" "}
              <span className="bg-rose-500 text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-xl inline-block font-semibold shadow-lg mx-1">
                dream career
              </span>{" "}
              at Devopstrio.
            </h2>
          </div>
        </Reveal>

        {/* 3 Pillar Cards Container */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[380px] md:min-h-[440px] transition-all duration-500 shadow-2xl">
            {careerPillars.map((pillar) => {
              const isHovered = activeHoverId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-6 md:p-8 flex flex-col justify-between h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[380px] md:min-h-[440px] cursor-pointer group ${
                    isHovered
                      ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20"
                      : "bg-transparent"
                  }`}
                >
                  {/* Title & Subtitle Block */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "translate-y-0 mb-4"
                        : "translate-y-[100px] md:translate-y-[120px] mb-0"
                    }`}
                  >
                    <div className="mb-2 flex items-baseline justify-between">
                      <Link href={pillar.mainLink} className="group/title block">
                        <h3 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-rose-500 group-hover/title:text-rose-400 font-sans transition-colors duration-300">
                          {pillar.title}
                        </h3>
                      </Link>
                    </div>

                    {/* Subtitle */}
                    <p
                      className={`text-base md:text-lg font-semibold tracking-wide transition-all duration-500 ${
                        isHovered ? "text-rose-400 opacity-100" : "text-zinc-200 opacity-90"
                      }`}
                    >
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Interactive Services List & CTA */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-8 invisible pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col border-t border-zinc-800/80">
                      {pillar.capabilities.map((cap, cIdx) => (
                        <Link
                          key={cap.name}
                          href={cap.href}
                          className="group/item flex items-center justify-between py-2.5 border-b border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 text-sm font-semibold text-white hover:text-rose-400"
                          style={{
                            transitionDelay: isHovered ? `${cIdx * 35}ms` : '0ms'
                          }}
                        >
                          <span className="group-hover/item:translate-x-1.5 group-hover/item:text-rose-400 transition-all duration-300">
                            {cap.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-4 mt-2">
                      <Link
                        href={pillar.ctaHref}
                        className="inline-flex items-center justify-between w-full pt-2.5 border-t border-zinc-800/80 group/all"
                      >
                        <span className="text-sm font-semibold text-rose-500 group-hover/all:text-rose-400 transition-colors">
                          Explore opportunities
                        </span>
                        <div className="w-7 h-7 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover/all:bg-rose-600 group-hover/all:text-white group-hover/all:border-rose-600 group-hover/all:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
