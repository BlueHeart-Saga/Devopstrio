"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  GraduationCap,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/sections/contact/ContactForm";

export default function PrestivoProductPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);


  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  const features = [
    { title: "Course Management Modules", desc: "Empower schools and training centers with structured course templates and dynamic grading parameters." },
    { title: "Student Telemetry Logs", desc: "Track course progress, module interactions, and event history timestamps in real-time." },
    { title: "Interactive Task Sheets", desc: "Enable digital task uploads with markdown editors and collaborative peer-review pipelines." },
    { title: "Performance Reports", desc: "Aggregate regional training levels, attendance curves, and test score indexes." },
    { title: "Collaborative Class Boards", desc: "Coordinate discussions and manage student groups using card-based swimlanes." },
    { title: "Automated Certificate Issuance", desc: "Trigger blockchain-verifiable digital certificates when course modules are finalized." }
  ];

  const useCases = [
    { title: "K-12 & Higher Education", desc: "Streamline student assignments, course scheduling, and teacher evaluation charts." },
    { title: "Corporate L&D Departments", desc: "Host employee training workshops, track active certificates, and scale learning resources." },
    { title: "Vocational Training Centers", desc: "Manage hands-on curriculum models, student rosters, and industry credential files." }
  ];

  const integrations = ["Google Classroom", "Canvas LMS", "Microsoft Teams", "Zoom API", "Slack", "Moodle"];

  const faqs = [
    { q: "Is there a limit on active student accounts?", a: "No, Prestivo pricing scales with overall server cluster namespaces, allowing support for unlimited student rosters." },
    { q: "Does the platform compile student task logs?", a: "Yes, teachers can review detailed logs of student interactions, file submission timestamps, and feedback history." },
    { q: "Is the platform WCAG 2.1 AA accessible?", a: "Yes. Prestivo is built with accessible markup structures, high-contrast style sheets, and screen-reader support." }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-black border-b border-zinc-900/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal className="mb-4">
                <span className="gap-2 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-blue-500/30 text-blue-400 bg-blue-955/15">
                  <GraduationCap className="w-3.5 h-3.5" />
                  EdTech Platform
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                  Prestivo
                </h1>
                <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-550 mb-6">
                  Learning Management Platform
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mb-8">
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold">
                  Empower schools and training centers with course modules, student logs, task sheets, and grade records in a collaborative learning workspace.
                </p>
                <div className="text-[10px] text-zinc-500 font-mono mt-2">
                  Mirror Domain: <span className="text-blue-400">https://prestivo.devopstrio.co.uk/</span>
                </div>
              </Reveal>
              <Reveal delay={0.3} className="flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg"
                >
                  Learn More
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
              <div className="relative group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-blue-500/20 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-900/60">
                  <Image
                    src="/assets/Home-page/our-products/prestivo.png"
                    alt="Prestivo Application Interface"
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
                THE CHALLENGE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Fragmented Education Workspaces
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
                Schools and corporate training centers struggle to align lesson planning, task sheets, student progress tracking, and grading metrics, wasting significant administrative time.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
                THE SOLUTION
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Unified Learning Management
              </h2>
              <p className="text-zinc-455 text-xs md:text-sm font-bold leading-relaxed">
                Prestivo unifies lesson modules, submission portals, and telemetry dashboards under a single web workspace. Manage student pathways and print verifiable certificates with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Platform Features
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-blue-500/10 rounded-3xl transition-colors duration-300">
                <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-500" />
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
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
              SECTOR FIT
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Industry Use Cases
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-blue-500/10 transition-colors">
                <h4 className="text-base font-bold text-white mb-3 tracking-wide">{uc.title}</h4>
                <p className="text-xs md:text-sm text-zinc-405 font-bold leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations & Compliance */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
                INTEGRATED STACK
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Connected Systems
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed mb-8">
                Prestivo integrates directly with existing education databases, online meeting tools, and discussion channels.
              </p>
              <div className="flex flex-wrap gap-3">
                {integrations.map((item) => (
                  <span key={item} className="px-4 py-2 bg-zinc-950 border border-zinc-900 text-xs font-mono text-zinc-355 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
                SECURITY & PRIVACY
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                COPPA & FERPA Compliant
              </h2>
              <p className="text-zinc-455 text-xs md:text-sm font-bold leading-relaxed">
                We implement isolated database storage protocols and strict encryption frameworks to guarantee full privacy protection for school student records and activities logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Testimonial */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-3 block">
            PRICING MODEL
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Bespoke Enterprise Pricing
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-12 max-w-md mx-auto">
            Plans are based on active department size or student enrollment capacity ranges. Contact sales for quotes.
          </p>
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-3xl text-left inline-block w-full max-w-xl">
            <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest block mb-2 font-bold">Representative Case Study</span>
            <p className="text-xs md:text-sm text-zinc-300 italic mb-4 font-medium">
              &quot;Prestivo transformed our lesson workflows. We centralized module planning, task logs, and course certificates generation onto one responsive system.&quot;
            </p>
            <div className="text-xs font-bold text-white font-mono">— Dean of Digital Curriculum, Regional Academy</div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white">
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
                    <div className="text-zinc-500 group-hover:text-blue-500 transition-colors ml-4 flex-shrink-0">
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
      <ContactForm />
    </main>
  );
}
