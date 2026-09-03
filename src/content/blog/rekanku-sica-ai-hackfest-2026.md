---
title: "RekanKu Bersama SICA: AI yang Memverifikasi Progres"
description: "RekanKu bersama SICA membantu pencari kerja memilih satu langkah, memverifikasi progres lewat backend, lalu menyesuaikan misi berikutnya secara aman."
publishDate: 2026-09-03
category: karier
tags:
  - RekanKu
  - SICA
  - AI Hackfest 2026
  - AI agent
  - fresh graduate
  - persiapan karier
author: Tim Sikotesku
readingMinutes: 11
featured: true
draft: false
faq:
  - question: "Apakah SICA merupakan chatbot karier umum?"
    answer: "Tidak. SICA dirancang sebagai Career Action Coach yang memilih satu misi dari tindakan yang sudah diizinkan backend, menjelaskan alasannya, dan menunggu bukti progres yang valid."
  - question: "Apakah klik pada CTA membuat misi RekanKu selesai?"
    answer: "Tidak. Klik hanya membuka langkah yang disarankan. Misi baru menjadi verified setelah backend Sikotesku menemukan state atau event penyelesaian yang sesuai."
  - question: "Apakah RekanKu membaca CV mentah dan jawaban tes pengguna?"
    answer: "Tidak untuk alur agent yang dirancang saat ini. Provider AI hanya menerima konteks minimum yang telah dibatasi; CV mentah, jawaban mentah, PII, credential, dan transcript sensitif tidak dikirim."
  - question: "Apakah public beta RekanKu sudah terbuka untuk semua akun?"
    answer: "Belum. Halaman publik menampilkan preview, sedangkan akses agent dibuka bertahap untuk akun beta yang memenuhi gate dan memberikan consent."
sources:
  - name: "Preview RekanKu Sikotesku"
    url: "https://sikotesku.com/rekanku"
    note: "Halaman publik RekanKu dan status akses beta bertahap; diverifikasi 3 September 2026."
cta:
  label: Lihat preview RekanKu
  href: https://sikotesku.com/rekanku
  description: Kenali SICA dan periksa status akses public beta RekanKu yang tersedia untuk akunmu.
---

Masalah pencari kerja bukan selalu kekurangan informasi. Sering kali mereka justru memiliki terlalu banyak pilihan: memperbaiki profil, membuat CV, mencoba psikotes, berlatih interview, menentukan jalur kerja, atau menyiapkan seleksi CPNS. Semua terlihat penting, tetapi tidak semuanya perlu dikerjakan pada saat yang sama.

Di titik itulah kebingungan muncul. Dashboard dapat menunjukkan banyak fitur. Artikel dapat memberi banyak panduan. Chatbot dapat menjawab banyak pertanyaan. Namun pengguna masih harus menentukan sendiri satu tindakan yang paling berguna untuk dikerjakan sekarang.

**RekanKu – Bersama SICA** dibangun untuk menjawab celah tersebut. Proyek ini dikembangkan oleh **Fawzi Linggo**, peserta **Batch 1 AI Hackfest 2026**, dalam kategori **Productivity & Personal AI** dengan subkategori **Education**. SICA adalah singkatan dari **Sikotesku Coach AI**.

Gagasannya sederhana tetapi menuntut disiplin teknis: SICA tidak cukup hanya memberi saran. SICA harus mengetahui kapan saran itu benar-benar berubah menjadi progres.

## Roadmap AI Hackfest 2026

Materi kompetisi menempatkan masa development dan submission pada **1–30 September 2026**, dilanjutkan judging pada **1–31 Oktober 2026**, dan pengumuman pemenang pada **6 November 2026**.

<img src="/articles/ai-hackfest-2026-roadmap.png" width="1483" height="748" loading="lazy" decoding="async" alt="Roadmap AI Hackfest 2026: registrasi Agustus, development dan submission September, judging Oktober, serta pengumuman pemenang November 2026">

*Roadmap AI Hackfest 2026 berdasarkan materi kompetisi yang diterima peserta.*

