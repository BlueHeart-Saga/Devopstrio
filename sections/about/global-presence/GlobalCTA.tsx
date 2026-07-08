"use client";

import React from "react";
import { PhoneCall, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function GlobalCTA() {
  return (
    <section className="py-24 md:py-32 relative max-w-5xl mx-auto px-6 text-center">
      <Reveal>
        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-8">
          <PhoneCall className="w-6 h-6 text-rose-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
          Talk to a Team Built for Global Delivery
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-medium max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you need <Link href="/services/it-consulting" className="text-[#E11D48] hover:underline">strategic consulting</Link> from the UK, <Link href="/services" className="text-[#E11D48] hover:underline">engineering scale</Link> from India, or regional coordination across North America, Devopstrio is built to support global <Link href="/services/digital-transformation" className="text-[#E11D48] hover:underline">digital transformation</Link> with <Link href="/contact" className="text-[#E11D48] hover:underline">local accountability</Link>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/contact#contact-form"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
          >
            Talk to a Team Built for Global Delivery
          </a>
          <a
            href="/contact#schedule-call"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
          >
            Book a Consultation
            <Calendar className="w-4 h-4 text-zinc-450" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
