---
title: "Cara Mencari Artikel Psikotes di Panduan Sikotesku"
description: "Gunakan pencarian artikel statis untuk menemukan panduan Kraepelin, Matdas, TIU, ketelitian, CV, interview, dan karier dari perangkatmu."
publishDate: 2026-08-28
category: psikotes-kerja
tags:
  - cari artikel
  - Panduan Sikotesku
  - psikotes kerja
  - SEO psikotes
author: Tim Sikotesku
readingMinutes: 6
featured: false
draft: false
cta:
  label: Cari artikel sekarang
  href: https://blog.sikotesku.com/cari/
  description: Ketik topik atau pertanyaan singkat dan buka panduan yang paling relevan.
---

Panduan Sikotesku menyediakan halaman pencarian untuk membantu kamu menemukan artikel tanpa menggulir seluruh daftar. Kamu dapat mencari topik seperti Kraepelin, persentase, TIU, Wartegg, CV, atau interview.

## Cara memulai

1. Buka halaman [Cari](/cari/).
2. Ketik satu atau beberapa kata.
3. Tekan tombol Cari atau Enter.
4. Baca judul dan ringkasan hasil.
5. Buka artikel yang paling sesuai dengan kebutuhanmu.

Mulai dengan kata yang sederhana, misalnya `Kraepelin`, `CV`, atau `persentase`. Jika hasil terlalu banyak, tambahkan konteks seperti `gratis`, `rank`, atau `fresh graduate`.

## Pencarian berjalan di perangkatmu

Pada deployment produksi, indeks artikel dibuat saat proses build menggunakan Pagefind. Berkas indeks tersebut disajikan sebagai aset statis melalui CDN, lalu pencarian diproses di browser.

Artinya, kueri tidak dikirim ke database atau API Sikotesku setiap kali kamu mengetik. Pendekatan ini menjaga arsitektur blog tetap ringan dan tidak memerlukan Worker request handler untuk setiap pencarian.

Di lingkungan lokal saat `astro dev`, halaman memakai indeks kecil dari konten yang sedang dibaca agar kamu tetap dapat mencoba pencarian sebelum build produksi.

## Apa yang dicari?

Indeks mempertimbangkan:

- judul artikel;
- deskripsi singkat;
- tag;
- isi halaman artikel pada indeks produksi.

Kata yang tidak persis sama masih dapat menemukan hasil tergantung cara indeks memproses bahasa. Bila belum menemukan yang tepat, coba bentuk kata lain: `hitung cepat` dan `matematika`, misalnya.

## Pilih hasil berdasarkan niat

Jangan hanya memilih judul yang memiliki kata kunci sama. Tanyakan apa keputusan yang ingin kamu ambil:

- ingin mulai latihan gratis;
- ingin memahami format tes;
- ingin membaca hasil atau rank;
- ingin menyiapkan CV;
- ingin memilih layanan interview;
- ingin memahami fitur Sikotesku.

Untuk daftar lengkap, buka [semua artikel](/artikel/). Untuk navigasi berdasarkan kelompok, gunakan [Topik](/topik/).

## Pencarian bukan pengganti halaman produk

Artikel menjelaskan konsep dan alur secara editorial. Harga, slot, status fitur, promo, dan eligibility dapat berubah, sehingga selalu buka halaman produk Sikotesku setelah membaca artikel.

Contohnya, hasil pencarian tentang credit sebaiknya dilanjutkan ke [Saldo dan paket credit](/artikel/memilih-paket-credit-latihan/) lalu diperiksa kembali di halaman live.

## Menjaga privasi

Karena pencarian berjalan di browser, kueri tidak dikirim ke database atau API blog. Meski begitu, hindari mengetik data pribadi, nomor identitas, atau informasi rahasia ke kolom pencarian.

## Jika tidak ada hasil

- Hapus kata yang terlalu spesifik.
- Coba sinonim atau bentuk singkat.
- Cari satu topik dulu, lalu baca tautan terkait.
- Periksa [artikel terbaru](/artikel/) untuk konten yang baru ditambahkan.

## Ringkasnya

Halaman Cari memakai indeks statis yang dibuat saat build dan disajikan dari CDN. Pencarian berlangsung di perangkatmu tanpa query ke database atau API per kueri.

Mulai mencari di [Panduan Sikotesku](https://blog.sikotesku.com/cari/).
