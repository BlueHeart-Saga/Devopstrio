"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, AlertCircle, X } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

interface ReaderPageProps {
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

export default function DocumentReaderPage({ params }: ReaderPageProps) {
  const resolvedParams = React.use(params);
  const categorySlug = resolvedParams.categorySlug;
  const postId = resolvedParams.postId;
  const actualId = getActualId(postId);

  const [post, setPost] = useState<TransformedPost | null>(null);
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPostDoc() {
      try {
        setLoading(true);
        const raw = await insightsApi.getContentById(actualId);
        const data = raw?.item ?? raw;
        if (data && data.id) {
          const transformed = insightsApi.transformContent(data);
          setPost(transformed);
          if (transformed.rawBlocks) {
            const docBlock = transformed.rawBlocks.find((b) => b.type === "document");
            if (docBlock?.data) {
              const url = docBlock.data.file_id
                ? `https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net/api/documents/${docBlock.data.file_id}`
                : docBlock.data.url || null;
              setDocUrl(url);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load publication for reader:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPostDoc();
  }, [postId]);

  return (
    <main className="fixed inset-0 z-50 bg-black flex flex-col text-white">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between p-4 bg-zinc-950 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <Link
            href={`/insights/${categorySlug}/${postId}`}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
          </Link>
          <div className="flex items-center gap-2 text-left">
            <BookOpen className="text-rose-500" size={16} />
            <div>
              <span className="text-xs font-semibold text-zinc-200 block max-w-xs md:max-w-md truncate">
                {post ? post.title : "Loading document..."}
              </span>
              <span className="text-[9px] text-zinc-550 font-mono uppercase block">Fullscreen PDF Reader</span>
            </div>
          </div>
        </div>

        <Link
          href={`/insights/${categorySlug}/${postId}`}
          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </Link>
      </div>

      {/* Frame content */}
      <div className="flex-1 bg-zinc-900/40 p-4">
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500">
            <div className="w-6 h-6 rounded-full border-2 border-zinc-800 border-t-rose-600 animate-spin mb-4" />
            <span className="text-xs font-mono uppercase tracking-widest">Opening PDF...</span>
          </div>
        ) : !docUrl ? (
          <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-zinc-850 rounded-xl max-w-md mx-auto my-auto p-8 text-center bg-zinc-950/20">
            <AlertCircle className="text-zinc-700 mb-4" size={36} />
            <h3 className="text-sm font-semibold text-zinc-400 mb-1">No document attachments</h3>
            <p className="text-xs text-zinc-550 mb-6">
              This publication doesn&apos;t contain any PDF or downloadable document attachments.
            </p>
            <Link
              href={`/insights/${categorySlug}/${postId}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              Back to Article
            </Link>
          </div>
        ) : (
          <iframe
            src={`${docUrl}#toolbar=0`}
            className="w-full h-full border border-zinc-850 rounded-xl bg-zinc-950"
            title="Fullscreen Document Viewer"
          />
        )}
      </div>
    </main>
  );
}
