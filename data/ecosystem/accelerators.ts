import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const acceleratorsDomain: EcosystemDomain = {
  slug: "accelerators-frameworks",
  title: "Accelerators & Frameworks",
  badge: "Reusable IP & Code",
  subtitle: "Leverage our pre-built codebases, pipeline templates, and deployment scripts to speed up development.",
  overviewHeading: "Pre-packaged software scripts designed for quick integrations",
  overviewDesc1: "We build reusable code frameworks, serverless APIs, and automated backup routines. Our packages reduce database setup times from days to minutes.",
  overviewDesc2: "We distribute our code templates via private registries, helping teams start new projects with compliance controls pre-configured.",
  stats: [
    { value: "50+", label: "Reusable Scripts" },
    { value: "90%", label: "Reduction in setup times" },
    { value: "100%", label: "IaC Coverage" },
    { value: "SOC-2", label: "Pre-Audited Quality" }
  ],
  subpages: [
    { slug: "cloud-accelerator", title: "Cloud Accelerator", description: "Terraform landing zones, security policies, and AWS infrastructure." },
    { slug: "devops-accelerator", title: "DevOps Accelerator", description: "Reusable CI/CD pipeline scripts, container templates, and deployment charts." },
    { slug: "ai-framework", title: "AI Framework", description: "RAG templates, semantic caching blocks, and model query routers." },
    { slug: "security-framework", title: "Security Framework", description: "Zero-trust network policy configurations, container scans, and IAM rules." },
    { slug: "data-framework", title: "Data Framework", description: "Lakehouse table creators, stream aggregators, and warehouse schemas." }
  ],
  benefits: [
    "Drastic reduction in initial codebase build times",
    "Pre-configured security and cost monitoring settings",
    "Continuous software updates from our core team"
  ],
  faqs: [
    { q: "How do you deploy these templates?", a: "We provide clean CLI scripts that spin up resources in your cloud accounts instantly." },
    { q: "Are they customizable?", a: "Yes, all our code frameworks are fully parameterized, allowing easy customization." }
  ],
  ctaTitle: "Accelerate your project",
  ctaHighlight: "Deployment scripts",
  ctaDesc: "Contact our team to view our code repositories and discuss integrations for your workspace.",
  ctaBtnText: "Request Repository Access"
};

