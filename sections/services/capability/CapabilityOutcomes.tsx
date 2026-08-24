"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityOutcomesProps {
  serviceSlug: string;
  capabilityTitle: string;
  overrideTitle?: string;
  overrideDesc?: string;
}

interface SolutionItem {
  title: string;
  desc: string;
  previewSteps: string[];
}

const solutionsRegistry: Record<string, SolutionItem[]> = {
  "ai-data-innovation": [
    {
      title: "Autonomous AI Agents",
      desc: "Multi-agent orchestration frameworks designed for autonomous reasoning and complex enterprise workflow execution.",
      previewSteps: ["LLM Core", "LangGraph", "Tool API"]
    },
    {
      title: "Enterprise Copilots",
      desc: "Custom virtual copilots trained on company guidelines and playbooks to assist employee workflows.",
      previewSteps: ["RLHF Finetuning", "Prompt Engine", "UI Panel"]
    },
    {
      title: "Semantic Search & RAG",
      desc: "High-accuracy search indices leveraging vector databases to extract precise company facts dynamically.",
      previewSteps: ["Embeddings", "pgvector", "LLM Context"]
    },
    {
      title: "Document AI Pipelines",
      desc: "Intelligent document processing workflows parsing semi-structured PDF files and storing structured metrics.",
      previewSteps: ["LayoutLM", "Schema Parser", "DB Sync"]
    },
    {
      title: "Neural Search Engines",
      desc: "Hybrid semantic-keyword indexing layers that surface deep content patterns across large repositories.",
      previewSteps: ["BM25", "ColBERT", "Ranker Engine"]
    },
    {
      title: "Workflow Connectors",
      desc: "Low-latency API integration networks connecting LLM decisions to legacy operational software modules.",
      previewSteps: ["Kafka Event", "Webhook Adapter", "Audit Log"]
    }
  ],
  "cloud-services": [
    {
      title: "Multi-Region Failover",
      desc: "High-availability geo-redundant clusters delivering active-active setups with low RPO/RTO metrics.",
      previewSteps: ["DNS Route53", "DB Global Sync", "CDN Edge"]
    },
    {
      title: "FinOps Cost Optimization",
      desc: "Automated billing audit engines that terminate idle instances and optimize reserved resources.",
      previewSteps: ["Billing Export", "KEDA Scaling", "Auto-Terminator"]
    },
    {
      title: "Kubernetes Orchestration",
      desc: "Production-grade managed EKS/GKE cluster control planes deployed with secure GitOps controllers.",
      previewSteps: ["Terraform", "ArgoCD", "EKS Cluster"]
    },
    {
      title: "Serverless Compute Platforms",
      desc: "Dynamically scaling edge nodes running serverless scripts with optimized memory allocation profiles.",
      previewSteps: ["Edge Workers", "Key-Value Cache", "API Gateway"]
    },
    {
      title: "Hybrid Cloud Connectivity",
      desc: "Secure site-to-site VPN networks connecting localized corporate databases with public cloud clouds.",
      previewSteps: ["AWS Transit Gateway", "IPsec Tunnel", "Core Routers"]
    },
    {
      title: "Infrastructure Guardrails",
      desc: "Policy-as-code scripts checking terraform templates for security defects before release.",
      previewSteps: ["OPA Gatekeeper", "CI Lint Scan", "State Auditor"]
    }
  ],
  "devops-automation": [
    {
      title: "GitOps Continuous Delivery",
      desc: "Automated release pipelines utilizing ArgoCD to keep Kubernetes state in sync with git directories.",
      previewSteps: ["Git Repository", "Helm Charts", "Argo Controller"]
    },
    {
      title: "Self-Healing Clusters",
      desc: "Automated node monitoring and replica balancing routines to repair failures before alerts sound.",
      previewSteps: ["Metrics Server", "Autoscaler", "Pod Rebalancer"]
    },
    {
      title: "Dynamic Staging Environments",
      desc: "Temporary staging instances generated automatically for each pull request to isolate validations.",
      previewSteps: ["PR Trigger", "Docker Build", "Ephemeral Ingress"]
    },
    {
      title: "Telemetry Pipelines",
      desc: "Log collection routing using OpenTelemetry to feed metric databases like Datadog or Grafana.",
      previewSteps: ["OTel Collector", "Prometheus", "Grafana Web"]
    },
    {
      title: "Isolated Artifact Storage",
      desc: "Secure local packages caching system isolating builds from public server registry outages.",
      previewSteps: ["Artifactory", "Vulnerability Scan", "Cache Layer"]
    },
    {
      title: "Continuous Security Scans",
      desc: "Automated code inspection scanning code and package modules for security defects in active builds.",
      previewSteps: ["Trivy Scan", "SonarQube", "Release Approval"]
    }
  ],
  "cybersecurity": [
    {
      title: "Zero-Trust Authentications",
      desc: "Unified single sign-on combined with context-aware device health checks and dynamic authentication.",
      previewSteps: ["OIDC Identity", "MFA Challenge", "Context Check"]
    },
    {
      title: "SIEM Threat Detectors",
      desc: "Real-time security log analytics detecting breach attempts using automated alert configurations.",
      previewSteps: ["Wazuh Agent", "Elastic Index", "Alert Actions"]
    },
    {
      title: "Encrypted Data Vaults",
      desc: "Automated field-level encryption for database values using securely rotated validation keys.",
      previewSteps: ["Vault Server", "Transit Engine", "Decrypted API"]
    },
    {
      title: "Container Security Auditing",
      desc: "Build-stage validation ensuring container templates do not deploy with configuration defects.",
      previewSteps: ["Docker Bench", "Falco Telemetry", "Policy Restrict"]
    },
    {
      title: "Compliance Audit Engines",
      desc: "Daily posture scanning reporting adherence to global regulatory policies like ISO27001 or GDPR.",
      previewSteps: ["Config Rule", "Compliance DB", "Report Generator"]
    },
    {
      title: "IAM Policy Managers",
      desc: "Automatic access monitoring restricting developers to minimum system permissions on live databases.",
      previewSteps: ["PIM Access", "Role Validator", "Session Revoke"]
    }
  ],
  "software-development": [
    {
      title: "Microservices Core APIs",
      desc: "Decoupled server logic modules using gRPC channels to communicate with high performance.",
      previewSteps: ["Protobuf Schema", "Go Backend", "gRPC Client"]
    },
    {
      title: "Universal Frontend Apps",
      desc: "Optimized user application frameworks configured to output static files for edge networks.",
      previewSteps: ["Next.js SSR", "Tailwind CSS", "Vercel Edge"]
    },
    {
      title: "High-Throughput Message Queues",
      desc: "Enterprise data sync systems utilizing Apache Kafka to broadcast server events instantly.",
      previewSteps: ["Kafka Broker", "Producer API", "Consumer Sync"]
    },
    {
      title: "Distributed Edge Caching",
      desc: "Dynamic database query caching layers keeping latency below 2 milliseconds globally.",
      previewSteps: ["Redis Cluster", "Cache Eviction", "App Layer"]
    },
    {
      title: "Shared Code Repositories",
      desc: "Standardized private software libraries ensuring consistent layouts and modules across teams.",
      previewSteps: ["NPM Registry", "Build Pipeline", "Doc Portal"]
    },
    {
      title: "Edge Gateway Managers",
      desc: "Central entry gateways routing request packages to downstream APIs with integrated safety limits.",
      previewSteps: ["Kong Gateway", "Rate Limiter", "Metrics Engine"]
    }
  ],
  "digital-transformation": [
    {
      title: "Legacy System Connectors",
      desc: "Custom connection modules translating legacy database paths into modern JSON-ready API routes.",
      previewSteps: ["Legacy Server", "Adapter Module", "REST API Engine"]
    },
    {
      title: "Digital Process Portals",
      desc: "Modern digital entry fields and intake dashboards replacing manual paper processes.",
      previewSteps: ["Next.js Ingest", "Dynamic Forms", "Upload Service"]
    },
    {
      title: "Workflow Notifications Flow",
      desc: "Automated work assignment notifying team members of pending tasks inside internal chats.",
      previewSteps: ["State Monitor", "Teams Webhook", "Action Event"]
    },
    {
      title: "Intelligent PDF Scanners",
      desc: "Automated text extraction engines reading images and organizing data points into databases.",
      previewSteps: ["OCR Engine", "Data Normalizer", "Database Sync"]
    },
    {
      title: "Unified Customer Dashboards",
      desc: "Consolidated user data pages gathering fragmented records from multiple database systems.",
      previewSteps: ["API Aggregator", "UI Graph Visual", "Secure Sync"]
    },
    {
      title: "Unified Customer Outreach",
      desc: "Cross-channel alert engines delivering SMS, Email, and App alerts from a single dashboard.",
      previewSteps: ["Twilio Connector", "SES Engine", "Push Dispatcher"]
    }
  ],
  "data-engineering": [
    {
      title: "Streaming Analytics ETL",
      desc: "Real-time data ingestion pipelines transforming log parameters at scale without disk latency.",
      previewSteps: ["Kafka Source", "Flink Pipeline", "S3 Data Lake"]
    },
    {
      title: "Data Lakehouse Platforms",
      desc: "Modern storage layout allowing SQL engines to query unstructured object storage folders directly.",
      previewSteps: ["Delta Lake", "Trino Engine", "BI Connector"]
    },
    {
      title: "Data Catalog Indexers",
      desc: "Automatic schema discovery engines indexing pipeline operations and data lineage logs.",
      previewSteps: ["Glue Crawler", "Catalog Metadata", "Lineage Graph"]
    },
    {
      title: "Optimized Query Warehouses",
      desc: "Structured data storage clusters partitioned to run massive analyst reports within seconds.",
      previewSteps: ["Snowflake DB", "Clustering Key", "Query Cache"]
    },
    {
      title: "Ingestion Validation Rules",
      desc: "Automated data verification layers rejecting corrupted database inputs at the entry gate.",
      previewSteps: ["Great Expectations", "Validation Fail", "Quarantine S3"]
    },
    {
      title: "Data Visualization Ports",
      desc: "Clean database connection routes feeding transformed business parameters to dashboard viewers.",
      previewSteps: ["Athena Queries", "Superset Engine", "Dashboard Panel"]
    }
  ],
  "managed-services": [
    {
      title: "Incident Escalation Engines",
      desc: "Automated ticket assignment routing server errors to available on-call engineers.",
      previewSteps: ["Jira Servicedesk", "PagerDuty API", "Duty Rotation"]
    },
    {
      title: "Active Telemetry Observers",
      desc: "Automated network ping routines detecting server issues within seconds of occurance.",
      previewSteps: ["Uptime Checker", "Ping Endpoint", "Status Page"]
    },
    {
      title: "Automated Backups Verification",
      desc: "Continuous backup cycles verifying database restoration states in temporary environments.",
      previewSteps: ["Daily Snapshots", "Test Restore", "Success Signal"]
    },
    {
      title: "Cold Log Vault Archives",
      desc: "Secure compliance storage keeping system activity history safe for audits at low costs.",
      previewSteps: ["Glacier Storage", "Retention Rule", "Archive Logs"]
    },
    {
      title: "Platform Status Interfaces",
      desc: "Public-facing system status dashboards informing users of active maintenance windows.",
      previewSteps: ["Statuspage.io", "Incidents Feed", "Auto Updates"]
    },
    {
      title: "SLA Guardrails Monitors",
      desc: "Dynamic resource monitors raising warning flags before hosting quotas breach agreements.",
      previewSteps: ["Grafana Alert", "Slack Warning", "Scale Command"]
    }
  ],
  "qa-testing": [
    {
      title: "Parallel Test Run Grids",
      desc: "Web app testing suites running hundreds of browser checks concurrently on remote servers.",
      previewSteps: ["Playwright Runner", "Docker Nodes", "Allure Report"]
    },
    {
      title: "Automated Layout Checkers",
      desc: "Visual validation engines checking pixel layouts for discrepancies after updates.",
      previewSteps: ["Percy Visual", "Screenshot Capture", "Diff Report"]
    },
    {
      title: "Endpoint Validator Suites",
      desc: "Dynamic API test payloads checking backend response codes and data structures.",
      previewSteps: ["Supertest", "JSON Schema", "Mock Server"]
    },
    {
      title: "Load Emulation Engines",
      desc: "Concurrently simulated user connections validating API thresholds under high stress.",
      previewSteps: ["k6 Script", "Virtual Users", "Latency Graph"]
    },
    {
      title: "Responsive Matrix Labs",
      desc: "Automated browser scaling testing layouts on standard mobile, tablet, and desktop views.",
      previewSteps: ["Device Emulator", "Viewport Grid", "Layout Audit"]
    },
    {
      title: "CI Deploy Blocking Gates",
      desc: "Quality checklist validation steps blocking codebase deployment if unit tests fail.",
      previewSteps: ["Git Hook Check", "Unit Test Run", "Pipeline Reject"]
    }
  ],
  "it-consulting": [
    {
      title: "Technical Auditing Panels",
      desc: "Inventory tools evaluating enterprise software assets to remove redundant vendor fees.",
      previewSteps: ["App Discovery", "License Audit", "Cost Matrix"]
    },
    {
      title: "Cloud Transition Blueprints",
      desc: "Phased database and server migration maps built to de-risk cloud moves.",
      previewSteps: ["Migration Matrix", "Risk Assessment", "Target Design"]
    },
    {
      title: "Provider Scorecard Utilities",
      desc: "Technical evaluation scorecards helping managers compare platform software choices.",
      previewSteps: ["Req Checklist", "Weighting Engine", "Vendor Score"]
    },
    {
      title: "System Architecture Mapping",
      desc: "Interactive diagrams mapping how business software models connect across departments.",
      previewSteps: ["Service Mapping", "Data Flow Audit", "ArchiMate Chart"]
    },
    {
      title: "DR Response Blueprints",
      desc: "Step-by-step fallback checklists ensuring data safety during global hosting outages.",
      previewSteps: ["RTO Assessment", "Backup Strategy", "Crisis Drill"]
    },
    {
      title: "Platform Capacity Forecasts",
      desc: "Software usage growth projections detailing future computing hardware costs.",
      previewSteps: ["Telemetry Export", "Linear Model", "Cap Plan Sheet"]
    }
  ]
};

