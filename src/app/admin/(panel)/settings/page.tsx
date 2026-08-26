"use client";

import { FormEvent, useEffect, useState } from "react";

type Setting = {
  companyName: string;
  tagline: string;
  about: string;
  vision: string;
  directorName: string;
  directorTitle: string;
  directorMessage: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  whatsapp: string;
};

const empty: Setting = {
  companyName: "",
  tagline: "",
  about: "",
  vision: "",
  directorName: "",
  directorTitle: "",
  directorMessage: "",
  phone: "",
  email: "",
  website: "",
  address: "",
  whatsapp: "",
};

export default function AdminSettingsPage() {
  const [form, setForm] = useState<Setting>(empty);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data && !data.error) setForm({ ...empty, ...data });
      })
      .finally(() => setLoading(false));
  }, []);

  function set(key: keyof Setting, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("Menyimpan...");
    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "Tersimpan" : "Gagal menyimpan");
  }

  if (loading) return <p className="text-sm text-[#5c6b64]">Memuat...</p>;

  const fields: { key: keyof Setting; label: string; textarea?: boolean }[] = [
    { key: "companyName", label: "Nama Perusahaan" },
    { key: "tagline", label: "Tagline" },
    { key: "about", label: "Tentang Kami", textarea: true },
    { key: "vision", label: "Visi", textarea: true },
    { key: "directorName", label: "Nama Direktur" },
    { key: "directorTitle", label: "Jabatan Direktur" },
    { key: "directorMessage", label: "Sambutan Direktur", textarea: true },
    { key: "phone", label: "Telepon" },
    { key: "email", label: "Email" },
    { key: "website", label: "Website" },
    { key: "address", label: "Alamat", textarea: true },
    { key: "whatsapp", label: "Link WhatsApp" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0a3d2e]">Pengaturan</h2>
      <p className="mt-1 text-sm text-[#5c6b64]">Profil perusahaan & kontak</p>

      <form onSubmit={onSubmit} className="mt-6 max-w-3xl space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="mb-1 block text-sm font-medium">{f.label}</label>
            {f.textarea ? (
              <textarea
                value={form[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c9a24a]"
              />
            ) : (
              <input
                value={form[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#c9a24a]"
              />
            )}
          </div>
        ))}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-[#0a3d2e] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d4f3a]"
          >
            Simpan
          </button>
          {status && <span className="text-sm text-[#5c6b64]">{status}</span>}
        </div>
      </form>
    </div>
  );
}
