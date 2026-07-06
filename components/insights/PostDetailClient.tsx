"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, Linkedin, Twitter, Facebook, Copy, Check, BookOpen, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { insightsApi, TransformedPost, PostBlock } from "@/lib/insightsApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Reveal } from "@/components/ui/Reveal";
import { InsightsNavigationCards } from "@/components/insights/InsightsNavigationCards";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";

const INSIGHTS_FAQS = [
  {
    q: "How frequently are Devopstrio insights and engineering articles updated?",
    a: "Our SRE, Cloud Architecture, and DevOps engineering teams publish deep-dives, post-mortems, and technology benchmarks weekly, capturing learnings from live client implementations."
  },
  {
    q: "Can I request a deep-dive or whitepaper on a specific technology stack?",
    a: "Yes! We welcome community and client suggestions. You can submit requests via our contact form to cover specific Kubernetes, IaC, or GenAI integration architectures."
  },
  {
    q: "Are the architecture patterns and blueprints shared in your blogs production-ready?",
    a: "While our whitepapers and blogs outline industry-standard best practices, architectures should be tailored to your specific scale, security, and workload parameters."
  },
  {
    q: "How does Devopstrio calculate the metrics presented in your case studies?",
    a: "Metrics are gathered directly from real-world telemetry dashboards and financial reporting tools, comparing pre-migration benchmarks to post-deployment outputs."
  },
  {
    q: "Can I use or reference Devopstrio's technical diagrams in my own work?",
    a: "Yes, our content is open for attribution under standard educational usage. Please attribute diagrams and technical checklists to Devopstrio."
  },
  {
    q: "How are Devopstrio case studies structured for client confidentiality?",
    a: "We prioritize client privacy. Case studies use sanitized architectural diagrams, anonymized metrics, or generic industry profiles unless explicit client approval is obtained."
  },
  {
    q: "Who authors the publications and whitepapers on the Devopstrio portal?",
    a: "Every post is written directly by our practitioners—active platform developers, Senior SRE specialists, and Tech Leads working on real engineering challenges."
  },
  {
    q: "Does Devopstrio offer training or custom workshops based on the blogs?",
    a: "Absolutely. We translate our written insights into tailored engineering workshops, training sessions, and design audits for enterprise cloud migrations."
  },
  {
    q: "How can I register for the upcoming webinars and industry conferences?",
    a: "Simply visit our Events category channel and select the specific webinar or roundtable card to register online and receive invite coordinates."
  },
  {
    q: "Where can I find the downloadable PDFs of your whitepapers and engineering briefs?",
    a: "Within individual whitepaper and deep-dive detail pages, look for the glassmorphic Document Reader panel to view or download high-fidelity PDF blueprints."
  }
];

interface PostDetailClientProps {
  post: TransformedPost;
  relatedPosts: TransformedPost[];
  categorySlug: string;
  postId: string;
}

