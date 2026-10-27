import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Search, Filter, ArrowUpRight } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/products");
  return generatePageMetadata({
    title: seo.title || "SaaS Product Datasheets & Collateral | Devopstrio",
    description: seo.description || "Browse and download marketing assets, feature briefs, and architectural datasheets for the entire Devopstrio SaaS ecosystem.",
    path: "/marketing/products",
    keywords: seo.keywords
  });
}

const commonImages = [
  "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp",
  "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp",
  "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp",
  "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp",
  "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp",
  "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp",
  "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp",
  "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp",
];

const products = [
  {
    slug: "esigniva",
    name: "Esigniva",
    description: "Enterprise zero-trust e-signature and document lifecycle platform with cryptographic audit trails.",
    logo: "/webp/assets/Home-page/our-products/logo/esigniva.webp",
    image: commonImages[0],
    hoverColor: "group-hover:text-rose-400",
    gradient: "from-rose-500/10"
  },
  {
    slug: "humanex",
    name: "Humanex",
    description: "Next-gen HR & workforce intelligence for talent management and automated employee workflows.",
    logo: "/webp/assets/Home-page/our-products/logo/humanex.webp",
    image: commonImages[1],
    hoverColor: "group-hover:text-blue-400",
    gradient: "from-blue-500/10"
  },
  {
    slug: "caresuite",
    name: "CareSuite",
    description: "HIPAA-compliant clinical workflow and healthcare operations platform for modern providers.",
    logo: "/webp/assets/Home-page/our-products/logo/Caresuite.webp",
    image: commonImages[2],
    hoverColor: "group-hover:text-emerald-400",
    gradient: "from-emerald-500/10"
  },
  {
    slug: "campix",
    name: "Campix",
    description: "Unified digital campus and academic operations management platform uniting students and faculty.",
    logo: "/webp/assets/Home-page/our-products/logo/Campix.webp",
    image: commonImages[3],
    hoverColor: "group-hover:text-orange-400",
    gradient: "from-orange-500/10"
  },
  {
    slug: "homela",
    name: "Homela",
    description: "PropTech property management platform with automated lease tracking and tenant workflows.",
    logo: "/webp/assets/Home-page/our-products/logo/homela.webp",
    image: commonImages[4],
    hoverColor: "group-hover:text-purple-400",
    gradient: "from-purple-500/10"
  },
  {
    slug: "prestivo",
    name: "Prestivo",
    description: "AI-powered adaptive learning management system with real-time competency benchmarks.",
    logo: "/webp/assets/Home-page/our-products/logo/Prestivo.webp",
    image: commonImages[5],
    hoverColor: "group-hover:text-indigo-400",
    gradient: "from-indigo-500/10"
  },
  {
    slug: "brio",
    name: "Brio",
    description: "High-volume payment orchestration platform for seamless multi-gateway processing and reconciliation.",
    logo: "/webp/assets/Home-page/our-products/logo/brio.webp",
    image: commonImages[6],
    hoverColor: "group-hover:text-pink-400",
    gradient: "from-pink-500/10"
  },
  {
    slug: "justivon",
    name: "Justivon",
    description: "End-to-end legal case management and matter workflow platform for law firms and legal teams.",
    logo: "/webp/assets/Home-page/our-products/logo/Justivon.webp",
    image: commonImages[7],
    hoverColor: "group-hover:text-cyan-400",
    gradient: "from-cyan-500/10"
  },
];

export default function ProductsDirectoryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Products", url: "https://devopstrio.co.uk/marketing/products" }
        ]}
      />
      <main className="min-h-screen bg-[#030303] text-white pt-28 sm:pt-36 lg:pt-40 pb-24 font-sans relative overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.12),transparent_70%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold text-rose-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                SaaS Platform Collateral & Specs
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                SaaS Product Datasheets & Collateral
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
                Browse and download technical datasheets, feature matrices, architecture specs, and client-ready decks for the Devopstrio ecosystem.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-zinc-900/90 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all w-60 sm:w-72"
                />
              </div>
              <button 
                aria-label="Filter products"
                className="p-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/marketing/products/${product.slug}`}
                className="group relative bg-[#0b0b0e] border border-white/10 hover:border-rose-500/40 rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(225,29,72,0.12)] flex flex-col justify-between"
              >
                {/* Subtle Inner Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0`} />
                
                {/* Top Image Banner (Clean 3D Tech Artwork, Neatly framed, No text cutoff, No top-right keyword badge) */}
                <div className="p-3 pb-0 relative z-10">
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-zinc-950 border border-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Card Content with Updated Brand Logo & Name */}
                <div className="p-5 sm:p-6 pt-4 relative z-10 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Brand Logo + Product Name */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-md group-hover:border-rose-500/40 group-hover:scale-105 transition-all">
                        <img 
                          src={product.logo} 
                          alt={`${product.name} logo`} 
                          className="w-full h-full object-contain filter brightness-110 select-none"
                        />
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold text-white transition-colors duration-300 ${product.hoverColor} font-sans tracking-tight`}>
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    <span>View Product Kit</span>
                    <ArrowUpRight className="w-4 h-4 text-rose-400 group-hover:text-rose-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