## Mengapa daftar fitur dan chatbot umum belum cukup?

Sikotesku telah memiliki latihan psikotes, [persiapan CPNS](/artikel/cara-mulai-latihan-cpns-sikotesku/), bantuan CV, simulasi interview, riwayat latihan, dan program karier. Kumpulan kemampuan ini berguna, tetapi banyaknya pilihan dapat memindahkan beban keputusan kepada pengguna.

Chatbot umum juga belum otomatis menyelesaikan masalah. Jawaban yang terdengar masuk akal belum tentu sesuai dengan akses pengguna, prerequisite produk, progres terbaru, atau batas keamanan. Lebih berbahaya lagi jika chatbot menganggap kalimat “sudah selesai” sebagai bukti tanpa memeriksa state aplikasi.

RekanKu mengambil posisi berbeda. Ia adalah **Career Action Coach**, bukan mesin percakapan bebas. Pengalaman utamanya adalah satu Mission Brief, satu alasan yang dapat dipahami, dan satu CTA yang sudah dipetakan backend. Chat hanya menjadi lapisan penjelasan terbatas di sekitar misi itu.

## Siklus utama: Observe, Plan, Act, Verify, Adapt

Benang merah RekanKu adalah siklus berikut:

> Observe → Plan → Act → Verify → Adapt

### Observe: membaca konteks minimum

SICA tidak perlu mengetahui seluruh kehidupan pengguna. Sistem hanya membentuk ringkasan progres minimum yang relevan dan sudah diizinkan, seperti kelengkapan profil, status latihan, keberadaan CV aktif, jalur persiapan, serta apakah suatu aktivitas tersedia atau sudah selesai.

Untuk jalur persiapan kerja, konteks dapat mencakup profil, minat yang diberikan pengguna, latihan psikotes, CV, interview, dan program karier. Untuk jalur CPNS, konteks dipisahkan agar tidak tercampur dengan CV atau psikotes kerja umum. Diagnostic CPNS dan progres latihan menjadi dasar jalur tersebut.

### Plan: memilih satu langkah yang benar-benar valid

Backend lebih dulu menentukan tindakan yang eligible, prerequisite, route, quota, dan lifecycle misi. AI baru membantu ketika terdapat beberapa pilihan valid dan dibutuhkan reasoning untuk menentukan prioritas.

Jika hanya ada satu langkah yang jelas, sistem tidak perlu memaksakan pemakaian AI. Jika tidak ada langkah yang cukup berguna, `NO_RECOMMENDATION` adalah hasil yang sah. Menahan rekomendasi lebih baik daripada menciptakan aktivitas palsu agar agent terlihat sibuk.

### Act: memberi CTA, bukan mengambil alih akun

SICA menyajikan satu CTA aman, misalnya melengkapi profil, membuka latihan, menyiapkan CV, atau melihat riwayat. Pengguna tetap memegang keputusan dan menjalankan tindakannya sendiri.

SICA tidak melakukan pembelian, mengirim lamaran, mengubah data sensitif, atau menjalankan transaksi secara otomatis. Batas ini sengaja dipertahankan agar bantuan agent tidak berubah menjadi pengambilalihan kendali.

### Verify: klik bukan completion

Ini adalah pembeda terpenting RekanKu. Membuka CTA hanya mencatat bahwa pengguna menuju langkah yang disarankan. Klik tidak membuat misi selesai.

Frontend bukan sumber kebenaran completion. Klaim pengguna bukan sumber kebenaran. Output AI juga bukan sumber kebenaran. Misi baru berubah menjadi `verified` ketika backend Sikotesku menemukan state atau event yang sesuai, misalnya sesi yang benar-benar sudah dikirim atau profil yang sudah memenuhi syarat.

### Adapt: rekomendasi berubah bersama progres

Setelah penyelesaian terverifikasi, ringkasan progres dan `progress_version` berubah. SICA kemudian dapat memilih langkah berikutnya berdasarkan kondisi terbaru, bukan mengulang saran lama.

