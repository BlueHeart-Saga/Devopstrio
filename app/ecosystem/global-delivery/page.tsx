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
import { MapPin, Sun, Globe, Shield, RefreshCw, Star } from "lucide-react";

export default function GlobalDeliveryPage() {
  const domain = "global-delivery";
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
    { id: "presence", label: "Global Presence" },
    { id: "centers", label: "Delivery Centers" },
    { id: "operating-model", label: "Follow-The-Sun" },
    { id: "governance", label: "Delivery Governance" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  const deliveryCenters = [
    { city: "London, UK", timezone: "GMT / BST", focus: "Enterprise Consulting & Client Onboarding" },
    { city: "Frankfurt, Germany", timezone: "CET / CEST", focus: "EU Security Compliance & Platform Engineering" },
    { city: "Bangalore, India", timezone: "IST", focus: "Main Infrastructure Operations & Support Center" },
    { city: "Singapore", timezone: "SGT", focus: "APAC Cloud Engineering & Product Delivery" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="GLOBAL OPERATIONS"
        title="Global Delivery Network"
        subtitle="Highly resilient, multi-region teams delivering round-the-clock software engineering, SRE support, and architecture design."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "Explore Centers", href: "#presence" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Global Presence Map & Progression */}
      <section id="presence" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OPERATIONS RANGE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Global Presence <span className="text-rose-500">Distribution</span>
            </h2>
            <p className="text-zinc-450 text-xs md:text-sm font-semibold leading-relaxed">
              How our teams coordinate across geographical borders to deliver high-quality code.
            </p>
          </Reveal>

          {/* Simple step card representation of global flow: UK -> Europe -> India -> APAC */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl">
              <Globe className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-1">UK Centers</h4>
              <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">London Client Operations</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl">
              <Globe className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-1">Europe Centers</h4>
              <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">Frankfurt DevSecOps Hub</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl">
              <Globe className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-1">India Centers</h4>
              <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">Bangalore Scale Center</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl">
              <Globe className="text-rose-500 mx-auto mb-3" size={24} />
              <h4 className="text-xs font-bold text-white mb-1">APAC Centers</h4>
              <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">Singapore Delivery Node</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Delivery Centers Details */}
      <section id="centers" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              REGIONAL HQ DETAILS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Ecosystem <span className="text-rose-500">Delivery Centers</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryCenters.map((center) => (
              <div key={center.city} className="bg-zinc-950/30 border border-zinc-900 p-6 rounded-2xl flex gap-4 hover:border-rose-500/20 transition-all duration-300">
                <MapPin className="text-rose-500 shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    {center.city}
                    <span className="text-[8px] bg-zinc-900 border border-zinc-800 text-zinc-450 px-2 py-0.5 rounded-full">{center.timezone}</span>
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-semibold mt-2 leading-relaxed">{center.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Operating Model: Follow-The-Sun Support */}
      <section id="operating-model" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SUPPORT CONTINUITY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Follow-The-Sun <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="bg-zinc-950/25 border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3.5 mb-4">
                <Sun className="text-rose-500" size={24} />
                <h3 className="text-sm font-bold text-white">24×7 Operations Control</h3>
              </div>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold mb-6">
                Active alerts are routed dynamically between teams in different hemispheres. As one shift ends, pending alerts transfer to the next zone, securing ongoing development.
              </p>
              <div className="flex gap-2.5">
                <span className="bg-zinc-900 text-zinc-450 border border-zinc-850 text-[10px] px-2.5 py-1 rounded-md font-mono">15-min Critical Incident SLA</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/40 p-4 border border-zinc-900 rounded-xl">
                <h4 className="text-xs font-bold text-white mb-1">Incident Shield</h4>
                <p className="text-[10px] text-zinc-450 font-semibold">Continuous firewall monitoring.</p>
              </div>
              <div className="bg-zinc-900/40 p-4 border border-zinc-900 rounded-xl">
                <h4 className="text-xs font-bold text-white mb-1">GitOps Audits</h4>
                <p className="text-[10px] text-zinc-450 font-semibold">Automated IaC verification check.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Delivery Governance */}
      <section id="governance" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              QUALITY CONTROL
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Delivery <span className="text-rose-500">Governance</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <Shield className="text-rose-500 mb-3" size={20} />
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">Architecture Review Board</h4>
              <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                Workload designs undergo review before production releases, ensuring security boundaries align with controls.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <RefreshCw className="text-rose-500 mb-3" size={20} />
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">SRE Review Cycles</h4>
              <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                Bi-weekly post-mortem analyses of incident metrics, latency, and resource footprint reports are logged.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <Star className="text-rose-500 mb-3" size={20} />
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">Metrics-Driven SLA</h4>
              <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                Continuous logging of deployment speed, bug metrics, and system uptime targets under strict delivery agreements.
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
