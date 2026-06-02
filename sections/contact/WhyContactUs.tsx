"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const options = [
  { title: "Enterprise Inquiry", desc: "For large cloud transformation programs, database architecture rebuilds, and embedded engineering squads." },
  { title: "Product Acceleration", desc: "For LLM agent integrations, custom search networks, and real-time dashboard telemetry." },
  { title: "Alliance & Ecosystem", desc: "For cloud service providers, security auditing practices, and partner integrations." }
];

export function WhyContactUs() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              05 / CONSULTATION TIERS
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            How we partner to <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">solve complex challenges</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt) => (
            <a 
              href="mailto:hello@devopstrio.com" 
              key={opt.title} 
              className="border border-zinc-900 bg-zinc-950/20 p-8 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors group relative"
            >
              <div>
                <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-rose-500 mb-6">
                  <MessageSquare size={14} />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-zinc-200 mb-2 group-hover:text-white transition-colors">
                  {opt.title}
                </h3>
                <p className="text-xs text-zinc-450 leading-relaxed font-light">
                  {opt.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
