# Ledger Sumber Editorial

Ledger ini menyimpan bukti yang boleh dipakai untuk artikel. Satu sumber dapat
mendukung beberapa ide, tetapi setiap klaim produk tetap harus dapat ditelusuri.

## Status Verifikasi

- `repo`: ditemukan pada source/docs saat ini.
- `live`: halaman publik berhasil diperiksa.
- `ganda`: bukti repo dan live tersedia.
- `belum`: belum cukup untuk dipublikasikan sebagai fakta.

## Sumber

| ID | Area | Sumber | Fakta yang dicari | Status | Risiko | Tindakan berikutnya |
| --- | --- | --- | --- | --- | --- | --- |
| SRC-001 | Product update | `docs/product-updates/SUMMARY.md` | Riwayat fitur yang dirasakan pengguna | repo | Fitur lama dapat berubah | Cocokkan dengan data frontend dan route live |
| SRC-002 | Product update | `frontend/features/product-updates/data/productUpdates.ts` | Copy publik, tanggal, dan tautan fitur | repo | Copy dapat lebih baru dari ledger | Inventaris setiap entri publik |
| SRC-003 | Landing | `frontend/features/landing/landingContent.ts` | Fitur utama, manfaat, dan CTA publik | repo | Claim pemasaran perlu verifikasi route | Cocokkan semua href secara live |
| SRC-004 | Battle | `docs/assessment-room-battle/AGENT.md` | Batas publik dan aturan dokumentasi | repo | Detail internal tidak boleh diterbitkan | Pisahkan fakta publik dari mekanisme internal |
| SRC-005 | Battle | `docs/assessment-room-battle/SUMMARY.md` | Ringkasan room dan battle | repo | Peringkat/nama bersifat volatil/sensitif | Gunakan mekanisme, bukan snapshot pengguna |
| SRC-006 | Battle | `docs/assessment-room-battle/DECISIONS.md` | Keputusan produk yang stabil | repo | Sebagian keputusan mungkin internal | Tandai eligibility per fakta |
| SRC-007 | Blog | `src/content/blog/*.md` | Artikel yang sudah ada | repo | Risiko intent duplikat | Audit terhadap peta 100 artikel |
| SRC-008 | Live site | `https://sikotesku.com` | Navigasi dan halaman publik terkini | ganda | Konten dinamis | Recheck route saat artikel terkait diterbitkan |
| SRC-009 | Free practice | `frontend/features/landing/components/QuickStartSection.tsx`, `frontend/app/free-practice/layout.tsx`, dan route `/free-practice/*` | Jalur latihan gratis setelah login, tanpa credit | ganda | Rendah | Tegaskan login tetap diperlukan dan hasil latihan gratis tidak menjadi riwayat |
| SRC-010 | Kraepelin | `docs/kraepelin-session-timer/SUMMARY.md` | Otoritas timer, resume, dan batas latihan | repo | Sedang | Tulis prinsip, jangan bocorkan payload |
| SRC-011 | Preferences | `docs/assessment-preferences/SUMMARY.md` | Pilihan keypad phone/calculator | repo | Rendah | Verifikasi copy publik di `/kraepelin` |
| SRC-012 | Matdas | `docs/matdas/SUMMARY.md` | Mode, durasi, dan kategori numerik | repo | Sedang | Hindari mengklaim bank soal tertentu |
| SRC-013 | TIU/CFIT | `docs/tiu/SUMMARY.md` | Mode, kategori, dan konfigurasi CFIT | repo | Sedang | Bedakan TIU reguler dan CFIT figural |
| SRC-014 | Ketelitian | `docs/ketelitian/SUMMARY.md` | Mode, kategori, dan latihan gratis | repo | Sedang | Jangan menyalin soal atau answer key |
| SRC-015 | Wartegg | `docs/wartegg/SUMMARY.md` | Delapan stimulus, upload, review teknis | repo | Tinggi bila membahas foto | Jelaskan privacy dan batas non-diagnosis |
| SRC-016 | Battle | `docs/assessment-room-battle/SUMMARY.md` | Credit, consent, waktu, rank final | repo | Tinggi | Bahas mekanisme tanpa nama/skor |
| SRC-017 | Result release | `docs/assessment-room-result-release/SUMMARY.md` | Review room ditahan sampai room selesai | repo | Rendah | Jadikan artikel edukasi fairness |
| SRC-018 | CPNS | live `/cpns`, `/cpns/dashboard`, dan `docs/cpns/SUMMARY.md` read-only | Jalur CPNS aktif, diagnostic, latihan, tryout, Pass/credit, serta batas interpretasi | ganda | Tinggi karena volatil | Production page menjadi sumber status; katalog/checkout menjadi sumber konfigurasi dan harga |
| SRC-019 | Karier 31 | `docs/siap-kerja/SUMMARY.md` dan live `/karier-31` | Program 31 hari, jalur, paket, laporan | ganda | Sedang | Harga/slot wajib diberi tanggal |
| SRC-020 | CVKu AI | `docs/cv-review-ai/SUMMARY.md` dan source route | Review CV berbasis AI, batas file, retensi | repo | Tinggi | Jangan minta pembaca mengunggah data sensitif ke blog |
| SRC-021 | InterviewKu | `docs/interview-simulation/DECISIONS.md` | Sesi pakar 30 menit, scope fresh graduate | repo | Sedang | AI route terpisah dan status harus jelas |
| SRC-022 | InterviewKu AI | `docs/interview-simulation-ai/DECISIONS.md` | Chat simulasi, credit, hard cap | repo | Tinggi | Tulis sebagai simulator, bukan recruiter |
| SRC-023 | TesVerbalKu | `docs/lisanku/SUMMARY.md` | Matdas lisan/public speaking 30 menit | repo | Sedang | Tidak menyatakan rekaman atau AI |
| SRC-024 | Mitra | `docs/mitra/SUMMARY.md` dan live `/mitra` | Room, job posting, laporan tenant-scoped | ganda | Sedang | Artikel B2B; jangan membuka data tenant |
| SRC-025 | Ajak Teman | `docs/user-referral/SUMMARY.md` dan live `/ajak-teman` | Link referral, bonus credit, leaderboard | ganda | Tinggi | Leaderboard bersifat dinamis dan privacy-safe |
| SRC-026 | Hadiah | `docs/user-gift/SUMMARY.md` dan live `/hadiah` | Kirim/minta/claim credit latihan | repo | Tinggi | Jangan menjelaskan lookup atau identity detail |
| SRC-027 | Referral Partner | `docs/referral-partner/SUMMARY.md` | Program partner dan benefit peserta | repo | Tinggi | Bedakan dari Ajak Teman/BKK |
| SRC-028 | Referral BKK | `docs/referral-bkk/SUMMARY.md` | Program sekolah, PIC, peserta, benefit | repo | Tinggi | NPSN, kode, dan data peserta tidak dipublikasikan |
| SRC-029 | Payments | `docs/payment-promotion/SUMMARY.md`, `payment-recovery`, `payment` | Paket, harga historis, error handling | repo | Tinggi/volatil | Jangan mengunci harga promo tanpa tanggal |
| SRC-030 | Account | `docs/account-lifecycle/SUMMARY.md`, `email-preferences` | Akun, penghapusan, dan kontrol email | repo | Tinggi | Artikel hanya menjelaskan tindakan user |
| SRC-031 | Updates | `frontend/features/product-updates/data/productUpdates.ts` | Copy perubahan yang sudah tersedia | ganda | Sedang | Tautkan halaman updates sebagai sumber live |
| SRC-032 | History | `frontend/app/history/page.tsx` dan `frontend/features/history/components/UnifiedHistoryScreen.tsx` | Filter jenis tes/scope, kartu hasil, skor terbaru, akurasi, jumlah latihan, status visibilitas | repo | Tinggi | Jelaskan sebagai data akun pribadi; free practice tidak masuk riwayat |
| SRC-033 | Room entry | `frontend/features/app-shell/components/RoomEntryModal.tsx` dan `frontend/features/dashboard/components/DashboardSecondaryCards.tsx` | Masuk room dari dashboard, format kode baru/lama, resolver, dan pesan error | repo | Sedang | Gunakan kode contoh sintetis; jangan menyalin kode room nyata |
| SRC-034 | Credit flow | `frontend/app/credits/page.tsx`, halaman mode assessment, dan free-practice screen | Saldo per jenis tes terpisah, paket, penggunaan credit pada simulasi lengkap, serta batas free practice | repo | Tinggi/volatil | Jangan mengunci harga; arahkan ke katalog live |
| SRC-035 | Mobile/PWA | `docs/frontend/PWA.md`, `frontend/features/landing/landingContent.ts`, dan route publik | Penggunaan dari HP, online-first, install opsional, batas offline, dan alur login | repo | Sedang | Jangan menjanjikan pengerjaan tes offline |
| SRC-036 | CVKu Pakar | `frontend/features/cv-review/components/ExpertCVReviewScreen.tsx` dan live `/cv-review/expert` | Sesi personal 20 menit, jadwal, PDF opsional, consent, credit, dan pembatalan | ganda | Tinggi/volatil | Harga dan slot mengikuti halaman live; jangan membuka data appointment |

