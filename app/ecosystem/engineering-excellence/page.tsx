"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { Hero } from "@/components/ecosystem/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { SubDomainsGrid } from "@/sections/ecosystem/domain/SubDomainsGrid";
import { DomainMetrics } from "@/sections/ecosystem/domain/DomainMetrics";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, Shield, Heart, Cpu, Zap, Activity } from "lucide-react";

export default function EngineeringExcellencePage() {
  const domain = "engineering-excellence";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "principles", label: "Engineering Principles" },
    { id: "framework", label: "Delivery Framework" },
    { id: "devsecops", label: "DevSecOps Model" },
    { id: "sre", label: "SRE Framework" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const principlesList = [
    { name: "Code Quality", icon: <CheckCircle2 size={20} />, desc: "Strict linting rules, architectural boundaries, and mandatory peer reviews." },
    { name: "Security First", icon: <Shield size={20} />, desc: "Automated vulnerability checks, credentials rotation, and least-privilege policies." },
    { name: "High Reliability", icon: <Heart size={20} />, desc: "Redundant hosting setups, autoscaling containers, and failure-domain isolations." },
    { name: "Performance Optimization", icon: <Zap size={20} />, desc: "Edge caching, content delivery networks, optimized queries, and light bundles." },
    { name: "Continuous Automation", icon: <Cpu size={20} />, desc: "GitOps deployment runs, automated testing flows, and infrastructure blueprints." },
    { name: "Deep Observability", icon: <Activity size={20} />, desc: "OpenTelemetry tracing pipelines, central log aggregators, and system metrics dashboards." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="ENGINEERING BENCHMARKS"
        title="Engineering Excellence"
        subtitle="Rigorous coding metrics, automated unit testing frameworks, and GitOps deployments protecting production secrets."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Principles", href: "#principles" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Engineering Principles Grid */}
      <section id="principles" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUR LAWS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Engineering <span className="text-rose-500">Principles</span>
            </h2>
            <p className="text-zinc-450 text-xs md:text-sm font-semibold leading-relaxed">
              Six core quality vectors embedded into every phase of our software lifecycle.
            </p>
          </Reveal>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {principlesList.map((pr) => (
              <div key={pr.name} className="group/principle bg-zinc-950/40 border border-white/5 hover:border-rose-500/20 p-6 rounded-2xl transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover/principle:bg-rose-950/20 transition-all duration-300 mb-4">
                  {pr.icon}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{pr.name}</h4>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Delivery Framework */}
      <section id="framework" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GITOPS WORKFLOW
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Delivery <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/30 p-8 border border-zinc-900 rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Trunk-Based Development</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Developers merge small, incremental changes directly to the main trunk daily, eliminating complex merge conflicts and securing faster validation cycles.
              </p>
            </div>
            <div className="bg-zinc-950/30 p-8 border border-zinc-900 rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Automated Release Gates</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Pipelines run automated testing sweeps (unit, integration, regression, SAST, secret checks) before authorizing merge runs to main environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DevSecOps Model */}
      <section id="devsecops" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SECURE DEPLOYMENT
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              DevSecOps <span className="text-rose-500">Model</span>
            </h2>
          </Reveal>

          <div className="bg-zinc-950/25 border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3.5 mb-4">
                <Shield className="text-rose-500" size={24} />
                <h3 className="text-sm font-bold text-white">Continuous Security Auditing</h3>
              </div>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold mb-6">
                Workload vulnerability scans run continuously on compute runtimes. Outdated dependencies or configurations triggers warnings automatically.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/40 p-4 border border-zinc-900 rounded-xl text-center">
                <h4 className="text-sm font-bold text-rose-500 mb-1">95%+</h4>
                <p className="text-[10px] text-zinc-400 font-semibold">Test Suite Coverage</p>
              </div>
              <div className="bg-zinc-900/40 p-4 border border-zinc-900 rounded-xl text-center">
                <h4 className="text-sm font-bold text-rose-500 mb-1">&lt;1hr</h4>
                <p className="text-[10px] text-zinc-400 font-semibold">Critical Vulnerability Patch Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SRE Framework */}
      <section id="sre" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SERVICE RELIABILITY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              SRE <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-2">Error Budgets</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                Defining and monitoring target Service Level Objectives (SLOs) to allocate time between feature work and stabilization sweeps.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-2">Automated Incident Runbooks</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                SRE alarms execute automated response scripts (e.g. restart pod, redirect traffic) before escalations alert human responders.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-2">Post-Mortem Analysis</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                Mandatory incident post-mortems logged in centralized repositories, outlining remediation tasks to secure system stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Metrics */}
      <div id="metrics" className="border-b border-zinc-900/60">
        <DomainMetrics stats={data.stats} />
      </div>

      {/* 7. FAQ */}
      <div id="faq" className="border-b border-zinc-900/60">
        <FAQ faqs={data.faqs} />
      </div>

      {/* 8. CTA */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
