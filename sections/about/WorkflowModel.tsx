"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const workflowPhases = [
  { name: "Scoping & Audit", desc: "We review repository branches, database explain plans, and IAM permission matrices." },
  { name: "Design & IaC Setup", desc: "We draft landing zone layouts, modular Terraform folders, and pipeline secrets plans." },
  { name: "Embedded Coding", desc: "Senior practitioners write platform services, database schema rollouts, and APIs." },
  { name: "SRE Observability", desc: "Deploy dashboard tracing, alert parameters, error budgets, and compliance checks." },
  { name: "Handover Training", desc: "Coordinate interactive reviews, runbooks documentation, and engineering sign-off." }
];

export function WorkflowModel() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              09 / OPERATION WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Distributed squads, structured governance, and <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">clear delivery visibility</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {workflowPhases.map((item, index) => (
            <div 
              key={item.name}
              className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-all group"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono text-rose-500">PHASE 0{index + 1}</span>
              </div>
              <div>
                <strong className="block text-sm font-semibold tracking-wide text-zinc-200 mb-2 group-hover:text-white transition-colors">
                  {item.name}
                </strong>
                <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
