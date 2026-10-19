"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Plus, Minus, Bot, Zap, Gauge, ShieldCheck, Cpu, Repeat, CheckCircle2, Layers } from "lucide-react";
import Link from "next/link";

export function QualityOutcomesFooter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { category: "UI Test Automation", items: ["Playwright", "Cypress", "Selenium", "Appium"] },
    { category: "API & Contract Testing", items: ["Postman", "Pact", "RestAssured", "Karate"] },
    { category: "Performance & Load", items: ["K6", "JMeter", "Gatling", "Locust"] },
    { category: "AI & Visual Testing", items: ["Applitools", "Percy", "ReportPortal", "Testim"] },
    { category: "Quality & Security Gates", items: ["SonarQube", "Snyk", "Checkmarx", "DefectDojo"] }
  ];

  const businessOutcomes = [
    { title: "90%", metric: "Automated Regression Coverage", desc: "Replace slow manual test cycles with parallelized automated pipelines." },
    { title: "80%", metric: "Reduction in Production Bugs", desc: "Catch defects early in dev builds before they impact end users." },
    { title: "5x", metric: "Faster Release Velocity", desc: "Confidently deploy code multiple times per day with zero quality degradation." },
    { title: "Zero", metric: "Performance Regressions", desc: "Automated load benchmarking ensuring every release meets strict SLA response times." },
    { title: "AI-Powered", metric: "Self-Healing Suites", desc: "Drastically reduce test script maintenance overhead using adaptive locators." },
    { title: "100%", metric: "Audit & Compliance Gate", desc: "Automated quality reports and code coverage metrics for enterprise governance." }
  ];

  const whyChooseUs = [
    { title: "Shift-Left Automation Mastery", icon: Zap },
    { title: "AI-Powered Self-Healing Frameworks", icon: Cpu },
    { title: "High-Concurrency Load Testing", icon: Gauge },
    { title: "API Contract Verification", icon: Repeat },
    { title: "Cross-Browser & Mobile Automation", icon: Bot },
    { title: "DevSecOps Security Integration", icon: ShieldCheck },
    { title: "Parallelized CI/CD Test Pipelines", icon: Layers },
    { title: "Enterprise Quality Governance", icon: CheckCircle2 }
  ];

  const faqs = [
    { q: "What is Quality Engineering?", a: "Quality Engineering is a proactive discipline that integrates automated testing, quality standards, and continuous validation directly into the software development lifecycle rather than testing as an isolated phase." },
    { q: "How does Shift-Left testing work?", a: "Shift-Left testing moves validation activities earlier in the development lifecycle (e.g. static analysis, unit tests, and API contracts in developer IDEs) to catch defects when they are cheapest to fix." },
    { q: "Why Playwright over Selenium?", a: "Playwright offers native cross-browser support, auto-waiting locators, faster parallel execution, and modern developer tooling compared to legacy Selenium setups." },
    { q: "What is Contract Testing?", a: "Contract testing (using tools like Pact) verifies that microservices can communicate with each other using agreed-upon API specifications without requiring full end-to-end integration environments." },
    { q: "How does AI enhance Quality Engineering?", a: "AI automates test script generation, uses self-healing locators to prevent broken tests when UI changes occur, and performs visual diff inspections." },
    { q: "Can Quality Engineering integrate with CI/CD?", a: "Yes. All test suites are structured to execute automatically on GitHub Actions, Azure DevOps, or GitLab CI PR builds, blocking merges if tests fail." },
    { q: "Do you handle mobile app test automation?", a: "Yes. We use Appium and XCUI/Espresso to automate native iOS and Android application testing across cloud device farms." },
    { q: "How do we get started with Devopstrio Quality Engineering?", a: "Schedule a QE Assessment. We'll audit your current test coverage, release bottlenecks, and design a tailored test automation strategy." }
  ];

  return (
    <>
      {/* 10. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">ECOSYSTEM</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Quality Engineering Tech Stack
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-2xl">
                <h4 className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-amber-400 mb-6 border-b border-zinc-900 pb-4">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {stack.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-900 text-zinc-200 rounded-md text-xs md:text-sm font-medium border border-zinc-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BUSINESS OUTCOMES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">IMPACT & ROI</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Measurable Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/80 border border-zinc-900 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />
                <span className="text-xs md:text-sm font-mono text-amber-400 font-bold uppercase tracking-widest block mb-2">{item.title}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{item.metric}</h3>
                <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY DEVOPSTRIO QUALITY ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">ADVANTAGE</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Why Devopstrio Quality Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-amber-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                    <Icon className="w-6 h-6 text-zinc-300 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Questions about <span className="text-white font-extrabold bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Quality Engineering</span>.
            </h2>
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
                    <div className="text-zinc-400 group-hover:text-amber-400 transition-colors ml-4 flex-shrink-0">
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

      {/* 14. CTA */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Guarantee Software Quality with Devopstrio</h2>
          <p className="text-zinc-300 text-base md:text-lg font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with Devopstrio to build modern test automation, shift quality left, and release bug-free software at enterprise speed.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-white text-black font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
            >
              Schedule a Quality Assessment
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-transparent border border-white/20 text-white font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Talk to a QE Architect
              <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
