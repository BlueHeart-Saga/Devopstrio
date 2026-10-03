import { ServiceCategory, CapabilityDetail } from "./types";

export const aiConsultingService: ServiceCategory = {
  slug: "ai-consulting",
  title: "AI Consulting",
  badge: "Strategic AI Advisory",
  subtitle: "Define enterprise AI strategies, evaluate LLM readiness, establish AI governance, and build high-ROI AI roadmaps.",
  overviewHeading: "Strategic AI Advisory for Enterprise Transformation",
  overviewDesc1: "We help enterprises assess AI feasibility, choose optimal AI models and infrastructure, and integrate LLM solutions safely into core business workflows.",
  overviewDesc2: "From AI readiness audits to compliance and MLOps architecture, our AI strategists formulate end-to-end implementation plans aligned with bottom-line value.",
  stats: [
    { value: "40+", label: "AI Enterprise Roadmaps Built" },
    { value: "3.5x", label: "Average ROI on AI Initiatives" },
    { value: "100%", label: "Responsible AI & Compliance" },
    { value: "24/7", label: "Model Governance Support" }
  ],
  capabilities: [
    {
      slug: "ai-strategy-advisory",
      title: "AI Strategy & Executive Advisory",
      description: "Executive AI strategy formulation, technology roadmap planning, and C-suite alignment for enterprise AI adoption.",
      items: [
        "C-suite AI vision & strategy alignment workshops",
        "Multi-year enterprise AI roadmap development",
        "Competitive AI positioning & disruption analysis"
      ],
      href: "/services/ai-consulting/ai-strategy-advisory"
    },
    {
      slug: "ai-readiness-assessment",
      title: "AI Readiness Assessment",
      description: "Comprehensive evaluation of data infrastructure, technical debt, security posture, and organizational AI maturity.",
      items: [
        "Data quality, pipeline & telemetry readiness audits",
        "Cloud infrastructure & GPU compute capacity check",
        "Technical debt & legacy integration barrier scoring"
      ],
      href: "/services/ai-consulting/ai-readiness-assessment"
    },
    {
      slug: "generative-ai-consulting",
      title: "Generative AI Consulting",
      description: "Tailored Generative AI strategy, LLM selection, RAG architecture design, and custom prompt engineering frameworks.",
      items: [
        "Proprietary vs open-source LLM selection matrices",
        "Enterprise RAG & vector database architecture design",
        "Custom fine-tuning & prompt security governance"
      ],
      href: "/services/ai-consulting/generative-ai-consulting"
    },
    {
      slug: "ai-use-case-discovery",
      title: "AI Use Case Discovery & Prioritization",
      description: "Identify, evaluate, and rank enterprise AI use cases based on business impact, feasibility, and time-to-value.",
      items: [
        "Cross-departmental AI opportunity mapping",
        "Impact vs complexity matrix scoring",
        "Rapid proof-of-concept (PoC) scoping"
      ],
      href: "/services/ai-consulting/ai-use-case-discovery"
    },
    {
      slug: "ai-governance-risk",
      title: "AI Governance, Risk & Responsible AI",
      description: "Establish Responsible AI frameworks, ethical guardrails, regulatory compliance policies, and risk mitigation strategies.",
      items: [
        "EU AI Act & global regulatory compliance frameworking",
        "Bias mitigation, explainability & fairness auditing",
        "Data privacy, hallucination controls & IP protection"
      ],
      href: "/services/ai-consulting/ai-governance-risk"
    },
    {
      slug: "ai-operating-model",
      title: "AI Operating Model & Centre of Excellence",
      description: "Design scalable AI organizational structures, talent upskilling plans, and enterprise AI Centres of Excellence (CoE).",
      items: [
        "AI Centre of Excellence (CoE) structure design",
        "Cross-functional MLOps & data engineering workflow alignment",
        "Developer enablement & AI upskilling programs"
      ],
      href: "/services/ai-consulting/ai-operating-model"
    },
    {
      slug: "ai-roi-business-case",
      title: "AI ROI, Business Case & Value Realisation",
      description: "Build rigorous financial models, token cost estimations, TCO projections, and value tracking for AI investments.",
      items: [
        "Token consumption & GPU inference cost modeling",
        "Total Cost of Ownership (TCO) vs return calculations",
        "Continuous KPI tracking & value realization dashboards"
      ],
      href: "/services/ai-consulting/ai-roi-business-case"
    },
    {
      slug: "ai-vendor-platform-selection",
      title: "AI Vendor & Platform Selection",
      description: "Unbiased technical evaluation and procurement advisory for AI platforms, vector databases, and cloud LLM providers.",
      items: [
        "Cloud AI provider evaluation (AWS Bedrock, Azure OpenAI, GCP Vertex)",
        "Vector database benchmark & vendor selection",
        "Commercial contract review & API cost negotiation"
      ],
      href: "/services/ai-consulting/ai-vendor-platform-selection"
    }
  ],
  outcomes: [
    "Clear, actionable enterprise AI adoption roadmap",
    "Quantified ROI calculations and inference budget models",
    "Complete Responsible AI governance & compliance alignment"
  ],
  industries: [
    "Finance: Fraud detection, automated underwriting & risk modeling",
    "Healthcare: Patient data privacy, clinical AI compliance & RAG search",
    "Retail & E-commerce: Hyper-personalized recommendation engines"
  ],
  techStack: [
    { name: "OpenAI / Anthropic / Llama 3", desc: "Enterprise foundation LLM models." },
    { name: "AWS Bedrock / Azure OpenAI / Vertex AI", desc: "Managed cloud AI platforms." },
    { name: "Pinecone / Qdrant / Milvus", desc: "High-performance vector databases." }
  ],
  deliveryFramework: [
    "Phase 1: Discovery & Executive Alignment",
    "Phase 2: AI Maturity Audit & Use Case Prioritization",
    "Phase 3: Architecture Blueprinting & CoE Roadmap"
  ],
  caseStudies: [
    {
      title: "AI Strategy & RAG Architecture for FinTech Enterprise",
      desc: "Evaluated data readiness and engineered an enterprise RAG strategy that reduced customer support response times by 65%.",
      highlights: [
        "Audited 50+ internal data sources",
        "Formulated zero-data-leakage guardrails",
        "Accelerated AI rollout by 4 months"
      ]
    }
  ],
  faqs: [
    {
      q: "How does Devopstrio conduct an AI readiness assessment?",
      a: "We evaluate your existing data architecture, security compliance, infrastructure capacity, and business use cases to deliver an actionable AI implementation roadmap."
    },
    {
      q: "Which LLM and AI models do you recommend?",
      a: "We provide unbiased recommendations across open-source models (Llama 3, Mistral) and enterprise APIs (OpenAI, Claude, Gemini) based on your privacy, latency, and budget requirements."
    }
  ],
  ctaTitle: "Accelerate Your Enterprise AI Strategy",
  ctaHighlight: "Consult with Our AI Strategists",
  ctaDesc: "Transform raw enterprise data assets into automated intelligent workflows with strategic AI consulting.",
  ctaBtnText: "Schedule AI Advisory Session"
};

export const aiConsultingCapabilities: Record<string, CapabilityDetail> = {};