export const acceleratorsSubpages: Record<string, EcosystemSubpageDetail> = {
  "cloud-accelerator": {
    slug: "cloud-accelerator",
    title: "Cloud Accelerator",
    heroSubtitle: "Deploy compliant, secure, and cost-optimized cloud landing zones in minutes using Terraform.",
    challenge: "Enterprise cloud accounts suffer from inconsistent network settings, loose security rules, and manual setup errors.",
    solution: "We build pre-parameterized Terraform modules that deploy landing zones, set up VPCs, and configure security scanners.",
    features: [
      "Declarative landing zones built with Terraform and Bicep scripts",
      "Network isolation settings and secure database subnets",
      "Automated cost tracking and alerts dashboard setups"
    ],
    benefits: [
      "Zero manual setup errors in cloud accounts",
      "Lower monthly compute bills through optimized configurations",
      "Instant compliance with NIST and HIPAA guidelines"
    ],
    techStack: [
      { name: "Terraform", desc: "Declarative infrastructure configuration tool." },
      { name: "AWS CloudFormation", desc: "Native AWS resource deployment framework." },
      { name: "Prisma Cloud", desc: "Security and compliance posture scanner." }
    ],
    caseStudy: {
      title: "Landing Zone deployment for national database coordinator.",
      desc: "We deployed our cloud accelerator, setting up 12 secure cloud accounts in under 3 hours, passing security audits.",
      metrics: [
        { value: "<3 hours", label: "Account setup completion" },
        { value: "12", label: "Secure accounts configured" },
        { value: "100%", label: "Compliance audit score passed" }
      ]
    },
    faqs: [
      { q: "Do you support Azure setups?", a: "Yes, our accelerator provides modules for both AWS and Azure clouds." },
      { q: "Are the modules updated regularly?", a: "Yes, our team updates modules monthly to include new security patches." }
    ]
  },
  "devops-accelerator": {
    slug: "devops-accelerator",
    title: "DevOps Accelerator",
    heroSubtitle: "Standardize pipeline logic and build container images using pre-configured Dagger.io modules.",
    challenge: "Teams write custom deployment scripts for every new app, leading to duplicated code and build failures.",
    solution: "We distribute parameterized GitHub Actions workflows and Helm charts packaging code with Snyk and SonarQube.",
    features: [
      "Reusable GitHub Actions pipeline files matching languages",
      "Pre-configured Helm charts deploying to Kubernetes",
      "Snyk dependency scanner blocks integrated into builds"
    ],
    benefits: [
      "CI/CD wait times reduced by 70% using build caches",
      "Standardized deployment charts used across all services",
      "Secrets checks automated on every code commit"
    ],
    techStack: [
      { name: "GitHub Actions", desc: "Pipeline coordination runner." },
      { name: "Helm", desc: "Kubernetes packaging and release utility." },
      { name: "Snyk", desc: "Dependency code security checker." }
    ],
    caseStudy: {
      title: "Pipeline standardization for SaaS provider.",
      desc: "Consolidated build pipelines for 25 microservices using our DevOps accelerator, reducing build time to under 8 minutes.",
      metrics: [
        { value: "25", label: "Standardized microservices" },
        { value: "<8m", label: "Average pipeline wait time" },
        { value: "70%", label: "Saved in pipeline runner compute" }
      ]
    },
    faqs: [
      { q: "Can we use these templates with GitLab?", a: "Yes, we maintain matching GitLab CI templates in our repositories." },
      { q: "How are cluster deployments triggered?", a: "The pipelines push images to registries, triggering ArgoCD to reconcile state." }
    ]
  },
  "ai-framework": {
    slug: "ai-framework",
    title: "AI Framework",
    heroSubtitle: "Orchestrate RAG search workflows and model LLM query routing using LangGraph templates.",
    challenge: "Integrating custom models with database files requires complex coordination, leading to long answer latencies.",
    solution: "We provide structured Python backend templates pre-configured with Qdrant vector database lookup code.",
    features: [
      "Decoupled state graph templates coordinating chatbot loops",
      "Semantic caching layers reducing API token bills",
      "VPC deployment blueprints protecting private training data"
    ],
    benefits: [
      "90% reduction in AI integration build durations",
      "Guaranteed data privacy utilizing local models",
      "Optimized query runtimes using semantic search cache"
    ],
    techStack: [
      { name: "LangGraph", desc: "Agent logic state graph framework." },
      { name: "Qdrant", desc: "High-speed vector lookup database." },
      { name: "FastAPI / Python", desc: "API hosting and data parser code." }
    ],
    caseStudy: {
      title: "RAG search assistant for insurance document index.",
      desc: "Used our AI framework to build a policy search assistant, parsing 500 document files and responding in under 2 seconds.",
      metrics: [
        { value: "500", label: "Parsed document files" },
        { value: "<2s", label: "Average query response delay" },
        { value: "90%", label: "Reduction in developer hours" }
      ]
    },
    faqs: [
      { q: "Do you support Azure OpenAI engines?", a: "Yes, our framework supports Azure OpenAI, AWS Bedrock, and local models." },
      { q: "Does the framework check for hallucinations?", a: "Yes, it runs valuation scripts matching answer citations with source documents." }
    ]
  },
  "security-framework": {
    slug: "security-framework",
    title: "Security Framework",
    heroSubtitle: "Deploy Zero-Trust Kubernetes network rules and secure identity policies instantly.",
    challenge: "Monitored clusters suffer from loose network access, allowing threats to travel side-to-side between services.",
    solution: "We package Cilium network policies and HashiCorp Vault integrations into reusable Kubernetes manifests.",
    features: [
      "eBPF Cilium network microsegmentation manifests",
      "HashiCorp Vault secret injection blueprints",
      "Compliance policy templates matching SOC-2 rules"
    ],
    benefits: [
      "Threats quarantined inside single containers immediately",
      "Zero plain-text passwords stored in git repositories",
      "Rapid audit readiness verified by automated checks"
    ],
    techStack: [
      { name: "Cilium eBPF", desc: "Microsegmentation and monitoring engine." },
      { name: "HashiCorp Vault", desc: "Secure runtime credentials manager." },
      { name: "Kubernetes NetworkPolicies", desc: "Namespace traffic routing rules." }
    ],
    caseStudy: {
      title: "Zero-Trust security for fintech transaction ledger.",
      desc: "Deployed our security framework inside an AKS cluster, isolating database traffic and passing compliance audits.",
      metrics: [
        { value: "100%", label: "SOC-2 compliance score" },
        { value: "0", label: "Security perimeter leaks logged" },
        { value: "<500ms", label: "Intrusion quarantine response" }
      ]
    },
    faqs: [
      { q: "Is the security framework hard to configure?", a: "No, we write clear Helm value files allowing simple setup inside any standard cluster." },
      { q: "Does it support OAuth/OIDC integrations?", a: "Yes, we include template rules linking Vault with Okta or Azure AD." }
    ]
  },
  "data-framework": {
    slug: "data-framework",
    title: "Data Framework",
    heroSubtitle: "Deploy Apache Flink stream synchronizations and configure Delta Lake database tables.",
    challenge: "Writing stream processing code requires deep expertise, leading to slow telemetry delivery and data corruption.",
    solution: "We provide Java and Python Apache Flink templates configured to parse, deduplicate, and write data to Delta Lake.",
    features: [
      "Flink stream parsing templates handling JSON events",
      "Delta Lake storage schemas with ACID transaction rules",
      "Trino analytical query configurations"
    ],
    benefits: [
      "Stream processing setup times reduced from weeks to hours",
      "Guaranteed transactional consistency using Delta Lake ACID blocks",
      "High-speed ad-hoc query performance on compressed tables"
    ],
    techStack: [
      { name: "Apache Flink", desc: "Real-time stream aggregation runner." },
      { name: "Delta Lake", desc: "Open ACID transaction table format." },
      { name: "Trino Engine", desc: "Fast SQL query compiler." }
    ],
    caseStudy: {
      title: "IoT telemetry pipeline for manufacturing customer.",
      desc: "Used our data framework to deploy a telemetry processor tracking 20,000 factory sensors with sub-second dashboard updates.",
      metrics: [
        { value: "20,000", label: "Monitored factory sensors" },
        { value: "<1s", label: "Dashboard update delay" },
        { value: "80%", label: "Faster pipeline deployment" }
      ]
    },
    faqs: [
      { q: "Can we deploy this framework on AWS?", a: "Yes, it works with AWS EMR, Managed Service for Apache Flink, and EKS." },
      { q: "How does the framework handle schema changes?", a: "We enable Delta Lake schema evolution, allowing column updates without rebuilding tables." }
    ]
  }
};
