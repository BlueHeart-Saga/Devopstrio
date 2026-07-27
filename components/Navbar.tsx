"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { insightsApi } from "@/lib/insightsApi";

const serviceCategories = [
  {
    id: "ai-data-innovation",
    name: "AI & Data Innovation",
    href: "/services/ai-data-innovation",
    items: [
      { name: "Generative AI Solutions", desc: "Enterprise LLM applications, custom fine-tuning, and semantic caching layers.", href: "/services/ai-data-innovation/generative-ai-solutions" },
      { name: "AI Agents & Automation", desc: "Stateful autonomous multi-agent workflows executing complex processes.", href: "/services/ai-data-innovation/ai-agents-automation" },
      { name: "Machine Learning Engineering", desc: "Training, validating, and deploying deep learning models at scale.", href: "/services/ai-data-innovation/machine-learning-engineering" },
      { name: "Data Engineering", desc: "High-throughput data pipelines, Kafka streaming, and unified lakehouses.", href: "/services/ai-data-innovation/data-engineering" },
      { name: "Business Intelligence & Analytics", desc: "Consolidated enterprise dashboards, telemetry, and reporting engines.", href: "/services/ai-data-innovation/business-intelligence-analytics" },
      { name: "Predictive Analytics", desc: "Time-series forecasting, customer churn and predictive models.", href: "/services/ai-data-innovation/predictive-analytics" },
      { name: "Data Governance", desc: "Data compliance audits, cataloging, lineage tracking, and security controls.", href: "/services/ai-data-innovation/data-governance" },
      { name: "MLOps & AI Operations", desc: "Continuous training loops, model registries, and drift detection.", href: "/services/ai-data-innovation/mlops-ai-operations" }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    href: "/services/cloud-services",
    items: [
      { name: "Cloud Strategy & Consulting", desc: "Tailored architecture blueprints, vendor evaluation, and cloud readiness.", href: "/services/cloud-services/cloud-strategy-consulting" },
      { name: "Cloud Migration", desc: "Re-hosting, re-platforming, and database replication with zero downtime.", href: "/services/cloud-services/cloud-migration" },
      { name: "Cloud Architecture", desc: "Design and blueprint enterprise-grade cloud environments.", href: "/services/cloud-services/cloud-architecture" },
      { name: "Azure Services", desc: "Landing zones, AKS clusters, and serverless applications on Microsoft Azure.", href: "/services/cloud-services/azure-services" },
      { name: "AWS Services", desc: "Scalable EKS grids, serverless Lambdas, and secure DynamoDB setups on AWS.", href: "/services/cloud-services/aws-services" },
      { name: "Google Cloud Services", desc: "GKE autopilot setups, BigQuery data platforms, and Vertex AI integrations on GCP.", href: "/services/cloud-services/google-cloud-services" },
      { name: "Cloud Security", desc: "Wiz security posture management, IAM policies, and key rotations.", href: "/services/cloud-services/cloud-security" },
      { name: "Cloud Managed Services", desc: "24/7 outsourced management, OS patching, and active cloud backups.", href: "/services/cloud-services/cloud-managed-services" },
      { name: "FinOps & Cost Optimization", desc: "Spend optimization, Savings Plan allocations, and traffic auto-scaling.", href: "/services/cloud-services/finops-cost-optimization" }
    ]
  },
  {
    id: "devops-automation",
    name: "DevOps & Automation",
    href: "/services/devops-automation",
    items: [
      { name: "CI/CD Implementation", desc: "Automated Git-triggered builds and testing environments.", href: "/services/devops-automation/cicd-implementation" },
      { name: "Platform Engineering", desc: "Developer self-service templates and Backstage portal configurations.", href: "/services/devops-automation/platform-engineering" },
      { name: "Infrastructure as Code", desc: "Reusable Terraform, Ansible, and Packer infrastructure setups.", href: "/services/devops-automation/infrastructure-as-code" },
      { name: "Kubernetes Services", desc: "Multi-tenant EKS, AKS, GKE clusters with Karpenter and service mesh.", href: "/services/devops-automation/kubernetes-services" },
      { name: "DevSecOps", desc: "Sonarqube SAST checks and Snyk vulnerability scanning inside pipelines.", href: "/services/devops-automation/devsecops" },
      { name: "Site Reliability Engineering (SRE)", desc: "SLI/SLO definition, error budget tracking, and pager alerts.", href: "/services/devops-automation/site-reliability-engineering" },
      { name: "Release Automation", desc: "Canary deployments, blue-green releases, and rollback alerts.", href: "/services/devops-automation/release-automation" },
      { name: "Monitoring & Observability", desc: "Distributed OpenTelemetry tracing, Jaeger dashboards, and ELK logs.", href: "/services/devops-automation/monitoring-observability" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    items: [
      { name: "Security Assessment", desc: "Threat modeling, network configuration audits, and risk assessments.", href: "/services/cybersecurity/security-assessment" },
      { name: "Vulnerability Management", desc: "Continuous Nessus and Qualys scans, risk patching schedules.", href: "/services/cybersecurity/vulnerability-management" },
      { name: "Penetration Testing", desc: "Ethical hacking, API authorization checks, and exploit reports.", href: "/services/cybersecurity/penetration-testing" },
      { name: "Security Operations Center (SOC)", desc: "24/7 SIEM monitoring, threat hunts, and SOAR event actions.", href: "/services/cybersecurity/security-operations-center" },
      { name: "Identity & Access Management", desc: "Okta single sign-on (SSO), adaptive MFA, and PAM tools.", href: "/services/cybersecurity/identity-access-management" },
      { name: "Cloud Security", desc: "Prisma Cloud audits, micro-segmentation, and least-privilege rules.", href: "/services/cybersecurity/cloud-security" },
      { name: "Compliance & Governance", desc: "Audit readiness for SOC2, ISO27001, HIPAA, and policy planning.", href: "/services/cybersecurity/compliance-governance" },
      { name: "Zero Trust Architecture", desc: "Endpoint checks, SDP setups, and SASE security perimeters.", href: "/services/cybersecurity/zero-trust-architecture" }
    ]
  },
  {
    id: "software-development",
    name: "Software Development",
    href: "/services/software-development",
    items: [
      { name: "Enterprise Application Development", desc: "High-throughput database design and monolithic splits.", href: "/services/software-development/enterprise-app-development" },
      { name: "Web Application Development", desc: "Responsive React/Next.js platforms with advanced SEO layouts.", href: "/services/software-development/web-app-development" },
      { name: "Mobile Application Development", desc: "Flutter and native iOS/Android builds with hardware integration.", href: "/services/software-development/mobile-app-development" },
      { name: "SaaS Product Development", desc: "Multi-tenant system configurations and subscription gateways.", href: "/services/software-development/saas-product-development" },
      { name: "API Development & Integration", desc: "gRPC microservices, REST/GraphQL gateways, and OpenAPI specs.", href: "/services/software-development/api-development-integration" },
      { name: "Microservices Architecture", desc: "Event-driven Apache Kafka loops and saga pattern integration.", href: "/services/software-development/microservices-architecture" },
      { name: "Product Engineering", desc: "Rapid MVP prototyping and customer experience design sprints.", href: "/services/software-development/product-engineering" },
      { name: "Application Modernization", desc: "Monolith database decoupling and serverless architecture migrations.", href: "/services/software-development/application-modernization" }
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    href: "/services/digital-transformation",
    items: [
      { name: "Digital Strategy", desc: "IT roadmaps, cloud readiness audits, and budget optimization planning.", href: "/services/digital-transformation/digital-strategy" },
      { name: "Enterprise Modernization", desc: "Refactoring legacy mainframes to cloud-native stacks.", href: "/services/digital-transformation/enterprise-modernization" },
      { name: "Process Automation", desc: "OCR tools integration and cross-platform RPA pipelines.", href: "/services/digital-transformation/process-automation" },
      { name: "Intelligent Workflows", desc: "Customer service routing systems based on sentiment scoring.", href: "/services/digital-transformation/intelligent-workflows" },
      { name: "Customer Experience Transformation", desc: "Omni-channel client portals and ML-driven recommendation flows.", href: "/services/digital-transformation/customer-experience-transformation" },
      { name: "Legacy System Modernization", desc: "Migrating legacy ColdFusion/COBOL/PHP workloads to Go and NodeJS.", href: "/services/digital-transformation/legacy-modernization" },
      { name: "Business Transformation", desc: "Scaling Scrum frameworks and corporate KPI transparency models.", href: "/services/digital-transformation/business-transformation" },
      { name: "Change Management", desc: "Internal developer coaching and technology adoption guides.", href: "/services/digital-transformation/change-management" }
    ]
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    href: "/services/data-engineering",
    items: [
      { name: "Data Platform Development", desc: "Columnar databases design and multi-tier data storage setups.", href: "/services/data-engineering/data-platform-development" },
      { name: "Data Warehousing", desc: "Snowflake, Databricks, and Google BigQuery analytical platforms.", href: "/services/data-engineering/data-warehousing" },
      { name: "Data Lakes & Lakehouse", desc: "Apache Iceberg configurations and S3 parquet partitioning.", href: "/services/data-engineering/data-lakes-lakehouse" },
      { name: "ETL/ELT Pipelines", desc: "Airflow orchestrators and dbt models checking raw entries.", href: "/services/data-engineering/etl-elt-pipelines" },
      { name: "Real-Time Data Processing", desc: "Apache Spark Streaming, Flink loops, and Druid databases.", href: "/services/data-engineering/real-time-data-processing" },
      { name: "Data Quality Management", desc: "Great Expectations assertions and anomaly alerts.", href: "/services/data-engineering/data-quality-management" },
      { name: "Master Data Management", desc: "Deduplication algorithms and master record sync tools.", href: "/services/data-engineering/master-data-management" },
      { name: "Big Data Engineering", desc: "Hadoop ecosystems, Spark cluster optimizations, and Elasticsearch grids.", href: "/services/data-engineering/big-data-engineering" }
    ]
  },
  {
    id: "managed-services",
    name: "Managed Services",
    href: "/services/managed-services",
    items: [
      { name: "Managed Cloud Services", desc: "Multi-account admin support, security patches, OS updates.", href: "/services/managed-services/managed-cloud" },
      { name: "Managed DevOps Services", desc: "CI/CD cache optimization, environment updates, and pipeline tuning.", href: "/services/managed-services/managed-devops" },
      { name: "Managed Security Services", desc: "24/7 threat monitoring, WAF policies, and incident containment.", href: "/services/managed-services/managed-security" },
      { name: "Application Support", desc: "SLA bug resolutions, Sentry monitoring, and performance tuning.", href: "/services/managed-services/application-support" },
      { name: "Infrastructure Management", desc: "SAN configuration, hypervisor updates, and load balancers.", href: "/services/managed-services/infrastructure-management" },
      { name: "Database Administration", desc: "PostgreSQL index rebuilds, backups, and security hardening.", href: "/services/managed-services/database-administration" },
      { name: "Monitoring & Incident Management", desc: "PagerDuty escalations, custom thresholds, and root-cause post-mortems.", href: "/services/managed-services/monitoring-incident-management" },
      { name: "24/7 Support Services", desc: "Slack and phone developer help desks with fast response SLAs.", href: "/services/managed-services/twenty-four-seven-support" }
    ]
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    href: "/services/qa-testing",
    items: [
      { name: "Test Automation", desc: "Playwright and Cypress end-to-end client scripts.", href: "/services/qa-testing/test-automation" },
      { name: "Performance Testing", desc: "API peak load simulations using k6 and Apache JMeter.", href: "/services/qa-testing/performance-testing" },
      { name: "Security Testing", desc: "Dependabot audits and access control authorization checks.", href: "/services/qa-testing/security-testing" },
      { name: "API Testing", desc: "JSON contract validations, Postman pipelines, and Newman scripts.", href: "/services/qa-testing/api-testing" },
      { name: "Mobile Application Testing", desc: "Appium browser farms testing native application packages.", href: "/services/qa-testing/mobile-app-testing" },
      { name: "Functional Testing", desc: "Regression testing suites and User Acceptance Testing boards.", href: "/services/qa-testing/functional-testing" },
      { name: "Continuous Testing", desc: "Parallel build integrations, code coverage checkers.", href: "/services/qa-testing/continuous-testing" },
      { name: "Quality Engineering", desc: "Shift-left methodologies, defect escape reports, and standards.", href: "/services/qa-testing/quality-engineering" }
    ]
  },
  {
    id: "it-consulting",
    name: "IT Consulting",
    href: "/services/it-consulting",
    items: [
      { name: "Technology Consulting", desc: "Cost-benefit analyses, legacy upgrade guides, and stacks selection.", href: "/services/it-consulting/technology-consulting" },
      { name: "Enterprise Architecture", desc: "Distributed system component layouts and active sync failovers.", href: "/services/it-consulting/enterprise-architecture" },
      { name: "Cloud Consulting", desc: "Public cloud budget forecasts, land zone configs, and cost estimation.", href: "/services/it-consulting/cloud-consulting" },
      { name: "AI Consulting", desc: "Generative AI workshops, feasibility checkouts, and alignment policies.", href: "/services/it-consulting/ai-consulting" },
      { name: "Cybersecurity Consulting", desc: "Incident response plan drafts and risk register configuration.", href: "/services/it-consulting/cybersecurity-consulting" },
      { name: "Digital Transformation Consulting", desc: "Digital transformation roadmaps, design thinking sprints.", href: "/services/it-consulting/digital-transformation-consulting" },
      { name: "IT Strategy & Roadmap", desc: "IT capability adoption steps, budget planning, skill gap audits.", href: "/services/it-consulting/it-strategy-roadmap" },
      { name: "Technology Assessment", desc: "Scalability audits, query bottlenecks tracking, and code checks.", href: "/services/it-consulting/technology-assessment" }
    ]
  }
];

const servicesList = [
  ...serviceCategories.map(cat => ({ name: cat.name, href: cat.href })),
  { name: "Explore Services Directory", href: "/services/explore" }
];

const industriesList = [
  { name: "Banking & Finance", desc: "Secure, regulatory-compliant solutions for banking, investing, and digital payments.", href: "/industries/banking-finance" },
  { name: "Healthcare & Life Sciences", desc: "HIPAA-compliant telehealth apps, EHR platforms, and research databases.", href: "/industries/healthcare-life-sciences" },
  { name: "Retail & E-Commerce", desc: "Omni-channel engines, high-speed checkouts, and real-time inventory systems.", href: "/industries/retail-ecommerce" },
  { name: "Manufacturing", desc: "Industrial IoT integrations, predictive maintenance logs, and smart supply chains.", href: "/industries/manufacturing" },
  { name: "Telecommunications", desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.", href: "/industries/telecommunications" },
  { name: "Media & Entertainment", desc: "High-bandwidth VOD platforms, live broadcasting, and digital assets.", href: "/industries/media-entertainment" },
  { name: "Education", desc: "LMS environments, remote learning tools, and digital collaboration spaces.", href: "/industries/education" },
  { name: "Government & Public Sector", desc: "Citizen portals, cloud modernization, and strict security compliance.", href: "/industries/government-public-sector" }
];

const aboutList = [
  { name: "Company Overview", desc: "Our history, mission, core values, and corporate strategy.", href: "/about/company-overview" },
  { name: "Leadership & Team", desc: "Meet the executive board, advisors, and principal architects.", href: "/about/leadership-team" },
  { name: "Our Culture & People", desc: "Explore our co-engineering culture, team events, and active careers.", href: "/about/our-culture-people" },
  { name: "Global Internship", desc: "Attracting students, graduates, and aspiring engineers to launch their technology career.", href: "/about/global-internship" },
  { name: "Global Presence", desc: "Our international delivery centers, office sites, and local operations.", href: "/about/global-presence" },
  { name: "Partnerships & Certifications", desc: "Strategic technology alliances and engineering certification achievements.", href: "/about/partnerships-certifications" },
  { name: "Awards & Recognition", desc: "Industry accolades, technical awards, and compliance standard badges.", href: "/about/awards-recognition" },
  { name: "Sustainability & CSR", desc: "Environmental footprint optimization, green computing, and social impact.", href: "/about/sustainability-csr" },
  { name: "Testimonials & Success", desc: "Read client reviews, project feedback, and real-world impact metrics.", href: "/about/testimonials" },
  { name: "Customer Support", desc: "Global support desk, SLA ticketing, and cloud monitoring services.", href: "/about/customer-support" },
  { name: "Contact Us", desc: "Connect with our consulting offices and engineering boards.", href: "/contact" }
];

const ecosystemCategories = [
  {
    id: "partnerships",
    name: "Partnerships",
    href: "/ecosystem/partnerships",
    items: [
      { name: "Alliances Overview", desc: "Strategic technology alliances network", href: "/ecosystem/partnerships" },
      { name: "Microsoft Alliance", desc: "Azure migrations, landing zones, and SQL databases", href: "/ecosystem/partnerships/microsoft" },
      { name: "AWS Partner Network", desc: "Serverless AWS backends and autoscaling EKS", href: "/ecosystem/partnerships/aws" },
      { name: "Google Cloud Ecosystem", desc: "BigQuery database structure and Vertex AI tools", href: "/ecosystem/partnerships/google-cloud" },
      { name: "Oracle Alliance", desc: "Autonomous database clusters and OCI setups", href: "/ecosystem/partnerships/oracle" },
      { name: "ServiceNow Integration", desc: "ITSM incidents automation and virtual agents", href: "/ecosystem/partnerships/servicenow" },
      { name: "SAP on Cloud", desc: "S/4HANA migrations and secure cloud hosting", href: "/ecosystem/partnerships/sap" },
      { name: "Cisco Networking", desc: "SD-WAN networks and Zero-Trust segmentation", href: "/ecosystem/partnerships/cisco" }
    ]
  },
  {
    id: "innovation-labs",
    name: "Innovation Labs",
    href: "/ecosystem/innovation-labs",
    items: [
      { name: "Labs Overview", desc: "R&D innovation and prototyping centers", href: "/ecosystem/innovation-labs" },
      { name: "AI Innovation Lab", desc: "Stateful agent networks and vector lookups", href: "/ecosystem/innovation-labs/ai-lab" },
      { name: "Cloud Innovation Lab", desc: "Green computing and serverless edge WASM", href: "/ecosystem/innovation-labs/cloud-lab" },
      { name: "DevOps Innovation Lab", desc: "Canary rollouts and dynamic pipeline tasks", href: "/ecosystem/innovation-labs/devops-lab" },
      { name: "Cybersecurity Lab", desc: "eBPF security rules and SBOM vulnerability scans", href: "/ecosystem/innovation-labs/cybersecurity-lab" },
      { name: "Data & Analytics Lab", desc: "Flink stream engines and Delta Lake compression", href: "/ecosystem/innovation-labs/data-analytics-lab" }
    ]
  },
  {
    id: "platforms-solutions",
    name: "Platforms & Solutions",
    href: "/ecosystem/platforms-solutions",
    items: [
      { name: "Platforms Overview", desc: "Proprietary software products and IP assets", href: "/ecosystem/platforms-solutions" },
      { name: "SaaS Platforms", desc: "Enterprise SaaS products, digital platforms, and business applications", href: "/ecosystem/platforms-solutions/saas-platforms" },
      { name: "DevOps Platform", desc: "Self-service Backstage portal templates", href: "/ecosystem/platforms-solutions/devops-platform" },
      { name: "Cloud Management Platform", desc: "Grafana cost dashboard tracking cloud bills", href: "/ecosystem/platforms-solutions/cloud-management-platform" },
      { name: "Security Platform", desc: "Continuous SAST image checking audits", href: "/ecosystem/platforms-solutions/security-platform" },
      { name: "Data Platform", desc: "Flink stream sync and Delta Lake warehouses", href: "/ecosystem/platforms-solutions/data-platform" },
      { name: "Automation Platform", desc: "Temporal.io stateful background workflow runs", href: "/ecosystem/platforms-solutions/automation-platform" },
      { name: "Customer Experience Platform", desc: "Conversational AI support chatbot widgets", href: "/ecosystem/platforms-solutions/customer-experience-platform" }
    ]
  },
  {
    id: "technology-stack",
    name: "Technology Stack",
    href: "/ecosystem/technology-stack",
    items: [
      { name: "Stack Overview", desc: "Full-stack languages, libraries and frameworks", href: "/ecosystem/technology-stack" },
      { name: "Artificial Intelligence", desc: "LangChain orchestration and PyTorch code models", href: "/ecosystem/technology-stack/artificial-intelligence" },
      { name: "Cloud Native", desc: "AKS Kubernetes clusters and microservices", href: "/ecosystem/technology-stack/cloud-native" },
      { name: "DevOps Toolchain", desc: "GitOps deployment tasks and CI/CD pipelines", href: "/ecosystem/technology-stack/devops-toolchain" },
      { name: "Data Engineering", desc: "Kafka telemetry streams and Spark analytics", href: "/ecosystem/technology-stack/data-engineering" },
      { name: "Cybersecurity", desc: "Cilium network policies and SSO authentication", href: "/ecosystem/technology-stack/cybersecurity" }
    ]
  },
  {
    id: "global-delivery",
    name: "Global Delivery Network",
    href: "/ecosystem/global-delivery",
    items: [
      { name: "Delivery Overview", desc: "Distributed international offices and hubs", href: "/ecosystem/global-delivery" },
      { name: "United Kingdom Hub", desc: "Local consulting meeting UK security rules", href: "/ecosystem/global-delivery/united-kingdom-hub" },
      { name: "United States Operations", desc: "US-based consulting and enterprise solutions", href: "/ecosystem/global-delivery/united-states-operations" },
      { name: "India Operations", desc: "SRE support center and database upkeep tasks", href: "/ecosystem/global-delivery/india-operations" },
      { name: "Europe Hub", desc: "GDPR privacy audits and regional host sites", href: "/ecosystem/global-delivery/europe-hub" },
      { name: "Follow-the-Sun Support", desc: "Continuous support schedules with zero burnout", href: "/ecosystem/global-delivery/follow-the-sun-support" },
      { name: "Managed Services Center", desc: "Ansible OS patches and automated backups", href: "/ecosystem/global-delivery/managed-services-center" },
      { name: "Global Delivery Model", desc: "Scalable global engineering resource distribution", href: "/ecosystem/global-delivery/global-delivery-model" }
    ]
  },
  {
    id: "engineering-excellence",
    name: "Engineering Excellence",
    href: "/ecosystem/engineering-excellence",
    items: [
      { name: "Engineering Culture", desc: "Decoupled software architecture guidelines", href: "/ecosystem/engineering-excellence" },
      { name: "Software Engineering", desc: "Clean domains and decoupled APIs templates", href: "/ecosystem/engineering-excellence/software-engineering" },
      { name: "Platform Engineering", desc: "Developer portal templates accelerating onboard", href: "/ecosystem/engineering-excellence/platform-engineering" },
      { name: "Solution Architecture", desc: "Designing scalable, secure, and future-ready architectures", href: "/ecosystem/engineering-excellence/solution-architecture" },
      { name: "DevSecOps", desc: "Continuous Trivy scanner blocks inside pipelines", href: "/ecosystem/engineering-excellence/devsecops" },
      { name: "Site Reliability Engineering", desc: "OpenTelemetry tracing and SLO alert rules", href: "/ecosystem/engineering-excellence/site-reliability-engineering" },
      { name: "Quality Engineering", desc: "Playwright browser tests and k6 load tests", href: "/ecosystem/engineering-excellence/quality-engineering" },
      { name: "Engineering Operations", desc: "Optimizing engineering processes, delivery, and governance", href: "/ecosystem/engineering-excellence/engineering-operations" }
    ]
  },
  {
    id: "accelerators-frameworks",
    name: "Accelerators & Frameworks",
    href: "/ecosystem/accelerators-frameworks",
    items: [
      { name: "Accelerators Overview", desc: "Declarative scripts and custom repositories", href: "/ecosystem/accelerators-frameworks" },
      { name: "Landing Zone Portal", desc: "Enterprise Cloud Landing Zones & Terraform IaC modules", href: "/ecosystem/accelerators-frameworks/landing-zone" },
      { name: "Cloud Accelerator", desc: "Terraform cloud landing zones in minutes", href: "/ecosystem/accelerators-frameworks/cloud-accelerator" },
      { name: "DevOps Accelerator", desc: "GitHub Actions caching and Helm chart modules", href: "/ecosystem/accelerators-frameworks/devops-accelerator" },
      { name: "AI Framework", desc: "FastAPI and vector lookup search layouts", href: "/ecosystem/accelerators-frameworks/ai-framework" },
      { name: "Security Framework", desc: "Cilium network segmentation Helm charts", href: "/ecosystem/accelerators-frameworks/security-framework" },
      { name: "Data Framework", desc: "Flink telemetry stream processing templates", href: "/ecosystem/accelerators-frameworks/data-framework" }
    ]
  },
  {
    id: "community-talent-network",
    name: "Community & Talent Network",
    href: "/ecosystem/community-talent-network",
    items: [
      { name: "Community Overview", desc: "University programs and developer networks", href: "/ecosystem/community-talent-network" },
      { name: "Engineering Community", desc: "Meetup event groups and public repositories", href: "/ecosystem/community-talent-network/engineering-community" },
      { name: "University Programs", desc: "CS student hackathons and guest lectures", href: "/ecosystem/community-talent-network/university-programs" },
      { name: "Open Source Contributions", desc: "MIT licensed Terraform modules on GitHub", href: "/ecosystem/community-talent-network/open-source-contributions" },
      { name: "Talent Network", desc: "Database of pre-vetted senior SRE candidates", href: "/ecosystem/community-talent-network/talent-network" },
      { name: "Certification Programs", desc: "CKA study cohorts and sponsored exams", href: "/ecosystem/community-talent-network/certification-programs" }
    ]
  }
];

const ecosystemMobileList = [
  { name: "Ecosystem Overview", href: "/ecosystem" },
  { name: "Landing Zone Portal", href: "/ecosystem/accelerators-frameworks/landing-zone" },
  { name: "Devopstrio's AI", href: "https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net" },
  { name: "Partnerships", href: "/ecosystem/partnerships" },
  { name: "Innovation Labs", href: "/ecosystem/innovation-labs" },
  { name: "Platforms & Solutions", href: "/ecosystem/platforms-solutions" },
  { name: "Technology Stack", href: "/ecosystem/technology-stack" },
  { name: "Global Delivery Network", href: "/ecosystem/global-delivery" },
  { name: "Engineering Excellence", href: "/ecosystem/engineering-excellence" },
  { name: "Accelerators & Frameworks", href: "/ecosystem/accelerators-frameworks" },
  { name: "Community & Talent Network", href: "/ecosystem/community-talent-network" }
];

export function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("ai-data-innovation");
  const [activeEcoCategory, setActiveEcoCategory] = useState("partnerships");

  interface SectionCategory {
    slug: string;
    name: string;
    desc?: string;
  }
  interface InsightsSection {
    slug: string;
    name: string;
    categories: SectionCategory[];
  }

  const [insightsSections, setInsightsSections] = useState<InsightsSection[]>([
    {
      slug: "media",
      name: "Media Hub",
      categories: [
        { slug: "blogs", name: "Blogs", desc: "Corporate technology logs & engineering updates" },
        { slug: "case-studies", name: "Case Studies", desc: "Real-world scaling and migration case logs" },
        { slug: "testimonials", name: "Testimonials", desc: "Client success validations and reviews" }
      ]
    },
    {
      slug: "resources",
      name: "Knowledge Center",
      categories: [
        { slug: "white-papers", name: "White Papers", desc: "Deep-dives into architecture and compliance planning" },
        { slug: "newsletters", name: "Newsletters", desc: "Weekly summaries on SRE and dev tools" }
      ]
    }
  ]);
  const [activeInsightsSection, setActiveInsightsSection] = useState<string>("media");

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Dynamic fetch for Insights structure
  useEffect(() => {
    async function fetchNavbarInsights() {
      try {
        const sectionsRes = await insightsApi.getSections();
        if (sectionsRes && sectionsRes.sections) {
          const sectionsList = sectionsRes.sections;
          const fullStructure = await Promise.all(
            sectionsList.map(async (sec: any) => {
              try {
                const catsRes = await insightsApi.getCategories(sec.slug);
                const categories = (catsRes?.categories || []).map((cat: any) => ({
                  slug: cat.slug,
                  name: cat.name,
                  desc: cat.description || `Explore our latest ${cat.name.toLowerCase()} publications`
                }));
                return {
                  slug: sec.slug,
                  name: sec.name,
                  categories
                };
              } catch {
                return {
                  slug: sec.slug,
                  name: sec.name,
                  categories: []
                };
              }
            })
          );
          const validStructure = fullStructure.filter(s => s.categories && s.categories.length > 0);
          if (validStructure && validStructure.length > 0) {
            setInsightsSections(validStructure);
            setActiveInsightsSection(validStructure[0].slug);
          }
        }
      } catch (err) {
        console.error("Error loading insights structure for navbar:", err);
      }
    }
    fetchNavbarInsights();
  }, []);

  useEffect(() => {
    setIsVisible(true);
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("main-nav-visibility", { detail: { isVisible } }));
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      const sectionNavParent = document.getElementById("section-navbar-parent");
      if (sectionNavParent) {
        const rect = sectionNavParent.getBoundingClientRect();
        // Once the section navbar's parent has touched/crossed the main navbar area (approx 90px from top)
        if (rect.top <= 90) {
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          // Keep main navbar visible until it is touched by the section navbar
          setIsVisible(true);
        }
      } else {
        // Fallback for pages without SectionNavbar
        if (currentScrollY > 100) {
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Blurred Backdrop Overlay when dropdown is open */}
      <div
        onClick={() => setActiveMenu(null)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-300 ${activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      <div
        ref={navRef}
        onMouseLeave={() => setActiveMenu(null)}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 pointer-events-none"
      >
        <header
          className={`w-full max-w-7xl relative rounded-full border transition-all duration-350 ${isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-24 opacity-0 pointer-events-none"
            } ${scrolled
              ? "border-zinc-800 bg-[#030303]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-4 px-8"
              : "border-zinc-900/50 bg-[#030303]/60 backdrop-blur-sm py-4 px-8"
            } text-white flex items-center justify-between`}
        >
          {/* Brand Logo & Name (Improved Logo Size) */}
          <Link href="/" className="flex items-center gap-1.5 group" onMouseEnter={() => setActiveMenu(null)}>
            <img
              src="/assets/logo/logo.png"
              alt="Devopstrio logo"
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-105 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              Devopstrio
            </span>
          </Link>

          {/* Center Links (Improved Link Text Sizes to text-sm) */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-7">

            {/* Services Dropdown */}
            <div
              onMouseEnter={() => setActiveMenu("services")}
            >
              <Link
                href="/services"
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-[0.3px] text-white hover:text-rose-500 transition-colors"
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                  <div className="animate-fadeIn bg-black border border-zinc-900 rounded-2xl pt-8 px-8 pb-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[220px_200px_1fr] xl:grid-cols-[280px_240px_1fr] gap-x-4 xl:gap-x-8 gap-y-3 text-left relative">

                    {/* Gloss reflection line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

                    {/* Visual Promo Column (Services Interactive Blur & Expand) */}
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 p-6 flex flex-col justify-between min-h-[320px] h-full group bg-[#09090C] shadow-2xl transition-all duration-500 hover:border-red-500/50 cursor-pointer">
                    <img
                      src="/assets/wavebg/navbar/servicesdrop.jpeg"
                      alt="Enterprise Acceleration"
                      className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-70 group-hover:blur-md scale-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:bg-black/75 transition-all duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <h4 className="text-xl font-bold leading-snug text-white tracking-tight mb-2 font-sans drop-shadow-md">
                        Powering <span className="text-red-500">Next-Gen</span> Solutions
                      </h4>
                      <div className="w-10 h-[3px] bg-red-600 rounded-full my-3" />
                      
                      {/* Description Text: Hidden initially, expands on hover */}
                      <div className="transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 overflow-hidden">
                        <p className="text-[11px] text-zinc-200 font-medium leading-relaxed pt-1">
                          We design custom roadmaps and build robust frameworks tailored to satisfy strict compliance and high scalability standards.
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/services"
                      onClick={() => setActiveMenu(null)}
                      className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-rose-400 transition-colors mt-6 group/cta"
                    >
                      <span>EXPLORE OUR SERVICES</span>
                      <span className="text-rose-500 text-sm group-hover/cta:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>
                  </div>

                    {/* Middle sidebar with categories */}
                    <div className="flex flex-col border-r border-zinc-900 pr-4 gap-1">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block px-3 mb-2">Core Expertise</span>
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={cat.href}
                          onMouseEnter={() => setActiveCategory(cat.id)}
                          onClick={() => {
                            setActiveMenu(null);
                          }}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-[15px] font-semibold transition-all duration-200 text-left ${activeCategory === cat.id
                            ? "bg-zinc-900 text-rose-500"
                            : "text-zinc-300 hover:text-white hover:bg-zinc-900/30"
                            }`}
                        >
                          <span>{cat.name}</span>
                          {activeCategory === cat.id && <span className="text-[11px]">&rarr;</span>}
                        </Link>
                      ))}
                    </div>

                    {/* Right panel with active sub-services */}
                    <div className="flex flex-col">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">Strategic Capabilities</span>
                      <div className="max-h-[420px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {serviceCategories.find(c => c.id === activeCategory)?.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group/subitem block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                            >
                              <span className="block text-[15px] font-semibold text-white group-hover/subitem:text-rose-500 transition-colors mb-1">
                                {item.name}
                              </span>
                              {/* <span className="block text-[13px] text-zinc-400 font-medium leading-relaxed">
                              {item.desc}
                            </span> */}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="col-span-full border-t border-zinc-900/60 pt-4 mt-1 flex flex-row justify-between items-center">
                      <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-400">
                        <Link
                          href="/services/explore"
                          className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          <span>Explore Services Directory</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <Link
                          href="/insights/industry-events"
                          className="hover:text-rose-500 transition-colors flex items-center gap-1.5"
                        >
                          {/* <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" /> */}
                          <span>Events</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Chat now:</span>
                          <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            Email
                          </a>
                          <span className="text-zinc-800">•</span>
                          <a
                            href="https://wa.me/447473063543"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                      {/* 
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                      <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
                        <a
                          href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="LinkedIn"
                        >
                          <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61579126233218"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Facebook"
                        >
                          <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.instagram.com/devopstrio_offcl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Instagram"
                        >
                          <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.youtube.com/@Devopstrioltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="YouTube"
                        >
                          <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                      </div>
                    </div>
                    */}
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                        <div className="flex items-center gap-4 border-l border-zinc-800 pl-4">
                          <a
                            href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://www.facebook.com/profile.php?id=61579126233218"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Facebook
                          </a>
                          <a
                            href="https://www.instagram.com/devopstrio_offcl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://www.youtube.com/@Devopstrioltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              onMouseEnter={() => setActiveMenu("industries")}
            >
              <Link
                href="/industries"
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-[0.3px] text-white hover:text-rose-500 transition-colors"
              >
                Industries <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "industries" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                  <div className="animate-fadeIn bg-black border border-zinc-900 rounded-2xl pt-8 px-8 pb-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr] gap-x-4 xl:gap-x-8 gap-y-3 text-left relative">

                    {/* Gloss reflection line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent pointer-events-none" />

                    {/* Left Callout Box (Industries Interactive Blur & Expand) */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 p-6 flex flex-col justify-between min-h-[320px] h-full group bg-[#09090C] shadow-2xl transition-all duration-500 hover:border-red-500/50 cursor-pointer">
                      <img
                        src="/assets/wavebg/navbar/industriesdrop.png"
                        alt="Compliance First"
                        className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-70 group-hover:blur-md scale-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:bg-black/75 transition-all duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <h4 className="text-xl font-bold leading-snug text-white tracking-tight mb-2 font-sans drop-shadow-md">
                          Compliance <span className="text-red-500">First</span> Solutions
                        </h4>
                        <div className="w-10 h-[3px] bg-red-600 rounded-full my-3" />
                        
                        {/* Description Text: Hidden initially, expands on hover */}
                        <div className="transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 overflow-hidden">
                          <p className="text-[11px] text-zinc-200 font-medium leading-relaxed pt-1">
                            Deploying regulatory-safe software runtimes and enterprise digital platforms across international sectors.
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/industries"
                        onClick={() => setActiveMenu(null)}
                        className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-rose-400 transition-colors mt-6 group/cta"
                      >
                        <span>EXPLORE ALL DOMAINS</span>
                        <span className="text-rose-500 text-sm group-hover/cta:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </Link>
                    </div>

                    {/* Right industries list grid */}
                    <div>
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-4">Target Sectors</span>
                      <div className="max-h-[380px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
                          {industriesList.map((ind) => (
                            <Link
                              key={ind.name}
                              href={ind.href}
                              onClick={() => setActiveMenu(null)}
                              className="group/ind block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                            >
                              <span className="block text-[15px] font-semibold text-white group-hover/ind:text-rose-500 transition-colors mb-1">
                                {ind.name}
                              </span>
                              <span className="block text-[13px] text-zinc-400 font-medium leading-relaxed">
                                {ind.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="col-span-full border-t border-zinc-900/60 pt-4 mt-1 flex flex-row justify-between items-center">
                      <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-400">
                        <Link
                          href="/insights/industry-events"
                          className="hover:text-rose-500 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          <span>Events</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Chat now:</span>
                          <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            Email
                          </a>
                          <span className="text-zinc-800">•</span>
                          <a
                            href="https://wa.me/447473063543"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                      {/* 
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                      <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
                        <a
                          href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="LinkedIn"
                        >
                          <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61579126233218"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Facebook"
                        >
                          <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.instagram.com/devopstrio_offcl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Instagram"
                        >
                          <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.youtube.com/@Devopstrioltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="YouTube"
                        >
                          <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                      </div>
                    </div>
                    */}
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                        <div className="flex items-center gap-4 border-l border-zinc-800 pl-4">
                          <a
                            href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://www.facebook.com/profile.php?id=61579126233218"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Facebook
                          </a>
                          <a
                            href="https://www.instagram.com/devopstrio_offcl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://www.youtube.com/@Devopstrioltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Ecosystem Dropdown */}
            <div
              onMouseEnter={() => setActiveMenu("ecosystem")}
            >
              <Link
                href="/ecosystem"
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-[0.3px] text-white hover:text-rose-500 transition-colors"
              >
                Ecosystem <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "ecosystem" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "ecosystem" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                  <div className="animate-fadeIn bg-black border border-zinc-900 rounded-2xl pt-8 px-8 pb-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[220px_200px_1fr] xl:grid-cols-[280px_240px_1fr] gap-x-4 xl:gap-x-8 gap-y-3 text-left relative">

                    {/* Gloss reflection line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

                    {/* Visual Promo Column (Ecosystem Interactive Blur & Expand) */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 p-6 flex flex-col justify-between min-h-[320px] h-full group bg-[#09090C] shadow-2xl transition-all duration-500 hover:border-red-500/50 cursor-pointer">
                      <img
                        src="/assets/wavebg/navbar/ecosystemdrop.png"
                        alt="Ecosystem Infrastructure"
                        className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-70 group-hover:blur-md scale-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:bg-black/75 transition-all duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <h4 className="text-xl font-bold leading-snug text-white tracking-tight mb-2 font-sans drop-shadow-md">
                          Everything You Need to <span className="text-red-500">Scale</span>
                        </h4>
                        <div className="w-10 h-[3px] bg-red-600 rounded-full my-3" />
                        
                        {/* Description Text: Hidden initially, expands on hover */}
                        <div className="transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 overflow-hidden">
                          <p className="text-[11px] text-zinc-200 font-medium leading-relaxed pt-1">
                            Explore our world-class technology alliances, research innovation labs, and custom platforms built to transform your enterprise.
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/ecosystem"
                        onClick={() => setActiveMenu(null)}
                        className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-rose-400 transition-colors mt-6 group/cta"
                      >
                        <span>EXPLORE ECOSYSTEM</span>
                        <span className="text-rose-500 text-sm group-hover/cta:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </Link>
                    </div>

                    {/* Middle sidebar with categories */}
                    <div className="flex flex-col border-r border-zinc-900 pr-4 gap-1">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block px-3 mb-2">Ecosystem Pillars</span>
                      {ecosystemCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={cat.href}
                          onMouseEnter={() => setActiveEcoCategory(cat.id)}
                          onClick={() => {
                            setActiveMenu(null);
                          }}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-[15px] font-semibold transition-all duration-200 text-left ${activeEcoCategory === cat.id
                            ? "bg-zinc-900 text-rose-500"
                            : "text-zinc-300 hover:text-white hover:bg-zinc-900/30"
                            }`}
                        >
                          <span>{cat.name}</span>
                          {activeEcoCategory === cat.id && <span className="text-[11px]">&rarr;</span>}
                        </Link>
                      ))}

                      {/* External Link: Visit AI Hub */}
                      <div className="mt-2 pt-2 border-t border-zinc-900/80">
                        <a
                          // href="https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net"
                          href="https://devopstrioaiservices-e6dnggh5gxehh9d0.southindia-01.azurewebsites.net"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-[14px] font-bold transition-all duration-300 text-left border border-rose-500/20 bg-rose-500/[0.03] text-rose-400 hover:text-white hover:bg-rose-600 hover:border-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.06)] hover:shadow-[0_0_18px_rgba(244,63,94,0.2)] group"
                        >
                          <span className="flex items-center gap-2">

                            <span>Devopstrio's AI</span>
                          </span>
                          <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                        </a>
                      </div>
                    </div>

                    {/* Right panel with active sub-items */}
                    <div className="flex flex-col">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">Sub-Pages & Links</span>
                      <div className="max-h-[420px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {ecosystemCategories.find(c => c.id === activeEcoCategory)?.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group/subitem block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                            >
                              <span className="block text-[15px] font-semibold text-white group-hover/subitem:text-rose-500 transition-colors mb-1">
                                {item.name}
                              </span>
                              {/* <span className="block text-[13px] text-zinc-400 font-medium leading-relaxed">
                              {item.desc}
                            </span> */}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="col-span-full border-t border-zinc-900/60 pt-4 mt-1 flex flex-row justify-between items-center">
                      <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-400">
                        <Link
                          href="/ecosystem/landing-zone"
                          className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          <span>Landing Zone</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <Link
                          href="/insights/industry-events"
                          className="hover:text-rose-500 transition-colors flex items-center gap-1.5"
                        >
                          <span>Events</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Chat now:</span>
                          <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            Email
                          </a>
                          <span className="text-zinc-800">•</span>
                          <a
                            href="https://wa.me/447473063543"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                      {/* 
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                      <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
                        <a
                          href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="LinkedIn"
                        >
                          <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61579126233218"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Facebook"
                        >
                          <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.instagram.com/devopstrio_offcl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Instagram"
                        >
                          <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.youtube.com/@Devopstrioltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="YouTube"
                        >
                          <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                      </div>
                    </div>
                    */}
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                        <div className="flex items-center gap-4 border-l border-zinc-800 pl-4">
                          <a
                            href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://www.facebook.com/profile.php?id=61579126233218"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Facebook
                          </a>
                          <a
                            href="https://www.instagram.com/devopstrio_offcl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://www.youtube.com/@Devopstrioltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Insights Dropdown */}
            <div
              onMouseEnter={() => setActiveMenu("insights")}
            >
              <Link
                href="/insights"
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-[0.3px] text-white hover:text-rose-500 transition-colors"
              >
                Insights <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "insights" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "insights" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                  <div className="animate-fadeIn bg-black border border-zinc-900 rounded-2xl pt-8 px-8 pb-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[220px_200px_1fr] xl:grid-cols-[280px_240px_1fr] gap-x-4 xl:gap-x-8 gap-y-3 text-left relative">

                    {/* Gloss reflection line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

                    {/* Visual Promo Column (Insights Interactive Blur & Expand) */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 p-6 flex flex-col justify-between min-h-[320px] h-full group bg-[#09090C] shadow-2xl transition-all duration-500 hover:border-red-500/50 cursor-pointer">
                      <img
                        src="/assets/wavebg/navbar/insightsdrop.png"
                        alt="Thought Leadership"
                        className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-70 group-hover:blur-md scale-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:bg-black/75 transition-all duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <h4 className="text-xl font-bold leading-snug text-white tracking-tight mb-2 font-sans drop-shadow-md">
                          Devopstrio <span className="text-red-500">Insights</span>
                        </h4>
                        <div className="w-10 h-[3px] bg-red-600 rounded-full my-3" />
                        
                        {/* Description Text: Hidden initially, expands on hover */}
                        <div className="transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 overflow-hidden">
                          <p className="text-[11px] text-zinc-200 font-medium leading-relaxed pt-1">
                            Read deep-dive articles, SRE blueprints, and research papers from our global engineering teams.
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/insights"
                        onClick={() => setActiveMenu(null)}
                        className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-rose-400 transition-colors mt-6 group/cta"
                      >
                        <span>ALL PUBLICATIONS</span>
                        <span className="text-rose-500 text-sm group-hover/cta:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </Link>
                    </div>

                    {/* Middle sidebar with dynamic sections */}
                    <div className="flex flex-col border-r border-zinc-900 pr-4 gap-1">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block px-3 mb-2">Insights Hubs</span>
                      {insightsSections.map((sec) => (
                        <button
                          key={sec.slug}
                          onMouseEnter={() => setActiveInsightsSection(sec.slug)}
                          onClick={() => {
                            setActiveMenu(null);
                          }}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-[15px] font-semibold transition-all duration-200 text-left ${activeInsightsSection === sec.slug
                            ? "bg-zinc-900 text-rose-500"
                            : "text-zinc-300 hover:text-white hover:bg-zinc-900/30"
                            }`}
                        >
                          <span>{sec.name}</span>
                          {activeInsightsSection === sec.slug && <span className="text-[11px]">&rarr;</span>}
                        </button>
                      ))}
                    </div>

                    {/* Right panel with active section categories */}
                    <div className="flex flex-col">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">Categories</span>
                      <div className="max-h-[420px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {insightsSections.find(s => s.slug === activeInsightsSection)?.categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/insights/${cat.slug}`}
                              onClick={() => setActiveMenu(null)}
                              className="group/subitem block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                            >
                              <span className="block text-[15px] font-semibold text-white group-hover/subitem:text-rose-500 transition-colors mb-1">
                                {cat.name}
                              </span>
                              {/* {cat.desc && (
                              <span className="block text-[13px] text-zinc-400 font-medium leading-relaxed">
                                {cat.desc}
                              </span>
                            )} */}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="col-span-full border-t border-zinc-900/60 pt-4 mt-1 flex flex-row justify-between items-center">
                      <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-400">
                        <Link
                          href="/insights/industry-events"
                          className="hover:text-rose-500 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          <span>Events</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Chat now:</span>
                          <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            Email
                          </a>
                          <span className="text-zinc-800">•</span>
                          <a
                            href="https://wa.me/447473063543"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                      {/* 
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                      <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
                        <a
                          href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="LinkedIn"
                        >
                          <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61579126233218"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Facebook"
                        >
                          <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.instagram.com/devopstrio_offcl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Instagram"
                        >
                          <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.youtube.com/@Devopstrioltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="YouTube"
                        >
                          <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                      </div>
                    </div>
                    */}
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                        <div className="flex items-center gap-4 border-l border-zinc-800 pl-4">
                          <a
                            href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://www.facebook.com/profile.php?id=61579126233218"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Facebook
                          </a>
                          <a
                            href="https://www.instagram.com/devopstrio_offcl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://www.youtube.com/@Devopstrioltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
            <Link href="/careers" onMouseEnter={() => setActiveMenu(null)} className="px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-[0.3px] text-white hover:text-rose-500 transition-colors">
              Careers
            </Link>
            {/* About Dropdown */}
            <div
              onMouseEnter={() => setActiveMenu("about")}
            >
              <Link
                href="/about"
                onClick={() => setActiveMenu(null)}
                className="flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-[0.3px] text-white hover:text-rose-500 transition-colors"
              >
                About <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "about" ? "rotate-180" : ""}`} />
              </Link>
              {activeMenu === "about" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                  <div className="animate-fadeIn bg-black border border-zinc-900 rounded-2xl pt-8 px-8 pb-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr] gap-x-4 xl:gap-x-8 gap-y-3 text-left relative">

                    {/* Gloss reflection line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent pointer-events-none" />

                    {/* Left Callout Box (About Interactive Blur & Expand) */}
                    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 p-6 flex flex-col justify-between min-h-[320px] h-full group bg-[#09090C] shadow-2xl transition-all duration-500 hover:border-red-500/50 cursor-pointer">
                      <img
                        src="/assets/wavebg/navbar/aboutdrop.png"
                        alt="Our Foundation"
                        className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-70 group-hover:blur-md scale-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:bg-black/75 transition-all duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <h4 className="text-xl font-bold leading-snug text-white tracking-tight mb-2 font-sans drop-shadow-md">
                          Our <span className="text-red-500">Engineering</span> Foundation
                        </h4>
                        <div className="w-10 h-[3px] bg-red-600 rounded-full my-3" />
                        
                        {/* Description Text: Hidden initially, expands on hover */}
                        <div className="transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 overflow-hidden">
                          <p className="text-[11px] text-zinc-200 font-medium leading-relaxed pt-1">
                            Learn about our values, engineering philosophy, global presence, and the leadership team driving enterprise innovation.
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/about"
                        onClick={() => setActiveMenu(null)}
                        className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-rose-400 transition-colors mt-6 group/cta"
                      >
                        <span>ABOUT OVERVIEW</span>
                        <span className="text-rose-500 text-sm group-hover/cta:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </Link>
                    </div>

                    {/* Right about list grid */}
                    <div>
                      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-4">Corporate Directory</span>
                      <div className="max-h-[380px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
                          {aboutList.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group/about block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                            >
                              <span className="block text-[15px] font-semibold text-white group-hover/about:text-rose-500 transition-colors mb-1">
                                {item.name}
                              </span>
                              <span className="block text-[13px] text-zinc-400 font-medium leading-relaxed">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="col-span-full border-t border-zinc-900/60 pt-4 mt-1 flex flex-row justify-between items-center">
                      <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-400">
                        <Link
                          href="/insights/industry-events"
                          className="hover:text-rose-500 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          <span>Events</span>
                        </Link>
                        <span className="text-zinc-800">|</span>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Chat now:</span>
                          <a
                            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            Email
                          </a>
                          <span className="text-zinc-800">•</span>
                          <a
                            href="https://wa.me/447473063543"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors text-zinc-400"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                      {/* 
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                      <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
                        <a
                          href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="LinkedIn"
                        >
                          <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61579126233218"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Facebook"
                        >
                          <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.instagram.com/devopstrio_offcl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="Instagram"
                        >
                          <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                        <a
                          href="https://www.youtube.com/@Devopstrioltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200 hover:scale-110"
                          title="YouTube"
                        >
                          <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-8 h-8 object-contain transition-all duration-200" />
                        </a>
                      </div>
                    </div>
                    */}
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">Connect With Us</span>
                        <div className="flex items-center gap-4 border-l border-zinc-800 pl-4">
                          <a
                            href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://www.facebook.com/profile.php?id=61579126233218"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Facebook
                          </a>
                          <a
                            href="https://www.instagram.com/devopstrio_offcl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://www.youtube.com/@Devopstrioltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-1.5 xl:gap-3">
            <div
              onMouseEnter={() => setActiveMenu("contact")}
              className="hidden sm:block relative"
            >
              <Link
                href="/contact"
                className="inline-flex nav-contact-btn items-center gap-1.5"
              >
                Contact Us <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "contact" ? "rotate-180" : ""}`} />
              </Link>

              {activeMenu === "contact" && (
                <div className="absolute right-0 top-full mt-3 w-[260px] pointer-events-auto z-50">
                  <div className="animate-fadeIn bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.95)] relative overflow-hidden flex flex-col gap-1">
                    {/* Gloss reflection line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent pointer-events-none" />

                    <Link
                      href="/contact#contact-form"
                      onClick={() => {
                        setActiveMenu(null);
                        setTimeout(() => window.dispatchEvent(new HashChangeEvent("hashchange")), 100);
                      }}
                      className="group flex flex-col p-3 rounded-xl hover:bg-zinc-900 transition-colors"
                    >
                      <span className="text-[14px] font-bold text-white group-hover:text-rose-500 transition-colors flex items-center justify-between mb-1">
                        Connect Us <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-rose-500 transition-colors" />
                      </span>
                      <span className="text-[11px] text-zinc-400 font-medium">Reach out to our expert team</span>
                    </Link>

                    <button
                      onClick={() => {
                        setActiveMenu(null);
                        window.location.hash = "contact";
                        setTimeout(() => window.dispatchEvent(new HashChangeEvent("hashchange")), 50);
                      }}
                      className="group flex flex-col p-3 rounded-xl hover:bg-zinc-900 transition-colors w-full text-left"
                    >
                      <span className="text-[14px] font-bold text-white group-hover:text-rose-500 transition-colors flex items-center justify-between mb-1 w-full">
                        Quick Quote <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-rose-500 transition-colors" />
                      </span>
                      <span className="text-[11px] text-zinc-400 font-medium">Get a tailored estimate</span>
                    </button>

                    <div className="h-[1px] bg-zinc-900/80 my-1 mx-2" />

                    <button
                      onClick={() => {
                        setActiveMenu(null);
                        window.location.hash = "schedule-call";
                        setTimeout(() => window.dispatchEvent(new HashChangeEvent("hashchange")), 50);
                      }}
                      className="group flex flex-col p-3 rounded-xl hover:bg-zinc-900 transition-colors w-full text-left"
                    >
                      <span className="text-[14px] font-bold text-white group-hover:text-rose-500 transition-colors flex items-center justify-between mb-1 w-full">
                        Schedule a Call <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-rose-500 transition-colors" />
                      </span>
                      <span className="text-[11px] text-zinc-400 font-medium">Book a meeting instantly</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 top-[72px] z-40 bg-[#000000]/98 backdrop-blur-lg flex flex-col p-6 border-t border-zinc-900 pointer-events-auto animate-fadeIn lg:hidden">
            <div className="flex flex-col gap-6 overflow-y-auto overscroll-contain pb-8">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Services</span>
                <div className="flex flex-col gap-3 pl-2">
                  {servicesList.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Industries</span>
                <div className="flex flex-col gap-3 pl-2">
                  {industriesList.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Ecosystem</span>
                <div className="flex flex-col gap-3 pl-2">
                  {ecosystemMobileList.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Insights</span>
                <div className="flex flex-col gap-3 pl-2">
                  <Link
                    href="/insights"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 font-bold transition-colors"
                  >
                    Insights Hub
                  </Link>
                  {insightsSections.flatMap(s => s.categories).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/insights/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-zinc-900 my-2" />

              <Link
                href="/#careers"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-zinc-200 hover:text-white"
              >
                Careers
              </Link>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">About</span>
                <div className="flex flex-col gap-3 pl-2">
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 font-bold transition-colors"
                  >
                    About Overview
                  </Link>
                  {aboutList.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center nav-contact-btn w-full"
              >
                Contact Us <ArrowUpRight size={14} />
              </Link>

              {/* Mobile Drawer Social Footer */}
              <div className="mt-8 flex justify-center gap-6 border-t border-zinc-900 pt-6">
                <a href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
                  <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain transition-all duration-200" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579126233218" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
                  <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain transition-all duration-200" />
                </a>
                <a href="https://www.instagram.com/devopstrio_offcl/" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
                  <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-8 h-8 object-contain transition-all duration-200" />
                </a>
                <a href="https://www.youtube.com/@Devopstrioltd" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
                  <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-8 h-8 object-contain transition-all duration-200" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
