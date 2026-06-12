import { CapabilityDetail, ServiceCategory } from "./types";

interface RegistryItem {
  title: string;
  desc: string;
}

export const capabilityRegistry: Record<string, Record<string, RegistryItem>> = {
  "ai-data-innovation": {
    "generative-ai-solutions": { title: "Generative AI Solutions", desc: "Enterprise LLM applications, custom fine-tuning, and semantic caching layers." },
    "ai-agents-automation": { title: "AI Agents & Automation", desc: "Stateful autonomous multi-agent workflows executing complex processes." },
    "machine-learning-engineering": { title: "Machine Learning Engineering", desc: "Training, validating, and deploying deep learning models at scale." },
    "data-engineering": { title: "Data Engineering", desc: "High-throughput data pipelines, Kafka streaming, and unified lakehouses." },
    "business-intelligence-analytics": { title: "Business Intelligence & Analytics", desc: "Consolidated enterprise dashboards, telemetry, and reporting engines." },
    "predictive-analytics": { title: "Predictive Analytics", desc: "Time-series forecasting, customer churn and predictive models." },
    "data-governance": { title: "Data Governance", desc: "Data compliance audits, cataloging, lineage tracking, and security controls." },
    "mlops-ai-operations": { title: "MLOps & AI Operations", desc: "Continuous training loops, model registries, and drift detection." }
  },
  "cloud-services": {
    "cloud-strategy-consulting": { title: "Cloud Strategy & Consulting", desc: "Designing tailored cloud architecture blueprints, vendor evaluation, and cloud readiness roadmaps." },
    "cloud-migration": { title: "Cloud Migration", desc: "Re-hosting, re-platforming, and refactoring workloads to public and hybrid clouds with zero downtime." },
    "azure-services": { title: "Azure Services", desc: "Landing zones, AKS clusters, and serverless applications on Microsoft Azure." },
    "aws-services": { title: "AWS Services", desc: "Scalable EKS grids, serverless Lambdas, and secure DynamoDB setups on AWS." },
    "google-cloud-services": { title: "Google Cloud Services", desc: "GKE autopilot setups, BigQuery data platforms, and Vertex AI integrations on GCP." },
    "cloud-security": { title: "Cloud Security", desc: "Wiz security posture management, IAM policies, and key rotations." },
    "cloud-managed-services": { title: "Cloud Managed Services", desc: "24/7 outsourced management, OS patching, and active cloud backups." },
    "finops-cost-optimization": { title: "FinOps & Cost Optimization", desc: "Spend optimization, Savings Plan allocations, and traffic auto-scaling." }
  },
  "devops-automation": {
    "cicd-implementation": { title: "CI/CD Implementation", desc: "Automated Git-triggered builds and testing environments." },
    "platform-engineering": { title: "Platform Engineering", desc: "Developer self-service templates and Backstage portal configurations." },
    "infrastructure-as-code": { title: "Infrastructure as Code", desc: "Reusable Terraform, Ansible, and Packer infrastructure setups." },
    "kubernetes-services": { title: "Kubernetes Services", desc: "Multi-tenant EKS, AKS, GKE clusters with Karpenter and service mesh." },
    "devsecops": { title: "DevSecOps", desc: "Sonarqube SAST checks and Snyk vulnerability scanning inside pipelines." },
    "site-reliability-engineering": { title: "Site Reliability Engineering (SRE)", desc: "SLI/SLO definition, error budget tracking, and pager alerts." },
    "release-automation": { title: "Release Automation", desc: "Canary deployments, blue-green releases, and rollback alerts." },
    "monitoring-observability": { title: "Monitoring & Observability", desc: "Distributed OpenTelemetry tracing, Jaeger dashboards, and ELK logs." }
  },
  "cybersecurity": {
    "security-assessment": { title: "Security Assessment", desc: "Threat modeling, network configuration audits, and risk assessments." },
    "vulnerability-management": { title: "Vulnerability Management", desc: "Continuous Nessus and Qualys scans, risk patching schedules." },
    "penetration-testing": { title: "Penetration Testing", desc: "Ethical hacking, API authorization checks, and exploit reports." },
    "security-operations-center": { title: "Security Operations Center (SOC)", desc: "24/7 SIEM monitoring, threat hunts, and SOAR event actions." },
    "identity-access-management": { title: "Identity & Access Management", desc: "Okta single sign-on (SSO), adaptive MFA, and PAM tools." },
    "cloud-security": { title: "Cloud Security", desc: "Prisma Cloud audits, micro-segmentation, and least-privilege rules." },
    "compliance-governance": { title: "Compliance & Governance", desc: "Audit readiness for SOC2, ISO27001, HIPAA, and policy planning." },
    "zero-trust-architecture": { title: "Zero Trust Architecture", desc: "Endpoint checks, SDP setups, and SASE security perimeters." }
  },
  "software-development": {
    "enterprise-app-development": { title: "Enterprise Application Development", desc: "High-throughput database design and monolithic splits." },
    "web-app-development": { title: "Web Application Development", desc: "Responsive React/Next.js platforms with advanced SEO layouts." },
    "mobile-app-development": { title: "Mobile Application Development", desc: "Flutter and native iOS/Android builds with hardware integration." },
    "saas-product-development": { title: "SaaS Product Development", desc: "Multi-tenant system configurations and subscription gateways." },
    "api-development-integration": { title: "API Development & Integration", desc: "gRPC microservices, REST/GraphQL gateways, and OpenAPI specs." },
    "microservices-architecture": { title: "Microservices Architecture", desc: "Event-driven Apache Kafka loops and saga pattern integration." },
    "product-engineering": { title: "Product Engineering", desc: "Rapid MVP prototyping and customer experience design sprints." },
    "application-modernization": { title: "Application Modernization", desc: "Monolith database decoupling and serverless architecture migrations." }
  },
  "digital-transformation": {
    "digital-strategy": { title: "Digital Strategy", desc: "IT roadmaps, cloud readiness audits, and budget optimization planning." },
    "enterprise-modernization": { title: "Enterprise Modernization", desc: "Refactoring legacy mainframes to cloud-native stacks." },
    "process-automation": { title: "Process Automation", desc: "OCR tools integration and cross-platform RPA pipelines." },
    "intelligent-workflows": { title: "Intelligent Workflows", desc: "Customer service routing systems based on sentiment scoring." },
    "customer-experience-transformation": { title: "Customer Experience Transformation", desc: "Omni-channel client portals and ML-driven recommendation flows." },
    "legacy-modernization": { title: "Legacy System Modernization", desc: "Migrating legacy ColdFusion/COBOL/PHP workloads to Go and NodeJS." },
    "business-transformation": { title: "Business Transformation", desc: "Scaling Scrum frameworks and corporate KPI transparency models." },
    "change-management": { title: "Change Management", desc: "Internal developer coaching and technology adoption guides." }
  },
  "data-engineering": {
    "data-platform-development": { title: "Data Platform Development", desc: "Columnar databases design and multi-tier data storage setups." },
    "data-warehousing": { title: "Data Warehousing", desc: "Snowflake, Databricks, and Google BigQuery analytical platforms." },
    "data-lakes-lakehouse": { title: "Data Lakes & Lakehouse", desc: "Apache Iceberg configurations and S3 parquet partitioning." },
    "etl-elt-pipelines": { title: "ETL/ELT Pipelines", desc: "Airflow orchestrators and dbt models checking raw entries." },
    "real-time-data-processing": { title: "Real-Time Data Processing", desc: "Apache Spark Streaming, Flink loops, and Druid databases." },
    "data-quality-management": { title: "Data Quality Management", desc: "Great Expectations assertions and anomaly alerts." },
    "master-data-management": { title: "Master Data Management", desc: "Deduplication algorithms and master record sync tools." },
    "big-data-engineering": { title: "Big Data Engineering", desc: "Hadoop ecosystems, Spark cluster optimizations, and Elasticsearch grids." }
  },
  "managed-services": {
    "managed-cloud": { title: "Managed Cloud Services", desc: "Multi-account admin support, security patches, OS updates." },
    "managed-devops": { title: "Managed DevOps Services", desc: "CI/CD cache optimization, environment updates, and pipeline tuning." },
    "managed-security": { title: "Managed Security Services", desc: "24/7 threat monitoring, WAF policies, and incident containment." },
    "application-support": { title: "Application Support", desc: "SLA bug resolutions, Sentry monitoring, and performance tuning." },
    "infrastructure-management": { title: "Infrastructure Management", desc: "SAN configuration, hypervisor updates, and load balancers." },
    "database-administration": { title: "Database Administration", desc: "PostgreSQL index rebuilds, backups, and security hardening." },
    "monitoring-incident-management": { title: "Monitoring & Incident Management", desc: "PagerDuty escalations, custom thresholds, and root-cause post-mortems." },
    "twenty-four-seven-support": { title: "24/7 Support Services", desc: "Slack and phone developer help desks with fast response SLAs." }
  },
  "qa-testing": {
    "test-automation": { title: "Test Automation", desc: "Playwright and Cypress end-to-end client scripts." },
    "performance-testing": { title: "Performance Testing", desc: "API peak load simulations using k6 and Apache JMeter." },
    "security-testing": { title: "Security Testing", desc: "Dependabot audits and access control authorization checks." },
    "api-testing": { title: "API Testing", desc: "JSON contract validations, Postman pipelines, and Newman scripts." },
    "mobile-app-testing": { title: "Mobile Application Testing", desc: "Appium browser farms testing native application packages." },
    "functional-testing": { title: "Functional Testing", desc: "Regression testing suites and User Acceptance Testing boards." },
    "continuous-testing": { title: "Continuous Testing", desc: "Parallel build integrations, code coverage checkers." },
    "quality-engineering": { title: "Quality Engineering", desc: "Shift-left methodologies, defect escape reports, and standards." }
  },
  "it-consulting": {
    "technology-consulting": { title: "Technology Consulting", desc: "Cost-benefit analyses, legacy upgrade guides, and stacks selection." },
    "enterprise-architecture": { title: "Enterprise Architecture", desc: "Distributed system component layouts and active sync failovers." },
    "cloud-consulting": { title: "Cloud Consulting", desc: "Public cloud budget forecasts, land zone configs, and cost estimation." },
    "ai-consulting": { title: "AI Consulting", desc: "Generative AI workshops, feasibility checkouts, and alignment policies." },
    "cybersecurity-consulting": { title: "Cybersecurity Consulting", desc: "Incident response plan drafts and risk register configuration." },
    "digital-transformation-consulting": { title: "Digital Transformation Consulting", desc: "Digital transformation roadmaps, design thinking sprints." },
    "it-strategy-roadmap": { title: "IT Strategy & Roadmap", desc: "IT capability adoption steps, budget planning, skill gap audits." },
    "technology-assessment": { title: "Technology Assessment", desc: "Scalability audits, query bottlenecks tracking, and code checks." }
  }
};

