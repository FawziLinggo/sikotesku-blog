# Checkpoint Editorial Sikotesku Blog

Dokumen ini melacak pekerjaan editorial dari audit produk sampai artikel siap
terbit. Status yang dipakai: `belum`, `proses`, `selesai`, atau `ditahan`.

## Guardrail Tetap

- Sumber utama adalah fitur publik dan dokumentasi yang sudah terverifikasi.
- Repo `E:\sikotesku.com` hanya diaudit secara read-only.
- Data pribadi, nama pemegang rekor, avatar, ID, CV, jawaban, dan hasil asesmen
  tidak disalin ke artikel.
- Leaderboard dibahas sebagai mekanisme. Posisi terkini dilihat melalui halaman
  live Sikotesku karena dapat berubah.
- Fitur internal, admin, security, anti-cheat, infrastruktur, dan fitur yang belum
  tersedia untuk publik tidak dijadikan klaim pemasaran.
- Artikel tidak menjanjikan kelulusan, skor, pekerjaan, atau hasil seleksi.
- Setiap artikel Sikotesku menyertakan tautan langsung yang relevan ke
  `https://sikotesku.com` setelah URL tersebut diverifikasi.
- Test, build, lint, commit, push, dan deploy dilakukan hanya setelah diminta.

## Checkpoint Utama

| ID | Pekerjaan | Status | Bukti hasil |
| --- | --- | --- | --- |
| CP-01 | Konfirmasi aturan repo, branch, dan batas edit | selesai | Repo aplikasi read-only; perubahan hanya di repo blog |
| CP-02 | Buat ledger sumber, fitur, dan peta artikel | selesai | Dokumen di `docs/editorial/` |
| CP-03 | Audit product update publik | selesai | 24 entry product update dipetakan dari source |
| CP-04 | Audit landing page, navigasi, dan route publik | selesai | Route utama diuji read-only ke `https://sikotesku.com` |
| CP-05 | Audit modul latihan dan asesmen | selesai | Kraepelin, Matdas, TIU/CFIT, Ketelitian, Wartegg, CPNS |
| CP-06 | Audit Battle, room, peringkat, dan hasil | selesai | Mekanisme publik dipisahkan dari data peserta |
| CP-07 | Audit tools karier | selesai | CV, interview, TesVerbalKu, RekanKu, Karier 31 |
| CP-08 | Audit referral, hadiah, paket, dan pembayaran publik | selesai | Manfaat publik dicatat; detail internal ditahan |
| CP-09 | Verifikasi URL publik secara live | selesai | 42 route utama dan authenticated shell merespons HTTP 200 pada 2026-08-28 |
| CP-10 | Kelompokkan fakta: publik, volatil, sensitif, atau internal | selesai | Kolom eligibility dan risiko terisi |
| CP-11 | Susun sekitar 100 intent artikel unik | selesai | 100 intent dalam `ARTICLE_MAP.md` |
| CP-12 | Audit duplikasi terhadap 10 artikel awal | selesai | 10 artikel awal dipertahankan sebagai intent pilar |
| CP-13 | Rapikan margin horizontal mobile | selesai | Shell mobile memakai margin 1rem per sisi dan naik bertahap pada breakpoint |
| CP-14 | Implementasikan search statis client-side | selesai | Pagefind build-time untuk production dan fallback lokal saat `astro dev`; build menunggu user |
| CP-15 | Tulis batch artikel prioritas Sikotesku | selesai | B-001 sampai B-011 menambah 80 artikel produk; total repo sebelum gap filler 90 artikel |
| CP-16 | Lengkapi topik psikotes/karier umum bila perlu | selesai | B-012 menambah A-091 sampai A-100; total repo 100 artikel |
| CP-17 | Audit akhir metadata, tautan, dan cakupan | selesai | 100 file selaras dengan map; metadata, CTA, 243 internal link, PII, dan batas klaim lulus source-only |

## Definition of Done Per Artikel

