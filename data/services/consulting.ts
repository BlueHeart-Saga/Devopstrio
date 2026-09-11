import { ServiceCategory, CapabilityDetail } from "./types";

export const consultingService: ServiceCategory = {
  slug: "it-consulting",
  title: "IT Consulting",
  badge: "Technology Strategy",
  subtitle: "Formulate technology strategy, evaluate enterprise architectures, audit cloud security, and draft digital roadmaps.",
  overviewHeading: "Independent technology strategy designed for execution",
  overviewDesc1: "We audit enterprise systems, evaluate vendor cost metrics, and write technical transition plans. Our consulting leads help align software investments with operational metrics.",
  overviewDesc2: "We construct secure architecture designs, run compliance validation tests, and draft software delivery plans to de-risk projects.",
  stats: [
    { value: "50+", label: "Strategic Roadmaps Formulated" },
    { value: "40%+", label: "Average Cost Savings Recommended" },
    { value: "100%", label: "Unbiased Audits Completed" },
    { value: "15+", label: "Enterprise Architectures Audited" }
  ],
  capabilities: [
    {
      slug: "technology-consulting",
      title: "Technology Consulting",
      description: "Auditing application codebases, evaluating databases, and finding architectural bottlenecks.",
      items: ["Code and schema validation checks", "Database capacity assessment logs", "Software delivery speed analysis"],
      href: "/services/it-consulting/technology-consulting"
    },
    {
      slug: "enterprise-architecture",
      title: "Enterprise Cloud Architecture",
      description: "Designing reliable, secure multi-cloud system diagrams and communication layers.",
      items: ["High-availability network diagrams", "API gateway routing specifications", "Identity access management rules"],
      href: "/services/cloud-services/cloud-architecture"
    },
    {
      slug: "cloud-strategy-consulting",
      title: "Cloud Strategy & Roadmap",
      description: "Evaluating multi-cloud readiness, provider selection, and phased migration pathways.",
      items: ["Cloud readiness assessments", "TCO and ROI forecasting", "Vendor evaluation & licensing strategy"],
      href: "/services/cloud-services/cloud-strategy-consulting"
    },
    {
      slug: "platform-engineering-advisory",
      title: "Platform Engineering Strategy",
      description: "Designing self-service developer portals, automated pipelines, and Kubernetes operating models.",
      items: ["Developer experience optimization", "Golden path template design", "Platform governance standards"],
      href: "/services/devops-automation/platform-engineering"
    },
    {
      slug: "security-compliance-audit",
      title: "Security & Compliance Audits",
      description: "Comprehensive vulnerability analysis, Zero-Trust posture reviews, and regulatory gap assessments.",
      items: ["ISO 27001 / SOC 2 alignment", "Zero-Trust architecture reviews", "Threat modeling & risk mitigation"],
      href: "/services/cybersecurity/security-assessment"
    },
    {
      slug: "finops-cost-optimization",
      title: "FinOps & Cloud Cost Optimization",
      description: "Uncovering cloud waste, rightsizing compute resources, and implementing continuous cost controls.",
      items: ["Unit economics visibility", "Reserved instance optimization", "Automated cost anomaly alerts"],
      href: "/services/cloud-services/finops-cost-optimization"
    }
  ],
  outcomes: [
    "Unbiased, executive-ready technical assessment reports",
    "Detailed, phased software transformation project plans",
    "Pruned cloud capacity recommendations saving monthly spend"
  ],
  industries: [
    "Finance: Transaction database architecture plans",
    "Healthcare: Patient data privacy subnet layouts",
    "Logistics: Supply chain tracking systems advice"
  ],
  techStack: [
    { name: "Lucidchart / Draw.io", desc: "Enterprise architecture diagram utilities." },
    { name: "Cast Highlight", desc: "Software health and security scanner." },
    { name: "Jira / Confluence", desc: "Project management and workspace mapping tools." }
  ],
  deliveryFramework: [
    "Phase 1: Discovery & System Audit Interviews",
    "Phase 2: Architectural Mapping & Gap Analysis",
    "Phase 3: Transformation Roadmap Delivery"
  ],
  caseStudies: [
    {
      title: "Enterprise architecture redesign for regional logistics provider.",
      desc: "We audited legacy monoliths, designed a cloud-native microservice diagram, and mapped a 3-phase migration plan. The redesign recommendation reduces server costs by 40%.",
      highlights: [
        "Identified 12 bottleneck databases",
        "Designed secure API connection specs",
        "Formulated multi-region DR strategy"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you evaluate legacy application health?",
      a: "We scan source code repositories for security vulnerabilities, measure complexity scores, and check dependencies for deprecated packages."
    },
    {
      q: "Do you design vendor-neutral architectures?",
      a: "Yes. We focus on open-source standards and containerized solutions (like Kubernetes and Docker) to prevent vendor locks."
    }
  ],
  ctaTitle: "Formulate your digital",
  ctaHighlight: "Technology roadmap",
  ctaDesc: "Book a strategic consultation with our consulting leads to analyze your enterprise architectures and optimize budgets.",
  ctaBtnText: "Request Strategy Consult"
};

export const consultingCapabilities: Record<string, CapabilityDetail> = {
  "technology-consulting": {
    slug: "technology-consulting",
    title: "Technology Consulting",
    heroSubtitle: "Audit application codebases, evaluate database schemas, and identify architectural bottlenecks.",
    challenge: "Enterprise software teams suffer from technical debt, obsolete database structures, and slow deployment cycle speeds.",
    solution: "We perform comprehensive code audits, analyze query execution plans, and measure pipeline throughput metrics.",
    features: [
      "Vulnerability scanning on third-party libraries",
      "Database schema capacity and query index audits",
      "Git commit frequency and build duration metrics"
    ],
    benefits: [
      "Unbiased overview of codebase quality and risks",
      "Clear database tuning recommendations for faster queries",
      "Optimized build pipeline speed-up recommendations"
    ],
    deliveryApproach: [
      "Code Scan: Running automated complexity and security sweeps.",
      "Interview Audits: Consulting with engineering leads about blockers.",
      "Roadmap Handoff: Presenting detailed optimization recommendations."
    ],
    techStack: [
      { name: "SonarQube", desc: "Code quality and security analysis tool." },
      { name: "pgMustard", desc: "PostgreSQL query plan analyzer." },
      { name: "GitClear", desc: "Git development productivity metrics." }
    ],
    caseStudy: {
      title: "Auditing software database schemas for financial application.",
      desc: "We audited an Aurora PostgreSQL setup, added missing database indexes, and restructured 8 complex SQL queries, decreasing CPU usage by 45%.",
      metrics: [
        { value: "45%", label: "Reduction in database CPU usage" },
        { value: "8", label: "Complex SQL queries optimized" },
        { value: "0 ms", label: "Downtime during index additions" }
      ]
    },
    faqs: [
      {
        q: "What coding languages do you audit?",
        a: "We regularly audit TypeScript/JavaScript, Go, Python, Java, C#, and SQL script configurations."
      },
      {
        q: "Do you provide code remediation services?",
        a: "Yes. Our engineering squads can be booked to execute the remediation roadmaps we design."
      }
    ]
  }
};