export function PostDetailClient({ post, relatedPosts, categorySlug, postId }: PostDetailClientProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [previewDocUrl, setPreviewDocUrl] = useState<string | null>(null);

  useEffect(() => {
    const likedKey = `liked_${postId}`;
    const isLiked = localStorage.getItem(likedKey) === "true";
    setLiked(isLiked);
  }, [postId]);

  const handleLike = async () => {
    if (liked) return;
    try {
      setLiked(true);
      setLikesCount(prev => prev + 1);
      localStorage.setItem(`liked_${postId}`, "true");
      await insightsApi.registerLike(postId);
    } catch (err) {
      console.error("Failed to register vote:", err);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`,
    twitter: `https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}&text=${encodeURIComponent(post.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-16 relative">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.04),transparent_70%)] pointer-events-none" />

      <section className="py-16">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <Link
            href={`/insights/${categorySlug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to {categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <article className="lg:col-span-8 space-y-8 text-left">
              <div className="space-y-6 mb-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-zinc-400 font-medium pb-8 border-b border-zinc-900/60">
                  <div className="flex items-center gap-2.5 pr-4 border-r border-zinc-800">
                    <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[10px]">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-zinc-200">{post.author}</span>
                  </div>
                  <span>{post.category.name}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {post.image && (
                <div className="h-64 md:h-[450px] w-full rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-950 mb-10 relative shadow-2xl">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              {post.excerpt && (
                <div className="mb-10 text-lg md:text-xl text-zinc-300 font-medium leading-relaxed italic border-l-4 border-rose-500 pl-6 py-2 bg-gradient-to-r from-rose-500/5 to-transparent">
                  {post.excerpt}
                </div>
              )}

              <div className="space-y-6">
                {post.rawBlocks && post.rawBlocks.length > 0 ? (
                  post.rawBlocks.map((block, idx) => (
                    <BlockRenderer
                      key={idx}
                      block={block}
                      onPreviewDoc={(url) => setPreviewDocUrl(url)}
                    />
                  ))
                ) : (
                  <div className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-normal opacity-95">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-6 mt-12 border-t border-zinc-900/60 pb-4">
                <div className="flex items-center gap-6">
                  <button onClick={handleLike} className={`flex items-center gap-2 text-sm font-medium transition-colors ${liked ? "text-rose-500" : "text-zinc-400 hover:text-white"}`}>
                    <Heart size={18} className={liked ? "fill-rose-500" : ""} />
                    <span>{likesCount} Likes</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-default">
                    <Share2 size={18} />
                    <span>{likesCount * 3 + 12} Shares</span>
                  </button>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-12 pl-0 lg:pl-10 lg:border-l border-zinc-900/60">
              
              {/* Share To Section */}
              <div>
                <h4 className="text-sm font-bold text-white mb-5">Share to</h4>
                <div className="flex items-center gap-3">
                  <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md">
                    <Linkedin size={16} />
                  </a>
                  <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md">
                    <Twitter size={16} />
                  </a>
                  <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md">
                    <Facebook size={16} />
                  </a>
                  <button onClick={handleCopyLink} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md relative">
                    <Copy size={16} />
                    {copied && <span className="absolute -top-10 bg-zinc-900 border border-zinc-800 text-xs px-2.5 py-1 rounded text-white shadow-xl whitespace-nowrap">Copied!</span>}
                  </button>
                </div>
              </div>

              {/* Related Articles Section */}
              {relatedPosts.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-white mb-6">Related Articles</h4>
                  <div className="flex flex-col gap-6">
                    {relatedPosts.map((r) => (
                      <Link
                        key={r.id}
                        href={`/insights/${categorySlug}/${r.id}`}
                        className="group flex gap-4 items-center"
                      >
                        <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-zinc-900 relative border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                          {r.image ? (
                            <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-tr from-rose-950/20 to-purple-950/10 flex items-center justify-center">
                              <BookOpen size={16} className="text-rose-500/20" />
                            </div>
                          )}
                        </div>
                        <div className="text-left flex flex-col justify-center flex-1">
                          <h5 className="text-xs md:text-sm font-semibold text-zinc-300 group-hover:text-rose-500 transition-colors line-clamp-2 leading-snug mb-1.5">
                            {r.title}
                          </h5>
                          <span className="text-[10px] text-zinc-500 font-medium">{r.category?.name || categorySlug}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <InsightsNavigationCards />
      <NewsletterSubscription className="mt-12 mb-8" />
      <FAQ 
        faqs={INSIGHTS_FAQS} 
        className="w-full py-12 bg-black border-b border-zinc-900/60 relative"
      />
      <CTA 
        ctaTitle="Harness our engineering" 
        ctaHighlight="expertise" 
        ctaDesc="Partner with Devopstrio's world-class platform specialists to build, automate, and scale your digital assets with confidence." 
        ctaBtnText="Connect With Experts" 
        backLink="/insights" 
        className="w-full py-12 bg-[#030303] text-white border-t border-zinc-900 relative overflow-hidden"
      />

      <AnimatePresence>
        {previewDocUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-zinc-950 border-b border-zinc-900">
              <div className="flex items-center gap-2">
                <BookOpen className="text-rose-500" size={16} />
                <span className="text-xs font-semibold text-zinc-200">Devopstrio Document Reader</span>
              </div>
              <button
                onClick={() => setPreviewDocUrl(null)}
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 bg-zinc-900/50 p-4">
              <iframe
                src={`${previewDocUrl}#toolbar=0`}
                className="w-full h-full border border-zinc-850 rounded-xl bg-zinc-950"
                title="Document Reader Frame"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function BlockRenderer({ block, onPreviewDoc }: { block: PostBlock; onPreviewDoc: (url: string) => void }) {
  const { type, data } = block;
  switch (type) {
    case "heading":
      return <h2 className="text-xl md:text-2xl font-bold text-white mt-12 mb-5 border-b border-zinc-900 pb-3">{data.value}</h2>;
    case "subheading":
      return <h3 className="text-base md:text-lg font-bold text-rose-500 mt-8 mb-4">{data.value}</h3>;
    case "text":
      return <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal opacity-95">{data.value}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 border-rose-500 bg-rose-500/[0.03] rounded-r-2xl p-6 my-8 border-y border-r border-rose-500/5">
          <p className="text-zinc-200 text-xs md:text-sm italic font-light leading-relaxed">&ldquo;{data.value}&rdquo;</p>
        </blockquote>
      );
    case "list":
    case "bullet-list":
      return (
        <ul className="list-disc pl-5 mb-6 text-zinc-300 text-sm md:text-base font-normal opacity-95 space-y-2.5">
          {data.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol className="list-decimal pl-5 mb-6 text-zinc-300 text-sm md:text-base font-normal opacity-95 space-y-2.5">
          {data.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "image":
      return (
        <figure className="my-10 rounded-[28px] overflow-hidden border border-white/5 bg-zinc-950 p-3 shadow-2xl">
          <img src={data.url || `https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net/api/images/${data.file_id}`} alt={data.alt || "CMS Image"} className="w-full rounded-[20px] object-contain max-h-[500px]" />
          {data.alt && <figcaption className="text-center text-[10px] text-zinc-450 mt-3 font-mono uppercase tracking-wider">{data.alt}</figcaption>}
        </figure>
      );
    case "document":
      const docUrl = data.file_id
        ? `/api/insights-proxy/api/documents/${data.file_id}`
        : data.url || "";
      return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-zinc-950/40 border border-white/5 hover:border-rose-500/25 rounded-2xl my-8 gap-4 backdrop-blur-md shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-rose-600/10 text-rose-500 shadow-inner">
              <BookOpen size={22} />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-semibold text-zinc-200 leading-none mb-1.5">{data.title || "Research Publication"}</h4>
              <span className="text-[10px] text-zinc-550 font-mono uppercase tracking-wider">PDF Document / Report</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => onPreviewDoc(docUrl)}
              className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              Open Reader
            </button>
            <a
              href={docUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Download
            </a>
          </div>
        </div>
      );
    default:
      return null;
  }
}
