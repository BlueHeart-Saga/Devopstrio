"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const practices = [
  {
    title: "Prompt Injection Mitigation",
    desc: "We build custom firewall layers between user input hooks and model endpoints to filter out malicious systemic instructions."
  },
  {
    title: "Data Leakage Prevention",
    desc: "All client prompts undergo automated PII (Personally Identifiable Information) masking and sanitization before forwarding."
  },
  {
    title: "Model Drift Evaluation",
    desc: "We hook up continuous evaluation runtimes that track validation benchmarks to capture model accuracy degradation."
  },
  {
    title: "HIPAA & SOC-2 Alignment",
    desc: "We enforce database encryption at rest, tokenized authorization access, and fully audited vector pipeline nodes."
  }
];

export function AISecurity() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              TRUST & SECURITY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Enterprise-grade <span className="font-semibold text-rose-500">AI governance</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl mx-auto">
            We prioritize data isolation, strict compliance validations, and semantic boundary guards on all production AI runtimes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-[#080808] border border-zinc-900 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide text-left">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-zinc-450 leading-relaxed font-light text-left">
                    {item.desc}
                  </p>
                </div>
                
                <div className="w-full h-[1.5px] bg-rose-950/20 mt-8" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
