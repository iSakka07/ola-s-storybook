/**
 * ============================================================
 *  STORY CONFIG — edit everything personal from this one file
 * ============================================================
 *
 * HOW TO ADD YOUR OWN PHOTOS / VIDEOS
 * 1. Put the file in `src/assets/` (e.g. src/assets/first-date.jpg)
 * 2. Import it at the top of this file:
 *       import firstDate from "@/assets/first-date.jpg";
 * 3. Set it as the `src` of the matching entry below:
 *       firstDate: { ...  src: firstDate }
 *    (Or use a full https URL string — both work.)
 *
 * Any entry left with `src: null` renders an elegant labelled
 * placeholder frame, so the site always works.
 */

export type MediaItem = {
  /** Visible label on the placeholder frame */
  label: string;
  /** Optional caption shown under the frame */
  caption?: string;
  /** Image/video source. null => placeholder frame */
  src?: string | null;
  /** Poster image for videos (fallback frame) */
  poster?: string | null;
  kind?: "photo" | "video";
};

export const media = {
  /** 1st date, winter, Ola in the red coat */
  firstDate: {
    label: "First date · Liverpool Station · 2017",
    caption: "Red coat. Two kids with absolutely no idea what's coming.",
    src: null,
  },
  /** 30/11/2018 — first day at the military academy */
  academyFirstDay: {
    label: "أول يوم كلية · 30.11.2018",
    src: null,
  },
  /** Back injury period */
  backInjury: {
    label: "الفترة الصعبة · الظهر",
    src: null,
  },
  /** 10/08/2022 — قراءة الفاتحة */
  fatiha: {
    label: "قرأنا الفاتحة · 10.08.2022",
    src: null,
  },
  /** 26/09/2022 — smaller milestone */
  engagementSmall: {
    label: "26.09.2022",
    src: null,
  },
  /** 12/10/2023 — graduation (photo or video) */
  graduation: {
    label: "التخرج · 12.10.2023",
    kind: "video",
    src: null,
    poster: null,
  },
  /** 20/10/2024 — Cairo, buying her furnishings */
  cairoFurnishing: {
    label: "القاهرة · المفروشات · 20.10.2024",
    src: null,
  },
  /** 15/12/2024 — first time seeing the furniture */
  furniture: {
    label: "أول مرة نشوف العفش · 15.12.2024",
    src: null,
  },
  /** 07/01/2025 — the empty apartment before finishing */
  emptyApartment: {
    label: "البيت قبل التشطيب · 07.01.2025",
    src: null,
  },
  /** 22/08/2025 — first wedding suit fitting */
  suitFitting: {
    label: "أول قياس لبدلة الفرح · 22.08.2025",
    src: null,
  },
  /** 04/09/2025 — the wedding day */
  weddingDay: {
    label: "04.09.2025",
    src: null,
  },
  /** User-owned wedding slow-dance clip (the lift / spin) */
  slowDance: {
    label: "Slow dance · the lift & spin · 04.09.2025",
    caption: "Your own clip — drop the file in src/assets and set `slowDance.src`.",
    kind: "video",
    src: null,
    poster: null,
  },
} satisfies Record<string, MediaItem>;

/**
 * MEMORY RUSH POOL — add as many random photos as you like.
 * The rush animation cycles through these; empty entries show
 * labelled placeholder tiles instead.
 */
export const memoryRush: MediaItem[] = [
  { label: "إجازة", src: null },
  { label: "كلية", src: null },
  { label: "مكالمة", src: null },
  { label: "خروجة", src: null },
  { label: "عيد ميلاد", src: null },
  { label: "رمضان", src: null },
  { label: "الكافيه بتاعنا", src: null },
  { label: "صورة عشوائية", src: null },
  { label: "سيلفي", src: null },
  { label: "البحر", src: null },
  { label: "تخرج", src: null },
  { label: "بيتنا", src: null },
];

/**
 * LEGAL AUDIO EMBEDS — no copyrighted files are bundled.
 * Paste a Spotify *embed* URL (https://open.spotify.com/embed/track/...)
 * or a YouTube embed URL (https://www.youtube.com/embed/VIDEO_ID).
 * Leave null to show a tasteful placeholder instead.
 */
export const embeds = {
  /** Ambient track for the whole experience (optional) */
  ambient: {
    title: "Soundtrack (optional)",
    url: null as string | null,
  },
  /** Chapter 04 */
  jannaTekfina: {
    title: "جنة تكفينا — محمود العسيلي",
    url: null as string | null,
  },
  /** Chapter 05 — slow dance */
  habibtiMalak: {
    title: "حبيبتي ملاك — عمرو دياب",
    url: null as string | null,
  },
};

/** Dates the live counters are computed from (real time, at runtime) */
export const dates = {
  instagram: "2017-05-07T00:00:00",
  academy: "2018-11-30T00:00:00",
  wedding: "2025-09-04T00:00:00",
  dinner: "2026-09-04T18:00:00",
};

export const dinner = {
  title: "DINNER FOR TWO",
  who: "Luluu × Anusha",
  when: "04.09.2026 · 06:00 PM",
  place: "Caviar Lounge",
  note: "No quizzes. No waiting. Just us.",
  dressCode: "تعالي حلوة… يعني تعالي زي ما إنتِ.",
  cta: "I'm coming 🍣",
  ctaResponse: "ماكنش عندك اختيار أصلًا يا لول. 😂❤️",
};
