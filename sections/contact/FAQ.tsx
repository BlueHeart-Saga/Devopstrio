"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: React.ReactNode;
  proof?: string;
  tags?: string[];
}

const faqItems: FAQItem[] = [
  {
    q: "What makes Devopstrio different from other consultancies?",
    a: <span>Most consultancies send you a slide deck and a junior engineer. We send you a <Link href="/about" className="text-rose-500 hover:underline">senior architect</Link> from day one — someone who has actually built the infrastructure they're recommending. Our model is outcome-driven, not time-and-materials. We measure success by what changes in your business — not by how many hours we bill. That's why 98% of our clients re-engage within 12 months.</span>,
    proof: "✓ 98% client retention rate · No junior-first engagements"
  },
  {
    q: "How do you price your services?",
    a: <span>We don't publish standard rates because every engagement is different — and we refuse to quote without understanding your actual situation first. What we can tell you: our <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">global delivery model</Link> typically saves clients 15–50% compared to in-house hiring or traditional consultancy rates. Every proposal includes a clear cost-benefit analysis. No hidden fees, no scope creep surprises.</span>,
    tags: ["15–50% Direct Savings", "Fixed-Scope Available", "Transparent Billing"]
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: <span>Both — deliberately. We've shipped lean MVPs in 8–12 weeks for early-stage startups, and we've rebuilt legacy monoliths into distributed <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud platforms</Link> for Series C+ companies and FTSE 100 organisations. We right-size every engagement. We don't over-engineer an MVP, and we don't under-engineer a growth platform. The architecture scales with you.</span>,
    proof: "✓ From Seed to FTSE 100 — same quality, right-sized scope"
  },
  {
    q: "How quickly can you start?",
    a: <span>Faster than you'd expect. Our standard onboarding runs 5–7 business days from contract signature to first sprint. For urgent engagements — production incidents, security breaches, <Link href="/services/cloud-services" className="text-rose-500 hover:underline">critical migrations</Link> — we've mobilised teams within 48 hours. Discovery call → Proposal → Contract → Team assigned → Sprint 0. That's the full sequence, and we move quickly through every step.</span>,
    tags: ["5–7 Days Standard Onboarding", "48hr Emergency Mobilisation"]
  },
  {
    q: "What certifications do you hold?",
    a: <span>Our team holds 18+ active certifications and <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">compliance frameworks</Link> — not as wallpaper, but as working credentials on live client engagements: AWS Advanced Tier · Microsoft Partner · Google Cloud Professional · HashiCorp Specialised · Kubernetes Admin · Terraform Associate · ISO 27001 · ISO 42001 · GDPR · HIPAA · SOC 2 · CCPA · ITIL 4 · TOGAF 9 · CMMI Level 5 · Cyber Essentials · VPAT · AI Governance.</span>,
    proof: "✓ 18 active certifications — all renewed, all verified"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              KNOWLEDGE BASE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-bold">
            Everything you need to know before we start working together. Can&apos;t find what you&apos;re looking for? Our team responds to every question — usually within the hour.
          </p>
        </Reveal>

        {/* Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
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
                  <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="mt-4 text-xs md:text-sm text-zinc-450 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                    <p>{item.a}</p>
                    
                    {item.proof && (
                      <span className="text-[10px] text-emerald-500 font-semibold tracking-wide">
                        {item.proof}
                      </span>
                    )}

                    {item.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-850 text-[9px] font-medium tracking-wide"
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
