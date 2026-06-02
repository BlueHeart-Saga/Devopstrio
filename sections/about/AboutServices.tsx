"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

const services = [
  { name: "Cloud Native Architecture", desc: "Enterprise cloud landing zones, automated Kubernetes, multi-region database replication." },
  { name: "AI & Data Engineering", desc: "Agentic neural workflows, custom vector databases, pipeline scaling, semantic metric layers." },
  { name: "Platform Engineering (DevOps)", desc: "Internal developer platforms, IaC configuration audits, deployment orchestrations." },
  { name: "Enterprise Security", desc: "Zero-trust routing structures, SOC-2 posture reports, OIDC credentials, access controls." },
  { name: "Digital Transformation", desc: "Decoupling legacy microservices, product operations setup, and engineering training." }
];

export function AboutServices() {
  return (
    <section className="w-full py-20 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              06 / CORE ENGINEERING SERVICES
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Practices that make <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">complex cloud delivery predictable</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div 
              key={item.name} 
              className="flex flex-col gap-4 border border-zinc-900 bg-zinc-950/20 p-6 rounded-xl hover:border-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-rose-500 shrink-0" />
                <span className="text-xs font-semibold text-zinc-200">{item.name}</span>
              </div>
              <p className="text-xs text-zinc-450 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
