"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Target, Bot, Users, Award, Shield, Sparkles, Heart, Rocket } from "lucide-react";
import Link from "next/link";

export function CultureOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cultureMetrics = [
    { title: "Developer", metric: "Velocity 4.8x", desc: "Autonomous squads deliver software updates nearly 5 times faster with zero deployment drama." },
    { title: "Team", metric: "Retention 92%", desc: "High psychological safety, career growth, and autonomy create industry-leading staff tenure." },
    { title: "Fast", metric: "< 15 Min Onboarding", desc: "Golden paths and containerized dev environments get new engineers to their first commit on Day 1." },
    { title: "Ruthless", metric: "Automation First", desc: "Over 80% of routine verification, linting, packaging, and deployments run on autopilot." },
    { title: "Blameless", metric: "Post-Mortems", desc: "Outages lead to systemic safeguards, automated test fixtures, and zero individual finger-pointing." },
    { title: "Enterprise", metric: "Top 5% Innovation", desc: "Hackathon prototypes and 10% innovation time regularly transition into core production offerings." }
  ];

  const whyChooseCulture = [
    { title: "Freedom to Experiment", icon: Sparkles },
    { title: "Zero Bureaucracy", icon: Bot },
    { title: "Deep Work Focus", icon: Target },
    { title: "Inclusive Meritocracy", icon: Users },
    { title: "Modern Tech Ecosystem", icon: Rocket },
    { title: "Continuous Mentorship", icon: Award },
    { title: "Psychological Safety", icon: Shield },
    { title: "Global Collaborative Pods", icon: Heart }
  ];

  const faqs = [
    {
      q: "What does the 'Ownership Mindset' mean at Devopstrio?",
      a: "It means engineering pods have end-to-end responsibility for their features. From architectural design and code writing to CI/CD pipeline automation and live production telemetry, engineers own their outcomes."
    },
    {
      q: "How do you conduct blameless post-mortems?",
      a: "When a production incident occurs, we assume everyone acted with the best information available. We analyze system triggers, race conditions, and telemetry gaps to build automated safety nets so the same failure can never happen again."
    },
    {
      q: "How are engineering squads structured?",
      a: "Squads are autonomous, cross-functional units (typically 5 to 8 engineers) paired with a dedicated product owner and design specialist. Squads set their sprint commitments independently."
    },
    {
      q: "Do you support remote and asynchronous engineering?",
      a: "Yes. Our engineering culture is remote-native and async-first. We prioritize high-context written documentation (RFCs, pull request descriptions, architecture decision records) over unnecessary synchronous meetings."
    },
    {
      q: "How does 10% Innovation Time work?",
      a: "Engineers are empowered to spend dedicated sprint time researching new frameworks, building internal developer tools, contributing to open-source libraries, or exploring agentic AI workflows."
    },
    {
      q: "What tech stack does Devopstrio focus on?",
      a: "We engineer primarily in TypeScript/Node.js, Go, Python, and C# (.NET) across AWS, Microsoft Azure, Google Cloud, and Kubernetes environments, always picking the best tool for the specific problem domain."
    },
    {
      q: "How does the Technical RFC process work?",
      a: "Before building complex distributed systems, engineers draft an open RFC outlining the problem, architecture trade-offs, and security impacts. Any engineer in the company can review, ask questions, and contribute feedback."
    },
    {
      q: "How do I apply to join the engineering team?",
      a: "You can explore all open positions on our Careers page. We look for passionate builders who value clean code, deep curiosity, and collaborative problem-solving."
    }
  ];

  return (
    <>
      {/* 9. CULTURE OUTCOMES & METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">OUTCOMES</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Measurable Engineering Impact
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureMetrics.map((card, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/60 border border-zinc-900/80 rounded-2xl hover:border-rose-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs md:text-sm font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-2">{card.title}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-rose-500 tracking-tight mb-4 font-mono">{card.metric}</h3>
                </div>
                <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE OUR CULTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">WHY DEVOPSTRIO</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Why Engineers Choose Devopstrio
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {whyChooseCulture.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="faq" className="w-full py-20 md:py-28 bg-black text-white relative border-b border-zinc-900/60 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-extrabold bg-gradient-to-r from-red-650 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Everything you need to know about Devopstrio&apos;s engineering culture, squad structure, and ways of working.
            </p>
          </Reveal>

          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-base md:text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-400 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <div className={`mt-4 text-sm md:text-base text-zinc-300 leading-relaxed font-medium max-w-3xl flex flex-col gap-4 ${isOpen ? "block animate-fadeIn" : "hidden"}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="w-full py-28 bg-[#030303] text-center relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Build With a Team That Puts Engineering First
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            Experience what happens when talented engineers are given the autonomy, tools, and psychological safety to build transformative software.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-white text-black font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              View Engineering Roles
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-transparent border border-white/20 text-white font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Talk to Our Team
              <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
