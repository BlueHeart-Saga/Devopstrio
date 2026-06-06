"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CompanyIntro() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
        
        {/* Intro Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                About Devopstrio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              We engineer the digital <span className="font-bold block">infrastructure that powers tomorrow.</span>
            </h2>
          </div>
          <div className="text-zinc-400 text-base md:text-lg leading-relaxed font-bold flex flex-col gap-6">
            <p>
              Devopstrio is a London-headquartered global technology company specialising in Cloud, AI, DevOps, and Enterprise Software. We partner with forward-thinking enterprises to modernise infrastructure, unlock new value, and accelerate digital success — quietly, precisely, and at scale.
            </p>
          </div>
        </Reveal>

        {/* 4-Stat Bar */}
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6 bg-zinc-950/20 border border-zinc-900 rounded-xl mb-16">
          <div className="text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold text-rose-500">100+</p>
            <p className="text-zinc-400 text-xs md:text-sm font-medium mt-1">Projects Delivered</p>
          </div>
          <div className="text-center md:text-left border-l border-zinc-800 pl-0 md:pl-6">
            <p className="text-3xl md:text-4xl font-bold text-rose-500">50+</p>
            <p className="text-zinc-400 text-xs md:text-sm font-medium mt-1">Enterprise Clients</p>
          </div>
          <div className="text-center md:text-left border-l border-zinc-800 pl-0 md:pl-6">
            <p className="text-3xl md:text-4xl font-bold text-rose-500">525+</p>
            <p className="text-zinc-400 text-xs md:text-sm font-medium mt-1">Global Experts</p>
          </div>
          <div className="text-center md:text-left border-l border-zinc-800 pl-0 md:pl-6">
            <p className="text-3xl md:text-4xl font-bold text-rose-500">6</p>
            <p className="text-zinc-400 text-xs md:text-sm font-medium mt-1">Global Offices</p>
          </div>
        </Reveal>

        {/* Quote / Opening Statement */}
        <Reveal className="border-l-4 border-rose-600 pl-6 md:pl-8 py-4 mb-20 max-w-4xl">
          <p className="text-xl md:text-2xl font-bold italic text-zinc-200 leading-relaxed">
            "Technology is only as powerful as the people who wield it. At Devopstrio, we bring together world-class engineers, proven processes, and cutting-edge platforms — to solve the problems that matter most to your business."
          </p>
          <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-3">— Opening Statement</p>
        </Reveal>

        {/* Three Columns Detail */}
        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mb-20">
          
          {/* Col 1: What We Do */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-2">What We Do</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
              We design, build, and operate intelligent cloud platforms on Azure, AWS, and GCP — accelerating innovation, reducing cost, and enabling autonomous operations through AI. From strategy to delivery to managed operations, we cover the full technology lifecycle.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Cloud Engineering", "AI & Data", "DevOps", "Cybersecurity", "Product Dev"].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Where We Operate */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-2">Where We Operate</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
              Headquartered in London, United Kingdom with delivery centres in New York, Bangalore, Chennai, and Thoothukudi — our hybrid onshore/offshore model gives global enterprises the quality of local consulting at the scale of an international partner.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["London HQ", "New York", "Bangalore", "Chennai", "24/7 Support"].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: The Difference */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-2">The Devopstrio Difference</h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
              Most technology partners deliver projects. We deliver outcomes. Every engagement starts with your business goal — not a technology checklist. We measure success by the impact we create: deployments shipped faster, costs reduced, systems that never fail, and teams that move with confidence.
            </p>
            <div className="mt-2 p-3 bg-emerald-950/25 border border-emerald-900/60 text-emerald-400 rounded text-[11px] md:text-xs font-semibold flex items-center gap-2">
              <span>✓</span>
              <span>£56,000+ monthly savings delivered for Asda via Azure Virtual Desktop</span>
            </div>
          </div>

        </Reveal>

        {/* Client Logos / Trusted by Industry Leaders */}
        <Reveal className="border-t border-zinc-900 pt-12 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75">
            {["BP", "NHS", "Deloitte", "Asda", "GXO", "BT", "Metrobank"].map((client) => (
              <span key={client} className="text-lg md:text-2xl font-bold tracking-widest text-zinc-500 select-none hover:text-zinc-300 transition-colors">
                {client}
              </span>
            ))}
          </div>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto mt-6 leading-relaxed font-bold">
            From FTSE 100 corporations to fast-scaling enterprises, organisations trust Devopstrio to handle their most critical infrastructure, cloud migrations, and AI transformations.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
