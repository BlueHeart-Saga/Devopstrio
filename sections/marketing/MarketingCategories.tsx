"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, ArrowRight, FileText } from "lucide-react";
import LineSidebar from "@/components/ui/LineSidebar";

export interface CategoryItem {
  id: string;
  label: string;
  icon: React.ElementType;
  count: string;
  href: string;
  description?: string;
  image?: string;
}

interface MarketingCategoriesProps {
  categories?: CategoryItem[];
  onSelectCategory?: (id: string) => void;
}

const COMMON_ASSET_IMAGES = [
  "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp",
  "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp",
  "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp",
  "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp",
  "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp",
  "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp",
  "/webp/assets/common/45ea830d170d382ade235db479060da7-1.webp",
  "/webp/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.webp",
  "/webp/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.webp",
  "/webp/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.webp",
  "/webp/assets/common/90361fed0bb781d7c86e451995b4dbce-1.webp",
  "/webp/assets/common/945ab601f043c558e0a8162da2a1eb4c-1.webp",
];

const DEFAULT_CATEGORIES: CategoryItem[] = [
  { id: "all", label: "All Resources", icon: Layers, count: "50+ Assets", href: "#all-resources", description: "Comprehensive library of technical whitepapers, pitch decks, solution briefs, and brand assets." },
  { id: "company", label: "Corporate Assets", icon: FileText, count: "12 Assets", href: "/marketing/company", description: "Corporate presentations, company fact sheets, brand guidelines, and leadership profiles." },
  { id: "services", label: "Service Brochures", icon: Layers, count: "16 Assets", href: "/marketing/services", description: "Practice area brochures for Cloud, DevOps, Generative AI, and Security architecture." },
  { id: "products", label: "Product Kits", icon: Layers, count: "10 Assets", href: "/marketing/products", description: "SaaS datasheets and product feature briefs for SafeSign, CareSuite, and Brio." },
];

export function MarketingCategories({ categories = DEFAULT_CATEGORIES, onSelectCategory }: MarketingCategoriesProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeCategory = categories[selectedIndex] || categories[0];
  const activeImage =
    COMMON_ASSET_IMAGES[selectedIndex % COMMON_ASSET_IMAGES.length] ||
    "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp";

  const categoryLabels = categories.map((cat) => cat.label);

  return (
    <section id="categories-sec" className="scroll-mt-36 space-y-6">

      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-6 h-6 text-rose-500" />
            Resource Categories
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Hover over the sidebar line markers on the left to dynamically preview resource domains.
          </p>
        </div>
      </div>

      {/* Open Layout with LineSidebar on Left */}
      <div className="w-full relative min-h-[420px]">

        {/* Ambient Radial Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_75%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

          {/* Left Side: LineSidebar (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full py-4 pl-2">
            <LineSidebar
              items={categoryLabels}
              accentColor="#f43f5e"
              textColor="#a1a1aa"
              markerColor="#3f3f46"
              showIndex
              showMarker
              proximityRadius={90}
              maxShift={25}
              falloff="smooth"
              markerLength={55}
              markerGap={10}
              tickScale={0.5}
              scaleTick
              itemGap={18}
              fontSize={1.05}
              smoothing={100}
              defaultActive={0}
              onItemClick={(index) => {
                setSelectedIndex(index);
              }}
            />
          </div>

          {/* Right Side: Image & Category Details Showcase (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-stretch py-2">

            {/* Image Preview Container */}
            <div className="w-full md:w-1/2 relative min-h-[260px] rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 group border border-white/10">
              <img src={activeImage}
                alt={activeCategory?.label || "Category Image"}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105 filter brightness-95 contrast-105"
              loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600/90 text-white uppercase tracking-wider shadow-lg">
                  {activeCategory?.count || "Resource Pack"}
                </span>
              </div>
            </div>

            {/* Category Details Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-sm font-bold text-rose-500">
                    [ #0{selectedIndex + 1} ]
                  </span>
                  <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-widest">
                    Category Overview
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-wide uppercase leading-tight">
                  {activeCategory?.label}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-normal">
                  {activeCategory?.description ||
                    `Explore our complete collection of ${activeCategory?.label?.toLowerCase()} files including enterprise blueprints, architecture docs, pitch decks, and implementation guides.`}
                </p>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <FileText className="w-4 h-4 text-rose-500" /> Total Files:
                  </span>
                  <span className="font-bold text-white text-sm">{activeCategory?.count}</span>
                </div>

                <button
                  onClick={() => onSelectCategory && onSelectCategory(activeCategory?.id || "company")}
                  className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-rose-950/40 hover:scale-[1.02] active:scale-95"
                >
                  <span>Browse {activeCategory?.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
