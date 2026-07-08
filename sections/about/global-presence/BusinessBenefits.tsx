"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function BusinessBenefits() {
  const benefitsList = [
    "Stronger time-zone coverage for global teams",
    "Accelerated engineering and faster delivery cycles",
    "Round-the-clock proactive cloud support operations",
    "Direct access to specialized, top-tier engineering talent",
    "Scalable, consistent execution across cloud, AI, and security"
  ];

  return (
    <section className="py-24 md:py-32 relative max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Story & Why It Matters */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              Why Our Presence Matters
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Local Expertise.<br />
              <span className="text-rose-500">Global Delivery Confidence.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Our global presence is not just about office locations—it is about how we structure delivery, support collaboration, and stay close to the needs of modern organizations.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              With strategic leadership, engineering talent, <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud specialists</Link>, <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline">DevOps experts</Link>, and <Link href="/services/managed-services" className="text-[#E11D48] hover:underline">managed operations teams</Link> working together across regions, Devopstrio offers the flexibility of a modern distributed technology partner while maintaining the accountability, quality, and responsiveness enterprises expect.
            </p>
          </Reveal>
        </div>

        {/* Right Side: Key Advantages Grid */}
        <div className="lg:col-span-6 space-y-4">
          <Reveal>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Supporting Global Businesses With:</h4>
          </Reveal>
          
          <div className="grid grid-cols-1 gap-4">
            {benefitsList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/25 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-zinc-300 font-bold tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
