import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const cloudDomain: EcosystemDomain = {
  slug: "cloud-ecosystem",
  title: "Cloud Ecosystem",
  badge: "Multi-Cloud Leadership",
  subtitle: "Architecting reliable, secure, and cost-effective multi-cloud infrastructure environments on AWS, Azure, and Google Cloud.",
  overviewHeading: "High-performance multi-cloud strategies designed for scale",
  overviewDesc1: "We deploy multi-cloud infrastructure, configure Kubernetes clusters, and automate backups. Our SRE teams ensure uptime, security compliance, and FinOps cost optimizations.",
  overviewDesc2: "We build secure cloud landing zones using Terraform, helping organizations scale workloads across multiple providers without lock-ins.",
  stats: [
    { value: "300+", label: "Cloud Deployments" },
    { value: "99.99%", label: "Uptime Guaranteed" },
    { value: "35%+", label: "Operating Costs Saved" },
    { value: "40+", label: "Certified Cloud Architects" }
  ],
  subpages: [
    { slug: "aws", title: "AWS Cloud Operations", description: "Managing AWS environments, cloud landing zones, and Kubernetes clusters." },
    { slug: "azure", title: "Azure Operations", description: "Deploying enterprise-grade infrastructures on Microsoft Azure." }
  ],
  benefits: [
    "Unbiased cloud provider evaluations matching specific workload needs",
    "Declarative multi-cloud setups utilizing Terraform configurations",
    "Guaranteed security posture compliance across all clouds"
  ],
  faqs: [
    { q: "How do you manage multi-cloud configuration drift?", a: "We run daily automated check scripts in Terraform to detect and fix drift." },
    { q: "What is your approach to cloud cost control?", a: "We setup automated resource scale-downs during idle hours and implement FinOps cost tracking." }
  ],
  ctaTitle: "Scale your multi-cloud",
  ctaHighlight: "Infrastructure network",
  ctaDesc: "Request a review with our cloud leads to optimize your multi-cloud budgets and security settings.",
  ctaBtnText: "Consult Cloud Architects"
};

export const cloudSubpages: Record<string, EcosystemSubpageDetail> = {
  aws: {
    slug: "aws",
    title: "AWS Cloud Operations",
    heroSubtitle: "Deploy scalable, secure, and high-performance applications on AWS infrastructure.",
    challenge: "Managing AWS configurations across multiple accounts leads to security blindspots, budget overruns, and resource sprawl.",
    solution: "We implement multi-account structures using AWS Organizations, deploy secure Terraform landing zones, and configure GuardDuty.",
    features: [
      "Multi-account structures utilizing AWS Organizations settings",
      "Declarative Kubernetes cluster orchestration using Amazon EKS",
      "Automated serverless pipelines using AWS Lambda and DynamoDB"
    ],
    benefits: [
      "Complete visibility of resource costs across all cloud accounts",
      "Automated threat detection and isolation routines",
      "Lower compute costs through auto-scaling groups"
    ],
    techStack: [
      { name: "Terraform", desc: "Multi-cloud infrastructure management tool." },
      { name: "AWS EKS", desc: "High-performance Kubernetes cluster host." },
      { name: "AWS Organizations", desc: "Centralized multi-account billing controller." }
    ],
    caseStudy: {
      title: "AWS migration for high-traffic financial app.",
      desc: "We migrated a legacy banking database to Amazon Aurora, reducing query latency by 50% while maintaining absolute compliance.",
      metrics: [
        { value: "50%", label: "Reduction in query latency" },
        { value: "99.99%", label: "Application service uptime" },
        { value: "100%", label: "HIPAA audit score passed" }
      ]
    },
    faqs: [
      { q: "Do you support hybrid setups?", a: "Yes, we connect private datacenters to AWS resources using AWS Direct Connect." },
      { q: "How do you handle backups?", a: "We configure hourly snapshots inside AWS Backup, replication to secondary regions." }
    ]
  }
};
