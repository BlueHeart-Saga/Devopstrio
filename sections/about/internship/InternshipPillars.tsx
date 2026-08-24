"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const internshipPillars = [
  {
    id: "learn",
    title: "LEARN",
    subtitle: "Build Your Foundation.",
    description:
      "Master cloud-native architecture, enterprise DevOps, and production AI engineering through hands-on mentorship from senior technical leaders.",
    mainLink: "/about/global-internship#application-form",
    items: [
      { name: "Cloud & Kubernetes Architecture", href: "/services/cloud-services" },
      { name: "Generative AI & Model Fine-Tuning", href: "/services/ai-data-innovation" },
      { name: "Automated CI/CD & Infrastructure", href: "/services/devops-automation" },
      { name: "Zero-Trust Cybersecurity Principles", href: "/services/cybersecurity" },
      { name: "Site Reliability & Operations", href: "/services/devops-automation/site-reliability-engineering" }
    ],
    ctaHref: "#application-form"
  },
  {
    id: "build",
    title: "BUILD",
    subtitle: "Create With Purpose.",
    description:
      "Write production-grade code, deploy live microservices, and co-create real-world SaaS products used by enterprise clients globally.",
    mainLink: "/about/global-internship#application-form",
    items: [
      { name: "Production Microservices Engineering", href: "/services/software-development" },
      { name: "AI Agent Workflows & Automation", href: "/services/ai-data-innovation/ai-agents-automation" },
      { name: "High-Scale Data Pipelines", href: "/services/data-engineering/data-warehousing" },
      { name: "Automated QA & Test Engineering", href: "/services/qa-testing/test-automation" },
      { name: "Full-Stack SaaS Platforms", href: "/services/software-development/product-engineering" }
    ],
    ctaHref: "#application-form"
  },
  {
    id: "grow",
    title: "GROW",
    subtitle: "Shape Your Future.",
    description:
      "Accelerate from student to full-time engineer. Receive direct executive mentorship, career coaching, and fast-track hiring pathways.",
    mainLink: "/about/global-internship#application-form",
    items: [
      { name: "1-on-1 Senior Architect Mentorship", href: "/about/our-culture-people" },
      { name: "Fast-Track Full-Time Offers", href: "/careers" },
      { name: "Global Industry Certifications", href: "/about/global-internship" },
      { name: "Leadership & Hackathon Pods", href: "/about/company-overview" },
      { name: "Career Pathing & Sponsorship", href: "/careers" }
    ],
    ctaHref: "#application-form"
  }
];

export function InternshipPillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Top Tagline */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <div className="relative inline-block w-full">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.45]">
                Build Your Foundation.{" "}
                <span className="bg-rose-500 text-white font-light px-4 py-1 mx-1.5 rounded-xl inline-block translate-y-1 sm:translate-y-1.5">
                  Create With Purpose.
                </span>{" "}
                <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                  <span className="text-white font-semibold relative z-10">Shape Your Future.</span>
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

        {/* 3 Pillar Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[480px] md:min-h-[530px] transition-all duration-500">
          {internshipPillars.map((pillar, idx) => {
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
                  {/* Title & Subtitle Block */}
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

                  {/* Interactive Items List & CTA */}
                  <div
                    className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-8 invisible pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col border-t border-zinc-800/80">
                      {pillar.items.map((item, sIdx) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item flex items-center justify-between py-3 border-b border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 text-sm md:text-base font-medium text-white hover:text-rose-400"
                          style={{
                            transitionDelay: isHovered ? `${sIdx * 35}ms` : '0ms'
                          }}
                        >
                          <span className="group-hover/item:translate-x-1.5 group-hover/item:text-rose-400 transition-all duration-300">
                            {item.name}
                          </span>
                          <ChevronRight className="w-4.5 h-4.5 text-zinc-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-5 mt-2">
                      <a
                        href={pillar.ctaHref}
                        className="inline-flex items-center justify-between w-full pt-3 border-t border-zinc-800/80 group/all"
                      >
                        <span className="text-sm md:text-base font-bold text-rose-500 group-hover/all:text-rose-400 transition-colors">
                          Explore {pillar.title.toLowerCase()} track
                        </span>
                        <div className="w-8 h-8 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover/all:bg-rose-600 group-hover/all:text-white group-hover/all:border-rose-600 group-hover/all:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </a>
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

export default InternshipPillars;
