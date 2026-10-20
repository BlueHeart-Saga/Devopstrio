
// ==========================================
// ENGINEERING SUITE (CAPABILITIES SCROLLER)
// ==========================================
const SoftwareCapabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Full-Stack Web Applications", tag: "Frontend", desc: "Server-rendered Next.js applications with React 19, strict TypeScript, and edge routing.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp", href: "/ecosystem/technology-stack/software-engineering/responsive-edge-frontends" },
    { title: "High-Throughput Microservices", tag: "Backend", desc: "Asynchronous REST and gRPC microservices built with Python FastAPI, Node.js, and Go.", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp", href: "/ecosystem/technology-stack/software-engineering/high-throughput-backends" },
    { title: "Distributed API Gateways", tag: "Integration", desc: "Unified GraphQL federations, rate-limited REST gateways, and secure OpenAPI contracts.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp", href: "/ecosystem/technology-stack/software-engineering/tamper-proof-integrations" },
    { title: "Event-Driven & CQRS Systems", tag: "Architecture", desc: "Decoupled read/write persistence paths with Apache Kafka, Event Sourcing, and Redis.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp", href: "/ecosystem/technology-stack/software-engineering/cross-platform-mobile-apps" },
    { title: "Cross-Platform Mobile Apps", tag: "Mobile", desc: "Native-performance iOS and Android applications built with React Native and Flutter.", image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp", href: "/ecosystem/technology-stack/software-engineering/cross-platform-mobile-apps" },
    { title: "Cloud-Native Serverless APIs", tag: "Cloud", desc: "Zero-idle serverless microservices on AWS Lambda, Cloudflare Workers, and Azure Functions.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp", href: "/ecosystem/technology-stack/cloud-native/serverless-computing" },
    { title: "Enterprise Database Architecture", tag: "Data", desc: "Optimized PostgreSQL link pooling, horizontal sharding, and document caches with MongoDB.", image: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp", href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas" },
    { title: "Developer Golden Paths", tag: "Productivity", desc: "Containerized reproducible local development stacks and automated CI/CD linting gates.", image: "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp", href: "/ecosystem/technology-stack/platform-engineering/golden-path-templates" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-0">Our Software Engineering Capabilities</h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-[#0D0E12] border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-48 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                    unoptimized 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6 flex-grow">{item.desc}</p>
                  
                  <Link 
                    href={item.href}
                    className="mt-auto flex items-center gap-2 text-rose-500 text-xs md:text-sm font-bold hover:text-white transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Explore {item.title}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Explore all capabilities →
          </span>
        </div>
      </div>
    </section>
  );
};


// ==========================================
// SOLUTIONS (INDUSTRY USE CASES SCROLLER)
// ==========================================
const SoftwareIndustryUseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const useCases = [
    { title: "Digital Banking & FinTech", tag: "Finance", desc: "Low-latency trading portals, KYC identity verification, and multi-currency payment rails.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp", href: "/industries/banking-finance" },
    { title: "Healthcare & Telemedicine", tag: "Health", desc: "HIPAA-certified electronic health record (EHR) integrations and real-time video consultations.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp", href: "/industries/healthcare-life-sciences" },
    { title: "Omni-Channel Retail & E-Com", tag: "Commerce", desc: "High-concurrency headless storefronts, millisecond checkout workflows, and inventory sync.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp", href: "/industries/retail-ecommerce" },
    { title: "Industrial & Smart Operations", tag: "Industrial", desc: "Edge equipment telemetry dashboards, digital twin interfaces, and predictive maintenance portals.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp", href: "/industries/manufacturing" },
    { title: "Global Logistics & Tracking", tag: "Supply Chain", desc: "Real-time dispatch control towers, automated customs document processing, and fleet routing.", image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp", href: "/industries/retail-ecommerce" },
    { title: "Telecommunications & 5G", tag: "Networking", desc: "Subscriber self-service applications, eSIM provisioning systems, and automated billing engines.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp", href: "/industries/telecommunications" },
    { title: "Government & Public Services", tag: "Public", desc: "Accessible citizen service platforms, digital tax filing engines, and municipal voting systems.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp", href: "/industries/government-public-sector" },
    { title: "EdTech & Interactive Learning", tag: "Learning", desc: "Adaptive learning algorithms, remote examination portals, and student analytics dashboards.", image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp", href: "/industries/education" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SOLUTIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-0">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-[#0D0E12] border border-zinc-800/80 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-40 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6 flex-grow">{item.desc}</p>
                  <Link 
                    href={item.href}
                    className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit group/btn"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Navigation below scroller */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-rose-500/50 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider">
            Explore industry deployments →
          </span>
        </div>
      </div>
    </section>
  );
};

"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import LightRays from "@/components/ui/LightRays";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Terminal,
  Cpu,
  Workflow,
  Database,
  Layers,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Server,
  Activity,
  GitBranch,
  Code,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SoftwareEngineeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const technologies = [
    "React", "Next.js", "TypeScript", "FastAPI", "Node.js", "PostgreSQL", "MongoDB"
  ];

  const frontFeatures = [
    "React component architecture utilizing functional hooks",
    "Next.js server-side rendering (SSR) and static route compilation",
    "TypeScript strict types compiling clean UI parameters"
  ];

  const backFeatures = [
    "FastAPI Python APIs generating automatic Swagger documentation",
    "Node.js asynchronous event runners handling connection payloads",
    "Database link pools keeping queries fast and connection counts low"
  ];

  const apiFeatures = [
    "RESTful API route builders specifying schema input rules",
    "GraphQL endpoints returning matching field datasets in single queries",
    "gRPC protobuf communication protocols linking internal container pods"
  ];

  const patternFeatures = [
    "Domain-Driven Design (DDD) isolating critical business concepts",
    "CQRS pattern splitting database command writes from reading views",
    "Event Sourcing logs auditing historical system parameters"
  ];

  const qualityFeatures = [
    "Jest unit testing checking individual module functions safety",
    "Cypress integration tests checking actual web page user actions",
    "Static linters formatting code files automatically on commit"
  ];

  const productivityFeatures = [
    "Golden Path development templates spinning up setups instantly",
    "Containerized local workspaces running staging servers on Docker",
    "Automated package auditors tracking third-party libraries"
  ];

  const faqs = [
    { q: "Why standardize on Next.js and TypeScript?", a: "Next.js integrates server-side page rendering, styling compilers, and route bundling out of the box, while TypeScript prevents runtime type mismatch errors." },
    { q: "How is API performance optimized under high loads?", a: "We run asynchronous FastAPI threads, configure connection pooling for PostgreSQL, and use Redis caches for repeating query reads." },
    { q: "What is Domain-Driven Design (DDD)?", a: "DDD is a software architecture pattern that structures code directories around business domains rather than technology layers, improving codebase maintainability." },
    { q: "Do you support GraphQL alongside REST?", a: "Yes, we deploy GraphQL for complex frontend data fetches where custom nested objects are queried, and use REST for simple operations." },
    { q: "What is the benefit of CQRS?", a: "Command Query Responsibility Segregation (CQRS) separates data mutation queries from read queries, allowing you to optimize storage layers independently." },
    { q: "How are unit tests structured?", a: "We write Jest tests for helper functions, React Testing Library tests for frontends, and verify API responses using PyTest." },
    { q: "What linting standards are enforced?", a: "We standardize on ESLint, Prettier, and custom static checks, running automatic format routines on code commit." },
    { q: "Does the platform support MongoDB for transaction data?", a: "We recommend PostgreSQL for relational transactions matching strict schemas, and MongoDB for unstructured document storage." },
    { q: "How do you secure connection details in code?", a: "We configure systems to pull values from environment variables, utilizing cloud secrets vaults during production run times." },
    { q: "How do we get started with your software engineering unit?", a: "Click 'Consult Software Architects' to schedule a code review and discuss your project layout specifications." }
  ];

  const heroMetrics = [
    { value: "Next.js / React", label: "Web Frameworks" },
    { value: "FastAPI / NestJS", label: "API Gateways" },
    { value: "PostgreSQL", label: "Relational Storage" },
    { value: "Vitest / Playwright", label: "Testing Suites" }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Product & Platform Engineering"
        title={
          <>
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Masterpieces
            </span>
          </>
        }
        subtitle="Crafting flawless digital experiences. We architect stunning Next.js interfaces, lightning-fast backend APIs, and meticulously tested microservices that scale effortlessly."
        dotField={true}
        dotFieldProps={{
          dotRadius: 3,
          dotSpacing: 14,
          bulgeStrength: 67,
          glowRadius: 160,
          sparkle: false,
          waveAmplitude: 0,
          gradientFrom: "rgba(217, 70, 239, 0.35)",
          gradientTo: "rgba(192, 132, 252, 0.15)",
          glowColor: "#1a051c",
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "SOFTWARE ENGINEERING" }
        ]}
      >
        <Link
          href="/contact#contact-form"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Consult Software Architects
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* TECHNOLOGIES BAR */}
      <section className="w-full py-10 bg-zinc-950 border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {technologies.map((tech, idx) => (
              <span key={idx} className="text-zinc-500 hover:text-zinc-300 transition-colors duration-300 text-xs md:text-sm font-mono tracking-wider font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING SUITE */}
      <SoftwareCapabilities />

      {/* 2. FRONTEND ENGINEERING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FRONTEND</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Frontend Engineering</h2>
              <Link 
                href="/ecosystem/technology-stack/software-engineering/responsive-edge-frontends"
                className="inline-flex items-center gap-2 mt-6 text-rose-500 text-xs font-bold hover:text-white transition-colors group/btn"
              >
                <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                  <ChevronRight size={14} />
                </div>
                Explore Responsive Edge Frontends
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BACKEND ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {backFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">BACKEND CORE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Backend Engineering</h2>
              <Link 
                href="/ecosystem/technology-stack/software-engineering/high-throughput-backends"
                className="inline-flex items-center gap-2 mt-6 text-rose-500 text-xs font-bold hover:text-white transition-colors group/btn"
              >
                <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                  <ChevronRight size={14} />
                </div>
                Explore High-Throughput Backends
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. API ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">API SYSTEM</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">API Ecosystem</h2>
              <Link 
                href="/ecosystem/technology-stack/software-engineering/tamper-proof-integrations"
                className="inline-flex items-center gap-2 mt-6 text-rose-500 text-xs font-bold hover:text-white transition-colors group/btn"
              >
                <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                  <ChevronRight size={14} />
                </div>
                Explore Tamper-Proof Integrations
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {apiFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <LinkIcon className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE PATTERNS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {patternFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Layers className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PATTERNS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Architecture Patterns</h2>
              <Link 
                href="/ecosystem/technology-stack/software-engineering/cross-platform-mobile-apps"
                className="inline-flex items-center gap-2 mt-6 text-rose-500 text-xs font-bold hover:text-white transition-colors group/btn"
              >
                <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover/btn:bg-rose-500 group-hover/btn:text-white transition-colors">
                  <ChevronRight size={14} />
                </div>
                Explore Cross-Platform Mobile Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUALITY ENGINEERING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">QUALITY</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Quality Engineering</h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualityFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING PRODUCTIVITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {productivityFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Activity className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">DEVELOPER EXPERIENCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Engineering Productivity</h2>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS / INDUSTRY USE CASES */}
      <SoftwareIndustryUseCases />

      {/* FAQs */}
      <section id="faq" className="w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Questions we get <span className="text-white font-bold bg-gradient-to-r from-red-655 via-rose-600 to-rose-500 bg-clip-text text-transparent">asked every day</span>.
            </h2>
            
          </Reveal>

          {/* Accordion FAQ */}
          <div className="flex flex-col border-t border-zinc-900 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-550 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold max-w-3xl animate-fadeIn flex flex-col gap-4">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Below FAQ callout */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
                Still have questions? Don&apos;t sit with them. Reach out to our team — we respond to every message personally.
              </p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        ctaTitle="Deliver Resilient Software With"
        ctaHighlight="Modern Engineering Excellence"
        ctaDesc="Architect robust full-stack solutions, distributed APIs, and maintainable systems built for high velocity and scale."
        ctaBtnText="TALK TO SOFTWARE ARCHITECTS"
        backLink="/ecosystem/technology-stack"
      />
    </main>
  );
}
