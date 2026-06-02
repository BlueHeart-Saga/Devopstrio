"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin } from "lucide-react";

const deliveryProcess = [
  { step: "Discover", desc: "Audit existing infrastructure, telemetry pipelines & software stack bottlenecks." },
  { step: "Strategize", desc: "Draft landing zones, compliance criteria & AI integration opportunities." },
  { step: "Architect", desc: "Formulate declarative Terraform/Kubernetes blueprints & API schemas." },
  { step: "Build", desc: "Execute core software development, CI/CD flows & LLM evaluations." },
  { step: "Deploy", desc: "Automate canary rollouts, post-deployment tests & security posture scans." },
  { step: "Optimize", desc: "Assess resource utilization, FinOps spend & agent response times." }
];

const offices = [
  { city: "London", region: "Head Office", details: "1 St Katharine's Way, 6th floor, London E1W 1YL, UK" },
  { city: "Tennessee", region: "Sub-Regional Office", details: "Executive Tech Park, Nashville, TN, USA" },
  { city: "Bengaluru", region: "Corporate Office", details: "13 Kasturba Rd., Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, 560001, India" },
  { city: "Chennai", region: "Sub-Regional Office", details: "RMZ Millenia Business Park, Taramani, Chennai, Tamil Nadu, 600096, India" },
  { city: "Thoothukudi", region: "Sub-Regional Office", details: "IT Park, Thoothukudi, Tamil Nadu, 628008, India" }
];

export function GlobalNetworks() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-start mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                GLOBAL DELIVERY HUBS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              A standard <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">operating model</span> across our global network.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
            <p>
              We operate standard delivery processes globally, enabling seamless project handovers and continuous uptime checks. Our distributed hubs ensure engineering alignment across key global regions.
            </p>
          </div>
        </Reveal>

        {/* Horizontal Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {deliveryProcess.map((item, index) => (
            <div 
              key={item.step}
              className="process-step p-5 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-rose-500">0{index + 1}</span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">PHASE</span>
              </div>
              <div>
                <strong className="block text-sm font-semibold tracking-wide text-zinc-200 mb-2">
                  {item.step}
                </strong>
                <p className="text-xs text-zinc-450 leading-relaxed font-bold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Offices Grid */}
        <div className="border-t border-zinc-900 pt-16">
          <span className="block text-xs font-mono tracking-wider text-zinc-500 uppercase mb-8">
            PHYSICAL HEADQUARTERS & DELIVERY HUBS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className="flex gap-4 items-start p-5 rounded-lg border border-zinc-900/60 bg-zinc-950/10 hover:border-zinc-900 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">{office.city}</h4>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{office.region}</span>
                  <p className="text-xs text-zinc-450 font-bold leading-relaxed">{office.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
