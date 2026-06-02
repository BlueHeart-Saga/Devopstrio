"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    q: "Do you deploy dedicated engineering teams?",
    a: "Yes. We deliver fully integrated engineering squads (combining cloud architects, developers, and SRE experts) designed to coordinate directly with your internal managers and product leads."
  },
  {
    q: "Do you support regulated-sector and governmental programs?",
    a: "Absolutely. We are experienced in deploying systems under strict SOC-2 Type II, HIPAA, and ISO 27001 regulatory frameworks, utilizing compliant public cloud infrastructure configurations."
  },
  {
    q: "Do you build custom generative AI systems beyond prototypes?",
    a: "Yes. We specialize in production-grade LLM platforms, customized agentic workflows, low-latency semantic caching layers, and robust LLMOps evaluation structures."
  },
  {
    q: "How does your technical handover model work?",
    a: "We fail if you need to depend on us forever. Every cohort deployment concludes with comprehensive code walkthroughs, interactive runbooks, and direct knowledge-transfer sessions for your team."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              06 / FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Common questions about our <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">operating model</span>.
          </h2>
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={item.q}
                className="border-b border-zinc-900 py-6"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <div className="text-zinc-550 group-hover:text-rose-500 transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="mt-4 text-xs text-zinc-450 leading-relaxed font-light max-w-3xl animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
