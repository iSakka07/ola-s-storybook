import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/lib/story-config";

/** true when the visitor asked for reduced motion */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/**
 * Reveals story beats one after another.
 * Returns the number of beats currently visible (1-based).
 */
export function useBeats(total: number, interval = 1400, startDelay = 300) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (reduced) {
      setVisible(total);
      return;
    }
    let n = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < total; i++) {
      timers.push(
        setTimeout(() => {
          n = i + 1;
          setVisible(n);
        }, startDelay + i * interval),
      );
    }
    return () => timers.forEach(clearTimeout);
  }, [total, interval, startDelay, reduced]);

  return visible;
}

export function Beat({
  show,
  delay = 0,
  className,
  children,
  variant = "rise",
}: {
  show: boolean;
  delay?: number;
  className?: string;
  children: ReactNode;
  variant?: "rise" | "fade" | "blur";
}) {
  if (!show) return null;
  const anim =
    variant === "fade" ? "animate-soft-fade" : variant === "blur" ? "animate-blur-in" : "animate-rise";
  return (
    <div className={cn(anim, className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Arabic paragraph — proper RTL, English words inside stay natural */
export function Ar({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p dir="rtl" lang="ar" className={cn("text-balance leading-[1.9] text-foreground/90", className)}>
      {children}
    </p>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-rose/80">
      {children}
    </span>
  );
}

export function ChapterShell({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative mx-auto flex min-h-[100svh] w-full max-w-xl flex-col justify-center gap-6 px-6 py-20",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {children}
    </section>
  );
}

export function StoryButton({
  children,
  onClick,
  variant = "solid",
  className,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "outline";
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm tracking-wide transition-all duration-300 active:scale-[0.98] disabled:opacity-40",
        variant === "solid" &&
          "bg-[image:var(--gradient-ember)] text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110",
        variant === "outline" && "border border-border text-foreground/90 hover:border-rose/60 hover:text-rose",
        variant === "ghost" && "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

/** Media frame: renders the real photo/video when configured, else a labelled placeholder */
export function MediaFrame({
  item,
  aspect = "4 / 5",
  className,
  polaroidStyle = false,
  tilt = 0,
}: {
  item: MediaItem;
  aspect?: string;
  className?: string;
  polaroidStyle?: boolean;
  tilt?: number;
}) {
  const isVideo = item.kind === "video";
  const frame = (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[3px] bg-secondary/70",
        item.effect === "bokeh" && "media-bokeh",
      )}
      style={{ aspectRatio: aspect }}
    >
      {item.src ? (
        isVideo ? (
          <video
            src={item.src}
            poster={item.poster ?? undefined}
            controls
            muted={item.muted ?? false}
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={item.label}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-foreground/20 bg-[image:linear-gradient(135deg,oklch(0.26_0.012_45),oklch(0.21_0.012_40))] p-5 text-center">
          <span className="text-[0.62rem] uppercase tracking-[0.28em] text-rose/70">
            {isVideo ? "video placeholder" : "photo placeholder"}
          </span>
          <span dir="auto" className="text-sm text-foreground/75">
            {item.label}
          </span>
        </div>
      )}
    </div>
  );

  if (!polaroidStyle) {
    return (
      <figure className={cn("w-full", className)}>
        <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-soft)]">{frame}</div>
        {item.caption ? (
          <figcaption dir="auto" className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {item.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={cn("polaroid mx-auto w-full max-w-[19rem]", className)}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {frame}
      <figcaption
        dir="auto"
        className="mt-3 text-center text-[0.8rem] leading-snug text-[oklch(0.35_0.02_40)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {item.caption ?? item.label}
      </figcaption>
    </figure>
  );
}

/** Music slot: supports local MP3 clips or external Spotify/YouTube embeds */
export function MusicEmbed({
  title,
  url,
  soundOn,
}: {
  title: string;
  url: string | null;
  soundOn: boolean;
}) {
  const isAudioFile = url ? /\.(mp3|wav|ogg|m4a)(\?.*)?$/i.test(url) : false;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isAudioFile || !soundOn) return;
    const node = wrapRef.current;
    const el = audioRef.current;
    if (!node || !el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
            // pause any other playing story audio
            document.querySelectorAll("audio[data-story-audio]").forEach((other) => {
              if (other !== el) (other as HTMLAudioElement).pause();
            });
            el.volume = 0.85;
            void el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: [0, 0.45, 0.8] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isAudioFile, soundOn, url]);

  if (url && isAudioFile) {
    return (
      <div ref={wrapRef} className="overflow-hidden rounded-xl border border-border bg-card/70 p-4">
        <p className="text-[0.62rem] uppercase tracking-[0.28em] text-rose/70">song moment</p>
        <p dir="auto" className="mt-1 text-sm text-foreground/85">
          {title}
        </p>
        <audio
          ref={audioRef}
          data-story-audio=""
          src={url}
          controls
          loop
          playsInline
          preload={soundOn ? "auto" : "none"}
          className="mt-3 w-full"
        />
        {!soundOn ? (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            اختارت الدخول من غير صوت، بس تقدر تشغل اللحظة دي يدويًا.
          </p>
        ) : null}
      </div>
    );
  }


  if (url) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-card/70">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          allow="encrypted-media; clipboard-write; picture-in-picture"
          className="h-[152px] w-full"
        />
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-dashed border-foreground/20 bg-card/50 p-4">
      <p className="text-[0.62rem] uppercase tracking-[0.28em] text-rose/70">music embed slot</p>
      <p dir="auto" className="mt-1 text-sm text-foreground/85">
        {title}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Paste a Spotify or YouTube embed link in <code>src/lib/story-config.ts</code> → <code>embeds</code>.
        {soundOn ? "" : " Sound is currently off — that's fine, the story works without it."}
      </p>
    </div>
  );
}

export function ProgressRail({ value }: { value: number }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[2px] bg-foreground/5">
      <div
        className="h-full bg-[image:linear-gradient(90deg,var(--burgundy),var(--rose))] transition-[width] duration-700 ease-out"
        style={{ width: `${Math.min(100, Math.max(2, value * 100))}%` }}
      />
    </div>
  );
}
