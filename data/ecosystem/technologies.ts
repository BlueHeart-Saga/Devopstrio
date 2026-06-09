import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const technologiesDomain: EcosystemDomain = {
  slug: "technology-stack",
  title: "Technology Stack",
  badge: "Engineering Stack",
  subtitle: "Explore our full-stack engineering languages, database engines, container systems, and frontend frameworks.",
  overviewHeading: "High-performance software stacks optimized for reliability",
  overviewDesc1: "We write software in Go, Rust, TypeScript, and Python. We compile microservices for speed, choose relational databases for reliability, and use React for responsive UI layouts.",
  overviewDesc2: "By standardizing our technology stacks, we accelerate feature delivery, minimize software bugs, and ensure easy upgrades.",
  stats: [
    { value: "15+", label: "Programming Languages" },
    { value: "95%+", label: "Test Coverage Standard" },
    { value: "10M+", label: "Active Code Runs" },
    { value: "0", label: "Runtime Memory Leaks" }
  ],
  subpages: [
    { slug: "artificial-intelligence", title: "Artificial Intelligence", description: "PyTorch neural networks, LangChain orchestration, and Qdrant vector databases." },
    { slug: "cloud-native", title: "Cloud Native", description: "Docker container packaging, Kubernetes orchestration, and Terraform IaC." },
    { slug: "devops-toolchain", title: "DevOps Toolchain", description: "CI/CD execution pipelines, automatic tests, and package registries." },
    { slug: "data-engineering", title: "Data Engineering", description: "High-speed streaming pipelines, Spark analytics, and database replicas." },
    { slug: "cybersecurity", title: "Cybersecurity", description: "Container security scanners, Okta MFA systems, and network rules." }
  ],
  benefits: [
    "Clean component-driven frontends built for maximum responsiveness",
    "Highly optimized database query plans reducing API delays",
    "Declarative code scripts enabling quick local developer setups"
  ],
  faqs: [
    { q: "Do you build mobile applications?", a: "Yes, we build cross-platform mobile apps using React Native and Flutter." },
    { q: "What database engines do you recommend?", a: "We primarily utilize PostgreSQL for transaction records and Redis for cache performance." }
  ],
  ctaTitle: "Upgrade your technical",
  ctaHighlight: "Software stack",
  ctaDesc: "Request a stack consult with our senior technical leads to audit your codebase libraries.",
  ctaBtnText: "Consult Stack Architect"
};

