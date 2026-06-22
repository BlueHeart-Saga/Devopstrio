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
    <section id="contact" className="w-full py-28 md:py-40 bg-[#030303] text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
        <Reveal className="max-w-3xl mx-auto flex flex-col items-center">

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
              READY TO BEGIN
            </span>
          </div>

          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-8">
            Your infrastructure deserves better. <br />
            Let&apos;s <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">fix it.</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-bold mb-10 max-w-lg">
            Slow deployments. Runaway cloud costs. Security gaps. These aren&apos;t inevitable — they&apos;re solvable. We&apos;ve done it 100+ times. We&apos;ll do it for you too.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
            <a
              onClick={handleScrollToForm}
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
              href="#form"
            >
              Start Your Journey <ArrowUpRight size={14} />
            </a>
            <a
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              href="mailto:info@devopstrioglobal.com"
            >
              Talk to an Expert
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
            <h4 className="text-sm font-semibold tracking-wider text-zinc-300 uppercase mb-2">
              <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">Innovate. Deliver. Impact.</span>
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
