import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const innovationLabsDomain: EcosystemDomain = {
  slug: "innovation-labs",
  title: "Innovation Labs",
  badge: "Emerging Tech R&D",
  subtitle: "Exploring next-generation software technologies, autonomous AI agents, quantum computing integrations, and green cloud resource scheduling models.",
  overviewHeading: "Independent prototyping and research into future technology architectures",
  overviewDesc1: "We run specialized R&D innovation labs. Our researchers evaluate emerging database engines, model new AI agent graph architectures, and prototype secure zero-trust network protocols.",
  overviewDesc2: "By exploring future systems before they hit the mainstream market, we ensure our enterprise clients stay ahead of competitors.",
  stats: [
    { value: "6+", label: "Research Innovation Labs" },
    { value: "25+", label: "Completed Prototypes" },
    { value: "14+", label: "Academic Research Collaborators" },
    { value: "5x", label: "Faster Technology Adoption" }
  ],
  subpages: [
    { slug: "ai-lab", title: "AI Innovation Lab", description: "Autonomous AI agent networks, LLM custom fine-tuning, and semantic database routers." },
    { slug: "cloud-lab", title: "Cloud Innovation Lab", description: "Green serverless resource schedules, edge container networks, and cost optimizations." },
    { slug: "devops-lab", title: "DevOps Innovation Lab", description: "Next-gen gitops engines, dynamic container provisioning, and smart pipelines." },
    { slug: "cybersecurity-lab", title: "Cybersecurity Lab", description: "Zero-trust verification systems, network threat simulation tools, and automated audits." },
    { slug: "data-analytics-lab", title: "Data & Analytics Lab", description: "Stream parsing, lakehouse compression structures, and predictive telemetry tools." }
  ],
  benefits: [
    "Unbiased performance comparisons on pre-release software frameworks",
    "Early prototypes demonstrating proof-of-concept models for business metrics",
    "Direct integration with university research networks"
  ],
  faqs: [
    { q: "Can we sponsor a research program at your labs?", a: "Yes, we collaborate with enterprise clients to build dedicated prototypes for specific industry challenges." },
    { q: "How do you transfer prototypes to client production systems?", a: "We package prototypes into clean Docker containers and write Terraform scripts for simple deployment." }
  ],
  ctaTitle: "Partner with our",
  ctaHighlight: "Research scientists",
  ctaDesc: "Request a tour of our Innovation Labs and view our active technology prototype showcases.",
  ctaBtnText: "Consult Lab Directors"
};

