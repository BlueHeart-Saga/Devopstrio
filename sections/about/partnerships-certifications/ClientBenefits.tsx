"use client";

import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function ClientBenefits() {
  const points = [
    {
      title: "Stronger Solution Confidence",
      desc: "Clients benefit from a delivery team aligned with recognized platforms, tools, and implementation practices."
    },
    {
      title: "Better Delivery Consistency",
      desc: <>Structured <Link href="/services/software-development" className="text-[#E11D48] hover:underline font-bold">engineering processes</Link> and certification-led capability building support more dependable execution.</>
    },
    {
      title: "Broader Technology Access",
      desc: "Partnership ecosystems help expand the tools, integrations, and solution pathways available for each engagement."
    },
    {
      title: "Long-Term Support Mindset",
      desc: "Our focus goes beyond implementation to include operational support, improvement, and ongoing collaboration."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden z-10">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_75%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Business Value
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              What This Means for <span className="text-[#E11D48]">Our Clients</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative group p-8 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/60 transition-all duration-300 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-rose-500/50 transition-colors">
                  <span className="text-sm font-bold text-rose-500">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
