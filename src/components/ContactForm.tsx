"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "Gagal mengirim pesan");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Tidak bisa terhubung ke server");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3">
      <input
        name="name"
        required
        placeholder="Nama lengkap"
        className="w-full rounded-md border border-green-800/15 bg-white px-3 py-2.5 text-sm outline-none ring-gold-400 focus:ring-2"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-md border border-green-800/15 bg-white px-3 py-2.5 text-sm outline-none ring-gold-400 focus:ring-2"
      />
      <input
        name="phone"
        placeholder="No. WhatsApp (opsional)"
        className="w-full rounded-md border border-green-800/15 bg-white px-3 py-2.5 text-sm outline-none ring-gold-400 focus:ring-2"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Pesan Anda"
        className="w-full resize-y rounded-md border border-green-800/15 bg-white px-3 py-2.5 text-sm outline-none ring-gold-400 focus:ring-2"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full uppercase tracking-wider disabled:opacity-60"
      >
        {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
      </button>
      {status === "ok" && (
        <p className="text-sm text-green-700">Pesan tersimpan. Tim kami akan menghubungi Anda.</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
