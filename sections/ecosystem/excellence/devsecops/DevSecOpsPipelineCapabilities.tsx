"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  GitBranch,
  FileCode,
  Boxes,
  Key,
  ShieldAlert,
  Activity,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Terminal,
  Code2,
  Scan,
  Cpu,
  Server,
  Cloud
} from "lucide-react";

export function DevSecOpsPipelineCapabilities() {
  const capabilities = [
    { title: "Secure CI/CD", desc: "Security integrated into automated deployment pipelines.", icon: GitBranch },
    { title: "Infrastructure as Code Security", desc: "Validate infrastructure manifests before deployment.", icon: FileCode },
    { title: "Container Security", desc: "Protect container images and Kubernetes workloads.", icon: Boxes },
    { title: "Secrets Management", desc: "Secure credentials, API keys, and certificates automatically.", icon: Key },
    { title: "Vulnerability Management", desc: "Identify, prioritize, and remediate security risks continuously.", icon: ShieldAlert },
    { title: "Security Monitoring", desc: "Continuous monitoring across applications and cloud environments.", icon: Activity },
    { title: "Identity & Access Management", desc: "Protect users, services, and privileged accounts with Zero Trust.", icon: UserCheck },
    { title: "Policy Enforcement", desc: "Automate governance and security standards with Policy as Code.", icon: ShieldCheck }
  ];

  const pipelineWorkflow = [
    { step: "Developer", icon: Terminal, desc: "Local IDE Scan" },
    { step: "Source Control", icon: Code2, desc: "PR Secret Scans" },
    { step: "Static Analysis", icon: Scan, desc: "SAST Code Audit" },
    { step: "Dependency Scan", icon: FileCode, desc: "SCA Vulnerabilities" },
    { step: "Build", icon: Cpu, desc: "Artifact Signing" },
    { step: "Container Scan", icon: Boxes, desc: "Trivy Image Gate" },
    { step: "Infra Validation", icon: Server, desc: "Checkov / OPA" },
    { step: "Deploy", icon: GitBranch, desc: "ArgoCD Release" },
    { step: "Runtime Monitoring", icon: Activity, desc: "eBPF Threat Detection" }
  ];

  const cloudContainerCards = [
    "Azure Security", "AWS Security", "Google Cloud Security", "Kubernetes Security",
    "Docker Security", "Image Scanning", "Runtime Protection", "Cloud Posture Management (CSPM)"
  ];

  return (
    <>
      {/* 5. CORE DEVSECOPS CAPABILITIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">CAPABILITIES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Core DevSecOps Capabilities
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-red-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-zinc-400 font-medium">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CI/CD SECURITY PIPELINE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">PIPELINE FLOW</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Security Embedded Into Every Deployment
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
              Automated security checkpoints spanning from developer IDEs through CI/CD pipelines into cloud runtime.
            </p>
          </Reveal>

          <div className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 relative z-10">
              {pipelineWorkflow.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center min-w-[100px] group">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3 group-hover:border-red-500 group-hover:bg-red-500/10 transition-all shadow-md">
                        <Icon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-200 text-center group-hover:text-white transition-colors">{item.step}</span>
                      <span className="text-[9px] font-mono text-zinc-500 mt-1">{item.desc}</span>
                    </div>
                    {idx < pipelineWorkflow.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-zinc-700 shrink-0 hidden lg:block" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOUD & CONTAINER SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 mb-3 block">CLOUD PROTECTION</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Cloud & Container Security
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cloudContainerCards.map((card, idx) => (
              <div key={idx} className="p-5 bg-zinc-950/60 border border-zinc-900 rounded-xl flex items-center gap-3 hover:border-red-500/40 transition-colors">
                <Cloud className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-xs font-semibold text-zinc-300">{card}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
