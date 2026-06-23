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
  Check,
  Search,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function GoogleCloudStrategicAllianceHub() {
  // 9. Industry Solutions Tab State
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");

  // FAQ/Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1. Hero Highlights
  const heroHighlights = [
    "Google Cloud Expertise",
    "AI & Machine Learning",
    "Data & Analytics",
    "Kubernetes Engineering",
    "Cloud-Native Platforms",
    "24×7 Managed Operations"
  ];

  // 2. Stats
  const stats = [
    { value: "80+", label: "Cloud Projects" },
    { value: "40+", label: "Google Cloud Specialists" },
    { value: "99.99%", label: "Platform Reliability" },
    { value: "24x7", label: "Cloud Operations" }
  ];

  // 3. Capability Areas
  const capabilities = [
    {
      title: "Cloud Modernization",
      desc: "Migrating legacy systems and complex applications to Google Cloud securely and efficiently.",
      icon: <Cloud className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Data & Analytics",
      desc: "Unlocking real-time business intelligence using Google Cloud's BigQuery, Looker, and Dataflow tools.",
      icon: <Database className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Artificial Intelligence",
      desc: "Deploying generative AI foundations, custom Gemini agents, and secure Vertex AI workspaces.",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Kubernetes Engineering",
      desc: "Configuring production GKE clusters, service mesh interfaces, and secure GitOps deployment pipelines.",
      icon: <Cpu className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Application Development",
      desc: "Building highly responsive, secure, and autoscaling microservices utilizing Cloud Run and Cloud Functions.",
      icon: <Workflow className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Cloud Security",
      desc: "Implementing zero-trust access, secure KMS keys, Cloud Armor protection, and security compliance scans.",
      icon: <Shield className="w-6 h-6 text-rose-500" />
    }
  ];

  // 4. Cloud Modernization
  const modernizationServices = [
    { title: "Cloud Migration", desc: "Smooth transition of enterprise workloads from local servers to GCP using migration frameworks." },
    { title: "Application Modernization", desc: "Refactoring legacy code bases into lightweight API-first architectures ready for the cloud." },
    { title: "Infrastructure Automation", desc: "Enforcing unified IaC patterns with custom Terraform configurations for error-free deployment." },
    { title: "Multi-Cloud Strategy", desc: "Orchestrating hybrid cloud and multi-subscription nodes utilizing Google Anthos controllers." },
    { title: "Containerization", desc: "Packaging monolithic application scripts into optimized container images ready for GCP workloads." },
    { title: "Platform Modernization", desc: "Upgrading databases to cloud-managed Cloud SQL and Spanner nodes for automated scaling." }
  ];
  const modernizationTech = ["Compute Engine", "Cloud Run", "Cloud Functions", "Cloud Storage", "VPC", "Cloud CDN"];

  // 5. Kubernetes & Platform Engineering
  const kubernetesCards = [
    { title: "Google Kubernetes Engine", desc: "Orchestrating high-scale application containers using GKE clusters with automated node scaling." },
    { title: "Platform Engineering", desc: "Establishing internal developer platforms to simplify cluster resources provisioning." },
    { title: "GitOps", desc: "Enforcing unified Kubernetes configurations directly sync'd with Git utilizing ArgoCD controller tools." },
    { title: "Developer Portals", desc: "Setting up centralized software catalogs and blueprints using Spotify's Backstage portal." },
    { title: "Container Security", desc: "Running automated vulnerability scans on images stored in Google Artifact Registry." },
    { title: "Observability", desc: "Configuring real-time logs ingestion, dashboard metrics, and alerts utilizing Google Cloud Logging." }
  ];
  const kubernetesTech = ["GKE", "Anthos", "Istio", "ArgoCD", "Helm", "Backstage"];

  // 6. AI & Machine Learning
  const aiServices = [
    { title: "Generative AI", desc: "Deploying secure large language models to draft responses and run internal analysis tasks." },
    { title: "Vertex AI", desc: "Leveraging GCP's flagship Vertex platform to train, tune, and host machine learning models." },
    { title: "AI Assistants", desc: "Developing custom RAG search pipelines and smart chatbots with private business data inputs." },
    { title: "Document AI", desc: "Extracting structured text keys from invoices, reports, and manuals using machine learning." },
    { title: "Vision AI", desc: "Integrating advanced image analysis, safety scans, and object classification engines." },
    { title: "Predictive Analytics", desc: "Training database forecasting models to anticipate consumer trends and operational spikes." }
  ];
  const aiTech = ["Vertex AI", "Gemini Models", "Document AI", "Vision AI", "Speech-to-Text", "AutoML"];

  // 7. Data & Analytics
  const dataSolutions = [
    { title: "Enterprise Data Lakes", desc: "Constructing cheap, highly secure, and unified data repositories using Cloud Storage." },
    { title: "Real-Time Analytics", desc: "Running immediate analysis queries on live telemetry clickstreams utilizing Google Dataflow." },
    { title: "Business Intelligence", desc: "Designing visual executive analytics reports and automated business alerts using Looker." },
    { title: "Streaming Platforms", desc: "Ingesting massive streaming metrics from edge servers using low-latency Cloud Pub/Sub hooks." },
    { title: "Data Governance", desc: "Configuring access rules, audit logs, and data sensitivity labels using Dataplex." },
    { title: "Data Warehousing", desc: "Setting up serverless, petabyte-scale analysis tables using Google BigQuery tools." }
  ];
  const dataTech = ["BigQuery", "Dataflow", "Dataproc", "Pub/Sub", "Looker", "Cloud SQL"];

  // 8. Cloud Security & Compliance
  const securityServices = [
    { title: "Identity Management", desc: "Enforcing least-privilege access, MFA rules, and service account keys using Google Cloud IAM." },
    { title: "Threat Detection", desc: "Tracking real-time network risks and suspicious log events using Security Command Center." },
    { title: "Compliance Audits", desc: "Automating validation audits against strict SOC2, HIPAA, and GDPR cloud security requirements." },
    { title: "Cloud Security Architecture", desc: "Constructing isolated network boundaries, private VPC subnets, and database firewalls." },
    { title: "Data Protection", desc: "Encrypting database backups and storage buckets utilizing Cloud KMS encryption keys." },
    { title: "Security Monitoring", desc: "Defending system endpoints against malicious traffic and DDoS attacks with Google Cloud Armor." }
  ];
  const securityTech = ["Security Command Center", "Cloud Armor", "IAM", "Cloud KMS", "Chronicle", "BeyondCorp"];

  // 9. Industry Solutions
  const industries = [
    {
      name: "Healthcare",
      challenge: "Managing complex electronic health records securely under strict privacy laws.",
      solution: "Deploying secure, HIPAA-compliant databases on GCP utilizing Cloud Healthcare APIs.",
      outcome: "100% compliance pass rates and 50% faster clinic record processing speeds."
    },
    {
      name: "Financial Services",
      challenge: "Slow transaction risk checks, fraud attempts, and mainframe database bottlenecks.",
      solution: "Building real-time transaction processing networks using BigQuery and Vertex AI model nodes.",
      outcome: "45% faster fraud detection rates and automated system scaling during market events."
    },
    {
      name: "Retail",
      challenge: "System crashes during shopping spikes and poor inventory catalog search results.",
      solution: "Developing serverless backends on Cloud Run with integrated Google Recommendations AI tools.",
      outcome: "Zero shopping downtime during high-traffic holidays and 25% larger shopping cart values."
    },
    {
      name: "Manufacturing",
      challenge: "High machinery repair costs and siloed assembly line telemetry metrics.",
      solution: "Connecting factory sensors to real-time Cloud Pub/Sub and BigQuery analytics data streams.",
      outcome: "30% reduction in unplanned downtime and optimized assembly line output."
    },
    {
      name: "Technology",
      challenge: "Slow developer setup speeds, high server bills, and manual deployment errors.",
      solution: "Standardizing Kubernetes clusters using GKE with unified GitOps ArgoCD pipelines.",
      outcome: "6x faster deployment releases and 35% savings in monthly server infrastructure costs."
    },
    {
      name: "Public Sector",
      challenge: "Siloed legacy directories and high hosting costs on aging hardware.",
      solution: "Migrating databases to secure GCP GovCloud environments with strict IAM permissions.",
      outcome: "40% lower administrative hosting costs and highly secure citizen portal access."
    }
  ];

  // 10. Data & AI Innovation
  const innovationCards = [
    { title: "AI Search", desc: "Implementing generative search tools across files and databases using Vertex AI Search." },
    { title: "Knowledge Platforms", desc: "Structuring internal manuals and compliance documents into searchable semantic portals." },
    { title: "Customer Analytics", desc: "Analyzing consumer feedback and ticket metrics to understand brand loyalty scores." },
    { title: "Recommendation Engines", desc: "Serving real-time recommendations to storefront visitors using Retail Search API." },
    { title: "Predictive Models", desc: "Training database forecasting models to anticipate consumer trends and inventory needs." },
    { title: "Enterprise AI Agents", desc: "Deploying AI agents that process complex multi-step support tickets and update databases." }
  ];

  // 11. Google Cloud Certifications
  const certifications = [
    { name: "Professional Cloud Architect", image: "/assets/ecosystem/GCP-award/image 130.png" },
    { name: "Professional Data Engineer", image: "/assets/ecosystem/GCP-award/image 131.png" },
    { name: "Professional DevOps Engineer", image: "/assets/ecosystem/GCP-award/image 132.png" },
    { name: "Professional Security Engineer", image: "/assets/ecosystem/GCP-award/image 133.png" },
    { name: "Professional ML Engineer", image: "/assets/ecosystem/GCP-award/image 134.png" },
    { name: "Associate Cloud Engineer", image: "/assets/ecosystem/GCP-award/image 135.png" }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      q: "What Google Cloud certifications do Devopstrio engineers hold?",
      a: "Our engineers hold certifications including Professional Cloud Architect, Professional Data Engineer, Professional DevOps Engineer, Professional Security Engineer, and Professional ML Engineer."
    },
    {
      q: "What is Google Kubernetes Engine (GKE) and why is it preferred for container orchestration?",
      a: "GKE is Google's fully managed Kubernetes service. It offers industry-leading auto-scaling, automated upgrades, container-native load balancing, and integration with Vertex AI for machine learning workloads."
    },
    {
      q: "How do Looker and BigQuery combine to improve business intelligence?",
      a: "BigQuery serves as a petabyte-scale serverless data warehouse processing SQL queries in seconds, while Looker sits on top to model metrics and deliver interactive real-time visual dashboards."
    },
    {
      q: "What is Google Vertex AI and how does it support Gemini models?",
      a: "Vertex AI is Google Cloud's unified machine learning platform. It allows organizations to access, customize, and deploy pre-trained Gemini foundation models, build semantic search pipelines, and manage ML workloads."
    },
    {
      q: "How do you optimize Google Cloud egress and resource costs?",
      a: "We configure recommender insights, establish BigQuery query execution limits, schedule VM runtime bounds, implement Cloud Storage lifecycle rules, and transition to GKE Autopilot."
    },
    {
      q: "What is Anthos and when should an enterprise use it?",
      a: "Anthos is Google's container platform that allows organizations to manage Kubernetes clusters and application deployments consistently across on-premises environments, Google Cloud, and other public clouds."
    },
    {
      q: "Can Devopstrio manage legacy application migration to Cloud Run?",
      a: "Yes. We refactor monolithic services into containerized microservices and deploy them to Cloud Run, establishing automated build pipelines and traffic-splitting rules for secure deployment."
    },
    {
      q: "How do you secure data stored in Google Cloud Storage?",
      a: "We configure Uniform Bucket-Level Access rules, apply Cloud KMS Customer-Managed Encryption Keys (CMEK), enable data deletion locks, and restrict traffic using VPC Service Controls."
    },
    {
      q: "What is Google Cloud Armor and how does it defend web applications?",
      a: "Cloud Armor provides WAF and DDoS defense services, filtering incoming traffic, blocking OWASP Top 10 vulnerabilities, and rate-limiting abusive client connections."
    },
    {
      q: "What kind of SLA does Devopstrio offer for GCP managed operations?",
      a: "We provide 24/7 incident response, system telemetry alerts, Kubernetes cluster health checks, and database performance tuning, aiming for 99.99% uptime for core resources."
    }
  ];


  // 12. Tech Ecosystem
  const techGrid = [
    "GKE", "Vertex AI", "Gemini", "BigQuery",
    "Looker", "Pub/Sub", "Dataflow", "Cloud Run",
    "Anthos", "Cloud SQL", "Cloud Functions", "Apigee",
    "Cloud Armor", "Chronicle", "IAM", "Cloud Storage"
  ];

  // 13. Delivery Framework
  const deliverySteps = [
    { phase: "Discover", desc: "Auditing current software components, local database sizes, and code formats." },
    { phase: "Assess", desc: "Analyzing GCP readiness parameters, total hosting cost savings, and architecture plans." },
    { phase: "Design", desc: "Creating secure landing zones, IAM structures, and custom Terraform templates." },
    { phase: "Build", desc: "Packaging application containers, drafting serverless scripts, and setting up GKE nodes." },
    { phase: "Migrate", desc: "Executing safe database migrations to Cloud SQL and moving data streams." },
    { phase: "Optimize", desc: "Fine-tuning memory sizing, database query speeds, and cloud bill allocations." },
    { phase: "Operate", desc: "Providing 24/7 cloud ops monitoring, automated backup cycles, and security scans." }
  ];

  // 14. Customer Success Stories
  const successStories = [
    {
      title: "BigQuery Analytics Platform",
      challenge: "A retail client could not generate overnight sales reports due to slow legacy database queries.",
      solution: "Migrated their complete transaction history into BigQuery and configured data dashboards using Looker.",
      result: "Reports generated in seconds instead of hours, enabling real-time pricing updates."
    },
    {
      title: "AI Knowledge Assistant",
      challenge: "Support technicians lost hours searching dense PDFs to find equipment repair guidelines.",
      solution: "Deployed a generative AI assistant using Vertex AI search pipelines and Gemini model nodes.",
      result: "80% reduction in technical troubleshooting times, improving support quality."
    },
    {
      title: "GKE Modernization",
      challenge: "Monolithic software updates caused frequent site outages and high hosting bills.",
      solution: "Refactored their app into microservices hosted on GKE with automated autoscaling rules.",
      result: "Zero system downtime recorded and 35% savings in monthly hosting costs."
    },
    {
      title: "Cloud Migration",
      challenge: "High data center upkeep bills and slow database response times on aging local hardware.",
      solution: "Migrated their complete ERP stack to Google Cloud Run and Cloud SQL databases.",
      result: "45% savings in yearly hardware costs and faster database query responses."
    },
    {
      title: "Data Lake Implementation",
      challenge: "Vast clickstream logs sat unanalyzed in database silos, wasting potential product insights.",
      solution: "Built a streaming data lake using Google Cloud Storage, Dataflow, and Pub/Sub.",
      result: "Enabled instant dashboard reporting on buyer click trends, optimizing site layouts."
    },
    {
      title: "Retail Analytics Solution",
      challenge: "Inaccurate stock records led to late orders and poor customer satisfaction scores.",
      solution: "Designed real-time database syncing pipelines using Cloud Spanner and Pub/Sub queues.",
      result: "Achieved 100% inventory accuracy across all physical stores and online portals."
    }
  ];

  // 15. Managed Google Cloud Services
  const managedServices = [
    { title: "24×7 Monitoring", desc: "Real-time tracking of GKE container health, system latency, and cloud errors." },
    { title: "Incident Management", desc: "Fast triage and remediation of unexpected outages and performance alerts." },
    { title: "Cost Optimization", desc: "Active management of GCP budgets to eliminate waste and size resources." },
    { title: "Performance Engineering", desc: "Fine-tuning database indexes, Cloud CDN caching, and Cloud Run execution parameters." },
    { title: "Cloud Governance", desc: "Configuring GCP organization policy parameters and access boundaries." },
    { title: "Reliability Management", desc: "Automating system backups, cross-region replication, and failover drills." }
  ];

  // 16. Innovation Focus Areas
  const innovationFocus = [
    { title: "Generative AI", desc: "Deploying secure Vertex LLMs trained on company data directories." },
    { title: "Agentic AI", desc: "Building independent software agents that process complex workflows." },
    { title: "Cloud Native", desc: "Refactoring application architectures into lightweight serverless services." },
    { title: "Data Mesh", desc: "Decentralizing data governance across departments using Dataplex." },
    { title: "MLOps", desc: "Automating model testing, deployment, and versioning on Vertex pipelines." },
    { title: "Platform Engineering", desc: "Standardizing development environments with unified templates." }
  ];

  // 17. Related Partnerships
  const relatedPartnerships = [
    { name: "Microsoft Alliance", desc: "Enterprise Azure setups, Fabric data lakes, and security systems.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Partnership", desc: "Amazon Web Services cloud enablement & DevOps systems.", href: "/ecosystem/partnerships/aws" },
    { name: "Oracle Partnership", desc: "Database modernization and enterprise ERP database migrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "ServiceNow Alliance", desc: "Automated IT service workflows and digital workforce modules.", href: "/ecosystem/partnerships/servicenow" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/bg-cloud.png"
            alt="Google Cloud Alliance background"
            className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none scale-[1.02]"
          />
          {/* Only a dark radial circle in the center behind the text */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_45%,transparent_75%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Grid */}
        

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-20 flex flex-col items-center text-center">
          <Reveal className="mb-4">
            <span className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Google Cloud Strategic Alliance
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Building AI-Powered, <span className="text-rose-500">Data-Driven Platforms</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
              Accelerate digital transformation with Google Cloud, leveraging AI, data analytics, Kubernetes, and cloud-native architectures to drive innovation at scale.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to Google Cloud Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <a
              href="#overview"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Google Cloud Solutions
            </a>
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
                  Transforming Enterprises <span className="text-rose-500">with Google Cloud</span>
                </h2>
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold mb-8">
                  Devopstrio helps organizations modernize applications, unlock data insights, build AI-powered experiences, and operate resilient cloud-native platforms on Google Cloud.
                </p>
                <div className="h-[1px] bg-zinc-900 w-full mb-8" />
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
                  Leveraging BigQuery, GKE Kubernetes environments, and Vertex AI models, we deliver modern data storage architectures and secure system automation.
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

      {/* 3. CAPABILITY AREAS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core <span className="text-rose-500">Competencies</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Comprehensive technical capabilities mapped directly to Google Cloud services.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, idx) => (
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

      {/* 4. CLOUD MODERNIZATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              INFRASTRUCTURE & CODE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Cloud Transformation <span className="text-rose-500">Services</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modernizationServices.map((service, idx) => (
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

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">GCP Technologies:</span>
            {modernizationTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KUBERNETES & PLATFORM ENGINEERING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CONTAINER ORCHESTRATION
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Scale with <span className="text-rose-500">Kubernetes</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {kubernetesCards.map((item, idx) => (
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
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Kubernetes Tools:</span>
            {kubernetesTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI & MACHINE LEARNING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              VERTEX & GEMINI MODELS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Enterprise AI <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{service.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">AI Technologies:</span>
            {aiTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DATA & ANALYTICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BIGQUERY & LOOKER
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Modern Data <span className="text-rose-500">Platforms</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dataSolutions.map((d, idx) => (
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
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Analytics Stack:</span>
            {dataTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOUD SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              SECURE WORKLOADS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Secure Cloud <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securityServices.map((sec, idx) => (
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
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Security Stack:</span>
            {securityTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY SOLUTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE FRAMEWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Industry <span className="text-rose-500">Accelerators</span>
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
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Google Cloud Solution</h3>
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

      {/* 10. DATA & AI INNOVATION */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BUSINESS INTELLIGENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Unlocking Business <span className="text-rose-500">Intelligence</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationCards.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Search className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GOOGLE CLOUD CERTIFICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GCP ACCREDITATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Certified Cloud <span className="text-rose-500">Engineers</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Proven credentials validating our capability to construct secure cloud architectures on GCP.
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

      {/* 12. TECHNOLOGY ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GCP SERVICES WE FREQUENTLY USE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Google Cloud <span className="text-rose-500">Technologies</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto select-none">
            {techGrid.map((tech) => (
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

      {/* 13. DELIVERY METHODOLOGY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUR STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Google Cloud Transformation <span className="text-rose-500">Lifecycle</span>
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

      {/* 14. SUCCESS STORIES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Customer <span className="text-rose-500">Outcomes</span>
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
                    GCP Success Story
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-6 tracking-wide">
                    {story.title}
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
                      <p className="text-xs text-zinc-350 font-bold leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. MANAGED GOOGLE CLOUD SERVICES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CONTINUOUS OPERATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Continuous <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((item, idx) => (
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

      {/* 16. INNOVATION FOCUS AREAS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FUTURE PROOF
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Future-Ready Cloud <span className="text-rose-500">Solutions</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {innovationFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 text-center"
              >
                <div className="text-rose-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">GCP FOCUS</div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-[10px] text-zinc-400 mt-2 font-bold leading-relaxed">{item.desc}</p>
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
                  Everything you need to know about our Google Cloud consulting, data analytics, and Kubernetes capabilities.
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
              Ready to Innovate with <span className="text-rose-500">Google Cloud?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              From AI-powered applications and data platforms to cloud-native modernization and Kubernetes engineering, our Google Cloud specialists can help accelerate your journey.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Schedule Consultation
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to Google Cloud Expert
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
