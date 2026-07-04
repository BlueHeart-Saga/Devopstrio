"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Handshake, Zap, Users, LineChart } from "lucide-react";

const categories = [
  {
    title: "Delivery & Client Trust",
    description: "Recognition connected to project execution, reliability, and long-term enterprise client partnerships.",
    icon: <Handshake className="w-6 h-6 text-rose-500" />
  },
  {
    title: "Technology & Innovation",
    description: "Recognition tied to engineering capability, product thinking, automation, cloud, AI, and digital transformation.",
    icon: <Zap className="w-6 h-6 text-rose-500" />
  },
  {
    title: "People & Culture",
    description: "Recognition related to team growth, talent development, internship initiatives, and culture-building efforts.",
    icon: <Users className="w-6 h-6 text-rose-500" />
  },
  {
    title: "Growth & Market Presence",
    description: "Recognition associated with business expansion, ecosystem development, global partnerships, and market visibility.",
    icon: <LineChart className="w-6 h-6 text-rose-500" />
  }
];

export function RecognitionCategories() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Recognition Across the Areas That Matter Most
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-zinc-900 hover:border-zinc-800 transition-all flex items-start gap-6 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {cat.description}
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
