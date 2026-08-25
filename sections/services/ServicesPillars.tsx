"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "imagine",
    title: "Imagine",
    subtitle: "AI, Data & Innovation",
    description:
      "We embed cognitive architecture and data intelligence into the heart of your enterprise to unlock strategic possibilities and clear ROI.",
    mainLink: "/services/ai-data-innovation",
    services: [
      { name: "Generative AI Solutions", href: "/services/ai-data-innovation/generative-ai-solutions" },
      { name: "AI Agents & Automation", href: "/services/ai-data-innovation/ai-agents-automation" },
      { name: "Machine Learning Engineering", href: "/services/ai-data-innovation/machine-learning-engineering" },
      { name: "Data Engineering & Lakehouses", href: "/services/data-engineering" },
      { name: "Predictive Analytics", href: "/services/ai-data-innovation/predictive-analytics" }
    ],
    ctaHref: "/services/ai-data-innovation"
  },
  {
    id: "engineer",
    title: "Engineer",
    subtitle: "Software, Cloud & DevOps",
    description:
      "We build resilient platforms, modern cloud environments, and automated CI/CD deployment pipelines engineered to scale flawlessly.",
    mainLink: "/services/software-development",
    services: [
      { name: "Product Engineering", href: "/services/software-development/product-engineering" },
      { name: "Application Modernization", href: "/services/software-development/application-modernization" },
      { name: "DevOps & Platform Engineering", href: "/services/devops-automation/platform-engineering" },
      { name: "Multi-Cloud Infrastructure", href: "/services/cloud-services" },
      { name: "QA & Test Automation", href: "/services/qa-testing/test-automation" }
    ],
    ctaHref: "/services/software-development"
  },
  {
    id: "evolve",
    title: "Evolve",
    subtitle: "Security, Operations & Continuous Transformation",
    description:
      "Enterprise-grade zero-trust security, 24/7 SRE managed operations, and continuous digital transformation that drives long-term value.",
    mainLink: "/services/managed-services",
    services: [
      { name: "24/7 Managed Cloud Services", href: "/services/managed-services/managed-cloud" },
      { name: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" },
      { name: "Zero Trust & Cybersecurity", href: "/services/cybersecurity" },
      { name: "Digital Transformation Strategy", href: "/services/digital-transformation" },
      { name: "FinOps & Cost Optimization", href: "/services/cloud-services/finops-cost-optimization" }
    ],
    ctaHref: "/services/managed-services"
  }
];

export function ServicesPillars() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-zinc-900/60">
      
      {/* Background Ambient Curved Light Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1250px] h-[400px] md:h-[550px] bg-gradient-to-r from-red-600/10 via-rose-500/15 to-red-600/10 rounded-[100%] blur-[140px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Reveal>
            <div className="relative inline-block w-full">
             
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug text-white font-sans italic max-w-4xl mx-auto">
                “Building technology with <span className="text-rose-500 not-italic font-semibold">passion, precision, and genuine care</span> for your success.”
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
                          Explore all services
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
