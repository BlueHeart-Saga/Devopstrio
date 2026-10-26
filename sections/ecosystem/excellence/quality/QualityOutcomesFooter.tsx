"use client";

import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
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
      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Guarantee Flawless Releases with"
        ctaHighlight="Quality Engineering"
        ctaDesc="Accelerate releases with automated end-to-end testing, shift-left QA, synthetic load generation, and zero-defect deployments."
        ctaBtnText="START QA ASSESSMENT"
        backLink="/ecosystem/engineering-excellence"
      />
    </>
  );
}