export const technologiesSubpages: Record<string, EcosystemSubpageDetail> = {
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    heroSubtitle: "Deploy machine learning pipelines, prompt routing filters, and secure semantic database lookup indexes.",
    challenge: "Traditional software architectures struggle to coordinate dynamic AI prompts, manage token limits, and handle unstructured data.",
    solution: "We build modern Python backends using FastAPI, run vector queries in Qdrant, and orchestrate logic using LangGraph.",
    features: [
      "Semantic cache search queries reducing API tokens count",
      "Dynamic prompt routers selecting appropriate backend models",
      "Model drift telemetry logging and check alerts"
    ],
    benefits: [
      "95% decrease in LLM API token billing costs via prompt caching",
      "Accurate execution on complex business rules",
      "Absolute control of company datasets"
    ],
    techStack: [
      { name: "LangGraph / LangChain", desc: "Agent framework coordinating logic cycles." },
      { name: "FastAPI / Python", desc: "High-speed backend API hosting custom tools." },
      { name: "Qdrant", desc: "Ultra-fast vector storage index." }
    ],
    caseStudy: {
      title: "AI document assistant for national insurance group.",
      desc: "We built an AI assistant that reads policy PDFs and answers customer support questions in under 2 seconds, scoring 98% accuracy.",
      metrics: [
        { value: "98%", label: "Answer evaluation accuracy" },
        { value: "<2s", label: "Average answer delay" },
        { value: "70%", label: "Reduction in support tickets" }
      ]
    },
    faqs: [
      { q: "What model providers do you support?", a: "We support AWS Bedrock, Azure OpenAI, Anthropic, and local models like Llama 3." },
      { q: "How do you check for model hallucinations?", a: "We run secondary evaluation models that verify answer citations against source files." }
    ]
  },
  "cloud-native": {
    slug: "cloud-native",
    title: "Cloud Native",
    heroSubtitle: "Compile microservices inside Docker and run container pods inside autoscaling Kubernetes.",
    challenge: "Monolithic applications are hard to scale, require long deploy timelines, and crash entirely during single module failures.",
    solution: "We rewrite codebases into microservices, containerize builds with Docker, and orchestrate scheduling using Kubernetes.",
    features: [
      "Microservice architectures using gRPC for inter-pod communication",
      "Dynamic pod scaling utilizing Karpenter and HPA rules",
      "Service mesh setups managing TLS traffic encryption"
    ],
    benefits: [
      "Isolated failures preventing complete application downtime",
      "Independent deployments allowing teams to ship features fast",
      "Reduced cloud bills via optimized CPU resource requests"
    ],
    techStack: [
      { name: "Kubernetes", desc: "Container scheduling and management hub." },
      { name: "Docker", desc: "Declarative container image building utility." },
      { name: "Istio Service Mesh", desc: "Secure pod communication controller." }
    ],
    caseStudy: {
      title: "Cloud-native modernization for ecommerce platform.",
      desc: "Relocated a monolithic cart and billing catalog into AKS Kubernetes microservices, surviving a 4x traffic peak during Black Friday.",
      metrics: [
        { value: "4x", label: "Peak Black Friday load handled" },
        { value: "99.99%", label: "Platform uptime maintained" },
        { value: "<150ms", label: "Checkout API latency" }
      ]
    },
    faqs: [
      { q: "How do you configure microservice communication?", a: "We use gRPC over HTTP/2 for low-latency calls, and Kafka for asynchronous event queues." },
      { q: "Do you run databases inside Kubernetes?", a: "We recommend managed cloud database services (RDS, CosmosDB) for production data, and run stateless pods inside Kubernetes." }
    ]
  },
  "devops-toolchain": {
    slug: "devops-toolchain",
    title: "DevOps Toolchain",
    heroSubtitle: "Build high-speed continuous delivery pipelines and track code releases.",
    challenge: "Brittle build scripts fail unexpectedly, lack security audits, and require manual approval delays.",
    solution: "We write standardized GitHub Actions and GitLab CI files, scanning builds for issues and automating deployments.",
    features: [
      "Reusable CI pipeline workflows matching language rules",
      "Automated unit testing executions and coverage reporting",
      "GitOps-triggered continuous deployment to target clouds"
    ],
    benefits: [
      "90% faster pipeline durations via task caching",
      "Vulnerability checks run on every pull request",
      "Automated releases eliminating manual console deployments"
    ],
    techStack: [
      { name: "GitHub Actions", desc: "Cloud-integrated CI/CD executor." },
      { name: "SonarQube", desc: "Code quality and SAST scan analyzer." },
      { name: "ArgoCD", desc: "GitOps deployment reconciliation engine." }
    ],
    caseStudy: {
      title: "CI/CD pipeline overhaul for telecom customer.",
      desc: "Consolidated 120 custom Jenkins pipelines into 10 reusable GitHub Actions workflows, reducing build wait times by 80%.",
      metrics: [
        { value: "120", label: "Consolidated build pipelines" },
        { value: "80%", label: "Faster build execution times" },
        { value: "100%", label: "Automated vulnerability check coverage" }
      ]
    },
    faqs: [
      { q: "Can we run runners on our own servers?", a: "Yes, we deploy self-hosted GitHub/GitLab runners inside your private VPC clusters." },
      { q: "How are pipeline credentials secured?", a: "We use OpenID Connect (OIDC) to federate logins between git repositories and cloud providers without storing static keys." }
    ]
  },
  "data-engineering": {
    slug: "data-engineering",
    title: "Data Engineering",
    heroSubtitle: "Deploy real-time stream consolidations and build structured lakehouse architectures.",
    challenge: "Telemetry data is lost in transit, and slow analytical queries delay daily business decisions.",
    solution: "We build Apache Kafka message buses, construct Spark data transformations, and structure Delta Lake tables.",
    features: [
      "High-throughput message streams utilizing Apache Kafka",
      "Batch data processing pipelines written in PySpark",
      "Consolidated analytical queries compiled via Trino engines"
    ],
    benefits: [
      "Zero telemetry data loss under high load peaks",
      "Clean structured lakehouse tables for ad-hoc SQL operations",
      "Analytics dashboards sync in under 5 seconds"
    ],
    techStack: [
      { name: "Apache Kafka", desc: "Distributed event streaming platform." },
      { name: "Apache Spark", desc: "Big data batch processing framework." },
      { name: "Delta Lake", desc: "Open ACID transaction table format." }
    ],
    caseStudy: {
      title: "Real-time telemetry pipeline for shipping fleet.",
      desc: "Constructed a Kafka and Spark pipeline parsing GPS telemetry from 50,000 ships, syncing data to Delta Lake tables with zero loss.",
      metrics: [
        { value: "50,000", label: "Active telemetry transmitters" },
        { value: "0", label: "Telemetry messages dropped" },
        { value: "<4s", label: "Map view update latency" }
      ]
    },
    faqs: [
      { q: "What is Spark's advantage over standard SQL database engines?", a: "Spark processes data in parallel across multiple cluster nodes, making it 100x faster for large datasets." },
      { q: "Do you support dbt (data build tool)?", a: "Yes, we write dbt transformations to model and test data schemas inside warehouses." }
    ]
  },
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity",
    heroSubtitle: "Establish Zero-Trust network rules, verify API inputs, and integrate identity access portals.",
    challenge: "Traditional perimeters are breached by credential reuse, open ports, and insecure REST APIs.",
    solution: "We configure Cilium network security, deploy Okta single sign-on (SSO), and write API validation filters.",
    features: [
      "Kubernetes pod microsegmentation via Cilium network rules",
      "Identity access portals securing admin tools with MFA",
      "Automated vulnerability patch routines checking systems"
    ],
    benefits: [
      "Threats isolated inside single container nodes",
      "Secure user logins auditing devices before authorization",
      "Pre-certified configurations passing international compliance reviews"
    ],
    techStack: [
      { name: "Cilium", desc: "eBPF-driven networking security tool." },
      { name: "Okta / Keycloak", desc: "Enterprise identity authentication platforms." },
      { name: "Prisma Cloud", desc: "Cloud security posture manager." }
    ],
    caseStudy: {
      title: "Zero-Trust security implementation for medical record system.",
      desc: "Configured Cilium network security rules and Okta MFA logins, protecting patient database tables and passing audits.",
      metrics: [
        { value: "100%", label: "Audit compliance score" },
        { value: "<1s", label: "Intrusion quarantine time" },
        { value: "0", label: "Unauthorized database reads logged" }
      ]
    },
    faqs: [
      { q: "What is microsegmentation?", a: "It is a security practice that divides networks into isolated segments, blocking side-to-side traffic unless explicitly authorized." },
      { q: "How do you secure cloud API keys?", a: "We store keys inside HashiCorp Vault and inject them into container memory at startup, leaving no keys in files." }
    ]
  }
};
