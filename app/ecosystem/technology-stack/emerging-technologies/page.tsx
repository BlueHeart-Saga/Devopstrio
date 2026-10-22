"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ChevronLeft, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. OVERVIEW
// ==========================================
const EmergingOverview = () => {
  const cards = [
    { title: "Post-Quantum Cryptography", desc: "Implement NIST-standardized quantum-resistant lattice algorithms (ML-KEM / Kyber, ML-DSA / Dilithium) to safeguard encrypted assets.", icon: Key },
    { title: "Confidential Computing Enclaves", desc: "Execute sensitive multi-tenant workloads in hardware-isolated memory regions using AMD SEV-SNP and Intel SGX.", icon: Lock },
    { title: "WebAssembly (Wasm) Micro-Runtimes", desc: "Ultra-fast millisecond cold starts with sandboxed WebAssembly modules executing on distributed edge runtimes.", icon: Cpu },
    { title: "eBPF Kernel-Level Observability", desc: "Zero-overhead packet inspection, security enforcement, and network routing directly within the Linux kernel via Cilium and Tetragon.", icon: Activity },
    { title: "Edge AI & Small Language Models", desc: "Deploy quantized 4-bit SLMs (Llama 3.2, Phi-3) executing sub-10ms local inferences on edge gateways with TensorRT-LLM.", icon: BrainCircuit },
    { title: "Decentralized Lakehouse Meshes", desc: "Open-format telemetry lakehouses built on Apache Iceberg and real-time streaming engines with zero cloud lock-in.", icon: Database }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-3 block">R&D & NEXT-GENERATION ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
              Pioneering Tomorrow's Enterprise Infrastructure
            </h2>
            
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[220px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. WHY EMERGING TECH
// ==========================================
const WhyEmergingTech = () => {
  const legacyThreats = [
    "Vulnerability to 'Harvest Now, Decrypt Later' quantum attacks", "Host OS hypervisor memory inspection risks",
    "High cold-start latencies in containerized serverless runtimes", "High CPU overhead from userspace telemetry sidecars",
    "High cloud egress bills for centralized AI inference"
  ];
  const emergingSolutions = [
    "Hybrid classical + post-quantum TLS 1.3 key exchange", "Cryptographically attested confidential virtual machines",
    "Sub-millisecond WebAssembly sandbox executions", "In-kernel eBPF network telemetry without proxy sidecars",
    "On-premise edge SLM inference with zero data leakage"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">FUTURE-PROOFING</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Building Defensibility Before Disruption Arrives
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Threats */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Minus className="w-4 h-4 text-zinc-500" /> Legacy System Limitations
              </h3>
              <ul className="space-y-4">
                {legacyThreats.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-zinc-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Solutions */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-900/30 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(225,29,72,0.1)]">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Plus className="w-4 h-4 text-rose-500" /> With Emerging Technologies
              </h3>
              <ul className="space-y-4">
                {emergingSolutions.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-rose-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. EMERGING ARCHITECTURE
// ==========================================
const EmergingArchitecture = () => {
  const layers = [
    { name: "Post-Quantum Cryptography Layer", desc: "Kyber-1024, Dilithium, Hybrid TLS, Quantum RNG", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { name: "Confidential Compute Hardware", desc: "AMD SEV-SNP, Intel SGX / TDX Enclaves, AWS Nitro Enclaves", color: "border-indigo-500/50 bg-indigo-500/10 text-indigo-400" },
    { name: "Edge & WebAssembly Runtimes", desc: "Wasmtime, Spin, Fermyon, WebAssembly System Interface (WASI)", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
    { name: "In-Kernel Observability & Security", desc: "eBPF, Cilium CNI, Tetragon Security, BPFTrace", color: "border-rose-500/50 bg-rose-500/10 text-rose-400" },
    { name: "High-Efficiency Edge Inference", desc: "vLLM, TensorRT-LLM, ONNX, Apple Silicon Metal Acceleration", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" },
    { name: "Decentralized Open Data Meshes", desc: "Apache Iceberg, Apache Arrow, DuckDB Embedded OLAP", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">NEXT-GEN SCHEMATICS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Emerging Technology Architectural Stack</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {layers.map((layer, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`p-6 border rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all duration-300 hover:brightness-125 hover:-translate-y-1 shadow-lg ${layer.color}`}>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest">{layer.name}</span>
                <span className="text-xs md:text-sm font-medium opacity-90 mt-2 md:mt-0 tracking-wide">{layer.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. EMERGING CAPABILITIES
// ==========================================
const EmergingCapabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const capabilities = [
    { title: "Quantum-Resilient Cipher Migration", tag: "Protect", desc: "Audit and upgrade legacy RSA/ECC public key infrastructure to lattice-based post-quantum cryptography.", image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp", href: "/ecosystem/technology-stack/emerging-technologies/quantum-computing-research" },
    { title: "Confidential Data Enclaves", tag: "Encrypt", desc: "Process unencrypted health records and financial transactions inside cryptographically sealed hardware enclaves.", image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp", href: "/ecosystem/technology-stack/cybersecurity/zero-trust-architectures" },
    { title: "WebAssembly Edge Micro-Apps", tag: "Accelerate", desc: "Compile Go, Rust, and C++ code into lightweight portable Wasm binaries running with near-native speeds.", image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp", href: "/ecosystem/technology-stack/emerging-technologies/edge-computing" },
    { title: "Sidecar-less eBPF Service Mesh", tag: "Optimize", desc: "Eliminate Envoy proxy overhead and drastically reduce cluster latency through kernel-level socket routing.", image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp", href: "/ecosystem/technology-stack/emerging-technologies/edge-computing" },
    { title: "Edge Small Language Models", tag: "Infer", desc: "Host 3B-8B parameter models locally on edge devices for instant zero-latency automated assistance.", image: "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp", href: "/ecosystem/technology-stack/emerging-technologies/agentic-ai-systems" },
    { title: "Embedded In-Memory OLAP", tag: "Analyze", desc: "Execute multi-million row analytic SQL queries in under 50ms inside application runtimes using DuckDB.", image: "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp", href: "/ecosystem/technology-stack/data-engineering/analytics-processing" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">ENGINEERING SUITE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Pioneering Capabilities Under Active R&D</h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-6 flex-grow">{item.desc}</p>
                  
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
// 5. TECHNOLOGIES WE USE
// ==========================================
const EmergingTechnologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Post-Quantum", items: ["ML-KEM (Kyber)", "ML-DSA (Dilithium)", "OpenSSL 3.2 PQC", "Bouncy Castle"] },
    { name: "Confidential Compute", items: ["AMD SEV-SNP", "Intel SGX / TDX", "Gramine", "Confidential AKS"] },
    { name: "WebAssembly", items: ["Wasmtime", "Fermyon Spin", "WasmEdge", "Bytecode Alliance"] },
    { name: "eBPF Kernel", items: ["Cilium", "Tetragon", "Hubble", "BPFTrace"] },
    { name: "Edge AI", items: ["TensorRT-LLM", "vLLM", "ONNX Runtime", "llama.cpp"] }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">R&D TOOLCHAIN</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Cutting-Edge Technologies We Experiment With</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs sidebar */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[250px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex items-center justify-center hover:border-rose-500/30 transition-colors">
                    <span className="text-sm md:text-base font-medium text-zinc-200 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// 6. BUSINESS OUTCOMES
// ==========================================
const EmergingOutcomes = () => {
  const outcomes = [
    { value: "100%", title: "Post-Quantum Cryptographic Readiness" },
    { value: "<2ms", title: "WebAssembly Module Cold Start Times" },
    { value: "40%", title: "Network Overhead Reduction via eBPF" },
    { value: "Hardware", title: "Isolated Memory Data Protection" },
    { value: "Sub-10ms", title: "Edge AI Small Language Model Inferences" },
    { value: "Zero", title: "Third-Party Data Egress Risks" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">TECHNICAL BREAKTHROUGHS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Outcomes of Applied Emerging Tech R&D</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/50 border border-zinc-900 rounded-3xl hover:border-rose-500/30 transition-all flex flex-col justify-between min-h-[180px]">
                <div className="text-4xl sm:text-5xl font-extrabold text-rose-500 tracking-tight mb-2 font-mono">{item.value}</div>
                <div className="text-base md:text-lg font-bold text-white">{item.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// INDUSTRY USE CASES
// ==========================================
const EmergingIndustryUseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const useCases = [
    { title: "Quantum-Resilient Banking", tag: "Finance", desc: "Protect interbank financial settlement channels with lattice-based Kyber encryption algorithms.", image: "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp", href: "/industries/banking-finance" },
    { title: "Confidential Healthcare AI", tag: "Health", desc: "Execute diagnostic neural inferences inside AMD SEV hardware-isolated confidential memory enclaves.", image: "/webp/assets/common/9d91b93f83e6d4cd494ec13611b3e50e-1.webp", href: "/industries/healthcare-life-sciences" },
    { title: "Edge AI Retail Kiosks", tag: "Commerce", desc: "Deploy lightweight 4-bit SLMs delivering real-time multimodal customer assistance at retail checkout.", image: "/webp/assets/common/b384eb0438c55e43c61e7595acc29638-1.webp", href: "/industries/retail-ecommerce" },
    { title: "Industrial Wasm Micro-Agents", tag: "Industrial", desc: "Compile Rust telemetry processors into WebAssembly modules running sub-millisecond on factory gateways.", image: "/webp/assets/common/e76e125035885aab9c9070ce85df239e-1.webp", href: "/industries/manufacturing" },
    { title: "eBPF 5G Core Networks", tag: "Networking", desc: "Kernel-level socket redirection eliminating proxy bottlenecks across telecom cellular towers.", image: "/webp/assets/common/f03cc521fb070dfae9d87768b791ff70-1.webp", href: "/industries/telecommunications" },
    { title: "Defense & Sovereign Cloud", tag: "Public", desc: "Post-quantum encrypted data lakes and zero-trust verification compliant with federal quantum mandates.", image: "/webp/assets/common/f317dd71184f5c47d601eeb9508bf92c-1.webp", href: "/industries/government-public-sector" },
    { title: "Edge Learning Labs", tag: "Learning", desc: "Decentralized on-device training sandboxes with privacy-preserving federated intelligence models.", image: "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp", href: "/industries/education" },
    { title: "Real-Time Telemetry Meshes", tag: "Supply Chain", desc: "Embedded DuckDB OLAP engines analyzing container ship routing streams in sub-50 milliseconds.", image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp", href: "/industries/retail-ecommerce" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-40 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold tracking-[0.2em] text-rose-400 font-mono uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-6 flex-grow">{item.desc}</p>
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

// ==========================================
// 7. FAQ & CTA
// ==========================================
const EmergingFAQ = () => {
  const faqs = [
    { q: "Why should enterprises prepare for Post-Quantum Cryptography now?", a: "Adversaries are actively storing encrypted enterprise communications today in 'Harvest Now, Decrypt Later' campaigns. When cryptographically relevant quantum computers emerge, this data will be decrypted unless protected by post-quantum algorithms." },
    { q: "How does eBPF replace traditional service mesh sidecars?", a: "Traditional service meshes inject an Envoy proxy container into every pod, adding CPU load and double-hop network latency. eBPF operates inside the Linux kernel to route, encrypt, and inspect packets directly without userspace proxies." },
    { q: "What is Confidential Computing and when is it necessary?", a: "Confidential Computing encrypts data in-use during memory execution. It is crucial when running regulated workloads (healthcare, banking, defense) in public cloud environments where even the cloud provider cannot inspect system memory." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-rose-500 font-mono mb-4 block">KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Frequently Asked Questions</h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">{faq.q}</h3>
              <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmergingCTA = () => {
  return (
    <section className="w-full py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Explore Next-Generation Technology with Our R&D Lab
          </h2>

          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-8 pr-4 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30"
          >
            Schedule an R&D Exploration Session
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function EmergingTechnologiesTechPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <Hero
        badge="Technology Stack"
        title={
          <>
            Emerging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Technologies
            </span>
          </>
        }
        subtitle="Future-proof enterprise architectures with Post-Quantum Cryptography, Confidential Computing enclaves, WebAssembly micro-runtimes, and kernel-level eBPF telemetry."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "EMERGING TECHNOLOGIES" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/contact#contact-form" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Talk to an R&D Specialist
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/ecosystem/technology-stack" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Explore All Tech Stacks
          </Link>
        </div>
      </Hero>

      <EmergingOverview />
      <WhyEmergingTech />
      <EmergingArchitecture />
      <EmergingCapabilities />
      <EmergingTechnologies />
      <EmergingOutcomes />
      <EmergingIndustryUseCases />
      <EmergingFAQ />
      <EmergingCTA />
    </main>
  );
}
