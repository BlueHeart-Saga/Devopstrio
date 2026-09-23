import { ServiceCategory, CapabilityDetail } from "./types";

export const devopsService: ServiceCategory = {
  slug: "devops-automation",
  title: "DevOps & Automation",
  badge: "DevOps Platforms",
  subtitle: "Accelerate your software pipelines with custom CI/CD automation, declarative Kubernetes setups, DevSecOps gates, and SRE uptime practices.",
  overviewHeading: "High-performance software pipelines and platform engineering",
  overviewDesc1: "We build deployment scripts, Kubernetes clusters, and automated monitoring dashboards. Our setups process hundreds of git updates per day without build bottlenecks.",
  overviewDesc2: "Our services connect code repositories with cloud hosts, facilitating automated testing checks, container packaging layers, and secure rolling deployment hooks.",
  stats: [
    { value: "<15m", label: "Build Delivery Time" },
    { value: "99.99%", label: "Deployment Success Rate" },
    { value: "4.8x", label: "Release Cycle Frequency" },
    { value: "24/7", label: "SRE Active Monitoring" }
  ],
  capabilities: [
    {
      slug: "cicd-implementation",
      title: "CI/CD Implementation & Automation",
      description: "Automate code testing, container packaging, artifact management, and zero-downtime production deployments with rapid feedback loops.",
      items: [
        "GitHub Actions, GitLab CI & Jenkins pipelines",
        "Automated code analysis & security gates",
        "Zero-downtime Blue-Green & Canary releases"
      ],
      href: "/services/devops-automation/cicd-implementation"
    },
    {
      slug: "platform-engineering",
      title: "Platform Engineering & Developer Portals",
      description: "Design self-service developer platforms, standardized workspace configurations, and automated cloud infrastructure landing zones.",
      items: [
        "Internal Developer Portals (Backstage)",
        "Self-service cloud environment provisioning",
        "Standardized golden path deployment templates"
      ],
      href: "/services/devops-automation/platform-engineering"
    },
    {
      slug: "infrastructure-as-code",
      title: "Infrastructure as Code (IaC)",
      description: "Declare, version, and orchestrate secure multi-cloud infrastructure with modular blueprints and automated drift remediation.",
      items: [
        "Modular Terraform & OpenTofu blueprints",
        "Automated drift detection & state locking",
        "Immutable AMI & container image pipelines"
      ],
      href: "/services/devops-automation/infrastructure-as-code"
    },
    {
      slug: "kubernetes-services",
      title: "Kubernetes Services & Cluster Management",
      description: "Architect, manage, secure, and auto-scale enterprise Kubernetes cluster environments across AWS EKS, Azure AKS, and Google GKE.",
      items: [
        "EKS, AKS, and GKE cluster management",
        "ArgoCD & Flux GitOps delivery pipelines",
        "Calico & Cilium network security policies"
      ],
      href: "/services/devops-automation/kubernetes-services"
    },
    {
      slug: "devsecops",
      title: "DevSecOps & Automated Security Gates",
      description: "Embed automated vulnerability scanning, container security, and compliance checks directly into your CI/CD delivery pipelines.",
      items: [
        "Static Application Security Testing (SAST/DAST)",
        "Automated container registry & SBOM scanning",
        "Secret scanning & compliance-as-code policies"
      ],
      href: "/services/devops-automation/devsecops"
    },
    {
      slug: "site-reliability-engineering",
      title: "Site Reliability Engineering (SRE)",
      description: "Maximize uptime, define clear SLI/SLO reliability frameworks, and implement automated incident response and self-healing systems.",
      items: [
        "Guaranteed SLI/SLO availability frameworks",
        "Automated failover & self-healing clusters",
        "Blameless post-mortems & root-cause audits"
      ],
      href: "/services/devops-automation/site-reliability-engineering"
    },
    {
      slug: "release-automation",
      title: "Release Automation & GitOps Delivery",
      description: "Eliminate manual deployment friction with declarative GitOps synchronization, progressive canary routing, and one-click rollbacks.",
      items: [
        "ArgoCD & Flux GitOps continuous reconciliation",
        "Automated Canary & Blue-Green routing",
        "Progressive delivery with instant rollback gates"
      ],
      href: "/services/devops-automation/release-automation"
    },
    {
      slug: "monitoring-observability",
      title: "Monitoring & Observability Grids",
      description: "Gain complete full-stack visibility with unified distributed tracing, real-time metrics telemetry, and proactive anomaly alert grids.",
      items: [
        "Distributed OpenTelemetry trace collectors",
        "Centralized Prometheus & Datadog metrics grids",
        "Proactive anomaly detection & pager alert routing"
      ],
      href: "/services/devops-automation/monitoring-observability"
    }
  ],
  outcomes: [
    "70% average reduction in software delivery bottlenecks",
    "Continuous vulnerability protection inside build pipelines",
    "Instant developer workspace creation via self-service APIs"
  ],
  industries: [
    "Software: Multi-tenant SaaS hosting and release automation",
    "Logistics: Real-time container routing and server scaling",
    "Healthcare: Patient data anonymization pipeline checks"
  ],
  techStack: [
    { name: "GitLab / GitHub Actions", desc: "Core code integration engines." },
    { name: "Kubernetes / Helm", desc: "Standardized container orchestration and packaging." },
    { name: "ArgoCD", desc: "GitOps deployment controller." }
  ],
  deliveryFramework: [
    "Phase 1: Pipeline Audit & Bottle-neck Assessment",
    "Phase 2: Declarative Infrastructure & IaC Setup",
    "Phase 3: GitOps Pipeline Integration & SRE Hand-off"
  ],
  caseStudies: [
    {
      title: "Automated Kubernetes scaling for major e-commerce storefront.",
      desc: "We deployed ArgoCD pipelines and autoscaling Kubernetes nodes. The storefront sustained holiday sales traffic spikes without performance drops, reducing container load times by 40%.",
      highlights: [
        "Eliminated manual release scripts using GitOps",
        "Setup Prometheus monitoring dashboards",
        "Reduced cloud resource spend during idle hours"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you protect database migrations in CI/CD?",
      a: "We configure automated database schema migration checks, running transactional validations before redirecting application traffic."
    },
    {
      q: "What is your approach to DevSecOps pipeline safety?",
      a: "We inject automated SAST and secrets scanners into pull requests, blocking builds that fail compliance parameters."
    }
  ],
  ctaTitle: "Automate your release",
  ctaHighlight: "Pipeline framework",
  ctaDesc: "Book an engineering consult to review your build bottlenecks and map automated deployment scripts.",
  ctaBtnText: "Consult DevOps Lead"
};

export const devopsCapabilities: Record<string, CapabilityDetail> = {
  "kubernetes-services": {
    slug: "kubernetes-services",
    title: "Kubernetes Services",
    metaTitle: "Managed Kubernetes Services in UK | Enterprise Kubernetes Experts",
    metaDescription: "Optimize your cloud infrastructure with our Kubernetes Services in UK. We deliver secure Kubernetes deployments, GitOps automation, monitoring, scaling, and production-ready cluster management.",
    heroSubtitle: "Build, secure, and optimize production-ready Kubernetes environments with expert Kubernetes Services in UK, backed by proven cloud-native deployment practices.",
    challenge: "Enterprise Kubernetes environments struggle with configuration drift, unoptimized infrastructure, complex networking policies, and manual deployment bottlenecks that increase operational risk.",
    solution: "Our Kubernetes Services in UK helped organizations successfully deploy, secure, and optimize production-grade Kubernetes environments tailored to their business needs. We implemented GitOps-driven deployment workflows, streamlined container orchestration, improved application performance, and delivered more efficient infrastructure management.",
    features: [
      "Successfully deployed production-ready Kubernetes clusters",
      "Strengthened security with continuous monitoring and granular access controls",
      "Optimized infrastructure for high performance, auto-scaling, and operational resilience",
      "Automated GitOps continuous delivery workflows utilizing ArgoCD and Helm"
    ],
    benefits: [
      "Reduced operational complexity and minimized application downtime",
      "Accelerated application delivery with future-ready cloud-native platforms",
      "Resilient cluster management and continuous telemetry monitoring",
      "Consistent compliance adherence and long-term operational stability"
    ],
    deliveryApproach: [
      "Assessment & Architecture Blueprint: Planning node pools, subnets, and cluster security parameters.",
      "Cluster Provisioning: Deploying EKS, AKS, or GKE clusters utilizing automated Terraform modules.",
      "GitOps & Telemetry Integration: Connecting ArgoCD pipelines, Prometheus monitoring, and Grafana dashboards."
    ],
    techStack: [
      { name: "Kubernetes / Helm", desc: "Core container orchestration, packaging, and ingress management." },
      { name: "ArgoCD", desc: "GitOps operator for automated continuous delivery." },
      { name: "Prometheus / Grafana", desc: "Real-time cluster telemetry monitoring and alerting." }
    ],
    caseStudy: {
      title: "Delivering Results with Kubernetes Services in UK",
      desc: "Proven Kubernetes solutions that delivered secure, scalable, and reliable outcomes for our clients across production enterprise workloads.",
      metrics: [
        { value: "99.99%", label: "Cluster Uptime & Availability" },
        { value: "70%", label: "Reduction in Operational Complexity" },
        { value: "0", label: "Unplanned Outages" }
      ]
    },
    faqs: [
      {
        q: "What benefits do Kubernetes Services in UK provide?",
        a: "Our Kubernetes Services in UK deliver automated deployments, resilient cluster management, continuous monitoring, and secure infrastructure built on cloud-native best practices."
      },
      {
        q: "Do you support multi-cloud and hybrid Kubernetes environments?",
        a: "Yes, we architect and manage production clusters across AWS (EKS), Azure (AKS), Google Cloud (GKE), and hybrid on-premise environments using Rancher and OpenShift."
      }
    ]
  }
};
