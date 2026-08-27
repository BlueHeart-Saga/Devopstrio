import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { insightsApi } from "@/lib/insightsApi";
import { PostDetailClient } from "@/components/insights/PostDetailClient";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/Schemas";

interface PostDetailPageProps {
  params: Promise<{
    categorySlug: string;
    postId: string;
  }>;
}

export async function generateMetadata({ params }: PostDetailPageProps): Promise<Metadata> {
  const { categorySlug, postId } = await params;
  try {
    const raw = await insightsApi.getContentById(postId);
    const data = raw?.item ?? raw;
    if (data && data.title) {
      let title = data.title;
      if (title.length > 55) {
        title = title.substring(0, 55).trim() + "... | Devopstrio";
      } else if (!title.includes("Devopstrio")) {
        title = `${title} | Devopstrio`;
      }
      const description = data.excerpt || data.subtitle || `${data.title} — Detailed engineering case study and technical breakdown by Devopstrio.`;
      const canonicalUrl = `https://devopstrio.co.uk/insights/${categorySlug}/${postId}`;
      return {
        title: title,
        description: description.length > 155 ? description.substring(0, 152) + "..." : description,
        alternates: {
          canonical: canonicalUrl
        },
        openGraph: {
          title: title,
          description: description,
          type: "article",
          url: canonicalUrl,
          images: data.image ? [{ url: data.image }] : []
        },
        twitter: {
          card: "summary_large_image",
          title: title,
          description: description,
          images: data.image ? [data.image] : []
        }
      };
    }
  } catch (e) {
    console.error("Failed to generate metadata for post page:", e);
  }
  return {};
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { categorySlug, postId } = await params;

  let post = null;
  let relatedPosts: any[] = [];

  try {
    const raw = await insightsApi.getContentById(postId);
    const data = raw?.item ?? raw;
    if (data && data.id) {
      post = insightsApi.transformContent(data);

      // Load related posts from same category
      const allPosts = await insightsApi.getAllPosts(100);
      relatedPosts = allPosts
        .filter((p) => p.category?.slug === categorySlug && p.id !== postId)
        .slice(0, 5);
    }
  } catch (err) {
    console.error("Failed to load publication details:", err);
  }

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Insights", item: "/insights" },
    { name: post.category.name, item: `/insights/${categorySlug}` },
    { name: post.title, item: `/insights/${categorySlug}/${postId}` }
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
        url={`https://devopstrio.co.uk/insights/${categorySlug}/${postId}`}
      />
      <PostDetailClient 
        post={post} 
        relatedPosts={relatedPosts} 
        categorySlug={categorySlug} 
        postId={postId} 
      />
    </>
  );
}
