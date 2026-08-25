"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Users,
  Target,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
  Zap,
  BookOpen,
  Award,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function EngineeringCulturePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const principles = [
    { title: "Ownership Mindset", desc: "Engineers own their code from local development through to production monitoring." },
    { title: "Customer First", desc: "Every architecture decision starts with the impact on the end-user experience." },
    { title: "Automation First", desc: "If a task is done manually more than twice, we write a script to automate it." },
    { title: "Security First", desc: "Security is shifted left, integrating vulnerability scans directly into developer IDEs." },
    { title: "Continuous Improvement", desc: "We host blameless post-mortems to learn from every production incident." }
  ];

  const values = [
    { title: "Transparency", desc: "Open architecture reviews and public design documents across the engineering org." },
    { title: "Collaboration", desc: "Pair programming and cross-functional guilds eliminate knowledge silos." },
    { title: "Innovation", desc: "Dedicated hackathons and 10% time allocated for researching new frameworks." },
    { title: "Reliability", desc: "A relentless focus on building resilient, fault-tolerant software systems." }
  ];

  const waysOfWorking = [
    "Agile Delivery with two-week iterative sprint cycles",
    "Scrum frameworks for complex product development",
    "Kanban for continuous flow in SRE and operational teams",
    "DevOps culture blurring the line between software creation and deployment",
    "Product Teams structured around business domains, not technical layers"
  ];

  const learningPrograms = [
    { title: "Internal Training", desc: "Weekly lunch-and-learns covering new cloud features and coding patterns." },
    { title: "Certification Programs", desc: "Fully funded pathways for AWS, Azure, GCP, and Kubernetes certifications." },
    { title: "Innovation Days", desc: "Quarterly two-day events focused entirely on prototyping wild ideas." },
    { title: "Technical Communities", desc: "Internal forums discussing everything from Rust concurrency to CSS grids." }
  ];

  const communityInitiatives = [
    { title: "Engineering Guilds", desc: "Cross-team groups focused on specific disciplines like frontend, data, or security." },
    { title: "Tech Talks", desc: "Monthly company-wide broadcasts where engineers showcase complex problem solutions." },
    { title: "Hackathons", desc: "Annual competitive events driving rapid prototyping of internal developer tools." },
    { title: "Mentorship", desc: "Structured programs pairing junior developers with senior staff engineers." }
  ];

  const metrics = [
    { value: "4.8x", label: "Developer Productivity Increase" },
    { value: "300%", label: "Release Velocity Boost" },
    { value: "Top 5%", label: "Industry Innovation Index" }
  ];

  const faqs = [
    { q: "What does the 'Ownership Mindset' entail?", a: "It means engineers are responsible for the full lifecycle of their features, including writing tests, configuring pipelines, and monitoring production health." },
    { q: "How do you handle production failures?", a: "We conduct blameless post-mortems. We believe failures are system issues, not people issues, and focus on improving automated guardrails." },
    { q: "What is the typical team structure?", a: "We use autonomous, cross-functional product teams (squads) consisting of product managers, designers, frontend, backend, and QA engineers." },
    { q: "Do you support remote engineering work?", a: "Yes, our engineering culture is remote-first, utilizing asynchronous communication and comprehensive documentation." },
    { q: "How do engineering guilds work?", a: "Guilds are voluntary communities of interest (e.g., the React Guild or Go Guild) that meet regularly to share knowledge and set technical standards." },
    { q: "What are your core programming languages?", a: "We primarily use TypeScript, Go, Python, and Rust, choosing the right tool for the specific domain problem." },
    { q: "How is performance evaluated?", a: "Performance is evaluated based on impact, collaboration, and adherence to our core engineering values, rather than just lines of code written." },
    { q: "Do you contribute to open source?", a: "Yes, we actively encourage engineers to contribute back to the open-source libraries we utilize, and we sponsor several key projects." },
    { q: "What is your onboarding process like?", a: "New engineers go through a comprehensive bootcamp covering our architecture, deployment pipelines, and security standards before joining their product team." },
    { q: "How do I apply for an engineering role?", a: "Click the 'Join Our Engineering Team' button below to view our open positions on the careers portal." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#a855f7", "#f43f5e", "#f59e0b"]}
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering Culture
            </span>
          </>
        }
        subtitle="Creating an environment where innovation, ownership and continuous learning thrive. We build software differently. Our engineering culture empowers autonomous teams, mandates ruthless automation, and fosters a community of deep technical mastery."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "ENGINEERING CULTURE" }
        ]}
      >
        <Link
          href="/contact#contact-form"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Consult Architects
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>

      {/* 2. ENGINEERING PRINCIPLES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CORE TENETS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Principles</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Target className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{principle.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING VALUES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">BELIEFS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Values</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                </div>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WAYS OF WORKING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">EXECUTION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Ways of Working</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We organize around products, utilizing agile methodologies to deliver continuous value.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {waysOfWorking.map((way, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{way}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEARNING & GROWTH */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVELOPMENT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Learning & Growth</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPrograms.map((program, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-5 h-5 text-rose-500" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{program.title}</h4>
                <p className="text-sm text-zinc-400 font-bold leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING COMMUNITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:order-2">
              {communityInitiatives.map((comm, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <h4 className="text-base font-bold text-white mb-2">{comm.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{comm.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CONNECTION</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Community</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We break down silos by building vibrant internal networks where knowledge flows freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING IMPACT METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">RESULTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Impact Metrics</h2>
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
              Everything you need to know about our Engineering Culture. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
              <p className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Join Our Engineering Team</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            We are always looking for passionate engineers who align with our culture of ownership and excellence.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            View Open Positions
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
