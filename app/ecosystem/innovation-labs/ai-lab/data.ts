/* ==================================================================
 * AI LAB CONTENT
 * All copy lives here so the page layout stays clean.
 * Items marked DRAFT were not in the original page and were written
 * from the lab's own capability descriptions. Review before publishing.
 * ================================================================== */

export const focusAreas = [
  { title: "Applied Agentic R&D", text: "Prototyping stateful multi-agent architectures, dynamic tool coordination, and deterministic execution loops." },
  { title: "Private Model Serving", text: "Benchmarking quantized LLM runtimes, continuous batching, and vLLM throughput on isolated GPU nodes." },
  { title: "Context & Retrieval Engineering", text: "Engineering hybrid dense-sparse indexing, reciprocal rank fusion, and semantic caching layers." },
  { title: "Model Evaluation & Guardrails", text: "Continuous red-teaming, automated Ragas benchmarking, and token-level PII/toxicity guardrails." },
];

export const heroBadges = [
  { value: "<50ms", label: "Time-to-first-token on private GPU serving" },
  { value: "99.4%", label: "Precision on schema-constrained JSON extraction" },
];

export const capabilities = [
  { icon: "Bot", title: "Multi-Agent System Orchestration", text: "Architect stateful multi-agent networks using LangGraph and CrewAI with shared memory, dynamic handoffs, and deterministic state transitions." },
  { icon: "Server", title: "Self-Hosted LLM Serving", text: "Deploy and optimize open-weight foundation models on private clusters using vLLM, TensorRT-LLM, and PagedAttention for sub-50ms TTFT." },
  { icon: "Search", title: "Hybrid Dense-Sparse RAG", text: "Construct high-precision retrieval engines combining dense vector embeddings with sparse BM25 scoring and cross-encoder rerankers." },
  { icon: "SlidersHorizontal", title: "Domain Fine-Tuning & QLoRA", text: "Specialize foundation models using LoRA, QLoRA, and Unsloth pipelines with curated domain datasets, instruction tuning, and DPO alignment." },
  { icon: "Plug", title: "Model Context Protocol (MCP)", text: "Implement standardized Model Context Protocol interfaces connecting enterprise reasoning graphs directly to REST APIs and microservices." },
  { icon: "ShieldCheck", title: "Token Guardrails & Red-Teaming", text: "Enforce real-time output safety, PII redaction, prompt injection defense, and hallucination audits via NeMo Guardrails and custom evaluators." },
  { icon: "FileText", title: "Document & Multimodal Vision", text: "Extract structured data from unstructured enterprise documents, technical diagrams, and PDFs using LayoutLM and multimodal vision models." },
  { icon: "Activity", title: "Continuous MLOps & Observability", text: "Track token throughput, latency percentiles (p50/p99), prompt drift, embedding degradation, and semantic quality using MLflow and TruLens." },
];

export const framework = [
  { icon: "Compass", title: "Assess", text: "Evaluate target workflows, data taxonomy, token economics, latency tolerances, and model suitability across proprietary operations." },
  { icon: "PenTool", title: "Design", text: "Blueprint agent state graphs, retrieval index topologies, embedding dimensions, context window limits, and fallback logic." },
  { icon: "FlaskConical", title: "Prototype", text: "Implement sandboxed proof-of-concepts, benchmark prompt variants against curated ground-truth evaluation sets, and test tool integrations." },
  { icon: "Hammer", title: "Build", text: "Engineer production inference runtimes, streaming API endpoints, vector storage clusters, Redis semantic caches, and security firewalls." },
  { icon: "Rocket", title: "Deploy", text: "Roll out containerized inference runtimes on dedicated Kubernetes GPU worker pools with horizontal pod autoscaling and Canary routing." },
  { icon: "Gauge", title: "Optimize", text: "Perform continuous Ragas evaluation runs, prune context bloat, fine-tune adapters via DPO, and optimize GPU compute unit costs." },
];

export const deliverables = [
  { title: "Multi-Agent Workflow Engine", text: "Deterministic multi-agent coordination frameworks executing multi-step business logic across internal systems." },
  { title: "Private Sovereign RAG Platform", text: "Zero-data-leakage vector search pipelines indexing internal wikis, code repos, and technical documentation." },
  { title: "High-Throughput Local LLM Gateway", text: "Centralized internal proxy routing requests across vLLM and TensorRT-LLM instances with semantic caching." },
  { title: "Automated Document & Claims Extractor", text: "Vision-augmented parsing engine converting complex unstructured PDFs and scanned forms into typed JSON schemas." },
  { title: "Real-Time Model Guardrail Proxy", text: "Ultra-low-latency intermediary validating prompt inputs and model outputs against prompt injection and PII leakage." },
  { title: "Synthetic Data & DPO Sandbox", text: "Automated pipeline synthesizing edge-case evaluation datasets and fine-tuning adapters for specialized enterprise domains." },
  { title: "Text-to-SQL Semantic Synthesizer", text: "Deterministic text-to-SQL generation engine with strict schema-constrained grammar and read-only VPC execution." },
  { title: "Multimodal Vision Audit System", text: "Edge-capable computer vision inference engine auditing manufacturing defects and document security seals." },
];

