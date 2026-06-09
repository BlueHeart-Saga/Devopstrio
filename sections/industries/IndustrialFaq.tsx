"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "How do you align with regulated compliance frameworks?",
    a: "Our engineering divisions are trained in specific regulatory architectures. For healthcare systems, we enforce encrypted private subnets and audit logs. For financial ledger transactions, we build strict write-once audits under SOC-2 guidelines."
  },
  {
    q: "Do you integrate with legacy mainframe systems?",
    a: "Yes. We regularly construct secure API broker layers and database adapters to bridge legacy COBOL or AS400 core databases with modern Next.js frontends and cloud microservices."
  },
  {
    q: "How are regional project teams structured?",
    a: "Each client project has a dedicated solution architect, a delivery manager, and senior developers matching your stack. Team sizes can scale dynamically depending on your development sprints."
  }
];

export function IndustrialFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Common industrial <span className="font-semibold text-rose-500">queries</span>
          </h2>
        </Reveal>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <Reveal key={idx} className="w-full">
                <div className="bg-zinc-950/20 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className="text-xs md:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">{faq.q}</span>
                    <span className="text-zinc-500 hover:text-white flex-shrink-0 ml-4 transition-colors">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[250px] border-t border-zinc-900/50 p-5 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{faq.a}</p>
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