Satu pengguna maksimal memiliki satu misi aktif. Misi tidak diganti hanya karena tanggal berganti. Pengguna juga dapat menunda tanpa langsung dianggap gagal. Pendekatan ini membuat perjalanan terasa seperti proses yang berlanjut, bukan daftar tugas harian yang kehilangan konteks.

## Contoh perjalanan pengguna jalur kerja

Bayangkan seorang fresh graduate memilih jalur persiapan kerja. Ia ingin mencoba banyak fitur, tetapi profil dasarnya belum lengkap.

1. **Observe:** RekanKu melihat bahwa profil belum memenuhi context minimum.
2. **Plan:** melengkapi profil menjadi tindakan paling relevan dan eligible.
3. **Act:** SICA menjelaskan alasannya lalu memberi CTA menuju profil.
4. **Verify:** pengguna mengisi data, kemudian backend memeriksa apakah syaratnya sudah terpenuhi.
5. **Adapt:** setelah misi verified, SICA dapat mempertimbangkan langkah seperti menyiapkan CV atau menjalankan latihan yang relevan.

Pada tahap berikutnya, pengguna mungkin diarahkan ke [panduan membuat CV fresh graduate](/artikel/cara-membuat-cv-fresh-graduate/), [latihan psikotes gratis](/artikel/cara-mulai-latihan-gratis-sikotesku/), atau persiapan interview. Urutannya tidak dipukul rata karena progres setiap akun berbeda.

## Contoh perjalanan pengguna jalur CPNS

Jalur CPNS menggunakan konteks yang berbeda. Pengguna tidak diarahkan ke CV atau latihan rekrutmen umum hanya karena fitur itu tersedia di Sikotesku.

Setelah profil dasar siap, diagnostic CPNS membantu membentuk baseline. SICA kemudian dapat menyarankan latihan CPNS yang belum selesai atau mengarahkan pengguna kembali ke sesi yang masih berjalan. Backend memverifikasi hasil atau state sesi, lalu rekomendasi berikutnya menyesuaikan progres terbaru. Pembaca juga dapat memahami konteksnya melalui [fungsi diagnostic CPNS](/artikel/diagnostic-cpns-fungsi-batas/).

Pemisahan jalur ini penting. Personalisasi yang baik bukan berarti mengumpulkan semua data, melainkan memilih fakta yang tepat untuk keputusan yang sedang dibuat.

## Peran Hermes dan AI yang terkontrol

Dalam arsitektur RekanKu, Hermes berperan sebagai runtime agent yang terisolasi. Ia menerima context terstruktur dan pilihan tindakan yang sudah dibatasi. Outputnya tidak langsung dieksekusi; backend tetap memeriksa schema, freshness, eligibility, dan policy sebelum rekomendasi dapat ditampilkan.

Model tidak menentukan authorization, route bebas, quota, billing, atau status completion. Ia juga tidak mendapat akses langsung ke database, storage, browser, terminal, maupun layanan internal lain. Prinsip ini membatasi blast radius ketika provider gagal atau menghasilkan output yang tidak valid.

