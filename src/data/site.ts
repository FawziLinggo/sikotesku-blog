export const SITE = {
  name: "Panduan Sikotesku",
  brand: "Sikotesku",
  url: "https://blog.sikotesku.com",
  mainUrl: "https://sikotesku.com",
  title: "Panduan Psikotes Kerja dan Karier | Sikotesku",
  description:
    "Panduan psikotes kerja, latihan Kraepelin, Matematika Dasar, TIU / CFIT, ketelitian, CV, dan interview untuk fresh graduate.",
  locale: "id_ID",
  author: "Tim Sikotesku",
  authorUrl: "https://blog.sikotesku.com/penulis/tim-sikotesku/",
  founder: "Fawzi Linggo",
  practiceUrl: "https://sikotesku.com/free-practice/kraepelin",
} as const;

export const TOPICS = [
  {
    slug: "psikotes-kerja",
    label: "Psikotes Kerja",
    shortLabel: "Psikotes",
    description: "Mulai dari fondasi, jadwal latihan, dan strategi menghadapi seleksi kerja.",
    accent: "teal",
    symbol: "01",
  },
  {
    slug: "kraepelin",
    label: "Kraepelin",
    shortLabel: "Kraepelin",
    description: "Latih ritme, konsistensi, dan akurasi tanpa mengejar pola jawaban instan.",
    accent: "teal",
    symbol: "K",
  },
  {
    slug: "matematika-dasar",
    label: "Matematika Dasar",
    shortLabel: "Matdas",
    description: "Perkuat operasi hitung dan cara memilih langkah yang lebih efisien.",
    accent: "orange",
    symbol: "+",
  },
  {
    slug: "tiu-cfit",
    label: "TIU / CFIT",
    shortLabel: "TIU / CFIT",
    description: "Kenali pola penalaran dan biasakan membaca hubungan secara terstruktur.",
    accent: "violet",
    symbol: "T",
  },
  {
    slug: "ketelitian",
    label: "Ketelitian",
    shortLabel: "Ketelitian",
    description: "Bangun kebiasaan memeriksa detail tanpa kehilangan kecepatan kerja.",
    accent: "sky",
    symbol: "OK",
  },
  {
    slug: "karier",
    label: "CV & Interview",
    shortLabel: "Karier",
    description: "Siapkan cerita pengalaman, CV, dan jawaban interview yang lebih terarah.",
    accent: "amber",
    symbol: ">",
  },
] as const;

export type TopicSlug = (typeof TOPICS)[number]["slug"];

export function getTopic(slug: string) {
  return TOPICS.find((topic) => topic.slug === slug);
}
