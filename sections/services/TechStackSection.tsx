"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  {
    category: "Front-end",
    desc: "We construct reactive, accessible, and fast web portals using modern javascript frameworks.",
    techs: [
      { name: "React / Next.js", desc: "For dynamic server-rendered UI and static generation." },
      { name: "Angular", desc: "For structured, typed, enterprise dashboard development." },
      { name: "Vue.js", desc: "For lightweight, highly reactive frontend components." },
      { name: "Tailwind CSS", desc: "For modular, performant, design-system-aligned styles." }
    ]
  },
  {
    category: "Back-end",
    desc: "Robust pipelines and microservices that support concurrent requests with zero latency.",
    techs: [
      { name: "Node.js / TypeScript", desc: "Highly customizable api setups and integration hooks." },
      { name: "Go (Golang)", desc: "Concurrent microservices with minimal resource footprint." },
      { name: "Rust", desc: "Memory-safe, high-speed execution engines for critical runtimes." },
      { name: "Python", desc: "Data processing backends, ML evaluations, and model loaders." }
    ]
  },
  {
    category: "Mobile",
    desc: "Fully functional native apps designed for iOS and Android platforms.",
    techs: [
      { name: "Swift / iOS", desc: "Native Apple experience with optimized memory workflows." },
      { name: "Kotlin / Android", desc: "Clean native Android setups following Jetpack practices." },
      { name: "React Native", desc: "Cross-platform mobile applications with shared JavaScript codebases." },
      { name: "Flutter", desc: "High-performance compilations with custom pixel controls." }
    ]
  },
  {
    category: "Database & Cloud",
    desc: "Highly available database systems and automated scaling cloud structures.",
    techs: [
      { name: "PostgreSQL", desc: "Relational integrity, custom JSON scaling, and security." },
      { name: "Redis", desc: "In-memory cache pipelines and session management grids." },
      { name: "AWS / Azure / GCP", desc: "Automated scaling environments with multi-region replication." },
      { name: "Kubernetes & Docker", desc: "Container orchestrations and zero-downtime rolling deploys." }
    ]
  }
];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          
          {/* Left panel: Tab select */}
          <Reveal className="text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                TECHNOLOGY ECOSYSTEM
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
              Our engineering <span className="font-semibold text-rose-500">tech stack</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8 max-w-sm">
              We align our technology choices with enterprise security requirements, scalability, and developer experience.
            </p>

            <div className="flex flex-col gap-2">
              {techStack.map((tab, idx) => (
                <button
                  key={tab.category}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-zinc-900 border border-zinc-800 text-rose-500 pl-6"
                      : "text-zinc-400 border border-transparent hover:text-zinc-200 hover:bg-zinc-950/20"
                  }`}
                >
                  {tab.category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Right panel: Active tab content */}
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-8 min-h-[380px] flex flex-col justify-between">
            <Reveal key={activeTab}>
              <div className="mb-6">
                <span className="text-[10px] font-mono text-zinc-650 uppercase tracking-widest block mb-2">Practice Overview</span>
                <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-light">
                  {techStack[activeTab].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-zinc-900">
                {techStack[activeTab].techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col text-left">
                    <strong className="text-xs font-semibold text-zinc-100 mb-1">
                      {tech.name}
                    </strong>
                    <span className="text-[10px] text-zinc-500 leading-normal font-light">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 text-left">
              <span className="text-[9px] font-mono text-zinc-600 block">
                * All stacks are aligned with standard SOC-2 and HIPAA vulnerability patch cycles.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
