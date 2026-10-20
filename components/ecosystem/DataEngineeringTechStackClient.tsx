"use client";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass, Blocks, Code, FastForward,
  GitCommit, Repeat, FileCode2, PieChart, LineChart, Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DataEngineeringOverview = () => {
  const cards = [
    { title: "Data Integration", desc: "Connect disparate enterprise systems.", icon: LinkIcon, href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas" },
    { title: "ETL / ELT Pipelines", desc: "Automate reliable data movement.", icon: Repeat, href: "/ecosystem/technology-stack/data-engineering/data-lakes-storage" },
    { title: "Data Warehousing", desc: "Centralize analytics-ready data.", icon: Database, href: "/ecosystem/technology-stack/data-engineering/modern-warehousing-schemas" },
    { title: "Real-Time Streaming", desc: "Process live event data.", icon: Zap, href: "/ecosystem/technology-stack/data-engineering/real-time-streaming-event-buses" },
    { title: "Data Quality", desc: "Ensure trusted, validated data.", icon: ShieldCheck, href: "/ecosystem/technology-stack/data-engineering/data-compliance-governance" },
    { title: "Analytics Foundation", desc: "Power BI, reporting, and AI.", icon: BarChart2, href: "/ecosystem/technology-stack/data-engineering/analytics-processing" }
  ];

  return (
    <section className="relative py-24 bg-[#030303] overflow-hidden border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-rose-500 tracking-widest uppercase mb-3 block">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Enterprise Data Architecture
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 font-light leading-relaxed">
              We design and implement scalable data engineering pipelines, lakehouses, and real-time streaming topologies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={idx * 0.05}>
                <Link 
                  href={card.href}
                  className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 hover:border-rose-500/40 transition-all duration-300 group flex flex-col justify-between h-full min-h-[200px]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-rose-500 text-xs font-bold group-hover:text-white transition-colors">
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    <span>Explore {card.title}</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const dataEngineeringFaqs = [
  {
    q: "What data warehousing solutions do you design?",
    a: "We architect modern data warehouses and lakehouses across Snowflake, Databricks, Google BigQuery, and AWS Redshift tailored for enterprise scale."
  },
  {
    q: "Do you support real-time streaming architectures?",
    a: "Yes. We implement real-time streaming with Apache Kafka, Apache Flink, AWS Kinesis, and Azure Event Hubs for sub-second event processing."
  },
  {
    q: "How do you ensure data quality and governance?",
    a: "We implement automated data validation using Great Expectations, data lineage tracking, and centralized catalog governance with Unity Catalog and OpenMetadata."
  },
  {
    q: "Can you migrate legacy ETL pipelines to modern ELT?",
    a: "Yes. We modernize legacy SSIS, Informatica, and custom scripts to automated dbt (data build tool) models and orchestrations using Airflow or Prefect."
  }
];

export function DataEngineeringTechStackClient() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Hero
        title="Data Engineering Tech Stack"
        subtitle="Explore our verified technology stack for big data pipelines, distributed processing, vector storage, and enterprise warehouses."
        bgImage="/webp/assets/services/bg-data.webp"
        badge="TECHNOLOGY STACK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ecosystem", href: "/ecosystem" },
          { label: "Data Engineering" }
        ]}
      />
      <DataEngineeringOverview />
      <FAQ faqs={dataEngineeringFaqs} />
      <CTA
        ctaTitle="Transform Data Into Value With"
        ctaHighlight="Modern Data Engineering"
        ctaDesc="Architect scalable lakehouses, streaming pipelines, and governed data layers ready for analytics and enterprise AI."
        ctaBtnText="TALK TO DATA ARCHITECTS"
        backLink="/ecosystem/technology-stack"
      />
    </main>
  );
}
