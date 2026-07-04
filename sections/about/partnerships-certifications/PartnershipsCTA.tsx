"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PartnershipsCTA() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-rose-950/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <Reveal>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-4 block">
            Let's Collaborate
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight text-white mb-6">
            Looking for a Technology Partner You Can <span className="text-[#E11D48]">Build With Long Term?</span>
          </h2>
          <p className="text-zinc-400 font-medium text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
            Devopstrio combines engineering capability, ecosystem alignment, and delivery discipline to help organizations move forward with greater confidence—across modernization, cloud, AI, software, and managed services initiatives.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2"
            >
              <span>Talk to Our Team</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-500 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              <span>Explore Devopstrio Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
