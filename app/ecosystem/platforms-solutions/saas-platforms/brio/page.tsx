"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, Building2, KeyRound, UserSearch, Play } from "lucide-react";

/* =========================================================================
   ASSET PATHS  (place files in /public at exactly these paths)
   ========================================================================= */
const BASE = "/webp/assets/Home-page/brio";

const A = {
  logo: `${BASE}/hero/logo.webp`,
  hero: `${BASE}/hero/brio hero.webp`,
  fragments: {
    create: `${BASE}/what-is-brio/FRAGMENT 01_ CREATE.webp`,
    discover: `${BASE}/what-is-brio/FRAGMENT 02_ DISCOVER.webp`,
    collaborate: `${BASE}/what-is-brio/FRAGMENT 03_ COLLABORATE.webp`,
    content: `${BASE}/what-is-brio/FRAGMENT 04_ CONTENT.webp`,
    approve: `${BASE}/what-is-brio/FRAGMENT 05_ APPROVE.webp`,
    pay: `${BASE}/what-is-brio/FRAGMENT 06_ PAY (1).webp`,
    measure: `${BASE}/what-is-brio/FRAGMENT 07_ MEASURE (1).webp`,
  },
  aiCreator: `${BASE}/ai-campaign-creator/AI CAMPAIGN CREATOR.webp`,
  discovery: `${BASE}/creator-discovery/CREATOR DISCOVERY.webp`,
  collab: `${BASE}/campaign-collaboration/CAMPAIGN COLLABORATION.webp`,
  settlement: `${BASE}/automated-settlement/AUTOMATED SETTLEMENT.webp`,
  profiles: `${BASE}/creator-profiles/CREATOR PROFILES.webp`,
  attribution: `${BASE}/predictive-attribution-telemetry/PREDICTIVE ATTRIBUTION & TELEMETRY.webp`,
};

const TOOLKIT_DIR = `${BASE}/ai-engine-toolkit-architecture`;
const TOOLS = [
  { alt: "FastPost AI", file: "Tool 1_ FastPost AI.webp" },
  { alt: "Hashtag AI", file: "Tool 2_ Hashtag AI.webp" },
  { alt: "VoiceToText AI", file: "Tool 3_ VoiceToText AI (1).webp" },
  { alt: "Influencer Finder", file: "Tool 4_ Influencer Finder (1).webp" },
  { alt: "Content Analyzer", file: "Tool 5_ Content Analyzer.webp" },
  { alt: "ROI Calculator", file: "Tool 6_ ROI Calculator.webp" },
  { alt: "Content Intelligence", file: "Tool 7_ Content Intelligence.webp" },
  { alt: "Automation", file: "Tool 8_ Automation.webp" },
];

/* =========================================================================
   TOKENS
   ========================================================================= */
const CONTAINER = "max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10";
/** One gap between every heading block and its visual (measured from the reference). */
const GAP = "mt-[72px]";
const CTA_HREF = "/contact";

/* =========================================================================
   SHARED HELPERS
   ========================================================================= */

/** Scroll-reveal wrapper (fade + slide up once in view). */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

type Trim = { l?: number; t?: number; r?: number; b?: number };

/**
 * Renders an asset at its natural aspect ratio (never cropped, no object-cover).
 * `w`/`h` are the file's pixel size; `trim` is the transparent glow/shadow padding
 * (in file pixels) that gets pulled off with negative margins so the *visible*
 * content lines up with the layout. Assets are exported at 3x, so visible width
 * in px at the 1440 frame = (w - l - r) / 3.
 */
