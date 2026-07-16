"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Server,
  Activity,
  Layers,
  BarChart2,
  Terminal,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function CustomerExperiencePlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "4.8/5", label: "Average CSAT" },
    { value: "72%", label: "AI Deflection" },
    { value: "< 2m", label: "First Response" },
    { value: "+74", label: "NPS Score" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const hubFeatures = [
    "Omnichannel Engagement coordinating email, SMS, and chat lines",
    "Customer Communications platforms routing alerts automatically",
    "Digital Experiences builders rendering support portals and widget interfaces"
  ];

  const aiFeatures = [
    "AI Chatbots parsing visitor questions and fetching answer text",
    "Virtual Assistants scheduling calendar meetings and appointments",
    "AI Agents executing database checks to verify package status",
    "Knowledge Assistants connecting corporate wikis to support interfaces"
  ];

  const opsFeatures = [
    "Ticket Management dashboards sorting open support queues",
    "Case Tracking boards mapping agent progress parameters",
    "SLA Management timers flagging delayed tickets automatically"
  ];

  const intelFeatures = [
    "Customer Profiles aggregating purchase history and portal logs",
    "Journey Analytics plotting typical buyer action pathways",
    "Behavioral Insights highlighting typical features usage patterns"
  ];

  const mktFeatures = [
    "Campaign Automation triggering email tracks on registration",
    "Customer Segmentation rules grouping users by monthly spending",
    "Personalization blocks swapping layout assets depending on user role"
  ];

  const analyticsFeatures = [
    "CSAT metrics logging rating cards after support chats",
    "NPS survey automated distribution tracks and score ledgers",
    "Customer Insights dashboards plotting churn probabilities",
    "Journey Tracking telemetry highlighting portal layout bottlenecks"
  ];

  const faqs = [
    { q: "How is CSAT and NPS data collected?", a: "We display feedback widgets immediately after support sessions, storing responses in analytics tables connected to customer cards." },
    { q: "Does the platform support WhatsApp and SMS channels?", a: "Yes, we integrate with Twilio and Meta API configurations to route SMS and WhatsApp messages directly to agent feeds." },
    { q: "How do AI agents fetch account balances securely?", a: "We run API proxy enclaves that verify user tokens before querying billing endpoints, preventing access leaks." },
    { q: "Can we build multiple support queues?", a: "Yes, you can configure sorting rules to route tickets to billing, engineering, or sales teams based on query keywords." },
    { q: "Is the customer database encrypted?", a: "Yes, customer records, profiles, and historical chat logs are secured using AES-256 keys." },
    { q: "Does the campaign automation link with HubSpot?", a: "Yes, we provide REST connectors to sync segment lists and trigger HubSpot email tracks automatically." },
    { q: "What SLA tracking mechanisms are configured?", a: "Timer loops track the duration between ticket creation and first agent response, triggering warnings if limits are reached." },
    { q: "Does it support agent screen-sharing tools?", a: "Yes, our embedded support widget allows users to launch quick webRTC sharing sessions with authorized agents." },
    { q: "How are chatbots updated with new products data?", a: "We sync search indexes hourly with your product catalog files or Google Drive storage folders." },
    { q: "How do we get started with the Customer Experience Platform?", a: "Click 'Transform Customer Experiences' to set up a chat widget sandbox and audit your customer workflows." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Customer Engagement Unit"
        title={
          <>
            Customer Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Unify support channels, embed conversational AI widgets, coordinate ticket queues, analyze customer behavior, and scale NPS ratings."
        particles={true}
        particleColors={["#ffffff", "#fbcfe8", "#ec4899"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#ec4899"
        magicRingsColorTwo="#db2777"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "CUSTOMER EXPERIENCE PLATFORM" }
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Transform Customer Experiences
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. CUSTOMER ENGAGEMENT HUB */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CHANNEL CORE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Customer Engagement Hub</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Coordinate customer interactions across email, SMS, and web portal channels, sending notifications automatically.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hubFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONVERSATIONAL AI */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {aiFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CHATBOT AGENTS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Conversational AI</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Deploy conversational assistants to solve user queries, connect to knowledge bases, and resolve billing inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER SERVICE OPERATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TICKET PIPELINES</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Customer Service Operations</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Organize incoming support cases, monitor response timer metrics, and route issues to engineering teams.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {opsFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER INTELLIGENCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {intelFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Layers className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">USER METRICS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Customer Intelligence</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Map typical user journeys, build detailed buyer profiles, and highlight portal features usage statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARKETING & ENGAGEMENT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CAMPAIGN METRICS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Marketing & Engagement</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Trigger campaign emails on system signups, segment accounts by monthly spending thresholds, and personalize visual assets.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mktFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPERIENCE ANALYTICS */}
      <section className="w-full py-28 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SCORECARDS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Experience Analytics</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none font-mono text-xs text-center mb-16">
            <div className="p-6 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-2xl mb-1">4.8 / 5</div>
              <div className="text-zinc-400 font-bold">CSAT Score</div>
              <div className="text-[10px] text-zinc-600 mt-1">Average chat review</div>
            </div>
            <div className="p-6 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-2xl mb-1">+74</div>
              <div className="text-zinc-400 font-bold">Net Promoter (NPS)</div>
              <div className="text-[10px] text-zinc-600 mt-1">Quarterly survey score</div>
            </div>
            <div className="p-6 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-2xl mb-1">&lt; 2m</div>
              <div className="text-zinc-400 font-bold">Response Latency</div>
              <div className="text-[10px] text-zinc-600 mt-1">First-response target time</div>
            </div>
            <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl hover:border-rose-500/40 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-2xl mb-1">72%</div>
              <div className="text-rose-500/80 font-bold">AI Deflection Rate</div>
              <div className="text-[10px] text-rose-500/50 mt-1">Resolved without agents</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-zinc-950/40 border border-zinc-900/80 p-8 rounded-3xl hover:border-rose-500/20 transition-all duration-350 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analyticsFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
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
              Everything you need to know about our customer engagement portals, conversational AI assistants, and ticketing queues. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Elevate Customer Journeys</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our experience designers to audit your customer workflows and portal layout metrics.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Transform Customer Experiences
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
