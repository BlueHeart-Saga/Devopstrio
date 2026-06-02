"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "What engagement models do you support?",
    a: "We offer Time & Material (T&M) consulting for dynamic cloud and AI migrations, dedicated staff augmentation models to scale existing product teams, and fixed-price contracts for well-defined architectural audits and prototypes."
  },
  {
    q: "How do you ensure zero-trust security during cloud migrations?",
    a: "We follow strict Infrastructure as Code practices using Terraform. All templates are scanned via static code analyzers, and cloud nodes are locked behind private subnets. Service communications are encrypted via mutual TLS (mTLS) through service meshes like Istio."
  },
  {
    q: "Do you sign strict Service Level Agreements (SLAs)?",
    a: "Yes. For SRE support and operational maintenance, we sign custom SLAs defining target response times (e.g., under 15 minutes for Critical Severity P1 alerts) and guaranteed system availability statistics."
  },
  {
    q: "Can you modernize old legacy monoliths without service disruptions?",
    a: "Yes. We utilize the Strangler Fig migration pattern. We build microservices alongside your legacy monolith, routing specific API endpoints through a routing gateway. This allows us to gradually replace services with zero downtime."
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 bg-[#050505] text-white border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        
        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Common service <span className="font-semibold text-rose-500">inquiries</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="w-full">
                <div className="bg-[#080808] border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-xs font-semibold text-zinc-200">
                      {faq.q}
                    </span>
                    <span className="text-zinc-500 hover:text-white transition-colors flex-shrink-0 ml-4">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-350 ease-in-out ${
                      isOpen ? "max-h-[200px] border-t border-zinc-900/50 p-6" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
