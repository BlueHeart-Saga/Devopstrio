"use client";

import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

export function TrustStatement() {
  return (
    <section className="py-24 bg-[#E11D48] relative z-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-200 mb-4 block">
              The Devopstrio Difference
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white leading-tight mb-8">
              A Company Built for Long-Term Partnerships
            </h2>
            <p className="text-rose-50 text-sm md:text-base leading-relaxed font-medium">
              Whether we are supporting <Link href="/services/digital-transformation" className="text-white hover:underline underline font-bold">modernization</Link>, <Link href="/services/managed-services" className="text-white hover:underline underline font-bold">managed services</Link>, <Link href="/services/software-development" className="text-white hover:underline underline font-bold">product engineering</Link>, or digital transformation, our approach is shaped by accountability, technical depth, and a commitment to building lasting client relationships. Partnerships and certifications are one part of that foundation—they reinforce the trust, capability, and discipline behind every engagement.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
