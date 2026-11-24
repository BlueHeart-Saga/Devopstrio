import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getPublishedOfferings,
  getOfferingBySlug
} from "@/data/accelerators/accelerators-registry";
import { TechnicalApproach } from "@/components/accelerators/TechnicalApproach";
import { SectionVisual } from "@/components/accelerators/SectionVisual";
import { FAQ, FAQItem } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  ChevronRight,
  Clock
} from "lucide-react";

import "@/styles/hero-backgrounds.css";
import "@/styles/offering-refresh.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedOfferings();
  return published.map((offering) => ({
    slug: offering.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offering = getOfferingBySlug(slug);

  if (!offering || offering.publicationStatus !== "published") {
    return {
      title: "Offering Not Found | Devopstrio"
    };
  }

  const title = `${offering.title} | Enterprise AI Accelerator | Devopstrio`;
  const description = offering.heroDescription;
  const canonicalUrl = `https://devopstrio.co.uk/ecosystem/accelerators-frameworks/${offering.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website"
    }
  };
}

export default async function AcceleratorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const offering = getOfferingBySlug(slug);

  if (!offering || offering.publicationStatus !== "published") {
    notFound();
  }

  const details = offering.details;
  if (!details) {
    notFound();
  }

  // Structured Service JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": offering.title,
    "description": offering.heroDescription,
    "provider": {
      "@type": "Organization",
      "name": "Devopstrio",
      "url": "https://devopstrio.co.uk"
    },
    "serviceType": offering.engagementType,
    "areaServed": "Global",
    "termsOfService": "https://devopstrio.co.uk/terms-of-service"
  };

  // Map FAQs for site's standard FAQ component
  const faqItems: FAQItem[] = details.engagement.faqs.map((f) => ({
    q: f.question,
    a: f.answer,
    tags: [offering.engagementType, offering.domainClean]
  }));

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white offering-refresh">
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Clean, Minimal, Solid Headings matching existing pages)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center bg-[#030303] text-white pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-zinc-900/80">
        {/* Subtle Gathering Particle Animation with Minimal Devopstrio Red Tint */}
        <img
          src="/images/offerings/hero-bg/universal-hero.svg"
          alt=""
          aria-hidden="true"
          className="hero-bg-img"
        />

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap py-1">
            <Link href="/ecosystem" className="hover:text-white transition-colors">
              ECOSYSTEM
            </Link>
            <ChevronRight size={12} className="text-zinc-700 flex-shrink-0" />
            <Link href="/ecosystem/accelerators-frameworks" className="hover:text-white transition-colors">
              ACCELERATORS & FRAMEWORKS
            </Link>
            <ChevronRight size={12} className="text-zinc-700 flex-shrink-0" />
            <span className="text-rose-500 font-semibold truncate max-w-[280px] sm:max-w-none">
              {offering.title.toUpperCase()}
            </span>
          </nav>

          {/* Hero Content: Pure, Solid, Minimal Title & Subtitle */}
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Title (H1) - Clean solid heading matching other company pages */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 text-white text-center font-sans">
              {offering.title}
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed max-w-3xl text-center mx-auto">
              {offering.heroDescription}
            </p>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SECTION 01: OFFERING OVERVIEW
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 lg:py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
                01 / OFFERING OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Business Challenge & <span className="text-rose-500">Operational Context</span>
              </h2>
            </div>
          </Reveal>

          {/* Integrated Editorial Content Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-[#09090b] rounded-xl p-8 lg:p-10 border border-zinc-800/80">
            {/* Business Challenge Narrative */}
            <div className="lg:col-span-8 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <span className="text-xs uppercase tracking-widest text-rose-500 font-bold block mb-1">
                Enterprise Problem Statement
              </span>
              {details.overview.businessChallenge.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Target Audience Profile & Timeline as Integrated Supporting Editorial Block */}
            <div className="lg:col-span-4 lg:border-l lg:border-zinc-800/80 lg:pl-8 space-y-6 pt-6 lg:pt-0 border-t border-zinc-800/80 lg:border-t-0">
              <div>
                <span className="text-xs uppercase tracking-widest text-rose-500 font-bold block mb-2">
                  Target Profile
                </span>
                <h3 className="text-lg font-bold text-white mb-3">Who This Is For</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {details.overview.targetAudience}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-rose-500" />
                  <span>Indicative Delivery Timeline</span>
                </div>
                <span className="text-base font-semibold text-white">
                  {details.engagement.timeline}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SECTION 02: OFFERING SCOPE & BOUNDARIES (Engineering Specification Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 lg:py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
                02 / OFFERING SCOPE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                In-Scope Outcomes & <span className="text-rose-500">Explicit Boundaries</span>
              </h2>
            </div>
          </Reveal>

          {/* Structured Engineering Specification Layout */}
          <div className="bg-[#09090b] rounded-xl border border-zinc-800/80 divide-y divide-zinc-800/80 overflow-hidden">
            {details.scope.map((item, idx) => (
              <div
                key={idx}
                className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                {/* Identifier & Heading */}
                <div className="md:col-span-4 flex items-start gap-3.5">
                  <span className="font-mono text-sm font-semibold text-rose-500/90 shrink-0 mt-0.5">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Deliverables & Boundaries */}
                <div className="md:col-span-8 space-y-3">
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {item.deliverables}
                  </p>

                  {item.notIncluded && (
                    <div className="pt-2 text-xs text-zinc-400 leading-relaxed flex items-start gap-2">
                      <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[11px] shrink-0 mt-0.5">
                        Out of Scope:
                      </span>
                      <span>{item.notIncluded}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SECTION 03: TECHNICAL APPROACH (Strictly Preserved Diagrams & Matrix)
      ───────────────────────────────────────────────────────────── */}
      <section id="technical-approach" className="w-full py-20 lg:py-24 bg-[#030303] border-b border-zinc-900/80 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
                03 / TECHNICAL APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Architecture, Methodology & <span className="text-rose-500">Execution Controls</span>
              </h2>
            </div>
          </Reveal>

          <TechnicalApproach
            offeringCode={offering.code}
            engagementType={offering.engagementType}
          />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SECTION 04: APPLICATIONS & BUSINESS VALUE (Unified Editorial Composition)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 lg:py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
                04 / APPLICATIONS & VALUE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Enterprise Deployment <span className="text-rose-500">Scenarios</span>
              </h2>
            </div>
          </Reveal>

          {/* Unified Editorial Scenario Composition */}
          <div className="bg-[#09090b] rounded-xl border border-zinc-800/80 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 grid grid-cols-1 md:grid-cols-2 mb-8 overflow-hidden">
            {details.applications.map((app, idx) => (
              <div key={idx} className="p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-500 mb-2.5 block">
                    Scenario {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                    {app.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {app.scenario}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SectionVisual
            fallback={
              <div className="p-5 rounded-lg border border-zinc-800/80 bg-zinc-950/60">
                <div className="text-xs uppercase tracking-wider text-rose-500 font-bold mb-1.5">
                  Delivery Governance Note
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  All scenarios deployed through the {offering.title} pattern inherit mandatory Cloud Adoption 
                  Framework tag baselines, telemetry logging, and budget attribution guardrails.
                </p>
              </div>
            }
          />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SECTION 05: ENGAGEMENT & READINESS (Enterprise Delivery Roadmap)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 lg:py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Main Delivery Roadmap Container (Matching User Reference) */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-zinc-800/80 p-8 sm:p-10 lg:p-12 mb-10 shadow-2xl relative">
            
            {/* Section Header inside container */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
                05 / ENGAGEMENT & READINESS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Delivery Phases & <span className="text-rose-500">Implementation Readiness</span>
              </h2>
            </div>

            {/* Horizontal Delivery Track Grid on desktop */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                details.engagement.phases.length === 3
                  ? "lg:grid-cols-3"
                  : details.engagement.phases.length === 4
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-5"
              } gap-y-10 lg:gap-y-0 lg:divide-x divide-zinc-800/80`}
            >
              {details.engagement.phases.map((phase, idx) => (
                <div
                  key={idx}
                  className="flex flex-col px-0 lg:px-6 xl:px-7 first:lg:pl-0 last:lg:pr-0"
                >
                  {/* Large Understated Phase Number */}
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-rose-500 tracking-tight">
                    0{idx + 1}
                  </div>

                  {/* Sub-label */}
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-1 mb-4">
                    PHASE
                  </div>

                  {/* Horizontal Delivery Track Line with Red Accent & Directional Indicator */}
                  <div className="relative flex items-center mb-5">
                    {/* Brand-red accent lead segment */}
                    <div className="w-8 sm:w-10 h-[2px] bg-rose-500 shrink-0" />
                    {/* Subtle neutral track line */}
                    <div className="flex-1 h-[1px] bg-zinc-700/80" />
                    {/* Small directional indicator */}
                    <svg
                      className="w-3.5 h-3.5 text-zinc-500 shrink-0 -ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Phase Heading */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
                    {phase.name}
                  </h3>

                  {/* Clean Secondary Text for Duration (No boxed background) */}
                  <span className="text-xs sm:text-sm text-zinc-400 mb-3.5 block font-normal">
                    {phase.duration}
                  </span>

                  {/* Technical Activities / Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {phase.activities}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle bottom continuation anchor indicator (Matching Reference) */}
            <div className="mt-12 pt-6 flex justify-center">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

          </div>

          {/* Customer Prerequisites & Technical Assumptions Panel */}
          <div className="bg-[#09090b] rounded-xl p-6 lg:p-8 border border-zinc-800/80">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Customer Prerequisites & Technical Assumptions
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {details.engagement.prerequisites.map((req, idx) => (
                <div key={idx} className="flex items-start gap-3 py-2 border-b border-zinc-900/70 last:border-b-0">
                  <span className="text-rose-500/80 font-mono text-xs font-semibold mt-0.5 shrink-0">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SECTION 06: STANDARD SITE FAQ COMPONENT
      ───────────────────────────────────────────────────────────── */}
      <FAQ
        faqs={faqItems}
        badge="READINESS FAQ"
        title="Anticipated Questions for"
        highlight={offering.title}
        className="w-full py-20 lg:py-24 bg-[#030303] text-white relative border-b border-zinc-900/80"
      />

      {/* ─────────────────────────────────────────────────────────────
          8. SECTION 07: STANDARD SITE CTA COMPONENT
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full">
        <CTA
          ctaTitle="Ready to Accelerate Your Enterprise AI Adoption"
          ctaHighlight="with Devopstrio?"
          ctaDesc="Speak directly with our Cloud Adoption Framework architects to discuss environment prerequisites, tailored scope boundaries, and delivery scheduling."
          ctaBtnText="Contact Our Team"
          backLink="/ecosystem/accelerators-frameworks"
        />
      </div>

    </main>
  );
}
