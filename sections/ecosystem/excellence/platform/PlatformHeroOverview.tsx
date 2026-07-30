"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Heart, Bot, Cloud, BarChart3, Repeat } from "lucide-react";
import Link from "next/link";

export function PlatformHeroOverview() {
  const visionPrinciples = [
    { title: "Developer Self-Service", icon: Cpu, desc: "Empowering devs to spin up infrastructure and services on demand." },
    { title: "Standardized Foundations", icon: Layers, desc: "Golden paths that enforce architecture and security best practices." },
    { title: "Automated Governance", icon: ShieldCheck, desc: "Policy-as-code and automated compliance gates across pipelines." },
    { title: "Developer Experience (DevEx)", icon: Heart, desc: "Reducing cognitive load to maximize developer flow state." },
    { title: "Platform as a Product", icon: Bot, desc: "Treating the internal platform with dedicated product ownership." },
    { title: "Cloud Native Scale", icon: Cloud, desc: "Building resilient multi-cloud foundations for microservices." },
    { title: "Observability Built-In", icon: BarChart3, desc: "Deep telemetry and tracing provisioned automatically." },
    { title: "Continuous Evolution", icon: Repeat, desc: "Iteratively refining platform services based on developer telemetry." }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#38bdf8", "#0284c7", "#6366f1"]}
        title={
          <>
            Platform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Building internal developer platforms (IDP), cloud foundations, and automated self-service infrastructure to accelerate software delivery and elevate developer experience."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "PLATFORM ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Platform Engineering
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Build Your IDP
            <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Empowering Developers to Build Faster and Safer
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Platform Engineering creates the underlying infrastructure, automated toolchains, and self-service capabilities that allow product development teams to deliver value rapidly without friction. We design Internal Developer Platforms (IDPs) that standardise delivery while enabling autonomy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR PLATFORM VISION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">VISION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Our Platform Vision</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPrinciples.map((p, idx) => {
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
    </>
  );
}
