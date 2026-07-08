"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function ServicesIntro() {
  return (
    <section className="w-full py-20 bg-[#030303] text-zinc-300 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            We deliver highly optimized <Link href="/services/software-development" className="text-rose-500 hover:underline">software frameworks</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">cognitive pipelines</Link>, and <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud systems</Link> that stand up to rigorous load, compliance audits, and security validations.
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
            <p>
              At Devopstrio, we do not build simple MVPs. We engineer enterprise systems designed for maximum durability. Our teams consist of <Link href="/about" className="text-rose-500 hover:underline">senior consultants</Link>, cloud architects, and data scientists with decades of collective experience in financial technology, healthcare systems, and high-frequency cloud operations.
            </p>
            <p>
              Every engagement is backed by our strict Service Level Agreements (SLAs), automated <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">zero-trust security</Link> enforcement, and state-of-the-art <Link href="/services/devops-automation" className="text-rose-500 hover:underline">platform engineering</Link> practices to ensure your teams can build, test, and release securely at any volume.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
