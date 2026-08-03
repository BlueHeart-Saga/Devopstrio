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
      slug: "ai-readiness-assessment",
      title: "AI Readiness & Feasibility",
      description: "Evaluating data assets, infrastructure readiness, and ROI potential for enterprise AI integration.",
      items: ["Data maturity & quality audits", "Use-case prioritization matrix", "Technical stack feasibility reports"]
    },
    {
      slug: "llm-architecture-advisory",
      title: "LLM & Foundation Model Advisory",
      description: "Selecting, sizing, and designing enterprise RAG and foundation model architectures.",
      items: ["Open-source vs proprietary LLM evaluation", "Cost & latency optimization", "Data privacy & security guardrails"]
    }
  ],
  outcomes: [
    "Executive AI strategy & implementation roadmap",
    "Comprehensive model selection & security guidelines",
    "Phased ROI delivery plan with risk mitigation"
  ],
  industries: [
    "Finance: Fraud detection & risk modeling advisory",
    "Healthcare: Clinical data AI compliance & strategy",
    "Retail: Personalized AI recommendation engines"
  ],
  techStack: [
    { name: "OpenAI / Anthropic / Llama 3", desc: "Foundation LLMs & enterprise models." },
    { name: "LangChain / LlamaIndex", desc: "AI orchestration and retrieval frameworks." },
    { name: "Pinecone / Qdrant", desc: "High-performance vector storage." }
  ],
  deliveryFramework: [
    "Phase 1: Discovery & Data Maturity Audit",
    "Phase 2: AI Opportunity Mapping & Model Selection",
    "Phase 3: Architecture Blueprinting & Strategy Delivery"
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
      q: "How does Devopstrio conduct an AI readiness audit?",
      a: "We evaluate your existing data architecture, security compliance, infrastructure capacity, and business use-cases to deliver an actionable AI implementation roadmap."
    },
    {
      q: "Which LLM and AI models do you recommend?",
      a: "We provide unbiased recommendations across open-source models (Llama 3, Mistral) and enterprise APIs (OpenAI, Claude, Gemini) based on your privacy, latency, and budget requirements."
    }
  ],
  ctaTitle: "Accelerate Your Enterprise AI Strategy",
  ctaHighlight: "Consult with Our AI Experts Today",
  ctaDesc: "Transform raw data assets into automated intelligent workflows with our strategic AI consulting services.",
  ctaBtnText: "Schedule AI Consultation"
};

export const aiConsultingCapabilities: Record<string, CapabilityDetail> = {};
