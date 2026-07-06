import { ServiceCategory, CapabilityDetail } from "./types";

// Custom premium service copy maps
const premiumServicesCopy: Record<string, {
  subtitle: string;
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
  outcomes: string[];
}> = {
  "ai-data-innovation": {
    subtitle: "Accelerate enterprise value creation by deploying private, highly secure cognitive AI systems, autonomous agentic workflow networks, and low-latency feature stores. We bridge fragmented corporate datasets with custom LLM tunings to unlock automated decisioning at hyper-scale.",
    overviewHeading: "Intelligent cognitive systems engineered for regulatory compliance and numerical precision",
    overviewDesc1: "We design, build, and deploy production-ready AI solutions, including self-correcting multi-agent networks and domain-specialized foundation models. Every platform we build complies with SOC-2 Type II, ISO 27001, and HIPAA mandates, guaranteeing absolute prompt confidentiality and strict corporate data isolation.",
    overviewDesc2: "By interfacing enterprise relational databases with secure vector indexes, we facilitate millisecond-level semantic queries, real-time context-augmented analytics, and automated decision-making engines.",
    ctaTitle: "Co-create your cognitive",
    ctaHighlight: "AI Roadmap & Architecture",
    ctaDesc: "Partner with our principal AI research engineers to evaluate model candidates, run compliance audits on your private datasets, and sketch production-ready RAG topologies.",
    ctaBtnText: "Schedule AI Discovery Session",
    outcomes: [
      "95% reduction in manual document analysis and structured data entry cycles",
      "Continuous model validation with automated feedback loops and drift monitoring",
      "Secure natural-language knowledge queries spanning multi-format legacy databases"
    ]
  },
  "cloud-services": {
    subtitle: "Architect highly available multi-cloud architectures, secure landing zones, and automated platform engineering fabrics across AWS, Azure, and GCP. Partner with our certified consultants to optimize cloud spend and deploy compliant infrastructure.",
    overviewHeading: "High-performance multi-cloud fabrics backed by robust SLA guarantees",
    overviewDesc1: "We engineer resilient, scalable cloud architectures. Our certified migration architects transition mission-critical legacy workloads to modern public and hybrid environments, dramatically reducing network latency and operations overhead.",
    overviewDesc2: "We construct secure landing zones, provision self-healing clusters, and configure cloud cost controllers, backed by proactive FinOps optimization plans.",
    ctaTitle: "Modernize your global",
    ctaHighlight: "Cloud Architecture Fabric",
    ctaDesc: "Book an infrastructure assessment with our lead cloud architects to analyze resource utilization, check security postures, and build migration roadmaps.",
    ctaBtnText: "Consult Principal Cloud Architect",
    outcomes: [
      "35% average reduction in monthly cloud infrastructure bills via FinOps tuning",
      "Zero-downtime database migrations with continuous sync validation and checks",
      "100% compliance alignment with CIS benchmarks and security postures"
    ]
  },
  "devops-automation": {
    subtitle: "Empower developer self-service and maximize engineering velocity with automated GitOps delivery pipelines, cloud-native container orchestration, and predictive site reliability engineering.",
    overviewHeading: "High-velocity platform engineering and automated delivery pipelines",
    overviewDesc1: "We build declarative infrastructure modules, GitOps continuous delivery pipelines, and unified observability panels. Our platforms handle thousands of builds daily with zero queue blockages.",
    overviewDesc2: "By automating code security linting, container builds, and canary rollouts, we enable software teams to ship code securely, predictably, and frequently.",
    ctaTitle: "Automate your software",
    ctaHighlight: "Release & Delivery Pipeline",
    ctaDesc: "Schedule a scoping workshop with our principal DevOps engineers to isolate delivery bottlenecks and build automated infrastructure templates.",
    ctaBtnText: "Schedule DevOps Scoping Session",
    outcomes: [
      "70% reduction in software release cycle times and manual gates",
      "Continuous DevSecOps protection with automated vulnerability blocking",
      "One-click developer workspace creation via standardized templates"
    ]
  },
  "cybersecurity": {
    subtitle: "Harden your digital sovereignty with automated vulnerability scanning, least-privilege IAM federation, continuous security operations, and comprehensive compliance readiness audits.",
    overviewHeading: "Bulletproof digital security with continuous audit and compliance readiness",
    overviewDesc1: "We build secure identity networks, threat detectors, and automated encryption logs. Our setups block external attacks and protect database ingress points from injection exploits.",
    overviewDesc2: "Our security engineers audit cloud permissions, isolate network enclaves, and protect API access credentials under strict regulatory compliance parameters.",
    ctaTitle: "Harden your enterprise",
    ctaHighlight: "Digital Security Posture",
    ctaDesc: "Request a security assessment with our threat leads to identify permission vulnerabilities and evaluate network boundary exposures.",
    ctaBtnText: "Request Security Assessment",
    outcomes: [
      "Zero security breaches and database leaks during external testing sweeps",
      "Continuous automated vulnerability patching across target code repositories",
      "Real-time threat alerts and automated containment actions"
    ]
  },
  "software-development": {
    subtitle: "Develop high-performance enterprise applications, responsive client platforms, and scalable API gateways. We write clean, test-driven code using modern tech stacks.",
    overviewHeading: "Custom software engineering optimized for speed, scale, and longevity",
    overviewDesc1: "We design and develop robust microservice architectures and high-throughput web applications. Our engineers utilize modern runtime environments and follow strict test-driven development practices.",
    overviewDesc2: "From API-first design to responsive frontends, we ensure that every application features excellent page load speeds, clean styling, and scalable structures.",
    ctaTitle: "Architect your custom",
    ctaHighlight: "Enterprise Software Platform",
    ctaDesc: "Connect with our software delivery leads to turn project specifications into high-performance web or mobile applications.",
    ctaBtnText: "Initiate Software Discovery",
    outcomes: [
      "99.9% uptime for core business APIs and transactional systems",
      "Fast page load times and seamless navigation workflows across devices",
      "Clean, modular codebases with high test coverage and documentation"
    ]
  },
  "digital-transformation": {
    subtitle: "Accelerate your corporate evolution by migrating legacy mainframes to cloud-native stacks, automating manual workflows, and enabling agile engineering structures.",
    overviewHeading: "Seamless digital modernization that minimizes operational disruption",
    overviewDesc1: "We partner with corporate stakeholders to refactor legacy technologies, automate manual data entry, and streamline cross-departmental operations.",
    overviewDesc2: "By deploying modern cloud infrastructure and building clean APIs, we unlock corporate agility and enable teams to respond rapidly to market shifts.",
    ctaTitle: "Accelerate your corporate",
    ctaHighlight: "Digital Transformation Roadmap",
    ctaDesc: "Book a consulting session to evaluate your current technology maturity, identify bottlenecks, and plan modernization pathways.",
    ctaBtnText: "Request Modernization Consultation",
    outcomes: [
      "60% improvement in operational efficiency and process turnaround times",
      "Smooth migration from legacy software to scalable cloud components",
      "Comprehensive training and runbooks for internal engineering teams"
    ]
  },
  "data-engineering": {
    subtitle: "Consolidate fragmented data silos into high-performance cloud lakehouses, real-time analytics pipelines, and governed data platforms optimized for BI and AI.",
    overviewHeading: "Robust data architectures built for performance and analytical precision",
    overviewDesc1: "We design and build high-throughput data platforms, real-time event streaming systems, and optimized ETL pipelines. Our architectures scale to handle petabytes of data.",
    overviewDesc2: "By configuring metadata catalogs, lineage tracking, and data quality checkers, we ensure your data remains clean, reliable, and accessible.",
    ctaTitle: "Build your high-performance",
    ctaHighlight: "Enterprise Data Platform",
    ctaDesc: "Schedule an assessment with our lead data engineers to review query performance, optimize warehouse costs, and design lakehouse setups.",
    ctaBtnText: "Consult Data Architect",
    outcomes: [
      "Sub-second query latencies on large analytical datasets",
      "Unified metadata and lineage tracking for complete audit trails",
      "Automated data quality checks preventing bad records from entering dashboards"
    ]
  },
  "managed-services": {
    subtitle: "Delegate infrastructure management, database administration, and 24/7 incident response to our certified on-call reliability engineers.",
    overviewHeading: "Peace of mind with 24/7 outsourced infrastructure management",
    overviewDesc1: "We monitor systems, manage security updates, tune database indexes, and validate backups around the clock. Our support response SLAs are guaranteed.",
    overviewDesc2: "By acting as your virtual site reliability team, we keep your cloud platforms running smoothly while your developers focus on writing code.",
    ctaTitle: "Outsource your cloud",
    ctaHighlight: "Infrastructure Management & Operations",
    ctaDesc: "Talk to our support leads to establish service level agreements, review on-call schedules, and plan backup management.",
    ctaBtnText: "Request Managed Services Proposal",
    outcomes: [
      "24/7 active system monitoring with 15-minute response times for critical issues",
      "Automated system updates and index optimizations with zero downtime",
      "Regular backup restoration tests ensuring recovery timelines are met"
    ]
  },
  "qa-testing": {
    subtitle: "Ensure software reliability with automated end-to-end regression tests, high-concurrency API performance testing, and continuous pipeline checks.",
    overviewHeading: "Shift-left test automation that eliminates bugs before they reach customers",
    overviewDesc1: "We write robust testing scripts, configure parallel test environments, and simulate traffic load spikes. Our test suites integrate into your CI/CD pipelines.",
    overviewDesc2: "By automating QA checks, we help engineering teams release code confidently while maintaining high software quality standards.",
    ctaTitle: "Harden your software",
    ctaHighlight: "Quality & Test Automation Framework",
    ctaDesc: "Book a consult to review test coverage metrics, design automated check scripts, and plan performance load tests.",
    ctaBtnText: "Consult QA Lead",
    outcomes: [
      "98% regression test coverage for core user workflows",
      "Detection of bottleneck thresholds prior to system traffic spikes",
      "Automated pipeline checks blocking code changes containing bugs"
    ]
  },
  "it-consulting": {
    subtitle: "Align technology investments with business objectives. We provide architectural audits, cost optimization strategies, and compliance planning.",
    overviewHeading: "Strategic technology consulting focused on ROI and reliability",
    overviewDesc1: "We conduct detailed technology audits, evaluate cloud service vendors, review security postures, and design high-availability disaster recovery plans.",
    overviewDesc2: "Our consultants deliver actionable roadmaps and code blueprints, helping you make informed decisions about your technical stack and architecture.",
    ctaTitle: "Formulate your strategic",
    ctaHighlight: "IT Architecture & Tech Stack",
    ctaDesc: "Schedule a consultation to assess architecture reliability, optimize licensing costs, and map future tech upgrades.",
    ctaBtnText: "Request Technology Audit",
    outcomes: [
      "Clear, actionable blueprints for next-generation system architectures",
      "Identified opportunities for technology cost optimization and scaling",
      "Comprehensive compliance and security alignment roadmaps"
    ]
  }
};

