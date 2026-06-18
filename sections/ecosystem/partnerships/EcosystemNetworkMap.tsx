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
          <div className="lg:col-span-7 relative h-[420px] flex items-center justify-center">
            {/* Background Orbits */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-zinc-900/60 pointer-events-none" />
            <div className="absolute w-[160px] h-[160px] rounded-full border border-zinc-900/40 pointer-events-none" />

            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
              <g transform="translate(245, 210)" className="opacity-30">
                {nodes.map(n => {
                  const pos = getPosition(n.angle, n.radius);
                  const isSelected = selectedNode === n.id;
                  return (
                    <line
                      key={n.id}
                      x1="0"
                      y1="0"
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isSelected ? "#f43f5e" : "#27272a"}
                      strokeWidth={isSelected ? "2" : "1"}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </g>
            </svg>

            {/* Central Node */}
            <button
              onClick={() => setSelectedNode("center")}
              className={`absolute w-20 h-20 rounded-full flex flex-col items-center justify-center z-20 cursor-pointer border transition-all duration-300 ${
                selectedNode === "center"
                  ? "bg-rose-500/20 text-rose-500 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                  : "bg-zinc-950 text-zinc-500 border-zinc-900 hover:border-zinc-800"
              }`}
            >
              <Network size={20} className="mb-1" />
              <span className="text-[8px] font-mono font-bold tracking-widest">DTRIO</span>
            </button>

            {/* Surrounding Nodes */}
            {nodes.map((node) => {
              const pos = getPosition(node.angle, node.radius);
              const isSelected = selectedNode === node.id;
              
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`
                  }}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-[8px] font-mono font-bold uppercase cursor-pointer border transition-all duration-300 z-10 ${
                    isSelected
                      ? "bg-rose-500/10 text-rose-500 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.25)]"
                      : "bg-zinc-950 text-zinc-400 border-zinc-900/80 hover:border-rose-500/30 hover:text-rose-500"
                  }`}
                  title={node.name}
                >
                  {node.name.substring(0, 4)}
                </button>
              );
            })}
          </div>

          {/* Details Panel - Right */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 min-h-[320px] flex flex-col justify-between backdrop-blur-sm">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  SELECTED ALLIANCE NODE
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{activeNodeDetails.name}</h3>
                <p className="text-xs text-rose-500 font-mono mb-6 uppercase tracking-wider">{activeNodeDetails.role}</p>
                
                <span className="block text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Capabilities & Integrations
                </span>
                <ul className="space-y-2.5">
                  {activeNodeDetails.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 font-semibold leading-normal">
                      <CheckCircle2 size={13} className="text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900/80">
                <span className="text-[10px] font-mono text-zinc-500">
                  Click on any surrounding bubble node to display its structural capabilities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
