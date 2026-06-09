"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, Linkedin, Twitter, Facebook, Copy, Check, BookOpen, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { insightsApi, TransformedPost, PostBlock } from "@/lib/insightsApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Reveal } from "@/components/ui/Reveal";

interface PostDetailPageProps {
  params: Promise<{
    categorySlug: string;
    postId: string;
  }>;
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const resolvedParams = React.use(params);
  const categorySlug = resolvedParams.categorySlug;
  const postId = resolvedParams.postId;

  const [post, setPost] = useState<TransformedPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [previewDocUrl, setPreviewDocUrl] = useState<string | null>(null);

  // Load publication details
  useEffect(() => {
    async function loadPostDetails() {
      try {
        setLoading(true);
        const data = await insightsApi.getContentById(postId);
        if (data) {
          const transformed = insightsApi.transformContent(data);
          setPost(transformed);
          setLikesCount(transformed.likes);

          // Check localStorage for like state
          const likedKey = `liked_${postId}`;
          const isLiked = localStorage.getItem(likedKey) === "true";
          setLiked(isLiked);

          // Load related posts from same category
          const allPosts = await insightsApi.getAllPosts(100);
          const related = allPosts
            .filter((p) => p.category.slug === categorySlug && p.id !== postId)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (err) {
        console.error("Failed to load publication details:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPostDetails();
  }, [postId, categorySlug]);

  // Handle Like Increment
  const handleLike = async () => {
    if (liked) return; // Only allow one vote per session
    try {
      setLiked(true);
      setLikesCount(prev => prev + 1);
      localStorage.setItem(`liked_${postId}`, "true");
      await insightsApi.registerLike(postId);
    } catch (err) {
      console.error("Failed to register vote:", err);
    }
  };

  // Handle Clipboard Copy
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Social Share redirects
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`,
    twitter: `https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}&text=${post ? encodeURIComponent(post.title) : ""}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 relative">
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.04),transparent_70%)] pointer-events-none" />

      <section className="py-12 px-6">
        <div className="max-w-site mx-auto">
          {/* Back button */}
          <Link
            href={`/insights/${categorySlug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-550 hover:text-rose-500 transition-colors mb-8 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> BACK TO {categorySlug.toUpperCase()}
          </Link>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-zinc-500">
              <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-rose-600 animate-spin mb-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Loading article...</span>
            </div>
          ) : !post ? (
            <div className="text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
              <AlertCircle className="mx-auto text-zinc-700 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-zinc-400 mb-1">Publication Not Found</h3>
              <p className="text-xs text-zinc-550">The requested article could not be loaded.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Article Body & Text Content */}
              <article className="lg:col-span-8 space-y-8 text-left">
                {/* Hero Headers */}
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded text-[8px] font-bold bg-zinc-900 border border-zinc-850 text-zinc-400 uppercase tracking-widest">
                    {post.category.name}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                    {post.title}
                  </h1>

                  {/* Metadata line */}
                  <div className="flex flex-wrap items-center gap-6 text-[10px] text-zinc-550 font-mono pt-2 border-b border-zinc-900/60 pb-6">
                    <span className="flex items-center gap-1.5"><Calendar size={11} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={11} /> {post.readTime} min read</span>
                    <span className="flex items-center gap-1.5"><Eye size={11} /> {post.views} views</span>
                  </div>
                </div>

                {/* Cover Banner Image */}
                {post.image && (
                  <div className="h-64 md:h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950">
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Excerpt Summary Block */}
                <div className="border-l-2 border-rose-600 pl-4 py-1.5 my-6">
                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed italic">
                    {post.excerpt}
                  </p>
                </div>

                {/* Block renderer parser */}
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
                    // Fallback to parsed markdown body
                    <div className="prose prose-invert max-w-none text-zinc-350 text-xs md:text-sm leading-relaxed space-y-6 font-light">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                    </div>
                  )}
                </div>

                {/* Client Side Engagement Controls */}
                <div className="flex items-center gap-4 pt-8 border-t border-zinc-900/60 mt-12">
                  <button
                    onClick={handleLike}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      liked
                        ? "bg-rose-600/10 border-rose-500 text-rose-500"
                        : "bg-zinc-950/20 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                    }`}
                  >
                    <Heart size={14} className={liked ? "fill-rose-500 text-rose-500" : ""} />
                    <span>{likesCount} {likesCount === 1 ? "Like" : "Likes"}</span>
                  </button>

                  {/* Share Menu trigger */}
                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-zinc-900 bg-zinc-950/20 text-zinc-400 hover:text-white hover:border-zinc-800 transition-all duration-300"
                    >
                      <Share2 size={14} /> Share Article
                    </button>

                    <AnimatePresence>
                      {showShareMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute z-20 left-0 mt-2 w-48 bg-zinc-950 border border-zinc-900 rounded-xl p-2 shadow-2xl flex flex-col gap-1"
                        >
                          <a
                            href={shareUrls.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-3 py-2 text-[11px] text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                          >
                            <Linkedin size={13} /> LinkedIn
                          </a>
                          <a
                            href={shareUrls.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-3 py-2 text-[11px] text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                          >
                            <Twitter size={13} /> Twitter
                          </a>
                          <a
                            href={shareUrls.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-3 py-2 text-[11px] text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                          >
                            <Facebook size={13} /> Facebook
                          </a>
                          <button
                            onClick={handleCopyLink}
                            className="flex items-center justify-between w-full text-left px-3 py-2 text-[11px] text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                          >
                            <span className="flex items-center gap-2.5"><Copy size={13} /> Copy Link</span>
                            {copied && <Check size={12} className="text-green-500" />}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </article>

              {/* Right Column: Sticky Sidebar metadata */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-left">
                {/* Contributor Card */}
                <div className="bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
                  <h4 className="text-[10px] font-mono tracking-widest text-zinc-550 uppercase mb-4">
                    Lead Contributor
                  </h4>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ce2453] to-[#e79e57] flex items-center justify-center font-bold text-white text-sm">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-zinc-200 leading-none mb-1.5">{post.author}</h5>
                      <span className="text-[9px] text-zinc-550 font-mono uppercase">Devopstrio Contributor</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                    Specialist contributor sharing system engineering, automation blueprints, and platform operations guides.
                  </p>
                </div>

                {/* Related reading posts */}
                {relatedPosts.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono tracking-widest text-zinc-550 uppercase">
                      Related Reading
                    </h4>
                    <div className="flex flex-col gap-4">
                      {relatedPosts.map((r) => (
                        <Link
                          key={r.id}
                          href={`/insights/${categorySlug}/${r.id}`}
                          className="group flex gap-4 p-3 bg-zinc-950/10 border border-zinc-900/60 rounded-xl hover:border-zinc-800 transition-colors"
                        >
                          <div className="w-16 h-16 rounded-lg bg-zinc-950 overflow-hidden shrink-0">
                            {r.image ? (
                              <img src={r.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-tr from-[#ce2453]/10 to-[#e79e57]/5 flex items-center justify-center">
                                <BookOpen size={16} className="text-rose-500/20" />
                              </div>
                            )}
                          </div>
                          <div className="text-left flex flex-col justify-center">
                            <h5 className="text-[11px] font-semibold text-zinc-300 group-hover:text-rose-500 transition-colors line-clamp-2 leading-snug">
                              {r.title}
                            </h5>
                            <span className="text-[9px] text-zinc-550 font-mono mt-1">{r.date}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Overlay Document Reader (PDF Viewer) */}
      <AnimatePresence>
        {previewDocUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
          >
            {/* Header controls bar */}
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

            {/* Document preview frame */}
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

// Custom block renderer inside article page
function BlockRenderer({ block, onPreviewDoc }: { block: PostBlock; onPreviewDoc: (url: string) => void }) {
  const { type, data } = block;
  switch (type) {
    case "heading":
      return <h2 className="text-lg md:text-xl font-semibold text-white mt-8 mb-4 border-b border-zinc-900 pb-2">{data.value}</h2>;
    case "subheading":
      return <h3 className="text-sm md:text-base font-semibold text-rose-500 mt-6 mb-3">{data.value}</h3>;
    case "text":
      return <p className="text-zinc-350 text-xs md:text-sm leading-relaxed mb-6 font-light">{data.value}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 border-rose-500 bg-zinc-950/40 rounded-r-xl p-5 my-6">
          <p className="text-zinc-200 text-xs md:text-sm italic font-light leading-relaxed">&ldquo;{data.value}&rdquo;</p>
        </blockquote>
      );
    case "list":
    case "bullet-list":
      return (
        <ul className="list-disc pl-5 mb-6 text-zinc-350 text-xs md:text-sm font-light space-y-2">
          {data.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol className="list-decimal pl-5 mb-6 text-zinc-350 text-xs md:text-sm font-light space-y-2">
          {data.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "image":
      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 p-2">
          <img src={data.url || `https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net/api/images/${data.file_id}`} alt={data.alt || "CMS Image"} className="w-full rounded-xl object-contain max-h-[450px]" />
          {data.alt && <figcaption className="text-center text-[10px] text-zinc-550 mt-2 font-mono">{data.alt}</figcaption>}
        </figure>
      );
    case "document":
      const docUrl = data.file_id
        ? `https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net/api/documents/${data.file_id}`
        : data.url || "";
      return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl my-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-rose-600/10 text-rose-500">
              <BookOpen size={20} />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-semibold text-zinc-200 leading-none mb-1.5">{data.title || "Research Publication"}</h4>
              <span className="text-[9px] text-zinc-550 font-mono uppercase">PDF Document / Report</span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onPreviewDoc(docUrl)}
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-rose-600/10 text-rose-500 hover:bg-rose-600/20 transition-all duration-200"
            >
              Open Reader
            </button>
            <a
              href={docUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 text-zinc-200 transition-all duration-200"
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
