"use client";

import React from "react";
import { ShieldCheck, Server, Clock, Lock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface LocationDeliveryModelProps {
  locationName?: string;
}

export function LocationDeliveryModel({ locationName = "the UK" }: LocationDeliveryModelProps) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "UK Sovereign Data and Hosting",
      desc: "All client workloads, transactional records, and telemetry are provisioned inside UK sovereign cloud data centers (AWS London, Azure UK South, GCP europe-west2) with zero unauthorized cross-border data transfer."
    },
    {
      icon: Clock,
      title: "24/7 Follow-the-Sun SRE Support",
      desc: "London-led architecture and governance combined with follow-the-sun engineering delivery centers providing uninterrupted 24/7 cluster monitoring, automated patching, and proactive incident response."
    },
    {
      icon: Lock,
      title: "UK Regulatory and Security Alignment",
      desc: "Our engineering practices satisfy Cyber Essentials Plus, ISO 27001, SOC-2 Type II, and UK GDPR data protection standards, with specialized readiness frameworks for NHS DTAC and FCA operational resilience."
    },
    {
      icon: Server,
      title: "Guaranteed SLA Incident Desks",
      desc: "Direct access to senior cloud architects and SREs with strict contract-backed response targets: P1 critical outage triage under 15 minutes and 99.99% infrastructure uptime guarantees."
    }
  ];

  return (
    <section id="delivery-model" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        
        <Reveal className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            How We Deliver Enterprise Engineering in <span className="text-rose-500">{locationName}</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Devopstrio combines senior onshore consulting led from our London headquarters with distributed follow-the-sun delivery centers, providing enterprise scale, cost efficiency, and rigorous security.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.04} className="h-full">
                <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 size={13} /> Verified Standard
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
