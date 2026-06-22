"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  Shield,
  Briefcase,
  Sparkles,
  Layout,
  Lock,
  Workflow,
  LineChart,
  ChevronRight,
  Terminal,
  Activity,
  Zap,
  Check
} from "lucide-react";
import Link from "next/link";

export default function AWSSteategicAllianceHub() {
  // 10. Industry Solutions Tab State
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");

  // 14. Success Stories Tab/Filter State (if needed, but simple grid is better for outcomes)
  // 18. FAQ Accordion State (we can reuse FAQ styling for custom answers if desired, or simple layouts)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1. Hero Highlights
  const heroHighlights = [
    "AWS Cloud Expertise",
    "Cloud-Native Development",
    "Serverless Architectures",
    "DevOps Automation",
    "Data & AI Solutions",
    "24×7 Managed Operations"
  ];

  // 2. Stats
  const stats = [
    { value: "100+", label: "Cloud Deployments" },
    { value: "99.99%", label: "Availability Targets" },
    { value: "24x7", label: "Cloud Operations" },
    { value: "50+", label: "Certified Engineers" }
  ];

  // 3. AWS Competencies
  const competencies = [
    {
      title: "Cloud Migration",
      desc: "Migrating legacy systems and complex database architectures to AWS securely and efficiently.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Cloud-Native Development",
      desc: "Building scalable, distributed microservices using AWS compute, serverless, and container tools.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "DevOps & Automation",
      desc: "Establishing unified IaC patterns, automated release pipelines, and secure GitOps mechanisms.",
      icon: <Workflow className="w-6 h-6 text-rose-500" />
    },
    {
      title: "AI & Machine Learning",
      desc: "Deploying generative AI foundations, predictive intelligence models, and Bedrock integrations.",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data Engineering",
      desc: "Developing business data lakes, automated ETL flows, and real-time streaming warehouses.",
      icon: <Database className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Security & Compliance",
      desc: "Implementing zero-trust access controls, continuous monitoring, and automated threat detections.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    }
  ];

  // 4. Cloud Migration Services
  const migrationServices = [
    { title: "Cloud Readiness Assessment", desc: "Evaluate existing application portfolios, cloud readiness scores, and total cost of ownership estimates." },
    { title: "Application Modernization", desc: "Refactor legacy application architectures to run efficiently on AWS managed services." },
    { title: "Rehosting & Refactoring", desc: "Shift workloads with minimal disruptions using automated migration scripts and testing cycles." },
    { title: "Container Migration", desc: "Package monolithic applications into managed container images ready for ECS or EKS clusters." },
    { title: "Database Migration", desc: "Seamless database transitions to AWS Aurora, RDS, or DynamoDB with zero data losses." },
    { title: "Hybrid Cloud Strategy", desc: "Architect hybrid hosting nodes bridging on-premises servers with AWS resources using AWS Outposts." }
  ];

  // 5. AWS Cloud-Native Engineering
  const cloudNativeAreas = [
    { title: "Microservices Architecture", desc: "Decompose monoliths into atomic microservices that scale independently and run smoothly." },
    { title: "Event-Driven Systems", desc: "Build asynchronous server processing patterns using event streams and message brokers." },
    { title: "Container Platforms", desc: "Manage application containers at high scale utilizing ECS or enterprise-grade EKS clusters." },
    { title: "Serverless Applications", desc: "Write lightweight, scalable microservice operations driven by on-demand AWS Lambda runs." },
    { title: "API Platforms", desc: "Configure high-throughput API entry gates with robust rate limiting using API Gateway." },
    { title: "Multi-Region Architectures", desc: "Set up multi-region system replicas with automated traffic routing via Route 53." }
  ];
  const cloudNativeTech = ["EKS", "ECS", "Lambda", "API Gateway", "EventBridge", "SQS", "SNS"];

  // 6. DevOps & Platform Engineering
  const devopsSolutions = [
    { title: "CI/CD Pipelines", desc: "Build secure, automated build, test, and container packaging lines using GitHub Actions." },
    { title: "Infrastructure as Code", desc: "Manage multi-subscription cloud resource components using unified Terraform templates." },
    { title: "GitOps", desc: "Sync Kubernetes cluster configurations directly with Git code files utilizing ArgoCD patterns." },
    { title: "Observability", desc: "Setup real-time logging, metrics monitoring, and alert configurations using CloudWatch." },
    { title: "Release Automation", desc: "Enforce canary updates, blue-green deployments, and progressive system rollouts." },
    { title: "Developer Platforms", desc: "Establish developer templates and self-service portals utilizing Backstage." }
  ];
  const devopsTools = ["Terraform", "GitHub Actions", "ArgoCD", "Helm", "EKS", "Backstage"];

  // 7. AI & Machine Learning
  const aiSolutions = [
    { title: "Amazon Bedrock", desc: "Develop secure applications using leading foundational models with fully private company data." },
    { title: "Generative AI", desc: "Create text generation, semantic coding, and internal search systems customized for teams." },
    { title: "AI Agents", desc: "Deploy autonomous software entities that process multi-step workflows and trigger system runs." },
    { title: "Document Intelligence", desc: "Extract structured fields from unformatted documents utilizing AWS Textract pipelines." },
    { title: "Recommendation Engines", desc: "Integrate personalized inventory or product recommendations using Amazon Personalize." },
    { title: "Predictive Analytics", desc: "Train forecasts on historical metrics for customer demand analysis using SageMaker." }
  ];

  // 8. Data & Analytics
  const dataServices = [
    { title: "Data Lakes", desc: "Set up secure, centralized, and affordable data repositories using AWS S3 and Lake Formation." },
    { title: "Real-Time Analytics", desc: "Run telemetry analysis on live transactional events utilizing Athena and Glue." },
    { title: "Data Warehouses", desc: "Deploy petabyte-scale data warehousing for fast business insights with Redshift." },
    { title: "Business Intelligence", desc: "Design interactive visual analytics dashboards for managers utilizing QuickSight." },
    { title: "Streaming Data", desc: "Process high-volume log inputs or clickstreams in real time using Amazon Kinesis." },
    { title: "Data Governance", desc: "Create secure data catalogs, lifecycle rules, and compliance labels across accounts." }
  ];
  const dataTech = ["Redshift", "Glue", "Athena", "EMR", "Kinesis", "QuickSight"];

  // 9. Security & Compliance
  const securitySolutions = [
    { title: "Identity Management", desc: "Enforce granular user access controls and single sign-on parameters utilizing AWS IAM." },
    { title: "Threat Detection", desc: "Continuously scan network events and host logs for risks using Amazon GuardDuty." },
    { title: "Cloud Security", desc: "Check configuration compliance across multiple accounts utilizing AWS Security Hub." },
    { title: "Compliance Automation", desc: "Verify cloud systems against strict SOC2, HIPAA, and ISO standards automatically." },
    { title: "Data Protection", desc: "Encrypt cloud databases and files at rest and in transit utilizing KMS keys." },
    { title: "Security Operations", desc: "Run automated network block rules and firewall alerts utilizing AWS WAF configurations." }
  ];
  const securityTech = ["IAM", "GuardDuty", "Security Hub", "WAF", "KMS", "CloudTrail"];

  // 10. Industry Solutions
  const industries = [
    {
      name: "Healthcare",
      challenge: "Protecting patient privacy, connecting hospital software, and legacy clinic database silos.",
      solution: "Deploy HIPAA-compliant architectures on AWS using Amazon Comprehend Medical and secure RDS databases.",
      outcome: "100% compliance adherence, 45% faster medical report processing, and secure clinical records sync."
    },
    {
      name: "Financial Services",
      challenge: "Meeting strict banking compliance laws, fraud attempts, and slow ledger processing speeds.",
      solution: "Implement real-time transaction monitoring pipelines using SageMaker and Amazon Aurora databases.",
      outcome: "40% faster fraud detections and reliable, millisecond ledger data writes."
    },
    {
      name: "Retail",
      challenge: "Handling extreme seasonal website traffic spikes and inaccurate inventory catalogs.",
      solution: "Build serverless e-commerce backends using AWS Lambda, DynamoDB, and CloudFront caching.",
      outcome: "Zero down-time during holiday sales spikes and automated inventory syncing."
    },
    {
      name: "Manufacturing",
      challenge: "High machinery repair costs and siloed factory telemetry tracking setups.",
      solution: "Connect floor telemetry metrics to predictive AWS IoT Analytics and forecast databases.",
      outcome: "25% lower floor downtime and optimized equipment maintenance cycles."
    },
    {
      name: "Technology",
      challenge: "Slowing software release cycles, high server costs, and developer setup delays.",
      solution: "Standardize GitOps deployment flows utilizing EKS Kubernetes clusters and Terraform.",
      outcome: "5x faster build releases, automated environments provisioning, and 30% lower server costs."
    },
    {
      name: "Public Sector",
      challenge: "Legacy citizen database silos and strict accessibility requirements under tight budgets.",
      solution: "Migrate public services to AWS GovCloud environments with automated secure IAM parameters.",
      outcome: "40% lower administrative hosting costs and highly secure citizen portal access."
    }
  ];

  // 11. AWS Service Portfolio
  const servicePortfolio = [
    { title: "Compute", desc: "Deploy secure virtual machine instances on demand using EC2 and light virtual private servers." },
    { title: "Containers", desc: "Package and deploy applications on Kubernetes clusters using EKS or serverless ECS tasks." },
    { title: "Serverless", desc: "Build code loops that execute automatically without running permanent servers using Lambda." },
    { title: "Storage", desc: "Access high-performance block volumes or highly durable object files utilizing S3." },
    { title: "Networking", desc: "Configure isolated cloud network boundaries, security groups, and route tables using VPC." },
    { title: "Databases", desc: "Run managed relational SQL databases or high-performance NoSQL tables with DynamoDB." },
    { title: "AI Services", desc: "Deploy pre-trained visual recognition, speech analysis, and text analytics pipelines." },
    { title: "Analytics", desc: "Analyze big data files directly without database loads using Athena and EMR pipelines." }
  ];

  // 12. AWS Certifications
  const certifications = [
    { name: "AWS Solutions Architect", image: "/assets/ecosystem/aws-awards/Group 1000008904.png" },
    { name: "AWS DevOps Engineer", image: "/assets/ecosystem/aws-awards/Group 1000008905.png" },
    { name: "AWS Developer", image: "/assets/ecosystem/aws-awards/Group 1000008906.png" },
    { name: "AWS Security Specialist", image: "/assets/ecosystem/aws-awards/Group 1000008907.png" },
    { name: "AWS Data Engineer", image: "/assets/ecosystem/aws-awards/image 118.png" },
    { name: "AWS Machine Learning Engineer", image: "/assets/ecosystem/aws-awards/image 120.png" }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      q: "What AWS certifications do Devopstrio engineers hold?",
      a: "Our engineers hold certifications including AWS Solutions Architect, DevOps Engineer, Developer, Security Specialist, Data Engineer, and Machine Learning Engineer."
    },
    {
      q: "What is AWS Lambda and what are its serverless advantages?",
      a: "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources, reducing operational overhead and billing you only for execution time."
    },
    {
      q: "How does Amazon EKS simplify Kubernetes orchestration?",
      a: "EKS provides a fully managed, secure, and highly available Kubernetes control plane across multiple availability zones, integrating natively with AWS VPC networking, IAM security, and ELB load balancers."
    },
    {
      q: "What is the AWS Well-Architected Framework?",
      a: "It is a set of design principles and architectural best practices organized across six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
    },
    {
      q: "How does Devopstrio secure enterprise data in Amazon S3 buckets?",
      a: "We implement bucket policies, block public access configurations, enforce default SSE-KMS encryption, enable object versioning, and configure IAM roles with least-privilege access."
    },
    {
      q: "What is AWS Database Migration Service (DMS) and how does it work?",
      a: "AWS DMS helps migrate databases to AWS quickly and securely, keeping the source database fully operational during the migration to minimize downtime for business applications."
    },
    {
      q: "How do you implement infrastructure as code (IaC) on AWS?",
      a: "We write modular Terraform and AWS CloudFormation templates to provision, version, and manage AWS infrastructure resources consistently across development, staging, and production environments."
    },
    {
      q: "What is Amazon Bedrock and how does it support generative AI?",
      a: "Bedrock is a fully managed service that offers key foundation models from leading AI startups and Amazon via an API, enabling secure customization and building of generative AI applications."
    },
    {
      q: "How do you optimize AWS spending for large-scale operations?",
      a: "We analyze resource usage using AWS Cost Explorer, implement auto-scaling policies, purchase Savings Plans and Reserved Instances, and automate scheduling to shut down non-production environments."
    },
    {
      q: "What support does Devopstrio provide for AWS environments after go-live?",
      a: "We provide 24/7 Cloud Operations monitoring, automated backup configurations, patch upgrades, security scanning, and regular cost-optimization audits to ensure high performance."
    }
  ];


  // 13. Delivery Framework
  const deliverySteps = [
    { phase: "Discover", desc: "Audit existing software components, application code parameters, and data directories." },
    { phase: "Assess", desc: "Analyze AWS migration readiness factors, team skills, and total hosting cost savings." },
    { phase: "Architect", desc: "Design secure landing zones, IaC infrastructure blueprints, and security guardrails." },
    { phase: "Build", desc: "Create Terraform resources, package container images, and write serverless code scripts." },
    { phase: "Deploy", desc: "Execute safe migrations, transition live data streams, and configure DNS routing rules." },
    { phase: "Optimize", desc: "Adjust container sizing parameters, fine-tune database speeds, and optimize cloud bills." },
    { phase: "Operate", desc: "Provide 24/7 cloud ops monitoring, run automated backup cycles, and manage patches." }
  ];

  // 14. Success Stories
  const successStories = [
    {
      title: "Cloud Migration",
      subtitle: "Large Enterprise ERP Migration",
      challenge: "A retail client suffered from high upkeep costs and database crashes on their aging local server stacks.",
      solution: "Migrated their complete database inventory and core ERP onto AWS RDS and Aurora clusters.",
      result: "40% reduction in annual hosting expenditures and zero downtime recorded during high-traffic sales periods."
    },
    {
      title: "EKS Platform",
      subtitle: "DevOps & EKS Platform Redesign",
      challenge: "Friction between software development teams led to release delays and inconsistent server setups.",
      solution: "Standardized delivery setups using GitOps, Terraform, and autoscaling AWS EKS clusters.",
      result: "Boosted build release frequencies by 6x and established automated environment setups in minutes."
    },
    {
      title: "AI Modernization",
      subtitle: "Intelligent Customer Services Copilot",
      challenge: "Support managers spent thousands of hours searching manuals to resolve technical questions.",
      solution: "Deployed an intelligent assistant using Amazon Bedrock, secure vector databases, and document indexes.",
      result: "85% decrease in customer query wait times, speeding up technical troubleshooting."
    },
    {
      title: "Cost Optimization",
      subtitle: "Enterprise Cloud Bill Reduction",
      challenge: "Uncontrolled resource deployments led to a massive, hard-to-track monthly AWS invoice.",
      solution: "Implemented auto-scaling rules, removed unattached disks, and purchased AWS Reserved Instances.",
      result: "Saved 35% on monthly cloud infrastructure bills without affecting system speeds."
    },
    {
      title: "Data Lake Implementation",
      subtitle: "Real-Time Telemetry Analytics Platform",
      challenge: "IoT sensors generated terabytes of data daily that sat unanalyzed in database silos.",
      solution: "Built a real-time data ingestion pipeline using AWS Kinesis, Glue ETL, and S3 data lakes.",
      result: "Enabled instant business dashboards, identifying machinery issues before they cause floor shutdowns."
    },
    {
      title: "DevOps Transformation",
      subtitle: "FinTech GitOps Pipeline Implementation",
      challenge: "Manual server updates slowed down deployments and failed compliance validation audits.",
      solution: "Designed automated CI/CD pipelines with integrated code scans and GitOps controllers.",
      result: "Achieved 100% compliance audit pass rates and eliminated deployment errors."
    }
  ];

  // 15. AWS Technology Ecosystem
  const techEcosystem = [
    "EC2", "EKS", "ECS", "Lambda", "RDS", "Aurora", "S3", "CloudFront",
    "Route53", "API Gateway", "CloudWatch", "Kinesis", "Redshift", "Bedrock", "IAM", "GuardDuty"
  ];

  // 16. Managed AWS Operations
  const managedCapabilities = [
    { title: "24×7 Monitoring", desc: "Real-time tracking of server alerts, latency spikes, and system errors." },
    { title: "Incident Management", desc: "Fast response protocols to fix unexpected outages and system alerts." },
    { title: "Cost Optimization", desc: "Regular auditing of AWS bills to eliminate waste and optimize resource usage." },
    { title: "Performance Engineering", desc: "Fine-tuning memory sizing, database query speeds, and API latencies." },
    { title: "Security Monitoring", desc: "Analyzing access logs and endpoint events to prevent malicious intrusions." },
    { title: "Platform Reliability", desc: "Automated database backups, failover drills, and disaster recovery setups." }
  ];

  // 17. Related Partnerships
  const relatedPartnerships = [
    { name: "Microsoft Partnership", desc: "Enterprise Azure setups, Fabric data lakes, and security systems.", href: "/ecosystem/partnerships/microsoft" },
    { name: "Google Cloud Partnership", desc: "Next-gen GCP data warehousing and predictive AI models.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle Partnership", desc: "Database modernization and enterprise ERP database migrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "Cisco Alliance", desc: "Enterprise networks setups, threat defense, and smart routing installations.", href: "/ecosystem/partnerships/cisco" }
  ];



  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/bg-cloud.png"
            alt="AWS Alliance background"
            className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]"
          />
          {/* Only a dark radial circle in the center behind the text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-20 flex flex-col items-center text-center">

          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              AWS Strategic Alliance
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              AWS Strategic <span className="text-rose-500">Alliance Page</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
              Build, modernize, and scale enterprise applications using AWS cloud infrastructure, serverless platforms, AI services, and cloud-native engineering practices.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to AWS Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <a
              href="#overview"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore AWS Services
            </a>
          </Reveal>

          {/* Highlights pills */}
          <Reveal delay={0.4} className="flex flex-wrap justify-center gap-3 max-w-4xl select-none">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs text-zinc-400 font-bold"
              >
                {item}
              </span>
            ))}
          </Reveal>

        </div>
      </section>

      {/* 2. PARTNERSHIP OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-6">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ALLIANCE VALUE
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  Driving Cloud Transformation <span className="text-rose-500">with AWS</span>
                </h2>
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold mb-8">
                  Devopstrio helps organizations leverage AWS to modernize legacy systems, build cloud-native applications, optimize costs, improve resilience, and accelerate innovation.
                </p>
                <div className="h-[1px] bg-zinc-900 w-full mb-8" />
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
                  By building optimized serverless layers, Kubernetes clusters, and Bedrock models, we reduce deployment bottlenecks and ensure high reliability.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6 select-none">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 text-left group"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-widest leading-snug font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. AWS Competencies */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core AWS <span className="text-rose-500">Competencies</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Comprehensive technical capabilities mapped directly to AWS services.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((c, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{c.title}</h4>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {c.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-350 font-bold leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOUD MIGRATION & MODERNIZATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              MIGRATE & MODERNZE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Migrate with <span className="text-rose-500">Confidence</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-2 font-bold">0{idx + 1}</span>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{service.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AWS CLOUD-NATIVE ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SCALABLE ARCHITECTURE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Build for <span className="text-rose-500">Scale</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cloudNativeAreas.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">AWS Services:</span>
            {cloudNativeTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DevOps & Platform Engineering */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PLATFORM ENGINEERING
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Accelerating <span className="text-rose-500">Delivery</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {devopsSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Workflow className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">DevOps Tools:</span>
            {devopsTools.map((tool) => (
              <span key={tool} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI & MACHINE LEARNING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ARTIFICIAL INTELLIGENCE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              AWS AI <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{sol.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DATA & ANALYTICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE TELEMETRY
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Modern Data <span className="text-rose-500">Platforms</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dataServices.map((d, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <LineChart className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{d.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Data Technologies:</span>
            {dataTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ZERO-TRUST POLICIES
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Secure-by-Design <span className="text-rose-500">Architecture</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securitySolutions.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{sec.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">AWS Security Services:</span>
            {securityTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INDUSTRY SOLUTIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ACCELERATED BLUEPRINTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AWS Across <span className="text-rose-500">Industries</span>
            </h2>
          </Reveal>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 select-none">
            {industries.map((ind) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(ind.name)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${activeIndustry === ind.name
                    ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/10"
                    : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white"
                  }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active Industry Panel */}
          {industries.map((ind) => {
            if (ind.name !== activeIndustry) return null;
            return (
              <div
                key={ind.name}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 lg:p-12 transition-all duration-500 animate-fadeIn"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">CHALLENGE</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">{ind.name} Roadblocks</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">SOLUTION</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Our AWS Solution</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">OUTCOME</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Business Outcome</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 11. AWS SERVICE PORTFOLIO */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SPECIALIZED OFFERINGS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Specialized AWS <span className="text-rose-500">Services</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Core cloud resources configured for extreme operational reliability.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePortfolio.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. AWS CERTIFICATIONS & EXPERTISE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CREDENTIALED EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Certified AWS <span className="text-rose-500">Engineers</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Proven credentials validating our capability to construct secure cloud architectures.
            </p>
          </Reveal>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain filter brightness-95 contrast-105"
                  />
                </div>
                <h4 className="text-xs md:text-sm font-bold text-zinc-350 group-hover:text-rose-500 transition-colors leading-snug min-h-[40px] flex items-center justify-center">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DELIVERY METHODOLOGY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUR STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              AWS Transformation <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {deliverySteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/10 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2">{step.phase}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CUSTOMER SUCCESS STORIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              AWS Transformation <span className="text-rose-500">Outcomes</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-1">
                    {story.title}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-6 tracking-wide">
                    {story.subtitle}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Challenge</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Solution</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-bold">{story.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-zinc-900/80">
                      <span className="text-[9px] font-mono text-rose-500 uppercase tracking-wider block mb-1 font-bold">Result</span>
                      <p className="text-xs text-zinc-300 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. AWS TECHNOLOGY ECOSYSTEM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              AWS SERVICES WE FREQUENTLY USE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Technology <span className="text-rose-500">Ecosystem</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto select-none">
            {techEcosystem.map((tech) => (
              <div
                key={tech}
                className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. MANAGED AWS OPERATIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CONTINUOUS ASSURANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Continuous Cloud <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-5">
              <Reveal className="text-left sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  ALLIANCE QUESTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Frequently Asked <span className="text-rose-500">Questions</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-bold max-w-md">
                  Everything you need to know about our AWS cloud infrastructure, serverless architectures, and modernization capabilities.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4 select-none">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/10 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white uppercase tracking-wider"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-550 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-rose-500" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[250px] border-t border-zinc-900/60" : "max-h-0"
                          }`}
                      >
                        <p className="p-6 text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 17. RELATED PARTNERSHIPS */}

      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related <span className="text-rose-500">Partnerships</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPartnerships.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[160px]"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                    {partner.name}
                    <ChevronRight className="w-4 h-4 text-zinc-650 group-hover:translate-x-1 group-hover:text-rose-500 transition-all" />
                  </h4>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 18. FINAL CTA */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden text-center">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 flex flex-col items-center">

          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GET STARTED TODAY
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to Accelerate on <span className="text-rose-500">AWS?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Whether you're migrating workloads, building cloud-native platforms, implementing AI solutions, or optimizing operations, our AWS specialists are ready to help.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Schedule AWS Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to Cloud Expert
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
