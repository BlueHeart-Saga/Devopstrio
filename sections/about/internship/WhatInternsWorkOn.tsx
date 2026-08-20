"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import Link from "next/link";

interface Product {
  name: string;
  category: string;
  desc: string;
  features?: string[];
  tags: string[];
  image: string;
  link: string;
  cta?: string;
}

const products: Product[] = [
  {
    name: "Homela",
    category: "PropTech · Real Estate",
    desc: "AI-powered property management SaaS connecting landlords, tenants, and agents on a unified platform with smart lease tracking and payment automation.",
    features: ["Lease Tracking", "Payment Flows", "Tenant Portals"],
    tags: ["AI-Powered", "Multi-tenant", "Real Estate"],
    image: "/assets/Home-page/our-products/homela.png",
    link: "https://homela.devopstrio.co.uk/"
  },
  {
    name: "Humanex",
    category: "HRTech · People Ops",
    desc: "Enterprise HR platform for talent acquisition, onboarding, performance telemetry, and automated candidate score analytics for distributed teams.",
    features: ["Talent Scoring", "Telemetry", "Onboarding"],
    tags: ["HR Platform", "Workforce", "Analytics"],
    image: "/assets/Home-page/our-products/humanex.png",
    link: "https://humanex.devopstrio.co.uk/"
  },
  {
    name: "Brio",
    category: "FinTech · Payments",
    desc: "Next-generation payment orchestration platform and telemetry dashboard visualizing active multi-cloud resource allocations and transaction routing.",
    features: ["Multi-Gateway", "WebSockets", "Telemetry"],
    tags: ["Payments", "FinTech", "Routing"],
    image: "/assets/Home-page/our-products/brio.png",
    link: "https://brio.devopstrio.co.uk/"
  },
  {
    name: "Prestivo",
    category: "EdTech · Learning",
    desc: "Adaptive learning management and ERP platform with modular full-stack components for financial dashboards, inventory, and automated audit runs.",
    features: ["AI LMS", "Financial Dashboards", "Auditing"],
    tags: ["EdTech", "AI Learning", "ERP"],
    image: "/assets/Home-page/our-products/prestivo.png",
    link: "https://prestivo.devopstrio.co.uk/"
  },
  {
    name: "Campix",
    category: "MarTech · Campaigns",
    desc: "Unified media transformation pipelines and campaign intelligence platform with global CDN caching rules, optimization engines, and asset analytics.",
    features: ["CDN Caching", "Asset Pipelines", "Analytics"],
    tags: ["MarTech", "Analytics", "Omnichannel"],
    image: "/assets/Home-page/our-products/campix.png",
    link: "https://campix.devopstrio.co.uk/"
  },
  {
    name: "CareSuite",
    category: "HealthTech · Clinical",
    desc: "HIPAA-compliant telehealth SaaS connecting patients, clinicians, and labs with secure WebRTC video, e-prescriptions, and encrypted EHR sync.",
    features: ["HIPAA Compliant", "WebRTC Video", "EHR Sync"],
    tags: ["HealthTech", "Telehealth", "Clinical"],
    image: "/assets/Home-page/our-products/caresuite.png",
    link: "https://caresuite.devopstrio.co.uk/"
  },
  {
    name: "SafeSign",
    category: "LegalTech · eSign",
    desc: "Enterprise e-signature and document lifecycle security platform with zero-trust validation, multi-party workflows, and verifiable audit trails.",
    features: ["Zero-Trust", "Multi-party Sign", "Audit Trails"],
    tags: ["LegalTech", "eSignature", "Security"],
    image: "/assets/Home-page/our-products/safesign.png",
    link: "https://safesign.devopstrio.co.uk/"
  },
  {
    name: "Justivon",
    category: "LegalTech · Case Mgmt",
    desc: "End-to-end legal case management platform for law firms and corporate legal teams — supporting litigation workflows, e-discovery, and billing engines.",
    features: ["Case Discovery", "Court Filings", "Billing Engine"],
    tags: ["LegalTech", "Case Mgmt", "Azure"],
    image: "/assets/Home-page/our-products/justivon.png",
    link: "https://justivon-d9fbcpgzf0ancchq.southindia-01.azurewebsites.net/"
  }
];

