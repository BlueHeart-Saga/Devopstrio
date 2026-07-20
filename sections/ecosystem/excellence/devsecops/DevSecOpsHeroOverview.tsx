"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ShieldCheck, ArrowLeftRight, CheckCircle2, Lock, FileCode, Bot, FileCheck, Repeat } from "lucide-react";
import Link from "next/link";

export function DevSecOpsHeroOverview() {
  const philosophyCards = [
    { title: "Security from Day One", icon: ShieldCheck, desc: "Embedding security requirements into initial planning and sprint backlogs." },
    { title: "Shift Left Security", icon: ArrowLeftRight, desc: "Testing code for vulnerabilities early in developer local environments and IDEs." },
    { title: "Continuous Validation", icon: CheckCircle2, desc: "Automating security scans across every PR, commit, and build artifact." },
    { title: "Zero Trust Principles", icon: Lock, desc: "Never trust, always verify—strict identity and least-privilege access." },
    { title: "Infrastructure as Code", icon: FileCode, desc: "Scanning Terraform and Kubernetes manifests before provisioning." },
    { title: "Automation First", icon: Bot, desc: "Eliminating manual security bottlenecks with automated gates and bots." },
    { title: "Compliance Ready", icon: FileCheck, desc: "Continuous audit trails for ISO 27001, SOC 2, and regulatory standards." },
    { title: "Continuous Improvement", icon: Repeat, desc: "Ongoing vulnerability threat feeds and post-incident security hardening." }
  ];

  const sdlcTimeline = [
    "Plan",
    "Develop",
    "Code Analysis",
    "Build",
    "Security Testing",
    "Deploy",
    "Monitor",
    "Improve"
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#ef4444", "#dc2626", "#991b1b"]}
        title={
          <>
            DevSecOps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-700">
              Engineering
            </span>
          </>
        }
        subtitle="Integrating security into every phase of software development through automation, continuous validation, secure cloud engineering, and modern DevSecOps practices."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "DEVSECOPS" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Book a Security Assessment
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to Our DevSecOps Team
            <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Security Built Into Every Release
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Security is no longer a final checkpoint—it is a continuous process. Devopstrio integrates security into planning, development, testing, deployment, and operations, enabling organizations to release software faster while maintaining strong security, compliance, and operational resilience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR DEVSECOPS PHILOSOPHY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">PHILOSOPHY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Secure by Design. Automated by Default.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyCards.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-red-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECURE SOFTWARE DELIVERY LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">SECURE SDLC</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Secure Software Delivery Lifecycle
            </h2>
          </Reveal>

          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-rose-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>

            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {sdlcTimeline.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[130px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] mb-4"></div>
                  <span className="text-[10px] font-bold text-red-500 tracking-wider mb-2">PHASE 0{idx + 1}</span>
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
