import { ServiceCategory, CapabilityDetail } from "./types";

export const aiDataService: ServiceCategory = {
  slug: "ai-data-innovation",
  title: "AI & Data Innovation",
  badge: "Artificial Intelligence",
  subtitle: "Scale your cognitive advantage with custom Generative AI agents, low-latency MLOps pipelines, and enterprise-grade data platforms.",
  overviewHeading: "Intelligent cognitive solutions built for compliance and precision",
  overviewDesc1: "We design, construct, and scale production-grade AI platforms, intelligent workflow agents, and specialized LLM configurations. Our software aligns with SOC-2 and ISO compliance parameters, ensuring absolute query privacy and safe dataset utilization.",
  overviewDesc2: "We bridge legacy business data warehouses with modern vector indexes, facilitating low-latency search feeds, real-time analytics, and automated decision engines.",
  stats: [
    { value: "99.8%", label: "Model Query Accuracy" },
    { value: "150k+", label: "Daily Agent Actions" },
    { value: "4.8x", label: "Workflow Speed Increase" },
    { value: "35ms", label: "Telemetry Latency" }
  ],
  capabilities: [
    {
      slug: "generative-ai-solutions",
      title: "Generative AI Solutions",
      description: "Custom LLM training, prompt engineering pipelines, and retrieval-augmented generation (RAG) architectures.",
      items: ["Secure domain-specific knowledge bases", "Multi-modal vision and text interfaces", "Strict token and credit rate control engines"]
    },
    {
      slug: "ai-agents-automation",
      title: "AI Agents & Automation",
      description: "Autonomous agents that orchestrate complex multi-step digital workflows and call external APIs securely.",
      items: ["Self-healing error retry loops", "Dynamic tool selection classifiers", "Human-in-the-loop review queues"]
    },
    {
      slug: "machine-learning-engineering",
      title: "Machine Learning Engineering",
      description: "Custom regression, classification, and neural model development tailored for specific business metrics.",
      items: ["Data prep and normalization scripts", "Model tuning and hyperparameter sweeps", "High-throughput model endpoints"]
    },
    {
      slug: "mlops-ai-operations",
      title: "MLOps & AI Operations",
      description: "CI/CD for machine learning, automated retraining triggers, model monitoring, and drift detection.",
      items: ["Kubeflow model orchestration pipelines", "Prometheus performance telemetry dashboards", "Safe blue-green model rollouts"]
    }
  ],
  outcomes: [
    "95% reduction in manual data processing labor",
    "Continuous model updates with automated drift validation checks",
    "Secure knowledge access covering multi-language enterprise documents"
  ],
  industries: [
    "Banking & Finance: Automated credit scoring and real-time fraud alerts",
    "Healthcare: Clinical chart anonymization and medical data parsing",
    "Retail & E-commerce: Real-time personalization loops and visual search"
  ],
  techStack: [
    { name: "PyTorch / TensorFlow", desc: "Core model training frameworks and neural layers." },
    { name: "LangChain / LangGraph", desc: "Agent framework managing multi-step reasoning." },
    { name: "Pinecone / Qdrant", desc: "High-performance vector databases for rapid semantic search." }
  ],
  deliveryFramework: [
    "Phase 1: Architecture Consult & Model Evaluation",
    "Phase 2: RAG Pipeline Design & Vector Index Setup",
    "Phase 3: Automated MLOps & Production Scaling"
  ],
  caseStudies: [
    {
      title: "Rebuilding document retrieval search for national advisory firm.",
      desc: "We deployed a custom Next.js search portal integrated with a LangChain/Qdrant backend, indexing 5M historical case documents. Search response times dropped to 120ms with 98% relevant citations.",
      highlights: [
        "Constructed secure API endpoints for document uploads",
        "Passed SOC-2 audit validations on sensitive files",
        "Enabled multi-user login permissions with token counting"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you protect business data inside LLMs?",
      a: "We only deploy closed-loop models in private VPC environments (using AWS Bedrock or Azure OpenAI), guaranteeing that your corporate data is never utilized for public training."
    },
    {
      q: "What is your approach to model drift monitoring?",
      a: "We deploy active telemetry loggers that measure cosine similarity score drifts on incoming user queries. When a drift exceeds set bounds, the system alerts SRE leads and queues retraining scripts."
    }
  ],
  ctaTitle: "Co-create your cognitive",
  ctaHighlight: "AI roadmap",
  ctaDesc: "Book an engineering consult to assess your datasets, identify LLM candidates, and sketch high-level RAG layouts.",
  ctaBtnText: "Consult AI Architect"
};

export const aiDataCapabilities: Record<string, CapabilityDetail> = {
  "generative-ai-solutions": {
    slug: "generative-ai-solutions",
    title: "Generative AI Solutions",
    heroSubtitle: "Construct secure retrieval-augmented generation pipelines, custom fine-tuning engines, and multi-modal conversational interfaces.",
    challenge: "Off-the-shelf public model configurations regularly suffer from hallucinations, lack deep domain-specific knowledge, and expose sensitive customer datasets to public model builders.",
    solution: "We construct private RAG configurations that fetch real-time enterprise database context, translate user queries via semantic embedding loops, and feed context-bound prompts to closed cloud model containers.",
    features: [
      "Semantic chunking and embedding generation with custom model templates",
      "Retrieval pipelines leveraging vector search databases with composite indices",
      "Closed private model endpoints (AWS Bedrock, Azure OpenAI) with API firewalls"
    ],
    benefits: [
      "99% accuracy on private database query lookups",
      "Guaranteed compliance with zero public leakage on private corporate files",
      "Extremely fast response speeds through caching and semantic search pre-filtering"
    ],
    deliveryApproach: [
      "Discovery & Data Audit: Standardizing source file schemas and cleaning raw texts.",
      "Vector Storage Design: Deploying and tuning index partitions inside Pinecone or Qdrant.",
      "Deployment & Testing: Setting up Next.js frontends and monitoring prompt tokens."
    ],
    techStack: [
      { name: "LangChain / LlamaIndex", desc: "Data framework for orchestrating LLM queries and memory." },
      { name: "Qdrant Vector Database", desc: "Ultra-fast vector storage matching embeddings." },
      { name: "OpenAI API / AWS Bedrock", desc: "Enterprise cognitive models with data privacy controls." }
    ],
    caseStudy: {
      title: "Deploying secure advisor dashboard for financial service provider.",
      desc: "We engineered a private Next.js advisor portal using RAG to fetch loan records. The platform serves 4,000 agents, enabling natural language customer lookup in under 150ms.",
      metrics: [
        { value: "<150ms", label: "Average query delay" },
        { value: "4,000+", label: "Active advisors supported" },
        { value: "99.2%", label: "Retrieval accuracy" }
      ]
    },
    faqs: [
      {
        q: "Are model queries logged for public training?",
        a: "No. We configure enterprise contracts ensuring that data remains within your private VPC and is never logged for public model optimizations."
      },
      {
        q: "How do you handle unstructured data source formats?",
        a: "We build serverless ingestion pipelines that clean PDFs, DOCX, and XLS files, convert them to structured JSON, and slice them using semantic chunking."
      }
    ]
  },
  "ai-agents-automation": {
    slug: "ai-agents-automation",
    title: "AI Agents & Automation",
    heroSubtitle: "Deploy autonomous workflow agents capable of multi-step reasoning, self-correction, and secure API execution.",
    challenge: "Traditional process automations fail when encountering dynamic inputs, schema updates, or edge-case API responses, requiring continuous manual debugging and code edits.",
    solution: "We build cognitive agent networks powered by dynamic state graphs, enabling self-healing retry logic, model-driven tool selection, and secure API interactions.",
    features: [
      "Stateful agent networks with circular execution loops and custom checks",
      "Dynamic routing filters that choose appropriate APIs based on user intent",
      "Automatic error capture and self-correcting validation prompts"
    ],
    benefits: [
      "92% decrease in workflow automation breakage rates",
      "Seamless integration with legacy ERP systems via adaptive API adapters",
      "Human-in-the-loop triggers for high-risk data edits"
    ],
    deliveryApproach: [
      "Process Mapping: Outlining workflow milestones and listing target tools.",
      "State Graph Construction: Setting up nodes and transition conditions using LangGraph.",
      "Incident Monitoring: Building telemetry panels logging agent execution traces."
    ],
    techStack: [
      { name: "LangGraph", desc: "Stateful agent coordination framework." },
      { name: "Python / FastAPI", desc: "Rapid API backends hosting custom tools." },
      { name: "Docker", desc: "Isolated runtimes executing agent scripts." }
    ],
    caseStudy: {
      title: "Automated logistics routing agent for shipping provider.",
      desc: "We deployed an autonomous agent that reads customer dispatch emails, calls shipping carrier APIs, resolves address anomalies, and submits custom manifests automatically.",
      metrics: [
        { value: "85%", label: "Reduction in manual entry time" },
        { value: "0.02%", label: "Exception rate in address resolutions" },
        { value: "24/7", label: "Execution availability" }
      ]
    },
    faqs: [
      {
        q: "What safeguards prevent runaway loop cycles?",
        a: "We configure strict execution limiters (e.g. maximum of 15 tool calls per thread) and enforce human review checkpoints for financial transactions."
      },
      {
        q: "How do agents access secure internal databases?",
        a: "Agents connect through tokenized API endpoints. We restrict database permissions using read-only roles."
      }
    ]
  }
};
