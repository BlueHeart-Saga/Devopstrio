import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts standard image paths (.png, .jpg, .jpeg) to their corresponding /webp/ path.
 * Example: "/assets/hero.png" -> "/webp/assets/hero.webp"
 */
export function getWebPPath(src: string | null | undefined): string {
  if (!src) return "";
  if (typeof src !== "string") return src;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) return src;
  if (src.startsWith("/webp/")) return src;

  const webpRegex = /\.(png|jpg|jpeg)$/i;
  if (webpRegex.test(src)) {
    const cleanPath = src.startsWith("/") ? src : `/${src}`;
    return `/webp${cleanPath.replace(webpRegex, ".webp")}`;
  }

  return src;
}
