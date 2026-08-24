"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight } from "lucide-react";

const pillars = [
  {
    id: "achievement",
    title: "Achievement",
    subtitle: "Milestones That Matter",
    highlights: [
      "Global Industry Recognition & Finalist Awards",
      "ISO 9001 & Cyber Essentials Certifications",
      "Enterprise Cloud & Data Modernization Milestone",
      "Crown Commercial Service (CCS) Supplier Status",
      "Multi-Category Technology Excellence Awards"
    ]
  },
  {
    id: "excellence",
    title: "Excellence",
    subtitle: "Standards We Stand By",
    highlights: [
      "Zero-Trust Security & Risk Governance Frameworks",
      "Automated CI/CD & DevSecOps Compliance Protocols",
      "24/7 Follow-the-Sun SRE Operational Reliability",
      "Rigorous Software Engineering & QA Protocols",
      "Certified High-Performance Engineering Talent"
    ]
  },
  {
    id: "impact",
    title: "Impact",
    subtitle: "Recognition That Reflects Our Work",
    highlights: [
      "Accelerated Time-to-Market & Cost Optimization",
      "Mission-Critical Multi-Region Cloud Deployments",
      "High-Throughput Enterprise AI & Data Pipelines",
      "Trusted Partner to Healthcare & Public Sector",
      "Long-Term Co-Owned Client Business Growth"
    ]
  }
];

export function AwardsPillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-zinc-900/60">
      
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Top Tagline Header Matching ServicesOverviewPillars */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <div className="relative inline-block w-full">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.45]">
                Recognized for{" "}
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1.5 rounded-xl inline-block">
                  excellence
                </span>{" "}
                & built for{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">lasting impact</span>
                  {/* Modern Pencil Art Hand-Sketched Underline */}
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Primary artistic pencil stroke */}
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
                    {/* Secondary graphite texture pencil stroke overlay */}
                    <path
                      d="M 12 17 C 75 11, 165 18, 238 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="6 3 14 4"
                      className="opacity-75 filter drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* 3 Pillar Cards Container matching ServicesOverviewPillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[440px] md:min-h-[480px] transition-all duration-500">
          {pillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-8 md:p-10 flex flex-col justify-between h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[440px] md:min-h-[480px] cursor-pointer group ${
                    isHovered
                      ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20"
                      : "bg-transparent"
                  }`}
                >
                  {/* Title & Subtitle Block (Glides UP smoothly on hover) */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "translate-y-0 mb-6"
                        : "translate-y-[120px] md:translate-y-[140px] mb-0"
                    }`}
                  >
                    <div className="mb-2 flex items-baseline justify-between">
                      <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-rose-500 font-sans transition-colors duration-300">
                        {pillar.title}
                      </h3>
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

                  {/* Highlights List (Fades in on hover) */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-8 invisible pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col border-t border-zinc-800/80">
                      {pillar.highlights.map((item, sIdx) => (
                        <div
                          key={sIdx}
                          className="group/item flex items-center justify-between py-3 border-b border-zinc-800/60 transition-all duration-300 text-sm md:text-base font-medium text-white hover:text-rose-400"
                          style={{
                            transitionDelay: isHovered ? `${sIdx * 35}ms` : '0ms'
                          }}
                        >
                          <span className="group-hover/item:translate-x-1.5 transition-all duration-300">
                            {item}
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-300 shrink-0 ml-2" />
                        </div>
                      ))}
                    </div>
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