export const innovationLabsSubpages: Record<string, EcosystemSubpageDetail> = {
  "ai-lab": {
    slug: "ai-lab",
    title: "AI Innovation Lab",
    heroSubtitle: "Prototype multi-agent reasoning graphs, semantic prompt routers, and private vector database indexes.",
    challenge: "Off-the-shelf OpenAI setups fail to scale, suffer from prompt engineering limits, and struggle with multi-step logical operations.",
    solution: "We model stateful agent networks using LangGraph, configure semantic caching lines, and write custom fine-tuning models.",
    features: [
      "Stateful agent coordination graphs managing multi-step logic",
      "Semantic prompt routers and vector lookup pipelines",
      "Private fine-tuning configurations inside private cloud VPC nodes"
    ],
    benefits: [
      "95% decrease in LLM API token billing costs via prompt caching",
      "Accurate execution on complex business rules",
      "Absolute control of company datasets"
    ],
    techStack: [
      { name: "LangGraph / Python", desc: "Advanced state graph coordination framework." },
      { name: "Qdrant Vector Database", desc: "Ultra-fast embedding lookup engine." },
      { name: "AWS Bedrock", desc: "Enterprise private LLM runtime environment." }
    ],
    caseStudy: {
      title: "Stateful customer email triage agent for global logistics firm.",
      desc: "We built an autonomous agent graph that reads email logs, matches shipment statuses, and submits delivery reports automatically.",
      metrics: [
        { value: "92%", label: "Triage automation success" },
        { value: "<5s", label: "Average query response delay" },
        { value: "100%", label: "Compliance audit score" }
      ]
    },
    faqs: [
      { q: "Do you build custom neural networks?", a: "We primarily optimize and orchestrate pre-trained foundation models using RAG and fine-tuning." },
      { q: "What is your approach to AI safety?", a: "We build strict guardrail checkers that intercept inputs and outputs, blocking unsafe prompts and hallucinated results." }
    ]
  },
  "cloud-lab": {
    slug: "cloud-lab",
    title: "Cloud Innovation Lab",
    heroSubtitle: "Researching cost-effective edge container delivery routes and green serverless power profiles.",
    challenge: "Traditional virtualization wastes compute power, while edge clusters suffer from high packet round-trip times.",
    solution: "We run WASM containers on edge networks, configure serverless scale-to-zero routines, and build automated carbon-reduction runtimes.",
    features: [
      "WebAssembly (WASM) compiler setups for sub-millisecond startups",
      "Dynamic cost auditing and automated scaling controls",
      "Green hosting site mapping schedules"
    ],
    benefits: [
      "Instant page response times worldwide via edge WASM runtimes",
      "Minimal standby server billing through scale-to-zero settings",
      "Verifiable ESG metrics and lower carbon footprint"
    ],
    techStack: [
      { name: "WasmEdge", desc: "Lightweight WebAssembly container runtime." },
      { name: "Cloudflare Workers", desc: "Edge script execution platform." },
      { name: "Kubernetes KEDA", desc: "Event-driven auto-scaling operator." }
    ],
    caseStudy: {
      title: "Edge asset optimization for video streaming network.",
      desc: "Configured WASM edge scripts that rewrite URLs and format thumbnails in real-time, reducing origin server requests by 90%.",
      metrics: [
        { value: "90%", label: "Fewer origin requests" },
        { value: "28ms", label: "Global thumbnail generation latency" },
        { value: "50%", label: "Saved in monthly server bandwidth" }
      ]
    },
    faqs: [
      { q: "What is WASM's advantage over Docker?", a: "WASM starts in microseconds, consumes 10x less memory, and executes code at near-native speed." },
      { q: "Do you run databases at the edge?", a: "Yes, we connect edge applications with globally replicated stores like Turso or AWS DynamoDB Global Tables." }
    ]
  },
  "devops-lab": {
    slug: "devops-lab",
    title: "DevOps Innovation Lab",
    heroSubtitle: "Prototyping automated canary testing gates and gitops-driven continuous integration engines.",
    challenge: "Pipeline executions suffer from slow artifact building, brittle test setups, and unmanaged deploy failures.",
    solution: "We write customized GitHub Actions pipelines, run tests inside isolated ephemeral Docker runners, and coordinate canary routing rules.",
    features: [
      "Ephemeral runners created on-demand inside cluster nodes",
      "Automated pipeline rollback gates monitoring error rates",
      "Parallel task caching rules minimizing build delays"
    ],
    benefits: [
      "Build delivery times reduced from hours to under 10 minutes",
      "100% automated rollbacks protecting user traffic during failures",
      "Minimal compute waste by shutting down inactive build nodes"
    ],
    techStack: [
      { name: "ArgoCD", desc: "GitOps deployment controller for Kubernetes." },
      { name: "Dagger.io", desc: "Portable pipeline execution engine." },
      { name: "Prometheus Alerts", desc: "System telemetry and threshold checker." }
    ],
    caseStudy: {
      title: "Automated canary deployment for SaaS banking client.",
      desc: "Constructed an ArgoCD rollout system that increments canary traffic by 5% and rolls back automatically if database errors peak.",
      metrics: [
        { value: "<10m", label: "Average pipeline execution" },
        { value: "0", label: "Manual deployment actions required" },
        { value: "100%", label: "Successful auto-rollback rate" }
      ]
    },
    faqs: [
      { q: "What is GitOps?", a: "GitOps is a DevOps pattern where git repositories serve as the single source of truth for infrastructure layouts." },
      { q: "How do you secure secrets in Git?", a: "We encrypt secrets using Mozilla SOPS or fetch credentials dynamically from HashiCorp Vault." }
    ]
  },
  "cybersecurity-lab": {
    slug: "cybersecurity-lab",
    title: "Cybersecurity Lab",
    heroSubtitle: "Modeling zero-trust identity routing and conducting continuous threat simulation audits.",
    challenge: "Perimeter defenses are bypassed by credential theft, session hijacking, and vulnerable open-source dependencies.",
    solution: "We build network policies enforcing strict identity checks, configure automated dependency scans, and simulate phishing/exploit paths.",
    features: [
      "Zero-trust microsegmentation rules separating service pods",
      "Continuous runtime container monitoring detecting exploit triggers",
      "Automated SBOM (Software Bill of Materials) audits"
    ],
    benefits: [
      "Malicious processes identified and killed in under 1 second",
      "Compliance audit readiness reports generated daily",
      "Zero network-wide breaches via microsegmentation rules"
    ],
    techStack: [
      { name: "Cilium / eBPF", desc: "Network security and monitoring engine." },
      { name: "Trivy / Aqua Security", desc: "Vulnerability scan scanner for Docker images." },
      { name: "HashiCorp Boundary", desc: "Secure identity-based user access tool." }
    ],
    caseStudy: {
      title: "eBPF security enforcement for healthcare patient record system.",
      desc: "Deployed Cilium network rules auditing system calls, blocking unauthorized database reads across 1,400 active pods.",
      metrics: [
        { value: "1,400", label: "Audited Kubernetes pods" },
        { value: "<500ms", label: "Threat detection response" },
        { value: "100%", label: "HIPAA audit score" }
      ]
    },
    faqs: [
      { q: "What is eBPF?", a: "eBPF is a Linux kernel technology allowing secure sandboxed programs to monitor network and system calls." },
      { q: "How do you detect vulnerable libraries?", a: "We run Trivy scans inside pipelines, blocking builds if high-criticality issues are found." }
    ]
  },
  "data-analytics-lab": {
    slug: "data-analytics-lab",
    title: "Data & Analytics Lab",
    heroSubtitle: "Optimizing stream processing pipelines and testing high-ratio compression formats for lakehouse datastores.",
    challenge: "IoT and telemetry sensors generate massive stream logs that delay query execution and bloat storage costs.",
    solution: "We write Apache Flink real-time data syncs, structure Delta Lake file schemas, and design column compression layouts.",
    features: [
      "Real-time stream aggregation pipelines using Apache Flink",
      "Delta Lake table schemas with Z-order sorting optimizations",
      "Columnar file compression saving object storage space"
    ],
    benefits: [
      "Telemetry events aggregated and displayed in under 3 seconds",
      "70% reduction in monthly cloud storage fees via Z-order compression",
      "High-speed ad-hoc queries on historical logs"
    ],
    techStack: [
      { name: "Apache Flink", desc: "Stateful stream processing framework." },
      { name: "Delta Lake / Parquet", desc: "Open-source storage layer for lakehouses." },
      { name: "Trino / Presto", desc: "Distributed SQL query engine." }
    ],
    caseStudy: {
      title: "IoT telemetry pipeline optimization for vehicle fleet manager.",
      desc: "Refactored a telemetry database cluster handling 50k messages per second, optimizing compression to reduce monthly bills by 68%.",
      metrics: [
        { value: "50,000", label: "Telemetry messages per second" },
        { value: "68%", label: "Saved in monthly storage billing" },
        { value: "<3s", label: "Stream dashboard update latency" }
      ]
    },
    faqs: [
      { q: "What is a lakehouse database layout?", a: "A lakehouse combines the cheap object storage of a data lake with the transaction checks of a database." },
      { q: "How do you query lakehouse tables?", a: "We use Trino or Apache Spark to execute fast SQL queries across stored Parquet files." }
    ]
  }
};
