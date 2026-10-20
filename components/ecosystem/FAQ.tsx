"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export interface FAQItem {
  q: string;
  a: string | React.ReactNode;
  proof?: string;
  tags?: string[];
}

export interface FAQProps {
  faqs: FAQItem[];
  badge?: string;
  title?: string;
  highlight?: string;
  className?: string;
}

export function FAQ({
  faqs,
  badge = "FAQ",
  title = "Questions we get",
  highlight = "asked every day.",
  className
}: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className={className || "w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60"}>
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        <Reveal className="max-w-3xl mb-14">
          {badge && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rose-500">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            {title}{" "}
            <span className="font-semibold bg-gradient-to-r from-red-500 via-rose-500 to-rose-400 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border-b border-zinc-900/80 py-6 transition-colors duration-200">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group py-1 cursor-pointer"
                >
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div className="text-zinc-400 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0 p-1.5 rounded-full bg-zinc-900/50 group-hover:bg-zinc-800">
                    {isOpen ? <Minus size={20} className="w-5 h-5" /> : <Plus size={20} className="w-5 h-5" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-sm md:text-base text-zinc-300 font-normal leading-relaxed max-w-4xl animate-fadeIn flex flex-col gap-3 pl-1">
                    <p>{faq.a}</p>

                    {faq.proof && (
                      <span className="text-xs text-emerald-400 font-semibold tracking-wide font-mono mt-1">
                        {faq.proof}
                      </span>
                    )}

                    {faq.tags && faq.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-xs font-mono font-medium tracking-wide"
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
          <div className="border border-zinc-850 bg-gradient-to-r from-zinc-950/80 to-zinc-900/40 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-base md:text-lg font-semibold text-zinc-200">
              Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
            </p>
            <Link
              href="/contact#contact-form"
              className="gap-2.5 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider uppercase border border-rose-600/30 bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact Our Engineers <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
