"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ShieldCheck, Bot, BarChart3, Repeat, ShieldAlert, Eye, Activity, Heart } from "lucide-react";
import Link from "next/link";

export function SREHeroOverview() {
  const reliabilityPrinciples = [
    { title: "Reliability by Design", icon: ShieldCheck, desc: "Building fault tolerance, redundancy, and graceful degradation into core services." },
    { title: "Automation First", icon: Bot, desc: "Eliminating operational toil through self-healing scripts and auto-remediation." },
    { title: "Measure Everything", icon: BarChart3, desc: "SLIs, SLOs, and Error Budgets driving data-backed deployment decisions." },
    { title: "Continuous Improvement", icon: Repeat, desc: "Blameless post-mortems turning outages into actionable system hardening." },
    { title: "Resilience Engineering", icon: ShieldAlert, desc: "Chaos engineering and game days to discover system failure modes early." },
    { title: "Observability Everywhere", icon: Eye, desc: "Full-stack metrics, logs, and distributed traces for instant RCA." },
    { title: "Proactive Operations", icon: Activity, desc: "Predictive AI alerting catching anomalies before users experience degradation." },
    { title: "Customer Experience Focus", icon: Heart, desc: "Aligning reliability targets with actual end-user experience SLAs." }
  ];

  const sreLifecycle = [
    "Design",
    "Deploy",
    "Observe",
    "Detect",
    "Respond",
    "Recover",
    "Optimize",
    "Improve"
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#10b981", "#059669", "#06b6d4"]}
        title={
          <>
            Site Reliability <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Ensuring mission-critical enterprise platforms remain available, performant, observable, and resilient at 24×7 scale through automated operations and chaos engineering."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "SITE RELIABILITY ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore SRE Playbook
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to an SRE Expert
            <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. SRE OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              How We Ensure Systems Remain Available 24×7
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Site Reliability Engineering (SRE) applies software engineering practices to infrastructure and operations problems. At Devopstrio, we build resilient production systems with automated observability, strict error budget policies, proactive incident response, and performance engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR RELIABILITY PHILOSOPHY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PHILOSOPHY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Reliability Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reliabilityPrinciples.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. RELIABILITY ENGINEERING LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Reliability Engineering Lifecycle
            </h2>
          </Reveal>

          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-600 via-rose-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>

            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {sreLifecycle.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[130px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)] mb-4"></div>
                  <span className="text-[10px] font-bold text-rose-500 tracking-wider mb-2">PHASE 0{idx + 1}</span>
                  <span className="text-xs md:text-sm font-semibold text-zinc-300 text-center">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
