import { useEffect, useState } from "react";
import { Volume2, VolumeX, PhoneCall, Heart, MessageCircle, SignalLow } from "lucide-react";
import { dates, media, embeds } from "@/lib/story-config";
import {
  Ar,
  Beat,
  ChapterShell,
  MediaFrame,
  MusicEmbed,
  StoryButton,
  useBeats,
  useReducedMotion,
} from "./primitives";
import { LiveCounter } from "./LiveCounter";
import { MemoryRush } from "./MemoryRush";
import { Quiz } from "./Quiz";

type StepProps = { onNext: () => void; soundOn: boolean };

/* ------------------------------------------------------------------ */
/* 1 — OPENING                                                         */
/* ------------------------------------------------------------------ */
export function Opening({ onStart }: { onStart: (soundOn: boolean) => void }) {
  const b = useBeats(5, 1500, 500);

  return (
    <ChapterShell className="items-center text-center">
      <Beat show={b >= 1} variant="blur">
        <p
          className="text-[2.6rem] tracking-[0.16em] text-cream sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          04 <span className="text-rose/60">/</span> 09 <span className="text-rose/60">/</span> 2026
        </p>
      </Beat>

      <Beat show={b >= 2} variant="blur">
        <p className="text-3xl text-cream sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          Hey, Luluu.
        </p>
      </Beat>

      <Beat show={b >= 3}>
        <Ar className="mx-auto max-w-md text-lg">النهارده مش Birthday بس… ومش Anniversary بس برضه.</Ar>
      </Beat>

      <Beat show={b >= 4}>
        <Ar className="mx-auto max-w-md text-base text-muted-foreground">
          فيه حاجة تانية… بس قبلها، خليني أختبر ذاكرتك شوية. متخافيش، الامتحان سهل… نظريًا. 😌
        </Ar>
      </Beat>

      <Beat show={b >= 5} className="mt-6 flex w-full flex-col items-center gap-4">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <StoryButton onClick={() => onStart(true)} className="w-full sm:w-auto">
            <Volume2 className="size-4" /> Enter with sound
          </StoryButton>
          <StoryButton variant="outline" onClick={() => onStart(false)} className="w-full sm:w-auto">
            <VolumeX className="size-4" /> Keep it quiet
          </StoryButton>
        </div>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          START · يلا يا Anusha
        </p>
      </Beat>
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — CHAPTER 01 · 2017 / Instagram                                   */
/* ------------------------------------------------------------------ */
export function Chapter01({ onNext }: StepProps) {
  const reduced = useReducedMotion();
  const [likes, setLikes] = useState(0);
  const [dm, setDm] = useState(false);
  const b = useBeats(4, 1500, reduced ? 0 : 3200);

  useEffect(() => {
    if (reduced) {
      setLikes(7);
      setDm(true);
      return;
    }
    const timers = [
      setTimeout(() => setLikes(1), 700),
      setTimeout(() => setLikes(3), 1400),
      setTimeout(() => setLikes(7), 2000),
      setTimeout(() => setDm(true), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  return (
    <ChapterShell eyebrow="Chapter 01 · 07.05.2017">
      <div className="relative h-44 overflow-hidden rounded-2xl border border-border bg-card/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Heart className="size-10 text-rose" fill="currentColor" />
            {likes > 0 && !reduced
              ? Array.from({ length: likes }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2 text-rose"
                    style={{
                      ["--dx" as string]: `${(i - 3) * 16}px`,
                      animation: `float-up ${1400 + i * 120}ms ease-out ${i * 160}ms infinite`,
                    }}
                  >
                    <Heart className="size-4" fill="currentColor" />
                  </span>
                ))
              : null}
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.26em] text-muted-foreground">
          {likes <= 1 ? "1 like" : `${likes} likes`}
        </div>

        {dm ? (
          <div className="absolute inset-x-3 top-3 animate-rise rounded-xl border border-border bg-[oklch(0.24_0.013_45)] p-3 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <span className="grid size-8 place-items-center rounded-full bg-[image:var(--gradient-ember)]">
                <MessageCircle className="size-4 text-primary-foreground" />
              </span>
              <div className="text-start">
                <p className="text-sm text-cream">Olaa sent you a message.</p>
                <p className="text-[0.65rem] text-muted-foreground">Instagram · now</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <Beat show={b >= 1}>
        <Ar className="text-lg">
          سنة 2017… واحد بريء جدًا اسمه عبدالرحمن عمل Like… وبعدين كمان شوية Likes… بمنتهى البراءة يعني.
        </Ar>
      </Beat>

      <Beat show={b >= 2}>
        <Ar className="text-base text-muted-foreground">
          وبعد كل ده حضرتك إنتِ اللي بعتِ الرسالة. أنا مجرد ضحية algorithm. 🙂
        </Ar>
      </Beat>

      <Beat show={b >= 3}>
        <p
          dir="rtl"
          lang="ar"
          className="text-2xl text-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          وبكده بدأت المصيبة.
        </p>
      </Beat>

      <Beat show={b >= 4} className="flex flex-col gap-5">
        <LiveCounter from={dates.instagram} label="Days of Jeje & Zobrobtato" />
        <StoryButton onClick={onNext} className="self-start">
          كمّل يا لول
        </StoryButton>
      </Beat>
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — QUIZ · FIRST DATE                                               */
/* ------------------------------------------------------------------ */
export function QuizFirstDate({ onNext }: StepProps) {
  return (
    <ChapterShell eyebrow="Question 01">
      <Quiz
        question="طيب يا Luluu… أول Date كان فين؟"
        reveal="Liverpool Station ✓"
        options={[
          { label: "Liverpool Station", correct: true, response: "Liverpool Station ✓ — ذاكرة من دهب." },
          { label: "Liverpool Café", response: "Liverpool إيه وخلاص؟ 😂 قريبة… بس لأ يا أنو." },
        ]}
        onDone={onNext}
      >
        <MediaFrame item={media.firstDate} polaroidStyle tilt={2} />
      </Quiz>
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — CHAPTER 02 · MILITARY ACADEMY                                   */
/* ------------------------------------------------------------------ */
function CallAnimation() {
  const reduced = useReducedMotion();
  const [sec, setSec] = useState(300);

  useEffect(() => {
    if (reduced) {
      setSec(133);
      return;
    }
    const id = setInterval(() => setSec((s) => (s <= 133 ? 133 : s - 7)), 260);
    return () => clearInterval(id);
  }, [reduced]);

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 text-center">
      <div className="relative mx-auto grid size-14 place-items-center rounded-full bg-[image:var(--gradient-ember)]">
        <PhoneCall className="size-6 text-primary-foreground" />
        {!reduced ? (
          <span
            className="absolute inset-0 rounded-full border border-rose/50"
            style={{ animation: "pulse-ring 1.8s ease-out infinite" }}
          />
        ) : null}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Calling Luluu…</p>
      <p
        className="mt-1 text-4xl tabular-nums text-cream"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {mm}:{ss}
      </p>
      <p className="mt-2 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.24em] text-rose/70">
        <SignalLow className="size-3.5" /> weak signal
      </p>
    </div>
  );
}

function VersionSequence() {
  const b = useBeats(4, 900, 200);
  const items = [
    "Abdelrahman v1.0",
    "Abdelrahman v2.3",
    "Academy Update Installed ✓",
    "Unknown personality detected…",
  ];
  return (
    <div className="rounded-2xl border border-border bg-[oklch(0.2_0.012_40)] p-4 font-mono text-[0.78rem] text-foreground/80">
      {items.map((t, i) => (
        <Beat key={t} show={b >= i + 1} variant="fade">
          <p className={i === 3 ? "text-rose" : ""}>&gt; {t}</p>
        </Beat>
      ))}
    </div>
  );
}

export function Chapter02({ onNext }: StepProps) {
  const [stopped, setStopped] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const b = useBeats(6, 1700, 900);

  return (
    <ChapterShell eyebrow="Chapter 02 · 30.11.2018">
      <MemoryRush
        featured={media.academyFirstDay}
        featuredLabel="أول يوم كلية"
        onStop={() => setStopped(true)}
      />

      {stopped ? (
        <div className="flex flex-col gap-6">
          <Beat show={b >= 1}>
            <CallAnimation />
          </Beat>

          <Beat show={b >= 2}>
            <Ar className="text-lg">
              ساعات كانت المكالمة كلها دقيقتين… شبكة وحشة ووقت محسوب. بس صدقيني كانت أحلى دقيقتين في اليوم كله.
            </Ar>
          </Beat>

          <Beat show={b >= 3}>
            <Ar className="text-base text-muted-foreground">
              وكنتِ مستنية الإجازات النادرة… مأجّلة كل حاجة، وحاجزة أحلى لبس وأحلى خطة لما أرجع.
            </Ar>
          </Beat>

          <Beat show={b >= 4} className="flex flex-col gap-4">
            <VersionSequence />
            <Ar className="text-base text-muted-foreground">
              كل إجازة أرجع بشخصية جديدة… وإنتِ كل مرة تتعاملي مع Update من غير ما حد يسألك رأيك. 😂
            </Ar>
          </Beat>

          <Beat show={b >= 5} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card/50 p-4">
              <Ar className="text-base">
                وكان فيه ناس بتقولك: «استنيه بس يخلص كلية وهيسيبك».
              </Ar>
              {!skipped ? (
                <div className="mt-4 flex items-center gap-3">
                  <StoryButton variant="outline" onClick={() => setSkipped(true)}>
                    SKIP النصيحة
                  </StoryButton>
                  <span className="text-xs text-muted-foreground">(اضغطي… بجد)</span>
                </div>
              ) : (
                <Ar className="mt-4 animate-rise text-base text-rose">
                  Spoiler: قرار سيئ يا علا… الراجل لسه موجود لحد 2026.
                </Ar>
              )}
            </div>
          </Beat>

          <Beat show={b >= 6 && skipped} className="flex flex-col gap-5">
            <LiveCounter from={dates.academy} label="من أول يوم كلية · 30.11.2018" mode="full" />
            <StoryButton onClick={onNext} className="self-start">
              كمّل
            </StoryButton>
          </Beat>
        </div>
      ) : null}
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — QUIZ · FIRST GIFT                                               */
/* ------------------------------------------------------------------ */
export function QuizFirstGift({ onNext }: StepProps) {
  return (
    <ChapterShell eyebrow="Question 02">
      <Quiz
        question="أول هدية من Anusha كانت إيه؟"
        reveal="سلسلة ✓"
        options={[
          { label: "سلسلة", correct: true, response: "ذاكرة محترمة جدًا… لسه في أمل. ✓" },
          {
            label: "دبلة",
            response: "سلسلة يا أنو! أنا اللي المفروض أكون بنسى الحاجات دي مش إنتِ. 😂",
          },
        ]}
        onDone={onNext}
      />
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — QUIZ · FIRST HUG                                                */
/* ------------------------------------------------------------------ */
export function QuizFirstHug({ onNext }: StepProps) {
  return (
    <ChapterShell eyebrow="Question 03">
      <Quiz
        question="وأول حضن؟"
        reveal="Rowing Club ✓"
        options={[
          { label: "Rowing Club", correct: true, response: "Rowing Club. ✓" },
          { label: "على النادي التجاري", response: "لأ يا لول… قريبة بس مش هي. 😄" },
        ]}
        onDone={onNext}
      >
        <div className="pt-2">
          <p
            dir="rtl"
            lang="ar"
            className="animate-soft-fade text-xl text-cream"
            style={{ fontFamily: "var(--font-display)", animationDelay: "1600ms" }}
          >
            أكيد فاكرة قلتلك إيه ساعتها…
          </p>
        </div>
      </Quiz>
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 7 — CHAPTER 03 · OFFICIAL                                           */
/* ------------------------------------------------------------------ */
export function Chapter03({ onNext, soundOn }: StepProps) {
  const [stopped, setStopped] = useState(false);
  const b = useBeats(5, 1700, 800);

  return (
    <ChapterShell eyebrow="Chapter 03 · 10.08.2022">
      <MemoryRush featured={media.fatiha} featuredLabel="10.08.2022 · قرأنا الفاتحة" onStop={() => setStopped(true)} />

      {stopped ? (
        <div className="flex flex-col gap-6">
          <Beat show={b >= 1}>
            <Ar className="text-lg">
              بعد أكتر من ٥ سنين… أول خطوة رسمية. مش وعود على التليفون بعد كده.
            </Ar>
          </Beat>

          <Beat show={b >= 2}>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4">
              <span className="text-sm tabular-nums text-rose/80">26.09.2022</span>
              <span dir="auto" className="text-sm text-muted-foreground">
                خطوة صغيرة على الطريق. عدّيناها بهدوء.
              </span>
            </div>
          </Beat>

          <Beat show={b >= 3} className="flex flex-col gap-3">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-rose/80">12.10.2023 · Graduation</p>
            <MediaFrame item={media.graduation} aspect="16 / 10" />
          </Beat>

          <Beat show={b >= 4}>
            <Ar className="text-lg">
              بدأنا وأنا عندي 19 سنة… وشوفتي الرحلة دي كلها تقريبًا من أولها. ووصلنا للنهاية سوا.
            </Ar>
          </Beat>

          <Beat show={b >= 5} className="flex flex-col gap-5">
            <MusicEmbed title={embeds.ambient.title} url={embeds.ambient.url} soundOn={soundOn} />
            <StoryButton onClick={onNext} className="self-start">
              كمّل
            </StoryButton>
          </Beat>
        </div>
      ) : null}
    </ChapterShell>
  );
}
