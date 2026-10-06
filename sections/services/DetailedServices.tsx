"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo } from "./BrandLogo";
import {
  FiSearch,
  FiZap,
  FiShield,
  FiCpu,
  FiArrowRight,
  FiGrid,
  FiActivity,
  FiDatabase,
  FiMonitor,
  FiCode,
  FiTarget,
  FiBox,
  FiLayers,
  FiBriefcase,
  FiUser,
  FiExternalLink,
  FiBook,
  FiFileText,
  FiBookOpen,
  FiMap,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaAws,
  FaMicrosoft,
  FaGithub,
  FaGitlab,
  FaJenkins,
  FaBitbucket,
  FaSlack,
  FaGoogle,
  FaDocker,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiDatadog,
  SiSnowflake,
  SiDatabricks,
  SiSplunk,
  SiDynatrace,
  SiGrafana,
  SiPrometheus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiOkta,
  SiSnyk,
  SiPagerduty,
  SiPaloaltonetworks,
  SiAnsible,
  SiArgo,
  SiHelm,
  SiConfluence,
  SiElastic,
  SiCisco,
  SiCloudflare,
  SiVault,
  SiJira,
  SiAnthropic,
  SiGooglecloud,
  SiGooglegemini,
  SiGooglechat,
  SiZendesk,
  SiOpsgenie,
  SiQualys,
  SiDigitalocean,
  SiAlibabacloud,
  SiCircleci,
  SiOctopusdeploy,
  SiRedhat,
  SiRedhatopenshift,
  SiFortinet,
  SiNewrelic,
  SiSumologic,
  SiApachespark,
  SiApacheairflow,
  SiNeo4J,
  SiClickhouse,
  SiHuggingface,
  SiHackerone,
  SiStackhawk,
  SiCheckmarx,
  SiSonarqubeserver,
  SiBuildkite,
  SiTravisci,
  SiTeamcity,
  SiJetbrains,
  SiHashicorp,
  SiVercel,
  SiChainguard,
  SiClickup,
  SiLinear,
    SiBackstage,
  SiBamboo,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { BiLogoMicrosoftTeams } from "react-icons/bi";


/* ---------- Authentic Brand SVG Icons ---------- */
const ServiceNowIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="#81B5A1" strokeWidth="3" fill="none" />
    <circle cx="12" cy="12" r="4.5" fill="#81B5A1" />
  </svg>
);

const CrowdStrikeIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#EB0029" className={className}>
    <path d="M12 2L2 19.5h5.5L12 11l4.5 8.5H22L12 2zm0 6l2.5 4.5h-5L12 8z" />
  </svg>
);

const SentinelOneIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#6B38FB" className={className}>
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.5l6 3.3v6.4l-6 3.3-6-3.3V8.8l6-3.3z" />
    <path d="M12 8l3 1.8v3.4L12 15l-3-1.8v-3.4L12 8z" fill="#9065FF" />
  </svg>
);

const TenableIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#004F9F" className={className}>
    <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4zm0 4a6 6 0 0 1 6 6c0 2.5-1.5 4.7-3.7 5.6L12 12V6z" />
  </svg>
);

const Rapid7Icon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#F35B25" className={className}>
    <path d="M3 4h18v4l-9 12H7l7-9.5H3V4z" />
  </svg>
);

const CyberArkIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#001871" className={className}>
    <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 3.6L5.5 9.3v6.2l6.5 3.8 6.5-3.8V9.3L12 5.6z" />
    <circle cx="12" cy="12" r="3" fill="#00A3E0" />
  </svg>
);

const SemgrepIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#2B6CB0" className={className}>
    <circle cx="10" cy="10" r="7" stroke="#2B6CB0" strokeWidth="2.5" fill="none" />
    <path d="M15 15l6 6" stroke="#2B6CB0" strokeWidth="3" strokeLinecap="round" />
    <path d="M7 10l2 2 4-4" stroke="#38A169" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ZscalerIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#0072CE" className={className}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

const DrataIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#4F46E5" className={className}>
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" />
  </svg>
);

const VantaIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#7C3AED" className={className}>
    <circle cx="12" cy="12" r="10" fill="#7C3AED" />
    <path d="M7 9l5 8 5-8h-3l-2 3.5L10 9H7z" fill="#FFFFFF" />
  </svg>
);

const CohesityIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#00C49F" className={className}>
    <rect x="3" y="3" width="8" height="8" rx="2" />
    <rect x="13" y="3" width="8" height="8" rx="2" />
    <rect x="3" y="13" width="8" height="8" rx="2" />
    <rect x="13" y="13" width="8" height="8" rx="2" fill="#008080" />
  </svg>
);

const CommvaultIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#0070AD" className={className}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
    <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" />
  </svg>
);

const BigIDIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#D92683" className={className}>
    <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm-4 7v6h3a3 3 0 000-6H8zm6 0v6h2V9h-2z" />
  </svg>
);

const ArcticWolfIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#00A3E0" className={className}>
    <path d="M12 2L4 9l2 11 6 3 6-3 2-11-8-7zm0 4.5l4 3.5-1 6-3 1.5-3-1.5-1-6 4-3.5z" />
  </svg>
);

const RedCanaryIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#E53E3E" className={className}>
    <path d="M12 3a9 9 0 00-9 9c0 3.8 2.4 7 5.7 8.3L12 16l3.3 4.3c3.3-1.3 5.7-4.5 5.7-8.3a9 9 0 00-9-9zm0 5a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

const CatoIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#F97316" className={className}>
    <polygon points="12,2 22,8.5 22,17.5 12,24 2,17.5 2,8.5" stroke="#F97316" strokeWidth="2" fill="none" />
    <polygon points="12,6 18,10 18,15 12,19 6,15 6,10" fill="#F97316" />
  </svg>
);

const AviatrixIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#FF4500" className={className}>
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

const CheckPointIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#EC1C24" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2V7h2v9z" />
  </svg>
);

const TorqIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#8B5CF6" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const WorkatoIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#00B4D8" className={className}>
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M6 12l12-6M6 12l12 6" stroke="#00B4D8" strokeWidth="2" />
  </svg>
);

const FreshServiceIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#00C988" className={className}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75C5 8.25 4 11 4 11s2.5-1 6-1c4 0 7 1 7 1z" />
  </svg>
);

const IBMIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#054ADA" className={className}>
    <path d="M2 5h5v2H2zm0 4h5v2H2zm0 4h5v2H2zm0 4h5v2H2zm8-12h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4zm7-12h5v2h-5zm0 4h5v2h-5zm0 4h5v2h-5zm0 4h5v2h-5z" />
  </svg>
);

const MondayIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="12" r="3" fill="#F65B66" />
    <circle cx="12" cy="12" r="3" fill="#FFCC00" />
    <circle cx="18" cy="12" r="3" fill="#00CA72" />
  </svg>
);

interface IntegrationItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  desc: string;
  isNew?: boolean;
  trending?: boolean;
  ai?: boolean;
}

