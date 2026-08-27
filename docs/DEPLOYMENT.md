# Deployment Blog Static

## Bentuk Deployment

Blog ini memakai Astro output `static` dan Cloudflare Workers Static Assets.
`wrangler.jsonc` tidak memiliki Worker entrypoint atau `run_worker_first`, sehingga
file yang sudah dibangun dapat dilayani sebagai asset edge tanpa request handler.

## Workers Builds

Hubungkan repo `FawziLinggo/sikotesku-blog` dari dashboard Cloudflare:

1. Buka **Workers & Pages**.
2. Pilih **Create application** > **Import a repository**.
3. Pilih repo GitHub `sikotesku-blog`.
4. Pilih branch production `main`.
5. Gunakan Node.js `22.12.0` atau versi yang lebih baru.
6. Isi build command `npm run build`.
7. Isi deploy command `npm run deploy`.
8. Pastikan root directory adalah root repo.

Cloudflare Workers Builds dapat membuat build dan deployment otomatis setiap kali
ada push ke branch yang terhubung. Preview branch boleh diaktifkan untuk review,
tetapi hanya `main` yang menjadi production.

## Custom Domain

Setelah deployment pertama berhasil:

1. Buka project Worker `sikotesku-blog`.
2. Masuk ke **Settings** > **Domains & Routes** atau **Custom domains**.
3. Tambahkan `blog.sikotesku.com`.
4. Pastikan DNS dan sertifikat aktif sebelum mengumumkan URL publik.

Jangan mengubah routing `sikotesku.com` utama untuk blog ini pada tahap awal.

## Verifikasi Manual Setelah Deploy

```text
GET /                         -> 200
GET /artikel/                 -> 200
GET /artikel/<slug>/         -> 200
GET /topik/                   -> 200
GET /robots.txt               -> 200
GET /sitemap-index.xml        -> 200
GET /rss.xml                  -> 200
GET /llms.txt                 -> 200
GET /alamat-yang-tidak-ada/   -> 404
```

Periksa juga canonical, `og:image`, JSON-LD, `X-Robots-Tag` pada hostname
`workers.dev`, dan apakah AI Crawl Control atau WAF memblokir crawler yang ingin
diberi akses.

## Rollback

Rollback dilakukan dari deployment/version history Cloudflare atau dengan revert
commit di `main`. Jangan deploy manual dari laptop untuk production.
