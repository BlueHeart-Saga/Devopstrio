"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Cloud,
  DollarSign,
  ShieldAlert,
  TrendingUp,
  BarChart2,
  Layers,
  Sparkles,
  Server,
  Activity,
  Workflow,
  Network,
  Globe,
  Database
} from "lucide-react";
import Link from "next/link";

const GovernanceAccordion = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const govModels = [
    {
      id: "resource-tagging",
      name: "Enforced Resource Tagging",
      icon: Layers,
      image: "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp",
      desc: "Automatically label nodes and enforce tagging policies across your multi-cloud footprint."
    },
    {
      id: "compliance-audit",
      name: "Compliance Checklists",
      icon: ShieldAlert,
      image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp",
      desc: "Auditor checklists scanning configurations weekly to guarantee continuous compliance."
    },
    {
      id: "resource-standards",
      name: "Resource Standards",
      icon: Server,
      image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp",
      desc: "Lock down allowed VM sizing families to enforce rigid architectural standards."
    },
    {
      id: "landing-zones",
      name: "Enterprise Landing Zones",
      icon: Cloud,
      image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp",
      desc: "Provision pre-isolated virtual networks to isolate traffic and contain blasts."
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % govModels.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeModel = govModels[activeIdx];
  const ActiveIcon = activeModel.icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mt-12">
      {/* Left Panel: Overlapping Interactive Card displaying active model illustration */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <Reveal key={activeIdx} className="h-full">
          <div className="h-full bg-zinc-950/40 border border-white/10 hover:border-rose-500/30 rounded-3xl overflow-hidden relative min-h-[420px] group backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-500">
            {/* Full Card Image: Premium Tech-Art Graphic */}
            <img src={activeModel.image}
              alt={activeModel.name}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 pointer-events-none select-none"
              loading="lazy" />
          </div>
        </Reveal>
      </div>

      {/* Right Panel: Accordion List */}
      <div className="lg:col-span-7 flex flex-col gap-4 justify-center text-left">
        {govModels.map((model, idx) => {
          const isSelected = activeIdx === idx;
          const Icon = model.icon;
          return (
            <div
              key={model.id}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)] ${isSelected ? "bg-zinc-950/50 border-white/10 hover:border-rose-500/20" : "bg-transparent hover:bg-zinc-950/30 border-white/5"
                }`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="flex items-center justify-between p-6 select-none">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${isSelected ? "bg-rose-950/30 text-rose-500" : "bg-zinc-900 text-zinc-400"
                    }`}>
                    <Icon size={16} />
                  </div>
                  <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${isSelected ? "text-white" : "text-zinc-300 hover:text-zinc-200"
                    }`}>
                    {model.name}
                  </span>
                </div>
                <span className="text-zinc-500">
                  {isSelected ? <Minus size={16} className="text-rose-500" /> : <Plus size={16} />}
                </span>
              </div>

              <div
                className={`transition-all duration-350 ease-in-out ${isSelected
                  ? "max-h-[160px] opacity-100 border-t border-zinc-900/50 p-6 pt-4"
                  : "max-h-0 opacity-0 overflow-hidden"
                  }`}
              >
                <div className="flex gap-4">
                  <div className="w-0.5 bg-rose-500 flex-shrink-0" />
                  <p className="text-xs text-zinc-200 leading-relaxed font-semibold">
                    {model.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CloudSecurityCarousel = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const secFeaturesList = [
    {
      title: "IAM Role Audit",
      desc: "Identify unused root permissions and enforce least-privilege access across AWS, Azure, and GCP.",
      image: "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp"
    },
    {
      title: "Real-time Monitoring",
      desc: "Trace resource provisioning events and configuration drift instantly with continuous polling.",
      image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp"
    },
    {
      title: "Risk Detection Rules",
      desc: "Automatically alert team leaders to critical vulnerabilities like open public database ports.",
      image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp"
    },
    {
      title: "Secure Audit Logging",
      desc: "Archive immutable API action logs for rigorous SOC2 and ISO27001 compliance reviews.",
      image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp"
    },
    {
      title: "Zero-Trust Architecture",
      desc: "Enforce strict micro-segmentation of application perimeters to contain lateral movement.",
      image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp"
    },
    {
      title: "Vulnerability Scanning",
      desc: "Continuous deep-scanning of container images and VM snapshots before production deployment.",
      image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp"
    },
    {
      title: "Secret Management",
      desc: "Seamless encrypted vault integration for dynamic rotation of sensitive database credentials.",
      image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp"
    },
    {
      title: "Automated Threat Response",
      desc: "Instantly quarantine compromised instances and revoke access tokens during security events.",
      image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp"
    },
    {
      title: "DDoS Mitigation Edge",
      desc: "Intelligent edge protection against layer 7 volumetric attacks to guarantee API uptime.",
      image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp"
    },
    {
      title: "Data Loss Prevention",
      desc: "Proactively identify and restrict exposed PII stored in unencrypted public cloud buckets.",
      image: "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full relative mt-16">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-12 pt-4 px-6 md:px-12 snap-x snap-mandatory hide-scrollbar relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {secFeaturesList.map((feat, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[320px] md:w-[380px] snap-center bg-zinc-950/40 border border-zinc-800/80 hover:border-rose-500/40 rounded-3xl overflow-hidden group hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] transition-all duration-500 flex flex-col"
          >
            {/* Top Image Section */}
            <div className="h-[200px] w-full overflow-hidden relative bg-[#050505]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-10" />
              <img src={feat.image}
                alt={feat.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                loading="lazy" />
            </div>

            {/* Bottom Content Section */}
            <div className="p-8 flex flex-col flex-grow bg-[#080808] relative z-20">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-300">
                {feat.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
                {feat.desc}
              </p>

              <div className="flex items-center gap-2 mt-auto cursor-pointer w-max">
                <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-colors duration-300">
                  <ArrowUpRight className="w-3 h-3 text-rose-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs font-bold text-rose-500 tracking-wide uppercase group-hover:text-rose-400 transition-colors duration-300">Explore Feature</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-end gap-4 px-6 md:px-12 mt-4 relative z-20">
        <button
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 text-zinc-400 hover:text-white transition-all duration-300 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 text-zinc-400 hover:text-white transition-all duration-300 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* CSS to hide scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

const CloudPartners = () => {
  const techLogos = [
    "/assets/Tech_logos/AWS.svg",
    "/assets/Tech_logos/Microsoft-Azure.svg",
    "/assets/Tech_logos/Google_Cloud.svg",
    "/assets/Tech_logos/Oracle_Cloud.svg",
    "/assets/Tech_logos/IBM_Cloud.svg",
    "/assets/Tech_logos/vmware.svg",
    "/assets/Tech_logos/Datadog.svg",
    "/assets/Tech_logos/Snowflake.svg",
    "/assets/Tech_logos/Kubernetes.svg",
    "/assets/Tech_logos/HashiCorp.svg",
    "/assets/Tech_logos/Docker.svg"
  ];

  const clientLogos = [
    "/assets/Home-page/partners/Airbnb.svg",
    "/assets/Home-page/partners/Microsoft.svg",
    "/assets/Home-page/partners/Costco.svg",
    "/assets/Home-page/partners/Virgin.svg",
    "/assets/Home-page/partners/servicenow.svg",
    "/assets/Home-page/partners/godaddy.svg",
    "/assets/Home-page/partners/BT.svg",
    "/assets/Home-page/partners/NHS.svg"
  ];

  return (
    <section className="w-full py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 mb-16 text-center relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white">
            Integrated Technologies & Trusted Partners
          </h2>
        </Reveal>
      </div>

      <div className="relative w-full flex flex-col gap-12">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Technology Partners (Scrolls Left) */}
        <div className="flex w-[200%] overflow-hidden relative group">
          <div className="flex items-center justify-around w-1/2 animate-marquee-left whitespace-nowrap">
            {techLogos.map((src, i) => (
              <img key={`t1-${i}`} src={src} alt="Tech Logo" className="h-10 mx-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" />
            ))}
          </div>
          <div className="flex items-center justify-around w-1/2 animate-marquee-left whitespace-nowrap">
            {techLogos.map((src, i) => (
              <img key={`t2-${i}`} src={src} alt="Tech Logo" className="h-10 mx-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" />
            ))}
          </div>
        </div>

        {/* Row 2: Client Partners (Scrolls Right) */}
        <div className="flex w-[200%] overflow-hidden relative group mt-4">
          <div className="flex items-center justify-around w-1/2 animate-marquee-right whitespace-nowrap">
            {clientLogos.map((src, i) => (
              <img key={`c1-${i}`} src={src} alt="Client Logo" className="h-9 mx-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" />
            ))}
          </div>
          <div className="flex items-center justify-around w-1/2 animate-marquee-right whitespace-nowrap">
            {clientLogos.map((src, i) => (
              <img key={`c2-${i}`} src={src} alt="Client Logo" className="h-9 mx-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .group:hover .animate-marquee-left, .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default function CloudManagementPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "30%+", label: "Cost Reduction" },
    { value: "Real-Time", label: "Anomaly Detection" },
    { value: "100%", label: "Tag Compliance" },
    { value: "Multi-Cloud", label: "Central Control" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const opsFeatures = [
    "Azure management portal integrations tracking active resource counts",
    "AWS workspace organizers grouping linked accounts under billing umbrellas",
    "OCI compute controls auditing bare-metal network speeds",
    "Hybrid Cloud sync scripts managing local virtualization clusters"
  ];

  const costFeatures = [
    "Unified FinOps Dashboards summarizing weekly spend profiles",
    "Automatic Budget Tracking triggering Slack webhooks on anomalies",
    "Resource Optimization recommendations pointing out oversized VMs",
    "Chargeback Models routing cloud costs to specific division budgets"
  ];

  const govFeatures = [
    "Enforced Resource Tagging policies automatically labeling nodes",
    "Compliance auditor checklists scanning configurations weekly",
    "Resource Standards parameters locking down allowed VM sizing families",
    "Enterprise Landing Zones provisioning pre-isolated virtual networks"
  ];

  const secFeatures = [
    "IAM role audit profiles pointing out unused root permissions",
    "Real-time Security Monitoring tracing resource provisioning events",
    "Risk Detection rules alerting team leaders to open public database ports",
    "Secure Audit Logging archiving API actions for compliance reviews"
  ];

  const analyticsFeatures = [
    "Usage Analytics charts correlating cpu load with billing metrics",
    "Performance Analytics auditing storage input-output speeds (IOPS)",
    "Capacity Planning projections estimating resource requirements for peaks"
  ];

  const faqs = [
    { q: "How does the platform fetch cost details?", a: "We link with AWS Cost Explorer, Azure Retail Prices, and OCI Usage APIs using secure read-only credentials to compile spend databases." },
    { q: "What is a FinOps dashboard?", a: "FinOps stands for Cloud Financial Operations. The dashboard displays cost structures, maps spend to business projects, and suggests cost-saving opportunities." },
    { q: "Can the platform automate resource deletion?", a: "By default, it prompts. With appropriate authorization, scheduler jobs will turn off idle staging nodes automatically." },
    { q: "Does it support private cloud architectures?", a: "Yes, we deploy agents auditing local VMware ESXi or OpenStack setups, displaying local hardware costs beside public spend." },
    { q: "How are alerts delivered?", a: "Alerts route through customizable webhook channels, integrating with Slack, Microsoft Teams, and PagerDuty." },
    { q: "Does this platform track Kubernetes cluster costs?", a: "Yes, we integrate with open-source tools like Kubecost to allocate shared container namespace costs to specific teams." },
    { q: "What security measures protect our credentials?", a: "We query cloud provider endpoints using secure cross-account role assumes, meaning we never store access key files." },
    { q: "Can we configure multiple budget thresholds?", a: "Yes, you can configure warn alarms (e.g. 80% budget) and blocking policies (e.g. 100% budget reached)." },
    { q: "What compliance checklists are supported?", a: "We run CIS Benchmarks, SOC-2 alignment checks, and PCI-DSS compliance audits." },
    { q: "How do we start cloud optimization?", a: "Click 'Optimize Your Cloud Estate' to request a cloud billing review and setup assessment." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Cloud Operations Unit"
        title={
          <>
            Cloud Management <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Audit global cloud spend, enforce resource tagging standards, isolate networks, and discover cost anomalies in one unified dashboard."
        particles={true}
        particleColors={["#ffffff", "#a5f3fc", "#06b6d4"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#06b6d4"
        magicRingsColorTwo="#0891b2"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "CLOUD MANAGEMENT PLATFORM" }
        ]}
      >
        <Link
          href="/contact#contact-form"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Optimize Your Cloud Estate
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. CLOUD OPERATIONS OVERVIEW */}
      <section className="w-full py-32 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

          {/* Centered Header */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                OPS CONTROL
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Complete visibility across <span className="text-rose-500">multi-cloud environments</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Unify control nodes, monitor infrastructure status, track host limits, and secure bare-metal virtualization servers through a single unified operations platform.
              </p>
            </div>
          </Reveal>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Left card: Large, spanning full height */}
            <div className="lg:col-span-6 flex">
              <Reveal className="w-full h-full" delay={0.1}>
                <div className="h-full bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/40 rounded-[24px] overflow-hidden relative flex flex-col justify-between p-8 md:p-12 min-h-[460px] group text-left shadow-lg hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] transition-all duration-500">

                  {/* Background Effects */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-4 font-bold">Unified Management</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug max-w-md group-hover:-translate-y-1 transition-transform duration-500">
                      Integrate Azure, AWS, and OCI portals into a single pane of glass.
                    </h3>
                  </div>

                  <div className="relative z-10 mt-auto pt-8 border-t border-zinc-800/60 group-hover:border-zinc-700 transition-colors duration-500">
                    <span className="block text-6xl md:text-7xl font-mono font-bold text-rose-500 mb-3">
                      360°
                    </span>
                    <p className="text-sm text-zinc-300 leading-relaxed font-semibold">
                      Complete cross-cloud visibility and active resource tracking.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right side: Two stacked cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">

              {/* Top-Right Card */}
              <div className="flex-grow flex">
                <Reveal className="w-full h-full" delay={0.2}>
                  <div className="h-full bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/30 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden group text-left shadow-lg hover:shadow-[0_15px_30px_rgba(225,29,72,0.05)] transition-all duration-300">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.06),transparent_75%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-3 font-bold group-hover:text-rose-400 transition-colors">Hybrid Sync</span>
                      <span className="block text-4xl md:text-5xl font-mono font-bold text-white mb-2">
                        {"< 10ms"}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                      Hybrid Cloud sync scripts managing local virtualization clusters in real-time.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Bottom-Right Card */}
              <div className="flex-grow flex">
                <Reveal className="w-full h-full" delay={0.3}>
                  <div className="h-full bg-[#0A0A0A] border border-zinc-800/80 hover:border-rose-500/30 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden group text-left shadow-lg hover:shadow-[0_15px_30px_rgba(225,29,72,0.05)] transition-all duration-300">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.08),transparent_75%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-3 font-bold group-hover:text-rose-400 transition-colors">Billing Umbrellas</span>
                      <span className="block text-4xl md:text-5xl font-mono font-bold text-rose-500 mb-2">
                        100%
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                      AWS workspace organizers grouping linked accounts for perfect cost attribution.
                    </p>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. CLOUD MANAGEMENT PLATFORM */}
      <section className="w-full py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">UNIFIED GOVERNANCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Cloud Management Platform</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Audit global cloud spend, enforce resource tagging standards, isolate networks, and discover cost anomalies in one unified dashboard.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

            {/* Card 1: Cloud Spend */}
            <Reveal delay={0.1}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <DollarSign className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Audit global spend</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Correlate resource utilization figures with hourly billing metrics and distribute unified budgets across distinct operational divisions.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Tagging Standards */}
            <Reveal delay={0.2}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <Layers className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Enforce resource tagging</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Automatically label nodes, enforce rigid resource standards, and lock down allowed VM sizing families for absolute consistency.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Isolate Networks */}
            <Reveal delay={0.3}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <ShieldAlert className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Isolate networks</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Deploy secure Enterprise Landing Zones and provision pre-isolated virtual networks to guarantee compliance across multi-cloud footprints.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Cost Anomalies */}
            <Reveal delay={0.4}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <Activity className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Discover cost anomalies</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Leverage automatic budget tracking that triggers intelligent webhooks the moment unexpected billing surges or orphaned assets are detected.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 4. GOVERNANCE CENTER */}
      <section className="w-full py-32 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                COMPLIANCE HUB
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Governance Center
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Enforce security guidelines automatically. Restrict provisioning of unsafe instance classes and lock database enclaves to secure regions.
              </p>
            </div>
          </Reveal>

          <GovernanceAccordion />
        </div>
      </section>

      {/* 5. CLOUD SECURITY */}
      <section className="w-full py-32 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="w-full relative z-10">
          <Reveal>
            <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 text-center max-w-3xl mb-4">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECURITY CHECKS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Security</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Inspect identity assignments, audit credential setups, trace admin changes, and verify firewall parameters with zero-trust posture.
              </p>
            </div>
          </Reveal>

          {/* 10-Card Premium Carousel */}
          <CloudSecurityCarousel />
        </div>
      </section>

      {/* 6. MULTI-CLOUD MANAGEMENT */}
      <section className="w-full py-28 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">TOPOLOGY MAP</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Multi-Cloud Management</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 select-none font-mono text-xs text-center">
            <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">Azure</div>
              <div className="text-zinc-500">Resource Groups, AKS</div>
            </div>
            <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">AWS</div>
              <div className="text-zinc-500">EC2, VPC, EKS</div>
            </div>
            <div className="p-8 bg-zinc-950 border border-zinc-900/80 rounded-3xl hover:border-rose-500/30 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">OCI</div>
              <div className="text-zinc-500">Compute, Block Storage</div>
            </div>
            <div className="p-8 bg-rose-500/10 border border-rose-500/20 rounded-3xl hover:border-rose-500/40 transition-all duration-300 shadow-xl">
              <div className="text-rose-500 font-bold text-lg mb-2">Private Cloud</div>
              <div className="text-rose-500/70">VMware, Local Hosts</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOUD ANALYTICS */}
      <section className="w-full py-32 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.03),transparent_70%)] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                CAPACITY AUDIT
              </span>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight mb-5 text-white">
                Cloud Analytics
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Plot database utilization records, compare cloud performance metrics, and forecast sizing requirements for seasonal scaling.
              </p>
            </div>
          </Reveal>

          {/* 3x3 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Usage Correlator",
                desc: "Plot database utilization records and correlate cpu load with exact billing metrics.",
                icon: BarChart2
              },
              {
                title: "Performance IOPS",
                desc: "Audit storage input-output speeds and trace slow query bottlenecks effortlessly.",
                icon: Activity
              },
              {
                title: "Capacity Forecast",
                desc: "Forecast sizing requirements for seasonal scaling and unexpected traffic peaks.",
                icon: TrendingUp
              },
              {
                title: "Network Telemetry",
                desc: "Map latency paths across hybrid-cloud VPN tunnels and deep VPC peers.",
                icon: Network
              },
              {
                title: "Cost Attribution",
                desc: "Group abstract resource tags into explicit, business-ready unit invoices.",
                icon: DollarSign
              },
              {
                title: "Carbon Footprint",
                desc: "Estimate server energy draw and generate beautiful ESG compliance charts.",
                icon: Globe
              },
              {
                title: "Anomaly Alerting",
                desc: "Trigger instant Slack notifications on 5x deviation in standard compute metrics.",
                icon: ShieldAlert
              },
              {
                title: "Uptime Dashboards",
                desc: "Aggregate global load balancer health checks into pristine SLA dashboards.",
                icon: Server
              },
              {
                title: "Custom SQL Insights",
                desc: "Query raw infrastructure metadata directly using standard SQL syntax.",
                icon: Database
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group flex flex-col text-left">
                  {/* Large Icon Container */}
                  <div className="w-16 h-16 rounded-[16px] bg-zinc-950/80 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 group-hover:scale-105 transition-all duration-500 shadow-lg">
                    <item.icon className="w-7 h-7 text-rose-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-[15px] text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CLOUD PARTNERS (MARQUEE) */}
      <CloudPartners />

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
            <p className="text-zinc-400 text-sm leading-relaxed font-bold">
              Everything you need to know about our cloud operations, FinOps budget tracking, and governance enforcements. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Optimize Cloud Spend Today</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our cloud architects to audit sizing configuration settings.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Optimize Your Cloud Estate
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