| Pemeriksaan | Status wajib |
| --- | --- |
| Intent pencarian unik dan tidak menabrak artikel lain | lulus |
| Fakta produk memiliki sumber dan tanggal verifikasi | lulus |
| URL Sikotesku relevan sudah diverifikasi | lulus |
| Tidak memuat PII, data pengguna, atau detail internal | lulus |
| Judul, description, canonical, dan structured data sesuai | lulus |
| Ada internal link kontekstual | lulus |
| CTA membantu pembaca, bukan hard sell | lulus |
| Tidak menjanjikan hasil seleksi | lulus |
| Bahasa manusia-first, mudah dipindai di mobile | lulus |

## Batch Produksi

| Batch | Artikel | Status | Catatan |
| --- | --- | --- | --- |
| B-001 | A-011 Cara mulai latihan gratis | ready | Login wajib dan tanpa credit sudah dikoreksi |
| B-001 | A-019 Apa itu Mode Battle | ready | Fokus aturan peserta; detail internal ditahan |
| B-001 | A-020 Cara kerja ranking Battle | ready | Rank Battle dibedakan dari rank global |
| B-001 | A-021 Melihat pemegang rekor Battle | ready | Mengarahkan ke room live tanpa snapshot nama |
| B-001 | A-026 Koneksi terputus saat Kraepelin | ready | Menggunakan copy product update dan batas timer publik |
| B-001 | A-027 Keypad Telepon atau Kalkulator | ready | Preferensi tidak mengubah scoring atau rank |
| B-002 | A-012 Simulasi dari HP | ready | Online-first, install opsional, dan batas offline dijelaskan |
| B-002 | A-013 Gratis vs credit | ready | Login, saldo terpisah, mode, dan harga volatil dijelaskan |
| B-002 | A-014 Membaca progres simulasi | ready | Skor, akurasi, status, scope, dan batas hasil room dijelaskan |
| B-002 | A-015 Menggunakan Riwayat | ready | Filter jenis tes/scope dan privasi akun dijelaskan |
| B-002 | A-016 Mode Individu vs Room | ready | Credit, jadwal, ranking, dan visibilitas hasil dibedakan |
| B-002 | A-017 Apa itu room psikotes | ready | Peserta dan penyelenggara diberi konteks berbeda |
| B-002 | A-018 Bergabung dengan kode room | ready | Format kode sintetis dan jalur Room Tes dijelaskan |
| B-003 | A-022 Mengapa ranking belum final | ready | Status sementara, waktu room, dan rank global dibedakan |
| B-003 | A-023 Credit dan refund Battle | ready | Credit eligible, no-show, keluar, dan batas refund dijelaskan |
| B-003 | A-024 Batas waktu Kraepelin Battle | ready | Waktu server, satu kolom, dan grace lima detik dijelaskan tanpa detail eksploitasi |
| B-003 | A-025 Checklist sebelum Battle | ready | Akun, jadwal, credit, perangkat, koneksi, dan fair play diperiksa |
| B-003 | A-028 Membangun ritme Kraepelin | ready | Fokus pada ketepatan, konsistensi, dan evaluasi proses |
| B-003 | A-029 Kesalahan umum Kraepelin | ready | Kesalahan hitung, input, fokus, dan konteks sesi dipisahkan |
| B-003 | A-030 Simulasi Kraepelin gratis | ready | Login, 15 x 20, tanpa credit, dan tanpa Riwayat dijelaskan |
| B-004 | A-031 Kategori Matdas | ready | Campuran, Hitung Cepat, Persentase, Perbandingan, dan Deret dipetakan |
| B-004 | A-032 Campuran vs Hitung Cepat | ready | Tujuan evaluasi dibedakan dari mode dan durasi |
| B-004 | A-033 Latihan Persentase | ready | Contoh sintetis membahas bagian, perubahan, dan nilai awal |
| B-004 | A-034 Latihan Perbandingan | ready | Rasio, satuan, dan nilai bagian dijelaskan bertahap |
| B-004 | A-035 Latihan Deret | ready | Selisih, rasio, dan pola bergantian diperiksa berurutan |
| B-004 | A-036 Mode Pemanasan dan Fokus | ready | Konfigurasi bertanggal dan batas perbandingan dijelaskan |
| B-004 | A-037 Simulasi Matdas gratis | ready | Login, 10 soal, tanpa credit, Riwayat, atau rank dijelaskan |
| B-004 | A-038 Membaca Rank Matdas | ready | Mode, periode, metrik, dan visibilitas global diberi konteks |
| B-005 | A-039 Kategori TIU/CFIT | ready | Kategori reguler dan Figural dipisahkan |
| B-005 | A-040 Latihan Verbal | ready | Hubungan kata, pembatas, dan kesimpulan dilatih tanpa kisi-kisi resmi |
| B-005 | A-041 Strategi Numerik | ready | Satuan, estimasi, dan hubungan angka menjadi fokus |
| B-005 | A-042 Latihan Logika | ready | Premis, kondisi, dan asumsi tambahan dibedakan |
| B-005 | A-043 Figural CFIT | ready | Pola visual dijelaskan dengan batas non-diagnosis |
| B-005 | A-044 Memilih TIU atau CFIT | ready | Tujuan Verbal/Numerik/Logika dibedakan dari Figural |
| B-005 | A-045 Simulasi TIU gratis | ready | Sepuluh soal non-figural, login, dan batas hasil dijelaskan |
| B-005 | A-046 Membaca Rank TIU/CFIT | ready | Pemanasan, Fokus, CFIT, periode, dan visibilitas dipisahkan |
| B-006 | A-047 Mode Ringkas dan Lengkap | ready | Jumlah soal, durasi, dan tujuan tiap mode dibedakan |
| B-006 | A-048 Sama/Beda Kode | ready | Pemeriksaan blok dan karakter mirip memakai contoh sintetis |
| B-006 | A-049 Cari Target | ready | Pemindaian baris, target terlewat, dan salah pilih dipisahkan |
| B-006 | A-050 Cek Data | ready | Pemeriksaan field memakai data sintetis dan batas privasi |
| B-006 | A-051 Ketelitian gratis | ready | Sepuluh soal, lima menit, login, dan hasil lokal dijelaskan |
| B-006 | A-052 Membaca Rank Ketelitian | ready | Mode, periode, akurasi, benar, dan terisi diberi konteks |
| B-007 | A-053 Apa itu Latihan Wartegg | ready | Delapan stimulus, kertas, foto, credit, dan review manual dijelaskan |
| B-007 | A-054 Persiapan HVS Wartegg | ready | Susunan 2 x 4, alat, kamera, dan deadline diperiksa |
| B-007 | A-055 Upload foto Wartegg | ready | JPG/PNG, 8 MB, foto utuh, metadata, dan privasi dijelaskan |
| B-007 | A-056 Review teknis Wartegg | ready | Struktur review dan batas non-psikologis dibedakan |
| B-007 | A-057 Wartegg bukan diagnosis | ready | Klaim kepribadian dan kelulusan ditolak eksplisit |
| B-008 | A-058 Status CPNS Sikotesku | ready | Halaman live dinyatakan belum dibuka dan tanpa tanggal publik |
| B-008 | A-059 Diagnostic CPNS | ready | Fungsi pemetaan dipisahkan dari passing grade |
| B-008 | A-060 Peta TWK/TIU/TKP | ready | Referensi historis dipisahkan dari aturan siklus baru |
| B-008 | A-061 Matdas dalam TIU numerik | ready | Matdas tidak disebut bagian keempat SKD |
| B-008 | A-062 Full tryout vs diagnostic | ready | Tujuan pemetaan dan simulasi dibedakan; fitur belum aktif |
| B-009 | A-063 Program Karier 31 | ready | Struktur 31 hari, jalur, paket, dan batas hasil dijelaskan |
| B-009 | A-064 Jalur Operator Produksi | ready | Kesiapan kerja dibahas tanpa janji penempatan |
| B-009 | A-065 Jalur Gudang dan Logistik | ready | Fokus alur barang, ketelitian, dan keselamatan umum |
| B-009 | A-066 Jalur Administrasi | ready | Data sintetis, numerik, komunikasi, dan privasi ditekankan |
| B-009 | A-067 Karier Digital GalauIT | ready | Tiga jalur digital dipisahkan dari paket reguler dan janji kerja |
| B-009 | A-068 Paket Mulai, Fokus, Didampingi | ready | Benefit bertanggal; harga dan slot diarahkan ke katalog live |
| B-009 | A-069 CV tersimpan | ready | Satu CV aktif, versioning, consent, dan batas PDF dijelaskan |
| B-009 | A-070 Laporan Karier 31 | ready | Progres aktivitas dibedakan dari peluang diterima kerja |
| B-010 | A-071 Alur CVKu AI | ready | Upload, masking, hasil utama, dan diskusi dibatasi sebagai alat latihan |
| B-010 | A-072 Menyiapkan PDF CVKu AI | ready | Batas 2 MB, 3 halaman, selectable text, dan privasi dijelaskan |
| B-010 | A-073 CVKu AI atau Pakar | ready | Otomatis dibandingkan dengan sesi personal 20 menit tanpa mengunci harga |
| B-010 | A-074 InterviewKu AI | ready | Chat, posisi tujuan, maksimal pertanyaan, hasil, dan privasi dijelaskan |
| B-010 | A-075 InterviewKu Pakar | ready | Sesi 30 menit, slot, CV opsional, consent, dan pembatalan dijelaskan |
| B-010 | A-076 TesVerbalKu | ready | Matdas Lisan dan Public Speaking dipisahkan; bukan AI dan tidak direkam |
| B-010 | A-077 Persiapan Matdas Lisan | ready | Contoh sintetis melatih proses hitung dan penjelasan verbal |
| B-010 | A-078 Latihan Public Speaking | ready | PREP, alur pengalaman, waktu, feedback, dan batas non-terapi dijelaskan |
| B-011 | A-079 Room seleksi Mitra | ready | Tujuan, modul, kode, status peserta, hasil, dan privasi tenant dijelaskan |
| B-011 | A-080 Lowongan Mitra | ready | Posisi, kualifikasi, consent, satu lamaran, dan kewaspadaan data dijelaskan |
| B-011 | A-081 Ajak Teman | ready | Syarat akun baru, tes eligible, hold, expiry, dan privasi dijelaskan |
| B-011 | A-082 Status leaderboard Ajak Teman | ready | Status pemeriksaan dijelaskan sebagai ringkasan, bukan vonis |
| B-011 | A-083 Hadiah | ready | Kirim, minta, bayar, klaim, blokir, dan batas package dijelaskan |
| B-011 | A-084 Perbedaan program referral | ready | Ajak Teman, Partner, dan BKK dibandingkan tanpa membuka data peserta |
| B-011 | A-085 PIC dan Peserta BKK | ready | Jenis kode, consent, benefit, dan batas akses dibedakan |
| B-011 | A-086 Memilih paket credit | ready | Target, frekuensi, saldo terpisah, free practice, dan harga live dijelaskan |
| B-011 | A-087 Status pembayaran | ready | Pending, Berhasil, Failed, Expired, provider unavailable, dan retry aman dijelaskan |
| B-011 | A-088 Preferensi email | ready | Marketing dipisahkan dari email keamanan, payment, dan layanan |
| B-011 | A-089 Penghapusan akun | ready | Masa tunggu, blocker, credit, data privat, dan histori dipaparkan proporsional |
| B-011 | A-090 Updates produk | ready | Cara membaca update bertanggal, CTA, dan batas klaim dijelaskan |
| B-012 | A-091 Search Panduan | ready | Pagefind build-time, CDN, browser search, fallback dev, dan privasi dijelaskan |
| B-012 | A-092 Etika latihan | ready | Hak cipta, data sintetis, AI, room, dan fair play dijelaskan |
| B-012 | A-093 Belajar numerik | ready | Fondasi, urutan konsep, log kesalahan, dan progres bertahap dijelaskan |
| B-012 | A-094 Penalaran verbal | ready | Ide utama, hubungan, pembatas, dan kesimpulan dilatih tanpa kisi-kisi |
| B-012 | A-095 Penalaran figural | ready | Observasi ciri, aturan sederhana, timer, dan batas non-diagnosis dijelaskan |
| B-012 | A-096 Fokus visual | ready | Pemindaian, jeda, ergonomi, kondisi, dan evaluasi perilaku dijelaskan |
| B-012 | A-097 Manajemen waktu | ready | Instruksi, ritme, checkpoint, timer, dan fair play dijelaskan |
| B-012 | A-098 Metode STAR | ready | Situation, Task, Action, Result memakai pengalaman autentik |
| B-012 | A-099 Mitos ATS | ready | Skor universal ditolak; struktur, teks, keyword, dan bukti dijelaskan |
| B-012 | A-100 Rencana 30 hari | ready | Psikotes, CV, STAR, interview, recovery, dan batas hasil disusun bertahap |

