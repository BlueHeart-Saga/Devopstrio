"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const corePoints = [
  {
    num: "01",
    tabName: "Global Presence, Local Expertise",
    title: "Global Presence, Local Expertise",
    desc: "Access world-class engineering expertise locally with global delivery teams designed to scale seamlessly under flexible engagement models.",
    gradient: "from-rose-950/40 via-purple-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/globalpresence.webp",
    href: "/about"
  },
  {
    num: "02",
    tabName: "Cloud, Data & AI Excellence",
    title: "Cloud, Data & AI Excellence",
    desc: "Leverage intelligence-driven automation, GenAI, and cloud platforms (Azure, AWS, GCP) to unlock next-generation product engineering.",
    gradient: "from-blue-950/40 via-indigo-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/cloudai.webp",
    href: "/services/ai-data-innovation"
  },
  {
    num: "03",
    tabName: "Outcome-Driven Transformation",
    title: "Outcome-Driven Transformation",
    desc: "We align every project outcome with direct business value, performance milestones, cost-efficiency metrics, and operational goals.",
    gradient: "from-teal-950/40 via-emerald-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/outcome.webp",
    href: "/about"
  },
  {
    num: "04",
    tabName: "End-to-End Technology Delivery",
    title: "End-to-End Technology Delivery",
    desc: "From conceptualization, design, architecture, implementation to managed operations and continuous delivery—all managed under one strategic partner.",
    gradient: "from-emerald-950/40 via-zinc-900/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/technology.webp",
    href: "/ecosystem/global-delivery"
  },
  {
    num: "05",
    tabName: "Multi-Cloud Engineering Leadership",
    title: "Multi-Cloud Engineering Leadership",
    desc: "Our certified cloud experts build resilient infrastructures on AWS, Azure, Google Cloud, and complex hybrid environments.",
    gradient: "from-indigo-950/40 via-pink-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/multicloud.webp",
    href: "/services/cloud-services"
  },
  {
    num: "06",
    tabName: "Enterprise-Grade Security & Reliability",
    title: "Enterprise-Grade Security & Reliability",
    desc: "Zero-trust environments, compliance guardrails, automated threat-detection, and highly reliable Site Reliability Engineering built into every delivery.",
    gradient: "from-violet-950/40 via-fuchsia-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/gradesecurity.webp",
    href: "/services/cybersecurity"
  },
  {
    num: "07",
    tabName: "Scalable Global Delivery Model",
    title: "Scalable Global Delivery Model",
    desc: "Scale teams dynamically with elite developers, DevOps engineers, and cloud architects operating under our optimized global framework.",
    gradient: "from-fuchsia-950/40 via-rose-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/globaldeliver.webp",
    href: "/ecosystem/global-delivery"
  },
  {
    num: "08",
    tabName: "Long-Term Strategic Partnership",
    title: "Long-Term Strategic Partnership",
    desc: "We focus on long-term relationships, strategic consulting, knowledge-sharing, and continuous value creation beyond transactional contracts.",
    gradient: "from-rose-950/40 via-orange-950/30 to-zinc-950/80",
    image: "/webp/assets/Home-page/whychoose/partnership.webp",
    href: "/about"
  }
];

const checklist = [
  "AI & Cloud Specialists",
  "Enterprise-Grade Security",
  "Infrastructure Automation Experts",
  "Modern Software Engineering",
  "Industry-Specific Expertise",
  "Scalable Global Delivery",
  "24×7 Managed Operations",
  "Long-Term Technology Partnership"
];

