"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, ServerCog, LineChart, Globe } from "lucide-react";
import Link from "next/link";

const deliveryProcess = [
  { 
    num: "01", 
    step: "Consult", 
    desc: "Audit infrastructure & pipeline bottlenecks.", 
    icon: Lightbulb,
    deliverable: "Bottleneck Analysis & Pipeline Performance Report"
  },
  { 
    num: "02", 
    step: "Design", 
    desc: "Draft landing zones & AI integrations.", 
    icon: PenTool,
    deliverable: "Cloud Native Architecture Blueprint & High-Level Design"
  },
  { 
    num: "03", 
    step: "Build", 
    desc: "Execute core development & CI/CD flows.", 
    icon: Code2,
    deliverable: "Automated Deployment Pipelines & IaC Modules"
  },
  { 
    num: "04", 
    step: "Deploy", 
    desc: "Automate rollouts & security scans.", 
    icon: Rocket,
    deliverable: "Zero-Downtime Releases & DevSecOps Compliance Suite"
  },
  { 
    num: "05", 
    step: "Operate", 
    desc: "Manage infrastructure & ensure uptime.", 
    icon: ServerCog,
    deliverable: "SLA Monitoring, Runbooks & Alert Response System"
  },
  { 
    num: "06", 
    step: "Optimize", 
    desc: "Assess utilization & FinOps spend.", 
    icon: LineChart,
    deliverable: "Monthly Cost-Reduction Audit & Performance Fine-Tuning"
  },
  { 
    num: "07", 
    step: "Scale", 
    desc: "Expand architecture seamlessly.", 
    icon: Globe,
    deliverable: "Multi-Region Redundancy & Elastic Load Scaling Policies"
  }
];

export function WorkflowModel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay step switching
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % deliveryProcess.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoplay]);

  const activeStep = deliveryProcess[activeIdx];

  return (
    <section 
      className="w-full py-20 bg-black text-white relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.012),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Block */}
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
           
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
              Engagement Process
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            A structured, repeatable <br />
            framework for <span className="text-rose-500">digital execution</span>.
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold">
            We operate through a 7-phase engineering lifecycle that guarantees alignment between <Link href="/services/it-consulting" className="text-rose-500 hover:underline">target architecture</Link>, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">deployment security</Link>, and long-term operations scalability.
          </p>
        </Reveal>

        {/* Desktop Connected Timeline Path */}
        <div className="hidden lg:block w-full relative mb-12">
          {/* Main Track connecting line */}
          <div className="absolute left-[5%] right-[5%] top-[27px] h-[1px] bg-zinc-900 z-0">
            {/* Active glowing progress segment */}
            <motion.div 
              className="h-full bg-gradient-to-r from-rose-500 to-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeIdx / (deliveryProcess.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* 7 Horizontal Nodes */}
          <div className="grid grid-cols-7 relative z-10">
            {deliveryProcess.map((item, idx) => {
              const isActive = idx === activeIdx;
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      setActiveIdx(idx);
                      setAutoplay(false);
                    }}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center relative transition-all duration-300 focus:outline-none ${
                      isActive 
                        ? "bg-zinc-950 border-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.35)]" 
                        : "bg-black border-zinc-900 text-zinc-600 hover:border-zinc-800 hover:text-zinc-400"
                    }`}
                  >
                    {/* Inner miniature pulse for active element */}
                    {isActive && (
                      <span className="absolute -inset-0.5 rounded-full border border-rose-500/30 animate-ping pointer-events-none" />
                    )}
                    <StepIcon size={20} className="transition-transform duration-300" />
                  </button>

                  <span 
                    className={`text-[10px] font-bold uppercase tracking-wider mt-4 transition-colors duration-300 ${
                      isActive ? "text-rose-500" : "text-zinc-500"
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Presentation Card (Desktop) */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              {/* Corner soft glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-rose-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Large indicator number */}
                <div className="col-span-2 flex items-center justify-center">
                  <span className="text-7xl font-black font-mono tracking-tighter text-zinc-900 select-none">
                    {activeStep.num}
                  </span>
                </div>

                {/* Details */}
                <div className="col-span-7 flex flex-col justify-center border-l border-zinc-900 pl-8">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                    Phase Description
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {activeStep.step}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold">
                    {activeStep.desc}
                  </p>
                </div>

                {/* Deliverable info card */}
                <div className="col-span-3 bg-zinc-950/80 border border-zinc-900/80 p-5 rounded-xl flex flex-col gap-2 shadow-inner">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-wider block">
                    KEY DELIVERABLE
                  </span>
                  <span className="text-xs font-bold text-zinc-350 leading-relaxed">
                    {activeStep.deliverable}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile/Tablet Connected Timeline View */}
        <div className="lg:hidden flex flex-col gap-6 pt-4 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-6 bottom-6 w-[1px] bg-zinc-900 z-0" />

          {deliveryProcess.map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <Reveal key={item.step} className="w-full relative z-10">
                <div className="flex gap-5 items-start">
                  
                  {/* Circular Node */}
                  <div className="w-14 h-14 shrink-0 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center relative shadow-md">
                    <StepIcon size={18} className="text-rose-500" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-[8px] font-mono font-bold flex items-center justify-center text-zinc-400">
                      {item.num}
                    </span>
                  </div>

                  {/* Card Description */}
                  <div className="flex-1 bg-zinc-950/30 p-5 rounded-xl border border-zinc-900/60 shadow-lg">
                    <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest block mb-1">
                      Step {item.num}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-100 tracking-wide mb-2">
                      {item.step}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-4">
                      {item.desc}
                    </p>
                    
                    <div className="pt-3 border-t border-zinc-900/60 flex flex-col gap-1.5">
                      <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-wider block">
                        Deliverable
                      </span>
                      <span className="text-xs font-bold text-zinc-350 leading-snug">
                        {item.deliverable}
                      </span>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WorkflowModel;