## Catatan Sesi

### 2026-08-28

- User memberi izin eksplisit untuk mulai.
- Goal editorial diaktifkan secara operasional dari checkpoint ini.
- Pagefind sudah dipasang sebagai search statis. Kueri berjalan di browser dan
  indeks dilayani CDN tanpa Worker/API per pencarian.
- Margin mobile sudah dinaikkan dari `0.75rem` menjadi `1rem` per sisi.
- Koreksi fakta: seluruh route free practice membutuhkan login, tetapi tidak
  memakai credit. Klaim lama "tanpa akun" tidak boleh dipakai.
- Global rank Kraepelin bukan rank Battle. Peringkat Battle dilihat pada room
  terkait dan nama/posisinya tidak dibekukan dalam artikel.
- Batch B-001 menambah 6 artikel sehingga repo memiliki 16 artikel publik.
- Batch B-002 menambah 7 artikel sehingga repo memiliki 23 artikel publik.
- Batch B-003 menambah 7 artikel sehingga repo memiliki 30 artikel publik.
- B-003 menutup intent A-022 sampai A-025 serta A-028 sampai A-030. Istilah
  teknis internal dibuang agar artikel tetap manusia-first dan aman untuk publik.
- B-003 memakai sumber yang sudah tercatat, yaitu SRC-010, SRC-016, SRC-017,
  dan F-007; tidak ada sumber baru yang perlu ditambahkan ke ledger.
