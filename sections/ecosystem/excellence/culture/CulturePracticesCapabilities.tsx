"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Users,
  Compass,
  RefreshCw,
  Sparkles,
  Zap,
  FileText,
  HeartHandshake,
  Terminal
} from "lucide-react";

export function CulturePracticesCapabilities() {
  const practices = [
    { title: "Autonomous Squads", icon: Users, desc: "Cross-functional pods with product managers, UX designers, and full-stack engineers driving rapid outcomes." },
    { title: "Engineering Guilds", icon: Compass, desc: "Voluntary cross-pod communities around Frontend, Cloud, AI, Security, and SRE sharing knowledge." },
    { title: "Blameless Post-Mortems", icon: RefreshCw, desc: "Outages trigger root cause reviews with zero finger-pointing to fix systems, guardrails, and automated tests." },
    { title: "Golden Path Templates", icon: Sparkles, desc: "Pre-paved developer templates so engineers can spin up services and environments in minutes without friction." },
    { title: "Hackathons & Innovation Days", icon: Zap, desc: "Quarterly 48-hour sprints to build moonshot projects, experimental LLMs, and internal developer tools." },
    { title: "Technical RFC Process", icon: FileText, desc: "Architecture proposals reviewed asynchronously with input from all seniority levels before code is written." },
    { title: "Peer Mentorship & Coaching", icon: HeartHandshake, desc: "1-on-1 coaching pairing staff architects with emerging engineering talent for sustained technical growth." },
    { title: "Open Source Stewardship", icon: Terminal, desc: "Encouraging engineers to contribute upstream to the OSS packages, Kubernetes charts, and tools we rely upon." }
  ];

  const agileCadence = [
    { title: "2-Week Sprints", desc: "Short, focused release cycles with clear business deliverables." },
    { title: "Async Standups", desc: "Written daily updates in Slack/Teams to protect deep uninterrupted focus." },
    { title: "Bi-Weekly Demo Days", desc: "Squads showcase working software live to the entire organization." },
    { title: "Architecture Guilds", desc: "Weekly open sessions reviewing cross-system design decisions." }
  ];

  return (
    <>
      {/* 5. CORE CULTURAL PRACTICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">PRACTICES</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Core Cultural Practices
            </h2>
            
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm md:text-[15px] text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING CADENCE */}
      <section className="w-full py-20 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-950/80 border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {agileCadence.map((cadence, idx) => (
                <div key={idx} className="border-l-2 border-rose-500/40 pl-4">
                  <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block mb-1">RITUAL 0{idx + 1}</span>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">{cadence.title}</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">{cadence.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
