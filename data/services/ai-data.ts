import { ServiceCategory, CapabilityDetail } from "./types";

export const aiDataService: ServiceCategory = {
  slug: "ai-data-innovation",
  title: "AI Service UK",
  badge: "Artificial Intelligence UK",
  subtitle: "AI services built for compliance, accuracy, and reliable business results",
  overviewHeading: "AI services built for compliance, accuracy, and reliable business results",
  overviewDesc1: "We help UK businesses use AI in a simple and useful way. Whether you are new to AI, need a new solution, or want to improve your current tools, we are here to help. Our AI Service UK solutions include AI assistants, task automation, and tools made for your business. We also keep your data and privacy safe, so you can use AI with confidence and focus on your work.",
  overviewDesc2: "",
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
      description: "Domain-adapted Large Language Models, semantic search pipelines, and enterprise knowledge retrieval systems.",
      items: [
        "Domain-tuned LLMs with custom enterprise vocabularies",
        "Context-augmented RAG engines with dense retrieval vectors",
        "Deterministic guardrail systems with hallucination filters"
      ],
      href: "/services/ai-data-innovation/generative-ai-solutions"
    },
    {
      slug: "ai-agents-automation",
      title: "AI Agents & Automation",
      description: "Self-correcting, autonomous agents configured for enterprise workflow execution and intelligent process automation.",
      items: [
        "Dynamic task delegation across multi-agent graphs",
        "Closed-loop execution environments with rollback safety",
        "Automated API interaction layers with continuous monitoring"
      ],
      href: "/services/ai-data-innovation/ai-agents-automation"
    },
    {
      slug: "machine-learning-engineering",
      title: "Machine Learning Engineering",
      description: "High-throughput model training, distributed inference engines, and automated continuous learning pipelines.",
      items: [
        "Distributed feature stores with sub-millisecond retrieval",
        "Low-latency model inference servers with dynamic batching",
        "Automated model optimization (pruning, quantization)"
      ],
      href: "/services/ai-data-innovation/machine-learning-engineering"
    },
    {
      slug: "data-engineering",
      title: "Data Engineering & Pipelines UK",
      description: "Enterprise-grade streaming architectures, lakehouse systems, and vector database ingestion pipelines built for high-throughput AI model readiness.",
      items: [
        "Real-time Kafka & Spark streaming data pipelines",
        "Unified Delta Lakehouse & vector storage configurations",
        "Clean, automated ETL/ELT workflows with sub-second retrieval"
      ],
      href: "/services/ai-data-innovation/data-engineering"
    },
    {
      slug: "business-intelligence-analytics",
      title: "Business Intelligence & Analytics",
      description: "Transform fragmented business data into actionable executive insights with interactive dashboards, semantic queries, and real-time telemetry.",
      items: [
        "Consolidated executive BI dashboards in Power BI & Tableau",
        "Natural language analytics querying and automated reports",
        "Multi-source database telemetry & KPI metric grids"
      ],
      href: "/services/ai-data-innovation/business-intelligence-analytics"
    },
    {
      slug: "predictive-analytics",
      title: "Predictive Analytics & Forecasting",
      description: "Leverage historical enterprise patterns and machine learning forecasting models to predict market demand, mitigate risks, and prevent customer churn.",
      items: [
        "Time-series forecasting models with 98%+ accuracy",
        "Customer churn & lifetime value prediction engines",
        "Dynamic pricing & automated inventory demand algorithms"
      ],
      href: "/services/ai-data-innovation/predictive-analytics"
    },
    {
      slug: "data-governance",
      title: "Data Governance & AI Compliance",
      description: "Ensure regulatory compliance, data lineage tracking, and strict access governance across all AI training datasets and production inference pipelines.",
      items: [
        "UK GDPR, ISO 27001, and HIPAA compliance readiness",
        "Automated metadata cataloging & lineage audit trails",
        "Role-based access controls (RBAC) & data privacy masks"
      ],
      href: "/services/ai-data-innovation/data-governance"
    },
    {
      slug: "mlops-ai-operations",
      title: "MLOps & AI Operations",
      description: "Production lifecycle management, model drift mitigation, and compliance-driven model registry operations.",
      items: [
        "Automated retraining triggers based on distribution drift",
        "Model lineage tracing with full audit trails",
        "Automated A/B testing and canary deployment matrices"
      ],
      href: "/services/ai-data-innovation/mlops-ai-operations"
    }
  ],
  outcomes: [
    "95% reduction in manual document analysis and structured data entry cycles",
    "Continuous model validation with automated feedback loops and drift monitoring",
    "Secure natural-language knowledge queries spanning multi-format legacy databases"
  ],
  industries: [
    "Banking & Finance: Real-time fraud detection and automated algorithmic loan underwriting",
    "Healthcare: Clinical record summarization and predictive diagnostics with strict HIPAA compliance",
    "Retail & E-commerce: Hyper-personalized recommendation engines and automated inventory routing"
  ],
  techStack: [
    { name: "AWS Bedrock / Azure OpenAI", desc: "Enterprise cognitive foundation models with private UK VPC isolation." },
    { name: "PyTorch / TensorFlow", desc: "Deep learning and custom model training frameworks." },
    { name: "LangChain / LangGraph", desc: "Stateful agent framework managing multi-step reasoning." },
    { name: "Pinecone / Qdrant", desc: "High-performance vector databases for rapid semantic search." }
  ],
  deliveryFramework: [
    "Phase 1: Architecture Consult & Model Evaluation",
    "Phase 2: RAG Pipeline Design & Vector Index Setup",
    "Phase 3: Automated MLOps & Production Scaling"
  ],
  caseStudies: [
    {
      title: "Enterprise Gen AI and RAG search platform for UK financial advisory firm.",
      desc: "Deployed a private Next.js advisor portal integrated with LangChain and Qdrant backend, indexing 5M historical documents. Search latency dropped to 120ms with 99.2% accuracy.",
      highlights: [
        "Constructed secure API endpoints with private VPC endpoints",
        "Passed SOC-2 Type II and UK GDPR compliance audits",
        "Enabled multi-tenant authentication with token usage tracking"
      ]
    }
  ],
  faqs: [
    {
      q: "How does our AI services UK team keep your data private?",
      a: "Every model we run sits inside its own private VPC on AWS Bedrock or Azure OpenAI, set up just for you. As an AI consulting services UK provider, we sign strict agreements confirming your data and queries are never logged, cached, or used to train anything else."
    },
    {
      q: "What size and type of models can we work with?",
      a: "Our AI services UK team works with a broad mix of architectures, from small, efficient open-weight models (like Llama-3 8B or Mistral 7B) to the largest enterprise-grade models available (like GPT-4o, Claude 3.5 Sonnet, or Gemini Pro)."
    },
    {
      q: "How do you prepare messy files for smart search?",
      a: "Our AI services UK team sets up automated pipelines that pull in PDFs, Word docs, HTML, and audio recordings, clean them into a consistent format, break them into meaningful chunks, and run them through fast embedding models."
    },
    {
      q: "How do you stop AI models from making things up?",
      a: "Our AI services UK team uses two layers of protection: carefully structured prompts with clear rules, plus real-time checks (like LangChain Guardrails) that verify what the model says against your actual data before showing it to you."
    },
    {
      q: "How long does it take to get an AI agent live?",
      a: "Our AI services UK team usually has a working proof-of-concept ready in 3-4 weeks. A fully built production agent, with self-healing logic, database syncs, and human-in-the-loop checks, typically takes 8-12 weeks."
    },
    {
      q: "Can you train models to match how we write?",
      a: "Yes. Our AI services UK team sets up dedicated GPU clusters and training scripts using efficient fine-tuning methods (PEFT), including LoRA and QLoRA, to shape open-weight models around your company's own voice."
    },
    {
      q: "How do you keep API costs under control?",
      a: "Our AI services UK team sets up smart caching (like Redis or GPTCache) that catches repeat questions before they hit the model, cutting unnecessary calls. We also add per-user rate limits so your monthly costs stay predictable."
    },
    {
      q: "Will your AI services UK work with our older SQL databases?",
      a: "Yes. Our AI services UK team builds secure query layers that turn plain-English questions into SQL, check against your schema and run in a read-only sandbox, so your live database stays untouched."
    },
    {
      q: "How do you keep AI outputs safe and fair?",
      a: "Our AI services UK team builds in checks for harmful language, prompt manipulation, and unsafe replies, catching and blocking anything that breaks policy before it ever reaches your users."
    },
    {
      q: "What kind of support can we count on once we're alive?",
      a: "Our AI services UK team keeps watch around the clock, tracking performance and flagging issues the moment they arise. If something critical goes wrong in production, our engineers respond within 15 minutes."
    }
  ],
  ctaTitle: "Co-create your cognitive",
  ctaHighlight: "AI roadmap",
  ctaDesc: "Book an engineering consult with our UK AI architects to evaluate datasets, select candidate models, and plan your deployment.",
  ctaBtnText: "Consult AI Architect"
};