- QA source B-003 lulus untuk frontmatter, panjang metadata, judul/description
  unik, kategori, CTA, 22 tautan internal, target slug, pola email/telepon, dan
  istilah internal. Build, test, dan lint tetap belum dijalankan.
- Batch B-004 menambah 8 artikel Matdas sehingga repo memiliki 38 artikel.
- QA source B-004 lulus untuk frontmatter, metadata unik, kategori, CTA, panjang
  artikel, 21 tautan internal, target slug, pola PII, dan istilah internal.
- Verifikasi live tambahan memastikan `/matdas/rank`, `/tiu/rank`,
  `/ketelitian/rank`, `/profile`, `/tes-verbalku/matdas`,
  `/tes-verbalku/public-speaking`, `/account`, `/purchase/orders`,
  `/account/email-preferences`, dan `/account/deletion` merespons HTTP 200.
- Batch B-005 menambah 8 artikel TIU/CFIT sehingga repo memiliki 46 artikel.
- QA source B-005 lulus untuk frontmatter, metadata unik, kategori, CTA, panjang
  artikel, 21 tautan internal, target slug, pola PII, dan istilah internal.
- Batch B-006 menambah 6 artikel Ketelitian sehingga repo memiliki 52 artikel.
- QA source B-006 lulus untuk frontmatter, metadata unik, kategori, CTA, panjang
  artikel, 21 tautan internal, target slug, pola PII, dan istilah internal.
