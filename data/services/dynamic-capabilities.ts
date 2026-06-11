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
    deliveryApproach: [
      `Phase 1: Architecture review and workflow mapping`,
      `Phase 2: Automated configuration rollout and validation tests`,
      `Phase 3: Telemetry orchestration, load tuning, and training hand-off`
    ],
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