export function WhyDevopstrio() {
  /*
  === OLD CODE (Preserved for reference) ===
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % corePoints.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activePoint = corePoints[activeIndex];

  // Old JSX:
  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
    <div className="flex flex-col gap-3 md:gap-4 select-none">
      {corePoints.map((point, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={point.title}
            onClick={() => setActiveIndex(idx)}
            className="flex items-center gap-4 text-left group focus:outline-none py-1"
          >
            <span className={`w-1 h-8 bg-rose-500 transition-all duration-300 origin-center ${
              isActive ? "opacity-100 scale-y-100 animate-pulse" : "opacity-0 scale-y-0"
            }`} />
            <span className={`text-lg md:text-xl xl:text-2xl font-bold tracking-tight transition-all duration-300 ${
              isActive 
                ? "text-white scale-[1.01] origin-left" 
                : "text-zinc-600 hover:text-zinc-400"
            }`}>
              {point.tabName}.
            </span>
          </button>
        );
      })}
    </div>

    <div className="flex flex-col lg:sticky lg:top-28">
      <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_20px_40px_rgba(0,0,0,0.6)] mb-8 select-none">
        {corePoints.map((point, idx) => (
          <div
            key={point.num}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-90 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={point.image}
              alt={point.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-25 mix-blend-color-dodge`} />
          </div>
        ))}

        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-4 opacity-40 pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => {
              const isSpecial = i === 12 || i === 18 || i === 7;
              return (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 transition-all duration-700 ${
                    isSpecial ? "text-rose-500 scale-125 animate-pulse" : "text-white/10"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              );
            })}
          </div>
          <span className="text-6xl md:text-7xl font-black text-white/90 leading-none select-none font-sans drop-shadow-md">
            {activePoint.num}
          </span>
        </div>
      </div>

      <div className="min-h-[140px] flex flex-col justify-start">
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
          {activePoint.title}
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold max-w-lg">
          {activePoint.desc}
        </p>
      </div>
    </div>
  </div>
  === END OLD CODE ===
  */

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Top Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Reveal>
            <span className="text-2xl font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
              Why Devopstrio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
              Engineering Innovation. Delivering Business Outcomes.
            </h2>
          </Reveal>
          {/* <Reveal delay={0.2}>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-md">
              We combine deep technical expertise, <Link href="/industries" className="text-rose-500 hover:underline font-medium">industry knowledge</Link>, and <Link href="/ecosystem/engineering-excellence" className="text-rose-500 hover:underline font-medium">modern engineering practices</Link> to help organizations innovate faster, <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-medium">operate securely</Link>, and scale confidently in an increasingly digital world.
            </p>
          </Reveal> */}
        </div>

        {/* =====================================================
            CLEAN 2x3 ENTERPRISE GRID (Top 2 + Middle 2 + Bottom 2)
            Clean, symmetrical, high-performance SEO architecture
        ===================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {[
            {
              id: "01",
              tag: "SRE & ENGINEERING",
              title: "Principal-Led Engineering Squads & SRE Guilds",
              desc: "Direct partnership with certified cloud architects and Site Reliability Engineers who design hardened infrastructures without outsourced tier-1 triage layers.",
              badges: ["Zero Script-Readers", "Direct Engineer Access", "Architectural Governance"]
            },
            {
              id: "02",
              tag: "MULTI-CLOUD RUNTIMES",
              title: "Multi-Cloud & Kubernetes Operational Rigor",
              desc: "Production-grade cluster operations across AWS, Azure, and Google Cloud featuring automated node pool upgrades, GitOps reconciliation, and multi-region failovers.",
              badges: ["Zero-Downtime Upgrades", "GitOps Synchronization", "Cross-Region HA"]
            },
            {
              id: "03",
              tag: "OBSERVABILITY & SLA",
              title: "Proactive Full-Stack Telemetry & 15-Minute Triage",
              desc: "Continuous synthetic user journey checks, distributed tracing, automated anomaly alerts, and strict 15-minute response guarantees for critical production blockers.",
              badges: ["15-Min Response SLA", "Synthetic Health Tests", "Blameless RCAs"]
            },
            {
              id: "04",
              tag: "FINOPS & GOVERNANCE",
              title: "Continuous Cloud FinOps & Cost Optimization",
              desc: "Monthly resource utilization audits, automated idle asset reclamation, and reserved instance commitment strategies delivering 30% to 45% lower cloud bills.",
              badges: ["Monthly Cost Audits", "Idle Asset Reclamation", "Predictable Budgets"]
            },
            {
              id: "05",
              tag: "SECURITY & COMPLIANCE",
              title: "Zero-Trust Security & Continuous Audit Readiness",
              desc: "Automated vulnerability scanning, strict IAM least-privilege enforcement, real-time SIEM event correlation, and weekly encrypted backup restore tests.",
              badges: ["Continuous Threat Scans", "Least-Privilege IAM", "Automated Restore Tests"]
            },
            {
              id: "06",
              tag: "STRATEGIC PARTNERSHIP",
              title: "Outcome-Driven Long-Term Value Creation",
              desc: "Beyond transactional support, we integrate with your engineering roadmap—providing quarterly architectural reviews, continuous team upskilling, and transparent KPIs.",
              badges: ["Quarterly Roadmaps", "Shared Slack/Teams Bridges", "Transparent KPIs"]
            }
          ].map((pillar, idx) => (
            <Reveal key={pillar.id} delay={idx * 0.05}>
              <div className="group relative rounded-2xl border border-white/[0.08] hover:border-rose-500/50 bg-gradient-to-br from-[#0c0c0e] via-[#080809] to-black p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(225,29,72,0.07)] hover:-translate-y-1 flex flex-col justify-between h-full overflow-hidden">
                {/* Left Crimson Accent Rail */}
                <div className="absolute left-0 top-7 bottom-7 w-1 rounded-r-full bg-zinc-800 group-hover:bg-rose-500 transition-colors duration-300" />

                {/* Subtle corner ambient glow on hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-rose-600/[0.04] group-hover:bg-rose-600/[0.09] rounded-full blur-2xl pointer-events-none transition-all duration-500" />

                <div className="pl-3 sm:pl-4">
                  {/* Pillar Meta Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 border border-rose-500/25 px-2.5 py-1 rounded-md">
                      PILLAR {pillar.id}
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase group-hover:text-zinc-300 transition-colors">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3 group-hover:text-rose-400 transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Capability Tags / Highlights */}
                <div className="pl-3 sm:pl-4 pt-5 border-t border-white/[0.06] mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {pillar.badges.map((b) => (
                      <span key={b} className="text-xs font-mono font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.07] px-3 py-1 rounded-full group-hover:border-rose-500/30 group-hover:text-white transition-all">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            OLD INTERACTIVE STICKY CARDS (Preserved in comments for reference)
            -----------------------------------------------------
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start mb-20 relative">
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 w-full">
            {corePoints.filter((_, i) => i % 2 === 0).map((point, idx) => (
              <div key={point.num} className="sticky w-full" style={{ top: `${100 + idx * 30}px`, zIndex: idx }}>
                <Reveal delay={0}>
                  <Link href={point.href} className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] overflow-hidden flex flex-col aspect-[16/10] group shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-zinc-700 cursor-pointer block">
                    <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out group-hover:blur-md group-hover:scale-105">
                      <Image src={point.image} alt={point.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-20 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                    </div>
                    <div className="relative z-20 p-8 flex flex-col h-full pointer-events-none justify-end">
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight drop-shadow-md">{point.title}</h3>
                      <p className="text-zinc-200 text-lg font-semibold leading-relaxed font-medium line-clamp-4">{point.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        ===================================================== */}


      </div>
    </section>
  );
}
export { WhyDevopstrio as default };
