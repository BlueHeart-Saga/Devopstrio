"use client";

import React from "react";
import { Award, ShieldCheck, Cpu, Workflow, Clock, Sliders } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface WhyChooseItem {
  title: string;
  desc: string;
}

interface IndustryWhyChooseProps {
  whyChoose: WhyChooseItem[];
}

const extraWhyChoose: WhyChooseItem[] = [
  {
    title: "Zero-Downtime Migration Models",
    desc: "Every cloud refactoring release is backed by rigorous traffic-shadowing checks, preventing database locks and transactional drops."
  },
  {
    title: "100% Declarative Stacks",
    desc: "We enforce complete state declarations using Terraform and GitOps controllers, meaning your network, compute, and IAM policies are always auditable."
  },
  {
    title: "Pre-Configured Telemetry Baselines",
    desc: "Every repository we launch comes integrated with OpenTelemetry agents, giving you instant dashboards for database queries and CPU usage."
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
    <Award size={18} key="0" />,
    <ShieldCheck size={18} key="1" />,
    <Cpu size={18} key="2" />,
    <Workflow size={18} key="3" />,
    <Clock size={18} key="4" />,
    <Sliders size={18} key="5" />
  ];

  return (
    <section id="why-choose" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Why Devopstrio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Unrivaled <span className="text-[#E11D48]">engineering advantages</span>
          </h2>
        </Reveal>

        {/* 3-Column Grid of Aspect-Square Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-12">
          {finalWhyChoose.map((why, idx) => {
            const borderColors = [
              "hover:border-rose-500/40",
              "hover:border-blue-500/40",
              "hover:border-emerald-500/40",
              "hover:border-amber-500/40",
              "hover:border-purple-500/40",
              "hover:border-cyan-500/40"
            ];
            const glowGradients = [
              "from-[#E11D48]/5",
              "from-[#3B82F6]/5",
              "from-[#10B981]/5",
              "from-[#F59E0B]/5",
              "from-[#8B5CF6]/5",
              "from-[#06B6D4]/5"
            ];
            const iconColors = [
              "text-[#E11D48] border-[#E11D48]/20 bg-rose-950/15 group-hover:bg-[#E11D48]",
              "text-[#3B82F6] border-[#3B82F6]/20 bg-blue-950/15 group-hover:bg-[#3B82F6]",
              "text-[#10B981] border-[#10B981]/20 bg-emerald-950/15 group-hover:bg-[#10B981]",
              "text-[#F59E0B] border-[#F59E0B]/20 bg-amber-950/15 group-hover:bg-[#F59E0B]",
              "text-[#8B5CF6] border-[#8B5CF6]/20 bg-purple-950/15 group-hover:bg-[#8B5CF6]",
              "text-[#06B6D4] border-[#06B6D4]/20 bg-cyan-950/15 group-hover:bg-[#06B6D4]"
            ];

            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className={`group h-full aspect-square bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-pointer ${borderColors[idx]} hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}>
                  
                  {/* Subtle Inner Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${glowGradients[idx]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Icon Badge */}
                    <div className={`w-10 h-10 rounded-[12px] border flex items-center justify-center group-hover:text-white transition-all duration-300 mb-6 ${iconColors[idx]}`}>
                      {iconsList[idx]}
                    </div>

                    <div>
                      {/* Title */}
                      <h4 className="text-base font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                        {why.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                        {why.desc}
                      </p>
                    </div>
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
