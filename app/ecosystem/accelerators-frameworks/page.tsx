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
import { Folder, Play, CheckCircle, Cpu, Shield, Database, Layout, Command } from "lucide-react";

export default function AcceleratorsFrameworksPage() {
  const domain = "accelerators-frameworks";
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
    { id: "library", label: "Accelerator Library" },
    { id: "catalog", label: "Framework Catalog" },
    { id: "blueprints", label: "Blueprints" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const acceleratorAssets = [
    { name: "Cloud Infrastructure Setup", icon: <Command size={20} />, type: "Cloud Accelerator", desc: "Terraform configurations deploying secure multi-account landing zones, VPC structures, and IAM guardrails." },
    { name: "Autonomous Agent Swarm", icon: <Cpu size={20} />, type: "AI Accelerator", desc: "LangGraph and PyTorch starter templates setting up multi-agent SRE workflows and prompt safety sanitization." },
    { name: "GitOps Release Pipeline", icon: <Layout size={20} />, type: "DevOps Accelerator", desc: "ArgoCD and GitHub Actions pipeline definitions executing automated code checks, regression sweeps, and secret rotations." },
    { name: "Zero Trust Security Vault", icon: <Shield size={20} />, type: "Security Framework", desc: "Vault setup blueprints managing dynamic secrets injection, certificates generation, and access control." },
    { name: "Real-time Telemetry Analytics", icon: <Database size={20} />, type: "Data Framework", desc: "Kafka, ClickHouse, and OpenTelemetry starter templates piping application spans to unified dashboards." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="REUSABLE ASSETS"
        title="Accelerators & Frameworks"
        subtitle="Pre-engineered code blueprints, Terraform modules, and integration frameworks to jumpstart enterprise platform builds."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Library", href: "#library" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Accelerator Library */}
      <section id="library" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CATALOG sweeps
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Accelerator <span className="text-rose-500">Library</span>
            </h2>
            <p className="text-zinc-450 text-xs md:text-sm font-semibold leading-relaxed">
              Standardized engineering modules optimized for velocity, compliance, and multi-cloud portability.
            </p>
          </Reveal>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {acceleratorAssets.map((asset) => (
              <div key={asset.name} className="group bg-zinc-950/40 border border-white/5 hover:border-rose-500/20 p-6 rounded-2xl flex flex-col justify-between min-h-[200px] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                    <span className="text-[8px] bg-rose-500/10 border border-rose-500/20 text-rose-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                      {asset.type}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                    {asset.icon}
                    {asset.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                    {asset.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Framework Catalog */}
      <section id="catalog" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BOILERPLATE CATALOG
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Framework <span className="text-rose-500">Catalog</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/30 p-8 border border-zinc-900 rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Microservices Starter (Go/gRPC)</h3>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold mb-4">
                Fast boilerplate setup with mutual TLS security parameters, OpenTelemetry tracing hooks, prometheus metrics counters, and DB migrations.
              </p>
              <span className="bg-zinc-900 text-zinc-400 text-[10px] px-2.5 py-1 rounded border border-zinc-800/80 font-mono">v1.4.0</span>
            </div>
            <div className="bg-zinc-950/30 p-8 border border-zinc-900 rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Web Application Template (Next.js/Tailwind)</h3>
              <p className="text-[11px] text-zinc-455 leading-relaxed font-semibold mb-4">
                SEO-optimized React layouts pre-integrated with OAuth2 authentication, responsive navigation bars, and automated Cypress tests.
              </p>
              <span className="bg-zinc-900 text-zinc-400 text-[10px] px-2.5 py-1 rounded border border-zinc-800/80 font-mono">v2.1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Blueprint Repository */}
      <section id="blueprints" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              IAC REPOSITORIES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Blueprint <span className="text-rose-500">Repository</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl flex gap-3">
              <Folder className="text-rose-500 shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Terraform AWS Modules</h4>
                <p className="text-[10px] text-zinc-450 font-semibold">Standard VPC, EKS, and IAM policies.</p>
              </div>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl flex gap-3">
              <Folder className="text-rose-500 shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Kubernetes Helm Charts</h4>
                <p className="text-[10px] text-zinc-450 font-semibold">Deployment maps for standard SaaS configurations.</p>
              </div>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl flex gap-3">
              <Folder className="text-rose-500 shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Ansible Runbooks</h4>
                <p className="text-[10px] text-zinc-450 font-semibold">Host server patch updates and hardening sweeps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Metrics */}
      <div id="metrics" className="border-b border-zinc-900/60">
        <DomainMetrics stats={data.stats} />
      </div>

      {/* 6. FAQ */}
      <div id="faq" className="border-b border-zinc-900/60">
        <FAQ faqs={data.faqs} />
      </div>

      {/* 7. CTA */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
