"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityItem {
  title: string;
  desc: string;
  bgImage: string;
  bullets: string[];
}

export function PlatformCapabilities() {
  const capabilities: CapabilityItem[] = [
    {
      title: "Product Engineering",
      desc: "Comprehensive product design, robust system architectures, modern development, testing, and continuous scaling parameters.",
      bgImage: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp",
      bullets: ["Architecture Blueprints", "Responsive Web & Mobile", "MVP to Hyper-Scale"]
    },
    {
      title: "SaaS Engineering",
      desc: "Designing multi-tenant subscriptions, tenant provisioning loops, isolated data schemas, and transactional billing engines.",
      bgImage: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp",
      bullets: ["Multi-Tenant Security", "Billing Integrations", "Dynamic Provisioning"]
    },
    {
      title: "AI Engineering",
      desc: "Integrating large language models (LLMs), orchestrating autonomous AI agents, recommendation algorithms, and business automations.",
      bgImage: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp",
      bullets: ["Private LLM Tunings", "Agentic Workflows", "Vector Database RAG"]
    },
    {
      title: "Cloud Engineering",
      desc: "Scale infrastructure across Azure, AWS, and OCI, container orchestrations, and automated deployment pipelines.",
      bgImage: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp",
      bullets: ["Automated IaC Fabrics", "Multi-Cloud Grids", "Kubernetes Management"]
    },
    {
      title: "Security Engineering",
      desc: "Enforcing modern Identity Access Management (IAM), Zero Trust communication boundaries, and compliance audit postures.",
      bgImage: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp",
      bullets: ["IAM Federation", "Zero Trust Endpoints", "SOC-2/HIPAA Readiness"]
    }
  ];

  return (
    <section id="capabilities" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            TECHNICAL CAPABILITY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Platform <span className="text-rose-500">Capabilities</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our engineering standards across product, SaaS, AI, cloud, and security verticals.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((cap, idx) => (
            <Reveal key={cap.title} delay={idx * 0.05} className="h-full">
              <div className="relative rounded-[24px] border border-zinc-900 bg-zinc-950/60 p-6 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-800 min-h-[370px]">
                
                {/* Expanding Image Layer with Glassmorphism */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <img src={cap.bgImage}
                    alt={cap.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-60"
                  loading="lazy" />
                  {/* Frosted Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black/55 backdrop-blur-md" />
                  {/* Vignette Gradient for depth and text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-white/5 border border-white/5 rounded-[24px]" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    {/* Title */}
                    <h3 className="text-base font-bold text-white tracking-tight mb-2.5 transition-transform duration-500 group-hover:-translate-y-0.5">
                      {cap.title}
                    </h3>
                    {/* Description */}
                    <p className="text-xs text-zinc-400 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="border-t border-white/[0.04] group-hover:border-white/20 pt-5 mt-auto transition-colors duration-500">
                    <ul className="space-y-2.5">
                      {cap.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2.5 text-[11px] font-semibold text-zinc-300 group-hover:text-white transition-colors duration-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
