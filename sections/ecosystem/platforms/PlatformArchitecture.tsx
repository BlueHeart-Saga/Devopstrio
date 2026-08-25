"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface ArchLayer {
  level: string;
  name: string;
  desc: string;
  bgImage: string;
}

export function PlatformArchitecture() {
  const layers: ArchLayer[] = [
    {
      level: "01",
      name: "Users & Client Access",
      desc: "Corporate administrators, end-users, and API integrations.",
      bgImage: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp"
    },
    {
      level: "02",
      name: "Web / Mobile Applications",
      desc: "Frontend React, Next.js, and React Native client layers.",
      bgImage: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp"
    },
    {
      level: "03",
      name: "API Gateway & Security Layer",
      desc: "Unified authentication protocols, rate limiting, and SSO route proxies.",
      bgImage: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp"
    },
    {
      level: "04",
      name: "AI Services Engine",
      desc: "Context vector pipelines, LLM routing nodes, and prompt validations.",
      bgImage: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp"
    },
    {
      level: "05",
      name: "Core Business Services",
      desc: "SaaS multi-tenant business routines, billing runs, and transaction queues.",
      bgImage: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp"
    },
    {
      level: "06",
      name: "Database & Storage Layer",
      desc: "Isolated transactional databases (PostgreSQL) and document search engines (MongoDB).",
      bgImage: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp"
    },
    {
      level: "07",
      name: "Multi-Cloud Infrastructure",
      desc: "Secure host orchestration nodes across Azure, AWS, and OCI.",
      bgImage: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp"
    }
  ];

  return (
    <section id="architecture" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            LOGICAL FRAMEWORK
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Platform <span className="text-rose-500">Architecture</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            The multi-layer decoupled architecture layout designed to run highly resilient, scalable, and isolated tenant services.
          </p> */}
        </Reveal>

        {/* Premium split-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((layer, idx) => (
            <Reveal
              key={layer.level}
              delay={idx * 0.05}
              className={`h-full ${layer.level === "07" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""}`}
            >
              <div className="relative rounded-[24px] overflow-hidden border border-white/[0.04] hover:border-rose-500/25 bg-zinc-950/40 grid grid-cols-12 min-h-[100px] group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.04)] h-full">
                
                {/* Left sequence side with bg artwork and giant number */}
                <div className="col-span-4 md:col-span-3 relative overflow-hidden h-full border-r border-white/[0.04] bg-[#080808]">
                  <img src={layer.bgImage}
                    alt={layer.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent pointer-events-none" />
                  <span className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-black text-white/10 group-hover:text-rose-500/20 group-hover:scale-105 transition-all duration-500 select-none tracking-tighter font-mono">
                    {layer.level}
                  </span>
                </div>

                {/* Right content details side */}
                <div className="col-span-8 md:col-span-9 p-6 flex flex-col justify-center relative z-10 bg-zinc-950/20">
                  <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2 group-hover:text-rose-400 transition-colors duration-300">
                    {layer.name}
                  </h4>
                  {/* <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">
                    {layer.desc}
                  </p> */}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
