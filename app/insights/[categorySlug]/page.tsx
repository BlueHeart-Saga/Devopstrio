"use client";

import React, { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

import { CategoryHero } from "@/sections/insights/CategoryHero";
import { CategoryFeatured } from "@/sections/insights/CategoryFeatured";
import { CategoryList } from "@/sections/insights/CategoryList";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export default function CategoryLandingPage({ params }: CategoryPageProps) {
  const resolvedParams = React.use(params);
  const categorySlug = resolvedParams.categorySlug;

  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function loadCategoryData() {
      try {
        setLoading(true);
        const allPosts = await insightsApi.getAllPosts(100);
        
        // Filter posts by category
        const filtered = allPosts.filter(
          (p) => p.category && p.category.slug === categorySlug
        );
        setPosts(filtered);

        if (filtered.length > 0) {
          setCategoryName(filtered[0].category.name);
        } else {
          // Format category slug nicely as fallback name
          const fallback = categorySlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          setCategoryName(fallback);
        }
      } catch (err) {
        console.error("Failed to load category posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategoryData();
  }, [categorySlug]);

  // Find most viewed post as featured
  const featuredPost = posts.reduce<TransformedPost | null>((max, current) => {
    if (!max) return current;
    return (current.views || 0) > (max.views || 0) ? current : max;
  }, null);

  const adjacentPosts = featuredPost 
    ? posts.filter((p) => p.id !== featuredPost.id) 
    : posts;

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.04),transparent_70%)] pointer-events-none" />

      <CategoryHero 
        categoryName={categoryName} 
        categorySlug={categorySlug} 
      />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
          <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-rose-600 animate-spin mb-4" />
          <span className="text-xs font-mono uppercase tracking-widest">Loading Publications...</span>
        </div>
      ) : posts.length === 0 ? (
        <div className="max-w-site mx-auto px-6 text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
          <BookOpen className="mx-auto text-zinc-700 mb-4" size={32} />
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">No publications found</h3>
          <p className="text-xs text-zinc-550">We haven&apos;t published any articles in this category yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <CategoryFeatured 
            featuredPost={featuredPost} 
            categorySlug={categorySlug} 
          />
          <CategoryList 
            posts={adjacentPosts} 
            categorySlug={categorySlug} 
          />
        </div>
      )}
    </main>
  );
}
