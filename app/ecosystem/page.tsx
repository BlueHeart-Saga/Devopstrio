"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronRight, Milestone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ecosystemPillars = [
  {
    slug: "partnerships",
    title: "Strategic Partnerships",
    desc: "Technology alliances with AWS, Microsoft Azure, Google Cloud, and Oracle to build pre-certified integration templates.",
    icon: "🤝"
  },
  {
    slug: "innovation-labs",
    title: "Innovation Labs",
    desc: "Dedicated R&D workspaces prototyping next-gen software systems, autonomous AI agents, and zero-trust networks.",
    icon: "🔬"
  },
  {
    slug: "platforms-solutions",
    title: "Platforms & Solutions",
    desc: "Owned software products, landing zone accelerators, and boilerplate SaaS configurations to reduce build overhead.",
    icon: "💻"
  },
  {
    slug: "technology-stack",
    title: "Technology Stack",
    desc: "Full-stack engineering libraries, database clusters, container setups, and API gateways built for zero latency.",
    icon: "🛠️"
  },
  {
    slug: "global-delivery",
    title: "Global Delivery Network",
    desc: "Sourcing certified architects and SRE leads globally to support continuous follow-the-sun operations.",
    icon: "🌎"
  },
  {
    slug: "engineering-excellence",
    title: "Engineering Excellence",
    desc: "Rigorous coding metrics, automated unit testing frameworks, and GitOps deployments protecting production secrets.",
    icon: "📐"
  },
  {
    slug: "accelerators-frameworks",
    title: "Accelerators & Frameworks",
    desc: "Pre-parameterized Terraform modules, automated backup scripts, and data migration pipelines.",
    icon: "🚀"
  },
  {
    slug: "community-talent-network",
    title: "Community & Talent Network",
    desc: "Managing developer academies, university partnerships, open-source repositories, and leadership mentoring.",
    icon: "👥"
  }
];

const alliances = [
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "AWS", path: "/assets/Tech-icons/amazon-web-service-logo_svgstack_com_7421780931787.svg" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
  { name: "Oracle", path: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg" },
  { name: "ServiceNow", path: "/assets/Home-page/partners/servicenow.svg" }
];

export default function EcosystemLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* 1. Hero Block */}
      <section className="relative overflow-hidden bg-black text-white pt-20 pb-16 px-6 border-b border-zinc-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-site mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8">
            <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
            <ChevronRight size={10} className="text-zinc-700" />
            <span className="text-rose-500 font-bold uppercase">ECOSYSTEM</span>
          </nav>

          <div className="max-w-4xl text-left">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Global Alliance Ecosystem
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
                Co-engineering the <span className="font-semibold text-rose-500">future of cloud</span> operations
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-3xl mb-12">
                Devopstrio brings together cloud providers, innovation centers, accelerators, and talent channels into a unified network, providing high-performance, compliant, and cost-effective solutions.
              </p>
            </Reveal>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Reveal delay={0.15}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">50+</span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase">Technology Partners</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">30+</span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase">R&D Innovation Labs</span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">25+</span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase">Owned Products & IP</span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-5">
                <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">50k+</span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase">Community Developers</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Alliance Partners Carousel/Grid */}
      <section className="py-16 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6">
          <Reveal className="mb-8">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block text-center mb-6">
              Empowered by industry leaders
            </span>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 grayscale opacity-60">
            {alliances.map((partner, i) => (
              <div key={i} className="h-8 relative w-28 flex items-center justify-center">
                <Image
                  src={partner.path}
                  alt={partner.name}
                  width={110}
                  height={32}
                  className="object-contain max-h-8"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ecosystem Domains Directory */}
      <section id="pillars" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          <Reveal className="mb-16 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Ecosystem Directories
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Explore our core <span className="font-semibold text-rose-500">ecosystem domains</span>
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
              Choose an ecosystem pillar to view R&D labs, software platforms, and co-engineered partner channels.
            </p>
          </Reveal>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemPillars.map((pillar, idx) => {
              const href = `/ecosystem/${pillar.slug}`;
              return (
                <Reveal key={pillar.slug} delay={idx * 0.05} className="h-full">
                  <Link
                    href={href}
                    className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden cursor-pointer text-left"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-4 border-b border-zinc-900/60 pb-3">
                        <span className="text-2xl">{pillar.icon}</span>
                        <span className="w-8 h-8 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                          <ArrowUpRight size={13} className="stroke-[2.5]" />
                        </span>
                      </div>

                      <h3 className="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2">
                        {pillar.title}
                      </h3>

                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="border-t border-zinc-900/60 pt-3 mt-auto">
                      <span className="text-[9px] text-rose-500 font-semibold group-hover:translate-x-1 transition-transform duration-250 inline-flex items-center gap-1">
                        Explore Domain <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(220,38,38,0.04),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Partner Portal
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Join our strategic <span className="font-semibold text-rose-500">alliance network</span>
            </h2>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
              Collaborate on new software prototypes, deploy co-engineered accelerators, and integrate architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
              >
                Request Partner Access <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