const integrations: IntegrationItem[] = [
// --- TOP THREE POPULAR (Azure, Jira, Slack) ---
  { name: "Azure", category: "Cloud Services", icon: <FaMicrosoft style={{ color: "#0078D4" }} />, trending: true, desc: "Connect Devopstrio with Azure to manage resources, identities, and cloud posture across your subscriptions." },
  { name: "Jira", category: "Ticketing & Messaging", icon: <SiJira style={{ color: "#0052CC" }} />, trending: true, desc: "Open and update tickets on Devopstrio Issues in your projects to streamline your remediation workflow." },
  { name: "Slack", category: "Ticketing & Messaging", icon: <FaSlack style={{ color: "#4A154B" }} />, trending: true, desc: "Send Slack messages to your security channels using SlackBot for real-time threat alerts." },

  // --- API SECURITY ---
  {
    name: "Firetail",
    category: "API Security",
    icon: <FiZap className="text-amber-400" />,
    desc: "Pull Devopstrio inventory to firetail for API discovery and enrich Devopstrio with API runtime events"
  },
  {
    name: "Google Apigee",
    category: "API Security",
    icon: <SiGooglecloud style={{ color: "#4285F4" }} />,
    desc: "Fetch API Endpoints from Google Apigee to the Devopstrio Security Graph",
    isNew: true
  },
  {
    name: "Noname",
    category: "API Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull Devopstrio Issues into Noname for prioritization related to APIs"
  },

  // --- API Security Scanners ---
  {
    name: "CyCognito",
    category: "API Security Scanners",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Enrich Devopstrio with CyCognito's DAST findings to identify and prioritize external-facing API risks."
  },
  {
    name: "Equixly",
    category: "API Security Scanners",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Enrich DAST findings from Equixly into Devopstrio for comprehensive API vulnerability coverage.",
    isNew: true
  },
  {
    name: "HackerOne",
    category: "API Security Scanners",
    icon: <SiHackerone style={{ color: "#EB144C" }} />,
    desc: "Pull HackerOne pen test and bug bounty findings into Devopstrio to see exploitable vulnerabilities.",
    isNew: true
  },
  {
    name: "Invicti (Netsparker)",
    category: "API Security Scanners",
    icon: <SiApachespark className="text-[#E25A1C]" />,
    desc: "Fetch Invicti's DAST findings about publicly exposed Application Endpoint objects into Devopstrio."
  },
  {
    name: "Salt Security",
    category: "API Security Scanners",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Enrich Devopstrio with runtime events and findings from Salt Security to protect against API-based threats."
  },
  {
    name: "StackHawk",
    category: "API Security Scanners",
    icon: <SiStackhawk style={{ color: "#FDB515" }} />,
    desc: "Enrich DAST findings from StackHawk into Devopstrio for automated API security testing in production.",
    isNew: true
  },
  {
    name: "Traceable by Harness",
    category: "API Security Scanners",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Integrate with Traceable to prioritize API risk and send API malicious runtime events to Devopstrio."
  },
  // --- Application Security ---
  {
    name: "Alma Security",
    category: "Application Security",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Enrich Devopstrio with runtime events from Alma Security to provide deep visibility into application execution.",
    isNew: true
  },
  {
    name: "Apiiro",
    category: "Application Security",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Ingest Devopstrio container image vulnerabilities to Apiiro for comprehensive code-to-cloud risk context."
  },
  {
    name: "Black Duck",
    category: "Application Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull Devopstrio Issues into Black Duck SRM for unified AppSec triage and open-source risk management.",
    isNew: true
  },
  {
    name: "Boostsecurity",
    category: "Application Security",
    icon: <FiBox className="text-orange-400" />,
    desc: "Pull container resources and security findings into Boostsecurity for centralized dev-first security."
  },
  {
    name: "Crash Override",
    category: "Application Security",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Send cloud resources and security posture data to Crash Override for unified risk modeling."
  },
  {
    name: "DefectDojo",
    category: "Application Security",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Pull issues and vulnerabilities into DefectDojo to centralize and automate your vulnerability management."
  },
  {
    name: "Legit Security",
    category: "Application Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send Devopstrio container image vulnerabilities and inventory to Legit for unified code-to-cloud risk context."
  },
  {
    name: "OXSecurity",
    category: "Application Security",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Issues into OX Security to consolidate findings across tools and automate supply chain security."
  },
  {
    name: "Tromzo",
    category: "Application Security",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send Devopstrio Issues to Tromzo and automate the remediation lifecycle of security findings."
  },
  {
    name: "Tumeryk",
    category: "Application Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send cloud configuration findings to Tumeryk to bridge the gap between cloud and application security."
  },
  {
    name: "Veracode ASPM",
    category: "Application Security",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull devopstrio issues and vulnerabilities to VRM for multi-stage prioritization and response."
  },
  // --- Application Security Scanners ---
  {
    name: "Checkmarx",
    category: "Application Security Scanners",
    icon: <SiCheckmarx style={{ color: "#00843D" }} />,
    desc: "Enrich with Checkmarx SAST finding and pull Devopstrio cloud inventory and assets for remediation."
  },
  {
    name: "Contrast Security",
    category: "Application Security Scanners",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Enrich Devopstrio with Contrast IAST findings for real-time application security testing."
  },
  {
    name: "Cycode",
    category: "Application Security Scanners",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send vulnerabilities Devopstrio detects to Cycode to secure your software supply chain."
  },
  {
    name: "Endor Labs",
    category: "Application Security Scanners",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "The integration enriches Devopstrio with both SCA and SAST findings from Endor Labs platform.",
    isNew: true
  },
  {
    name: "Escape",
    category: "Application Security Scanners",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Pull the Devopstrio inventory into Escape for application testing and enrich Devopstrio with Escape's DAST findings."
  },
  {
    name: "Harness SAST and SCA",
    category: "Application Security Scanners",
    icon: <FiZap className="text-amber-400" />,
    desc: "Enrich Devopstrio with Harness SAST and SCA findings to identify code-level vulnerabilities."
  },
  {
    name: "Jit",
    category: "Application Security Scanners",
    icon: <FiCode className="text-indigo-400" />,
    desc: "Enrich Devopstrio with Jit SAST findings and pull Devopstrio Issues into Jit for bidirectional analysis."
  },
  {
    name: "Mend.io",
    category: "Application Security Scanners",
    icon: <FiShield className="text-rose-400" />,
    desc: "Enrich Devopstrio with Mend.io SAST findings to secure your custom code and dependencies."
  },
  {
    name: "Oligo Security",
    category: "Application Security Scanners",
    icon: <FiShield className="text-rose-400" />,
    desc: "Enrich Vulnerability findings from Oligo Security to Devopstrio for open-source library protection.",
    isNew: true
  },
  {
    name: "Rapid7",
    category: "Application Security Scanners",
    icon: <Rapid7Icon />,
    desc: "InsightAppSec is a DAST solution that automatically finds vulnerabilities by simulating real-world attacks."
  },
  {
    name: "Semgrep",
    category: "Application Security Scanners",
    icon: <SemgrepIcon />,
    desc: "Enrich Devopstrio with Semgrep SAST findings for lightweight, high-speed static analysis."
  },
  {
    name: "Snyk",
    category: "Application Security Scanners",
    icon: <SiSnyk style={{ color: "#4C5467" }} />,
    desc: "Fetch scan resultes from Snyk to use Devopstrio as your Unified Vulnerability Management solution."
  },
  {
    name: "SonarQube",
    category: "Application Security Scanners",
    icon: <SiSonarqubeserver style={{ color: "#4B9FD5" }} />,
    desc: "Fetch application-level findings from SonarQube for unified exposure management in Devopstrio."
  },
  {
    name: "Zeropath",
    category: "Application Security Scanners",
    icon: <FiZap className="text-amber-400" />,
    desc: "Enrich Devopstrio with ZeroPath SAST and SCA Findings for developer-friendly security insights.",
    isNew: true
  },

  // --- Artificial Intelligence ---
  {
    name: "Amazon Bedrock",
    category: "Artificial Intelligence",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    ai: true,
    desc: "Secure and monitor your foundational AI models and data privacy in Amazon Bedrock."
  },
  {
    name: "Google Gemini Assist",
    category: "Artificial Intelligence",
    icon: <SiGooglegemini style={{ color: "#8E75FF" }} />,
    ai: true,
    desc: "Bridge the gap between AI development and security intel with Google's advanced AI models."
  },
  {
    name: "OpenAI Platform",
    category: "Artificial Intelligence",
    icon: <TbBrandOpenai style={{ color: "#10A37F" }} />,
    ai: true,
    desc: "Protect your OpenAI API usage and ensure data compliance across your enterprise AI initiatives."
  },
  {
    name: "Azure OpenAI",
    category: "Artificial Intelligence",
    icon: <TbBrandOpenai style={{ color: "#0078D4" }} />,
    ai: true,
    desc: "Connect Devopstrio to Azure OpenAI to secure your private AI deployments and model data."
  },
  {
    name: "Vertex AI",
    category: "Artificial Intelligence",
    icon: <SiGooglecloud style={{ color: "#4285F4" }} />,
    ai: true,
    desc: "Gain visibility into Google Vertex AI resources and protect your machine learning pipelines."
  },
  // --- CI/CD ---
  { name: "Atlantis", category: "CI/CD", icon: <FiZap className="text-amber-400" />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Atlantis." },
  { name: "Atlassian Bamboo", category: "CI/CD", icon: <SiBamboo style={{ color: "#0052CC" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Atlassian Bamboo." },
  { name: "AWS CodeBuild", category: "CI/CD", icon: <FaAws style={{ color: "#FF9900" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in AWS CodeBuild." },
  { name: "Azure DevOps CI", category: "CI/CD", icon: <VscAzureDevops style={{ color: "#0078D4" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Azure DevOps." },
  { name: "Bitbucket", category: "CI/CD", icon: <FaBitbucket style={{ color: "#0052CC" }} />, desc: "Use the Bitbucket integration to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Brainboard", category: "CI/CD", icon: <FiLayers className="text-zinc-400" />, desc: "Use the Brainboard integration to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Buildkite", category: "CI/CD", icon: <SiBuildkite style={{ color: "#14BE77" }} />, desc: "Use Buildkite to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "CircleCI", category: "CI/CD", icon: <SiCircleci style={{ color: "#343434" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in CircleCI." },
  { name: "Git Hooks", category: "CI/CD", icon: <FaGithub style={{ color: "#181717" }} />, desc: "Use Git Hooks to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "GitHub CI", category: "CI/CD", icon: <FaGithub style={{ color: "#181717" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in GitHub Actions." },
  { name: "GitLab CI", category: "CI/CD", icon: <FaGitlab style={{ color: "#FC6D26" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in GitLab CI/CD." },
  { name: "Google Cloud Build", category: "CI/CD", icon: <SiGooglecloud style={{ color: "#4285F4" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Google Cloud Build." },
  { name: "Harness", category: "CI/CD", icon: <FiZap className="text-amber-400" />, desc: "Use Harness to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Jenkins CI", category: "CI/CD", icon: <FaJenkins style={{ color: "#D24939" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Jenkins." },
  { name: "JetBrains TeamCity", category: "CI/CD", icon: <SiTeamcity style={{ color: "#000000" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in JetBrains TeamCity." },
  { name: "OpenShift", category: "CI/CD", icon: <SiRedhatopenshift style={{ color: "#EE0000" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in OpenShift." },
  { name: "Spacelift", category: "CI/CD", icon: <FiLayers className="text-zinc-400" />, desc: "Integrate Devopstrio CLI to Spacelift for automated cloud infrastructure security." },
  { name: "Travis CI", category: "CI/CD", icon: <SiTravisci style={{ color: "#3EAAAF" }} />, desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Travis CI." },

  // --- Version Control ---
  {
    name: "Azure DevOps Connector",
    category: "Version Control",
    icon: <VscAzureDevops style={{ color: "#0078D4" }} />,
    desc: "Connect your Azure DevOps organizations to scan your source code for vulnerabilities and secrets."
  },
  {
    name: "Bitbucket Cloud",
    category: "Version Control",
    icon: <FaBitbucket style={{ color: "#0052CC" }} />,
    desc: "Connect your Bitbucket repositories to scan your source code and secure your software supply chain.",
    isNew: true
  },
  {
    name: "Bitbucket Data Center",
    category: "Version Control",
    icon: <FaBitbucket style={{ color: "#0052CC" }} />,
    desc: "Connect your self-hosted Bitbucket repositories to scan your source code for security risks."
  },
  {
    name: "GitHub Connector",
    category: "Version Control",
    icon: <FaGithub style={{ color: "#181717" }} />,
    desc: "Connect your GitHub repositories to scan your source code and identify misconfigurations."
  },
  {
    name: "GitLab Connector",
    category: "Version Control",
    icon: <FaGitlab style={{ color: "#FC6D26" }} />,
    desc: "Connect your GitLab projects to scan your source code and ensure secure application delivery."
  },
  {
    name: "HCP Terraform",
    category: "Version Control",
    icon: <SiTerraform style={{ color: "#844FBA" }} />,
    desc: "Connect your HashiCorp Terraform to scan your infrastructure as code (IaC) templates for security gaps."
  },

  // --- Cloud Services ---
  { name: "Amazon S3", category: "Cloud Services", icon: <FaAws style={{ color: "#FF9900" }} />, desc: "Export your Devopstrio reports to S3 for long-term storage and compliance auditing." },
  { name: "Amazon SNS", category: "Cloud Services", icon: <FaAws style={{ color: "#FF9900" }} />, desc: "Send Issues notification to SNS to create real-time automation flows in AWS." },
  { name: "Amazon SQS", category: "Cloud Services", icon: <FaAws style={{ color: "#FF9900" }} />, desc: "Send Devopstrio Issues to an SQS Queue to create resilient automation flows within AWS." },
  { name: "AWS EventBridge", category: "Cloud Services", icon: <FaAws style={{ color: "#FF9900" }} />, desc: "Send Issues notification to EventBridge to trigger serverless automation flows." },
  { name: "Azure Blob Storage", category: "Cloud Services", icon: <FaMicrosoft style={{ color: "#0078D4" }} />, desc: "Export Devopstrio reports to your Azure blob storage containers for centralized analysis." },
  { name: "Azure Logic Apps", category: "Cloud Services", icon: <FaMicrosoft style={{ color: "#0078D4" }} />, desc: "Trigger an Azure Logic Apps Workflow to automate incident response in Azure." },
  { name: "Google Cloud Pub/Sub", category: "Cloud Services", icon: <SiGooglecloud style={{ color: "#4285F4" }} />, desc: "Send Issues notification to Pub/Sub to create scalable automation flows in GCP." },
  { name: "Microsoft Azure Service Bus", category: "Cloud Services", icon: <FaMicrosoft style={{ color: "#0078D4" }} />, desc: "Send Issues notification to ServiceBus to create reliable automation flows in Azure." },
  { name: "Vercel", category: "Cloud Services", icon: <SiVercel style={{ color: "#000000" }} />, desc: "Gain comprehensive visibility into your Vercel assets and identify security misconfigurations.", isNew: true },
  // --- CMDB ---
  { name: "ServiceNow CMDB", category: "CMDB", icon: <ServiceNowIcon />, desc: "Pull cloud inventory to ServiceNow CMDB to maintain an accurate and unified configuration database." },
  // --- Compliance Management ---
  {
    name: "USAI Archangel",
    category: "Compliance Management",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull Devopstrio issues, resources and findings to USAI Archangel platform for unified compliance posture."
  },
  {
    name: "6clicks",
    category: "Compliance Management",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Issues to align to compliance frameworks and controls in 6clicks for automated GRC."
  },
  {
    name: "Akitra Andromeda",
    category: "Compliance Management",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Pull Devopstrio findings, issues, users and resources to Akitra Andromeda for compliance monitoring."
  },
  {
    name: "Anecdotes",
    category: "Compliance Management",
    icon: <FiBook />,
    desc: "Pull Devopstrio Issues into the Anecdotes compliance assessment process to automate evidence collection."
  },
  {
    name: "Caveonix",
    category: "Compliance Management",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull vulnerabilities, cloud findings, and inventory for continuous compliance across hybrid clouds."
  },
  {
    name: "ComplianceCOW",
    category: "Compliance Management",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull vulnerabilities and inventory findings for continuous compliance monitoring and reporting."
  },
  {
    name: "CYFOX OmniSec",
    category: "Compliance Management",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull Devopstrio issues, findings and resources to CYFOX OmniSec for real-time compliance monitoring."
  },
  {
    name: "Cypago",
    category: "Compliance Management",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Pull vulnerabilities into Cypago for automated compliance monitoring and risk management."
  },
  {
    name: "Drata",
    category: "Compliance Management",
    icon: <DrataIcon />,
    desc: "Send Devopstrio Issues for continuous compliance monitoring in Drata to streamline audit readiness."
  },
  {
    name: "Hyperproof",
    category: "Compliance Management",
    icon: <FiFileText />,
    desc: "Automate evidence collection for compliance activities and maintain a single source of truth."
  },
  {
    name: "RegScale",
    category: "Compliance Management",
    icon: <FiBookOpen />,
    desc: "Pull Devopstrio issues to update your security and compliance documentation in real-time."
  },
  {
    name: "Scytale",
    category: "Compliance Management",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Devopstrio issues and inventory to Scytale for automated SOC 2 and ISO 27001 readiness."
  },
  {
    name: "ServiceNow Configuration Compliance",
    category: "Compliance Management",
    icon: <ServiceNowIcon />,
    desc: "Pull Devopstrio Issues and host configuration findings to prioritize remediation and ensure compliance."
  },
  {
    name: "Sprinto",
    category: "Compliance Management",
    icon: <FiZap className="text-amber-400" />,
    desc: "Sprinto pulls Devopstrio issues for compliance tracking and SLA-based remediation workflows.",
    isNew: true
  },
  {
    name: "TrustMAPP",
    category: "Compliance Management",
    icon: <FiMap />,
    desc: "Ingest Devopstrio issues in TrustMAPP to align to compliance frameworks and measure maturity."
  },
  {
    name: "Vanta",
    category: "Compliance Management",
    icon: <VantaIcon />,
    desc: "Send Devopstrio users and information to align to compliance requirements for automated audits in Vanta."
  },
  {
    name: "ZenGRC",
    category: "Compliance Management",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull Devopstrio findings, issues, and resources to ZenGRC for unified risk and compliance monitoring."
  },
  // --- Cyber Resilience ---
  {
    name: "Cohesity",
    category: "Cyber Resilience",
    icon: <CohesityIcon />,
    desc: "Ingest tags to Devopstrio to see backed up assets and pull Issues to Cohesity for context on restored resources."
  },
  {
    name: "Commvault",
    category: "Cyber Resilience",
    icon: <CommvaultIcon />,
    desc: "Pull a Devopstrio vulnerability report for restored VMs on demand to view in Commvault for secure recovery."
  },

  // --- Cyber Risk Quantification ---
  {
    name: "Balbix by Safe",
    category: "Cyber Risk Quantification",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull issues, vulnerabilities, and cloud configuration findings into Balbix for AI-powered risk quantification."
  },
  {
    name: "Cye Security",
    category: "Cyber Risk Quantification",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Pull Issues and vulnerabilities into CYE for determining ROI and business impact when remediating risks."
  },
  {
    name: "Onyxia Cyber",
    category: "Cyber Risk Quantification",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull vulnerabilities and Issues to Onyxia to proactively report on your real-time risk posture."
  },
  {
    name: "Safe Security",
    category: "Cyber Risk Quantification",
    icon: <FiShield className="text-rose-400" />,
    desc: "Integrate with Safe Security to prioritize risk management based on financial ROI and threat exposure."
  },

  // --- Data Security Scanners ---
  {
    name: "Amazon Macie",
    category: "Data Security Scanners",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Ingest findings from Amazon Macie into Devopstrio for centralized data security visibility."
  },
  {
    name: "Bedrock Security",
    category: "Data Security Scanners",
    icon: <FiShield className="text-rose-400" />,
    desc: "Enrich Devopstrio with Bedrock Security data findings (Preview) to protect sensitive cloud data."
  },
  {
    name: "BigID",
    category: "Data Security Scanners",
    icon: <BigIDIcon />,
    desc: "Enrich Devopstrio with BigID's data findings and pull Devopstrio Issues for a bidirectional flow (Preview)."
  },
  {
    name: "Cyera",
    category: "Data Security Scanners",
    icon: <FiShield className="text-rose-400" />,
    desc: "Enrich Devopstrio with Cyera's data findings and pull Devopstrio Issues for a bidirectional flow (Preview)."
  },
  {
    name: "Dig Security",
    category: "Data Security Scanners",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Enrich Devopstrio with Dig Security's data findings and pull Devopstrio Issues for a bidirectional flow."
  },
  {
    name: "Laminar",
    category: "Data Security Scanners",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Enrich Devopstrio with Laminar's data findings and pull Devopstrio Issues for a bidirectional flow."
  },
  {
    name: "Proofpoint DSPM",
    category: "Data Security Scanners",
    icon: <FiShield className="text-rose-400" />,
    desc: "Enrich Devopstrio with Proofpoint DSPM findings and pull Issues to Proofpoint for infrastructure context."
  },
  {
    name: "Sentra",
    category: "Data Security Scanners",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Enrich Devopstrio with Sentra Data Security findings to identify and protect sensitive data assets."
  },

  // --- Data & AI ---
  {
    name: "OpenAI Platform (Data)",
    category: "Data & AI",
    icon: <TbBrandOpenai style={{ color: "#10A37F" }} />,
    desc: "Connect your OpenAI enterprise organizations to gain visibility to your AI models, jobs, and datasets."
  },
  {
    name: "Snowflake Connector",
    category: "Data & AI",
    icon: <SiSnowflake style={{ color: "#29B5E8" }} />,
    desc: "Connect to your Snowflake organization across clouds to scan for sensitive data and ensure compliance."
  },

  // --- Data Lake & Analytics ---
  {
    name: "CloudQuery",
    category: "Data Lake & Analytics",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Query across a variety of assets in Devopstrio and other security tools through your CloudQuery console."
  },
  {
    name: "Cribl",
    category: "Data Lake & Analytics",
    icon: <FiZap className="text-amber-400" />,
    desc: "Integrate Cribl Stream to seamlessly send Devopstrio data to multiple platforms for unified logging."
  },
  {
    name: "Dassana",
    category: "Data Lake & Analytics",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull vulnerabilities and inventory into Dassana for analytics on your Snowflake database."
  },
  {
    name: "Databahn API",
    category: "Data Lake & Analytics",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull Devopstrio Issues, findings and audit logs into Databahn platform for advanced threat analysis."
  },
  {
    name: "Elastic",
    category: "Data Lake & Analytics",
    icon: <SiElastic style={{ color: "#005571" }} />,
    desc: "Ingest Devopstrio issues, vulnerabilities, and audit logs to Elastic to correlate across multiple tools."
  },
  {
    name: "Polarity",
    category: "Data Lake & Analytics",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Send Devopstrio vulnerabilities and Issues to Polarity to query across different tools in a single view."
  },
  {
    name: "Snowflake",
    category: "Data Lake & Analytics",
    icon: <SiSnowflake style={{ color: "#29B5E8" }} />,
    desc: "Export Devopstrio reports directly to your Snowflake databases for large-scale security analytics."
  },
  {
    name: "Sola",
    category: "Data Lake & Analytics",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send Devopstrio Issues and Findings to Sola to enhance your cloud data security posture."
  },
  {
    name: "TargetBoard",
    category: "Data Lake & Analytics",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Send Devopstrio issues to TargetBoard for consolidated security reporting and visibility."
  },
  {
    name: "Tarsal",
    category: "Data Lake & Analytics",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull Devopstrio audit logs to Tarsal to be sent to security destinations of your choice."
  },

  // --- Developer Tools ---
  {
    name: "Backstage",
    category: "Developer Tools",
    icon: <SiBackstage style={{ color: "#9BF0E1" }} />,
    desc: "Pull Devopstrio issues and vulnerabilities related to Backstage entities to provide security context to developers."
  },
  {
    name: "HashiCorp",
    category: "Developer Tools",
    icon: <SiHashicorp style={{ color: "#000000" }} />,
    desc: "Connect your Terraform to scan your Infrastructure as Code (IaC) templates for misconfigurations."
  },
  {
    name: "JetBrains",
    category: "Developer Tools",
    icon: <SiJetbrains style={{ color: "#000000" }} />,
    desc: "Integrate with JetBrains IDEs to locally scan your code for vulnerabilities before committing."
  },
  {
    name: "Lovable",
    category: "Developer Tools",
    icon: <FiZap className="text-amber-400" />,
    desc: "Use Devopstrio CLI to scan Lovable AI-generated code for vulnerabilities before deployment.",
    isNew: true
  },
  {
    name: "StackGen",
    category: "Developer Tools",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Connect Devopstrio CLI to the StackGen platform to orchestrate secure application delivery."
  },
  {
    name: "Terraform Provider",
    category: "Developer Tools",
    icon: <SiTerraform style={{ color: "#844FBA" }} />,
    desc: "Use the Terraform provider to seamlessly manage security data sources and cloud resources."
  },

  // --- Identity Security ---
  {
    name: "Aembit",
    category: "Identity Security",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send inventory to Aembit to block actions based on Devopstrio security posture and identity risk."
  },
  {
    name: "Britive",
    category: "Identity Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Push Devopstrio issues to Britive to ensure secure just-in-time access and identity governance."
  },
  {
    name: "Clutch Security",
    category: "Identity Security",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Devopstrio data findings to Clutch Security to prioritize identity risks and unauthorized access."
  },
  {
    name: "ConductorOne",
    category: "Identity Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send Devopstrio Issues and IAM data to ConductorOne for identity-aware cloud security governance.",
    isNew: true
  },
  {
    name: "CyberArk",
    category: "Identity Security",
    icon: <CyberArkIcon />,
    desc: "Send Devopstrio Issues to the CyberArk Identity Security Platform to protect privileged credentials."
  },
  {
    name: "Entro Security",
    category: "Identity Security",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Pull data findings into Entro to help prioritize identity-centric risks and vulnerabilities."
  },
  {
    name: "Linx Security",
    category: "Identity Security",
    icon: <FiUser />,
    desc: "Send Devopstrio identity information to Linx to gain a unified view of identity and cloud security."
  },
  {
    name: "Oasis Security",
    category: "Identity Security",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send Data Findings to Oasis to correlate identity risk and prioritize remediation efforts."
  },
  {
    name: "Okta",
    category: "Identity Security",
    icon: <SiOkta style={{ color: "#007DC1" }} />,
    desc: "Connect Okta to gain visibility to your Identity Provider security and cloud access management."
  },
  {
    name: "Saviynt",
    category: "Identity Security",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Send Devopstrio Cloud Resources to Saviynt to automate identity governance and administration (IGA)."
  },
  {
    name: "Unosecur",
    category: "Identity Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull Devopstrio data findings to Unosecur to identify and mitigate identity-based threats in real-time."
  },

  // --- MDR ---
  {
    name: "Arctic Wolf",
    category: "MDR",
    icon: <ArcticWolfIcon />,
    desc: "Send Devopstrio Threats, Issues and Findings to Arctic Wolf for 24/7 managed detection and response.",
    isNew: true
  },
  {
    name: "AWS Security Incident Response",
    category: "MDR",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Send Threat information from Devopstrio to AWS SIR to open cases for expert incident response teams."
  },
  {
    name: "Daylight",
    category: "MDR",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send Devopstrio Defend Detections to Daylight to enhance your managed threat hunting capabilities."
  },
  {
    name: "Expel",
    category: "MDR",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Send Devopstrio Issues to Expel to have your cloud security risks triaged and investigated by experts."
  },
  {
    name: "mnemonic",
    category: "MDR",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Receives Devopstrio security signals via webhook for 24/7 managed detection and response (MDR).",
    isNew: true
  },
  {
    name: "Red Canary",
    category: "MDR",
    icon: <RedCanaryIcon />,
    desc: "Ingest Devopstrio issues and inventory to Red Canary's MDR platform to enhance remediation at scale."
  },
  {
    name: "ReliaQuest",
    category: "MDR",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Devopstrio Issues into ReliaQuest GreyMatter for unified triage, investigation, and response."
  },
  {
    name: "Sygnia",
    category: "MDR",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Pull Threat Detection Issues into Sygnia for deep forensics and incident response team investigation."
  },
  {
    name: "Tamnoon",
    category: "MDR",
    icon: <FiZap className="text-amber-400" />,
    desc: "Simplify complex cloud security while increasing remediation speed and agility with Tamnoon."
  },
  {
    name: "VisionX by Smarttech247",
    category: "MDR",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Pull Devopstrio issues to VisionX for unified risk reporting, expert triage, and executive dashboards."
  },

  // --- Network Security ---
  {
    name: "Aviatrix",
    category: "Network Security",
    icon: <AviatrixIcon />,
    desc: "Send important issues and security findings to Aviatrix for automated cloud network orchestration."
  },
  {
    name: "Cato Networks",
    category: "Network Security",
    icon: <CatoIcon />,
    desc: "Ingest cloud findings into Cato XOps for unified security correlation and real-time network protection.",
    isNew: true
  },
  {
    name: "Check Point",
    category: "Network Security",
    icon: <CheckPointIcon />,
    desc: "Bring network context into the Security Graph to enrich cloud visibility and strengthen your overall posture."
  },
  {
    name: "Fortinet",
    category: "Network Security",
    icon: <SiFortinet style={{ color: "#EE3124" }} />,
    desc: "Send Devopstrio issues and cloud events to Fortinet to enable risk-based network protection and response."
  },
  {
    name: "Illumio",
    category: "Network Security",
    icon: <FiShield className="text-rose-400" />,
    desc: "Push Devopstrio Issues to Illumio to create secure network policies and maintain micro-segmentation at scale."
  },
  {
    name: "Netography",
    category: "Network Security",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send Devopstrio vulnerabilities to Netography's network management platform for unified traffic analysis."
  },
  {
    name: "Netskope",
    category: "Network Security",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Integrate with Netskope to push Issues and validate secure access policies across your cloud apps."
  },

  // --- SaaS Security ---
  {
    name: "Databricks",
    category: "SaaS Security",
    icon: <SiDatabricks style={{ color: "#FF3621" }} />,
    desc: "Connect directly to your Databricks environment to gain full security visibility and identify data risks.",
    isNew: true
  },
  {
    name: "Microsoft 365",
    category: "SaaS Security",
    icon: <FaMicrosoft style={{ color: "#0078D4" }} />,
    desc: "Connect to your Microsoft 365 environment to identify security risks and configuration gaps across your SaaS stack."
  },

  // --- SAST/DAST ---
  {
    name: "Bright Security",
    category: "SAST/DAST",
    icon: <FiShield className="text-rose-400" />,
    desc: "Enrich Devopstrio with DAST findings from Bright Security to unify application-layer security and cloud posture.",
    isNew: true
  },

  // --- Secured Components ---
  {
    name: "Chainguard",
    category: "Secured Components",
    icon: <SiChainguard style={{ color: "#000000" }} />,
    desc: "Automatically identify container images built on Chainguard's minimal and secured base images."
  },
  {
    name: "Docker",
    category: "Secured Components",
    icon: <FaDocker style={{ color: "#2496ED" }} />,
    desc: "Identify container images built on Docker's hardened Linux distribution to reduce attack surface."
  },
  {
    name: "echo",
    category: "Secured Components",
    icon: <FiZap className="text-amber-400" />,
    desc: "Identify Echo's base images that eliminate container CVEs at the source through automated hardening."
  },
  {
    name: "minimus",
    category: "Secured Components",
    icon: <FiBox className="text-orange-400" />,
    desc: "Identify container images built on Minimus's hardened Linux distribution for secure deployments."
  },
  {
    name: "Resolved Security",
    category: "Secured Components",
    icon: <FiShield className="text-rose-400" />,
    desc: "Validated integration for secured packages and libraries provided by Resolved Security."
  },
  {
    name: "Root",
    category: "Secured Components",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Detect Root's secured images and perform vulnerability assessment against Root's curated security feed."
  },
  {
    name: "Seal Security",
    category: "Secured Components",
    icon: <FiShield className="text-rose-400" />,
    desc: "Identify and validate the use of Seal's secured container images to ensure supply chain integrity."
  },

  // --- Security Data Management ---
  {
    name: "AWS CloudTrail Lake",
    category: "Security Data Management",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Inject Devopstrio audit logs into AWS CloudTrail Lake for long-term security investigation and auditing."
  },
  {
    name: "Amazon Q",
    category: "Security Data Management",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Explore and query your Devopstrio security issues using natural language with Amazon Q."
  },
  {
    name: "Avalor by Zscaler",
    category: "Security Data Management",
    icon: <ZscalerIcon />,
    desc: "Send Issues, vulnerabilities, and Cloud Configuration Findings into Avalor's security data fabric."
  },
  {
    name: "AWS Security Lake",
    category: "Security Data Management",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Integrate Devopstrio as a custom source in AWS Security Lake to normalize and aggregate security findings."
  },
  {
    name: "Blast Security",
    category: "Security Data Management",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send Devopstrio Issues, Configuration Findings, and Resources to Blast for real-time security orchestration."
  },
  {
    name: "Brinqa",
    category: "Security Data Management",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Connect to Brinqa to pull assets and vulnerabilities for prioritized risk management and remediation."
  },
  {
    name: "Censys",
    category: "Security Data Management",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Pull publicly exposed assets into Censys to populate your external attack surface (EASM) inventory."
  },
  {
    name: "Cortex IO",
    category: "Security Data Management",
    icon: <SiPaloaltonetworks style={{ color: "#FA582D" }} />,
    desc: "Ingest Devopstrio issues into Cortex.io to create automated, security-centric scorecards for your organization."
  },
  {
    name: "Jed Security",
    category: "Security Data Management",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Issues and vulnerabilities into Jed Security for cross-tool aggregation and risk scoring."
  },
  {
    name: "Monad",
    category: "Security Data Management",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Create a Devopstrio Connector in Monad to start pulling and normalizing multi-cloud vulnerabilities."
  },
  {
    name: "Opus",
    category: "Security Data Management",
    icon: <FiZap className="text-amber-400" />,
    desc: "Trigger security automation workflows on the Opus no-code platform based on Devopstrio findings."
  },
  {
    name: "Panaseer",
    category: "Security Data Management",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Send Devopstrio inventory and vulnerabilities for continuous controls monitoring (CCM) and analytics."
  },
  {
    name: "Rescana",
    category: "Security Data Management",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Pull Devopstrio users and exposed resources to populate Rescana's attack surface management platform."
  },
  {
    name: "Resourcely",
    category: "Security Data Management",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull cloud configuration findings into Resourcely to create automated security guardrails."
  },
  {
    name: "Roadie",
    category: "Security Data Management",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Issues into Roadie (Backstage-based) to prioritize remediation and provide developer context."
  },

  // --- Threat Detection & Intelligence ---
  {
    name: "Amazon GuardDuty",
    category: "Threat Detection & Intelligence",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Connect your AWS environment to gain deep visibility into your subscription-level security threats."
  },
  {
    name: "Cado Security",
    category: "Threat Detection & Intelligence",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Use automated forensics capabilities to trigger deep-dive investigations into compromised assets with Cado."
  },
  {
    name: "Cybersixgill",
    category: "Threat Detection & Intelligence",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull vulnerability findings into Cybersixgill for real-time dark web intelligence and threat enrichment."
  },
  {
    name: "Cymulate",
    category: "Threat Detection & Intelligence",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Send real-time Defend detections to Cymulate to validate security controls and exposure management."
  },
  {
    name: "Google Threat Intelligence",
    category: "Threat Detection & Intelligence",
    icon: <SiGooglecloud style={{ color: "#4285F4" }} />,
    desc: "Pull threat intelligence data from GTI (Chronicle) to better understand and mitigate environmental risks."
  },
  {
    name: "Azure Defender for Cloud",
    category: "Threat Detection & Intelligence",
    icon: <FaMicrosoft style={{ color: "#0078D4" }} />,
    desc: "Connect Azure cloud logs to provide additional context and high-fidelity detections related to security events."
  },
  {
    name: "SentinelOne",
    category: "Threat Detection & Intelligence",
    icon: <SentinelOneIcon />,
    desc: "Enrich platform with runtime findings and pull Issues into SentinelOne's Singularity XDR for unified response."
  },
  {
    name: "Sevco",
    category: "Threat Detection & Intelligence",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull resources into Sevco for comprehensive asset tracking and exposure management across the hybrid cloud."
  },
  {
    name: "Tidal",
    category: "Threat Detection & Intelligence",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull MITRE ATT&CK compliance reports to organize threats and measure detection coverage against industry frameworks."
  },

  // --- Vulnerability Management & Response ---
  {
    name: "Check Point Threat Exposure Management",
    category: "Vulnerability Management & Response",
    icon: <CheckPointIcon />,
    desc: "Pull Devopstrio Vulnerabilities into Check Point Threat Exposure Management for automated risk mitigation."
  },
  {
    name: "Armis",
    category: "Vulnerability Management & Response",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send Devopstrio inventory reports to the Armis asset management platform for unified device visibility."
  },
  {
    name: "Armis VIPR",
    category: "Vulnerability Management & Response",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send Devopstrio findings to Armis VIPR to trigger automated security remediation and response workflows."
  },
  {
    name: "ArmorCode",
    category: "Vulnerability Management & Response",
    icon: <FiShield className="text-rose-400" />,
    desc: "Ingest Issues and detected vulnerabilities into ArmorCode for cross-tool risk correlation."
  },
  {
    name: "Averlon",
    category: "Vulnerability Management & Response",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send vulnerabilities and configuration findings to Averlon for advanced risk quantification."
  },
  {
    name: "Axonius",
    category: "Vulnerability Management & Response",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Comprehensive IT asset inventory to help enforce and validate network security policies."
  },
  {
    name: "Daxa",
    category: "Vulnerability Management & Response",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send Devopstrio vulnerabilities to the Daxa platform for specialized cloud vulnerability management."
  },
  {
    name: "Hackuity",
    category: "Vulnerability Management & Response",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Pull vulnerabilities and resources into Hackuity to prioritize remediation based on risk scores."
  },
  {
    name: "IONIX",
    category: "Vulnerability Management & Response",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send issues, vulnerabilities, and network exposures to IONIX for attack surface management."
  },
  {
    name: "Ivanti",
    category: "Vulnerability Management & Response",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull vulnerabilities and cloud findings into Ivanti for prioritized patching and remediation."
  },
  {
    name: "Kenna",
    category: "Vulnerability Management & Response",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Integrate platform vulnerability scanner with Kenna's risk-based vulnerability management tool."
  },
  {
    name: "Kondukto",
    category: "Vulnerability Management & Response",
    icon: <FiZap className="text-amber-400" />,
    desc: "Pull vulnerabilities into Kondukto to triage and remediate security risks across your entire stack."
  },
  {
    name: "Maze",
    category: "Vulnerability Management & Response",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull vulnerability findings into Maze for unified cloud vulnerability management and tracking."
  },
  {
    name: "NopSec",
    category: "Vulnerability Management & Response",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Pull Devopstrio issues and vulnerabilities to NopSec for automated prioritization and response."
  },
  {
    name: "Nucleus",
    category: "Vulnerability Management & Response",
    icon: <FiShield className="text-rose-400" />,
    desc: "Pull vulnerabilities and cloud findings into Nucleus Security for unified vulnerability management."
  },
  {
    name: "Precize",
    category: "Vulnerability Management & Response",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull Devopstrio Issues and network exposures into Precize for automated risk prioritization."
  },
  {
    name: "Qualys",
    category: "Vulnerability Management & Response",
    icon: <SiQualys style={{ color: "#ED1C24" }} />,
    desc: "Pull vulnerabilities into Qualys TruRisk management for consolidating and prioritizing risks."
  },
  {
    name: "Seemplicity",
    category: "Vulnerability Management & Response",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send vulnerabilities to the Seemplicity platform for automated remediation operations."
  },
  {
    name: "ServiceNow CVR",
    category: "Vulnerability Management & Response",
    icon: <ServiceNowIcon />,
    desc: "Pull container image vulnerabilities to ServiceNow CVR to create automated findings and items."
  },
  {
    name: "ServiceNow VR",
    category: "Vulnerability Management & Response",
    icon: <ServiceNowIcon />,
    desc: "Import and automatically group vulnerabilities findings to remediate critical risks quickly."
  },
  {
    name: "Tenable One (Vulcan)",
    category: "Vulnerability Management & Response",
    icon: <TenableIcon />,
    desc: "Pull issues, vulnerabilities, and resources into the Tenable One platform for unified exposure management."
  },
  {
    name: "Wabbi",
    category: "Vulnerability Management & Response",
    icon: <FiCode className="text-indigo-400" />,
    desc: "Send vulnerabilities to Wabbi to prioritize security findings directly within the SDLC process."
  },

  // --- Vulnerability Scanners ---
  {
    name: "Microsoft Defender VM",
    category: "Vulnerability Scanners",
    icon: <FaMicrosoft style={{ color: "#0078D4" }} />,
    desc: "Connect with Microsoft Defender Vulnerability Management to aggregate and unify vulnerability data.",
    isNew: true
  },
  {
    name: "Qualys VMDR",
    category: "Vulnerability Scanners",
    icon: <SiQualys style={{ color: "#ED1C24" }} />,
    desc: "Import Qualys VMDR scan results into the platform for unified vulnerability management (Preview)."
  },
  {
    name: "Rapid7 InsightVM",
    category: "Vulnerability Scanners",
    icon: <Rapid7Icon />,
    desc: "Fetch InsightVM's vulnerability findings and related resources to ingest them into the unified platform."
  },
  {
    name: "Tenable Security Center",
    category: "Vulnerability Scanners",
    icon: <TenableIcon />,
    desc: "Connect Tenable Security Center to create a centralized location for viewing and analyzing vulnerability scans."
  },
  {
    name: "Tenable VM",
    category: "Vulnerability Scanners",
    icon: <TenableIcon />,
    desc: "Import Tenable VM scan results into the platform for unified, risk-based vulnerability management (Preview)."
  },

  // --- TICKETING & MESSAGING ---
  {
    name: "Azure DevOps",
    category: "Ticketing & Messaging",
    icon: <VscAzureDevops style={{ color: "#0078D4" }} />,
    desc: "Create a new Azure DevOps work item to track and remediate security issues within your development sprints."
  },
  {
    name: "Cisco Webex",
    category: "Ticketing & Messaging",
    icon: <SiCisco style={{ color: "#1BA0D7" }} />,
    desc: "Notify your Webex teams on platform issues to ensure real-time awareness and collaboration."
  },
  {
    name: "ClickUp",
    category: "Ticketing & Messaging",
    icon: <SiClickup style={{ color: "#7B68EE" }} />,
    desc: "Create tasks in ClickUp on detected Issues or Controls for unified project and task management."
  },
  {
    name: "Fresh Service",
    category: "Ticketing & Messaging",
    icon: <FreshServiceIcon />,
    desc: "Send Issues to Freshservice and automatically generate tickets for your IT service desk."
  },
  {
    name: "Google Chat",
    category: "Ticketing & Messaging",
    icon: <SiGooglechat style={{ color: "#00AC47" }} />,
    desc: "Send message with security issue information directly to your specified Google Chat rooms."
  },
  {
    name: "Jira",
    category: "Ticketing & Messaging",
    icon: <SiJira style={{ color: "#0052CC" }} />,
    desc: "Open and update tickets on security issues in your projects to ensure end-to-end tracking.",
    trending: true
  },
  {
    name: "Linear",
    category: "Ticketing & Messaging",
    icon: <SiLinear style={{ color: "#5E6AD2" }} />,
    desc: "Open and update Linear issues based on security findings for modern engineering teams."
  },
  {
    name: "Microsoft Teams",
    category: "Ticketing & Messaging",
    icon: <BiLogoMicrosoftTeams style={{ color: "#6264A7" }} />,
    desc: "Alert your Teams channels on detected Issues to facilitate rapid response and discussion."
  },
  {
    name: "monday.com",
    category: "Ticketing & Messaging",
    icon: <MondayIcon />,
    desc: "Send security issues to the monday.com work management platform for streamlined remediation tracking."
  },
  {
    name: "Opsgenie",
    category: "Ticketing & Messaging",
    icon: <SiOpsgenie style={{ color: "#2684FF" }} />,
    desc: "Create and close alerts in Opsgenie for detected platform issues to manage on-call rotations."
  },
  {
    name: "PagerDuty",
    category: "Ticketing & Messaging",
    icon: <SiPagerduty style={{ color: "#06AC38" }} />,
    desc: "Create and resolve incidents in your PagerDuty service on detected issues to reduce MTTR."
  },
  {
    name: "ServiceNow ITSM",
    category: "Ticketing & Messaging",
    icon: <ServiceNowIcon />,
    desc: "Open and update a ServiceNow ticket in one of your tables for enterprise IT governance."
  },
  {
    name: "Slack",
    category: "Ticketing & Messaging",
    icon: <FaSlack style={{ color: "#4A154B" }} />,
    desc: "Send Slack messages to your channels using SlackBot for real-time security alerting.",
    trending: true
  },
  {
    name: "Zendesk",
    category: "Ticketing & Messaging",
    icon: <SiZendesk style={{ color: "#03363D" }} />,
    desc: "Open and update tickets on platform issues in your projects for customer-centric security response."
  },

  // --- SIEM ---
  {
    name: "Anvilogic",
    category: "SIEM",
    icon: <FiZap className="text-amber-400" />,
    desc: "Pull Devopstrio Issues in Anvilogic to run threat detections across multiple security tools."
  },
  {
    name: "AWS Security Hub",
    category: "SIEM",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    desc: "Send Issues notification to Security Hub to centralize cloud security posture management."
  },
  {
    name: "Datadog",
    category: "SIEM",
    icon: <SiDatadog style={{ color: "#632CA6" }} />,
    desc: "Pull Devopstrio Issues and audit logs into Datadog SIEM for unified log management and investigations."
  },
  {
    name: "Devo",
    category: "SIEM",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send issues, vulnerabilities, cloud configuration findings, and audit logs to Devo for high-scale analytics."
  },
  {
    name: "Exabeam",
    category: "SIEM",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Push Devopstrio Issues to your Exabeam instance proactively for behavioral analytics and threat detection."
  },
  {
    name: "Google Security Operations",
    category: "SIEM",
    icon: <SiGooglecloud style={{ color: "#4285F4" }} />,
    desc: "Export the Devopstrio issues to your Google Chronicle SIEM for planetary-scale security analytics."
  },
  {
    name: "Hunters",
    category: "SIEM",
    icon: <FiTarget className="text-rose-500" />,
    desc: "Ingest Devopstrio Issues into Hunters SOC platform for autonomous threat hunting and correlation."
  },
  {
    name: "IBM QRadar SIEM",
    category: "SIEM",
    icon: <IBMIcon />,
    desc: "Set Devopstrio as a data log source to integrate Devopstrio issues into your QRadar cloud security workflows."
  },
  {
    name: "Microsoft Sentinel",
    category: "SIEM",
    icon: <FaMicrosoft style={{ color: "#0078D4" }} />,
    desc: "Connect Devopstrio with Azure Sentinel to ingest Devopstrio Issues, Detections, and Audit Logs."
  },
  {
    name: "Panther Labs",
    category: "SIEM",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send Devopstrio vulnerabilities, audit logs, and Issues to Panther for centralized, code-driven investigation."
  },
  {
    name: "Securonix",
    category: "SIEM",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send Issues and vulnerabilities to Securonix's SIEM platform for next-gen threat detection."
  },
  {
    name: "Sekoia",
    category: "SIEM",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send issues, vulnerabilities, cloud configuration findings, and audit logs to Sekoia for unified monitoring."
  },
  {
    name: "Splunk",
    category: "SIEM",
    icon: <SiSplunk style={{ color: "#EA185D" }} />,
    desc: "Send Issues to get insights into threats, vulnerabilities, and identity information in Splunk."
  },
  {
    name: "Sumo Logic",
    category: "SIEM",
    icon: <SiSumologic style={{ color: "#000099" }} />,
    desc: "Send Issues to get insights into threats, vulnerabilities, and identity information across your cloud stack."
  },
  // --- SOAR & Automation ---
  {
    name: "Blinkops",
    category: "SOAR & Automation",
    icon: <FiZap className="text-amber-400" />,
    desc: "Automate your security operations with the BlinkOps integration for rapid incident response."
  },
  {
    name: "Botprise",
    category: "SOAR & Automation",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Send Devopstrio Issues to Botprise to create no-code automation workflows for cloud remediation."
  },
  {
    name: "Cortex XSOAR",
    category: "SOAR & Automation",
    icon: <SiPaloaltonetworks style={{ color: "#FA582D" }} />,
    desc: "Automate and orchestrate your XSOAR security operations based on real-time platform findings."
  },
  {
    name: "Cyware",
    category: "SOAR & Automation",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Send Devopstrio Issues to the Cyware portal for unified threat intelligence and collaboration."
  },
  {
    name: "D3 Security",
    category: "SOAR & Automation",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull Issues to D3 to run remediation playbooks and automatically update statuses in the platform."
  },
  {
    name: "DevOcean",
    category: "SOAR & Automation",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send vulnerabilities and Issues to DevOcean for automated cloud security remediation."
  },
  {
    name: "Dropzone AI (API)",
    category: "SOAR & Automation",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Send Devopstrio Issues, Threats, and Detections to Dropzone AI via API for automated investigation."
  },
  {
    name: "Dropzone AI (Webhook)",
    category: "SOAR & Automation",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send real-time Issues and Detections to Dropzone AI via Webhook for immediate triage."
  },
  {
    name: "Exaforce",
    category: "SOAR & Automation",
    icon: <FiShield className="text-rose-400" />,
    desc: "Send Devopstrio Threats and Findings to the Exaforce platform for automated SOC triage and response.",
    isNew: true
  },
  {
    name: "IBM QRadar SOAR",
    category: "SOAR & Automation",
    icon: <IBMIcon />,
    desc: "Pull Issues and vulnerabilities into QRadar SOAR to execute complex remediation playbooks."
  },
  {
    name: "Intezer",
    category: "SOAR & Automation",
    icon: <FiSearch className="text-zinc-400" />,
    desc: "Push Devopstrio detections to Intezer for autonomous triage, forensics, and incident investigation."
  },
  {
    name: "Prophet Security",
    category: "SOAR & Automation",
    icon: <FiActivity className="text-emerald-400" />,
    desc: "Pull vulnerabilities and inventory into Prophet to automate security investigations and reporting."
  },
  {
    name: "Swimlane",
    category: "SOAR & Automation",
    icon: <FiZap className="text-amber-400" />,
    desc: "Send Devopstrio Issues, Findings, and Resources to Swimlane for low-code security automation."
  },
  {
    name: "Tines",
    category: "SOAR & Automation",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Ingest security data into Tines no-code automation platform for flexible security workflows."
  },
  {
    name: "Torq",
    category: "SOAR & Automation",
    icon: <TorqIcon />,
    desc: "Create security automation flows triggered by Devopstrio Issues for hyper-automated cloud security."
  },
  {
    name: "Workato",
    category: "SOAR & Automation",
    icon: <WorkatoIcon />,
    desc: "Pull Devopstrio Issues, Findings, and resources into Workato to orchestrate enterprise-wide automation."
  },

  // --- SSPM ---
  {
    name: "Adaptive Shield",
    category: "SSPM",
    icon: <FiShield className="text-rose-400" />,
    desc: "Integrate with Adaptive Shield by Crowdstrike to manage Devopstrio users, roles, and configuration risks."
  },
  {
    name: "AppOmni",
    category: "SSPM",
    icon: <FiMonitor className="text-blue-400" />,
    desc: "Integrate Devopstrio to AppOmni to manage users, roles, and security risks across your SaaS tenant."
  },
  {
    name: "Obsidian Security",
    category: "SSPM",
    icon: <FiLayers className="text-zinc-400" />,
    desc: "Pull Devopstrio users and audit logs into Obsidian for protecting and monitoring your cloud security tenant."
  },
  {
    name: "Reco",
    category: "SSPM",
    icon: <FiShield className="text-rose-400" />,
    desc: "Integrate with Reco to manage users, roles, and security risks with automated posture management."
  },
  {
    name: "Savvy Security",
    category: "SSPM",
    icon: <FiUser />,
    desc: "Pull Devopstrio users and audit logs into Savvy Security by Sailpoint for identity-centric posture management."
  },
  {
    name: "Valence Security",
    category: "SSPM",
    icon: <FiShield className="text-rose-400" />,
    desc: "Integrate with Valence to manage users and associated risks across your SaaS and cloud platforms."
  },
];

interface DetailedServicesProps {
  hideExploreButton?: boolean;
}

// Some entries (Jira, Slack) appear twice in the data. Keep the first one, which has the brand icon.
const uniqueIntegrations: IntegrationItem[] = integrations.filter(
  (item, i, arr) => arr.findIndex((x) => x.name === item.name && x.category === item.category) === i
);

export function DetailedServices({ hideExploreButton = false }: DetailedServicesProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: uniqueIntegrations.length };
    uniqueIntegrations.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categoriesList = useMemo(
    () => ["All", ...Array.from(new Set(uniqueIntegrations.map((i) => i.category))).sort()],
    []
  );

  const filtered = useMemo(() => {
    let list = uniqueIntegrations;
    if (activeCategory !== "All") list = list.filter((item) => item.category === activeCategory);
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  // Group by category, like the Wiz directory
  const grouped = useMemo(() => {
    const map = new Map<string, IntegrationItem[]>();
    filtered.forEach((item) => map.set(item.category, [...(map.get(item.category) ?? []), item]));
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <section className="w-full py-20 bg-black text-white border-b border-zinc-900/80 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 mb-4 shadow-[0_0_15px_rgba(225,29,72,0.1)]">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                INTEGRATIONS & CAPABILITIES ECOSYSTEM
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              EVOLVE Your Enterprise with{" "}
              <span className="text-rose-500">Full-Spectrum Capabilities</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400 font-normal max-w-3xl mx-auto">
              Devopstrio connects with {uniqueIntegrations.length}+ enterprise platforms, AI models, DevSecOps scanners, cloud providers, and observability toolchains.
            </p>
          </Reveal>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-500 text-base" aria-hidden />
            <input
              type="search"
              aria-label="Search integrations and services"
              placeholder="Search integrations & services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080808] border border-zinc-800/80 rounded-xl pl-12 pr-20 py-3.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 px-2 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 bg-[#050505] border border-zinc-900/80 rounded-xl p-4 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-900">
              <span className="text-xs font-semibold text-zinc-300">Categories</span>
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                {uniqueIntegrations.length}
              </span>
            </div>
            <div role="tablist" aria-label="Integration categories" className="space-y-1">
              {categoriesList.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all text-left relative cursor-pointer ${
                      isActive
                        ? "bg-rose-950/30 text-white font-semibold border border-rose-500/40"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-transparent"
                    }`}
                  >
                    {isActive && <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-rose-500 rounded-l" />}
                    <span className="truncate pr-2">{cat}</span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                        isActive ? "bg-rose-900/50 text-rose-300 font-semibold" : "bg-zinc-900/80 text-zinc-400"
                      }`}
                    >
                      {categoryCounts[cat] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Cards */}
          <main className="flex-1 w-full min-w-0 max-h-[80vh] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent" aria-live="polite">
            <div className="sticky top-0 bg-black/95 backdrop-blur-md z-30 flex items-center justify-between mb-6 pb-3 pt-1 border-b border-zinc-900">
              <div className="flex items-center gap-2">
                <FiGrid className="text-rose-500 text-sm" aria-hidden />
                <h3 className="text-sm font-semibold text-zinc-200">
                  {activeCategory === "All" ? "All integrations & services" : activeCategory}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Showing <strong className="text-rose-400">{filtered.length}</strong> items
              </span>
            </div>

            {grouped.length > 0 ? (
              grouped.map(([category, items], gi) => (
                <section key={category} className={gi ? "mt-12" : ""}>
                  {activeCategory === "All" || searchQuery ? (
                    <div className="mb-4 flex items-baseline justify-between">
                      <h4 className="text-base font-semibold text-white">{category}</h4>
                      <span className="text-xs text-zinc-400">{items.length}</span>
                    </div>
                  ) : null}

                  <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {items.map((item) => (
                      // Fixed-height slot keeps the grid stable; the card inside grows on hover and floats over its neighbours.
                      <li key={`${item.category}-${item.name}`} className="relative h-[200px]">
                        <article
                          tabIndex={0}
                          className="group/card absolute inset-x-0 top-0 min-h-full cursor-default rounded-xl border border-zinc-800 bg-[#080808] p-5 outline-none transition-all duration-200 hover:z-20 hover:border-zinc-600 hover:bg-zinc-950 hover:shadow-[0_16px_40px_rgba(0,0,0,0.75)] focus-visible:z-20 focus-visible:border-rose-500/60 focus-visible:bg-zinc-950"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="w-11 h-11 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm p-2">
                              <BrandLogo name={item.name} category={item.category} className="w-6 h-6 object-contain" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              {item.isNew && (
                                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">New</span>
                              )}
                              {item.trending && (
                                <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">Popular</span>
                              )}
                              {item.ai && (
                                <span className="bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">AI</span>
                              )}
                            </div>
                          </div>

                          <h5 className="mt-4 text-base font-semibold text-white line-clamp-2 group-hover/card:line-clamp-none group-focus-visible/card:line-clamp-none">
                            {item.name}
                          </h5>
                          <p className="mt-2 text-xs text-zinc-400 font-normal leading-relaxed line-clamp-2 group-hover/card:line-clamp-none group-focus-visible/card:line-clamp-none">
                            {item.desc}
                          </p>
                        </article>
                      </li>
                    ))}
                  </ul>
                </section>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-zinc-950/30 border border-zinc-900 rounded-xl p-8">
                <FiSearch className="text-rose-500 text-3xl mb-3 opacity-60" aria-hidden />
                <h4 className="text-base font-semibold text-zinc-200 mb-1">
                  No integrations found for &quot;{searchQuery}&quot;
                </h4>
                <p className="text-xs text-zinc-400 max-w-sm font-normal mb-4">
                  Try another keyword or select a different category from the sidebar.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Reset filter
                </button>
              </div>
            )}
          </main>
        </div>

        {!hideExploreButton && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/services/explore"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              <span>Explore Our Full Ecosystem Directory</span>
              <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
