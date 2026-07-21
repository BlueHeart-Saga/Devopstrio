"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Cloud,
  Server,
  ShieldCheck,
  Layers,
  Network,
  Settings,
  Rocket,
  GitBranch,
  CheckCircle2,
  Cpu,
  Database,
  Lock,
  Boxes,
  Code,
  Github,
  Workflow,
  Sliders,
  Flame,
  Play,
  FileText,
  Check,
  ExternalLink,
  X,
  Download,
  Terminal,
  ArrowRight,
  Activity,
  Sparkles,
  Shield,
  Zap,
  BarChart3,
  Key,
  Search,
  FileCode,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Container,
  GitPullRequest,
  Eye,
  Bell,
  Box,
  BrainCircuit,
  Bot,
  MessageSquare,
  Briefcase,
  Users,
  HardDrive,
  Share2,
  FileSearch,
  Sparkle,
  Compass
} from "lucide-react";
import Link from "next/link";

export default function AIFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoSubmitted, setDemoSubmitted] = useState<boolean>(false);
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);
  const [activeTechCategory, setActiveTechCategory] = useState<string>("AI Frameworks");
  const [activeAgentIndex, setActiveAgentIndex] = useState<number>(0);
  const [activeArchLayer, setActiveArchLayer] = useState<string>("Orchestration Engine");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    aiGoal: "RAG & Enterprise Search",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-advance lifecycle demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLifecycleStage((prev) => (prev + 1) % 9);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // 1. Business Challenges Data
  const businessChallenges = [
    {
      title: "Slow AI Development",
      desc: "Lengthy prototyping delays and reinventing pipeline wrappers for every new LLM project.",
      icon: AlertTriangle,
      tag: "Time Sink"
    },
    {
      title: "Disconnected Knowledge Sources",
      desc: "Siloed enterprise documents, databases, and unstructured data unable to feed AI applications.",
      icon: Database,
      tag: "Data Silos"
    },
    {
      title: "Poor Prompt Management",
      desc: "Hardcoded system prompts causing unpredictable model responses and unmaintained versions.",
      icon: FileCode,
      tag: "Prompt Drift"
    },
    {
      title: "Hallucination Risks",
      desc: "Factual inaccuracies and ungrounded model outputs eroding user trust in production.",
      icon: RefreshCw,
      tag: "Inaccuracy"
    },
    {
      title: "Complex Model Integration",
      desc: "Vendor lock-in and friction when switching between OpenAI, Anthropic, Gemini, and open-source LLMs.",
      icon: Network,
      tag: "Vendor Lock-In"
    },
    {
      title: "Security & Privacy Concerns",
      desc: "Risk of PII leakage to external APIs, prompt injection attacks, and unencrypted vector indices.",
      icon: Shield,
      tag: "Vulnerability"
    },
    {
      title: "Lack of Governance",
      desc: "Missing audit trails, token cost tracking, rate limits, and model drift telemetry.",
      icon: Sliders,
      tag: "Compliance Risk"
    },
    {
      title: "High Infrastructure Costs",
      desc: "Excessive LLM token bills caused by un-cached repetitive queries and un-optimized model routing.",
      icon: BarChart3,
      tag: "High Spend"
    }
  ];

  // 2. Core AI Components Grid
  const coreAIComponents = [
    { title: "Prompt Management", desc: "Version-controlled prompt registry & dynamic template injection.", icon: FileCode, connects: "Prompt Engine" },
    { title: "AI Gateway", desc: "Reverse proxy with semantic caching, rate limiting, and model failover.", icon: Network, connects: "API Gateway" },
    { title: "Vector Database", desc: "High-performance similarity search across high-dimensional embeddings.", icon: Database, connects: "Knowledge Base" },
    { title: "AI Agents", desc: "Autonomous reasoning loops capable of goal decomposition & execution.", icon: Bot, connects: "Agent Engine" },
    { title: "RAG Engine", desc: "Hybrid dense-sparse retrieval combining vector similarity with BM25 keyword search.", icon: FileSearch, connects: "RAG Core" },
    { title: "Conversation Memory", desc: "Multi-turn state persistence with sliding-window summary buffers.", icon: MessageSquare, connects: "Memory" },
    { title: "Tool Calling", desc: "Secure function calling interfaces enabling LLMs to execute APIs & SQL queries.", icon: Code, connects: "Executors" },
    { title: "Workflow Automation", desc: "Stateful multi-agent graph execution using LangGraph and CrewAI patterns.", icon: Workflow, connects: "Workflows" },
    { title: "Model Routing", desc: "Dynamic LLM cost/latency routing targeting optimal model providers.", icon: Cpu, connects: "LLM Router" },
    { title: "AI Analytics", desc: "Real-time token usage telemetry, cost tracking, and response latency profiling.", icon: BarChart3, connects: "Telemetry" }
  ];

  // 3. AI Architecture Layers
  const architectureLayers = [
    {
      id: "apps",
      name: "Applications & Interfaces",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      desc: "User-facing Web Apps, Mobile UI, Enterprise Search Portals, and REST/GraphQL APIs.",
      components: ["Web App", "Mobile UI", "Slack / Teams Bot", "Customer Support Portal"]
    },
    {
      id: "gateway",
      name: "AI API Gateway",
      icon: Network,
      color: "from-rose-500 to-red-600",
      desc: "Enterprise reverse proxy handling PII scrubbing, rate limiting, semantic caching, and JWT auth.",
      components: ["PII Scrubbing", "Semantic Cache", "Token Throttling", "Provider Failover"]
    },
    {
      id: "orchestration",
      name: "Orchestration Engine",
      icon: BrainCircuit,
      color: "from-purple-500 to-indigo-600",
      desc: "Prompt registry, stateful conversation memory, tool execution, and multi-agent coordination.",
      components: ["Prompt Engine", "Agent State Machine", "Tool Calling Executor", "Memory Buffer"]
    },
    {
      id: "models",
      name: "LLM Router & Models",
      icon: Cpu,
      color: "from-amber-500 to-orange-600",
      desc: "Abstracted multi-model layer supporting OpenAI, Anthropic, Gemini, Llama, and private models.",
      components: ["OpenAI GPT-4", "Claude 3.5 Sonnet", "Google Gemini", "Private Llama 3"]
    },
    {
      id: "knowledge",
      name: "Vector Search & Knowledge",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      desc: "Vector databases, document chunking pipelines, and enterprise data connectors.",
      components: ["Qdrant / Pinecone", "Hybrid BM25 + Dense", "Document Chunking", "Enterprise Connectors"]
    }
  ];

  // 4. AI Development Lifecycle Stages
  const aiLifecycleStages = [
    { step: 1, name: "Business Problem", short: "Define Scope", icon: Briefcase, desc: "Identify target enterprise AI use case, success KPIs, and data privacy constraints.", snippet: "# Step 1: Use Case Discovery\nTarget: Tier-1 Support Automation\nGoal: >85% Resolution | PII Masking: Strict" },
    { step: 2, name: "Data Collection", short: "Ingest Data", icon: HardDrive, desc: "Aggregate internal documents, FAQs, Confluence pages, and database tables.", snippet: "ingest_docs(source=['confluence', 'sharepoint', 'pdf_vault'], format='pdf/md/json')" },
    { step: 3, name: "Prompt Engineering", short: "System Prompts", icon: FileCode, desc: "Craft and test version-controlled system prompts with dynamic parameter templates.", snippet: "prompt_registry.get('support_agent_v2.4', variables={'user_tier': 'Enterprise'})" },
    { step: 4, name: "Knowledge Indexing", short: "Vector Embed", icon: Database, desc: "Chunk documents semantically and generate embeddings into high-speed vector stores.", snippet: "vector_db.upsert(chunks=chunk_text(docs), embedding_model='text-embedding-3-large')" },
    { step: 5, name: "Model Integration", short: "LLM Routing", icon: Cpu, desc: "Configure dynamic model routing between OpenAI, Claude, Gemini, and private open-source LLMs.", snippet: "llm_router.route(query, priority='low_cost', fallback='gpt-4o')" },
    { step: 6, name: "Application Dev", short: "Agent Logic", icon: Bot, desc: "Build agentic reasoning loops and tool-calling interfaces using LangGraph / LlamaIndex.", snippet: "agent = Agent(role='Support Specialist', tools=[sql_query, crm_update, email_sender])" },
    { step: 7, name: "Testing & Eval", short: "RAGAS Metrics", icon: CheckCircle2, desc: "Run RAGAS evaluation suites measuring Faithfulness, Answer Relevance, and Context Recall.", snippet: "eval_results = ragas.evaluate(test_dataset, metrics=['faithfulness', 'answer_relevance'])" },
    { step: 8, name: "Deployment", short: "CI/CD MLOps", icon: Rocket, desc: "Deploy containerized AI microservices to Kubernetes with auto-scaling & semantic cache.", snippet: "kubectl apply -f k8s/ai-gateway.yaml -> Status: Pods Running [4/4]" },
    { step: 9, name: "Continuous Learning", short: "Drift Telemetry", icon: Activity, desc: "Monitor token spending, latency, user feedback scores, and fine-tuning datasets.", snippet: "telemetry.log_metrics(prompt_tokens=420, completion_tokens=180, latency=420ms)" }
  ];

  // 5. RAG & Knowledge Search Cards
  const ragCapabilities = [
    { title: "Document Indexing", desc: "Automated document ingestion pipelines for PDFs, Word, Markdown, and HTML.", icon: FileText },
    { title: "PDF Search", desc: "OCR and visual layout parsing for complex PDF tables, diagrams, and scanned files.", icon: Search },
    { title: "Semantic Search", desc: "Dense vector similarity matching understanding user intent beyond exact keywords.", icon: BrainCircuit },
    { title: "Vector Embeddings", desc: "High-dimensional embedding generation with OpenAI, Cohere, and HuggingFace models.", icon: Database },
    { title: "Knowledge Graph", desc: "Graph RAG combining relational entity linkages with vector similarity search.", icon: Network },
    { title: "Context Injection", desc: "Dynamic prompt augmentation injecting ranked knowledge chunks into context windows.", icon: Code },
    { title: "Citation Support", desc: "Traceable responses providing page-level citations and source document links.", icon: ExternalLink },
    { title: "Multi-Source Retrieval", desc: "Unified query engine searching SharePoint, Confluence, Jira, and SQL databases.", icon: Layers }
  ];

  // 6. AI Agent Gallery Cards
  const aiAgentsGallery = [
    {
      title: "Customer Support Agent",
      role: "Tier-1 Support Automation",
      desc: "Resolves tickets autonomously by searching resolved tickets, KB articles, and drafting accurate responses.",
      tools: ["Zendesk API", "Vector RAG", "Email Sender"],
      icon: MessageSquare,
      badge: "Customer Success"
    },
    {
      title: "HR Assistant Agent",
      role: "Employee Self-Service",
      desc: "Answers policy questions, handbook queries, and guides new hires through onboarding tasks.",
      tools: ["Employee Handbook", "Workday API", "Leave Balance"],
      icon: Users,
      badge: "Human Resources"
    },
    {
      title: "Sales Assistant Agent",
      role: "Lead Qualification & CRM",
      desc: "Qualifies inbound leads, researches prospect companies, and updates CRM pipeline records.",
      tools: ["Salesforce API", "Web Search", "Email Draft"],
      icon: Briefcase,
      badge: "Sales Ops"
    },
    {
      title: "IT Operations Agent",
      role: "Log Triage & Incident Response",
      desc: "Parses system logs, correlates error stack traces, and triggers initial remediation playbooks.",
      tools: ["Datadog API", "Kubectl", "PagerDuty"],
      icon: Activity,
      badge: "DevOps & SRE"
    },
    {
      title: "Finance Assistant Agent",
      role: "Invoice & Expense Auditing",
      desc: "Extracts line items from PDF invoices, checks compliance rules, and flags budget anomalies.",
      tools: ["OCR Engine", "ERP Connector", "Anomaly Model"],
      icon: BarChart3,
      badge: "Finance"
    },
    {
      title: "Document Processing Agent",
      role: "Contract Intelligence",
      desc: "Parses legal contracts, extracts key clauses, indemnities, and alerts teams to renewal dates.",
      tools: ["PDF Parser", "Entity Extractor", "Clause Index"],
      icon: FileSearch,
      badge: "Legal"
    },
    {
      title: "Workflow Agent",
      role: "Multi-Step API Orchestration",
      desc: "Executes complex multi-system workflows based on natural language instructions.",
      tools: ["Zapier / Webhooks", "REST Executor", "State Machine"],
      icon: Workflow,
      badge: "Automation"
    },
    {
      title: "Multi-Agent Swarm",
      role: "Specialized Agent Team",
      desc: "Collaborative agent swarms where researcher, writer, and reviewer agents complete complex tasks.",
      tools: ["LangGraph State", "CrewAI", "Shared Memory"],
      icon: Bot,
      badge: "Multi-Agent"
    }
  ];

  // 7. Model Integration Provider Cards
  const modelProviders = [
    { name: "OpenAI", models: "GPT-4.1, GPT-4o, GPT-3.5 Turbo", desc: "Leading frontier models for complex reasoning, vision, and function calling.", icon: Sparkles },
    { name: "Anthropic", models: "Claude 3.5 Sonnet, Claude 3 Opus", desc: "High-precision LLMs known for long context windows and coding capabilities.", icon: Cpu },
    { name: "Google", models: "Gemini 1.5 Pro, Gemini Flash", desc: "Multimodal models with massive 2M token context windows on Vertex AI.", icon: Cloud },
    { name: "Meta", models: "Llama 3.1 405B, Llama 3 70B", desc: "Open-weights state-of-the-art LLMs for private, self-hosted enterprise deployments.", icon: Boxes },
    { name: "Microsoft", models: "Azure OpenAI Service, Phi-3", desc: "Enterprise SLA cloud OpenAI models backed by Azure security & compliance.", icon: Shield },
    { name: "Mistral AI", models: "Mistral Large, Mixtral 8x22B", desc: "High-efficiency European open-weights and proprietary models.", icon: Zap },
    { name: "DeepSeek", models: "DeepSeek-V2, DeepSeek-Coder", desc: "Ultra-fast code generation and mathematical reasoning LLMs.", icon: Code },
    { name: "Custom Models", models: "Private LLMs (vLLM / TGI)", desc: "Fine-tuned domain-specific models hosted inside your own Kubernetes cluster.", icon: Server }
  ];

  // 8. MLOps & Deployment Cards
  const mlOpsCapabilities = [
    { title: "Model Registry", desc: "Centralized catalog for versioned prompts, embeddings, and fine-tuned weights.", icon: Database },
    { title: "Versioning", desc: "Immutable version tags for prompt templates and RAG retrieval pipelines.", icon: GitBranch },
    { title: "CI/CD for AI", desc: "Automated regression testing and evaluation pipelines triggered on PRs.", icon: Workflow },
    { title: "Monitoring", desc: "Real-time latency, token spending, semantic drift, and hallucination tracking.", icon: Activity },
    { title: "Auto Scaling", desc: "Kubernetes pod autoscaling for vLLM and AI gateway microservices.", icon: Container },
    { title: "Canary Deployment", desc: "Safe progressive traffic splitting between model versions (e.g. GPT-4 vs Claude).", icon: RefreshCw }
  ];

  // 9. Security & Responsible AI Cards
  const securityCapabilities = [
    { title: "Prompt Security", desc: "Multi-layer prompt injection detection and input sanitization.", icon: ShieldCheck },
    { title: "Data Privacy", desc: "Automated PII scrubbing stripping sensitive data before API calls leave VPC.", icon: Lock },
    { title: "Access Control", desc: "Role-based access control (RBAC) governing vector index spaces.", icon: Key },
    { title: "Responsible AI", desc: "Bias evaluation, toxicity filters, and alignment guardrails.", icon: Sparkle },
    { title: "Guardrails", desc: "NeMo Guardrails & Llama Guard output validation layers.", icon: Sliders },
    { title: "Content Moderation", desc: "Safety filters blocking inappropriate or non-compliant queries.", icon: Eye },
    { title: "Audit Logs", desc: "Full audit trail of every LLM query, prompt template, and response payload.", icon: FileText },
    { title: "Compliance", desc: "Built-in guardrails aligning with EU AI Act, SOC 2, HIPAA, and ISO 27001.", icon: CheckCircle2 }
  ];

  // 10. Technology Stack Categorized Cards
  const techStackData = {
    "AI Frameworks": [
      { name: "LangChain", desc: "Chaining LLMs, memory, and vector stores for application development.", icon: Workflow },
      { name: "LlamaIndex", desc: "Data framework for connecting private data sources to LLMs.", icon: FileSearch },
      { name: "Semantic Kernel", desc: "Microsoft SDK integrating conventional programming with AI prompts.", icon: Code },
      { name: "Haystack", desc: "End-to-end framework for building custom NLP and RAG search pipelines.", icon: Search }
    ],
    "Models": [
      { name: "OpenAI GPT-4", desc: "Frontier reasoning & function calling model.", icon: Sparkles },
      { name: "Anthropic Claude", desc: "Long context window and complex coding LLM.", icon: Cpu },
      { name: "Google Gemini", desc: "Multimodal 2M token context window model.", icon: Cloud },
      { name: "Meta Llama 3", desc: "Open-source 405B state-of-the-art model.", icon: Boxes },
      { name: "Mistral AI", desc: "High-performance open weights models.", icon: Zap }
    ],
    "Vector Databases": [
      { name: "Qdrant", desc: "High-performance vector search engine with payload filtering.", icon: Database },
      { name: "Pinecone", desc: "Fully managed cloud vector database for enterprise scale.", icon: Server },
      { name: "Weaviate", desc: "Open-source vector search engine with hybrid search.", icon: Layers },
      { name: "Milvus", desc: "Cloud-native vector database built for massive embedding scale.", icon: HardDrive },
      { name: "Azure AI Search", desc: "Enterprise hybrid search engine with integrated vector indexing.", icon: Cloud }
    ],
    "Backend": [
      { name: "Python", desc: "Core language for AI models, PyTorch, and Data Science.", icon: Code },
      { name: "FastAPI", desc: "High-performance asynchronous Python API framework.", icon: Zap },
      { name: "Node.js", desc: "Asynchronous JavaScript runtime for AI frontend web apps.", icon: Terminal }
    ],
    "Databases": [
      { name: "PostgreSQL", desc: "Relational database with pgvector vector similarity extension.", icon: Database },
      { name: "MongoDB", desc: "Document database with Vector Search capability.", icon: HardDrive },
      { name: "Redis", desc: "In-memory database used for semantic caching & session state.", icon: RefreshCw }
    ],
    "Cloud": [
      { name: "Azure AI Foundry", desc: "Unified enterprise platform for building & managing AI apps.", icon: Cloud },
      { name: "Azure OpenAI", desc: "Secure enterprise OpenAI instance on Azure.", icon: Shield },
      { name: "AWS Bedrock", desc: "Fully managed foundation models from leading AI startups.", icon: Server },
      { name: "Google Vertex AI", desc: "Google Cloud ML platform for Gemini model deployment.", icon: Cpu }
    ]
  };

  // 11. Business Outcomes (KPI Cards)
  const businessOutcomes = [
    { value: "10×", title: "Faster AI Development", desc: "Accelerate production rollout from months to weeks using reusable frameworks.", highlight: "from-rose-500 to-red-600" },
    { value: "Enterprise", title: "Knowledge Search", desc: "Unlock siloed company data with hallucination-free RAG vector retrieval.", highlight: "from-blue-500 to-indigo-600" },
    { value: "Secure", title: "AI Deployment", desc: "Zero clear-text PII leakage, prompt injection defense, and VPC isolation.", highlight: "from-emerald-500 to-teal-600" },
    { value: "Reusable", title: "AI Components", desc: "Standardized prompt registries, AI gateways, and vector connectors.", highlight: "from-purple-500 to-rose-500" },
    { value: "Scalable", title: "Agent Platform", desc: "Autonomous multi-agent swarms executing API tools safely at scale.", highlight: "from-amber-500 to-orange-600" },
    { value: "Continuous", title: "AI Innovation", desc: "Seamless multi-model switching between OpenAI, Claude, Gemini, & Llama.", highlight: "from-cyan-500 to-blue-600" }
  ];

  // 12. Use Cases Cards
  const useCases = [
    { title: "AI Customer Support", desc: "Tier-1 support automation capable of accurate ticket resolution and email drafts.", icon: MessageSquare },
    { title: "Enterprise Search", desc: "Unified natural language search indexing Confluence, SharePoint, and databases.", icon: Search },
    { title: "Document Intelligence", desc: "Automated extraction and summary of scanned PDFs, invoices, and forms.", icon: FileText },
    { title: "Contract Analysis", desc: "Legal contract parsing, clause extraction, and automated risk scoring.", icon: FileSearch },
    { title: "HR Assistant", desc: "Employee self-service chatbot answering policy and benefits queries.", icon: Users },
    { title: "AI Recruitment", desc: "Candidate resume parsing, scoring against job descriptions, and interview prep.", icon: Briefcase },
    { title: "Healthcare AI", desc: "Medical records search and clinical documentation assistant with HIPAA compliance.", icon: ShieldCheck },
    { title: "Financial Analysis", desc: "Automated SEC filing analysis, earnings call summaries, and financial anomaly detection.", icon: BarChart3 }
  ];

  // 13. Related Accelerators Cards
  const relatedAccelerators = [
    { title: "Landing Zone Portal", desc: "Explore enterprise cloud landing zone blueprints and IaC repository directory.", href: "/ecosystem/accelerators-frameworks/landing-zone", tag: "Landing Zone" },
    { title: "Cloud Accelerator", desc: "Reusable IaC modules for rapid multi-cloud foundation and network deployment.", href: "/ecosystem/accelerators-frameworks/cloud-accelerator", tag: "Cloud IaC" },
    { title: "DevOps Accelerator", desc: "Enterprise CI/CD pipeline templates, GitOps automation, and Kubernetes manifests.", href: "/ecosystem/accelerators-frameworks/devops-accelerator", tag: "DevOps CI/CD" },
    { title: "Security Framework", desc: "Zero-trust compliance guardrails, automated vulnerability scanning, and IAM.", href: "/ecosystem/accelerators-frameworks/security-framework", tag: "Cybersecurity" },
    { title: "Data Framework", desc: "Modern data platform blueprints, warehouse lakehouses, and analytics pipelines.", href: "/ecosystem/accelerators-frameworks/data-framework", tag: "Data Platform" }
  ];

  // 14. FAQ List
  const faqs = [
    {
      q: "What is the Devopstrio AI Framework?",
      a: "The Devopstrio AI Framework is an enterprise engineering foundation providing reusable architectures, APIs, prompt management, vector search, AI agent orchestration, and MLOps deployment pipelines. It enables organizations to build custom AI-powered applications rapidly rather than assembling fragile raw API wrappers."
    },
    {
      q: "Which LLMs are supported?",
      a: "Our framework abstracts the model layer, supporting OpenAI (GPT-4.1, GPT-4o), Anthropic (Claude 3.5 Sonnet), Google (Gemini 1.5 Pro), Meta (Llama 3.1), Microsoft Azure OpenAI, Mistral AI, DeepSeek, and custom private fine-tuned models hosted on vLLM."
    },
    {
      q: "Does it support Retrieval-Augmented Generation (RAG)?",
      a: "Yes. We provide production-grade RAG pipelines featuring document chunking, multi-source ingestion (SharePoint, Confluence, PDFs), dense-sparse hybrid search (Vector + BM25), and RAGAS evaluation suites to guarantee hallucination-free responses."
    },
    {
      q: "Can we build autonomous AI agents?",
      a: "Yes. The framework includes agent orchestration templates using LangGraph and CrewAI patterns, enabling single or multi-agent swarms to reason, break down goals, and execute secure API tool calls."
    },
    {
      q: "Which vector databases are supported?",
      a: "We support Qdrant, Pinecone, Weaviate, Milvus, Azure AI Search, and PostgreSQL with pgvector."
    },
    {
      q: "Does it work with Azure OpenAI Service?",
      a: "Yes. Our AI Gateway and model routing layer integrate natively with Azure OpenAI Service, Azure AI Foundry, AWS Bedrock, and Google Vertex AI."
    },
    {
      q: "Can we deploy private, self-hosted models?",
      a: "Yes. You can deploy open-weights models (such as Llama 3 or Mistral) inside your own private Kubernetes cluster using containerized engines like vLLM or TGI for 100% data sovereignty."
    },
    {
      q: "Is enterprise security and governance included?",
      a: "Yes. The framework features PII scrubbing, prompt injection defense, role-based access control, NeMo output guardrails, and comprehensive request/response audit logging for SOC 2 and EU AI Act compliance."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Ambient Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* 1. HERO SECTION */}
      <Hero
        badge="ACCELERATORS & FRAMEWORKS"
        colorBends={true}
        colorBendsColors={["#f43f5e", "#a855f7", "#3b82f6"]}
        title={
          <>
            Devopstrio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-600">
              AI Framework
            </span>
          </>
        }
        subtitle="Accelerate enterprise AI application development using reusable frameworks for LLMs, AI agents, Retrieval-Augmented Generation (RAG), vector search, model orchestration, and MLOps."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "AI FRAMEWORK" }
        ]}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Hero Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Enterprise AI",
              "AI Agents",
              "RAG",
              "Vector Database",
              "LLM Integration",
              "MLOps"
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById("architecture");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
            >
              Explore AI Framework
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Book an AI Workshop
            </button>
          </div>
        </div>
      </Hero>

      {/* 2. AI FRAMEWORK OVERVIEW */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
              FOUNDATIONAL OVERVIEW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Build AI Applications Faster
            </h2>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
              The Devopstrio AI Framework provides reusable architectures, APIs, prompt management, vector search, AI agent orchestration, and deployment pipelines to help organizations rapidly build secure and scalable AI-powered applications.
            </p>
          </Reveal>

          {/* Overview Highlights 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "LLM Gateway & Routing", icon: Network, desc: "Multi-model abstraction layer for OpenAI, Claude, Gemini, and Llama." },
              { title: "Vector RAG Pipeline", icon: Database, desc: "Dense-sparse hybrid search index for accurate document grounding." },
              { title: "Multi-Agent Systems", icon: Bot, desc: "Autonomous agent swarms executing API tools and stateful workflows." },
              { title: "MLOps & Security", icon: ShieldCheck, desc: "NeMo output guardrails, PII masking, token analytics, and SOC 2 logs." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PAIN POINTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Challenges We Solve
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Eliminate prompt drift, hallucination risks, vendor lock-in, and security vulnerabilities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessChallenges.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-rose-500" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-bold">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FRAMEWORK ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE BLUEPRINT
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Framework Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 5-layer enterprise AI system stack from applications to knowledge stores.
            </p>
          </Reveal>

          {/* Layer Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {architectureLayers.map((layer) => {
              const isSelected = activeArchLayer === layer.name;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveArchLayer(layer.name)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <Icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold block truncate">{layer.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Detail Card */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            {architectureLayers.map((layer) => {
              if (layer.name !== activeArchLayer) return null;
              const Icon = layer.icon;
              return (
                <div key={layer.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-medium">
                      {layer.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                    {layer.components.map((comp, idx) => (
                      <div key={idx} className="p-4 bg-black rounded-xl border border-zinc-850 flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                        <span className="text-xs font-bold text-zinc-200">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CORE AI COMPONENTS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REUSABLE BUILDING BLOCKS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core AI Components
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              10 modular AI components built for enterprise scale and rapid integration.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreAIComponents.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold self-start uppercase">
                    {cap.connects}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. AI DEVELOPMENT LIFECYCLE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              END-TO-END TIMELINE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Development Lifecycle
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 9-step progression from business discovery to continuous telemetry.
            </p>
          </Reveal>

          {/* Lifecycle Stage Buttons */}
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-8">
            {aiLifecycleStages.map((stg, idx) => {
              const isCurrent = activeLifecycleStage === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveLifecycleStage(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[9px] font-mono text-rose-400 font-bold block mb-0.5">
                    Step {stg.step}
                  </span>
                  <span className="text-xs font-bold block truncate">{stg.name}</span>
                </button>
              );
            })}
          </div>

          {/* Terminal Inspector */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                Step {aiLifecycleStages[activeLifecycleStage].step} of 9: {aiLifecycleStages[activeLifecycleStage].short}
              </span>
              <h3 className="text-xl font-bold text-white">
                {aiLifecycleStages[activeLifecycleStage].name}
              </h3>
              <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                {aiLifecycleStages[activeLifecycleStage].desc}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveLifecycleStage((prev) => (prev > 0 ? prev - 1 : 8))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveLifecycleStage((prev) => (prev + 1) % 9)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black rounded-2xl p-5 border border-zinc-900 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
              <div className="flex justify-between text-zinc-500 text-[10px] mb-3 pb-2 border-b border-zinc-900">
                <span>lifecycle-step-{aiLifecycleStages[activeLifecycleStage].step}.py</span>
                <span>EXECUTION LOG</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {aiLifecycleStages[activeLifecycleStage].snippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RAG & KNOWLEDGE SEARCH */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE KNOWLEDGE GROUNDING
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              RAG & Knowledge Search
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Prevent hallucinations with enterprise-grade Retrieval-Augmented Generation.
            </p>
          </Reveal>

          {/* RAG Workflow Diagram */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { label: "Documents", icon: FileText, sub: "PDFs / DB / Docs" },
              { label: "Embedding Model", icon: BrainCircuit, sub: "Dense Vector" },
              { label: "Vector Database", icon: Database, sub: "Qdrant / Pinecone" },
              { label: "Retriever & LLM", icon: Search, sub: "Context Injection" },
              { label: "Accurate Answer", icon: CheckCircle2, sub: "Cited Output" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-900 w-full md:w-48">
                  <step.icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold text-white">{step.label}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">{step.sub}</span>
                </div>
                {i < 4 && <ArrowRight className="w-4 h-4 text-rose-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ragCapabilities.map((rag, idx) => {
              const Icon = rag.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {rag.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {rag.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. AI AGENTS & AUTOMATION (Interactive Agent Gallery) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              AUTONOMOUS WORKFORCE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AI Agents & Automation
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Specialized AI agent gallery equipped with tool calling and workflow execution.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiAgentsGallery.map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/80 border border-zinc-800 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold">
                        {agent.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                        {agent.title}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 font-semibold block mb-2">
                        {agent.role}
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                        {agent.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-900">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1.5 font-bold">Supported Tools:</span>
                    <div className="flex flex-wrap gap-1">
                      {agent.tools.map((t, i) => (
                        <span key={i} className="text-[9px] font-mono bg-black text-zinc-300 px-2 py-0.5 rounded border border-zinc-850">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. MODEL INTEGRATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MULTI-MODEL ECOSYSTEM
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Model Integration
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Seamlessly swap between proprietary frontier models and private open-weights LLMs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelProviders.map((prov, idx) => {
              const Icon = prov.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                    {prov.name}
                  </h3>
                  <span className="text-[10px] font-mono text-rose-400 font-bold block mb-2">
                    {prov.models}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {prov.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. MLOPS & DEPLOYMENT */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              PRODUCTION OPERATIONS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              MLOps & Deployment
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Continuous deployment, model registries, telemetry monitoring, and auto-scaling.
            </p>
          </Reveal>

          {/* MLOps Workflow Flowchart */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto">
            {[
              "Training", "Evaluation", "Model Registry", "Deployment", "Monitoring", "Feedback", "Continuous Improvement"
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="p-3 bg-black rounded-xl border border-zinc-900 text-center min-w-[120px]">
                  <span className="text-xs font-bold text-white">{step}</span>
                </div>
                {i < 6 && <ArrowRight className="w-4 h-4 text-rose-500 shrink-0 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mlOpsCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. SECURITY & RESPONSIBLE AI */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE GOVERNANCE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security & Responsible AI
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Strict security guardrails, data privacy controls, and EU AI Act / SOC 2 compliance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCapabilities.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Integrations across leading AI frameworks, vector stores, cloud platforms, and models.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(techStackData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTechCategory === cat
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards for active category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackData[activeTechCategory as keyof typeof techStackData]?.map((tech: any, idx: number) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. BUSINESS OUTCOMES (Large KPI Cards) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Business Outcomes
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Accelerate enterprise AI adoption while guaranteeing data privacy and operational control.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div>
                  <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${outcome.highlight} tracking-tight block mb-3`}>
                    {outcome.value}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. USE CASES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE APPLICATIONS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Use Cases
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Proven deployment architectures across enterprise business functions.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. RELATED ACCELERATORS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM SYNERGY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Accelerators
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Explore complementary frameworks in the Devopstrio engineering ecosystem.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAccelerators.map((acc, idx) => (
              <Link
                key={idx}
                href={acc.href}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {acc.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                    {acc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {acc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Everything you need to know
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Have questions about the Devopstrio AI Framework? Check out answers to common inquiries below.
            </p>
          </Reveal>

          {/* Accordion List */}
          <div className="flex flex-col border-t border-zinc-900">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-rose-400 transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-4xl animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 17. CTA SECTION */}
      <section className="w-full py-32 bg-[#030303] text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 space-y-8">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-2">
              BUILD INTELLIGENT APPLICATIONS FASTER
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Accelerate Enterprise AI Innovation
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Build secure, scalable, and intelligent AI applications faster with the Devopstrio AI Framework.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30 cursor-pointer hover:scale-105"
            >
              Schedule an AI Strategy Session
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Explore AI Solutions
            </button>
          </div>
        </div>
      </section>

      {/* DEMO / WORKSHOP MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            <button
              onClick={() => {
                setDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Strategy Session Requested!</h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  Thank you for your interest in the Devopstrio AI Framework. Our lead AI architects will reach out within 24 hours to schedule your enterprise strategy workshop.
                </p>
                <button
                  onClick={() => {
                    setDemoModalOpen(false);
                    setDemoSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white rounded-full transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-500 font-bold uppercase block mb-1">
                    DEVOPSTRIO AI WORKSHOP
                  </span>
                  <h3 className="text-xl font-bold text-white">Schedule an AI Strategy Session</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Primary AI Objective</label>
                    <select
                      value={formData.aiGoal}
                      onChange={(e) => setFormData({ ...formData, aiGoal: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="RAG & Enterprise Search">RAG & Enterprise Knowledge Search</option>
                      <option value="AI Agents & Automation">Autonomous AI Agents & Workflows</option>
                      <option value="Multi-Model API Gateway">Multi-Model LLM Gateway & Routing</option>
                      <option value="Private Model Hosting">Private LLM Hosting (vLLM / Llama 3)</option>
                      <option value="DevSecOps & AI Governance">DevSecOps & Responsible AI Guardrails</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Project Overview</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your AI use case or technical goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  Submit Strategy Session Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
