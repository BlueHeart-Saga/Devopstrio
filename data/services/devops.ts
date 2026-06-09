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
      title: "CI/CD Implementation",
      description: "Automating code testing, container packaging, and production deployments.",
      items: ["GitHub Actions and GitLab CI workflows", "Automated code analysis gates", "Blue-green deployment scripts"]
    },
    {
      slug: "platform-engineering",
      title: "Platform Engineering",
      description: "Designing self-service developer platforms and standardized workspace configurations.",
      items: ["Internal Developer Portals (Backstage)", "Standardized deployment templates", "Automated resource request systems"]
    },
    {
      slug: "kubernetes-services",
      title: "Kubernetes Services",
      description: "Architecting, managing, and securing enterprise Kubernetes cluster environments.",
      items: ["EKS, AKS, and GKE cluster management", "ArgoCD gitops continuous delivery pipelines", "Calico network policy integrations"]
    },
    {
      slug: "devsecops",
      title: "DevSecOps Integration",
      description: "Injecting automated vulnerability scanning and security gates into code pipelines.",
      items: ["Static Application Security Testing (SAST)", "Container registry scanning", "Secrets detection audits"]
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
    heroSubtitle: "Deploy, secure, and manage production-grade Kubernetes clusters utilizing GitOps delivery pipelines.",
    challenge: "Enterprise Kubernetes setups suffer from configuration drift, poor network isolation policies, excessive cloud resource bills, and manual deployment errors.",
    solution: "We build declarative Kubernetes clusters utilizing Terraform, configure automated resource controllers, enforce security policies, and deploy GitOps pipelines.",
    features: [
      "Declarative cluster configurations with auto-scaling rules",
      "GitOps continuous delivery utilizing ArgoCD and Helm",
      "Network isolation policies and secure container access"
    ],
    benefits: [
      "Zero cluster configuration drift",
      "Auto-scaling matching capacity to traffic spikes",
      "Drastic reduction in cluster infrastructure bills"
    ],
    deliveryApproach: [
      "Design Blueprint: Planning pod counts, subnets, and node pools.",
      "Cluster Deployment: Deploying EKS or AKS via Terraform.",
      "GitOps Integration: Connecting ArgoCD to application repositories."
    ],
    techStack: [
      { name: "Kubernetes / Helm", desc: "Core container orchestration and packaging." },
      { name: "ArgoCD", desc: "Continuous delivery GitOps operator." },
      { name: "Prometheus / Grafana", desc: "Telemetry monitoring dashboards." }
    ],
    caseStudy: {
      title: "Sustaining flash sale traffic spikes for global apparel brand.",
      desc: "We deployed auto-scaling Kubernetes clusters with ArgoCD pipelines, managing 200 microservice nodes under heavy checkout spikes without lag.",
      metrics: [
        { value: "99.99%", label: "Uptime during flash sales" },
        { value: "200+", label: "Microservice nodes scaling" },
        { value: "0", label: "Manual deployment failures" }
      ]
    },
    faqs: [
      {
        q: "Do you support on-premise Kubernetes setups?",
        a: "Yes. We configure bare-metal clusters and hybrid Kubernetes engines using Rancher or OpenShift."
      },
      {
        q: "How do you secure container communications?",
        a: "We deploy service meshes like Istio or Linkerd to enforce mutual TLS encryption between container pods."
      }
    ]
  }
};
