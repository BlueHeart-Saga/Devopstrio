"use client";

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
    let cleanupTriggers = () => {};
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
    { name: "Managed Services", desc: "24/7 managed NOC operations, connectivity monitoring, and incident response.", href: "/services/managed-operations" },
    { name: "Cloud Services", desc: "Advanced cloud-native design, hybrid cloud routing, and site-to-cloud VPNs.", href: "/ecosystem/technology-stack" },
    { name: "Global Delivery", desc: "Distributed operations, remote network management, and branch support.", href: "/company/global-delivery" }
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
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-sky-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        
        {/* Network/Connectivity Theme Visuals - Blue/Sky/Teal */}
        <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[85%] md:w-[65%] h-[130%] z-0 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <div className="relative w-full h-full flex items-center justify-end">
            <div className="absolute w-[200%] h-[160%] right-[-50%] rounded-[120px] md:rounded-[260px] border border-blue-950/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[170%] h-[135%] right-[-40%] rounded-[110px] md:rounded-[230px] border border-sky-900/20 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[140%] h-[110%] right-[-30%] rounded-[100px] md:rounded-[200px] border border-sky-500/15 rotate-[-28deg] pointer-events-none" />
            <div className="absolute w-[110%] h-[85%] right-[-20%] rounded-[90px] md:rounded-[170px] border border-cyan-500/15 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute w-[80%] h-[60%] right-[-10%] rounded-[80px] md:rounded-[140px] border border-sky-500/20 rotate-[-28deg] pointer-events-none" />
            
            <div className="absolute right-[5%] w-[180px] h-[90px] bg-gradient-to-r from-sky-600/15 via-blue-600/10 to-cyan-500/5 rounded-full blur-[50px] opacity-40 animate-pulse" />
          </div>
        </div>

        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-sky-900/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[0%] w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a192f_1px,transparent_1px),linear-gradient(to_bottom,#0a192f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Reveal className="mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                    Enterprise Network & Security Partnership
                  </span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                  Cisco <span className="text-sky-500 whitespace-nowrap">Ecosystem</span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Build secure, resilient, and high-performing enterprise networks with Cisco-powered solutions across connectivity, cybersecurity, collaboration, observability, and modern digital infrastructure.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="w-full mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {heroHighlights.map((pt, idx) => (
                    <div key={idx} className="flex gap-3 animate-fadeIn">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{pt.text}</h4>
                        <p className="text-[10px] text-zinc-450 font-semibold">{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              
              <Reveal delay={0.4} className="flex flex-wrap gap-4">
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:-translate-y-0.5"
                >
                  Talk to a Cisco Solutions Expert
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Cisco Capabilities
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center select-none z-10">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                <div className="absolute inset-x-12 h-[2px] bg-gradient-to-r from-sky-500/25 via-blue-400/30 to-sky-500/25 z-0 pointer-events-none">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#0ea5e9] animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-between w-full relative z-10 px-4">
                  
                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-sky-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/logo/logo.png"
                      alt="Devopstrio Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-105"
                    />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg relative z-20">
                    <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                  </div>

                  <div className="relative group/logo w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-3xl bg-[#09090b]/80 border border-zinc-800 hover:border-sky-500/30 flex items-center justify-center p-5 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-500 opacity-0 group-hover/logo:opacity-20 blur-md transition-opacity" />
                    <img
                      src="/assets/Tech_logos/Cisco.svg"
                      alt="Cisco Logo"
                      className="w-full h-auto max-h-[85%] object-contain select-none filter brightness-110"
                    />
                  </div>

                </div>

                <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-900/40 pointer-events-none z-0" />
                <div className="absolute w-[95%] h-[95%] rounded-full border border-zinc-900/20 pointer-events-none z-0" />
              </div>
            </div>

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
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
                  ALLIANCE OVERVIEW
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              OUR CAPABILITIES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              NETWORK SOLUTIONS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              NETWORK ARCHITECTURE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            { image: "/assets/ecosystem/Cisco_Awards/image 187.png" },
            { image: "/assets/ecosystem/Cisco_Awards/image 188.png" },
            { image: "/assets/ecosystem/Cisco_Awards/image 189.png" },
            { image: "/assets/ecosystem/Cisco_Awards/image 190.png" },
            { image: "/assets/ecosystem/Cisco_Awards/image 191.png" },
            { image: "/assets/ecosystem/Cisco_Awards/image 192.png" },
            { image: "/assets/ecosystem/Cisco_Awards/image 193.png" }
          ]}
      />

      
      <section id="use-cases" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              ENTERPRISE DOMAINS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              PLATFORM PORTFOLIO
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              PARTNERSHIP ADVANTAGES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              MEASURED VALUE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
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

      {/* 11. FAQ ACCORDION */}
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
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about our Cisco network implementations, security deployments, and managed operations. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
            </p>
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
              <p className="text-zinc-400 text-xs md:text-sm font-bold">
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

{/* 12. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-500 mb-3 block">
              NETWORK TRANSFORMATION
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Build a More Secure and Connected Enterprise <span className="text-sky-500">with Cisco?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Leverage Cisco networking, security, observability, and AI infrastructure solutions to accelerate enterprise transformation.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to Cisco Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact#contact-form"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Infrastructure Assessment
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}

