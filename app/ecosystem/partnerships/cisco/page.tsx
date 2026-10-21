"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";
import { HeroParticleCanvas } from "@/components/ecosystem/HeroParticleCanvas";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { PartnerCertifications } from "@/sections/ecosystem/partnerships/PartnerCertifications";
import {
  ArrowUpRight,
  CheckCircle2,
  Plus,
  Minus,
  Shield,
  Briefcase,
  Sparkles,
  Workflow,
  ChevronRight,
  Zap,
  Check,
  Cpu,
  Database,
  Users,
  Layers,
  FileText,
  Layout,
  MessageSquare,
  Network,
  Wifi,
  Lock,
  Eye,
  Activity,
  Server
} from "lucide-react";
import Link from "next/link";

const ciscoSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "solutions", label: "Solutions" },
  { id: "architecture", label: "Architecture" },
  { id: "certifications", label: "Certifications" },
  { id: "use-cases", label: "Use Cases" },
  { id: "products", label: "Platform Areas" },
  { id: "why-us", label: "Why Us" },
  { id: "outcomes", label: "Outcomes" },
  { id: "faq", label: "FAQ" }
];

export default function CiscoPartnershipPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Scroll animations setup
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cleanupTriggers = () => { };
    let alive = true;

    const startMotion = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!alive) return;

      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.85 });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray<HTMLElement>(".fade-scroll-item").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.2, y: 15 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: true
            },
            delay: index * 0.02
          }
        );
      });

      cleanupTriggers = () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    startMotion();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      cleanupTriggers();
    };
  }, []);

  const heroHighlights = [
    { text: "Enterprise Networking & Connectivity", desc: "Build highly resilient branch, campus, and SD-WAN networks." },
    { text: "Security, Access & Threat Protection", desc: "Implement Zero Trust access, secure edge, and firewalls." },
    { text: "Collaboration & Hybrid Work", desc: "Enable seamless meeting experiences and connected workforce productivity." },
    { text: "Observability & Infrastructure Resilience", desc: "Gain complete visibility across devices, traffic, and service health." }
  ];

  const overviewCards = [
    { title: "Network Infrastructure & Connectivity", icon: <Network className="w-5 h-5 text-sky-500" /> },
    { title: "Security & Secure Access", icon: <Lock className="w-5 h-5 text-sky-500" /> },
    { title: "Collaboration & Hybrid Work", icon: <Users className="w-5 h-5 text-sky-500" /> },
    { title: "Observability & Digital Operations", icon: <Eye className="w-5 h-5 text-sky-500" /> }
  ];

  const capabilitiesList = [
    {
      title: "Enterprise Network Architecture",
      desc: "Design and optimize secure, scalable network foundations across offices, campuses, data centers, and distributed environments.",
      icon: <Network className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Secure Connectivity & Access",
      desc: "Support secure remote access, identity-aware connectivity, VPN modernization, and Zero Trust-aligned access controls.",
      icon: <Lock className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Network Security & Protection",
      desc: "Strengthen firewalls, segmentation, access policies, monitoring, and security visibility across enterprise environments.",
      icon: <Shield className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Collaboration & Hybrid Work",
      desc: "Enable secure collaboration, communication, meeting experiences, and connected workforce productivity.",
      icon: <Users className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Data Center & Infrastructure",
      desc: "Support resilient network design for application delivery, infrastructure performance, and high-availability operations.",
      icon: <Server className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Network Observability",
      desc: "Improve visibility across devices, traffic, service health, and operational performance with proactive monitoring.",
      icon: <Eye className="w-5 h-5 text-sky-500" />
    },
    {
      title: "SD-WAN / Distributed Networks",
      desc: "Modernize branch connectivity, improve performance, and support centralized control across distributed locations.",
      icon: <Wifi className="w-5 h-5 text-sky-500" />
    },
    {
      title: "Managed Network Operations",
      desc: "Provide operational support, configuration management, monitoring, incident response, and ongoing optimization.",
      icon: <Activity className="w-5 h-5 text-sky-500" />
    }
  ];

  const solutionsList = [
    { title: "Enterprise Network Modernization", desc: "Redesign core network infrastructure for agility." },
    { title: "Secure Access & Remote", desc: "Workforce Enablement" },
    { title: "Branch / Campus", desc: "Connectivity Transformation" },
    { title: "Data Center &", desc: "Infrastructure Networking" },
    { title: "SD-WAN & Distributed", desc: "Network Platforms" },
    { title: "Security Monitoring", desc: "& Threat Visibility" },
    { title: "Collaboration & Unified", desc: "Communications Support" },
    { title: "Managed Network", desc: "Operations & Optimization" }
  ];

  const architectureSteps = [
    { label: "End-User", desc: "Employees / Branches / Partners / Remote Teams" },
    { label: "Access Layer", desc: "Secure Access & Collaboration Layer" },
    { label: "Connectivity", desc: "Network Core / Branch / Campus Connectivity" },
    { label: "Security Layer", desc: "Security Controls, Segmentation & Policy Layer" },
    { label: "Application Layer", desc: "Applications, Data Center & Cloud Connectivity" },
    { label: "Observability", desc: "Monitoring, Observability & Operations Layer" },
    { label: "Foundation", desc: "Resilient Enterprise Infrastructure Foundation" }
  ];

  const useCases = [
    {
      domain: "Network & Connectivity",
      cases: ["Office and branch network modernization", "Hybrid workforce connectivity", "Resilient WAN / SD-WAN deployments", "Secure campus and distributed site networking"]
    },
    {
      domain: "Security & Access",
      cases: ["Secure remote access", "Network segmentation and access policy enforcement", "Security visibility and operational monitoring", "Zero Trust-aligned infrastructure access"]
    },
    {
      domain: "Collaboration & Productivity",
      cases: ["Enterprise communication environments", "Hybrid meeting and collaboration enablement", "Workforce productivity and connected operations"]
    },
    {
      domain: "Infrastructure & Operations",
      cases: ["Network monitoring and incident visibility", "Data center connectivity optimization", "Infrastructure resilience and service continuity", "Managed network operations support"]
    }
  ];

  const platformExpertise = [
    {
      category: "Networking & Connectivity",
      items: ["Enterprise routing and switching", "Branch and campus network foundations", "WAN / SD-WAN environments", "Wireless and distributed access infrastructure"]
    },
    {
      category: "Security & Access",
      items: ["Firewall and secure access controls", "Identity-aware access environments", "Segmentation and policy enforcement", "Secure remote connectivity"]
    },
    {
      category: "Collaboration",
      items: ["Communication and collaboration platforms", "Hybrid work meeting environments", "Connected workforce enablement"]
    },
    {
      category: "Observability & Operations",
      items: ["Infrastructure monitoring", "Network performance visibility", "Operational analytics", "Reliability and incident awareness"]
    }
  ];

  const whyUsList = [
    {
      title: "Network-First Infrastructure Expertise",
      desc: "We design enterprise-grade network foundations that support performance, resilience, and long-term scalability."
    },
    {
      title: "Security Embedded into Connectivity",
      desc: "We align access, segmentation, monitoring, and operational security as part of the network architecture—not after it."
    },
    {
      title: "Hybrid Work & Distributed Operations",
      desc: "We help connect offices, remote teams, and business operations through secure, modern infrastructure."
    },
    {
      title: "Operational Visibility & Reliability",
      desc: "Our approach improves infrastructure monitoring, service visibility, and proactive operational response."
    },
    {
      title: "Integrated Infrastructure Delivery",
      desc: "We connect networking, security, cloud access, collaboration, and operations into one coherent environment."
    },
    {
      title: "Managed Support & Optimization",
      desc: "We stay involved beyond deployment to support performance, governance, troubleshooting, and infrastructure evolution."
    }
  ];

  const outcomesList = [
    { value: "99.9%", label: "Network Availability", desc: "Stronger network resilience and uptime targets met consistently." },
    { value: "24×7", label: "Monitoring Support", desc: "Better visibility into infrastructure performance and operations." },
    { value: "100%", label: "Zero Trust Alignment", desc: "Improved secure connectivity across teams and remote locations." },
    { value: "50%", label: "Faster Incident Response", desc: "Reduced operational complexity across distributed environments." }
  ];

  const relatedPages = [
    { name: "Microsoft Ecosystem", desc: "Strategic Azure network routing, Entra ID integration, and secure hubs.", href: "/ecosystem/partnerships/microsoft" },
    { name: "Oracle Ecosystem", desc: "Enterprise database connectivity and secure OCI architectures.", href: "/ecosystem/partnerships/oracle" },
    { name: "ServiceNow Ecosystem", desc: "ITSM monitoring integration and automated operational workflows.", href: "/ecosystem/partnerships/servicenow" },
    { name: "Cybersecurity", desc: "Zero Trust architecture, network segmentation, and advanced threat defense.", href: "/services/cybersecurity" },
    { name: "Managed Services", desc: "24/7 managed NOC operations, connectivity monitoring, and incident response.", href: "/services/managed-services" },
    { name: "Cloud Services", desc: "Advanced cloud-native design, hybrid cloud routing, and site-to-cloud VPNs.", href: "/ecosystem/technology-stack" },
    { name: "Global Delivery", desc: "Distributed operations, remote network management, and branch support.", href: "/ecosystem/global-delivery" }
  ];

  const faqs = [
    {
      q: "What Cisco solutions does Devopstrio support?",
      a: "We support the full Cisco stack including enterprise routing and switching, Meraki cloud-managed networks, SD-WAN, Cisco Secure (Firepower, Duo, Umbrella), Webex collaboration, and ThousandEyes observability."
    },
    {
      q: "Do you help modernize enterprise networks and secure access?",
      a: "Yes. We design and deploy modern network architectures that incorporate Zero Trust access, network segmentation, and high-performance routing to ensure agility and security."
    },
    {
      q: "Can you support branch connectivity and SD-WAN initiatives?",
      a: "Absolutely. We specialize in transforming branch connectivity by deploying Cisco SD-WAN solutions, improving application performance, and centralizing network management."
    },
    {
      q: "Do you provide Cisco-based security and collaboration solutions?",
      a: "Yes. We integrate Cisco security (firewalls, endpoint protection) directly into the network flow, while also deploying scalable collaboration tools to empower hybrid work environments."
    },
    {
      q: "Can you monitor and manage Cisco environments?",
      a: "Yes. Our managed network services provide 24/7 monitoring, configuration management, automated patching, and incident response for your entire Cisco infrastructure."
    },
    {
      q: "Do you support hybrid workforce infrastructure and operations?",
      a: "Yes. We deploy secure VPNs, identity-aware access controls, and collaborative meeting platforms designed specifically to support distributed and remote workforce productivity."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans selection:bg-sky-500 selection:text-white">

      {/* 1. HERO SECTION: CISCO ECOSYSTEM HERO */}
      <section className="relative isolate flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-black text-white pt-24 pb-16 lg:py-28 border-b border-zinc-900/60">
        <style>{`
          /* Partnership Connector Rail - Bounded, stops cleanly before Cisco logo */
          @keyframes connectorTravel {
            0% {
              left: 0px;
              opacity: 0;
              transform: translateY(-50%) scale(0.5);
            }
            15% {
              opacity: 1;
              transform: translateY(-50%) scale(1.15);
            }
            80% {
              opacity: 1;
              transform: translateY(-50%) scale(1.15);
            }
            96% {
              left: calc(100% - 14px);
              opacity: 0.8;
              transform: translateY(-50%) scale(0.9);
            }
            100% {
              left: calc(100% - 12px);
              opacity: 0;
              transform: translateY(-50%) scale(0.4);
            }
          }

          @keyframes laserBeam {
            0% {
              left: 0px;
              width: 16px;
              opacity: 0;
            }
            20% {
              opacity: 1;
              width: 70px;
            }
            75% {
              opacity: 1;
              width: 70px;
            }
            95% {
              left: calc(100% - 70px);
              width: 60px;
              opacity: 0.7;
            }
            100% {
              left: calc(100% - 30px);
              width: 25px;
              opacity: 0;
            }
          }

          .connector-node {
            animation: connectorTravel 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .connector-laser {
            animation: laserBeam 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .connector-node, .connector-laser {
              animation: none !important;
            }
          }
        `}</style>

        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
          {/* Left Column Content */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Enterprise Network & Security Partnership
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Cisco Enterprise</span>
              <span className="block bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
              Secure, resilient, and high-performing enterprise networks with Cisco-powered solutions across connectivity, cybersecurity, and modern digital infrastructure.
            </p>

            {/* Partnership connector row */}
            <div className="mt-12 flex items-center gap-3 sm:gap-5 pt-8 border-t border-zinc-900/80">
              {/* Devopstrio Logo Card */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] transition-all duration-300">
                <img src="/webp/assets/logo/logo.webp" alt="Devopstrio" className="h-full w-full object-contain" />
              </div>

              {/* Connecting Track with bounded laser tracer and travelling pulse node */}
              <div className="relative h-2 w-32 sm:w-52 flex-none flex items-center overflow-hidden">
                {/* Base rail track */}
                <div className="w-full h-0.5 bg-gradient-to-r from-rose-500/50 via-zinc-700/40 to-sky-500/50 rounded-full" />
                
                {/* Laser tracer beam bounded along line */}
                <div className="connector-laser absolute inset-y-0 h-1 rounded-full bg-gradient-to-r from-transparent via-rose-500 to-transparent blur-[1px]" />
                
                {/* Energy pulse particle stopping cleanly before Cisco card */}
                <div className="connector-node absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_16px_5px_rgba(244,63,94,0.9)]" />
              </div>

              {/* Cisco Logo Card */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-sky-500/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] transition-all duration-300">
                <img
                  src="/assets/Tech_logos/cisco.svg"
                  alt="Cisco"
                  className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(14,165,233,0.35)]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Algoscale-style 3D Particle Field Canvas */}
          <div className="hidden lg:block">
            <HeroParticleCanvas />
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAVBAR */}
      <SectionNavbar sections={ciscoSections} />

      {/* 2. PARTNERSHIP OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-6">
              <Reveal className="text-left">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
                  ALLIANCE OVERVIEW
                </span>
                <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
                  Enabling Secure Digital Infrastructure <span className="text-sky-500">with Cisco</span>
                </h2>
                <div className="space-y-4 text-zinc-300 text-sm md:text-base font-semibold leading-relaxed mb-8">
                  <p>
                    A secure, high-performing enterprise requires a resilient network foundation. Devopstrio partners with Cisco to deliver scalable connectivity and robust security architectures.
                  </p>
                  <p>
                    We focus on enterprise networking, secure connectivity, zero trust access, branch and campus networking, hybrid work collaboration, and deep network observability to protect and accelerate your digital operations.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {overviewCards.map((card, idx) => (
                  <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-sky-500/20 rounded-2xl transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/5 flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">{card.title}</h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Our Cisco <span className="text-sky-500">Capabilities</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Comprehensive expertise to architect, configure, and manage high-performance network foundations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilitiesList.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 hover:border-sky-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/5 flex items-center justify-center mb-6 text-sky-500">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-snug">{cap.title}</h3>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS WE DELIVER */}
      <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              NETWORK SOLUTIONS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Cisco-Powered Solutions for <span className="text-sky-500">Secure, Connected Enterprises</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsList.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-sky-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/5 flex items-center justify-center mb-4 text-sky-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-1">{sol.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CISCO REFERENCE ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.02),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              NETWORK ARCHITECTURE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              A Reference Architecture for <span className="text-sky-500">Secure Enterprise Connectivity</span>
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto flex flex-col gap-4 relative z-10">
            <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-sky-500/20 via-blue-500/30 to-sky-500/20 z-0 hidden md:block" />

            {architectureSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col md:flex-row items-center md:justify-between p-5 bg-zinc-950/70 border border-zinc-900 hover:border-zinc-800 rounded-2xl transition-all duration-300 gap-4"
              >
                <div className="flex items-center gap-4 w-full md:w-1/2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center font-mono text-xs font-bold text-sky-500 shadow-md">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-sky-500 uppercase tracking-wider block font-bold">{step.label}</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-left md:text-right">
                  <h4 className="text-xs md:text-sm font-bold text-white tracking-wide">{step.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS USE CASES */}



      {/* CERTIFICATIONS */}
      <PartnerCertifications
        title="Cisco Certifications"
        certifications={[
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-187.webp" },
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-188.webp" },
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-189.webp" },
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-190.webp" },
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-191.webp" },
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-192.webp" },
          { image: "/webp/assets/ecosystem/Cisco_Awards/image-193.webp" }
        ]}
      />


      <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              ENTERPRISE DOMAINS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Where We Apply the <span className="text-sky-500">Cisco Ecosystem</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl flex flex-col justify-between hover:border-sky-500/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider mb-6 border-b border-zinc-900 pb-3">
                    {useCase.domain}
                  </h3>
                  <ul className="space-y-4">
                    {useCase.cases.map((caseItem, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-zinc-300 font-bold">{caseItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CISCO TECHNOLOGIES / PLATFORM AREAS */}
      <section id="products" className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              PLATFORM PORTFOLIO
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Cisco Platforms Across the <span className="text-sky-500">Enterprise Network Stack</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {platformExpertise.map((techGroup, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-sky-500/20 rounded-2xl transition-all duration-350"
              >
                <h4 className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4 border-b border-zinc-900/80 pb-2">
                  {techGroup.category}
                </h4>
                <div className="flex flex-col gap-2">
                  {techGroup.items.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-[10px] font-mono text-zinc-350 font-bold hover:text-white transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CISCO + DEVOPSTRIO */}
      <section id="why-us" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              PARTNERSHIP ADVANTAGES
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Why Organizations Build Secure Network Foundations <span className="text-sky-500">with Devopstrio</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsList.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-sky-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-4 leading-snug">{card.title}</h4>
                  <p className="text-xs md:text-sm text-zinc-400 font-bold leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BUSINESS OUTCOMES */}
      <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              MEASURED VALUE
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Business Outcomes Enabled <span className="text-sky-500">Through Cisco</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {outcomesList.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/50 border border-zinc-900 hover:border-sky-500/20 rounded-3xl transition-all duration-300 text-left group"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold mb-3">
                  {stat.label}
                </div>
                <p className="text-[11px] text-zinc-500 font-bold leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RELATED ECOSYSTEM PAGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-sky-500 mb-3.5 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-[36px] leading-[44px] sm:text-[46px] sm:leading-[52px] lg:text-[52px] lg:leading-[58px] font-bold tracking-[-1.5px] text-white mb-5">
              Related <span className="text-sky-500">Pages</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-sky-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-sky-500 transition-all" />
                  </h4>
                  <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTA
        ctaTitle="Ready to Build a More Secure and Connected Enterprise"
        ctaHighlight="with Cisco?"
        ctaDesc="Leverage Cisco networking, security, observability, and AI infrastructure solutions to accelerate enterprise transformation."
        ctaBtnText="TALK TO CISCO EXPERTS"
        backLink="/ecosystem/partnerships"
      />
    </main>
  );
}

