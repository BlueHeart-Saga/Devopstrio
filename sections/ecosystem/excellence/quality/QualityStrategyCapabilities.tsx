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
    { tier: "UI & End-to-End Tests", ratio: "10%", desc: "Playwright / Cypress user flow validation", color: "border-amber-500/40 bg-amber-950/20 text-amber-300" },
    { tier: "Integration & API Tests", ratio: "20%", desc: "Contract testing, Postman, Pact, REST APIs", color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { tier: "Component & Contract Tests", ratio: "30%", desc: "Component isolated testing & service mocks", color: "border-zinc-800 bg-zinc-900/60 text-zinc-300" },
    { tier: "Unit Tests & Static Analysis", ratio: "40%", desc: "Fast developer unit tests, Jest, SonarQube", color: "border-zinc-800 bg-zinc-950 text-zinc-400" }
  ];

  return (
    <>
      {/* 4. QUALITY ENGINEERING LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">LIFECYCLE</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Quality Engineering Lifecycle
            </h2>
          </Reveal>

          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>

            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {qePhases.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[130px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] mb-4"></div>
                  <span className="text-xs font-bold text-amber-400 tracking-wider mb-2">PHASE 0{idx + 1}</span>
                  <span className="text-sm md:text-base font-semibold text-zinc-200 text-center">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE QUALITY CAPABILITIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">CAPABILITIES</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Core Quality Engineering Capabilities
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed font-medium">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SHIFT-LEFT TESTING STRATEGY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">STRATEGY</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Shift-Left Automation Pyramid
            </h2>
            
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {testingPyramid.map((tier, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${tier.color}`}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">{tier.tier} ({tier.ratio})</span>
                  <h4 className="text-base font-bold text-white">{tier.desc}</h4>
                </div>
                <span className="text-xs md:text-sm font-mono text-amber-400 font-bold">LEVEL 0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
