"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Users,
  Clock,
  ShieldCheck,
  Terminal,
  Workflow,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function HumanexProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const features = [
    { title: "Recruitment Automation", desc: "AI resumes screening and match scores comparing applicants to job requirements." },
    { title: "Employee Management", desc: "Centralized profiles, secure document stores, and dynamic team organizational trees." },
    { title: "Dynamic Payroll Engine", desc: "Automated regional taxes, benefit calculations, and direct deposit files creation." },
    { title: "Self-Service Onboarding", desc: "Electronic signature loops, compliance videos checklist, and secure key distributions." },
    { title: "Performance Reviews", desc: "360-degree review feedback templates, peer reviews scheduling, and goal track boards." }
  ];

  const techStack = [
    { name: "Next.js / React", desc: "Responsive client app dashboard frontends with fast state updates." },
    { name: "Node.js / Express", desc: "Multi-tenant service controller API handling calculations." },
    { name: "PostgreSQL", desc: "Isolated relational schema data storage securing employee records." }
  ];

  const faqs = [
    { q: "Is employee database storage isolated?", a: "Yes, we support both row-level security (RLS) schemas and separate database-per-tenant configurations." },
    { q: "Does the payroll system support multiple regions?", a: "Yes, our engine handles country-specific taxes and updates regional calculators automatically." },
    { q: "Can we integrate Humanex with Active Directory?", a: "Yes, SAML SSO integration allows syncing accounts from Azure AD, Okta, and Google Workspace." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* Hero */}
      <section className="relative w-full py-24 bg-black overflow-hidden border-b border-zinc-900/60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Users className="w-3.5 h-3.5" />
              SaaS Solutions
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Humanex
            </h1>
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-8 max-w-2xl mx-auto">
              AI-powered HR & Workforce Management Platform
            </p>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-200 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              Unify recruitment pipelines, payroll management, employee onboarding, and performance tracking in a single secure platform.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
            >
              Request Humanex Demo
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>


      {/* Capabilities */}
      <section className="w-full py-20 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Platform Features
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500" />
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Technology Stack
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6">
                <h4 className="text-base font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-20 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[150px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-5 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-black text-center relative">
        <div className="max-w-3xl mx-auto px-12 xl:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Deploy Humanex in Your Workspace</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-8">
            Connect with our cloud architects to discuss deployment configurations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Schedule Assessment
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
