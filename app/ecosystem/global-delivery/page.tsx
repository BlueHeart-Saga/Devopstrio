"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  GitBranch,
  ShieldAlert,
  UserCheck,
  Server,
  Activity,
  Layers,
  HeartHandshake,
  Clock,
  Compass
} from "lucide-react";
import Link from "next/link";

const mapLocations = [
  { id: "london", city: "London", label: "Global HQ", flag: "🇬🇧", x: 47.4, y: 37.1 },
  { id: "london-w1", city: "London W1", label: "Client Experience Centre", flag: "🇬🇧", x: 48, y: 38.3 },
  { id: "tennessee", city: "Tennessee", label: "North America Ops", flag: "🇺🇸", x: 33.6, y: 46.6 },
  { id: "bengaluru", city: "Bengaluru", label: "Engineering Centre", flag: "🇮🇳", x: 61.1, y: 58.4 },
  { id: "chennai", city: "Chennai", label: "Cloud & SecOps Hub", flag: "🇮🇳", x: 61.7, y: 58.5 },
  { id: "thoothukudi", city: "Thoothukudi", label: "DevOps & Automation", flag: "🇮🇳", x: 61.5, y: 60 },
];

export default function DeliveryOverviewPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activePin, setActivePin] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const deliveryModels = [
    { title: "Onshore", desc: "Client-facing consulting teams providing direct advisory, local architecture, and face-to-face workshop facilitation.", icon: UserCheck },
    { title: "Nearshore", desc: "Regional support hubs bridging timezones, operating within neighboring geopolitical boundaries, and satisfying compliance norms.", icon: Compass },
    { title: "Offshore", desc: "Engineering and DevOps hubs handling continuous integration development, code packaging, database performance tuning, and 24/7 SRE alerts.", icon: Server }
  ];

  const lifecycleStages = [
    { name: "Discovery", desc: "Audit existing software infrastructure and map database dependencies." },
    { name: "Architecture", desc: "Design resilient multicloud environments and zero-trust policies." },
    { name: "Build", desc: "Compile codebase branches and package container assets securely." },
    { name: "Deployment", desc: "Run canary rollouts and automate GitOps pipeline tasks." },
    { name: "Operations", desc: "Monitor system health telemetry and resolve L1-L3 incidents." },
    { name: "Optimization", desc: "Audit cloud resource utilization rates to lower infrastructure spend." }
  ];

  const regionalCenters = [
    { city: "London", desc: "Global Headquarters & Client Experience Centre.", type: "Strategic Hub" },
    { city: "Tennessee", desc: "North American Operations Center.", type: "Sub-Regional Hub" },
    { city: "Bengaluru", desc: "Scale Engineering & Innovation Center.", type: "Engineering Hub" },
    { city: "Chennai", desc: "Managed Cloud & Security Operations Hub.", type: "Operations Hub" },
    { city: "Thoothukudi", desc: "DevOps Factory & Automation Center.", type: "Delivery Center" }
  ];

  const governancePillars = [
    { title: "PMO Integration", desc: "Unified project management reporting progress logs, sprint velocity charts, and resource allocations." },
    { title: "Architecture Reviews", desc: "System design boards auditing components decoupling and database connections layout." },
    { title: "Security Reviews", desc: "Scanning configuration templates and container base images for software vulnerabilities." },
    { title: "Quality Gates", desc: "Enforcing minimum test coverage percentages and style linter rules before production merges." }
  ];

  const faqs = [
    { q: "What is your global delivery model?", a: "We combine onshore strategic consulting with nearshore and offshore engineering teams to optimize delivery speed, costs, and compliance." },
    { q: "How are timezones managed during incidents?", a: "We run a Follow-the-Sun SRE schedule where open alert logs are transferred smoothly between UK, US, and India hubs at shift boundaries." },
    { q: "Do you comply with local data privacy acts?", a: "Yes, we isolate data storage setups inside region-specific enclaves, passing GDPR, UK GDPR, and SOC 2 audits." },
    { q: "What is the role of your London Client Experience Centre?", a: "It hosts executive solution design workshops, innovation demonstrations, and strategic architecture reviews." },
    { q: "How are project milestones tracked?", a: "Our PMO handles sprint tracking boards, publishing metrics charts showing pipeline changes and velocity updates." },
    { q: "Can we mix onshore advisors with offshore developer teams?", a: "Yes, our Hybrid Delivery Model pairs onshore enterprise architects with offshore code developers for optimal collaboration." },
    { q: "What are your incident response SLAs?", a: "We guarantee responses to critical P1 incidents within 15 minutes, managed by our 24/7 NOC." },
    { q: "Do you support hybrid cloud environments?", a: "Yes, we write Terraform scripts that orchestrate workloads across AWS, Azure, OCI, and on-premise datacenters." },
    { q: "How often do you run code quality reviews?", a: "Our architects conduct reviews on every major release, while CI pipelines run automated quality checks on every pull request." },
    { q: "How do we request a custom SLA plan?", a: "Click the 'Talk To Delivery Experts' button below to schedule an assessment with our operations leads." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-32 bg-black overflow-hidden border-b border-zinc-900/60 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.035),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-10">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Globe className="w-3.5 h-3.5" />
              GLOBAL OPERATIONS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Global Delivery Network
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-6">
              Delivering Enterprise Technology Solutions Across Regions, Time Zones, and Industries.
            </p>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold">
              Our distributed framework pairs client-facing consulting offices with robust engineering centres, keeping platform services active around the clock.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Talk To Delivery Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. GLOBAL FOOTPRINT (Interactive Map) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">GLOBAL FOOTPRINT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Wherever you build, <span className="text-rose-500">we are already there.</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-xl mx-auto mt-4">
              Strategic offices and engineering centres positioned across the United Kingdom, United States, Europe, and India.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "38%" }}>
                <img
                  src="/assets/Contact-page/map/image1.png"
                  alt="World map showing office locations"
                  className="absolute inset-0 w-full h-full object-contain opacity-60"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#030303_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />

                {mapLocations.map(loc => {
                  const isActive = activePin === loc.id;
                  return (
                    <div
                      key={loc.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                      onMouseEnter={() => setActivePin(loc.id)}
                      onMouseLeave={() => setActivePin(null)}
                    >
                      <span className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? "animate-ping bg-rose-500/30 scale-150" : "bg-rose-500/15 scale-125"}`} style={{ width: 7, height: 7, top: -1, left: -1 }} />
                      <span className={`block rounded-full border transition-all duration-200 ${isActive ? "bg-white border-rose-500 w-2.5 h-2.5 shadow-[0_0_8px_rgba(244,63,94,0.8)]" : "bg-rose-500 border-rose-400/60 w-1.5 h-1.5 shadow-[0_0_5px_rgba(244,63,94,0.6)]"}`} />

                      <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 transition-all duration-200 whitespace-nowrap ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}`}>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-md border shadow-lg text-[9px] font-bold bg-zinc-900/95 border-rose-800/60 text-white backdrop-blur-sm">
                          <span className="text-xs leading-none">{loc.flag}</span>
                          <span>{loc.city} ({loc.label})</span>
                        </div>
                        <div className="w-1.5 h-1.5 bg-zinc-900/95 border-r border-b border-zinc-800/80 rotate-45 mx-auto -mt-[3px]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. DELIVERY MODEL */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">OPERATIONAL ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Our Delivery Model</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryModels.map((model, idx) => {
              const IconComp = model.icon;
              return (
                <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_35px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col min-h-[200px]">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                    <IconComp className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">{model.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DELIVERY LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">METHODOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Delivery Lifecycle</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {lifecycleStages.map((stage, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/20 border border-zinc-900/60 rounded-xl relative hover:border-rose-500/20 transition-all duration-300">
                <div className="absolute top-4 right-4 text-xs font-mono text-rose-500/30 font-bold">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-white mb-2">{stage.name}</h4>
                <p className="text-[11px] text-zinc-400 font-bold leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REGIONAL CENTERS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FACILITIES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Regional Centers</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Our global footprint is powered by offices and operational enclaves engineered to deliver enterprise solutions.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regionalCenters.map((center, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="text-[9px] font-mono text-rose-500 uppercase font-bold tracking-wider mb-2 block">{center.type}</span>
                    <h4 className="text-lg font-bold text-white mb-2">{center.city}</h4>
                  </div>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{center.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DELIVERY GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">GOVERNANCE & TRUST</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Delivery Governance</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {governancePillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOLLOW-THE-SUN OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl relative overflow-hidden lg:order-2">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">24×7 Operations Model</h4>
                    <p className="text-xs text-zinc-500 font-bold">Timezone handovers minimize service latency.</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">
                  Active operations tickets are transferred seamlessly between our onshore architects, nearshore managers, and offshore SRE desks at shift ends, providing zero-burnout support.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">ROUND-THE-CLOCK</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Follow-The-Sun Operations</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                Keep platform nodes active with continuous shift-based operations coverage across global timezones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[11px] font-mono text-rose-500 uppercase tracking-[0.2em] block mb-4 font-bold">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-zinc-950/50 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0"}`}>
                    <p className="p-6 text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Coordinate?</h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our operations leads to establish your custom global delivery SLA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Talk To Delivery Experts
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
