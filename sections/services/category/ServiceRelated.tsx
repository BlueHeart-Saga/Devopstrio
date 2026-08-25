"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
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
    <section id="related-services" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">
        
        {/* Header Section */}
        <Reveal className="mb-16 w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans text-center mx-auto">
            Explore adjacent <span className="text-rose-500 font-semibold">practices</span>
          </h2>
        </Reveal>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, idx) => {
            return (
              <Reveal key={service.slug} delay={idx * 0.05} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900 hover:border-rose-500/35 hover:bg-zinc-900/10 rounded-[24px] p-6 transition-all duration-300 relative overflow-hidden text-left cursor-pointer hover:scale-[1.01] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  {/* Subtle hover background accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Badge / Indicator */}
                    {/* <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                      <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase">
                        {service.badge}
                      </span>
                      <span className="text-zinc-600 group-hover:text-rose-500 transition-colors">
                        <Layers size={14} />
                      </span>
                    </div> */}

                    <h3 className="text-2xl font-semibold text-white group-hover:text-rose-500 transition-colors mb-2">
                      {service.title}
                    </h3>

                    {/* <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                      {service.subtitle}
                    </p> */}
                  </div>

                  <div className="border-t border-zinc-900/60 pt-4 mt-auto">
                    <span className="text-md text-rose-500 font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1.5">
                      Explore Practice <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
