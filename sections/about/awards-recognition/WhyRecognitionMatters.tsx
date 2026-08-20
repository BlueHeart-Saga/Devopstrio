"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, ArrowUpRight, Award, Focus } from "lucide-react";
import Link from "next/link";

const trustPoints = [
  {
    title: "Confidence in Delivery",
    description: <>Recognition reinforces the quality, accountability, and consistency behind how we execute complex <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud migrations</Link> and builds.</>,
    icon: <ShieldCheck className="w-5 h-5 text-white" />
  },
  {
    title: "Proof of Momentum",
    description: <>Milestones reflect a company that is actively evolving, investing, and strengthening its <Link href="/services/software-development" className="text-[#E11D48] hover:underline">technological capabilities</Link>.</>,
    icon: <ArrowUpRight className="w-5 h-5 text-white" />
  },
  {
    title: "Commitment to Excellence",
    description: <>Awards and acknowledgements highlight the absolute standards we aim to maintain across <Link href="/services" className="text-[#E11D48] hover:underline">services</Link>, solutions, and support.</>,
    icon: <Award className="w-5 h-5 text-white" />
  },
  {
    title: "A Stronger Partnership Foundation",
    description: <>Clients and partners benefit from working with a highly regulated team that values credibility, improvement, and long-term <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">relationships</Link>.</>,
    icon: <Focus className="w-5 h-5 text-white" />
  }
];

export function WhyRecognitionMatters() {
  return (
    <section className="py-10 sm:py-14 bg-black relative border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              What Our Recognition Means for <span className="text-rose-600 font-semibold">Clients and Partners</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 h-full cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(225,29,72,0.3)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans group-hover:text-rose-400 transition-colors">
                  {point.title}
                </h3>
                
                {/* Description Text (Only visible on hover) */}
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-3 transition-all duration-300 ease-in-out">
                  <p className="text-zinc-300 text-base font-normal leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
