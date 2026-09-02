"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FAQItemData {
  q: string;
  a: React.ReactNode;
  tags?: string[];
  proof?: string;
}

const faqs: FAQItemData[] = [
  {
    q: "How do I contact support?",
    a: (
      <span>
        You can reach our support team via email at{" "}
        <a href="mailto:info@devopstrioglobal.com" className="text-rose-500 hover:underline">
          info@devopstrioglobal.com
        </a>{" "}
        or call us directly at 0461 2940062 or +44 1784 640216. Enterprise customers also have access to dedicated Slack channels and priority escalation lines.
      </span>
    ),
    proof: "✓ 24/7 Global Response · Multi-Channel Support"
  },
  {
    q: "What are your support hours?",
    a: (
      <span>
        We operate a follow-the-sun support model providing global coverage 24×7. Our delivery centres in the UK, USA, and India coordinate to ensure there is always an engineer available regardless of your timezone.
      </span>
    ),
    tags: ["24x7 Coverage", "Follow-the-Sun", "UK, USA & India Hubs"]
  },
  {
    q: "Do you provide managed cloud support?",
    a: (
      <span>
        Yes. We provide comprehensive managed support for Azure, AWS, and Google Cloud. This includes infrastructure monitoring, incident response, cost optimisation, and architecture guidance across all major cloud platforms under our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
          cloud services
        </Link>.
      </span>
    ),
    tags: ["Azure", "AWS", "Google Cloud", "FinOps & SRE"]
  },
  {
    q: "Can I request a dedicated support engineer?",
    a: (
      <span>
        Enterprise customers can engage dedicated support engineers and customer success managers through our{" "}
        <Link href="/services/managed-services" className="text-rose-500 hover:underline font-bold">
          managed services
        </Link>{" "}
        programme. Contact our sales team to discuss dedicated resource arrangements and custom SLAs.
      </span>
    ),
    proof: "✓ Dedicated Named Engineers · Custom SLA Options"
  },
  {
    q: "What products does Devopstrio support?",
    a: (
      <span>
        We provide full lifecycle support for our entire product portfolio including Humanex, Brio, SafeSign, Prestivo, Campix, Homela, CareSuite, and Justivon on our{" "}
        <Link href="/ecosystem/platforms-solutions" className="text-rose-500 hover:underline font-bold">
          products page
        </Link>, as well as our cloud and DevOps managed services.
      </span>
    ),
    tags: ["Product Lifecycle", "SaaS & On-Prem Support"]
  },
  {
    q: "How are incidents escalated and tracked?",
    a: (
      <span>
        All incidents are tracked via our enterprise ticketing system. Critical incidents (P1) trigger an immediate war-room activation with dedicated engineers. You&apos;ll receive real-time updates throughout the resolution process.
      </span>
    ),
    proof: "✓ P1 Immediate War-Room Activation · Real-Time Updates"
  }
];

export function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative font-sans border-t border-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
        
        {/* Top Header */}
        <Reveal className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white font-sans">
            Frequently asked <span className="bg-gradient-to-r from-rose-500 via-rose-600 to-red-600 bg-clip-text text-transparent font-semibold">questions</span>.
          </h2>
        </Reveal>

        {/* Minimalist Accordion FAQ */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={item.q}
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
                
                <div className={`mt-4 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-medium max-w-4xl flex flex-col gap-4 ${isOpen ? "block animate-fadeIn" : "hidden"}`}>
                  <p>{item.a}</p>
                  
                  {item.proof && (
                    <span className="text-xs sm:text-sm text-emerald-400 font-semibold tracking-wide">
                      {item.proof}
                    </span>
                  )}

                  {item.tags && (
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
              </div>
            );
          })}
        </div>

        {/* Below FAQ callout */}
        <Reveal delay={0.2}>
          <div className="border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-semibold max-w-2xl leading-relaxed">
              Still have questions about our support plans or SLAs? Reach out to our engineering helpdesk — we respond to every query personally.
            </p>
            <a 
              href="mailto:info@devopstrioglobal.com"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-rose-500/50 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 shrink-0"
            >
              Contact Support Engineers <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default SupportFAQ;
