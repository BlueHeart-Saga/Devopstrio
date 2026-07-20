"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Bot,
  Terminal,
  Layers,
  ShieldCheck,
  Cpu,
  Gauge,
  LineChart,
  Repeat,
  CheckCircle2,
  FileCode,
  Flame,
  Search,
  Sliders,
  Sparkles
} from "lucide-react";

export function QualityPerformanceAI() {
  const frameworkCards = [
    { name: "Playwright", desc: "Cross-browser end-to-end web testing with ultra-fast execution." },
    { name: "Cypress", desc: "Modern developer-friendly component and integration test framework." },
    { name: "Selenium Grid", desc: "Enterprise legacy browser test execution at scale." },
    { name: "K6 & JMeter", desc: "Developer-centric load and performance benchmarking tools." },
    { name: "Pact Contract Testing", desc: "Consumer-driven contract testing for microservices." },
    { name: "Appium Mobile", desc: "Automated iOS and Android native app testing framework." }
  ];

  const perfCards = [
    { title: "Load & Stress Testing", icon: Flame },
    { title: "Concurrency Testing", icon: Gauge },
    { title: "Spike & Endurance Testing", icon: LineChart },
    { title: "API Bottleneck Tuning", icon: Sliders }
  ];

  const aiCapabilities = [
    { title: "Self-Healing Test Scripts", desc: "AI locators dynamically adapt to UI DOM modifications.", icon: Sparkles },
    { title: "Automated Test Case Gen", desc: "LLMs generating test scenarios directly from user stories.", icon: Cpu },
    { title: "Predictive Defect Analytics", desc: "Identifying high-risk code modules requiring extra testing.", icon: Search },
    { title: "Visual Regression AI", desc: "Pixel-perfect visual diff inspection across device viewports.", icon: Bot }
  ];

  return (
    <>
      {/* 7. TEST AUTOMATION FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FRAMEWORKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Modern Test Automation Stack
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkCards.map((fw, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/60 border border-zinc-900 rounded-2xl hover:border-rose-500/40 transition-colors">
                <span className="text-[10px] font-mono font-bold text-rose-500 uppercase tracking-widest block mb-2">FRAMEWORK 0{idx + 1}</span>
                <h3 className="text-lg font-bold text-white mb-3">{fw.name}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{fw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PERFORMANCE & RELIABILITY TESTING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PERFORMANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Performance & Reliability Testing
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perfCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-rose-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-rose-500 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. AI-POWERED QUALITY ENGINEERING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">INNOVATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              AI-Powered Quality Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-rose-500 mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
