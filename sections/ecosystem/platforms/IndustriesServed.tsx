"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldAlert, Award, Heart, Users2, Landmark, Factory, ShoppingCart, GraduationCap, Laptop, Landmark as GovIcon } from "lucide-react";

interface IndustryItem {
  name: string;
  icon: React.ReactNode;
  desc: string;
}

export function IndustriesServed() {
  const industries: IndustryItem[] = [
    { name: "Healthcare", icon: <Heart size={18} />, desc: "HIPAA-compliant telemedicine platforms and EHR system integrations." },
    { name: "Recruitment", icon: <Users2 size={18} />, desc: "Enterprise workforce tracking, ATS scoring, and candidate analytics." },
    { name: "Finance", icon: <Landmark size={18} />, desc: "Secure transaction pipelines, PCI compliance, and multi-gateway routing." },
    { name: "Manufacturing", icon: <Factory size={18} />, desc: "Industrial IoT dashboards, tracking systems, and supply chains sync." },
    { name: "Retail & E-Commerce", icon: <ShoppingCart size={18} />, desc: "High-speed multi-tenant inventory networks and custom checkouts." },
    { name: "Education", icon: <GraduationCap size={18} />, desc: "Remote learning hubs, user onboarding databases, and course managers." },
    { name: "Technology", icon: <Laptop size={18} />, desc: "Developer self-service portals, API tools, and microservice hosts." },
    { name: "Government", icon: <GovIcon size={18} />, desc: "Strict secure spaces compliance, portal sites, and auditing trails." }
  ];

  return (
    <section id="industries" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERTICAL ALIGNMENT
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Industries Using Our <span className="text-rose-500">Platforms</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our technology frameworks and SaaS assets are configured to match specific legal and operational demands across eight core industries.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4">
                  {ind.icon}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{ind.name}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
