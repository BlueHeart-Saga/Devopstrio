"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface FocusArea {
  title: string;
  desc: React.ReactNode;
}

interface IndustryFocusAreasProps {
  focusAreas: FocusArea[];
}

const defaultExtraFocusAreas: FocusArea[] = [
  {
    title: "Automated GitOps Pipelines",
    desc: <>Building secure, audited <Link href="/services/devops-automation" className="text-rose-500 hover:underline">continuous delivery</Link> pipelines with container integrity scanning and environment drift detection.</>
  },
  {
    title: "Cloud Platform Scale",
    desc: <>Constructing multi-region <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Kubernetes</Link> clusters and auto-scaling database nodes under strict SOC-2/HIPAA guidelines.</>
  },
  {
    title: "24/7 SRE Observability",
    desc: <>Designing distributed <Link href="/services/devops-automation" className="text-rose-500 hover:underline">telemetry logging</Link>, synthetic load runs, and auto-remediation loops to guarantee 99.99% uptime.</>
  }
];

export function IndustryFocusAreas({ focusAreas }: IndustryFocusAreasProps) {
  // Merge focus areas to ensure a minimum of 6 cards are rendered
  const mergedFocusAreas = [...focusAreas];
  let defaultIdx = 0;
  while (mergedFocusAreas.length < 6 && defaultIdx < defaultExtraFocusAreas.length) {
    mergedFocusAreas.push(defaultExtraFocusAreas[defaultIdx]);
    defaultIdx++;
  }

  return (
    <section id="capabilities" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header */}
        <Reveal className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Specialized <span className="text-[#E11D48] font-semibold">capability groups</span>
          </h2>
        </Reveal>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mergedFocusAreas.map((area, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[260px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Index Indicator */}
                <span className="absolute top-6 right-8 text-xs font-mono font-semibold text-[#E11D48] bg-[#E11D48]/10 px-2 py-1 rounded-md">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>

                <div>
                  <span className="block text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">
                    Focus Domain
                  </span>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#E11D48] transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {area.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs uppercase font-semibold tracking-wider">
                    Operational Focus
                  </span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
