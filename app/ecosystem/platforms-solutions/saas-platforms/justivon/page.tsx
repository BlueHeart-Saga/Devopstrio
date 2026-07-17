"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  FileCheck,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/sections/contact/ContactForm";

export default function JustivonProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const features = [
    { title: "Legal Case Management", desc: "Track client files, active hearings, and case workflows in a secure, unified workspace." },
    { title: "Document Summarization", desc: "AI-driven contract inspection, parsing thousands of pages to output key provisions and risks." },
    { title: "Legal Research Assistant", desc: "Automate citation indexing, legal brief searches, and precedent references." },
    { title: "Workflow Automation", desc: "Create standardized routing matrices for client onboarding, intake forms, and signatures." },
    { title: "Time Tracking & Billing", desc: "Accurate logging for billable hours, automated invoices, and secure legal payments." },
    { title: "Secure Client Vaults", desc: "AES-256 encrypted file lockers for evidence, corporate bylaws, and client records." }
  ];

  const benefits = [
    { value: "50% Faster", label: "Case Preparation", desc: "Retrieve court citations and summarize contract templates in seconds." },
    { value: "SEC & GDPR", label: "Ready Storage", desc: "Fully audit-ready secure infrastructure with strict compliance safeguards." },
    { value: "99.9%", label: "Uptime SLA", desc: "Enterprise cloud clusters ensuring active file availability." }
  ];

  const techStack = [
    { name: "Next.js & React", desc: "Sleek frontend supporting responsive case dashboards and real-time document viewer widgets." },
    { name: "FastAPI & Python", desc: "High-speed backend orchestration powering legal search indices and document summarization." },
    { name: "PostgreSQL & Elasticsearch", desc: "Robust data store combining structured databases with advanced semantic index engines." }
  ];

  const faqs = [
    { q: "Is our client data isolated and secure?", a: "Yes, Justivon supports isolated tenant database schemas, strict role-based access control, and complete document-level logs." },
    { q: "Can Justivon integrate with SafeSign?", a: "Yes, it integrates out of the box with SafeSign to authorize documents and request client eSignatures directly from the dashboard." },
    { q: "Does the AI platform provide citations for legal statements?", a: "Yes. Our semantic assistant references your uploaded repository files, matching statements with legal brief sources." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Hero Section */}
      <section className="relative w-full py-20 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.02),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-rose-500/30 text-rose-400 bg-rose-950/15">
                  <FileCheck className="w-3.5 h-3.5" />
                  SaaS Platforms
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                  Justivon
                </h1>
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-rose-600 mb-6">
                  Legal Operations Platform
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold">
                  Designed for law firms and legal departments. Automate contract reviews, track billing metrics, organize case documentation, and streamline intake channels.
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
                    src="/assets/Home-page/our-products/justivon.png"
                    alt="Justivon Application Interface"
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
      <section className="w-full py-20 bg-black border-b border-zinc-900/60">
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
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
      <section className="w-full py-20 bg-black border-b border-zinc-900/60">
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
      <section className="w-full py-20 bg-black border-b border-zinc-900/60">
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
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
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

      {/* Contact Form */}
      <ContactForm />

      {/* CTA */}
      <section className="w-full py-28 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deploy Justivon in Your Workspace</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our solution architects to deploy the platform or request a customized managed environment.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300"
          >
            Consult Product Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
