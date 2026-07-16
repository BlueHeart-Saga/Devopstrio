"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Github,
  GitPullRequest,
  TerminalSquare,
  Code2,
  Box,
  FileCode2,
  GitBranch,
  Star
} from "lucide-react";
import Link from "next/link";

export default function OpenSourcePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const openSourcePortfolio = [
    { icon: <Box className="w-6 h-6 text-rose-500" />, title: "Terraform Modules", desc: "A library of over 50 public Terraform modules providing secure-by-default blueprints for AWS and Azure infrastructure." },
    { icon: <TerminalSquare className="w-6 h-6 text-rose-500" />, title: "Kubernetes Operators", desc: "Custom controllers written in Go that automate complex stateful application deployments, open-sourced for the community." },
    { icon: <FileCode2 className="w-6 h-6 text-rose-500" />, title: "CI/CD Templates", desc: "Reusable GitHub Actions and GitLab CI templates embedding industry-standard DevSecOps scanning out of the box." },
    { icon: <Code2 className="w-6 h-6 text-rose-500" />, title: "AI Frameworks", desc: "Lightweight Python wrappers making it easier to integrate LangChain and LlamaIndex with enterprise vector databases." }
  ];

  const featuredProjects = [
    { title: "Kube-Cost-Optimizer", desc: "An open-source CLI tool that analyzes cluster metrics and generates Kustomize patches to aggressively right-size resource limits." },
    { title: "Tf-Guardrails", desc: "A collection of pre-written OPA (Open Policy Agent) Rego policies enforcing CIS benchmarks on Terraform code before deployment." },
    { title: "Semantic-Cache-Proxy", desc: "A high-performance Rust proxy that caches LLM API responses using vector similarity, drastically reducing OpenAI API bills." }
  ];

  const contributionGuidelines = [
    { step: "Fork", desc: "Clone the repository locally." },
    { step: "Develop", desc: "Write code and passing tests." },
    { step: "Review", desc: "Submit PR for peer review." },
    { step: "Merge", desc: "Code is deployed globally." }
  ];

  const developerResources = [
    { title: "Architecture Decision Records", desc: "Publicly accessible ADRs detailing exactly why we made specific architectural choices in our open-source projects." },
    { title: "Engineering Blog", desc: "Deep-dive tutorials written by our maintainers, explaining complex concepts like eBPF and consensus algorithms." },
    { title: "Developer Discord", desc: "An active community channel where you can ask our engineers direct questions about utilizing our open-source tooling." }
  ];

  const metrics = [
    { value: "500+", label: "GitHub Repositories" },
    { value: "10k+", label: "Total Github Stars" },
    { value: "50M+", label: "Docker Hub Pulls" }
  ];

  const faqs = [
    { q: "Under what license is your open-source software released?", a: "The vast majority of our open-source projects are released under the Apache 2.0 or MIT licenses, making them free for commercial use." },
    { q: "Can we use your Terraform modules in production?", a: "Absolutely. Our public Terraform registry modules are the exact same modules we use to build landing zones for our enterprise clients." },
    { q: "How do I contribute to a Devopstrio project?", a: "Navigate to any of our public GitHub repositories, read the CONTRIBUTING.md file, and look for issues tagged 'good first issue' to get started." },
    { q: "Do you offer bounties for finding bugs?", a: "Yes, we run a public bug bounty program for critical security vulnerabilities found in our open-source security tooling." },
    { q: "How are the projects maintained?", a: "We allocate dedicated engineering hours (typically 10-15% of a developer's time) specifically for maintaining and reviewing PRs on our open-source repositories." },
    { q: "Can I request a feature for an open-source tool?", a: "Yes. Please open a 'Feature Request' issue on the relevant GitHub repository. If it aligns with the project roadmap, our maintainers will prioritize it." },
    { q: "Do you contribute to external projects?", a: "Yes, our engineers frequently upstream bug fixes and features to major CNCF projects like Kubernetes, ArgoCD, and Prometheus." },
    { q: "What happens if a project is deprecated?", a: "We provide a minimum 6-month deprecation notice on the repository and usually provide a migration path or recommend an alternative tool." },
    { q: "Do you sponsor other open-source developers?", a: "We do. We actively sponsor key maintainers of critical infrastructure projects via GitHub Sponsors." },
    { q: "How do I access the repositories?", a: "Click the 'Explore Our GitHub' button below to browse our open-source portfolio." }
  ];

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* 1. HERO SECTION */}
      <Hero
        badge="OPEN SOURCE"
        prism={true}
        prismHueShift={1.0}
        title={
          <>
            Open <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Source Innovation
            </span>
          </>
        }
        subtitle="Contributing reusable technologies to the global developer ecosystem. We believe in building in public. By open-sourcing our core infrastructure modules, Kubernetes controllers, and AI wrappers, we aim to accelerate software delivery for engineering teams worldwide."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "COMMUNITY & TALENT NETWORK", href: "/ecosystem/community-talent-network" },
          { label: "OPEN SOURCE CONTRIBUTIONS" }
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

      {/* 2. OPEN SOURCE PORTFOLIO */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">THE CODE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Open Source Portfolio</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openSourcePortfolio.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTRIBUTION GUIDELINES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">WORKFLOW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Contribution Guidelines</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {contributionGuidelines.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center w-[160px] text-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/40 transition-all duration-300 group">
                  <h4 className="text-base font-bold text-rose-500 mb-2">{stage.step}</h4>
                  <p className="text-xs text-zinc-300 font-medium">{stage.desc}</p>
                </div>
                {idx < contributionGuidelines.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ArrowUpRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">SPOTLIGHT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Featured Projects</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl hover:border-rose-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-rose-500" />
                  </div>
                  <GitBranch className="w-4 h-4 text-zinc-600" />
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{project.title}</h4>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEVELOPER RESOURCES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">KNOWLEDGE</span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Developer Resources</h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                We provide comprehensive documentation, architectural deep-dives, and direct access to our maintainers to ensure you can implement our tooling successfully.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {developerResources.map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/30 border border-zinc-900/80 rounded-xl flex items-start gap-4 hover:border-rose-500/20 transition-all duration-300">
                  <GitPullRequest className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. METRICS SECTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">IMPACT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Ecosystem Reach</h2>
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
              Everything you need to know about our Open Source Contributions. Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond to every question personally.
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
                href="mailto:info@devopstrioglobal.com"
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Engineers <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Contribute Today</h2>
          <p className="text-zinc-300 text-sm md:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Help us build the next generation of cloud infrastructure. Star our repositories, submit pull requests, and join the developer community.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]"
          >
            Explore Our GitHub
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <Github className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>
      </section>

    </main>
  );
}
