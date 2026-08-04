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
  // {
  //   name: "Devopstrio AI Studio",
  //   category: "Artificial Intelligence · Enterprise AI Workspace",
  //   desc: "Enterprise AI workspace for Chat, Image Generation, Document Intelligence, AI Agents, and Business Automation.",
  //   features: ["AI Chat", "Image Generation", "Document AI", "AI Agents", "Automation"],
  //   tags: ["AI Workspace", "Multi-LLM", "Automation"],
  //   image: "/assets/Home-page/our-products/ai-studio.webp",
  //   link: "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net",
  //   cta: "Launch Platform"
  // },
  {
    name: "Homela",
    category: "PropTech · Real Estate",
    desc: "AI-powered property management SaaS that connects landlords, tenants, and agents on a unified platform with smart lease tracking and payment automation.",
    tags: ["AI-Powered", "Multi-tenant", "Real Estate"],
    image: "/assets/Home-page/our-products/homela.png",
    link: "https://homela.devopstrio.co.uk/"
  },
  {
    name: "Humanex",
    category: "HRTech · People Ops",
    desc: "Enterprise HR platform for talent acquisition, onboarding, performance management, and workforce analytics built for modern distributed teams.",
    tags: ["HR Platform", "Workforce", "Analytics"],
    image: "/assets/Home-page/our-products/humanex.png",
    link: "https://humanex.devopstrio.co.uk/"
  },
  {
    name: "Brio",
    category: "FinTech · Payments",
    desc: "A next-generation payment orchestration platform enabling businesses to process, route, and reconcile transactions across multiple payment gateways seamlessly.",
    tags: ["Payments", "FinTech", "Multi-gateway"],
    image: "/assets/Home-page/our-products/brio.png",
    link: "https://brio.devopstrio.co.uk/"
  },
  {
    name: "Prestivo",
    category: "EdTech · Learning",
    desc: "An adaptive learning management system delivering personalised education experiences powered by AI content recommendations and real-time progress tracking.",
    tags: ["EdTech", "AI Learning", "LMS"],
    image: "/assets/Home-page/our-products/prestivo.png",
    link: "https://prestivo.devopstrio.co.uk/"
  },
  {
    name: "Campix",
    category: "MarTech · Campaigns",
    desc: "Unified campaign intelligence platform that empowers marketing teams to plan, execute, and analyse omnichannel campaigns with real-time attribution.",
    tags: ["MarTech", "Analytics", "Omnichannel"],
    image: "/assets/Home-page/our-products/campix.png",
    link: "https://campix.devopstrio.co.uk/"
  },
  {
    name: "Caresuite",
    category: "HealthTech · Clinical",
    desc: "HIPAA-compliant telehealth and clinical workflow SaaS connecting patients, clinicians, and labs with secure video, e-prescriptions, and EHR integration.",
    tags: ["HealthTech", "HIPAA", "Telehealth"],
    image: "/assets/Home-page/our-products/caresuite.png",
    link: "https://caresuite.devopstrio.co.uk/"
  },
  {
    name: "SafeSign",
    category: "LegalTech · eSign",
    desc: "Enterprise e-signature and document lifecycle platform with advanced audit trails, multi-party workflows, and blockchain-anchored signature verification.",
    tags: ["LegalTech", "eSignature", "Blockchain"],
    image: "/assets/Home-page/our-products/safesign.png",
    link: "https://safesign.devopstrio.co.uk/"
  },
  {
    name: "Justivon",
    category: "LegalTech · Case Mgmt",
    desc: "End-to-end legal case management SaaS for law firms and corporate legal departments — from intake and discovery through billing and court filings.",
    tags: ["LegalTech", "Case Mgmt", "Law Firms"],
    image: "/assets/Home-page/our-products/justivon.png",
    link: "https://justivon-d9fbcpgzf0ancchq.southindia-01.azurewebsites.net/"
  }
];

export function OurProducts() {
  return (
    <section id="products" className="w-full pt-24 md:pt-32 pb-24 md:pb-32 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-8">

          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 z-20">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
                PRODUCT INNOVATION
              </span>
            </Reveal>
            <Reveal>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4">
                Next-gen SaaS Platforms
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                We build and operate a suite of vertical-specific <Link href="/ecosystem/platforms-solutions/saas-platforms" className="text-rose-500 hover:underline">SaaS products</Link> designed to transform industries. From Artificial Intelligence to PropTech and HealthTech, our platforms represent the cutting-edge of product innovation.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Discuss a project

                </a>
                <a
                  href="/ecosystem/platforms-solutions/saas-platforms"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  View all products

                </a>
              </div>
            </Reveal>
          </div>

          {/* Right CardSwap */}
          <div className="w-full lg:w-7/12 h-[650px] relative">
            {/* Gradient glow behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

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
                <Card key={prod.name} className="overflow-hidden flex flex-col group shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer pointer-events-auto bg-[#0A0A0A] border border-zinc-800/80 rounded-[24px]">
                  {/* Padded Image Container */}
                  <div className="relative h-[48%] w-full p-2.5 pb-0">
                    <div className="relative w-full h-full overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/50">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
                  <div className="h-[52%] p-4 sm:p-5 flex flex-col bg-[#0A0A0A] relative z-10">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        {categoryLabel(prod.category)}
                      </span>
                    </div>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-3 line-clamp-2 font-normal">
                      {prod.desc}
                    </p>

                    {prod.features && prod.features.length > 0 && (
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3 bg-zinc-950/80 p-2 rounded-lg border border-zinc-800/60">
                        {prod.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5 text-xs font-medium text-zinc-200">
                            <span className="text-rose-500 font-bold">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div className="flex gap-1 flex-wrap">
                        {prod.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={prod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-[0_0_14px_rgba(225,29,72,0.4)] whitespace-nowrap"
                      >
                        <span>{prod.cta || "Visit site"}</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper to extract the main category part for the badge (e.g., "PropTech")
function categoryLabel(cat: string) {
  return cat.split('·')[0].trim();
}
