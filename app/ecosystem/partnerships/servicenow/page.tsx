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
  Globe,
  Settings,
  Flame,
  Eye,
  GitMerge,
  Lightbulb,
  Building
} from "lucide-react";
import Link from "next/link";

export default function ServiceNowStrategicAllianceHub() {
  // 9. Industry Solutions Tab State
  const [activeIndustry, setActiveIndustry] = useState("Banking");

  // FAQ/Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1. Hero Highlights / Pillars
  const heroHighlights = [
    "AI Platform",
    "Enterprise Workflows",
    "Business Transformation",
    "Autonomous Operations"
  ];

  // 2. Platform Overview Dimensions
  const platformDimensions = [
    { title: "AI Platform", desc: "Generative intelligence and Now Assist engine that simplifies request processes automatically.", icon: <Sparkles className="w-6 h-6 text-rose-500" /> },
    { title: "Data Integration", desc: "A unified enterprise data catalog connecting application telemetry and log files.", icon: <Database className="w-6 h-6 text-rose-500" /> },
    { title: "Workflows Engine", desc: "Crossing organizational boundaries to route and process business updates instantly.", icon: <Workflow className="w-6 h-6 text-rose-500" /> },
    { title: "Hyperautomation", desc: "Eliminating manual processing loops utilizing software intelligence and process mining.", icon: <Cpu className="w-6 h-6 text-rose-500" /> },
    { title: "Secure Governance", desc: "Enforcing compliance guardrails, risk controls, and automated compliance scans.", icon: <Shield className="w-6 h-6 text-rose-500" /> }
  ];

  // 3. Workflow Domains
  const workflowDomains = [
    {
      title: "Technology Workflows",
      desc: "ITSM, ITOM, AIOps, Cloud Operations, Asset Management",
      bullets: [
        "IT Service Management (ITSM) optimization",
        "IT Operations Management (ITOM) visibility",
        "AIOps predictive event management",
        "Automated Cloud Operations configurations",
        "Hardware & Software Asset Management"
      ]
    },
    {
      title: "Employee Workflows",
      desc: "HR Service Delivery, Employee Center, Onboarding, Knowledge Services",
      bullets: [
        "HR Service Delivery workflow automation",
        "Unified Employee Center portal configurations",
        "Automated onboarding and offboarding steps",
        "Centralized Enterprise Knowledge Services"
      ]
    },
    {
      title: "Customer Workflows",
      desc: "Customer Service, Field Service, Case Management",
      bullets: [
        "Customer Service Management (CSM) automation",
        "Intelligent Field Service dispatcher routing",
        "Unified multi-channel Case Management tools"
      ]
    },
    {
      title: "Risk Workflows",
      desc: "Security Operations, GRC, Risk Management, Compliance",
      bullets: [
        "Security Incident Response automation",
        "Governance, Risk & Compliance (GRC) metrics",
        "Continuous regulatory compliance checks",
        "Enterprise vulnerability lifecycle tracking"
      ]
    },
    {
      title: "Creator Workflows",
      desc: "Low-Code Apps, Automation, Workflow Builder, Integrations",
      bullets: [
        "Low-code App Engine application deployment",
        "Visual Flow Designer workflow structures",
        "Enterprise Integration Hub configuration nodes"
      ]
    }
  ];

  // 4. AI Platform Architecture
  const aiArchitecture = [
    { title: "Now Assist", desc: "Generative AI assistant providing instant summaries, code generation, and resolution actions." },
    { title: "AI Agents", desc: "Autonomous software units designed to perform multi-step business actions and database updates." },
    { title: "Predictive Intelligence", desc: "Routing incoming tickets automatically based on historical machine learning records." },
    { title: "Generative AI", desc: "Simplifying complex technical manuals and audit logs into clear text briefings." },
    { title: "Agentic Workflows", desc: "Connecting distinct software actions into independent system runs." },
    { title: "Knowledge Intelligence", desc: "Surfacing contextual help articles instantly as technicians troubleshoot errors." }
  ];

  // 5. Digital Workflow Transformation
  const transformationSteps = [
    { phase: "Discover", desc: "Audit legacy software workflows, manual queue bottlenecks, and data schemas." },
    { phase: "Assess", desc: "Map current operational costs against potential automated workflow savings." },
    { phase: "Design", desc: "Create unified ServiceNow architectures, custom tables structure, and portal layouts." },
    { phase: "Automate", desc: "Configure visual flow designs, Now Assist models, and task assignment logic." },
    { phase: "Integrate", desc: "Connect databases, ERPs, and cloud applications using secure Integration Hub cards." },
    { phase: "Operate", desc: "Launch new portals, monitor transaction speeds, and manage user licensing thresholds." },
    { phase: "Optimize", desc: "Perform regular process mining checks to resolve operational lag points." }
  ];

  // 6. Enterprise Service Management Capabilities
  const esmCapabilities = [
    { title: "IT Service Management", desc: "Accelerating incident fixes and hardware changes utilizing intelligent workflows." },
    { title: "HR Service Delivery", desc: "Providing a unified portal for employee questions, benefits reviews, and hardware requests." },
    { title: "Customer Service", desc: "Triage and resolve client complaints via chat and phone with integrated CRM tools." },
    { title: "Finance Operations", desc: "Automate purchase approvals, invoice routing, and finance audits safely." },
    { title: "Legal Operations", desc: "Manage legal contract reviews, requests, and NDA templates with full audit logs." },
    { title: "Procurement Operations", desc: "Simplify supplier agreements, purchases, and order tracking across accounts." }
  ];

  // 7. Hyperautomation Center Grid
  const hyperautomationGrid = [
    { title: "Workflow Automation", desc: "Replacing manual tasks with automated triggers and conditional actions." },
    { title: "Robotic Automation", desc: "Running software bots to complete legacy UI data inputs without APIs." },
    { title: "Case Automation", desc: "Gathering client logs and allocating them to correct response queues." },
    { title: "Approvals", desc: "Automating purchasing approvals across multi-level management structures." },
    { title: "Process Mining", desc: "Analyzing system audit logs visually to identify operational bottlenecks." },
    { title: "Task Intelligence", desc: "Extracting transaction keys from unformatted text to speed up processing." }
  ];

  // 9. Industry Workflow Solutions
  const industries = [
    {
      name: "Banking",
      challenge: "Managing card dispute claims manually across disconnected systems.",
      solution: "Configure automated ServiceNow financial workflows sync'd with core banking ledgers.",
      outcome: "Dispute resolution times reduced by 60% with zero audit errors."
    },
    {
      name: "Healthcare",
      challenge: "Slow clinical equipment repairs and long patient onboarding queues.",
      solution: "Deploy HIPAA-compliant customer service portals connected to field technician schedules.",
      outcome: "40% faster clinic machine repairs and optimized patient data flows."
    },
    {
      name: "Retail",
      challenge: "Delay in inventory updates and manual vendor billing checks.",
      solution: "Integrate supplier billing workflows with automated inventory checkpoints on OCI.",
      outcome: "25% lower warehouse processing delays and automated stock orders."
    },
    {
      name: "Manufacturing",
      challenge: "High machinery downtime and siloed factory telemetry tracking.",
      solution: "Connect floor sensors to real-time ITSM event and incident management consoles.",
      outcome: "30% reduction in unplanned line downtime and instant technician alerts."
    },
    {
      name: "Telecom",
      challenge: "Slow network fault checks and manual customer subscription changes.",
      solution: "Implement automated network alarms parsing connected to GKE diagnostics scripts.",
      outcome: "50% faster network fault resolution and automated service recovery loops."
    },
    {
      name: "Government",
      challenge: "Legacy paper filing systems and slow citizen response rates.",
      solution: "Migrate public services to secure ServiceNow GovCloud portals with automated routing.",
      outcome: "45% lower administrative overhead and faster citizen services processing."
    }
  ];

  // 10. Autonomous Enterprise Focus
  const autonomousFocus = [
    { title: "AI Agents", desc: "Deploying self-executing software agents that resolve system alerts and database logs." },
    { title: "Autonomous Operations", desc: "Configuring auto-scaling limits, self-patching databases, and automated network resets." },
    { title: "Self-Healing Systems", desc: "Using AI diagnostics to detect and repair system issues before they cause downtime." },
    { title: "Predictive Workflows", desc: "Anticipating traffic peaks to scale databases and allocate compute resources." },
    { title: "Intelligent Decisioning", desc: "Enforcing business policies and budget limits on cloud spending automatically." }
  ];

  // 11. Excellence Pillars
  const excellencePillars = [
    { title: "Strategy", desc: "Defining clear business outcomes and automation roadmaps for the enterprise." },
    { title: "Architecture", desc: "Designing scalable ServiceNow data models, portal layouts, and security zones." },
    { title: "Implementation", desc: "Configuring applications, user tables, and custom business rules safely." },
    { title: "Integration", desc: "Connecting enterprise apps and databases using Integration Hub configurations." },
    { title: "Automation", desc: "Enforcing flow designs, predictive routing models, and automated backups." },
    { title: "Optimization", desc: "Running regular process mining checks to solve performance bottlenecks." },
    { title: "Managed Services", desc: "Providing 24/7 help desk, patch updates, and database optimization." }
  ];

  // 12. Delivery Model Timeline
  const deliveryModelSteps = [
    { phase: "Consulting", desc: "Defining automation opportunities, business goals, and platform license scopes." },
    { phase: "Platform Design", desc: "Designing landing portals, database tables, and security policies." },
    { phase: "Workflow Engineering", desc: "Building visual flow diagrams, business logic rules, and forms." },
    { phase: "Migration", desc: "Migrating legacy data records, knowledge articles, and users safely." },
    { phase: "Automation", desc: "Configuring Now Assist AI tools, chatbot interfaces, and automated reports." },
    { phase: "Managed Operations", desc: "Providing 24/7 platform support, performance audits, and patch updates." }
  ];

  // 13. Innovation Lab Experiments
  const innovationExperiments = [
    { title: "AI Agent Workflows", desc: "Testing autonomous software agents that parse email requests and update records." },
    { title: "HR Automation", desc: "Automating document generation, visa updates, and training allocations." },
    { title: "IT Automation", desc: "Configuring auto-provisioning of cloud instances based on approved tickets." },
    { title: "Security Automation", desc: "Automating firewall blocking rules based on security incident logs." },
    { title: "Customer Operations", desc: "Tuning chat agents to resolve technical questions using PDF databases." },
    { title: "Enterprise Copilots", desc: "Customizing Now Assist models to draft business summaries and reports." }
  ];

  // ServiceNow Certifications
  const certifications = [
    { name: "Certified System Administrator", image: "/assets/ecosystem/Servicenow_Aards/image 164.png" },
    { name: "Certified Application Developer", image: "/assets/ecosystem/Servicenow_Aards/image 165.png" },
    { name: "Certified Application Specialist", image: "/assets/ecosystem/Servicenow_Aards/image 166.png" },
    { name: "CIS - IT Service Management", image: "/assets/ecosystem/Servicenow_Aards/image 167.png" },
    { name: "CIS - HR Service Delivery", image: "/assets/ecosystem/Servicenow_Aards/image 168.png" },
    { name: "CIS - Customer Service Management", image: "/assets/ecosystem/Servicenow_Aards/image 169.png" },
    { name: "CIS - Security Incident Response", image: "/assets/ecosystem/Servicenow_Aards/image 170.png" },
    { name: "CIS - Vulnerability Response", image: "/assets/ecosystem/Servicenow_Aards/image 171.png" },
    { name: "CIS - Discovery", image: "/assets/ecosystem/Servicenow_Aards/image 172.png" },
    { name: "CIS - Service Mapping", image: "/assets/ecosystem/Servicenow_Aards/image 173.png" },
    { name: "CIS - Cloud Provisioning", image: "/assets/ecosystem/Servicenow_Aards/image 174.png" },
    { name: "Micro-Certification - ATF", image: "/assets/ecosystem/Servicenow_Aards/image 175.png" },
    { name: "Micro-Certification - Integration Hub", image: "/assets/ecosystem/Servicenow_Aards/image 176.png" },
    { name: "ServiceNow Elite Partner Award", image: "/assets/ecosystem/Servicenow_Aards/image 177.png" }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      q: "What ServiceNow tiers of certified specialists does Devopstrio supply?",
      a: "We supply professionals with credentials ranging from Certified System Administrators and Application Developers to Certified Implementation Specialists in ITSM, HRSD, CSM, Security Operations, and GRC."
    },
    {
      q: "What is ServiceNow 'Now Assist' and how does it implement Generative AI?",
      a: "Now Assist is ServiceNow's native GenAI engine, enabling conversational interactions, auto-generating incident resolution summaries, drafting chat responses, and automating code creation for developers."
    },
    {
      q: "How does ServiceNow help in consolidating legacy IT service management tools?",
      a: "ServiceNow consolidates legacy tools onto a single data model, unifying ITIL processes, automating workflows across siloes, and reducing tool-licensing overheads."
    },
    {
      q: "What is the difference between ITSM and CSM in ServiceNow?",
      a: "ITSM (IT Service Management) focuses on internal technology workflows like incident, change, and asset management, while CSM (Customer Service Management) orchestrates external-facing customer service channels."
    },
    {
      q: "How does your integration framework connect ServiceNow with SAP or Oracle?",
      a: "We utilize ServiceNow Integration Hub spokes, OAuth 2.0 authentications, and custom REST API scripts to synchronize business process records like invoices, inventories, and HR profiles dynamically."
    },
    {
      q: "What is a ServiceNow Micro-Certification?",
      a: "Micro-certifications are targeted credentials that validate mastery in specific capabilities or features, such as the Automated Test Framework (ATF), Integration Hub, or Flow Designer."
    },
    {
      q: "Can Devopstrio build custom applications on ServiceNow App Engine?",
      a: "Yes. We build custom workflow applications on ServiceNow Creator Workflows, using low-code App Engine Studio and JavaScript scripts to automate unique operational needs."
    },
    {
      q: "How do you secure data privacy in ServiceNow cloud environments?",
      a: "We configure ServiceNow Edge Encryption, Access Control Lists (ACLs), Domain Separation configurations, and secure Entra ID single sign-on connections to protect customer data."
    },
    {
      q: "What is the Automated Test Framework (ATF) and why is it important?",
      a: "ATF automates testing during ServiceNow upgrades and app developments, validating client scripts, forms, and service catalogs automatically to reduce manual test hours."
    },
    {
      q: "Do you provide post-implementation support for ServiceNow platforms?",
      a: "Yes. We offer 24/7 administrator support, incident troubleshooting, patch upgrades, workflow optimization, and regular catalog updates to ensure high availability."
    }
  ];


  // 14. Impact Metrics
  const impactMetrics = [
    { value: "70%", label: "Faster Resolution" },
    { value: "50%", label: "Less Manual Work" },
    { value: "40%", label: "Faster Onboarding" },
    { value: "99.9%", label: "Platform Reliability" },
    { value: "24×7", label: "Operations" }
  ];

  // 15. Related Ecosystem Connections
  const relatedEcosystem = [
    { name: "Microsoft Alliance", desc: "Collaborative Azure operations, MS Teams integrations, and data lakes.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Partnership", desc: "Amazon Web Services DevOps configurations and secure hosting.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud", desc: "Next-gen GCP data warehousing and predictive AI integrations.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle", desc: "Database modernization and OCI database migrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "SAP Alliance", desc: "Enterprise resource planning, ERP migrations, and SCM modernizations.", href: "/ecosystem/partnerships/sap" },
    { name: "Engineering Excellence", desc: "Platform engineering and quality assurance practices.", href: "/ecosystem/excellence" },
    { name: "Innovation Labs", desc: "Prototyping future workflows and cloud-native solutions.", href: "/ecosystem/labs" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/bg-cloud.png"
            alt="ServiceNow Alliance background"
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
              ServiceNow Strategic Alliance
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              AI-Powered Enterprise <span className="text-rose-500">Workflows at Scale</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
              Transform IT, HR, Customer Service, Security, Operations, and Business Processes through the ServiceNow AI Platform.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to ServiceNow Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <a
              href="#overview"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Discovery Session
            </a>
          </Reveal>
        </div>
      </section>


      {/* 2. SERVICENOW ECOSYSTEM OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM CORE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              ServiceNow Platform <span className="text-rose-500">Overview</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Positioned to drive enterprise operations on a single unified data layer.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platformDimensions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-500/5 flex items-center justify-center mb-6 text-rose-500">
                    {item.icon}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE WORKFLOW DOMAINS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              WORKFLOW DIRECTORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Enterprise Workflow <span className="text-rose-500">Domains</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {workflowDomains.map((domain, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">{domain.title}</h3>
                  <div className="h-[1px] bg-zinc-900 w-full my-4" />

                  <ul className="space-y-3">
                    {domain.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">
                        <Check className="w-3 h-3 text-rose-500 shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI PLATFORM LAYER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              NOW ASSIST INTELLIGENCE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              AI Platform <span className="text-rose-500">Layer</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiArchitecture.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIGITAL WORKFLOW TRANSFORMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              METHODOLOGY TIMELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Digital Workflow <span className="text-rose-500">Transformation</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {transformationSteps.map((step, idx) => (
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

      {/* 6. ENTERPRISE SERVICE MANAGEMENT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BUSINESS OPERATIONS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Enterprise Service <span className="text-rose-500">Management</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {esmCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HYPERAUTOMATION CENTER */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PROCESS MINING & BOT RUNS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Hyperautomation <span className="text-rose-500">Center</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hyperautomationGrid.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTEGRATION ECOSYSTEM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              INTEGRATION HUB
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Integration <span className="text-rose-500">Ecosystem</span>
            </h2>
          </Reveal>

          {/* Integration Hub Diagram representation */}
          <div className="w-full bg-zinc-950/50 border border-zinc-900 rounded-3xl p-8 max-w-4xl mx-auto select-none">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center text-center font-mono text-[10px] md:text-xs">

              <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-500 rounded-xl font-bold col-span-3 md:col-span-4 lg:col-span-8 mb-4">
                ServiceNow Integration Hub Core
              </div>

              {["SAP", "Oracle", "Microsoft", "Salesforce", "AWS", "Google Cloud", "Workday", "Jira"].map((tech) => (
                <div key={tech} className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-350 hover:text-white hover:border-rose-500/20 transition-all font-bold">
                  ↔ {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY WORKFLOW SOLUTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              VERTICAL SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Industry Workflow <span className="text-rose-500">Solutions</span>
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
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Workflow Solution</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-3 font-bold">OUTCOME</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Business Impact</h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed font-bold">{ind.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 10. AUTONOMOUS ENTERPRISE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FUTURE DIRECTION
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Autonomous <span className="text-rose-500">Enterprise</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {autonomousFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 text-center"
              >
                <div className="text-rose-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">AUTONOMOUS</div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider leading-snug">{item.title}</h4>
                <p className="text-[10px] text-zinc-400 mt-2 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SERVICENOW EXCELLENCE FRAMEWORK */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              COE PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              ServiceNow Excellence <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative select-none">
            {excellencePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="text-[28px] font-black text-rose-500/10 font-mono tracking-tighter leading-none mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2">{pillar.title}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. DEVOPSTRIO DELIVERY MODEL */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              STEP-BY-STEP SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Devopstrio Delivery <span className="text-rose-500">Model</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {deliveryModelSteps.map((step, idx) => (
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

      {/* 13. INNOVATION LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              PROTOTYPES & LAB RUNS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Innovation <span className="text-rose-500">Lab</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationExperiments.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICENOW CERTIFICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CREDENTIALED EXPERT TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Certified ServiceNow <span className="text-rose-500">Professionals</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Proven credentials validating our capability to construct secure, high-performance ServiceNow workflows and integrations.
            </p>
          </Reveal>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 select-none">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center justify-center bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-6 hover:border-rose-500/20 transition-all duration-300 text-center gap-4 group min-h-[180px]"
              >
                <div className="w-full h-16 flex items-center justify-center mb-2">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-rose-500/5 flex items-center justify-center text-rose-500 group-hover:scale-105 transition-transform duration-300">
                      <Cpu className="w-6 h-6" />
                    </div>
                  )}
                </div>
                <h4 className="text-xs font-bold text-zinc-350 group-hover:text-rose-500 transition-colors leading-snug">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BUSINESS IMPACT METRICS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5">
              <Reveal className="text-left">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  PROVEN OUTCOMES
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  Business Impact <span className="text-rose-500">Metrics</span>
                </h2>
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed font-bold">
                  Measuring efficiency gains and time savings after migrating core enterprise operations to the ServiceNow platform.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 select-none">
                {impactMetrics.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 text-left group"
                  >
                    <div className="text-2xl md:text-3xl font-black text-rose-500 tracking-tighter mb-2 font-mono group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider leading-snug font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                  Everything you need to know about our ServiceNow workflow automation and integration capabilities.
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

      {/* 15. RELATED ECOSYSTEM CONNECTIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EXPLORE OTHER NETWORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Ecosystem <span className="text-rose-500">Connections</span>
            </h2>
          </Reveal>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedEcosystem.map((partner) => (
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

      {/* 16. FINAL CTA */}
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
              Build the <span className="text-rose-500">Autonomous Enterprise</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Leverage AI, automation, workflows, and enterprise service management through the ServiceNow ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to ServiceNow Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Discovery Session
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
