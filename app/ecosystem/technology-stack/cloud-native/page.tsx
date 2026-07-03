"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  ChevronDown,
  Cloud,
  Cpu,
  Workflow,
  Database,
  Layers,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Server,
  Activity,
  GitBranch
} from "lucide-react";
import Link from "next/link";

export default function CloudNativePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const technologies = [
    "Azure", "AWS", "OCI", "Kubernetes", "Docker", "Helm", "Istio", "ArgoCD"
  ];

  const archFeatures = [
    "Microservice decoupling layouts utilizing asynchronous messaging",
    "High-availability hosting zones spanning active cloud regions",
    "Stateless service profiles ensuring quick horizontal autoscaling"
  ];

  const k8sFeatures = [
    "AKS Kubernetes cluster configurations managing container pods",
    "EKS / GKE workload automation and Karpenter node scaling",
    "Custom Ingress Controllers routing external internet traffic",
    "Autoscaler configurations handling sudden platform traffic spikes"
  ];

  const containerFeatures = [
    "Docker declarative container builds optimizing package size",
    "Helm chart registries packaging reusable microservice sets",
    "Container Registry registries indexing scanned base image versions",
    "Multi-stage build files removing compilation dependencies from images"
  ];

  const meshFeatures = [
    "Istio Service Mesh routing rules separating pod traffic pathways",
    "Mutual TLS (mTLS) configurations encrypting internal networks",
    "Circuit Breaking thresholds preventing cascade service outages",
    "Distributed tracing integrations tracking system requests"
  ];

  const multiFeatures = [
    "Terraform IaC blueprints provisioning multi-cloud setups",
    "Azure / AWS network peering routing cross-cloud queries",
    "OCI database links backup synchronizations"
  ];

  const govFeatures = [
    "Cloud Governance policies limiting resource family sizes",
    "Compliance monitoring audits checking system parameters",
    "Role Based Access (RBAC) maps restricting namespaces access"
  ];

  const faqs = [
    { q: "Why standardize on AKS Kubernetes clusters?", a: "Azure Kubernetes Service (AKS) offers automated upgrades, integrated directory security (Microsoft Entra), and reliable horizontal node scaling." },
    { q: "What is the role of Helm in container strategy?", a: "Helm acts as a package manager, allowing you to define, install, and upgrade complex Kubernetes applications using reusable charts." },
    { q: "How does Istio secure pod-to-pod communication?", a: "Istio injects a proxy sidecar beside every container, managing traffic routing and enforcing mutual TLS (mTLS) encryption automatically." },
    { q: "What are Karpenter scaling rules?", a: "Karpenter dynamically provisions optimal virtual machine sizes directly matching the CPU/RAM requests of pending pods, lowering cloud bills." },
    { q: "Do you recommend multi-cloud deployments?", a: "For critical workloads, yes. It prevents single-provider outages and allows routing traffic based on regional pricing advantages." },
    { q: "How are container base images checked for vulnerabilities?", a: "Every build runner runs Trivy scans on container images, block-marking packages that contain critical CVE ratings." },
    { q: "What is an ingress controller?", a: "It is an application that routes external HTTP/HTTPS traffic to internal Kubernetes services using customizable host and path rules." },
    { q: "Does the platform support serverless container setups?", a: "Yes, we integrate with Azure Container Apps or AWS Fargate for stateless services requiring scaling to zero." },
    { q: "How is GitOps integrated with ArgoCD?", a: "ArgoCD monitors your git repo for manifest changes and synchronizes the cluster state automatically, eliminating manual kubectl steps." },
    { q: "How do we get started with Cloud Native migration?", a: "Click 'Consult Cloud Architects' to schedule an audit of your current applications and map migration paths." }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        <div className="absolute inset-0 z-0">
          <img src="/assets/ecosystem/sub-page-hero/Ecosystem_technology_stack/cloud_tech.png" alt="Cloud Native Technology background" className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto w-full px-12 xl:px-8 text-center relative z-20">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <Cloud className="w-3.5 h-3.5" />
              Cloud Native Unit
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Cloud Native
            </h1>
            <p className="text-xl md:text-2xl font-bold text-rose-500 mb-8 max-w-2xl mx-auto">
              AKS Kubernetes clusters and microservices.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-200 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              Build container strategies, deploy Istio service meshes, configure multi-cloud deployments, and enforce governance rules.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
            >
              Consult Cloud Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>


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

      {/* 2. CLOUD ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ARCHITECTURE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Architecture</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Design scalable software boundaries. Map microservice endpoints, isolate networks, and configure global content distribution systems.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {archFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. KUBERNETES PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {k8sFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Cpu className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">CONTAINER CLUSTERS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Kubernetes Platform</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Standardize cluster configurations. Provision managed AKS nodes, establish autoscaling properties, and monitor namespace metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTAINER STRATEGY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PACKAGING</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Container Strategy</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Package codebase instances cleanly. Maintain Helm version registries, run image vulnerabilities scans, and clean configuration files.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {containerFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Layers className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE MESH */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {meshFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SECURE INTERNETWORK</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Service Mesh</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Enforce secure service interactions. Use Istio proxies to handle connection routing and configure mutual TLS encrypt pathways automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MULTI CLOUD DEPLOYMENT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">HYBRID PROFILES</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Multi Cloud Deployment</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Distribute workloads cross-cloud. Securely connect resource groups inside Azure, AWS, and OCI locations using Terraform profiles.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {multiFeatures.map((feat, idx) => (
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

      {/* 7. CLOUD GOVERNANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              {govFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 hover:shadow-[0_0_30px_rgba(225,29,72,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPLIANCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Governance</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Enforce cost limits and resource settings automatically. Track configuration setups and manage IAM namespace permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-4xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FAQ</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Go Cloud Native</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with our cloud native engineering unit to provision autoscaling clusters and Istio meshes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Consult Cloud Architects
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
