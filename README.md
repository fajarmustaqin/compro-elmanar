# Elmanar Indonesia Group — Company Profile

Website company profile one-page dengan **Next.js + SQLite (Prisma)**.

## Setup

```bash
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router)
- Tailwind CSS
- **SQLite** via Prisma (`prisma/dev.db`)
- API Routes: `/api/content`, `/api/contact`

## Database commands

| Command | Fungsi |
|---|---|
| `npm run db:migrate` | Buat/apply migration |
| `npm run db:seed` | Isi data awal |
| `npm run db:studio` | Buka Prisma Studio (GUI edit data) |
| `npm run db:push` | Sync schema tanpa migration |

## API

- `GET /api/content` — semua konten site dari SQLite
- `POST /api/contact` — simpan pesan form kontak `{ name, email, phone?, message }`
- `GET /api/contact` — daftar pesan masuk (sementara tanpa auth)

File database: `prisma/dev.db` (lokal, gratis).
