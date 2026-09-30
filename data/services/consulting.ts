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
      description: "Auditing application codebases, evaluating databases, and finding architectural bottlenecks for enterprise modernization.",
      items: [
        "Code and schema validation checks",
        "Database capacity assessment logs",
        "Software delivery speed analysis"
      ],
      href: "/services/it-consulting/technology-consulting"
    },
    {
      slug: "enterprise-architecture",
      title: "Enterprise Cloud Architecture",
      description: "Designing reliable, secure multi-cloud system diagrams, resilient microservices, and communication layers.",
      items: [
        "High-availability network diagrams",
        "API gateway routing specifications",
        "Identity access management rules"
      ],
      href: "/services/it-consulting/enterprise-architecture"
    },
    {
      slug: "cloud-consulting",
      title: "Cloud Strategy & Consulting",
      description: "Evaluating multi-cloud readiness, cloud provider selection, and phased migration pathways for AWS, Azure, and GCP.",
      items: [
        "Cloud readiness assessments",
        "TCO and ROI forecasting models",
        "Vendor evaluation & licensing strategy"
      ],
      href: "/services/it-consulting/cloud-consulting"
    },
    {
      slug: "ai-consulting",
      title: "AI Strategy & Advisory",
      description: "Formulating enterprise AI roadmaps, evaluating foundation models, and establishing AI governance and safety standards.",
      items: [
        "Executive AI roadmap & business case formulation",
        "Foundation model evaluation & ROI modeling",
        "Enterprise AI safety & governance frameworks"
      ],
      href: "/services/it-consulting/ai-consulting"
    },
    {
      slug: "cybersecurity-consulting",
      title: "Cybersecurity Consulting & Audits",
      description: "Comprehensive vulnerability analysis, Zero-Trust posture reviews, and regulatory compliance gap assessments.",
      items: [
        "ISO 27001 / SOC 2 alignment audits",
        "Zero-Trust architecture reviews",
        "Threat modeling & risk mitigation plans"
      ],
      href: "/services/it-consulting/cybersecurity-consulting"
    },
    {
      slug: "digital-transformation-consulting",
      title: "Digital Transformation Consulting",
      description: "Guiding organizations through legacy modernization, automated workflows, and digital business model evolution.",
      items: [
        "Legacy system modernization roadmaps",
        "Business process automation blueprints",
        "Digital workflow optimization plans"
      ],
      href: "/services/it-consulting/digital-transformation-consulting"
    },
    {
      slug: "it-strategy-roadmap",
      title: "IT Strategy & Roadmap Planning",
      description: "Developing executive IT strategic roadmaps that align technology investments with business objectives and growth.",
      items: [
        "3-5 year technology master plans",
        "IT portfolio & vendor rationalization",
        "Budget allocation & executive KPIs"
      ],
      href: "/services/it-consulting/it-strategy-roadmap"
    },
    {
      slug: "technology-assessment",
      title: "Technology Assessment & Code Audits",
      description: "Conducting thorough codebase, architecture, technical debt, and scalability assessments with actionable remediation paths.",
      items: [
        "Full-stack codebase & dependency audits",
        "High-concurrency scalability bottleneck analysis",
        "Technical debt remediation blueprints"
      ],
      href: "/services/it-consulting/technology-assessment"
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
  },
  "cloud-consulting": {
    slug: "cloud-consulting",
    title: "Cloud Consulting UK",
    metaTitle: "Cloud Consulting UK | Expert Cloud Strategy & Migration",
    metaDescription: "Trusted cloud consulting UK experts helping businesses migrate, optimize, and scale on Azure, AWS, and GCP. Get secure, cost-effective cloud solutions today.",
    heroSubtitle: "Cloud consulting uk helps businesses plan, build, and manage cloud environments that are secure, flexible, and ready to grow.",
    overviewHeading: "Transforming operations with Cloud Consulting",
    whatIsHeading: "What is Cloud Consulting UK?",
    whatIsDescription: "Cloud consulting uk helps businesses plan, build, and manage cloud environments that are secure, flexible, and ready to grow. It brings computing, storage, and connectivity together, helping teams move away from costly hardware, adapt resources as needs change, protect important workloads, and run day-to-day operations more smoothly with practical cloud solutions.",
    challenge: "Solving Architecture Bloat & Stack Overlap",
    problemTitle: "Architecture Bloat & Stack Overlap",
    problemPoints: [
      "Unnecessary SaaS subscriptions and server costs across separate teams.",
      "Unclear cloud migration plans can delay transformation across teams.",
      "Complex custom systems when a simpler SaaS option works."
    ],
    solution: "We provide structured cloud strategy, automated Infrastructure as Code blueprints, and cloud cost optimization across AWS, Azure, and GCP.",
    enterpriseTitle: "Enterprise-Level Cloud Consulting UK",
    features: [
      "Multi-Cloud Readiness Assessments across AWS, Azure, and GCP",
      "Infrastructure as Code (IaC) modular templates with Terraform",
      "Continuous compliance alignment with SOC 2, ISO 27001, and HIPAA"
    ],
    benefits: [
      "Faster release cycles with up to 45% less time spent on deployments",
      "Complete system visibility with real-time incident alerts and monitoring",
      "Fully reviewed infrastructure designed to meet SOC-2 and regulatory requirements"
    ],
    deliveryApproach: [
      "Cloud Readiness Audit: Analyzing existing workloads, dependency maps, and TCO projections.",
      "Target Architecture Design: Architecting multi-region landing zones and automated CI/CD deployment pipelines.",
      "Execution & Handover: Hands-on migration, telemetry monitoring integration, and engineering team training."
    ],
    techStack: [
      { name: "AWS / Azure / GCP", desc: "Enterprise hyperscaler cloud platforms." },
      { name: "Terraform / OpenTofu", desc: "Modular Infrastructure as Code blueprints." },
      { name: "OpenTelemetry / Datadog", desc: "Unified cloud observability and real-time alerts." }
    ],
    caseStudy: {
      title: "Cloud Transformation & FinOps Migration for UK Enterprise",
      desc: "Delivered a comprehensive cloud strategy and migration blueprint, lowering infrastructure costs by 38% and accelerating deployment cycles.",
      metrics: [
        { value: "45%", label: "Deployment Time Reduction" },
        { value: "38%", label: "Cloud Spend Savings" },
        { value: "99.99%", label: "Target Availability SLA" }
      ]
    },
    faqs: [
      {
        q: "What sets Devopstrio’s Cloud Consulting uk approach apart?",
        a: "We bring together practical automation, skilled cloud engineers, and ready-to-use Infrastructure as Code (IaC) modules to provide Cloud Consulting UK services faster, while keeping your data secure and your systems easy to monitor."
      },
      {
        q: "How do you track results and performance across Cloud Consulting projects?",
        a: "We monitor key measures such as deployment time, application speed, SLA performance, resource usage, and security checks to show clear and measurable results."
      },
      {
        q: "What security measures are included in your Cloud Consulting setup?",
        a: "We apply role-based access controls, automate secret updates, configure network firewalls, and carry out regular vulnerability checks across your cloud infrastructure to help keep systems secure."
      },
      {
        q: "Will this Cybersecurity Consulting service uk work with our existing on-premise systems?",
        a: "Absolutely. Our team designs secure API connectors, reliable data sync pipelines, and hybrid network links (such as site-to-site VPNs or Direct Connect) so your setup works smoothly alongside your current on-premise infrastructure."
      },
      {
        q: "How do you manage sudden traffic surges for Cloud Consulting systems?",
        a: "We set up horizontal pod autoscaling (HPA) along with smart load balancing, so resources scale up or down automatically based on CPU usage, memory, or incoming request volume."
      },
      {
        q: "What is the usual timeframe for implementing Cloud Consulting UK?",
        a: "Most projects can be completed within 4 to 8 weeks, based on the existing systems, integration needs, and overall complexity of the current infrastructure."
      },
      {
        q: "Do you offer training and clear handover guidance for our team?",
        a: "Yes. We provide clear architecture plans, practical setup guides, and hands-on sessions with your team to make the move to your new cloud environment simple and smooth."
      },
      {
        q: "How do you monitor performance and response times for Cloud Consulting UK?",
        a: "We use OpenTelemetry to collect traces, logs, and performance data, then bring them into central dashboards such as Grafana or Datadog for clear, real-time monitoring."
      },
      {
        q: "What compliance standards can you support Cloud Consulting UK?",
        a: "Our cloud setups can be aligned with SOC 2, ISO 27001, HIPAA, and GDPR requirements, with built-in encryption and audit logging to help protect data and support compliance needs."
      },
      {
        q: "What cost savings can you achieve with Cloud Consulting UK?",
        a: "Businesses can often reduce manual operations by 30% to 50%, improve resource use, and lower cloud hosting costs through smart scaling and caching."
      }
    ]
  },
  "cybersecurity-consulting": {
    slug: "cybersecurity-consulting",
    title: "Cybersecurity Consulting UK",
    metaTitle: "Cybersecurity Consulting UK | Trusted Security Experts",
    metaDescription: "Protect your business with expert cybersecurity consulting UK companies rely on. From risk assessments to threat protection, we help you stay secure, compliant, and resilient.",
    heroSubtitle: "Cybersecurity consulting UK helps businesses protect their digital systems, networks, and user accounts from cyber threats and data breaches.",
    overviewHeading: "Transforming your business with Cybersecurity Consulting UK",
    whatIsHeading: "What is Cybersecurity Consulting UK?",
    whatIsDescription: "Cybersecurity consulting UK helps businesses protect their digital systems, networks, and user accounts from cyber threats and data breaches. It strengthens your security through regular vulnerability checks, controlled access, and compliance with recognized standards such as SOC 2, ISO 27001, and HIPAA. Explore our managed security operations for reliable 24/7 protection and ongoing security support.",
    challenge: "Solving Architecture Bloat & Tool Overlap",
    problemTitle: "Architecture Bloat & Tool Overlap",
    problemPoints: [
      "Unnecessary security tools and license costs across disconnected teams.",
      "Unclear security strategies causing delays in risk reduction efforts.",
      "Complex custom-built systems when a simpler security platform works."
    ],
    solution: "We deliver comprehensive threat audits, zero-trust architectures, automated compliance scanning, and proactive SOC advisory.",
    enterpriseTitle: "Enterprise-Grade Cybersecurity Consulting UK",
    features: [
      "Zero-Trust Network Access (ZTNA) and strict role-based access controls",
      "Automated continuous vulnerability scanning and secrets management",
      "SOC-2, ISO 27001, HIPAA, and GDPR regulatory compliance gap remediation"
    ],
    benefits: [
      "Faster threat detection and up to 45% reduction in response times",
      "Clear security visibility with real-time threat monitoring and alerts",
      "Fully-reviewed security environments aligned with SOC-2 and compliance standards"
    ],
    deliveryApproach: [
      "Security & Posture Audit: Scanning networks, application code, and cloud access policies for vulnerabilities.",
      "Zero-Trust Remediation: Designing least-privilege IAM, automated secrets rotation, and network segmentation.",
      "Managed SecOps Handover: Setting up SIEM alerting dashboards, incident playbooks, and security team training."
    ],
    techStack: [
      { name: "Wazuh / Splunk", desc: "SIEM log monitoring and real-time threat detection." },
      { name: "HashiCorp Vault", desc: "Automated secret management and dynamic encryption." },
      { name: "Trivy / Snyk", desc: "Continuous container and codebase vulnerability scanning." }
    ],
    caseStudy: {
      title: "Enterprise Zero-Trust Security Overhaul for UK Financial Provider",
      desc: "Architected end-to-end zero-trust network boundaries, automated secrets rotation, and achieved full SOC 2 Type II certification.",
      metrics: [
        { value: "45%", label: "Faster Threat Detection & MTTR" },
        { value: "100%", label: "SOC 2 Compliance Alignment" },
        { value: "0", label: "Security Breaches / Leaks" }
      ]
    },
    faqs: [
      {
        q: "What makes Devopstrio’s Cybersecurity Consulting UK approach different?",
        a: "We bring together smart automation, experienced security engineers, and ready-made security modules to deliver Cybersecurity Consulting UK solutions efficiently, while helping protect sensitive data and maintain clear visibility across your systems."
      },
      {
        q: "How do you measure results and performance across Cybersecurity Consulting UK projects?",
        a: "We monitor important measures such as response times, security coverage, SLA performance, system efficiency, and vulnerability scan results to track progress and deliver clear, measurable value."
      },
      {
        q: "What security measures are included in your Cybersecurity Consulting UK setup?",
        a: "We use strong access controls, automated password and secret updates, network firewalls, and regular vulnerability checks to help protect your systems across every layer."
      },
      {
        q: "Can your Cybersecurity Consulting service UK connect with existing on-premise systems?",
        a: "Yes. We can use secure APIs, data integration, and hybrid network connections such as site-to-site VPNs or Direct Connect to link modern security solutions with your existing infrastructure."
      },
      {
        q: "How do you manage security workloads during traffic spikes?",
        a: "We use flexible scaling and load balancing to adjust resources automatically as demand changes, helping maintain stable performance during busy periods and higher request volumes."
      },
      {
        q: "What is the usual timeframe for starting Cybersecurity Consulting UK?",
        a: "Most projects take around 4 to 8 weeks to launch, depending on your current systems, integration needs, security requirements, and the complexity of your existing infrastructure."
      },
      {
        q: "Do you offer team training and clear handover support?",
        a: "Yes. We provide easy-to-follow security plans, setup guides, and practical workshops with your team to help them understand the new environment and make the transition smooth."
      },
      {
        q: "How do you monitor security performance and response times?",
        a: "We use Open Telemetry to capture traces, logs, and key metrics, bringing them together in dashboards such as Grafana or Datadog for simple, real-time security monitoring."
      },
      {
        q: "What compliance standards can your Cybersecurity Consulting service support UK?",
        a: "Our security solutions can support SOC 2, ISO 27001, HIPAA, and GDPR requirements, with built-in encryption and audit logging to help protect sensitive information and meet key compliance needs."
      },
      {
        q: "What savings can businesses achieve with Cybersecurity Consulting UK?",
        a: "Companies can often cut manual security work by 30% to 50%, make better use of existing resources, and reduce infrastructure costs through smarter automation, scaling, and system management."
      }
    ]
  }
};