export function generateCapabilityDetail(
  serviceSlug: string,
  capabilitySlug: string,
  service: ServiceCategory
): CapabilityDetail | undefined {
  const reg = capabilityRegistry[serviceSlug]?.[capabilitySlug];
  if (!reg) return undefined;

  const title = reg.title;
  const desc = reg.desc;

  const mainTech = service.techStack[0]?.name || "TypeScript / Next.js";
  const secTech = service.techStack[1]?.name || "AWS / Cloud Native";
  const thirdTech = service.techStack[2]?.name || "Terraform";

  return {
    slug: capabilitySlug,
    title: title,
    heroSubtitle: desc,
    challenge: `Implementing production-grade ${title.toLowerCase()} systems presents recurring performance overheads, complex API integration issues, and deployment bottlenecks that slow down engineering velocity.`,
    solution: `We establish highly-available, automated, and secure ${title.toLowerCase()} configurations. Our solutions integrate natively with your build workflows, configure custom validation checks, and set up continuous monitoring dashboards.`,
    features: [
      `Automated environment deployment for ${title.toLowerCase()}`,
      `Structured testing, validation, and vulnerability scans`,
      `Native compatibility with ${mainTech} and ${secTech} setups`
    ],
    benefits: [
      `Up to 45% improvement in release cycles and deployment speed`,
      `Complete trace observability with telemetry dashboard alerts`,
      `Fully-audited configuration alignment matching SOC-2 guidelines`
    ],
    deliveryApproach: generate6PhaseDeliveryApproach(serviceSlug, title),
    techStack: [
      { name: mainTech, desc: `Primary development runtime and logic executor.` },
      { name: secTech, desc: `Container orchestration and target cloud hosting.` },
      { name: thirdTech, desc: `IaC infrastructure state management and monitoring.` }
    ],
    caseStudy: {
      title: `Optimizing ${title.toLowerCase()} pipelines for high volume.`,
      desc: `We partnered with a client to overhaul their ${title.toLowerCase()} lifecycle. By replacing manual workflows with secure scripts and real-time alerts, we achieved high availability and zero drift.`,
      metrics: [
        { value: "4.5x", label: "Workflow execution frequency" },
        { value: "0", label: "Manual deployment blockages" },
        { value: "99.9%", label: "Pipeline execution success rate" }
      ],
      highlights: [
        `Removed legacy release bottlenecks`,
        `Integrated automated regression checkups`,
        `Completed compliance audits for core workflows`
      ]
    },
    faqs: [
      {
        q: `How do you secure data transit inside this setup?`,
        a: `We enforce end-to-end TLS encryption, rotate API access tokens automatically, and segregate networks using strict routing rules.`
      },
      {
        q: `Can this scale automatically with traffic spikes?`,
        a: `Yes. All deployment configurations include auto-scaling thresholds that adjust node capacity dynamically depending on CPU and memory loads.`
      }
    ]
  };
}

