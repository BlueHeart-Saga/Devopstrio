"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  ShieldAlert,
  Network,
  Server,
  HelpCircle,
  FileCheck,
  ShieldCheck,
  Award,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function EuropeHubPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const hostingSites = [
    { city: "Frankfurt", label: "Core European Hub", desc: "Enterprise cloud resources and primary database clusters." },
    { city: "Dublin", label: "Western Region Hub", desc: "Low-latency backup replicas and edge compute routing nodes." },
    { city: "Paris", label: "Southern Operations", desc: "Local application hosting and sovereign workload partitions." },
    { city: "Stockholm", label: "Nordic Gateways", desc: "Dedicated secure caching proxies and edge network endpoints." }
  ];

  const compliancePillars = [
    { title: "GDPR Data Audits", desc: "Documenting data lineage paths, consent workflows, and active records removal playbooks." },
    { title: "Sovereign Cloud Zones", desc: "Constructing landing zone architectures locked to European geographic boundaries." },
    { title: "PII Separation", desc: "Encrypting and isolating customer personally identifiable information at the database layer." }
  ];

  const hostingServices = [
    "Low-latency edge gateways routing regional traffic to local nodes",
    "Local database storage replication maintaining failovers within EU borders",
    "Regional DNS and content caching accelerating site response speeds"
  ];

  const consultingServices = [
    { title: "IT Compliance Audits", desc: "Scoring configurations against EU cybersecurity and privacy frameworks." },
    { title: "Hybrid Cloud Design", desc: "Structuring secure bridges between local datacenters and public cloud accounts." },
    { title: "Latency Optimization", desc: "Routing optimization reducing transit times for European end-users." }
  ];

  const zeroTrustNetwork = [
    "Cilium container networking enforcing secure pod communication policies",
    "Mutual TLS validation verifying worker identity across all microservice routes",
    "Sovereign service mesh setups segregating transactional and compliance traffic"
  ];

  const metrics = [
    { value: "100%", label: "EU Data Audits Passed" },
    { value: "<20ms", label: "Average User Latency" },
    { value: "0", label: "Compliance Violations Logged" }
  ];

  const faqs = [
    { q: "Where is European customer data stored?", a: "We build cloud accounts that store all database records inside EU regions like Frankfurt and Dublin." },
    { q: "Do you support European cloud providers?", a: "Yes, we write Terraform configs for sovereign providers like OVHcloud, Scaleway, and Deutsche Telekom." },
    { q: "How do you assist with GDPR data requests?", a: "We configure automated data deletion scripts and construct queries to export complete user profiles." },
    { q: "Are your European engineers based inside the EU?", a: "Yes, our regional hubs are staffed by EU-resident engineers to satisfy data access regulations." },
    { q: "Do you run penetration tests on European setups?", a: "Yes, we run annual third-party pen tests and continuous automated compliance audits." },
    { q: "What is your latency guarantee for EU end-users?", a: "By leveraging localized CDNs and regional clusters, we maintain connection latency below 50ms." },
    { q: "How do you enforce zero-trust network policies?", a: "We run Cilium eBPF network layers that validate and log every microservice request." },
    { q: "Can we mix public cloud with local on-premise hardware?", a: "Yes, we design hybrid architectures using secure IPSec VPN tunnels and HashiCorp Vault key storage." },
    { q: "What certifications do your EU hubs possess?", a: "Our facilities and processes align with ISO 27001, SOC 2, and local GDPR frameworks." },
    { q: "How do we begin a compliance assessment?", a: "Click the 'Consult Europe Compliance Team' button to set up an advisory call with our experts." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="SOVEREIGN CLOUD OPERATIONS"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Europe Hub
            </span>
          </>
        }
        subtitle="GDPR Data Privacy Audits, Regional Cloud Hosting & European Compliance. Maintain data sovereignty, satisfy GDPR data compliance audits, and deploy to European cloud host locations."
        dither={true}
        ditherWaveColor={[0.1, 0.4, 0.9]}
        ditherColorNum={4}
        ditherPixelSize={2}
        stats={metrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "EUROPE HUB" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Consult Europe Compliance Team
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>

      {/* 2. EUROPEAN HOSTING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INFRASTRUCTURE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">European Hosting</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingSites.map((site, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                <div>
                  <span className="text-[9px] font-mono text-rose-500 uppercase font-bold tracking-wider mb-2 block">{site.label}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{site.city}</h4>
                </div>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{site.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DATA COMPLIANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">REGULATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Data Compliance</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliancePillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGIONAL HOSTING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">LOCALIZATION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Regional Hosting</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Optimized endpoints lower ping counts and guarantee that cloud storage stays local.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {hostingServices.map((service, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTING SERVICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ADVISORY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Consulting Services</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultingServices.map((c, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{c.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ZERO-TRUST NETWORKING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {zeroTrustNetwork.map((net, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{net}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SEGREGATION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Zero-Trust Networking</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We secure connection pathways, preventing unauthorized cross-border traffic flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPLIANCE METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPLIANCE STATS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Compliance Metrics</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about our Europe Hub operations. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Lock Down Your EU Workloads</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our compliance team to design sovereign cloud platforms inside Europe.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult Europe Compliance Team
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
