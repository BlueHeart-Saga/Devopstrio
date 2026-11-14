import { normalizeDisplayText } from "@/lib/text-utils";

export interface ServiceProfileData {
  challengeTitle: string;
  challengePoints: string[];
  solutionTitle: string;
  solutionDesc: string;
  deliverables: string[];
  complianceHighlights: string[];
  faqs: { q: string; a: string }[];
}

export function getServiceProfile(
  serviceSlug: string,
  cityName: string,
  countryCode: "uk" | "india" | "us"
): ServiceProfileData {
  const c = cityName.trim();
  const countryName = countryCode === "uk" ? "the United Kingdom" : countryCode === "india" ? "India" : "the United States";
  const sovereignRegion =
    countryCode === "uk"
      ? "UK sovereign cloud zones (AWS London, Azure UK South, and GCP europe-west2)"
      : countryCode === "india"
      ? "Indian sovereign cloud zones (AWS Mumbai, Azure Central India, and GCP asia-south1)"
      : "US sovereign cloud availability zones (AWS US East/West, Azure Central/East, and GCP us-central1)";

  switch (serviceSlug) {
    case "cloud-services":
      return {
        challengeTitle: `Managing Multi-Cloud Governance and Cost Sprawl in ${c}`,
        challengePoints: [
          `Organizations across ${c} face fragmented cloud governance across AWS, Microsoft Azure, and Google Cloud environments.`,
          `Over-provisioned compute resources and unbudgeted data egress inflate monthly operational infrastructure expenses.`,
          `Ensuring continuous multi-account compliance, IAM security controls, and sovereign data residency.`
        ],
        solutionTitle: `Enterprise Multi-Cloud Architecture and FinOps Governance for ${c}`,
        solutionDesc: `Devopstrio engineers standardized Infrastructure as Code landing zones, automated cost-rightsizing, and continuous compliance monitoring for ${c} enterprises.`,
        deliverables: [
          "Declarative Terraform and OpenTofu infrastructure modules",
          "Automated FinOps cost governance and idle resource reclamation",
          `Sovereign multi-region cloud landing zones in ${sovereignRegion}`,
          "Contractual enterprise incident triage SLAs"
        ],
        complianceHighlights: ["ISO 27001 Aligned", "SOC-2 Type II Aligned", "Sovereign Cloud Hosting", "Cyber Essentials Aligned"],
        faqs: [
          {
            q: `What cloud platforms does Devopstrio manage for organizations in ${c}?`,
            a: `We provide certified multi-cloud architecture and continuous management across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).`
          },
          {
            q: `How do you control and reduce monthly cloud expenditures for ${c} teams?`,
            a: `Our FinOps certified practitioners perform automated rightsizing, commit lifecycle management, and anomaly alerts, routinely saving clients 20% to 35% on infrastructure bills.`
          },
          {
            q: `How do you ensure data residency for workloads in ${c}?`,
            a: `All client data, databases, and logs are hosted strictly in sovereign availability zones (${sovereignRegion}) compliant with local regulations.`
          }
        ]
      };

    case "cloud-migration":
      return {
        challengeTitle: `Eliminating Legacy Data Center Lock-In and Cutover Downtime in ${c}`,
        challengePoints: [
          `Migrating legacy VMware and on-premises workloads across ${c} without risking business-critical operational disruptions.`,
          `Database replication lag, network latency spikes, and complex data cutover windows during live migrations.`,
          `Modernizing monolithic architectures into scalable container platforms during the migration process.`
        ],
        solutionTitle: `Phased Zero-Downtime Cloud Migration Framework for ${c}`,
        solutionDesc: `We execute automated migration runbooks featuring continuous data replication, dual-run canary deployments, and zero-downtime cutover validation.`,
        deliverables: [
          "Discovery dependency mapping and cloud readiness assessment",
          "Continuous asynchronous database replication pipelines",
          "Automated canary traffic validation and rollback automation",
          "Post-migration performance and resource optimization"
        ],
        complianceHighlights: ["Zero Cutover Downtime Methodology", "ISO 27001 Aligned", "SOC-2 Type II Aligned", "Data Integrity Verification"],
        faqs: [
          {
            q: `How does Devopstrio ensure zero downtime during a cloud migration in ${c}?`,
            a: `We utilize dual-run canary architectures and continuous data synchronization, allowing workloads to be thoroughly validated in the target cloud before final cutover.`
          },
          {
            q: `Can you migrate legacy on-premises VMware environments in ${c}?`,
            a: `Yes. We evaluate legacy virtualization estates and re-platform workloads onto modern cloud-native infrastructure or containerized Kubernetes clusters.`
          },
          {
            q: `What is the typical timeframe for a cloud migration project in ${c}?`,
            a: `Timelines vary by estate scale; pilot migrations typically complete in 4 to 6 weeks, while enterprise-scale migrations proceed in phased 3-month waves.`
          }
        ]
      };

    case "ai-services":
      return {
        challengeTitle: `Enterprise AI Data Privacy and Private Model Deployment in ${c}`,
        challengePoints: [
          `Deploying Generative AI applications in ${c} without exposing proprietary intellectual property to public foundational APIs.`,
          `Managing high GPU inference costs, API latency spikes, and hallucinations in business workflows.`,
          `Integrating proprietary enterprise data silos into secure Retrieval-Augmented Generation (RAG) pipelines.`
        ],
        solutionTitle: `Private Sovereign AI and Enterprise LLM Engineering for ${c}`,
        solutionDesc: `Devopstrio deploys private foundational models inside client-owned Virtual Private Clouds (VPCs), guaranteeing complete data isolation and zero third-party training leakage.`,
        deliverables: [
          "Private VPC foundational model hosting (Llama, Mistral, Claude)",
          "High-velocity vector database pipelines (Qdrant, Pinecone, pgvector)",
          "Fine-tuned domain RAG agents with guardrail validations",
          "Scalable MLOps continuous model deployment and drift telemetry"
        ],
        complianceHighlights: ["Zero Model Training Leakage", "Private VPC Enclaves", "ISO 27001 Aligned", "Sovereign AI Residency"],
        faqs: [
          {
            q: `How does Devopstrio protect our proprietary data when deploying AI in ${c}?`,
            a: `We host private foundational models within your own secure VPC or on-premises infrastructure. Customer data is never shared with third-party model providers.`
          },
          {
            q: `What AI use cases do you support for enterprises in ${c}?`,
            a: `We build private knowledge retrieval agents (RAG), automated customer operations assistants, intelligent document extraction pipelines, and predictive analytics.`
          },
          {
            q: `How do you control AI inference compute costs?`,
            a: `We implement prompt caching, quantization, semantic caching, and dynamic model routing to minimize GPU utilization and compute costs.`
          }
        ]
      };

    case "cloud-managed-services":
      return {
        challengeTitle: `24/7 Production Reliability and Incident Mitigation in ${c}`,
        challengePoints: [
          `Managing round-the-clock cluster health across distributed cloud estates without developer on-call burnout in ${c}.`,
          `Preventing critical service disruptions and cascading infrastructure failures during peak usage windows.`,
          `Coordinating multi-tier incident escalation, automated threat patching, and SLA compliance.`
        ],
        solutionTitle: `Follow-the-Sun Managed SRE and 24/7 Platform Operations for ${c}`,
        solutionDesc: `Our follow-the-sun Site Reliability Engineering teams provide uninterrupted 24/7 monitoring, automated runbook self-healing, and contract-backed incident response.`,
        deliverables: [
          "Follow-the-sun 24/7 SRE active telemetry and cluster health monitoring",
          "Automated self-healing scripts for infrastructure alerts",
          "Contractual P1 incident response targets and escalation management",
          "Monthly architectural health reviews and capacity planning"
        ],
        complianceHighlights: ["24/7 SRE Coverage", "ISO 27001 Aligned", "SOC-2 Type II Aligned", "Contractual SLA Commitments"],
        faqs: [
          {
            q: `What incident response SLAs are provided for businesses in ${c}?`,
            a: `We provide contractual SLA response targets for critical P1 incidents backed by active 24/7 telemetry and dedicated engineering pods.`
          },
          {
            q: `How does follow-the-sun SRE support help our engineering team in ${c}?`,
            a: `By distributing operational monitoring across London, the US, and India, your internal developers are relieved of out-of-hours firefighting and on-call exhaustion.`
          },
          {
            q: `Do you provide proactive system maintenance and patching?`,
            a: `Yes. We automate regular OS patching, security vulnerability remediation, and container node lifecycle upgrades with zero service downtime.`
          }
        ]
      };

    case "managed-ai-services":
      return {
        challengeTitle: `Continuous AI Pipeline Reliability and Model Drift Governance in ${c}`,
        challengePoints: [
          `Maintaining high uptime and low inference latency for production AI pipelines in ${c}.`,
          `Detecting and preventing prompt drift, accuracy degradation, and API rate limit bottlenecks.`,
          `Controlling runaway GPU inference compute bills across enterprise deployments.`
        ],
        solutionTitle: `Managed Enterprise MLOps and Continuous AI Governance for ${c}`,
        solutionDesc: `Devopstrio manages production AI infrastructure with automated model drift alerts, token caching optimization, and resilient multi-model failover architectures.`,
        deliverables: [
          "24/7 MLOps pipeline monitoring and model drift detection",
          "Automated prompt caching and GPU inference cost optimization",
          "Multi-model failover orchestration and latency reduction",
          "Enterprise audit logging for model governance and safety"
        ],
        complianceHighlights: ["Enterprise AI Governance", "SOC-2 Type II Aligned", "ISO 27001 Aligned", "Strict Privacy Controls"],
        faqs: [
          {
            q: `What is included in Devopstrio's managed AI service in ${c}?`,
            a: `We provide continuous model monitoring, automated pipeline retraining, latency optimization, and 24/7 incident support for production AI applications.`
          },
          {
            q: `How do you detect and fix model drift over time?`,
            a: `We instrument automated ground-truth scoring and data distribution tracking that alerts our engineers when input distributions diverge, triggering retraining runbooks.`
          },
          {
            q: `Can you manage AI workloads deployed across multiple clouds?`,
            a: `Yes. We support multi-cloud AI architectures across AWS Bedrock/SageMaker, Azure OpenAI, and Google Cloud Vertex AI.`
          }
        ]
      };

    case "it-support-services":
      return {
        challengeTitle: `Fragmented Helpdesks and Slow Incident Resolution in ${c}`,
        challengePoints: [
          `Distributed workplace teams in ${c} experiencing slow resolution times on critical IT disruptions.`,
          `Unpatched endpoint devices, software vulnerabilities, and inconsistent identity access permissions.`,
          `Lack of proactive system health telemetry leading to unexpected server outages.`
        ],
        solutionTitle: `Proactive IT Infrastructure Support and Systems Governance for ${c}`,
        solutionDesc: `We provide integrated tier-1 through tier-3 IT infrastructure management, automated security patching, and proactive hardware and software monitoring.`,
        deliverables: [
          "Centralized service desk with contract-backed escalation targets",
          "Automated endpoint security patching and identity management",
          "Proactive server and network infrastructure telemetry",
          "Comprehensive monthly operational health and asset reports"
        ],
        complianceHighlights: ["Cyber Essentials Aligned", "ISO 27001 Aligned", "Formal Incident SLAs", "Endpoint Hardening"],
        faqs: [
          {
            q: `What IT support tiers do you deliver in ${c}?`,
            a: `We provide end-to-end coverage spanning tier-1 service desk support, tier-2 system administration, and tier-3 senior infrastructure escalation.`
          },
          {
            q: `Do you support remote and hybrid workforces in ${c}?`,
            a: `Yes. We deploy centralized remote management and monitoring (RMM) tools and Zero-Trust identity verification for secure distributed work.`
          },
          {
            q: `What response times are guaranteed for IT issues?`,
            a: `We establish clear Service Level Agreements with rapid response targets for critical and high-priority infrastructure incidents.`
          }
        ]
      };

    case "managed-it-support-services":
      return {
        challengeTitle: `Sustaining Hybrid Workplace Continuity and Security in ${c}`,
        challengePoints: [
          `Preventing operational disruptions across hybrid office and remote work environments in ${c}.`,
          `Managing multi-vendor hardware, cloud licenses, and perimeter security configurations.`,
          `Eliminating downtime for mission-critical line-of-business applications and email grids.`
        ],
        solutionTitle: `Comprehensive 24/7 Managed IT Operations and Security for ${c}`,
        solutionDesc: `Devopstrio delivers fully managed IT operations, encompassing proactive patch management, identity lifecycle governance, and 24/7 incident response.`,
        deliverables: [
          "24/7 systems monitoring and rapid incident triage desks",
          "Microsoft 365, Google Workspace, and cloud identity management",
          "Automated remote device management and vulnerability mitigation",
          "Executive quarterly IT roadmap and compliance briefings"
        ],
        complianceHighlights: ["ISO 27001 Aligned", "Cyber Essentials Aligned", "SOC-2 Type II Aligned", "SLA Incident Commitments"],
        faqs: [
          {
            q: `How does Devopstrio manage our cloud productivity suite in ${c}?`,
            a: `We administer Microsoft 365 and Google Workspace with Zero-Trust identity policies, multi-factor authentication, and automated user provisioning.`
          },
          {
            q: `What proactive maintenance is included?`,
            a: `We conduct automated patching, anti-malware definition updates, system health monitoring, and data backup verification.`
          },
          {
            q: `How quickly can we transition to Devopstrio's managed IT service?`,
            a: `Onboarding typically takes 1 to 2 weeks, during which we audit assets, deploy monitoring agents, and establish runbooks.`
          }
        ]
      };

    case "kubernetes-services":
      return {
        challengeTitle: `Orchestrating Complex Kubernetes Workloads and Cluster Drift in ${c}`,
        challengePoints: [
          `Engineering teams in ${c} struggling with complex Kubernetes cluster upgrades, ingress routing, and service mesh management.`,
          `Unoptimized pod resource requests inflating cloud compute bills by over 40%.`,
          `Configuration drift between staging and production environments causing deployment rollbacks.`
        ],
        solutionTitle: `Production Kubernetes (EKS/AKS/GKE) and GitOps Automation for ${c}`,
        solutionDesc: `We architect production-grade, autoscaling Kubernetes clusters with declarative GitOps delivery (ArgoCD), Zero-Trust network policies, and automated cost rightsizing.`,
        deliverables: [
          "Enterprise Kubernetes cluster provisioning on AWS EKS, Azure AKS, and GCP GKE",
          "Declarative GitOps deployment pipelines using ArgoCD and Flux",
          "Horizontal Pod Autoscaling (HPA) and node autoscaling with Karpenter",
          "Prometheus, Grafana, and OpenTelemetry service mesh observability"
        ],
        complianceHighlights: ["CNCF Standards", "ISO 27001 Aligned", "CIS Kubernetes Benchmarks", "SOC-2 Aligned"],
        faqs: [
          {
            q: `What Kubernetes distributions does Devopstrio support in ${c}?`,
            a: `We specialize in managed cloud Kubernetes services including AWS EKS, Microsoft Azure AKS, and Google Cloud GKE, as well as hybrid OpenShift deployments.`
          },
          {
            q: `How do you implement GitOps for Kubernetes releases?`,
            a: `We configure ArgoCD or Flux to automatically synchronize cluster configurations with declarative Git repositories, guaranteeing zero drift and instant rollbacks.`
          },
          {
            q: `How do you optimize Kubernetes infrastructure costs?`,
            a: `We deploy Karpenter for intelligent spot instance orchestration, configure Horizontal Pod Autoscalers, and rightsize pod resource requests.`
          }
        ]
      };

    case "penetration-testing":
      return {
        challengeTitle: `Defending Against Advanced Cyber Threats and Audit Pressures in ${c}`,
        challengePoints: [
          `Organizations in ${c} facing increasingly sophisticated web application, API, and cloud infrastructure attack vectors.`,
          `Meeting rigorous annual compliance audit mandates for ISO 27001, SOC 2, and regulatory security frameworks.`,
          `Undiscovered security vulnerabilities across microservices and external attack perimeters.`
        ],
        solutionTitle: `Full-Scope Penetration Testing and Threat Remediation for ${c}`,
        solutionDesc: `Our certified security specialists conduct thorough manual and automated penetration tests across external networks, web apps, APIs, and cloud configurations.`,
        deliverables: [
          "Comprehensive web application, cloud infrastructure, and API penetration testing",
          "Prioritized vulnerability mitigation roadmaps with remediation validation",
          "Executive and board-level risk attestation reports for compliance audits",
          "Zero-Trust network segmentation and cloud security posture reviews"
        ],
        complianceHighlights: ["CREST and OWASP Aligned", "ISO 27001 Aligned", "SOC-2 Type II Aligned", "Cyber Essentials Aligned"],
        faqs: [
          {
            q: `What methodology do your penetration testers follow in ${c}?`,
            a: `We align our testing with OWASP Top 10, OSSTMM, and PTES standards, combining automated threat detection with comprehensive manual exploitation.`
          },
          {
            q: `What deliverables will we receive after the test?`,
            a: `You receive a detailed technical report with risk scores, proof-of-concept evidence, step-by-step remediation guidance, and an executive summary.`
          },
          {
            q: `Do you perform re-testing after we remediate the vulnerabilities?`,
            a: `Yes. We provide re-testing to verify that all discovered vulnerabilities have been effectively patched before issuing final compliance certificates.`
          }
        ]
      };

    case "software-development":
      return {
        challengeTitle: `Accelerating Product Velocity and Resolving Technical Debt in ${c}`,
        challengePoints: [
          `Engineering leaders in ${c} hindered by monolithic codebases, slow release cycles, and regression defects.`,
          `Scaling distributed software architecture to handle unpredictable enterprise customer workloads.`,
          `Bridging specialized engineering skill gaps across Next.js, TypeScript, cloud microservices, and distributed databases.`
        ],
        solutionTitle: `Domain-Driven Cloud-Native Software Engineering for ${c}`,
        solutionDesc: `Devopstrio delivers resilient, high-velocity software engineering pods that design modern microservices, responsive web applications, and automated test pipelines.`,
        deliverables: [
          "Modern full-stack application development in Next.js, React, Node.js, and TypeScript",
          "Event-driven microservice architectures and high-throughput REST/GraphQL APIs",
          "Automated unit, integration, and end-to-end regression test suites",
          "Continuous CI/CD pipeline automation with automated canary deployments"
        ],
        complianceHighlights: ["Agile Engineering Standards", "ISO 27001 Aligned", "SOC-2 Type II Aligned", "Clean Code Architecture"],
        faqs: [
          {
            q: `What software engineering technology stack does Devopstrio specialize in for ${c}?`,
            a: `We engineer production software using Next.js, React, Node.js, TypeScript, Python, Go, and cloud-native databases including PostgreSQL, DynamoDB, and Redis.`
          },
          {
            q: `How do you integrate with our existing engineering teams?`,
            a: `We provide dedicated co-delivery pods that integrate directly into your sprint rituals, Jira boards, and GitHub pull request review cycles.`
          },
          {
            q: `Do you build automated tests as part of the development process?`,
            a: `Yes. We implement automated test suites encompassing unit testing, integration tests, and Playwright end-to-end tests within your CI/CD pipeline.`
          }
        ]
      };

    default:
      // Fallback generic profile
      return {
        challengeTitle: `Addressing Scalability and Technology Infrastructure in ${c}`,
        challengePoints: [
          `Organizations across ${c} face expanding digital workloads requiring high availability and low latency.`,
          `Navigating sovereign cloud data residency, data protection regulations, and strict industry compliance.`,
          `Bridging engineering skill gaps with certified 24/7 SRE and DevOps automation pods.`
        ],
        solutionTitle: `Certified Engineering Delivery for ${c} Enterprises`,
        solutionDesc: `Devopstrio provides principal-led engineering delivery with continuous operations, automated cost controls, and rapid release velocity for ${c} teams.`,
        deliverables: [
          "Contractual enterprise incident response SLAs",
          "Continuous compliance aligned with ISO 27001 and SOC-2 standards",
          "Direct architectural consultation and sprint planning reviews",
          "Resilient multi-cloud engineering across sovereign cloud regions"
        ],
        complianceHighlights: ["ISO 27001 Aligned", "SOC-2 Type II Aligned", "Sovereign Cloud Hosting", "Formal Enterprise SLAs"],
        faqs: [
          {
            q: `Does Devopstrio provide engineering services across ${c}?`,
            a: `Yes. Devopstrio provides comprehensive engineering delivery across ${c}, backed by senior solutions architects and follow-the-sun SRE operations.`
          },
          {
            q: `What incident response SLAs are provided for businesses in ${c}?`,
            a: `We provide contractual SLA response targets for critical P1 incidents with active monitoring and dedicated engineering pods.`
          },
          {
            q: `How do you ensure regulatory compliance for ${c} organizations?`,
            a: `All infrastructure, data stores, and monitoring telemetry are hosted within sovereign cloud regions in full compliance with local regulatory frameworks.`
          }
        ]
      };
  }
}
