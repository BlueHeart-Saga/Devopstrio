"use client";

import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function EcosystemValueTimeline() {
  const steps = [
    {
      num: "01",
      title: "Partner Alignment",
      desc: "Identify platform fit based on customer goals, architecture, and operating model."
    },
    {
      num: "02",
      title: "Solution Design",
      desc: "Map services, accelerators, and delivery patterns to the chosen partner ecosystem."
    },
    {
      num: "03",
      title: "Implementation & Integration",
      desc: "Build, migrate, automate, and operationalize the solution effectively."
    },
    {
      num: "04",
      title: "Continuous Optimization",
      desc: <>Managed services, support, governance, and long-term roadmap evolution. Learn about our <Link href="/services/managed-services" className="text-rose-500 hover:underline font-bold">managed services</Link> packages.</>
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              Maturity Model
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              How We Build <span className="text-rose-500">Long-Term Ecosystem Value</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-zinc-800 via-rose-500/50 to-zinc-800 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 shadow-xl relative group transition-all duration-300 hover:border-rose-500/50">
                    <span className="text-2xl font-bold text-rose-500">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
