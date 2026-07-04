"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function MiniUseCases() {
  const cases = [
    {
      title: "Cloud Modernization Program",
      desc: "Migrating business-critical workloads to cloud platforms with improved scalability and governance."
    },
    {
      title: "Service Operations Transformation",
      desc: "Using workflow and operations platforms to improve internal efficiency, support responsiveness, and process visibility."
    },
    {
      title: "AI & Data Enablement",
      desc: "Building data, automation, and intelligence capabilities using modern cloud and engineering ecosystems."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              Case Studies
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Where Ecosystem Partnerships <span className="text-rose-500">Create Impact</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((useCase, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 transition-all group flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-rose-500 transition-colors">{useCase.title}</h3>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider group-hover:gap-4 transition-all cursor-pointer">
                  See Impact <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
