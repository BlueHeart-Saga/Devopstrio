"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityItem {
  name: string;
  desc: string;
  href: string;
  action: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  desc: string;
  href: string;
  items: CapabilityItem[];
}

const richServiceCategories: ServiceCategory[] = [
  {
    id: "ai-data-innovation",
    name: "AI & Data Innovation",
    desc: "Deploy autonomous multi-agent workflows, custom LLM fine-tuning, high-performance machine learning systems, and secure data governance models.",
    href: "/services/ai-data-innovation",
    items: [
      { name: "Generative AI Solutions", desc: "Enterprise LLM applications, custom fine-tuning, and semantic caching layers.", href: "/services/ai-data-innovation/generative-ai-solutions", action: "Explore solutions" },
      { name: "AI Agents & Automation", desc: "Stateful autonomous multi-agent workflows executing complex processes.", href: "/services/ai-data-innovation/ai-agents-automation", action: "Deploy agents" },
      { name: "Machine Learning Engineering", desc: "Training, validating, and deploying deep learning models at scale.", href: "/services/ai-data-innovation/machine-learning-engineering", action: "Build models" },
      { name: "Data Engineering", desc: "High-throughput data pipelines, Kafka streaming, and unified lakehouses.", href: "/services/ai-data-innovation/data-engineering", action: "Set up pipelines" },
      { name: "Business Intelligence & Analytics", desc: "Consolidated enterprise dashboards, telemetry, and reporting engines.", href: "/services/ai-data-innovation/business-intelligence-analytics", action: "View dashboards" },
      { name: "Predictive Analytics", desc: "Time-series forecasting, customer churn and predictive models.", href: "/services/ai-data-innovation/predictive-analytics", action: "Forecast trends" },
      { name: "Data Governance", desc: "Data compliance audits, cataloging, lineage tracking, and security controls.", href: "/services/ai-data-innovation/data-governance", action: "Audit data" },
      { name: "MLOps & AI Operations", desc: "Continuous training loops, model registries, and drift detection.", href: "/services/ai-data-innovation/mlops-ai-operations", action: "Scale MLOps" }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    desc: "Migrate complex monolith workloads with zero downtime, build secure multi-cloud landing zones, and optimize cloud spends dynamically.",
    href: "/services/cloud-services",
    items: [
      { name: "Cloud Strategy & Consulting", desc: "Tailored architecture blueprints, vendor evaluation, and cloud readiness.", href: "/services/cloud-services/cloud-strategy-consulting", action: "Consult now" },
      { name: "Cloud Migration", desc: "Re-hosting, re-platforming, and database replication with zero downtime.", href: "/services/cloud-services/cloud-migration", action: "Migrate today" },
      { name: "Azure Services", desc: "Landing zones, AKS clusters, and serverless applications on Microsoft Azure.", href: "/services/cloud-services/azure-services", action: "Configure Azure" },
      { name: "AWS Services", desc: "Scalable EKS grids, serverless Lambdas, and secure DynamoDB setups on AWS.", href: "/services/cloud-services/aws-services", action: "Build on AWS" },
      { name: "Google Cloud Services", desc: "GKE autopilot setups, BigQuery data platforms, and Vertex AI integrations on GCP.", href: "/services/cloud-services/google-cloud-services", action: "GCP Integration" },
      { name: "Cloud Security", desc: "Wiz security posture management, IAM policies, and key rotations.", href: "/services/cloud-services/cloud-security", action: "Secure cloud" },
      { name: "Cloud Managed Services", desc: "24/7 outsourced management, OS patching, and active cloud backups.", href: "/services/cloud-services/cloud-managed-services", action: "Get support" },
      { name: "FinOps & Cost Optimization", desc: "Spend optimization, Savings Plan allocations, and traffic auto-scaling.", href: "/services/cloud-services/finops-cost-optimization", action: "Optimize spend" }
    ]
  },
  {
    id: "devops-automation",
    name: "DevOps & Automation",
    desc: "Accelerate software delivery cycles using standard GitOps CI/CD pipelines, platform engineering, and proactive site reliability services.",
    href: "/services/devops-automation",
    items: [
      { name: "CI/CD Implementation", desc: "Automated Git-triggered builds and testing environments.", href: "/services/devops-automation/cicd-implementation", action: "Automate builds" },
      { name: "Platform Engineering", desc: "Developer self-service templates and Backstage portal configurations.", href: "/services/devops-automation/platform-engineering", action: "Configure portals" },
      { name: "Infrastructure as Code", desc: "Reusable Terraform, Ansible, and Packer infrastructure setups.", href: "/services/devops-automation/infrastructure-as-code", action: "Deploy IaC" },
      { name: "Kubernetes Services", desc: "Multi-tenant EKS, AKS, GKE clusters with Karpenter and service mesh.", href: "/services/devops-automation/kubernetes-services", action: "Manage clusters" },
      { name: "DevSecOps", desc: "Sonarqube SAST checks and Snyk vulnerability scanning inside pipelines.", href: "/services/devops-automation/devsecops", action: "Secure pipelines" },
      { name: "Site Reliability Engineering (SRE)", desc: "SLI/SLO definition, error budget tracking, and pager alerts.", href: "/services/devops-automation/site-reliability-engineering", action: "Configure SRE" },
      { name: "Release Automation", desc: "Canary deployments, blue-green releases, and rollback alerts.", href: "/services/devops-automation/release-automation", action: "Automate releases" },
      { name: "Monitoring & Observability", desc: "Distributed OpenTelemetry tracing, Jaeger dashboards, and ELK logs.", href: "/services/devops-automation/monitoring-observability", action: "Trace telemetry" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    desc: "Identify security gaps through professional penetration testing, configure zero-trust network endpoints, and deploy 24/7 SIEM monitoring.",
    href: "/services/cybersecurity",
    items: [
      { name: "Security Assessment", desc: "Threat modeling, network configuration audits, and risk assessments.", href: "/services/cybersecurity/security-assessment", action: "Assess threats" },
      { name: "Vulnerability Management", desc: "Continuous Nessus and Qualys scans, risk patching schedules.", href: "/services/cybersecurity/vulnerability-management", action: "Scan assets" },
      { name: "Penetration Testing", desc: "Ethical hacking, API authorization checks, and exploit reports.", href: "/services/cybersecurity/penetration-testing", action: "Test exploits" },
      { name: "Security Operations Center (SOC)", desc: "24/7 SIEM monitoring, threat hunts, and SOAR event actions.", href: "/services/cybersecurity/security-operations-center", action: "Enable SOC" },
      { name: "Identity & Access Management", desc: "Okta single sign-on (SSO), adaptive MFA, and PAM tools.", href: "/services/cybersecurity/identity-access-management", action: "Configure SSO" },
      { name: "Cloud Security", desc: "Prisma Cloud audits, micro-segmentation, and least-privilege rules.", href: "/services/cybersecurity/cloud-security", action: "Secure endpoints" },
      { name: "Compliance & Governance", desc: "Audit readiness for SOC2, ISO27001, HIPAA, and policy planning.", href: "/services/cybersecurity/compliance-governance", action: "Prepare audit" },
      { name: "Zero Trust Architecture", desc: "Endpoint checks, SDP setups, and SASE security perimeters.", href: "/services/cybersecurity/zero-trust-architecture", action: "Deploy Zero-Trust" }
    ]
  },
  {
    id: "software-development",
    name: "Software Development",
    desc: "Build highly responsive React/Next.js platforms, scalable multi-tenant SaaS products, and event-driven microservice networks.",
    href: "/services/software-development",
    items: [
      { name: "Enterprise Application Development", desc: "High-throughput database design and monolithic splits.", href: "/services/software-development/enterprise-app-development", action: "Design app" },
      { name: "Web Application Development", desc: "Responsive React/Next.js platforms with advanced SEO layouts.", href: "/services/software-development/web-app-development", action: "Build web app" },
      { name: "Mobile Application Development", desc: "Flutter and native iOS/Android builds with hardware integration.", href: "/services/software-development/mobile-app-development", action: "Launch app" },
      { name: "SaaS Product Development", desc: "Multi-tenant system configurations and subscription gateways.", href: "/services/software-development/saas-product-development", action: "Build SaaS" },
      { name: "API Development & Integration", desc: "gRPC microservices, REST/GraphQL gateways, and OpenAPI specs.", href: "/services/software-development/api-development-integration", action: "Integrate APIs" },
      { name: "Microservices Architecture", desc: "Event-driven Apache Kafka loops and saga pattern integration.", href: "/services/software-development/microservices-architecture", action: "Decouple services" },
      { name: "Product Engineering", desc: "Rapid MVP prototyping and customer experience design sprints.", href: "/services/software-development/product-engineering", action: "Prototype MVP" },
      { name: "Application Modernization", desc: "Monolith database decoupling and serverless architecture migrations.", href: "/services/software-development/application-modernization", action: "Modernize stack" }
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    desc: "Refactor legacy mainframes into modern cloud-native architectures and configure intelligent workflows with optical character recognition.",
    href: "/services/digital-transformation",
    items: [
      { name: "Digital Strategy", desc: "IT roadmaps, cloud readiness audits, and budget optimization planning.", href: "/services/digital-transformation/digital-strategy", action: "Plan strategy" },
      { name: "Enterprise Modernization", desc: "Refactoring legacy mainframes to cloud-native stacks.", href: "/services/digital-transformation/enterprise-modernization", action: "Refactor legacy" },
      { name: "Process Automation", desc: "OCR tools integration and cross-platform RPA pipelines.", href: "/services/digital-transformation/process-automation", action: "Automate flows" },
      { name: "Intelligent Workflows", desc: "Customer service routing systems based on sentiment scoring.", href: "/services/digital-transformation/intelligent-workflows", action: "Deploy routing" },
      { name: "Customer Experience Transformation", desc: "Omni-channel client portals and ML-driven recommendation flows.", href: "/services/digital-transformation/customer-experience-transformation", action: "Build portal" },
      { name: "Legacy System Modernization", desc: "Migrating legacy ColdFusion/COBOL/PHP workloads to Go and NodeJS.", href: "/services/digital-transformation/legacy-modernization", action: "Upgrade code" },
      { name: "Business Transformation", desc: "Scaling Scrum frameworks and corporate KPI transparency models.", href: "/services/digital-transformation/business-transformation", action: "Scale agile" },
      { name: "Change Management", desc: "Internal developer coaching and technology adoption guides.", href: "/services/digital-transformation/change-management", action: "Coaching guides" }
    ]
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    desc: "Construct enterprise Apache Iceberg lakehouses, establish ETL/ELT pipelines, and run real-time Apache Spark streaming telemetry.",
    href: "/services/data-engineering",
    items: [
      { name: "Data Platform Development", desc: "Columnar databases design and multi-tier data storage setups.", href: "/services/data-engineering/data-platform-development", action: "Build platform" },
      { name: "Data Warehousing", desc: "Snowflake, Databricks, and Google BigQuery analytical platforms.", href: "/services/data-engineering/data-warehousing", action: "Configure warehouse" },
      { name: "Data Lakes & Lakehouse", desc: "Apache Iceberg configurations and S3 parquet partitioning.", href: "/services/data-engineering/data-lakes-lakehouse", action: "Set up lakehouse" },
      { name: "ETL/ELT Pipelines", desc: "Airflow orchestrators and dbt models checking raw entries.", href: "/services/data-engineering/etl-elt-pipelines", action: "Orchestrate flow" },
      { name: "Real-Time Data Processing", desc: "Apache Spark Streaming, Flink loops, and Druid databases.", href: "/services/data-engineering/real-time-data-processing", action: "Process streams" },
      { name: "Data Quality Management", desc: "Great Expectations assertions and anomaly alerts.", href: "/services/data-engineering/data-quality-management", action: "Verify quality" },
      { name: "Master Data Management", desc: "Deduplication algorithms and master record sync tools.", href: "/services/data-engineering/master-data-management", action: "Sync records" },
      { name: "Big Data Engineering", desc: "Hadoop ecosystems, Spark cluster optimizations, and Elasticsearch grids.", href: "/services/data-engineering/big-data-engineering", action: "Scale cluster" }
    ]
  },
  {
    id: "managed-services",
    name: "Managed Services",
    desc: "Maintain multi-account cloud configurations, run OS patching, index PostgreSQL databases, and define incident response SLA escalations.",
    href: "/services/managed-services",
    items: [
      { name: "24/7 Support Services", desc: "Slack and phone developer help desks with fast response SLAs.", href: "/services/managed-services/twenty-four-seven-support", action: "Contact desk" },
      { name: "Managed Cloud Services", desc: "Multi-account admin support, security patches, OS updates.", href: "/services/managed-services/managed-cloud", action: "Get support" },
      { name: "Managed DevOps Services", desc: "CI/CD cache optimization, environment updates, and pipeline tuning.", href: "/services/managed-services/managed-devops", action: "Optimize pipeline" },
      { name: "Managed Security Services", desc: "24/7 threat monitoring, WAF policies, and incident containment.", href: "/services/managed-services/managed-security", action: "Monitor threats" },
      { name: "Application Support", desc: "SLA bug resolutions, Sentry monitoring, and performance tuning.", href: "/services/managed-services/application-support", action: "Open ticket" },
      { name: "Infrastructure Management", desc: "SAN configuration, hypervisor updates, and load balancers.", href: "/services/managed-services/infrastructure-management", action: "Configure SAN" },
      { name: "Database Administration", desc: "PostgreSQL index rebuilds, backups, and security hardening.", href: "/services/managed-services/database-administration", action: "Harden database" },
      { name: "Monitoring & Incident Management", desc: "PagerDuty escalations, custom thresholds, and root-cause post-mortems.", href: "/services/managed-services/monitoring-incident-management", action: "Configure alerts" }
    ]
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    desc: "Write Cypress and Playwright browser scripts, execute k6 load tests, audit API endpoints, and enforce quality engineering guidelines.",
    href: "/services/qa-testing",
    items: [
      { name: "Test Automation", desc: "Playwright and Cypress end-to-end client scripts.", href: "/services/qa-testing/test-automation", action: "Write scripts" },
      { name: "Performance Testing", desc: "API peak load simulations using k6 and Apache JMeter.", href: "/services/qa-testing/performance-testing", action: "Simulate load" },
      { name: "Security Testing", desc: "Dependabot audits and access control authorization checks.", href: "/services/qa-testing/security-testing", action: "Scan dependencies" },
      { name: "API Testing", desc: "JSON contract validations, Postman pipelines, and Newman scripts.", href: "/services/qa-testing/api-testing", action: "Validate contracts" },
      { name: "Mobile Application Testing", desc: "Appium browser farms testing native application packages.", href: "/services/qa-testing/mobile-app-testing", action: "Test mobile" },
      { name: "Functional Testing", desc: "Regression testing suites and User Acceptance Testing boards.", href: "/services/qa-testing/functional-testing", action: "Run regression" },
      { name: "Continuous Testing", desc: "Parallel build integrations, code coverage checkers.", href: "/services/qa-testing/continuous-testing", action: "Check coverage" },
      { name: "Quality Engineering", desc: "Shift-left methodologies, defect escape reports, and standards.", href: "/services/qa-testing/quality-engineering", action: "Explore standards" }
    ]
  },
  {
    id: "it-consulting",
    name: "IT Consulting",
    desc: "Draft IT strategy frameworks, execute technology assessments, map cloud migrations architectures, and orchestrate AI adoption plans.",
    href: "/services/it-consulting",
    items: [
      { name: "Technology Consulting", desc: "Cost-benefit analyses, legacy upgrade guides, and stacks selection.", href: "/services/it-consulting/technology-consulting", action: "Get advice" },
      { name: "Enterprise Architecture", desc: "Distributed system component layouts and active sync failovers.", href: "/services/it-consulting/enterprise-architecture", action: "Review layouts" },
      { name: "Cloud Consulting", desc: "Public cloud budget forecasts, land zone configs, and cost estimation.", href: "/services/it-consulting/cloud-consulting", action: "Consult cloud" },
      { name: "AI Consulting", desc: "Generative AI workshops, feasibility checkouts, and alignment policies.", href: "/services/it-consulting/ai-consulting", action: "Attend workshop" },
      { name: "Cybersecurity Consulting", desc: "Incident response plan drafts and risk register configuration.", href: "/services/it-consulting/cybersecurity-consulting", action: "Plan response" },
      { name: "Digital Transformation Consulting", desc: "Digital transformation roadmaps, design thinking sprints.", href: "/services/it-consulting/digital-transformation-consulting", action: "Design thinking" },
      { name: "IT Strategy & Roadmap", desc: "IT capability adoption steps, budget planning, skill gap audits.", href: "/services/it-consulting/it-strategy-roadmap", action: "Request roadmap" },
      { name: "Technology Assessment", desc: "Scalability audits, query bottlenecks tracking, and code checks.", href: "/services/it-consulting/technology-assessment", action: "Audit code" }
    ]
  }
];

const bgWaves: Record<string, string> = {
  "ai-data-innovation": "/assets/services/bg-ai.png",
  "cloud-services": "/assets/services/bg-cloud.png",
  "devops-automation": "/assets/services/bg-devops.png",
  "cybersecurity": "/assets/services/bg-cybersecurity.png",
  "software-development": "/assets/services/bg-software.png",
  "digital-transformation": "/assets/services/bg-transformation.png",
  "data-engineering": "/assets/services/bg-data.png",
  "managed-services": "/assets/services/bg-managed.png",
  "qa-testing": "/assets/services/bg-testing.png",
  "it-consulting": "/assets/services/bg-consulting.png",
};

export function CategoriesGrid() {
  const [activeTab, setActiveTab] = useState("ai-data-innovation");

  // Auto cycle tabs every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = richServiceCategories.findIndex(
        (cat) => cat.id === activeTab
      );
      const nextIndex = (currentIndex + 1) % richServiceCategories.length;
      setActiveTab(richServiceCategories[nextIndex].id);
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Smooth scroll active tab pill into view in the horizontal container without triggering page-level scrolling
  useEffect(() => {
    const container = document.getElementById("tab-pills-container");
    const activeEl = document.getElementById(`tab-pill-${activeTab}`);
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeLeft = activeRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (activeRect.width / 2);

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  const selectedCategory =
    richServiceCategories.find((cat) => cat.id === activeTab) ||
    richServiceCategories[0];

  // Find index of active tab to show in step tag (e.g. "01")
  const activeIndex = richServiceCategories.findIndex(
    (cat) => cat.id === activeTab
  );
  const stepNumber = (activeIndex + 1).toString().padStart(2, "0");

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CORE PRACTICE AREAS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Powering engineering excellence for <span className="text-rose-500">modern enterprises</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              Explore our core specialized practices designed to modernize legacy architecture, accelerate delivery pipelines, and drive cognitive intelligence.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div id="tab-pills-container" className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {richServiceCategories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-pill-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${activeTab === cat.id
                ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

          {/* Left Tall Card (Col 1, Spans entire height / 2 rows on desktop) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Dynamic Abstract Smoky Wave Backgrounds with Crossfade */}
              {richServiceCategories.map((cat) => (
                <img
                  key={cat.id}
                  src={bgWaves[cat.id]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${activeTab === cat.id ? "opacity-35" : "opacity-0"
                    }`}
                />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                {/* <span className="text-[10px] font-mono text-rose-500 tracking-widest uppercase block mb-4">
                  {stepNumber} / CORE PRACTICE
                </span> */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                  Grow your business with trustworthy {selectedCategory.name}
                </h3>
                <p className="text-zinc-100 text-xs font-semibold leading-relaxed">
                  {selectedCategory.desc}
                </p>
              </div>

              {/* Card bottom button */}
              <div className="relative z-10 mt-8">
                <Link
                  href={selectedCategory.href}
                  className="gap-2 w-fit inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Explore Practice{" "}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Col 2-4, 3 Columns x 2 Rows of smaller cards) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategory.items.slice(0, 6).map((item, idx) => (
              <Reveal key={item.name} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">

                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Text details */}
                  <div>
                    <h4 className={`transition-colors mb-2 ${item.name === "24/7 Support Services"
                        ? "text-lg font-bold text-rose-500 group-hover:text-rose-400"
                        : "text-base font-semibold text-rose-500 group-hover:text-rose-400"
                      }`}>
                      {item.name}
                    </h4>
                    <p className="text-[12px] text-zinc-200 font-semibold leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Link action details */}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2.5 group/link mt-auto w-fit"
                  >
                    <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                      <ChevronRight
                        size={12}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                    <span className="text-[12px] font-semibold text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                      {item.action}
                    </span>
                  </Link>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
