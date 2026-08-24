"use client";

import React from "react";
import { Award, ShieldCheck, Cpu, Workflow, Clock, Sliders, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface WhyChooseItem {
  title: string;
  desc: React.ReactNode;
}

interface IndustryWhyChooseProps {
  whyChoose: WhyChooseItem[];
}

const extraWhyChoose: WhyChooseItem[] = [
  {
    title: "Zero-Downtime Migration Models",
    desc: <>Every <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud refactoring</Link> release is backed by rigorous traffic-shadowing checks, preventing database locks and transactional drops.</>
  },
  {
    title: "100% Declarative Stacks",
    desc: <>We enforce complete state declarations using Terraform and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">GitOps controllers</Link>, meaning your network, compute, and IAM policies are always auditable.</>
  },
  {
    title: "Pre-Configured Telemetry Baselines",
    desc: <>Every repository we launch comes integrated with <Link href="/services/devops-automation" className="text-rose-500 hover:underline">OpenTelemetry</Link> agents, giving you instant dashboards for database queries and CPU usage.</>
  }
];

export function IndustryWhyChoose({ whyChoose }: IndustryWhyChooseProps) {
  // Pad the incoming list to exactly 6 items for our 3-column grid
  const mergedWhyChoose = [...whyChoose];
  let extraIdx = 0;
  while (mergedWhyChoose.length < 6 && extraIdx < extraWhyChoose.length) {
    mergedWhyChoose.push(extraWhyChoose[extraIdx]);
    extraIdx++;
  }
  const finalWhyChoose = mergedWhyChoose.slice(0, 6);

  // Icon mapping list
  const iconsList = [
    <Award size={22} key="0" className="transition-transform duration-300 group-hover:scale-110" />,
    <ShieldCheck size={22} key="1" className="transition-transform duration-300 group-hover:scale-110" />,
    <Cpu size={22} key="2" className="transition-transform duration-300 group-hover:scale-110" />,
    <Workflow size={22} key="3" className="transition-transform duration-300 group-hover:scale-110" />,
    <Clock size={22} key="4" className="transition-transform duration-300 group-hover:scale-110" />,
    <Sliders size={22} key="5" className="transition-transform duration-300 group-hover:scale-110" />
  ];

  return (
    <section id="why-choose" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Unrivaled <span className="text-rose-500 font-semibold">engineering advantages</span>
          </h2>
        </Reveal>

        {/* 3-Column Grid of Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-12">
          {finalWhyChoose.map((why, idx) => {
            const borderColors = [
              "hover:border-rose-500/35",
              "hover:border-blue-500/35",
              "hover:border-emerald-500/35",
              "hover:border-amber-500/35",
              "hover:border-purple-500/35",
              "hover:border-cyan-500/35"
            ];
            const glowGradients = [
              "from-rose-500/5",
              "from-blue-500/5",
              "from-emerald-500/5",
              "from-amber-500/5",
              "from-purple-500/5",
              "from-cyan-500/5"
            ];
            const titleHoverColors = [
              "group-hover:text-rose-500",
              "group-hover:text-blue-500",
              "group-hover:text-emerald-500",
              "group-hover:text-amber-500",
              "group-hover:text-purple-500",
              "group-hover:text-cyan-500"
            ];
            const graphicColors = [
              "text-rose-500",
              "text-blue-500",
              "text-emerald-500",
              "text-amber-500",
              "text-purple-500",
              "text-cyan-500"
            ];

            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className={`group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between min-h-[380px] ${borderColors[idx]} hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative cursor-pointer`}>
                  
                  {/* Subtle Inner Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${glowGradients[idx]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Top Padded Graphic Container */}
                  <div className="p-3 pb-0">
                    <div className="relative w-full aspect-[16/6] overflow-hidden bg-zinc-950 rounded-[16px] border border-white/5 flex items-center justify-center transition-colors duration-300">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                      <span className={`${graphicColors[idx]} transition-colors duration-300`}>
                        {iconsList[idx]}
                      </span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className={`text-lg font-semibold text-white mb-2 leading-snug ${titleHoverColors[idx]} transition-colors duration-300`}>
                      {why.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-6">
                      {why.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between">
                    <span className={`text-xs ${graphicColors[idx]} font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5`}>
                      Enterprise Advantage <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
