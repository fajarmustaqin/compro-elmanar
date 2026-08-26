"use client";

import { FormEvent, useEffect, useState } from "react";

type Item = {
  id?: number;
  name: string;
  logoUrl: string;
  sortOrder: number;
};

const blank: Item = { name: "", logoUrl: "", sortOrder: 0 };

export default function AdminPartnersPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<Item>(blank);
  const [editingId, setEditingId] = useState<number | null>(null);

  async function load() {
    const res = await fetch("/api/admin/partners");
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
      ? { ...form, id: editingId, logoUrl: form.logoUrl || null }
      : { ...form, logoUrl: form.logoUrl || null };
    const res = await fetch("/api/admin/partners", {
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
    if (!confirm("Hapus partner?")) return;
    await fetch(`/api/admin/partners?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0a3d2e]">Partner</h2>
      <p className="mt-1 text-sm text-[#5c6b64]">Daftar partner & klien</p>

      <form onSubmit={onSubmit} className="mt-6 flex max-w-3xl flex-wrap gap-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <input
          placeholder="Nama partner"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="min-w-[200px] flex-1 rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <input
          placeholder="URL logo (opsional)"
          value={form.logoUrl}
          onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
          className="min-w-[200px] flex-1 rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <input
          type="number"
          placeholder="Urutan"
          value={form.sortOrder}
          onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
          className="w-24 rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
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
      </form>

      <div className="mt-6 overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-[#f8faf9] text-xs uppercase text-[#5c6b64]">
            <tr>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Urutan</th>
              <th className="px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.sortOrder}</td>
                <td className="px-4 py-3">
                  <button
                    className="mr-3 text-[#0a3d2e] hover:underline"
                    onClick={() => {
                      setEditingId(item.id!);
                      setForm({
                        name: item.name,
                        logoUrl: item.logoUrl || "",
                        sortOrder: item.sortOrder,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline" onClick={() => remove(item.id!)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
