import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import { PostDetailClient } from "@/components/insights/PostDetailClient";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/Schemas";

interface PostDetailPageProps {
  params: Promise<{
    categorySlug: string;
    postId: string;
  }>;
}

function getActualId(param: string): string {
  if (!param) return param;
  if (param.includes("-")) {
    const parts = param.split("-");
    const lastPart = parts[parts.length - 1];
    if (/^[a-f0-9]{24}$/i.test(lastPart)) {
      return lastPart;
    }
  }
  return param;
}

import { generatePageMetadata } from "@/lib/seo-utils";

export async function generateMetadata({ params }: PostDetailPageProps): Promise<Metadata> {
  const { categorySlug, postId } = await params;
  const actualId = getActualId(postId);
  try {
    const raw = await insightsApi.getContentById(actualId);
    const data = raw?.item ?? raw;
    if (data && data.title) {
      const post = insightsApi.transformContent(data);
      return generatePageMetadata({
        title: post.title,
        description: post.excerpt || `${post.title} — Technical publication by Devopstrio.`,
        path: `/insights/${categorySlug}/${post.slug}`,
        ogImage: post.image || undefined,
        keywords: post.tags
      });
    }
  } catch (e) {
    console.error("Failed to generate metadata for post page:", e);
  }
  return {};
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { categorySlug, postId } = await params;
  const actualId = getActualId(postId);

  let post: TransformedPost | null = null;
  let relatedPosts: any[] = [];

  try {
    const raw = await insightsApi.getContentById(actualId);
    const data = raw?.item ?? raw;
    if (data && data.id) {
      post = insightsApi.transformContent(data);

      // Load related posts from same category
      const allPosts = await insightsApi.getAllPosts(100);
      relatedPosts = allPosts
        .filter((p) => p.category?.slug === categorySlug && p.id !== data.id)
        .slice(0, 5);
    }
  } catch (err) {
    console.error("Failed to load publication details:", err);
  }

  if (!post) {
    notFound();
  }

  const postCanonicalUrl = `https://devopstrio.co.uk/insights/${categorySlug}/${post.slug}`;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Insights", item: "/insights" },
    { name: post.category.name, item: `/insights/${categorySlug}` },
    { name: post.title, item: postCanonicalUrl }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema 
        title={post.title} 
        description={post.excerpt || post.title} 
        image={post.image ?? undefined} 
        datePublished={post.date} 
        authorName={post.author} 
        url={postCanonicalUrl}
      />
      <PostDetailClient 
        post={post} 
        relatedPosts={relatedPosts} 
        categorySlug={categorySlug} 
        postId={actualId} 
      />
    </>
  );
}
