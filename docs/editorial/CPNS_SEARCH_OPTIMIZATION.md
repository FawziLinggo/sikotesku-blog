# Optimasi Pencarian Cluster CPNS

## Goal

Membuat informasi CPNS Sikotesku mudah ditemukan manusia, mudah dijadikan
jawaban langsung, dan mudah dikutip agent AI tanpa membuat halaman tipis atau
mengklaim aturan seleksi yang belum diterbitkan pemerintah.

Scope perubahan hanya `E:\sikotesku-blog`. Repo aplikasi Sikotesku digunakan
secara read-only; halaman production menjadi sumber status publik utama.

## Fakta Production yang Dipakai

- `https://sikotesku.com/cpns` merespons HTTP 200 dan menandai CPNS aktif.
- Dashboard CPNS tersedia pada `/cpns/dashboard`.
- Jalur publik mencakup diagnostic, latihan per bagian, Tes Cepat, Tes
  Intensif, Full SKD, Pass, credit, hasil/riwayat/ranking, dan Room.
- Pembaruan `Latihan CPNS kini lebih fleksibel` diterbitkan pada 30 Agustus
  2026 di `/updates`.
- Harga, benefit, jumlah/durasi tes, dan ketersediaan tetap mengikuti katalog,
  dashboard, atau checkout live.

Verifikasi dilakukan pada 31 Agustus 2026.

## Implementasi SEO

- Tambah kategori dan hub kanonis `/topik/cpns/`.
- Kelompokkan 10 artikel CPNS dalam satu cluster yang saling terhubung.
- Perbarui title, description, tanggal perubahan, category, tag, CTA, dan
  internal link artikel prelaunch.
- Tambahkan metadata Open Graph `article:section` dan `article:tag`.

## Implementasi AEO

- Pertahankan jawaban singkat terlihat pada awal setiap artikel.
- Tambahkan FAQ terlihat pada artikel CPNS dan schema `FAQPage` yang memakai
  copy yang sama dengan halaman.
- Gunakan heading berbentuk pertanyaan dan tabel perbandingan hanya ketika
  membantu keputusan pembaca.

## Implementasi GEO

- Tambahkan bagian `Sumber dan verifikasi` yang terlihat.
- Tambahkan `citation` pada schema `BlogPosting` dari sumber publik yang sama.
- Hubungkan entity topik CPNS dengan halaman produk production melalui
  `sameAs` tanpa menganggap blog sebagai sumber harga atau aturan resmi.

## Implementasi AIO

- Tambahkan direktori CPNS eksplisit di `llms.txt`.
- Pastikan seluruh artikel CPNS ikut `llms-full.txt`, sitemap, RSS, dan indeks
  Pagefind melalui pipeline static existing.
- Pertahankan Content Signals `search=yes, ai-input=yes, ai-train=no,
  use=reference` serta canonical per halaman.

## Guardrail

- Tidak memuat soal asli, jawaban, pembahasan privat, nama peserta, ranking
  live, kode Room, atau data akun.
- Tidak menjanjikan kelulusan atau menyebut hasil latihan sebagai skor resmi.
- Tidak mengunci harga, promo, jumlah soal, durasi, atau aturan siklus baru pada
  artikel ketika sumber authoritative bersifat dinamis.
- Jangan menambah Worker runtime, database, API, auth, atau JavaScript baru.

## Evaluasi Setelah Publikasi

1. Pantau index coverage dan query cluster CPNS di Search Console.
2. Pantau halaman CPNS yang diminta crawler melalui AI Crawl Control.
3. Periksa CTR, query baru, backlink, dan referral agent/search setelah 4-8
   minggu.
4. Perbarui konten hanya dari perubahan produk publik atau sumber pemerintah
   yang terverifikasi.

## Status Implementasi

Selesai secara lokal pada 31 Agustus 2026:

- 10 artikel CPNS aktif dalam satu cluster; 5 artikel lama diperbarui dan 5
  artikel baru ditambahkan.
- Seluruh route produk yang dipakai CTA merespons HTTP 200 saat diverifikasi.
- QA source-only lulus untuk metadata unik, 260 internal link, FAQ, sumber,
  batas panjang konten, klaim prelaunch, PII, dan credential.
- Build, test, lint, commit, push, dan deployment belum dilakukan sesuai batas
  kerja repo dan menunggu instruksi user.
