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
      const title = data.title;
      const description = data.excerpt || data.subtitle || "Devopstrio technical publication.";
      return {
        title: title,
        description: description,
        alternates: {
          canonical: `/insights/${categorySlug}/${postId}`
        },
        openGraph: {
          title: title,
          description: description,
          type: "article",
          url: `https://devopstrio.co.uk/insights/${categorySlug}/${postId}`,
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
