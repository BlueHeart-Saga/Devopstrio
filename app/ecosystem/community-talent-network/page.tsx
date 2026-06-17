"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { Hero } from "@/components/ecosystem/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { SubDomainsGrid } from "@/sections/ecosystem/domain/SubDomainsGrid";
import { DomainMetrics } from "@/sections/ecosystem/domain/DomainMetrics";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Award, BookOpen, Heart, GitPullRequest, Code } from "lucide-react";

export default function CommunityTalentNetworkPage() {
  const domain = "community-talent-network";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "talent", label: "Talent Ecosystem" },
    { id: "academia", label: "University Partnerships" },
    { id: "open-source", label: "Open Source" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="PEOPLE ECOSYSTEM"
        title="Community & Talent Network"
        subtitle="Nurturing a global community of engineers, academic partners, open-source contributors, and technology leaders."
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        cta={{ label: "View Programs", href: "#talent" }}
      />

      <SectionNavbar sections={subSections} />

      {/* 1. Overview */}
      <div id="overview" className="border-b border-zinc-900/60 pb-16">
        <SubDomainsGrid title={data.title} slug={data.slug} subpages={data.subpages} />
      </div>

      {/* 2. Talent Ecosystem Progressions */}
      <section id="talent" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              TALENT PIPELINE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              The People <span className="text-rose-500">Ecosystem</span>
            </h2>
            <p className="text-zinc-450 text-xs md:text-sm font-semibold leading-relaxed">
              How we train, certify, and elevate engineers into platform architects and community leaders.
            </p>
          </Reveal>

          {/* Simple step card representation: Students -> Certified Engineers -> Experts -> Architects -> Leaders */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[140px]">
              <BookOpen className="text-rose-500 mx-auto mb-2" size={20} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Students</h4>
              <p className="text-[9px] text-zinc-500 font-semibold">University incubation runs.</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[140px]">
              <Award className="text-rose-500 mx-auto mb-2" size={20} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Certified</h4>
              <p className="text-[9px] text-zinc-500 font-semibold">Multi-cloud certified professionals.</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[140px]">
              <Code className="text-rose-500 mx-auto mb-2" size={20} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Experts</h4>
              <p className="text-[9px] text-zinc-500 font-semibold">Active R&D project engineers.</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[140px]">
              <Users className="text-rose-500 mx-auto mb-2" size={20} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Architects</h4>
              <p className="text-[9px] text-zinc-500 font-semibold">Multi-tenant framework designers.</p>
            </div>
            <div className="bg-zinc-950/45 p-6 border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[140px]">
              <Heart className="text-rose-500 mx-auto mb-2" size={20} />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Leaders</h4>
              <p className="text-[9px] text-zinc-500 font-semibold">Open-source advocates & speakers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. University Partnerships */}
      <section id="academia" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ACADEMIC ALLIANCES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              University <span className="text-rose-500">Partnerships</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/30 p-8 border border-zinc-900 rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Curriculum Integrations</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Co-designing cloud engineering, DevSecOps, and SRE modules with leading universities, supplying training and sandbox lab setups for students.
              </p>
            </div>
            <div className="bg-zinc-950/30 p-8 border border-zinc-900 rounded-3xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Sponsored R&D Projects</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                Funding academic research in next-generation computing technologies, post-quantum encryption, and multi-agent system safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Open Source Contributions */}
      <section id="open-source" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <Reveal className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GIVING BACK TO DEV COMMUNITY
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Open Source <span className="text-rose-500">Contributions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <GitPullRequest className="text-rose-500 mb-3" size={20} />
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">Active Pull Requests</h4>
              <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                Contributing bug fixes, latency optimizations, and documentation edits to Kubernetes, Terraform, and next-gen runtime platforms.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <Code className="text-rose-500 mb-3" size={20} />
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider font-mono">devopstrio/helm-vault-sync</h4>
              <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                Maintaining open-source Helm charts automated to sync secrets directly from vault to local Kubernetes namespaces.
              </p>
            </div>
            <div className="bg-zinc-950/20 p-6 border border-zinc-900 rounded-2xl">
              <Code className="text-rose-500 mb-3" size={20} />
              <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider font-mono">devopstrio/peft-guard</h4>
              <p className="text-[11px] text-zinc-455 font-semibold leading-relaxed">
                Open-source prompt defense package scanning input queries for adversarial injections before processing runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Metrics */}
      <div id="metrics" className="border-b border-zinc-900/60">
        <DomainMetrics stats={data.stats} />
      </div>

      {/* 6. FAQ */}
      <div id="faq" className="border-b border-zinc-900/60">
        <FAQ faqs={data.faqs} />
      </div>

      {/* 7. CTA */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