export const aiDataCapabilities: Record<string, CapabilityDetail> = {
  "generative-ai-solutions": {
    slug: "generative-ai-solutions",
    title: "Gen AI Services UK",
    heroSubtitle: "Transform business processes with Gen AI services UK. Get generative AI services, consulting and custom AI solutions for business growth.",
    challenge: "Off-the-shelf AI models regularly suffer from hallucinations, limited domain knowledge, and security risks when sensitive customer data is processed through public AI platforms.",
    solution: "We provide Gen AI services UK that build private RAG solutions, connect enterprise data, understand user queries through semantic search, and deliver context-aware responses through secure AI environments.",
    challengeLabel: "Common Gen AI Challenges",
    bottleneckLabel: "Business Bottleneck",
    solutionLabel: "Our Gen AI Services UK Approach",
    deliverablesLabel: "What Our Gen AI Solutions Include",
    outcomesLabel: "Benefits of Gen AI Services UK",
    outcomeBottomLabel: "Resolved Outcome",
    features: [
      "Semantic chunking and embedding generation for generative AI solutions UK",
      "Retrieval pipelines using vector databases with intelligent semantic search",
      "Private AI endpoints through AWS Bedrock and Azure OpenAI with security"
    ],
    benefits: [
      "99% accuracy through secure Gen AI solutions UK",
      "Fully-audited infrastructure aligned with SOC-2 and regulatory frameworks",
      "Fast responses through caching and semantic search optimisation"
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
        q: "What Makes Our Gen AI Services UK Approach Different?",
        a: "We focus on making Gen AI useful, simple, and easy to manage. This helps your team get useful results without making the technology harder to use."
      },
      {
        q: "How Do You Measure the Success of Gen AI Services UK?",
        a: "We look at more than just whether the system is up and running. This gives you a clear idea of how well the Gen AI Service UK is working and where it can be improved."
      },
      {
        q: "What Security Measures Protect Gen AI Services UK?",
        a: "Keeping your data safe should always come first. We also keep an eye on the system so any unusual activity or security issues can be found and dealt with early."
      },
      {
        q: "Can Gen AI Services UK Work With Your Existing Systems?",
        a: "Yes. You don’t have to replace your current systems to start using Gen AI. This makes it easier to add Gen AI to your current workflow without making major changes."
      },
      {
        q: "How Does the Gen AI Service UK Handle Busy Periods and Sudden Spikes in Demand?",
        a: "We automatically add or reduce resources when demand changes. This helps the system stay fast and reliable, even when lots of people are using it at the same time."
      },
      {
        q: "What Is the Typical Timeline for Implementing Gen AI Services UK?",
        a: "Every project is different, so the time needed can vary. In many cases, a Gen AI project can be up and running within 4–8 weeks"
      },
      {
        q: "Do You Provide Training and Support for Your Team?",
        a: "Yes. We make sure your team feels comfortable using the system from day one. We provide easy-to-follow guides, explain the key features, and offer hands-on training."
      },
      {
        q: "How Do We Keep Track of Gen AI Service UK Performance?",
        a: "We regularly check how quickly the service responds and how well it works under normal use. We also watch for errors or slowdowns so we can deal with problems early."
      },
      {
        q: "What Compliance Standards Do Gen AI Services UK Support?",
        a: "We follow widely recognised security and privacy standards to help keep information safe. This includes frameworks such as SOC 2, ISO 27001, HIPAA, and GDPR."
      },
      {
        q: "What Cost Savings Can You Expect from Gen AI Services UK?",
        a: "Gen AI can take care of many repetitive tasks that usually take up valuable time. This means your team can spend more time on important work instead of doing the same tasks again and again."
      }
    ]
  },
  "ai-agents-automation": {
    slug: "ai-agents-automation",
    title: "AI Agents UK",
    heroSubtitle: "Build smarter workflows with AI agents UK. Get AI automation services, intelligent automation and custom AI agent development for your business.",
    challenge: "Traditional business processes struggle with dynamic data, changing requirements, and repetitive tasks, creating delays, errors, and increasing dependence on manual intervention.",
    solution: "We deliver AI services UK that combine intelligent automation, machine learning, and secure integrations to help businesses streamline workflows, improve decisions, and build scalable AI solutions UK.",
    challengeLabel: "Core Challenge",
    bottleneckLabel: "Business Bottleneck",
    solutionLabel: "Devopstrio Solution",
    deliverablesLabel: "AI Service Deliverables",
    outcomesLabel: "AI Services UK Outcomes",
    outcomeBottomLabel: "AI Business Outcome",
    features: [
      "Intelligent AI systems with adaptive workflows and custom automation",
      "AI-powered routing that selects appropriate actions based on user intent",
      "Continuous monitoring, validation, and compliance verification checks"
    ],
    benefits: [
      "92% reduction in repetitive workflow processing and manual effort",
      "Seamless integration with legacy ERP systems through intelligent AI solutions",
      "Human-in-the-loop controls for high-risk decisions and data changes"
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
        q: "What sets our AI agents UK apart?",
        a: "We bring together hands-on automation know-how, experienced engineers and ready-made infrastructure code to get your business process automation with AI UK project up and running fast, without cutting corners on data security or day-to-day visibility."
      },
      {
        q: "How do you track results from your AI agents UK?",
        a: "We keep an eye on the numbers that matter: how fast we get you live, how quickly systems respond, whether we're hitting agreed SLAs, how efficiently things run, and how well security checks hold up."
      },
      {
        q: "How do you keep your AI agents UK setups secure?",
        a: "We build in least-privilege access from the start, rotate credentials automatically, put firewalls around your network, and run ongoing vulnerability scans across every layer of the system."
      },
      {
        q: "Will your AI agents UK work with our older on-site systems?",
        a: "Yes. We set up secure API connections, sync your data pipelines, and build hybrid network links (like site-to-site VPNs or Direct Connect) so your new AI agents UK work smoothly alongside your existing infrastructure."
      },
      {
        q: "How do your AI agents UK cope with busy traffic?",
        a: "We set up automatic pod scaling and smart load balancing, so resources scale up or down on their own depending on CPU use, memory, or how many requests come in."
      },
      {
        q: "How long does it take to roll out AI agents UK?",
        a: "Most rollouts take 4 to 8 weeks, depending on how complex your systems are, what needs to connect, and how well your existing codebase is set up."
      },
      {
        q: "Will you train our team and hand everything over properly?",
        a: "Yes. Our AI agent development company UK team hands over full architecture blueprints, setup guides, and runs hands-on sessions with your engineers so the switch-over goes smoothly."
      },
      {
        q: "How do you keep tabs on your AI agents UK performance?",
        a: "We set up OpenTelemetry tracking and send traces, logs, and metrics to central dashboards in Grafana or Datadog, so you can see exactly what's happening in real time."
      },
      {
        q: "Which compliance standards do your AI agents UK meet?",
        a: "Our intelligent automation services UK are built around SOC-2, ISO 27001, HIPAA, and GDPR requirements, with standard encryption and audit logging built in from the start."
      },
      {
        q: "How much can AI agents UK save you on costs?",
        a: "Most clients see a 30% to 50% drop in manual work, better use of their existing resources, and lower hosting bills thanks to auto-scaling and smart caching."
      }
    ]
  },
  "machine-learning-engineering": {
    slug: "machine-learning-engineering",
    title: "Machine Learning Engineering Services UK",
    heroSubtitle: "Build smarter systems with machine learning engineering services UK. Get ML consulting, model development and custom machine learning solutions.",
    challenge: "Building production-ready machine learning systems presents recurring performance issues, complex data integration challenges, and deployment bottlenecks that slow down engineering teams.",
    solution: "We deliver machine learning engineering services UK with highly available, automated, and secure configurations. Our ML engineering services UK integrate with build workflows, configure validation checks, and enable continuous monitoring dashboards.",
    challengeLabel: "Core Challenge",
    bottleneckLabel: "Engineering Bottleneck",
    solutionLabel: "Devopstrio Solution",
    deliverablesLabel: "Machine Learning Service Deliverables",
    outcomesLabel: "Machine Learning Engineering Outcomes",
    outcomeBottomLabel: "Machine Learning Outcome",
    features: [
      "Automated, high-fidelity deployment templates for machine learning solutions UK",
      "Continuous validation, pipeline scanning, and compliance verification checks",
      "Native compatibility with PyTorch / TensorFlow and LangChain / LangGraph setups"
    ],
    benefits: [
      "Accelerated releases and up to 45% reduction in cycle times",
      "Complete system observability with real-time incident warning alerts",
      "Fully-audited infrastructure aligned with SOC-2 and regulatory frameworks"
    ],
    deliveryApproach: [
      "Discovery & Data Audit: Mapping inputs and evaluating data pipelines.",
      "Model Training & Validation: Building custom PyTorch/TensorFlow models.",
      "Production Deployment: Setting up scalable endpoints and drift monitoring."
    ],
    techStack: [
      { name: "PyTorch / TensorFlow", desc: "Core deep learning and neural network training frameworks." },
      { name: "MLflow / Kubeflow", desc: "Experiment tracking and pipeline orchestration." },
      { name: "Triton Inference Server", desc: "Ultra low-latency multi-model inference." }
    ],
    caseStudy: {
      title: "Predictive analytics engine for UK enterprise logistics.",
      desc: "Deployed custom machine learning models forecasting delivery delays and fleet routing in real-time, reducing turnaround times by 40%.",
      metrics: [
        { value: "45%", label: "Cycle time reduction" },
        { value: "99.8%", label: "Uptime SLA" },
        { value: "<25ms", label: "Inference latency" }
      ]
    },
    faqs: [
      {
        q: "What makes our machine learning engineering services UK different?",
        a: "We bring together hands-on automation, experienced engineers, and ready-made infrastructure code to deliver custom machine learning solutions UK businesses can rely on, quickly and without compromising on data security or day-to-day visibility."
      },
      {
        q: "How do you track results from your machine learning engineering services UK?",
        a: "We keep an eye on the numbers that matter: how fast we get you live, how quickly systems respond, whether we're hitting agreed SLAs, how efficiently things run, and how well security checks hold up."
      },
      {
        q: "How do you keep your machine learning engineering services UK secure?",
        a: "We build in least-privilege access from the start, rotate credentials automatically, put firewalls around your network, and run ongoing vulnerability scans across every layer of the system."
      },
      {
        q: "Will your machine learning engineering services UK work with our older systems?",
        a: "Yes. We set up secure API connections, sync your data pipelines, and build hybrid network links (like site-to-site VPNs or Direct Connect) so your new ML setup works smoothly alongside your existing infrastructure."
      },
      {
        q: "How do your machine learning engineering services UK handle busy traffic?",
        a: "We set up automatic pod scaling and smart load balancing, so resources scale up or down on their own depending on CPU use, memory, or how many requests come in."
      },
      {
        q: "How long does a machine learning engineering services UK rollout take?",
        a: "Most rollouts take 4 to 8 weeks, depending on how complex your systems are, what needs to connect, and how well your existing codebase is set up."
      },
      {
        q: "Will you train our team and hand everything over properly?",
        a: "Yes. Our machine learning consulting UK team hands over full architecture blueprints, setup guides, and runs hands-on sessions with your engineers so the switch-over goes smoothly."
      },
      {
        q: "How do you keep tabs on your machine learning engineering services UK?",
        a: "We set up OpenTelemetry tracking and send traces, logs, and metrics to central dashboards in Grafana or Datadog, so you can see exactly what's happening in real time."
      },
      {
        q: "Which compliance standards do your machine learning engineering services UK meet?",
        a: "Our custom machine learning solutions UK are built around SOC-2, ISO 27001, HIPAA, and GDPR requirements, with standard encryption and audit logging built in from the start."
      },
      {
        q: "How much can machine learning engineering services UK save you?",
        a: "Most clients see a 30% to 50% drop in manual work, better use of their existing resources, and lower hosting bills thanks to auto-scaling and smart caching."
      }
    ]
  },
  "mlops-ai-operations": {
    slug: "mlops-ai-operations",
    title: "MLOps Services UK",
    heroSubtitle: "Streamline AI operations with MLOps services UK. Get MLOps consulting, machine learning deployment and AI model monitoring solutions.",
    challenge: "Implementing production-grade MLOps systems presents recurring performance issues, complex model integration challenges, and deployment bottlenecks that slow down machine learning operations.",
    solution: "We deliver MLOps services UK with highly available, automated, and secure configurations. Our MLOps solutions UK integrate with build workflows, configure validation checks, and establish continuous monitoring dashboards.",
    challengeLabel: "Core MLOps Challenge",
    bottleneckLabel: "Business Bottleneck",
    solutionLabel: "Devopstrio MLOps Solution",
    deliverablesLabel: "MLOps Service Deliverables",
    outcomesLabel: "MLOps Services UK Outcomes",
    outcomeBottomLabel: "MLOps Business Outcome",
    features: [
      "Automated deployment templates for scalable MLOps engineering services UK",
      "Continuous model validation, pipeline scanning, and compliance verification checks",
      "Native compatibility with PyTorch / TensorFlow and LangChain / LangGraph setups"
    ],
    benefits: [
      "Accelerated release frequency and up to 45% reduction in cycle times",
      "Complete system observability with real-time incident warning alerts",
      "Fully-audited infrastructure aligned with SOC-2 and regulatory frameworks"
    ],
    deliveryApproach: [
      "Pipeline Architecture: Designing continuous integration and automated retraining gates.",
      "Deployment & Orchestration: Deploying Kubeflow pipelines and Triton inference servers.",
      "Observability & Drift Guard: Configuring real-time telemetry dashboards and alerts."
    ],
    techStack: [
      { name: "Kubeflow / MLflow", desc: "Automated ML lifecycle management and experiment tracking." },
      { name: "Evidently AI / Prometheus", desc: "Model drift detection and data distribution monitoring." },
      { name: "Argo Workflows", desc: "Container-native workflow engine for orchestration." }
    ],
    caseStudy: {
      title: "Automated MLOps deployment pipeline for UK FinTech.",
      desc: "Architected zero-downtime canary deployment pipelines for predictive risk models, cutting release cycles from weeks to minutes.",
      metrics: [
        { value: "45%", label: "Reduction in cycle times" },
        { value: "100%", label: "Audit trail compliance" },
        { value: "24/7", label: "Live telemetry monitoring" }
      ]
    },
    faqs: [
      {
        q: "What makes our MLOps services UK different?",
        a: "We bring together hands-on automation, experienced engineers, and ready-made infrastructure code to deliver MLOps consulting UK businesses can rely on, quickly and without compromising on data security or day-to-day visibility."
      },
      {
        q: "How do you track results from your MLOps services UK?",
        a: "We keep an eye on the numbers that matter: how fast we get you live, how quickly systems respond, whether we're hitting agreed SLAs, how efficiently things run, and how well security checks hold up."
      },
      {
        q: "How do you keep your MLOps services UK secure?",
        a: "We build in least-privilege access from the start, rotate credentials automatically, put firewalls around your network, and run ongoing vulnerability scans across every layer of the system."
      },
      {
        q: "Will your MLOps services UK work with our older systems?",
        a: "Yes. We set up secure API connections, sync your data pipelines, and build hybrid network links (like site-to-site VPNs or Direct Connect) so your new setup works smoothly alongside your existing infrastructure."
      },
      {
        q: "How do your MLOps services UK handle busy traffic?",
        a: "We set up automatic pod scaling and smart load balancing, so resources scale up or down on their own depending on CPU use, memory, or how many requests come in."
      },
      {
        q: "How long does an MLOps services UK rollout take?",
        a: "Most rollouts take 4 to 8 weeks, depending on how complex your systems are, what needs to connect, and how well your existing codebase is set up."
      },
      {
        q: "Will you train our team and hand everything over properly?",
        a: "Yes. Our MLOps consulting UK team hands over full architecture blueprints, setup guides, and runs hands-on sessions with your engineers so the switch-over goes smoothly."
      },
      {
        q: "How do you keep tabs on your MLOps services UK?",
        a: "We set up OpenTelemetry tracking and send traces, logs, and metrics to central dashboards in Grafana or Datadog, so you can see exactly what's happening in real time."
      },
      {
        q: "Which compliance standards do your MLOps services UK meet?",
        a: "Our AI operations management UK setup is built around SOC-2, ISO 27001, HIPAA, and GDPR requirements, with standard encryption and audit logging built in from the start."
      },
      {
        q: "How much can MLOps services UK save you on costs?",
        a: "Most clients see a 30% to 50% drop in manual work, better use of their existing resources, and lower hosting bills thanks to auto-scaling and smart caching."
      }
    ]
  }
};
