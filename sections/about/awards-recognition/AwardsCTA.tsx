"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AwardsCTA() {
  return (
    <section className="py-12 sm:py-16 bg-black relative border-t border-zinc-900 overflow-hidden text-center font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8 text-white font-sans">
            Build with a Team Focused on <br className="hidden md:block" />
            <span className="text-rose-600 font-semibold">Meaningful Progress</span>
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
