"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Shield, Brain, Cloud, Terminal, Cpu, Database, Settings, HelpCircle, Layers, CheckCircle2 } from "lucide-react";

const detailedServiceCategories = [
  {
    id: "ai-data-innovation",
    name: "AI & Data Innovation",
    icon: Brain,
    desc: "Autonomous multi-agent workflows, custom LLM fine-tuning, machine learning engineering, and data governance.",
    items: [
      { name: "Generative AI Solutions", desc: "Enterprise LLM applications, custom fine-tuning, and semantic caching layers." },
      { name: "AI Agents & Automation", desc: "Stateful autonomous multi-agent workflows executing complex processes." },
      { name: "Machine Learning Engineering", desc: "Training, validating, and deploying deep learning models at scale." },
      { name: "Data Engineering", desc: "High-throughput data pipelines, Kafka streaming, and unified lakehouses." },
      { name: "Business Intelligence & Analytics", desc: "Consolidated enterprise dashboards, telemetry, and reporting engines." },
      { name: "Predictive Analytics", desc: "Time-series forecasting, customer churn and predictive models." },
      { name: "Data Governance", desc: "Data compliance audits, cataloging, lineage tracking, and security controls." },
      { name: "MLOps & AI Operations", desc: "Continuous training loops, model registries, and drift detection." }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    icon: Cloud,
    desc: "Zero-downtime multi-cloud migrations, landing zone construction, AWS/Azure/GCP scaling, and FinOps cost controls.",
    items: [
      { name: "Cloud Strategy & Consulting", desc: "Tailored architecture blueprints, vendor evaluation, and cloud readiness." },
      { name: "Cloud Migration", desc: "Re-hosting, re-platforming, and database replication with zero downtime." },
      { name: "Azure Services", desc: "Landing zones, AKS clusters, and serverless applications on Microsoft Azure." },
      { name: "AWS Services", desc: "Scalable EKS grids, serverless Lambdas, and secure DynamoDB setups on AWS." },
      { name: "Google Cloud Services", desc: "GKE autopilot setups, BigQuery data platforms, and Vertex AI integrations on GCP." },
      { name: "Cloud Security", desc: "Wiz security posture management, IAM policies, and key rotations." },
      { name: "Cloud Managed Services", desc: "24/7 outsourced management, OS patching, and active cloud backups." },
      { name: "FinOps & Cost Optimization", desc: "Spend optimization, Savings Plan allocations, and traffic auto-scaling." }
    ]
  },
  {
    id: "devops-automation",
    name: "DevOps & Automation",
    icon: Terminal,
    desc: "Standardizing GitOps CI/CD pipelines, Platform Engineering, Infrastructure as Code, and 24/7 site reliability engineering.",
    items: [
      { name: "CI/CD Implementation", desc: "Automated Git-triggered builds and testing environments." },
      { name: "Platform Engineering", desc: "Developer self-service templates and Backstage portal configurations." },
      { name: "Infrastructure as Code", desc: "Reusable Terraform, Ansible, and Packer infrastructure setups." },
      { name: "Kubernetes Services", desc: "Multi-tenant EKS, AKS, GKE clusters with Karpenter and service mesh." },
      { name: "DevSecOps", desc: "Sonarqube SAST checks and Snyk vulnerability scanning inside pipelines." },
      { name: "Site Reliability Engineering (SRE)", desc: "SLI/SLO definition, error budget tracking, and pager alerts." },
      { name: "Release Automation", desc: "Canary deployments, blue-green releases, and rollback alerts." },
      { name: "Monitoring & Observability", desc: "Distributed OpenTelemetry tracing, Jaeger dashboards, and ELK logs." }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    desc: "Ethical hacking penetration tests, automated compliance posture audits, zero-trust setups, and 24/7 SIEM monitoring.",
    items: [
      { name: "Security Assessment", desc: "Threat modeling, network configuration audits, and risk assessments." },
      { name: "Vulnerability Management", desc: "Continuous Nessus and Qualys scans, risk patching schedules." },
      { name: "Penetration Testing", desc: "Ethical hacking, API authorization checks, and exploit reports." },
      { name: "Security Operations Center (SOC)", desc: "24/7 SIEM monitoring, threat hunts, and SOAR event actions." },
      { name: "Identity & Access Management", desc: "Okta single sign-on (SSO), adaptive MFA, and PAM tools." },
      { name: "Cloud Security", desc: "Prisma Cloud audits, micro-segmentation, and least-privilege rules." },
      { name: "Compliance & Governance", desc: "Audit readiness for SOC2, ISO27001, HIPAA, and policy planning." },
      { name: "Zero Trust Architecture", desc: "Endpoint checks, SDP setups, and SASE security perimeters." }
    ]
  },
  {
    id: "software-development",
    name: "Software Development",
    icon: Cpu,
    desc: "Custom high-load web systems, responsive mobile applications, scalable SaaS portals, and decoupled microservices architectures.",
    items: [
      { name: "Enterprise Application Development", desc: "High-throughput database design and monolithic splits." },
      { name: "Web Application Development", desc: "Responsive React/Next.js platforms with advanced SEO layouts." },
      { name: "Mobile Application Development", desc: "Flutter and native iOS/Android builds with hardware integration." },
      { name: "SaaS Product Development", desc: "Multi-tenant system configurations and subscription gateways." },
      { name: "API Development & Integration", desc: "gRPC microservices, REST/GraphQL gateways, and OpenAPI specs." },
      { name: "Microservices Architecture", desc: "Event-driven Apache Kafka loops and saga pattern integration." },
      { name: "Product Engineering", desc: "Rapid MVP prototyping and customer experience design sprints." },
      { name: "Application Modernization", desc: "Monolith database decoupling and serverless architecture migrations." }
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    icon: Layers,
    desc: "Modernizing legacy monolith setups, workflow process automation, intelligent decisions, and change management strategies.",
    items: [
      { name: "Digital Strategy", desc: "IT roadmaps, cloud readiness audits, and budget optimization planning." },
      { name: "Enterprise Modernization", desc: "Refactoring legacy mainframes to cloud-native stacks." },
      { name: "Process Automation", desc: "OCR tools integration and cross-platform RPA pipelines." },
      { name: "Intelligent Workflows", desc: "Customer service routing systems based on sentiment scoring." },
      { name: "Customer Experience Transformation", desc: "Omni-channel client portals and ML-driven recommendation flows." },
      { name: "Legacy System Modernization", desc: "Migrating legacy ColdFusion/COBOL/PHP workloads to Go and NodeJS." },
      { name: "Business Transformation", desc: "Scaling Scrum frameworks and corporate KPI transparency models." },
      { name: "Change Management", desc: "Internal developer coaching and technology adoption guides." }
    ]
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    icon: Database,
    desc: "High-throughput data platforms, Snowflake/BigQuery data warehouses, Apache Iceberg lakehouses, and ETL pipelines.",
    items: [
      { name: "Data Platform Development", desc: "Columnar databases design and multi-tier data storage setups." },
      { name: "Data Warehousing", desc: "Snowflake, Databricks, and Google BigQuery analytical platforms." },
      { name: "Data Lakes & Lakehouse", desc: "Apache Iceberg configurations and S3 parquet partitioning." },
      { name: "ETL/ELT Pipelines", desc: "Airflow orchestrators and dbt models checking raw entries." },
      { name: "Real-Time Data Processing", desc: "Apache Spark Streaming, Flink loops, and Druid databases." },
      { name: "Data Quality Management", desc: "Great Expectations assertions and anomaly alerts." },
      { name: "Master Data Management", desc: "Deduplication algorithms and master record sync tools." },
      { name: "Big Data Engineering", desc: "Hadoop ecosystems, Spark cluster optimizations, and Elasticsearch grids." }
    ]
  },
  {
    id: "managed-services",
    name: "Managed Services",
    icon: Settings,
    desc: "Outsourced IT operations, managed DevOps, application L3 support, database administration, and SLA-backed on-call response.",
    items: [
      { name: "Managed Cloud Services", desc: "Multi-account admin support, security patches, OS updates." },
      { name: "Managed DevOps Services", desc: "CI/CD cache optimization, environment updates, and pipeline tuning." },
      { name: "Managed Security Services", desc: "24/7 threat monitoring, WAF policies, and incident containment." },
      { name: "Application Support", desc: "SLA bug resolutions, Sentry monitoring, and performance tuning." },
      { name: "Infrastructure Management", desc: "SAN configuration, hypervisor updates, and load balancers." },
      { name: "Database Administration", desc: "PostgreSQL index rebuilds, backups, and security hardening." },
      { name: "Monitoring & Incident Management", desc: "PagerDuty escalations, custom thresholds, and root-cause post-mortems." },
      { name: "24/7 Support Services", desc: "Slack and phone developer help desks with fast response SLAs." }
    ]
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    icon: HelpCircle,
    desc: "Automated end-to-end testing, API validation, performance load simulation, and shift-left quality engineering.",
    items: [
      { name: "Test Automation", desc: "Playwright and Cypress end-to-end client scripts." },
      { name: "Performance Testing", desc: "API peak load simulations using k6 and Apache JMeter." },
      { name: "Security Testing", desc: "Dependabot audits and access control authorization checks." },
      { name: "API Testing", desc: "JSON contract validations, Postman pipelines, and Newman scripts." },
      { name: "Mobile Application Testing", desc: "Appium browser farms testing native application packages." },
      { name: "Functional Testing", desc: "Regression testing suites and User Acceptance Testing boards." },
      { name: "Continuous Testing", desc: "Parallel build integrations, code coverage checkers." },
      { name: "Quality Engineering", desc: "Shift-left methodologies, defect escape reports, and standards." }
    ]
  },
  {
    id: "it-consulting",
    name: "IT Consulting",
    icon: Layers,
    desc: "Enterprise architecture design, cloud adoption models, cybersecurity strategies, and comprehensive technology assessments.",
    items: [
      { name: "Technology Consulting", desc: "Cost-benefit analyses, legacy upgrade guides, and stacks selection." },
      { name: "Enterprise Architecture", desc: "Distributed system component layouts and active sync failovers." },
      { name: "Cloud Consulting", desc: "Public cloud budget forecasts, land zone configs, and cost estimation." },
      { name: "AI Consulting", desc: "Generative AI workshops, feasibility checkouts, and alignment policies." },
      { name: "Cybersecurity Consulting", desc: "Incident response plan drafts and risk register configuration." },
      { name: "Digital Transformation Consulting", desc: "Digital transformation roadmaps, design thinking sprints." },
      { name: "IT Strategy & Roadmap", desc: "IT capability adoption steps, budget planning, skill gap audits." },
      { name: "Technology Assessment", desc: "Scalability audits, query bottlenecks tracking, and code checks." }
    ]
  }
];

export function DetailedServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentCategory = detailedServiceCategories[activeIdx];
  const CategoryIcon = currentCategory.icon;

  return (
    <section className="w-full py-24 bg-black text-white border-b border-zinc-900 relative" id="detailed-services">
      {/* Mesh grid background */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              DETAILED SERVICES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Strategic delivery <span className="text-rose-500">capability map</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Browse through our exhaustive registry of technology and operations practices aligned with global enterprise standards.
            </p>
          </div>
        </Reveal>

        {/* Layout Grid: Left Sidebar Tabs, Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

          {/* Left Panel: Tabs List */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 border-b lg:border-b-0 border-zinc-900 custom-scrollbar scrollbar-thin">
            {detailedServiceCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeIdx === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 text-left flex-shrink-0 lg:flex-shrink ${isActive
                      ? "bg-zinc-950 border border-zinc-800 text-rose-500 shadow-md translate-x-1"
                      : "text-zinc-450 border border-transparent hover:text-zinc-200 hover:bg-zinc-905/10"
                    }`}
                >
                  <Icon size={15} className={isActive ? "text-rose-500" : "text-zinc-500"} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Content Grid */}
          <div className="flex flex-col gap-8">

            {/* Active Category Description Banner */}
            <Reveal key={`banner-${currentCategory.id}`}>
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-rose-600/10 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <CategoryIcon size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    Practice Profile
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{currentCategory.name}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {currentCategory.desc}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.items.map((item, i) => (
                <Reveal key={`${currentCategory.id}-${item.name}`} delay={i * 0.05}>
                  <div className="group bg-[#080808]/80 hover:bg-zinc-950/80 border border-zinc-900/60 hover:border-zinc-800/80 rounded-2xl p-5 transition-all duration-300 h-full flex flex-col justify-between cursor-default">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 size={13} className="text-rose-600 flex-shrink-0" />
                        <h4 className="text-xs md:text-[13px] font-bold text-zinc-100 group-hover:text-white transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light pl-5">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-full h-[1px] bg-zinc-950 mt-4 group-hover:bg-rose-950/20 transition-colors" />
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
