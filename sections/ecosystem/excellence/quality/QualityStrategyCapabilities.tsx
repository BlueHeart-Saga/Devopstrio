"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Bot,
  Zap,
  Gauge,
  ShieldCheck,
  Cpu,
  Repeat,
  CheckCircle2,
  Layers,
  ArrowRight,
  Terminal,
  FileCode,
  CheckSquare,
  Network
} from "lucide-react";

export function QualityStrategyCapabilities() {
  const qePhases = [
    "Requirements Review",
    "Test Planning",
    "Shift-Left Unit Tests",
    "API & Contract Testing",
    "UI Automation",
    "Performance Load",
    "Security Gates",
    "Continuous Telemetry"
  ];

  const capabilities = [
    { title: "Test Automation Frameworks", desc: "Building modular, maintainable Playwright, Cypress, and Selenium frameworks.", icon: Bot },
    { title: "Shift-Left Testing", desc: "Embedding unit and integration tests directly in developer Git workflows.", icon: Zap },
    { title: "API & Microservices Testing", desc: "Contract testing with Pact and REST/gRPC test automation with Postman.", icon: Network },
    { title: "Performance & Load Testing", desc: "JMeter and K6 benchmarking to simulate high concurrent user spikes.", icon: Gauge },
    { title: "Continuous Integration Testing", desc: "Parallelized test executions integrated into GitHub Actions & Azure DevOps.", icon: Repeat },
    { title: "AI Test Automation", desc: "Self-healing locators and automated test script generation using AI.", icon: Cpu },
    { title: "Security & Vulnerability Scans", desc: "DAST & SAST test automation catching OWASP vulnerabilities early.", icon: ShieldCheck },
    { title: "Quality Metrics & Reporting", desc: "Real-time dashboard reporting test pass rates and code coverage.", icon: CheckCircle2 }
  ];

  const testingPyramid = [
    { tier: "UI & End-to-End Tests", ratio: "10%", desc: "Playwright / Cypress user flow validation", color: "border-rose-500/40 bg-rose-950/20 text-rose-300" },
    { tier: "Integration & API Tests", ratio: "20%", desc: "Contract testing, Postman, Pact, REST APIs", color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { tier: "Component & Contract Tests", ratio: "30%", desc: "Component isolated testing & service mocks", color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { tier: "Unit Tests & Static Analysis", ratio: "40%", desc: "Fast developer unit tests, Jest, SonarQube", color: "border-zinc-800 bg-zinc-950 text-zinc-400" }
  ];

  return (
    <>
      {/* 4. QUALITY ENGINEERING LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Quality Engineering Lifecycle
            </h2>
          </Reveal>

          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-600 via-rose-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>

            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {qePhases.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[130px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)] mb-4"></div>
                  <span className="text-[10px] font-bold text-rose-500 tracking-wider mb-2">PHASE 0{idx + 1}</span>
                  <span className="text-xs md:text-sm font-semibold text-zinc-300 text-center">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE QUALITY CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Core Quality Engineering Capabilities
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SHIFT-LEFT TESTING STRATEGY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">STRATEGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Shift-Left Automation Pyramid
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Structuring test automation for fast execution speed, high reliability, and minimal maintenance overhead.
            </p>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {testingPyramid.map((tier, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${tier.color}`}>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">{tier.tier} ({tier.ratio})</span>
                  <h4 className="text-sm font-bold text-white">{tier.desc}</h4>
                </div>
                <span className="text-xs font-mono text-rose-500 font-bold">LEVEL 0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
