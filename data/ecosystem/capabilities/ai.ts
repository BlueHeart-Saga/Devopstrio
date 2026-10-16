import { CapabilityPageData } from "./types";

export const aiCapabilities: Record<string, CapabilityPageData> = {
  "generative-ai-pipelines": {
    slug: "generative-ai-pipelines",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "Generative AI Pipelines",
    tag: "Next-Gen AI",
    badge: "High-Throughput Enterprise Architecture",
    subtitle: "Deploy resilient, production-ready LLM pipelines. From hybrid dense-sparse RAG and semantic caching to vLLM serving, stateful multi-agent orchestration, and deterministic safety guardrails.",
    metrics: [
      { val: "< 42ms", label: "Time to First Token (TTFT)", sub: "99th percentile" },
      { val: "14,500+", label: "Tokens / Sec Ingestion", sub: "Distributed throughput" },
      { val: "68%", label: "Token & Compute Cost Saved", sub: "Via semantic caching" },
      { val: "99.98%", label: "Pipeline Reliability SLA", sub: "Zero single point of failure" }
    ],
    capabilities: [
      {
        id: "hybrid-rag",
        title: "Hybrid RAG & Semantic Retrieval",
        tag: "Vector Architecture",
        badge: "High-Recall Ingestion",
        latencyBadge: "< 14ms Query Latency",
        desc: "Combines dense vector embeddings with sparse lexical search (BM25) and neural cross-encoder re-ranking to deliver zero-hallucination domain knowledge to frontier foundation models.",
        stats: [
          "Sub-15ms multi-tenant vector similarity querying with HNSW indexes",
          "Cohere neural re-ranking with reciprocal rank fusion (RRF) at 0.942 precision",
          "Automated chunk deduplication and hierarchical markdown tree parsing"
        ],
        terminal: {
          command: "pipeline.retrieve({ query: 'quarterly_ebitda_compliance', topK: 5 })",
          status: "200 OK | RECALL 99.4%",
          logs: [
            { type: "comment", text: "// Ingesting query into embedding pipeline" },
            { type: "step", text: "> dense_encoder: text-embedding-3-large [1536 dim]" },
            { type: "step", text: "> sparse_encoder: BM25 token frequency index" },
            { type: "step", text: "> cross_encoder: cohere-rerank-v3 (top_k=25 -> 5)" },
            { type: "success", text: "> context_window: 1,840 tokens compiled (cosine: 0.941)" },
            { type: "info", text: "> telemetry.provenance: verified against 4 indexed docs" }
          ]
        }
      },
      {
        id: "context-caching",
        title: "Stateful Context & Semantic Caching",
        tag: "Latency Optimization",
        badge: "Token FinOps",
        latencyBadge: "< 6ms Cache Hit",
        desc: "Reduces repetitive LLM compute and token expenditures by up to 68% using in-memory semantic cache lookups, prompt compression, and prefix KV-cache reuse.",
        stats: [
          "Up to 68% direct reduction in foundation model API token consumption",
          "< 8ms cached query response time from Redis Enterprise edge clusters",
          "Dynamic prompt compression with entropy-based token pruning algorithms"
        ],
        terminal: {
          command: "cache.lookup({ embedding: hash, threshold: 0.96 })",
          status: "CACHE_HIT (SAVED $0.042)",
          logs: [
            { type: "comment", text: "// Checking semantic distance in Redis Enterprise" },
            { type: "step", text: "> vector_distance: 0.024 (threshold: <= 0.040)" },
            { type: "success", text: "> cache_hit: TRUE -> serving warm response payload" },
            { type: "info", text: "> latency_saved: 840ms -> edge return in 6.2ms" },
            { type: "info", text: "> prompt_tokens: 0 billed to foundation model API" }
          ]
        }
      },
      {
        id: "agentic-orchestration",
        title: "Agentic Routing & LangGraph Loops",
        tag: "Autonomous Orchestration",
        badge: "Stateful Workflows",
        latencyBadge: "Zero-Loss Checkpointing",
        desc: "Implements deterministic multi-agent graphs with persistent checkpointers, fallback rerouting, human-in-the-loop approvals, and external database tool bindings.",
        stats: [
          "Cyclic multi-step tool execution with state recovery on transient failure",
          "Automated schema validation on structured JSON outputs via Pydantic",
          "Dynamic model routing between SLMs (Llama 3.1 8B) and Frontier LLMs"
        ],
        terminal: {
          command: "langgraph.dispatch({ task: 'audit_invoice_anomalies' })",
          status: "AGENT_LOOP COMPLETED (3 STEPS)",
          logs: [
            { type: "comment", text: "// Executing supervisor state machine" },
            { type: "step", text: "> agent[router]: delegated to postgres_query_tool" },
            { type: "step", text: "> tool[postgres]: retrieved 14 purchase records" },
            { type: "step", text: "> agent[analyst]: detected reconciliation variance £4,210" },
            { type: "success", text: "> schema_validator: pydantic output verified 100%" }
          ]
        }
      },
      {
        id: "guardrails-safety",
        title: "Deterministic Guardrails & PII Sanitization",
        tag: "Security & Governance",
        badge: "Enterprise Shield",
        latencyBadge: "Zero Data Leakage",
        desc: "Inspects incoming prompts and outgoing generations in real-time to redact PII, block prompt injections, verify factual consistency, and enforce strict regulatory compliance.",
        stats: [
          "Zero data leakage with automatic regex & spaCy PII tokenization",
          "Deterministic jailbreak defense using semantic tripwires and NeMo Guardrails",
          "Real-time toxicity and hallucination scoring before stream delivery"
        ],
        terminal: {
          command: "guardrails.verify({ payload: raw_stream, policy: 'FINRA_EU_AI' })",
          status: "POLICY ENFORCED | PII STRIPPED",
          logs: [
            { type: "comment", text: "// Running real-time ingress security inspection" },
            { type: "success", text: "> jailbreak_analyzer: clean (confidence: 0.998)" },
            { type: "step", text: "> pii_masker: 2 IBAN account numbers masked as <REDACTED>" },
            { type: "step", text: "> topical_boundary: financial advisory guardrails verified" },
            { type: "success", text: "> egress_safe: approved for client consumption" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Document Ingestion", tag: "Multi-Modal Parsing", desc: "Extracts unstructured PDFs, API feeds, audio, and databases with semantic chunking and metadata attribution.", iconName: "Database" },
      { step: "02", title: "Hybrid Indexing", tag: "Dense + Sparse Vectors", desc: "Generates high-dimensional vector embeddings with BGE-M3 and sparse BM25 token indices into Qdrant/Milvus.", iconName: "Search" },
      { step: "03", title: "Semantic Caching", tag: "Sub-8ms Latency", desc: "Intercepts incoming requests via Redis KV-caches, pruning repeated queries to eliminate redundant API billing.", iconName: "RefreshCw" },
      { step: "04", title: "LLM Inference & Routing", tag: "Dynamic Dispatch", desc: "Dispatches context to optimal frontier models (GPT-4o, Claude 3.5, Gemini) or private self-hosted vLLM clusters.", iconName: "Cpu" },
      { step: "05", title: "Guardrails & Egress", tag: "Deterministic Safety", desc: "Validates JSON structure, redacts sensitive PII, enforces toxicity filters, and streams verified responses.", iconName: "ShieldCheck" }
    ],
    featureCards: [
      { iconName: "Zap", title: "High-Throughput vLLM Serving", tags: ["PagedAttention", "Continuous Batching", "Tensor Parallelism"], desc: "Deploy self-hosted open-source models with continuous batching and PagedAttention for 4x higher token serving density and predictable cloud budgets." },
      { iconName: "Layers", title: "Hybrid Dense-Sparse RAG", tags: ["Qdrant", "Cohere Rerank", "HNSW Indexes"], desc: "Eliminate semantic drift by pairing vector similarity with BM25 keyword matching and cross-encoder neural rerankers for pinpoint precision." },
      { iconName: "Lock", title: "Air-Gapped Privacy & PII Redaction", tags: ["SOC2 Type II", "spaCy NER", "Regex Tripwires"], desc: "Automated sanitization masking credit card numbers, national IDs, and proprietary secrets before LLM ingestion, satisfying strict compliance." },
      { iconName: "Workflow", title: "Multi-Agent State Orchestration", tags: ["LangGraph", "Cyclic State", "Human-in-the-Loop"], desc: "Build autonomous multi-agent teams with LangGraph, cyclical execution loops, self-correction, and tool calling with persistent state backends." },
      { iconName: "Activity", title: "Continuous LLM Observability", tags: ["Langfuse", "OpenTelemetry", "Drift Alarms"], desc: "Track latency traces, token consumption, drift signals, and user feedback loops using Langfuse and OpenTelemetry across all deployment environments." },
      { iconName: "Sliders", title: "Prompt Compression & KV Caching", tags: ["Entropy Pruning", "Prefix Caching", "Cost FinOps"], desc: "Compress verbose enterprise contexts down to salient tokens, maximizing precision while cutting token bills and staying well within context ceilings." }
    ],
    techStack: [
      { category: "Frontier Foundation Models", items: ["OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Google Gemini 1.5 Pro", "Meta Llama 3.1 70B", "Mistral Large"] },
      { category: "Inference & Serving", items: ["vLLM Runtimes", "NVIDIA TensorRT-LLM", "Triton Inference Server", "LiteLLM Gateway", "Ollama Clusters"] },
      { category: "Orchestration & Agents", items: ["LangGraph Workflows", "LangChain Core", "LlamaIndex Pipelines", "DSPy Optimizers", "Semantic Kernel"] },
      { category: "Vector Databases & Cache", items: ["Qdrant Vector Engine", "Milvus Cluster", "Pinecone Serverless", "Redis Enterprise Cache", "pgvector"] },
      { category: "Guardrails & Evaluation", items: ["NeMo Guardrails", "Llama Guard 3", "Langfuse Tracing", "Arize Phoenix", "Ragas Framework"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Naive API Calls",
      beforePoints: [
        "Uncontrolled token spikes with runaway monthly API invoices.",
        "Frequent hallucinations caused by unranked vector search noise.",
        "Zero safety guardrails, risking proprietary data and PII leakages.",
        "High latency (> 2.5s TTFT) causing poor customer experience."
      ],
      afterTitle: "Devopstrio AI Pipelines",
      afterPoints: [
        "Up to 68% token reduction through semantic caching & prompt pruning.",
        "Hybrid dense-sparse retrieval + cross-encoder neural rerankers.",
        "Deterministic pre-flight guardrails sanitizing 100% of PII.",
        "Sub-45ms TTFT with continuous vLLM batching & edge caching."
      ]
    },
    faqs: [
      { q: "What is the difference between a basic LLM API call and a Generative AI Pipeline?", a: "A basic API call is stateless and lacks real-time company knowledge, safety checks, or error handling. A production Generative AI Pipeline orchestrates ingestion, semantic chunking, hybrid vector retrieval, caching, prompt compression, guardrail enforcement, and token observability into a resilient enterprise workflow." },
      { q: "How do your pipelines prevent hallucinations and inaccurate outputs?", a: "We enforce Hybrid RAG (combining dense vector math with sparse lexical indexing) coupled with cross-encoder re-ranking. Context chunks are validated before prompt injection, and outputs are verified against ground-truth source citations before delivery to the user." },
      { q: "Can this pipeline run entirely on-premise or within our private cloud VPC?", a: "Yes. We engineer pipelines that deploy entirely within your private AWS, Azure, or GCP VPCs, or on bare-metal GPU infrastructure using open weights (Llama 3.1, Mistral, Qwen) with vLLM and self-hosted vector databases like Qdrant or Milvus." },
      { q: "How does semantic caching lower token costs?", a: "Enterprise queries frequently repeat similar questions or tasks. Our Redis-based semantic cache compares incoming prompt embeddings against warm historical answers. If the semantic similarity exceeds 96%, the response is returned in <8ms with zero foundation model token costs." },
      { q: "How do you enforce PII protection and enterprise compliance?", a: "Incoming user queries and retrieved enterprise documents pass through a pre-flight guardrail pipeline powered by spaCy and custom tokenizers. Sensitive PII (names, national IDs, bank numbers, proprietary tokens) is automatically scrubbed or masked prior to LLM processing." }
    ]
  },

  "stateful-ai-agents": {
    slug: "stateful-ai-agents",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "Stateful AI Agents",
    tag: "Agentic Automation",
    badge: "Multi-Agent Systems & Tool Calling",
    subtitle: "Orchestrate autonomous agent swarms that reason, execute multi-step workflows, query enterprise databases, and recover statefully from unexpected edge failures.",
    metrics: [
      { val: "99.4%", label: "Task Completion Rate", sub: "Multi-step complex tasks" },
      { val: "< 120ms", label: "Tool Execution Latency", sub: "Parallel RPC dispatch" },
      { val: "100%", label: "State Checkpoint Recovery", sub: "Postgres durable state" },
      { val: "85%", label: "Manual Workflow Reduction", sub: "Back-office automation" }
    ],
    capabilities: [
      {
        id: "multi-agent-supervisors",
        title: "Hierarchical Supervisor Orchestration",
        tag: "Agent Swarms",
        badge: "Deterministic Delegation",
        latencyBadge: "< 50ms Dispatch",
        desc: "Coordinates specialized agent pods through supervisor architectures, dynamically routing tasks between SQL analysts, code generators, and compliance reviewers.",
        stats: [
          "Dynamic role specialization with isolated system prompt boundaries",
          "Cyclic LangGraph state charts with human-in-the-loop interruption hooks",
          "Sub-100ms multi-agent handoffs with shared episodic memory layers"
        ],
        terminal: {
          command: "supervisor.orchestrate({ objective: 'reconcile_dispute_chargebacks' })",
          status: "TASK DELEGATED (3 PODS ACTIVE)",
          logs: [
            { type: "comment", text: "// Spawning supervisor graph runtime" },
            { type: "step", text: "> supervisor -> delegated subtask to [StripeIngestionAgent]" },
            { type: "step", text: "> [StripeIngestionAgent] extracted chargeback #8942 ($1,420)" },
            { type: "step", text: "> supervisor -> transferred payload to [FraudEvaluationAgent]" },
            { type: "success", text: "> [FraudEvaluationAgent] matched synthetic velocity fraud (0.981)" }
          ]
        }
      },
      {
        id: "durable-state-memory",
        title: "Durable State & Checkpoint Persistence",
        tag: "Fault Tolerance",
        badge: "Postgres Checkpointer",
        latencyBadge: "Zero State Loss",
        desc: "Ensures long-running multi-day business processes survive worker crashes, network timeouts, and model rate limits without restarting from scratch.",
        stats: [
          "Thread-level checkpoint snapshots stored in PostgreSQL / DynamoDB",
          "Idempotent tool executions preventing double-billing or duplicate API dispatches",
          "Time-travel debugging enabling engineers to rewind and replay agent runs"
        ],
        terminal: {
          command: "checkpointer.restore({ threadId: 'txn-89410-recon' })",
          status: "RESUMED FROM STEP 4",
          logs: [
            { type: "comment", text: "// Inspecting persistent agent state store" },
            { type: "info", text: "> found snapshot at epoch 1718293021 (step 4 of 6)" },
            { type: "success", text: "> restored memory buffers & validated tool tokens" },
            { type: "step", text: "> resumed tool dispatch: ERP_SAP_UPDATE" }
          ]
        }
      },
      {
        id: "enterprise-tool-calling",
        title: "Sandboxed Enterprise Tool Calling",
        tag: "External Integrations",
        badge: "Secure RPC Bridges",
        latencyBadge: "mTLS Encrypted",
        desc: "Empowers agents to safely interact with CRM, ERP, SQL databases, and internal REST APIs within strict sandboxed execution envelopes.",
        stats: [
          "Pydantic strict schema validation on all input and output tool parameters",
          "Role-based access control (RBAC) preventing unauthorized system writes",
          "Containerized WebAssembly/Docker micro-sandboxes for arbitrary code execution"
        ],
        terminal: {
          command: "tool_runner.execute({ tool: 'query_snowflake_warehouse', sql: safe_query })",
          status: "EXECUTION SUCCESS (12ms)",
          logs: [
            { type: "comment", text: "// Enforcing parameter validation before dispatch" },
            { type: "step", text: "> sql_parser: verified read-only AST (SELECT only)" },
            { type: "step", text: "> connection: acquired Snowflake enterprise link" },
            { type: "success", text: "> returned 42 rows formatted as typed Pydantic models" }
          ]
        }
      },
      {
        id: "human-in-the-loop",
        title: "Human-in-the-Loop Approval Gates",
        tag: "Governance",
        badge: "Risk Mitigation",
        latencyBadge: "Audit Signed",
        desc: "Enforces mandatory human verification for high-impact actions like financial transactions, contract generation, and customer communications.",
        stats: [
          "Automated webhook notifications to Slack, Microsoft Teams, or custom admin dashboards",
          "One-click approve/reject/modify interfaces for human managers",
          "Full immutable audit logs recording human signatures for regulatory compliance"
        ],
        terminal: {
          command: "guard.request_approval({ action: 'TRANSFER_FUNDS', amount: 8500 })",
          status: "PAUSED -> AWAITING_HUMAN",
          logs: [
            { type: "comment", text: "// Triggering human verification tripwire" },
            { type: "step", text: "> risk_engine: transaction exceeds £5,000 threshold" },
            { type: "info", text: "> dispatched Slack interactive block to #finance-approvals" },
            { type: "success", text: "> received authorization from user: CFO_AUTH_KEY_2" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Goal Ingestion", tag: "Intent Parsing", desc: "Transforms ambiguous human prompts into structured directed acyclic graphs (DAGs) with explicit termination conditions.", iconName: "Terminal" },
      { step: "02", title: "Role Delegation", tag: "Supervisor Routing", desc: "Assigns sub-tasks to specialized domain agents with dedicated system instructions and tool access.", iconName: "Bot" },
      { step: "03", title: "Tool Execution", tag: "Sandboxed RPC", desc: "Calls authenticated APIs, SQL stores, and ERP systems under strict permission boundaries.", iconName: "Workflow" },
      { step: "04", title: "Self-Reflection", tag: "Quality Evaluation", desc: "Evaluates intermediate results against quality thresholds, self-correcting mistakes automatically.", iconName: "RefreshCw" },
      { step: "05", title: "Checkpoint & Delivery", tag: "Durable State", desc: "Persists final execution history to the database and streams validated outcomes to the client.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Bot", title: "Autonomous Decision Loops", tags: ["LangGraph", "ReAct Framework", "Auto-Reflection"], desc: "Equip agents with ReAct cognitive reasoning cycles that plan, act, observe outcomes, and refine subsequent steps dynamically." },
      { iconName: "Database", title: "Stateful Episodic Memory", tags: ["PostgreSQL", "Redis", "Vector Memory"], desc: "Provide agents with persistent long-term memory across sessions, recalling enterprise user preferences and prior conversation threads." },
      { iconName: "Lock", title: "Zero-Trust Tool Sandboxes", tags: ["Wasm Runtimes", "mTLS", "RBAC Enforcement"], desc: "Isolate external API execution inside lightweight, secure containers that guarantee no malicious prompt injections can compromise infrastructure." },
      { iconName: "Workflow", title: "Cyclic Graph Orchestration", tags: ["DAG Orchestration", "Dynamic Branching", "State Machines"], desc: "Build multi-agent graphs that loop back on failures, ask follow-up questions, and dynamically adjust their execution path based on live data." },
      { iconName: "ShieldCheck", title: "Enterprise Compliance Gates", tags: ["Human-in-the-Loop", "Audit Trails", "SOC2 Controls"], desc: "Enforce manager approval triggers on high-value actions, ensuring automated agents remain entirely transparent and accountable." },
      { iconName: "Activity", title: "Agent Run Tracing & Telemetry", tags: ["OpenTelemetry", "Langfuse", "Token Costs"], desc: "Inspect step-by-step agent thought processes, tool payload timings, and token consumption via full distributed telemetry graphs." }
    ],
    techStack: [
      { category: "Agent Frameworks", items: ["LangGraph", "CrewAI", "AutoGen", "LlamaIndex Workflows", "Semantic Kernel"] },
      { category: "State Persistence", items: ["PostgreSQL Checkpointers", "Redis Enterprise", "DynamoDB", "DuckDB"] },
      { category: "Tool Calling & Sandboxes", items: ["FastAPI Toolservers", "Docker Engine", "Wasm Edge", "GraphQL Clients"] },
      { category: "Underlying LLMs", items: ["Claude 3.5 Sonnet (Tool Use)", "GPT-4o Function Calling", "Mistral Large 2", "Llama 3.1 70B"] },
      { category: "Governance & Tracing", items: ["Langfuse Agent Traces", "Arize Phoenix", "OpenInference", "Slack Bolt API"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Stateless Scripts & Fragile Bots",
      beforePoints: [
        "Single-step prompt chains that break completely upon receiving tool errors.",
        "Zero memory between execution steps, requiring repetitive manual inputs.",
        "Uncontrolled API writes risking database corruption and data loss.",
        "Lack of human oversight leading to unverified automated business decisions."
      ],
      afterTitle: "Devopstrio Stateful Agent Systems",
      afterPoints: [
        "Durable LangGraph checkpointers that auto-resume from the last successful step.",
        "Specialized multi-agent pods collaborating with shared episodic memory.",
        "Strict Pydantic tool validation preventing unauthorized database writes.",
        "Built-in human-in-the-loop approval gates for critical high-value actions."
      ]
    },
    faqs: [
      { q: "What makes an AI agent 'stateful' compared to a regular chatbot?", a: "A stateful agent maintains an explicit, persistent execution state across multiple steps, tool calls, and even worker restarts. If an API call fails or requires human approval, the agent freezes its state in PostgreSQL and resumes exactly where it left off, rather than re-running the entire conversation." },
      { q: "How do you prevent agents from hallucinating tool parameters or executing bad queries?", a: "We enforce strict schema typing using Pydantic and JSON Schema validation. Every tool call generated by the model must match exact type definitions. For database tools, SQL queries are parsed through read-only AST checkers before dispatch." },
      { q: "Can agents communicate with each other in multi-agent swarms?", a: "Yes. Using supervisor architectures or decentralized mesh protocols, agents can pass typed payloads to one another. For example, a Researcher Agent extracts data and passes it to a Financial Analyst Agent, who generates numbers for a Report Writer Agent." },
      { q: "What happens if an external API is down while the agent is running?", a: "Our agent runtime includes exponential backoff retry policies, fallback tool routing (e.g., trying a backup data provider), and state freezing so the job can automatically re-attempt execution once the upstream service recovers." },
      { q: "How do human approvals work in production?", a: "When an agent identifies that a task requires human intervention (such as sending an email or initiating a payment), it yields control, sends an actionable notification to Slack or Teams, and waits for a secure webhook callback before proceeding." }
    ]
  },

  "deep-machine-learning": {
    slug: "deep-machine-learning",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "Deep Machine Learning",
    tag: "Neural Engineering",
    badge: "Distributed Training & Custom Modeling",
    subtitle: "Train, fine-tune, and deploy custom neural networks. From PyTorch distributed multi-GPU training clusters to quantization, pruning, and low-latency ONNX/TensorRT inference engines.",
    metrics: [
      { val: "4.8x", label: "Training Speedup", sub: "DeepSpeed ZeRO-3 clusters" },
      { val: "72%", label: "Inference Footprint Reduction", sub: "INT4/FP8 quantization" },
      { val: "< 8ms", label: "Model Latency SLA", sub: "TensorRT compiled kernels" },
      { val: "99.95%", label: "Prediction Availability", sub: "Triton inference clusters" }
    ],
    capabilities: [
      {
        id: "distributed-training",
        title: "Distributed Multi-GPU Training",
        tag: "High-Performance Compute",
        badge: "PyTorch & DeepSpeed",
        latencyBadge: "InfiniBand Clustered",
        desc: "Scales model training across clusters of NVIDIA H100 and A100 GPUs using DeepSpeed ZeRO-3, FSDP, and pipeline parallelism with zero communication bottlenecks.",
        stats: [
          "Linear scaling efficiency across up to 128 GPU nodes via RoCE / InfiniBand",
          "Automated mixed-precision FP16 and BF16 training reducing memory footprints",
          "Continuous checkpoint streaming to S3/Ceph storage for rapid node failover"
        ],
        terminal: {
          command: "torchrun --nproc_per_node=8 train_distributed.py --config zeRO3.yaml",
          status: "TRAINING ACTIVE | EPOCH 12/50",
          logs: [
            { type: "comment", text: "// Initializing NCCL multi-GPU backend" },
            { type: "step", text: "> detected 8x NVIDIA H100 SXM5 GPUs (80GB each)" },
            { type: "step", text: "> deepspeed_engine: ZeRO Stage 3 partitioned optimizer" },
            { type: "info", text: "> throughput: 18,400 samples/sec | loss: 0.142 (decreasing)" },
            { type: "success", text: "> checkpoint saved: s3://models-prod/weights_ep12.pt" }
          ]
        }
      },
      {
        id: "quantization-acceleration",
        title: "Model Quantization & TensorRT Optimization",
        tag: "Inference Speed",
        badge: "Hardware Acceleration",
        latencyBadge: "INT8 / FP8 Quantized",
        desc: "Compiles trained neural networks into optimized TensorRT and ONNX execution graphs, slashing latency and GPU memory requirements without sacrificing accuracy.",
        stats: [
          "Post-training quantization (PTQ) to INT8 and FP8 with < 0.2% accuracy delta",
          "Custom CUDA kernel fusions for LayerNorm and Multi-Head Attention",
          "Dynamic batching on Triton Inference Server maximizing GPU utilization"
        ],
        terminal: {
          command: "trtexec --onnx=model.onnx --saveEngine=model.engine --fp16 --int8",
          status: "COMPILATION COMPLETE",
          logs: [
            { type: "comment", text: "// Running TensorRT graph optimization passes" },
            { type: "step", text: "> fused 48 Convolution + ReLU layers into single kernels" },
            { type: "step", text: "> memory footprint: reduced from 14.2 GB -> 3.8 GB" },
            { type: "success", text: "> p99 latency: reduced from 34.2ms -> 7.8ms" }
          ]
        }
      },
      {
        id: "custom-embeddings",
        title: "Domain-Specific Foundation Fine-Tuning",
        tag: "Transfer Learning",
        badge: "LoRA & QLoRA",
        latencyBadge: "Parameter-Efficient",
        desc: "Adapts state-of-the-art transformer backbones to proprietary corporate datasets using Low-Rank Adaptation (LoRA), preserving foundational knowledge while mastering industry nuance.",
        stats: [
          "PEFT LoRA fine-tuning training only 0.2% of total parameters",
          "Direct Preference Optimization (DPO) aligning models to specific company guidelines",
          "Automated synthetic dataset generation and validation pipelines"
        ],
        terminal: {
          command: "peft.finetune({ base: 'llama-3.1-70b', dataset: 'enterprise_legal_corpus' })",
          status: "QLORA TRAIN RUNNING",
          logs: [
            { type: "comment", text: "// Quantizing base weights to 4-bit NF4 format" },
            { type: "step", text: "> injected LoRA adapter matrices at rank=64, alpha=128" },
            { type: "info", text: "> trainable parameters: 142M / 70B (0.2%)" },
            { type: "success", text: "> legal contract parsing accuracy improved from 72% -> 96.4%" }
          ]
        }
      },
      {
        id: "inference-serving",
        title: "Triton Multi-Model Serving Infrastructure",
        tag: "Production Serving",
        badge: "Scalable Inference",
        latencyBadge: "Autoscaling Nodes",
        desc: "Orchestrates concurrent model inference across heterogeneous frameworks (PyTorch, TensorFlow, TensorRT, Scikit-learn) with dynamic GPU memory sharing.",
        stats: [
          "Dynamic batch scheduler grouping incoming inference requests in real-time",
          "Kubernetes KServe autoscaling from zero based on request queue depth",
          "Zero-downtime rolling model updates with canary traffic split testing"
        ],
        terminal: {
          command: "triton.serve({ model_repository: '/models', strict_model_config: true })",
          status: "ONLINE | 4 MODELS LOADED",
          logs: [
            { type: "comment", text: "// Starting Triton Inference Server v24.08" },
            { type: "step", text: "> model[embeddings_v3]: loaded on GPU 0 (TensorRT backend)" },
            { type: "step", text: "> model[classifier_v2]: loaded on GPU 1 (PyTorch backend)" },
            { type: "success", text: "> dynamic_batching: enabled (max_queue_delay=5000us)" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Dataset Prep", tag: "Data Hygiene", desc: "Curates, deduplicates, and validates training datasets with automated label checking and token balancing.", iconName: "Database" },
      { step: "02", title: "Distributed Training", tag: "GPU Clusters", desc: "Executes multi-GPU training jobs with mixed precision and DeepSpeed distributed memory partitioning.", iconName: "Cpu" },
      { step: "03", title: "Quantization", tag: "TensorRT Optimization", desc: "Compiles trained weight matrices down to INT8/FP8 formats with kernel fusions for ultra-fast inference.", iconName: "Zap" },
      { step: "04", title: "Automated Evaluation", tag: "Benchmark Testing", desc: "Evaluates model checkpoints against holdout test sets and enterprise safety benchmarks automatically.", iconName: "ShieldCheck" },
      { step: "05", title: "Production Serving", tag: "Triton Deployment", desc: "Deploys models to autoscaling Kubernetes clusters with dynamic request batching and live latency monitoring.", iconName: "Server" }
    ],
    featureCards: [
      { iconName: "Cpu", title: "Multi-GPU Distributed Training", tags: ["PyTorch FSDP", "DeepSpeed ZeRO-3", "InfiniBand"], desc: "Train massive billion-parameter neural networks across multi-node GPU clusters with near-linear scaling and automated fault tolerance." },
      { iconName: "Zap", title: "Hardware-Accelerated Compilation", tags: ["NVIDIA TensorRT", "ONNX Runtime", "CUDA Kernels"], desc: "Compile PyTorch models into bare-metal TensorRT engines that execute directly on GPU tensor cores with minimal latency overhead." },
      { iconName: "Sliders", title: "Parameter-Efficient Fine-Tuning", tags: ["LoRA", "QLoRA", "DPO Alignment"], desc: "Fine-tune foundation models on proprietary corporate knowledge bases using LoRA techniques that require only a fraction of GPU hardware." },
      { iconName: "Server", title: "High-Density Triton Serving", tags: ["Triton Server", "Dynamic Batching", "Concurrent Models"], desc: "Serve dozens of distinct machine learning models on shared GPU hardware with dynamic batching and zero memory cross-talk." },
      { iconName: "Activity", title: "Model Drift & Accuracy Tracking", tags: ["Evidently AI", "Prometheus", "Feature Drift"], desc: "Detect model performance degradation in real-time by analyzing statistical divergence between inference inputs and baseline training data." },
      { iconName: "Lock", title: "Encrypted Weights & Model Security", tags: ["KMS Encryption", "Adversarial Robustness", "Model Stealing Defense"], desc: "Secure proprietary model weights using enterprise encryption keys and enforce rate limiting to prevent adversarial weight extraction." }
    ],
    techStack: [
      { category: "Training Frameworks", items: ["PyTorch Core", "DeepSpeed", "HuggingFace Transformers", "JAX", "Lightning AI"] },
      { category: "Hardware & Acceleration", items: ["NVIDIA CUDA 12", "TensorRT", "Triton Inference Server", "ONNX Runtime", "ROCm"] },
      { category: "Fine-Tuning & PEFT", items: ["PEFT LoRA", "BitsAndBytes (4-bit)", "TRL (DPO/RLHF)", "Unsloth"] },
      { category: "MLOps & Tracking", items: ["MLflow", "Weights & Biases", "Ray Train / Tune", "ClearML"] },
      { category: "Serving Platforms", items: ["Kubernetes KServe", "vLLM", "Triton Server", "AWS SageMaker", "GCP Vertex AI"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Ad-Hoc Scripts & Unoptimized Models",
      beforePoints: [
        "Un-quantized FP32 models requiring massive, expensive GPU clusters to serve.",
        "Single-node training scripts bottlenecked by CPU-GPU memory transfer speeds.",
        "Manual model deployment prone to version conflicts and downtime.",
        "No continuous tracking of feature drift or real-world inference accuracy."
      ],
      afterTitle: "Devopstrio Deep ML Architecture",
      afterPoints: [
        "TensorRT INT8 compiled engines reducing GPU requirements by up to 72%.",
        "Distributed DeepSpeed training scaling seamlessly across multi-GPU nodes.",
        "Automated Triton serving with dynamic batching and rolling canary releases.",
        "Real-time drift alarms and automated continuous retraining triggers."
      ]
    },
    faqs: [
      { q: "What is the difference between standard machine learning and deep learning?", a: "Standard machine learning (such as XGBoost or linear regression) relies heavily on manual feature engineering. Deep machine learning utilizes multi-layered neural networks (transformers, CNNs, diffusion models) that automatically learn hierarchical feature representations directly from complex raw data." },
      { q: "How much latency does TensorRT optimization actually save?", a: "Depending on the model architecture, TensorRT graph compilation and INT8 quantization typically reduce latency by 3x to 5x. It fuses adjacent activation layers, eliminates redundant memory copies, and leverages specialized hardware Tensor Cores." },
      { q: "Can we fine-tune open-source models like Llama on our private servers?", a: "Yes. Using QLoRA (Quantized Low-Rank Adaptation), we can fine-tune 70-billion-parameter models on single multi-GPU nodes (such as 4x A100s) inside your private firewall without sending data to third parties." },
      { q: "What is Triton Inference Server and why do you use it?", a: "Triton is an open-source, enterprise-grade inference engine built by NVIDIA. It allows multiple models running different frameworks (TensorRT, PyTorch, ONNX) to share GPU memory efficiently while providing dynamic batching to maximize throughput." },
      { q: "How do you handle model retraining when real-world data drifts?", a: "We integrate statistical drift detectors (like Evidently AI). When input distribution metrics drift beyond a threshold, an automated trigger kicks off a re-training pipeline, validates the new model against a holdout test suite, and stages it for deployment." }
    ]
  },

  "natural-language-processing": {
    slug: "natural-language-processing",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "Natural Language Processing (NLP)",
    tag: "Language Intelligence",
    badge: "Enterprise Text & Semantic Intelligence",
    subtitle: "Extract intelligence from unstructured enterprise communications. From entity resolution and multilingual translation to sentiment telemetry and automated document classification.",
    metrics: [
      { val: "99.2%", label: "NER Extraction Accuracy", sub: "Proprietary medical/legal entities" },
      { val: "< 15ms", label: "Sentence Ingestion Latency", sub: "Optimized transformer backbones" },
      { val: "100+", label: "Supported Languages", sub: "Cross-lingual transformer models" },
      { val: "94%", label: "Manual Triage Reduction", sub: "Customer support ticket routing" }
    ],
    capabilities: [
      {
        id: "named-entity-recognition",
        title: "Named Entity Recognition & Resolution",
        tag: "Information Extraction",
        badge: "Domain-Specific NER",
        latencyBadge: "< 12ms Parsing",
        desc: "Extracts and links key enterprise entities (organizations, monetary values, contractual obligations, medical terminology) from unstructured PDFs, emails, and call transcripts.",
        stats: [
          "Custom fine-tuned spaCy and DeBERTa tokenizers for specialized jargon",
          "Entity disambiguation linking mentions to internal knowledge graph IDs",
          "Sub-15ms extraction per document page on multi-core CPU clusters"
        ],
        terminal: {
          command: "nlp.extract_entities({ text: contract_excerpt, ontology: 'LEGAL_UK' })",
          status: "EXTRACTION COMPLETE (6 ENTITIES)",
          logs: [
            { type: "comment", text: "// Running neural entity recognition model" },
            { type: "step", text: "> detected [ORG]: 'Acme Global Holdings Ltd' (confidence: 0.994)" },
            { type: "step", text: "> detected [MONEY]: '£2,500,000 GBP' (term: LIABILITY_CAP)" },
            { type: "step", text: "> detected [DATE]: '31st December 2027' (term: EXPIRATION)" },
            { type: "success", text: "> resolved entities mapped to Master Service Agreement #4102" }
          ]
        }
      },
      {
        id: "semantic-sentiment-telemetry",
        title: "Real-Time Sentiment & Intent Telemetry",
        tag: "Customer Intelligence",
        badge: "Emotion & Intent Mining",
        latencyBadge: "Real-Time Ingestion",
        desc: "Analyzes customer support chats, calls, and public feedback streams in real-time to detect escalating dissatisfaction, churn signals, and actionable purchasing intent.",
        stats: [
          "Multi-dimensional sentiment scoring (urgency, frustration, satisfaction)",
          "Intent classification routing high-priority cases directly to senior managers",
          "Continuous aggregation of sentiment telemetry into Grafana dashboards"
        ],
        terminal: {
          command: "intent_engine.analyze({ stream: customer_support_ticket_#8921 })",
          status: "INTENT CLASSIFIED: CHURN_RISK",
          logs: [
            { type: "comment", text: "// Parsing dialogue turn and customer sentiment" },
            { type: "step", text: "> polarity: -0.84 (high frustration) | urgency: 0.92" },
            { type: "step", text: "> primary_intent: 'cancellation_threat_due_to_outage'" },
            { type: "success", text: "> automated action: escalated to Retention Pod VIP queue" }
          ]
        }
      },
      {
        id: "multilingual-translation",
        title: "Low-Latency Cross-Lingual Translation",
        tag: "Global Communications",
        badge: "Neural Machine Translation",
        latencyBadge: "100+ Languages",
        desc: "Translates technical documentation, legal agreements, and customer dialogues across 100+ languages with strict preservation of enterprise formatting and industry terminology.",
        stats: [
          "Custom neural translation glossaries enforcing company-specific nomenclature",
          "BLEU / chrF evaluation guaranteeing translation accuracy across global hubs",
          "Batch document translation preserving nested tables, styles, and markdown"
        ],
        terminal: {
          command: "translator.convert({ source: 'en', target: 'ja', glossary: 'automotive' })",
          status: "TRANSLATED (BLEU 48.2)",
          logs: [
            { type: "comment", text: "// Processing NLLB-200 multilingual model" },
            { type: "step", text: "> applied 14 corporate terminology overrides" },
            { type: "step", text: "> preserved Japanese honorific business grammar rules" },
            { type: "success", text: "> generated 24-page user manual in 4.2 seconds" }
          ]
        }
      },
      {
        id: "document-summarization",
        title: "Hierarchical Document Summarization",
        tag: "Content Synthesis",
        badge: "Context Distillation",
        latencyBadge: "Zero Information Loss",
        desc: "Condenses multi-hundred-page annual reports, legal filings, and technical specifications into concise executive summaries with direct source citations.",
        stats: [
          "Map-reduce and tree-based summarization handling unlimited document lengths",
          "Automated factual consistency validation preventing synthetic fabrication",
          "Exportable into executive bullet points, slide outlines, or JSON briefs"
        ],
        terminal: {
          command: "summarizer.distill({ document_url: 'annual_sec_filing_10k.pdf' })",
          status: "SUMMARY COMPILED (4 KEY FINDINGS)",
          logs: [
            { type: "comment", text: "// Chunking 148-page filing into recursive semantic clusters" },
            { type: "step", text: "> extracted 12 key financial risk disclosures" },
            { type: "step", text: "> validated revenue breakdown numbers against 10-K tables" },
            { type: "success", text: "> compiled 500-word C-suite briefing with page citations" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Text Extraction", tag: "OCR & Clean", desc: "Extracts raw text from messy PDFs, emails, scans, and audio transcripts using Tesseract and Whisper.", iconName: "Database" },
      { step: "02", title: "Normalization", tag: "Tokenization", desc: "Tokenizes sentences, strips HTML noise, normalizes unicode, and resolves contractions.", iconName: "Terminal" },
      { step: "03", title: "Transformer Inference", tag: "Neural Backbones", desc: "Passes normalized tokens through fine-tuned RoBERTa, DeBERTa, or Llama models.", iconName: "Cpu" },
      { step: "04", title: "Ontology Alignment", tag: "Knowledge Linking", desc: "Maps extracted entities to corporate knowledge graphs and master data management systems.", iconName: "Workflow" },
      { step: "05", title: "Structured Delivery", tag: "Clean Egress", desc: "Emits structured JSON schemas and telemetry events to downstream ERPs and analytics engines.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Terminal", title: "Domain-Specific Entity Extraction", tags: ["spaCy", "DeBERTa-v3", "HuggingFace"], desc: "Recognize bespoke industry acronyms, account numbers, and contractual obligations with fine-tuned tokenizers trained on your proprietary text." },
      { iconName: "Activity", title: "Multi-Channel Sentiment Telemetry", tags: ["VADER", "RoBERTa Sentiment", "Grafana"], desc: "Continuously monitor customer satisfaction signals across live chat, support tickets, and social mentions to proactively stop churn." },
      { iconName: "Globe", title: "Enterprise Neural Translation", tags: ["NLLB-200", "Custom Glossaries", "Cross-Lingual"], desc: "Deploy private neural translation pipelines that respect corporate style guides and technical terminology across more than 100 languages." },
      { iconName: "Layers", title: "Long-Document Synthesis", tags: ["Map-Reduce", "Extractive + Abstractive", "Fact Checking"], desc: "Summarize hundreds of pages of technical documentation or legal filings in seconds without exceeding context limits or losing nuance." },
      { iconName: "Lock", title: "Automated PII Redaction", tags: ["GDPR Compliance", "Regex Tripwires", "Zero Leakage"], desc: "Automatically detect and redact patient medical identifiers, credit card numbers, and employee names before text enters public cloud APIs." },
      { iconName: "Workflow", title: "Intelligent Ticket Triage", tags: ["Zero-Shot Classification", "FastAPI", "Zendesk API"], desc: "Categorize incoming customer inquiries and automatically assign them to the correct engineering or support pods with 98% accuracy." }
    ],
    techStack: [
      { category: "NLP Libraries", items: ["spaCy Enterprise", "HuggingFace Transformers", "NLTK", "Stanza", "Flair"] },
      { category: "Transformer Models", items: ["DeBERTa-v3", "RoBERTa", "ModernBERT", "NLLB-200", "BGE Embeddings"] },
      { category: "Data Ingestion & OCR", items: ["Tesseract OCR", "Apache Tika", "OpenAI Whisper", "Unstructured.io"] },
      { category: "Knowledge Graph Integration", items: ["Neo4j", "Amazon Neptune", "RDF4J", "NetworkX"] },
      { category: "Serving & Deployment", items: ["FastAPI Microservices", "ONNX Runtime", "Triton Server", "Docker Containers"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Manual Reading & Keyword Filters",
      beforePoints: [
        "Human analysts spending hundreds of hours reading repetitive compliance documents.",
        "Brittle regex search missing synonyms, misspellings, and contextual nuances.",
        "Customer support tickets sitting in triage queues for days without automated routing.",
        "Third-party translation tools leaking sensitive corporate trade secrets."
      ],
      afterTitle: "Devopstrio Enterprise NLP Architecture",
      afterPoints: [
        "Automated entity extraction processing hundreds of document pages in seconds.",
        "Deep semantic understanding capturing contextual nuance, idioms, and intent.",
        "Instant multi-dimensional ticket classification routing high-urgency issues immediately.",
        "Self-hosted, air-gapped translation and summarization guaranteeing total data privacy."
      ]
    },
    faqs: [
      { q: "How does enterprise NLP differ from general LLM prompting?", a: "While general LLMs are flexible, enterprise NLP uses specialized, lightweight transformer backbones (like DeBERTa or spaCy) that execute in sub-15ms at 95% lower cost. They provide deterministic accuracy for tasks like entity recognition, classification, and redaction." },
      { q: "Can the NLP models recognize our company-specific acronyms and part numbers?", a: "Yes. We train custom tokenizers and fine-tune entity models on your historical documents, glossaries, and databases so the pipeline natively identifies your internal vocabulary." },
      { q: "How do you ensure translations don't distort technical terminology?", a: "We enforce custom neural glossaries that lock specific terms (e.g., brand names, technical component titles, API commands) so they are never translated literally or distorted." },
      { q: "Can this pipeline process scanned PDFs and image receipts?", a: "Yes. Our ingestion layer incorporates pre-flight OCR (Optical Character Recognition) with image de-skewing and binarization, extracting clean text before NLP models process it." },
      { q: "Is customer data protected under GDPR and HIPAA during processing?", a: "Yes. All processing can occur within your private cloud VPC, and our pre-flight redaction models sanitize personal identifiers (PII/PHI) before any text is permanently indexed." }
    ]
  },

  "computer-vision-models": {
    slug: "computer-vision-models",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "Computer Vision Models",
    tag: "Visual AI",
    badge: "Edge & Cloud Vision Systems",
    subtitle: "Automate visual inspections, object detection, and spatial analytics. From defect detection on industrial manufacturing lines to real-time CCTV security streams and medical imaging.",
    metrics: [
      { val: "60 FPS", label: "Real-Time Video Throughput", sub: "4K multi-camera streams" },
      { val: "99.8%", label: "Defect Detection Accuracy", sub: "Surface micro-imperfections" },
      { val: "< 16ms", label: "Edge Inference Latency", sub: "NVIDIA Jetson / TensorRT" },
      { val: "92%", label: "Inspection Labor Reduction", sub: "Automated factory QA" }
    ],
    capabilities: [
      {
        id: "defect-detection",
        title: "Industrial Automated Optical Inspection (AOI)",
        tag: "Manufacturing QA",
        badge: "Sub-Millimeter Precision",
        latencyBadge: "< 16ms per Frame",
        desc: "Detects surface scratches, component misalignments, and soldering defects on high-speed factory conveyor lines using high-resolution vision transformers.",
        stats: [
          "Detects micro-defects down to 0.05mm on metal, glass, and circuit boards",
          "Real-time trigger synchronization with industrial PLC hardware via Modbus/OPC-UA",
          "Continuous edge inference processing 60 frames per second with zero frame drops"
        ],
        terminal: {
          command: "vision_engine.inspect({ camera: 'conveyor_line_4', trigger: 'optical_sensor' })",
          status: "INSPECTION: DEFECT_DETECTED",
          logs: [
            { type: "comment", text: "// Ingesting 4K frame from industrial Basler camera" },
            { type: "step", text: "> model: yolov10x_custom_circuit_aoi (TensorRT FP16)" },
            { type: "step", text: "> inference_time: 14.2ms on NVIDIA Jetson AGX Orin" },
            { type: "success", text: "> detected: [DEFECT_SOLDER_BRIDGE] at coordinates (1420, 892)" },
            { type: "info", text: "> plc_signal: dispatched pneumatic diverter reject pulse" }
          ]
        }
      },
      {
        id: "object-detection-tracking",
        title: "Multi-Object Tracking & Spatial Telemetry",
        tag: "Logistics & Security",
        badge: "ByteTrack & YOLOv10",
        latencyBadge: "Zero ID Switching",
        desc: "Tracks hundreds of simultaneous vehicles, packages, and personnel across multi-camera warehouse networks with consistent trajectory IDs and zero occlusion loss.",
        stats: [
          "ByteTrack and DeepSORT multi-camera tracking algorithms",
          "Automated boundary-crossing detection and unauthorized perimeter alerts",
          "Heatmap generation analyzing foot traffic patterns and forklift congestion"
        ],
        terminal: {
          command: "tracker.process_stream({ rtsp_url: 'rtsp://warehouse-cam-12.internal' })",
          status: "ACTIVE TRACKING (48 OBJECTS)",
          logs: [
            { type: "comment", text: "// Decoding H.265 RTSP stream with NVDEC acceleration" },
            { type: "step", text: "> active_tracks: 34 forklifts, 14 personnel" },
            { type: "step", text: "> safety_violation: worker #12 entered forklift travel corridor" },
            { type: "success", text: "> alert_dispatched: audio beacon activated in Zone B" }
          ]
        }
      },
      {
        id: "document-ocr-parsing",
        title: "Multi-Modal Document Vision (LayoutLM)",
        tag: "Document Intelligence",
        badge: "Visual Document Parsing",
        latencyBadge: "99.4% Key-Value Recall",
        desc: "Parses complex invoices, customs receipts, and architectural blueprints by analyzing both visual 2D typography layouts and semantic text tokens simultaneously.",
        stats: [
          "LayoutLMv3 vision-language backbones extracting nested table hierarchies",
          "Automated handwriting and signature verification on legal agreements",
          "Robust extraction across skewed, wrinkled, or low-contrast mobile phone scans"
        ],
        terminal: {
          command: "doc_vision.parse({ image: 'scanned_bill_of_lading.jpg' })",
          status: "DOCUMENT PARSED (34 FIELDS)",
          logs: [
            { type: "comment", text: "// Running visual layout segmentation" },
            { type: "step", text: "> detected table grid: 14 rows x 6 columns" },
            { type: "step", text: "> parsed shipping container: 'MSCU7821940' (conf: 0.992)" },
            { type: "success", text: "> verified customs stamp & authorized agent signature" }
          ]
        }
      },
      {
        id: "edge-device-deployment",
        title: "Low-Power Edge Device Deployment",
        tag: "Edge Computing",
        badge: "Jetson & Hailo-8",
        latencyBadge: "< 15W Power Envelope",
        desc: "Packages and deploys computer vision models to edge devices (NVIDIA Jetson, Raspberry Pi, Hailo-8 NPU) for remote, offline, or bandwidth-constrained environments.",
        stats: [
          "Sub-15 watt power consumption enabling battery-powered smart camera setups",
          "Local on-device inference with zero cloud bandwidth transmission costs",
          "Over-the-Air (OTA) model updates and health telemetry via Balena / k3s"
        ],
        terminal: {
          command: "edge_daemon.status({ device: 'jetson-orin-nano-04' })",
          status: "RUNNING | TEMP: 48C | POWER: 9.8W",
          logs: [
            { type: "comment", text: "// Checking on-device thermal & inference metrics" },
            { type: "step", text: "> model: mobilenet_v4_onnx (INT8 quantized)" },
            { type: "step", text: "> memory_used: 1.2 GB / 8.0 GB Unified Memory" },
            { type: "success", text: "> FPS: 42.4 frames/sec | cloud_sync: offline queue empty" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Frame Ingestion", tag: "RTSP & USB Video", desc: "Captures 4K video feeds via RTSP, GigE Vision, or USB cameras with hardware NVDEC decoding.", iconName: "Database" },
      { step: "02", title: "Pre-Processing", tag: "Color & Crop", desc: "Applies CLAHE contrast enhancement, letterbox resizing, and normalization in GPU memory.", iconName: "Sliders" },
      { step: "03", title: "Neural Inference", tag: "TensorRT Kernels", desc: "Passes frames through INT8-quantized YOLO, SAM, or ViT models on dedicated tensor cores.", iconName: "Cpu" },
      { step: "04", title: "Post-Processing", tag: "NMS & Tracking", desc: "Applies Non-Maximum Suppression (NMS) and ByteTrack ID assignment across successive frames.", iconName: "Workflow" },
      { step: "05", title: "Event Dispatch", tag: "Action Trigger", desc: "Emits low-latency alerts, PLC actuator signals, and JSON metadata streams to monitoring systems.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Cpu", title: "Real-Time 60 FPS Object Detection", tags: ["YOLOv10", "TensorRT", "CUDA Acceleration"], desc: "Detect and classify hundreds of objects per frame with microsecond latency using cutting-edge convolutional and vision transformer models." },
      { iconName: "Zap", title: "Automated Defect Segmentation", tags: ["Segment Anything (SAM)", "Defect Masks", "AOI"], desc: "Isolate micro-defects, paint flaws, and structural cracks on industrial equipment with pixel-perfect semantic segmentation masks." },
      { iconName: "Radio", title: "Edge NPU & Embedded Deployment", tags: ["NVIDIA Jetson", "Hailo-8", "Edge AI"], desc: "Deploy models directly to low-power edge gateways and smart cameras, running full inference locally without needing internet connectivity." },
      { iconName: "Layers", title: "Multi-Camera Trajectory Tracking", tags: ["ByteTrack", "DeepSORT", "Re-Identification"], desc: "Maintain persistent object IDs as vehicles or people move across overlapping camera views in large facilities and logistics yards." },
      { iconName: "Lock", title: "Privacy-Preserving Video Masking", tags: ["Face Blurring", "GDPR Compliance", "License Plate Mask"], desc: "Automatically blur human faces and license plates at the edge before video is archived or streamed, guaranteeing regulatory privacy compliance." },
      { iconName: "Activity", title: "Spatial Heatmap Analytics", tags: ["Occupancy Tracking", "Dwell Time", "Grafana"], desc: "Convert raw video feeds into quantitative spatial analytics, measuring foot traffic density, checkout wait times, and zone utilization." }
    ],
    techStack: [
      { category: "Vision Backbones", items: ["YOLOv10 / YOLOv9", "Segment Anything Model (SAM)", "ResNet / EfficientNet", "MobileNet-v4", "DINOv2"] },
      { category: "Video & Image Frameworks", items: ["OpenCV", "PyTorch Vision", "NVIDIA DeepStream", "GStreamer", "Albumentations"] },
      { category: "Hardware & Edge", items: ["NVIDIA Jetson AGX Orin", "Hailo-8 M.2 NPU", "Google Coral", "Basler GigE Cameras"] },
      { category: "Inference Acceleration", items: ["NVIDIA TensorRT", "OpenVINO", "ONNX Runtime", "CUDA / cuDNN"] },
      { category: "Document Vision", items: ["LayoutLMv3", "PaddleOCR", "Donut Model", "Tesseract 5"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Human Inspection & Cloud Lag",
      beforePoints: [
        "Fatigued human inspectors missing critical micro-cracks on fast conveyor belts.",
        "Streaming 4K video feeds to the cloud saturating expensive enterprise internet bandwidth.",
        "High latency (> 1.5s) making real-time mechanical diverter actuation impossible.",
        "Traditional rule-based computer vision breaking whenever factory lighting shifts."
      ],
      afterTitle: "Devopstrio Edge Vision Architecture",
      afterPoints: [
        "99.8% automated defect detection operating consistently 24/7 at 60 FPS.",
        "Local on-device edge processing transmitting only lightweight alert metadata.",
        "Sub-16ms end-to-end latency directly synchronizing with industrial PLC machinery.",
        "Robust deep learning models that self-normalize across changing ambient lighting."
      ]
    },
    faqs: [
      { q: "Can computer vision models run locally on our factory floor without sending video to the cloud?", a: "Yes. In fact, most of our industrial deployments run entirely on on-premise edge devices (such as NVIDIA Jetson Orin or industrial IPCs). Video never leaves your local network, satisfying both security policies and zero-latency requirements." },
      { q: "How many camera feeds can a single edge server process simultaneously?", a: "Using NVIDIA DeepStream and TensorRT FP16/INT8 compilation, an industrial GPU server (e.g., equipped with an RTX 4090 or A4000) can comfortably process 16 to 32 concurrent 1080p video streams at 30 FPS." },
      { q: "How do you handle changes in factory lighting or seasonal sun angles?", a: "We train our vision models using extensive data augmentation pipelines (Albumentations), simulating shadow variations, glare, lens distortion, and color shifts. Models learn invariant geometric and texture features that remain robust regardless of lighting changes." },
      { q: "Can the system trigger automated mechanical rejects on a conveyor belt?", a: "Yes. Our edge software communicates directly with Programmable Logic Controllers (PLCs) via industrial protocols like Modbus TCP, OPC-UA, or digital GPIO pins to trigger pneumatic diverters in under 20 milliseconds." },
      { q: "How do you collect and label training data for rare manufacturing defects?", a: "We utilize synthetic data generation and diffusion models to augment scarce real-world defect images, combined with Few-Shot learning and anomaly detection models (like PatchCore) that learn what 'good' parts look like and flag any deviation." }
    ]
  },

  "predictive-analytics": {
    slug: "predictive-analytics",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "Predictive Analytics",
    tag: "Data Forecasting",
    badge: "Machine Learning Forecasting & Risk Modeling",
    subtitle: "Forecast market demand, detect customer churn signals, and optimize inventory replenishment. Transform historical enterprise telemetry into accurate, forward-looking strategic intelligence.",
    metrics: [
      { val: "94.6%", label: "Forecast Accuracy", sub: "30-day demand prediction" },
      { val: "38%", label: "Inventory Holding Cost Cut", sub: "Automated replenishment" },
      { val: "< 10ms", label: "Scoring API Latency", sub: "Real-time risk evaluation" },
      { val: "4.2x", label: "Churn Prevention ROI", sub: "Proactive customer interventions" }
    ],
    capabilities: [
      {
        id: "demand-forecasting",
        title: "Hierarchical Supply & Demand Forecasting",
        tag: "Time-Series Intelligence",
        badge: "Neural Forecasting",
        latencyBadge: "Multi-Horizon Projections",
        desc: "Forecasts SKU-level product demand across regional distribution centers using temporal fusion transformers and multi-seasonality decomposition.",
        stats: [
          "Accounts for promotional calendars, local holidays, weather patterns, and macroeconomic indices",
          "Automated confidence intervals quantifying supply chain upside and downside risk",
          "Hierarchical reconciliation guaranteeing store-level forecasts sum to regional totals"
        ],
        terminal: {
          command: "forecast.predict({ sku: 'PROD_8912', horizon_days: 30, confidence: 0.95 })",
          status: "PROJECTION COMPILED",
          logs: [
            { type: "comment", text: "// Running Temporal Fusion Transformer model" },
            { type: "step", text: "> analyzed 730 days of historical sales data" },
            { type: "step", text: "> detected strong 7-day seasonality + upcoming holiday lift" },
            { type: "success", text: "> predicted 30-day volume: 14,250 units (P10: 13,100, P90: 15,400)" }
          ]
        }
      },
      {
        id: "customer-churn-prediction",
        title: "Real-Time Churn & Lifetime Value (LTV) Scoring",
        tag: "Customer Telemetry",
        badge: "Behavioral Analytics",
        latencyBadge: "Daily Micro-Batch Scoring",
        desc: "Predicts customer churn probabilities 60 days before contract renewal by analyzing usage telemetry, support ticket frequency, and login cadence.",
        stats: [
          "SHAP value explanations pinpointing exact drivers behind each churn score",
          "Automated sync with CRM tools (Salesforce, HubSpot) alerting customer success reps",
          "Dynamic Customer Lifetime Value (CLV) estimation guiding marketing spend allocation"
        ],
        terminal: {
          command: "churn_model.evaluate({ account_id: 'enterprise_client_482' })",
          status: "CHURN_RISK: HIGH (84%)",
          logs: [
            { type: "comment", text: "// Extracting behavioral feature vectors" },
            { type: "step", text: "> login_frequency: dropped 42% over past 14 days" },
            { type: "step", text: "> open_tickets: 3 unresolved integration bugs" },
            { type: "success", text: "> primary driver (SHAP): 'unresolved_ticket_aging'" },
            { type: "info", text: "> triggered automated retention playbook in Salesforce" }
          ]
        }
      },
      {
        id: "financial-risk-modeling",
        title: "Credit Risk & Default Underwriting",
        tag: "Financial Engineering",
        badge: "Explainable Risk AI",
        latencyBadge: "< 15ms Real-Time Decision",
        desc: "Automates real-time credit underwriting and loan default risk evaluations with fully explainable tree ensembles and strict compliance adherence.",
        stats: [
          "Sub-15ms decisioning for instant loan approvals or credit limit adjustments",
          "Monotonic constraints ensuring fair, regulator-compliant underwriting decisions",
          "Real-time fraud scoring intercepting suspicious payment flows before clearing"
        ],
        terminal: {
          command: "risk_engine.score({ applicant_id: 'app_90124', loan_amount: 25000 })",
          status: "DECISION: APPROVED (SCORE: 742)",
          logs: [
            { type: "comment", text: "// Evaluating LightGBM monotonic credit risk model" },
            { type: "step", text: "> debt_to_income: 0.24 | repayment_history: 99.8%" },
            { type: "step", text: "> calculated default probability: 1.2% (under 2.5% threshold)" },
            { type: "success", text: "> compliance audit trail logged: adverse action code clean" }
          ]
        }
      },
      {
        id: "predictive-maintenance",
        title: "IoT Sensor Predictive Maintenance",
        tag: "Industrial IoT",
        badge: "Failure Prevention",
        latencyBadge: "Continuous Telemetry",
        desc: "Monitors turbine vibrations, motor temperatures, and hydraulic pressures to predict machinery failure hours before unexpected factory breakdowns occur.",
        stats: [
          "Anomaly detection models flagging early bearing degradation and lubrication breakdown",
          "Estimated Remaining Useful Life (RUL) calculations scheduling off-peak repairs",
          "Reduces unplanned factory downtime by up to 45% across heavy equipment"
        ],
        terminal: {
          command: "iot_predictor.analyze_vibration({ sensor_id: 'turbine_bearing_7B' })",
          status: "WARNING: BEARING WEAR DETECTED",
          logs: [
            { type: "comment", text: "// Ingesting 10 kHz accelerometer telemetry stream" },
            { type: "step", text: "> harmonic peak detected at 240 Hz (outer race defect)" },
            { type: "step", text: "> estimated RUL (Remaining Useful Life): 72 hours" },
            { type: "success", text: "> created automated work order in SAP Maintenance" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Feature Extraction", tag: "Time-Series Pipeline", desc: "Extracts rolling averages, lag features, and event flags from raw relational databases and event buses.", iconName: "Database" },
      { step: "02", title: "Feature Store", tag: "Feast / Hopsworks", desc: "Stores pre-computed online and offline feature vectors to guarantee zero training-serving skew.", iconName: "Layers" },
      { step: "03", title: "Ensemble Modeling", tag: "XGBoost & TFT", desc: "Passes features into gradient boosted trees and neural temporal fusion transformers.", iconName: "Cpu" },
      { step: "04", title: "Explainability", tag: "SHAP Values", desc: "Computes feature importance contributions for every prediction to ensure full stakeholder trust.", iconName: "Workflow" },
      { step: "05", title: "Action Trigger", tag: "Business Integration", desc: "Publishes scores directly to Salesforce, ERPs, and automated email marketing workflows.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Activity", title: "SKU Demand Forecasting", tags: ["Temporal Fusion Transformers", "LightGBM", "Prophet"], desc: "Accurately predict seasonal sales peaks and stock requirements across regional warehouses to eliminate stockouts and reduce excess inventory." },
      { iconName: "Zap", title: "Proactive Churn Prevention", tags: ["Survival Analysis", "SHAP Explanations", "CRM Sync"], desc: "Identify customers at risk of cancellation weeks in advance, arming customer success teams with the exact reasons behind the risk." },
      { iconName: "ShieldCheck", title: "Automated Credit & Risk Scoring", tags: ["Monotonic Constraints", "Fair Lending", "Sub-15ms"], desc: "Accelerate lending and insurance underwriting with real-time risk scores that strictly adhere to regulatory transparency standards." },
      { iconName: "Server", title: "Industrial Predictive Maintenance", tags: ["Remaining Useful Life", "IoT Telemetry", "Vibration AI"], desc: "Detect microscopic equipment wear on turbines, pumps, and motors before catastrophic mechanical failure causes costly production halts." },
      { iconName: "Sliders", title: "Dynamic Pricing Optimization", tags: ["Price Elasticity", "Reinforcement Learning", "Margin Maximization"], desc: "Adjust e-commerce and logistics pricing dynamically based on live market demand, competitor benchmarks, and localized inventory depth." },
      { iconName: "Lock", title: "Zero Training-Serving Skew", tags: ["Feast Feature Store", "Point-in-Time Joins", "Data Consistency"], desc: "Enforce consistent feature definitions between offline training datasets and live production scoring APIs using modern feature stores." }
    ],
    techStack: [
      { category: "Predictive & Boosting Frameworks", items: ["XGBoost", "LightGBM", "CatBoost", "Scikit-Learn"] },
      { category: "Time-Series Forecasting", items: ["Temporal Fusion Transformers (TFT)", "Nixtla NeuralForecast", "Prophet", "Darts"] },
      { category: "Feature Stores & Data", items: ["Feast Feature Store", "Snowflake", "Databricks Delta Lake", "DuckDB"] },
      { category: "Explainability & Interpretability", items: ["SHAP (SHapley Additive exPlanations)", "LIME", "Captum"] },
      { category: "Serving & Orchestration", items: ["FastAPI Scoring APIs", "Apache Airflow", "Kubeflow Pipelines", "Prefect"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Spreadsheets & Reactive Decisions",
      beforePoints: [
        "Static monthly Excel forecasts that miss sudden market fluctuations and supply shortages.",
        "Discovering customer churn only after the cancellation notice has been submitted.",
        "Unplanned machinery breakdowns stopping factory production for days at a time.",
        "Black-box algorithms that cannot explain why a credit application was denied."
      ],
      afterTitle: "Devopstrio Predictive Analytics",
      afterPoints: [
        "Continuous machine learning forecasts updating dynamically as daily sales occur.",
        "Early warning churn indicators triggering automated interventions 60 days ahead.",
        "Sensor anomaly detection predicting mechanical wear hours before failure occurs.",
        "Fully explainable SHAP values providing transparent reasoning for every prediction."
      ]
    },
    faqs: [
      { q: "How much historical data do we need to build accurate predictive models?", a: "For time-series forecasting, having at least 1 to 2 years of historical data is ideal to capture recurring annual seasonalities. For behavioral tasks like churn or fraud detection, 3 to 6 months of user event telemetry is often sufficient to train high-performing baseline models." },
      { q: "How do you explain the predictions to non-technical business managers?", a: "We integrate SHAP (SHapley Additive exPlanations) values into every model endpoint. This provides an intuitive breakdown of exactly which factors (e.g., '+15% churn risk due to dropped login frequency') contributed to each decision." },
      { q: "What is 'training-serving skew' and how do you prevent it?", a: "Training-serving skew occurs when the math used to compute features during model training differs slightly from the code running in the live production API, causing model accuracy to degrade. We eliminate this by utilizing an enterprise Feature Store (like Feast) that serves identical data definitions to both environments." },
      { q: "Can predictions be pushed directly into our existing Salesforce or ERP system?", a: "Yes. Our scoring pipelines can run in batch (pushing scores overnight directly into Salesforce, SAP, or Snowflake tables) or in real-time via low-latency REST webhooks." },
      { q: "How often do predictive models need to be retrained?", a: "Typically, forecasting models are retrained weekly or monthly as new sales data clears. Our MLOps pipelines monitor accuracy metrics and can trigger automated retraining jobs whenever performance dips below a target threshold." }
    ]
  },

  "mlops-automation": {
    slug: "mlops-automation",
    pillarSlug: "artificial-intelligence",
    pillarName: "Artificial Intelligence",
    title: "MLOps Automation",
    tag: "Operational AI",
    badge: "Continuous Delivery for Machine Learning",
    subtitle: "Automate the end-to-end machine learning lifecycle. From data versioning and distributed training pipelines to automated model registries, canary rollouts, and real-time concept drift monitoring.",
    metrics: [
      { val: "10x", label: "Deployment Frequency", sub: "Production model releases" },
      { val: "< 5min", label: "Zero-Downtime Rollback", sub: "Automated canary health checks" },
      { val: "100%", label: "Model Lineage & Auditability", sub: "Git-backed experiment tracking" },
      { val: "55%", label: "Cloud GPU Cost Optimization", sub: "Spot instance spot orchestrators" }
    ],
    capabilities: [
      {
        id: "automated-model-registry",
        title: "Enterprise Model Registry & Lineage",
        tag: "Governance & Versioning",
        badge: "GitOps for Models",
        latencyBadge: "Immutable Signatures",
        desc: "Maintains an immutable audit record linking every production model artifact to its exact training commit, dataset hash, hyperparameters, and approval signatures.",
        stats: [
          "Complete cryptographic lineage from raw data snapshot to production container",
          "Automated model staging lifecycle: Development -> Staging -> Production -> Archived",
          "Integration with MLflow and AWS SageMaker Model Registry"
        ],
        terminal: {
          command: "mlflow.register_model({ run_id: 'run_4920a', model_name: 'fraud_detector_v3' })",
          status: "MODEL REGISTERED -> STAGING",
          logs: [
            { type: "comment", text: "// Verifying model evaluation metrics against benchmark gate" },
            { type: "step", text: "> validation_f1: 0.984 (production threshold: >= 0.975)" },
            { type: "step", text: "> data_hash: dvc://data/train_2026_q2.dvc (sha256 verified)" },
            { type: "success", text: "> model artifact tagged as 'candidate_v3.2' in MLflow Registry" }
          ]
        }
      },
      {
        id: "ci-cd-training-pipelines",
        title: "Automated Continuous Training (CT) Pipelines",
        tag: "Continuous Learning",
        badge: "Kubeflow & Argo",
        latencyBadge: "Spot GPU Scheduled",
        desc: "Triggers automated model retraining pipelines upon detecting concept drift or when new data partitions arrive in the enterprise lakehouse.",
        stats: [
          "Declarative pipeline execution on Kubernetes using Kubeflow and Argo Workflows",
          "Dynamic provisioning of ephemeral spot GPU instances saving up to 55% in compute costs",
          "Automated A/B validation comparing candidate models against active production champions"
        ],
        terminal: {
          command: "argo.submit({ pipeline: 'nightly_retrain.yaml', params: { data_date: 'today' } })",
          status: "PIPELINE ACTIVE (4 PODS)",
          logs: [
            { type: "comment", text: "// Spawning ephemeral training cluster on AWS EKS" },
            { type: "step", text: "> acquired 4x spot g5.12xlarge GPU instances ($0.74/hr)" },
            { type: "step", text: "> step[preprocess]: complete (12m) | step[train]: complete (42m)" },
            { type: "success", text: "> step[eval]: candidate outperformed champion by +1.4% AUC" }
          ]
        }
      },
      {
        id: "canary-deployment-kserve",
        title: "Canary Rollouts & Shadow Deployments",
        tag: "Zero-Downtime Delivery",
        badge: "KServe & Istio",
        latencyBadge: "Zero Downtime",
        desc: "Safely introduces new models by routing a small percentage of live traffic to the candidate or shadowing 100% of traffic invisibly before full cutover.",
        stats: [
          "Istio service mesh routing 5% of ingress queries to canary pods",
          "Automated rollback triggered if canary p99 latency spikes or error rates exceed 0.1%",
          "Shadow mode comparing outputs of old and new models without impacting users"
        ],
        terminal: {
          command: "kserve.deploy({ model: 'fraud_detector_v3', traffic_split: { prod: 90, canary: 10 } })",
          status: "CANARY ACTIVE (10% TRAFFIC)",
          logs: [
            { type: "comment", text: "// Configuring Istio virtual service routing rules" },
            { type: "step", text: "> routed 10% live traffic to candidate container" },
            { type: "info", text: "> canary error rate: 0.00% | p99 latency: 12.4ms" },
            { type: "success", text: "> health gate passed: scheduled 100% promotion in 60 mins" }
          ]
        }
      },
      {
        id: "real-time-drift-monitoring",
        title: "Data & Concept Drift Monitoring",
        tag: "Model Observability",
        badge: "Continuous Quality",
        latencyBadge: "Real-Time Telemetry",
        desc: "Continuously computes statistical divergence (Kolmogorov-Smirnov, Wasserstein distance) between live inference payloads and training baselines.",
        stats: [
          "Real-time Prometheus alerts dispatched when input distributions shift significantly",
          "Ground-truth delay tracking measuring true model accuracy as customer labels arrive",
          "Automated trigger firing a retraining pipeline when drift surpasses critical thresholds"
        ],
        terminal: {
          command: "drift_monitor.check({ window: 'last_24h', metric: 'wasserstein' })",
          status: "DRIFT DETECTED: FEATURE 'USER_AGE'",
          logs: [
            { type: "comment", text: "// Evaluating input feature distribution shifts" },
            { type: "step", text: "> feature[income]: stable (drift_score: 0.02)" },
            { type: "step", text: "> feature[user_age]: drift_score 0.18 (threshold: >= 0.10)" },
            { type: "success", text: "> dispatched Slack alert #mlops-telemetry: 'Retraining recommended'" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Data Versioning", tag: "DVC & LakeFS", desc: "Versions training datasets and feature stores cryptographically using Git and DVC.", iconName: "Database" },
      { step: "02", title: "Automated Training", tag: "Argo / Kubeflow", desc: "Executes reproducible training pipelines on dynamically provisioned spot GPU compute.", iconName: "Cpu" },
      { step: "03", title: "Model Validation", tag: "Benchmark Gates", desc: "Verifies accuracy, latency, fairness, and security metrics against strict gate policies.", iconName: "ShieldCheck" },
      { step: "04", title: "Canary Rollout", tag: "Istio & KServe", desc: "Gradually routes live traffic to the new model container with automatic rollback on error.", iconName: "Workflow" },
      { step: "05", title: "Drift Monitoring", tag: "Prometheus & Evidently", desc: "Tracks statistical feature drift, model decay, and resource consumption in real-time.", iconName: "Activity" }
    ],
    featureCards: [
      { iconName: "Workflow", title: "Continuous Training (CT) Pipelines", tags: ["Kubeflow", "Argo Workflows", "Airflow"], desc: "Automate model retraining and re-validation on fresh data partitions with zero manual intervention from engineering teams." },
      { iconName: "Database", title: "Immutable Model & Data Lineage", tags: ["MLflow", "DVC", "W&B Models"], desc: "Trace every model running in production back to its exact training commit, dataset snapshot, and developer approval record." },
      { iconName: "Server", title: "Canary & Shadow Deployments", tags: ["KServe", "Istio Service Mesh", "Zero Downtime"], desc: "Test new models in live production with zero risk by shadowing traffic or executing gradual traffic split rollouts." },
      { iconName: "Activity", title: "Real-Time Drift & Decay Alarms", tags: ["Evidently AI", "Prometheus", "Grafana"], desc: "Get alerted immediately when real-world user behavior shifts or model predictions begin to degrade over time." },
      { iconName: "Cpu", title: "Spot GPU Cost Optimization", tags: ["AWS Spot", "GCP Preemptible", "Karpenter"], desc: "Slash cloud training bills by up to 55% using intelligent spot instance orchestrators with automated checkpointing and recovery." },
      { iconName: "Lock", title: "Governance & Model Compliance", tags: ["Model Cards", "SOC2 Compliance", "Adverse Impact Gates"], desc: "Generate standardized model cards and audit documentation automatically, satisfying enterprise governance and regulatory requirements." }
    ],
    techStack: [
      { category: "Model Registry & Tracking", items: ["MLflow Enterprise", "Weights & Biases", "Neptune.ai", "DVC"] },
      { category: "Pipeline Orchestration", items: ["Kubeflow Pipelines", "Argo Workflows", "Apache Airflow", "Prefect"] },
      { category: "Model Serving & Mesh", items: ["KServe", "Seldon Core", "Istio Service Mesh", "vLLM", "Triton"] },
      { category: "Monitoring & Observability", items: ["Evidently AI", "Prometheus", "Grafana", "Arize AI", "WhyLabs"] },
      { category: "Cloud & Infrastructure", items: ["Kubernetes (EKS/GKE)", "Terraform", "AWS SageMaker", "Karpenter Spot"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Manual Jupyter Notebooks",
      beforePoints: [
        "Models saved as random .pkl files on developer laptops with zero lineage.",
        "Manual deployment taking weeks of coordination with infrastructure teams.",
        "Zero visibility into whether a production model is drifting or failing.",
        "Painful manual rollbacks during outages causing prolonged system downtime."
      ],
      afterTitle: "Devopstrio MLOps Platform",
      afterPoints: [
        "Cryptographic lineage linking every model to code, data, and approval audits.",
        "Automated CI/CD pipelines deploying validated models in minutes.",
        "Real-time statistical drift alarms alerting teams before users notice issues.",
        "Instant zero-downtime canary rollbacks when latency or error anomalies occur."
      ]
    },
    faqs: [
      { q: "What is the primary difference between traditional DevOps and MLOps?", a: "DevOps focuses on managing code versions, builds, and infrastructure deployments. MLOps introduces the critical dimension of data: it manages code, data versions, model weights, continuous retraining, and statistical concept drift over time." },
      { q: "How do you test a model before deploying it to production?", a: "Our CI/CD pipeline runs automated benchmark tests against holdout datasets. It checks accuracy (AUC/F1), inference latency under load, memory usage, fairness/bias metrics, and data leakage before promoting the model to the registry." },
      { q: "What is a shadow deployment and why is it useful?", a: "In a shadow deployment, production traffic is replicated so both the existing model and the candidate model receive identical live requests. However, only the existing model's output is returned to users. This allows engineers to safely verify the new model's latency and accuracy under real-world conditions with zero risk." },
      { q: "Can MLOps pipelines run on our existing Kubernetes cluster?", a: "Yes. Our MLOps architectures are cloud-native and Kubernetes-based (leveraging open-source standards like Kubeflow, Argo, and KServe). They install cleanly on AWS EKS, Google GKE, Azure AKS, or on-premise OpenShift clusters." },
      { q: "How does MLOps reduce cloud GPU costs?", a: "By automating training pipelines to run on ephemeral Spot and Preemptible GPU instances. When coupled with automated checkpointing, training can pause and resume automatically, reducing GPU compute spend by up to 55%." }
    ]
  }
};
