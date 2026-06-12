"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { LifeBuoy, Clock, ShieldAlert, Activity } from "lucide-react";

export default function CustomerSupportPage() {
  const supportPillars = [
    {
      icon: <Clock className="text-rose-500 w-8 h-8" />,
      title: "24/7 Follow-the-Sun SRE",
      desc: "Our globally distributed engineering hubs in London, Tennessee, and Chennai coordinate handovers to ensure uninterrupted platform monitoring."
    },
    {
      icon: <ShieldAlert className="text-rose-500 w-8 h-8" />,
      title: "Active Incident Response",
      desc: "Our automated paging loops trigger immediately upon threshold anomalies, ensuring incident commanders triage problems before users notice."
    },
    {
      icon: <Activity className="text-rose-500 w-8 h-8" />,
      title: "Observability Integrations",
      desc: "We integrate directly with Datadog, Prometheus, Splunk, and PagerDuty to ingest telemetry logs and track custom application performance metrics."
    },
    {
      icon: <LifeBuoy className="text-rose-500 w-8 h-8" />,
      title: "Direct Slack & Call Channels",
      desc: "Enterprise customers receive dedicated private Slack channels, Teams endpoints, and immediate telephone routing lines straight to our on-call rotation."
    }
  ];

  const SLAs = [
    { priority: "P1 - Critical", time: "15 Mins", desc: "Production outage or severe core business impact. Instant SRE pager trigger." },
    { priority: "P2 - High", time: "1 Hour", desc: "Major system function degraded, no immediate workaround. Lead architect assigned." },
    { priority: "P3 - Medium", time: "4 Hours", desc: "Non-critical functionality affected. Routine ticket queue allocation." },
    { priority: "P4 - Low", time: "1 Business Day", desc: "General usage inquiries, feature suggestions, or documentation requests." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      {/* Page Header */}
      <section className="pt-20 pb-16 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.04),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Client Care & SLAs</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Customer <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Support</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Global client support desk, active SLA monitoring, and round-the-clock site reliability engineering for enterprise cloud infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-black">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {supportPillars.map((pillar, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="mb-6">{pillar.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* SLA Table */}
          <div className="border-t border-zinc-900/60 pt-20">
            <Reveal className="mb-12">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">Response Commitments</span>
              <h2 className="text-2xl md:text-3xl font-light leading-snug">
                Service Level <span className="font-semibold text-rose-500">Agreements (SLAs)</span>
              </h2>
              <p className="text-zinc-450 text-xs md:text-sm leading-relaxed mt-3 max-w-2xl font-semibold">
                We back our operations with strict, legally binding SLA response thresholds to ensure your engineering and product teams are never left waiting.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SLAs.map((sla, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-xl relative overflow-hidden group hover:border-rose-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none" />
                    <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase mb-2">{sla.priority}</span>
                    <strong className="block text-2xl font-extrabold font-mono text-white mb-3 group-hover:text-rose-500 transition-colors duration-300">{sla.time}</strong>
                    <p className="text-[10.5px] text-zinc-400 leading-relaxed font-medium">{sla.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutCTA />
    </main>
  );
}
