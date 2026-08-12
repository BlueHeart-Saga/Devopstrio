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
    <section id="pillars" className="w-full py-12 sm:py-16 bg-black text-white relative overflow-hidden">
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-rose-600/10 via-rose-500/15 to-rose-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Top Tagline with Left-Right Arrow indicator (AIStudioShowcase reference) */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 relative">
          <Reveal>
            <div className="relative inline-block">
              {/* Arrow image on the left side near heading */}
              <div className="absolute -top-5 sm:-top-7 md:-top-8 -left-2 sm:-left-4 md:-left-6 z-20 pointer-events-none select-none">
                <img
                  src="/assets/components/lefttoright.png"
                  alt="Left-Right Arrow indicator"
                  className="w-10 sm:w-12 md:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                />
              </div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.45]">
                We lead with{" "}
                <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1.5 rounded-xl inline-block">
                  every pillar
                </span>{" "}
                of{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">engineering excellence</span>
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

        {/* 3 Pillar Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[480px] md:min-h-[530px] transition-all duration-500">
          {pillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-8 md:p-10 flex flex-col justify-between h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[480px] md:min-h-[530px] cursor-pointer group ${
                    isHovered
                      ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-20"
                      : "bg-transparent"
                  }`}
                >
                  {/* Title & Subtitle Block (Vertically centered by default, glides UP smoothly on hover) */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "translate-y-0 mb-6"
                        : "translate-y-[135px] md:translate-y-[160px] mb-0"
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
