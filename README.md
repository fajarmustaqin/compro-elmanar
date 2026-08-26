# Elmanar Indonesia Group — Company Profile

Website company profile one-page dengan **Next.js + SQLite (Prisma)** + **Admin UI**.

## Setup

```bash
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Admin Panel (Backend UI)

Buka: **http://localhost:3000/admin**

Password default: `admin123`  
Atur di `.env.local`:

```
ADMIN_PASSWORD=admin123
ADMIN_SECRET=ganti-dengan-string-acak
```

Fitur:
- Dashboard ringkas
- Edit pengaturan perusahaan & kontak
- CRUD Unit Bisnis, Testimoni, Partner
- Lihat / tandai / hapus pesan form kontak

## Stack

- Next.js (App Router)
- Tailwind CSS
- SQLite via Prisma (`prisma/dev.db`)
- Cookie auth untuk `/admin`

## API

- `GET /api/content` — konten website
- `POST /api/contact` — kirim pesan kontak
- `/api/admin/*` — API admin (butuh login)

## Database commands

| Command | Fungsi |
|---|---|
| `npm run db:migrate` | Buat/apply migration |
| `npm run db:seed` | Isi data awal |
| `npm run db:studio` | Buka Prisma Studio |
| `npm run db:push` | Sync schema tanpa migration |