// Central capability text enhancer (makes challenges, solutions, features, and case studies premium)
export function enrichCapabilityDetail(
  capability: CapabilityDetail,
  serviceSlug: string
): CapabilityDetail {
  const title = capability.title;
  const lowerTitle = title.toLowerCase();

  // Premium text enhancements
  const premiumChallenge = `Implementing production-grade ${lowerTitle} setups in modern enterprise environments regularly reveals complex deployment bottlenecks, configuration drift, security exposures, and scalability limits that impact business agility.`;
  const premiumSolution = `We engineer resilient, secure, and fully automated ${lowerTitle} frameworks. Our configurations integrate directly with your build pipelines, enforce strict validation parameters, and set up real-time telemetry alerts.`;

  const premiumFeatures = capability.features.map(f => {
    if (f.startsWith("Automated environment") || f.toLowerCase().includes("automated deployment")) {
      return `Automated, high-fidelity deployment templates for ${lowerTitle}`;
    }
    if (f.toLowerCase().includes("testing") || f.toLowerCase().includes("validation")) {
      return `Continuous validation, pipeline scanning, and compliance verification checks`;
    }
    return f;
  });

  const premiumBenefits = capability.benefits.map(b => {
    if (b.toLowerCase().includes("improvement") || b.toLowerCase().includes("release")) {
      return `Accelerated release frequency and up to 45% reduction in cycle times`;
    }
    if (b.toLowerCase().includes("observability") || b.toLowerCase().includes("telemetry")) {
      return `Total system trace observability with real-time incident warning alerts`;
    }
    if (b.toLowerCase().includes("compliance") || b.toLowerCase().includes("audited")) {
      return `Fully-audited infrastructure setups aligned with SOC-2 and regulatory frameworks`;
    }
    return b;
  });

  const caseStudyTitle = capability.caseStudy?.title || `Accelerating ${title} operations.`;
  const caseStudyDesc = capability.caseStudy?.desc || `We overhauled our client's ${lowerTitle} setups. By replacing manual operations with secure automation and active log alerts, we achieved high availability and zero configuration drift.`;
  const caseStudyMetrics = capability.caseStudy?.metrics || [
    { value: "45%", label: "Deployment Speed" },
    { value: "100%", label: "Observability Rate" },
    { value: "Zero", label: "Configuration Drift" }
  ];

  return {
    ...capability,
    challenge: capability.challenge.length < 150 ? premiumChallenge : capability.challenge,
    solution: capability.solution.length < 150 ? premiumSolution : capability.solution,
    features: premiumFeatures,
    benefits: premiumBenefits,
    caseStudy: {
      ...capability.caseStudy,
      title: caseStudyTitle,
      desc: caseStudyDesc,
      metrics: caseStudyMetrics
    }
  };
}

export function enrichServiceCategory(
  service: ServiceCategory
): ServiceCategory {
  const premium = premiumServicesCopy[service.slug];
  if (!premium) return service;

  // Enrich capabilities list with premium descriptions
  const enrichedCapabilities = service.capabilities.map(cap => {
    const regItem = premiumServicesCopy[cap.slug] || {};
    return {
      ...cap,
      description: cap.description.length < 100 && regItem.subtitle
        ? regItem.subtitle.split(".")[0] + "."
        : cap.description
    };
  });

  return {
    ...service,
    subtitle: premium.subtitle,
    overviewHeading: premium.overviewHeading,
    overviewDesc1: premium.overviewDesc1,
    overviewDesc2: premium.overviewDesc2,
    ctaTitle: premium.ctaTitle,
    ctaHighlight: premium.ctaHighlight,
    ctaDesc: premium.ctaDesc,
    ctaBtnText: premium.ctaBtnText,
    outcomes: premium.outcomes,
    capabilities: enrichedCapabilities
  };
}
