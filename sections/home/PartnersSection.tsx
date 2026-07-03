"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface PartnerItem {
  name: string;
  logo?: string;
  render?: () => React.ReactNode;
  title: string;
  tags: string[];
  metric: string;
  location: string;
  badge: string;
  year: string;
}

const partners: PartnerItem[] = [
  {
    name: "Microsoft",
    logo: "/assets/Home-page/partners/Microsoft.svg",
    title: "Azure Cloud Migration",
    tags: ["Azure", "Terraform", "CI/CD"],
    metric: "99.99% Uptime",
    location: "Redmond, WA",
    badge: "Enterprise",
    year: "Partner since 2023"
  },
  {
    name: "ServiceNow",
    logo: "/assets/Home-page/partners/servicenow.png",
    title: "Automated Workflow Engine",
    tags: ["ServiceNow", "REST APIs"],
    metric: "40% Faster Ops",
    location: "Santa Clara, CA",
    badge: "Strategic",
    year: "Partner since 2022"
  },
  {
    name: "NHS",
    logo: "/assets/Home-page/partners/NHS.svg",
    title: "Secure Medical Record Ingestion",
    tags: ["PostgreSQL", "FHIR APIs", "KMS"],
    metric: "100% HIPAA Audit",
    location: "London, UK",
    badge: "Public Sector",
    year: "Collab since 2021"
  },
  {
    name: "Airbnb",
    logo: "/assets/Home-page/partners/Airbnb.svg",
    title: "Omni-channel Checkout Sync",
    tags: ["Redis Cache", "Next.js"],
    metric: "Real-time Update",
    location: "San Francisco, CA",
    badge: "Enterprise",
    year: "Collab since 2022"
  },
  {
    name: "Virgin",
    logo: "/assets/Home-page/partners/Virgin.svg",
    title: "High-Bandwidth Network Monitor",
    tags: ["gRPC", "TimescaleDB"],
    metric: "10M+ Data Points",
    location: "London, UK",
    badge: "Telecom Client",
    year: "Collab since 2023"
  },
  {
    name: "BP",
    logo: "/assets/Home-page/partners/bp-logo.svg",
    title: "Pipeline Telemetry Collector",
    tags: ["MQTT", "Time-Series"],
    metric: "Zero Outage Incidents",
    location: "London, UK",
    badge: "Industrial Client",
    year: "Collab since 2020"
  },
  {
    name: "Costco",
    logo: "/assets/Home-page/partners/Costco.svg",
    title: "Headless E-commerce Storefront",
    tags: ["Next.js", "GraphQL"],
    metric: "3.2x Conversion Lift",
    location: "Issaquah, WA",
    badge: "Retail Client",
    year: "Collab since 2021"
  },
  {
    name: "BT",
    logo: "/assets/Home-page/partners/BT.svg",
    title: "5G Edge Cellular Control",
    tags: ["Kubernetes", "Go"],
    metric: "<15ms Edge Latency",
    location: "London, UK",
    badge: "Telecom Client",
    year: "Collab since 2023"
  },
  {
    name: "GoDaddy",
    logo: "/assets/Home-page/partners/godaddy.svg",
    title: "Hosting Scalability Framework",
    tags: ["Docker", "Kubernetes"],
    metric: "10M+ Active Users",
    location: "Tempe, AZ",
    badge: "Enterprise",
    year: "Collab since 2022"
  },
  {
    name: "Metrobank",
    logo: "/assets/Home-page/partners/Metrobank.svg",
    title: "High-Frequency Transaction Ledger",
    tags: ["PostgreSQL", "ACID Lock"],
    metric: "10M+ Daily TXs",
    location: "London, UK",
    badge: "Fintech Client",
    year: "Collab since 2022"
  },
  {
    name: "GXO",
    logo: "/assets/Home-page/partners/gxo.svg",
    title: "Predictive Warehouse Forecaster",
    tags: ["Python", "Redis Cache"],
    metric: "22% Storage Saved",
    location: "Greenwich, CT",
    badge: "Logistics Client",
    year: "Collab since 2021"
  },
  {
    name: "Paymentology",
    logo: "/assets/Home-page/partners/paymentology.svg",
    title: "Real-time Fraud Classification",
    tags: ["Kafka", "XGBoost Models"],
    metric: "35ms Score Latency",
    location: "London, UK",
    badge: "Fintech Client",
    year: "Collab since 2023"
  },
  {
    name: "Topland",
    logo: "/assets/Home-page/partners/topland.svg",
    title: "Property Portfolio Analytics",
    tags: ["React", "GraphQL"],
    metric: "£2B+ Assets Tracked",
    location: "London, UK",
    badge: "Enterprise",
    year: "Collab since 2022"
  },
  {
    name: "ASDA",
    logo: "/assets/Home-page/partners/ASDA.svg",
    title: "Omni-channel Stock Ingest",
    tags: ["Node.js", "Docker"],
    metric: "99.99% Uptime",
    location: "Leeds, UK",
    badge: "Retail Client",
    year: "Collab since 2021"
  },
  {
    name: "Lenovo",
    logo: "/assets/Home-page/partners/lenovo.svg",
    title: "Device IoT Orchestration",
    tags: ["IoT Core", "TypeScript"],
    metric: "50k+ Active Nodes",
    location: "Beijing, CN",
    badge: "Enterprise",
    year: "Collab since 2022"
  },
  {
    name: "Appian",
    logo: "/assets/Home-page/partners/appian.svg",
    title: "Low-Code Hosting Stack",
    tags: ["Docker", "AWS ECS"],
    metric: "99.9% Availability",
    location: "McLean, VA",
    badge: "Strategic",
    year: "Partner since 2023"
  },
  {
    name: "Boviet Solar",
    logo: "/assets/Home-page/partners/Boviet_Solar.png",
    title: "Solar Grid Telemetry Collector",
    tags: ["InfluxDB", "Rust"],
    metric: "99.98% Telemetry Sync",
    location: "Silicon Valley, CA",
    badge: "Energy Client",
    year: "Collab since 2022"
  },

  // Custom SVG render partners
  {
    name: "NCPL",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="30" height="30" rx="6" fill="#0ea5e9" />
        <path d="M12 12 h16 v16 h-16 z" fill="#10b981" opacity="0.8" />
        <text x="45" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="20" fill="#0ea5e9">NCPL</text>
      </svg>
    ),
    title: "Dockerized Dev Environments",
    tags: ["Docker", "GitLab CI"],
    metric: "Zero-Trust Auth",
    location: "Sydney, AU",
    badge: "Partner",
    year: "Collab since 2023"
  },
  {
    name: "Digital Accord",
    render: () => (
      <svg viewBox="0 0 160 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="15,5 25,10 25,22 15,27 5,22 5,10" fill="#f97316" />
        <polygon points="27,15 37,20 37,32 27,37 17,32 17,20" fill="#ea580c" />
        <polygon points="21,2 31,7 31,19 21,24 11,19 11,7" fill="#fb923c" />
        <text x="45" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="14" fill="#a1a1aa">Digital Accord</text>
      </svg>
    ),
    title: "CI/CD Automation Layer",
    tags: ["Jenkins", "Ansible"],
    metric: "5x Faster Deploys",
    location: "Melbourne, AU",
    badge: "Partner",
    year: "Collab since 2022"
  },
  {
    name: "Muthoot",
    render: () => (
      <svg viewBox="0 0 140 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="30" height="30" rx="4" fill="#0284c7" />
        <path d="M12 12h5v16h-5zm11 0h5v16h-5z" fill="#fff" />
        <text x="45" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#0284c7">muthoot</text>
      </svg>
    ),
    title: "Core Banking Ledger",
    tags: ["PostgreSQL", "AWS Aurora"],
    metric: "5M+ Daily Transactions",
    location: "Kochi, IN",
    badge: "Fintech Client",
    year: "Collab since 2021"
  },
  {
    name: "Comfort Zone",
    render: () => (
      <svg viewBox="0 0 140 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="130" height="36" rx="18" fill="none" stroke="#71717a" strokeWidth="1.5" />
        <text x="70" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="8" fill="#e4e4e7" textAnchor="middle">BE OUTSIDE YOUR</text>
        <text x="70" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="9" fill="#f43f5e" textAnchor="middle">COMFORT ZONE</text>
      </svg>
    ),
    title: "Smart Logistics Router",
    tags: ["PostgreSQL", "Go"],
    metric: "12% Freight Saving",
    location: "New York, NY",
    badge: "Logistics Client",
    year: "Collab since 2023"
  },
  {
    name: "Dentons",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5,5 90,5 110,20 90,35 5,35" fill="#6b21a8" />
        <text x="48" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" fill="#fff" textAnchor="middle" letterSpacing="1">DENTONS</text>
      </svg>
    ),
    title: "Vendor Contract Database",
    tags: ["MongoDB", "TypeScript"],
    metric: "SOC-2 Certified",
    location: "Chicago, IL",
    badge: "Enterprise",
    year: "Collab since 2022"
  },
  {
    name: "VD Capital",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="116" height="36" fill="none" stroke="#0284c7" strokeWidth="1.5" />
        <text x="12" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="16" fill="#0ea5e9">VDCapital</text>
      </svg>
    ),
    title: "Automated Trading Pipeline",
    tags: ["Rust", "WebSockets"],
    metric: "<10ms Order Latency",
    location: "Singapore",
    badge: "Fintech Client",
    year: "Collab since 2023"
  },
  {
    name: "Queen's University Belfast",
    render: () => (
      <svg viewBox="0 0 160 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 h20 v15 Q25 35 15 38 Q5 35 5 20 z" fill="#dc2626" />
        <path d="M15 8 v20 M7 18 h16" stroke="#fff" strokeWidth="2" />
        <text x="32" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" fill="#fff">QUEEN'S</text>
        <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" fill="#fff">UNIVERSITY</text>
        <text x="32" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" fill="#fff">BELFAST</text>
      </svg>
    ),
    title: "Virtual Classroom LMS",
    tags: ["WebRTC", "AWS S3"],
    metric: "120k Active Students",
    location: "Belfast, UK",
    badge: "Education",
    year: "Collab since 2021"
  },
  {
    name: "Startup Fuel",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-5 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="116" height="30" fill="#18181b" rx="2" />
        <text x="60" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="10" fill="#fff" textAnchor="middle" letterSpacing="2">STARTUP FUEL</text>
      </svg>
    ),
    title: "Serverless Hosting Stack",
    tags: ["AWS Lambda", "Node.js"],
    metric: "60% Cost Reduction",
    location: "Toronto, CA",
    badge: "SaaS Client",
    year: "Collab since 2022"
  },
  {
    name: "SPN Networks",
    render: () => (
      <svg viewBox="0 0 140 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25 a8 8 0 0 1 6 -14 a10 10 0 0 1 18 0 a8 8 0 0 1 6 14 z" fill="#3b82f6" opacity="0.8" />
        <text x="45" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="13" fill="#e4e4e7">spn</text>
        <text x="70" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="light" fontSize="13" fill="#94a3b8">networks</text>
      </svg>
    ),
    title: "Dynamic Cloud Balancer",
    tags: ["Kubernetes", "EKS"],
    metric: "Auto-scaling Towers",
    location: "Seattle, WA",
    badge: "Telecom Client",
    year: "Collab since 2022"
  },
  {
    name: "Mediacorp",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="30" height="30" fill="none" stroke="#a855f7" strokeWidth="2" />
        <text x="10" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="18" fill="#a855f7">M</text>
        <text x="42" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" fill="#a855f7">mediacorp</text>
      </svg>
    ),
    title: "High-Throughput CDN",
    tags: ["AWS Elemental", "Next.js"],
    metric: "100M+ Monthly Streamers",
    location: "Singapore",
    badge: "Media Client",
    year: "Collab since 2023"
  },
  {
    name: "Katalyst",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5 L18 5 L18 35 L10 35 z" fill="#0ea5e9" />
        <path d="M18 20 L28 5 L35 5 L23 20 L35 35 L28 35 z" fill="#f97316" />
        <text x="42" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="15" fill="#e4e4e7" letterSpacing="1">KATALYST</text>
      </svg>
    ),
    title: "Clinical Telemetry Collector",
    tags: ["Node.js", "KMS Key"],
    metric: "50k Wearables Active",
    location: "New York, NY",
    badge: "Healthcare",
    year: "Collab since 2022"
  },
  {
    name: "Panhandle",
    render: () => (
      <svg viewBox="0 0 150 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="16" fill="#0ea5e9">Panhandle</text>
        <text x="5" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="bold" fill="#94a3b8" letterSpacing="1">INFORMATION TECHNOLOGY</text>
      </svg>
    ),
    title: "Automated Supply Chain Hub",
    tags: ["Go", "Kafka Broker"],
    metric: "100M+ Daily Scans",
    location: "Panama City, FL",
    badge: "Logistics",
    year: "Collab since 2021"
  },
  {
    name: "Tech Trends",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-5 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#fff" letterSpacing="1">TECH TRENDS</text>
      </svg>
    ),
    title: "Network Topology Planner",
    tags: ["Rust", "D3.js Grid"],
    metric: "Visual Grid Control",
    location: "Austin, TX",
    badge: "Telecom Client",
    year: "Collab since 2022"
  },
  {
    name: "Chronicle",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,5 30,14 26,28 10,28 6,14" fill="#f43f5e" />
        <text x="40" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="16" fill="#e4e4e7">Chronicle</text>
      </svg>
    ),
    title: "Patient Record Sanitization",
    tags: ["NLP", "Python"],
    metric: "Automatic PII Mask",
    location: "Boston, MA",
    badge: "Healthcare",
    year: "Collab since 2023"
  },
  {
    name: "Doitwise",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" fill="none" stroke="#dc2626" strokeWidth="3" />
        <circle cx="20" cy="20" r="6" fill="#dc2626" />
        <text x="40" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="16" fill="#fff">doitwise</text>
      </svg>
    ),
    title: "Medical Staff Scheduler",
    tags: ["Next.js", "TypeScript"],
    metric: "Zero Shift Overlaps",
    location: "Sofia, BG",
    badge: "Healthcare",
    year: "Collab since 2022"
  },
  {
    name: "Huntington",
    render: () => (
      <svg viewBox="0 0 140 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25 Q20 10 20 5 Q20 10 30 25 Z" fill="#22c55e" />
        <text x="38" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="14" fill="#e4e4e7">Huntington</text>
      </svg>
    ),
    title: "Fintech API Gateway",
    tags: ["FastAPI", "JWT Auth"],
    metric: "Secure Database Sync",
    location: "Columbus, OH",
    badge: "Fintech Client",
    year: "Collab since 2022"
  },
  {
    name: "UHS",
    render: () => (
      <svg viewBox="0 0 150 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="22" cy="20" rx="18" ry="12" fill="#0284c7" />
        <text x="22" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="11" fill="#fff" textAnchor="middle">UHS</text>
        <text x="48" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="normal" fontSize="9" fill="#94a3b8">Universal Health Services</text>
      </svg>
    ),
    title: "Secure Billing Databases",
    tags: ["KMS", "RDS Postgres"],
    metric: "100% Data Audited",
    location: "King of Prussia, PA",
    badge: "Healthcare",
    year: "Collab since 2021"
  },
  {
    name: "Tech Group",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-5 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="110" height="30" fill="#ea580c" rx="4" />
        <text x="60" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="10" fill="#fff" textAnchor="middle">TECH GROUP</text>
      </svg>
    ),
    title: "Retail Inventory Scanner",
    tags: ["MQTT", "React Native"],
    metric: "Zero Scanner Delay",
    location: "Houston, TX",
    badge: "Retail",
    year: "Collab since 2021"
  },
  {
    name: "Naraayani",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="25" fontFamily="Georgia, serif" fontWeight="bold" fontSize="16" fill="#e4e4e7" letterSpacing="2">NARAAYANI</text>
      </svg>
    ),
    title: "EHR SOAP-to-FHIR Broker",
    tags: ["FHIR API", "TypeScript"],
    metric: "<100ms API Latency",
    location: "New Delhi, IN",
    badge: "Healthcare",
    year: "Collab since 2023"
  },
  {
    name: "Medtrainer",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="16" fill="#0ea5e9">med<tspan fill="#f97316">trainer</tspan></text>
      </svg>
    ),
    title: "Clinical Compliance Tracker",
    tags: ["PostgreSQL", "Go Modules"],
    metric: "100% HIPAA Ready",
    location: "Beverly Hills, CA",
    badge: "Healthcare",
    year: "Collab since 2022"
  },
  {
    name: "Zero1Zero",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="10" fill="none" stroke="#ef4444" strokeWidth="3" />
        <text x="38" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="15" fill="#fff">ZERO1ZERO</text>
      </svg>
    ),
    title: "Bandwidth Routing Manager",
    tags: ["C++ Core", "WebRTC"],
    metric: "Zero Packet Drops",
    location: "Los Angeles, CA",
    badge: "Telecom Client",
    year: "Collab since 2022"
  },
  {
    name: "Whitemedia",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#fff">whitemedia</text>
      </svg>
    ),
    title: "High-Performance CDN Node",
    tags: ["CloudFront", "Nginx"],
    metric: "150ms Initial Load",
    location: "London, UK",
    badge: "Partner",
    year: "Collab since 2023"
  },
  {
    name: "Auscomp",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5,5 25,5 15,30" fill="#0284c7" />
        <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="14" fill="#e4e4e7">Auscomp</text>
      </svg>
    ),
    title: "Digital Escrow Gateway",
    tags: ["Next.js", "Stripe API"],
    metric: "Zero Fraud Events",
    location: "Brisbane, AU",
    badge: "Fintech Client",
    year: "Collab since 2021"
  },
  {
    name: "Joyway",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="20" rx="50" ry="14" fill="#ea580c" />
        <text x="60" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="13" fill="#fff" textAnchor="middle">JOYWAY</text>
      </svg>
    ),
    title: "Micro-Transaction Core Node",
    tags: ["Go", "Redis Cluster"],
    metric: "5k Requests/sec",
    location: "Tokyo, JP",
    badge: "Fintech Client",
    year: "Collab since 2023"
  },
  {
    name: "CBG",
    render: () => (
      <svg viewBox="0 0 150 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="18" fill="#0d9488">CBG</text>
        <text x="5" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="bold" fill="#94a3b8">Coeur Business Group</text>
      </svg>
    ),
    title: "Fiber Backbone Monitor",
    tags: ["InfluxDB", "Go Modules"],
    metric: "99.999% Service Uptime",
    location: "Chicago, IL",
    badge: "Telecom Client",
    year: "Collab since 2022"
  },
  {
    name: "CogniSoft",
    render: () => (
      <svg viewBox="0 0 140 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="14" fill="#e4e4e7">CogniSoft</text>
        <text x="5" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="bold" fill="#22c55e" letterSpacing="1">TECHNOLOGIES</text>
      </svg>
    ),
    title: "Hospital Billing Database System",
    tags: ["Aurora DB", "AWS Serverless"],
    metric: "Encrypted Data Keys",
    location: "Manchester, UK",
    badge: "Healthcare",
    year: "Collab since 2022"
  },
  {
    name: "Danet",
    render: () => (
      <svg viewBox="0 0 130 40" className="h-6 w-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="16" fill="#fff">DANET</text>
        <text x="5" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="bold" fill="#0ea5e9" letterSpacing="1">TECHNOLOGY</text>
      </svg>
    ),
    title: "Virtual Router Management",
    tags: ["Linux Kernel", "Python"],
    metric: "100% Data Integrity",
    location: "Frankfurt, DE",
    badge: "Partner",
    year: "Collab since 2022"
  }
];