export function generate6PhaseDeliveryApproach(serviceSlug: string, capabilityTitle: string): string[] {
  const title = capabilityTitle.toLowerCase();
  
  switch (serviceSlug) {
    case "ai-data-innovation":
      return [
        `Phase 1: Cognitive Assessment & Data Audit - Auditing proprietary enterprise datasets, text corpuses, and token metrics to align with LLM boundaries.`,
        `Phase 2: Blueprint & Modeling Strategy - Designing custom prompt structures, semantic caches, and vector index partitions for ${title}.`,
        `Phase 3: Agentic Pipeline Engineering - Constructing stateful multi-agent workflows, tool classifiers, and circular reasoning pipelines.`,
        `Phase 4: Validation & Safety Alignment - Conducting rigorous evaluation sweeps on model outputs to minimize hallucinations and enforce data safety.`,
        `Phase 5: Secure Production Rollout - Orchestrating model endpoints inside single-tenant VPC boundaries using auto-scaling compute groups.`,
        `Phase 6: Continuous Feedback Loops - Deploying active drift detectors, retrain queues, and unified observability logging.`
      ];
    case "cloud-services":
      return [
        `Phase 1: Cloud Maturity & Readiness Audit - Reviewing current virtual machine workloads, storage footprint, and network latency boundaries.`,
        `Phase 2: Landing Zone Blueprint - Drafting secure multi-account organizational units, subnet boundaries, and IAM privilege groups.`,
        `Phase 3: Infrastructure Codification - Writing reusable Terraform or OpenTofu modules to declare cloud compute and network foundations for ${title}.`,
        `Phase 4: Security & Compliance Guard - Scanning codified resources against CIS benchmarks, policy boundaries, and SOC-2 directives.`,
        `Phase 5: Phased Traffic Migration - Migrating live software databases and runtimes using continuous replication gates and DNS switchovers.`,
        `Phase 6: FinOps Optimization & Scale - Customizing autoscaling thresholds, load balancer alarms, and reviewing monthly cost allocation reports.`
      ];
    case "devops-automation":
      return [
        `Phase 1: Pipeline Diagnostics & Friction Audit - Analyzing active development lifecycles, checkout times, and release bottlenecks.`,
        `Phase 2: GitOps Flow Design - Structuring git-triggered rollout plans, Kubernetes target state rules, and self-service portal models.`,
        `Phase 3: Modular CI/CD Ingestion - Writing optimized build scripts, container compilers, and parallel integration testing suites for ${title}.`,
        `Phase 4: DevSecOps Gate Integration - Inserting automated SAST checkups, dependency scan loops, and runtime secret detection checks.`,
        `Phase 5: Production Promotion Gates - Deploying container clusters using canary rollouts, blue-green pools, and automated rollbacks.`,
        `Phase 6: Observability & Incident Tuning - Constructing SLO telemetry charts, distributed traces, and paging alerts for support leads.`
      ];
    case "cybersecurity":
      return [
        `Phase 1: Threat Vector Analysis - Auditing network boundaries, external endpoints, database exposures, and IAM policies.`,
        `Phase 2: Zero-Trust Network Blueprint - Designing micro-segmentation boundaries, token auth steps, and gateway access rules.`,
        `Phase 3: Identity & IAM Orchestration - Implementing single sign-on (SSO), adaptive MFA, and role-based directory mapping for ${title}.`,
        `Phase 4: Vulnerability Scans & Pentesting - Running automated vulnerability scans and executing manual API authorization exploits.`,
        `Phase 5: Unified SIEM Logging - Centralizing compute event logs into immutable cloud databases for real-time threat-detection.`,
        `Phase 6: Compliance Certification Audit - Aligning systems with SOC-2, ISO-27001, or HIPAA guidelines and preparing audit reports.`
      ];
    case "software-development":
      return [
        `Phase 1: Requirement Mapping & Sprints - Documenting project logic boundaries, API interactions, and user interface mocks.`,
        `Phase 2: Microservices Topology Design - Modeling clean relational schemas, gRPC messaging events, and caching structures for ${title}.`,
        `Phase 3: Full-Stack Code Engineering - Writing modular TypeScript, Go, or Rust runtimes backed by responsive interface components.`,
        `Phase 4: Automated Testing Verification - Building Jest unit tests and Playwright end-to-end browser user scenarios.`,
        `Phase 5: Cloud Deployment & CDN Rollout - Promoting compiled assets to edge CDN caching networks and container runtimes.`,
        `Phase 6: Modernization & Profiling - Tuning database query indices, profiling memory leaks, and optimizing response latency.`
      ];
    case "digital-transformation":
      return [
        `Phase 1: IT Ecosystem Assessment - Auditing legacy mainframes, manual workflows, and corporate process bottlenecks.`,
        `Phase 2: Strategy & Change Roadmap - Drafting cloud migration milestones, training steps, and project ROI metrics.`,
        `Phase 3: Automation Pipeline Build - Replacing manual data checks with serverless pipelines and secure API loops for ${title}.`,
        `Phase 4: Parallel Pipeline Validation - Running modernized platforms alongside legacy setups to verify output consistency.`,
        `Phase 5: Production Cutover - Routing live customer traffic to modern cloud platforms with zero service gaps.`,
        `Phase 6: Team Enablement & Runbooks - Providing complete code documentation, developer workshops, and operations runbooks.`
      ];
    case "data-engineering":
      return [
        `Phase 1: Data Source Schema Inventory - Mapping external API schemas, warehouse streams, and table write volumes.`,
        `Phase 2: Lakehouse Partition Blueprint - Designing target Databricks or BigQuery cluster partitions and indexing parameters for ${title}.`,
        `Phase 3: High-Throughput ELT Pipelines - Writing Apache Airflow or Spark pipelines to parse, flatten, and ingest source files.`,
        `Phase 4: Quality Assertions & Sanity Checks - Inserting Great Expectations rules to validate column types and isolate bad records.`,
        `Phase 5: Warehouse Orchestration - Aggregating raw data into business-ready dashboards.`,
        `Phase 6: Lineage & Governance Audit - Configuring metadata engines to track data lineage from database writes to final reports.`
      ];
    case "managed-services":
      return [
        `Phase 1: SLA Alignment & Scope Audit - Establishing response windows, on-call schedules, and critical incident paths.`,
        `Phase 2: Telemetry Installation - Deploying telemetry agents to compute nodes and connecting logs to pager tools.`,
        `Phase 3: Remediation Runbooks Setup - Compiling specific system response guides, recovery steps, and failover directions.`,
        `Phase 4: Disaster Recovery Drill - Executing database restoration exercises to verify RTO/RPO targets.`,
        `Phase 5: Active 24/7 Operations Support - Commencing round-the-clock monitoring and incident containment for ${title}.`,
        `Phase 6: Uptime & Cost Audits - Delivering weekly system health reports and cloud cost optimization plans.`
      ];
    case "qa-testing":
      return [
        `Phase 1: Test Vector Scope Design - Documenting user pathways, API payloads, and functional validation targets.`,
        `Phase 2: Test Automation Setup - Setting up clean Playwright or Cypress page object models for ${title}.`,
        `Phase 3: Script Development & Mocks - Writing automated test cases, mock API endpoints, and seed database scripts.`,
        `Phase 4: CI/CD Hook - Triggering test suites automatically on git merge requests to block regression errors.`,
        `Phase 5: Load & Stress Simulations - Simulating peak concurrency using k6 scripts to identify performance thresholds.`,
        `Phase 6: Quality Reporting Logs - Publishing bug reports, execution logs, and tracing records for engineering teams.`
      ];
    case "it-consulting":
      return [
        `Phase 1: Stakeholder Discovery Sprints - Interviewing IT leads, analyzing budget bottlenecks, and setting business goals.`,
        `Phase 2: Technology Stack Selection - Reviewing cloud options, database features, and license parameters for ${title}.`,
        `Phase 3: Architecture & DR Planning - Blueprinting failover clusters, regional backups, and secure VPC maps.`,
        `Phase 4: Proof-of-Concept Validation - Building sandbox deployments to test architecture choices before rollout.`,
        `Phase 5: Migration Runbook Strategy - Drafting step-by-step migration guides, fallback parameters, and deployment sequences.`,
        `Phase 6: Knowledge Handoff Workshops - Running technical hand-off classes and delivering systems runbooks.`
      ];
    default:
      return [
        `Phase 1: Architecture Consult & Scope Mapping - Defining system boundaries, deliverables, and alignment keys.`,
        `Phase 2: Sandbox Prototyping - Setting up sandbox configurations to test deployment variables.`,
        `Phase 3: Automated Integration Build - Creating CI/CD paths and automated provisioning scripts.`,
        `Phase 4: Validation & Compliance Audit - Scanning systems against security guidelines and compliance profiles.`,
        `Phase 5: Production Rollout Promotion - Switching DNS entries and routing live workloads.`,
        `Phase 6: Operational SLA Hand-off - Delivering metrics dashboards, runbooks, and training sessions.`
      ];
  }
}

