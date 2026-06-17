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
import { Shield, Cloud, Cpu, Database, Award, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

export default function PartnershipsPage() {
  const domain = "partnerships";
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
    { id: "alliance-map", label: "Alliance Map" },
    { id: "categories", label: "Partner Categories" },
    { id: "accelerators", label: "Joint Solution Accelerators" },
    { id: "matrix", label: "Certifications" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const partnersList = [
    { name: "AWS", category: "Cloud Infrastructure", tier: "Premier Tier Services Partner", desc: "Advanced cloud-native architectures, container orchestration, and serverless architectures.", logo: "/assets/Home-page/Techtools/aws-color.svg" },
    { name: "Microsoft", category: "Enterprise & Hybrid", tier: "Gold Certified Cloud Partner", desc: "Azure integration, Hybrid deployments, Active Directory IAM, and Office ecosystem support.", logo: "/assets/Home-page/Techtools/MSAzure.svg" },
    { name: "Google Cloud", category: "Data & AI", tier: "Premier Build & Integration Partner", desc: "BigQuery analytics pipelines, Kubernetes Engine management, and Vertex AI models.", logo: "/assets/Home-page/Techtools/google-color.svg" },
    { name: "Oracle", category: "Database & ERP", tier: "Enterprise Partner", desc: "High-performance database clustering, cloud migration, and ERP orchestration systems.", logo: "/assets/Home-page/Techtools/Oracle.svg" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="ALLIANCES & CHANNELS"
        title="Strategic Partnerships"
        subtitle="Co-engineering value with global cloud leaders, software vendors, and niche technology innovators."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Partners", href: "#alliance-map" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Interactive Alliance Ecosystem Map */}
      <section id="alliance-map" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CO-ENGINEERING GRAPH
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Alliance <span className="text-rose-500">Ecosystem Map</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold leading-relaxed">
              We connect core enterprise operations to multi-cloud networks. Below is our co-engineered node mapping linking directly to central operations.
            </p>
          </Reveal>

          {/* Centralized Node Graph Layout */}
          <div className="bg-zinc-950/20 border border-white/5 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              {partnersList.map((partner) => (
                <div key={partner.name} className="flex items-center gap-4 bg-zinc-900/40 p-4 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-800">
                    <img src={partner.logo} alt={partner.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {partner.name}
                      <span className="text-[8px] bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded-full">{partner.category}</span>
                    </h4>
                    <p className="text-[10px] text-zinc-400 font-semibold mt-1">{partner.tier}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center text-center justify-center p-8 bg-zinc-900/20 border border-zinc-900 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-rose-950/25 border border-rose-500/30 flex items-center justify-center text-rose-500 mb-6 drop-shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                <span className="text-xs font-bold font-mono tracking-widest">DEVOPSTRIO</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">Unified Enterprise Core</h4>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold">
                Consolidating pipelines, identity, orchestration, and intelligence layers across hybrid infrastructure boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strategic Partner Categories */}
      <section id="categories" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PARTNERSHIP DOMAINS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Strategic Partner <span className="text-rose-500">Categories</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-zinc-950/40 border border-white/5 p-6 rounded-2xl">
              <Cloud className="text-rose-500 mb-4" size={24} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Cloud Providers</h4>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Hyper-scale architecture models spanning AWS, Microsoft Azure, and GCP hosting environments.
              </p>
            </div>
            <div className="bg-zinc-950/40 border border-white/5 p-6 rounded-2xl">
              <Cpu className="text-rose-500 mb-4" size={24} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">AI & LLM Partners</h4>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Autonomous processing and fine-tuning platforms integrated directly with OpenAI, Cohere, and Anthropic.
              </p>
            </div>
            <div className="bg-zinc-950/40 border border-white/5 p-6 rounded-2xl">
              <Shield className="text-rose-500 mb-4" size={24} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Cybersecurity</h4>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Vulnerability scanning, Zero-Trust credentials verification, and secret rotation platforms.
              </p>
            </div>
            <div className="bg-zinc-950/40 border border-white/5 p-6 rounded-2xl">
              <Database className="text-rose-500 mb-4" size={24} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Data & Analytics</h4>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Enterprise real-time databases, telemetry setups, and streaming clusters like Kafka, Snowflake, and Postgres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Joint Solution Accelerators */}
      <section id="accelerators" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CO-DESIGNED BLUEPRINTS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Joint Solution <span className="text-rose-500">Accelerators</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl hover:border-rose-500/20 transition-all duration-300">
              <h3 className="text-sm font-bold text-white mb-2">Devopstrio + AWS Control Tower Automation</h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold mb-6">
                Automated multi-account landing zone builder deploying secure guardrails, IAM boundaries, and network topologies automatically.
              </p>
              <div className="flex gap-2.5">
                <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] px-2.5 py-1 rounded-md font-mono">AWS Organizations</span>
                <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] px-2.5 py-1 rounded-md font-mono">Terraform</span>
              </div>
            </div>
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl hover:border-rose-500/20 transition-all duration-300">
              <h3 className="text-sm font-bold text-white mb-2">Devopstrio + Azure Kubernetes Secure Mesh</h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold mb-6">
                Zero-trust service mesh integrations securing inter-container communication, microservices certificate rotations, and SRE logging.
              </p>
              <div className="flex gap-2.5">
                <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] px-2.5 py-1 rounded-md font-mono">AKS</span>
                <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] px-2.5 py-1 rounded-md font-mono">Istio Mesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certification Matrix */}
      <section id="matrix" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPERTISE VERIFICATION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Ecosystem <span className="text-rose-500">Certification Matrix</span>
            </h2>
          </Reveal>

          <div className="bg-zinc-950/35 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
            <div className="grid grid-cols-3 border-b border-zinc-900/80 bg-zinc-900/25 p-4 text-xs font-bold text-zinc-300 uppercase tracking-wider">
              <div>Certification Domain</div>
              <div>Certified Engineers</div>
              <div>Current Level</div>
            </div>
            <div className="divide-y divide-zinc-900/60">
              <div className="grid grid-cols-3 p-4 text-xs">
                <div className="font-bold text-white flex items-center gap-2"><Award size={14} className="text-rose-500" /> AWS Solutions Architect Professional</div>
                <div className="text-zinc-400 font-semibold">120+ Engineers</div>
                <div className="text-rose-400 font-bold">AWS Partner Network Standard</div>
              </div>
              <div className="grid grid-cols-3 p-4 text-xs">
                <div className="font-bold text-white flex items-center gap-2"><Award size={14} className="text-rose-500" /> Azure Solutions Architect Expert</div>
                <div className="text-zinc-400 font-semibold">95+ Engineers</div>
                <div className="text-rose-400 font-bold">Gold Cloud Platform Competency</div>
              </div>
              <div className="grid grid-cols-3 p-4 text-xs">
                <div className="font-bold text-white flex items-center gap-2"><Award size={14} className="text-rose-500" /> Google Cloud Professional Architect</div>
                <div className="text-zinc-400 font-semibold">65+ Engineers</div>
                <div className="text-rose-400 font-bold">Premier Partner Competency</div>
              </div>
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
