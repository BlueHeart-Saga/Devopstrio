import { ServiceCategory, CapabilityDetail } from "./types";

export const transformationService: ServiceCategory = {
  slug: "digital-transformation",
  title: "Digital Transformation",
  badge: "Enterprise Modernization",
  subtitle: "Modernize legacy systems, automate complex business processes, and design intelligent workflows for digital operations.",
  overviewHeading: "Intelligent enterprise workflows designed for agility",
  overviewDesc1: "We partner with corporate executives to digitize legacy systems, replace manual paper processes with automated databases, and connect disparate APIs.",
  overviewDesc2: "We construct secure administrative portals, design real-time workflow schedules, and automate employee reporting cycles, cutting operating friction.",
  stats: [
    { value: "45%+", label: "Operating Cost Reductions" },
    { value: "3M+", label: "Manual Hours Automated" },
    { value: "100%", label: "Process Visibility Gained" },
    { value: "5x", label: "Business Cycle Acceleration" }
  ],
  capabilities: [
    {
      slug: "digital-strategy",
      title: "Digital Strategy & Consulting",
      description: "Map technology ecosystems, identify process bottlenecks, and draft comprehensive, actionable digital transformation roadmaps.",
      items: [
        "Current system technical auditing",
        "Workflow cost-benefit calculations",
        "Phased implementation scheduling"
      ],
      href: "/services/digital-transformation/digital-strategy"
    },
    {
      slug: "enterprise-modernization",
      title: "Enterprise Modernization",
      description: "Upgrade foundational enterprise software, decouple monolithic silos, and transition legacy core platforms to the cloud.",
      items: [
        "Legacy system decoupling & containerization",
        "Cloud-native microservices architecture",
        "Automated CI/CD delivery pipelines"
      ],
      href: "/services/digital-transformation/enterprise-modernization"
    },
    {
      slug: "process-automation",
      title: "Intelligent Process Automation",
      description: "Embed automated robotic workflows, intelligent data pipelines, and self-healing business logic into high-friction operations.",
      items: [
        "End-to-end robotic process automation (RPA)",
        "Automated optical document processing",
        "Real-time exception triage & alerting"
      ],
      href: "/services/digital-transformation/process-automation"
    },
    {
      slug: "intelligent-workflows",
      title: "Intelligent Workflows & Orchestration",
      description: "Connect disparate enterprise software, CRM, and ERP applications into dynamic, event-driven automated workflows.",
      items: [
        "Event-driven workflow state machines",
        "Cross-platform ERP & CRM integrations",
        "Real-time human-in-the-loop task routing"
      ],
      href: "/services/digital-transformation/intelligent-workflows"
    },
    {
      slug: "customer-experience-transformation",
      title: "Customer Experience (CX) Transformation",
      description: "Design and build fast, responsive digital customer portals, mobile experiences, and personalized omnichannel touchpoints.",
      items: [
        "Omnichannel digital portal architectures",
        "Real-time personalization & telemetry",
        "Intuitive, accessible customer interfaces"
      ],
      href: "/services/digital-transformation/customer-experience-transformation"
    },
    {
      slug: "legacy-modernization",
      title: "Legacy Systems Modernization",
      description: "Migrate mainframe codebases and outdated relational databases to modern cloud-native architectures with zero operational disruption.",
      items: [
        "Monolith decomposition into APIs",
        "Microservices architecture refactoring",
        "Continuous automated data validation"
      ],
      href: "/services/digital-transformation/legacy-modernization"
    },
    {
      slug: "business-transformation",
      title: "Business Transformation",
      description: "Re-engineer core business operating models with modern data telemetry, cloud scalability, and digital-first operating practices.",
      items: [
        "Operating model redesign & telemetry",
        "Value-stream mapping & optimization",
        "Scalable technology governance models"
      ],
      href: "/services/digital-transformation/business-transformation"
    },
    {
      slug: "change-management",
      title: "Change Management & Enablement",
      description: "Ensure smooth organization-wide digital adoption with structured training, cultural enablement, and technical coaching.",
      items: [
        "Technical upskilling & staff enablement",
        "Executive change alignment frameworks",
        "Continuous adoption & feedback metrics"
      ],
      href: "/services/digital-transformation/change-management"
    }
  ],
  outcomes: [
    "Drastic reductions in manual paper administrative errors",
    "Complete visibility of operational metrics on custom executive dashboards",
    "Accelerated task execution speeds across global business divisions"
  ],
  industries: [
    "Finance: Legacy ledger modernization and workflow audits",
    "Manufacturing: Supply chain coordination databases",
    "Public Sector: Digital public-facing citizen access portals"
  ],
  techStack: [
    { name: "Node.js / Go", desc: "Engines to write high-speed workflow scripts." },
    { name: "Docker / Kubernetes", desc: "Hosting platform for modernized microservices." },
    { name: "Apache Camel / Kafka", desc: "Data integration systems connecting legacy databases." }
  ],
  deliveryFramework: [
    "Phase 1: Workflow Mapping & System Audit",
    "Phase 2: Microservice Decomposition & API Design",
    "Phase 3: Iterative Migration & User Onboarding"
  ],
  caseStudies: [
    {
      title: "Modernizing property registration system for regional government.",
      desc: "We migrated citizen registration papers to a secure digital portal on AWS GovCloud. The setup cuts registration processing times from 14 days to 4 hours.",
      highlights: [
        "Digitized 4.5M property file entries",
        "Setup secure database access logging rules",
        "Improved citizen portal access speeds by 80%"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you mitigate risks during legacy migrations?",
      a: "We deploy parallel systems that run alongside legacy databases, verifying record consistency before completing final migration cutovers."
    },
    {
      q: "Can you integrate with legacy mainframe systems?",
      a: "Yes. We build custom API broker layers and database adapters to bridge legacy COBOL or AS400 core databases with modern cloud systems."
    }
  ],
  ctaTitle: "Modernize your legacy",
  ctaHighlight: "Business operations",
  ctaDesc: "Book a strategy consult with our digital transformation architects to review your legacy workflows and map out automation designs.",
  ctaBtnText: "Consult Transformation Lead"
};

export const transformationCapabilities: Record<string, CapabilityDetail> = {
  "legacy-modernization": {
    slug: "legacy-modernization",
    title: "Legacy Modernization",
    heroSubtitle: "Decompose monolithic software applications, migrate legacy data formats, and scale cloud-native microservices.",
    challenge: "Legacy enterprise architectures are hard to scale, expensive to maintain, and block integrations with modern AI and data tools.",
    solution: "We rewrite legacy applications into lightweight, API-driven microservices. We configure automated tests and migrate databases in phases.",
    features: [
      "Monolith dependency audits and decomposition blueprints",
      "Phased database migrations utilizing active synchronization replication",
      "API gateway integrations bridging legacy backends with modern frontends"
    ],
    benefits: [
      "Drastic reduction in application hosting and maintenance costs",
      "Rapid release cycles utilizing automated CI/CD pipelines",
      "Easy integration with modern SaaS and database platforms"
    ],
    deliveryApproach: [
      "System Audit: Mapping data pathways and application dependencies.",
      "Microservice Design: Constructing API gateways and container layouts.",
      "Iterative Relocation: Migrating code modules in phases to prevent failures."
    ],
    techStack: [
      { name: "Kubernetes / Docker", desc: "Standardized microservices containers." },
      { name: "Go Language", desc: "High-performance backend API builder." },
      { name: "Kong API Gateway", desc: "Security and routing controller for microservices." }
    ],
    caseStudy: {
      title: "Decomposing retail inventory monolith for logistics provider.",
      desc: "We decomposed a legacy inventory system into Go-based microservices, reducing catalog database lockups and increasing tracking update speeds by 90%.",
      metrics: [
        { value: "90%", label: "Increase in query processing speeds" },
        { value: "0", label: "Inventory database deadlocks" },
        { value: "45%+", label: "Saved in monthly cloud bills" }
      ]
    },
    faqs: [
      {
        q: "What is your approach to legacy data conversion?",
        a: "We write specialized extraction scripts that validate, clean, and map old database formats into modern relational schemas."
      },
      {
        q: "How do you ensure service availability during migrations?",
        a: "We utilize routing proxies to direct traffic between legacy and modernized modules, migrating features incrementally."
      }
    ]
  }
};
