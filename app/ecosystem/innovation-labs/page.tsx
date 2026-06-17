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
import { Atom, Zap, Eye, Terminal, Landmark, BookOpen, Layers, Milestone } from "lucide-react";

export default function InnovationLabsPage() {
  const domain = "innovation-labs";
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
    { id: "research", label: "Research Portfolio" },
    { id: "pipeline", label: "Innovation Pipeline" },
    { id: "radar", label: "Technology Radar" },
    { id: "prototypes", label: "Prototype Gallery" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const pipelineStages = [
    { name: "Research", icon: <BookOpen size={18} />, desc: "Identifying upcoming paradigms, architectural shifts, and core security standards." },
    { name: "Prototype", icon: <Terminal size={18} />, desc: "Drafting minimal runnable scripts, IaC setups, and small code abstractions." },
    { name: "Validation", icon: <Eye size={18} />, desc: "Vulnerability analysis, performance load testing under extreme SRE criteria." },
    { name: "Pilot", icon: <Zap size={18} />, desc: "Integrating with beta cloud accounts and selected enterprise development runs." },
    { name: "Product", icon: <Milestone size={18} />, desc: "Promoting to main SaaS blueprints or general open-source libraries." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="R&D CENTERS"
        title="Innovation Labs"
        subtitle="Dedicated workspaces prototyping next-gen software systems, autonomous AI agents, and zero-trust networks."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Pipeline", href: "#pipeline" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Research Portfolio */}
      <section id="research" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              R&D FOCUS AREAS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Active Research <span className="text-rose-500">Portfolio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-bold">COGNITIVE AI</span>
              <h3 className="text-sm font-bold text-white mb-2">LLM Fine-Tuning & Prompt Safety</h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                Developing parameter-efficient techniques (PEFT) using QLoRA layers. Testing adversarial prompt firewall scripts to prevent LLM injection hazards.
              </p>
            </div>
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-bold">ZERO TRUST</span>
              <h3 className="text-sm font-bold text-white mb-2">IaC Secrets Management</h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                Automating dynamic secrets injections inside Kubernetes runtimes using HashiCorp Vault. Running dry-run validation checks on code layouts.
              </p>
            </div>
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-bold">PLATFORM SRE</span>
              <h3 className="text-sm font-bold text-white mb-2">Karpenter Autoscaling & Telemetry</h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                Constructing low-cost autoscaling setups on EKS grids. Benchmarking OpenTelemetry tracing parameters to reduce transaction lookup delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Innovation Pipeline Stage Visualizer */}
      <section id="pipeline" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              DELIVERY WORKFLOW
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              The Innovation <span className="text-rose-500">Pipeline</span>
            </h2>
            <p className="text-zinc-450 text-xs md:text-sm font-semibold">
              How we discover, model, and export production-grade architectural components to our platform portfolio.
            </p>
          </Reveal>

          {/* Interactive Pipeline Progression row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {pipelineStages.map((stage, idx) => (
              <div key={stage.name} className="relative bg-zinc-950/40 border border-white/5 hover:border-rose-500/20 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] transition-all duration-300 group">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300 mb-4">
                    {stage.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2">0{idx + 1}. {stage.name}</h4>
                  <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">{stage.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-rose-500 opacity-60">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Radar */}
      <section id="radar" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ADOPTION MATRIX
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Technology <span className="text-rose-500">Radar</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/25 border border-zinc-900 p-6 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider border-b border-zinc-900 pb-2">Adopt</h4>
              <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-semibold">
                <li className="flex items-center gap-2 text-white"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> WebAssembly (Wasm) Edge Deployments</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> OpenTelemetry Core Pipelines</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Vector Database RAG Architectures</li>
              </ul>
            </div>
            <div className="bg-zinc-950/25 border border-zinc-900 p-6 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider border-b border-zinc-900 pb-2">Trial</h4>
              <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-semibold">
                <li className="flex items-center gap-2 text-white"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Post-Quantum Crypto Certificates</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Multi-Agent Workflow Orchestrators</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Serverless GPU Computing</li>
              </ul>
            </div>
            <div className="bg-zinc-950/25 border border-zinc-900 p-6 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider border-b border-zinc-900 pb-2">Assess</h4>
              <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-semibold">
                <li className="flex items-center gap-2 text-white"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Decentralized Web Identifiers (DID)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Autonomous Agent Swarm SREs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Prototype Gallery */}
      <section id="prototypes" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              R&D SHOWCASE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Prototype <span className="text-rose-500">Gallery</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/30 border border-white/5 p-8 rounded-2xl">
              <h4 className="text-xs font-bold text-rose-500 mb-2">PROT-098 / LLM-WALL</h4>
              <h3 className="text-sm font-bold text-white mb-3">Adversarial LLM Prompt Guardrail</h3>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold mb-4">
                Python and Rust package validating input scripts before LLM compilation runs, scanning for prompt injections and malicious memory queries.
              </p>
              <span className="bg-zinc-900 text-zinc-400 text-[10px] px-2.5 py-1 rounded border border-zinc-800/80 font-mono">v0.1.2-alpha</span>
            </div>
            <div className="bg-zinc-950/30 border border-white/5 p-8 rounded-2xl">
              <h4 className="text-xs font-bold text-rose-500 mb-2">PROT-102 / GITOPS-SEC</h4>
              <h3 className="text-sm font-bold text-white mb-3">Continuous Secret Rotation Daemon</h3>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold mb-4">
                GitOps daemon running inside Kubernetes checking hash keys and injecting secret assets dynamically via AWS secrets vault.
              </p>
              <span className="bg-zinc-900 text-zinc-400 text-[10px] px-2.5 py-1 rounded border border-zinc-800/80 font-mono">v0.4.0-beta</span>
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
