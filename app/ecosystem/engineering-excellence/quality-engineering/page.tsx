"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  TestTube2,
  CheckSquare,
  Gauge,
  Workflow,
  Sparkles,
  TrendingUp,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function QualityEngineeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const qualityFramework = [
    { title: "Functional Testing", desc: "Validating that the software strictly adheres to its business requirements and expected user journeys." },
    { title: "Performance Testing", desc: "Analyzing how the system behaves under varying traffic loads to prevent outages during peak events." },
    { title: "Security Testing", desc: "Identifying vulnerabilities and logic flaws through automated exploitation simulations." }
  ];

  const automatedTesting = [
    { title: "Unit Testing", desc: "Isolating and validating individual functions to guarantee low-level logic accuracy." },
    { title: "Integration Testing", desc: "Verifying that microservices and databases interact flawlessly across API boundaries." },
    { title: "E2E Testing", desc: "Simulating real users clicking through the browser to test the full production-like application stack." }
  ];

  const performanceEng = [
    { title: "Load Testing", desc: "Executing thousands of concurrent requests to evaluate system latency under expected traffic." },
    { title: "Stress Testing", desc: "Pushing the system beyond its normal limits to identify breaking points and database bottlenecks." },
    { title: "Scalability Testing", desc: "Ensuring Kubernetes autoscalers and cloud load balancers react efficiently to sudden traffic spikes." }
  ];

  const automationPlatform = [
    { title: "Playwright & Cypress", desc: "Lightning-fast, headless browser automation frameworks used for UI and end-to-end scenarios." },
    { title: "Selenium", desc: "Legacy browser compatibility testing across hundreds of different device and OS combinations." },
    { title: "K6 by Grafana", desc: "Writing load tests in JavaScript to simulate massive API traffic directly from CI/CD pipelines." }
  ];

  const continuousQuality = [
    "CI/CD Quality Gates automatically rejecting pull requests if test coverage drops below 90%",
    "Code Quality analysis utilizing SonarQube to flag 'code smells' and enforce maintainability",
    "Continuous Coverage Analysis tracking untested lines of code across massive monorepos"
  ];

  const qualityMetrics = [
    { step: "Defect Density", desc: "Bugs per 1k lines of code" },
    { step: "Coverage", desc: "Total tested codebase %" },
    { step: "Release Quality", desc: "Escaped defect rates" }
  ];

  const successStories = [
    { title: "Zero Escaped Defects", desc: "For a national banking client, we implemented a Playwright test suite that caught 100% of critical regressions before release." },
    { title: "400% Faster QA Cycles", desc: "By replacing manual click-testing with Cypress, a retail platform accelerated their release cadence from monthly to weekly." },
    { title: "Surviving Peak Loads", desc: "Using k6, we simulated 50k concurrent ticket buyers for a live events platform, identifying a database lock flaw prior to launch." }
  ];

  const faqs = [
    { q: "Is manual testing obsolete?", a: "Not entirely. While we automate functional and regression testing, exploratory manual testing is still valuable for discovering unpredictable edge cases and UX flaws." },
    { q: "What is a 'Quality Gate'?", a: "A Quality Gate is a strict automated rule in your deployment pipeline. If the code fails tests, drops test coverage, or contains critical bugs, the gate closes and blocks the deployment." },
    { q: "Why do you prefer Playwright over older frameworks?", a: "Playwright offers auto-waiting, runs tests across all modern browsers simultaneously, and is significantly faster and less 'flaky' than older frameworks." },
    { q: "Who writes the automated tests?", a: "Quality is everyone's responsibility. Developers write unit and integration tests, while Quality Engineers (SDETs) build the E2E frameworks and complex performance scripts." },
    { q: "How do you test microservices independently?", a: "We use 'Contract Testing' (like Pact). It ensures that the API consumer and API provider agree on the data format without having to spin up the entire system." },
    { q: "What is K6?", a: "K6 is an open-source load testing tool built by Grafana. It allows engineers to write load tests in JavaScript, making it easy to integrate into standard development workflows." },
    { q: "How do you achieve high test coverage?", a: "By making it a cultural mandate. We integrate coverage tools (like Istanbul or JaCoCo) into CI, ensuring no code is merged unless it includes accompanying tests." },
    { q: "What is an 'Escaped Defect'?", a: "An escaped defect is a bug that bypasses all testing environments and makes it into production. Tracking this metric is the ultimate measure of QA effectiveness." },
    { q: "Do you offer 'QA as a Service'?", a: "Yes, our Quality Engineering teams can augment your existing developers, building the automation frameworks you need to accelerate delivery." },
    { q: "How do we get started?", a: "Click 'Deliver With Confidence' below to schedule an assessment of your current test automation coverage." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="TEST AUTOMATION"
        lightfall={true}
        lightfallColors={["#3b82f6", "#10b981", "#f43f5e"]}
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Quality Engineering
            </span>
          </>
        }
        subtitle="Delivering Reliable Software Through Automated Quality Assurance. We shift testing left, replacing manual QA with robust, automated pipelines. From unit tests to massive load simulations, we ensure absolute confidence in every release."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "QUALITY ENGINEERING" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>

      {/* 2. QUALITY FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FOUNDATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Quality Framework</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityFramework.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <CheckSquare className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTOMATED TESTING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TESTING PYRAMID</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Automated Testing</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We build the testing pyramid from the ground up, ensuring rapid feedback loops during the development phase.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {automatedTesting.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:order-2">
              {performanceEng.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Gauge className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">RELIABILITY</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Performance Engineering</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We simulate thousands of concurrent users to uncover memory leaks and database locks before your customers do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEST AUTOMATION PLATFORM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOOLING</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Test Automation Platform</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationPlatform.map((tool, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Cpu className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{tool.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTINUOUS QUALITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">GATES</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Continuous Quality</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Testing is not a phase; it's a continuous process integrated directly into your deployment pipelines.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {continuousQuality.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUALITY METRICS DASHBOARD */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TRACKING</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Quality Metrics Dashboard</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {qualityMetrics.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center w-[180px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-rose-500 mb-4" />
                <h4 className="text-base font-bold text-white mb-2">{stage.step}</h4>
                <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS STORIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OUTCOMES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Success Stories</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{story.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{story.desc}</p>
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
              Everything you need to know about Quality Engineering. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Deliver With Confidence</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Eliminate manual QA delays by partnering with our SDETs to build bulletproof test automation frameworks.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Automate Quality Assurance
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