Untuk tim yang membangun agent serupa, kebutuhan infrastrukturnya biasanya terbagi antara lingkungan eksperimen model seperti [AI Hosting](https://idwebhost.com/ai-hosting) dan runtime terisolasi pada [Cloud VPS](https://cloudbaik.com). Namun pilihan vendor bukan pengganti desain keamanan: identitas, izin, data minimum, validasi output, dan source of truth tetap harus dikendalikan aplikasi.

## Tetap berguna ketika AI gagal

Produk agent tidak boleh berhenti berguna hanya karena provider timeout, budget habis, circuit breaker aktif, atau output gagal divalidasi. Karena itu, RekanKu memiliki fallback rule-based.

Fallback menggunakan fakta dan daftar tindakan yang sama-sama dikendalikan backend. Ia dapat memilih langkah yang jelas, melanjutkan misi sebelumnya yang belum selesai, atau menghasilkan `NO_RECOMMENDATION`. Pengalaman ini mungkin tidak sefleksibel reasoning AI, tetapi tetap jujur dan dapat diprediksi.

Tradeoff-nya disengaja: lebih baik memberikan bantuan sederhana yang aman daripada jawaban canggih yang tidak dapat dipertanggungjawabkan.

## Privacy, consent, dan batas kewenangan

RekanKu dirancang dengan prinsip data minimum. Provider AI tidak menerima email, nomor telepon, credential, token, CV mentah, jawaban asesmen mentah, transcript sensitif, maupun identifier internal pengguna.

Consent menjadi syarat sebelum context personal digunakan. Pengguna non-beta hanya melihat preview; halaman tersebut tidak membaca progres dan tidak memanggil AI. Chat beta pun dibatasi untuk menjelaskan alasan misi, cara memulai, hambatan sederhana, dan langkah setelah completion. Chat tidak memiliki akses ke MCP, browser, terminal, web search, atau action execution.

Pembatasan tersebut bukan kekurangan yang hendak disembunyikan. Justru di situlah keputusan produk RekanKu terlihat: agent diberi kemampuan secukupnya untuk membantu, bukan sebanyak mungkin hanya karena teknologinya memungkinkan.

## Dampak yang ingin diukur

Keberhasilan RekanKu tidak terutama diukur dari jumlah chat atau berapa kali pengguna membuka halaman. Metric utamanya adalah **Verified Next-Action Completion Rate**: berapa banyak rekomendasi yang benar-benar berubah menjadi tindakan terverifikasi.

Metric pendukung mencakup:

- waktu menuju tindakan terverifikasi pertama;
- persentase tindakan terverifikasi kedua;
- tingkat pengulangan rekomendasi;
- fallback rate;
- no-recommendation rate;
- completion terverifikasi setelah interaksi chat.

Semua pengukuran dirancang dalam bentuk aggregate dan privacy-safe. RekanKu tidak membuat skor “kesiapan kerja 80 persen”, probabilitas diterima, diagnosis psikologis, atau ranking kandidat.

## Potensi sebagai fitur bisnis Sikotesku

Jika beta membuktikan manfaat, RekanKu dapat menjadi lapisan pengarah di atas ekosistem Sikotesku. Nilainya bukan menjual lebih banyak percakapan, tetapi membantu pengguna memakai fitur yang relevan dalam urutan yang masuk akal.

Model bisnis yang lebih sehat dapat berbentuk akses pendampingan selama periode tertentu, bukan potongan credit per chat. Namun harga dan keputusan komersial final belum ditetapkan. Validasi manfaat harus datang lebih dahulu sebelum scale-up.

## Status saat artikel ini diterbitkan

Pada 3 September 2026, route publik [RekanKu bersama SICA](https://sikotesku.com/rekanku) menampilkan preview public beta dengan akses yang dibuka bertahap. Source pada branch development sudah memuat vertical slice mission control, onboarding jalur kerja dan CPNS, verifikasi progres, fallback, chat terbatas, serta metric aggregate.

Namun ini belum berarti rollout production penuh selesai. E2E lintas domain, controlled rollout, runtime Hermes production, provider gate, dan review privacy/legal tetap harus dituntaskan. Artikel ini sengaja membedakan kemampuan yang sudah ada di source dari kemampuan yang sudah tersedia untuk seluruh pengguna.

## Bukan sekadar memberi jawaban

RekanKu berangkat dari masalah yang sangat manusiawi: terlalu banyak hal penting dapat membuat seseorang tidak mengerjakan apa pun. SICA mencoba mengubah kebingungan itu menjadi satu langkah yang jelas, aman, dan dapat dibuktikan.

Nilai akhirnya bukan seberapa pintar kalimat yang dihasilkan AI. Nilainya terletak pada siklus yang utuh: mengamati seperlunya, merencanakan dengan batas yang jelas, menyerahkan tindakan kepada pengguna, memverifikasi melalui backend, lalu beradaptasi terhadap progres terbaru.

**SICA tidak hanya memberi saran. SICA tahu kapan saran itu benar-benar berubah menjadi progres.**
