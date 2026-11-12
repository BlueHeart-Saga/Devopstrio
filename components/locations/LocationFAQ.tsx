"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface LocationFAQProps {
  locationName?: string;
  description?: string;
  faqs: { q: string; a: string }[];
}

export function LocationFAQ({
  locationName = "Devopstrio",
  description,
  faqs
}: LocationFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-8">
        
        <Reveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
            Questions About Our Services in <span className="text-rose-500">{locationName}</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            {description || "Clear technical and commercial answers regarding our engineering coverage, incident SLAs, compliance, and enterprise delivery."}
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-all cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <div className="flex justify-between items-center w-full text-left">
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <div className="text-zinc-400 shrink-0">
                    {isOpen ? <Minus size={20} className="text-rose-500" /> : <Plus size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    <p>{faq.a}</p>
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
