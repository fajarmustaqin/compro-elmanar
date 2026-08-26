"use client";

import { FormEvent, useEffect, useState } from "react";

type Item = {
  id?: number;
  name: string;
  role: string;
  message: string;
  avatarUrl: string;
  sortOrder: number;
  isActive: boolean;
};

const blank: Item = {
  name: "",
  role: "",
  message: "",
  avatarUrl: "",
  sortOrder: 0,
  isActive: true,
};

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<Item>(blank);
  const [editingId, setEditingId] = useState<number | null>(null);

  async function load() {
    const res = await fetch("/api/admin/testimonials");
    const data = await res.json();
    if (Array.isArray(data)) setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const body = editingId
      ? { ...form, id: editingId, avatarUrl: form.avatarUrl || null }
      : { ...form, avatarUrl: form.avatarUrl || null };
    const res = await fetch("/api/admin/testimonials", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setForm(blank);
      setEditingId(null);
      load();
    }
  }

  async function remove(id: number) {
    if (!confirm("Hapus testimoni?")) return;
    await fetch(`/api/admin/testimonials?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0a3d2e]">Testimoni</h2>
      <p className="mt-1 text-sm text-[#5c6b64]">Kelola review klien</p>

      <form onSubmit={onSubmit} className="mt-6 grid max-w-3xl gap-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <input
          placeholder="Nama"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <input
          placeholder="Peran / keterangan"
          required
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Pesan testimoni"
          required
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <input
          placeholder="URL avatar (opsional)"
          value={form.avatarUrl}
          onChange={(e) => setForm({ ...form, avatarUrl: e.target.value })}
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <div className="flex flex-wrap gap-4">
          <label className="text-sm">
            Urutan
            <input
              type="number"
              value={form.sortOrder}
              onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
              className="ml-2 w-20 rounded border border-black/10 px-2 py-1"
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
            />
            Aktif
          </label>
        </div>
        <div className="flex gap-2">
          <button type="submit" className="rounded-lg bg-[#0a3d2e] px-4 py-2 text-sm font-semibold text-white">
            {editingId ? "Update" : "Tambah"}
          </button>
          {editingId && (
            <button
              type="button"
              className="rounded-lg border px-4 py-2 text-sm"
              onClick={() => {
                setEditingId(null);
                setForm(blank);
              }}
            >
              Batal
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-[#0a3d2e]">{item.name}</p>
                <p className="text-xs text-[#5c6b64]">{item.role}</p>
                <p className="mt-2 text-sm text-[#1a2e26]">&ldquo;{item.message}&rdquo;</p>
              </div>
              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => {
                    setEditingId(item.id!);
                    setForm({
                      name: item.name,
                      role: item.role,
                      message: item.message,
                      avatarUrl: item.avatarUrl || "",
                      sortOrder: item.sortOrder,
                      isActive: item.isActive,
                    });
                  }}
                  className="text-[#0a3d2e] hover:underline"
                >
                  Edit
                </button>
                <button onClick={() => remove(item.id!)} className="text-red-600 hover:underline">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
