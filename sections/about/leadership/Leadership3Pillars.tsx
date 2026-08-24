"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "inspire",
    title: "Inspire",
    subtitle: "Executive Strategy & Governance",
    mainLink: "#executive-leadership",
    services: [
      { name: "Executive Board Leadership", href: "#executive-leadership" },
      { name: "Strategic Technology Governance", href: "#executive-leadership" },
      { name: "Advisory Counsel & Direction", href: "#executive-leadership" },
      { name: "Global Business Acceleration", href: "#executive-leadership" },
      { name: "Corporate Culture & Values", href: "#careers-cta" }
    ],
    ctaHref: "#executive-leadership",
    ctaLabel: "Meet Executive Leaders"
  },
  {
    id: "empower",
    title: "Empower",
    subtitle: "Principal Architecture & AI Innovation",
    mainLink: "#principal-architects",
    services: [
      { name: "525+ Multidisciplinary Specialists", href: "#global-teams" },
      { name: "DevOps & Cloud Automation Squads", href: "#global-teams" },
      { name: "AI & Platform Engineering Guilds", href: "#global-teams" },
      { name: "Zero-Defect Quality Engineering", href: "#global-teams" },
      { name: "Continuous Skill Elevation", href: "#global-teams" }
    ],
    ctaHref: "#global-teams",
    ctaLabel: "View Engineering Teams"
  },
  {
    id: "deliver",
    title: "Deliver",
    subtitle: "Global 525+ Engineering Talent",
    mainLink: "#global-teams",
    services: [
      { name: "2,500+ High-Scale Projects Delivered", href: "#leadership-deliver" },
      { name: "AI & Data Platform Engineering", href: "#leadership-deliver" },
      { name: "Enterprise Cloud Modernization", href: "#leadership-deliver" },
      { name: "From Idea to Impact Lifecycle", href: "#leadership-deliver" },
      { name: "24×7 Global SRE & Reliability", href: "#leadership-deliver" }
    ],
    ctaHref: "#leadership-deliver",
    ctaLabel: "Explore Delivery & Impact"
  }
];

export function Leadership3Pillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section id="pillars" className="w-full pt-0 pb-6 sm:pb-8 bg-black text-white relative overflow-hidden">
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-rose-600/10 via-rose-500/15 to-rose-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* 3 Pillar Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[380px] md:min-h-[420px] transition-all duration-500">
          {pillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-6 md:p-8 flex flex-col justify-between h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[380px] md:min-h-[420px] cursor-pointer group ${
                    isHovered
                      ? "bg-zinc-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20"
                      : "bg-transparent"
                  }`}
                >
                  {/* Title & Subtitle Block (Vertically centered by default, glides UP smoothly on hover) */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "translate-y-0 mb-4"
                        : "translate-y-[90px] md:translate-y-[110px] mb-0"
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

                  {/* Interactive Services List & CTA (Smoothly slides & fades in on hover) */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-8 invisible pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col border-t border-zinc-800/80">
                      {pillar.services.map((service, sIdx) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group/item flex items-center justify-between py-3 border-b border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 text-sm md:text-base font-medium text-white hover:text-rose-400"
                          style={{
                            transitionDelay: isHovered ? `${sIdx * 35}ms` : '0ms'
                          }}
                        >
                          <span className="group-hover/item:translate-x-1.5 group-hover/item:text-rose-400 transition-all duration-300">
                            {service.name}
                          </span>
                          <ChevronRight className="w-4.5 h-4.5 text-zinc-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-5 mt-2">
                      <Link
                        href={pillar.ctaHref}
                        className="inline-flex items-center justify-between w-full pt-3 border-t border-zinc-800/80 group/all"
                      >
                        <span className="text-sm md:text-base font-bold text-rose-500 group-hover/all:text-rose-400 transition-colors">
                          {pillar.ctaLabel}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover/all:bg-rose-600 group-hover/all:text-white group-hover/all:border-rose-600 group-hover/all:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
                          <ArrowRight className="w-4 h-4" />
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
