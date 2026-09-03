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
  muted?: boolean;
  effect?: "bokeh";
};

export const media = {
  /** 1st date, winter, Ola in the red coat */
  firstDate: {
    label: "First date · Liverpool Station · 2017",
    caption: "Red coat. Black jacket. Two kids with absolutely no idea what's coming. ♥️",
    src: "/media/story/first-date-liverpool.jpeg",
  },
  /** 30/11/2018 — first day at the military academy */
  academyFirstDay: {
    label: "أول يوم كلية · 30.11.2018",
    src: "/media/story/academy-first-day.jpeg",
  },
  /** The five academy years — one epaulette per year, kept in her memory box */
  academyYear1: { label: "سنة أولى · الرتبة الأولى", src: null },
  academyYear2: { label: "سنة تانية", src: null },
  academyYear3: { label: "سنة تالتة", src: null },
  academyYear4: { label: "سنة رابعة", src: null },
  academyYear5: { label: "سنة خامسة · وبقيت ظابط", src: null },
  memoryBox: {
    label: "علبة الذكريات · الرُتب الخمسة",
    caption: "كل سنة رتبة… وكل رتبة في علبتك. ♥️",
    src: null,
  },
  /** 02/03/2020 — Amr Diab concert */
  amrDiabConcert: {
    label: "حفلة عمرو دياب · 02.03.2020",
    src: "/media/story/amr-diab-concert.jpeg",
  },
  /** Back injury period */
  backInjury: {
    label: "الفترة الصعبة · الظهر",
    src: "/media/story/back-injury.jpeg",
  },
  /** 10/08/2022 — قراءة الفاتحة */
  fatiha: {
    label: "قرأنا الفاتحة · 10.08.2022",
    src: "/media/story/fatiha.jpeg",
  },
  /** 26/09/2022 — engagement */
  engagement: {
    label: "الخطوبة · 26.09.2022",
    src: "/media/story/engagement.jpeg",
  },
  engagementExtra: {
    label: "من ليلة الخطوبة",
    src: "/media/story/engagement-night.jpeg",
  },
  /** 22/12/2022 — Ski Egypt */
  skiEgypt: {
    label: "Ski Egypt · 22.12.2022",
    kind: "video",
    src: "/media/story/ski-egypt.mp4",
    muted: true,
  },
  /** 12/10/2023 — graduation (photo or video) */
  graduation: {
    label: "التخرج · صور ورا بعض · 12.10.2023",
    src: "/media/story/graduation-rush-1.jpeg",
  },
  graduationPhoto: {
    label: "التخرج · صورة · 12.10.2023",
    src: "/media/story/graduation-main.jpeg",
  },
  graduationRush2: {
    label: "التخرج · لقطة تانية · 12.10.2023",
    src: "/media/story/graduation-rush-2.jpeg",
  },
  /** 20/10/2024 — Cairo, buying her furnishings */
  cairoFurnishing: {
    label: "القاهرة · التجهيزات · 20.10.2024",
    src: "/media/story/cairo-furnishing.jpeg",
  },
  /** 15/12/2024 — first time seeing the furniture */
  furniture: {
    label: "أول مرة نشوف الأثاث · 15.12.2024",
    src: "/media/story/furniture.jpeg",
  },
  /** 07/01/2025 — the empty apartment before finishing */
  emptyApartment: {
    label: "شقتنا قبل التشطيب · 07.01.2025",
    src: "/media/story/empty-apartment.jpeg",
  },
  /** HERO — the two of us holding the apartment key */
  apartmentKey: {
    label: "إحنا والمفتاح 🔑 · شقتنا",
    caption: "مكنش لسه بيت… بس المفتاح بقى في إيدينا. 🔑",
    src: "/media/story/apartment-key.jpeg",
  },
  kitchenWood: { label: "خشب المطبخ · 07.02.2025", src: "/media/story/kitchen-wood.jpeg" },
  doors: { label: "الأبواب · 12.08.2025", src: "/media/story/doors.jpeg" },
  marriageTests: { label: "تحاليل الجواز · 12.08.2025", src: "/media/story/marriage-tests.jpeg" },
  bathroomSink: { label: "حوض الحمام 😂 · 19.08.2025", src: "/media/story/bathroom-sink.jpeg" },
  /** 22/08/2025 — first wedding suit fitting */
  suitFitting: {
    label: "أول قياس لبدلة الفرح · 22.08.2025",
    src: "/media/story/suit-fitting.jpeg",
  },

  /* ---------------- WEDDING · 04.09.2025 ---------------- */
  weddingDay: {
    label: "04.09.2025",
    src: "/media/story/wedding-day.jpeg",
  },
  gettingReady: { label: "التحضير · Getting ready", src: "/media/story/getting-ready-1.jpeg" },
  gettingReady2: { label: "التحضير · Getting ready", src: "/media/story/getting-ready-2.jpeg" },
  firstLook: {
    label: "أول ظهور · First look",
    caption: "الثانية اللي وقف فيها الوقت.",
    kind: "video",
    src: "/media/story/first-look-muted.mp4",
    muted: true,
  },
  weddingLaugh: { label: "ضحك من القلب", src: "/media/story/wedding-laugh.jpeg" },
  weddingDancing: { label: "رقص · Dancing", src: "/media/story/wedding-dancing.jpeg" },
  weddingFamily: { label: "العيلة", src: "/media/story/wedding-family.jpeg" },
  weddingFriends: { label: "الأصحاب", src: "/media/story/wedding-friends.jpeg" },
  weddingDetails: { label: "تفاصيل صغيرة", src: "/media/story/wedding-details.jpeg" },
  weddingSpontaneous: { label: "لقطة عفوية", src: "/media/story/wedding-spontaneous.jpeg" },
  weddingCouple: { label: "إحنا · Couple photo", src: null },
  weddingVideo1: { label: "فيديو من الفرح · 1", kind: "video", src: null, poster: null },
  weddingVideo2: { label: "فيديو من الفرح · 2", kind: "video", src: null, poster: null },
  /** User-owned wedding slow-dance clip (the lift / spin) */
  slowDance: {
    label: "Slow dance · the lift & spin · 04.09.2025",
    caption: "Slow dance · the lift & spin · 04.09.2025",
    kind: "video",
    src: "/media/story/slow-dance-bokeh.mp4",
    poster: null,
    muted: true,
    effect: "bokeh",
  },
  weddingFinal: {
    label: "أقوى صورة من الفرح",
    caption: "دي الصورة اللي بتلخص اليوم كله.",
    src: "/media/story/wedding-final.jpeg",
  },
} satisfies Record<string, MediaItem>;

