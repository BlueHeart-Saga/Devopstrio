"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export interface FAQProps {
  faqs: { q: string; a: string }[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-bold">
            Everything you need to know about this integration segment. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
          </p>
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border-b border-zinc-900 py-6">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Below FAQ callout */}
        <Reveal delay={0.2}>
          <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
            </p>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Our Engineers <ArrowUpRight size={12} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
