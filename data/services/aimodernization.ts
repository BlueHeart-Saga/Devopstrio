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
      slug: "legacy-to-ai-migration",
      title: "Legacy-to-AI System Refactoring",
      description: "Infusing generative AI capabilities into existing enterprise software without disrupting core services.",
      items: ["REST API wrap for legacy databases", "Intelligent agent middleware integration", "Semantic search upgrade"],
      href: "/services/digital-transformation/legacy-modernization"
    },
    {
      slug: "intelligent-automation-engine",
      title: "Agentic Automation & Decision Engines",
      description: "Replacing brittle manual processes with autonomous AI agents and continuous learning feedback loops.",
      items: ["Autonomous agent orchestration", "Human-in-the-loop validation dashboards", "Self-healing pipeline automation"],
      href: "/services/ai-data-innovation/ai-agents-automation"
    },
    {
      slug: "cloud-native-modernization",
      title: "Cloud-Native Platform & AI Infrastructure",
      description: "Modernizing legacy workloads onto containerized, auto-scaling Kubernetes platforms optimized for AI.",
      items: ["Kubernetes microservices architecture", "Infrastructure as Code automation", "Zero-downtime blue-green deployments"],
      href: "/services/devops-automation/platform-engineering"
    },
    {
      slug: "real-time-inference-optimization",
      title: "Real-Time Inference & Continuous MLOps",
      description: "Optimizing AI inference latency, caching embeddings, and deploying automated model telemetry.",
      items: ["Sub-50ms inference optimization", "Automated retraining triggers", "Continuous drift monitoring"],
      href: "/services/ai-data-innovation/mlops-ai-operations"
    },
    {
      slug: "open-source-landing-zone",
      title: "Automated Multi-Cloud Landing Zones",
      description: "Deploying enterprise-grade landing zones pre-hardened with zero-trust security and ISO 27001 guardrails.",
      items: ["Terraform & Bicep automated blueprints", "Hub-and-spoke multi-cloud networking", "Automated policy compliance"],
      href: "/ecosystem/landing-zone"
    },
    {
      slug: "enterprise-accelerators",
      title: "Live Production AI Accelerators",
      description: "Accelerating time-to-market with pre-built production frameworks and open-source starter engines.",
      items: ["Pre-validated architecture templates", "Zero-trust reference blueprints", "Production-ready boilerplate modules"],
      href: "/ecosystem/accelerators-frameworks"
    }
  ],
  outcomes: [
    "AI-enabled legacy software ecosystem",
    "Streamlined automated data extraction & search",
    "Reduced technical debt and operational costs"
  ],
  industries: [
    "Insurance: AI-automated claims processing & document ingestion",
    "Banking: Legacy core modernization with intelligent fraud agents",
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
