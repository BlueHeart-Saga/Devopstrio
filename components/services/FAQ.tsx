"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export interface FAQProps {
  faqs: { q: string; a: string | React.ReactNode; proof?: string; tags?: string[] }[];
  className?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
}

export function FAQ({
  faqs,
  className,
  title = "Technical",
  highlight = "clarifications",
  subtitle = "Everything you need to know about our publications, engineering benchmarks, and deep-dives."
}: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className={className || "w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60"}
    >
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            {title}{" "}
            <span className="text-rose-500 font-semibold">
              {highlight}
            </span>
          </h2>
        </Reveal>

        {/* Accordion FAQ List */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="border-b border-zinc-900 py-6"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <div className="text-zinc-400 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal max-w-4xl animate-fadeIn flex flex-col gap-4">
                    <p>{item.a}</p>
                    
                    {item.proof && (
                      <span className="text-xs sm:text-sm text-emerald-400 font-semibold tracking-wide">
                        {item.proof}
                      </span>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs sm:text-sm font-semibold tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Below FAQ callout */}
        <Reveal delay={0.2}>
          <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-xs md:text-sm font-semibold">
              Still have questions? Reach out to our engineering team — we respond to every message personally.
            </p>
            <Link 
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md"
            >
              Contact Our Engineers <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
