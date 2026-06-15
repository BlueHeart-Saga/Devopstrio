"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface RelatedServiceItem {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
}

interface ServiceRelatedProps {
  relatedServices: RelatedServiceItem[];
}

export function ServiceRelated({ relatedServices }: ServiceRelatedProps) {
  if (relatedServices.length === 0) return null;

  return (
    <section id="related-services" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Related Practices
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Explore adjacent <span className="font-semibold text-rose-500">capabilities</span>
          </h2>
          <p className="text-zinc-250 text-xs md:text-sm font-semibold leading-relaxed mt-2 max-w-xl">
            Complement your technological objectives by integrating partner capabilities across our domain index.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, idx) => (
            <Reveal key={service.slug} delay={idx * 0.03} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between h-full bg-zinc-950/40 border border-white/5 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-950/60 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden text-left backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-semibold">
                    {service.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-200 leading-relaxed font-semibold mb-8 group-hover:text-white transition-colors">
                    {service.subtitle}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                    Explore practice
                  </span>
                  <span className="w-6 h-6 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                    <ArrowUpRight size={11} className="stroke-[2.5]" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
