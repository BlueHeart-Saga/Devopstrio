"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function ContactCTA() {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("fullName");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus();
    }
  };

  return (
    <section className="w-full py-14 md:py-20 bg-[#030303] text-white border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
        <Reveal className="max-w-3xl mx-auto flex flex-col items-center">

          <div className="inline-flex items-center gap-2 mb-4">
            
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              READY TO BEGIN
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            Your infrastructure deserves better. <br />
            Let&apos;s <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">fix it.</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold mb-6 max-w-lg">
            Slow deployments. Runaway cloud costs. Security gaps. These aren&apos;t inevitable — they&apos;re solvable. We&apos;ve done it 100+ times. We&apos;ll do it for you too.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-7">
            <a
              onClick={handleScrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-655 to-rose-650 hover:from-red-500 hover:to-rose-500 text-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.25)] hover:-translate-y-0.5"
              href="#form"
            >
              Start Your Journey <ArrowUpRight size={14} />
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-zinc-350 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              href="mailto:info@devopstrioglobal.com"
            >
              Talk to an Expert <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Trust Signals */}
          <div className="text-zinc-500 text-[10px] md:text-xs font-medium tracking-wide flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 border-t border-zinc-900 pt-6 w-full">
            <span>✓ No commitment on your first call</span>
            <span>✓ Speak with a senior engineer, not a sales rep</span>
            <span>✓ Response under 2 hours</span>
            <span>✓ Trusted by BP, NHS, Deloitte, Asda</span>
          </div>

          {/* Closing Brand Tagline */}
          <div className="border-t border-zinc-900/60 pt-6 w-full">
            <h4 className="text-sm font-semibold tracking-wider text-rose-500 uppercase mb-2">
              Innovate. Deliver. Impact.
            </h4>
            <p className="text-[10px] text-zinc-600 font-mono">
              Devopstrio Limited &middot; London, United Kingdom &middot; devopstrio.co.uk
            </p>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