const categories = [
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    description: "Enterprise scale cloud platforms, hosting, and virtualization runtimes.",
    partners: [
      "Microsoft", "ServiceNow", "GoDaddy", "NCPL", "Digital Accord", "Startup Fuel", "Whitemedia", "Danet", "Lenovo", "Appian"
    ]
  },
  {
    id: "fintech",
    name: "Fintech & Banking",
    description: "High-security core banking, digital ledger, and micro-transaction platforms.",
    partners: [
      "Metrobank", "Paymentology", "Topland", "VD Capital", "Huntington", "UHS", "Auscomp", "Joyway", "Muthoot"
    ]
  },
  {
    id: "retail",
    name: "Retail & Logistics",
    description: "E-commerce catalogs, supply chain logistics, and guest journey management.",
    partners: [
      "Costco", "GXO", "Airbnb", "ASDA", "Comfort Zone", "Dentons", "Panhandle", "Tech Group", "Boviet Solar"
    ]
  },
  {
    id: "telecom",
    name: "Telecom & Networks",
    description: "High-throughput fiber backbones, media streaming, and local area networks.",
    partners: [
      "BT", "Virgin", "BP", "SPN Networks", "Mediacorp", "Tech Trends", "Zero1Zero", "CBG"
    ]
  },
  {
    id: "public",
    name: "Healthcare & Public",
    description: "Compliant medical record systems, academic portals, and NGO frameworks.",
    partners: [
      "NHS", "Queen's University Belfast", "Katalyst", "Chronicle", "Doitwise", "Medtrainer", "CogniSoft", "Naraayani"
    ]
  }
];

