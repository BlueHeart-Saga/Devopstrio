"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface CTAProps {
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
  backLink?: string;
}

export function CTA({ ctaTitle, ctaHighlight, ctaDesc, ctaBtnText, backLink = "/ecosystem" }: CTAProps) {
  return (
    <section id="engage" className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
            {ctaTitle} <span className="font-semibold text-rose-500">{ctaHighlight}</span>
          </h2>

          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
            {ctaDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
            >
              {ctaBtnText} <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href={backLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 bg-transparent hover:border-zinc-700 hover:text-white transition-all duration-300"
            >
              Back to ecosystem
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
