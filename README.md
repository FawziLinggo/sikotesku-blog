# Sikotesku Blog

Blog static Sikotesku untuk panduan psikotes kerja dan persiapan karier.

## Stack

- Astro static site generator
- Markdown content collections
- Cloudflare Workers Static Assets
- Cloudflare Workers Builds untuk deployment dari Git

Tidak ada database, auth, API runtime, SSR, atau Worker request handler. Request
halaman dan asset dilayani langsung sebagai static assets dari jaringan
Cloudflare.

## Local Development

Persyaratan: Node.js `>=22.19.0` dan npm `>=9.6.5`. File `.nvmrc`
memakai Node.js `22.23.2`, versi Node 22 yang tersedia langsung pada build image
Cloudflare Workers Builds.

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

## Menambah Artikel

Tambahkan file Markdown baru di `src/content/blog/`.

```yaml
---
title: "Judul artikel"
description: "Ringkasan unik untuk hasil pencarian."
publishDate: 2026-08-28
category: psikotes-kerja
tags:
  - psikotes kerja
author: Tim Sikotesku
readingMinutes: 7
featured: false
draft: false
cta:
  label: Mulai latihan gratis
  href: https://sikotesku.com/free-practice/kraepelin
  description: Pilih latihan yang paling sesuai dengan kebutuhanmu.
---
```

Category yang tersedia didefinisikan di `src/content.config.ts` dan metadata
topiknya berada di `src/data/site.ts`.

## Cloudflare Deployment

1. Buka **Workers & Pages** di dashboard Cloudflare.
2. Pilih **Create application** lalu **Import a repository**.
3. Hubungkan repo GitHub `FawziLinggo/sikotesku-blog`.
4. Gunakan branch production `main`.
5. Build command: `npm run build`.
6. Deploy command: `npm run deploy`.
7. Setelah deployment pertama berhasil, hubungkan custom domain
   `blog.sikotesku.com`.

`wrangler.jsonc` sengaja tidak memuat `main` atau `run_worker_first`. Dengan
konfigurasi ini, halaman yang tersedia dilayani sebagai asset dan URL yang tidak
ada memakai custom 404 dengan status HTTP 404.

## Setelah Domain Aktif

- Daftarkan `https://blog.sikotesku.com/sitemap-index.xml` ke Google Search
  Console dan Bing Webmaster Tools.
- Tambahkan internal link dari `sikotesku.com` menuju blog.
- Tinjau Cloudflare AI Crawl Control dan izinkan crawler search/assistant yang
  memang ingin diberi akses.
- Pastikan hostname `workers.dev` tetap menerima `X-Robots-Tag: noindex`.

## Editorial

Konten harus membantu pembaca, tidak memuat bocoran soal atau data pengguna,
tidak memberi diagnosis psikologis, dan tidak menjanjikan kelulusan. Lihat
halaman `/kebijakan-editorial/` untuk aturan publiknya.
