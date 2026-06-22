"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Network, Zap, CheckCircle2 } from "lucide-react";

interface Node {
  id: string;
  name: string;
  angle: number; // degrees
  radius: number; // px from center
  color: string;
  role: string;
  details: string[];
}

export function EcosystemNetworkMap() {
  const [selectedNode, setSelectedNode] = useState<string>("center");

  const nodes: Node[] = [
    { id: "ms", name: "Microsoft", angle: 0, radius: 140, color: "bg-blue-500/20 text-blue-400 border-blue-500/40", role: "Hybrid Cloud & Enterprise Software", details: ["Azure AD integration", "AI Foundry copilots", "Office integration Frameworks"] },
    { id: "aws", name: "AWS", angle: 36, radius: 140, color: "bg-orange-500/20 text-orange-400 border-orange-500/40", role: "Serverless & Core Cloud Infra", details: ["EC2 & Lambda scalability", "IAM policy boundaries", "Control Tower landing zones"] },
    { id: "gcp", name: "Google", angle: 72, radius: 140, color: "bg-red-500/20 text-red-400 border-red-500/40", role: "MLOps & Data Analytics", details: ["Vertex AI models", "BigQuery analytics warehousing", "GKE cluster scaling"] },
    { id: "oracle", name: "Oracle", angle: 108, radius: 140, color: "bg-rose-500/20 text-rose-400 border-rose-500/40", role: "Databases & ERP Automation", details: ["OCI migrations", "Autonomous database tuning", "Fusion ERP connectors"] },
    { id: "sap", name: "SAP", angle: 144, radius: 140, color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/40", role: "Back-Office Ledgers & Supply", details: ["S/4HANA workflows", "ABAP interfaces", "Ledger consolidations"] },
    { id: "cisco", name: "Cisco", angle: 180, radius: 140, color: "bg-sky-500/20 text-sky-400 border-sky-500/40", role: "Enterprise Networking WAN", details: ["SD-WAN routing", "Campus switches", "Webex collaborations"] },
    { id: "snow", name: "ServiceNow", angle: 216, radius: 140, color: "bg-green-500/20 text-green-400 border-green-500/40", role: "ITSM Operations Automation", details: ["ITSM ticket automation", "HR Ops systems", "Automated alert pipelines"] },
    { id: "cf", name: "Cloudflare", angle: 252, radius: 140, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40", role: "Edge Delivery & Security CDN", details: ["Edge WAF rules", "DNS route optimizations", "Zero-Trust cloud access"] },
    { id: "dd", name: "Datadog", angle: 288, radius: 140, color: "bg-purple-500/20 text-purple-400 border-purple-500/40", role: "SRE Observability Telemetry", details: ["Application trace setups", "SRE alert dashboards", "Unified logs collection"] },
    { id: "mongo", name: "MongoDB", angle: 324, radius: 140, color: "bg-teal-500/20 text-teal-400 border-teal-500/40", role: "Document Databases & Vectors", details: ["Atlas cloud storage", "Vector indexes", "Sub-second write streams"] }
  ];

  const getPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    return { x, y };
  };

  const activeNodeDetails = selectedNode === "center" 
    ? { name: "DEVOPSTRIO", role: "Unified Enterprise Orchestrator", details: ["Co-engineering solutions with AWS, Azure & GCP", "Custom API Integrations across all SaaS systems", "Zero-Trust security orchestration models"] }
    : nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <section id="network-map" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ALLIANCE MAPPING
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Partner Ecosystem <span className="text-rose-500">Network Map</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Interact with our technology map to see how we orchestrate connections between our partners and your core enterprise systems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[480px]">
          {/* Constellation Diagram - Left */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <img
              src="/assets/ecosystem/main-page/logoss.png"
              alt="Ecosystem Network Map"
              className="w-full h-auto max-h-[420px] object-contain select-none pointer-events-none"
            />
          </div>

          {/* Details Panel - Right */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 min-h-[320px] flex flex-col justify-between backdrop-blur-sm">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                  SELECTED ALLIANCE NODE
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{activeNodeDetails.name}</h3>
                <p className="text-sm md:text-base text-rose-500 font-mono mb-6 uppercase tracking-wider">{activeNodeDetails.role}</p>
                
                <span className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-3.5">
                  Capabilities & Integrations
                </span>
                <ul className="space-y-3">
                  {activeNodeDetails.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-zinc-300 font-semibold leading-normal">
                      <CheckCircle2 size={16} className="text-rose-500 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900/80">
                <span className="text-xs font-mono text-zinc-500 leading-relaxed block">
                  Orchestrating connections across public clouds, SaaS platforms, and core enterprise systems.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
