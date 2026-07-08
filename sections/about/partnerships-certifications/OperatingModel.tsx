"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Users, Crosshair, Target, Activity } from "lucide-react";

import Link from "next/link";

export function OperatingModel() {
  const blocks = [
    {
      icon: <Target className="w-6 h-6 text-[#E11D48]" />,
      title: "Client-Centric Execution",
      desc: "Every engagement is aligned to business goals, operational realities, and long-term value creation."
    },
    {
      icon: <Crosshair className="w-6 h-6 text-[#E11D48]" />,
      title: "Platform-Aware Engineering",
      desc: "We build with awareness of ecosystem best practices, architecture needs, and future scalability."
    },
    {
      icon: <Users className="w-6 h-6 text-[#E11D48]" />,
      title: "Collaborative Delivery",
      desc: <>Cross-functional teams work across strategy, <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">engineering</Link>, QA, design, and support to deliver cohesive outcomes.</>
    },
    {
      icon: <Activity className="w-6 h-6 text-[#E11D48]" />,
      title: "Continuous Improvement",
      desc: "We refine delivery through feedback, learning, operational monitoring, and process evolution."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Delivery Assurance
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              The Operating Principles <span className="text-[#E11D48]">Behind Our Delivery</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/40 transition-colors h-full flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  {block.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{block.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {block.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
