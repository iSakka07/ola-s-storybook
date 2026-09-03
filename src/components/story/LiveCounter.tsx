import { useEffect, useState } from "react";

function diff(from: Date, now: Date) {
  const ms = Math.max(0, now.getTime() - from.getTime());
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  let years = now.getFullYear() - from.getFullYear();
  let months = now.getMonth() - from.getMonth();
  let dayPart = now.getDate() - from.getDate();
  if (dayPart < 0) {
    months -= 1;
    const prev = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    dayPart += prev;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return {
    days,
    years,
    months,
    dayPart,
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function Cell({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex min-w-[4.2rem] flex-col items-center rounded-xl border border-border bg-card/60 px-3 py-3">
      <span
        className="text-2xl tabular-nums text-cream"
        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
      >
        {value}
      </span>
      <span className="mt-1 text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
    </div>
  );
}

/** Live counter computed from a real date at runtime */
export function LiveCounter({
  from,
  label,
  mode = "days",
}: {
  from: string;
  label: string;
  mode?: "days" | "full";
}) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const d = now ? diff(new Date(from), now) : null;

  return (
    <div className="rounded-2xl border border-border bg-card/40 p-4 text-center">
      <p dir="auto" className="text-[0.62rem] uppercase tracking-[0.26em] text-rose/80">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {mode === "days" ? (
          <>
            <Cell value={d ? d.days.toLocaleString("en-US") : "—"} label="days" />
            <Cell value={d ? d.hours : "—"} label="hours" />
            <Cell value={d ? d.minutes : "—"} label="min" />
            <Cell value={d ? String(d.seconds).padStart(2, "0") : "—"} label="sec" />
          </>
        ) : (
          <>
            <Cell value={d ? d.years : "—"} label="years" />
            <Cell value={d ? d.months : "—"} label="months" />
            <Cell value={d ? d.dayPart : "—"} label="days" />
            <Cell value={d ? `${d.hours}:${String(d.minutes).padStart(2, "0")}` : "—"} label="h : m" />
          </>
        )}
      </div>
    </div>
  );
}
