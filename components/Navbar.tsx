"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceCategories = [
  {
    id: "ai-data-innovation",
    name: "AI & Data Innovation",
    href: "/services/ai-data-innovation",
    items: [
      { name: "Generative AI Solutions", desc: "Enterprise LLM applications, custom fine-tuning, and semantic caching layers.", href: "/services/ai-data-innovation#generative-ai-solutions" },
      { name: "AI Agents & Automation", desc: "Stateful autonomous multi-agent workflows executing complex processes.", href: "/services/ai-data-innovation#ai-agents-automation" },
      { name: "Machine Learning Engineering", desc: "Training, validating, and deploying deep learning models at scale.", href: "/services/ai-data-innovation#machine-learning-engineering" },
      { name: "Data Engineering", desc: "High-throughput data pipelines, Kafka streaming, and unified lakehouses.", href: "/services/ai-data-innovation#data-engineering" },
      { name: "Business Intelligence & Analytics", desc: "Consolidated enterprise dashboards, telemetry, and reporting engines.", href: "/services/ai-data-innovation#business-intelligence-analytics" },
      { name: "Predictive Analytics", desc: "Time-series forecasting, customer churn and lifetime value predictive models.", href: "/services/ai-data-innovation#predictive-analytics" },
      { name: "Data Governance", desc: "Data compliance audits, cataloging, lineage tracking, and security controls.", href: "/services/ai-data-innovation#data-governance" },
      { name: "MLOps & AI Operations", desc: "Continuous training loops, model registries, drift detection, and registries.", href: "/services/ai-data-innovation#mlops-ai-operations" }
    ]
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    href: "/services/cloud-services",
    items: [
      { name: "Cloud Strategy & Consulting", desc: "Tailored architecture blueprints, vendor evaluation, and cloud readiness.", href: "/services/cloud-services#cloud-strategy-consulting" },
      { name: "Cloud Migration", desc: "Re-hosting, re-platforming, and database replication with zero downtime.", href: "/services/cloud-services#cloud-migration" },
      { name: "Azure Services", desc: "Landing zones, AKS clusters, and serverless applications on Microsoft Azure.", href: "/services/cloud-services#azure-services" },
      { name: "AWS Services", desc: "Scalable EKS grids, serverless Lambdas, and secure DynamoDB setups on AWS.", href: "/services/cloud-services#aws-services" },
      { name: "Google Cloud Services", desc: "GKE autopilot setups, BigQuery data platforms, and Vertex AI integrations on GCP.", href: "/services/cloud-services#google-cloud-services" },
      { name: "Cloud Security", desc: "Wiz security posture management, IAM policies, and key rotations.", href: "/services/cloud-services#cloud-security" },
      { name: "Cloud Managed Services", desc: "24/7 outsourced management, OS patching, and active cloud backups.", href: "/services/cloud-services#cloud-managed-services" },
      { name: "FinOps & Cost Optimization", desc: "Spend optimization, Savings Plan allocations, and traffic auto-scaling.", href: "/services/cloud-services#finops-cost-optimization" }
    ]
  },
  {
    id: "devops-automation",
    name: "DevOps & Automation",
    href: "/services/devops-automation",
    items: [
      { name: "CI/CD Implementation", desc: "Automated Git-triggered builds and testing environments.", href: "/services/devops-automation#cicd-implementation" },
      { name: "Platform Engineering", desc: "Developer self-service templates and Backstage portal configurations.", href: "/services/devops-automation#platform-engineering" },
      { name: "Infrastructure as Code", desc: "Reusable Terraform, Ansible, and Packer infrastructure setups.", href: "/services/devops-automation#infrastructure-as-code" },
      { name: "Kubernetes Services", desc: "Multi-tenant EKS, AKS, GKE clusters with Karpenter and service mesh.", href: "/services/devops-automation#kubernetes-services" },
      { name: "DevSecOps", desc: "Sonarqube SAST checks and Snyk vulnerability scanning inside pipelines.", href: "/services/devops-automation#devsecops" },
      { name: "Site Reliability Engineering (SRE)", desc: "SLI/SLO definition, error budget tracking, and pager alerts.", href: "/services/devops-automation#sre" },
      { name: "Release Automation", desc: "Canary deployments, blue-green releases, and rollback alerts.", href: "/services/devops-automation#release-automation" },
      { name: "Monitoring & Observability", desc: "Distributed OpenTelemetry tracing, Jaeger dashboards, and ELK logs.", href: "/services/devops-automation#monitoring-observability" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    items: [
      { name: "Security Assessment", desc: "Threat modeling, network configuration audits, and risk assessments.", href: "/services/cybersecurity#security-assessment" },
      { name: "Vulnerability Management", desc: "Continuous Nessus and Qualys scans, risk patching schedules.", href: "/services/cybersecurity#vulnerability-management" },
      { name: "Penetration Testing", desc: "Ethical hacking, API authorization checks, and exploit reports.", href: "/services/cybersecurity#penetration-testing" },
      { name: "Security Operations Center (SOC)", desc: "24/7 SIEM monitoring, threat hunts, and SOAR event actions.", href: "/services/cybersecurity#soc" },
      { name: "Identity & Access Management", desc: "Okta single sign-on (SSO), adaptive MFA, and PAM tools.", href: "/services/cybersecurity#identity-access-management" },
      { name: "Cloud Security", desc: "Prisma Cloud audits, micro-segmentation, and least-privilege rules.", href: "/services/cybersecurity#cloud-security" },
      { name: "Compliance & Governance", desc: "Audit readiness for SOC2, ISO27001, HIPAA, and policy planning.", href: "/services/cybersecurity#compliance-governance" },
      { name: "Zero Trust Architecture", desc: "Endpoint checks, SDP setups, and SASE security perimeters.", href: "/services/cybersecurity#zero-trust-architecture" }
    ]
  },
  {
    id: "software-development",
    name: "Software Development",
    href: "/services/software-development",
    items: [
      { name: "Enterprise Application Development", desc: "High-throughput database design and monolithic splits.", href: "/services/software-development#enterprise-application-development" },
      { name: "Web Application Development", desc: "Responsive React/Next.js platforms with advanced SEO layouts.", href: "/services/software-development#web-application-development" },
      { name: "Mobile Application Development", desc: "Flutter and native iOS/Android builds with hardware integration.", href: "/services/software-development#mobile-application-development" },
      { name: "SaaS Product Development", desc: "Multi-tenant system configurations and subscription gateways.", href: "/services/software-development#saas-product-development" },
      { name: "API Development & Integration", desc: "gRPC microservices, REST/GraphQL gateways, and OpenAPI specs.", href: "/services/software-development#api-development-integration" },
      { name: "Microservices Architecture", desc: "Event-driven Apache Kafka loops and saga pattern integration.", href: "/services/software-development#microservices-architecture" },
      { name: "Product Engineering", desc: "Rapid MVP prototyping and customer experience design sprints.", href: "/services/software-development#product-engineering" },
      { name: "Application Modernization", desc: "Monolith database decoupling and serverless architecture migrations.", href: "/services/software-development#application-modernization" }
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    href: "/services/digital-transformation",
    items: [
      { name: "Digital Strategy", desc: "IT roadmaps, cloud readiness audits, and budget optimization planning.", href: "/services/digital-transformation#digital-strategy" },
      { name: "Enterprise Modernization", desc: "Refactoring legacy mainframes to cloud-native stacks.", href: "/services/digital-transformation#enterprise-modernization" },
      { name: "Process Automation", desc: "OCR tools integration and cross-platform RPA pipelines.", href: "/services/digital-transformation#process-automation" },
      { name: "Intelligent Workflows", desc: "Customer service routing systems based on sentiment scoring.", href: "/services/digital-transformation#intelligent-workflows" },
      { name: "Customer Experience Transformation", desc: "Omni-channel client portals and ML-driven recommendation flows.", href: "/services/digital-transformation#customer-experience-transformation" },
      { name: "Legacy System Modernization", desc: "Migrating legacy ColdFusion/COBOL/PHP workloads to Go and NodeJS.", href: "/services/digital-transformation#legacy-system-modernization" },
      { name: "Business Transformation", desc: "Scaling Scrum frameworks and corporate KPI transparency models.", href: "/services/digital-transformation#business-transformation" },
      { name: "Change Management", desc: "Internal developer coaching and technology adoption guides.", href: "/services/digital-transformation#change-management" }
    ]
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    href: "/services/data-engineering",
    items: [
      { name: "Data Platform Development", desc: "Columnar databases design and multi-tier data storage setups.", href: "/services/data-engineering#data-platform-development" },
      { name: "Data Warehousing", desc: "Snowflake, Databricks, and Google BigQuery analytical platforms.", href: "/services/data-engineering#data-warehousing" },
      { name: "Data Lakes & Lakehouse", desc: "Apache Iceberg configurations and S3 parquet partitioning.", href: "/services/data-engineering#data-lakes-lakehouse" },
      { name: "ETL/ELT Pipelines", desc: "Airflow orchestrators and dbt models checking raw entries.", href: "/services/data-engineering#etl-elt-pipelines" },
      { name: "Real-Time Data Processing", desc: "Apache Spark Streaming, Flink loops, and Druid databases.", href: "/services/data-engineering#real-time-data-processing" },
      { name: "Data Quality Management", desc: "Great Expectations assertions and anomaly alerts.", href: "/services/data-engineering#data-quality-management" },
      { name: "Master Data Management", desc: "Deduplication algorithms and master record sync tools.", href: "/services/data-engineering#master-data-management" },
      { name: "Big Data Engineering", desc: "Hadoop ecosystems, Spark cluster optimizations, and Elasticsearch grids.", href: "/services/data-engineering#big-data-engineering" }
    ]
  },
  {
    id: "managed-services",
    name: "Managed Services",
    href: "/services/managed-services",
    items: [
      { name: "Managed Cloud Services", desc: "Multi-account admin support, security patches, OS updates.", href: "/services/managed-services#managed-cloud-services" },
      { name: "Managed DevOps Services", desc: "CI/CD cache optimization, environment updates, and pipeline tuning.", href: "/services/managed-services#managed-devops-services" },
      { name: "Managed Security Services", desc: "24/7 threat monitoring, WAF policies, and incident containment.", href: "/services/managed-services#managed-security-services" },
      { name: "Application Support", desc: "SLA bug resolutions, Sentry monitoring, and performance tuning.", href: "/services/managed-services#application-support" },
      { name: "Infrastructure Management", desc: "SAN configuration, hypervisor updates, and load balancers.", href: "/services/managed-services#infrastructure-management" },
      { name: "Database Administration", desc: "PostgreSQL index rebuilds, backups, and security hardening.", href: "/services/managed-services#database-administration" },
      { name: "Monitoring & Incident Management", desc: "PagerDuty escalations, custom thresholds, and root-cause post-mortems.", href: "/services/managed-services#monitoring-incident-management" },
      { name: "24/7 Support Services", desc: "Slack and phone developer help desks with fast response SLAs.", href: "/services/managed-services#247-support-services" }
    ]
  },
  {
    id: "qa-testing",
    name: "QA & Testing",
    href: "/services/qa-testing",
    items: [
      { name: "Test Automation", desc: "Playwright and Cypress end-to-end client scripts.", href: "/services/qa-testing#test-automation" },
      { name: "Performance Testing", desc: "API peak load simulations using k6 and Apache JMeter.", href: "/services/qa-testing#performance-testing" },
      { name: "Security Testing", desc: "Dependabot audits and access control authorization checks.", href: "/services/qa-testing#security-testing" },
      { name: "API Testing", desc: "JSON contract validations, Postman pipelines, and Newman scripts.", href: "/services/qa-testing#api-testing" },
      { name: "Mobile Application Testing", desc: "Appium browser farms testing native application packages.", href: "/services/qa-testing#mobile-application-testing" },
      { name: "Functional Testing", desc: "Regression testing suites and User Acceptance Testing boards.", href: "/services/qa-testing#functional-testing" },
      { name: "Continuous Testing", desc: "Parallel build integrations, code coverage checkers.", href: "/services/qa-testing#continuous-testing" },
      { name: "Quality Engineering", desc: "Shift-left methodologies, defect escape reports, and standards.", href: "/services/qa-testing#quality-engineering" }
    ]
  },
  {
    id: "it-consulting",
    name: "IT Consulting",
    href: "/services/it-consulting",
    items: [
      { name: "Technology Consulting", desc: "Cost-benefit analyses, legacy upgrade guides, and stacks selection.", href: "/services/it-consulting#technology-consulting" },
      { name: "Enterprise Architecture", desc: "Distributed system component layouts and active sync failovers.", href: "/services/it-consulting#enterprise-architecture" },
      { name: "Cloud Consulting", desc: "Public cloud budget forecasts, land zone configs, and cost estimation.", href: "/services/it-consulting#cloud-consulting" },
      { name: "AI Consulting", desc: "Generative AI workshops, feasibility checkouts, and alignment policies.", href: "/services/it-consulting#ai-consulting" },
      { name: "Cybersecurity Consulting", desc: "Incident response plan drafts and risk register configuration.", href: "/services/it-consulting#cybersecurity-consulting" },
      { name: "Digital Transformation Consulting", desc: "Digital transformation roadmaps, design thinking sprints.", href: "/services/it-consulting#digital-transformation-consulting" },
      { name: "IT Strategy & Roadmap", desc: "IT capability adoption steps, budget planning, skill gap audits.", href: "/services/it-consulting#it-strategy-roadmap" },
      { name: "Technology Assessment", desc: "Scalability audits, query bottlenecks tracking, and code checks.", href: "/services/it-consulting#technology-assessment" }
    ]
  }
];

const servicesList = serviceCategories.map(cat => ({ name: cat.name, href: cat.href }));

const industriesList = [
  { name: "Banking & Finance", desc: "Secure, regulatory-compliant solutions for banking, investing, and digital payments.", href: "/industries/banking-finance" },
  { name: "Healthcare & Life Sciences", desc: "HIPAA-compliant telehealth apps, EHR platforms, and research databases.", href: "/industries/healthcare-life-sciences" },
  { name: "Retail & E-Commerce", desc: "Omni-channel engines, high-speed checkouts, and real-time inventory systems.", href: "/industries/retail-ecommerce" },
  { name: "Manufacturing", desc: "Industrial IoT integrations, predictive maintenance logs, and smart supply chains.", href: "/industries/manufacturing" },
  { name: "Telecommunications", desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.", href: "/industries/telecommunications" },
  { name: "Media & Entertainment", desc: "High-bandwidth VOD platforms, live broadcasting, and digital assets.", href: "/industries/media-entertainment" },
  { name: "Education", desc: "LMS environments, remote learning tools, and digital collaboration spaces.", href: "/industries/education" },
  { name: "Government & Public Sector", desc: "Citizen portals, cloud modernization, and strict security compliance.", href: "/industries/government-public-sector" }
];

const ecosystemCategories = [
  {
    id: "overview",
    name: "Ecosystem Overview",
    href: "/ecosystem",
    items: [
      { name: "Overview Landing Page", desc: "Enterprise pillars, stats, and next-gen highlights", href: "/ecosystem" }
    ]
  },
  {
    id: "partnerships",
    name: "Partnerships",
    href: "/ecosystem/partnerships",
    items: [
      { name: "Partnership Overview", desc: "Strategic technology alliances network", href: "/ecosystem/partnerships" },
      { name: "Microsoft Partnership", desc: "Gold Partner for cloud and hybrid infrastructures", href: "/ecosystem/partnerships/microsoft" },
      { name: "AWS Partnership", desc: "Advanced Tier Partner for serverless and DevSecOps", href: "/ecosystem/partnerships/aws" },
      { name: "Google Cloud Partnership", desc: "Premier Partner for Vertex AI and data platforms", href: "/ecosystem/partnerships/google-cloud" },
      { name: "Oracle Partnership", desc: "Platinum Partner for database and hybrid systems", href: "/ecosystem/partnerships/oracle" },
      { name: "ServiceNow Partnership", desc: "Elite Partner for ITSM & ESM automations", href: "/ecosystem/partnerships/servicenow" },
      { name: "SAP Partnership", desc: "Silver Partner for S/4HANA & ERP integration", href: "/ecosystem/partnerships/sap" },
      { name: "Cisco Partnership", desc: "Gold Integrator for enterprise security & zero-trust", href: "/ecosystem/partnerships/cisco" }
    ]
  },
  {
    id: "labs",
    name: "Innovation Labs",
    href: "/ecosystem/innovation-labs",
    items: [
      { name: "Labs Overview", desc: "Research, prototyping, and next-gen development", href: "/ecosystem/innovation-labs" },
      { name: "AI Innovation Lab", desc: "Agentic workflows, fine-tuning LLMs, semantic routing", href: "/ecosystem/innovation-labs/ai" },
      { name: "Cloud Innovation Lab", desc: "Green computing, serverless virtualization, edge frameworks", href: "/ecosystem/innovation-labs/cloud" },
      { name: "Cybersecurity Lab", desc: "Next-gen threat intelligence, zero-trust network modeling", href: "/ecosystem/innovation-labs/cybersecurity" },
      { name: "Data & Analytics Lab", desc: "Real-time streaming grids, decentralized database meshes", href: "/ecosystem/innovation-labs/data-analytics" }
    ]
  },
  {
    id: "platforms",
    name: "Platforms & Solutions",
    href: "/ecosystem/platforms-solutions",
    items: [
      { name: "Solutions Overview", desc: "Proprietary products and accelerators built for scale", href: "/ecosystem/platforms-solutions" },
      { name: "AI Solutions", desc: "Enterprise AI agents and recruitment pipelines", href: "/ecosystem/platforms-solutions/ai" },
      { name: "DevOps Platform", desc: "Bootstrap CI/CD pipelines and infrastructure", href: "/ecosystem/platforms-solutions/devops" },
      { name: "Cloud Solutions", desc: "Pre-configured landing zones and FinOps platforms", href: "/ecosystem/platforms-solutions/cloud" },
      { name: "Security Solutions", desc: "Hardened SOC platform and compliance dashboards", href: "/ecosystem/platforms-solutions/security" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud Ecosystem",
    href: "/ecosystem/cloud",
    items: [
      { name: "Cloud Ecosystem Overview", desc: "End-to-end multi-cloud transformation", href: "/ecosystem/cloud" },
      { name: "Microsoft Azure", desc: "AKS, Azure AI, Azure DevOps integrations", href: "/ecosystem/cloud/azure" },
      { name: "Amazon Web Services", desc: "EKS, serverless Lambda, AWS migrations", href: "/ecosystem/cloud/aws" },
      { name: "Google Cloud Platform", desc: "Vertex AI, GKE, BigQuery data pipelines", href: "/ecosystem/cloud/gcp" }
    ]
  },
  {
    id: "tech",
    name: "Our Technology",
    href: "/ecosystem/our-technology",
    items: [
      { name: "Technology Stack", desc: "Modern engineering core stack powering enterprise products", href: "/ecosystem/our-technology" }
    ]
  },
  {
    id: "delivery",
    name: "Global Delivery Network",
    href: "/ecosystem/global-delivery",
    items: [
      { name: "Global Delivery Network", desc: "Distributed high-performance hub execution", href: "/ecosystem/global-delivery" }
    ]
  }
];

const ecosystemMobileList = [
  { name: "Ecosystem Overview", href: "/ecosystem" },
  { name: "Partnerships", href: "/ecosystem/partnerships" },
  { name: "Innovation Labs", href: "/ecosystem/innovation-labs" },
  { name: "Platforms & Solutions", href: "/ecosystem/platforms-solutions" },
  { name: "Cloud Ecosystem", href: "/ecosystem/cloud" },
  { name: "Our Technology Stack", href: "/ecosystem/our-technology" },
  { name: "Global Delivery Network", href: "/ecosystem/global-delivery" }
];

export function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("ai-data-innovation");
  const [activeEcoCategory, setActiveEcoCategory] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("main-nav-visibility", { detail: { isVisible } }));
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      const sectionNavParent = document.getElementById("section-navbar-parent");
      if (sectionNavParent) {
        const rect = sectionNavParent.getBoundingClientRect();
        // Once the section navbar's parent has touched/crossed the main navbar area (approx 90px from top)
        if (rect.top <= 90) {
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          // Keep main navbar visible until it is touched by the section navbar
          setIsVisible(true);
        }
      } else {
        // Fallback for pages without SectionNavbar
        if (currentScrollY > 100) {
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef} className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <header
        onMouseLeave={() => setActiveMenu(null)}
        className={`w-full max-w-7xl relative rounded-full border transition-all duration-350 ${isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-24 opacity-0 pointer-events-none"
          } ${scrolled
            ? "border-zinc-800 bg-[#030303]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-4 px-8"
            : "border-zinc-900/50 bg-[#030303]/60 backdrop-blur-sm py-4 px-8"
          } text-white flex items-center justify-between`}
      >
        {/* Brand Logo & Name (Improved Logo Size) */}
        <Link href="/" className="flex items-center gap-3 group" onMouseEnter={() => setActiveMenu(null)}>
          <img
            src="/assets/logo/logo.png"
            alt="Devopstrio logo"
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-105 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
            Devopstrio
          </span>
        </Link>

        {/* Center Links (Improved Link Text Sizes to text-sm) */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">

          {/* Services Dropdown */}
          <div
            onMouseEnter={() => setActiveMenu("services")}
          >
            <Link
              href="/services"
              onClick={() => setActiveMenu(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} />
            </Link>
            {activeMenu === "services" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                <div className="animate-fadeIn bg-black border border-zinc-850 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[280px_240px_1fr] gap-8 text-left relative">

                  {/* Gloss reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

                  {/* Visual Promo Column (HCLTech Style) */}
                  <div className="relative overflow-hidden rounded-xl border border-zinc-900 p-5 flex flex-col justify-between h-[340px] group bg-white">
                    <img src="/assets/wavebg/navbar/services.png" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase block mb-3 font-bold">Enterprise Acceleration</span>
                      <h4 className="text-sm font-bold leading-snug text-red-600 mb-2">Powering Next-Gen Solutions</h4>
                      <p className="text-[10px] text-black font-bold leading-relaxed">
                        We design custom roadmaps and build robust frameworks tailored to satisfy strict compliance and high scalability standards.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setActiveMenu(null)}
                      className="relative z-10 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-700 hover:text-black transition-colors mt-4"
                    >
                      Connect with us &rarr;
                    </Link>
                  </div>

                  {/* Middle sidebar with categories */}
                  <div className="flex flex-col border-r border-zinc-900 pr-4 gap-1">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-3 mb-2">Practice Areas</span>
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        onClick={() => {
                          setActiveMenu(null);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 text-left ${activeCategory === cat.id
                          ? "bg-zinc-900 text-rose-500"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-900/30"
                          }`}
                      >
                        <span>{cat.name}</span>
                        {activeCategory === cat.id && <span className="text-[10px]">&rarr;</span>}
                      </button>
                    ))}
                  </div>

                  {/* Right panel with active sub-services */}
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">Strategic Capabilities</span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-h-[380px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                      {serviceCategories.find(c => c.id === activeCategory)?.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group/subitem block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                        >
                          <span className="block text-sm font-bold text-white group-hover/subitem:text-rose-500 transition-colors mb-1">
                            {item.name}
                          </span>
                          <span className="block text-xs text-zinc-400 font-medium leading-relaxed">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            onMouseEnter={() => setActiveMenu("industries")}
          >
            <Link
              href="/industries"
              onClick={() => setActiveMenu(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Industries <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
            </Link>
            {activeMenu === "industries" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                <div className="animate-fadeIn bg-black border border-zinc-850 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[280px_1fr] gap-8 text-left relative">

                  {/* Gloss reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent pointer-events-none" />

                  {/* Left Callout Box */}
                  <div className="relative overflow-hidden rounded-xl border border-zinc-900 p-5 flex flex-col justify-between h-[340px] group bg-white">
                    <img src="/assets/wavebg/navbar/industries.png" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase block mb-3 font-bold">Sectors</span>
                      <h4 className="text-sm font-bold leading-snug text-red-600 mb-2">Compliance First</h4>
                      <p className="text-[10px] text-black font-bold leading-relaxed">
                        Deploying regulatory-safe software runtimes across international sectors.
                      </p>
                    </div>
                    <Link
                      href="/industries"
                      onClick={() => setActiveMenu(null)}
                      className="relative z-10 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-700 hover:text-black transition-colors mt-4"
                    >
                      All Domains &rarr;
                    </Link>
                  </div>

                  {/* Right industries list grid */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">Target Sectors</span>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-h-[380px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                      {industriesList.map((ind) => (
                        <Link
                          key={ind.name}
                          href={ind.href}
                          onClick={() => setActiveMenu(null)}
                          className="group/ind block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                        >
                          <span className="block text-sm font-bold text-white group-hover/ind:text-rose-500 transition-colors mb-1">
                            {ind.name}
                          </span>
                          <span className="block text-xs text-zinc-400 font-medium leading-relaxed">
                            {ind.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Ecosystem Dropdown */}
          <div
            onMouseEnter={() => setActiveMenu("ecosystem")}
          >
            <Link
              href="/ecosystem"
              onClick={() => setActiveMenu(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Ecosystem <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "ecosystem" ? "rotate-180" : ""}`} />
            </Link>
            {activeMenu === "ecosystem" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1200px] max-w-[95vw] pointer-events-auto z-50">
                <div className="animate-fadeIn bg-black border border-zinc-850 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[280px_240px_1fr] gap-8 text-left relative">

                  {/* Gloss reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

                  {/* Visual Promo Column (Services style) */}
                  <div className="relative overflow-hidden rounded-xl border border-zinc-900 p-5 flex flex-col justify-between h-[340px] group bg-white">
                    <img src="/assets/wavebg/navbar/ecosystem.png" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase block mb-3 font-bold">Ecosystem Infrastructure</span>
                      <h4 className="text-sm font-bold leading-snug text-red-600 mb-2">Everything You Need to Scale</h4>
                      <p className="text-[10px] text-black font-bold leading-relaxed">
                        Explore our world-class technology alliances, research innovation labs, and custom platforms built to transform your enterprise.
                      </p>
                    </div>
                    <Link
                      href="/ecosystem"
                      onClick={() => setActiveMenu(null)}
                      className="relative z-10 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-700 hover:text-black transition-colors mt-4"
                    >
                      Explore Ecosystem &rarr;
                    </Link>
                  </div>

                  {/* Middle sidebar with categories */}
                  <div className="flex flex-col border-r border-zinc-900 pr-4 gap-1">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-3 mb-2">Ecosystem Pillars</span>
                    {ecosystemCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveEcoCategory(cat.id)}
                        onClick={() => {
                          setActiveMenu(null);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 text-left ${activeEcoCategory === cat.id
                          ? "bg-zinc-900 text-rose-500"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-900/30"
                          }`}
                      >
                        <span>{cat.name}</span>
                        {activeEcoCategory === cat.id && <span className="text-[10px]">&rarr;</span>}
                      </button>
                    ))}
                  </div>

                  {/* Right panel with active sub-items */}
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">Sub-Pages & Links</span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-h-[380px] overflow-y-auto overscroll-contain pr-2 custom-scrollbar">
                      {ecosystemCategories.find(c => c.id === activeEcoCategory)?.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group/subitem block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                        >
                          <span className="block text-sm font-bold text-white group-hover/subitem:text-rose-500 transition-colors mb-1">
                            {item.name}
                          </span>
                          <span className="block text-xs text-zinc-400 font-medium leading-relaxed">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Regular Links */}
          <Link href="/insights" onMouseEnter={() => setActiveMenu(null)} className="px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
            Insights
          </Link>
          <Link href="/careers" onMouseEnter={() => setActiveMenu(null)} className="px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
            Careers
          </Link>
          <Link href="/about" onMouseEnter={() => setActiveMenu(null)} className="px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onMouseEnter={() => setActiveMenu(null)}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-white border border-rose-600 bg-rose-600/5 hover:bg-rose-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(225,29,72,0.35)]"
          >
            Contact Us <ArrowUpRight size={13} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[#000000]/98 backdrop-blur-lg flex flex-col p-6 border-t border-zinc-900 pointer-events-auto animate-fadeIn lg:hidden">
          <div className="flex flex-col gap-6 overflow-y-auto overscroll-contain pb-8">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Services</span>
              <div className="flex flex-col gap-3 pl-2">
                {servicesList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Industries</span>
              <div className="flex flex-col gap-3 pl-2">
                {industriesList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Ecosystem</span>
              <div className="flex flex-col gap-3 pl-2">
                {ecosystemMobileList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-zinc-900 my-2" />

            <Link
              href="/#insights"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-zinc-200 hover:text-white"
            >
              Insights
            </Link>
            <Link
              href="/#careers"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-zinc-200 hover:text-white"
            >
              Careers
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-zinc-200 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600"
            >
              Contact Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
