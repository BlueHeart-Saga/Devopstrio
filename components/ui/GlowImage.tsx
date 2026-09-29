"use client";

import React from "react";

export const GlowImage = ({
  src,
  alt,
  maxW,
  eager = false,
  className = "",
  interactive = true, // hover lift (set false for hero)
}: {
  src: string;
  alt: string;
  maxW: string;
  eager?: boolean;
  className?: string;
  mask?: boolean;
  interactive?: boolean;
  glow?: string; // kept so old usages don't error; ignored
}) => (
  <div className={`group relative w-full ${maxW} ${className}`}>
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={`relative z-10 w-full h-auto block ${
        interactive
          ? "transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-2 group-hover:scale-[1.015]"
          : ""
      }`}
    />
  </div>
);

export default GlowImage;