export function CapabilityOutcomes({ 
  serviceSlug, 
  capabilityTitle,
  overrideTitle,
  overrideDesc
}: CapabilityOutcomesProps) {
  const solutions = solutionsRegistry[serviceSlug] || solutionsRegistry["ai-data-innovation"];

  return (
    <section id="solutions-outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
            {overrideTitle || <>Enterprise-Ready <span className="text-rose-500 font-semibold">{capabilityTitle}</span></>}
          </h2>
        </Reveal>

        {/* Recommended 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-zinc-950/40 border border-white/10 hover:border-rose-500/40 rounded-2xl p-6 hover:scale-[1.02] hover:bg-zinc-900/30 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all duration-300 flex flex-col justify-between backdrop-blur-sm">
                <div>
                  {/* <span className="block text-[9px] font-mono tracking-widest text-rose-500 uppercase font-bold mb-3">
                    SOLUTION 0{idx + 1}
                  </span> */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>

                {/* Small Architecture Pipeline Preview */}
                <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-4 group-hover:border-rose-500/20 transition-all duration-300">
                  <span className="text-[8px] font-mono tracking-widest text-zinc-500 uppercase block font-semibold group-hover:text-rose-500/80 transition-colors">
                    Architecture Pipeline
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.previewSteps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5">
                          {step}
                        </span>
                        {sIdx < item.previewSteps.length - 1 && (
                          <span className="text-zinc-600 text-[10px] select-none font-sans font-normal opacity-50">
                            &rarr;
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