function Visual({
  src,
  alt,
  w,
  h,
  trim = {},
  fluid = false,
  priority = false,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  trim?: Trim;
  fluid?: boolean;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const { l = 0, t = 0, r = 0, b = 0 } = trim;
  const cw = w - l - r; // visible width in file px
  return (
    <div
      className={`relative z-0 mx-auto flow-root w-full ${className}`}
      style={fluid ? undefined : { maxWidth: cw / 3 }}
    >
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        unoptimized
        priority={priority}
        sizes={`${Math.round(w / 3)}px`}
        draggable={false}
        className="pointer-events-none block h-auto max-w-none select-none"
        style={{
          width: `${(w / cw) * 100}%`,
          marginLeft: `${-(l / cw) * 100}%`,
          marginTop: `${-(t / cw) * 100}%`,
          marginBottom: `${-(b / cw) * 100}%`,
        }}
      />
      {children}
    </div>
  );
}

/** Eyebrow + h1 + body, identical type spec in every section. */
function SectionHeading({
  eyebrow,
  title,
  body,
  bodyMax = "max-w-[780px]",
  titleMax = "",
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  bodyMax?: string;
  titleMax?: string;
}) {
  return (
    <Reveal className="relative z-10 text-center">
      <p className="text-[14px] font-semibold uppercase leading-[14px] tracking-[0.55px] text-[#3B82F6]">
        {eyebrow}
      </p>
      <h2
        className={`mx-auto mt-6 text-[32px] font-bold leading-[40px] tracking-[-1.2px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px] ${titleMax}`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-6 text-[16px] font-normal leading-[24px] tracking-normal text-white sm:text-[18px] sm:leading-[26px] ${bodyMax}`}
      >
        {body}
      </p>
    </Reveal>
  );
}

/* =========================================================================
   1. HERO
   ========================================================================= */
function Hero() {
  return (
    <section id="hero" className="relative overflow-x-clip pb-20 pt-24 sm:pt-28 lg:pt-[112px]">
      <div className={CONTAINER}>
        {/* logo — positioned top-left aligned nicely under Devopstrio navbar */}
        <Reveal>
          <div className="flex items-center justify-start pl-1 sm:pl-2 lg:pl-4">
            <Image
              src={A.logo}
              alt="Brio"
              width={109}
              height={42}
              unoptimized
              priority
              className="h-auto w-[115px] sm:w-[130px] lg:w-[140px] object-contain"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <h1 className="mx-auto text-[34px] font-bold leading-[42px] tracking-[-1.2px] text-white sm:text-[44px] sm:leading-[52px] lg:text-[48px] lg:leading-[56px]">
            Find Creators. Build Influence. Grow Brands.
          </h1>
          <p className="mx-auto mt-6 sm:mt-8 max-w-[800px] text-[16px] font-normal leading-[24px] text-white sm:text-[18px] sm:leading-[26px]">
            BRIO connects brands with the right creators, helping you discover authentic
            voices, launch campaigns, collaborate effortlessly, and turn influence into
            measurable growth.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://brio.devopstrio.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-[175px] items-center justify-center gap-2 rounded bg-white text-[13px] font-semibold leading-[18px] tracking-[0.13px] text-black transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              Explore BRIO
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>

            <Link
              href="/contact"
              className="inline-flex h-12 w-[224px] rounded-[5px] bg-gradient-to-r from-[#7EE0C6] to-[#3B62D9] p-px transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              <span className="flex h-full w-full items-center justify-center gap-2 rounded-[4px] bg-black text-[13px] font-semibold leading-[18px] tracking-[0.13px] text-white">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#8FD8F5] to-[#3B82F6]">
                  <Play className="h-2 w-2 fill-[#0B1B4D] text-[#0B1B4D]" strokeWidth={0} />
                </span>
                Get Started
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={160} className={GAP}>
          <Visual
            src={A.hero}
            alt="BRIO creator discovery: search filters and matched creator cards with match scores"
            w={3267}
            h={2136}
            trim={{ t: 37, r: 42, b: 6 }}
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   2. WHAT IS BRIO?
   ========================================================================= */
const FRAGMENTS = [
  { src: A.fragments.create, alt: "01 Campaign Brief — autonomous prompt-to-brief orchestration engine", w: 918, span: 1 },
  { src: A.fragments.discover, alt: "02 AI Matchmaking — real-time cultural and demographic affinity graph", w: 918, span: 1 },
  { src: A.fragments.collaborate, alt: "03 Collaborate — live workspace, dynamic SLAs and native messaging", w: 918, span: 1 },
  { src: A.fragments.content, alt: "04 Content Lab — draft video intake and automated QA verification", w: 918, span: 1 },
  { src: A.fragments.approve, alt: "05 1-Click Approve — instant compliance audit and release gatekeeper", w: 918, span: 1 },
  { src: A.fragments.pay, alt: "06 Smart Escrow — automated milestone disbursement and tax compliance", w: 918, span: 1 },
  { src: A.fragments.measure, alt: "07 Attribution & ROI — continuous telemetry, revenue pixel and ROAS measurement", w: 1740, span: 2 },
];

function WhatIsBrio() {
  return (
    <section id="what-is-brio" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="What is Brio?"
          title="One Platform. Every Campaign."
          body="From discovering creators to managing campaigns, content, agreements, payments, and performance, BRIO connects the entire influencer marketing journey in one intelligent platform."
        />

        {/* 4-col grid: 264px cards, 10px column gap, 40px row gap; card 07 spans two columns (538px) */}
        <div
          className={`${GAP} mx-auto grid max-w-[1086px] grid-cols-2 gap-x-[10px] gap-y-[40px] lg:grid-cols-4`}
        >
          {FRAGMENTS.map((f, i) => (
            <Reveal
              key={f.src}
              delay={(i % 4) * 80}
              className={f.span === 2 ? "col-span-2" : "col-span-1"}
            >
              <div className="transition-transform duration-300 ease-out hover:-translate-y-1.5">
                <Visual
                  src={f.src}
                  alt={f.alt}
                  w={f.w}
                  h={1313}
                  trim={{ l: 63, t: 53, r: 63, b: 74 }}
                  fluid
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. AI CAMPAIGN CREATOR
   ========================================================================= */
function AICampaignCreator() {
  return (
    <section id="ai-campaign-creator" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="AI Campaign Creator"
          title="Product In. Campaign Out."
          body="Simply add your product link or details. BRIO AI generates the campaign title, description, requirements, category, budget suggestions, and campaign creative in seconds."
        />
        <Reveal className={GAP}>
          <Visual
            src={A.aiCreator}
            alt="BRIO AI turns a product link into a campaign: title, description, category, budget and deadline"
            w={4320}
            h={5055}
            trim={{ l: 816, t: 1721, r: 816, b: 1724 }}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   4. CREATOR DISCOVERY
   ========================================================================= */
function CreatorDiscovery() {
  return (
    <section id="creator-discovery" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Creator Discovery"
          title="Find Your Perfect Match."
          body="Discover creators based on category, audience, region, engagement, and campaign relevance. Backed by real-time audience telemetry and automated brand safety screening."
          bodyMax="max-w-[830px]"
        />
        <Reveal className={GAP}>
          <Visual
            src={A.discovery}
            alt="Creator search with three top matches and additional high-affinity creator matches"
            w={4320}
            h={5055}
            trim={{ l: 384, t: 1439, r: 384, b: 1016 }}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   5. CAMPAIGN COLLABORATION
   ========================================================================= */
function CampaignCollaboration() {
  return (
    <section id="campaign-collaboration" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Campaign Collaboration"
          title="From Match to Partnership"
          body="Creators discover campaigns and apply. Brands review applications, select creators, and manage the collaboration from one connected workflow."
        />
        {/* visual is 1224px wide in the frame, 8px wider than the container */}
        <Reveal className={GAP}>
          <div className="-mx-1">
            <Visual
              src={A.collab}
              alt="Campaign applications list beside a selected creator's pitch, deliverables and approval controls"
              w={3678}
              h={2189}
              trim={{ t: 3, r: 6, b: 379 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   6. AUTOMATED SETTLEMENT
   ========================================================================= */
function AutomatedSettlement() {
  return (
    <section id="automated-settlement" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Automated Settlement"
          title="Approved Content. Automatically Paid."
          body="Connect campaign milestone completion directly with instant local and global payment rails. Once content is approved, escrow triggers zero-latency disbursements across UPI, SEPA, Wire, and digital wallets."
          bodyMax="max-w-[950px]"
        />
        <Reveal className={GAP}>
          <Visual
            src={A.settlement}
            alt="Content approved triggers an instant escrow payout of ₹35,000 to the creator"
            w={3660}
            h={1839}
            trim={{ l: 15, t: 72, r: 36, b: 66 }}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   7. AI ENGINE & TOOLKIT ARCHITECTURE  (full-bleed auto-scrolling row)
   ========================================================================= */
function AIToolkit() {
  const loop = [...TOOLS, ...TOOLS];
  return (
    <section id="ai-toolkit" className="relative overflow-x-clip py-20">
      <style>{`
        @keyframes brio-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .brio-marquee { animation: brio-marquee 60s linear infinite; }
        .brio-marquee-wrap:hover .brio-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .brio-marquee { animation: none; }
          .brio-marquee-wrap { overflow-x: auto; }
        }
      `}</style>

      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="AI Engine & Toolkit Architecture"
          title="Brio AI Toolkit. Your Creator & Brand AI Toolbox."
          body="A unified suite of intelligent cognitive models designed to empower brands and creators to generate, analyze, discover, and optimize high-velocity campaigns from a single neural nucleus."
          bodyMax="max-w-[890px]"
        />

        {/* 332px cards (328 visible) + 16px margin = 348px pitch, contained in page layout */}
        <Reveal className="-mb-2 mt-[64px]">
          <div className="brio-marquee-wrap overflow-hidden py-2 rounded-2xl">
          <div
            className="brio-marquee flex w-max"
            style={{ animationDelay: "-14.3s" }}
          >
            {loop.map((tool, i) => (
              <div
                key={`${tool.file}-${i}`}
                aria-hidden={i >= TOOLS.length}
                className="mr-4 shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1.5"
              >
                <Image
                  src={`${TOOLKIT_DIR}/${tool.file}`}
                  alt={i >= TOOLS.length ? "" : tool.alt}
                  width={996}
                  height={1419}
                  unoptimized
                  sizes="332px"
                  draggable={false}
                  className="block h-auto w-[332px] max-w-none select-none"
                />
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   8. CREATOR PROFILES
   ========================================================================= */
function CreatorProfiles() {
  return (
    <section id="creator-profiles" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Creator Profiles"
          title="Your Influence Has a Home. Public Profiles & Media Kits."
          titleMax="max-w-[860px]"
          body="Build an institutional creator or brand presence with verified public profiles, live portfolio engagement telemetry, 1-click rate cards, and on-chain collaboration history."
        />
        <Reveal className={GAP}>
          <Visual
            src={A.profiles}
            alt="Maya Lin's public creator profile with live stats and portfolio of top-performing content"
            w={3552}
            h={4488}
            trim={{ t: 3, b: 102 }}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   9. PREDICTIVE ATTRIBUTION & TELEMETRY
   ========================================================================= */
function PredictiveAttribution() {
  return (
    <section id="predictive-attribution" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Predictive Attribution & Telemetry"
          title="Turn Content into Insight. Real-Time Attribution."
          body="Understand campaign performance, content quality, engagement, sentiment, conversions, and ROI with AI-powered insights and cognitive synthesis."
          bodyMax="max-w-[800px]"
        />
        <Reveal className={GAP}>
          <Visual
            src={A.attribution}
            alt="Live attribution dashboard: total reach, engagement rate, verified clicks and attributed GMV"
            w={3669}
            h={1080}
            trim={{ l: 6, t: 3, r: 15, b: 57 }}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   10. CTA  (compact: text left, button right)
   ========================================================================= */
function FinalCTA() {
  return (
    <section id="get-started" className="relative overflow-x-clip py-20">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex min-h-[274px] flex-col items-start justify-between gap-8 rounded-xl bg-[#3B67D8] px-6 py-10 sm:px-12 md:flex-row md:items-center md:gap-10 md:pb-[52px] md:pt-[75px]">
            <div className="max-w-[660px]">
              <h2 className="text-[32px] font-bold leading-[40px] tracking-[-1.2px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
                Make Every Campaign Count
              </h2>
              <p className="mt-7 text-[16px] font-normal leading-[24px] text-white sm:text-[18px] sm:leading-[26px]">
                Bring your brand and the right creators together with smarter AI-powered
                influencer marketing.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-[62px] w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F7F9FB] text-[20px] font-medium leading-[28px] text-[#0B0B0F] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-[296px]"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE
   ========================================================================= */
export default function Page() {
  return (
    <main className="bg-black text-white [font-family:Inter,ui-sans-serif,system-ui,sans-serif]">
      <Hero />
      <WhatIsBrio />
      <AICampaignCreator />
      <CreatorDiscovery />
      <CampaignCollaboration />
      <AutomatedSettlement />
      <AIToolkit />
      <CreatorProfiles />
      <PredictiveAttribution />
      <FinalCTA />
    </main>
  );
}
