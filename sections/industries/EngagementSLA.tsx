"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface MetricItem {
  num: string;
  label: string;
  desc: React.ReactNode;
}

const metrics: MetricItem[] = [
  {
    num: "99.99%",
    label: "Platform Uptime SLA",
    desc: <><Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">Active SRE monitoring teams</Link> managing auto-failovers and node scaling metrics.</>
  },
  {
    num: "<15m",
    label: "Incident Response Time",
    desc: <>P1 production alerts are triaged by <Link href="/services/devops-automation" className="text-rose-500 hover:underline">senior system reliability engineers</Link> immediately.</>
  },
  {
    num: "24/7/365",
    label: "Support Desk Availability",
    desc: <>Global timezone rotation covering all operational shifts under our <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">managed delivery services</Link>.</>
  }
];

export function EngagementSLA() {
  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Outer glass container */}
        <div className="bg-[#0b0b0c] border border-white/10 rounded-[32px] p-8 lg:p-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left">
          
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] blur-3xl pointer-events-none z-0" />

          {/* Left Block */}
          <div className="lg:col-span-5 relative z-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
                Guaranteed operational <span className="text-[#E11D48] font-semibold">stability</span>
              </h2>
            </Reveal>
          </div>

          {/* Right Block: SLA Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 relative z-10 w-full">
            {metrics.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.05} className="w-full">
                <div className="group bg-[#0d0d0f] border border-white/10 p-6 rounded-[20px] grid grid-cols-1 md:grid-cols-[0.25fr_0.75fr] gap-6 items-center hover:border-rose-500/35 hover:shadow-[0_8px_24px_rgba(244,63,94,0.05)] transition-all duration-300 relative overflow-hidden cursor-pointer">
                  
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                  <span className="text-3xl md:text-4xl font-black text-[#E11D48] group-hover:scale-105 transition-transform duration-300 origin-left relative z-10">
                    {item.num}
                  </span>
                  
                  <div className="relative z-10">
                    <strong className="text-sm font-bold text-white mb-1.5 group-hover:text-[#E11D48] transition-colors duration-300 block">
                      {item.label}
                    </strong>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
