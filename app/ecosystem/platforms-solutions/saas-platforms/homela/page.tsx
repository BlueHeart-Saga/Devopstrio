"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  Home,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles,
  Link2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomelaProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  const features = [
    { title: "Automated Lease Workflows", desc: "Track leasing pipelines, store application histories, and send renewal alerts automatically." },
    { title: "Asset Telemetry", desc: "Integrate IoT telemetry sensors to monitor utility costs and server status warnings." },
    { title: "Contract Automation", desc: "Trigger document templates creation and signing routes when leases are approved." },
    { title: "Regional Analytics", desc: "Visualize occupancy ratings, regional price metrics, and monthly returns dashboards." },
    { title: "Tenant Portals", desc: "Self-service dashboard for rent payments, maintenance reporting, and communication." },
    { title: "Property Audit Trails", desc: "Cryptographic logging of all lease changes, maintenance audits, and access grants." }
  ];

  const useCases = [
    { title: "Multi-family Residential", desc: "Optimize tenant onboarding and payment cycles across apartment complexes." },
    { title: "Commercial Real Estate", desc: "Manage complex lease terms and track facility utilities with connected IoT meters." },
    { title: "Co-living Operations", desc: "Handle high-frequency resident rotation, smart lock accesses, and split billing." }
  ];

  const integrations = ["Stripe", "Plaid", "Yardi", "Entrata", "Google Calendar", "Slack"];

  const faqs = [
    { q: "What IoT hardware does Homela support?", a: "We support standard BACnet, Modbus, and MQTT broker gateways to sync sensor data." },
    { q: "Can we link custom banking accounts for tenant collections?", a: "Yes, our Stripe and Plaid integrations allow direct tenant payments routing to bank accounts." },
    { q: "Is the lease data encrypted?", a: "Yes, all lease contracts and financial ledger items are encrypted with AES-256 and backed up hourly." }
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-[#0B0B0B] border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.02),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-amber-500/30 text-amber-400 bg-amber-950/15">
                  <Home className="w-3.5 h-3.5" />
                  PropTech Platform
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                  Homela
                </h1>
                <p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-550 mb-6">
                  Property Operations Platform
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold">
                  Automate leasing workflows, monitor physical assets via IoT telemetry channels, and aggregate regional occupancy analytics. Designed for scale.
                </p>
                <div className="text-[10px] text-zinc-500 font-mono mt-2">
                  Mirror Domain: <span className="text-amber-400">https://homela.devopstrio.co.uk/</span>
                </div>
              </Reveal>
              <Reveal delay={0.3} className="flex flex-wrap gap-4">
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg"
                >
                  Book a Live Demo
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
                <Link
                  href="/contact"
                  className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300"
                >
                  Start Free Trial
                </Link>
              </Reveal>
            </div>

            {/* Right Screenshot */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-amber-500/20 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/homela.png"
                    alt="Homela Application Interface"
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

      {/* Business Problem & Solution Overview */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
                THE CHALLENGE
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                Friction in Modern Property Management
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed space-y-4">
                Property managers struggle with disconnected pipelines. Tracking lease statuses manually, receiving facility warning logs offline, and coordinating maintenance tickets over emails causes significant overhead and delays rent collection.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
                THE SOLUTION
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                Unified PropTech Substrate
              </h2>
              <p className="text-zinc-450 text-xs md:text-sm font-bold leading-relaxed">
                Homela links lease cycles directly with physical asset telemetry. IoT integration alerts your teams to utilities spikes immediately, while standard approval triggers fire signature workflows automatically to accelerate resident onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Platform Features
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-amber-500/10 rounded-3xl transition-colors duration-300">
                <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-amber-500" />
                  </div>
                  {feat.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
              SECTOR FIT
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Industry Use Cases
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-amber-500/10 transition-colors">
                <h4 className="text-base font-bold text-white mb-3 tracking-wide">{uc.title}</h4>
                <p className="text-xs md:text-sm text-zinc-405 font-bold leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations & Compliance */}
      <section className="w-full py-24 bg-[#0B0B0B] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
                INTEGRATED STACK
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                Connected Systems
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed mb-8">
                Homela links seamlessly with your existing billing networks and property management ERP tools.
              </p>
              <div className="flex flex-wrap gap-3">
                {integrations.map((item) => (
                  <span key={item} className="px-4 py-2 bg-zinc-950 border border-zinc-900 text-xs font-mono text-zinc-350 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
                SECURITY & AUDIT
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                ISO & SOC-2 Readiness
              </h2>
              <p className="text-zinc-450 text-xs md:text-sm font-bold leading-relaxed">
                All client document storage, bank routing data, and access controls match enterprise compliance policies, featuring strict RBAC configurations and cryptographic system logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Testimonial */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500 mb-3 block">
            PRICING MODEL
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">
            Bespoke Enterprise Pricing
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-12 max-w-md mx-auto">
            Licenses are tailored to your portfolio size. Contact sales to request customized quote frameworks.
          </p>
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl text-left inline-block w-full max-w-xl">
            <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest block mb-2 font-bold">Representative Case Study</span>
            <p className="text-xs md:text-sm text-zinc-300 italic mb-4 font-medium">
              &quot;Homela consolidated our lease agreements and utility tracking. We reduced signature loop times by 50% and centralized operations.&quot;
            </p>
            <div className="text-xs font-extrabold text-white font-mono">— Director of Portfolio Ops, Apex Properties</div>
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
                    <div className="text-zinc-500 group-hover:text-amber-500 transition-colors ml-4 flex-shrink-0">
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

      {/* Demo Request Form */}
      <section id="demo-form" className="w-full py-28 bg-[#030303] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Request a Live Homela Demo</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our solution architects to deploy the platform or request a customized managed environment.
          </p>
          
          {demoSubmitted ? (
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl max-w-md mx-auto text-center">
              <Check className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Request Received</h4>
              <p className="text-xs text-zinc-400">We will contact you shortly to schedule your live walkthrough.</p>
            </div>
          ) : (
            <form onSubmit={handleDemoSubmit} className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl text-left max-w-lg mx-auto space-y-4">
              <div>
                <label className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-1 font-bold">Your Name</label>
                <input required type="text" className="w-full bg-black border border-zinc-900 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none" placeholder="Name" />
              </div>
              <div>
                <label className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-1 font-bold">Email Address</label>
                <input required type="email" className="w-full bg-black border border-zinc-900 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none" placeholder="email@company.com" />
              </div>
              <button type="submit" className="w-full py-3 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors">
                Book a Live Demo
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
