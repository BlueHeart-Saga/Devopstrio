"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Key,
  Fingerprint,
  UserCheck,
  Server,
  Cloud,
  Database,
  Code,
  FileText,
  CheckCircle2,
  ArrowRight,
  Activity,
  Sparkles,
  Zap,
  BarChart3,
  Search,
  FileCode,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Container,
  Eye,
  Network,
  Cpu,
  Workflow,
  Sliders,
  Briefcase,
  Users,
  HardDrive,
  FileSearch,
  X,
  Download,
  Terminal,
  GitBranch,
  FileCheck,
  Layers,
  Globe,
  Radio,
  Check,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function SecurityFrameworkPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);
  const [activeArchLayer, setActiveArchLayer] = useState<string>("Zero Trust Gateway");
  const [activeTechCategory, setActiveTechCategory] = useState<string>("Identity");
  const [activeZeroTrustStep, setActiveZeroTrustStep] = useState<number>(0);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    securityNeed: "Zero Trust Architecture",
    message: ""
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto advance pipeline animation step
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % 7);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // 1. Business Security Challenges
  const businessChallenges = [
    {
      title: "Increasing Cyber Threats",
      desc: "Exponential rise in sophisticated ransomware, supply chain attacks, and nation-state threat vectors.",
      icon: ShieldAlert,
      tag: "Threat Horizon"
    },
    {
      title: "Identity Management Complexity",
      desc: "Siloed identity providers, privileged access sprawl, and lack of unified SSO across multi-cloud.",
      icon: Fingerprint,
      tag: "Identity Sprawl"
    },
    {
      title: "Cloud Security Risks",
      desc: "Misconfigured storage buckets, unencrypted databases, and exposed public cloud interfaces.",
      icon: Cloud,
      tag: "Cloud Exposure"
    },
    {
      title: "Compliance Requirements",
      desc: "Navigating strict regulatory frameworks like ISO 27001, SOC 2, GDPR, HIPAA, and PCI DSS.",
      icon: FileCheck,
      tag: "Regulatory Pressure"
    },
    {
      title: "Data Breaches",
      desc: "Unintentional data exfiltration and clear-text credentials leaking into public code repositories.",
      icon: AlertTriangle,
      tag: "Data Loss"
    },
    {
      title: "API Vulnerabilities",
      desc: "Unprotected REST & GraphQL endpoints vulnerable to broken object-level authorization (BOLA).",
      icon: Code,
      tag: "API Risks"
    },
    {
      title: "Security Misconfigurations",
      desc: "Drift in Kubernetes manifests, IAM policies, and Terraform scripts leading to security blind spots.",
      icon: Sliders,
      tag: "Config Drift"
    },
    {
      title: "Manual Security Operations",
      desc: "Alert fatigue in SOC teams due to manual threat triage and lack of automated response playbooks.",
      icon: Activity,
      tag: "SOC Fatigue"
    }
  ];

  // 2. Framework Architecture Layers
  const architectureLayers = [
    {
      id: "users_idp",
      name: "Identity & MFA",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
      desc: "Centralized identity governance enforcing strong multi-factor authentication and conditional access rules.",
      components: ["Microsoft Entra ID", "Azure AD / Okta", "OIDC & OAuth 2.0", "Biometric FIDO2 / Passkeys"]
    },
    {
      id: "policy_engine",
      name: "Policy Engine",
      icon: Sliders,
      color: "from-purple-500 to-indigo-600",
      desc: "Continuous risk analysis engine evaluating user context, device health, and network origin in real time.",
      components: ["OPA (Open Policy Agent)", "Conditional Access", "Device Posture Check", "Adaptive Risk Scoring"]
    },
    {
      id: "zt_gateway",
      name: "Zero Trust Gateway",
      icon: ShieldCheck,
      color: "from-rose-500 to-red-600",
      desc: "Encrypted micro-segmentation proxy inspecting every session, dropping untrusted perimeter access by default.",
      components: ["Envoy Proxy / mTLS", "Identity Aware Proxy", "Web Application Firewall", "TLS 1.3 Inspection"]
    },
    {
      id: "workloads",
      name: "Applications & APIs",
      icon: Network,
      color: "from-amber-500 to-orange-600",
      desc: "Hardened microservices, API gateways, containers, and serverless functions executing least-privilege roles.",
      components: ["Kong / Azure API Gateway", "Kubernetes Pod Security", "Container Runtime Guard", "Encrypted Mesh"]
    },
    {
      id: "infra_data",
      name: "Cloud & Data Services",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      desc: "Multi-cloud infrastructure hardened with immutable IaC policies, KMS key rotation, and encrypted vaults.",
      components: ["AWS KMS / Azure Key Vault", "AES-256 Storage Encryption", "Immutable Cloud Backups", "Database Firewall"]
    },
    {
      id: "siem_soc",
      name: "SIEM & SOC",
      icon: Eye,
      color: "from-cyan-500 to-blue-600",
      desc: "Unified telemetry ingestion with automated security orchestration, threat hunting, and incident response playbooks.",
      components: ["Microsoft Sentinel", "Splunk / Elastic SIEM", "SOAR Auto-Remediation", "24/7 SOC Telemetry"]
    }
  ];

  // 3. Core Security Pillars
  const securityPillars = [
    { title: "Zero Trust", desc: "Never trust, always verify every request regardless of origin.", icon: ShieldCheck, connects: "Gateway" },
    { title: "Identity Management", desc: "Centralized identity governance, RBAC, and privileged access (PAM).", icon: Fingerprint, connects: "Entra ID" },
    { title: "Cloud Security", desc: "CSPM & CWPP guardrails protecting Azure, AWS, and GCP workloads.", icon: Cloud, connects: "Defender" },
    { title: "Application Security", desc: "SAST, DAST, and dependency scanning embedded directly into CI/CD.", icon: Code, connects: "DevSecOps" },
    { title: "API Security", desc: "OAuth 2.0 authorization, rate limiting, and OWASP Top 10 API protection.", icon: Network, connects: "WAF" },
    { title: "Data Security", desc: "End-to-end encryption at rest & in transit with hardware HSM key vaults.", icon: Lock, connects: "KMS Vault" },
    { title: "Governance", desc: "Policy as Code enforcing regulatory baselines automatically.", icon: FileCheck, connects: "Policy" },
    { title: "Threat Detection", desc: "SIEM log correlation and real-time behavioral anomaly alerting.", icon: Eye, connects: "Sentinel" },
    { title: "Compliance", desc: "Automated evidence collection for ISO 27001, SOC 2, HIPAA & GDPR.", icon: BookOpen, connects: "Audit" },
    { title: "DevSecOps", desc: "Automated secrets scanning, IaC validation, and container vulnerability scans.", icon: Workflow, connects: "Pipeline" }
  ];

  // 4. Zero Trust Architecture Cards & Flow
  const zeroTrustCards = [
    { title: "Verify Every Request", desc: "Explicit validation of identity, context, data classification, and device state." },
    { title: "Least Privilege Access", desc: "Just-In-Time (JIT) and Just-Enough-Access (JEA) role bindings." },
    { title: "Continuous Authentication", desc: "Re-evaluating security posture continuously throughout active sessions." },
    { title: "Device Validation", desc: "Assessing endpoint compliance, OS patches, and EDR agent status before access." },
    { title: "Conditional Access", desc: "Dynamic access rules based on IP location, threat intelligence, and user risk." },
    { title: "Network Segmentation", desc: "eBPF micro-segmentation preventing lateral movement inside internal networks." },
    { title: "Continuous Monitoring", desc: "Full inspection of all encrypted session traffic and API payload logs." },
    { title: "Adaptive Policies", desc: "ML-driven policy updates automatically throttling anomalous user behaviors." }
  ];

  const zeroTrustFlow = [
    { step: "User / Device", icon: Users, sub: "Context & Origin" },
    { step: "Identity Provider", icon: Fingerprint, sub: "Entra ID / Okta" },
    { step: "MFA Verification", icon: UserCheck, sub: "Biometric FIDO2" },
    { step: "Policy Engine", icon: Sliders, sub: "OPA / Risk Score" },
    { step: "Protected Workload", icon: ShieldCheck, sub: "Least-Privilege App" }
  ];

  // 5. Identity & Access Management Cards
  const identityCards = [
    { title: "Azure AD & Entra ID", desc: "Enterprise cloud identity integration with passwordless SSO.", icon: Cloud },
    { title: "Single Sign-On (SSO)", desc: "Centralized portal authentication across thousands of enterprise SaaS apps.", icon: UserCheck },
    { title: "Multi-Factor Auth (MFA)", desc: "Phishing-resistant MFA using FIDO2 hardware keys and authenticator apps.", icon: Fingerprint },
    { title: "Role-Based Access (RBAC)", desc: "Granular role assignment mapping job functions to minimal permissions.", icon: Key },
    { title: "Privileged Access (PAM)", desc: "Time-bound admin escalation with full session recording & break-glass access.", icon: ShieldAlert },
    { title: "Identity Governance", desc: "Automated access reviews, recertification workflows, and separation of duties.", icon: FileCheck },
    { title: "Lifecycle Management", desc: "Automated user onboarding, role transitions, and instant offboarding revocation.", icon: RefreshCw },
    { title: "Workload Identities", desc: "Managed identities for cloud VMs, pods, and microservices eliminating API keys.", icon: Cpu }
  ];

  // 6. Cloud & Infrastructure Security Cards
  const cloudSecCards = [
    { title: "Azure Defender", desc: "Unified workload protection and posture management across hybrid clouds.", icon: Shield },
    { title: "AWS Security Hub", desc: "Aggregated security alerts and automated compliance checks for AWS accounts.", icon: Cloud },
    { title: "Google Security Command", desc: "Centralized threat detection and asset inventory for GCP cloud resources.", icon: Globe },
    { title: "Cloud Firewalls", desc: "Next-gen virtual firewalls (NGFW) with intrusion prevention (IPS) rules.", icon: Server },
    { title: "Kubernetes Security", desc: "Pod security standards, RBAC hardening, and Cilium eBPF network policies.", icon: Container },
    { title: "Network Security", desc: "Private Link endpoints, Bastion hosts, and zero-public IP architecture.", icon: Network },
    { title: "Secret Management", desc: "Hardware-backed key vaults (Key Vault, HashiCorp Vault) with auto rotation.", icon: Key },
    { title: "Infrastructure Hardening", desc: "CIS benchmark compliance applied to Linux/Windows VM gold images.", icon: HardDrive }
  ];

  // 7. Application & API Security Cards
  const appSecCards = [
    { title: "Secure SDLC", desc: "Threat modeling and security gates integrated into development sprints.", icon: Workflow },
    { title: "API Gateway Security", desc: "Centralized OAuth 2.0 validation, rate limiting, and payload schema checks.", icon: Network },
    { title: "OAuth 2.0 & OIDC", desc: "Standardized token authorization flows with JWT signature verification.", icon: Key },
    { title: "Web Application Firewall", desc: "WAF guardrails filtering SQL injection, XSS, and bot attacks at the edge.", icon: ShieldCheck },
    { title: "Dependency Scanning", desc: "Software Bill of Materials (SBOM) generation & CVE tracking with Snyk.", icon: FileCode },
    { title: "Code Analysis (SAST)", desc: "Static analysis scanning application source code for security flaws on PR commit.", icon: Code },
    { title: "Dynamic Testing (DAST)", desc: "Automated pen-testing scanning running web endpoints during staging builds.", icon: Search },
    { title: "Runtime Protection", desc: "eBPF kernel-level runtime protection blocking unauthorized system calls.", icon: Cpu }
  ];

  // 8. Data Protection & Encryption Cards
  const dataSecCards = [
    { title: "Encryption at Rest", desc: "AES-256 transparent data encryption across storage accounts & databases.", icon: Lock },
    { title: "Encryption in Transit", desc: "Mandatory TLS 1.3 encryption across all internal and public network links.", icon: Network },
    { title: "Key Management (KMS)", desc: "Customer-Managed Keys (CMK) backed by FIPS 140-2 Level 3 HSMs.", icon: Key },
    { title: "Tokenization", desc: "Replacing credit cards and PII with cryptographically secure tokens.", icon: Fingerprint },
    { title: "Backup Security", desc: "Immutable air-gapped backups protected against ransomware deletion.", icon: Database },
    { title: "Data Classification", desc: "Automated AI scanning identifying Confidential, PII, and Internal documents.", icon: FileSearch },
    { title: "Data Loss Prevention", desc: "DLP policies preventing sensitive file uploads to unauthorized endpoints.", icon: ShieldAlert },
    { title: "Secure Storage", desc: "Private storage buckets with public access block & blob versioning enabled.", icon: HardDrive }
  ];

  // 9. Compliance & Governance Cards
  const complianceCards = [
    { title: "ISO 27001", desc: "Automated ISMS control mapping and evidence generation dashboards.", icon: FileCheck },
    { title: "SOC 2 Type II", desc: "Continuous monitoring of cloud controls guaranteeing audit readiness.", icon: ShieldCheck },
    { title: "GDPR", desc: "Data residency routing, right-to-be-forgotten APIs, and automated data masking.", icon: Globe },
    { title: "HIPAA", desc: "ePHI encryption, access audit logging, and BAA compliant infrastructure.", icon: BookOpen },
    { title: "PCI DSS 4.0", desc: "Payment card data environment (CDE) isolation and network segmentation.", icon: Lock },
    { title: "CIS Benchmarks", desc: "Automated CIS Level 1 & Level 2 audit scanning for multi-cloud accounts.", icon: CheckCircle2 },
    { title: "NIST CSF", desc: "Identify, Protect, Detect, Respond, and Recover framework alignment.", icon: Shield },
    { title: "Azure Policy", desc: "Preventative policy guardrails enforcing compliance at resource creation.", icon: Sliders }
  ];

  // 10. Security Automation Pipeline
  const secAutomationSteps = [
    { step: 1, name: "Git Commit", short: "Pre-Commit", icon: GitBranch, desc: "Local pre-commit hooks scan for hardcoded API keys and secrets.", snippet: "# Gitleaks pre-commit check\ngitleaks protect --staged --verbose -> Status: PASSED (0 secrets found)" },
    { step: 2, name: "Code Scan", short: "SAST", icon: Code, desc: "Static Application Security Testing checks source code for OWASP Top 10 flaws.", snippet: "semgrep --config p/security-audit src/ -> Scan completed: 0 high, 0 critical" },
    { step: 3, name: "Secrets Detection", short: "Secret Guard", icon: Key, desc: "Server-side pipeline verify no private keys or tokens enter git history.", snippet: "git-defender scan PR #412 -> Clean (No exposed tokens detected)" },
    { step: 4, name: "Container Scan", short: "Trivy Scan", icon: Container, desc: "Trivy vulnerability scanner inspects container base images for OS CVEs.", snippet: "trivy image devopstrio/api:v2.4 -> 0 Critical, 0 High CVEs allowed" },
    { step: 5, name: "IaC Validation", short: "Checkov / OPA", icon: Sliders, desc: "Terraform & Bicep scripts validated against security & CIS policy baselines.", snippet: "checkov -d ./terraform -> Passed: 48, Failed: 0, Suppressed: 0" },
    { step: 6, name: "Compliance Check", short: "Gatekeeper", icon: FileCheck, desc: "Kubernetes OPA Gatekeeper ensures pods meet Security Context constraints.", snippet: "opa eval --data policies/ k8s-manifest.yaml -> Result: Allowed" },
    { step: 7, name: "Deployment", short: "GitOps Deploy", icon: Zap, desc: "Signed container images deployed to production with mTLS mesh active.", snippet: "cosign verify k8s.gcr.io/api@sha256:... -> Signature Verified -> Deployed" },
    { step: 8, name: "Continuous Monitoring", short: "Runtime SIEM", icon: Activity, desc: "Falco kernel agent monitors runtime syscalls; Sentinel receives audit logs.", snippet: "falco --config /etc/falco.yaml -> Monitor Active [0 anomalous syscalls]" }
  ];

  // 11. Technology Stack Data
  const techStackData = {
    "Identity": [
      { name: "Microsoft Entra ID", desc: "Enterprise cloud identity & access management.", icon: Cloud },
      { name: "Azure AD", desc: "Azure native identity provider with SSO and MFA.", icon: Shield },
      { name: "Keycloak", desc: "Open-source identity and access management system.", icon: Key },
      { name: "Okta", desc: "Leading cloud identity platform for enterprise SSO.", icon: Fingerprint }
    ],
    "Cloud": [
      { name: "Azure Security", desc: "Azure Defender and Policy compliance guardrails.", icon: Cloud },
      { name: "AWS Security", desc: "AWS Security Hub, GuardDuty, and KMS key vault.", icon: Server },
      { name: "Google Cloud", desc: "GCP Security Command Center and IAM policies.", icon: Globe },
      { name: "Oracle Cloud", desc: "OCI Security Zones and Data Safe management.", icon: Database }
    ],
    "Containers": [
      { name: "Kubernetes", desc: "Container orchestration with RBAC and Pod Security.", icon: Container },
      { name: "Docker", desc: "Containerization runtime hardened with distroless images.", icon: Cpu },
      { name: "Helm", desc: "Kubernetes package manager with signed releases.", icon: Workflow }
    ],
    "Security": [
      { name: "Microsoft Defender", desc: "XDR endpoint and multi-cloud workload protection.", icon: ShieldCheck },
      { name: "Prisma Cloud", desc: "Palo Alto Networks Cloud Native Application Protection.", icon: Cloud },
      { name: "Cisco Secure", desc: "Enterprise network security and Zero Trust architecture.", icon: Network },
      { name: "CrowdStrike", desc: "Endpoint detection and response (EDR) agent.", icon: Activity },
      { name: "Trivy", desc: "Container and filesystem vulnerability scanner.", icon: Search },
      { name: "OWASP ZAP", desc: "Automated dynamic application security testing.", icon: Terminal },
      { name: "Checkov", desc: "Infrastructure as Code (IaC) security scanner.", icon: Sliders }
    ],
    "Monitoring": [
      { name: "Microsoft Sentinel", desc: "Cloud-native SIEM and SOAR analytics platform.", icon: Eye },
      { name: "Splunk", desc: "Enterprise SIEM log correlation and threat analysis.", icon: Database },
      { name: "Elastic SIEM", desc: "Open search-powered threat hunting and logging.", icon: Activity },
      { name: "Grafana", desc: "Real-time security metrics dashboard and alerts.", icon: BarChart3 },
      { name: "Prometheus", desc: "Container telemetry metrics collection engine.", icon: Zap }
    ],
    "DevSecOps": [
      { name: "GitHub Adv Security", desc: "Secret scanning, Dependabot, and CodeQL SAST.", icon: GitBranch },
      { name: "Azure DevOps", desc: "Secure CI/CD pipelines with service connection gates.", icon: Workflow },
      { name: "GitHub Actions", desc: "Automated workflow runners with OIDC federation.", icon: Code },
      { name: "Terraform", desc: "Infrastructure as Code with automated policy checks.", icon: Sliders }
    ]
  };

  // 12. Business Outcomes KPI Cards
  const businessOutcomes = [
    { value: "Zero Trust", title: "Enterprise Security", desc: "Eliminate perimeter assumptions with continuous cryptographic identity verification.", highlight: "from-rose-500 to-red-600" },
    { value: "Continuous", title: "Compliance", desc: "Automated continuous evidence gathering for ISO 27001, SOC 2, HIPAA, and GDPR.", highlight: "from-blue-500 to-indigo-600" },
    { value: "Secure", title: "Cloud Operations", desc: "Harden Azure, AWS, and GCP workloads with automated CSPM policy baselines.", highlight: "from-emerald-500 to-teal-600" },
    { value: "Automated", title: "Threat Detection", desc: "24/7 SIEM log correlation and SOAR playbooks auto-remediating threat vectors.", highlight: "from-purple-500 to-rose-500" },
    { value: "Reduced", title: "Security Risks", desc: "Zero hardcoded secrets, automated vulnerability patching, and micro-segmentation.", highlight: "from-amber-500 to-orange-600" },
    { value: "Enterprise", title: "Governance", desc: "Complete audit visibility and Policy as Code governing multi-cloud deployments.", highlight: "from-cyan-500 to-blue-600" }
  ];

  // 13. Use Cases
  const useCases = [
    { title: "Enterprise Cloud Security", desc: "Multi-cloud hardening across Azure, AWS, and GCP with automated CSPM guardrails.", icon: Cloud },
    { title: "Secure Landing Zones", desc: "Pre-configured landing zone blueprints with zero-trust networking and default KMS encryption.", icon: Layers },
    { title: "Identity Modernization", desc: "Migrating legacy LDAP/AD to Microsoft Entra ID with phishing-resistant FIDO2 MFA.", icon: Fingerprint },
    { title: "API Protection", desc: "Securing public REST and GraphQL gateways with OAuth 2.0, WAF, and rate limits.", icon: Network },
    { title: "DevSecOps Implementation", desc: "Embedding automated SAST, DAST, dependency, and secrets scanning into GitHub pipelines.", icon: Workflow },
    { title: "Financial Compliance", desc: "Building PCI DSS 4.0 compliant credit card processing environments with data tokenization.", icon: Lock },
    { title: "Healthcare Security", desc: "HIPAA compliant ePHI data vaults with audit logging and encrypted storage.", icon: BookOpen },
    { title: "Government Security", desc: "NIST SP 800-53 and FedRAMP alignment for public sector cloud workloads.", icon: ShieldCheck }
  ];

  // 14. Related Accelerators
  const relatedAccelerators = [
    { title: "Cloud Accelerator", desc: "Reusable IaC modules for rapid multi-cloud foundation and network deployment.", href: "/ecosystem/accelerators-frameworks/cloud-accelerator", tag: "Cloud IaC" },
    { title: "DevOps Accelerator", desc: "Enterprise CI/CD pipeline templates, GitOps automation, and Kubernetes manifests.", href: "/ecosystem/accelerators-frameworks/devops-accelerator", tag: "DevOps CI/CD" },
    { title: "AI Framework", desc: "Enterprise AI application foundation for LLMs, RAG, vector databases, and MLOps.", href: "/ecosystem/accelerators-frameworks/ai-framework", tag: "AI Framework" },
    { title: "Data Framework", desc: "Modern data platform blueprints, warehouse lakehouses, and analytics pipelines.", href: "/ecosystem/accelerators-frameworks/data-framework", tag: "Data Platform" },
    { title: "Landing Zone Portal", desc: "Explore enterprise cloud landing zone blueprints and IaC repository directory.", href: "/ecosystem/accelerators-frameworks/landing-zone", tag: "Landing Zone" }
  ];

  // 15. FAQ List
  const faqs = [
    {
      q: "What is the Devopstrio Security Framework?",
      a: "The Devopstrio Security Framework is an enterprise-ready engineering foundation providing reusable architectures, identity management governance, cloud security controls, DevSecOps pipelines, and compliance automation. It helps organizations secure applications, infrastructure, and APIs by default."
    },
    {
      q: "Does it support Zero Trust Architecture?",
      a: "Yes. The framework implements Zero Trust principles—enforcing explicit identity verification, least privilege access, continuous session authentication, and network micro-segmentation across all cloud and application layers."
    },
    {
      q: "Which compliance standards are supported out of the box?",
      a: "We provide pre-mapped Policy as Code controls and automated evidence dashboards for ISO 27001, SOC 2 Type II, GDPR, HIPAA, PCI DSS 4.0, CIS Benchmarks, and NIST Cybersecurity Framework."
    },
    {
      q: "Can it secure Kubernetes and container workloads?",
      a: "Yes. It features Kubernetes Pod Security Standards, Cilium eBPF network micro-segmentation, image signature verification with Cosign, automated container vulnerability scanning with Trivy, and runtime anomaly detection with Falco."
    },
    {
      q: "Does it integrate with Microsoft Defender & Sentinel?",
      a: "Yes. The framework natively integrates with Microsoft Defender for Cloud, Microsoft Entra ID, Microsoft Sentinel SIEM, AWS Security Hub, and Palo Alto Prisma Cloud for aggregated threat detection."
    },
    {
      q: "Can existing cloud environments be onboarded to the framework?",
      a: "Yes. Our framework includes assessment scripts that discover existing cloud configurations, flag compliance gaps, and apply non-disruptive security guardrails across existing Azure, AWS, and GCP subscriptions."
    },
    {
      q: "Does it include DevSecOps pipeline automation?",
      a: "Yes. It embeds pre-commit hooks, secret scanning (Gitleaks), static code analysis (Semgrep/CodeQL), dependency scanning (Snyk), and IaC validation (Checkov) directly into GitHub Actions or Azure DevOps pipelines."
    },
    {
      q: "How do you automate compliance evidence collection?",
      a: "We deploy CSPM (Cloud Security Posture Management) agents and Open Policy Agent (OPA) compliance engines that automatically continuously evaluate multi-cloud configurations and export audit-ready evidence artifacts."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Ambient Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* 1. HERO SECTION */}
      <Hero
        badge="ACCELERATORS & FRAMEWORKS"
        colorBends={true}
        colorBendsColors={["#10b981", "#06b6d4", "#f43f5e"]}
        title={
          <>
            Devopstrio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-600">
              Security Framework
            </span>
          </>
        }
        subtitle="Build secure-by-design enterprise platforms using Zero Trust architecture, identity governance, cloud security, DevSecOps automation, and compliance-ready security controls."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ACCELERATORS & FRAMEWORKS", href: "/ecosystem/accelerators-frameworks" },
          { label: "SECURITY FRAMEWORK" }
        ]}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Hero Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Zero Trust",
              "DevSecOps",
              "Cloud Security",
              "Identity & Access",
              "Compliance",
              "Security Automation"
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById("architecture");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 cursor-pointer"
            >
              Explore Security Framework
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              Schedule a Security Assessment
            </button>
          </div>
        </div>
      </Hero>

      {/* 2. SECURITY FRAMEWORK OVERVIEW */}
      <section className="w-full py-20 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block">
              FOUNDATIONAL OVERVIEW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Enterprise Security by Design
            </h2>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
              The Devopstrio Security Framework provides reusable architectures, governance policies, cloud security controls, identity management, and automation templates to help organizations secure applications, infrastructure, and digital operations at scale.
            </p>
          </Reveal>

          {/* Overview Highlights 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Zero Trust Architecture", icon: ShieldCheck, desc: "Never trust, always verify every connection across multi-cloud." },
              { title: "Identity Governance", icon: Fingerprint, desc: "Microsoft Entra ID, passwordless MFA, and privileged access management." },
              { title: "DevSecOps Pipelines", icon: Workflow, desc: "Automated secret scanning, SAST, DAST, and container vulnerability scans." },
              { title: "Continuous Compliance", icon: FileCheck, desc: "Automated control evidence collection for ISO 27001, SOC 2 & HIPAA." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS SECURITY CHALLENGES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE RISKS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Challenges We Address
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Eliminate identity complexity, cloud vulnerabilities, compliance gaps, and security misconfigurations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessChallenges.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-2xl hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-rose-500" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-bold">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECURITY FRAMEWORK ARCHITECTURE */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE BLUEPRINT
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security Framework Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 6-layer enterprise security stack from identities to SIEM threat response.
            </p>
          </Reveal>

          {/* Layer Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
            {architectureLayers.map((layer) => {
              const isSelected = activeArchLayer === layer.name;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveArchLayer(layer.name)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <Icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold block truncate">{layer.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Detail Card */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
            {architectureLayers.map((layer) => {
              if (layer.name !== activeArchLayer) return null;
              const Icon = layer.icon;
              return (
                <div key={layer.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-medium">
                      {layer.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                    {layer.components.map((comp, idx) => (
                      <div key={idx} className="p-4 bg-black rounded-xl border border-zinc-850 flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                        <span className="text-xs font-bold text-zinc-200">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CORE SECURITY PILLARS */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              10 CORE PILLARS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Core Security Pillars
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Comprehensive defense-in-depth framework across every digital layer.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-rose-400 border border-zinc-800 font-bold self-start uppercase">
                    {pillar.connects}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ZERO TRUST ARCHITECTURE */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              NEVER TRUST, ALWAYS VERIFY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Zero Trust Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Eliminate trusted perimeters with strict cryptographic identity checks on every session.
            </p>
          </Reveal>

          {/* Zero Trust Workflow Diagram */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {zeroTrustFlow.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-black border border-zinc-900 w-full md:w-48">
                  <step.icon className="w-5 h-5 text-rose-500 mb-2" />
                  <span className="text-xs font-bold text-white">{step.step}</span>
                  <span className="text-[10px] text-zinc-400 font-mono">{step.sub}</span>
                </div>
                {i < 4 && <ArrowRight className="w-4 h-4 text-rose-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zeroTrustCards.map((zt, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {zt.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {zt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IDENTITY & ACCESS MANAGEMENT */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              IDENTITY GOVERNANCE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Identity & Access Management
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Centralized identity controls, passwordless MFA, and privileged session governance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {identityCards.map((idCard, idx) => {
              const Icon = idCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {idCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {idCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLOUD & INFRASTRUCTURE SECURITY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              WORKLOAD HARDENING
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Cloud & Infrastructure Security
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Protection for Azure Defender, AWS Security Hub, Google Cloud, and Kubernetes clusters.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudSecCards.map((cloudCard, idx) => {
              const Icon = cloudCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {cloudCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {cloudCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. APPLICATION & API SECURITY */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              SECURE SDLC & APIS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Application & API Security
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Embedding WAF, OAuth 2.0, SAST/DAST, and runtime container protection.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appSecCards.map((appCard, idx) => {
              const Icon = appCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {appCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {appCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. DATA PROTECTION & ENCRYPTION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CRYPTOGRAPHIC SAFEGUARDS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Data Protection & Encryption
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              AES-256 encryption, TLS 1.3, hardware key management, and Data Loss Prevention (DLP).
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSecCards.map((dataCard, idx) => {
              const Icon = dataCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {dataCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {dataCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. COMPLIANCE & GOVERNANCE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REGULATORY FRAMEWORKS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Compliance & Governance
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Automated compliance evidence collection for global security & privacy standards.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceCards.map((compCard, idx) => {
              const Icon = compCard.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {compCard.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {compCard.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. SECURITY AUTOMATION */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              DEVSECOPS PIPELINE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Security Automation
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Interactive 8-stage automated security scanner flow from commit to runtime SIEM.
            </p>
          </Reveal>

          {/* Pipeline Stage Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-8 gap-2 mb-8">
            {secAutomationSteps.map((stg, idx) => {
              const isCurrent = activePipelineStep === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[9px] font-mono text-rose-400 font-bold block mb-0.5">
                    Step {stg.step}
                  </span>
                  <span className="text-xs font-bold block truncate">{stg.short}</span>
                </button>
              );
            })}
          </div>

          {/* Inspector Panel */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                Step {secAutomationSteps[activePipelineStep].step} of 8: {secAutomationSteps[activePipelineStep].short}
              </span>
              <h3 className="text-xl font-bold text-white">
                {secAutomationSteps[activePipelineStep].name}
              </h3>
              <p className="text-xs md:text-sm text-zinc-300 font-medium leading-relaxed">
                {secAutomationSteps[activePipelineStep].desc}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActivePipelineStep((prev) => (prev > 0 ? prev - 1 : 7))}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-300 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActivePipelineStep((prev) => (prev + 1) % 8)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black rounded-2xl p-5 border border-zinc-900 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
              <div className="flex justify-between text-zinc-500 text-[10px] mb-3 pb-2 border-b border-zinc-900">
                <span>security-step-{secAutomationSteps[activePipelineStep].step}.sh</span>
                <span>PIPELINE LOG</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {secAutomationSteps[activePipelineStep].snippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TECHNOLOGY STACK */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              SECURITY ECOSYSTEM
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Integrations across identity platforms, cloud providers, container runtimes, SIEM, and DevSecOps tooling.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(techStackData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTechCategory === cat
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards for active category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackData[activeTechCategory as keyof typeof techStackData]?.map((tech: any, idx: number) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. BUSINESS OUTCOMES (Large KPI Cards) */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              MEASURABLE BENEFITS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Business Outcomes
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Guarantee continuous compliance, zero-trust isolation, and operational cyber resilience.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-950/80 border border-zinc-800 rounded-3xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div>
                  <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${outcome.highlight} tracking-tight block mb-3`}>
                    {outcome.value}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {outcome.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. USE CASES */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REAL-WORLD BLUEPRINTS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Use Cases
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Security architectures tailored for enterprise domains, financial services, healthcare, and government.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. RELATED ACCELERATORS */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              ECOSYSTEM SYNERGY
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Related Accelerators
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Explore complementary frameworks in the Devopstrio engineering ecosystem.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAccelerators.map((acc, idx) => (
              <Link
                key={idx}
                href={acc.href}
                className="p-6 bg-zinc-950/60 border border-zinc-800 rounded-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {acc.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                    {acc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {acc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-[#030303] border-b border-zinc-900/80 relative">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
          <Reveal className="max-w-3xl mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Everything you need to know
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-semibold">
              Have questions about the Devopstrio Security Framework? Check out answers to common inquiries below.
            </p>
          </Reveal>

          {/* Accordion List */}
          <div className="flex flex-col border-t border-zinc-900">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-900 py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-zinc-200 group-hover:text-rose-400 transition-colors">
                      {faq.q}
                    </span>
                    <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 shrink-0">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-xs md:text-sm text-zinc-400 leading-relaxed font-medium max-w-4xl animate-fadeIn">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 18. CTA SECTION */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-12 xl:px-8 relative z-10 space-y-8">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-2">
              BUILD RESILIENT DIGITAL PLATFORMS
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Secure Your Enterprise from Day One
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Adopt the Devopstrio Security Framework to build resilient, compliant, and secure digital platforms with enterprise-grade governance and automation.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-rose-600/30 cursor-pointer hover:scale-105"
            >
              Book a Security Consultation
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4 text-rose-500" />
              Download Security Architecture
            </button>
          </div>
        </div>
      </section>

      {/* ASSESSMENT / CONSULTATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            <button
              onClick={() => {
                setModalOpen(false);
                setModalSubmitted(false);
              }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Consultation Requested!</h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  Thank you for your interest in the Devopstrio Security Framework. Our principal security architects will contact you within 24 hours to schedule your enterprise assessment.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setModalSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-white rounded-full transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-500 font-bold uppercase block mb-1">
                    DEVOPSTRIO SECURITY ASSESSMENT
                  </span>
                  <h3 className="text-xl font-bold text-white">Schedule a Security Consultation</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Primary Security Focus</label>
                    <select
                      value={formData.securityNeed}
                      onChange={(e) => setFormData({ ...formData, securityNeed: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="Zero Trust Architecture">Zero Trust Architecture & Network Segmentation</option>
                      <option value="Identity & Access Management">Identity Governance (Entra ID / Okta)</option>
                      <option value="Cloud Security (CSPM)">Cloud Security Posture (Defender / Prisma)</option>
                      <option value="DevSecOps & Automation">DevSecOps Pipeline Security & Secret Scanning</option>
                      <option value="Compliance & Audit">Compliance Automation (ISO 27001 / SOC 2 / HIPAA)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">Architecture Overview</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current cloud infrastructure or compliance goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
