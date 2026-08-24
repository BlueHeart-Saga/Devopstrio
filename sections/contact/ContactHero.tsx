"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const contactPillars = [
  {
    id: "consult",
    title: "Consult",
    subtitle: "AI & Cloud Strategy Advisory",
    description: "Deep-dive technical assessment with senior cloud architects to map out your custom stack.",
    mainLink: "/services/ai-data-innovation",
    services: [
      { name: "GenAI & LLM Architecture", href: "/services/ai-data-innovation/generative-ai-solutions" },
      { name: "Cloud Migration Strategy", href: "/services/cloud-services" },
      { name: "Zero-Trust Security Assessment", href: "/services/cybersecurity" },
      { name: "DevOps & SRE Roadmap", href: "/services/devops-automation" },
      { name: "FinOps Cost Audit", href: "/services/cloud-services/finops-cost-optimization" }
    ],
    ctaHref: "/services/ai-data-innovation"
  },
  {
    id: "collaborate",
    title: "Collaborate",
    subtitle: "Agile Co-Engineering & Design",
    description: "Direct alignment alongside your core engineering team with zero sales friction.",
    mainLink: "/services/software-development",
    services: [
      { name: "Senior Cloud Architect Alignment", href: "/about" },
      { name: "Custom Product Engineering", href: "/services/software-development/product-engineering" },
      { name: "Platform Engineering Workshops", href: "/services/devops-automation/platform-engineering" },
      { name: "Data Lakehouse Engineering", href: "/services/data-engineering/data-warehousing" },
      { name: "Automated QA & Testing", href: "/services/qa-testing/test-automation" }
    ],
    ctaHref: "/services/software-development"
  },
  {
    id: "transform",
    title: "Transform",
    subtitle: "Autonomous Cloud & AI Execution",
    description: "Deploy scalable platforms, automated pipelines, and resilient 24/7 cloud ecosystems.",
    mainLink: "/services/managed-services",
    services: [
      { name: "24/7 Managed Cloud Operations", href: "/services/managed-services/managed-cloud" },
      { name: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" },
      { name: "SOC & Security Operations", href: "/services/cybersecurity/security-operations-center" },
      { name: "Autonomous AI Agent Deployment", href: "/services/ai-data-innovation/ai-agents-automation" },
      { name: "Infrastructure as Code (IaC)", href: "/services/devops-automation/infrastructure-as-code" }
    ],
    ctaHref: "/services/managed-services"
  }
];

export function ContactHero() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="relative w-full flex flex-col justify-center bg-[#030303] text-white pt-16 pb-4 lg:pt-20 lg:pb-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10 space-y-8">
        {/* Top Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.12] text-white mb-6">
                Every Platform Starts
                <br />
                <span className="text-[#E11D48] whitespace-nowrap">With a Conversation.</span>
              </h1>
            </Reveal>

            {/* Quote Block */}
            <Reveal delay={0.2}>
              <div className="border-l-4 border-rose-500 bg-zinc-950/60 px-6 py-4 rounded-r-xl max-w-2xl shadow-lg border-y border-r border-zinc-900/60">
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg font-semibold italic leading-relaxed">
                  &ldquo;We don&apos;t do discovery calls with salespeople. You speak directly with a <Link href="/about" className="text-rose-500 hover:underline font-semibold">senior cloud architect</Link> who understands your stack — on day one.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img src="/assets/herocard/contactpage.png"
                alt="Global Contact Network"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              loading="eager" />
            </Reveal>
          </div>

        </div>

        {/* 3 Pillar Cards Container (Matching ServicesOverviewPillars.tsx) */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 bg-zinc-950/30 backdrop-blur-md rounded-2xl overflow-hidden min-h-[380px] md:min-h-[440px] transition-all duration-500">
            {contactPillars.map((pillar) => {
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
                      {pillar.services.map((service, sIdx) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group/item flex items-center justify-between py-3 border-b border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 text-sm md:text-base font-semibold text-white hover:text-rose-400"
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
                        <span className="text-sm md:text-base font-semibold text-rose-500 group-hover/all:text-rose-400 transition-colors">
                          Explore capabilities
                        </span>
                        <div className="w-8 h-8 rounded-full border border-rose-500/40 bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover/all:bg-rose-600 group-hover/all:text-white group-hover/all:border-rose-600 group-hover/all:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
                          <ArrowRight className="w-4 h-4" />
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
