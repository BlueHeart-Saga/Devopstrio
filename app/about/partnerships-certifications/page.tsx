"use client";

import React from "react";
import { OurPartnership } from "@/sections/about/OurPartnership";
import { TechnicalPartnerships } from "@/sections/home/TechnicalPartnerships";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Reveal } from "@/components/ui/Reveal";

export default function PartnershipsCertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      {/* Page Header */}
      <section className="pt-20 pb-4 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Alliances & Certifications</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Partnerships & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Certifications</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We collaborate with global technology leaders like AWS, Azure, Google Cloud, and ServiceNow to deliver secure, optimized platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-black flex flex-col gap-12">
        <OurPartnership />
        
        <div className="border-t border-zinc-900/60">
          <TechnicalPartnerships />
        </div>
        
        <AboutCTA />
      </div>
    </main>
  );
}
