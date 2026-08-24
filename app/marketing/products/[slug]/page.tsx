import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronLeft,
  Download,
  Play,
  MessageSquare,
  CheckCircle2,
  Share2
} from "lucide-react";
import { ContactForm } from "@/sections/contact/ContactForm";

const commonImages = [
  "/assets/common/09ff7846bc8c9998745688779c09f88d-1.png",
  "/assets/common/1b065043b6959827c05a0073c93a4a53-1.png",
  "/assets/common/260b761ad40c3ad2acba2c6666894539-1.png",
  "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.png",
  "/assets/common/315e4fdc6263bfd240f36297e376576e-1.png",
  "/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.png",
  "/assets/common/45ea830d170d382ade235db479060da7-1.png",
  "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.png",
];

const productsData = {
  "safesign": {
    name: "SafeSign",
    tagline: "Enterprise Security & Authentication Platform",
    description: "AI-powered identity verification and zero-trust security architecture for modern enterprises.",
    image: commonImages[0],
    classes: {
      bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400", button: "bg-rose-600 hover:bg-rose-500", primaryAssetBg: "bg-rose-500/10 border-rose-500/30"
    }
  },
  "humanex": {
    name: "Humanex",
    tagline: "Next-Gen HR & Workforce Management",
    description: "Complete employee lifecycle management with AI-driven workflows.",
    image: commonImages[1],
    classes: {
      bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500", primaryAssetBg: "bg-blue-500/10 border-blue-500/30"
    }
  },
  "caresuite": {
    name: "CareSuite",
    tagline: "Integrated Healthcare Management",
    description: "End-to-end hospital management system with real-time patient data.",
    image: commonImages[2],
    classes: {
      bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", button: "bg-emerald-600 hover:bg-emerald-500", primaryAssetBg: "bg-emerald-500/10 border-emerald-500/30"
    }
  },
  "campix": {
    name: "Campix",
    tagline: "Digital Campus & Education Management",
    description: "Comprehensive university management platform combining learning and admin.",
    image: commonImages[3],
    classes: {
      bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", button: "bg-orange-600 hover:bg-orange-500", primaryAssetBg: "bg-orange-500/10 border-orange-500/30"
    }
  }
};

export default async function ProductMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  // @ts-ignore
  const product = productsData[slug] || {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    tagline: "Enterprise Solution",
    description: "Advanced platform designed for modern enterprise workflows.",
    image: commonImages[0],
    classes: {
      bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400", button: "bg-rose-600 hover:bg-rose-500", primaryAssetBg: "bg-rose-500/10 border-rose-500/30"
    }
  };

  const assets = [
    { name: "Product Brochure", type: "PDF - 2.4 MB", image: commonImages[4], primary: true },
    { name: "Sales Presentation", type: "PPTX - 15 MB", image: commonImages[5] },
    { name: "Pricing Guide", type: "PDF - 1.1 MB", image: commonImages[6] },
    { name: "Implementation Guide", type: "PDF - 3.5 MB", image: commonImages[7] },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Navigation & Header */}
      <div>
        <Link href="/marketing/products" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Products
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className={`w-20 h-20 rounded-2xl bg-black border ${product.classes.border} overflow-hidden relative shrink-0`}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{product.name}</h1>
              <p className="text-lg text-gray-400 mt-1">{product.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors tooltip-trigger relative group">
              <Share2 className="w-5 h-5" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Share Link
              </span>
            </button>
            <button className={`px-5 py-2.5 ${product.classes.button} text-white rounded-lg text-sm font-medium transition-colors shadow-[0_0_20px_rgba(225,29,72,0.3)]`}>
              Send Portal to Client
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Details & Demo */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-8 mb-4">Key Value Props</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Reduces operational costs by 40%",
                "Enterprise-grade compliance (SOC2, HIPAA)",
                "Seamless API integrations",
                "24/7 dedicated support"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 ${product.classes.text} shrink-0`} />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-rose-600/90 flex items-center justify-center pl-1">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Dashboard Preview" 
              className="w-full h-64 object-cover rounded-xl opacity-50 group-hover:scale-105 transition-transform duration-700"
            loading="lazy" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
                2:45 • Product Demo
              </span>
              <h3 className="text-xl font-bold text-white mt-2">See {product.name} in Action</h3>
            </div>
          </div>
        </div>

        {/* Right Column: Downloads & Actions */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-6">Marketing Assets</h2>
            
            <div className="space-y-3">
              {assets.map((asset, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${asset.primary ? product.classes.primaryAssetBg : 'bg-black/50 border-white/10'} hover:bg-white/10 transition-all cursor-pointer group`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-black border border-white/10 overflow-hidden relative shrink-0">
                      <Image 
                        src={asset.image} 
                        alt={asset.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className={`font-semibold ${asset.primary ? 'text-white' : 'text-gray-300'} group-hover:text-white transition-colors`}>
                        {asset.name}
                      </p>
                      <p className="text-xs text-gray-500">{asset.type}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-900/40 to-black border border-rose-500/20 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-2">Need a tailored demo?</h3>
            <p className="text-sm text-gray-400 mb-6">
              Our pre-sales engineering team can build a custom POC for your client.
            </p>
            <button className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Request Pre-Sales Support
            </button>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
