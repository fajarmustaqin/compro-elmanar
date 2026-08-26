# Deploy ke Railway (gratis / trial)

Project ini Next.js + SQLite. Di Railway, SQLite **wajib pakai Volume** supaya data tidak hilang saat redeploy.

## 1. Persiapan GitHub
Pastikan kode sudah di-push (termasuk `railway.json` dan script `start` yang menjalankan migrate).

## 2. Buat project di Railway
1. Buka [https://railway.app](https://railway.app) → login dengan GitHub
2. **New Project** → **Deploy from GitHub repo**
3. Pilih repo `compro-bagus`
4. Tunggu build selesai (boleh gagal dulu kalau env belum diisi)

## 3. Environment Variables
Di service → **Variables**, isi:

```
DATABASE_URL=file:/data/prod.db
ADMIN_PASSWORD=password-aman-kamu
ADMIN_SECRET=string-acak-panjang
NODE_ENV=production
```

## 4. Tambah Volume (penting untuk SQLite)
1. Di service → **Settings** → **Volumes** (atau tab Volumes)
2. **Add Volume**
3. Mount path: `/data`
4. Redeploy

Tanpa volume, database bisa kosong lagi tiap restart.

## 5. Generate domain
1. **Settings** → **Networking** → **Generate Domain**
2. Nanti dapat URL seperti `https://xxx.up.railway.app`

## 6. Seed data awal (sekali saja)
Setelah deploy sukses, buka **Railway shell / one-off command**:

```bash
npm run db:seed
```

Atau dari lokal (kalau sudah set DATABASE_URL remote — biasanya cukup jalankan di Railway shell).

## 7. Cek
- Website: `https://xxx.up.railway.app`
- Admin: `https://xxx.up.railway.app/admin`
- Login pakai `ADMIN_PASSWORD` yang kamu set

## Catatan free tier
- Railway sering kasih **trial credit**, bukan forever unlimited
- Pantau usage di dashboard
- Kalau credit habis, service bisa pause

## Troubleshooting
| Masalah | Solusi |
|---|---|
| Build gagal `better-sqlite3` | Redeploy; Nixpacks biasanya compile native otomatis |
| Admin kosong / error DB | Cek `DATABASE_URL=file:/data/prod.db` + Volume `/data` |
| Konten kosong | Jalankan `npm run db:seed` sekali |
| Password admin tidak jalan | Pastikan Variables sudah di-save lalu **Redeploy** |
