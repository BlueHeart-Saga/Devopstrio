"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

interface Node {
  id: string;
  name: string;
  color: string;
  role: string;
  details: string[];
}

export function EcosystemNetworkMap() {
  const [selectedNode] = useState<string>("center");

  const nodes: Node[] = [
    { id: "ms", name: "Microsoft", color: "bg-blue-500/20 text-blue-400 border-blue-500/40", role: "Hybrid Cloud & Enterprise Software", details: ["Azure AD integration", "AI Foundry copilots", "Office integration Frameworks"] },
    { id: "aws", name: "AWS", color: "bg-orange-500/20 text-orange-400 border-orange-500/40", role: "Serverless & Core Cloud Infra", details: ["EC2 & Lambda scalability", "IAM policy boundaries", "Control Tower landing zones"] },
    { id: "gcp", name: "Google", color: "bg-red-500/20 text-red-400 border-red-500/40", role: "MLOps & Data Analytics", details: ["Vertex AI models", "BigQuery analytics warehousing", "GKE cluster scaling"] },
    { id: "oracle", name: "Oracle", color: "bg-rose-500/20 text-rose-400 border-rose-500/40", role: "Databases & ERP Automation", details: ["OCI migrations", "Autonomous database tuning", "Fusion ERP connectors"] },
    { id: "sap", name: "SAP", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/40", role: "Back-Office Ledgers & Supply", details: ["S/4HANA workflows", "ABAP interfaces", "Ledger consolidations"] }
  ];

  const activeNodeDetails = selectedNode === "center" 
    ? { 
        name: "DEVOPSTRIO", 
        role: "Unified Enterprise Orchestrator", 
        details: [
          "Co-engineering solutions with AWS, Azure & Google Cloud", 
          "Custom API Integrations across all SaaS systems", 
          "Zero-Trust security orchestration models"
        ] 
      }
    : nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <section id="network-map" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Section Heading */}
        <Reveal className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Partner Ecosystem <span className="text-rose-500">Network Map</span>
          </h2>
          {/* <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed">
            Connecting leading public clouds, enterprise AI platforms, and SaaS ecosystems into a unified digital framework.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[480px]">
          
          {/* Constellation Diagram - Left Image */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <img 
              src="/webp/assets/ecosystem/main-page/logoss.webp"
              alt="Ecosystem Network Map"
              className="w-full h-auto max-h-[440px] object-contain select-none pointer-events-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              loading="lazy" 
            />
          </div>

          {/* Details Panel - Right Side */}
          <div className="lg:col-span-5">
            <div className="bg-[#09090b] border border-zinc-900 rounded-3xl p-8 md:p-9 min-h-[340px] flex flex-col justify-between shadow-2xl backdrop-blur-sm">
              <div>
                {/* Node Title & Role */}
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                  {activeNodeDetails.name}
                </h3>
                <p className="text-base md:text-lg text-rose-500 font-semibold mb-6 tracking-wide">
                  {activeNodeDetails.role}
                </p>
                
                <span className="block text-sm md:text-base font-semibold text-zinc-200 uppercase tracking-wider mb-4">
                  Capabilities & Integrations
                </span>
                
                {/* Capabilities List */}
                <ul className="space-y-3.5">
                  {activeNodeDetails.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base md:text-lg text-zinc-300 font-semibold leading-relaxed">
                      <CheckCircle2 size={18} className="text-rose-500 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Summary Note */}
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <span className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed block">
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
