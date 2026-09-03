import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { ProgressRail } from "@/components/story/primitives";
import {
  Chapter01,
  Chapter02,
  Chapter03,
  Opening,
  QuizFirstDate,
  QuizFirstGift,
  QuizFirstHug,
} from "@/components/story/chapters-a";
import {
  Chapter04,
  Chapter05,
  FinalQuiz,
  FinalTwist,
  HardTimes,
  Letter,
  SuitFitting,
} from "@/components/story/chapters-b";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luluu × Anusha — 04.09.2026" },
      {
        name: "description",
        content:
          "An interactive story for Ola: birthday, first anniversary, and one last invitation. 04.09.2026.",
      },
      { property: "og:title", content: "Luluu × Anusha — 04.09.2026" },
      {
        property: "og:description",
        content: "Nine years of waiting, one dinner invitation. An interactive story for Ola.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const [step, setStep] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const steps = [
    Chapter01,
    QuizFirstDate,
    Chapter02,
    QuizFirstGift,
    QuizFirstHug,
    Chapter03,
    Chapter04,
    HardTimes,
    SuitFitting,
    Chapter05,
    FinalQuiz,
    Letter,
    FinalTwist,
  ] as const;

  const next = () => setStep((s) => Math.min(steps.length, s + 1));

  useEffect(() => {
    topRef.current?.scrollIntoView({ block: "start" });
    window.scrollTo({ top: 0 });
  }, [step]);

  const Current = step === 0 ? null : steps[step - 1]!;

  return (
    <main className="relative min-h-[100svh] overflow-x-hidden">
      <div className="grain" aria-hidden="true" />
      <div ref={topRef} />
      {step > 0 ? <ProgressRail value={step / steps.length} /> : null}

      {step > 0 ? (
        <button
          type="button"
          onClick={() => setSoundOn((v) => !v)}
          aria-label={soundOn ? "Mute" : "Unmute"}
          className="fixed end-4 top-4 z-40 grid size-10 place-items-center rounded-full border border-border bg-card/70 text-foreground/80 backdrop-blur transition-colors hover:text-rose"
        >
          {soundOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </button>
      ) : null}

      {step === 0 ? (
        <Opening
          onStart={(s) => {
            setSoundOn(s);
            setStep(1);
          }}
        />
      ) : (
        <div key={step}>{Current ? <Current onNext={next} soundOn={soundOn} /> : null}</div>
      )}
    </main>
  );
}
