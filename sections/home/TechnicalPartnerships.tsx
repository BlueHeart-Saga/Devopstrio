"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Server, Compass, Zap, Link } from "lucide-react";

const alliances = [
  { name: "AWS Partner Network", tier: "Advanced Consulting Partner" },
  { name: "Microsoft Partner", tier: "Gold Cloud Platform" },
  { name: "Google Cloud Partner", tier: "Build Engagement Tier" },
  { name: "HashiCorp Alliance", tier: "Infrastructure Integration" },
  { name: "CNCF Member", tier: "Kubernetes Certified Service Provider" },
  { name: "Docker Authorized", tier: "Enterprise Solutions Partner" },
  { name: "Red Hat System Partner", tier: "RHEL & OpenShift Consulting" },
  { name: "OpenAI Service Integration", tier: "Enterprise AI Delivery" }
];

export function TechnicalPartnerships() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
              TECHNOLOGY PARTNERSHIPS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Validated alliances across the modern <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">cloud and AI stack</span>.
          </h2>
        </Reveal>

        {/* Logo/Alliance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alliances.map((partner) => (
            <div 
              key={partner.name}
              className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-zinc-550 group-hover:text-rose-500 transition-colors">
                  <Server size={12} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">CERTIFIED</span>
              </div>
              
              <h3 className="text-sm font-semibold text-zinc-200 tracking-wide mb-1 group-hover:text-white transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                {partner.tier}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
