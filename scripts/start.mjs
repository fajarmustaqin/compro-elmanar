import { spawnSync } from "node:child_process";

if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.trim()) {
  process.env.DATABASE_URL = "file:/data/prod.db";
}

function run(cmd, args) {
  const result = spawnSync(cmd, args, {
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("npx", ["prisma", "migrate", "deploy"]);
run("npx", ["next", "start"]);
