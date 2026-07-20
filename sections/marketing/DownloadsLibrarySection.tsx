"use client";

import React from "react";
import { Download, Eye } from "lucide-react";

export function DownloadsLibrarySection({
  filteredResources,
  getTypeBadge,
  onPreview,
  onDownload,
}: {
  filteredResources: any[];
  getTypeBadge: (type: string) => React.ReactNode;
  onPreview: (item: any) => void;
  onDownload: (item: any, e?: React.MouseEvent) => void;
}) {
  return (
    <section id="downloads-library" className="scroll-mt-36">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Download className="w-6 h-6 text-rose-500" />
            Complete Resource Downloads Library
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Searchable index of all downloadable files across corporate, practice, platform, and technical assets ({filteredResources.length} assets available).
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-950/80 text-zinc-400 font-semibold border-b border-zinc-800 uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Document Title</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Format</th>
                <th className="py-4 px-4">Size</th>
                <th className="py-4 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredResources.slice(0, 15).map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/40 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="font-bold text-white group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-zinc-400 line-clamp-1">{item.description}</div>
                  </td>
                  <td className="py-4 px-4 text-zinc-300 font-medium">{item.category}</td>
                  <td className="py-4 px-4">{getTypeBadge(item.type)}</td>
                  <td className="py-4 px-4 text-zinc-400">{item.size}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onPreview(item)}
                        className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => onDownload(item, e)}
                        className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold transition-colors flex items-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
