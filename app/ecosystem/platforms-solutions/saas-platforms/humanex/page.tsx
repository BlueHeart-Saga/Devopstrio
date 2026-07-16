"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  Users,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HumanexProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const features = [
    { title: "Recruitment Automation", desc: "AI-driven resume screening and screening scores matching applicants to your open requirements." },
    { title: "Leave Management", desc: "Centralized time-off request tracking, calendar boards, and balance calculations." },
    { title: "Dynamic Payroll Engine", desc: "Automated regional taxes, direct deposit file creation, and benefit adjustments." },
    { title: "Attendance Tracking", desc: "Digital clock-ins, biometric options, and real-time shifts attendance monitors." },
    { title: "Performance Reviews", desc: "360-degree review feedback templates, goal trackers, and manager assessments." },
    { title: "Employee Self Service", desc: "Mobile-friendly profile dashboards allowing employees to update personal records." }
  ];

  const benefits = [
    { value: "40% Faster", label: "Hiring Lifecycle", desc: "Collapse applicant screen-to-offer duration with AI scoring loops." },
    { value: "60% Less", label: "HR Paperwork", desc: "Eliminate manual data entries and paper onboarding packets." },
    { value: "99.9%", label: "Platform Uptime", desc: "Enterprise cloud clusters ensuring files are always accessible." }
  ];

  const techStack = [
    { name: "React & Next.js", desc: "High-speed front-end UI panels built with server-side pre-compilation." },
    { name: "Node.js & Express", desc: "Asynchronous backend API handling calculations and database writes." },
    { name: "PostgreSQL", desc: "Relational database with row-level security isolation guarding employee logs." }
  ];

  const faqs = [
    { q: "Is employee database storage isolated?", a: "Yes. We support both row-level security (RLS) schemas and separate database-per-tenant configurations depending on your compliance requirements." },
    { q: "Does the payroll system support multiple regions?", a: "Yes, our engine handles regional tax configurations and updates local calculators automatically based on location laws." },
    { q: "Can we integrate Humanex with Active Directory?", a: "Yes, standard SAML SSO configurations allow directory syncing from Azure AD, Okta, and Google Workspace." }
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Hero Section */}
      <section className="relative w-full py-20 bg-[#0B0B0B] border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.02),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-red-500/30 text-red-400 bg-red-950/15">
                  <Users className="w-3.5 h-3.5" />
                  SaaS Platforms
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                  Humanex
                </h1>
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-550 to-rose-550 mb-6">
                  AI-Powered Human Resource Platform
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold">
                  Simplify recruitment, onboarding, attendance, payroll, and employee management from one intelligent platform. Streamline talent operations from screening to reviews.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg"
                >
                  Book Demo
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
                >
                  Start Free Trial
                </Link>
              </Reveal>
            </div>

            {/* Right Screen screenshot */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-rose-500/20 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/humanex.png"
                    alt="Humanex Application Interface"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Metrics */}
      <section className="w-full py-20 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl text-center group hover:border-rose-500/15 transition-all duration-300">
                <div className="text-3xl md:text-5xl font-black text-rose-500 mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                  {b.value}
                </div>
                <div className="text-xs font-bold font-mono text-white uppercase tracking-wider mb-3">
                  {b.label}
                </div>
                <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Platform Features
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/10 rounded-3xl transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-rose-500" />
                    </div>
                    {feat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="w-full py-20 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENGINEERING LAYERS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Technology Stack
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/10 transition-colors">
                <h4 className="text-base font-extrabold text-white mb-3 tracking-wide">{tech.name}</h4>
                <p className="text-xs md:text-sm text-zinc-450 font-bold leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-20 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-3xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-3 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </Reveal>
          
          <div className="flex flex-col border-t border-zinc-900">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-28 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deploy Humanex in Your Cloud</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our solution architects to deploy the platform or request a customized managed environment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Consult Product Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
