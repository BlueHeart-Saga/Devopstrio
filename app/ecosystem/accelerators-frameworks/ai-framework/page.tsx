"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Key,
  Fingerprint,
  UserCheck,
  Server,
  Cloud,
  Database,
  Code,
  FileText,
  CheckCircle2,
  ArrowRight,
  Activity,
  Sparkles,
  Zap,
  BarChart3,
  Search,
  FileCode,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Container,
  Eye,
  Network,
  Cpu,
  Workflow,
  Sliders,
  Briefcase,
  Users,
  HardDrive,
  FileSearch,
  X,
  Download,
  Terminal,
  GitBranch,
  FileCheck,
  Layers,
  Globe,
  Check,
  BookOpen,
  Bot,
  BrainCircuit,
  MessageSquare,
  Boxes
} from "lucide-react";
import Link from "next/link";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

export default function AIFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);
  const [activeArchLayer, setActiveArchLayer] = useState<string>("Enterprise AI Gateway");
  const [activeTechCategory, setActiveTechCategory] = useState<string>("AI Frameworks");
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    aiGoal: "Hybrid RAG & Enterprise Search",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto advance pipeline animation step
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % 9);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // 1. Business Challenges Data (8 Cards)
  const businessChallenges = [
    {
      title: "Slow AI Development",
      desc: "Lengthy prototyping delays and reinventing pipeline wrappers for every new LLM project without standardized architectures.",
      icon: AlertTriangle,
      tag: "Time Sink"
    },
    {
      title: "Disconnected Data Silos",
      desc: "Siloed enterprise documents, databases, and unstructured data unable to reliably feed AI applications with freshness.",
      icon: Database,
      tag: "Data Silos"
    },
    {
      title: "Hallucination & Accuracy Risks",
      desc: "Factual inaccuracies and ungrounded model outputs eroding user trust and threatening compliance in production systems.",
      icon: RefreshCw,
      tag: "Inaccuracy"
    },
    {
      title: "Prompt Chaos & Version Drift",
      desc: "Hardcoded system prompts causing unpredictable model responses, zero version control, and regression blind spots.",
      icon: FileCode,
      tag: "Prompt Drift"
    },
    {
      title: "LLM Vendor Lock-In",
      desc: "Friction when migrating between OpenAI, Anthropic, Gemini, and open-source models without an abstraction router.",
      icon: Network,
      tag: "Vendor Sprawl"
    },
    {
      title: "Data Privacy & PII Leakage",
      desc: "Risk of clear-text sensitive customer data leaking into external LLM training pools and unencrypted vector indices.",
      icon: ShieldAlert,
      tag: "Privacy Risk"
    },
    {
      title: "Excessive Token & Compute Costs",
      desc: "Soaring monthly API bills caused by uncached repetitive queries, unoptimized context windows, and large models for simple tasks.",
      icon: BarChart3,
      tag: "Cost Overrun"
    },
    {
      title: "Missing Auditability & Compliance",
      desc: "Zero visibility into prompt lineage, model latency, token consumption, and regulatory alignment with EU AI Act & SOC 2.",
      icon: Sliders,
      tag: "Governance Gap"
    }
  ];

  // 2. Framework Architecture Layers (6 Layers)
  const architectureLayers = [
    {
      id: "apps_ui",
      name: "Applications & Interfaces",
      icon: Briefcase,
      desc: "User-facing conversational web applications, mobile interfaces, Slack/Teams bots, and REST/GraphQL AI endpoints.",
      components: ["Enterprise Chatbot UI", "Slack & Teams Bots", "Customer Support Portals", "REST & GraphQL APIs"]
    },
    {
      id: "ai_gateway",
      name: "Enterprise AI Gateway",
      icon: Network,
      desc: "Centralized reverse proxy handling automated PII scrubbing, rate limiting, semantic caching, and provider failover.",
      components: ["Automated PII Masking", "Semantic Redis Cache", "Sliding-Window Throttling", "Dynamic Provider Failover"]
    },
    {
      id: "agent_orchestration",
      name: "Agent Orchestration",
      icon: BrainCircuit,
      desc: "Stateful agent reasoning loops, multi-agent graph swarms, tool calling execution, and persistent memory buffers.",
      components: ["LangGraph State Machines", "Sandboxed Tool Calling", "Sliding Conversation Memory", "Autonomous Goal Decomposition"]
    },
    {
      id: "llm_router",
      name: "Multi-Model LLM Router",
      icon: Cpu,
      desc: "Dynamic routing layer intelligently directing queries across OpenAI, Claude, Gemini, and self-hosted open-weights LLMs.",
      components: ["OpenAI GPT-4o & o1", "Anthropic Claude 3.5", "Google Gemini 1.5", "Self-Hosted Llama 3.1"]
    },
    {
      id: "vector_knowledge",
      name: "Vector Knowledge & RAG",
      icon: Database,
      desc: "High-dimensional embedding storage, dense-sparse hybrid search indices, and automated document ingestion pipelines.",
      components: ["Qdrant & Pinecone Stores", "Hybrid BM25 + Dense Search", "Cross-Encoder Re-Ranking", "Semantic Document Chunking"]
    },
    {
      id: "mlops_telemetry",
      name: "MLOps & Governance",
      icon: ShieldCheck,
      desc: "Continuous model evaluation, token cost telemetry, hallucination guardrails, and EU AI Act audit logging.",
      components: ["RAGAS Evaluation Suites", "NeMo Safety Guardrails", "Token & Cost Telemetry", "SOC 2 & Audit Logs"]
    }
  ];

  // 3. Core AI Components (10 Cards - 5 col grid)
  const coreAIComponents = [
    { title: "Prompt Registry", desc: "Version-controlled prompt templates with dynamic parameter injection.", icon: FileCode, connects: "Prompt Engine" },
    { title: "AI Reverse Gateway", desc: "Reverse proxy with semantic caching, rate limiting, and model failover.", icon: Network, connects: "API Gateway" },
    { title: "Vector Knowledge DB", desc: "High-speed similarity search across high-dimensional vector embeddings.", icon: Database, connects: "Knowledge Base" },
    { title: "Autonomous Agents", desc: "Goal decomposition loops executing multi-step reasoning autonomously.", icon: Bot, connects: "Agent Engine" },
    { title: "Hybrid RAG Pipeline", desc: "Dense vector retrieval coupled with BM25 sparse keyword matching.", icon: FileSearch, connects: "RAG Core" },
    { title: "Conversation Memory", desc: "Multi-turn state persistence with sliding-window summary buffers.", icon: MessageSquare, connects: "Memory State" },
    { title: "Tool & API Execution", desc: "Sandboxed function calling enabling LLMs to run SQL, REST, and tools.", icon: Code, connects: "Executors" },
    { title: "Multi-Agent Workflows", desc: "Cyclic state graph orchestration using LangGraph and CrewAI patterns.", icon: Workflow, connects: "LangGraph" },
    { title: "Dynamic LLM Router", desc: "Cost and latency routing targeting the optimal foundation model provider.", icon: Cpu, connects: "LLM Router" },
    { title: "AI Telemetry & MLOps", desc: "Real-time token analytics, hallucination tracking, and latency metrics.", icon: BarChart3, connects: "Observability" }
  ];

  // 4. Enterprise RAG & Knowledge Grounding Flow & Cards (Section 6)
  const ragFlow = [
    { step: "Enterprise Docs", icon: FileText, sub: "PDFs, SharePoint, SQL" },
    { step: "Semantic Chunking", icon: FileCode, sub: "Layout-Aware Parsing" },
    { step: "Vector Knowledge DB", icon: Database, sub: "Qdrant / Pinecone" },
    { step: "Retriever & Re-Ranker", icon: Search, sub: "Cross-Encoder Score" },
    { step: "Grounded LLM Response", icon: CheckCircle2, sub: "Verifiable Citations" }
  ];

  const ragCards = [
    { title: "Dense-Sparse Hybrid Search", desc: "Combines dense semantic vector embeddings with BM25 sparse keyword search for top-tier retrieval precision." },
    { title: "GraphRAG Entity Linkage", desc: "Builds dynamic knowledge graph entity linkages on top of vector similarity to capture cross-document relationships." },
    { title: "Cross-Encoder Re-Ranking", desc: "Applies Cohere and BGE re-rankers on retrieved knowledge chunks, filtering noise and boosting context relevance by 40%." },
    { title: "Verifiable Page-Level Citations", desc: "Every generated claim is grounded with direct clickable links to source documents, paragraph numbers, and original PDFs." },
    { title: "Layout-Aware Parsing", desc: "Advanced document processing preserving tables, markdown headers, and multi-column layouts across complex PDF reports." },
    { title: "Multi-Source Ingestion", desc: "Automated connectors syncing content in real-time from SharePoint, Confluence, Google Drive, Jira, and enterprise databases." },
    { title: "Sliding-Window Token Budgets", desc: "Dynamically manages context window limits with semantic summarization, fitting critical knowledge into LLM prompts." },
    { title: "RAGAS Automated Evaluation", desc: "Automated testing measuring Faithfulness, Answer Relevance, and Context Recall to continuously prevent hallucinations." }
  ];

  // 5. Autonomous AI Agents & Workflows (Section 7 - 8 Cards)
  const agentCards = [
    { title: "Goal Decomposition", desc: "Recursively breaks down ambiguous enterprise business objectives into deterministic, executable sub-tasks.", icon: Workflow },
    { title: "Multi-Agent Swarms", desc: "Collaborative agent swarms where researcher, writer, validator, and executor agents collaborate toward unified outcomes.", icon: Bot },
    { title: "Sandboxed Tool Calling", desc: "Secure function calling allowing models to query relational databases, invoke REST APIs, and run scripts in isolated sandboxes.", icon: Code },
    { title: "Self-Correction & Reflection", desc: "Autonomous critique loops reviewing generated draft outputs against business rules before responding to users.", icon: RefreshCw },
    { title: "Stateful Conversation Memory", desc: "Persistent vector-backed long-term episodic memory alongside short-term dialogue context across sessions.", icon: MessageSquare },
    { title: "Human-in-the-Loop Gates", desc: "Configurable approval checkpoints requiring human authorization before executing financial or high-risk actions.", icon: UserCheck },
    { title: "LangGraph State Machines", desc: "Deterministic cyclic graph orchestration with state checkpointing, error recovery, and conditional branching.", icon: Layers },
    { title: "Agent Observability & Tracing", desc: "Step-by-step reasoning trace logging using OpenTelemetry and Langfuse to inspect token usage and tool call arguments.", icon: Activity }
  ];

  // 6. Multi-Model Orchestration & LLM Routing (Section 8 - 8 Cards)
  const modelRoutingCards = [
    { title: "OpenAI Frontier Models", desc: "Native integration with GPT-4o, GPT-4.1, and o1 reasoning models for complex logic, vision, and function execution.", icon: Sparkles },
    { title: "Anthropic Claude 3.5", desc: "Claude 3.5 Sonnet and Opus integrations excelling in long-context analysis (200k tokens) and high-accuracy code generation.", icon: Cpu },
    { title: "Google Gemini on Vertex AI", desc: "Gemini 1.5 Pro multimodal processing featuring massive 2M token context windows for full-codebase and video analysis.", icon: Cloud },
    { title: "Meta Llama 3 Open Weights", desc: "Deployment of Llama 3.1 70B and 405B models within your private VPC Kubernetes clusters for 100% data sovereignty.", icon: Boxes },
    { title: "Cost & Latency Routing", desc: "Intelligent query classification routing simple queries to ultra-fast lightweight models and difficult queries to frontier LLMs.", icon: Sliders },
    { title: "Automated Provider Failover", desc: "Zero-downtime health checking instantly redirecting incoming requests to secondary providers if a primary API degrades.", icon: Network },
    { title: "Semantic Redis Caching", desc: "Caches semantically equivalent prompt responses in Redis, fulfilling recurring questions in < 50ms at zero token cost.", icon: Database },
    { title: "Private Domain Fine-Tuning", desc: "Support for domain-specific fine-tuned models using LoRA and QLoRA deployed on vLLM and TensorRT-LLM runtimes.", icon: Server }
  ];

  // 7. Enterprise AI Gateway & Security (Section 9 - 8 Cards)
  const gatewaySecCards = [
    { title: "Automated PII Redaction", desc: "High-speed regex and NER masking stripping customer credit cards, emails, and personal identifiers before payloads leave VPC.", icon: Lock },
    { title: "Prompt Injection Defense", desc: "Multi-layer heuristic and embedding classifiers detecting adversarial jailbreak attempts, system prompt leaks, and delimiter attacks.", icon: ShieldAlert },
    { title: "Token Rate Limiting", desc: "Granular tenant-based quotas, concurrency throttles, and sliding-window rate limiters preventing runaway API expenditure.", icon: BarChart3 },
    { title: "Output Safety Guardrails", desc: "NeMo Guardrails and Llama Guard filtering toxic content, unauthorized financial advice, and brand-inconsistent responses.", icon: ShieldCheck },
    { title: "Role-Based Access Control", desc: "Enterprise RBAC governing which departments, users, and microservices have authorization to query specific model endpoints.", icon: Key },
    { title: "Enterprise Identity & Auth", desc: "Standardized OAuth 2.0 and JWT token authentication integrating seamlessly with Microsoft Entra ID and Okta.", icon: Fingerprint },
    { title: "Audit Logging & Archiving", desc: "Immutable audit logs capturing user IDs, prompt versions, retrieved document IDs, token counts, and full response payloads.", icon: FileCheck },
    { title: "Private VNet & Transit Gateways", desc: "Private Link connectivity to Azure OpenAI and AWS Bedrock ensuring prompt payloads never traverse the public internet.", icon: Globe }
  ];

  // 8. Data Pipelines & Vector Storage (Section 10 - 8 Cards)
  const vectorStorageCards = [
    { title: "Qdrant Vector Engine", desc: "Rust-native vector database delivering sub-millisecond similarity search with rich payload metadata filtering.", icon: Database },
    { title: "Pinecone Serverless", desc: "Fully managed serverless vector index with automatic scaling, high availability, and zero operational management overhead.", icon: Server },
    { title: "Milvus Distributed Cluster", desc: "Cloud-native distributed vector database architected for massive multi-billion vector search workloads.", icon: HardDrive },
    { title: "PostgreSQL pgvector", desc: "Unifying relational transactional tables with high-dimensional vector embeddings inside enterprise Postgres databases.", icon: Database },
    { title: "Azure AI Search", desc: "Enterprise cognitive search platform integrating semantic re-ranking, BM25 keyword matching, and vector indices.", icon: Cloud },
    { title: "Document OCR & Extraction", desc: "Vision-based multi-modal document extraction processing tables, scanned invoices, diagrams, and complex financial PDFs.", icon: FileText },
    { title: "Asynchronous CDC Sync", desc: "Change Data Capture (CDC) streaming pipelines re-indexing vector embeddings immediately upon document modifications.", icon: RefreshCw },
    { title: "Encrypted Vector Indices", desc: "AES-256 encryption at rest and customer-managed KMS key rotation protecting sensitive vector knowledge stores.", icon: Lock }
  ];

  // 9. AI Governance & Responsible AI (Section 11 - 8 Cards)
  const governanceCards = [
    { title: "EU AI Act Alignment", desc: "Built-in risk classification, technical documentation generation, and transparency guardrails adhering to EU AI regulations.", icon: FileCheck },
    { title: "SOC 2 Type II Readiness", desc: "Continuous security control telemetry, least-privilege key management, and complete data lifecycle audit readiness.", icon: ShieldCheck },
    { title: "HIPAA Compliant Workloads", desc: "BAA-backed cloud deployments with encrypted transit, zero external data retention, and strict ePHI masking controls.", icon: BookOpen },
    { title: "Bias & Fairness Auditing", desc: "Continuous monitoring for algorithmic bias, toxic speech, and demographic skew in enterprise model responses.", icon: CheckCircle2 },
    { title: "Deterministic Fact Checking", desc: "Automated verification layer validating model assertions against retrieved ground truth documents to stop hallucinations.", icon: Search },
    { title: "Model Drift Telemetry", desc: "Real-time alerts triggered when user prompt distributions or model response distributions deviate from operational baselines.", icon: Activity },
    { title: "IP & Copyright Protection", desc: "Filters blocking verbatim ingestion of copyrighted proprietary source code and intellectual property.", icon: Shield },
    { title: "Policy as Code (OPA)", desc: "Open Policy Agent guardrails enforcing enterprise AI usage policies declaratively at the gateway boundary.", icon: Sliders }
  ];

  // 10. AI Development & MLOps Pipeline (Section 12 - 9 Steps with Code Snippets)
  const aiPipelineSteps = [
    { step: 1, name: "Problem Discovery", short: "Discovery", icon: Briefcase, desc: "Identify target enterprise AI use case, business KPIs, user personas, and data privacy boundaries.", snippet: "# Step 1: Enterprise AI Use Case Definition\nUseCase: Tier-1 Customer Support Automation\nTarget_KPI: >88% First-Contact Resolution\nPII_Policy: Strict Redaction (PCI-DSS & GDPR)" },
    { step: 2, name: "Data Ingestion", short: "Ingest", icon: HardDrive, desc: "Connect enterprise data silos across SharePoint, Confluence, Notion, and SQL databases via secure connectors.", snippet: "data_connector = EnterpriseIngestionPipeline(\n    sources=['sharepoint_hr', 'confluence_kb', 'zendesk_tickets'],\n    sync_mode='incremental_cdc'\n)\ndocs = data_connector.extract_and_clean()" },
    { step: 3, name: "Prompt Engineering", short: "Prompts", icon: FileCode, desc: "Develop and test version-controlled system prompts with dynamic parameter templates and few-shot examples.", snippet: "prompt = prompt_registry.get(\n    name='customer_support_system',\n    version='v2.4',\n    parameters={'domain': 'Fintech', 'tone': 'Professional'}\n)" },
    { step: 4, name: "Vector Indexing", short: "Embeddings", icon: Database, desc: "Chunk documents semantically and generate dense vector embeddings stored in high-performance indices.", snippet: "chunks = semantic_chunker.split(docs, chunk_size=512, overlap=64)\nvector_store.upsert(\n    vectors=embedding_model.encode(chunks),\n    metadata=chunks.metadata\n)" },
    { step: 5, name: "LLM Routing", short: "Router", icon: Cpu, desc: "Configure dynamic model routing between OpenAI, Claude, Gemini, and private open-weights LLMs.", snippet: "router = DynamicLLMRouter(\n    priority='cost_and_latency',\n    fast_model='claude-3-5-haiku',\n    reasoning_model='gpt-4o',\n    fallback='gemini-1.5-pro'\n)\nclient = router.resolve(user_query)" },
    { step: 6, name: "Agent Execution", short: "Agent Logic", icon: Bot, desc: "Build stateful multi-agent reasoning graphs and sandboxed tool-calling workflows using LangGraph.", snippet: "agent_graph = StateGraph(SupportAgentState)\nagent_graph.add_node('retrieve_kb', rag_retriever)\nagent_graph.add_node('verify_crm', crm_tool)\nagent_graph.add_node('draft_reply', llm_drafter)\nworkflow = agent_graph.compile()" },
    { step: 7, name: "Testing & Eval", short: "Eval Suite", icon: CheckCircle2, desc: "Execute automated RAGAS regression tests verifying Faithfulness, Context Recall, and Answer Relevance.", snippet: "eval_suite = RagasEvaluator(test_dataset)\nresults = eval_suite.evaluate(metrics=['faithfulness', 'context_recall'])\nassert results['faithfulness'] >= 0.95, 'Hallucination threshold breached!'" },
    { step: 8, name: "CI/CD Deployment", short: "CI/CD Deploy", icon: Zap, desc: "Containerize microservices and deploy to Kubernetes clusters with semantic caching and horizontal pod autoscaling.", snippet: "kubectl apply -f k8s/ai-gateway-deployment.yaml\nkubectl apply -f k8s/semantic-cache-redis.yaml\n# Status: 8/8 Pods Running | Health Check: PASSED" },
    { step: 9, name: "MLOps Telemetry", short: "Telemetry", icon: Activity, desc: "Continuously monitor token usage, latency, semantic drift, user feedback scores, and fine-tuning datasets.", snippet: "telemetry.log_event(\n    prompt_tokens=340, completion_tokens=120,\n    cache_hit=True, latency_ms=42,\n    model='gpt-4o', guardrail_status='CLEAN'\n)" }
  ];

  // 11. Technology Stack Data (Section 13)
  const techStackData = {
    "AI Frameworks": [
      { name: "LangChain", desc: "Composable SDK for chaining LLMs, vector retrievers, and prompt templates.", icon: Workflow },
      { name: "LlamaIndex", desc: "Data framework specialized in connecting private enterprise datasets to LLMs.", icon: FileSearch },
      { name: "LangGraph", desc: "Cyclic multi-agent state graph orchestration for complex workflows.", icon: Layers },
      { name: "Semantic Kernel", desc: "Enterprise SDK integrating traditional programming languages with AI models.", icon: Code }
    ],
    "Foundation Models": [
      { name: "OpenAI GPT-4o", desc: "Frontier reasoning model with native multimodal vision and function calling.", icon: Sparkles },
      { name: "Anthropic Claude 3.5", desc: "Benchmark-leading coding and analytical model with 200k context window.", icon: Cpu },
      { name: "Google Gemini 1.5", desc: "Multimodal 2M token context window model hosted on Google Cloud Vertex AI.", icon: Cloud },
      { name: "Meta Llama 3.1", desc: "State-of-the-art open-weights model for private self-hosted Kubernetes setups.", icon: Boxes },
      { name: "Mistral AI Large", desc: "High-efficiency European models delivering exceptional reasoning speed.", icon: Zap }
    ],
    "Vector Databases": [
      { name: "Qdrant", desc: "High-performance Rust vector database with payload filtering and vector indexing.", icon: Database },
      { name: "Pinecone", desc: "Fully managed serverless vector database engineered for enterprise scale.", icon: Server },
      { name: "Weaviate", desc: "Cloud-native open-source vector search engine with integrated hybrid search.", icon: Layers },
      { name: "Milvus", desc: "Distributed vector database built for massive multi-billion embedding datasets.", icon: HardDrive },
      { name: "Azure AI Search", desc: "Microsoft enterprise search combining vector indexing and semantic re-ranking.", icon: Cloud }
    ],
    "MLOps & Eval": [
      { name: "Ragas", desc: "Framework for reference-free evaluation of Retrieval-Augmented Generation.", icon: CheckCircle2 },
      { name: "Langfuse", desc: "Open-source LLM engineering platform for tracing, evals, and prompt management.", icon: Activity },
      { name: "NeMo Guardrails", desc: "NVIDIA safety toolkit adding programmable operational guardrails to LLMs.", icon: ShieldCheck },
      { name: "Weights & Biases", desc: "ML developer platform for experiment tracking and model registry management.", icon: BarChart3 }
    ],
    "Cloud & Compute": [
      { name: "Azure AI Foundry", desc: "Unified enterprise hub for deploying, fine-tuning, and monitoring models.", icon: Cloud },
      { name: "Azure OpenAI", desc: "Secure enterprise OpenAI instance backed by Azure enterprise compliance.", icon: Shield },
      { name: "AWS Bedrock", desc: "Fully managed access to foundation models with enterprise VPC security.", icon: Server },
      { name: "Google Vertex AI", desc: "Google Cloud ML platform for Gemini deployment and custom model tuning.", icon: Cpu }
    ],
    "Embeddings & Rerank": [
      { name: "Cohere Embed & Rerank", desc: "Top-tier cross-encoder re-ranking and multilingual embedding models.", icon: Search },
      { name: "OpenAI Embeddings", desc: "High-dimensional text-embedding-3-large embeddings for semantic search.", icon: Database },
      { name: "Voyage AI", desc: "Specialized domain embeddings optimized for financial and code retrieval.", icon: Zap },
      { name: "BGE Reranker", desc: "State-of-the-art open-weights re-ranking model for local cluster deployment.", icon: RefreshCw }
    ]
  };

  // 12. Business Outcomes KPI Cards (Section 14 - 6 Cards)
  const businessOutcomes = [
    { value: "10×", title: "Faster AI Rollout", desc: "Accelerate production deployment from months to weeks using pre-built enterprise frameworks.", highlight: "from-rose-500 to-red-600" },
    { value: "60%", title: "Lower Token Costs", desc: "Slash monthly LLM bills through semantic caching, prompt compression, and intelligent model routing.", highlight: "from-blue-500 to-indigo-600" },
    { value: "99.2%", title: "Retrieval Accuracy", desc: "Virtually eliminate hallucinations with multi-stage hybrid RAG and cross-encoder re-ranking.", highlight: "from-emerald-500 to-teal-600" },
    { value: "Zero", title: "PII Leakage", desc: "Automated client-side and gateway masking protecting sensitive customer data before API egress.", highlight: "from-purple-500 to-rose-500" },
    { value: "10×", title: "Agent Automation", desc: "Deploy autonomous multi-agent swarms resolving complex enterprise workflows without human delay.", highlight: "from-amber-500 to-orange-600" },
    { value: "< 350ms", title: "Cache Latency", desc: "Ultra-fast Redis semantic cache serving recurring enterprise queries with near-zero latency.", highlight: "from-cyan-500 to-blue-600" }
  ];

  // 13. Use Cases (Section 15 - 8 Cards)
  const useCases = [
    { title: "Autonomous Customer Support", desc: "Tier-1 support automation resolving tickets, drafting accurate responses, and integrating with Zendesk and ServiceNow.", icon: MessageSquare },
    { title: "Enterprise Knowledge Search", desc: "Unified semantic search indexing Confluence, SharePoint, Jira, and documentation with verifiable page citations.", icon: Search },
    { title: "Intelligent Document Processing", desc: "Automated extraction and structured insight generation from complex multi-page PDFs, invoices, and financial reports.", icon: FileText },
    { title: "Contract Analysis & Legal RAG", desc: "Auditing legal agreements for compliance clauses, indemnity risks, expiration dates, and non-standard terms.", icon: FileSearch },
    { title: "HR Employee Assistant", desc: "Employee self-service virtual agent answering questions on company policies, healthcare benefits, and onboarding.", icon: Users },
    { title: "Financial Analysis & SEC Filings", desc: "Automated SEC 10-K filing analysis, earnings call summarization, and balance sheet anomaly detection.", icon: BarChart3 },
    { title: "DevOps Incident Triage Agent", desc: "Analyzing Kubernetes error logs, matching previous post-mortems, and suggesting automated remediation playbooks.", icon: Activity },
    { title: "Code Intelligence & PR Review", desc: "Automated pull request review agent detecting security flaws, anti-patterns, and drafting documentation.", icon: Code }
  ];

  // 14. Related Accelerators (Section 16 - 5 Cards)
  const relatedAccelerators = [
    { title: "Security Framework", desc: "Zero-trust compliance guardrails, automated vulnerability scanning, and identity governance.", href: "/ecosystem/accelerators-frameworks/security-framework", tag: "Cybersecurity" },
    { title: "Cloud Accelerator", desc: "Reusable IaC modules for rapid multi-cloud foundation and network infrastructure deployment.", href: "/ecosystem/accelerators-frameworks/cloud-accelerator", tag: "Cloud IaC" },
    { title: "DevOps Accelerator", desc: "Enterprise CI/CD pipeline templates, GitOps automation, and Kubernetes manifests.", href: "/ecosystem/accelerators-frameworks/devops-accelerator", tag: "DevOps CI/CD" },
    { title: "Data Framework", desc: "Modern data platform blueprints, warehouse lakehouses, and analytics pipelines.", href: "/ecosystem/accelerators-frameworks/data-framework", tag: "Data Platform" },
    { title: "Landing Zone Portal", desc: "Explore enterprise cloud landing zone blueprints and IaC repository directory.", href: "/ecosystem/accelerators-frameworks/landing-zone", tag: "Landing Zone" }
  ];

  // 15. FAQ List (Section 17 - 8 Items)
  const faqs = [
    {
      q: "What is the Devopstrio Enterprise AI Framework?",
      a: "The Devopstrio Enterprise AI Framework is a battle-tested engineering blueprint providing reusable architectures, APIs, prompt registries, hybrid vector search, autonomous AI agent orchestration, and MLOps deployment pipelines. It enables organizations to build secure, scalable, and hallucination-free AI applications rapidly rather than assembling fragile raw API wrappers."
    },
    {
      q: "Which foundation models and LLM providers are supported?",
      a: "Our framework abstracts the model layer, natively supporting OpenAI (GPT-4o, GPT-4.1, o1), Anthropic (Claude 3.5 Sonnet & Opus), Google (Gemini 1.5 Pro on Vertex AI), Meta (Llama 3.1 70B & 405B), Microsoft Azure OpenAI Service, Mistral AI, and custom private fine-tuned models hosted on vLLM."
    },
    {
      q: "How does the framework prevent hallucinations in production?",
      a: "We implement multi-stage hybrid RAG: dense vector embeddings combined with BM25 sparse keyword retrieval, followed by cross-encoder re-ranking. All outputs require page-level citations linked directly to enterprise source documents, and continuous automated RAGAS evaluations verify Faithfulness before responses reach users."
    },
    {
      q: "Can we build autonomous multi-agent systems?",
      a: "Yes. The framework includes multi-agent orchestration templates using LangGraph and CrewAI patterns. This allows specialized agents (such as researchers, analysts, and reviewers) to coordinate, decompose goals, and invoke sandboxed enterprise tools safely."
    },
    {
      q: "Which vector databases and data sources are compatible?",
      a: "The framework integrates out of the box with Qdrant, Pinecone, Weaviate, Milvus, Azure AI Search, and PostgreSQL with pgvector. It connects to enterprise data repositories including SharePoint, Confluence, Google Drive, Jira, and relational SQL databases."
    },
    {
      q: "Can we deploy private, self-hosted open-weights models for data sovereignty?",
      a: "Yes. For strict data residency requirements, you can deploy open-weights models (such as Llama 3 or Mistral) inside your own private Kubernetes cluster or VPC using containerized inference engines like vLLM and TensorRT-LLM, ensuring 100% of data stays within your enterprise perimeter."
    },
    {
      q: "How does the framework manage token costs and latency?",
      a: "Our Enterprise AI Gateway features high-speed Redis semantic caching that answers semantically equivalent queries in < 50ms at zero API cost. The dynamic model router directs simpler queries to fast, cost-efficient models while reserving frontier reasoning models for complex tasks, slashing token bills by up to 60%."
    },
    {
      q: "How does the framework address AI governance, security, and the EU AI Act?",
      a: "The framework enforces client-side and gateway-level PII scrubbing, prompt injection classification, output guardrails via NeMo, role-based access control (RBAC), and comprehensive request/response audit trails aligning with SOC 2, HIPAA, and EU AI Act compliance standards."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
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
              Enterprise AI Framework
            </span>
          </>
        }
        subtitle="Accelerate enterprise AI application development using battle-tested blueprints for autonomous agent swarms, hybrid RAG knowledge grounding, multi-model LLM routing, and enterprise-grade MLOps governance."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "ENTERPRISE AI FRAMEWORK" }
        ]}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Hero Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Autonomous Agents",
              "Hybrid RAG",
              "Multi-Model Gateway",
              "Vector Knowledge Stores",
              "AI Governance",
              "MLOps Telemetry"
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-mono font-bold tracking-wide bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
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
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer hover:scale-105"
            >
              Explore AI Framework
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-rose-500" />
              Schedule an AI Strategy Session
            </button>
          </div>
        </div>
      </Hero>

      {/* 2. FOUNDATIONAL OVERVIEW SECTION */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block">
              FOUNDATIONAL OVERVIEW
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Production-Grade AI Application Engineering
            </h2>
          </Reveal>

          {/* Overview Highlights 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Autonomous Agent Systems", icon: Bot, desc: "Multi-agent graph coordination, goal decomposition, and secure tool execution with LangGraph." },
              { title: "Enterprise RAG Grounding", icon: Database, desc: "Hybrid dense-sparse vector search, layout-aware parsing, and verifiable citations." },
              { title: "Multi-Model LLM Gateway", icon: Network, desc: "Intelligent routing, semantic Redis caching, and automated provider failover across models." },
              { title: "MLOps & AI Governance", icon: ShieldCheck, desc: "NeMo safety guardrails, automated PII scrubbing, token telemetry, and EU AI Act compliance." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CHALLENGES SECTION (8 CARDS) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE ADOPTION RISKS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Challenges We Address
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessChallenges.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-bold">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. AI FRAMEWORK ARCHITECTURE (6-LAYER INTERACTIVE STACK) */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE BLUEPRINT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              AI Framework Architecture
            </h2>
          </Reveal>

          {/* Layer Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
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
                  <span className="text-xs md:text-sm font-bold block truncate">{layer.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Detail Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            {architectureLayers.map((layer) => {
              if (layer.name !== activeArchLayer) return null;
              const Icon = layer.icon;
              return (
                <div key={layer.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-rose-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{layer.name}</h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                      {layer.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {layer.components.map((comp, idx) => (
                      <div key={idx} className="p-4 bg-black rounded-xl border border-zinc-850 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                        <span className="text-sm font-bold text-zinc-200">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CORE AI COMPONENTS (10 CARDS - 5 COL GRID) */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              10 CORE COMPONENTS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Core AI Components
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreAIComponents.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 md:p-6 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold self-start uppercase">
                    {cap.connects}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE RAG & KNOWLEDGE GROUNDING (FLOW + 8 CARDS) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              GROUNDED INTELLIGENCE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Enterprise RAG & Knowledge Grounding
            </h2>
          </Reveal>

          {/* RAG Workflow Flowchart */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {ragFlow.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-900 w-full md:w-52">
                  <step.icon className="w-6 h-6 text-rose-500 mb-2" />
                  <span className="text-xs md:text-sm font-bold text-white">{step.step}</span>
                  <span className="text-xs text-zinc-400 font-mono mt-0.5">{step.sub}</span>
                </div>
                {i < 4 && <ArrowRight className="w-5 h-5 text-rose-500 hidden md:block shrink-0" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ragCards.map((rag, idx) => (
              <div
                key={idx}
                className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {rag.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {rag.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AUTONOMOUS AI AGENTS & WORKFLOWS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              AGENTIC REASONING
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Autonomous AI Agents & Workflows
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. MULTI-MODEL ORCHESTRATION & ROUTING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              MODEL AGNOSTIC
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Multi-Model Orchestration & LLM Routing
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelRoutingCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. ENTERPRISE AI GATEWAY & SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              API SECURITY & DEFENSE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Enterprise AI Gateway & Security
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gatewaySecCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. DATA PIPELINES & VECTOR STORAGE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              VECTOR INFRASTRUCTURE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Data Pipelines & Vector Storage
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vectorStorageCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. AI GOVERNANCE & RESPONSIBLE AI */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              ETHICS & REGULATION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              AI Governance & Responsible AI
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. AI DEVELOPMENT & MLOPS PIPELINE (INTERACTIVE TERMINAL INSPECTOR) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              MLOPS AUTOMATION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              AI Development & MLOps Pipeline
            </h2>
          </Reveal>

          {/* Pipeline Stage Selector Buttons */}
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-8">
            {aiPipelineSteps.map((stg, idx) => {
              const isCurrent = activePipelineStep === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-xs font-mono text-rose-400 font-bold block mb-0.5">
                    Step {stg.step}
                  </span>
                  <span className="text-xs font-bold block truncate">{stg.short}</span>
                </button>
              );
            })}
          </div>

          {/* Inspector Panel */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                Step {aiPipelineSteps[activePipelineStep].step} of 9: {aiPipelineSteps[activePipelineStep].short}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {aiPipelineSteps[activePipelineStep].name}
              </h3>
              <p className="text-sm md:text-base text-zinc-300 font-normal leading-relaxed">
                {aiPipelineSteps[activePipelineStep].desc}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActivePipelineStep((prev) => (prev > 0 ? prev - 1 : 8))}
                  className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs md:text-sm font-bold text-zinc-300 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActivePipelineStep((prev) => (prev + 1) % 9)}
                  className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs md:text-sm font-bold text-white cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black rounded-2xl p-5 border border-zinc-900 font-mono text-xs md:text-sm text-emerald-400 overflow-x-auto shadow-inner">
              <div className="flex justify-between text-zinc-500 text-xs mb-3 pb-2 border-b border-zinc-900">
                <span>mlops-step-{aiPipelineSteps[activePipelineStep].step}.py</span>
                <span>EXECUTION LOG</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {aiPipelineSteps[activePipelineStep].snippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Technology Stack
            </h2>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(techStackData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
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
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal mt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. BUSINESS OUTCOMES (LARGE KPI CARDS) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              MEASURABLE IMPACT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Business Outcomes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-8 md:p-9 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div>
                  <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${outcome.highlight} tracking-tight block mb-3`}>
                    {outcome.value}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. USE CASES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              PRODUCTION BLUEPRINTS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Enterprise Use Cases
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. RELATED ACCELERATORS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM SYNERGY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Related Accelerators
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAccelerators.map((acc, idx) => (
              <Link
                key={idx}
                href={acc.href}
                className="p-6 md:p-7 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {acc.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {acc.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {acc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FAQ SECTION */}
      <FAQ faqs={faqs} />

      {/* 18. CTA SECTION */}
      <CTA
        ctaTitle="Accelerate Enterprise"
        ctaHighlight="AI Innovation"
        ctaDesc="Adopt the Devopstrio Enterprise AI Framework to build secure, agentic, and compliant generative AI applications with enterprise governance."
        ctaBtnText="SCHEDULE AI SESSION"
        backLink="/ecosystem/accelerators-frameworks"
      />

      {/* STRATEGY SESSION & ASSESSMENT MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            <button
              onClick={() => {
                setModalOpen(false);
                setModalSubmitted(false);
              }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Strategy Session Requested!</h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Thank you for your interest in the Devopstrio Enterprise AI Framework. Our principal AI architects will contact you within 24 hours to schedule your enterprise strategy workshop.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setModalSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs md:text-sm font-bold text-white rounded-full transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-rose-500 font-bold uppercase block mb-1">
                    DEVOPSTRIO AI WORKSHOP
                  </span>
                  <h3 className="text-xl font-bold text-white">Schedule an AI Strategy Session</h3>
                </div>

                <div className="space-y-3 text-xs md:text-sm">
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
                      <option value="Hybrid RAG & Enterprise Search">Hybrid RAG & Enterprise Knowledge Search</option>
                      <option value="Autonomous AI Agents & Swarms">Autonomous AI Agents & Swarms</option>
                      <option value="Multi-Model LLM Gateway & Routing">Multi-Model LLM Gateway & Dynamic Routing</option>
                      <option value="Private Model Hosting (vLLM / Llama)">Private Model Hosting (vLLM / Llama 3)</option>
                      <option value="MLOps & AI Governance Guardrails">MLOps & AI Governance (EU AI Act & SOC 2)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Project & Technical Scope</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current enterprise AI use cases or technical requirements..."
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
