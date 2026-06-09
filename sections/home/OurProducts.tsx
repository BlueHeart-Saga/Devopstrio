"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

const products = [
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
    <section id="products" className="w-full py-24 md:py-32 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 z-20">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500">
                  PRODUCT INNOVATION
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6">
                Next-gen SaaS <br className="hidden md:block" />
                <span className="font-bold text-[#E11D48]">Platforms</span>.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                We build and operate a suite of vertical-specific SaaS products designed to transform industries. From PropTech to HealthTech, our platforms represent the cutting-edge of product innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                  Discuss a project
                </a>
                <a href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors group">
                  View all products
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              height={500}
              cardDistance={36}
              verticalDistance={40}
              delay={4000}
              pauseOnHover={true}
              skewAmount={3}
              easing="elastic"
              maxVisible={4}
            >
              {products.map((prod) => (
                <Card key={prod.name} className="overflow-hidden flex flex-col group shadow-2xl cursor-pointer pointer-events-auto">
                  {/* Image Container with Name Overlay */}
                  <div className="relative h-[52%] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/20 to-transparent opacity-95" />

                    {/* Product Name Overlay */}
                    <div className="absolute bottom-4 left-5 z-20">
                      <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {prod.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="h-[48%] p-5 sm:p-6 flex flex-col bg-[#0a0a0c] border-t border-white/5 relative z-10">
                    <div className="flex items-center mb-3">
                      <span className="text-[9px] font-bold tracking-wider uppercase text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full">
                        {categoryLabel(prod.category)}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {prod.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {prod.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={prod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold text-rose-500 hover:text-rose-400 flex items-center gap-1 transition-colors whitespace-nowrap"
                      >
                        <span>Visit site</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
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
