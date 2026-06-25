import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Brain, Cloud, Cpu, Shield, Code, Settings, 
  Target, Eye, Heart, ArrowRight, Zap, Users, 
  Rocket, Globe2, Trophy, Check, Play 
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Company Overview",
  description: "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
  alternates: {
    canonical: "/about/company-overview"
  }
};

// --- PURE SVG WAVE LINES FOR SEAMLESS SECTIONS ---
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0.2" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
    </defs>
  );

  return (
    <div className="w-full h-16 md:h-24 relative bg-transparent flex items-center justify-center overflow-hidden -my-8 md:-my-12 z-10 pointer-events-none">
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <GradientDef />

        {variant === "smooth" && (
          <>
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
          </>
        )}

        {variant === "grid" && (
          <>
            <g opacity="0.4">
              {[...Array(40)].map((_, i) => {
                const y1 = 48 + Math.sin((i / 40) * Math.PI) * 24;
                return (
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade)" strokeWidth="1" />
                );
              })}
            </g>
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}

// --- SECTION 1: HERO ---
function Hero() {
  const stats = [
    { value: "525+", label: "Happy Clients", icon: Users },
    { value: "2500+", label: "Projects Delivered", icon: Rocket },
    { value: "15+", label: "Awards Won", icon: Trophy },
    { value: "30+", label: "Countries Served", icon: Globe2 }
  ];

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden bg-black text-white">
      {/* Skyscraper Background Image (SkyStructure style) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/About-page/devopstrio_hero_city.png" 
          alt="Devopstrio Future Infrastructure"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Soft top-bottom-left gradients for rich contrast & dark readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/30 z-5" />
      </div>

      {/* Floating Glow Spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_65%)] pointer-events-none z-1" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center w-full pb-8">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-[10px] font-mono tracking-widest text-rose-500 uppercase mb-6 font-bold shadow-[0_0_12px_rgba(225,29,72,0.1)]">
            ABOUT DEVOPSTRIO
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            Innovating Today <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-amber-500">
              Inspiring Tomorrow
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-zinc-350 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
            We deliver intelligent solutions that drive growth, empower businesses, and create lasting impact through secure cloud and AI co-engineering.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/services" 
              className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              <Play size={12} className="text-rose-500 fill-rose-500" />
              <span>Watch Overview</span>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Floating Stats Strip Overlay (Nexora style) */}
      <div className="w-full max-w-5xl mx-auto px-6 relative z-20 mt-8 translate-y-12 lg:translate-y-16">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 bg-zinc-950/85 backdrop-blur-md border border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-2xl">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="flex items-center gap-4 justify-start pl-4 lg:pl-6">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <div className="text-xl md:text-2xl font-black text-white leading-none tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mt-1 font-bold">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- SECTION 2: WHAT WE DO / CAPABILITIES (Nexora style) ---
function CapabilitiesSection() {
  const points = [
    {
      icon: Brain,
      title: "Digital Transformation",
      desc: "Modernize your business workflows with custom integration templates, robust AI agents, and custom backend systems.",
      link: "/services/digital-transformation"
    },
    {
      icon: Cpu,
      title: "IT Consulting",
      desc: "Expert structural guidance to optimize active systems, audit code quality, and plan cloud migrations securely.",
      link: "/services/consulting"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Scalable, resilient cloud-native architectures deployed across AWS, Azure, and Google Cloud platforms.",
      link: "/services/cloud"
    },
    {
      icon: Shield,
      title: "Data & Analytics",
      desc: "Convert raw enterprise data streams into structured actionable insight stores and secure database vaults.",
      link: "/services/data-analytics"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden pt-36">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Solutions that Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Real Impact</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-semibold mt-3 leading-relaxed">
              From strategy formulation to architectural execution, we provide end-to-end cloud and AI engineering co-development tailored to your specific organizational targets.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 hover:text-rose-400 transition-colors">
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group h-full p-7 bg-zinc-950/60 border border-zinc-900/60 hover:border-zinc-800 rounded-2xl flex flex-col justify-between items-start text-left transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                  <div className="w-full">
                    {/* Glowing spinning icon container (OurAdvantage pattern) */}
                    <div className="relative mb-6">
                      <div className="relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-full border border-rose-500/40 bg-black shadow-[0_0_20px_rgba(225,29,72,0.15)] group-hover:shadow-[0_0_35px_rgba(225,29,72,0.4)] group-hover:border-rose-450 transition-all duration-500">
                        <div className="absolute inset-[-4px] border border-dashed border-rose-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                        <Icon size={20} className="text-rose-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold text-white mb-3 group-hover:text-rose-500 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-semibold mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <Link href={p.link} className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-rose-500 group-hover:text-rose-400 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 3: COMPANY OVERVIEW / TRUSTED PARTNER (Nexora style) ---
function CompanyOverviewSection() {
  const highlights = [
    "Client-Centric Collaborative Design",
    "Proven Track Record of 99.99% Infrastructure Uptime",
    "Commitment to Security and Compliance Standards"
  ];

  return (
    <section id="overview" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_75%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Checkmarks */}
          <div className="lg:col-span-6 text-left space-y-6">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">ABOUT DEVOPSTRIO</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Your Trusted Partner for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Sustainable Growth</span>
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-semibold">
                At Devopstrio, we combine cloud native innovation, domain expertise, and deep engineering collaboration to help modern organizations build resilient architectures, unlock scalability, and establish reliable systems for long-term stability.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3.5">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs md:text-sm text-zinc-300 font-bold leading-tight">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="pt-2">
              <Link href="/about" className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:-translate-y-0.5 inline-block">
                Learn More About Us
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Office Graphic with Badge Card (Nexora style) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <Reveal delay={0.1} className="w-full max-w-[480px] relative">
              {/* Outer Glow container */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 p-2 hover:border-zinc-800 transition-all duration-500 shadow-2xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 relative">
                  <img 
                    src="/assets/About-page/devopstrio_office_meeting.png" 
                    alt="Devopstrio Co-Engineering Center"
                    className="w-full h-full object-cover object-center select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating "15+ Years" badge (Nexora style) */}
              <div className="absolute -bottom-6 -right-2 md:-right-6 p-5 max-w-[210px] bg-zinc-950/90 backdrop-blur-md border border-zinc-850 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.7)] text-left z-20">
                <div className="text-3xl font-black text-rose-500 tracking-tight leading-none mb-1">
                  7+
                </div>
                <div className="text-[11px] font-bold text-white uppercase tracking-wider mb-1.5 font-mono">
                  Years of Experience
                </div>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed">
                  Delivering value and building lasting enterprise partnerships worldwide.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- SECTION 4: OUR JOURNEY (Timeline) ---
function OurStoryTimeline() {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded & Vision Set",
      desc: "Devopstrio is established with a clear mission: simplify complex infrastructure automation and help companies adopt DevOps culture.",
      tags: ["Founding", "Automation"]
    },
    {
      year: "2020",
      title: "Engineering Services Expansion",
      desc: "Expanded into full-stack software engineering and application modernization, supporting clients with complete product delivery.",
      tags: ["Full-Stack", "Scale"]
    },
    {
      year: "2022",
      title: "Cloud Transformation Partnerships",
      desc: "Established strategic alliances with AWS, Microsoft Azure, and Google Cloud, building secure and cost-efficient landing zones.",
      tags: ["Hyperscalers", "IaC"]
    },
    {
      year: "2024",
      title: "AI Innovation Lab Launch",
      desc: "Launched a specialized AI lab to build custom LLM workflows, autonomous agent networks, and vector search systems.",
      tags: ["GenAI", "Agents"]
    },
    {
      year: "2025",
      title: "Global Hub Expansion",
      desc: "Opened consulting and delivery hubs in the United Kingdom, Europe, and India to support round-the-clock enterprise needs.",
      tags: ["UK", "India", "24/7"]
    },
    {
      year: "2026",
      title: "Future Ready Systems",
      desc: "Co-engineering resilient, secure, and autonomous platforms that power the next generation of enterprise automation.",
      tags: ["Autonomous", "Future"]
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              How We Evolved
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm font-semibold mt-3 max-w-lg mx-auto">
              Tracking our growth from a small automation consultancy to a global co-engineering partner.
            </p>
          </Reveal>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-zinc-900 ml-4 md:ml-32 pl-8 md:pl-10 space-y-12">
          {milestones.map((m, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="relative group text-left">
                
                {/* Year Label */}
                <div className="md:absolute md:right-full md:mr-10 md:top-0 text-left md:text-right mb-2 md:mb-0">
                  <span className="text-3xl font-black text-rose-500 font-mono tracking-tight group-hover:scale-105 inline-block transition-transform duration-300">
                    {m.year}
                  </span>
                </div>

                {/* Glowing Spinning Node on the line */}
                <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-black border border-rose-500/40 group-hover:border-rose-400 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300 flex items-center justify-center">
                  <div className="absolute inset-[-2px] border border-dashed border-rose-500/30 rounded-full animate-[spin_25s_linear_infinite]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </div>

                {/* Content Card */}
                <div className="p-6 bg-zinc-950/40 border border-zinc-900 group-hover:border-zinc-800 rounded-2xl transition-all duration-300">
                  <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-rose-500 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-semibold mb-4">
                    {m.desc}
                  </p>
                  {/* Red Pill Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[9px] font-black tracking-wider uppercase bg-[#E11D48] text-white select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 5: MISSION, VISION & VALUES ---
function MissionVisionValues() {
  const coreValues = [
    "Innovation",
    "Integrity",
    "Customer Success",
    "Engineering Excellence",
    "Continuous Learning",
    "Collaboration"
  ];

  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "Deliver innovative engineering solutions that accelerate digital transformation.",
      footer: "Enabling businesses to scale and automate with speed and control."
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "Become a globally trusted technology engineering partner.",
      footer: "Fostering an engineering culture built on trust and reliability."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-2 font-mono">Purpose</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Mission, Vision & Core Values
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05 + 0.05}>
                <div className="group h-full p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 shadow-xl">
                  <div>
                    {/* Glowing spinning icon */}
                    <div className="relative mb-6">
                      <div className="relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-full border border-rose-500/40 bg-black shadow-[0_0_20px_rgba(225,29,72,0.15)] group-hover:shadow-[0_0_35px_rgba(225,29,72,0.4)] group-hover:border-rose-450 transition-all duration-500">
                        <div className="absolute inset-[-4px] border border-dashed border-rose-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                        <Icon size={20} className="text-rose-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-rose-500 transition-colors">{sec.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6">
                      {sec.desc}
                    </p>
                  </div>
                  <div className="text-[11px] text-zinc-500 font-semibold italic border-t border-zinc-900/60 pt-4">
                    {sec.footer}
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Card 3: Values */}
          <Reveal delay={0.15}>
            <div className="group h-full p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 shadow-xl">
              <div>
                {/* Glowing spinning icon */}
                <div className="relative mb-6">
                  <div className="relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-full border border-rose-500/40 bg-black shadow-[0_0_20px_rgba(225,29,72,0.15)] group-hover:shadow-[0_0_35px_rgba(225,29,72,0.4)] group-hover:border-rose-450 transition-all duration-500">
                    <div className="absolute inset-[-4px] border border-dashed border-rose-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                    <Heart size={20} className="text-rose-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-rose-500 transition-colors">Core Values</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {coreValues.map((v, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-zinc-500 font-semibold italic border-t border-zinc-900/60 pt-4 mt-6">
                Principles that guide our collaboration and execution.
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

// --- SECTION 6: ENTERPRISE CTA ---
function EnterpriseCTA() {
  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_65%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="relative rounded-[32px] p-8 md:p-16 bg-gradient-to-r from-zinc-950 via-[#0d0407] to-zinc-950 border border-zinc-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-center overflow-hidden">
            {/* Reflection lines */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-rose-950 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-rose-950/20 to-transparent pointer-events-none" />

            <div className="max-w-2xl mx-auto">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Collaborate</span>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let's Build the <br className="hidden sm:block" /> Future Together
              </h2>
              
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold mb-10">
                Transform your business with state-of-the-art AI applications, robust cloud environments, automated DevOps workflows, and enterprise engineering capabilities.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight size={13} />
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Company Overview", item: "/about/company-overview" }
      ]} />
      
      {/* Glow Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] pointer-events-none" />

      {/* 1. Hero */}
      <Hero />

      {/* Divider */}
      <SvgWaveLine variant="smooth" />

      {/* 2. Capabilities Section */}
      <CapabilitiesSection />

      {/* Divider */}
      <SvgWaveLine variant="grid" />

      {/* 3. Company Overview Section */}
      <CompanyOverviewSection />

      {/* Divider */}
      <SvgWaveLine variant="liquid" />

      {/* 4. Our Story / Journey */}
      <OurStoryTimeline />

      {/* Divider */}
      <SvgWaveLine variant="dashed" />

      {/* 5. Mission • Vision • Values */}
      <MissionVisionValues />

      {/* Divider */}
      <SvgWaveLine variant="particles" />

      {/* 6. Call to Action */}
      <EnterpriseCTA />
    </main>
  );
}
