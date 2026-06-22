"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
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
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-black overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <MessageSquare className="w-3.5 h-3.5" />
              Customer Engagement Unit
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Customer Experience Platform
            </h1>
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-8 max-w-2xl mx-auto">
              Deliver Personalized, Connected and Intelligent Customer Journeys.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Unify support channels, embed conversational AI widgets, coordinate ticket queues, analyze customer behavior, and scale NPS ratings.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Transform Customer Experiences
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. CUSTOMER ENGAGEMENT HUB */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">CHANNEL CORE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Customer Engagement Hub</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">CHATBOT AGENTS</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Conversational AI</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">TICKET PIPELINES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Customer Service Operations</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">USER METRICS</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Customer Intelligence</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">CAMPAIGN METRICS</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Marketing & Engagement</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
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
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SCORECARDS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Experience Analytics</h2>
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
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Elevate Customer Journeys</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
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
