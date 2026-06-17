"use client";

import React from "react";
import { Check, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityArchitectureProps {
  serviceSlug: string;
  capabilityTitle: string;
}

interface ArchitectureFlow {
  title: string;
  layers: {
    label: string;
    node: string;
  }[];
}

const architectureRegistry: Record<string, ArchitectureFlow> = {
  "ai-data-innovation": {
    title: "Generative AI Architecture Flow",
    layers: [
      { label: "Layer 01: User Experience", node: "Web Portal, Chat Interfaces & Mobile SDKs" },
      { label: "Layer 02: Application Services", node: "API Gateway & Authentication Controllers" },
      { label: "Layer 03: AI & Automation", node: "AI Orchestrator (LangChain, LlamaIndex & Multi-Agent Frameworks)" },
      { label: "Layer 04: Data Platform", node: "Vector Database (Pinecone, pgvector & Chroma DB)" },
      { label: "Layer 05: Cloud & Security", node: "Enterprise Data Sources & LLM Providers (OpenAI, Claude, Gemini)" }
    ]
  },
  "cloud-services": {
    title: "Multi-Cloud Landing Zone System",
    layers: [
      { label: "Layer 01: User Experience", node: "Client Requests & Route 53 Edge DNS Services" },
      { label: "Layer 02: Application Services", node: "API Routers & Edge Load Balancers" },
      { label: "Layer 03: AI & Automation", node: "Auto-Scaling Pods (KEDA) & Dynamic Node Pools" },
      { label: "Layer 04: Data Platform", node: "Replicated Global Databases (Aurora, DynamoDB)" },
      { label: "Layer 05: Cloud & Security", node: "Multi-Region Landing Zones & Encryption KMS Keys" }
    ]
  },
  "devops-automation": {
    title: "GitOps Continuous Delivery Flow",
    layers: [
      { label: "Layer 01: User Experience", node: "Developer Code Push & Git Version Control" },
      { label: "Layer 02: Application Services", node: "CI Build Pipelines (GitHub Actions / GitLab CI)" },
      { label: "Layer 03: AI & Automation", node: "Terraform IaC Configurations & Ansible Playbooks" },
      { label: "Layer 04: Data Platform", node: "Container Image Registry & Artifact Archives" },
      { label: "Layer 05: Cloud & Security", node: "Kubernetes Control Planes (EKS / GKE) & Telemetry" }
    ]
  },
  "cybersecurity": {
    title: "Zero-Trust Defense Architecture",
    layers: [
      { label: "Layer 01: User Experience", node: "Enterprise Clients & Multi-Factor Authentication" },
      { label: "Layer 02: Application Services", node: "Identity Provider Gateway (OIDC / SSO / Okta)" },
      { label: "Layer 03: AI & Automation", node: "Application Shielding & WAF Rules Enforcers" },
      { label: "Layer 04: Data Platform", node: "Log Aggregators & SIEM Threat Storage Databases" },
      { label: "Layer 05: Cloud & Security", node: "SOC Monitoring Centers & Compliance Reporting Tools" }
    ]
  },
  "software-development": {
    title: "Distributed Microservices Pipeline",
    layers: [
      { label: "Layer 01: User Experience", node: "React Client Webapps & Native Mobile Apps" },
      { label: "Layer 02: Application Services", node: "API Gateway Router & Envoy Message Proxy" },
      { label: "Layer 03: AI & Automation", node: "Asynchronous Message Queues (Apache Kafka / RabbitMQ)" },
      { label: "Layer 04: Data Platform", node: "Distributed Cache Clusters (Redis) & Relational DBs" },
      { label: "Layer 05: Cloud & Security", node: "Secure Cloud Compute Containers (Docker / ECS)" }
    ]
  },
  "digital-transformation": {
    title: "Legacy Modernization Ecosystem",
    layers: [
      { label: "Layer 01: User Experience", node: "Customer Web Portals & Mobile Booking Apps" },
      { label: "Layer 02: Application Services", node: "Modern API Adapters & JSON Schema Transformers" },
      { label: "Layer 03: AI & Automation", node: "Workflow Orchestrations & Notification Senders" },
      { label: "Layer 04: Data Platform", node: "Operational Data Stores & Legacy Mainframe Databases" },
      { label: "Layer 05: Cloud & Security", node: "Audited Enterprise Cloud Stacks & Security Gates" }
    ]
  },
  "data-engineering": {
    title: "Streaming Data Lakehouse Pipeline",
    layers: [
      { label: "Layer 01: User Experience", node: "Telemetry Events & Real-time IoT Ingestion Routes" },
      { label: "Layer 02: Application Services", node: "Distributed Stream Processors (Apache Spark / Flink)" },
      { label: "Layer 03: AI & Automation", node: "Schema Validation Rules & Data Quality Audits" },
      { label: "Layer 04: Data Platform", node: "Data Lakehouse Storage (Delta Lake, Apache Iceberg)" },
      { label: "Layer 05: Cloud & Security", node: "Enterprise BI Connectors & Query Security Logs" }
    ]
  },
  "managed-services": {
    title: "Incident Monitoring & Auto-Resolution",
    layers: [
      { label: "Layer 01: User Experience", node: "Public Status Dashboards & User Incident Forms" },
      { label: "Layer 02: Application Services", node: "Service Desk Systems & Incident Router API" },
      { label: "Layer 03: AI & Automation", node: "Active Resource Monitors & Telemetry Scanners" },
      { label: "Layer 04: Data Platform", node: "Metric Vault Databases (Prometheus / InfluxDB)" },
      { label: "Layer 05: Cloud & Security", node: "Auto-Backup Verifications & Cloud Failover Actions" }
    ]
  },
  "qa-testing": {
    title: "Continuous Quality Gating Grid",
    layers: [
      { label: "Layer 01: User Experience", node: "QA Engineer Dashboards & CI Build Triggers" },
      { label: "Layer 02: Application Services", node: "Parallel Playwright Browser Grid Controllers" },
      { label: "Layer 03: AI & Automation", node: "Visual Layout Regression Checkers & Mock Payload Gen" },
      { label: "Layer 04: Data Platform", node: "Test Report Databases & Execution logs" },
      { label: "Layer 05: Cloud & Security", node: "Quality Guardrail Gates Blocking Defect Deployments" }
    ]
  },
  "it-consulting": {
    title: "IT Enterprise Portfolio Blueprint",
    layers: [
      { label: "Layer 01: User Experience", node: "Management Planning Boards & Strategic Portals" },
      { label: "Layer 02: Application Services", node: "Vendor Application Auditing Utilities" },
      { label: "Layer 03: AI & Automation", node: "Capacity Projection Engines & Migration Planners" },
      { label: "Layer 04: Data Platform", node: "Consolidated Software Asset Catalogs" },
      { label: "Layer 05: Cloud & Security", node: "Disaster Recovery Playbooks & Business Safety Audits" }
    ]
  }
};

const benefitsList = [
  { title: "Scalable", desc: "Built for dynamic enterprise growth." },
  { title: "Secure", desc: "Zero-trust global access protection." },
  { title: "Automated", desc: "Continuous rapid cloud deployment." },
  { title: "High Availability", desc: "Always online with zero downtime." },
  { title: "Cloud Native", desc: "Optimized for modern cloud stacks." },
  { title: "Future Ready", desc: "Modular, decoupled, and upgradable." }
];

export function CapabilityArchitecture({ serviceSlug, capabilityTitle }: CapabilityArchitectureProps) {
  const flow = architectureRegistry[serviceSlug] || architectureRegistry["ai-data-innovation"];

  return (
    <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Main Grid: Left Side Diagram, Right Side Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Alternate Zigzag Architecture Flow Diagram */}
          <div className="lg:col-span-6 w-full flex flex-col justify-start relative">
            <Reveal className="mb-12">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold block mb-2">
                SYSTEM TOPOLOGY
              </span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {flow.title}
              </h3>
            </Reveal>

            {/* Diagram container with vertical spine line */}
            <div className="relative flex flex-col w-full pl-8 lg:pl-0">
              {/* Mobile-only Left Spine Line */}
              <div className="absolute left-3 top-4 bottom-4 w-[1px] bg-gradient-to-b from-rose-500/60 via-rose-500/30 to-rose-500/5 lg:hidden pointer-events-none z-0" />

              {flow.layers.map((layer, idx) => {
                const parts = layer.label.split(": ");
                const layerNum = parts[0] || `Layer 0${idx + 1}`;
                const layerTitle = parts[1] || layer.label;
                const numOnly = layerNum.replace(/layer/i, "").trim();

                return (
                  <div
                    key={idx}
                    className={`relative w-full flex flex-col justify-start lg:w-1/2 mb-8 last:mb-0
                      ${idx % 2 === 0 ? "lg:self-start lg:items-end lg:pr-12" : "lg:self-end lg:items-start lg:pl-12"}
                    `}
                  >
                    {/* Mobile Connector Line: From the left vertical line to the card */}
                    <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[20px] h-[1px] bg-rose-500/50 lg:hidden pointer-events-none" />

                    {/* Top Entry Line: Vertical trace coming into the first card */}
                    {idx === 0 && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-[48px] bg-gradient-to-t from-rose-500/50 to-transparent hidden lg:block" />
                    )}

                    {/* Desktop Zigzag Connector: From center-bottom of current card to center-top of next card */}
                    {idx < flow.layers.length - 1 && (
                      idx % 2 === 0 ? (
                        /* Left to Right line */
                        <svg className="absolute left-1/2 top-[100%] w-[376px] h-[32px] pointer-events-none hidden lg:block z-0" viewBox="0 0 376 32" fill="none">
                          <line x1="0" y1="0" x2="376" y2="32" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
                        </svg>
                      ) : (
                        /* Right to Left line */
                        <svg className="absolute right-1/2 top-[100%] w-[376px] h-[32px] pointer-events-none hidden lg:block z-0" viewBox="0 0 376 32" fill="none">
                          <line x1="376" y1="0" x2="0" y2="32" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
                        </svg>
                      )
                    )}

                    {/* Bottom Exit Line: Vertical trace leaving the last card */}
                    {idx === flow.layers.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-[48px] bg-gradient-to-b from-rose-500/50 to-transparent hidden lg:block" />
                    )}

                    {/* Diagram-Like Card */}
                    <Reveal delay={idx * 0.05} className="w-full max-w-[280px]">
                      <div className="group w-full bg-rose-950/[0.08] border border-rose-500/15 rounded-2xl p-4 hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.2)] hover:bg-rose-950/[0.18] transition-all duration-300 relative text-left backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[15px] font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-rose-400 to-rose-600 drop-shadow-[0_2px_4px_rgba(244,63,94,0.5)]">
                            {numOnly}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-snug group-hover:text-rose-500 transition-colors uppercase tracking-wider">
                          {layerTitle}
                        </h4>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Title Block and Key Benefits Card Matrix */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left lg:sticky lg:top-28">
            <Reveal className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500">
                  SOLUTION ARCHITECTURE
                </span>
              </div>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white uppercase leading-tight mb-4">
                Built for Scale, Security &amp; <span className="text-rose-500">Performance</span>
              </h2>
              <p className="text-sm md:text-base font-normal text-zinc-400 leading-relaxed">
                Our architecture combines modern cloud platforms, AI technologies, secure policy controls, and automation frameworks to deliver enterprise-grade solutions.
              </p>
            </Reveal>

            {/* Benefits Matrix (6 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitsList.map((benefit, idx) => (
                <Reveal key={idx} delay={idx * 0.04}>
                  <div className="group bg-zinc-950/20 border border-white/5 rounded-2xl p-5 hover:border-rose-500/25 hover:bg-zinc-900/5 transition-all duration-300 h-full flex flex-col justify-start text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-md bg-rose-950/20 border border-rose-900/30 flex items-center justify-center text-rose-500 flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <h4 className="text-xs font-bold text-white group-hover:text-rose-500 transition-colors">
                        {benefit.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white leading-relaxed font-bold">
                      {benefit.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