- Batch B-007 menambah 5 artikel Wartegg sehingga repo memiliki 57 artikel.
- QA source B-007 lulus untuk metadata, kategori, CTA, panjang artikel, 11 tautan
  internal, target slug, pola PII, dan istilah internal. Artikel tidak memuat
  foto, data peserta, interpretasi kepribadian, atau diagnosis.
- Batch B-008 menambah 5 artikel CPNS sehingga repo memiliki 62 artikel.
- QA source B-008 lulus untuk status belum aktif, metadata, CTA, panjang artikel,
  20 tautan internal, target slug, pola PII, dan istilah internal. Tidak ada
  tanggal rilis, harga, atau aturan siklus baru yang diklaim pasti.
- Batch B-009 menambah 8 artikel Karier 31 sehingga repo memiliki 70 artikel.
- QA source B-009 lulus untuk frontmatter, metadata unik, kategori, CTA HTTPS,
  22 tautan internal, target slug, panjang artikel, pola PII, dan istilah
  internal. Harga, slot, serta benefit volatil diarahkan ke katalog live.
- B-009 menegaskan bahwa program tidak menjamin pekerjaan, akses program bukan
  credit reguler, Karier Digital terpisah, CV privat memakai consent, dan laporan
  tidak menjadi prediksi hasil rekrutmen.
