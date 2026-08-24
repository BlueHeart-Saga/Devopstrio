"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    q: "How do you align with regulated compliance frameworks?",
    a: <>Our engineering divisions are trained in specific regulatory architectures. For <Link href="/industries/healthcare-life-sciences" className="text-rose-500 hover:underline">healthcare systems</Link>, we enforce encrypted private subnets and audit logs. For <Link href="/industries/banking-finance" className="text-rose-500 hover:underline">financial ledger transactions</Link>, we build strict write-once audits under SOC-2 guidelines.</>
  },
  {
    q: "Do you integrate with legacy mainframe systems?",
    a: <>Yes. We regularly construct secure API broker layers and database adapters to bridge legacy COBOL or AS400 core databases with modern Next.js frontends and <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud microservices</Link>.</>
  },
  {
    q: "How are regional project teams structured?",
    a: <>Each client project has a dedicated solution architect, a delivery manager, and senior developers matching your stack. Team sizes can scale dynamically depending on your development sprints under our <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">global delivery model</Link>.</>
  }
];

export function IndustrialFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header */}
        <Reveal className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            Common industrial <span className="text-[#E11D48] font-semibold">queries</span>
          </h2>
        </Reveal>

        {/* Accordions */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <Reveal key={idx} className="w-full">
                <div className={`group bg-[#0b0b0c] border rounded-[20px] overflow-hidden transition-all duration-300 relative ${
                  isOpen ? "border-rose-500/40 shadow-[0_4px_20px_rgba(244,63,94,0.03)]" : "border-white/10 hover:border-rose-500/35"
                }`}>
                  
                  {/* Subtle Inner Glow on Hover/Active */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent transition-opacity duration-500 pointer-events-none z-0 ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`} />

                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors relative z-10"
                  >
                    <span className="text-sm md:text-base font-bold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-rose-950/15 group-hover:border-rose-500/20 transition-all duration-300 ${
                      isOpen ? "text-white bg-rose-950/20 border-rose-500/30" : ""
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div className={`transition-all duration-350 ease-in-out relative z-10 ${
                    isOpen ? "max-h-[300px] border-t border-white/5 p-6 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
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