/**
 * MEMORY RUSH POOL — add as many random photos as you like.
 * The rush animation cycles through these; empty entries show
 * labelled placeholder tiles instead.
 */
export const memoryRush: MediaItem[] = [
  { label: "أول Date", src: "/media/story/first-date-liverpool.jpeg" },
  { label: "كلية", src: "/media/story/academy-first-day.jpeg" },
  { label: "حفلة عمرو دياب", src: "/media/story/amr-diab-concert.jpeg" },
  { label: "فاتحة", src: "/media/story/fatiha.jpeg" },
  { label: "خطوبة", src: "/media/story/engagement.jpeg" },
  { label: "ليلة الخطوبة", src: "/media/story/engagement-night.jpeg" },
  { label: "تخرج", src: "/media/story/graduation-main.jpeg" },
  { label: "تجهيزات", src: "/media/story/cairo-furnishing.jpeg" },
  { label: "بيتنا", src: "/media/story/apartment-key.jpeg" },
  { label: "بدلة الفرح", src: "/media/story/suit-fitting.jpeg" },
  { label: "الفترة الصعبة", src: "/media/story/back-injury.jpeg" },
  { label: "الفرح", src: "/media/story/wedding-day.jpeg" },
];

/** Second pool used inside the wedding chapter rushes */
export const weddingRush: MediaItem[] = [
  { label: "التحضير", src: "/media/story/getting-ready-1.jpeg" },
  { label: "التحضير", src: "/media/story/getting-ready-2.jpeg" },
  { label: "أول ظهور", kind: "video", src: "/media/story/first-look-muted.mp4", muted: true },
  { label: "الضحك", src: "/media/story/wedding-laugh.jpeg" },
  { label: "الرقص", src: "/media/story/wedding-dancing.jpeg" },
  { label: "العيلة", src: "/media/story/wedding-family.jpeg" },
  { label: "الأصحاب", src: "/media/story/wedding-friends.jpeg" },
  { label: "تفاصيل", src: "/media/story/wedding-details.jpeg" },
  { label: "لقطة عفوية", src: "/media/story/wedding-spontaneous.jpeg" },
  { label: "إحنا", src: "/media/story/wedding-final.jpeg" },
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
  /** 10.08.2022 — الفاتحة */
  habbetha: {
    title: "حبتها يا ناس — تامر حسني",
    url: "/audio/fatiha-habetha.mp3",
  },
  /** 26.09.2022 — الخطوبة */
  shayfaFeek: {
    title: "شايفة فيك — أصالة",
    url: "/audio/engagement-shayfa-feek.mp3",
  },
  /** 12.10.2023 — التخرج */
  ellyBeenaHayah: {
    title: "اللي بينا حياة — عمرو دياب",
    url: "/audio/graduation-elly-beena-hayah.mp3",
  },
  /** Chapter · building a home */
  jannaTekfina: {
    title: "جنة تكفينا — محمود العسيلي",
    url: "/audio/home-janna-tekfina.mp3",
  },
  /** Wedding — slow dance */
  habibtiMalak: {
    title: "حبيبتي ملاك — عمرو دياب",
    url: "/audio/wedding-habibti-malak.mp3",
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
  who: "Luluu × Ano",
  when: "04.09.2026 · 06:00 PM",
  place: "Caviar Lounge",
  note: "No problems. No waiting. Just us.",
  dressCode: "تعالي حلوة… يعني تعالي زي ما إنتِ.",
  cta: "I'm coming 🍣",
  ctaResponse: "Waiting for you 😉😉",
};
