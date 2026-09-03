import { useEffect, useState } from "react";
import { memoryRush, type MediaItem } from "@/lib/story-config";
import { MediaFrame, useReducedMotion } from "./primitives";
import { cn } from "@/lib/utils";

const positions = [
  { left: "6%", rot: -7 },
  { left: "52%", rot: 5 },
  { left: "26%", rot: -3 },
  { left: "62%", rot: 8 },
  { left: "14%", rot: 4 },
  { left: "44%", rot: -6 },
];

/**
 * Photos fly by like memories, then everything abruptly STOPS
 * on one featured frame.
 */
export function MemoryRush({
  featured,
  featuredLabel,
  duration = 3400,
  onStop,
  className,
}: {
  featured: MediaItem;
  featuredLabel?: string;
  duration?: number;
  onStop?: () => void;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (reduced) {
      setStopped(true);
      onStop?.();
      return;
    }
    const t = setTimeout(() => {
      setStopped(true);
      onStop?.();
    }, duration);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, reduced]);

  return (
    <div className={cn("relative w-full", className)}>
      {!stopped ? (
        <div className="relative h-[58svh] overflow-hidden rounded-2xl border border-border bg-card/30">
          {Array.from({ length: 14 }).map((_, i) => {
            const item = memoryRush[i % memoryRush.length]!;
            const pos = positions[i % positions.length]!;
            return (
              <div
                key={i}
                className="absolute w-[38%] max-w-[9.5rem]"
                style={{
                  left: pos.left,
                  top: "22%",
                  ["--rot" as string]: `${pos.rot}deg`,
                  animation: `rush-tile ${900 + (i % 4) * 140}ms cubic-bezier(0.3,0.7,0.3,1) ${i * 190}ms both`,
                  willChange: "transform, opacity",
                }}
              >
                <MediaFrame item={item} aspect="3 / 4" />
              </div>
            );
          })}
          <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-[0.6rem] uppercase tracking-[0.3em] text-rose/60">
            memories rushing…
          </div>
        </div>
      ) : (
        <div className="animate-blur-in">
          {featuredLabel ? (
            <p dir="auto" className="mb-3 text-center text-[0.62rem] uppercase tracking-[0.3em] text-rose/80">
              {featuredLabel}
            </p>
          ) : null}
          <MediaFrame item={featured} polaroidStyle tilt={-1.5} aspect="4 / 5" />
        </div>
      )}
    </div>
  );
}
