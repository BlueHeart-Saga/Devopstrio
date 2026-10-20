"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
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
      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Foster an Engineering-First"
        ctaHighlight="Delivery Culture"
        ctaDesc="Transform organizational mindset with blameless postmortems, continuous experimentation, and autonomous engineering pods."
        ctaBtnText="JOIN OUR CULTURE"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
