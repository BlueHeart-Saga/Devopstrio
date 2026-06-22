"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Building,
  HelpCircle,
  FileCheck,
  ShieldCheck,
  Award,
  Users,
  Briefcase
} from "lucide-react";
import Link from "next/link";

export default function UnitedKingdomHubPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offices = [
    { name: "London Global HQ", address: "128 City Road, London EC1V 2NX", label: "Strategy & Leadership" },
    { name: "London Client Experience Centre", address: "167–169 Great Portland Street, London W1W 5PF", label: "Executive Meetings" }
  ];

  const services = [
    "Enterprise Architecture designing component bounds and schemas",
    "Cloud Strategy structuring sovereign landing zones on AWS and Azure",
    "AI Advisory modeling feasibility metrics and security alignment",
    "Digital Transformation coordinating legacy migrations with zero downtime"
  ];

  const workshops = [
    { title: "Executive Workshops", desc: "Interactive roadmapping sessions aligning technology objectives with corporate targets." },
    { title: "Innovation Demonstrations", desc: "Live walkthroughs of platform accelerators, automated pipelines, and agent networks." },
    { title: "Solution Design Sessions", desc: "Collaborative whiteboard meetings drawing component topologies and database enclaves." }
  ];

  const industries = [
    "Financial Services complying with strict banking data rules",
    "Healthcare providing secure HIPAA and local health data portals",
    "Public Sector delivering compliant cloud platforms for state services",
    "Technology helping modern SaaS startups scale platform operations"
  ];

  const securityCompliance = [
    { title: "UK GDPR Audits", desc: "Strict data privacy parameters isolating citizen records and tracking user consent logs." },
    { title: "ISO 27001 Alignment", desc: "Complete security framework checks protecting network channels and client enclaves." },
    { title: "Security Governance", desc: "Continuous risk registers scoring configurations against vulnerability guidelines." }
  ];

  const metrics = [
    { value: "45+", label: "Enterprise Programs Completed" },
    { value: "12+", label: "Strategic Technology Partnerships" },
    { value: "150+", label: "Architecture Consulting Engagements" }
  ];

  const faqs = [
    { q: "Where are your UK offices located?", a: "Our Global HQ is at 128 City Road, London, and our Client Experience Centre is located at 167-169 Great Portland Street, London." },
    { q: "Do your consultants hold security clearances?", a: "Yes, our UK architects hold active SC clearances, allowing them to advise on government and financial sector programs." },
    { q: "What takes place at the Client Experience Centre?", a: "Clients visit us for solution design workshops, interactive architecture reviews, and prototype demonstrations." },
    { q: "How do you assist with UK GDPR compliance?", a: "We design cloud setups that isolate UK citizen data in local AWS/Azure data centers and enforce secure deletion routines." },
    { q: "What industries do you focus on in the UK?", a: "We primarily support Financial Services, Healthcare, Public Sector organizations, and growing SaaS Technology groups." },
    { q: "Can we schedule a face-to-face meeting?", a: "Yes, you can click 'Schedule Executive Workshop' below to reserve a session in our London Experience Centre." },
    { q: "Do you advise on AWS and Azure cloud migrations?", a: "Yes, we design multi-account landing zone blueprints for both AWS and Microsoft Azure clouds." },
    { q: "What is your consulting delivery model?", a: "Our UK consultants work onshore to design the architecture and coordinate delivery with our offshore engineering hubs." },
    { q: "Are your frameworks certified?", a: "We align all cloud architectures with UK Cyber Essentials Plus and ISO 27001 guidelines." },
    { q: "How do we begin a consulting engagement?", a: "Click the 'Schedule Executive Workshop' button to set up an initial meeting with our UK enterprise architects." }
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
              <Building className="w-3.5 h-3.5" />
              UK DELIVERY HUB
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              United Kingdom Hub
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Strategic Consulting, Architecture and Enterprise Transformation Services.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Deploy UK solutions architects onshore to design compliant landing zones, audit infrastructure safety, and host executive design workshops.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Schedule Executive Workshop
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. UK PRESENCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">OFFICES</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">UK Presence</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-mono text-rose-500 uppercase tracking-wide font-bold">{office.label}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{office.name}</h4>
                </div>
                <p className="text-sm text-zinc-400 font-bold leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONSULTING SERVICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">PRACTICES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Consulting Services</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Our advisors audit legacy software patterns and design target cloud architectures.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT EXPERIENCE CENTRE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">COLLABORATION</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Client Experience Centre</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((w, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{w.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY COVERAGE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {industries.map((ind, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{ind}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SECTOR ALIGNMENT</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Industry Coverage</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We align systems design with regulations, keeping databases secure and audits compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">SOVEREIGNTY</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Security & Compliance</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityCompliance.map((sc, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{sc.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUCCESS METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">TRACK RECORD</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Success Metrics</h2>
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Reserve a Design Session</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Collaborate with our onshore architects at our London Client Experience Centre.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Schedule Executive Workshop
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
