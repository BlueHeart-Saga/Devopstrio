"use client";

import React from "react";
import { Clock, Layers, ShieldCheck, Zap, Mail, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: Clock,
    title: "< 2 Hour Response",
    desc: "Every enquiry is reviewed and replied to by a real engineer — no automated queues, no ticket systems.",
    side: "left",
  },
  {
    icon: Zap,
    title: "Senior Engineers Only",
    desc: "You speak to architects and senior specialists from day one. Not sales reps, not juniors.",
    side: "left",
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    desc: "From scoping to deployment to managed support — one team, full ownership, zero hand-off confusion.",
    side: "right",
  },
  {
    icon: ShieldCheck,
    title: "ISO 27001 Compliant",
    desc: "Enterprise-grade security posture built in. Your data, your systems, your confidentiality — protected.",
    side: "right",
  },
];

const channels = [
  { icon: Mail,          label: "Email Us",    href: "mailto:info@devopstrioglobal.com" },
  { icon: Phone,         label: "Call Us",     href: "tel:+447471482903"                },
  { icon: MessageCircle, label: "WhatsApp",    href: "https://wa.me/447471482903"       },
];

export function WhyContactUs() {
  const leftCards  = cards.filter(c => c.side === "left");
  const rightCards = cards.filter(c => c.side === "right");

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,63,94,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <Reveal className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-5 bg-rose-600" />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">Why Contact Us</span>
            <span className="h-[1px] w-5 bg-rose-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Senior-led. <span className="text-rose-500">Not sales-led.</span>
          </h2>
          <p className="text-zinc-500 text-sm font-bold leading-relaxed max-w-xl mx-auto mt-4">
            Every path leads to the same place — a real engineer, a real plan, a real result.
          </p>
        </Reveal>

        {/* 3-column layout: cards | image | cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">

          {/* Left cards */}
          <div className="flex flex-col gap-3">
            {leftCards.map((card) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={0.1}>
                  <div className="bg-zinc-950/60 rounded-2xl p-4 flex flex-col gap-3 hover:bg-zinc-900/40 transition-colors duration-300 group">
                    <div className="w-9 h-9 rounded-lg bg-rose-900/40 flex items-center justify-center">
                      <Icon size={16} className="text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1.5">{card.title}</h3>
                      <p className="text-xs text-zinc-500 font-bold leading-relaxed">{card.desc}</p>
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
          <div className="flex flex-col gap-5">
            {rightCards.map((card) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={0.2}>
                  <div className="bg-zinc-950/60 rounded-2xl p-6 flex flex-col gap-4 hover:bg-zinc-900/40 transition-colors duration-300 group">
                    <div className="w-9 h-9 rounded-lg bg-rose-900/40 flex items-center justify-center">
                      <Icon size={16} className="text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1.5">{card.title}</h3>
                      <p className="text-xs text-zinc-500 font-bold leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Quick contact strip */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {channels.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 text-zinc-300 hover:text-white transition-all duration-300 group"
              >
                <Icon size={14} className="text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-wide">{label}</span>
              </a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
