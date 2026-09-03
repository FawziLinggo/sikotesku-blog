# Peta Editorial Sekitar 100 Artikel

Peta final akan mengutamakan fitur dan kebutuhan pengguna Sikotesku. Target 100
bukan alasan membuat halaman tipis; intent yang tumpang tindih akan digabung.

## Status

- `existing`: sudah ada di blog.
- `planned`: intent disetujui berdasarkan bukti.
- `draft`: artikel sedang ditulis.
- `review`: menunggu factual/privacy/link review.
- `ready`: siap masuk proses terbit.
- `hold`: bukti atau URL belum cukup.

## Peta 100 Intent

Kolom `source` menunjuk ke `SOURCE_LEDGER.md`. URL yang bertanda `auth` tetap
ditulis sebagai ajakan untuk melihat fitur setelah login, bukan bukti bahwa data
pribadi pembaca dapat diakses publik.

Untuk batch awal, cluster `Sikotesku` umum dipetakan ke kategori publik
`psikotes-kerja`, sedangkan cluster `Battle` dipetakan ke `kraepelin`. Kategori
baru tidak dibuat sebelum cukup banyak artikel agar halaman topik tidak tipis.

| ID | Cluster | Judul/intent unik | Slug | Source | CTA utama | Status | Batas klaim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A-001 | Psikotes kerja | Apa itu psikotes kerja? Jenis, tujuan, dan cara persiapannya | `apa-itu-psikotes-kerja` | umum | `/free-practice/kraepelin` | existing | Tidak menjamin lolos |
| A-002 | Psikotes kerja | Rencana latihan psikotes 7 hari untuk fresh graduate | `rencana-latihan-psikotes-7-hari` | umum | `/free-practice/kraepelin` | existing | Jadwal contoh, bukan resep universal |
| A-003 | Kraepelin | Tes Kraepelin: apa yang dinilai dan cara berlatih | `tes-kraepelin-cara-latihan` | F-002 | `/free-practice/kraepelin` | existing | Hindari bocoran soal |
| A-004 | Kraepelin | Perbedaan tes Kraepelin dan tes Pauli | `perbedaan-kraepelin-dan-pauli` | F-002 | `/free-practice/kraepelin` | existing | Format dapat berbeda antarpenyelenggara |
| A-005 | Matematika dasar | Contoh matematika dasar psikotes dan cara menyelesaikannya | `contoh-matematika-dasar-psikotes` | F-003 | `/free-practice/matdas` | existing | Contoh sintetis |
| A-006 | TIU/CFIT | TIU dan CFIT: perbedaan serta kemampuan yang diukur | `tiu-dan-cfit-perbedaan` | F-004 | `/free-practice/tiu` | existing | Bukan diagnosis kemampuan |
| A-007 | Ketelitian | Cara meningkatkan ketelitian saat mengerjakan psikotes | `cara-meningkatkan-ketelitian-psikotes` | F-005 | `/free-practice/ketelitian` | existing | Latihan tidak menggantikan asesmen resmi |
| A-008 | Karier | Cara membuat CV fresh graduate yang ringkas dan relevan | `cara-membuat-cv-fresh-graduate` | umum | `/cv-review/ai` | existing | Jangan mengarang pengalaman |
| A-009 | Karier | Cara menjawab ceritakan tentang diri Anda saat interview | `cara-menjawab-ceritakan-tentang-diri-anda` | umum | `/interview-simulation` | existing | Contoh harus disesuaikan |
| A-010 | Karier | Checklist interview online agar lebih siap dan tidak panik | `checklist-interview-online` | umum | `/interview-simulation` | existing | Tidak menjamin diterima |
| A-011 | Sikotesku | Cara mulai latihan psikotes gratis di Sikotesku | `cara-mulai-latihan-gratis-sikotesku` | F-007,F-008,F-009,F-010 | `/free-practice/kraepelin` | ready | Login diperlukan; free practice tidak memakai credit |
| A-012 | Sikotesku | Simulasi psikotes online dari HP: alur yang perlu disiapkan | `simulasi-psikotes-online-dari-hp` | SRC-003,SRC-009,SRC-035 | `/` | ready | Online-first; jangan menjanjikan pengerjaan offline |
| A-013 | Sikotesku | Latihan gratis vs credit: kapan memakai masing-masing | `latihan-gratis-vs-credit-sikotesku` | F-007,F-035,SRC-034 | `/credits` | ready | Harga mengikuti katalog; free practice tetap perlu login |
| A-014 | Sikotesku | Cara membaca progres setelah selesai simulasi | `cara-membaca-progres-simulasi-sikotesku` | SRC-032 | `/history` | ready | Skor bukan prediksi kerja; hasil room dapat dibatasi |
| A-015 | Sikotesku | Cara menggunakan Riwayat untuk memilih latihan berikutnya | `cara-menggunakan-riwayat-sikotesku` | SRC-032,SRC-031 | `/history` | ready | Data pribadi hanya milik user |
| A-016 | Sikotesku | Mode Individu dan Room: apa bedanya di Sikotesku? | `mode-individu-dan-room-sikotesku` | SRC-003,F-017,SRC-034 | `/` | ready | Room bergantung panitia/mitra dan kebijakannya |
| A-017 | Room | Apa itu room psikotes dan kapan sebaiknya dipakai? | `apa-itu-room-psikotes` | F-017,SRC-003 | `/mitra` | ready | Detail room berasal penyelenggara |
| A-018 | Room | Cara bergabung room psikotes dengan kode | `cara-bergabung-room-psikotes` | F-017,SRC-033 | `/dashboard` | ready | Jangan membagikan kode privat |
| A-019 | Battle | Apa itu Mode Battle di Sikotesku? | `apa-itu-mode-battle-sikotesku` | F-006,F-017 | `/kraepelin` | ready | Mode dapat diaktifkan panitia |
| A-020 | Battle | Cara kerja ranking Mode Battle tanpa membagikan data peserta | `cara-kerja-ranking-mode-battle` | SRC-016,SRC-017 | `/kraepelin` | ready | Rank provisional/final dapat berbeda |
| A-021 | Battle | Cara melihat pemegang rekor Battle terbaru | `cara-melihat-pemegang-rekor-battle` | F-006,SRC-016 | `/kraepelin` | ready | Rank Battle dibuka dari room terkait; jangan snapshot nama |
| A-022 | Battle | Mengapa ranking Battle tidak selalu langsung final? | `mengapa-ranking-battle-belum-final` | SRC-016,SRC-017 | `/kraepelin` | ready | Jelaskan waktu rilis review |
| A-023 | Battle | Credit dan refund pada Mode Battle: hal yang perlu dibaca | `credit-dan-refund-mode-battle` | SRC-016 | `/kraepelin` | ready | Kebijakan dapat diperbarui |
| A-024 | Battle | Cara kerja batas waktu Kraepelin Battle | `batas-waktu-kraepelin-battle` | SRC-010,SRC-016 | `/kraepelin` | ready | Tidak memberi tips mengeksploitasi timer |
| A-025 | Battle | Checklist persiapan sebelum ikut Battle | `checklist-sebelum-ikut-battle` | SRC-016 | `/free-practice/kraepelin` | ready | Tips umum dan fair play |
| A-026 | Kraepelin | Apa yang dilakukan saat koneksi terputus ketika Kraepelin? | `koneksi-terputus-saat-kraepelin` | SRC-010,SRC-031 | `/kraepelin` | ready | Status request tetap otoritatif di server |
| A-027 | Kraepelin | Memilih keypad phone atau calculator untuk Kraepelin | `memilih-keypad-phone-calculator-kraepelin` | F-012 | `/kraepelin` | ready | Preferensi tidak mengubah scoring |
| A-028 | Kraepelin | Cara membangun ritme Kraepelin tanpa mengejar angka | `membangun-ritme-kraepelin` | SRC-010 | `/free-practice/kraepelin` | ready | Tidak mengajarkan manipulasi |
| A-029 | Kraepelin | Kesalahan umum saat latihan Kraepelin dan cara mengevaluasinya | `kesalahan-umum-latihan-kraepelin` | SRC-010 | `/free-practice/kraepelin` | ready | Gunakan refleksi, bukan kunci jawaban |
| A-030 | Kraepelin | Panduan simulasi Kraepelin gratis untuk pemula | `panduan-simulasi-kraepelin-gratis` | F-007 | `/free-practice/kraepelin` | ready | Flow gratis dapat berubah |
| A-031 | Matematika dasar | Mengenal kategori soal Matdas di Sikotesku | `kategori-soal-matdas-sikotesku` | F-013 | `/matdas` | ready | Kategori aktif mengikuti katalog |
| A-032 | Matematika dasar | Campuran atau hitung cepat: memilih latihan Matdas | `campuran-atau-hitung-cepat-matdas` | F-013 | `/matdas` | ready | Pilihan tidak mengubah durasi produk |
| A-033 | Matematika dasar | Latihan persentase untuk psikotes kerja | `latihan-persentase-psikotes-kerja` | F-013 | `/matdas` | ready | Contoh sintetis |
| A-034 | Matematika dasar | Latihan perbandingan dengan langkah yang rapi | `latihan-perbandingan-matdas` | F-013 | `/matdas` | ready | Fokus metode, bukan bocoran |
| A-035 | Matematika dasar | Cara berlatih deret angka secara bertahap | `cara-berlatih-deret-angka` | F-013 | `/matdas` | ready | Pola tes nyata dapat bervariasi |
| A-036 | Matematika dasar | Mode Pemanasan dan Fokus pada Matdas | `mode-pemanasan-fokus-matdas` | SRC-012 | `/matdas` | ready | Durasi/harga dapat berubah dari katalog |
| A-037 | Matematika dasar | Simulasi Matdas gratis: apa yang bisa dipelajari? | `simulasi-matdas-gratis` | F-008 | `/free-practice/matdas` | ready | Hasil gratis bersifat lokal |
| A-038 | Matematika dasar | Cara membaca rank Matdas dengan konteks yang sehat | `cara-membaca-rank-matdas` | F-019 | `/matdas/rank` | ready | Ranking bukan label kemampuan tetap |
| A-039 | TIU/CFIT | Mengenal kategori TIU dan CFIT di Sikotesku | `kategori-tiu-cfit-sikotesku` | F-014 | `/tiu` | ready | CFIT figural terpisah |
| A-040 | TIU/CFIT | Latihan verbal untuk persiapan TIU | `latihan-verbal-persiapan-tiu` | F-014 | `/tiu` | ready | Tidak mewakili kisi-kisi resmi tertentu |
| A-041 | TIU/CFIT | Strategi dasar menghadapi soal numerik TIU | `strategi-soal-numerik-tiu` | F-014 | `/tiu` | ready | Contoh sintetis |
| A-042 | TIU/CFIT | Cara melatih logika untuk tes kemampuan umum | `cara-melatih-logika-tiu` | F-014 | `/tiu` | ready | Hindari klaim psikometrik berlebihan |
| A-043 | TIU/CFIT | Apa yang dimaksud kategori Figural pada CFIT? | `kategori-figural-cfit` | F-014 | `/tiu` | ready | Media dan konfigurasi dapat berubah |
| A-044 | TIU/CFIT | Cara memilih TIU atau CFIT untuk sesi latihan | `memilih-tiu-atau-cfit-sikotesku` | SRC-013 | `/tiu` | ready | CFIT individu memiliki konfigurasi khusus |
| A-045 | TIU/CFIT | Simulasi TIU gratis untuk mengenali pola penalaran | `simulasi-tiu-gratis` | F-009 | `/free-practice/tiu` | ready | Free practice tidak sama dengan CFIT |
| A-046 | TIU/CFIT | Cara membaca rank TIU dan CFIT tanpa overthinking | `cara-membaca-rank-tiu-cfit` | F-019 | `/tiu/rank` | ready | Rank bersifat konteks sesi |
| A-047 | Ketelitian | Mode Ringkas dan Lengkap pada Tes Ketelitian | `mode-ringkas-lengkap-tes-ketelitian` | F-015 | `/ketelitian` | ready | Durasi mengikuti produk saat ini |
| A-048 | Ketelitian | Latihan Sama/Beda Kode dengan kebiasaan cek cepat | `latihan-sama-beda-kode` | F-015 | `/ketelitian` | ready | Jangan menyalin bank soal |
| A-049 | Ketelitian | Cara berlatih Cari Target tanpa terburu-buru | `latihan-cari-target` | F-015 | `/ketelitian` | ready | Fokus strategi visual umum |
| A-050 | Ketelitian | Cek Data: melatih pemeriksaan detail secara konsisten | `latihan-cek-data` | F-015 | `/ketelitian` | ready | Bukan tes diagnosis |
| A-051 | Ketelitian | Simulasi Ketelitian gratis untuk pemula | `simulasi-ketelitian-gratis` | F-010 | `/free-practice/ketelitian` | ready | Soal gratis lokal |
| A-052 | Ketelitian | Cara membaca rank Ketelitian dengan adil | `cara-membaca-rank-ketelitian` | F-019 | `/ketelitian/rank` | ready | Jangan membandingkan konteks berbeda |
| A-053 | Wartegg | Apa itu Latihan Wartegg di Sikotesku? | `apa-itu-latihan-wartegg-sikotesku` | F-016 | `/wartegg` | ready | Bukan tes resmi atau diagnosis |
| A-054 | Wartegg | Persiapan satu lembar HVS untuk delapan kotak Wartegg | `persiapan-hvs-delapan-kotak-wartegg` | SRC-015 | `/wartegg` | ready | Ikuti petunjuk live |
| A-055 | Wartegg | Upload foto Wartegg: format dan privasi yang perlu dipahami | `upload-foto-wartegg-dan-privasi` | SRC-015 | `/wartegg` | ready | Jangan meminta foto di blog |
| A-056 | Wartegg | Apa arti review teknis pada Latihan Wartegg? | `review-teknis-latihan-wartegg` | SRC-015 | `/wartegg` | ready | Tidak ada interpretasi kepribadian |
| A-057 | Wartegg | Mengapa Wartegg bukan alat diagnosis psikologis? | `wartegg-bukan-diagnosis-psikologis` | SRC-015 | `/wartegg` | ready | Tegaskan batas layanan |
| A-058 | CPNS | Latihan CPNS Sikotesku sudah aktif: fitur dan cara mengaksesnya | `persiapan-cpns-sikotesku` | F-020,SRC-031 | `/cpns` | ready | Harga dan ketersediaan mengikuti halaman live |
| A-059 | CPNS | Diagnostic CPNS: fungsi, cara memulai, dan batas hasilnya | `diagnostic-cpns-fungsi-batas` | SRC-018,SRC-031 | `/cpns/dashboard` | ready | Bukan passing grade atau prediksi kelulusan |
| A-060 | CPNS | TWK, TIU, dan TKP: peta belajar dasar | `twk-tiu-tkp-peta-belajar` | SRC-018 | `/cpns` | ready | Historical reference harus diberi konteks |
| A-061 | CPNS | Mengapa Matdas masuk jalur TIU numerik CPNS | `matdas-dalam-tiu-numerik-cpns` | SRC-018 | `/cpns` | ready | Tidak menyamakan engine produk |
| A-062 | CPNS | Full tryout dan diagnostic: apa perbedaan tujuannya? | `full-tryout-vs-diagnostic-cpns` | SRC-018,SRC-031 | `/cpns/dashboard` | ready | Bandingkan fungsi, bukan skor mentah |
| A-063 | Karier | Karier 31: program persiapan kerja selama 31 hari | `karier-31-program-persiapan-kerja` | F-021 | `/karier-31` | ready | Harga/slot bertanggal |
| A-064 | Karier | Jalur Operator Produksi dalam Karier 31 | `jalur-operator-produksi-karier-31` | SRC-019 | `/karier-31` | ready | Bukan jaminan penempatan |
| A-065 | Karier | Jalur Gudang dan Logistik untuk pencari kerja pemula | `jalur-gudang-logistik-karier-31` | SRC-019 | `/karier-31` | ready | Posisi mengikuti katalog |
| A-066 | Karier | Jalur Administrasi: latihan yang sebaiknya disiapkan | `jalur-administrasi-karier-31` | SRC-019 | `/karier-31` | ready | Panduan umum |
| A-067 | Karier | Karier Digital bersama GalauIT: siapa yang cocok? | `karier-digital-galauit` | SRC-019 | `/karier-31` | ready | Bukan janji pekerjaan |
| A-068 | Karier | Paket Mulai, Fokus, dan Didampingi di Karier 31 | `paket-karier-31-mulai-fokus-didampingi` | SRC-019 | `/karier-31` | ready | Verifikasi harga sebelum terbit |
| A-069 | Karier | Cara memakai CV tersimpan dengan aman di Karier 31 | `cv-tersimpan-karier-31` | F-022 | `/profile#career-document` | ready | Consent tetap milik user |
| A-070 | Karier | Memahami laporan perkembangan Karier 31 | `laporan-perkembangan-karier-31` | F-021 | `/karier-31` | ready | Tidak membaca raw answer |
| A-071 | Karier | CVKu AI: alur review CV yang perlu diketahui | `alur-review-cvku-ai` | F-023 | `/cv-review/ai` | ready | AI bukan keputusan rekrutmen |
| A-072 | Karier | Menyiapkan PDF CV sebelum memakai CVKu AI | `menyiapkan-pdf-cv-cvku-ai` | F-023 | `/cv-review/ai` | ready | Jangan mengunggah data orang lain |
| A-073 | Karier | CVKu AI atau CVKu Pakar: memilih bantuan yang tepat | `cvku-ai-atau-cvku-pakar` | F-023,F-024 | `/cv-review/expert` | ready | Layanan dan harga dapat berubah |
| A-074 | Karier | InterviewKu AI: latihan interview lewat percakapan | `interviewku-ai-latihan-percakapan` | F-025 | `/interview-simulation/ai` | ready | Simulator, bukan recruiter |
| A-075 | Karier | InterviewKu Pakar: kapan simulasi personal berguna? | `interviewku-pakar-simulasi-personal` | F-026 | `/interview-simulation` | ready | Scope awal umum/HR |
| A-076 | Karier | TesVerbalKu: latihan Matdas lisan dan public speaking | `tes-verbalku-matdas-lisan-public-speaking` | F-027 | `/tes-verbalku` | ready | Tidak direkam dan bukan AI |
| A-077 | Karier | Cara mempersiapkan sesi Matdas Lisan | `persiapan-sesi-matdas-lisan` | SRC-023 | `/tes-verbalku/matdas` | ready | Jadwal mengikuti ketersediaan |
| A-078 | Karier | Latihan public speaking untuk menjawab lebih terstruktur | `latihan-public-speaking-tes-verbalku` | SRC-023 | `/tes-verbalku/public-speaking` | ready | Bukan terapi atau diagnosis |
| A-079 | Mitra | Bagaimana Mitra Sikotesku mengelola room seleksi? | `mitra-sikotesku-room-seleksi` | F-029 | `/mitra` | ready | Detail tenant tidak dipublikasikan |
| A-080 | Mitra | Lowongan dari mitra Sikotesku: cara membaca dan melamar | `lowongan-mitra-sikotesku` | F-029 | `/jobs` | ready | Lowongan dapat kosong/berubah |
| A-081 | Sikotesku | Ajak Teman, Dapat Credit: cara kerja programnya | `ajak-teman-dapat-credit` | F-030 | `/ajak-teman` | ready | Eligibility dapat berubah |
| A-082 | Sikotesku | Mengapa leaderboard Ajak Teman menampilkan status pemeriksaan? | `status-pemeriksaan-leaderboard-ajak-teman` | F-031 | `/ajak-teman/leaderboard` | ready | Tidak membuka temuan individu |
| A-083 | Sikotesku | Hadiah: cara mengirim, meminta, dan mengambil credit latihan | `hadiah-credit-latihan-sikotesku` | F-032 | `/hadiah` | ready | Memerlukan akun dan privacy boundary |
| A-084 | Sikotesku | Ajak Teman, Referral Partner, dan Referral BKK: jangan tertukar | `perbedaan-program-referral-sikotesku` | F-030,F-033,F-034 | `/account` | ready | Program punya eligibility berbeda |
| A-085 | Mitra | PIC BKK dan Peserta BKK: peran serta batas akses | `perbedaan-pic-dan-peserta-bkk` | F-034 | `/referral/daftar` | ready | NPSN/kode tidak diminta di artikel |
| A-086 | Sikotesku | Cara memilih paket credit latihan sesuai rencana belajar | `memilih-paket-credit-latihan` | F-035 | `/credits` | ready | Harga authoritative dari checkout |
| A-087 | Sikotesku | Pending, failed, dan expired: memahami status pembayaran | `status-pembayaran-pending-failed-expired` | F-036 | `/purchase/orders` | ready | Jangan menyarankan klik ulang membabi buta |
| A-088 | Sikotesku | Mengatur email marketing dan email layanan Sikotesku | `mengatur-preferensi-email-sikotesku` | F-037 | `/account/email-preferences` | ready | Email penting layanan tetap berbeda |
| A-089 | Sikotesku | Hal yang perlu dipahami sebelum menghapus akun | `sebelum-menghapus-akun-sikotesku` | F-038 | `/account/deletion` | ready | Hindari merinci data internal |
| A-090 | Sikotesku | Cara mengikuti pembaruan produk Sikotesku | `mengikuti-pembaruan-produk-sikotesku` | F-039 | `/updates` | ready | Setiap update bertanggal |
| A-091 | Blog | Cara mencari artikel psikotes di Panduan Sikotesku | `cara-mencari-artikel-panduan-sikotesku` | blog | `/artikel/` | ready | Jelaskan search statis setelah tersedia |
| A-092 | Psikotes kerja | Etika latihan psikotes online dan penggunaan contoh soal | `etika-latihan-psikotes-online` | umum | `/free-practice/kraepelin` | ready | Hormati hak cipta dan aturan tes |
| A-093 | Matematika dasar | Strategi belajar numerik untuk pemula tanpa cram | `strategi-belajar-numerik-pemula` | umum | `/free-practice/matdas` | ready | Bukan resep psikometrik |
| A-094 | TIU/CFIT | Latihan penalaran verbal: dari membaca ke menyimpulkan | `latihan-penalaran-verbal` | umum | `/free-practice/tiu` | ready | Contoh buatan sendiri |
| A-095 | TIU/CFIT | Latihan penalaran figural dengan cara yang terukur | `latihan-penalaran-figural` | umum | `/free-practice/tiu` | ready | Jangan mengklaim prediksi hasil resmi |
| A-096 | Ketelitian | Cara melatih fokus visual di sela rutinitas harian | `melatih-fokus-visual-harian` | umum | `/free-practice/ketelitian` | ready | Tidak menggantikan bantuan profesional |
| A-097 | Psikotes kerja | Manajemen waktu saat tes: membagi energi dan perhatian | `manajemen-waktu-saat-psikotes` | umum | `/free-practice/kraepelin` | ready | Sesuaikan instruksi penyelenggara |
| A-098 | Karier | Metode STAR untuk menjawab pertanyaan interview | `metode-star-jawaban-interview` | umum | `/interview-simulation` | ready | Contoh harus autentik |
| A-099 | Karier | Mitos ATS dan cara membuat CV mudah dipindai | `mitos-ats-dan-cv-mudah-dipindai` | umum | `/cv-review/ai` | ready | ATS bukan skor resmi universal |
| A-100 | Karier | Rencana 30 hari dari latihan psikotes sampai interview | `rencana-30-hari-psikotes-interview` | umum | `/karier-31` | ready | Rencana contoh, bukan janji hasil |
| A-101 | CPNS | Cara mulai latihan CPNS di Sikotesku dari Diagnostic | `cara-mulai-latihan-cpns-sikotesku` | F-020,SRC-031 | `/cpns/dashboard` | ready | Artikel pilar langkah awal production |
| A-102 | CPNS | Jenis latihan CPNS Sikotesku: Diagnostic sampai Full SKD | `jenis-latihan-cpns-sikotesku` | F-020,SRC-031 | `/cpns/dashboard` | ready | Konfigurasi tes mengikuti katalog live |
| A-103 | CPNS | Pass atau Credit CPNS Sikotesku: mana yang sesuai? | `pass-atau-credit-latihan-cpns` | F-020 | `/cpns/checkout` | ready | Harga dan benefit hanya dari checkout |
| A-104 | CPNS | Cara membaca hasil, riwayat, dan ranking CPNS Sikotesku | `cara-membaca-hasil-dan-ranking-cpns` | SRC-031 | `/cpns/history` | ready | Bukan ranking resmi seleksi |
| A-105 | CPNS | Room CPNS Sikotesku: cara kerja, akses, dan ranking | `room-cpns-sikotesku` | F-020,SRC-031 | `/cpns/rooms` | ready | Jangan memuat kode atau identitas peserta |
| A-106 | Karier | RekanKu bersama SICA: AI yang memverifikasi progres | `rekanku-sica-ai-hackfest-2026` | F-028,SRC-037 | `/rekanku` | ready | Bedakan source development, preview beta, dan rollout production penuh |

## Status Produksi

1. A-011 sampai A-030 selesai melalui B-001 sampai B-003.
2. A-031 sampai A-062 selesai melalui B-004 sampai B-008.
3. A-063 sampai A-090 selesai melalui B-009 sampai B-011.
4. A-091 sampai A-100 selesai melalui B-012 sebagai pelengkap psikotes dan
   karier umum setelah seluruh konten produk prioritas selesai.
5. B-013 menyinkronkan A-058 sampai A-062 dengan status CPNS production dan
   menambah A-101 sampai A-105 sebagai cluster intent lanjutan.
6. B-014 menambahkan A-106 sebagai artikel kompetisi AI Hackfest 2026 berbasis
   audit source RekanKu dan status preview public beta.

Peta kini berisi 106 artikel. Penambahan berikutnya harus mengikuti
perubahan produk yang sudah publik, kebutuhan pembaca, atau data Search Console;
jangan menambah halaman tipis hanya untuk mengejar jumlah URL.
