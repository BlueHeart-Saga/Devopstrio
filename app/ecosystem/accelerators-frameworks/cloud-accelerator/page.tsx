"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  ChevronDown,
  Cloud,
  Server,
  ShieldCheck,
  Layers,
  Network,
  Settings,
  Rocket
} from "lucide-react";
import Link from "next/link";

export default function CloudAcceleratorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const landingZones = [
    { title: "Azure Landing Zones", desc: "Enterprise-Scale architecture for Azure, utilizing Bicep/Terraform for hub-and-spoke networking and policy enforcement." },
    { title: "AWS Landing Zones", desc: "Multi-account AWS Control Tower blueprints featuring centralized logging, Transit Gateway, and SCP security guardrails." },
    { title: "OCI Landing Zones", desc: "Oracle Cloud Infrastructure blueprints optimized for high-performance computing, Exadata, and secure compartments." }
  ];

  const infrastructureBlueprints = [
    { title: "Networking", desc: "Pre-configured VNet/VPC peering, ExpressRoute/DirectConnect setups, and secure egress firewall routing." },
    { title: "IAM Roles", desc: "Least-privilege RBAC templates establishing secure cross-account access and zero-trust identity layers." },
    { title: "Security & Monitoring", desc: "Automated deployment of native cloud security centers, SIEM integration, and log shipping agents." }
  ];

  const governance = [
    "Automated Tagging Policies enforcing resource tracking for granular billing and FinOps",
    "Compliance Guardrails preventing the deployment of unencrypted storage or public IPs",
    "Cost Optimization alerts detecting orphaned disks and underutilized instances instantly"
  ];

  const multiCloud = [
    { title: "Cloud Agnostic IaC", desc: "Utilizing Terraform and OpenTofu to maintain unified infrastructure states across different hyperscalers." },
    { title: "Inter-Cloud Routing", desc: "Secure VPN tunnels and dedicated interconnects bridging AWS, Azure, and OCI environments." },
    { title: "Unified Identity", desc: "Single Sign-On (SSO) architecture federating Azure AD/Entra across all cloud boundaries." }
  ];

  const deploymentFactory = [
    { step: "Initialize", desc: "Execute CLI script fetching template parameters." },
    { step: "Validate", desc: "Terraform plan runs security and compliance checks." },
    { step: "Deploy", desc: "Resources provisioned safely via CI/CD automation." },
    { step: "Handover", desc: "Access granted to application teams with constraints." }
  ];

  const metrics = [
    { value: "<48h", label: "Environment Setup" },
    { value: "0", label: "Compliance Violations" },
    { value: "30%", label: "Average Cloud Savings" }
  ];

  const faqs = [
    { q: "What is a Cloud Landing Zone?", a: "A landing zone is a pre-configured, secure, multi-account cloud environment based on best practices. It serves as the foundation for your enterprise workloads." },
    { q: "How long does it take to deploy?", a: "By using our Cloud Accelerator, we can deploy a fully compliant landing zone in under 48 hours, a process that typically takes months of manual engineering." },
    { q: "Are the blueprints customizable?", a: "Yes. Our Terraform modules are highly parameterized, allowing you to tweak IP ranges, naming conventions, and specific security policies." },
    { q: "Do you support hybrid cloud setups?", a: "Absolutely. Our network blueprints include configurations for VPNs and dedicated connections (like ExpressRoute) back to on-premises data centers." },
    { q: "How do you handle infrastructure state?", a: "We manage state files securely using encrypted cloud storage backends (S3/Blob Storage) paired with DynamoDB/CosmosDB for state locking." },
    { q: "What compliance standards do you cover?", a: "Our guardrails are mapped against CIS Benchmarks, NIST 800-53, SOC 2, and HIPAA requirements out-of-the-box." },
    { q: "Who owns the code?", a: "You do. We deploy the Infrastructure as Code (IaC) repositories directly into your Git environment, ensuring complete vendor independence." },
    { q: "How is billing managed across multiple accounts?", a: "We set up centralized consolidated billing and enforce strict tagging rules, so you can track costs back to specific teams or projects using FinOps dashboards." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer managed services to continuously monitor, update, and patch the landing zone infrastructure as cloud providers release new features." },
    { q: "How do we get started?", a: "Click 'Accelerate Cloud Adoption' to schedule a landing zone architecture workshop with our cloud engineers." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="INFRASTRUCTURE IP"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Cloud Accelerator
            </span>
          </>
        }
        subtitle="Launch enterprise-ready cloud environments in days instead of months. Bypass the complex engineering required to build secure cloud foundations. Our proprietary Landing Zone frameworks provision fully compliant Azure, AWS, and OCI architectures instantly."
        bgImage="/assets/ecosystem/sub-page-hero/Ecosystem_Acceletors&framework/CLOUD.png"
        stats={metrics}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "CLOUD ACCELERATOR" }
        ]}
      >
        <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Consult Architects
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
      </Hero>

      {/* 2. LANDING ZONE FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">FOUNDATION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Landing Zone Framework</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {landingZones.map((zone, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{zone.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INFRASTRUCTURE BLUEPRINTS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPONENTS</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Infrastructure Blueprints</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Our accelerator comes loaded with pre-configured Terraform modules handling the most complex aspects of cloud engineering.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {infrastructureBlueprints.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                    <Server className="w-4 h-4 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOUD GOVERNANCE FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 lg:order-2">
              {governance.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">COMPLIANCE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Cloud Governance Framework</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                Prevent drift and ensure absolute control over your cloud spending and security policies through automated rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTI-CLOUD ARCHITECTURE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">HYBRID</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Multi-Cloud Architecture</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {multiCloud.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Network className="w-4 h-4 text-rose-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEPLOYMENT FACTORY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">METHODOLOGY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Deployment Factory</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {deploymentFactory.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[180px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                  <Settings className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
                </div>
                {idx < deploymentFactory.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUCCESS METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OUTCOMES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Customer Success</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/20 border border-zinc-900/60 rounded-xl hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-center items-center">
                <span className="text-4xl font-black text-white tracking-tight mb-2">{m.value}</span>
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
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

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Accelerate Cloud Adoption</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Stop writing boilerplate Terraform. Leverage our proprietary landing zones to deploy secure, compliant cloud networks today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Deploy Landing Zone
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}
