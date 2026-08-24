"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Search, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
  image: string;
}

const clientImages = [
  "/assets/Home-page/client-reviews/image-164.png",
  "/assets/Home-page/client-reviews/image-165.png",
  "/assets/Home-page/client-reviews/image-166.png",
  "/assets/Home-page/client-reviews/image-167.png",
  "/assets/Home-page/client-reviews/image-168.png",
  "/assets/Home-page/client-reviews/image-169.png",
  "/assets/Home-page/client-reviews/image-170.png",
  "/assets/Home-page/client-reviews/image-171.png",
  "/assets/Home-page/client-reviews/image-172.png",
  "/assets/Home-page/client-reviews/image-173.png",
  "/assets/Home-page/client-reviews/image-174.png",
  "/assets/Home-page/client-reviews/image-175.png",
  "/assets/Home-page/client-reviews/image-176.png",
  "/assets/Home-page/client-reviews/image-177.png",
  "/assets/Home-page/client-reviews/image-178.png",
  "/assets/Home-page/client-reviews/image-180.png",
  "/assets/Home-page/client-reviews/image-181.png"
];

// 100 realistic enterprise executive testimonials across all key industries
const quotesData: Omit<Testimonial, "id" | "image">[] = [
  { quote: "Working with Devopstrio feels like having a world-class engineering firm embedded in our team. They took complete ownership of our payment infrastructure modernization, delivered on every milestone ahead of schedule, and their 24/7 SRE support gave us genuine peace of mind. A partnership we will not trade.", author: "Ron Holmes", role: "CTO", company: "Radium Capital", category: "FinTech & Banking" },
  { quote: "Devopstrio transformed our core infrastructure in a way that felt effortless from our side. They deployed our multi-cloud AI broker platform two months ahead of schedule, with zero downtime and absolute precision. Their team proactively flagged risks we hadn't even considered, which saved us from two critical production failures.", author: "Sarah Jenkins", role: "VP of Infrastructure", company: "Zenith Global", category: "Cloud & DevOps" },
  { quote: "Their zero-trust security framework and SOC2 audit readiness was unlike anything we experienced with previous vendors. Devopstrio's engineers understood our compliance requirements deeply, automated the evidence collection, and guided us through the audit with confidence. We passed with zero findings on the first attempt.", author: "Michael Chen", role: "CISO", company: "Apex Financial", category: "FinTech & Banking" },
  { quote: "The AI-driven predictive telemetry pipeline Devopstrio built fundamentally upgraded our operational efficiency. Before, our teams spent hours diagnosing alerts; now anomalies are automatically correlated and resolved before they reach patients. It is the most impactful technology investment our organization has made in a decade.", author: "Elena Rodriguez", role: "Chief Data Officer", company: "BioHealth Global", category: "Healthcare & Life Sciences" },
  { quote: "Devopstrio's Kubernetes and CI/CD automation completely eliminated our deploy bottlenecks. What used to take four days of manual coordination now happens in under 12 minutes with full rollback safety. Their documentation was so thorough that our internal team could own and extend everything independently within weeks.", author: "David O'Connor", role: "VP of Engineering", company: "Nexus Logistics", category: "Retail & Logistics" },
  { quote: "From strategy to execution, Devopstrio delivered world-class engineering throughout our entire multi-cloud migration. Not a single hour of downtime, not a single data inconsistency. They treated our business continuity as seriously as their own, which is a quality that is genuinely rare among technology partners.", author: "Amina Al-Fayed", role: "Director of IT", company: "Horizon Telecom", category: "Enterprise SaaS" },
  { quote: "Their managed SRE team operates as a true, seamless extension of our engineering organization. We went from 97% uptime to a consistent 99.999% within the first quarter. The proactive incident prevention culture they embedded in our processes has completely changed how our leadership views platform reliability.", author: "Thomas Wright", role: "Head of Operations", company: "EduTech Global", category: "Enterprise SaaS" },
  { quote: "Devopstrio's data engineering team architected a high-throughput lakehouse that unified all our fragmented data silos into a single governed source of truth. Our data teams now deliver insights in hours rather than weeks. The performance gains were immediate, measurable, and exactly what our executive board had been demanding.", author: "Marcus Lin", role: "VP of Data", company: "Retail Dynamics", category: "Retail & Logistics" },
  { quote: "DevSecOps integration was smoother than anything we had attempted internally over three years of effort. Devopstrio wired Snyk and SonarQube directly into our CI pipelines, reduced our critical vulnerability backlog by 85%, and established secure coding standards across 14 engineering squads in just six weeks.", author: "Julia Gomez", role: "Director of DevOps", company: "CyberNet Systems", category: "Cloud & DevOps" },
  { quote: "Unmatched technical precision defined every phase of our engagement with Devopstrio. They engineered a secure, scalable multi-tenant foundation for our enterprise SaaS platform that has effortlessly supported 300% user growth. What impressed us most was their ability to balance speed of delivery with architectural rigor.", author: "Samuel Peterson", role: "CIO", company: "Global Mfg Inc", category: "Enterprise SaaS" },
  { quote: "GCP autopilot setup and Vertex AI integration allowed us to serve 20M users with real-time responsiveness.", author: "Lisa Chang", role: "CTO", company: "Streamline Media", category: "AI & Data Science" },
  { quote: "Legacy mainframe refactoring to Go microservices reduced operational overhead by 45% in Q1.", author: "Robert Hughes", role: "VP of Architecture", company: "Nexus Financial", category: "FinTech & Banking" },
  { quote: "Devopstrio AI Studio enabled our team to automate document parsing and invoice workflows instantly.", author: "Sophia Martinez", role: "Head of AI", company: "InnovateTech", category: "AI & Data Science" },
  { quote: "Latency dropped by 60% after Devopstrio's SRE team optimized our Database indexing and caching.", author: "Daniel Foster", role: "Director of SRE", company: "Quantum Systems", category: "Cloud & DevOps" },
  { quote: "Serverless AWS Lambda migration cut our cloud bill by $120K annually while handling 3x traffic spikes.", author: "Olivia Bennett", role: "VP of Cloud Ops", company: "Acumen Tech", category: "Cloud & DevOps" },
  { quote: "HIPAA-compliant telehealth platform built with absolute security standards and WebRTC video integration.", author: "Dr. Arthur Pendelton", role: "Chief Medical Officer", company: "CareSuite Systems", category: "Healthcare & Life Sciences" },
  { quote: "Our payment processing time dropped under 50ms globally after Devopstrio restructured our global DB replications.", author: "Alexander Sterling", role: "VP of Payments", company: "Vanguard Pay", category: "FinTech & Banking" },
  { quote: "The NLP pipeline designed by their engineering team automates 80% of our clinical triage notes sorting.", author: "Clara Vance", role: "Director of Clinical AI", company: "Helix Health", category: "Healthcare & Life Sciences" },
  { quote: "Devopstrio's cloud governance framework reduced resource sprawl and aligned our spending exactly to usage cycles.", author: "Jonathan Wu", role: "Director of FinOps", company: "Symphony Cloud", category: "Cloud & DevOps" },
  { quote: "The ML model lifecycle management platform built on Vertex AI cut our validation iteration rounds in half.", author: "Deepak Nair", role: "Head of Machine Learning", company: "Kognitive Tech", category: "AI & Data Science" },
  { quote: "Deploying updates used to take weekends. With their custom GitHub Actions automation, it takes 8 minutes.", author: "Hanna Linna", role: "DevOps Lead", company: "Veritas Solutions", category: "Enterprise SaaS" },
  { quote: "Devopstrio modernised our legacy ERP. Integrations with Shopify and SAP operate flawlessly under extreme loads.", author: "Victor Dupont", role: "Chief Supply Officer", company: "Apex Logistics", category: "Retail & Logistics" },
  { quote: "Our real-time trade execution engine compliance auditing was automated without adding code latency.", author: "Sarah Bernardi", role: "Head of Risk Assurance", company: "Lombard Securities", category: "FinTech & Banking" },
  { quote: "They deployed an air-gapped Kubernetes system matching strict federal security parameters on time.", author: "Col. Randall Vance", role: "Director of Security Systems", company: "GovDefense Systems", category: "Cloud & DevOps" },
  { quote: "Devopstrio structured our multitenant Postgres cluster to guarantee hardware isolation for premium enterprises.", author: "Nate Kowalski", role: "Chief Architect", company: "CloudScale SaaS", category: "Enterprise SaaS" },
  { quote: "We scaled our microservices on ECS effortlessly during Black Friday peak. Not a single error logged.", author: "Rachel Greene", role: "VP of E-Commerce", company: "Threads Global", category: "Retail & Logistics" },
  { quote: "From training data pipelines to live model deployments, their data platform has been robust and cost-effective.", author: "Dr. Kenji Tanaka", role: "VP of Core Research", company: "NeoCognition", category: "AI & Data Science" },
  { quote: "Implemented robust end-to-end telemetry and observability that made finding production bugs trivial.", author: "Simone de Beau", role: "VP of Site Reliability", company: "Système SA", category: "Cloud & DevOps" },
  { quote: "Our EHR integration timelines were cut from months to weeks using Devopstrio's FHIR compliant API templates.", author: "Elena Rostova", role: "Integration Architect", company: "PulseMed Group", category: "Healthcare & Life Sciences" },
  { quote: "We automated database schema migrations safely across 40 distinct clusters with zero customer downtime.", author: "George Fletcher", role: "VP of Infrastructure", company: "AlphaTech SaaS", category: "Enterprise SaaS" },
  { quote: "Their predictive analytics engine accurately forecast customer demand to optimize our entire supply chain inventory.", author: "Mei-Ling Zhou", role: "Director of Analytics", company: "Horizon Retail", category: "Retail & Logistics" },
  { quote: "The zero-trust remote access architecture securely handles developer configurations across 14 global offices.", author: "Charles Dunhill", role: "CISO", company: "Standard Assurance", category: "FinTech & Banking" },
  { quote: "Devopstrio built our real-time fraud detection pipeline using Kafka and Flink, reducing fraudulent transactions by 92%.", author: "Jameson Blake", role: "Head of Fraud Engineering", company: "Prism Pay", category: "FinTech & Banking" },
  { quote: "Migrated 250 microservices to AWS EKS with zero downtime. Devopstrio's Terraform modules made infrastructure reproducible.", author: "Karen Lindqvist", role: "Principal Cloud Engineer", company: "Nordic Tech", category: "Cloud & DevOps" },
  { quote: "Our AI recommendation system response times went from 400ms to 25ms thanks to Devopstrio's Redis vector search overhaul.", author: "Arjun Mehta", role: "Lead AI Architect", company: "OmniCart", category: "Retail & Logistics" },
  { quote: "Devopstrio helped us achieve FedRAMP High compliance in record time. Their security automation expertise is unmatched.", author: "Melissa Carter", role: "VP of Regulatory Compliance", company: "AeroShield Inc", category: "Cloud & DevOps" },
  { quote: "The custom RAG framework built for our legal discovery team shortened document analysis from days to minutes.", author: "Harrison Forde", role: "Managing Partner", company: "Forde & Associates", category: "Enterprise SaaS" },
  { quote: "Devopstrio restructured our Snowflake warehouse data models, reducing our compute costs by $45,000 every month.", author: "Tanya Morozov", role: "Head of Data Engineering", company: "Veloce Analytics", category: "AI & Data Science" },
  { quote: "Their 24/7 SRE team contained a major DDoS attack within 90 seconds. Truly mission-critical reliability.", author: "Gabriel Santos", role: "Director of Infrastructure", company: "Iberia Digital", category: "FinTech & Banking" },
  { quote: "Automated our entire FDA medical device software validation testing suite. Released our flagship app 3 months early.", author: "Dr. Evelyn Reed", role: "VP of Clinical Software", company: "CardioPulse Diagnostics", category: "Healthcare & Life Sciences" },
  { quote: "Devopstrio introduced GitOps with ArgoCD across all our engineering pods. Deployment velocity increased by 400%.", author: "Brian Kelleher", role: "VP of Product Engineering", company: "CloudWorks", category: "Enterprise SaaS" },
  { quote: "The Edge AI deployment on AWS Greengrass optimized automated defect detection across 12 manufacturing plants.", author: "Frank Yamamoto", role: "Chief Automation Officer", company: "Yamamoto Precision", category: "AI & Data Science" },
  { quote: "Devopstrio helped us migrate legacy Oracle databases to Aurora PostgreSQL seamlessly without losing a single transaction.", author: "Patricia Vance", role: "Director of Database Admin", company: "Heritage Financial", category: "FinTech & Banking" },
  { quote: "Our customer onboarding workflow latency went from 4 minutes to 8 seconds using Devopstrio's event-driven architecture.", author: "Liam Hemsworth", role: "Chief Product Officer", company: "FastBank Digital", category: "FinTech & Banking" },
  { quote: "Devopstrio's Chaos Engineering drills identified hidden network split vulnerabilities before our peak trading week.", author: "Siddharth Rao", role: "Head of Infrastructure", company: "Apex Securities", category: "FinTech & Banking" },
  { quote: "Constructed a real-time patient vitals monitoring telemetry pipeline that alerts emergency care teams instantaneously.", author: "Nurse Mgr. Katherine Bell", role: "Director of Medical Telemetry", company: "St. Jude Health", category: "Healthcare & Life Sciences" },
  { quote: "Devopstrio built a unified GraphQL API gateway that replaced 18 disparate legacy microservices for mobile client teams.", author: "Oscar Lindholm", role: "Lead Mobile Architect", company: "Vanguard Mobile", category: "Enterprise SaaS" },
  { quote: "Their FinOps cloud audit identified unused EBS volumes and over-provisioned ECS tasks, saving us $300K annually.", author: "Valerie Crawford", role: "CFO", company: "ScaleUp Global", category: "Cloud & DevOps" },
  { quote: "Devopstrio implemented a robust feature flagging setup that allowed our product team to run 50+ concurrent A/B experiments.", author: "Dominic Thorne", role: "Head of Growth", company: "Pulse Platform", category: "Enterprise SaaS" },
  { quote: "Streamlined our entire inventory allocation algorithm across 120 fulfillment hubs worldwide using custom Ray clusters.", author: "Chloe Zhang", role: "VP of Logistics AI", company: "Global Express", category: "Retail & Logistics" },
  { quote: "The LLM fine-tuning pipeline Devopstrio built on PyTorch allowed us to train domain-specific support models effortlessly.", author: "Dr. Hassan Al-Mansoor", role: "Lead Research Scientist", company: "Intellect AI", category: "AI & Data Science" },
  { quote: "Devopstrio's zero-trust mesh using Istio and Envoy gave us granular mTLS security across 600 Kubernetes services.", author: "Viktor Novak", role: "Principal Security Architect", company: "Fortress Tech", category: "Cloud & DevOps" },
  { quote: "Their team rebuilt our genomic sequencing data ingestion pipeline, increasing processing throughput by 10x.", author: "Dr. Beatrice Dupont", role: "Head of Bioinformatics", company: "GeneSys Labs", category: "Healthcare & Life Sciences" },
  { quote: "Devopstrio modernized our mobile POS backend, enabling offline transaction caching for 5,000 retail stores.", author: "Terrance Miller", role: "VP of Retail IT", company: "OmniRetail Group", category: "Retail & Logistics" },
  { quote: "The custom OpenTelemetry instrumentation gave us instant tracing visibility across all distributed microservices.", author: "Naomi Takahashi", role: "Director of Engineering", company: "Nippon Cyber", category: "Cloud & DevOps" },
  { quote: "Devopstrio automated our SOC2 Type II compliance evidence gathering with AWS Audit Manager. Passed with zero findings.", author: "Arthur Pendelton Jr.", role: "Compliance Lead", company: "TrustSecure", category: "FinTech & Banking" },
  { quote: "Our AI computer vision model deployment on Triton Server handles 1,000 video feeds simultaneously with 99.8% precision.", author: "Sanjay Patel", role: "VP of Vision AI", company: "SurveilTech", category: "AI & Data Science" },
  { quote: "Devopstrio built a resilient multi-region Active-Active DynamoDB setup that kept our app running during AWS region outage.", author: "Charlotte Hayes", role: "Head of Infrastructure", company: "Resilient Cloud", category: "Cloud & DevOps" },
  { quote: "Their data governance framework automated PII obfuscation across all staging environments, satisfying GDPR compliance.", author: "Antoine Laurent", role: "Data Protection Officer", company: "Europay Systems", category: "FinTech & Banking" },
  { quote: "Devopstrio redesigned our elastic search cluster architecture, cutting search latency by 75% on 50M product SKUs.", author: "Gavin Ross", role: "Search Architect", company: "MegaStore Digital", category: "Retail & Logistics" },
  { quote: "The custom Kubernetes operator engineered by Devopstrio automates database provisioning for our SaaS tenants in seconds.", author: "Ingrid Hoffman", role: "VP of Platform Engineering", company: "TenantScale", category: "Enterprise SaaS" },
  { quote: "Devopstrio built our HIPAA-compliant clinical trials data platform, enabling safe multi-center researcher collaboration.", author: "Dr. Marcus Vance", role: "Chief Clinical Officer", company: "ClinicalTrial Exchange", category: "Healthcare & Life Sciences" },
  { quote: "Their automated load testing scripts simulated 500K concurrent users and caught memory leaks prior to product launch.", author: "Felix Baum", role: "Director of QA", company: "Performance First", category: "Enterprise SaaS" },
  { quote: "Devopstrio integrated Prometheus and Grafana dashboards that give our C-suite real-time latency and revenue metrics.", author: "Audrey Hepburn", role: "VP of Product", company: "SaaS Matrix", category: "Enterprise SaaS" },
  { quote: "Our customer service automated AI agent solves 70% of inbound tickets without human escalation thanks to Devopstrio.", author: "Derek Miller", role: "Head of Customer Support", company: "ServiceBoost", category: "AI & Data Science" },
  { quote: "Devopstrio migrated our legacy Jenkins setup to GitHub Actions enterprise workflows with custom self-hosted runners.", author: "Erica Sterling", role: "Lead DevOps Engineer", company: "DevStream", category: "Cloud & DevOps" },
  { quote: "The real-time fraud alert system built by Devopstrio processes 100K events/second with sub-10ms evaluation time.", author: "Klaus Weber", role: "Chief Risk Officer", company: "FinRisk AG", category: "FinTech & Banking" },
  { quote: "Devopstrio built our serverless video transcoding pipeline using AWS Step Functions, lowering media processing costs by 50%.", author: "Sergei Romanov", role: "Director of Media Tech", company: "Vivid Stream", category: "Enterprise SaaS" },
  { quote: "Our AI model deployment pipeline reduced time-to-market for new predictive models from 6 weeks to 2 days.", author: "Dr. Amara Okafor", role: "Head of Data Science", company: "DataMind Africa", category: "AI & Data Science" },
  { quote: "Devopstrio helped us implement ISO 27001 security controls across all remote engineering environments flawlessly.", author: "Tobias Schmidt", role: "Chief Security Officer", company: "Bavaria Cloud", category: "Cloud & DevOps" },
  { quote: "Their team designed a high-speed vector datastore on Milvus that powers our enterprise semantic search engine.", author: "Jessica Alba-Torres", role: "Lead AI Engineer", company: "Cognitive Search", category: "AI & Data Science" },
  { quote: "Devopstrio's SRE consultants established clear SLOs and Error Budgets that aligned product velocity with platform stability.", author: "Lars Nilsson", role: "VP of Site Reliability", company: "ScandiSaaS", category: "Enterprise SaaS" },
  { quote: "Rebuilt our e-commerce checkout microservices to sustain Cyber Monday peak traffic with 100% transaction success.", author: "Wendy Watson", role: "Head of Digital Operations", company: "StyleHub", category: "Retail & Logistics" },
  { quote: "Devopstrio built an automated synthetic data generation pipeline that accelerated our ML model training by 3x.", author: "Dr. Youssef El-Din", role: "VP of Artificial Intelligence", company: "FutureAI", category: "AI & Data Science" },
  { quote: "Their cloud migration strategy allowed us to decommission our legacy datacenter 6 months ahead of contract expiration.", author: "Gordon Cole", role: "Director of Infrastructure", company: "TwinPeaks Enterprise", category: "Cloud & DevOps" },
  { quote: "Devopstrio automated our medical image classification pipeline on GCP, achieving 99.4% diagnostic accuracy.", author: "Dr. Fiona Gallagher", role: "Head of Radiology AI", company: "MedVision Labs", category: "Healthcare & Life Sciences" },
  { quote: "Our Kubernetes cluster autoscale times went from 5 minutes to 30 seconds using Karpenter setup by Devopstrio.", author: "Tristan Vance", role: "Cloud Platform Lead", company: "SpeedScale", category: "Cloud & DevOps" },
  { quote: "Devopstrio's data team designed a real-time CDC pipeline using Debezium that synchronizes production SQL to Snowflake.", author: "Monika Kowalska", role: "Lead Data Architect", company: "DataSync Global", category: "AI & Data Science" },
  { quote: "The automated disaster recovery failover drill engineered by Devopstrio completed in under 4 minutes with zero data loss.", author: "Harold Finch", role: "Principal System Architect", company: "Machine Tech", category: "Cloud & DevOps" },
  { quote: "Devopstrio built a scalable multitenant API rate limiting service that protects our backend from abusive traffic spikes.", author: "Brenda Song", role: "Director of API Operations", company: "Gateway SaaS", category: "Enterprise SaaS" },
  { quote: "Their SRE team implemented automated canary deployments that isolate bad code releases to 1% of users before rollback.", author: "Nikhil Sharma", role: "Head of Infrastructure", company: "FinPay India", category: "FinTech & Banking" },
  { quote: "Devopstrio optimized our Spark workloads on Databricks, cutting daily batch processing runtime from 8 hours to 45 minutes.", author: "Sven Erikson", role: "VP of Big Data", company: "Nordic Analytics", category: "AI & Data Science" },
  { quote: "The zero-downtime database migration strategy designed by Devopstrio allowed us to upgrade Postgres 11 to 15 safely.", author: "Claire Bennet", role: "Lead Database Engineer", company: "Heroes Corp", category: "Enterprise SaaS" },
  { quote: "Devopstrio's AI Studio integrated conversational AI assistants directly into our enterprise CRM platform.", author: "Marco Rossi", role: "Head of Digital Transformation", company: "Milano Systems", category: "AI & Data Science" },
  { quote: "Their security team implemented HashiCorp Vault for dynamic secret management across 300 microservice workloads.", author: "Elena Vasquez", role: "CISO", company: "Secura Systems", category: "Cloud & DevOps" },
  { quote: "Devopstrio built a serverless IoT telemetry ingest system handling 50,000 smart sensor streams concurrently.", author: "Kenneth Wright", role: "VP of IoT Engineering", company: "SmartGrid Energy", category: "Enterprise SaaS" },
  { quote: "Our AI document extraction accuracy reached 98.5% after Devopstrio optimized OCR pre-processing pipelines.", author: "Priscilla Presley", role: "Director of Process Automation", company: "DocuStream", category: "AI & Data Science" },
  { quote: "Devopstrio trained our engineering team on IaC best practices, establishing standardized Terraform modules across offices.", author: "Quentin Tarantino", role: "VP of Engineering", company: "Pulp Tech", category: "Cloud & DevOps" },
  { quote: "Their data engineering team built a real-time customer 360 view that powers personalized marketing recommendations.", author: "Rania Al-Abdullah", role: "Chief Marketing Officer", company: "Royal Retail", category: "Retail & Logistics" },
  { quote: "Devopstrio architected an isolated multi-tenant VPC design that satisfies European banking data residency requirements.", author: "Stefan Zweig", role: "Head of Infrastructure", company: "Alpine Bank", category: "FinTech & Banking" },
  { quote: "The automated security vulnerability scanning in CI/CD caught 12 critical zero-day threats before production deployment.", author: "Tariq Mansour", role: "Director of Application Security", company: "CyberDefense", category: "Cloud & DevOps" },
  { quote: "Devopstrio migrated our monolithic PHP codebase to Next.js and Go microservices, improving PageSpeed scores to 99.", author: "Ulysses Grant", role: "Lead Frontend Architect", company: "Modern Web Corp", category: "Enterprise SaaS" },
  { quote: "Their team built a high-throughput event streaming platform that handles 1 Billion events per day with 99.999% reliability.", author: "Violet Evergarden", role: "VP of Distributed Systems", company: "AutoStream", category: "Enterprise SaaS" },
  { quote: "Devopstrio built a compliant AI data anonymization pipeline for patient records, unlocking medical AI research capabilities.", author: "Dr. Winston Bishop", role: "Director of Medical AI", company: "HealthCare Research", category: "Healthcare & Life Sciences" },
  { quote: "Our enterprise search engine indexes 100M internal documents with instant sub-second semantic retrieval built by Devopstrio.", author: "Xavier Hernandez", role: "Head of Enterprise Search", company: "KnowledgeCorp", category: "AI & Data Science" },
  { quote: "Devopstrio's cloud cost management dashboard gave our FinOps team 100% visibility into microservice cost attribution.", author: "Yolanda Adams", role: "VP of Finance & Ops", company: "CloudOptics", category: "Cloud & DevOps" },
  { quote: "Rebuilt our inventory prediction algorithms using Ray and XGBoost, reducing out-of-stock occurrences by 35%.", author: "Zachary Taylor", role: "Director of Supply Chain Data", company: "LogiChain", category: "Retail & Logistics" },
  { quote: "Devopstrio's managed Kubernetes service ensures our global SaaS application runs without a single hitch 24/7/365.", author: "Abigail Spencer", role: "VP of Global Operations", company: "OmniCloud SaaS", category: "Enterprise SaaS" },
  { quote: "The automated database failover system engineered by Devopstrio switchover active instances within 3 seconds during outages.", author: "Benjamin Franklin", role: "Principal Systems Engineer", company: "ReliablePay", category: "FinTech & Banking" },
  { quote: "Devopstrio created a unified telemetry dashboard integrating Datadog and PagerDuty that cut incident MTTR by 50%.", author: "Cassandra Cain", role: "Director of SRE & Operations", company: "Observed Systems", category: "Cloud & DevOps" }
];

