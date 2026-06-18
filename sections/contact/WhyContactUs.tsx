"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    title: "Direct Architect Consultation",
    desc: "Bypass sales filters. Connect directly with principal systems architects to review your technical challenges.",
    side: "left",
  },
  {
    title: "2-Hour Response SLA",
    desc: "Every request receives a detailed, engineer-led assessment and meeting schedule options within 2 hours.",
    side: "left",
  },
  {
    title: "Flexible Resourcing Models",
    desc: "Align delivery with custom offshore development centers (ODC), managed pods, or consulting retainers.",
    side: "right",
  },
  {
    title: "Compliance & Security Built-In",
    desc: "Access ready-to-deploy multi-cloud patterns aligned with GDPR, ISO 27001, and HIPAA compliance.",
    side: "right",
  },
];

const channels = [
  { label: "Email Us", colorClass: "text-rose-500 hover:text-rose-400", href: "mailto:info@devopstrioglobal.com" },
  { label: "Call Us", colorClass: "text-sky-500 hover:text-sky-400", href: "tel:+447471482903" },
  { label: "WhatsApp", colorClass: "text-[#25D366] hover:text-[#12ec6e]", href: "https://wa.me/447471482903" },
];

export function WhyContactUs() {
  const leftCards  = cards.filter(c => c.side === "left");
  const rightCards = cards.filter(c => c.side === "right");

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,63,94,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header */}
        <Reveal className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-5 bg-rose-600" />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">Why Contact Us</span>
            <span className="h-[1px] w-5 bg-rose-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
            Senior-led. <span className="text-rose-500">Not sales-led.</span>
          </h2>
          <p className="text-zinc-500 text-sm font-bold leading-relaxed max-w-xl mx-auto mt-4">
            Every path leads to the same place — a real engineer, a real plan, a real result.
          </p>
        </Reveal>

        {/* 3-column layout: cards | image | cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">

          {/* Left cards */}
          <div className="flex flex-col gap-4">
            {leftCards.map((card) => {
              return (
                <Reveal key={card.title} delay={0.1}>
                  <div className="bg-[#09090b] border border-zinc-900 hover:border-zinc-800 transition-all duration-300 p-6 rounded-none relative group">
                    {/* Microsoft-style left accent indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-zinc-800 group-hover:bg-rose-600 transition-colors duration-300" />
                    <div className="pl-2">
                      <h3 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-rose-500 transition-colors duration-250">{card.title}</h3>
                      <p className="text-xs text-zinc-400 font-medium leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Center image */}
          <Reveal delay={0.15} className="flex justify-center">
            <div className="relative w-[260px] md:w-[300px] lg:w-[320px] shrink-0">
              <img
                src="/assets/Contact-page/why-choose/image.png"
                alt="Devopstrio senior engineer"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </Reveal>

          {/* Right cards */}
          <div className="flex flex-col gap-4">
            {rightCards.map((card) => {
              return (
                <Reveal key={card.title} delay={0.2}>
                  <div className="bg-[#09090b] border border-zinc-900 hover:border-zinc-800 transition-all duration-300 p-6 rounded-none relative group">
                    {/* Microsoft-style left accent indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-zinc-800 group-hover:bg-rose-600 transition-colors duration-300" />
                    <div className="pl-2">
                      <h3 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-rose-500 transition-colors duration-250">{card.title}</h3>
                      <p className="text-xs text-zinc-400 font-medium leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Quick contact strip */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 border-t border-zinc-900/40 pt-8">
            {channels.map(({ label, colorClass, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`group text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase transition-all duration-300 ${colorClass}`}
              >
                <span className="border-b-2 border-transparent group-hover:border-current transition-all pb-1">{label}</span>
              </a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
