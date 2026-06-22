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
  Globe,
  Settings,
  Eye,
  GitMerge,
  Lightbulb,
  Building,
  Radio,
  Server
} from "lucide-react";
import Link from "next/link";

export default function CiscoStrategicAllianceHub() {
  // 12. Industry Solutions Tab State
  const [activeIndustry, setActiveIndustry] = useState("Banking");

  // FAQ/Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 1. Hero Highlights
  const heroHighlights = [
    "AI Infrastructure",
    "Networking",
    "Cybersecurity",
    "Observability",
    "Collaboration",
    "Industrial Networks"
  ];

  // 2. Cisco Platform Overview Pillars
  const platformPillars = [
    { title: "Networking", desc: "Digital core network fabrics utilizing high-speed Catalyst switches and Meraki dashboard access.", icon: <Radio className="w-6 h-6 text-rose-500" /> },
    { title: "Security", desc: "Zero Trust verification profiles and continuous firewall analytics database checks.", icon: <Shield className="w-6 h-6 text-rose-500" /> },
    { title: "Observability", desc: "Splunk and ThousandEyes telemetry log integrations surfacing application performance lag.", icon: <Eye className="w-6 h-6 text-rose-500" /> },
    { title: "Collaboration", desc: "Webex hybrid work platforms with automated meeting transcripts and speaker focus.", icon: <Briefcase className="w-6 h-6 text-rose-500" /> },
    { title: "AI Infrastructure", desc: "High-speed Nexus fabrics and automated GPU network routing optimized for heavy AI runs.", icon: <Cpu className="w-6 h-6 text-rose-500" /> }
  ];

  // 3. AI Infrastructure Platform Capabilities
  const aiInfraCapabilities = [
    { title: "AI Data Centers", desc: "Architecting high-density server clusters with automated cooling and power bounds." },
    { title: "AI Networking", desc: "Optimizing database connections and GPU cluster linkages to prevent latency spikes." },
    { title: "GPU Connectivity", desc: "Configuring high-bandwidth Ethernet and InfiniBand links to accelerate GPU communication." },
    { title: "High-Speed Fabric", desc: "Deploying Nexus fabrics to support massive data transfers for AI model training." },
    { title: "AI Traffic Optimization", desc: "Managing packet queues automatically to prevent network bottlenecks during heavy training runs." },
    { title: "AI Workload Security", desc: "Enforcing isolated security zones and continuous anomaly detection across AI nodes." }
  ];

  // 4. Enterprise Networking Domains
  const networkingDomains = [
    { title: "Campus Networks", desc: "Providing secure Wi-Fi and high-speed switching for corporate offices." },
    { title: "Branch Networks", desc: "Connecting remote offices to central systems using secure SD-WAN devices." },
    { title: "WAN Transformation", desc: "Replacing legacy network links with intelligent, cloud-connected routing." },
    { title: "Software Defined Networks", desc: "Managing network policies and configurations through automated software controllers." },
    { title: "Wi-Fi 7", desc: "Deploying next-gen wireless access points to support dense client environments." },
    { title: "Cloud Networking", desc: "Connecting local networks directly to OCI, AWS, and Azure hosting hubs." }
  ];
  const networkingTech = ["Cisco Catalyst", "Cisco Meraki", "Cisco Nexus", "Cisco SD-WAN", "Cisco ThousandEyes"];

  // 5. Cybersecurity Platform Capabilities
  const securityCapabilities = [
    { title: "Zero Trust", desc: "Verifying user identities and device health continuously before allowing system access." },
    { title: "Identity Security", desc: "Managing logins and credentials using automated identity verification tools." },
    { title: "Network Security", desc: "Deploying next-gen firewalls to scan and block malicious network traffic." },
    { title: "Cloud Security", desc: "Securing cloud-based applications and databases from unauthorized access." },
    { title: "Endpoint Protection", desc: "Monitoring laptops, servers, and mobile devices for security threats." },
    { title: "AI Security", desc: "Using machine learning to analyze network logs and flag security anomalies." }
  ];

  // 6. AI Security Center Solutions
  const aiSecuritySolutions = [
    { title: "AI Governance", desc: "Enforcing organizational compliance policies across all AI models." },
    { title: "Prompt Security", desc: "Scanning user prompts automatically to block data leaks and injection attacks." },
    { title: "Agent Security", desc: "Securing autonomous software agents to prevent unauthorized system actions." },
    { title: "Model Protection", desc: "Protecting proprietary AI weights and model parameters from theft." },
    { title: "Data Protection", desc: "Encrypting and sanitizing data feeds to prevent accidental exposure." },
    { title: "Risk Management", desc: "Analyzing AI system logs continuously to identify operational risks." }
  ];

  // 7. Observability & Operations Capabilities
  const observabilityCapabilities = [
    { title: "Application Monitoring", desc: "Tracking application transaction response times and database query speeds." },
    { title: "Infrastructure Monitoring", desc: "Monitoring server CPU, memory utilization, and storage volumes." },
    { title: "Digital Experience Monitoring", desc: "Measuring end-user network performance and page load speeds." },
    { title: "Network Analytics", desc: "Analyzing packet capture data to identify network anomalies." },
    { title: "Root Cause Analysis", desc: "Using ML diagnostics to find the source of system failures." },
    { title: "Performance Intelligence", desc: "Surfacing cost-saving and performance tuning recommendations." }
  ];
  const observabilityTech = ["Splunk", "AppDynamics", "ThousandEyes"];

  // 8. Collaboration Platform Solutions
  const collaborationSolutions = [
    { title: "Webex", desc: "Secure video conferencing and messaging platform for teams." },
    { title: "Hybrid Work", desc: "Connecting home and office workers with unified collaboration tools." },
    { title: "Meeting Intelligence", desc: "Automating meeting transcripts and translation using built-in AI." },
    { title: "Contact Center", desc: "Managing customer support queues across phone, email, and chat." },
    { title: "Employee Experience", desc: "Providing user-friendly communication portals and search hubs." },
    { title: "AI Assistants", desc: "Surfacing contextual files and action items during team meetings." }
  ];

  // 9. Industrial Networking Capabilities
  const industrialCapabilities = [
    { title: "Industrial IoT", desc: "Connecting factory floor machinery, power grids, and sensors safely." },
    { title: "Manufacturing Networks", desc: "Deploying ruggedized hardware built for factory floor temperatures." },
    { title: "Smart Factories", desc: "Integrating machinery telemetry with central ERP databases." },
    { title: "OT Security", desc: "Protecting operational technology environments from cyber attacks." },
    { title: "Industrial AI", desc: "Using ML diagnostics to predict machinery failures before they happen." },
    { title: "IT/OT Convergence", desc: "Unifying factory networks with corporate systems for better visibility." }
  ];

  // 10. Cloud Connectivity & Edge Solutions
  const cloudEdgeSolutions = [
    { title: "Multi-Cloud Networking", desc: "Routing data dynamically across local networks and multiple cloud hosts." },
    { title: "Cloud Security", desc: "Enforcing consistent security rules across all cloud environments." },
    { title: "Edge Infrastructure", desc: "Deploying edge compute nodes to process telemetry data locally." },
    { title: "Hybrid Connectivity", desc: "Providing secure connections between local servers and cloud databases." },
    { title: "Cloud Routing", desc: "Managing network traffic dynamically to reduce cloud data transfer fees." },
    { title: "Global Connectivity", desc: "Providing secure, high-speed access to applications from anywhere." }
  ];

  // 11. Agentic Operations Capabilities
  const agenticCapabilities = [
    { title: "AI Agents", desc: "Deploying autonomous software units to resolve network alerts automatically." },
    { title: "Autonomous Operations", desc: "Configuring auto-scaling limits, self-patching databases, and automated network resets." },
    { title: "Intelligent Automation", desc: "Automating routine network changes and software updates." },
    { title: "Infrastructure Copilots", desc: "Using conversational assistants to troubleshoot network bugs." },
    { title: "Natural Language Operations", desc: "Managing network devices and settings using simple text commands." },
    { title: "Self-Healing Networks", desc: "Using AI diagnostics to repair network issues before they cause downtime." }
  ];

  // 12. Industry Solutions
  const industries = [
    {
      name: "Banking",
      challenge: "Providing secure access to bank systems for remote workers while protecting data.",
      solution: "Deploy secure SD-WAN and Zero Trust controls across all bank branch networks.",
      outcome: "Secured transactions and 100% compliance pass rates."
    },
    {
      name: "Healthcare",
      challenge: "Unplanned medical equipment network drops and slow access to patient records.",
      solution: "Deploy secure, prioritized wireless access points and ThousandEyes monitoring.",
      outcome: "Zero critical machine network drops and faster record access."
    },
    {
      name: "Retail",
      challenge: "Store network crashes during holiday sales spikes, blocking credit card processing.",
      solution: "Deploy cloud-managed Meraki routers with automated LTE backups.",
      outcome: "100% network uptime and uninterrupted transaction processing."
    },
    {
      name: "Manufacturing",
      challenge: "Delayed production due to network failures on rugged factory floors.",
      solution: "Deploy ruggedized Catalyst switches and Cisco Cyber Vision monitoring.",
      outcome: "30% reduction in unplanned line downtime and secured OT networks."
    },
    {
      name: "Telecommunications",
      challenge: "Processing massive amounts of user calling and data logs without network lag.",
      solution: "Deploy high-capacity Nexus switches and ThousandEyes network routing.",
      outcome: "Optimized network speeds and real-time latency diagnostics."
    },
    {
      name: "Government",
      challenge: "Legacy network equipment security holes and slow citizen response rates.",
      solution: "Migrate government networks to secure Cisco SD-WAN with GovCloud security zones.",
      outcome: "Secured citizen portals and 40% lower administrative hosting costs."
    },
    {
      name: "Energy",
      challenge: "Monitoring remote power grids and sensors without reliable network connections.",
      solution: "Deploy ruggedized cellular gateways and centralized IoT dashboards.",
      outcome: "Real-time remote grid visibility and faster outage response."
    },
    {
      name: "Logistics",
      challenge: "Delayed container location updates due to warehouse Wi-Fi dead spots.",
      solution: "Deploy ruggedized wireless mesh access points across warehouses.",
      outcome: "Real-time cargo tracking and 20% lower shipping delays."
    }
  ];

  // 13. Cisco Innovation Lab Research Areas
  const innovationAreas = [
    { title: "AI Networking", desc: "Testing high-speed network designs for next-gen GPU clusters." },
    { title: "Quantum-Safe Security", desc: "Developing encryption algorithms built to withstand quantum attacks." },
    { title: "Autonomous Infrastructure", desc: "Configuring self-tuning routers that adapt to traffic patterns dynamically." },
    { title: "Industrial AI", desc: "Using AI diagnostics to detect manufacturing line anomalies." },
    { title: "AI Security", desc: "Building security layers to block user prompt injection attacks." },
    { title: "Observability Intelligence", desc: "Using ML to analyze system metrics and predict hardware failures." }
  ];

  // 14. Network Operations Center Services
  const nocServices = [
    { title: "24×7 Monitoring", desc: "Tracking network health, server CPU, and security alerts continuously." },
    { title: "Network Management", desc: "Configuring routers, switches, and firewalls to maintain system performance." },
    { title: "Incident Response", desc: "Troubleshooting and resolving network and security issues immediately." },
    { title: "Security Operations", desc: "Analyzing firewall logs and running regular vulnerability scans." },
    { title: "Performance Optimization", desc: "Tuning network settings to reduce data latency and transfer costs." },
    { title: "Managed Infrastructure", desc: "Enforcing regular hardware patches, software updates, and backups." }
  ];

  // Cisco Certifications
  const certifications = [
    { name: "CCNA - Certified Network Associate", image: "/assets/ecosystem/Cisco_Awards/image 187.png" },
    { name: "CCNP Enterprise - Certified Network Professional", image: "/assets/ecosystem/Cisco_Awards/image 188.png" },
    { name: "CCIE - Certified Internetwork Expert", image: "/assets/ecosystem/Cisco_Awards/image 189.png" },
    { name: "Cisco Certified DevNet Associate", image: "/assets/ecosystem/Cisco_Awards/image 190.png" },
    { name: "Cisco Certified DevNet Professional", image: "/assets/ecosystem/Cisco_Awards/image 191.png" },
    { name: "Cisco CyberOps Certified Associate", image: "/assets/ecosystem/Cisco_Awards/image 192.png" },
    { name: "Cisco Gold Integrator Partner Award", image: "/assets/ecosystem/Cisco_Awards/image 193.png" }
  ];

  // FAQ Accordion Data
  const faqs = [
    {
      q: "What Cisco certifications do Devopstrio engineers hold?",
      a: "Our engineers hold certifications including CCIE Enterprise, CCNP Enterprise, CCNA, DevNet Professional, and CyberOps Associate."
    },
    {
      q: "What is Cisco SD-WAN and how does it benefit multi-site enterprises?",
      a: "Cisco SD-WAN decouples the control plane from hardware, allowing organizations to route traffic intelligently over broadband, LTE, and MPLS connections, improving WAN bandwidth, reducing latency, and enforcing security policies dynamically."
    },
    {
      q: "How do you integrate Splunk and ThousandEyes observability with existing operations?",
      a: "We deploy ThousandEyes agents across network gateways to track internet latencies and configure Splunk forwarders on core hosts, unifying network path analysis and application logs into real-time dashboard alerts."
    },
    {
      q: "What is Cisco Meraki and when is it recommended?",
      a: "Cisco Meraki is a cloud-managed network architecture ideal for distributed enterprises, providing centralized management for wireless access points, switches, and security appliances via a single browser-based dashboard."
    },
    {
      q: "How do you secure hybrid workspaces using Cisco Zero Trust?",
      a: "We implement Cisco Duo multi-factor authentication, endpoint posture checks, and secure network access controls, ensuring that only verified users and healthy devices can access internal enterprise assets."
    },
    {
      q: "What is the benefit of Wi-Fi 7 in high-density enterprise environments?",
      a: "Wi-Fi 7 introduces ultra-wide channels and Multi-Link Operation, allowing devices to transmit data over multiple bands simultaneously, drastically increasing speeds, lowering packet delays, and reducing congestion."
    },
    {
      q: "Can Devopstrio manage ruggedized networking for manufacturing floors?",
      a: "Yes. We deploy and configure Cisco Catalyst industrial Ethernet switches, industrial wireless gateways, and Cisco Cyber Vision to monitor OT security anomalies and track factory telemetry."
    },
    {
      q: "How does Cisco Catalyst Center (formerly DNA Center) improve network management?",
      a: "Catalyst Center provides AI-driven network controller automation, enabling zero-touch deployment, network monitoring audits, and automated software image management across campus devices."
    },
    {
      q: "Do you support Cisco cloud connectivity to Azure, AWS, and GCP?",
      a: "Yes. We configure Cisco Cloud OnRamp to optimize routing, establish secure VPN tunnels, and manage transit gateway connections between local offices and multi-cloud environments."
    },
    {
      q: "What kind of 24/7 support does your NOC provide for Cisco infrastructures?",
      a: "Our Network Operations Center offers continuous monitoring of network devices, latency spike alerts, automated failover verification, firmware patch management, and immediate incident mitigation."
    }
  ];


  // 15. Impact Metrics
  const impactMetrics = [
    { value: "99.99%", label: "Network Availability" },
    { value: "24x7", label: "Monitoring" },
    { value: "50%", label: "Faster Incident Resolution" },
    { value: "40%", label: "Lower Complexity" },
    { value: "Global", label: "Delivery Coverage" },
    { value: "Enterprise", label: "Scale Operations" }
  ];

  // 16. Delivery Framework Journey
  const deliveryFrameworkSteps = [
    { phase: "Assess", desc: "Audit current network topology, bandwidth limits, and security controls." },
    { phase: "Design", desc: "Create secure network designs, SD-WAN rules, and firewall settings." },
    { phase: "Deploy", desc: "Install switches, routers, firewalls, and access points safely." },
    { phase: "Secure", desc: "Enforce Zero Trust access, identity checks, and security monitoring." },
    { phase: "Monitor", desc: "Track system health, traffic speeds, and security events 24/7." },
    { phase: "Optimize", desc: "Tuning network settings, bandwidth allocation, and cloud connectivity." },
    { phase: "Scale", desc: "Adding devices, users, and resources to support business growth." }
  ];

  // 17. Success Stories
  const successStories = [
    {
      title: "Network Modernization",
      challenge: "Slow network speeds and high maintenance costs on legacy switches.",
      solution: "Upgraded campus networks to Cisco Catalyst switches and Wi-Fi 6E.",
      result: "3x faster network speeds, reducing hardware maintenance costs by 20%."
    },
    {
      title: "Zero Trust Implementation",
      challenge: "High risk of security breaches due to weak user identity verification.",
      solution: "Enforced Cisco Duo identity checks and Zero Trust access rules.",
      result: "Zero unauthorized logins, protecting critical business database fields."
    },
    {
      title: "AI Infrastructure Deployment",
      challenge: "GPU cluster latency bottlenecks during heavy training runs.",
      solution: "Deployed Cisco Nexus fabrics and AI traffic optimization.",
      result: "Eliminated GPU idle time, reducing model training times by 35%."
    },
    {
      title: "Industrial Network Transformation",
      challenge: "Frequent factory line shutdowns due to network drops in harsh environments.",
      solution: "Deployed ruggedized Catalyst switches and Cyber Vision OT monitoring.",
      result: "30% reduction in unplanned line downtime, securing factory floor networks."
    },
    {
      title: "Observability Modernization",
      challenge: "Hours spent finding the source of system failures across multiple hosts.",
      solution: "Integrated Splunk observability and ThousandEyes network analytics.",
      result: "85% faster root cause identification, improving system stability."
    },
    {
      title: "Cloud Connectivity",
      challenge: "High data transfer fees and slow response times on cloud applications.",
      solution: "Deploy Cisco SD-WAN to route network traffic dynamically.",
      result: "40% lower cloud data transfer fees and faster application loading."
    }
  ];

  // 18. Future-Ready Enterprise Vision
  const futureReadyEnterpriseFocus = [
    { title: "AI Infrastructure", desc: "High-capacity switching networks optimized for massive AI data feeds." },
    { title: "Agentic Operations", desc: "Self-healing network devices managed by autonomous software agents." },
    { title: "Cyber Resilience", desc: "Zero Trust verification profiles and continuous firewall analytics." },
    { title: "Observability", desc: "Splunk and ThousandEyes logs mapping system health in real-time." },
    { title: "Secure Connectivity", desc: "SD-WAN routing to connect local networks directly to cloud servers." },
    { title: "Autonomous Networks", desc: "Configuring self-tuning routers that adapt to traffic patterns dynamically." }
  ];

  // 19. Related Partnerships
  const relatedPartnerships = [
    { name: "Microsoft Alliance", desc: "Collaborative Azure operations, MS Teams integrations, and data lakes.", href: "/ecosystem/partnerships/microsoft" },
    { name: "AWS Partnership", desc: "Amazon Web Services DevOps configurations and secure hosting.", href: "/ecosystem/partnerships/aws" },
    { name: "Google Cloud", desc: "Next-gen GCP data warehousing and predictive AI integrations.", href: "/ecosystem/partnerships/google-cloud" },
    { name: "Oracle Alliance", desc: "Database modernization and OCI database migrations.", href: "/ecosystem/partnerships/oracle" },
    { name: "SAP Alliance", desc: "Enterprise resource planning, ERP migrations, and SCM modernizations.", href: "/ecosystem/partnerships/sap" },
    { name: "ServiceNow Alliance", desc: "IT Service Management and automated workflows.", href: "/ecosystem/partnerships/servicenow" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 border-b border-zinc-900/60">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/ecosystem/bg-cloud.png"
            alt="Cisco Alliance background"
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
              Cisco Strategic Alliance
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mb-6">
              Building Secure <span className="text-rose-500">AI-Powered Infrastructure</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-bold mb-8">
              Accelerate enterprise transformation through AI-ready networking, cybersecurity, observability, collaboration, and cloud-connected operations.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to Cisco Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <a
              href="#overview"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Infrastructure Assessment
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

      {/* 2. CISCO PLATFORM OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM CORE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cisco Platform <span className="text-rose-500">Overview</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Unifying network speed, observability, and system security on a single platform.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {platformPillars.map((item, idx) => (
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

          {/* Flow representation */}
          <div className="w-full bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 max-w-3xl mx-auto select-none">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400 font-bold">
              <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                AI Applications
              </div>
              <ChevronRight className="w-4 h-4 text-rose-500 rotate-90 md:rotate-0" />
              <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                <Lock className="w-4 h-4 text-rose-500" />
                Secure Infrastructure
              </div>
              <ChevronRight className="w-4 h-4 text-rose-500 rotate-90 md:rotate-0" />
              <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                <Radio className="w-4 h-4 text-rose-500" />
                Networks + Security
              </div>
              <ChevronRight className="w-4 h-4 text-rose-500 rotate-90 md:rotate-0" />
              <div className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                <CheckCircle2 className="w-4 h-4" />
                Outcomes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI INFRASTRUCTURE PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GPU CLUSTER FABRICS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              AI Infrastructure <span className="text-rose-500">Platform</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiInfraCapabilities.map((item, idx) => (
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
        </div>
      </section>

      {/* 4. ENTERPRISE NETWORKING */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE BACKBONE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Enterprise <span className="text-rose-500">Networking</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {networkingDomains.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block mb-2 font-bold">0{idx + 1}</span>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Networking Stack:</span>
            {networkingTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CYBERSECURITY PLATFORM */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ZERO TRUST SECURITY
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Cybersecurity <span className="text-rose-500">Platform</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI SECURITY CENTER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              MODEL COMPLIANCE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              AI Security <span className="text-rose-500">Center</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiSecuritySolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Flow representation */}
          <div className="w-full bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 max-w-xl mx-auto select-none">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400 font-bold">
              <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-500" />
                AI Models
              </div>
              <ChevronRight className="w-4 h-4 text-rose-500 rotate-90 md:rotate-0" />
              <div className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                <Shield className="w-4 h-4" />
                AI Security Layer
              </div>
              <ChevronRight className="w-4 h-4 text-rose-500 rotate-90 md:rotate-0" />
              <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-2">
                <Server className="w-4 h-4 text-rose-500" />
                Enterprise Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OBSERVABILITY & OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FULL-STACK TELEMETRY
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Observability & <span className="text-rose-500">Operations</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {observabilityCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 select-none">
            <span className="text-xs font-bold text-zinc-400 mr-2 uppercase tracking-wider">Telemetry Stack:</span>
            {observabilityTech.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-350 rounded-lg font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COLLABORATION PLATFORM */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              HYBRID WORKSPACES
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Collaboration <span className="text-rose-500">Platform</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationSolutions.map((item, idx) => (
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

      {/* 9. INDUSTRIAL NETWORKING */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FACTORY FLOOR & OT NETWORKS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Industrial <span className="text-rose-500">Networking</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLOUD CONNECTIVITY & EDGE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              EDGE ARCHITECTURE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Cloud Connectivity & <span className="text-rose-500">Edge</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudEdgeSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/5 flex items-center justify-center mb-4 text-rose-500">
                  <Cloud className="w-4 h-4" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. AGENTIC OPERATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left font-bold">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              INFRASTRUCTURE IN AI ERA
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Operating Infrastructure in the <span className="text-rose-500">AI Era</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {agenticCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 text-center"
              >
                <div className="text-rose-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">AGENTIC</div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider leading-snug">{item.title}</h4>
                <p className="text-[10px] text-zinc-400 mt-2 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INDUSTRY SOLUTIONS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              VERTICAL BLUEPRINTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cisco Industry <span className="text-rose-500">Solutions</span>
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
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">Cisco Solution</h3>
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

      {/* 13. CISCO INNOVATION LAB */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              R&D PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cisco Innovation <span className="text-rose-500">Lab</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationAreas.map((item, idx) => (
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

      {/* 14. NETWORK OPERATIONS CENTER */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              MANAGED OPERATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Network Operations <span className="text-rose-500">Center</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nocServices.map((item, idx) => (
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

      {/* CISCO CERTIFICATIONS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CREDENTIALED EXPERT TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Certified Cisco <span className="text-rose-500">Experts</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold">
              Proven credentials validating our capability to construct secure, high-performance Cisco networks, routing protocols, and firewalls.
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
                      <Radio className="w-6 h-6" />
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

      {/* 15. IMPACT METRICS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5">
              <Reveal className="text-left font-bold">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  PROVEN VALUE
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                  Cisco Impact <span className="text-rose-500">Metrics</span>
                </h2>
                <p className="text-zinc-350 text-sm md:text-base leading-relaxed">
                  Realized operational improvements and savings recorded after upgrading to secure, AI-powered Cisco networking.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 select-none">
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

      {/* 16. DELIVERY FRAMEWORK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              COE JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cisco Delivery <span className="text-rose-500">Framework</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {deliveryFrameworkSteps.map((step, idx) => (
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

      {/* 17. SUCCESS STORIES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              OUTCOMES ACHIEVED
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Customer Success <span className="text-rose-500">Stories</span>
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
                    Cisco Success Story
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

      {/* 18. FUTURE-READY ENTERPRISE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FUTURE VISION
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Future-Ready <span className="text-rose-500">Enterprise</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {futureReadyEnterpriseFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-2xl hover:border-rose-500/20 transition-all duration-300 text-center"
              >
                <div className="text-rose-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">VISION</div>
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider leading-snug">{item.title}</h4>
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
                  Everything you need to know about our Cisco networking, security, and infrastructure capabilities.
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

      {/* 19. RELATED ECOSYSTEM CONNECTIONS */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
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

      {/* 20. CTA */}
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
              Build AI-Ready Secure <span className="text-rose-500">Infrastructure</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-10 font-bold">
              Leverage Cisco networking, security, observability, and AI infrastructure solutions to accelerate enterprise transformation.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
            >
              Talk to Cisco Experts
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Infrastructure Assessment
            </Link>
          </Reveal>

        </div>
      </section>

    </main>
  );
}
