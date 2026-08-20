"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Handshake, Zap, Users, LineChart } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Delivery & Client Trust",
    description: <>Recognition connected to project execution, reliability, and long-term enterprise client <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">partnerships</Link>.</>,
    icon: <Handshake className="w-6 h-6 text-rose-500" />
  },
  {
    title: "Technology & Innovation",
    description: <>Recognition tied to engineering capability, product thinking, automation, <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud services</Link>, AI, and <Link href="/services/digital-transformation" className="text-[#E11D48] hover:underline">digital transformation</Link>.</>,
    icon: <Zap className="w-6 h-6 text-rose-500" />
  },
  {
    title: "People & Culture",
    description: <>Recognition related to team growth, talent development, internship initiatives, and <Link href="/careers" className="text-[#E11D48] hover:underline">culture-building efforts</Link>.</>,
    icon: <Users className="w-6 h-6 text-rose-500" />
  },
  {
    title: "Growth & Market Presence",
    description: <>Recognition associated with business expansion, ecosystem development, global <Link href="/ecosystem/partnerships" className="text-[#E11D48] hover:underline">partnerships</Link>, and market visibility.</>,
    icon: <LineChart className="w-6 h-6 text-rose-500" />
  }
];

export function RecognitionCategories() {
  return (
    <section className="py-10 sm:py-14 bg-black relative border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Recognition Across the Areas <span className="text-rose-600 font-semibold">That Matter Most</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 flex items-start gap-6 h-full group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans group-hover:text-rose-400 transition-colors">
                    {cat.title}
                  </h3>
                  
                  {/* Description Text (Only visible on hover) */}
                  <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-2 transition-all duration-300 ease-in-out">
                    <p className="text-zinc-300 text-base leading-relaxed font-normal font-sans">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
