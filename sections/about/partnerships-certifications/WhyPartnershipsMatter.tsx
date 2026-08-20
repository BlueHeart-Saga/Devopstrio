"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "credibility",
    title: "Credibility",
    subtitle: "Recognized Standards & Client Trust",
    description:
      "We align with leading hyperscalers and certified delivery frameworks that instill enterprise client confidence across every engagement.",
    mainLink: "/about/partnerships-certifications#all-business-partners",
    services: [
      { name: "Platform Aligned Delivery", href: "/about/partnerships-certifications#strategic-partners" },
      { name: "Certified Engineering Audits", href: "/about/partnerships-certifications#all-certifications" },
      { name: "Enterprise Governance Standards", href: "/about/partnerships-certifications#all-certifications" },
      { name: "Proven Client Security Alignment", href: "/about/partnerships-certifications#all-certifications" }
    ],
    ctaHref: "/about/partnerships-certifications#strategic-partners"
  },
  {
    id: "capability",
    title: "Capability",
    subtitle: "Expanded Ecosystem Knowledge",
    description:
      "Our strategic technology alliances expand access to cutting-edge tools, cloud sandboxes, and modern integration architectures.",
    mainLink: "/about/partnerships-certifications#all-tech-partners",
    services: [
      { name: "Hyperscaler Cloud Tooling", href: "/about/partnerships-certifications#all-tech-partners" },
      { name: "Advanced Automation Integrations", href: "/about/partnerships-certifications#all-tech-partners" },
      { name: "Continuous Skill Specialization", href: "/about/partnerships-certifications#all-certifications" },
      { name: "Next-Gen AI & Platform Stack", href: "/about/partnerships-certifications#all-tech-partners" }
    ],
    ctaHref: "/about/partnerships-certifications#all-tech-partners"
  },
  {
    id: "consistency",
    title: "Consistency",
    subtitle: "Repeatable Quality & Execution",
    description:
      "Certification-led engineering standards and structured release frameworks support reliable, predictable project outcomes.",
    mainLink: "/about/partnerships-certifications#all-certifications",
    services: [
      { name: "Structured DevOps Pipelines", href: "/services/devops-automation" },
      { name: "ISO & Security Readiness", href: "/about/partnerships-certifications#all-certifications" },
      { name: "Disciplined QA & Release Standards", href: "/services/qa-testing" },
      { name: "Long-Term Operational Support", href: "/services/managed-services" }
    ],
    ctaHref: "/about/partnerships-certifications#all-certifications"
  }
];

export function WhyPartnershipsMatter() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full py-10 sm:py-14 bg-[#030303] text-white relative overflow-hidden font-sans">
      
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[350px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Top Section Header matching ServicesOverviewPillars */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <Reveal>
            <div className="relative inline-block w-full">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-3 font-sans leading-[1.45]">
                Trust is built through{" "}
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1.5 rounded-xl inline-block">
                  more than
                </span>{" "}
                just{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">delivery excellence</span>
                  {/* Modern Pencil Art Hand-Sketched Underline */}
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-rose-500 pointer-events-none overflow-visible z-0"
                    viewBox="0 0 250 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 3 14 C 50 6, 130 17, 245 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                    />
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

        {/* 3 Premium Interactive Pillar Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[460px] md:min-h-[500px] transition-all duration-500">
          {pillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-8 md:p-10 flex flex-col justify-between h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[460px] md:min-h-[500px] cursor-pointer group ${
                    isHovered
                      ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20"
                      : "bg-transparent"
                  }`}
                >
                  {/* Title & Subtitle Block */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "translate-y-0 mb-6"
                        : "translate-y-[130px] md:translate-y-[150px] mb-0"
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
                      className={`text-lg sm:text-xl font-bold tracking-wide transition-all duration-500 ${
                        isHovered ? "text-rose-400 opacity-100" : "text-zinc-100 opacity-95"
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
                    <p className="text-base text-zinc-200 font-normal leading-relaxed mb-5 font-sans">
                      {pillar.description}
                    </p>

                    <div className="flex flex-col border-t border-zinc-800/80">
                      {pillar.services.map((service, sIdx) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group/item flex items-center justify-between py-2.5 border-b border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 text-base sm:text-lg font-semibold text-white hover:text-rose-400"
                          style={{
                            transitionDelay: isHovered ? `${sIdx * 35}ms` : '0ms'
                          }}
                        >
                          <span className="group-hover/item:translate-x-1.5 group-hover/item:text-rose-400 transition-all duration-300">
                            {service.name}
                          </span>
                          <ChevronRight className="w-5 h-5 text-zinc-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-4 mt-2">
                      <Link
                        href={pillar.ctaHref}
                        className="inline-flex items-center justify-between w-full pt-3 border-t border-zinc-800/80 group/all"
                      >
                        <span className="text-base font-bold text-rose-500 group-hover/all:text-rose-400 transition-colors">
                          Explore details
                        </span>
                        <div className="w-9 h-9 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover/all:bg-rose-600 group-hover/all:text-white group-hover/all:border-rose-600 group-hover/all:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
                          <ArrowRight className="w-4.5 h-4.5" />
                        </div>
                      </Link>
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
