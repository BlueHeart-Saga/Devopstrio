"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Zap,
  Shield,
  Cpu,
  ArrowUpRight,
  Activity,
  Database,
  Monitor,
  Code,
  Target,
  Box,
  Layers,
  Briefcase,
  Book,
  FileText,
  BookOpen,
  Map,
  User,
  Github,
  Gitlab,
  GitPullRequest,
  Slack,
  Cloud,
  Globe,
  HelpCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface IntegrationItem {
  name: string;
  category: string;
  iconName: string;
  trending?: boolean;
  isNew?: boolean;
  desc: string;
  ai?: boolean;
}

const integrations: IntegrationItem[] = [
  // --- TOP THREE POPULAR (Azure, Jira, Slack) ---
  { name: "Azure", category: "Cloud Services", iconName: "Microsoft", trending: true, desc: "Connect Devopstrio with Azure to manage resources, identities, and cloud posture across your subscriptions." },
  { name: "Jira", category: "Ticketing & Messaging", iconName: "Jira", trending: true, desc: "Open and update tickets on Devopstrio Issues in your projects to streamline your remediation workflow." },
  { name: "Slack", category: "Ticketing & Messaging", iconName: "Slack", trending: true, desc: "Send Slack messages to your security channels using SlackBot for real-time threat alerts." },

  // --- API SECURITY ---
  { name: "Firetail", category: "API Security", iconName: "Zap", desc: "Pull Devopstrio inventory to firetail for API discovery and enrich Devopstrio with API runtime events" },
  { name: "Google Apigee", category: "API Security", iconName: "Google", desc: "Fetch API Endpoints from Google Apigee to the Devopstrio Security Graph", isNew: true },
  { name: "Noname", category: "API Security", iconName: "Shield", desc: "Pull Devopstrio Issues into Noname for prioritization related to APIs" },

  // --- API Security Scanners ---
  { name: "CyCognito", category: "API Security Scanners", iconName: "Target", desc: "Enrich Devopstrio with CyCognito's DAST findings to identify and prioritize external-facing API risks." },
  { name: "Equixly", category: "API Security Scanners", iconName: "Layers", desc: "Enrich DAST findings from Equixly into Devopstrio for comprehensive API vulnerability coverage.", isNew: true },
  { name: "HackerOne", category: "API Security Scanners", iconName: "Shield", desc: "Pull HackerOne pen test and bug bounty findings into Devopstrio to see exploitable vulnerabilities.", isNew: true },
  { name: "Invicti (Netsparker)", category: "API Security Scanners", iconName: "Search", desc: "Fetch Invicti's DAST findings about publicly exposed Application Endpoint objects into Devopstrio." },
  { name: "Salt Security", category: "API Security Scanners", iconName: "Activity", desc: "Enrich Devopstrio with runtime events and findings from Salt Security to protect against API-based threats." },
  { name: "StackHawk", category: "API Security Scanners", iconName: "Zap", desc: "Enrich DAST findings from StackHawk into Devopstrio for automated API security testing in production.", isNew: true },
  { name: "Traceable by Harness", category: "API Security Scanners", iconName: "Activity", desc: "Integrate with Traceable to prioritize API risk and send API malicious runtime events to Devopstrio." },

  // --- Application Security ---
  { name: "Alma Security", category: "Application Security", iconName: "Activity", desc: "Enrich Devopstrio with runtime events from Alma Security to provide deep visibility into application execution.", isNew: true },
  { name: "Apiiro", category: "Application Security", iconName: "Layers", desc: "Ingest Devopstrio container image vulnerabilities to Apiiro for comprehensive code-to-cloud risk context." },
  { name: "Black Duck", category: "Application Security", iconName: "Shield", desc: "Pull Devopstrio Issues into Black Duck SRM for unified AppSec triage and open-source risk management.", isNew: true },
  { name: "Boostsecurity", category: "Application Security", iconName: "Box", desc: "Pull container resources and security findings into Boostsecurity for centralized dev-first security." },
  { name: "Crash Override", category: "Application Security", iconName: "Target", desc: "Send cloud resources and security posture data to Crash Override for unified risk modeling." },
  { name: "DefectDojo", category: "Application Security", iconName: "Target", desc: "Pull issues and vulnerabilities into Devopstrio to centralize and automate your vulnerability management." },
  { name: "Legit Security", category: "Application Security", iconName: "Shield", desc: "Send Devopstrio container image vulnerabilities and inventory to Legit for unified code-to-cloud risk context." },
  { name: "OXSecurity", category: "Application Security", iconName: "Layers", desc: "Pull Issues into OX Security to consolidate findings across tools and automate supply chain security." },
  { name: "Tromzo", category: "Application Security", iconName: "Zap", desc: "Send Devopstrio Issues to Tromzo and automate the remediation lifecycle of security findings." },
  { name: "Tumeryk", category: "Application Security", iconName: "Shield", desc: "Send cloud configuration findings to Tumeryk to bridge the gap between cloud and application security." },
  { name: "Veracode ASPM", category: "Application Security", iconName: "Activity", desc: "Pull Devopstrio issues and vulnerabilities to VRM for multi-stage prioritization and response." },

  // --- Application Security Scanners ---
  { name: "Checkmarx", category: "Application Security Scanners", iconName: "Code", desc: "Enrich with Checkmarx SAST finding and pull Devopstrio cloud inventory and assets for remediation." },
  { name: "Contrast Security", category: "Application Security Scanners", iconName: "Activity", desc: "Enrich Devopstrio with Contrast IAST findings for real-time application security testing." },
  { name: "Cycode", category: "Application Security Scanners", iconName: "Shield", desc: "Send vulnerabilities Devopstrio detects to Cycode to secure your software supply chain." },
  { name: "Endor Labs", category: "Application Security Scanners", iconName: "Layers", desc: "The integration enriches Devopstrio with both SCA and SAST findings from Endor Labs platform.", isNew: true },
  { name: "Escape", category: "Application Security Scanners", iconName: "Search", desc: "Pull the Devopstrio inventory into Escape for application testing and enrich Devopstrio with Escape's DAST findings." },
  { name: "Harness SAST and SCA", category: "Application Security Scanners", iconName: "Zap", desc: "Enrich Devopstrio with Harness SAST and SCA findings to identify code-level vulnerabilities." },
  { name: "Jit", category: "Application Security Scanners", iconName: "Code", desc: "Enrich Devopstrio with Jit SAST findings and pull Devopstrio Issues into Jit for bidirectional analysis." },
  { name: "Mend.io", category: "Application Security Scanners", iconName: "Shield", desc: "Enrich Devopstrio with Mend.io SAST findings to secure your custom code and dependencies." },
  { name: "Oligo Security", category: "Application Security Scanners", iconName: "Shield", desc: "Enrich Vulnerability findings from Oligo Security to Devopstrio for open-source library protection.", isNew: true },
  { name: "Rapid7", category: "Application Security Scanners", iconName: "Target", desc: "InsightAppSec is a DAST solution that automatically finds vulnerabilities by simulating real-world attacks." },
  { name: "Semgrep", category: "Application Security Scanners", iconName: "Code", desc: "Enrich Devopstrio with Semgrep SAST findings for lightweight, high-speed static analysis." },
  { name: "Snyk", category: "Application Security Scanners", iconName: "Search", desc: "Fetch scan resultes from Snyk to use Devopstrio as your Unified Vulnerability Management solution." },
  { name: "SonarQube", category: "Application Security Scanners", iconName: "Activity", desc: "Fetch application-level findings from SonarQube for unified exposure management in Devopstrio." },
  { name: "Zeropath", category: "Application Security Scanners", iconName: "Zap", desc: "Enrich Devopstrio with ZeroPath SAST and SCA Findings for developer-friendly security insights.", isNew: true },

  // --- Artificial Intelligence ---
  { name: "Amazon Bedrock", category: "Artificial Intelligence", iconName: "Aws", ai: true, desc: "Secure and monitor your foundational AI models and data privacy in Amazon Bedrock." },
  { name: "Google Gemini Assist", category: "Artificial Intelligence", iconName: "Google", ai: true, desc: "Bridge the gap between AI development and security intel with Google's advanced AI models." },
  { name: "OpenAI Platform", category: "Artificial Intelligence", iconName: "Zap", ai: true, desc: "Protect your OpenAI API usage and ensure data compliance across your enterprise AI initiatives." },
  { name: "Azure OpenAI", category: "Artificial Intelligence", iconName: "Microsoft", ai: true, desc: "Connect Devopstrio to Azure OpenAI to secure your private AI deployments and model data." },
  { name: "Vertex AI", category: "Artificial Intelligence", iconName: "Google", ai: true, desc: "Gain visibility into Google Vertex AI resources and protect your machine learning pipelines." },

  // --- CI/CD ---
  { name: "Atlantis", category: "CI/CD", iconName: "Zap", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Atlantis." },
  { name: "Atlassian Bamboo", category: "CI/CD", iconName: "Layers", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Atlassian Bamboo." },
  { name: "AWS CodeBuild", category: "CI/CD", iconName: "Aws", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in AWS CodeBuild." },
  { name: "Azure DevOps CI", category: "CI/CD", iconName: "Microsoft", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Azure DevOps." },
  { name: "Bitbucket", category: "CI/CD", iconName: "Bitbucket", desc: "Use the Bitbucket integration to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Brainboard", category: "CI/CD", iconName: "Layers", desc: "Use the Brainboard integration to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Buildkite", category: "CI/CD", iconName: "Activity", desc: "Use Buildkite to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "CircleCI", category: "CI/CD", iconName: "Zap", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in CircleCI." },
  { name: "Git Hooks", category: "CI/CD", iconName: "Code", desc: "Use Git Hooks to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "GitHub CI", category: "CI/CD", iconName: "Github", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in GitHub Actions." },
  { name: "GitLab CI", category: "CI/CD", iconName: "Gitlab", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in GitLab CI/CD." },
  { name: "Google Cloud Build", category: "CI/CD", iconName: "Google", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Google Cloud Build." },
  { name: "Harness", category: "CI/CD", iconName: "Zap", desc: "Use Harness to orchestrate the Devopstrio CLI in your pipeline." },
  { name: "Jenkins CI", category: "CI/CD", iconName: "Cpu", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Jenkins." },
  { name: "JetBrains TeamCity", category: "CI/CD", iconName: "Monitor", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in JetBrains TeamCity." },
  { name: "OpenShift", category: "CI/CD", iconName: "Box", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in OpenShift." },
  { name: "Spacelift", category: "CI/CD", iconName: "Layers", desc: "Integrate Devopstrio CLI to Spacelift for automated cloud infrastructure security." },
  { name: "Travis CI", category: "CI/CD", iconName: "Activity", desc: "Integrating Devopstrio CLI as part of your CI/CD pipeline in Travis CI." },

  // --- Version Control ---
  { name: "Azure DevOps Connector", category: "Version Control", iconName: "Microsoft", desc: "Connect your Azure DevOps organizations to scan your source code for vulnerabilities and secrets." },
  { name: "Bitbucket Cloud", category: "Version Control", iconName: "Layers", desc: "Connect your Bitbucket repositories to scan your source code and secure your software supply chain.", isNew: true },
  { name: "Bitbucket Data Center", category: "Version Control", iconName: "Layers", desc: "Connect your self-hosted Bitbucket repositories to scan your source code for security risks." },
  { name: "GitHub Connector", category: "Version Control", iconName: "Github", desc: "Connect your GitHub repositories to scan your source code and identify misconfigurations." },
  { name: "GitLab Connector", category: "Version Control", iconName: "Gitlab", desc: "Connect your GitLab projects to scan your source code and ensure secure application delivery." },
  { name: "HCP Terraform", category: "Version Control", iconName: "Code", desc: "Connect your HashiCorp Terraform to scan your infrastructure as code (IaC) templates for security gaps." },

  // --- Cloud Services ---
  { name: "Amazon S3", category: "Cloud Services", iconName: "Aws", desc: "Export your Devopstrio reports to S3 for long-term storage and compliance auditing." },
  { name: "Amazon SNS", category: "Cloud Services", iconName: "Aws", desc: "Send Issues notification to SNS to create real-time automation flows in AWS." },
  { name: "Amazon SQS", category: "Cloud Services", iconName: "Aws", desc: "Send Devopstrio Issues to an SQS Queue to create resilient automation flows within AWS." },
  { name: "AWS EventBridge", category: "Cloud Services", iconName: "Aws", desc: "Send Issues notification to EventBridge to trigger serverless automation flows." },
  { name: "Azure Blob Storage", category: "Cloud Services", iconName: "Microsoft", desc: "Export Devopstrio reports to your Azure blob storage containers for centralized analysis." },
  { name: "Azure Logic Apps", category: "Cloud Services", iconName: "Microsoft", desc: "Trigger an Azure Logic Apps Workflow to automate incident response in Azure." },
  { name: "Google Cloud Pub/Sub", category: "Cloud Services", iconName: "Google", desc: "Send Issues notification to Pub/Sub to create scalable automation flows in GCP." },
  { name: "Microsoft Azure Service Bus", category: "Cloud Services", iconName: "Microsoft", desc: "Send Issues notification to ServiceBus to create reliable automation flows in Azure." },
  { name: "Vercel", category: "Cloud Services", iconName: "Zap", desc: "Gain comprehensive visibility into your Vercel assets and identify security misconfigurations.", isNew: true },

  // --- CMDB ---
  { name: "ServiceNow CMDB", category: "CMDB", iconName: "Briefcase", desc: "Pull cloud inventory to ServiceNow CMDB to maintain an accurate and unified configuration database." },

  // --- Compliance Management ---
  { name: "USAI Archangel", category: "Compliance Management", iconName: "Shield", desc: "Pull Devopstrio issues, resources and findings to USAI Archangel platform for unified compliance posture." },
  { name: "6clicks", category: "Compliance Management", iconName: "Layers", desc: "Pull Issues to align to compliance frameworks and controls in 6clicks for automated GRC." },
  { name: "Akitra Andromeda", category: "Compliance Management", iconName: "Monitor", desc: "Pull Devopstrio findings, issues, users and resources to Akitra Andromeda for compliance monitoring." },
  { name: "Anecdotes", category: "Compliance Management", iconName: "Book", desc: "Pull Devopstrio Issues into the Anecdotes compliance assessment process to automate evidence collection." },
  { name: "Caveonix", category: "Compliance Management", iconName: "Shield", desc: "Pull vulnerabilities, cloud findings, and inventory for continuous compliance across hybrid clouds." },
  { name: "ComplianceCOW", category: "Compliance Management", iconName: "Activity", desc: "Pull vulnerabilities and inventory findings for continuous compliance monitoring and reporting." },
  { name: "CYFOX OmniSec", category: "Compliance Management", iconName: "Shield", desc: "Pull Devopstrio issues, findings and resources to CYFOX OmniSec for real-time compliance monitoring." },
  { name: "Cypago", category: "Compliance Management", iconName: "Monitor", desc: "Pull vulnerabilities into Cypago for automated compliance monitoring and risk management." },
  { name: "Drata", category: "Compliance Management", iconName: "Shield", desc: "Send Devopstrio Issues for continuous compliance monitoring in Drata to streamline audit readiness." },
  { name: "Hyperproof", category: "Compliance Management", iconName: "FileText", desc: "Automate evidence collection for compliance activities and maintain a single source of truth." },
  { name: "RegScale", category: "Compliance Management", iconName: "BookOpen", desc: "Pull Devopstrio issues to update your security and compliance documentation in real-time." },
  { name: "Scytale", category: "Compliance Management", iconName: "Layers", desc: "Pull Devopstrio issues and inventory to Scytale for automated SOC 2 and ISO 27001 readiness." },
  { name: "ServiceNow Configuration Compliance", category: "Compliance Management", iconName: "Briefcase", desc: "Pull Devopstrio Issues and host configuration findings to prioritize remediation and ensure compliance." },
  { name: "Sprinto", category: "Compliance Management", iconName: "Zap", desc: "Sprinto pulls Devopstrio issues for compliance tracking and SLA-based remediation workflows.", isNew: true },
  { name: "TrustMAPP", category: "Compliance Management", iconName: "Map", desc: "Ingest Devopstrio issues in TrustMAPP to align to compliance frameworks and measure maturity." },
  { name: "Vanta", category: "Compliance Management", iconName: "Shield", desc: "Send Devopstrio users and information to align to compliance requirements for automated audits in Vanta." },
  { name: "ZenGRC", category: "Compliance Management", iconName: "Shield", desc: "Pull Devopstrio findings, issues, and resources to ZenGRC for unified risk and compliance monitoring." },

  // --- Cyber Resilience ---
  { name: "Cohesity", category: "Cyber Resilience", iconName: "Activity", desc: "Ingest tags to Devopstrio to see backed up assets and pull Issues to Cohesity for context on restored resources." },
  { name: "Commvault", category: "Cyber Resilience", iconName: "Layers", desc: "Pull a Devopstrio vulnerability report for restored VMs on demand to view in Commvault for secure recovery." },

  // --- Cyber Risk Quantification ---
  { name: "Balbix by Safe", category: "Cyber Risk Quantification", iconName: "Layers", desc: "Pull issues, vulnerabilities, and cloud configuration findings into Balbix for AI-powered risk quantification." },
  { name: "Cye Security", category: "Cyber Risk Quantification", iconName: "Target", desc: "Pull Issues and vulnerabilities into CYE for determining ROI and business impact when remediating risks." },
  { name: "Onyxia Cyber", category: "Cyber Risk Quantification", iconName: "Activity", desc: "Pull vulnerabilities and Issues to Onyxia to proactively report on your real-time risk posture." },
  { name: "Safe Security", category: "Cyber Risk Quantification", iconName: "Shield", desc: "Integrate with Safe Security to prioritize risk management based on financial ROI and threat exposure." },

  // --- Data Security Scanners ---
  { name: "Amazon Macie", category: "Data Security Scanners", iconName: "Aws", desc: "Ingest findings from Amazon Macie into Devopstrio for centralized data security visibility." },
  { name: "Bedrock Security", category: "Data Security Scanners", iconName: "Shield", desc: "Enrich Devopstrio with Bedrock Security data findings (Preview) to protect sensitive cloud data." },
  { name: "BigID", category: "Data Security Scanners", iconName: "Layers", desc: "Enrich Devopstrio with BigID's data findings and pull Devopstrio Issues for a bidirectional flow (Preview)." },
  { name: "Cyera", category: "Data Security Scanners", iconName: "Shield", desc: "Enrich Devopstrio with Cyera's data findings and pull Devopstrio Issues for a bidirectional flow (Preview)." },
  { name: "Dig Security", category: "Data Security Scanners", iconName: "Search", desc: "Enrich Devopstrio with Dig Security's data findings and pull Devopstrio Issues for a bidirectional flow." },
  { name: "Laminar", category: "Data Security Scanners", iconName: "Layers", desc: "Enrich Devopstrio with Laminar's data findings and pull Devopstrio Issues for a bidirectional flow." },
  { name: "Proofpoint DSPM", category: "Data Security Scanners", iconName: "Shield", desc: "Enrich Devopstrio with Proofpoint DSPM findings and pull Issues to Proofpoint for infrastructure context." },
  { name: "Sentra", category: "Data Security Scanners", iconName: "Activity", desc: "Enrich Devopstrio with Sentra Data Security findings to identify and protect sensitive data assets." },

  // --- Data & AI ---
  { name: "OpenAI Platform (Data)", category: "Data & AI", iconName: "Zap", desc: "Connect your OpenAI enterprise organizations to gain visibility to your AI models, jobs, and datasets." },
  { name: "Snowflake Connector", category: "Data & AI", iconName: "Layers", desc: "Connect to your Snowflake organization across clouds to scan for sensitive data and ensure compliance." },

  // --- Data Lake & Analytics ---
  { name: "CloudQuery", category: "Data Lake & Analytics", iconName: "Search", desc: "Query across a variety of assets in Devopstrio and other security tools through your CloudQuery console." },
  { name: "Cribl", category: "Data Lake & Analytics", iconName: "Zap", desc: "Integrate Cribl Stream to seamlessly send Devopstrio data to multiple platforms for unified logging." },
  { name: "Dassana", category: "Data Lake & Analytics", iconName: "Layers", desc: "Pull vulnerabilities and inventory into Dassana for analytics on your Snowflake database." },
  { name: "Databahn API", category: "Data Lake & Analytics", iconName: "Activity", desc: "Pull Devopstrio Issues, findings and audit logs into Databahn platform for advanced threat analysis." },
  { name: "Elastic", category: "Data Lake & Analytics", iconName: "Search", desc: "Ingest Devopstrio issues, vulnerabilities, and audit logs to Elastic to correlate across multiple tools." },
  { name: "Polarity", category: "Data Lake & Analytics", iconName: "Monitor", desc: "Send Devopstrio vulnerabilities and Issues to Polarity to query across different tools in a single view." },
  { name: "Snowflake", category: "Data Lake & Analytics", iconName: "Layers", desc: "Export Devopstrio reports directly to your Snowflake databases for large-scale security analytics." },
  { name: "Sola", category: "Data Lake & Analytics", iconName: "Shield", desc: "Send Devopstrio Issues and Findings to Sola to enhance your cloud data security posture." },
  { name: "TargetBoard", category: "Data Lake & Analytics", iconName: "Target", desc: "Send Devopstrio issues to TargetBoard for consolidated security reporting and visibility." },
  { name: "Tarsal", category: "Data Lake & Analytics", iconName: "Activity", desc: "Pull Devopstrio audit logs to Tarsal to be sent to security destinations of your choice." },

  // --- Developer Tools ---
  { name: "Backstage", category: "Developer Tools", iconName: "Layers", desc: "Pull Devopstrio issues and vulnerabilities related to Backstage entities to provide security context to developers." },
  { name: "HashiCorp", category: "Developer Tools", iconName: "Code", desc: "Connect your Terraform to scan your Infrastructure as Code (IaC) templates for misconfigurations." },
  { name: "JetBrains", category: "Developer Tools", iconName: "Monitor", desc: "Integrate with JetBrains IDEs to locally scan your code for vulnerabilities before committing." },
  { name: "Lovable", category: "Developer Tools", iconName: "Zap", desc: "Use Devopstrio CLI to scan Lovable AI-generated code for vulnerabilities before deployment.", isNew: true },
  { name: "StackGen", category: "Developer Tools", iconName: "Layers", desc: "Connect Devopstrio CLI to the StackGen platform to orchestrate secure application delivery." },
  { name: "Terraform Provider", category: "Developer Tools", iconName: "Code", desc: "Use the Terraform provider to seamlessly manage security data sources and cloud resources." },

  // --- Identity Security ---
  { name: "Aembit", category: "Identity Security", iconName: "Zap", desc: "Send inventory to Aembit to block actions based on Devopstrio security posture and identity risk." },
  { name: "Britive", category: "Identity Security", iconName: "Shield", desc: "Push Devopstrio issues to Britive to ensure secure just-in-time access and identity governance." },
  { name: "Clutch Security", category: "Identity Security", iconName: "Layers", desc: "Pull Devopstrio data findings to Clutch Security to prioritize identity risks and unauthorized access." },
  { name: "ConductorOne", category: "Identity Security", iconName: "Shield", desc: "Send Devopstrio Issues and IAM data to ConductorOne for identity-aware cloud security governance.", isNew: true },
  { name: "CyberArk", category: "Identity Security", iconName: "Shield", desc: "Send Devopstrio Issues to the CyberArk Identity Security Platform to protect privileged credentials." },
  { name: "Entro Security", category: "Identity Security", iconName: "Search", desc: "Pull data findings into Entro to help prioritize identity-centric risks and vulnerabilities." },
  { name: "Linx Security", category: "Identity Security", iconName: "User", desc: "Send Devopstrio identity information to Linx to gain a unified view of identity and cloud security." },
  { name: "Oasis Security", category: "Identity Security", iconName: "Activity", desc: "Send Data Findings to Oasis to correlate identity risk and prioritize remediation efforts." },
  { name: "Okta", category: "Identity Security", iconName: "User", desc: "Connect Okta to gain visibility to your Identity Provider security and cloud access management." },
  { name: "Saviynt", category: "Identity Security", iconName: "Layers", desc: "Send Devopstrio Cloud Resources to Saviynt to automate identity governance and administration (IGA)." },
  { name: "Unosecur", category: "Identity Security", iconName: "Shield", desc: "Pull Devopstrio data findings to Unosecur to identify and mitigate identity-based threats in real-time." },

  // --- MDR ---
  { name: "Arctic Wolf", category: "MDR", iconName: "Shield", desc: "Send Devopstrio Threats, Issues and Findings to Arctic Wolf for 24/7 managed detection and response.", isNew: true },
  { name: "AWS Security Incident Response", category: "MDR", iconName: "Aws", desc: "Send Threat information from Devopstrio to AWS SIR to open cases for expert incident response teams." },
  { name: "Daylight", category: "MDR", iconName: "Zap", desc: "Send Devopstrio Defend Detections to Daylight to enhance your managed threat hunting capabilities." },
  { name: "Expel", category: "MDR", iconName: "Search", desc: "Send Devopstrio Issues to Expel to have your cloud security risks triaged and investigated by experts." },
  { name: "mnemonic", category: "MDR", iconName: "Activity", desc: "Receives Devopstrio security signals via webhook for 24/7 managed detection and response (MDR).", isNew: true },
  { name: "Red Canary", category: "MDR", iconName: "Shield", desc: "Ingest Devopstrio issues and inventory to Red Canary's MDR platform to enhance remediation at scale." },
  { name: "ReliaQuest", category: "MDR", iconName: "Layers", desc: "Pull Devopstrio Issues into ReliaQuest GreyMatter for unified triage, investigation, and response." },
  { name: "Sygnia", category: "MDR", iconName: "Search", desc: "Pull Threat Detection Issues into Sygnia for deep forensics and incident response team investigation." },
  { name: "Tamnoon", category: "MDR", iconName: "Zap", desc: "Simplify complex cloud security while increasing remediation speed and agility with Tamnoon." },
  { name: "VisionX by Smarttech247", category: "MDR", iconName: "Monitor", desc: "Pull Devopstrio issues to VisionX for unified risk reporting, expert triage, and executive dashboards." },

  // --- Network Security ---
  { name: "Aviatrix", category: "Network Security", iconName: "Activity", desc: "Send important issues and security findings to Aviatrix for automated cloud network orchestration." },
  { name: "Cato Networks", category: "Network Security", iconName: "Shield", desc: "Ingest cloud findings into Cato XOps for unified security correlation and real-time network protection.", isNew: true },
  { name: "Check Point", category: "Network Security", iconName: "Layers", desc: "Bring network context into the Security Graph to enrich cloud visibility and strengthen your overall posture." },
  { name: "Fortinet", category: "Network Security", iconName: "Shield", desc: "Send Devopstrio issues and cloud events to Fortinet to enable risk-based network protection and response." },
  { name: "Illumio", category: "Network Security", iconName: "Shield", desc: "Push Devopstrio Issues to Illumio to create secure network policies and maintain micro-segmentation at scale." },
  { name: "Netography", category: "Network Security", iconName: "Activity", desc: "Send Devopstrio vulnerabilities to Netography's network management platform for unified traffic analysis." },
  { name: "Netskope", category: "Network Security", iconName: "Layers", desc: "Integrate with Netskope to push Issues and validate secure access policies across your cloud apps." },

  // --- SaaS Security ---
  { name: "Databricks", category: "SaaS Security", iconName: "Box", desc: "Connect directly to your Databricks environment to gain full security visibility and identify data risks.", isNew: true },
  { name: "Microsoft 365", category: "SaaS Security", iconName: "Microsoft", desc: "Connect to your Microsoft 365 environment to identify security risks and configuration gaps across your SaaS stack." },

  // --- SAST/DAST ---
  { name: "Bright Security", category: "SAST/DAST", iconName: "Shield", desc: "Enrich Devopstrio with DAST findings from Bright Security to unify application-layer security and cloud posture.", isNew: true },

  // --- Secured Components ---
  { name: "Chainguard", category: "Secured Components", iconName: "Box", desc: "Automatically identify container images built on Chainguard's minimal and secured base images." },
  { name: "Docker", category: "Secured Components", iconName: "Box", desc: "Identify container images built on Docker's hardened Linux distribution to reduce attack surface." },
  { name: "echo", category: "Secured Components", iconName: "Zap", desc: "Identify Echo's base images that eliminate container CVEs at the source through automated hardening." },
  { name: "minimus", category: "Secured Components", iconName: "Box", desc: "Identify container images built on Minimus's hardened Linux distribution for secure deployments." },
  { name: "Resolved Security", category: "Secured Components", iconName: "Shield", desc: "Validated integration for secured packages and libraries provided by Resolved Security." },
  { name: "Root", category: "Secured Components", iconName: "Layers", desc: "Detect Root's secured images and perform vulnerability assessment against Root's curated security feed." },
  { name: "Seal Security", category: "Secured Components", iconName: "Shield", desc: "Identify and validate the use of Seal's secured container images to ensure supply chain integrity." },

  // --- Security Data Management ---
  { name: "AWS CloudTrail Lake", category: "Security Data Management", iconName: "Aws", desc: "Inject Devopstrio audit logs into AWS CloudTrail Lake for long-term security investigation and auditing." },
  { name: "Amazon Q", category: "Security Data Management", iconName: "Aws", desc: "Explore and query your Devopstrio security issues using natural language with Amazon Q." },
  { name: "Avalor by Zscaler", category: "Security Data Management", iconName: "Layers", desc: "Send Issues, vulnerabilities, and Cloud Configuration Findings into Avalor's security data fabric." },
  { name: "AWS Security Lake", category: "Security Data Management", iconName: "Aws", desc: "Integrate Devopstrio as a custom source in AWS Security Lake to normalize and aggregate security findings." },
  { name: "Blast Security", category: "Security Data Management", iconName: "Zap", desc: "Send Devopstrio Issues, Configuration Findings, and Resources to Blast for real-time security orchestration." },
  { name: "Brinqa", category: "Security Data Management", iconName: "Layers", desc: "Connect to Brinqa to pull assets and vulnerabilities for prioritized risk management and remediation." },
  { name: "Censys", category: "Security Data Management", iconName: "Search", desc: "Pull publicly exposed assets into Censys to populate your external attack surface (EASM) inventory." },
  { name: "Cortex IO", category: "Security Data Management", iconName: "Activity", desc: "Ingest Devopstrio issues into Cortex.io to create automated, security-centric scorecards for your organization." },
  { name: "Jed Security", category: "Security Data Management", iconName: "Layers", desc: "Pull Issues and vulnerabilities into Jed Security for cross-tool aggregation and risk scoring." },
  { name: "Monad", category: "Security Data Management", iconName: "Activity", desc: "Create a Devopstrio Connector in Monad to start pulling and normalizing multi-cloud vulnerabilities." },
  { name: "Opus", category: "Security Data Management", iconName: "Zap", desc: "Trigger security automation workflows on the Opus no-code platform based on Devopstrio findings." },
  { name: "Panaseer", category: "Security Data Management", iconName: "Monitor", desc: "Send Devopstrio inventory and vulnerabilities for continuous controls monitoring (CCM) and analytics." },
  { name: "Rescana", category: "Security Data Management", iconName: "Search", desc: "Pull Devopstrio users and exposed resources to populate Rescana's attack surface management platform." },
  { name: "Resourcely", category: "Security Data Management", iconName: "Shield", desc: "Pull cloud configuration findings into Resourcely to create automated security guardrails." },
  { name: "Roadie", category: "Security Data Management", iconName: "Layers", desc: "Pull Issues into Roadie (Backstage-based) to prioritize remediation and provide developer context." },

  // --- Threat Detection & Intelligence ---
  { name: "Amazon GuardDuty", category: "Threat Detection & Intelligence", iconName: "Aws", desc: "Connect your AWS environment to gain deep visibility into your subscription-level security threats." },
  { name: "Cado Security", category: "Threat Detection & Intelligence", iconName: "Search", desc: "Use automated forensics capabilities to trigger deep-dive investigations into compromised assets with Cado." },
  { name: "Cybersixgill", category: "Threat Detection & Intelligence", iconName: "Activity", desc: "Pull vulnerability findings into Cybersixgill for real-time dark web intelligence and threat enrichment." },
  { name: "Cymulate", category: "Threat Detection & Intelligence", iconName: "Target", desc: "Send real-time Defend detections to Cymulate to validate security controls and exposure management." },
  { name: "Google Threat Intelligence", category: "Threat Detection & Intelligence", iconName: "Google", desc: "Pull threat intelligence data from GTI (Chronicle) to better understand and mitigate environmental risks." },
  { name: "Azure Defender for Cloud", category: "Threat Detection & Intelligence", iconName: "Microsoft", desc: "Connect Azure cloud logs to provide additional context and high-fidelity detections related to security events." },
  { name: "SentinelOne", category: "Threat Detection & Intelligence", iconName: "Shield", desc: "Enrich platform with runtime findings and pull Issues into SentinelOne's Singularity XDR for unified response." },
  { name: "Sevco", category: "Threat Detection & Intelligence", iconName: "Layers", desc: "Pull resources into Sevco for comprehensive asset tracking and exposure management across the hybrid cloud." },
  { name: "Tidal", category: "Threat Detection & Intelligence", iconName: "Activity", desc: "Pull MITRE ATT&CK compliance reports to organize threats and measure detection coverage against industry frameworks." },

  // --- Vulnerability Management & Response ---
  { name: "Check Point Threat Exposure Management", category: "Vulnerability Management & Response", iconName: "Layers", desc: "Pull Devopstrio Vulnerabilities into Check Point Threat Exposure Management for automated risk mitigation." },
  { name: "Armis", category: "Vulnerability Management & Response", iconName: "Activity", desc: "Send Devopstrio inventory reports to the Armis asset management platform for unified device visibility." },
  { name: "Armis VIPR", category: "Vulnerability Management & Response", iconName: "Zap", desc: "Send Devopstrio findings to Armis VIPR to trigger automated security remediation and response workflows." },
  { name: "ArmorCode", category: "Vulnerability Management & Response", iconName: "Shield", desc: "Ingest Issues and detected vulnerabilities into ArmorCode for cross-tool risk correlation." },
  { name: "Averlon", category: "Vulnerability Management & Response", iconName: "Activity", desc: "Send vulnerabilities and configuration findings to Averlon for advanced risk quantification." },
  { name: "Axonius", category: "Vulnerability Management & Response", iconName: "Layers", desc: "Comprehensive IT asset inventory to help enforce and validate network security policies." },
  { name: "Daxa", category: "Vulnerability Management & Response", iconName: "Shield", desc: "Send Devopstrio vulnerabilities to the Daxa platform for specialized cloud vulnerability management." },
  { name: "Hackuity", category: "Vulnerability Management & Response", iconName: "Search", desc: "Pull vulnerabilities and resources into Hackuity to prioritize remediation based on risk scores." },
  { name: "IONIX", category: "Vulnerability Management & Response", iconName: "Activity", desc: "Send issues, vulnerabilities, and network exposures to IONIX for attack surface management." },
  { name: "Ivanti", category: "Vulnerability Management & Response", iconName: "Shield", desc: "Pull vulnerabilities and cloud findings into Ivanti for prioritized patching and remediation." },
  { name: "Kenna", category: "Vulnerability Management & Response", iconName: "Activity", desc: "Integrate platform vulnerability scanner with Kenna's risk-based vulnerability management tool." },
  { name: "Kondukto", category: "Vulnerability Management & Response", iconName: "Zap", desc: "Pull vulnerabilities into Kondukto to triage and remediate security risks across your entire stack." },
  { name: "Maze", category: "Vulnerability Management & Response", iconName: "Layers", desc: "Pull vulnerability findings into Maze for unified cloud vulnerability management and tracking." },
  { name: "NopSec", category: "Vulnerability Management & Response", iconName: "Target", desc: "Pull Devopstrio issues and vulnerabilities to NopSec for automated prioritization and response." },
  { name: "Nucleus", category: "Vulnerability Management & Response", iconName: "Shield", desc: "Pull vulnerabilities and cloud findings into Nucleus Security for unified vulnerability management." },
  { name: "Precize", category: "Vulnerability Management & Response", iconName: "Activity", desc: "Pull Devopstrio Issues and network exposures into Precize for automated risk prioritization." },
  { name: "Qualys", category: "Vulnerability Management & Response", iconName: "Shield", desc: "Pull vulnerabilities into Qualys TruRisk management for consolidating and prioritizing risks." },
  { name: "Seemplicity", category: "Vulnerability Management & Response", iconName: "Zap", desc: "Send vulnerabilities to the Seemplicity platform for automated remediation operations." },
  { name: "ServiceNow CVR", category: "Vulnerability Management & Response", iconName: "Briefcase", desc: "Pull container image vulnerabilities to ServiceNow CVR to create automated findings and items." },
  { name: "ServiceNow VR", category: "Vulnerability Management & Response", iconName: "Briefcase", desc: "Import and automatically group vulnerabilities findings to remediate critical risks quickly." },
  { name: "Tenable One (Vulcan)", category: "Vulnerability Management & Response", iconName: "Shield", desc: "Pull issues, vulnerabilities, and resources into the Tenable One platform for unified exposure management." },
  { name: "Wabbi", category: "Vulnerability Management & Response", iconName: "Code", desc: "Send vulnerabilities to Wabbi to prioritize security findings directly within the SDLC process." },

  // --- Vulnerability Scanners ---
  { name: "Microsoft Defender VM", category: "Vulnerability Scanners", iconName: "Microsoft", desc: "Connect with Microsoft Defender Vulnerability Management to aggregate and unify vulnerability data.", isNew: true },
  { name: "Qualys VMDR", category: "Vulnerability Scanners", iconName: "Shield", desc: "Import Qualys VMDR scan results into the platform for unified vulnerability management (Preview)." },
  { name: "Rapid7 InsightVM", category: "Vulnerability Scanners", iconName: "Search", desc: "Fetch InsightVM's vulnerability findings and related resources to ingest them into the unified platform." },
  { name: "Tenable Security Center", category: "Vulnerability Scanners", iconName: "Shield", desc: "Connect Tenable Security Center to create a centralized location for viewing and analyzing vulnerability scans." },
  { name: "Tenable VM", category: "Vulnerability Scanners", iconName: "Shield", desc: "Import Tenable VM scan results into the platform for unified, risk-based vulnerability management (Preview)." },

  // --- TICKETING & MESSAGING ---
  { name: "Azure DevOps", category: "Ticketing & Messaging", iconName: "Microsoft", desc: "Create a new Azure DevOps work item to track and remediate security issues within your development sprints." },
  { name: "Cisco Webex", category: "Ticketing & Messaging", iconName: "Activity", desc: "Notify your Webex teams on platform issues to ensure real-time awareness and collaboration." },
  { name: "ClickUp", category: "Ticketing & Messaging", iconName: "Layers", desc: "Create tasks in ClickUp on detected Issues or Controls for unified project and task management." },
  { name: "Fresh Service", category: "Ticketing & Messaging", iconName: "Briefcase", desc: "Send Issues to Freshservice and automatically generate tickets for your IT service desk." },
  { name: "Google Chat", category: "Ticketing & Messaging", iconName: "Google", desc: "Send message with security issue information directly to your specified Google Chat rooms." },
  { name: "Jira", category: "Ticketing & Messaging", iconName: "Activity", desc: "Open and update tickets on security issues in your projects to ensure end-to-end tracking.", trending: true },
  { name: "Linear", category: "Ticketing & Messaging", iconName: "Target", desc: "Open and update Linear issues based on security findings for modern engineering teams." },
  { name: "Microsoft Teams", category: "Ticketing & Messaging", iconName: "Microsoft", desc: "Alert your Teams channels on detected Issues to facilitate rapid response and discussion." },
  { name: "monday.com", category: "Ticketing & Messaging", iconName: "Layers", desc: "Send security issues to the monday.com work management platform for streamlined remediation tracking." },
  { name: "Opsgenie", category: "Ticketing & Messaging", iconName: "Activity", desc: "Create and close alerts in Opsgenie for detected platform issues to manage on-call rotations." },
  { name: "PagerDuty", category: "Ticketing & Messaging", iconName: "Target", desc: "Create and resolve incidents in your PagerDuty service on detected issues to reduce MTTR." },
  { name: "ServiceNow ITSM", category: "Ticketing & Messaging", iconName: "Briefcase", desc: "Open and update a ServiceNow ticket in one of your tables for enterprise IT governance." },
  { name: "Slack", category: "Ticketing & Messaging", iconName: "Zap", desc: "Send Slack messages to your channels using SlackBot for real-time security alerting.", trending: true },
  { name: "Zendesk", category: "Ticketing & Messaging", iconName: "Search", desc: "Open and update tickets on platform issues in your projects for customer-centric security response." },

  // --- SIEM ---
  { name: "Anvilogic", category: "SIEM", iconName: "Zap", desc: "Pull Devopstrio Issues in Anvilogic to run threat detections across multiple security tools." },
  { name: "AWS Security Hub", category: "SIEM", iconName: "Aws", desc: "Send Issues notification to Security Hub to centralize cloud security posture management." },
  { name: "Datadog", category: "SIEM", iconName: "Monitor", desc: "Pull Devopstrio Issues and audit logs into Datadog SIEM for unified log management and investigations." },
  { name: "Devo", category: "SIEM", iconName: "Activity", desc: "Send issues, vulnerabilities, cloud configuration findings, and audit logs to Devo for high-scale analytics." },
  { name: "Exabeam", category: "SIEM", iconName: "Search", desc: "Push Devopstrio Issues to your Exabeam instance proactively for behavioral analytics and threat detection." },
  { name: "Google Security Operations", category: "SIEM", iconName: "Google", desc: "Export the Devopstrio issues to your Google Chronicle SIEM for planetary-scale security analytics." },
  { name: "Hunters", category: "SIEM", iconName: "Target", desc: "Ingest Devopstrio Issues into Hunters SOC platform for autonomous threat hunting and correlation." },
  { name: "IBM QRadar SIEM", category: "SIEM", iconName: "Shield", desc: "Set Devopstrio as a data log source to integrate Devopstrio issues into your QRadar cloud security workflows." },
  { name: "Microsoft Sentinel", category: "SIEM", iconName: "Microsoft", desc: "Connect Devopstrio with Azure Sentinel to ingest Devopstrio Issues, Detections, and Audit Logs." },
  { name: "Panther Labs", category: "SIEM", iconName: "Shield", desc: "Send Devopstrio vulnerabilities, audit logs, and Issues to Panther for centralized, code-driven investigation." },
  { name: "Securonix", category: "SIEM", iconName: "Activity", desc: "Send Issues and vulnerabilities to Securonix's SIEM platform for next-gen threat detection." },
  { name: "Sekoia", category: "SIEM", iconName: "Shield", desc: "Send issues, vulnerabilities, cloud configuration findings, and audit logs to Sekoia for unified monitoring." },
  { name: "Splunk", category: "SIEM", iconName: "Activity", desc: "Send Issues to get insights into threats, vulnerabilities, and identity information in Splunk." },
  { name: "Sumo Logic", category: "SIEM", iconName: "Layers", desc: "Send Issues to get insights into threats, vulnerabilities, and identity information across your cloud stack." },

  // --- SOAR & Automation ---
  { name: "Blinkops", category: "SOAR & Automation", iconName: "Zap", desc: "Automate your security operations with the BlinkOps integration for rapid incident response." },
  { name: "Botprise", category: "SOAR & Automation", iconName: "Monitor", desc: "Send Devopstrio Issues to Botprise to create no-code automation workflows for cloud remediation." },
  { name: "Cortex XSOAR", category: "SOAR & Automation", iconName: "Shield", desc: "Automate and orchestrate your XSOAR security operations based on real-time platform findings." },
  { name: "Cyware", category: "SOAR & Automation", iconName: "Layers", desc: "Send Devopstrio Issues to the Cyware portal for unified threat intelligence and collaboration." },
  { name: "D3 Security", category: "SOAR & Automation", iconName: "Activity", desc: "Pull Issues to D3 to run remediation playbooks and automatically update statuses in the platform." },
  { name: "DevOcean", category: "SOAR & Automation", iconName: "Zap", desc: "Send vulnerabilities and Issues to DevOcean for automated cloud security remediation." },
  { name: "Dropzone AI (API)", category: "SOAR & Automation", iconName: "Activity", desc: "Send Devopstrio Issues, Threats, and Detections to Dropzone AI via API for automated investigation." },
  { name: "Dropzone AI (Webhook)", category: "SOAR & Automation", iconName: "Zap", desc: "Send real-time Issues and Detections to Dropzone AI via Webhook for immediate triage." },
  { name: "Exaforce", category: "SOAR & Automation", iconName: "Shield", desc: "Send Devopstrio Threats and Findings to the Exaforce platform for automated SOC triage and response.", isNew: true },
  { name: "IBM QRadar SOAR", category: "SOAR & Automation", iconName: "Shield", desc: "Pull Issues and vulnerabilities into QRadar SOAR to execute complex remediation playbooks." },
  { name: "Intezer", category: "SOAR & Automation", iconName: "Search", desc: "Push Devopstrio detections to Intezer for autonomous triage, forensics, and incident investigation." },
  { name: "Prophet Security", category: "SOAR & Automation", iconName: "Activity", desc: "Pull vulnerabilities and inventory into Prophet to automate security investigations and reporting." },
  { name: "Swimlane", category: "SOAR & Automation", iconName: "Zap", desc: "Send Devopstrio Issues, Findings, and Resources to Swimlane for low-code security automation." },
  { name: "Tines", category: "SOAR & Automation", iconName: "Layers", desc: "Ingest security data into Tines no-code automation platform for flexible security workflows." },
  { name: "Torq", category: "SOAR & Automation", iconName: "Zap", desc: "Create security automation flows triggered by Devopstrio Issues for hyper-automated cloud security." },
  { name: "Workato", category: "SOAR & Automation", iconName: "Activity", desc: "Pull Devopstrio Issues, Findings, and resources into Workato to orchestrate enterprise-wide automation." },

  // --- SSPM ---
  { name: "Adaptive Shield", category: "SSPM", iconName: "Shield", desc: "Integrate with Adaptive Shield by Crowdstrike to manage Devopstrio users, roles, and configuration risks." },
  { name: "AppOmni", category: "SSPM", iconName: "Monitor", desc: "Integrate Devopstrio to AppOmni to manage users, roles, and security risks across your SaaS tenant." },
  { name: "Obsidian Security", category: "SSPM", iconName: "Layers", desc: "Pull Devopstrio users and audit logs into Obsidian for protecting and monitoring your cloud security tenant." },
  { name: "Reco", category: "SSPM", iconName: "Shield", desc: "Integrate with Reco to manage users, roles, and security risks with automated posture management." },
  { name: "Savvy Security", category: "SSPM", iconName: "User", desc: "Pull Devopstrio users and audit logs into Savvy Security by Sailpoint for identity-centric posture management." },
  { name: "Valence Security", category: "SSPM", iconName: "Shield", desc: "Integrate with Valence to manage users and associated risks across your SaaS and cloud platforms." },
];

const MicrosoftLogo = () => (
  <svg viewBox="0 0 23 23" className="w-5 h-5 flex-shrink-0" fill="currentColor">
    <rect width="10.7" height="10.7" fill="#f25022" />
    <rect x="11.8" width="10.7" height="10.7" fill="#7fba00" />
    <rect y="11.8" width="10.7" height="10.7" fill="#00a4ef" />
    <rect x="11.8" y="11.8" width="10.7" height="10.7" fill="#ffb900" />
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-[#FF9900]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.29 14.29c-.39.39-1.02.39-1.41 0L12 14.41l-1.88 1.88c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L10.59 13l-1.88-1.88a.996.996 0 1 1 1.41-1.41L12 11.59l1.88-1.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 13l1.88 1.88c.38.39.38 1.03 0 1.41z" />
  </svg>
);

const getIcon = (name: string) => {
  switch (name) {
    case "Microsoft":
      return <MicrosoftLogo />;
    case "Aws":
    case "AWS":
      return <Cloud className="w-5 h-5 text-rose-500 flex-shrink-0" />;
    case "Google":
      return <Globe className="w-5 h-5 text-blue-500 flex-shrink-0" />;
    case "Github":
      return <Github className="w-5 h-5 text-white flex-shrink-0" />;
    case "Gitlab":
      return <Gitlab className="w-5 h-5 text-orange-500 flex-shrink-0" />;
    case "Bitbucket":
      return <GitPullRequest className="w-5 h-5 text-blue-400 flex-shrink-0" />;
    case "Slack":
      return <Slack className="w-5 h-5 text-purple-400 flex-shrink-0" />;
    case "Jira":
      return <Layers className="w-5 h-5 text-blue-500 flex-shrink-0" />;
    case "Zap":
      return <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />;
    case "Shield":
      return <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
    case "Cpu":
      return <Cpu className="w-5 h-5 text-rose-500 flex-shrink-0" />;
    case "Activity":
      return <Activity className="w-5 h-5 text-cyan-500 flex-shrink-0" />;
    case "Database":
      return <Database className="w-5 h-5 text-indigo-500 flex-shrink-0" />;
    case "Monitor":
      return <Monitor className="w-5 h-5 text-violet-500 flex-shrink-0" />;
    case "Code":
      return <Code className="w-5 h-5 text-rose-500 flex-shrink-0" />;
    case "Target":
      return <Target className="w-5 h-5 text-red-500 flex-shrink-0" />;
    case "Box":
      return <Box className="w-5 h-5 text-yellow-500 flex-shrink-0" />;
    case "Layers":
      return <Layers className="w-5 h-5 text-blue-400 flex-shrink-0" />;
    case "Briefcase":
      return <Briefcase className="w-5 h-5 text-emerald-600 flex-shrink-0" />;
    case "Book":
      return <Book className="w-5 h-5 text-orange-400 flex-shrink-0" />;
    case "FileText":
      return <FileText className="w-5 h-5 text-teal-500 flex-shrink-0" />;
    case "BookOpen":
      return <BookOpen className="w-5 h-5 text-sky-500 flex-shrink-0" />;
    case "Map":
      return <Map className="w-5 h-5 text-lime-500 flex-shrink-0" />;
    case "User":
      return <User className="w-5 h-5 text-purple-500 flex-shrink-0" />;
    default:
      return <Zap className="w-5 h-5 text-rose-500 flex-shrink-0" />;
  }
};

export const IntegrationsExplorer = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const searchFiltered = integrations.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const counts = searchFiltered.reduce((acc: Record<string, number>, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const allCats = [...new Set(integrations.map((i) => i.category))].sort();

    const sortedCats = allCats.map((name) => ({
      name,
      count: counts[name] || 0,
    }));

    return [{ name: "All", count: searchFiltered.length }, ...sortedCats];
  }, [searchQuery]);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const popularIntegrations = useMemo(() => {
    return integrations.filter((i) => i.trending).slice(0, 3);
  }, []);

  return (
    <div className="w-full text-white font-sans mt-8">
      {/* Search Bar Wrapper */}
      <div className="max-w-4xl mb-12">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-rose-500" />
          <input
            type="text"
            placeholder="Search ecosystem integrations..."
            className="w-full bg-zinc-950/80 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-500 transition-all duration-300 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar categories navigation */}
        <aside className="w-full lg:w-72 shrink-0 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-4 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="text-[10px] font-bold tracking-widest text-zinc-550 mb-4 uppercase px-3">
            Categories
          </div>
          <nav className="flex flex-col gap-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`w-full flex items-center justify-between text-left py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${activeCategory === cat.name
                    ? "bg-rose-950/20 text-rose-500 border-l-2 border-rose-500 pl-4 font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
                  }`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <span>{cat.name}</span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded ${activeCategory === cat.name
                    ? "bg-rose-950/40 text-rose-400"
                    : "bg-zinc-900 text-zinc-500"
                  }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Catalog Main list */}
        <main className="flex-grow w-full">
          {activeCategory === "All" && searchQuery === "" ? (
            <div className="space-y-12">
              {/* Popular section */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-[1px] w-4 bg-rose-600"></span>
                  <h3 className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                    Popular Integrations
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {popularIntegrations.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col justify-between bg-zinc-950/50 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-4 text-rose-500 group-hover:scale-105 transition-transform duration-300">
                          {getIcon(item.iconName)}
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2 group-hover:text-rose-100 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                          {item.desc}
                        </p>
                      </div>
                      <div className="border-t border-zinc-900/60 pt-3 mt-auto flex items-center justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-semibold">
                          {item.category}
                        </span>
                        <ArrowUpRight size={11} className="text-zinc-500 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Grouped Categories Lists */}
              {categories
                .filter((c) => c.name !== "All")
                .map((cat) => {
                  const catIntegrations = integrations.filter(
                    (i) => i.category === cat.name
                  );
                  if (catIntegrations.length === 0) return null;

                  return (
                    <section key={cat.name} className="border-t border-zinc-900/60 pt-8">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="h-[1px] w-4 bg-rose-600"></span>
                        <h3 className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                          {cat.name}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {catIntegrations.map((item, idx) => (
                          <div
                            key={idx}
                            className="group flex gap-4 bg-zinc-950/20 border border-zinc-900 hover:border-rose-500/10 rounded-xl p-4 transition-all duration-200"
                          >
                            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 group-hover:border-rose-500/20 transition-all shrink-0">
                              {getIcon(item.iconName)}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1.5">
                                <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                                  {item.name}
                                </h4>
                                {item.isNew && (
                                  <span className="text-[8px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">
                                    NEW
                                  </span>
                                )}
                                {item.trending && (
                                  <span className="text-[8px] font-bold bg-rose-500/10 text-rose-450 px-1.5 py-0.5 rounded">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                })}
            </div>
          ) : (
            /* Single Category / Search Results view */
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[1px] w-4 bg-rose-600"></span>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  {activeCategory === "All" ? "Search Results" : activeCategory}
                </h3>
              </div>

              {filteredIntegrations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredIntegrations.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-4 bg-zinc-950/20 border border-zinc-900 hover:border-rose-500/10 rounded-xl p-4 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 group-hover:border-rose-500/20 transition-all shrink-0">
                        {getIcon(item.iconName)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                            {item.name}
                          </h4>
                          {item.isNew && (
                            <span className="text-[8px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                          {item.trending && (
                            <span className="text-[8px] font-bold bg-rose-500/10 text-rose-450 px-1.5 py-0.5 rounded">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-zinc-500 leading-relaxed font-light mb-2">
                          {item.desc}
                        </p>
                        <span className="text-[8px] text-zinc-550 uppercase font-bold tracking-wider block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-zinc-900 rounded-2xl bg-zinc-950/10">
                  <HelpCircle className="w-10 h-10 text-zinc-650 mx-auto mb-4" />
                  <p className="text-zinc-500 text-xs font-light">
                    No integrations found matching your search.
                  </p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
