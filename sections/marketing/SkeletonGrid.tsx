import React from "react";

export function SkeletonGrid() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8" aria-busy="true">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-72 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-900/50" />
      ))}
    </div>
  );
}
