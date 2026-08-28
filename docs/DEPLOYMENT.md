# Deployment Blog Static

## Bentuk Deployment

Blog ini memakai Astro output `static` dan Cloudflare Workers Static Assets.
`wrangler.jsonc` tidak memiliki Worker entrypoint atau `run_worker_first`, sehingga
file yang sudah dibangun dapat dilayani sebagai asset edge tanpa request handler.

Perintah build juga membuat indeks Pagefind dari halaman artikel. File indeks
masuk ke `dist/pagefind/`, dilayani sebagai static asset CDN, dan pencarian
berjalan di browser. Tidak ada Worker, D1, KV, atau API yang dipanggil per kueri.

## Observability dan Privasi

Workers Logs diaktifkan melalui `wrangler.jsonc` dengan sampling 100% agar data
yang memang tersedia dapat diperiksa dari dashboard Cloudflare. Traces tetap
dinonaktifkan karena blog tidak memiliki Worker request handler.

Blog tetap menggunakan arsitektur asset-only. Request yang cocok dengan static
asset dilayani tanpa menjalankan Worker code, sehingga invocation log dapat sangat
sedikit atau kosong. Jangan menambahkan `main` atau `assets.run_worker_first`
hanya untuk menghasilkan log karena itu menambah jalur runtime dan CPU yang tidak
dibutuhkan blog.

Pencarian memakai fragment URL, misalnya `/cari/#q=Kraepelin`. Bagian setelah `#`
tidak dikirim oleh browser ke Cloudflare, sehingga keyword pencarian tidak masuk
request URL atau invocation log. Field `redact_query_string` tidak digunakan
karena tidak tersedia dalam schema Wrangler yang dipakai repo.

Repo ini tidak membutuhkan runtime credential. Simpan token GitHub dan Cloudflare
hanya di integration settings atau secret store platform. Jangan menaruh token,
API key, `.env`, `.dev.vars`, private key, atau credential lain di source,
`wrangler.jsonc`, build log, maupun dokumentasi.

## Workers Builds

Hubungkan repo `FawziLinggo/sikotesku-blog` dari dashboard Cloudflare:

1. Buka **Workers & Pages**.
2. Pilih **Create application** > **Import a repository**.
3. Pilih repo GitHub `sikotesku-blog`.
4. Pilih branch production `main`.
5. Biarkan Workers Builds membaca `.nvmrc` dan memakai Node.js `22.23.2`.
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
GET /cari/                   -> 200
GET /pagefind/pagefind.js    -> 200
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

## Build Tidak Terpicu Setelah Push

Jika project menampilkan status disconnected meskipun nama repo masih terlihat,
periksa GitHub **Settings > Applications > Installed GitHub Apps > Cloudflare
Workers and Pages**. Pastikan `FawziLinggo/sikotesku-blog` termasuk dalam
repository access. Perubahan izin tidak memutar ulang push lama; buat commit baru
setelah koneksi pulih agar automatic build menerima event dari branch `main`.

## Rollback

Rollback dilakukan dari deployment/version history Cloudflare atau dengan revert
commit di `main`. Jangan deploy manual dari laptop untuk production.
