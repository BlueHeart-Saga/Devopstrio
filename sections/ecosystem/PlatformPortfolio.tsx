"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Users, Code } from "lucide-react";

const products = [
  {
    name: "Humanex",
    industry: "HRTech · People Ops",
    desc: "Enterprise HR platform for talent acquisition, onboarding, performance management, and workforce analytics built for modern distributed teams.",
    users: "15,000+ Active Users",
    technology: "React, Node.js, PostgreSQL",
    status: "Scaling",
    logo: "/assets/Home-page/our-products/logo/humanex.png"
  },
  {
    name: "Homela",
    industry: "PropTech · Real Estate",
    desc: "AI-powered property management SaaS that connects landlords, tenants, and agents on a unified platform with smart lease tracking and payment automation.",
    users: "12,000+ Active Users",
    technology: "Next.js, Tailwind, Postgres",
    status: "Scaling",
    logo: "/assets/Home-page/our-products/logo/homela.png"
  },
  {
    name: "Brio",
    industry: "FinTech · Payments",
    desc: "A next-generation payment orchestration platform enabling businesses to process, route, and reconcile transactions across multiple payment gateways seamlessly.",
    users: "$45M+ Processed",
    technology: "Go, Redis, Kubernetes",
    status: "Production",
    logo: "/assets/Home-page/our-products/logo/brio.png"
  },
  {
    name: "Safesign",
    industry: "LegalTech · eSign",
    desc: "Enterprise e-signature and document lifecycle platform with advanced audit trails, multi-party workflows, and blockchain-anchored signature verification.",
    users: "2,500+ Agreements Signed",
    technology: "TypeScript, Solidity, Hyperledger",
    status: "Stable",
    logo: "/assets/Home-page/our-products/logo/safesign.png"
  },
  {
    name: "Campix",
    industry: "MarTech · Campaigns",
    desc: "Unified campaign intelligence platform that empowers marketing teams to plan, execute, and analyse omnichannel campaigns with real-time attribution.",
    users: "12M+ Impressions Tracked",
    technology: "Python, Kafka, ClickHouse",
    status: "Scaling",
    logo: "/assets/Home-page/our-products/logo/Campix.png"
  },
  {
    name: "Caresuite",
    industry: "HealthTech · Clinical",
    desc: "HIPAA-compliant telehealth and clinical workflow SaaS connecting patients, clinicians, and labs with secure video, e-prescriptions, and EHR integration.",
    users: "45 Clinics Live",
    technology: "Next.js, WebRTC, HIPAA Secure API",
    status: "Live",
    logo: "/assets/Home-page/our-products/logo/Caresuite.png"
  }
];

export function PlatformPortfolio() {
  return (
    <section id="portfolio" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PRODUCT PORTFOLIO
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Proprietary SaaS <span className="text-rose-500">Platforms</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-semibold leading-relaxed max-w-2xl">
            We build, incubate, and scale cutting-edge products across key verticals. Each platform serves as a production-grade blueprint for engineering excellence.
          </p>
        </Reveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <Reveal key={prod.name} delay={idx * 0.05} className="h-full">
              <div className="group/card flex flex-col justify-between h-full bg-zinc-950/35 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] min-h-[380px]">
                {/* Hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                    <span className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                      {prod.industry}
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {prod.status}
                    </span>
                  </div>

                  {/* Logo Header Container */}
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <div className="h-8 relative flex items-center">
                      <img
                        src={prod.logo}
                        alt={prod.name}
                        className="h-7 w-auto object-contain brightness-0 invert opacity-90 group-hover/card:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-500 group-hover/card:text-rose-400 transition-all duration-300" />
                  </div>

                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                {/* Metadata details block */}
                <div className="border-t border-zinc-900/60 pt-4 mt-auto flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-xs">
                    <Users size={14} className="text-rose-500" />
                    <span className="text-zinc-300 font-semibold">{prod.users}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs">
                    <Code size={14} className="text-rose-500" />
                    <span className="text-zinc-300 font-semibold">{prod.technology}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
