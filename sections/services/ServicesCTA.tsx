"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesCTA() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENGAGE WITH US
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Ready to design your <span className="text-rose-500">cloud roadmap?</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Book a dedicated consultation session with one of our senior solutions architects to review your systems footprint, security audit needs, and resource scaling plans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-lg"
            >
              Consult a Senior Architect <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
            >
              Learn about our team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
