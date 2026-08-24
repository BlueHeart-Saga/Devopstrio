"use client";

import React from "react";
import { ArrowRight, Bot, Cloud, Cpu, ArrowUpRight, Users, ShieldCheck, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

export function OurStorySection() {
  const whatWeBuild = [
    {
      icon: Bot,
      title: "AI & Data",
      desc: "Intelligent solutions powered by AI.",
      accent: "from-rose-500/20 via-rose-500/5 to-transparent border-rose-500/30 text-rose-400"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      desc: "Modern cloud platforms and automation.",
      accent: "from-sky-500/20 via-sky-500/5 to-transparent border-sky-500/30 text-sky-400"
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      desc: "Secure, scalable digital products.",
      accent: "from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-400"
    }
  ];

  const processSteps = [
    { num: "01", title: "Understand", desc: "Align on core business goals." },
    { num: "02", title: "Design", desc: "Architect secure cloud solutions." },
    { num: "03", title: "Build", desc: "Engineer high-scale software." },
    { num: "04", title: "Improve", desc: "Optimize continuously." }
  ];

  const cultureCards = [
    { title: "Customer First", desc: "Focused on delivering measurable business outcomes.", icon: Users },
    { title: "Engineering Excellence", desc: "Zero compromise on code quality, security, and uptime.", icon: ShieldCheck },
    { title: "Continuous Innovation", desc: "Constantly adopting next-gen cloud and AI tech.", icon: Sparkles },
    { title: "Long-Term Partnerships", desc: "Growing alongside our clients as a trusted tech partner.", icon: Zap }
  ];

  const stats = [
    { value: "250+", label: "Projects" },
    { value: "25+", label: "Technologies" },
    { value: "4+", label: "Countries" },
    { value: "24×7", label: "Support" }
  ];

  return (
    <div className="bg-black text-white space-y-28 md:space-y-36 py-16">

      {/* 1. HERO */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 px-6 py-20 text-center">
        <img
          src="/assets/About-page/overview/about-devopstrio.png"
          alt="Engineering Better Digital Futures"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
            ABOUT DEVOPSTRIO
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Engineering Better <span className="text-[#E11D48]">Digital Futures</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-normal">
            We help businesses build intelligent, secure, and scalable technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 h-[380px] md:h-[440px] group shadow-2xl">
            <img
              src="/assets/About-page/overview/about-devopstrio.png"
              alt="Every Business Wants to Move Faster"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="space-y-6">
            <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
              THE CHALLENGE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Every Business Wants to Move Faster
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Technology is changing rapidly. Businesses need trusted engineering partners who can modernize systems, accelerate innovation, and reduce complexity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY WE EXIST */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
              WHY WE EXIST
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              We Started With One Belief
            </h2>

            <p className="text-xl sm:text-2xl font-medium text-zinc-200 border-l-2 border-[#E11D48] pl-5 leading-snug">
              "Great engineering should solve business problems, not create new ones."
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 h-[380px] md:h-[440px] group shadow-2xl order-1 lg:order-2">
            <img
              src="/assets/wavebg/navbar/servicesdrop.jpeg"
              alt="Team Collaboration"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
            WHAT WE BUILD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Core Engineering Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whatWeBuild.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl bg-gradient-to-b ${card.accent}`}
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#E11D48] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-300">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Simple. Iterative. Transparent.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between transition-all duration-300 hover:border-rose-500/50 hover:bg-zinc-900/60"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#E11D48] tracking-widest block">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#E11D48] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ENGINEERING CULTURE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
            ENGINEERING CULTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Built Around Collaboration
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-black/60 flex items-center justify-center text-[#E11D48]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E11D48] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. OUR IMPACT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
            OUR IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Proven Global Scale
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-zinc-800/80 bg-zinc-950 p-8 text-center backdrop-blur-md hover:border-rose-500/50 transition duration-300 shadow-xl group"
            >
              <h3 className="text-4xl sm:text-5xl font-black font-mono text-white group-hover:text-[#E11D48] transition-colors">
                {stat.value}
              </h3>
              <p className="mt-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LOOKING AHEAD */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 p-8 md:p-14 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-6">
              <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E11D48] uppercase block font-mono">
                LOOKING AHEAD
              </span>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Building What's Next
              </h2>

              <p className="text-sm font-mono font-semibold tracking-widest text-[#E11D48] uppercase">
                AI &bull; Cloud &bull; Automation &bull; Engineering
              </p>

              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                We're investing in AI, cloud, and engineering to help businesses prepare for what's next.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 h-[280px] md:h-[340px] group">
              <img
                src="/assets/ecosystem/engineering-excellence-hero/Main.png"
                alt="Building What's Next"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-black p-10 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#E11D48] uppercase block">
              LET'S BUILD TOGETHER
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Let's Build Together
            </h2>

            <p className="text-zinc-400 text-base font-normal">
              Every transformation starts with a conversation.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}