- Batch B-010 menambah 8 artikel CVKu, InterviewKu, dan TesVerbalKu sehingga repo
  memiliki 78 artikel.
- QA source B-010 lulus untuk frontmatter, metadata unik, kategori, CTA HTTPS,
  18 tautan internal, target slug, panjang artikel, pola PII, dan istilah
  internal. Build, test, dan lint tetap belum dijalankan.
- Ledger CVKu Pakar dikoreksi dari rujukan InterviewKu ke source publik
  `ExpertCVReviewScreen.tsx` dan route live `/cv-review/expert`.
- Batch B-011 menambah 12 artikel Mitra, referral, Hadiah, pembayaran, email,
  penghapusan akun, dan Updates sehingga repo memiliki 90 artikel.
- QA source B-011 lulus untuk frontmatter, metadata unik, kategori valid, CTA
  HTTPS, 27 tautan internal, target slug, panjang artikel, pola PII, dan istilah
  internal. Konten leaderboard, referral, gift, BKK, dan lifecycle tidak membuka
  identitas atau detail operasional sensitif.
- Batch B-012 menambah 10 artikel gap filler manusia-first sehingga repo tepat
  memiliki 100 artikel.
- QA source B-012 lulus untuk frontmatter, metadata unik, kategori, CTA HTTPS,
  21 tautan internal, target slug, panjang artikel, pola PII, dan istilah internal.
- Audit global source-only mencocokkan 100 ID map dengan 100 file, seluruh status
  menjadi `existing` atau `ready`, judul dan description unik, 243 internal link
  valid, body minimum 357 kata, CTA HTTPS, kategori valid, dan tidak menemukan
  pola email/telepon atau istilah internal terlarang.
- Sepuluh artikel pilar awal diberi internal link agar tidak menjadi halaman
  buntu. CPNS tetap selalu disebut belum dibuka untuk publik; harga, promo, slot,
  rank, dan benefit volatil diarahkan ke halaman live.
- `git diff --check` sudah dijalankan sebagai pemeriksaan whitespace. Build,
  test, dan lint lokal tetap diserahkan kepada user sesuai aturan repo;
  publikasi production menggunakan integrasi Git Cloudflare.
- B-002 memakai sumber baru SRC-032 sampai SRC-035 untuk history, room entry,
  credit, dan pengalaman mobile/PWA.
- Route auth yang dipakai CTA B-002 (`/dashboard`, `/credits`, `/history`) sudah
  diverifikasi merespons HTTP 200 sebagai shell; data akun tetap memerlukan login.
- QA source B-001 lulus untuk panjang metadata, kategori, CTA, internal link,
  pola email/telepon, dan intent duplikat.
- Detector Impeccable untuk search, header, layout, dan CSS mengembalikan `[]`.
- Status produksi di `ARTICLE_MAP.md` sudah diselaraskan dengan penyelesaian
  A-011 sampai A-100; tidak ada batch editorial yang masih tertulis sebagai
  pekerjaan berikutnya.
- Dev server tidak sedang aktif. Build, test, dan lint lokal belum dijalankan
  sesuai aturan repo.
