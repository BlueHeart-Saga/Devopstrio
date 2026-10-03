import { ServiceCategory, CapabilityDetail } from "./types";

export const aiModernizationService: ServiceCategory = {
  slug: "ai-modernization",
  title: "AI Modernization",
  badge: "AI Application Modernization",
  subtitle: "Upgrade legacy applications with intelligent agentic workflows, embedded LLM features, real-time analytics, and automated decision engines.",
  overviewHeading: "Infuse AI Intelligence Into Legacy Enterprise Systems",
  overviewDesc1: "Modernize monolithic and legacy applications by embedding LLM capabilities, intelligent document processing, auto-remediation agents, and semantic search.",
  overviewDesc2: "We refactor legacy architectures into AI-first microservices, replacing rigid rule engines with self-improving machine learning workflows.",
  stats: [
    { value: "60%+", label: "Productivity Boost in Legacy Workflows" },
    { value: "5x", label: "Faster Document & Data Processing" },
    { value: "100%", label: "Backward Compatibility Maintained" },
    { value: "0", label: "Downtime Migration Track Record" }
  ],
  capabilities: [
    {
      slug: "legacy-application-ai-modernization",
      title: "Legacy Application AI Modernization",
      description: "Transform legacy enterprise applications into AI-enabled intelligent platforms without risky full-codebase rewrites.",
      items: [
        "AI middleware integration wrappers around legacy databases",
        "Legacy UI modernization with conversational AI interfaces",
        "Zero-downtime incremental microservice extraction"
      ],
      href: "/services/ai-modernization/legacy-application-ai-modernization"
    },
    {
      slug: "ai-enabled-application-modernization",
      title: "AI-Enabled Application Modernization",
      description: "Enhance existing software with embedded foundation models, RAG search, intelligent document processing, and predictive agents.",
      items: [
        "Embedded LLM inference & contextual RAG search integration",
        "Intelligent OCR & document processing automation",
        "Predictive analytics & automated decision-making engines"
      ],
      href: "/services/ai-modernization/ai-enabled-application-modernization"
    },
    {
      slug: "code-modernization-refactoring",
      title: "AI-Assisted Code Modernization & Refactoring",
      description: "Accelerate legacy codebase refactoring, COBOL/Java/C# translation, and unit test generation using specialized AI code models.",
      items: [
        "AI-driven automated code translation & syntax modernization",
        "Legacy monolithic code analysis & dependency graph mapping",
        "Automated unit test & regression suite generation"
      ],
      href: "/services/ai-modernization/code-modernization-refactoring"
    },
    {
      slug: "legacy-system-intelligence",
      title: "Legacy System Discovery & Intelligence",
      description: "Use LLM intelligence to reverse-engineer undocumented legacy codebases, schema structures, and business logic rules.",
      items: [
        "Automated documentation generation for legacy repos",
        "Business rule extraction from COBOL, Fortran & legacy PL/SQL",
        "Code complexity scoring & modernization priority mapping"
      ],
      href: "/services/ai-modernization/legacy-system-intelligence"
    },
    {
      slug: "ai-integration-existing-applications",
      title: "AI Integration for Existing Applications",
      description: "Integrate vector search, natural language interfaces, and autonomous AI agents smoothly into active enterprise software.",
      items: [
        "REST & gRPC API gateways for LLM inference",
        "pgvector & Redis semantic caching integration",
        "Event-driven Kafka messaging hooks for AI agents"
      ],
      href: "/services/ai-modernization/ai-integration-existing-applications"
    },
    {
      slug: "monolith-modernization",
      title: "Monolith Modernization with AI-Assisted Engineering",
      description: "Decompose monolithic enterprise architectures into modular microservices using AI-guided domain-driven design.",
      items: [
        "AI-guided domain-driven bounded context identification",
        "Automated microservice scaffolding & API contract generation",
        "Database schema decoupling & real-time sync gates"
      ],
      href: "/services/ai-modernization/monolith-modernization"
    },
    {
      slug: "ai-powered-testing-modernization",
      title: "AI-Powered Testing & Quality Modernization",
      description: "Modernize legacy QA processes with AI test case generation, self-healing Playwright scripts, and intelligent bug triage.",
      items: [
        "Autonomous E2E test script generation from user stories",
        "Self-healing Playwright & Cypress test locator models",
        "AI-driven visual regression & anomaly detection"
      ],
      href: "/services/ai-modernization/ai-powered-testing-modernization"
    },
    {
      slug: "modernization-assessment-roadmap",
      title: "Modernization Assessment & Roadmap",
      description: "Evaluate technical debt, calculate modernization ROI, and map a multi-phase AI-assisted system refactoring roadmap.",
      items: [
        "Technical debt quantification & risk profiling",
        "Phased modernization timeline & budget allocation",
        "Architecture reference blueprints for cloud-native AI systems"
      ],
      href: "/services/ai-modernization/modernization-assessment-roadmap"
    }
  ],
  outcomes: [
    "AI-enabled legacy software ecosystem without full rewrites",
    "Streamlined automated document extraction & semantic search",
    "Up to 60% reduction in legacy maintenance technical debt"
  ],
  industries: [
    "Insurance: AI-automated claims processing & document ingestion",
    "Banking: Core banking modernization with intelligent fraud agents",
    "Supply Chain: Predictive logistics & automated inventory management"
  ],
  techStack: [
    { name: "FastAPI / Node.js", desc: "High-performance AI API middleware." },
    { name: "Docker / Kubernetes", desc: "Containerized microservice execution." },
    { name: "PostgreSQL / pgvector", desc: "Relational + semantic vector storage." }
  ],
  deliveryFramework: [
    "Phase 1: Legacy Codebase & Workflow Audit",
    "Phase 2: AI Microservices Architecture & API Wrapping",
    "Phase 3: Incremental Deployment & Model Fine-tuning"
  ],
  caseStudies: [
    {
      title: "AI Modernization of Legacy Insurance Claims Engine",
      desc: "Transformed 15-year-old manual claims intake into an AI-powered document extraction engine handling 100K+ claims monthly.",
      highlights: [
        "85% reduction in manual document handling",
        "Sub-second claim validation times",
        "Seamless zero-downtime integration"
      ]
    }
  ],
  faqs: [
    {
      q: "Can legacy systems be upgraded with AI without rewriting everything?",
      a: "Yes. We build AI middleware wrappers and vector layers around your existing legacy databases and APIs, delivering AI capabilities without full codebase rewrites."
    },
    {
      q: "How do you ensure data security during AI modernization?",
      a: "All AI models are deployed within your isolated cloud environment or private endpoints with zero data retention policies."
    }
  ],
  ctaTitle: "Modernize Your Enterprise Software with AI",
  ctaHighlight: "Unlock Intelligent Capabilities",
  ctaDesc: "Transform static legacy applications into self-learning AI platforms.",
  ctaBtnText: "Explore AI Modernization"
};

export const aiModernizationCapabilities: Record<string, CapabilityDetail> = {};