## Aturan Bukti

1. Dokumentasi internal hanya membantu memahami produk; isinya tidak otomatis
   layak dipublikasikan.
2. Source frontend publik dapat menjadi bukti copy dan route, tetapi fitur tetap
   dicek melalui halaman live bila dapat diakses tanpa akun.
3. Data dinamis seperti leaderboard, promo, harga, jumlah peserta, dan pemegang
   rekor tidak dibekukan dalam artikel kecuali ada alasan editorial dan tanggal
   snapshot yang jelas.
4. Jika source dan halaman live bertentangan, artikel ditahan sampai kebenaran
   publik dapat ditentukan.

## URL Live Yang Sudah Dicek (2026-08-28)

Semua URL berikut merespons HTTP `200` melalui pemeriksaan GET/HEAD read-only:

`/`, `/kraepelin`, `/matdas`, `/tiu`, `/ketelitian`, `/wartegg`, `/cpns`,
`/karier-31`, `/siap-kerja`, `/cv-review/ai`, `/cv-review/expert`,
`/interview-simulation/ai`, `/interview-simulation`, `/tes-verbalku`,
`/rekanku`, `/mitra`, `/kraepelin/rank`, `/matdas/rank`, `/tiu/rank`,
`/ketelitian/rank`, `/free-practice/kraepelin`, `/free-practice/matdas`,
`/free-practice/tiu`, `/free-practice/ketelitian`, `/updates`, `/ajak-teman`,
`/ajak-teman/leaderboard`, `/hadiah`, `/referral-partner`, `/referral-benefit`,
`/referral/daftar`, `/jobs`, `/dashboard`, `/credits`, `/history`, `/profile`,
`/tes-verbalku/matdas`, `/tes-verbalku/public-speaking`, `/account`,
`/purchase/orders`, `/account/email-preferences`, dan `/account/deletion`.

Status `200` hanya membuktikan route dapat diakses; fitur authenticated atau
feature-flagged tidak otomatis dianggap aktif untuk semua akun. Dengan tambahan
dashboard, Credit, Riwayat, rank lintas tes, serta route akun dan TesVerbalKu,
total route yang sudah dicek menjadi 42.