export const architectureLayers = [
  { title: "Client & Interaction Layer", items: ["Web copilots", "Streaming chat interfaces", "Internal agent dashboards", "IDE code extensions", "Slack / Teams bot runtimes"] },
  { title: "API Gateway & Safety Layer", items: ["FastAPI endpoints", "Token rate limiting", "PII masking", "Prompt injection firewalls", "NeMo Guardrails", "Semantic response caching"] },
  { title: "Agent Orchestration Layer", items: ["LangGraph state coordinators", "Dynamic routing", "Multi-step reasoning loops", "Context compaction", "Tool execution runtimes"] },
  { title: "Retrieval & Semantic Memory Layer", items: ["Qdrant vector clusters", "pgvector embeddings", "Hybrid BM25 indexes", "Cross-encoder rerankers", "Redis episodic memory"] },
  { title: "Foundation Model & Inference Layer", items: ["vLLM GPU clusters", "TensorRT-LLM runtimes", "Quantized GGUF / AWQ models", "LoRA task adapters", "Private cloud VPC endpoints"] },
  { title: "MLOps, Governance & Evaluation Layer", items: ["Ragas benchmark suites", "MLflow experiment registries", "Ray distributed workers", "GPU telemetry", "Audit logging"] },
];

export const techStack = ["LangGraph", "vLLM", "TensorRT-LLM", "Qdrant", "pgvector", "Unsloth (QLoRA)", "FastAPI", "Model Context Protocol (MCP)", "NeMo Guardrails", "MLflow", "Ray Serve", "LlamaIndex"];

export const scenarios = [
  {
    title: "Enterprise Knowledge Retrieval",
    summary: "Answers grounded in your own wikis, repos and documentation, with citations and access control.",
    points: [
      "Hybrid vector & keyword indexing over enterprise wikis",
      "Reciprocal rank fusion with cross-encoder reranking",
      "Deterministic source citation and hallucination detection",
      "Role-based access control (RBAC) synced to Active Directory",
    ],
    builtWith: ["Hybrid Dense-Sparse RAG", "Token Guardrails & Red-Teaming"],
    hasImage: true,
  },
  {
    title: "Autonomous Operations & Agents",
    summary: "Agents that run multi-step operational workflows across internal tools, with guardrails on every action.",
    points: [],
    builtWith: ["Multi-Agent System Orchestration", "Model Context Protocol (MCP)", "Token Guardrails & Red-Teaming"],
    hasImage: false,
  },
  {
    title: "Document & Claims Processing",
    summary: "Turns scanned forms and PDFs into typed, validated records for downstream systems.",
    points: [],
    builtWith: ["Document & Multimodal Vision", "Domain Fine-Tuning & QLoRA"],
    hasImage: false,
  },
  {
    title: "Algorithmic Risk & Anomaly Detection",
    summary: "Models tuned to your domain and monitored continuously so drift is caught early.",
    points: [],
    builtWith: ["Domain Fine-Tuning & QLoRA", "Continuous MLOps & Observability"],
    hasImage: false,
  },
  {
    title: "Software Engineering Copilots",
    summary: "Code assistants that answer from your repositories and documentation inside the IDE.",
    points: [],
    builtWith: ["Multi-Agent System Orchestration", "Hybrid Dense-Sparse RAG"],
    hasImage: false,
  },
  {
    title: "Clinical & Regulated Intelligence",
    summary: "Grounded assistants for regulated environments, with redaction and audit trails.",
    points: [],
    builtWith: ["Token Guardrails & Red-Teaming", "Hybrid Dense-Sparse RAG"],
    hasImage: false,
  },
];

export const outcomes = [
  { value: "<50ms", label: "Time-to-first-token (TTFT)", sub: "Private GPU serving" },
  { value: "99.4%", label: "JSON schema precision", sub: "Schema-constrained extraction" },
  { value: "90%", label: "Token spend reduction", sub: "Up to, via prompt caching" },
  { value: "100%", label: "Private VPC sovereignty", sub: "Isolated inside client VPCs" },
  { value: "24/7", label: "Model drift monitoring", sub: "Continuous evaluation" },
];

export const outcomeBullets = [
  "Sub-second hybrid dense-sparse vector search across millions of documents",
  "Zero-data-leakage architecture strictly isolated inside client VPCs",
  "Deterministic multi-agent execution with automated rollback guarantees",
  "Production MLOps pipelines with continuous automated Ragas regression testing",
  "SLO-backed inference runtimes with horizontal GPU pod autoscaling",
];

