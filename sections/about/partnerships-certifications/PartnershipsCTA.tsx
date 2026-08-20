"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PartnershipsCTA() {
  return (
    <section className="py-12 sm:py-16 bg-black text-white relative overflow-hidden z-10 font-sans border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white mb-6 font-sans">
            Looking for a Technology Partner You Can <span className="text-rose-600">Build With Long Term?</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 gap-2 font-sans"
            >
              <span>Talk to Our Team</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-zinc-700 hover:border-white bg-transparent hover:bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 gap-2 font-sans"
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
