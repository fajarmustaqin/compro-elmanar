/** Ensure Prisma always has a SQLite URL (Railway-friendly default). */
export function ensureDatabaseUrl() {
  if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.trim()) {
    process.env.DATABASE_URL = "file:/data/prod.db";
  }
}
