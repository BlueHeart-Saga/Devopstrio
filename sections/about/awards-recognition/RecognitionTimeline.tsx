"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const timeline = [
  {
    year: "2026",
    title: "Global Scaling & Infrastructure Supremacy",
    description: <>Scaled global website, enhanced <Link href="/ecosystem/partnerships" className="text-[#E11D48] hover:underline">ecosystem positioning</Link>, and achieved Finalist status for Networking Computing Awards through highly resilient infrastructure.</>
  },
  {
    year: "2025",
    title: "Security & Cloud Maturity",
    description: <>Strengthened our cloud, engineering, and delivery offerings, heavily recognized by the Computing Security Awards for <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">DevSecOps excellence</Link>.</>
  },
  {
    year: "2024",
    title: "Platform Expansion",
    description: <>Expanded our internal platform and digital service capabilities, building new <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">multi-cloud frameworks</Link> that accelerated client outcomes.</>
  },
  {
    year: "2022",
    title: "Ecosystem Partnerships",
    description: <>Solidified core technological alliances, earning Dell Gold Partner and Cloud Solution Provider of the Year for unmatched <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">migration speed</Link>.</>
  }
];

export function RecognitionTimeline() {
  return (
    <section className="py-10 sm:py-14 bg-black relative border-t border-zinc-900 overflow-hidden font-sans">
      <div className="absolute top-0 right-[20%] w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <Reveal>
          <div className="mb-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              A Growing Journey of <span className="text-rose-600 font-semibold">Progress and Recognition</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-12 relative z-10">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center justify-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content Half */}
                    <div className="w-full md:w-1/2 md:px-8 relative">
                      <div className={`flex flex-col ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600 mb-2 font-mono">
                          {item.year}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                          {item.title}
                        </h3>
                        <p className="text-base text-zinc-300 leading-relaxed font-normal font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty Half */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
