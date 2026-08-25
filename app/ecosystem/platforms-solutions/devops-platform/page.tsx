"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Terminal,
  Cpu,
  Activity,
  Lock,
  Eye,
  Layers,
  Sparkles,
  Workflow,
  ShieldCheck,
  Server,
  ChevronRight,
  Globe,
  GitBranch,
  Download,
  TestTube,
  Box,
  Rocket,
  ArrowRight,
  ArrowDown,
  Code,
  Cloud,
  Database,
  Users,
  Layout
} from "lucide-react";
import Link from "next/link";

export default function DevOpsPlatformPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const heroMetrics = [
    { value: "Self-Service", label: "Dev Provisioning" },
    { value: "< 5m", label: "Build & Deploy Time" },
    { value: "GitOps", label: "Sync Engine" },
    { value: "100%", label: "PR SAST Scanned" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const portalFeatures = [
    "Backstage Developer Portal for unified discovery",
    "Comprehensive Service Catalog tracking ownership and API bounds",
    "Self-service Engineering Templates creating compliant repo templates",
    "Internal Developer Platform (IDP) reducing operational complexity",
    "Standardized Golden Paths ensuring reliable security compliance"
  ];

  const cicdFeatures = [
    "GitHub Actions automated workflow runners",
    "Azure DevOps multi-stage delivery configuration templates",
    "GitLab CI runner integration and pipeline tracking",
    "Jenkins legacy system migration and modernization scripts",
    "Zero-downtime deployment automation loops"
  ];

  const iacFeatures = [
    "Terraform modular configuration structures for multi-provider clouds",
    "Pulumi code-based infrastructure definition templates",
    "Kubernetes cluster templates and provisioning scripts",
    "Helm chart registries managing versioned application sets",
    "GitOps pipelines syncing clusters using ArgoCD controllers"
  ];

  const obsFeatures = [
    "Prometheus metrics gathering across cloud nodes",
    "Grafana dashboard layouts visualizing container statistics",
    "Loki log aggregator indexing application console outputs",
    "OpenTelemetry telemetry instruments inside custom APIs",
    "Distributed tracing tracking transaction request pathways"
  ];

  const secFeatures = [
    "Continuous DevSecOps loops running security validations",
    "HashiCorp Vault parameters managing database credentials",
    "Vulnerability scanning checking container base layers",
    "Compliance automation checking setup metrics against audits"
  ];

  const faqs = [
    { q: "What is an Internal Developer Platform (IDP)?", a: "An IDP is a self-service system built by platform engineers that lets developers provision databases, preview environments, and deploy code without submitting tickets." },
    { q: "Does your portal support Backstage plugins?", a: "Yes, our custom Backstage portal template supports standard plugins including Kubernetes tracker, ArgoCD, and SonarQube dashboards." },
    { q: "How do you secure secrets inside the CI/CD pipeline?", a: "We leverage OIDC tokens to authorize GitHub Actions and GitLab runners directly with cloud credential managers, avoiding long-lived static keys." },
    { q: "What tools do you use for GitOps syncs?", a: "We standardize on ArgoCD and FluxCD to continuously monitor and pull declarative state changes from repositories directly into clusters." },
    { q: "Does the platform support hybrid cloud configurations?", a: "Yes, our IaC templates provision and route traffic cleanly between local datacenters and AWS/Azure regions." },
    { q: "How are cluster metrics aggregated?", a: "We configure Prometheus agents to scrape telemetry from Kubernetes nodes and push them to a central, high-performance Grafana workspace." },
    { q: "Does the platform run security checks on pull requests?", a: "Yes, every commit triggers automated SAST scans, dependency audits, and container base checking before merging." },
    { q: "Can we migrate our legacy Jenkins pipelines?", a: "Yes, we provide migration templates and automation scripts to port Jenkinsfile definitions to modern YAML systems." },
    { q: "What SLA tracking mechanisms are configured?", a: "Our observability layer maps SLO dashboards checking average request latency, error ratios, and system uptime." },
    { q: "How do we get started with the DevOps Platform?", a: "You can click 'Talk To Platform Engineers' to connect with our core team and evaluate configuration options." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="Platform Engineering Unit"
        title={
          <>
            Enterprise DevOps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Unify developer tools, automate delivery pipelines, provision secure cloud nodes, and monitor services telemetry inside one platform."
        particles={true}
        particleColors={["#ffffff", "#c7d2fe", "#6366f1"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#6366f1"
        magicRingsColorTwo="#4f46e5"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "DEVOPS PLATFORM" }
        ]}
      >
        <Link
          href="/contact#contact-form"
          className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
        >
          Talk To Platform Engineers
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </Hero>


      {/* 2. SELF-SERVICE DEVELOPER PORTAL */}
      <section className="w-full py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

          <div className="flex flex-col items-center justify-center text-center">

            {/* Top Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-12 shadow-lg">
                <span className="px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-rose-400 bg-rose-400/10 rounded">Unified</span>
                <span className="text-xs font-medium text-zinc-300">Empower your developers with our portal <ChevronRight className="inline w-3 h-3 text-zinc-500" /></span>
              </div>
            </Reveal>

            {/* Avatar Cluster */}
            <Reveal delay={0.1}>
              <div className="flex justify-center items-end -space-x-4 mb-10 relative z-10">
                {[
                  "https://i.pravatar.cc/150?img=11",
                  "https://i.pravatar.cc/150?img=32",
                  "https://i.pravatar.cc/150?img=68",
                  "https://i.pravatar.cc/150?img=47",
                  "https://i.pravatar.cc/150?img=59"
                ].map((src, i) => (
                  <div key={i} className={`rounded-full border-4 border-[#030303] bg-zinc-800 flex items-center justify-center overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-300
                    ${i === 2 ? 'w-24 h-24 z-30 ring-2 ring-rose-500/50' : i === 1 || i === 3 ? 'w-20 h-20 z-20 opacity-90' : 'w-16 h-16 z-10 opacity-70'}`}>
                    <img src={src} alt={`Team member ${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Main Content */}
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Self-Service <br className="md:hidden" /> Portal
              </h2>
              <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
                Devopstrio empowers 5,000+ engineering teams to <span className="text-rose-400 font-semibold">reduce cognitive load</span>, deploy <span className="text-rose-400 font-semibold">repository templates</span>, and configure environments — <span className="text-rose-400 font-semibold">without manual tickets</span>.
              </p>

              <Link href="/contact#contact-form" className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg transition-colors shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                Request a demo
              </Link>
            </Reveal>

            {/* Ratings */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-10">
                <div className="flex items-center gap-3">
                  <div className="text-zinc-300 font-bold">4.9 <span className="text-zinc-500 font-normal text-sm">on G2.com</span></div>
                  <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-white">G</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-zinc-300 font-bold">4.8 <span className="text-zinc-500 font-normal text-sm">on Capterra</span></div>
                  <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-white">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" /></svg>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Floating Features (Desktop Orbit) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
            <div className="max-w-7xl mx-auto w-full h-full relative">
              {portalFeatures.map((feat, idx) => {
                const positions = [
                  "top-[15%] left-[5%]",
                  "top-[50%] left-[0%]",
                  "top-[75%] left-[12%]",
                  "top-[20%] right-[2%]",
                  "top-[60%] right-[5%]"
                ];
                const delays = [0.4, 0.5, 0.6, 0.45, 0.55];
                const icons = [Terminal, Layers, Sparkles, Workflow, ShieldCheck];
                const Icon = icons[idx % icons.length];

                return (
                  <Reveal key={idx} delay={delays[idx]} className={`absolute ${positions[idx]} w-[220px]`}>
                    <div className="p-4 bg-zinc-900/40 backdrop-blur-md border border-white/5 shadow-2xl rounded-xl flex items-start gap-3 pointer-events-auto hover:border-rose-500/30 hover:-translate-y-2 transition-all duration-500 group cursor-default">
                      <div className="w-10 h-10 rounded bg-rose-500/10 flex items-center justify-center shrink-0 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-rose-400" strokeWidth={1.5} />
                      </div>
                      <p className="text-xs text-zinc-400 font-medium leading-tight group-hover:text-zinc-200 transition-colors">
                        {feat}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Mobile Features List */}
          <div className="lg:hidden mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portalFeatures.map((feat, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-rose-500/10 flex items-center justify-center shrink-0 border border-rose-500/20">
                    <Terminal className="w-4 h-4 text-rose-400" />
                  </div>
                  <p className="text-xs text-zinc-400 font-medium leading-tight">
                    {feat}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Ticker */}
          <Reveal delay={0.4}>
            <div className="mt-32 border-t border-zinc-900/50 pt-12 pb-6">
              <p className="text-center text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-8">Powering the World's Best Engineering Teams</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2"><Globe className="w-6 h-6" /> Webflow</span>
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2"><Terminal className="w-6 h-6" /> Discord</span>
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2"><span className="text-2xl text-rose-500 tracking-tighter">duolingo</span></span>
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2"><Cpu className="w-6 h-6" /> asana</span>
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2 font-serif">LinkedIn</span>
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2">indeed</span>
                <span className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2"><Workflow className="w-6 h-6" /> zoom</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 3. CI/CD FACTORY */}
      <section className="w-full py-32 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PIPELINE RUNNERS</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                CI/CD <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-500">Pipelines</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Automate your entire delivery lifecycle. From code commit to production deployment, our CI/CD factory ensures zero-downtime releases and rigorous quality gates.
              </p>
            </Reveal>
          </div>

          {/* Flowchart Diagram */}
          <div className="w-full overflow-x-auto pb-12 pt-8 hide-scrollbar">
            <div className="min-w-[900px] max-w-5xl mx-auto flex flex-col items-center gap-16 relative">

              {/* Row 1: Continuous Integration */}
              <div className="w-full relative mt-4">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-r from-rose-500/20 to-rose-500/50 border-t-2 border-dashed border-rose-500/50 -z-10" />

                <h3 className="absolute -top-12 left-1/2 -translate-x-1/2 text-rose-400 font-bold tracking-widest uppercase text-sm bg-[#050505] px-4">Continuous Integration</h3>

                <div className="flex justify-between items-center w-full">
                  {[
                    { title: "Changes Pushed", desc: "Code Commit", icon: GitBranch },
                    { title: "Code Fetch", desc: "Clone & Pull", icon: Download },
                    { title: "Automated Tests", desc: "Unit & Linting", icon: TestTube },
                    { title: "Build", desc: "Container Image", icon: Box },
                  ].map((node, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="relative group">
                        {/* Node Box */}
                        <div className="w-40 bg-zinc-900/80 backdrop-blur-md border-2 border-rose-500/30 rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(52,211,153,0.1)] group-hover:border-rose-400 group-hover:-translate-y-1 transition-all duration-300">
                          <div className="w-10 h-10 mx-auto bg-rose-500/10 rounded-full flex items-center justify-center mb-3 text-rose-400">
                            <node.icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                          <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{node.desc}</p>
                        </div>
                        {/* Arrow to next */}
                        {i < 3 && (
                          <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-rose-500/50 hidden md:block">
                            <ArrowRight className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 bg-[#050505] z-10">
                <ArrowDown className="w-5 h-5" />
              </div>

              {/* Row 2: Continuous Delivery */}
              <div className="w-full relative mt-4">
                <div className="absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-r from-rose-500/20 to-rose-500/50 border-t-2 border-dashed border-rose-500/50 -z-10" />

                <h3 className="absolute -top-12 left-1/2 -translate-x-1/2 text-rose-400 font-bold tracking-widest uppercase text-sm bg-[#050505] px-4">Continuous Delivery</h3>

                <div className="flex justify-between items-center w-full">
                  {[
                    { title: "Staging", desc: "Pre-Production", icon: Server },
                    { title: "Automated Tests", desc: "E2E & Integration", icon: Activity },
                    { title: "Release Trigger", desc: "Manual Approval", icon: ShieldCheck },
                    { title: "Production", desc: "Zero-Downtime", icon: Rocket },
                  ].map((node, i) => (
                    <Reveal key={i} delay={0.4 + (i * 0.1)}>
                      <div className="relative group">
                        <div className="w-40 bg-zinc-900/80 backdrop-blur-md border-2 border-rose-500/30 rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:border-rose-400 group-hover:-translate-y-1 transition-all duration-300">
                          <div className="w-10 h-10 mx-auto bg-rose-500/10 rounded-full flex items-center justify-center mb-3 text-rose-400">
                            <node.icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                          <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{node.desc}</p>
                        </div>
                        {i < 3 && (
                          <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-rose-500/50 hidden md:block">
                            <ArrowRight className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Supported Tools / Original Features */}
          <Reveal delay={0.8}>
            <div className="mt-20 pt-10 border-t border-zinc-900/50">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-6 block text-center">Supported Integrations & Capabilities</span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cicdFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-950/50 border border-zinc-900 hover:border-zinc-700 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* TOOLCHAIN INTEGRATION (Data Ingestion Grid) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10 flex flex-col items-center">

          <div className="bg-[#050505] border border-zinc-800/80 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden w-full max-w-4xl">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="text-center relative z-10 mb-12 flex flex-col items-center">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-zinc-100 mb-4 tracking-tight">Data Ingestion for DevOps Platform</h2>
              <Link href="/ecosystem/technology-stack" className="text-rose-400 font-medium hover:text-rose-300 transition-colors inline-flex items-center gap-2 text-sm">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grid of Logos */}
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="grid grid-cols-5 gap-3 md:gap-5 w-full max-w-xl mx-auto relative z-20">
                {[
                  "AWS.svg", "Microsoft Azure.svg", "Google_Cloud.svg", "Docker.svg", "Kubernetes.svg",
                  "GitHub.svg", "GitLab.svg", "Jenkins.svg", "HashiCorp.svg", "Service_now.svg",
                  "Datadog.svg", "New_Relic.svg", "Elastic.svg", "PagerDuty.svg", "Snowflake.svg"
                ].map((logo, i) => (
                  <Reveal key={i} delay={i * 0.03} className="w-full aspect-square bg-[#0a0a0a] border border-zinc-800 rounded-[0.8rem] flex items-center justify-center p-3 md:p-4 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all shadow-md group">
                    <img src={`/assets/Tech_logos/${logo}`} alt={logo.replace('.svg', '')} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300" loading="lazy" />
                  </Reveal>
                ))}
              </div>

              {/* Connecting Lines */}
              <div className="relative w-full max-w-xl mx-auto h-32 md:h-40 -mt-2 mb-2 z-10">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Paths starting from bottom of each col (10, 30, 50, 70, 90) to the center-bottom (50, 100) */}
                  <path d="M 10 0 C 10 80, 50 20, 50 100" stroke="#e11d48" strokeWidth="0.4" fill="none" className="opacity-40" />
                  <path d="M 30 0 C 30 70, 50 30, 50 100" stroke="#e11d48" strokeWidth="0.4" fill="none" className="opacity-40" />
                  <path d="M 50 0 C 50 50, 50 50, 50 100" stroke="#e11d48" strokeWidth="0.4" fill="none" className="opacity-40" />
                  <path d="M 70 0 C 70 70, 50 30, 50 100" stroke="#e11d48" strokeWidth="0.4" fill="none" className="opacity-40" />
                  <path d="M 90 0 C 90 80, 50 20, 50 100" stroke="#e11d48" strokeWidth="0.4" fill="none" className="opacity-40" />
                </svg>
              </div>

              {/* Destination Block */}
              <Reveal delay={0.6} className="w-full max-w-[280px]">
                <div className="bg-[#0a0a0a]/90 backdrop-blur-md border border-zinc-700/80 rounded-2xl p-4 flex flex-col items-center gap-4 relative z-20 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                  {/* Small mini icons inside destination */}
                  <div className="flex items-center gap-3 opacity-50">
                    <img src="/assets/Tech_logos/AWS.svg" className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale" alt="AWS" loading="lazy" />
                    <img src="/assets/Tech_logos/GitHub.svg" className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale" alt="GitHub" loading="lazy" />
                    <img src="/assets/Tech_logos/Docker.svg" className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale" alt="Docker" loading="lazy" />
                    <img src="/assets/Tech_logos/Datadog.svg" className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale" alt="Datadog" loading="lazy" />
                    <img src="/assets/Tech_logos/Service_now.svg" className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale" alt="ServiceNow" loading="lazy" />
                  </div>
                  <div className="w-full flex items-center gap-4 bg-zinc-900/80 p-3 rounded-[1rem] border border-zinc-800">
                    <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-zinc-100">Devopstrio Platform</span>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>

        </div>
      </section>

      {/* 4. ENTERPRISE DEVOPS PLATFORM */}
      <section className="w-full py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM ECOSYSTEM</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Enterprise DevOps Platform</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Unify developer tools, automate delivery pipelines, provision secure cloud nodes, and monitor services telemetry inside one powerful platform.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

            {/* Card 1: Developer Tools */}
            <Reveal delay={0.1}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <Terminal className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Unify developer tools</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Empower engineering teams with self-service portals, integrated IDE environments, and standardized scaffolding templates to eliminate friction.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Delivery Pipelines */}
            <Reveal delay={0.2}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <Workflow className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Automate delivery pipelines</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Accelerate time-to-market with zero-touch CI/CD pipelines, automated vulnerability scanning, and continuous deployment loops.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Cloud Nodes */}
            <Reveal delay={0.3}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <Cloud className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Provision secure cloud nodes</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Deploy scalable resources and Kubernetes clusters across multi-cloud environments using declarative GitOps principles.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Telemetry */}
            <Reveal delay={0.4}>
              <div className="group relative w-full p-8 md:p-12 bg-[#0a0a0a] rounded-[24px] border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.05)]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.08),transparent_70%)] rounded-full blur-[40px] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/40 group-hover:bg-rose-500/5 transition-all duration-500 shadow-xl">
                    <Activity className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Monitor services telemetry</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Aggregate runtime logs, distributed traces, and custom performance metrics into a unified, actionable single pane of glass.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 5. OBSERVABILITY PLATFORM */}
      <section className="w-full py-32 bg-[#050505] relative overflow-hidden border-b border-zinc-900/60">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.15 }} />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10 flex flex-col items-center">

          {/* Header */}
          <Reveal className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white mb-6 tracking-tight">Unified Observability Orchestration</h2>
            <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
              Aggregate metrics, traces, and logs from diverse monitoring stacks into a single pane of glass to rapidly identify, debug, and resolve performance bottlenecks across your entire infrastructure.
            </p>
          </Reveal>

          {/* Flow Diagram */}
          <div className="relative w-full max-w-4xl flex flex-col items-center pb-8 mt-4 mx-auto">

            {/* Top Nodes */}
            <div className="flex justify-between w-full max-w-3xl relative z-20 px-4 md:px-0">
              {[
                { logo: "Datadog.svg", name: "Datadog" },
                { logo: "New_Relic.svg", name: "New Relic" },
                { logo: "Elastic.svg", name: "Elastic" },
                { logo: "Dynatrace.svg", name: "Dynatrace" },
                { logo: "PagerDuty.svg", name: "PagerDuty" },
                { logo: "Service_now.svg", name: "ServiceNow" },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1} className="flex flex-col items-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-[1rem] bg-[#0a0a0a] border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center p-3 md:p-4 relative z-20 group-hover:border-rose-500/50 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.25)] transition-all duration-300">
                    <img src={`/assets/Tech_logos/${item.logo}`} alt={item.name} className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300" loading="lazy" />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Connecting SVG Lines */}
            <div className="relative w-full max-w-3xl h-40 md:h-64 -mt-4 md:-mt-8 z-10 px-4 md:px-0">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* 6 bezier curves mapped precisely from node centers to central hub */}
                <path d="M 5 0 C 5 60, 50 40, 50 100" stroke="url(#roseGradient)" strokeWidth="0.4" fill="none" className="opacity-70" />
                <path d="M 23 0 C 23 70, 50 50, 50 100" stroke="url(#roseGradient)" strokeWidth="0.4" fill="none" className="opacity-70" />
                <path d="M 41 0 C 41 80, 50 60, 50 100" stroke="url(#roseGradient)" strokeWidth="0.4" fill="none" className="opacity-70" />
                <path d="M 59 0 C 59 80, 50 60, 50 100" stroke="url(#roseGradient)" strokeWidth="0.4" fill="none" className="opacity-70" />
                <path d="M 77 0 C 77 70, 50 50, 50 100" stroke="url(#roseGradient)" strokeWidth="0.4" fill="none" className="opacity-70" />
                <path d="M 95 0 C 95 60, 50 40, 50 100" stroke="url(#roseGradient)" strokeWidth="0.4" fill="none" className="opacity-70" />

                <defs>
                  <linearGradient id="roseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3f3f46" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#3f3f46" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Central Hub (Checkerboard) */}
            <Reveal delay={0.6} className="relative z-20 -mt-8 md:-mt-12">
              <div className="w-[68px] h-[68px] md:w-[88px] md:h-[88px] rounded-[1.2rem] bg-[#0a0a0a] border border-rose-500/40 shadow-[0_0_40px_rgba(244,63,94,0.4)] flex items-center justify-center p-1.5 md:p-2 relative group cursor-pointer overflow-hidden">
                {/* Internal magenta checkerboard effect */}
                <div className="w-full h-full rounded-[0.8rem] bg-[#050505] flex flex-wrap content-center justify-center gap-[2px] md:gap-[3px] p-2 relative z-10 group-hover:scale-105 transition-transform duration-500">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`w-[12px] h-[12px] md:w-[18px] md:h-[18px] rounded-[3px] ${i % 2 === 0 ? 'bg-rose-500' : 'bg-rose-950/30 group-hover:bg-rose-900/40'} transition-colors duration-500`} />
                  ))}
                </div>
                {/* Hover Glow Behind Checkerboard */}
                <div className="absolute inset-0 bg-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>

          </div>

          {/* Original Features Below */}
          <div className="w-full max-w-6xl mx-auto mt-20 pt-16 border-t border-zinc-900/80">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {obsFeatures.map((feat, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col group min-h-[220px] shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-700/80 hover:shadow-[0_15px_30px_rgba(225,29,72,0.08)]">

                    {/* Expanding Hover Layer with Glassmorphism */}
                    <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tl from-rose-600/20 via-rose-900/10 to-transparent" />
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent border border-white/5 rounded-[24px]" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-[14px] bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mb-6 group-hover:bg-rose-500/20 group-hover:border-rose-500/40 group-hover:-translate-y-1 transition-all duration-500 shadow-xl">
                        <Activity className="w-5 h-5 text-rose-500" />
                      </div>
                      <p className="text-[15px] md:text-base text-zinc-300 font-semibold leading-relaxed group-hover:text-white transition-colors duration-500 mt-auto">
                        {feat}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE */}
      <section className="w-full py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Architect style grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:36px_36px]" />
        {/* Ambient background glows */}
        <div className="absolute -left-40 bottom-1/4 w-[500px] h-[500px] rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-5 relative z-20">
              <Reveal>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GOVERNANCE & SEC</span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Security & Compliance</h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Inject policy verification templates, manage configuration values inside vault boundaries, and audit pipeline steps automatically across the entire software supply chain.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {['bg-zinc-800', 'bg-zinc-700', 'bg-zinc-600'].map((bg, i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#030303] ${bg} flex items-center justify-center shadow-md`}>
                        <ShieldCheck className="w-4 h-4 text-zinc-300" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[13px] text-zinc-300 font-bold uppercase tracking-widest">Enterprise SOC2 Ready</span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {secFeatures.map((feat, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group relative w-full h-[260px] rounded-[1.5rem] overflow-hidden border border-zinc-900 bg-[#0A0A0C] hover:border-rose-500/40 hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] select-none transition-all duration-500 hover:-translate-y-1">

                    {/* Noise & Glow */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,72,0.06),transparent_60%)] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                    {/* Premium Glassic Blur Overlay on Hover (Sweeps from bottom-right) */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] transition-all duration-700 ease-in-out z-10 pointer-events-none [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)]" />

                    {/* Content Container */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">

                      {/* Top Row: Icon */}
                      <div className="flex justify-start items-center transform transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-[14px] border border-zinc-800 bg-zinc-950 flex items-center justify-center group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-colors duration-500 shadow-lg">
                          <ShieldCheck className="w-5 h-5 text-rose-500" />
                        </div>
                      </div>

                      {/* Bottom Area: Feature Text & Expandable Tag */}
                      <div className="text-left pt-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                        <p className="text-white text-[15px] font-bold leading-relaxed mb-1 transition-colors duration-300">
                          {feat}
                        </p>

                        {/* Hidden Pill - slides up and fades in on hover */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-rose-500/30 bg-rose-500/10 text-rose-500 text-[10px] font-mono tracking-widest uppercase shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                            Active Policy
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. PLATFORM ARCHITECTURE */}
      <section className="w-full py-32 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
          <Reveal className="mb-24 text-center flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ARCHITECTURE BLUEPRINT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Platform Architecture</h2>
            <p className="text-zinc-400 text-lg max-w-2xl">Discover how code transforms into highly available cloud infrastructure through our seamless five-stage automated pipeline.</p>
          </Reveal>

          <div className="relative w-full max-w-5xl mx-auto py-8 px-4 md:px-0">
            {/* Center Backbone Timeline */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-rose-500 to-rose-500 rounded-full opacity-40 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-0" />

            <div className="flex flex-col gap-16 md:gap-24 relative z-10">

              {/* Layer 1: Developers */}
              <Reveal delay={0.1}>
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black border-2 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.3)] z-10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-rose-500/10 transition-all duration-300">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-rose-500" />
                  </div>
                  {/* Content - Left Side */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 md:pr-16 flex flex-col md:items-end text-left md:text-right pt-1 md:pt-0">
                    <span className="text-[10px] font-bold tracking-widest text-rose-500 uppercase mb-2">Stage 01</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Developers & Engineering</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Trigger code push, system configuration requests, and infrastructure changes via standard Git workflows without ever leaving the IDE.</p>
                  </div>
                  {/* Extra - Right Side */}
                  <div className="hidden md:flex w-1/2 pl-16 items-center">
                    <div className="px-5 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800 font-mono text-[11px] text-zinc-300 shadow-xl group-hover:border-rose-500/30 transition-colors">
                      <span className="text-rose-400">~/project</span>$ git commit -m "feat: setup"
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Layer 2: Backstage Portal */}
              <Reveal delay={0.2}>
                <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-0 group">
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black border-2 border-rose-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)] z-10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-rose-500/10 transition-all duration-300">
                    <Layout className="w-6 h-6 md:w-7 md:h-7 text-rose-400" />
                  </div>
                  <div className="w-full md:w-1/2 pl-24 md:pl-16 flex flex-col items-start text-left pt-1 md:pt-0">
                    <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase mb-2">Stage 02</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Self-Service Portal</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Discover templates, register new microservices, and manage ownership through a unified UI catalog powered by Backstage architecture.</p>
                  </div>
                  <div className="hidden md:flex w-1/2 pr-16 justify-end items-center">
                    <div className="flex gap-2">
                      {['Catalog', 'Templates', 'TechDocs'].map(t => (
                        <span key={t} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg text-xs font-medium group-hover:bg-rose-500/20 transition-colors">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Layer 3: CI/CD Factory */}
              <Reveal delay={0.3}>
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black border-2 border-rose-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-rose-500/10 transition-all duration-300">
                    <Workflow className="w-6 h-6 md:w-7 md:h-7 text-rose-500" />
                  </div>
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 md:pr-16 flex flex-col md:items-end text-left md:text-right pt-1 md:pt-0">
                    <span className="text-[10px] font-bold tracking-widest text-rose-500 uppercase mb-2">Stage 03</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">CI/CD Factory</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Automated vulnerability scanning, syntax linting, container image building, and test execution triggered automatically on every commit.</p>
                  </div>
                  <div className="hidden md:flex w-1/2 pl-16 items-center">
                    <div className="px-5 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3 group-hover:bg-rose-500/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-rose-400" />
                      <span className="text-sm text-zinc-200 font-medium">Build passing (1m 24s)</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Layer 4: Kubernetes */}
              <Reveal delay={0.4}>
                <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-0 group">
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black border-2 border-rose-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] z-10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-rose-500/10 transition-all duration-300">
                    <Box className="w-6 h-6 md:w-7 md:h-7 text-rose-400" />
                  </div>
                  <div className="w-full md:w-1/2 pl-24 md:pl-16 flex flex-col items-start text-left pt-1 md:pt-0">
                    <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase mb-2">Stage 04</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">GitOps K8s Engine</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Declarative state synchronization loop via ArgoCD, ensuring zero configuration drift across all application clusters continuously.</p>
                  </div>
                  <div className="hidden md:flex w-1/2 pr-16 justify-end items-center">
                    <div className="flex flex-col gap-2.5 w-48 bg-zinc-950/80 p-4 rounded-xl border border-zinc-800 group-hover:border-rose-500/30 transition-colors">
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1"><span>CLUSTER-01</span><span className="text-rose-500">SYNCED</span></div>
                      <div className="h-1.5 w-full bg-rose-500/10 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-full opacity-70 group-hover:animate-pulse" /></div>
                      <div className="h-1.5 w-full bg-rose-500/10 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-[80%] opacity-70 group-hover:animate-pulse" /></div>
                      <div className="h-1.5 w-full bg-rose-500/10 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-[95%] opacity-70 group-hover:animate-pulse" /></div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Layer 5: Cloud Infrastructure */}
              <Reveal delay={0.5}>
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black border-2 border-zinc-500/50 shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
                    <Cloud className="w-6 h-6 md:w-7 md:h-7 text-zinc-300" />
                  </div>
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 md:pr-16 flex flex-col md:items-end text-left md:text-right pt-1 md:pt-0">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase mb-2">Stage 05</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Cloud Infrastructure</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Automatically provisioned resource grids, managed databases, and highly available networks deployed across multi-cloud environments.</p>
                  </div>
                  <div className="hidden md:flex w-1/2 pl-16 items-center">
                    <div className="flex gap-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 bg-zinc-950 border border-zinc-900 p-3 rounded-2xl">
                      <img src="/assets/Tech_logos/AWS.svg" className="w-8 h-8 object-contain" alt="AWS" loading="lazy" />
                      <img src="/assets/Tech_logos/Microsoft-Azure.svg" className="w-8 h-8 object-contain" alt="Azure" loading="lazy" />
                      <img src="/assets/Tech_logos/Google_Cloud.svg" className="w-8 h-8 object-contain" alt="GCP" loading="lazy" />
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

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
              Everything you need to know about our internal developer platforms, CI/CD automated setups, and GitOps sync engines. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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

      {/* 8. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Accelerate Engineering Cycles</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with our system engineers to build unified Golden Paths.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Talk To Platform Engineers
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
