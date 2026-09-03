import { useEffect, useState } from "react";
import { CalendarDays, Sparkles } from "lucide-react";
import { dinner, embeds, media } from "@/lib/story-config";
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
import { MemoryRush } from "./MemoryRush";
import { Quiz } from "./Quiz";

type StepProps = { onNext: () => void; soundOn: boolean };

/* ------------------------------------------------------------------ */
/* 8 — CHAPTER 04 · BUILDING A HOME                                    */
/* ------------------------------------------------------------------ */
export function Chapter04({ onNext, soundOn }: StepProps) {
  const b = useBeats(6, 1300, 400);
  const rows = [
    { date: "20.10.2024", text: "القاهرة… نجيب مفروشاتك.", item: media.cairoFurnishing },
    { date: "15.12.2024", text: "أول مرة نشوف العفش.", item: media.furniture },
  ];

  return (
    <ChapterShell eyebrow="Chapter 04 · Building a home">
      <Beat show={b >= 1}>
        <h2 className="text-3xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
          A home, one date at a time
        </h2>
      </Beat>

      {rows.map((r, i) => (
        <Beat key={r.date} show={b >= i + 2}>
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center pt-1">
              <span className="grid size-8 place-items-center rounded-full border border-rose/40 bg-card/60">
                <CalendarDays className="size-3.5 text-rose" />
              </span>
              <span className="mt-1 h-16 w-px bg-border" />
            </div>
            <div className="flex-1">
              <p className="text-sm tabular-nums text-rose/80">{r.date}</p>
              <Ar className="mt-1 text-base">{r.text}</Ar>
              <div className="mt-3 max-w-[16rem]">
                <MediaFrame item={r.item} aspect="4 / 3" />
              </div>
            </div>
          </div>
        </Beat>
      ))}

      <Beat show={b >= 4} className="flex flex-col gap-3">
        <p className="text-sm tabular-nums text-rose/80">07.01.2025</p>
        <Ar className="text-base">أول مرة نشوف شقتنا قبل التشطيب.</Ar>
        <MediaFrame item={media.emptyApartment} aspect="4 / 3" />
      </Beat>

      <Beat show={b >= 5}>
        <Ar className="text-lg">
          مكنش لسه بيت. كان شوية حيطان وأرض فاضية… بس إحنا كنا شايفينه بيتنا من ساعتها.
        </Ar>
      </Beat>

      <Beat show={b >= 6} className="flex flex-col gap-5">
        <MusicEmbed title={embeds.jannaTekfina.title} url={embeds.jannaTekfina.url} soundOn={soundOn} />
        <StoryButton onClick={onNext} className="self-start">
          كمّل
        </StoryButton>
      </Beat>
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 9 — MEMORY RUSH #3 · HARD TIMES                                     */
/* ------------------------------------------------------------------ */
export function HardTimes({ onNext }: StepProps) {
  const [stopped, setStopped] = useState(false);
  const b = useBeats(4, 2000, 900);

  return (
    <ChapterShell eyebrow="Between the good days">
      <MemoryRush featured={media.backInjury} onStop={() => setStopped(true)} duration={2600} />

      {stopped ? (
        <div className="flex flex-col gap-6">
          <Beat show={b >= 1}>
            <Ar className="text-base text-muted-foreground">
              كان فيه أيام الموضوع مكانش سهل. كلية… مشاكل… خطوبة… تجهيز… شغل… وحتى لما أنا نفسي وقعت ومقدرتش أقف…
            </Ar>
          </Beat>

          <Beat show={b >= 2}>
            <p
              dir="rtl"
              lang="ar"
              className="text-3xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              إنتِ وقفتي.
            </p>
          </Beat>

          <Beat show={b >= 3}>
            <Ar className="text-base">ودي من الحاجات اللي Anusha عمره ما هينساها.</Ar>
          </Beat>

          <Beat show={b >= 4}>
            <StoryButton variant="outline" onClick={onNext} className="self-start">
              كمّل
            </StoryButton>
          </Beat>
        </div>
      ) : null}
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — 22.08.2025 · SUIT FITTING                                      */
/* ------------------------------------------------------------------ */
export function SuitFitting({ onNext }: StepProps) {
  const b = useBeats(4, 1400, 400);
  return (
    <ChapterShell eyebrow="22.08.2025">
      <Beat show={b >= 1}>
        <MediaFrame item={media.suitFitting} polaroidStyle tilt={-2} />
      </Beat>
      <Beat show={b >= 2}>
        <Ar className="text-lg">أول مرة قست بدلة الفرح.</Ar>
      </Beat>
      <Beat show={b >= 3}>
        <Ar className="text-xl text-cream">At this point… مفيش رجوع يا Luluu. 😂</Ar>
      </Beat>
      <Beat show={b >= 4}>
        <StoryButton onClick={onNext} className="self-start">
          كمّل
        </StoryButton>
      </Beat>
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 11 — CHAPTER 05 · THE DAY                                           */
/* ------------------------------------------------------------------ */
export function Chapter05({ onNext, soundOn }: StepProps) {
  const [stopped, setStopped] = useState(false);
  const q = useBeats(6, 900, 600);
  const [dark, setDark] = useState(false);
  const reduced = useReducedMotion();
  const after = useBeats(5, 1600, reduced ? 0 : 1200);

  useEffect(() => {
    if (!stopped) return;
    const t = setTimeout(() => setDark(true), reduced ? 0 : 6600);
    return () => clearTimeout(t);
  }, [stopped, reduced]);

  const whens = [
    "سنين وإحنا بنقول: إمتى؟",
    "إمتى هخلص كلية؟",
    "إمتى نتخطب؟",
    "إمتى نجهز؟",
    "إمتى المشاكل تخلص؟",
    "إمتى يبقى لينا مكان واحد؟",
  ];

  return (
    <ChapterShell eyebrow="Chapter 05 · 04.09.2025">
      <MemoryRush
        featured={media.weddingDay}
        featuredLabel="04.09.2025"
        duration={3800}
        onStop={() => setStopped(true)}
      />

      {stopped && !dark ? (
        <div className="flex flex-col gap-2">
          {whens.map((t, i) => (
            <Beat key={t} show={q >= i + 1} variant="fade">
              <p
                dir="rtl"
                lang="ar"
                className={i === 0 ? "text-lg text-cream" : "text-base text-muted-foreground"}
              >
                {t}
              </p>
            </Beat>
          ))}
        </div>
      ) : null}

      {dark ? (
        <div className="flex flex-col gap-7">
          <Beat show={after >= 1} variant="blur" className="rounded-2xl bg-[oklch(0.12_0.008_40)] px-6 py-10 text-center">
            <p className="text-4xl tracking-[0.1em] text-cream" style={{ fontFamily: "var(--font-display)" }}>
              04.09.2025
            </p>
          </Beat>

          <Beat show={after >= 2}>
            <p
              dir="rtl"
              lang="ar"
              className="text-center text-2xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              وأخيرًا… مبقاش فيه إمتى.
            </p>
          </Beat>

          <Beat show={after >= 3}>
            <Ar className="text-center text-lg">بقينا في بيت واحد.</Ar>
          </Beat>

          <Beat show={after >= 4} className="flex flex-col gap-4">
            <MediaFrame item={media.slowDance} aspect="16 / 10" />
            <MusicEmbed title={embeds.habibtiMalak.title} url={embeds.habibtiMalak.url} soundOn={soundOn} />
          </Beat>

          <Beat show={after >= 5} className="flex flex-col gap-4">
            <Ar className="text-base text-muted-foreground">والأغرب إن ده كان عيد ميلادك…</Ar>
            <Ar className="text-xl text-cream">بس تقريبًا أنا اللي أخدت الهدية.</Ar>
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
/* 12 — FINAL QUIZ                                                     */
/* ------------------------------------------------------------------ */
export function FinalQuiz({ onNext }: StepProps) {
  return (
    <ChapterShell eyebrow="Last question">
      <Quiz
        question="بعد كل ده، لو رجع بيكي الزمن لـ2017…"
        options={[
          { label: "هدخل أكلمه تاني ❤️", response: "Wrong answer. أنا اللي هدخل أكلمك المرة دي. ❤️" },
          {
            label: "هعمله Block من أول Like",
            response: "قرار منطقي جدًا بصراحة. بس unfortunately الـtimeline اترسم خلاص. 😂",
          },
        ]}
        onDone={onNext}
      />
    </ChapterShell>
  );
}

/* ------------------------------------------------------------------ */
/* 13 — THE LETTER                                                     */
/* ------------------------------------------------------------------ */
const letter = [
  "علا… أنا عارف إني مش بقول الكلام ده كتير، وعلاقتنا من الأصل مكانتش رومانسية بالشكل التقليدي. إحنا قبل أي حاجة أصحاب، وده أحلى حاجة فيها.",
  "بحبك جدًا. وعارف إن شغلي بيأخد وقت المفروض يكون وقتك، وعارف إنك كتير بتستني اليومين اللي برجع فيهم، وبتأجّلي حاجاتك، وبتعملي كل حاجة عشان أرجع مبسوط.",
  "يمكن مش بقول ده بصوت عالي كفاية… بس أنا شايف كل حاجة، وحاسس بيها، ومقدّرها.",
  "من استنّي مكالمة دقيقتين وأنا في الكلية… لحد استنّي أرجع من الشغل. إنتِ دايمًا بتستنيني.",
  "وقفتي جانبي وأنا لسه في أول الطريق، وفي أصعب فترات عدّت عليّا، وحتى لما وقعت وظهري تعب.",
  "وأنا عارف إني ساعات بكون قاسي شوية، والشغل بياخدني أكتر مما أنا عايز… بس بعمل كل اللي أقدر عليه عشان تكوني مبسوطة، وعشان نبني حياة أحسن لينا.",
  "وأنا مش بحبك عشان وقفتي جانبي بس… أنا بحبك لأنك بجد تستحقي إنك تتحبي.",
  "إنتِ أعز صاحبة، وعيلتي، ومراتي، والشخص اللي عندي في الدنيا. وفي عيني إنتِ أحلى وأجدع بنت.",
  "Happy Birthday، اللول بتاعي.",
  "Happy First Anniversary, Luluu. وكل سنة وإحنا Jeje & Zobrobtato.",
];

export function Letter({ onNext }: StepProps) {
  const b = useBeats(letter.length + 1, 2600, 700);
  return (
    <section className="relative mx-auto flex min-h-[100svh] w-full max-w-xl flex-col justify-center gap-7 px-6 py-24">
      <p className="text-[0.62rem] uppercase tracking-[0.34em] text-rose/80">A letter · no quizzes</p>
      {letter.map((p, i) => (
        <Beat key={i} show={b >= i + 1} variant="fade">
          <p
            dir="rtl"
            lang="ar"
            className={
              i >= letter.length - 2
                ? "text-2xl leading-[1.7] text-cream"
                : "text-[1.05rem] leading-[2] text-foreground/90"
            }
            style={i >= letter.length - 2 ? { fontFamily: "var(--font-display)" } : undefined}
          >
            {p}
          </p>
        </Beat>
      ))}
      <Beat show={b >= letter.length + 1}>
        <StoryButton variant="outline" onClick={onNext} className="self-start">
          استني… فيه حاجة كمان
        </StoryButton>
      </Beat>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 14 — FINAL TWIST + DINNER INVITATION                                */
/* ------------------------------------------------------------------ */
function Confetti() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="absolute top-0 h-2 w-1 rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            background: i % 3 === 0 ? "var(--rose)" : i % 3 === 1 ? "var(--gold)" : "var(--cream)",
            ["--dx" as string]: `${((i % 5) - 2) * 30}px`,
            animation: `confetti-fall ${3200 + (i % 6) * 400}ms linear ${i * 110}ms both`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

export function FinalTwist() {
  const b = useBeats(6, 1900, 600);
  const [accepted, setAccepted] = useState(false);

  const waits = ["مكالمات…", "إجازات…", "تخرج…", "جواز…", "وحتى دلوقتي بتستنيني أرجع من الشغل."];

  return (
    <ChapterShell eyebrow="One last thing">
      <Beat show={b >= 1}>
        <Ar className="text-xl text-cream">بس فيه مشكلة صغيرة…</Ar>
      </Beat>

      <Beat show={b >= 2}>
        <Ar className="text-base text-muted-foreground">من 2018 وإنتِ تقريبًا بتستنيني.</Ar>
      </Beat>

      <Beat show={b >= 3} className="flex flex-col gap-2 rounded-2xl border border-border bg-card/40 p-4">
        {waits.map((w, i) => (
          <p
            key={w}
            dir="rtl"
            lang="ar"
            className="animate-soft-fade text-sm text-foreground/80"
            style={{ animationDelay: `${i * 420}ms` }}
          >
            {w}
          </p>
        ))}
      </Beat>

      <Beat show={b >= 4} variant="blur" className="rounded-2xl bg-[oklch(0.12_0.008_40)] px-6 py-12 text-center">
        <p
          dir="rtl"
          lang="ar"
          className="text-[1.9rem] leading-snug text-cream sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          النهارده بقى دوري أنا أستناكي.
        </p>
      </Beat>

      <Beat show={b >= 5} variant="blur">
        <div className="relative overflow-hidden rounded-3xl border border-rose/30 bg-[image:linear-gradient(160deg,oklch(0.24_0.02_35),oklch(0.17_0.012_40))] p-7 text-center shadow-[var(--shadow-soft)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(100deg, transparent 30%, oklch(0.9 0.05 85 / 0.16) 50%, transparent 70%)",
              backgroundSize: "220% 100%",
              animation: "shimmer 5s linear infinite",
            }}
          />
          <Sparkles className="mx-auto size-4 text-gold" />
          <p className="mt-4 text-[0.62rem] uppercase tracking-[0.38em] text-rose/80">{dinner.title}</p>
          <p className="mt-3 text-3xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
            {dinner.who}
          </p>
          <div className="mx-auto my-5 h-px w-16 bg-border" />
          <p className="text-sm tracking-[0.14em] text-foreground/90">{dinner.when}</p>
          <p className="mt-1 text-lg text-cream" style={{ fontFamily: "var(--font-display)" }}>
            {dinner.place}
          </p>
          <p className="mt-5 text-sm italic text-muted-foreground">{dinner.note}</p>
          <p dir="auto" className="mt-4 text-xs text-foreground/70">
            Dress Code: {dinner.dressCode}
          </p>

          <div className="mt-7">
            {!accepted ? (
              <StoryButton onClick={() => setAccepted(true)} className="w-full">
                {dinner.cta}
              </StoryButton>
            ) : (
              <Ar className="animate-rise text-base text-rose">{dinner.ctaResponse}</Ar>
            )}
          </div>
        </div>
      </Beat>

      {accepted ? <Confetti /> : null}

      <Beat show={b >= 6 && accepted} variant="fade" className="pt-6 text-center">
        <p className="text-sm tabular-nums text-muted-foreground">04.09.2025 — We made it.</p>
        <p className="mt-2 text-2xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
          04.09.2026 — Still us.
        </p>
      </Beat>
    </ChapterShell>
  );
}
