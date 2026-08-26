"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

const alliances = [
  { name: "AWS", description: "Advanced Consulting Partner", logoText: "AWS", x: 150, y: 100 },
  { name: "Microsoft", description: "Gold Cloud Partner", logoText: "Azure", x: 450, y: 80 },
  { name: "Google Cloud", description: "Premier Integration Partner", logoText: "GCP", x: 650, y: 220 },
  { name: "Oracle", description: "Enterprise Cloud Partner", logoText: "OCI", x: 550, y: 380 },
  { name: "SAP", description: "Modern ERP Alliance", logoText: "SAP", x: 250, y: 400 },
  { name: "Cisco", description: "Core Networking Partner", logoText: "Cisco", x: 100, y: 250 },
];

export function AllianceNetwork() {
  return (
    <section id="alliances" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left text block */}
        <div>
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              STRATEGIC ALLIANCES
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Strategic Alliance <span className="text-rose-500">Network</span>
            </h2>
          </Reveal>

          {/* Partner stats / details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-900/60 pt-8">
            <Reveal>
              <h4 className="text-base font-semibold text-white">Direct Channel Escalation</h4>
            </Reveal>
            <Reveal>
              <h4 className="text-base font-semibold text-white">Beta API Integrations</h4>
            </Reveal>
          </div>
        </div>

        {/* Right Alliance Network Image */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-zinc-950/20 border border-white/5 rounded-3xl p-6 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-center overflow-hidden group">
          <img src="/webp/assets/ecosystem/main-page/alliances.webp"
            alt="Strategic Alliance Network"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy" />
        </div>

      </div>
    </section>
  );
}
