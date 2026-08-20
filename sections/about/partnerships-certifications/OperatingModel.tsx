"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Users, Crosshair, Target, Activity } from "lucide-react";

export function OperatingModel() {
  const blocks = [
    {
      icon: <Target className="w-6 h-6 text-rose-500" />,
      title: "Client-Centric Execution",
      desc: "Every engagement is aligned to business goals, operational realities, and long-term value creation."
    },
    {
      icon: <Crosshair className="w-6 h-6 text-rose-500" />,
      title: "Platform-Aware Engineering",
      desc: "We build with awareness of ecosystem best practices, architecture needs, and future scalability."
    },
    {
      icon: <Users className="w-6 h-6 text-rose-500" />,
      title: "Collaborative Delivery",
      desc: "Cross-functional teams work across strategy, engineering, QA, design, and support to deliver cohesive outcomes."
    },
    {
      icon: <Activity className="w-6 h-6 text-rose-500" />,
      title: "Continuous Improvement",
      desc: "We refine delivery through feedback, learning, operational monitoring, and process evolution."
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              The Operating Principles <span className="text-rose-600">Behind Our Delivery</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/40 transition-colors h-full flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  {block.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-sans">{block.title}</h3>
                  <p className="text-zinc-300 text-base leading-relaxed font-normal font-sans">
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
