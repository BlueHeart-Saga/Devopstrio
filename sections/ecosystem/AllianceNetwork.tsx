"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

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

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left text block */}
        <div>
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              STRATEGIC ALLIANCES
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white">
              Strategic Alliance <span className="text-rose-500">Network</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-zinc-350 text-base md:text-lg font-semibold leading-relaxed mb-8">
              We collaborate with cloud providers and technology vendors to architect secure, scalable systems. These alliances grant us access to early feature APIs, direct technical support, and product roadmaps.
            </p>
          </Reveal>

          {/* Partner stats / details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-900/60 pt-8">
            <Reveal>
              <h4 className="text-sm font-bold text-white mb-2">Direct Channel Escalation</h4>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold">
                Access 15-minute response SLA support lines through our cloud developer partnerships.
              </p>
            </Reveal>
            <Reveal>
              <h4 className="text-sm font-bold text-white mb-2">Beta API Integrations</h4>
              <p className="text-xs text-zinc-450 leading-relaxed font-semibold">
                Utilize upcoming cloud compute runtimes and AI tools before they release publicly.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right Alliance Network Image */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-zinc-950/20 border border-white/5 rounded-3xl p-6 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-center overflow-hidden group">
          <img
            src="/assets/ecosystem/main-page/alliances.png"
            alt="Strategic Alliance Network"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
