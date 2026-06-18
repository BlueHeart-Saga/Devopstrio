"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Layout, Key, Sparkles, Layers, Database, Server } from "lucide-react";

interface ArchLayer {
  level: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

export function PlatformArchitecture() {
  const layers: ArchLayer[] = [
    { level: "01", name: "Users & Client Access", desc: "Corporate administrators, end-users, and API integrations.", icon: <Users size={16} /> },
    { level: "02", name: "Web / Mobile Applications", desc: "Frontend React, Next.js, and React Native client layers.", icon: <Layout size={16} /> },
    { level: "03", name: "API Gateway & Security Layer", desc: "Unified authentication protocols, rate limiting, and SSO route proxies.", icon: <Key size={16} /> },
    { level: "04", name: "AI Services Engine", desc: "Context vector pipelines, LLM routing nodes, and prompt validations.", icon: <Sparkles size={16} /> },
    { level: "05", name: "Core Business Services", desc: "SaaS multi-tenant business routines, billing runs, and transaction queues.", icon: <Layers size={16} /> },
    { level: "06", name: "Database & Storage Layer", desc: "Isolated transactional databases (PostgreSQL) and document search engines (MongoDB).", icon: <Database size={16} /> },
    { level: "07", name: "Multi-Cloud Infrastructure", desc: "Secure host orchestration nodes across Azure, AWS, and OCI.", icon: <Server size={16} /> }
  ];

  return (
    <section id="architecture" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            LOGICAL FRAMEWORK
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Platform <span className="text-rose-500">Architecture</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            The multi-layer decoupled architecture layout designed to run highly resilient, scalable, and isolated tenant services.
          </p>
        </Reveal>

        {/* Stack flow visualizer */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-zinc-900 z-0" />

          {layers.map((layer) => (
            <div
              key={layer.level}
              className="relative flex items-center gap-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-5 z-10 transition-all duration-300 group"
            >
              {/* Level index bullet */}
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-550 group-hover:border-rose-500/30 group-hover:text-rose-500 transition-all duration-300 font-mono font-bold text-xs flex-shrink-0 z-10">
                {layer.level}
              </div>

              <div className="flex items-center gap-4 w-full">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 flex-shrink-0">
                  {layer.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{layer.name}</h4>
                  <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed mt-0.5">
                    {layer.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