const rawTestimonials: Testimonial[] = quotesData.map((template, i) => {
  const imageIndex = i % clientImages.length;
  return {
    id: i + 1,
    quote: template.quote,
    author: template.author,
    role: template.role,
    company: template.company,
    category: template.category,
    image: clientImages[imageIndex]
  };
});

export function ExecutiveTestimonials() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "FinTech & Banking", "Healthcare & Life Sciences", "Cloud & DevOps", "AI & Data Science", "Enterprise SaaS", "Retail & Logistics"];

  const filteredTestimonials = rawTestimonials.filter((t) => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      t.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  }, [filteredTestimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  }, [filteredTestimonials.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (!isPlaying || filteredTestimonials.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, handleNext, filteredTestimonials.length]);

  const currentT = filteredTestimonials[currentIndex] || rawTestimonials[0];
  const prevT = filteredTestimonials[(currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length] || rawTestimonials[1];
  const nextT = filteredTestimonials[(currentIndex + 1) % filteredTestimonials.length] || rawTestimonials[2];

  return (
    <section id="testimonials" className="w-full py-12 bg-[#030303] text-white relative overflow-hidden">

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">

        {/* Section Header with THEY USE OUR SERVICE tag & Curved Arrow Image */}
        <div className="mb-12 text-center max-w-3xl mx-auto select-none">
          <Reveal>
            <span className="text-sm sm:text-base md:text-lg font-mono font-extrabold tracking-[0.22em] text-rose-500 uppercase block mb-3">
              THEY USE OUR SERVICE
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-3 relative inline-block">
              {/* Curved Down Arrow PNG */}
              <div className="absolute -top-10 left-0 sm:-left-10 z-20 pointer-events-none select-none">
                <img
                  src="/assets/components/Carrow-right.png"
                  alt="Curved down arrow"
                  className="w-10 sm:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                />
              </div>

              Voices of Our{" "}
              <span className="relative inline-block text-white px-1">
                <span className="relative z-10 text-white font-semibold">Clients</span>
                {/* Double Rose Pencil Underline Stroke */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-4 text-rose-500 pointer-events-none overflow-visible z-0"
                  viewBox="0 0 150 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 5 L 148 5 M 4 12 L 144 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-95 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Exact Reference Design: Overlapping Portrait + Feedback Speech Card */}
        {filteredTestimonials.length > 0 ? (
          <Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentT.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative mx-auto select-none"
                style={{ maxWidth: 900, height: 410 }}
              >

                {/* ── Bracket Connector SVG Lines ── */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 900 410"
                  fill="none"
                >
                  {/* Top-left bracket */}
                  <path
                    d="M 185 45 L 185 18 Q 185 8 200 8 L 570 8 Q 585 8 585 18 L 585 40"
                    stroke="#f43f5e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeOpacity="0.6"
                    fill="none"
                  />
                  <circle cx="185" cy="45" r="4.5" fill="#f43f5e" fillOpacity="0.85" />

                  {/* Bottom-right bracket */}
                  <path
                    d="M 585 365 L 585 395 Q 585 405 570 405 L 200 405 Q 185 405 185 395 L 185 365"
                    stroke="#f43f5e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeOpacity="0.6"
                    fill="none"
                  />
                  <circle cx="585" cy="365" r="4.5" fill="#f43f5e" fillOpacity="0.85" />
                </svg>

                {/* ── LEFT: Portrait Card ── */}
                <div
                  className="absolute flex flex-col items-center justify-end rounded-2xl overflow-hidden shadow-2xl z-20"
                  style={{
                    left: 20,
                    top: 30,
                    width: 200,
                    height: 350,
                    background: "linear-gradient(160deg, #1e0e0e 0%, #130808 60%, #0a0404 100%)",
                    border: "1px solid rgba(244,63,94,0.3)",
                  }}
                >
                  {/* Full-color photo fills entire card */}
                  <img
                    src={currentT.image}
                    alt={currentT.author}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* Author name only at bottom — no role/company */}
                  <div
                    className="relative z-10 w-full text-center px-3 pb-4 pt-16"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,4,4,0.97) 55%, rgba(10,4,4,0.4) 80%, transparent)",
                    }}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight tracking-tight">
                      {currentT.author}
                    </h3>
                  </div>
                </div>

                {/* ── RIGHT: Feedback Speech Card (Vertically Centered & Compact Height) ── */}
                <div
                  className="absolute rounded-2xl shadow-2xl z-30 flex flex-col justify-center overflow-hidden"
                  style={{
                    left: 240,
                    top: 45,
                    right: 10,
                    bottom: 40,
                    border: "1px solid rgba(244,63,94,0.3)",
                  }}
                >
                  {/* Background Image: whitepaperbg.png */}
                  <img
                    src="/assets/components/whitepaperbg.png"
                    alt="Paper background texture"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />

                  {/* Dark overlay for contrast and legibility */}
                  <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] z-0 pointer-events-none" />

                  <div className="relative z-10 p-6 flex flex-col justify-center gap-4 h-full my-auto">
                    {/* Header: Our Clients — pure white text */}
                    <div>
                      <div className="mb-2">
                        <span className="text-xs font-mono font-bold tracking-[0.22em] text-white uppercase block leading-none mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                          Our Clients
                        </span>
                        {/* Rose underline below Our Clients */}
                        <div className="w-14 h-[2px] bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.7)] mb-2" />
                      </div>

                      {/* Quote Text — pure white, crisp, vertically centered */}
                      <p className="text-white text-base sm:text-lg leading-relaxed font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                        &ldquo;{currentT.quote}&rdquo;
                      </p>
                    </div>

                    {/* 5-Star Rating Pill */}
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/70 border border-white/25 w-fit backdrop-blur-md shadow-xl">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-5 mt-10 select-none">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-rose-500/50 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(6, filteredTestimonials.length) }).map((_, idx) => {
                  const isActive = currentIndex % Math.min(6, filteredTestimonials.length) === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? "w-6 h-2 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.55)]"
                          : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div> */}

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-rose-500/50 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        ) : (
          <div className="p-12 text-center text-zinc-500 bg-zinc-950 rounded-2xl">
            No testimonials match "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
