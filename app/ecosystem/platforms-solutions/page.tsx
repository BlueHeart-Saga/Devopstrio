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
import { ArrowUpRight, Users, Code, Activity, Shield, Layers, HelpCircle, GitFork } from "lucide-react";

export default function PlatformsSolutionsPage() {
  const domain = "platforms-solutions";
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
    { id: "portfolio", label: "Product Portfolio" },
    { id: "diagram", label: "Ecosystem Interop" },
    { id: "architecture", label: "Platform Architecture" },
    { id: "industries", label: "Industry Solutions" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const productsList = [
    { name: "Humanex", industry: "HRTech · People Ops", desc: "Enterprise HR platform for talent acquisition, onboarding, and workforce analytics.", users: "15,000+ Active Users", tech: "React, Node.js, PostgreSQL", logo: "/assets/Home-page/our-products/logo/humanex.png" },
    { name: "Homela", industry: "PropTech · Real Estate", desc: "AI-powered property management SaaS connecting landlords, tenants, and agents on a unified platform.", users: "12,000+ Active Users", tech: "Next.js, Tailwind, Postgres", logo: "/assets/Home-page/our-products/logo/homela.png" },
    { name: "Brio", industry: "FinTech · Payments", desc: "Next-gen payment orchestration enabling transactions routing across multiple gateways.", users: "$45M+ Processed", tech: "Go, Redis, Kubernetes", logo: "/assets/Home-page/our-products/logo/brio.png" },
    { name: "Safesign", industry: "LegalTech · eSign", desc: "Enterprise e-signature platform with advanced blockchain-anchored audit trails.", users: "2,500+ Agreements Signed", tech: "TypeScript, Solidity", logo: "/assets/Home-page/our-products/logo/safesign.png" },
    { name: "Campix", industry: "MarTech · Campaigns", desc: "Unified campaign intelligence tracking omnichannel campaigns with real-time attribution.", users: "12M+ Impressions", tech: "Python, Kafka, ClickHouse", logo: "/assets/Home-page/our-products/logo/Campix.png" },
    { name: "Caresuite", industry: "HealthTech · Clinical", desc: "HIPAA-compliant telehealth workflow SaaS with secure WebRTC video and EHR integration.", users: "45 Clinics Live", tech: "Next.js, WebRTC, Secure API", logo: "/assets/Home-page/our-products/logo/Caresuite.png" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="PROPRIETARY PRODUCTS"
        title="Platforms & Solutions"
        subtitle="Blueprints for modern software, serving as building blocks to accelerate digital transformation."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Portfolio", href: "#portfolio" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Platform Portfolio */}
      <section id="portfolio" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SaaS PRODUCTS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Platform <span className="text-rose-500">Portfolio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsList.map((prod) => (
              <div key={prod.name} className="group/card flex flex-col justify-between h-full bg-zinc-950/35 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.37)] min-h-[340px]">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full">
                      {prod.industry}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <div className="h-8 relative flex items-center">
                      <img
                        src={prod.logo}
                        alt={prod.name}
                        className="h-7 w-auto object-contain brightness-0 invert opacity-95 group-hover/card:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>
                <div className="border-t border-zinc-900/60 pt-4 mt-auto flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-xs">
                    <Users size={14} className="text-rose-500" />
                    <span className="text-zinc-300 font-semibold">{prod.users}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs">
                    <Code size={14} className="text-rose-500" />
                    <span className="text-zinc-300 font-semibold">{prod.tech}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Ecosystem Diagram */}
      <section id="diagram" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              INTEROPERABILITY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Ecosystem <span className="text-rose-500">Interoperability</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed">
              How our products exchange data, identities, and services through a unified API gateway.
            </p>
          </Reveal>

          {/* Simple Grid Interoperability Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-zinc-950/40 p-6 border border-zinc-900 rounded-2xl text-center">
              <GitFork className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-2">API Gateway Gateway Layer</h4>
              <p className="text-[10px] text-zinc-450 leading-relaxed font-semibold">
                Universal proxy routing requests, authenticating users, and rate-limiting endpoints.
              </p>
            </div>
            <div className="bg-zinc-950/40 p-6 border border-zinc-900 rounded-2xl text-center">
              <Layers className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-2">Identity Layer (OAuth2)</h4>
              <p className="text-[10px] text-zinc-450 leading-relaxed font-semibold">
                Single Sign-On (SSO) securely sharing credentials and permissions across all SaaS platforms.
              </p>
            </div>
            <div className="bg-zinc-950/40 p-6 border border-zinc-900 rounded-2xl text-center">
              <Activity className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-2">Event Bus (Kafka)</h4>
              <p className="text-[10px] text-zinc-450 leading-relaxed font-semibold">
                Asynchronous event dispatcher syncing updates (e.g. transaction complete &rarr; update ledger &rarr; send email).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Platform Architecture */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENGINEERING MATRIX
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Platform <span className="text-rose-500">Architecture</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-2">Multi-Tenant Isolation</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                Tenant data isolated at the db layer using schema-based or database-per-tenant isolation models matching enterprise compliance.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-2">Global Edge Delivery</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                Front-end pages hosted on globally distributed edge networks, reducing load latency to under 100ms globally.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <h4 className="text-xs font-bold text-white mb-2">Self-Healing Infrastructure</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                Kubernetes orchestrations monitor pod health parameters, automatically restarting or scaling pods during load spikes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industry Solutions */}
      <section id="industries" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              VERTICAL SPECIFICS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Industry <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl">
              <h3 className="text-sm font-bold text-white mb-2">FinTech & Payment Systems</h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold">
                Fully compliant orchestration for transactional ledgers, PCI-DSS compliance frameworks, and real-time fraud checking pipelines.
              </p>
            </div>
            <div className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-3xl">
              <h3 className="text-sm font-bold text-white mb-2">Healthcare & Life Sciences</h3>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold">
                HIPAA-compliant hosting configurations, TLS encrypt-at-rest profiles, and HL7/FHIR medical data integrations.
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
