"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, MessageSquare } from "lucide-react";

export function AwardsCTA() {
  return (
    <section className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-500/10 mb-8 border border-rose-500/20 text-rose-500">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
            Build with a Team Focused on <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">Meaningful Progress</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Devopstrio continues to grow through strong delivery, continuous capability building, and a commitment to creating value across <a href="/services/cloud-services" className="text-[#E11D48] hover:underline">technology infrastructure</a>, operations, and <a href="/services/digital-transformation" className="text-[#E11D48] hover:underline">digital transformation</a>. If you’re looking for a partner focused on long-term impact, we’d love to <a href="/contact#contact-form" className="text-[#E11D48] hover:underline">start the conversation</a>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact#contact-form"
              className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-lg"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold text-sm rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Explore Our Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
