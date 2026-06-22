"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Cpu, Cloud, Database } from "lucide-react";
import Link from "next/link";

interface Lab {
  title: string;
  partner: string;
  logo: string;
  desc: string;
  icon: React.ReactNode;
  url: string;
}

export function PartnerLabs() {
  const labs: Lab[] = [
    {
      title: "AI Innovation Lab",
      partner: "Azure AI",
      logo: "/assets/Home-page/Techtools/MSAzure.svg",
      desc: "Co-engineering large language model prompt evaluations, semantic caches, and vector index databases.",
      icon: <Cpu size={20} className="text-rose-500" />,
      url: "/ecosystem/innovation-labs"
    },
    {
      title: "Cloud Innovation Lab",
      partner: "AWS Infrastructure",
      logo: "/assets/Home-page/Techtools/aws-color.svg",
      desc: "Testing advanced serverless architectures, declarative auto-scaling groups, and multi-region databases.",
      icon: <Cloud size={20} className="text-rose-500" />,
      url: "/ecosystem/innovation-labs"
    },
    {
      title: "Data Engineering Lab",
      partner: "Google Cloud Data",
      logo: "/assets/Home-page/Techtools/google-color.svg",
      desc: "Designing streaming telemetry aggregators, analytical data tables, and big data dashboard pipelines.",
      icon: <Database size={20} className="text-rose-500" />,
      url: "/ecosystem/innovation-labs"
    }
  ];

  return (
    <section id="innovation-labs" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            Ecosystem Integrations
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Innovation Labs + <span className="text-rose-500">Partners</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Connecting our strategic alliance competencies to dedicated co-innovation laboratories.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <div
              key={lab.title}
              className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[300px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                  <div className="text-rose-500 flex items-center justify-center">
                    {lab.icon}
                  </div>
                  <img src={lab.logo} alt={lab.partner} className="h-5 w-auto object-contain" />
                </div>

                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2">{lab.title}</h3>
                <span className="block text-xs font-mono text-zinc-450 uppercase tracking-widest mb-4">
                  Powered by {lab.partner}
                </span>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                  {lab.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <Link
                  href={lab.url}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-500 group-hover:text-rose-400 transition-colors"
                >
                  Visit Lab
                  <ArrowUpRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
