# Inventaris Fitur Publik Sikotesku

Dokumen ini memisahkan pengetahuan repo dari informasi yang aman dijadikan
artikel. Baris ditambahkan hanya setelah ada bukti yang dapat dilacak.

| ID | Fitur/topik | Sumber | URL publik | Live | Layak artikel | Risiko privasi | Volatilitas | Catatan |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F-001 | Latihan psikotes umum | SRC-003, SRC-008 | `https://sikotesku.com/` | 200 | ya | rendah | sedang | Cluster payung; hindari janji hasil |
| F-002 | Kraepelin | SRC-003, SRC-008 | `https://sikotesku.com/kraepelin` | 200 | ya | rendah | sedang | Termasuk latihan, preferensi, room, dan Battle |
| F-003 | Matematika Dasar | SRC-003, SRC-008 | `https://sikotesku.com/matdas` | 200 | ya | rendah | rendah | Cocok untuk cluster konsep dan latihan |
| F-004 | TIU/CFIT | SRC-003, SRC-008 | `https://sikotesku.com/tiu` | 200 | ya | rendah | rendah | Pisahkan intent TIU, CFIT, dan perbandingan |
| F-005 | Ketelitian | SRC-003, SRC-008 | `https://sikotesku.com/ketelitian` | 200 | ya | rendah | rendah | Fokus strategi dan penggunaan fitur |
| F-006 | Mode Battle | SRC-004, SRC-005, SRC-006 | `https://sikotesku.com/kraepelin` | 200 (landing) | ya, terbatas | tinggi bila menyalin user | tinggi | Battle bergantung room; lihat rank pada room terkait, bukan snapshot artikel |
| F-007 | Simulasi gratis Kraepelin | SRC-009, SRC-010 | `https://sikotesku.com/free-practice/kraepelin` | 200 | ya | rendah | sedang | Login wajib; tanpa credit dan hasil tidak masuk riwayat |
| F-008 | Simulasi gratis Matdas | SRC-009, SRC-012 | `https://sikotesku.com/free-practice/matdas` | 200 | ya | rendah | sedang | Login wajib; 10 soal dan hasil tidak disimpan |
| F-009 | Simulasi gratis TIU | SRC-009, SRC-013 | `https://sikotesku.com/free-practice/tiu` | 200 | ya | rendah | sedang | Login wajib; 10 soal TIU non-figural dan tanpa credit |
| F-010 | Simulasi gratis Ketelitian | SRC-009, SRC-014 | `https://sikotesku.com/free-practice/ketelitian` | 200 | ya | rendah | sedang | Login wajib; soal lokal dan hasil tidak disimpan |
| F-011 | Mode Kraepelin individu | SRC-003, SRC-010 | `https://sikotesku.com/kraepelin` | 200 | ya | rendah | sedang | Timer server pada sesi berbayar |
| F-012 | Preferensi keypad Kraepelin | SRC-011 | `https://sikotesku.com/kraepelin` | 200 | ya | rendah | rendah | Phone vs calculator |
| F-013 | Kategori Matdas | SRC-012 | `https://sikotesku.com/matdas` | 200 | ya | rendah | sedang | Campuran, hitung cepat, persentase, perbandingan, deret |
| F-014 | Kategori TIU/CFIT | SRC-013 | `https://sikotesku.com/tiu` | 200 | ya | rendah | sedang | Campuran, logika, verbal, numerik, figural CFIT |
| F-015 | Mode Ketelitian | SRC-014 | `https://sikotesku.com/ketelitian` | 200 | ya | rendah | sedang | Ringkas/Lengkap dan tiga tipe tugas |
| F-016 | Latihan Wartegg | SRC-015 | `https://sikotesku.com/wartegg` | 200 | ya, terbatas | tinggi | sedang | Foto privat, review teknis, bukan diagnosis |
| F-017 | Room assessment | SRC-003, SRC-016, SRC-024 | `https://sikotesku.com/mitra` | 200 | ya | sedang | tinggi | Jelaskan untuk panitia/mitra |
| F-018 | Result release room | SRC-017 | belum ada route mandiri | belum | ya | rendah | rendah | Artikel fairness dan waktu review |
| F-019 | Rank global individu | SRC-010, SRC-012, SRC-013, SRC-014 | `/kraepelin/rank`, `/matdas/rank`, `/tiu/rank`, `/ketelitian/rank` | shell 200; data auth | ya, terbatas | tinggi | tinggi | Bukan rank Battle; hanya peserta yang mengaktifkan rank global |
| F-020 | Latihan CPNS aktif | SRC-018, SRC-031 | `https://sikotesku.com/cpns` | 200 | ya | sedang | tinggi | Diagnostic, latihan, tryout, Pass/credit, hasil, ranking, dan Room; konfigurasi live tetap authoritative |
| F-021 | Karier 31 | SRC-019 | `https://sikotesku.com/karier-31` | 200 | ya | sedang | tinggi | Program 31 hari; katalog authoritative |
| F-022 | CV tersimpan | SRC-019, SRC-020 | `https://sikotesku.com/profile#career-document` | 200 | ya | tinggi | sedang | Jelaskan consent dan private storage secara umum |
| F-023 | CVKu AI | SRC-020 | `https://sikotesku.com/cv-review/ai` | 200 | ya | tinggi | sedang | Batas PDF dan privacy guardrail |
| F-024 | CVKu pakar | SRC-036 | `https://sikotesku.com/cv-review/expert` | 200 | ya | tinggi | sedang | Sesi review personal 20 menit; slot dan harga live |
| F-025 | InterviewKu AI | SRC-022 | `https://sikotesku.com/interview-simulation/ai` | 200 | ya | tinggi | tinggi | Simulator chat, bukan keputusan rekrutmen |
| F-026 | InterviewKu pakar | SRC-021 | `https://sikotesku.com/interview-simulation` | 200 | ya | sedang | sedang | 30 menit, scope umum/HR |
| F-027 | TesVerbalKu | SRC-023 | `https://sikotesku.com/tes-verbalku` | 200 | ya | sedang | sedang | Matdas lisan/public speaking, Google Meet |
| F-028 | RekanKu | `docs/rekanku/SUMMARY.md` | `https://sikotesku.com/rekanku` | 200 | ya, terbatas | tinggi | tinggi | Coming soon/default-off; jangan klaim tersedia |
| F-029 | Mitra room dan job posting | SRC-024 | `https://sikotesku.com/mitra` dan `/jobs` | 200 | ya | sedang | tinggi | Tenant-scoped; publik hanya lowongan |
| F-030 | Ajak Teman | SRC-025 | `https://sikotesku.com/ajak-teman` | 200 | ya | tinggi | tinggi | Bonus dan eligibility dapat berubah |
| F-031 | Leaderboard Ajak Teman | SRC-025 | `https://sikotesku.com/ajak-teman/leaderboard` | 200 | ya, terbatas | tinggi | tinggi | Jangan menyalin nama/posisi snapshot |
| F-032 | Hadiah credit | SRC-026 | `https://sikotesku.com/hadiah` | 200 | ya | tinggi | sedang | Kirim, minta, claim; akun authenticated |
| F-033 | Referral Partner | SRC-027 | `https://sikotesku.com/referral-partner` | 200 | ya, terbatas | tinggi | tinggi | Aktivasi dilakukan Admin |
| F-034 | Referral BKK | SRC-028 | `https://sikotesku.com/referral/daftar` | 200 | ya, terbatas | tinggi | tinggi | Bedakan PIC dan peserta |
| F-035 | Paket credit | SRC-029 | `https://sikotesku.com/credits` | 200 | ya, terbatas | rendah | tinggi | Harga dari quote server |
| F-036 | Payment recovery | SRC-029 | `https://sikotesku.com/purchase/orders` | 200 | ya | sedang | sedang | Jelaskan pending/failed secara praktis |
| F-037 | Email preferences | SRC-030 | `https://sikotesku.com/account/email-preferences` | 200 | ya | tinggi | rendah | Marketing vs service email |
| F-038 | Account deletion | SRC-030 | `https://sikotesku.com/account/deletion` | 200 | ya, terbatas | tinggi | sedang | Jelaskan konsekuensi tanpa detail internal |
| F-039 | Product updates | SRC-031 | `https://sikotesku.com/updates` | 200 | ya | rendah | tinggi | Artikel update bertanggal |
| F-040 | Admin-only operations | berbagai AGENT/SUMMARY | `/admin/*` | tidak | tidak | sangat tinggi | tinggi | Jangan dijadikan artikel publik |
| F-041 | Riwayat hasil assessment | SRC-032 | `https://sikotesku.com/history` | 200 (shell; auth) | ya | tinggi | sedang | Filter jenis tes/scope, status, skor, dan hasil milik user |
| F-042 | Dashboard masuk Room | SRC-033 | `https://sikotesku.com/dashboard` | 200 (shell; auth) | ya | sedang | sedang | Menu Room Tes menerima kode dari penyelenggara |
| F-043 | Pusat saldo dan paket credit | SRC-034 | `https://sikotesku.com/credits` | 200 (shell; auth) | ya | tinggi | tinggi | Saldo per produk terpisah; harga authoritative dari checkout |

## Klasifikasi Kelayakan

- `ya`: dapat menjadi artikel mandiri.
- `ya, terbatas`: hanya aspek publik tertentu yang boleh dibahas.
- `pendukung`: lebih baik menjadi bagian artikel lain.
- `tidak`: internal, sensitif, atau tidak memberi nilai pembaca.
