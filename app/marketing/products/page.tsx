import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Search, Filter } from "lucide-react";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/products");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
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
  { slug: "safesign", name: "SafeSign", type: "Security", image: commonImages[0], hoverColor: "group-hover:text-rose-400", gradient: "from-rose-500/5" },
  { slug: "humanex", name: "Humanex", type: "HR & Workforce", image: commonImages[1], hoverColor: "group-hover:text-blue-400", gradient: "from-blue-500/5" },
  { slug: "caresuite", name: "CareSuite", type: "Healthcare", image: commonImages[2], hoverColor: "group-hover:text-emerald-400", gradient: "from-emerald-500/5" },
  { slug: "campix", name: "Campix", type: "Education", image: commonImages[3], hoverColor: "group-hover:text-orange-400", gradient: "from-orange-500/5" },
  { slug: "homela", name: "Homela", type: "Real Estate", image: commonImages[4], hoverColor: "group-hover:text-purple-400", gradient: "from-purple-500/5" },
  { slug: "prestivo", name: "Prestivo", type: "Finance", image: commonImages[5], hoverColor: "group-hover:text-indigo-400", gradient: "from-indigo-500/5" },
  { slug: "brio", name: "Brio", type: "Retail", image: commonImages[6], hoverColor: "group-hover:text-pink-400", gradient: "from-pink-500/5" },
  { slug: "justivon", name: "Justivon", type: "Legal Tech", image: commonImages[7], hoverColor: "group-hover:text-cyan-400", gradient: "from-cyan-500/5" },
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
      <div className="space-y-8 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
              SaaS Product Datasheets & Collateral
            </h1>
            <p className="text-gray-400">
              Browse and download marketing assets for the entire Devopstrio ecosystem.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:bg-white/10 transition-all w-64"
              />
            </div>
            <button className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/marketing/products/${product.slug}`}
              className="group relative bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="p-6 relative z-10">
                <div className="aspect-video w-full relative rounded-xl overflow-hidden mb-4 bg-white/5 border border-white/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-gray-300 backdrop-blur-md border border-white/10">
                    {product.type}
                  </span>
                </div>

                <h3 className={`text-xl font-bold text-white transition-colors duration-300 ${product.hoverColor}`}>
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  Access official product decks, feature briefs, and architectural datasheets.
                </p>
              </div>

              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.01] relative z-10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                <span>View Product Kit</span>
                <span className="text-rose-500">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
