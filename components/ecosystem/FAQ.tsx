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
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rose-500">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Questions we get <span className="font-semibold bg-gradient-to-r from-red-500 via-rose-500 to-rose-400 bg-clip-text text-transparent">asked every day</span>.
          </h2>
          {/* <p className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed">
            Everything you need to know about this integration segment. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
          </p> */}
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border-b border-zinc-900/80 py-6 transition-colors duration-200">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group py-1"
                >
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div className="text-zinc-400 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0 p-1.5 rounded-full bg-zinc-900/50 group-hover:bg-zinc-800">
                    {isOpen ? <Minus size={20} className="w-5 h-5" /> : <Plus size={20} className="w-5 h-5" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-sm md:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl animate-fadeIn flex flex-col gap-4 pl-1">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Below FAQ callout */}
        <Reveal delay={0.2}>
          <div className="border border-zinc-850 bg-gradient-to-r from-zinc-950/80 to-zinc-900/40 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-base md:text-lg font-semibold text-zinc-200">
              Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
            </p>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="gap-2.5 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider uppercase border border-rose-600/30 bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              Contact Our Engineers <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

