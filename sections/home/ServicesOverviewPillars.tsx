"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "build",
    title: "Build",
    subtitle: "Software & Platform Engineering",
    description:
      "We reimagine enterprise software delivery with AI embedded across every stage. Up to 50% faster, governed from day one, and engineered to evolve with your business.",
    mainLink: "/services/software-development",
    services: [
      { name: "Product Engineering", href: "/services/software-development/product-engineering" },
      { name: "Application Modernization", href: "/services/software-development/application-modernization" },
      { name: "DevOps & Platform Engineering", href: "/services/devops-automation/platform-engineering" },
      { name: "Infrastructure as Code", href: "/services/devops-automation/infrastructure-as-code" },
      { name: "QA & Test Automation", href: "/services/qa-testing/test-automation" }
    ],
    ctaHref: "/services"
  },
  {
    id: "think",
    title: "Think",
    subtitle: "AI and Data Solutions",
    description:
      "We embed AI into the heart of your business, from strategy to production. Faster decisions, smarter operations, and enterprise-wide impact that can be measured.",
    mainLink: "/services/ai-data-innovation",
    services: [
      { name: "Generative AI Solutions", href: "/services/ai-data-innovation/generative-ai-solutions" },
      { name: "AI Agents & Automation", href: "/services/ai-data-innovation/ai-agents-automation" },
      { name: "Data Engineering & Lakehouses", href: "/services/data-engineering/data-warehousing" },
      { name: "Machine Learning Engineering", href: "/services/ai-data-innovation/machine-learning-engineering" },
      { name: "Digital Transformation Strategy", href: "/services/digital-transformation/digital-strategy" }
    ],
    ctaHref: "/services/ai-data-innovation"
  },
  {
    id: "run",
    title: "Run",
    subtitle: "Managed IT Operations & Security",
    description:
      "Enterprise-grade managed services that combine AI, automation, and expert engineering to keep your critical systems secure, resilient, and continuously improving.",
    mainLink: "/services/managed-services",
    services: [
      { name: "24/7 Managed Cloud Services", href: "/services/managed-services/managed-cloud" },
      { name: "Cybersecurity & SOC Operations", href: "/services/cybersecurity/security-operations-center" },
      { name: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" },
      { name: "FinOps & Cost Optimization", href: "/services/cloud-services/finops-cost-optimization" },
      { name: "Zero Trust Security Architecture", href: "/services/cybersecurity/zero-trust-architecture" }
    ],
    ctaHref: "/services/managed-services"
  }
];

export function ServicesOverviewPillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full pt-20 md:pt-32 pb-8 md:pb-12 bg-[#030303] text-white relative overflow-hidden">
      
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Top Tagline */}
        <div className="mb-16 max-w-xl">
          <Reveal>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-white leading-snug font-sans">
              We engineer every stage <br className="hidden sm:inline" />
              of your <span className="text-rose-500">AI transformation</span>
            </h2>
          </Reveal>
        </div>

        {/* 3 Pillar Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[500px] transition-all duration-500">
          {pillars.map((pillar, idx) => {
            const isHovered = activeHoverId === pillar.id;

            return (
              <Reveal key={pillar.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveHoverId(pillar.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-8 md:p-10 flex flex-col justify-between h-full relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[500px] cursor-pointer group ${
                    isHovered
                      ? "bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20"
                      : "bg-transparent"
                  }`}
                >

                  {/* Top Portion: Title & Subtitle */}
                  <div>
                    <div className="mb-2 flex items-baseline justify-between">
                      <Link href={pillar.mainLink} className="group/title block">
                        <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-red-500 group-hover/title:text-rose-400 font-sans transition-colors duration-300">
                          {pillar.title}
                        </h3>
                      </Link>
                      {/* <span className="text-xs font-mono text-zinc-600 group-hover:text-rose-500 transition-colors font-bold">
                        0{idx + 1}
                      </span> */}
                    </div>

                    {/* Subtitle */}
                    <p
                      className={`text-xs md:text-sm font-semibold tracking-wide transition-all duration-500 mb-6 ${
                        isHovered ? "text-rose-400 opacity-100" : "text-rose-500/80"
                      }`}
                    >
                      {pillar.subtitle}
                    </p>

                    {/* Relative Container to maintain height & prevent layout shifts */}
                    <div className="relative min-h-[220px]">
                      
                      {/* 1) DEFAULT STATE CONTENT: Description Paragraph */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isHovered
                            ? "opacity-0 translate-y-2 pointer-events-none"
                            : "opacity-100 translate-y-0"
                        }`}
                      >
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
                          {pillar.description}
                        </p>
                      </div>

                      {/* 2) HOVER STATE CONTENT: Interactive Services List */}
                      <div
                        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isHovered
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-2 invisible pointer-events-none"
                        }`}
                      >
                        <div className="flex flex-col border-t border-zinc-800/80">
                          {pillar.services.map((service, sIdx) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group/item flex items-center justify-between py-3 border-b border-zinc-800/60 hover:border-rose-500/30 transition-all duration-300 text-xs md:text-sm font-medium text-zinc-300 hover:text-white"
                              style={{
                                transitionDelay: isHovered ? `${sIdx * 30}ms` : '0ms'
                              }}
                            >
                              <span className="group-hover/item:translate-x-1.5 group-hover/item:text-rose-400 transition-all duration-300">
                                {service.name}
                              </span>
                              <ChevronRight className="w-4 h-4 text-zinc-500 group-hover/item:text-red-500 group-hover/item:translate-x-1 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Bottom CTA Row: "Explore all services →" */}
                  <div className="pt-6 mt-auto">
                    <div
                      className={`transition-all duration-500 ${
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                      }`}
                    >
                      <Link
                        href={pillar.ctaHref}
                        className="inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800/80 group/all"
                      >
                        <span className="text-sm font-bold text-red-500 group-hover/all:text-rose-400 transition-colors">
                          Explore all services
                        </span>
                        <div className="w-9 h-9 rounded-full border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-500 group-hover/all:bg-red-600 group-hover/all:text-white group-hover/all:border-red-600 group-hover/all:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
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
