"use client";

import { useEffect, useRef } from "react";

export type TurnDirection = "next" | "prev";
export type PageTexture = { canvas: HTMLCanvasElement };

const STRIPS = 28;
const DURATION = 900;
const PERSPECTIVE = 1800;
// Extra lift in the middle of the sheet while it is turning (radians).
const CURL = 0.35;

type Props = {
  /** "next": the right page turns over to the left. "prev": the left page turns over to the right. */
  direction: TurnDirection;
  /** Page on the sheet's first side (the page leaving the visible spread). */
  front: PageTexture;
  /** Page on the sheet's reverse side (the page arriving in the destination spread). */
  back: PageTexture;
  width: number;
  height: number;
  onFinished: () => void;
};

type StripView = { el: HTMLDivElement; shades: HTMLDivElement[] };

/**
 * Turns a PDF sheet around its spine as a chain of connected curved strips.
 *
 * Geometry, measured from the spine outward:
 *  - Strip k starts exactly where strip k-1 ends, so the sheet stays connected.
 *  - phi is the sheet's angle: 0 when it lies flat pointing away from the spine,
 *    PI when it lies flat on the other side. At PI/2 it stands up toward the viewer.
 *  - "next" starts on the right and lands on the left; "prev" is its mirror image.
 *
 * Faces: the sheet shows the leaving page first and the arriving page once it
 * passes PI/2. Each strip shows the slice of each page that sits at the same
 * distance from the spine, so page content keeps its orientation.
 */
export function CurvedPageTurn({ direction, front, back, width, height, onFinished }: Props) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(onFinished);
  useEffect(() => { doneRef.current = onFinished; }, [onFinished]);

  useEffect(() => {
    const host = surfaceRef.current;
    if (!host || width <= 0 || height <= 0) return;
    host.replaceChildren();

    const isNext = direction === "next";
    const spineX = isNext ? 0 : width;
    const stripWidth = width / STRIPS;
    host.style.perspectiveOrigin = `${spineX}px 50%`;

    // The leaving page is the first face for "next" and the reverse face for "prev".
    const firstFaceSource = isNext ? front.canvas : back.canvas;
    const reverseFaceSource = isNext ? back.canvas : front.canvas;

    const addFace = (
      strip: HTMLDivElement,
      source: HTMLCanvasElement,
      slice: number,
      reverse: boolean,
      shades: HTMLDivElement[],
    ) => {
      const face = document.createElement("div");
      face.style.cssText = `position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;${reverse ? "transform:rotateY(180deg);" : ""}`;
      const canvas = document.createElement("canvas");
      // Keep the source's pixel density per slice; never encode as JPEG.
      const sourceSlice = source.width / STRIPS;
      canvas.width = Math.max(1, Math.ceil(sourceSlice) + 2);
      canvas.height = Math.max(1, source.height);
      canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) {
        const sx = Math.floor(slice * sourceSlice);
        const sw = Math.max(1, Math.min(source.width - sx, Math.ceil(sourceSlice) + 1));
        ctx.drawImage(source, sx, 0, sw, source.height, 0, 0, canvas.width, canvas.height);
      }
      const shade = document.createElement("div");
      shade.style.cssText = "position:absolute;inset:0;background:#000;opacity:0;pointer-events:none";
      face.append(canvas, shade);
      strip.appendChild(face);
      shades.push(shade);
    };

    const strips: StripView[] = [];
    // Index i is the physical position across the sheet, left to right, when flat.
    // The first face shows slice i for "next" and slice STRIPS-1-i for "prev",
    // so the slice nearest the spine is always the one touching the spine.
    for (let i = 0; i < STRIPS; i++) {
      const strip = document.createElement("div");
      strip.style.cssText = `position:absolute;left:0;top:0;height:100%;width:${stripWidth + 1}px;transform-style:preserve-3d;transform-origin:0 50%;will-change:transform;`;
      const shades: HTMLDivElement[] = [];
      const firstSlice = isNext ? i : STRIPS - 1 - i;
      const reverseSlice = STRIPS - 1 - firstSlice;
      addFace(strip, firstFaceSource, firstSlice, false, shades);
      addFace(strip, reverseFaceSource, reverseSlice, true, shades);
      host.appendChild(strip);
      strips.push({ el: strip, shades });
    }

    const pose = (now: number): number => {
      const t = Math.min(1, Math.max(0, (now - start) / DURATION));
      const eased = t * t * (3 - 2 * t);
      const fold = Math.sin(Math.PI * eased);
      let x = spineX;
      let z = 0;
      // k counts strips outward from the spine; i is the physical index.
      for (let k = 0; k < STRIPS; k++) {
        const u = (k + 0.5) / STRIPS;
        const phi = Math.PI * eased + CURL * fold * Math.sin(Math.PI * u);
        // CSS rotateY(a) turns the strip's outward direction into (cos a, -sin a) in (x, z).
        // "next" needs (cos phi, sin phi), so a = -phi.
        // "prev" needs (-cos phi, sin phi), so a = phi + PI.
        const angle = isNext ? -phi : phi + Math.PI;
        const view = strips[isNext ? k : STRIPS - 1 - k];
        view.el.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${angle}rad)`;
        const shadeOpacity = String(Math.min(0.32, 0.12 * fold + 0.18 * Math.abs(Math.sin(phi))));
        view.shades.forEach(shade => { shade.style.opacity = shadeOpacity; });
        x += (isNext ? 1 : -1) * Math.cos(phi) * stripWidth;
        z += Math.sin(phi) * stripWidth;
      }
      return t;
    };

    const start = performance.now();
    let frame = 0;
    let stopped = false;
    const step = (now: number) => {
      if (stopped) return;
      const t = pose(now);
      if (t < 1) frame = requestAnimationFrame(step);
      else doneRef.current();
    };
    pose(start);
    frame = requestAnimationFrame(step);
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      host.replaceChildren();
    };
  }, [direction, front, back, width, height]);

  return (
    <div
      ref={surfaceRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20"
      style={{ perspective: `${PERSPECTIVE}px`, transformStyle: "preserve-3d" }}
    />
  );
}

export default CurvedPageTurn;
