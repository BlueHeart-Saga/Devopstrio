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
import { Database, Shield, Layers, HardDrive, Terminal, GitFork, Cpu, Activity } from "lucide-react";

export default function TechnologyStackPage() {
  const domain = "technology-stack";
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
    { id: "layers", label: "Technology Layers" },
    { id: "standards", label: "Architecture Standards" },
    { id: "cloud-sec", label: "Cloud & Security" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const techLayers = [
    { name: "AI & Cognitive Layer", icon: <Cpu size={18} />, tools: "OpenAI API, Vertex AI, PyTorch Fine-tuning", desc: "Parameter-efficient tuning (LoRA), prompt safety firewalls, and vector search routing." },
    { name: "Application Layer", icon: <Terminal size={18} />, tools: "Next.js, Go (Golang), Node.js, Rust", desc: "Type-safe asynchronous APIs, microservices, serverless runners, and globally distributed frontend edge code." },
    { name: "Data Layer", icon: <Database size={18} />, tools: "PostgreSQL, Redis Semantic, ClickHouse, Kafka", desc: "Distributed SQL clustering, in-memory caching queues, analytics warehousing, and event bus piping." },
    { name: "Platform Layer", icon: <Layers size={18} />, tools: "Kubernetes, Istio Service Mesh, HashiCorp Vault", desc: "Container orchestration, automated mutual TLS, identity propagation, and dynamic vault injection." },
    { name: "Infrastructure Layer", icon: <HardDrive size={18} />, tools: "AWS, Azure, GCP, Terraform IaC", desc: "Declarative multi-cloud setups, secure VPC networks, autoscaling compute instances, and storage buckets." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="ENGINEERING FOUNDATION"
        title="Technology Stack"
        subtitle="Standardized stack configurations engineered for resilience, portability, and rapid iteration."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Layers", href: "#layers" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Technology Layers Stacking Diagram */}
      <section id="layers" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              STACK LAYERING
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Technology <span className="text-rose-500">Layers</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed">
              Standardized stack segmentation dividing infrastructure networks from cognitive intelligence services.
            </p>
          </Reveal>

          {/* Stacking Columns */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {techLayers.map((layer, idx) => (
              <div key={layer.name} className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-zinc-950/45 border border-white/5 hover:border-rose-500/20 rounded-2xl transition-all duration-300 gap-4">
                <div className="flex items-center gap-4 w-full md:w-1/3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{layer.name}</h4>
                    <span className="text-[9px] text-zinc-500 font-semibold">{layer.tools}</span>
                  </div>
                </div>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed w-full md:w-2/3 md:pl-6">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Architecture Standards */}
      <section id="standards" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENGINEERING LAWS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Architecture <span className="text-rose-500">Standards</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/30 p-8 rounded-3xl border border-zinc-900">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Zero-Trust Authorization</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Tokens, service certificates, and database connections are validated for each transaction. Access limits are audited automatically.
              </p>
            </div>
            <div className="bg-zinc-950/30 p-8 rounded-3xl border border-zinc-900">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Declarative Infrastructure</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Manual configuration edits in cloud dashboards are blocked. Infrastructure modifications run via GitOps verification reviews.
              </p>
            </div>
            <div className="bg-zinc-950/30 p-8 rounded-3xl border border-zinc-900">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Observability Instrumentation</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Application microservices are instrumented with OpenTelemetry hooks, publishing logs, metrics, and execution spans to unified dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cloud & Security Ecosystem */}
      <section id="cloud-sec" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              COMPLIANCE & GUARDRAILS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Cloud & Security <span className="text-rose-500">Ecosystem</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/40 p-8 border border-white/5 rounded-2xl">
              <Shield className="text-rose-500 mb-4" size={24} />
              <h3 className="text-sm font-bold text-white mb-2">Security Tool Pipeline</h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-4">
                Automating vulnerabilities scanning (SAST), secrets detection (TruffleHog), and container image dependencies scanning in all repositories.
              </p>
            </div>
            <div className="bg-zinc-950/40 p-8 border border-white/5 rounded-2xl">
              <GitFork className="text-rose-500 mb-4" size={24} />
              <h3 className="text-sm font-bold text-white mb-2">Multi-Cloud Orchestration</h3>
              <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-4">
                Deploying workloads dynamically across AWS EKS grids, Azure AKS clusters, and Google GKE platforms using federated control planes.
              </p>
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
