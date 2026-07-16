"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Clock,
  Shuffle,
  BellRing,
  HelpCircle,
  Users,
  Activity,
  Award,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function FollowTheSunSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handovers = [
    { step: "01", title: "Log Updates", desc: "Outgoing leads update open ticket logs and document steps taken inside Confluence runbooks." },
    { step: "02", title: "Video Transfer", desc: "Conduct a live video sync between outgoing and incoming leads to review critical items." },
    { step: "03", title: "Queue Transfer", desc: "Formally transfer ticket ownership inside Jira, redirecting pager rotations to the active shift." }
  ];

  const operationsBenefits = [
    "SRE staff work daytime hours, maintaining sharp focus and reducing errors",
    "Continuous operations coverage without relying on expensive overnight shift differentials",
    "Agile handoffs preventing incident details from slipping through cracks"
  ];

  const routingTech = [
    { name: "PagerDuty Routing", desc: "Directs high-severity pages to active on-call staff in the awake timezone." },
    { name: "Opsgenie Schedules", desc: "Coordinates complex escalation paths, notifying back-up leads if primary fails to acknowledge." },
    { name: "Unified Slack Channels", desc: "Maintains real-time dialogue and command rooms for active incident coordination." }
  ];

  const teamWelfare = [
    "Eliminates nocturnal schedules, supporting engineer health and family routines",
    "Dramatically reduces engineer turnover, retaining critical platform and context knowledge",
    "Ensures that engineers on shift are fully rested, limiting production command mistakes"
  ];

  const metrics = [
    { value: "<15m", label: "P1 Incident Response SLA" },
    { value: "50%", label: "Reduction in MTTR" },
    { value: "100%", label: "Handoff Accuracy Rate" }
  ];

  const faqs = [
    { q: "How does the Follow-the-Sun model work?", a: "We divide the 24-hour day into three 8-hour shifts, staffed by SRE teams in India, the UK, and the US, passing open alerts at shift changes." },
    { q: "What is your average Mean Time to Resolution (MTTR)?", a: "By passing active incidents to daytime shifts, we resolve complex issues 50% faster, keeping MTTR low." },
    { q: "How do you prevent details from being lost during handoffs?", a: "Our engineers write detailed handover summaries and host a live video review before completing shift sign-off." },
    { q: "What ticketing systems do you support?", a: "We integrate with Jira Service Management, ServiceNow, Freshservice, and Zendesk." },
    { q: "Do your engineers work overnight shifts?", a: "No, the Follow-the-Sun model allows SRE staff to work daytime hours in their local timezones." },
    { q: "How do you handle alert fatigue?", a: "We tune alert rules to silence non-critical telemetry, routing only actionable alerts to on-call pages." },
    { q: "What happens if a critical alert occurs during a shift change?", a: "Both outgoing and incoming leads remain online to co-manage the incident until it is stabilized or handed over." },
    { q: "Can we access your SRE team on Slack?", a: "Yes, we create dedicated shared Slack channels for instant collaboration during active incidents." },
    { q: "How are runtime configurations documented?", a: "We maintain shared Confluence spaces documenting service topology, API keys, and failover runbooks." },
    { q: "How do we sign up for Follow-the-Sun support?", a: "Click the 'Design Support SLA' button to schedule a meeting with our operational leads." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="24/7 TIMEZONE ROTATIONS"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Follow-the-Sun Support
            </span>
          </>
        }
        subtitle="Continuous Support Schedules with Zero Burnout. Coordinate shift transitions between UK, US, and India hubs to maintain constant service coverage while letting engineers work local daytime hours."
        hyperspeed={true}
        hyperspeedOptions={{
          distortion: 'turbulentDistortion',
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xf97316, 0xe04f10, 0xfb923c],
            rightCars: [0xeab308, 0xca8a04, 0xfacc15],
            sticks: 0xf97316
          }
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "GLOBAL DELIVERY", href: "/ecosystem/global-delivery" },
          { label: "FOLLOW THE SUN SUPPORT" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Design Support SLA
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>

      {/* 2. OPERATIONS MODEL */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ROTATION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Operations Model</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Our model maps schedules to coordinate handovers across global offices.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {operationsBenefits.map((benefit, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INCIDENT ROUTING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TELEMETRY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Incident Routing</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routingTech.map((tech, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Shuffle className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SHIFT HANDOVER LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROCEDURES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Shift Handover Lifecycle</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {handovers.map((handover, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-3xl font-black text-rose-500/30 font-mono mb-4 block">{handover.step}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{handover.title}</h4>
                </div>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{handover.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM HEALTH & WELFARE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {teamWelfare.map((benefit, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SUSTAINABILITY</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Team Health & Welfare</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Daytime schedules limit cognitive exhaustion, reducing configuration mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERFORMANCE METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">KPI ACHIEVEMENTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Performance Metrics</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about our Follow-the-Sun Support. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
            </p>
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Design Your Custom SLA</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Speak with our operations leads to configure timezone handovers and pager alerts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Design Support SLA
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
