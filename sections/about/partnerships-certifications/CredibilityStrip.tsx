"use client";

import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function CredibilityStrip() {
  const points = [
    <>Multi-platform delivery across <Link href="/services/cloud-services" className="text-white hover:underline underline font-bold">cloud</Link>, <Link href="/services/software-development" className="text-white hover:underline underline font-bold">software</Link>, and enterprise ecosystems</>,
    "Cross-functional engineering support across architecture, development, DevOps, QA, and operations",
    "Strong alignment between business requirements and platform implementation",
    "Faster rollout using repeatable delivery frameworks and reusable accelerators",
    "Long-term support beyond implementation"
  ];

  return (
    <section className="py-24 bg-rose-600 relative z-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-center">
          <Reveal>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-200 mb-3 block">
                The Devopstrio Difference
              </span>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white leading-tight">
                Why Clients Value Our <br className="hidden md:block" />
                Ecosystem-Led Delivery
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-1 shrink-0 opacity-80"></div>
                  <p className="text-rose-50 font-medium text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
