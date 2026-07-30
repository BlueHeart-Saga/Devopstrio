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
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              What Our Recognition Means for Clients, Partners, and Future Teams
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                  {point.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-3">{point.title}</h3>
                <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
