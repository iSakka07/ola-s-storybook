import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Ar, StoryButton } from "./primitives";

export type QuizOption = {
  label: string;
  correct?: boolean;
  /** playful response shown after tapping */
  response: string;
};

/**
 * Quiz card. Static options (no runaway buttons on mobile).
 * Wrong answer => witty response, then the correct answer is revealed.
 */
export function Quiz({
  question,
  options,
  reveal,
  children,
  onDone,
}: {
  question: string;
  options: QuizOption[];
  /** short line shown as the confirmed answer, e.g. "Liverpool Station ✓" */
  reveal?: string;
  /** anything shown after the answer is revealed (photos, extra beats) */
  children?: ReactNode;
  onDone?: () => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const chosen = answered ? options[picked]! : null;
  const wasWrong = answered && !chosen?.correct;

  return (
    <div className="flex flex-col gap-5">
      <Ar className="text-[1.35rem] text-display text-cream">{question}</Ar>

      <div className="flex flex-col gap-3">
        {options.map((o, i) => {
          const isPicked = picked === i;
          const showAsCorrect = answered && o.correct;
          return (
            <button
              key={o.label}
              type="button"
              dir="auto"
              disabled={answered}
              onClick={() => setPicked(i)}
              className={cn(
                "min-h-14 w-full rounded-2xl border px-5 text-[0.95rem] transition-all duration-300 active:scale-[0.99]",
                "border-border bg-card/50 text-foreground/90",
                !answered && "hover:border-rose/60 hover:bg-card/80",
                answered && !isPicked && !showAsCorrect && "opacity-40",
                showAsCorrect && "border-rose/70 bg-[oklch(0.72_0.062_15_/_0.12)] text-cream",
                isPicked && !o.correct && "border-destructive/50",
              )}
            >
              {o.label}
              {showAsCorrect ? <span className="ms-2 text-rose">✓</span> : null}
            </button>
          );
        })}
      </div>

      {answered ? (
        <div className="flex flex-col gap-4 animate-rise">
          <Ar className="text-[1.05rem] text-foreground/85">{chosen!.response}</Ar>

          {wasWrong && reveal ? (
            <p
              dir="auto"
              className="animate-soft-fade text-lg text-cream"
              style={{ fontFamily: "var(--font-display)", animationDelay: "700ms" }}
            >
              {reveal}
            </p>
          ) : null}

          {children ? (
            <div className="animate-soft-fade" style={{ animationDelay: "900ms" }}>
              {children}
            </div>
          ) : null}

          {onDone ? (
            <div className="animate-soft-fade pt-1" style={{ animationDelay: "1200ms" }}>
              <StoryButton onClick={onDone}>كمّل</StoryButton>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
