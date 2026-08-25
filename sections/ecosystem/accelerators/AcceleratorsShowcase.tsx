"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface AcceleratorCard {
  title: string;
  desc: string;
  image: string;
  action: string;
  badge?: string;
}

export function AcceleratorsShowcase() {
  const assets: AcceleratorCard[] = [
    { 
      title: "Cloud Foundation Accelerator", 
      desc: "Deploy enterprise cloud environments in days using audited IaC blueprints.",
      image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp",
      action: "Learn more",
      badge: "New"
    },
    { 
      title: "DevOps Launchpad", 
      desc: "Pre-configured CI/CD pipelines, GitOps setups, and containerization scripts.",
      image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp",
      action: "Learn more"
    },
    { 
      title: "AI Intelligence Framework", 
      desc: "Rapid AI solution deployment including secure LLM proxies and RAG layers.",
      image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp",
      action: "Explore AI solutions"
    },
    { 
      title: "Secure Enterprise Framework", 
      desc: "Security controls, identity templates, and automated compliance gates.",
      image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp",
      action: "Learn more"
    },
    { 
      title: "SaaS Starter Platform", 
      desc: "Launch subscription-based platforms using pre-built billing and user management dashboards.",
      image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp",
      action: "Learn more"
    },
    { 
      title: "Data Intelligence Framework", 
      desc: "Modern analytics, real-time logging networks, and warehouse integrations.",
      image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp",
      action: "Learn more"
    }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* ── 1. Split Hero Section (Designed for life today – and tomorrow) ── */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/45 border border-zinc-900 rounded-[28px] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden group">
            {/* Soft decorative glow */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-rose-600/[0.03] rounded-full blur-3xl pointer-events-none" />
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                FEATURED ACCELERATOR
              </span> */}
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
                Engineered for speed today – and scaling <span className="text-rose-500">tomorrow</span>
              </h2>
              {/* <p className="text-zinc-450 text-xs md:text-sm font-semibold leading-relaxed mb-8 max-w-md">
                The next-generation of cloud engineering blocks. Standardized, secure, and configuration-ready so your developer teams can focus on delivering core features.
              </p> */}
              <div>
                <button className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 w-fit hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]">
                  Explore Blueprints
                </button>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-7 relative h-[240px] md:h-[360px] rounded-[20px] overflow-hidden border border-zinc-800/40">
              <img src="/webp/assets/ecosystem/card/Enterprise-Accelerators-Frameworks.webp"
                alt="Devopstrio Cloud Accelerators"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-102 filter brightness-[0.8] group-hover:brightness-[0.9]"
              loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* ── 2. "For business" 4-Column Card Grid ── */}
        <div className="mb-8">
          <Reveal>
            <h3 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wider mb-8">
              Popular Blueprints
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assets.map((asset, idx) => (
              <Reveal key={asset.title} delay={idx * 0.05} className="h-full">
                <div
                  className="bg-zinc-950/40 border border-zinc-900 rounded-[20px] p-5 hover:border-rose-500/20 hover:bg-zinc-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] group shadow-lg"
                >
                  <div>
                    {/* Image Banner */}
                    <div className="relative w-full h-[150px] rounded-[12px] overflow-hidden bg-zinc-900/60 mb-5 border border-zinc-805">
                      {asset.badge && (
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-rose-600 text-[9px] font-bold text-white uppercase tracking-widest z-10 shadow-[0_0_8px_rgba(225,29,72,0.6)]">
                          {asset.badge}
                        </span>
                      )}
                      <img src={asset.image}
                        alt={asset.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 filter brightness-[0.8] group-hover:brightness-[0.9]"
                      loading="lazy" />
                    </div>

                    {/* Title */}
                    <h4 className="text-base md:text-lg font-semibold text-white mb-2 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                      {asset.title}
                    </h4>

                    {/* Description */}
                    {/* <p className="text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed mb-6">
                      {asset.desc}
                    </p> */}
                  </div>

                  {/* Action Button at bottom left */}
                  <div className="mt-auto">
                    <button className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 w-fit hover:shadow-[0_0_12px_rgba(244,63,94,0.3)]">
                      {asset.action}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
