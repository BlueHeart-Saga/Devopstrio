"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Download, 
  Building2,
  Box,
  Code,
  FileText
} from "lucide-react";

const commonImages = [
  "/assets/common/09ff7846bc8c9998745688779c09f88d 1.png",
  "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png",
  "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png",
  "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa 1.png",
  "/assets/common/315e4fdc6263bfd240f36297e376576e 1.png",
  "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png",
  "/assets/common/45ea830d170d382ade235db479060da7 1.png",
  "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png",
];

const categories = [
  { id: "company-decks", name: "Company Decks" },
  { id: "products", name: "Products" },
  { id: "expertise", name: "Our Expertise" },
  { id: "case-studies", name: "Case Studies" },
  { id: "brochures", name: "Brochures" }
];

const companyDecks = [
  { title: "Global Presentation (English)", type: "PDF", size: "4.2 MB", image: commonImages[0] },
  { title: "Global Presentation (French)", type: "PDF", size: "4.3 MB", image: commonImages[1] },
  { title: "Global Presentation (German)", type: "PDF", size: "4.1 MB", image: commonImages[2] },
  { title: "Region Deck - North America", type: "PDF", size: "3.8 MB", image: commonImages[3] },
  { title: "Region Deck - Europe", type: "PDF", size: "3.5 MB", image: commonImages[4] },
  { title: "Region Deck - GCC & UAE", type: "PDF", size: "3.9 MB", image: commonImages[5] },
];

const expertise = [
  { title: "AI & Machine Learning", type: "PDF", image: commonImages[6] },
  { title: "Cloud & DevOps", type: "PDF", image: commonImages[7] },
  { title: "Cybersecurity", type: "PDF", image: commonImages[0] },
  { title: "Data Engineering", type: "PDF", image: commonImages[1] },
  { title: "UI/UX Design", type: "PDF", image: commonImages[2] },
  { title: "Quality Assurance", type: "PDF", image: commonImages[3] },
];

const caseStudies = [
  { title: "Healthcare & Pharma", type: "PDF", image: commonImages[4] },
  { title: "Financial Services & Banking", type: "PDF", image: commonImages[5] },
  { title: "Retail & E-commerce", type: "PDF", image: commonImages[6] },
  { title: "Manufacturing & Logistics", type: "PDF", image: commonImages[7] },
  { title: "Education & EdTech", type: "PDF", image: commonImages[0] },
  { title: "Real Estate & PropTech", type: "PDF", image: commonImages[1] },
];

const products = [
  { title: "SafeSign - Security Platform", type: "PDF", image: commonImages[2] },
  { title: "Humanex - HR Platform", type: "PDF", image: commonImages[3] },
  { title: "CareSuite - Healthcare System", type: "PDF", image: commonImages[4] },
  { title: "Campix - Education Management", type: "PDF", image: commonImages[5] },
];

export default function MarketingAssetLibrary() {
  const [activeTab, setActiveTab] = useState("company-decks");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const AssetCard = ({ item }: { item: any }) => (
    <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-black border border-white/10 group-hover:border-rose-500/30 transition-colors overflow-hidden relative shrink-0">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
            {item.title}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">
            {item.type} {item.size && `• ${item.size}`}
          </p>
        </div>
      </div>
      <button className="p-2 text-gray-500 hover:text-white bg-white/5 hover:bg-rose-600 rounded-lg transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
        <Download className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* Sticky Category Navigation */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 overflow-x-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === category.id 
                  ? "bg-white text-black" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col gap-20">
        
        {/* Company Decks Section */}
        <section id="company-decks" className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-rose-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Company Decks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyDecks.map((item, i) => (
              <AssetCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-8">
            <Box className="w-6 h-6 text-rose-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Product Portfolios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((item, i) => (
              <AssetCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-rose-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, i) => (
              <AssetCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-rose-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Industry Case Studies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudies.map((item, i) => (
              <AssetCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Brochures Section */}
        <section id="brochures" className="scroll-mt-40">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-rose-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Brochures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-900/20 to-black border border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-rose-500/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-xl bg-black border border-white/10 overflow-hidden relative shrink-0">
                  <Image 
                    src={commonImages[6]} 
                    alt="Corporate Brochure" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Devopstrio Corporate Brochure</h3>
                  <p className="text-gray-400 text-sm mt-1">Complete overview of our services and culture.</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-orange-500/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-xl bg-black border border-white/10 overflow-hidden relative shrink-0">
                  <Image 
                    src={commonImages[7]} 
                    alt="AI Capabilities Brochure" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Capabilities Brochure</h3>
                  <p className="text-gray-400 text-sm mt-1">Deep dive into our GenAI implementations.</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
