"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface AiLabHeroProps {
  title: string;
  bgImage: string;
}

export function AiLabHero({ title, bgImage }: AiLabHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col justify-between pt-36 pb-20 border-b border-zinc-900/60">
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 select-none pointer-events-none transition-transform duration-1000 scale-[1.02]"
          />
          {/* Radial mask behind headline */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          {/* Bottom shadow fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 lg:px-16 flex-grow flex flex-col justify-between">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-start gap-2.5 text-[9px] md:text-[10px] font-medium tracking-[0.12em] text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-white transition-colors text-zinc-400">HOME</Link>
          <ChevronRight size={10} className="text-zinc-650 flex-shrink-0" />
          <Link href="/ecosystem" className="hover:text-white transition-colors text-zinc-400">ECOSYSTEM</Link>
          <ChevronRight size={10} className="text-zinc-650 flex-shrink-0" />
          <span className="text-rose-500 font-semibold">AI INNOVATION LAB</span>
        </nav>

        {/* Headline block */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
          <Reveal>
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-rose-600"></span>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500">
                DEVOPSTRIO AI INNOVATION LAB
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-rose-600"></span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
              Building the Future of <span className="text-rose-500 font-semibold">Intelligent</span> Enterprises
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed max-w-3xl text-center mx-auto mb-8">
              From Generative AI and Agentic Systems to Enterprise Automation and Predictive Intelligence, our AI Innovation Lab helps organizations transform ideas into production-ready AI solutions.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
              >
                Start an AI Assessment <ArrowUpRight size={14} />
              </Link>
              <a
                href="#innovation-areas"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                Explore AI Solutions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