const tasks = [
  { title: "Build React Components", desc: <>Write modern, fully-accessible TSX layouts with Tailwind CSS, supporting responsive rules for our <Link href="/services/software-development" className="text-rose-500 hover:underline font-semibold">software development</Link> products.</> },
  { title: "Create Scalable APIs", desc: "Design REST & gRPC endpoint paths using Node.js and FastAPI, supporting authentication layers and caching." },
  { title: "Deploy Production Cloud Apps", desc: "Configure multi-account cloud landing platforms, container networks, and CDN routing plans." },
  { title: "Implement Automated CI/CD", desc: <>Build automated testing scripts and deployment pipelines using GitHub Actions and ArgoCD under our <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-semibold">DevOps automation</Link> practice.</> },
  { title: "Manage Cloud Infrastructure", desc: <>Write reusable Infrastructure-as-Code setups in Terraform targeting AWS, Azure and GCP under our <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-semibold">cloud services</Link> model.</> },
  { title: "Develop AI & Data Pipelines", desc: <>Fine-tune LLM systems, build semantic cache databases, and create stateful autonomous agents for <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-semibold">AI & data innovation</Link>.</> }
];

function categoryLabel(cat: string) {
  return cat.split('·')[0].trim();
}

export const WhatInternsWorkOn = () => {
  const handleScrollToForm = () => {
    const form = document.getElementById("apply-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="what-interns-work-on" className="w-full pt-20 md:pt-28 pb-20 md:pb-28 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 xl:px-8 relative z-10">
        
        {/* Top 2-Column Hero: Left Text Content & Right 3D CardSwap Deck (Matching OurProducts.tsx) */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-8 mb-24">

          {/* Left Column */}
          <div className="w-full lg:w-5/12 z-20">
            {/* <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
                PRACTICAL EXECUTION
              </span>
            </Reveal> */}
            <Reveal>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4 font-sans">
                Products Our Interns <span className="text-rose-500">Work On</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Get hands-on experience contributing directly to active, production-grade architectures. Our interns collaborate alongside engineering teams to develop features, optimize workflows, and enhance our suite of enterprise <Link href="/ecosystem/platforms-solutions/saas-platforms" className="text-rose-500 hover:underline font-semibold">SaaS platforms</Link>.
              </p>
            </Reveal>

            {/* Quick Metrics Bar */}
            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-sm max-w-lg">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white">Live</div>
                  <div className="text-[11px] text-zinc-400 font-medium">SaaS Platforms</div>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <div className="text-lg sm:text-xl font-bold text-rose-400">100%</div>
                  <div className="text-[11px] text-zinc-400 font-medium">Real Contributions</div>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <div className="text-lg sm:text-xl font-bold text-emerald-400">Multi-Cloud</div>
                  <div className="text-[11px] text-zinc-400 font-medium">AWS / Azure / GCP</div>
                </div>
              </div>
            </Reveal>

            {/* <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5 cursor-pointer"
                >
                  Apply for Internship
                </button>
                <Link
                  href="/ecosystem/platforms-solutions/saas-platforms"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  View All Products
                </Link>
              </div>
            </Reveal> */}
          </div>

          {/* Right Column: CardSwap 3D Stack */}
          <div className="w-full lg:w-7/12 h-[600px] sm:h-[650px] relative">
            {/* Gradient glow behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

            <CardSwap
              width={380}
              height={520}
              cardDistance={36}
              verticalDistance={40}
              delay={4000}
              pauseOnHover={true}
              skewAmount={3}
              easing="elastic"
              maxVisible={4}
            >
              {products.map((prod) => (
                <Card
                  key={prod.name}
                  className="overflow-hidden flex flex-col group shadow-[0_16px_50px_rgba(0,0,0,0.7)] cursor-pointer pointer-events-auto bg-[#0A0A0A] border border-zinc-800/80 rounded-[24px]"
                >
                  {/* Padded Image Container (Matching OurProducts.tsx) */}
                  <div className="relative h-[48%] w-full p-2.5 pb-0">
                    <div className="relative w-full h-full overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/50">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-95" />

                      {/* Product Name Overlay */}
                      <div className="absolute bottom-3 left-4 z-20">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          {prod.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="h-[52%] p-4 sm:p-5 flex flex-col bg-[#0A0A0A] relative z-10 justify-between">
                    <div>
                      {/* Category Badge */}
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-500/10 text-rose-500 border border-rose-500/20">
                          {categoryLabel(prod.category)}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 font-normal">
                        {prod.desc}
                      </p>

                      {/* Features Checkmarks */}
                      {prod.features && prod.features.length > 0 && (
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3 bg-zinc-950/80 p-2 rounded-lg border border-zinc-800/60">
                          {prod.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-1.5 text-xs font-medium text-zinc-200">
                              <span className="text-rose-500 font-bold text-[11px]">✓</span>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Tags & Action */}
                    <div className="mt-auto flex items-center justify-between gap-3 pt-2 border-t border-white/5">
                      <div className="flex gap-1 flex-wrap">
                        {prod.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={prod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-[0_0_14px_rgba(225,29,72,0.4)] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{prod.cta || "Visit site"}</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

        </div>

        {/* Tasks Grid Section */}
        {/* <Reveal delay={0.2}>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto shadow-2xl backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight text-center md:text-left">
              Typical Engineering Responsibilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-zinc-950/80 border border-white/5 hover:border-rose-500/30 rounded-xl transition-all duration-300 hover:bg-zinc-900/60 group"
                >
                  <span className="text-[11px] font-mono font-bold text-rose-500 mb-2 block">
                    TASK-0{idx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 transition-colors mb-1.5">
                    {task.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {task.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal> */}

      </div>
    </section>
  );
};
