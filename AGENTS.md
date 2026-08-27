# AGENTS.md

## Project

Repo ini adalah blog static publik Sikotesku. Tujuannya membantu pencari kerja
menemukan panduan psikotes dan karier yang praktis, sekaligus memperkuat
discoverability `sikotesku.com` di mesin pencari dan layanan AI.

## Architecture

- Astro dengan output static.
- Konten disimpan sebagai Markdown di `src/content/blog/`.
- Deployment memakai Cloudflare Workers Static Assets.
- Tidak memakai database, auth, API runtime, SSR, Pages Functions, atau Worker
  request handler.
- Branch production tunggal adalah `main`; deployment production harus berasal
  dari integrasi Git Cloudflare, bukan deploy manual dari laptop.

## Design

- Mobile-first: selesaikan pengalaman layar kecil sebelum tablet dan desktop.
- Pertahankan bahasa visual Sikotesku: Plus Jakarta Sans, navy `#07111f`, teal
  `#12d6c5`, surface `#f6f8fb`, radius besar, border ringan, dan card compact.
- Gunakan white space secukupnya, typography ringkas, serta touch target minimal
  44px.
- Jangan menambahkan framework UI atau client JavaScript jika HTML dan CSS cukup.
- Hormati `prefers-reduced-motion`.
- Untuk pembuatan atau pengeditan raster image, gunakan skill `9router-image`
  dengan model default `cx/gpt-5.5-image`. Jangan gunakan image generator bawaan
  kecuali user meminta eksplisit.

## Content And SEO

- Tulis untuk manusia terlebih dahulu; jangan membuat artikel tipis massal.
- Setiap artikel harus punya judul, description, category, tanggal, author,
  reading time, dan CTA yang relevan.
- Gunakan contoh sintetis. Jangan memuat data pengguna, CV, jawaban, hasil tes,
  prompt, token, credential, atau identifier internal.
- Jangan menerbitkan bocoran soal, materi berhak cipta, diagnosis psikologis,
  janji kelulusan, atau klaim produk yang belum tersedia.
- Jaga canonical, sitemap, RSS, structured data, `robots.txt`, dan `llms.txt`.
- Jangan membuat halaman tag tipis atau URL duplikat.

## Cloudflare

- `wrangler.jsonc` harus tetap asset-only: jangan menambahkan `main` atau
  `assets.run_worker_first` tanpa keputusan arsitektur eksplisit.
- Gunakan `not_found_handling: "404-page"` agar URL tidak valid mengembalikan
  HTTP 404.
- Jangan menyimpan secret di repo.

## Testing And Git

- User menjalankan test, build, dan lint. Jangan menjalankannya tanpa izin
  eksplisit.
- Jangan commit atau push kecuali user meminta eksplisit.
- Perubahan konten publik harus diperiksa agar tidak mengandung informasi
  internal atau klaim yang tidak dapat dipertanggungjawabkan.
