"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface LifecycleStage {
  step: string;
  title: string;
  desc: string;
}

export function ProductLifecycle() {
  const stages: LifecycleStage[] = [
    { step: "01", title: "Discovery", desc: "Understanding customer needs, mapping existing system restrictions, and evaluating feasibility parameters." },
    { step: "02", title: "Product Strategy", desc: "Formulating system roadmaps, listing deployment targets, and scoping MVP modules." },
    { step: "03", title: "UX/UI Design", desc: "Drafting user flow diagrams, interface components, and validating layouts against compliance rules." },
    { step: "04", title: "Development", desc: "Co-programming isolated backends, schema configurations, and setting up core CI deployment tasks." },
    { step: "05", title: "AI Integration", desc: "Connecting model hooks, tuning agent workflows, and structuring private vector indexes." },
    { step: "06", title: "Quality Assurance", desc: "Executing automated browser checks, API compliance assertions, and validation audits." },
    { step: "07", title: "Deployment", desc: "Releasing software packages on cloud namespaces (Azure/AWS) behind API gateways." },
    { step: "08", title: "Growth & Support", desc: "Active SRE monitoring, analyzing traffic levels, and updating capabilities dynamically." }
  ];

  return (
    <section id="lifecycle" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ENGINEERING WORKFLOW
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Product Development <span className="text-rose-500">Lifecycle</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            Our systematic approach to engineering, deploying, and supporting enterprise-grade SaaS systems.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.step}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between min-h-[120px]"
            >
              <div>
                <span className="block text-xl font-mono font-bold text-rose-500 mb-4">{stage.step}</span>
                <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2">{stage.title}</h4>
                {/* <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {stage.desc}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