export const differentiators = [
  { title: "Systems Engineers, Not Just Prompters", text: "We treat AI as a distributed systems engineering challenge, focusing on GPU throughput, memory paging, latency budgets, and deterministic fallbacks." },
  { title: "Data Sovereignty & Zero Third-Party Leakage", text: "We specialize in self-hosted open-weights runtimes deployed entirely inside your AWS, Azure, or GCP private VPC networks without external data sharing." },
  { title: "Deterministic Multi-Agent Architectures", text: "Our agent graphs use strict state machine transitions, typed schema contracts, and human-in-the-loop escalation paths to eliminate unconstrained loops." },
  { title: "End-to-End MLOps & Lifecycle Governance", text: "From initial prompt benchmarking to continuous LoRA adapter retraining and real-time observability, we manage the complete model lifecycle." },
];

export const otherLabs = [
  { icon: "Cloud", title: "Cloud Innovation Lab", text: "Architecting zero-trust cloud pipelines, hybrid-mesh setups, and automated scalability patterns.", href: "#" },
  { icon: "GitBranch", title: "DevOps Innovation Lab", text: "Pioneering continuous release engines, GitOps architectures, and automated regression frameworks.", href: "#" },
  { icon: "Lock", title: "Cybersecurity Lab", text: "Building Zero Trust directory gateways, threat simulation networks, and compliance grids.", href: "#" },
  { icon: "Database", title: "Data & Analytics Lab", text: "Constructing high-throughput data lakes, pipeline analytics indexes, and real-time visualization portals.", href: "#" },
];

// Q1 is the original answer. Q2 to Q10 are DRAFT answers built from the lab's capabilities.
export const faqs = [
  {
    q: "How does the AI Lab prevent proprietary enterprise data from training external models?",
    a: "All models tested and deployed in our AI Lab run entirely within dedicated, isolated client VPC environments or on-premises GPU nodes. We use self-hosted open-weight architectures (vLLM, TensorRT-LLM) where data never leaves your network perimeter, ensuring complete compliance with GDPR, HIPAA, and corporate IP standards.",
  },
  {
    q: "What is the difference between simple prompt engineering and your multi-agent architecture?",
    a: "DRAFT: Prompt engineering shapes a single model call. Our multi-agent architecture uses stateful agent graphs with shared memory, typed contracts and explicit state transitions, so multi-step work can be routed, checked and rolled back deterministically.",
  },
  {
    q: "How do you evaluate and eliminate hallucinations in production RAG systems?",
    a: "DRAFT: Answers are grounded in retrieved sources with deterministic citations and hallucination detection. Retrieval quality is measured with automated Ragas benchmarks, and every release goes through regression testing before rollout.",
  },
  {
    q: "How quickly can a lab prototype transition into enterprise production?",
    a: "DRAFT: Prototypes go through the same stages as production work: assess, design, prototype, build, deploy and optimize. Timelines depend on data readiness, integrations and latency targets, and are agreed during the assessment stage.",
  },
  {
    q: "What GPU serving frameworks and optimization runtimes does the AI Lab benchmark?",
    a: "DRAFT: We benchmark vLLM and TensorRT-LLM, with PagedAttention, continuous batching and quantized GGUF / AWQ models, on isolated GPU nodes and Kubernetes GPU worker pools.",
  },
  {
    q: "How does the AI Lab address model drift and continuous evaluation post-deployment?",
    a: "DRAFT: Token throughput, latency percentiles, prompt drift and embedding degradation are tracked continuously with MLflow and TruLens, with scheduled Ragas evaluation runs and adapter retraining when quality drops.",
  },
  {
    q: "Can the AI Lab build custom fine-tuned models on specialized domain datasets?",
    a: "DRAFT: Yes. We specialize open-weight foundation models using LoRA, QLoRA and Unsloth pipelines, with curated domain datasets, instruction tuning and DPO alignment.",
  },
  {
    q: "How does the lab integrate Model Context Protocol (MCP) and external enterprise APIs?",
    a: "DRAFT: We implement standardized MCP interfaces that connect enterprise reasoning graphs directly to REST APIs and microservices, behind the API gateway and safety layer.",
  },
  {
    q: "What FinOps mechanisms does the AI Lab implement to control LLM operational costs?",
    a: "DRAFT: Cost control combines semantic response and prompt caching, token rate limiting, context pruning, self-hosted inference and GPU compute cost optimisation.",
  },
  {
    q: "How do you enforce security guardrails and jailbreak prevention in deployed AI solutions?",
    a: "DRAFT: Inputs and outputs are checked in real time for prompt injection, PII leakage and unsafe content using NeMo Guardrails and custom evaluators, with red-teaming before and after deployment.",
  },
];
