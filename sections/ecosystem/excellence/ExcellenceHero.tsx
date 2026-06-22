"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ExcellenceHero() {
  const cards = [
    {
      id: 1,
      title: "SRE & Reliability",
      category: "OPERATIONS",
      desc: "99.95% availability frameworks, chaos testing, and follow-the-sun support.",
      accent: "text-rose-500 border-rose-500/20 bg-rose-500/10",
      style: {
        transform: "rotateZ(-20deg) translateY(90px) translateX(-240px)",
        zIndex: 10
      }
    },
    {
      id: 2,
      title: "Cloud-Native Design",
      category: "INFRASTRUCTURE",
      desc: "Multi-cloud templates, serverless design patterns, and cost optimization.",
      accent: "text-amber-500 border-amber-500/20 bg-amber-500/10",
      style: {
        transform: "rotateZ(-15deg) translateY(55px) translateX(-180px)",
        zIndex: 15
      }
    },
    {
      id: 3,
      title: "DevSecOps & Security",
      category: "SECURITY",
      desc: "Shift-left vulnerability scanning, IAM policies, and compliance guardrails.",
      accent: "text-fuchsia-500 border-fuchsia-500/20 bg-fuchsia-500/10",
      style: {
        transform: "rotateZ(-10deg) translateY(30px) translateX(-120px)",
        zIndex: 20
      }
    },
    {
      id: 4,
      title: "Quality Engineering",
      category: "AUTOMATION",
      desc: "Automated regression pipelines, shadow testing, and API verification.",
      accent: "text-violet-500 border-violet-500/20 bg-violet-500/10",
      style: {
        transform: "rotateZ(-5deg) translateY(12px) translateX(-60px)",
        zIndex: 25
      }
    },
    {
      id: 5,
      title: "Platform Engineering",
      category: "DEVELOPER XP",
      desc: "Internal developer portals, golden paths, and automated bootstrapping.",
      accent: "text-emerald-500 border-emerald-500/25 bg-emerald-500/10",
      style: {
        transform: "rotateZ(0deg) translateY(5px) translateX(0px)",
        zIndex: 30
      },
      highlight: true
    },
    {
      id: 6,
      title: "Observability Stacks",
      category: "MONITORING",
      desc: "OpenTelemetry integration, distributed tracing, and anomaly detection.",
      accent: "text-sky-500 border-sky-500/20 bg-sky-500/10",
      style: {
        transform: "rotateZ(5deg) translateY(12px) translateX(60px)",
        zIndex: 25
      }
    },
    {
      id: 7,
      title: "Cloud FinOps",
      category: "FINANCIALS",
      desc: "Real-time cost dashboards, automated resource rightsizing, and savings plans.",
      accent: "text-lime-500 border-lime-500/20 bg-lime-500/10",
      style: {
        transform: "rotateZ(10deg) translateY(30px) translateX(120px)",
        zIndex: 20
      }
    },
    {
      id: 8,
      title: "Chaos Engineering",
      category: "RESILIENCY",
      desc: "Simulated failures, network latency injection, and dependency degradation tests.",
      accent: "text-orange-500 border-orange-500/20 bg-orange-500/10",
      style: {
        transform: "rotateZ(15deg) translateY(55px) translateX(180px)",
        zIndex: 15
      }
    },
    {
      id: 9,
      title: "Security & Governance",
      category: "COMPLIANCE",
      desc: "Policy-as-code pipelines, SOC2 compliance frameworks, and auditable trails.",
      accent: "text-purple-500 border-purple-500/20 bg-purple-500/10",
      style: {
        transform: "rotateZ(20deg) translateY(90px) translateX(240px)",
        zIndex: 10
      }
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between bg-black overflow-hidden pt-28 pb-12 border-b border-zinc-900/60 animate-in fade-in duration-500">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-8">

        {/* Center Main Heading with Inline Emblem */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white text-center">
            Engineering Excellence at Scale
          </h1>
        </Reveal>

        {/* Description Centered */}
        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-350 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-10">
            Building resilient, secure, and intelligent digital products through world-class engineering practices, modern architectures, and continuous innovation.
          </p>
        </Reveal>

        {/* Exploration Pill Button */}
        <Reveal delay={0.3}>
          <Link
            href="#framework"
            className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Standards
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>

        {/* Fanned pillars cards rising from the bottom edge (9 Larger Cards Spread) */}
        <div className="relative w-full max-w-[1000px] h-[340px] md:h-[380px] flex items-end justify-center select-none overflow-visible mt-24">
          <div className="flex items-end justify-center w-full relative h-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`absolute w-38 h-[220px] md:w-52 md:h-[280px] rounded-2xl p-5 bg-[#0a0a0c] border flex flex-col justify-between transition-all duration-500 hover:scale-[1.1] hover:-translate-y-8 hover:z-50 cursor-pointer ${card.highlight
                  ? "border-rose-500/30 shadow-[0_20px_40px_rgba(244,63,94,0.1)]"
                  : "border-zinc-850 hover:border-zinc-700"
                  }`}
                style={card.style}
              >
                {/* Header info */}
                <div className="text-left">
                  <div className={`inline-block px-2 py-0.5 rounded text-[8px] md:text-[9px] font-mono font-bold tracking-wider border mb-3 ${card.accent}`}>
                    {card.category}
                  </div>
                  <h3 className="text-[11px] md:text-[13px] font-black tracking-tight leading-snug text-white">
                    {card.title}
                  </h3>
                </div>

                {/* Card description */}
                <p className="text-[9px] md:text-[10px] leading-relaxed text-zinc-400 font-normal text-left">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20" />
    </section>
  );
}
