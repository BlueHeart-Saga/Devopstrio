"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="w-full py-28 md:py-40 bg-[#030303] text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
        <Reveal className="max-w-3xl mx-auto flex flex-col items-center">

          <div className="inline-flex items-center gap-2 mb-4">

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
              CONNECT WITH US
            </span>
          </div>

          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-8">
            Ready to design your next <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">enterprise system</span>?
          </h2>

          <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-bold mb-10 max-w-lg">
            Connect directly with an <Link href="/about" className="text-rose-500 hover:underline">engineering expert</Link>. We will audit your <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud estate</Link>, review database indices, and design high-integrity <Link href="/services/it-consulting" className="text-rose-500 hover:underline">system architectures</Link>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
              href="/contact#contact-form"
            >
              Book Consultation <ArrowUpRight size={14} />
            </Link>
            <a
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            >
              Contact Experts <ArrowUpRight size={14} />
            </a>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
