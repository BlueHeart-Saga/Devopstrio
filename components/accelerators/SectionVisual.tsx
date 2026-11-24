import type { ReactNode } from "react";

/*
  One visual slot per page. Renders an approved local image when one exists,
  otherwise the fallback (a source-backed diagram or a text matrix).
  Never hotlink external images. Use optimised WebP/AVIF under /public/images/offerings/.
*/
type SectionVisualProps = {
  src?: string | null;
  alt?: string | null;
  width?: number;
  height?: number;
  caption?: string;
  fallback: ReactNode;
};

export function SectionVisual({ src, alt, width = 1600, height = 900, caption, fallback }: SectionVisualProps) {
  const hasImage = Boolean(src && alt);
  return (
    <figure className="my-12 border-t border-neutral-800 pt-8">
      {hasImage ? (
        <img
          src={src as string}
          alt={alt as string}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      ) : (
        fallback
      )}
      {caption ? <figcaption className="mt-3 text-sm text-neutral-500">{caption}</figcaption> : null}
    </figure>
  );
}