export function PartnersSection() {
  const row1 = partners.slice(0, 14);
  const row2 = partners.slice(14, 28);
  const row3 = partners.slice(28);

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-t border-zinc-900/50 relative overflow-hidden" id="partners">
      {/* Global CSS for seamless marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left-1 {
          animation: marqueeLeft 48s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right-2 {
          animation: marqueeRight 54s linear infinite;
          will-change: transform;
        }
        .animate-marquee-left-3 {
          animation: marqueeLeft 42s linear infinite;
          will-change: transform;
        }
        .animate-marquee-left-1:hover,
        .animate-marquee-right-2:hover,
        .animate-marquee-left-3:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header */}
        <Reveal className="max-w-3xl mb-16 text-center mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-rose-500">
              OUR CLIENTS & PARTNERS
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4 text-white">
            Some of Our <span className="font-bold text-rose-500">Clients</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            The following are just a few of our regular clients and strategic partners worldwide.
          </p>
        </Reveal>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 select-none my-8">

        {/* Edge Gradient Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-6 animate-marquee-left-1 w-max py-1">
            {[...row1, ...row1].map((partner, idx) => (
              <div
                key={`${partner.name}-r1-${idx}`}
                className="w-36 h-20 bg-zinc-950/30 backdrop-blur-md border border-zinc-900/60 rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:border-rose-500/30 hover:bg-zinc-900/10 hover:-translate-y-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_12px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(225,29,72,0.06)] relative overflow-hidden flex-shrink-0 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-center w-full h-full p-1">
                  {partner.render ? (
                    <div className="h-8 flex items-center justify-center w-full text-white transition-colors duration-300 scale-75 sm:scale-90">
                      {partner.render()}
                    </div>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 w-auto object-contain max-w-[100px] select-none"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-6 animate-marquee-right-2 w-max py-1">
            {[...row2, ...row2].map((partner, idx) => (
              <div
                key={`${partner.name}-r2-${idx}`}
                className="w-36 h-20 bg-zinc-950/30 backdrop-blur-md border border-zinc-900/60 rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:border-rose-500/30 hover:bg-zinc-900/10 hover:-translate-y-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_12px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(225,29,72,0.06)] relative overflow-hidden flex-shrink-0 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-center w-full h-full p-1">
                  {partner.render ? (
                    <div className="h-8 flex items-center justify-center w-full text-white transition-colors duration-300 scale-75 sm:scale-90">
                      {partner.render()}
                    </div>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 w-auto object-contain max-w-[100px] select-none"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-6 animate-marquee-left-3 w-max py-1">
            {[...row3, ...row3].map((partner, idx) => (
              <div
                key={`${partner.name}-r3-${idx}`}
                className="w-36 h-20 bg-zinc-950/30 backdrop-blur-md border border-zinc-900/60 rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:border-rose-500/30 hover:bg-zinc-900/10 hover:-translate-y-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_12px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(225,29,72,0.06)] relative overflow-hidden flex-shrink-0 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center justify-center w-full h-full p-1">
                  {partner.render ? (
                    <div className="h-8 flex items-center justify-center w-full text-white transition-colors duration-300 scale-75 sm:scale-90">
                      {partner.render()}
                    </div>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 w-auto object-contain max-w-[100px] select-none"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        {/* Quote Footer */}
        <Reveal>
          <div className="mt-16 text-center max-w-2xl mx-auto border-t border-zinc-900/60 pt-10">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed italic">
              "We've created lasting relationships with our clients. Our success is our client's success."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
