"use client";

import { FormEvent, useEffect, useState } from "react";

type Unit = {
  id?: number;
  title: string;
  desc: string;
  image: string;
  sortOrder: number;
  isActive: boolean;
};

const blank: Unit = {
  title: "",
  desc: "",
  image: "",
  sortOrder: 0,
  isActive: true,
};

export default function AdminBusinessUnitsPage() {
  const [items, setItems] = useState<Unit[]>([]);
  const [form, setForm] = useState<Unit>(blank);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [msg, setMsg] = useState("");

  async function load() {
    const res = await fetch("/api/admin/business-units");
    const data = await res.json();
    if (Array.isArray(data)) setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const body = editingId ? { ...form, id: editingId } : form;
    const res = await fetch("/api/admin/business-units", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setMsg(res.ok ? "Tersimpan" : "Gagal");
    if (res.ok) {
      setForm(blank);
      setEditingId(null);
      load();
    }
  }

  async function remove(id: number) {
    if (!confirm("Hapus unit bisnis ini?")) return;
    await fetch(`/api/admin/business-units?id=${id}`, { method: "DELETE" });
    load();
  }

  function edit(item: Unit) {
    setEditingId(item.id!);
    setForm({
      title: item.title,
      desc: item.desc,
      image: item.image,
      sortOrder: item.sortOrder,
      isActive: item.isActive,
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0a3d2e]">Unit Bisnis</h2>
      <p className="mt-1 text-sm text-[#5c6b64]">Tambah / edit layanan di website</p>

      <form
        onSubmit={onSubmit}
        className="mt-6 grid max-w-3xl gap-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
      >
        <input
          placeholder="Judul"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Deskripsi"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          required
          rows={3}
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <input
          placeholder="URL gambar"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          required
          className="rounded-lg border border-black/10 px-3 py-2 text-sm"
        />
        <div className="flex flex-wrap items-center gap-4">
          <label className="text-sm">
            Urutan{" "}
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
              onClick={() => {
                setEditingId(null);
                setForm(blank);
              }}
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Batal
            </button>
          )}
          {msg && <span className="self-center text-sm text-[#5c6b64]">{msg}</span>}
        </div>
      </form>

      <div className="mt-6 overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-[#f8faf9] text-xs uppercase text-[#5c6b64]">
            <tr>
              <th className="px-4 py-3">Judul</th>
              <th className="px-4 py-3">Urutan</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{item.title}</td>
                <td className="px-4 py-3">{item.sortOrder}</td>
                <td className="px-4 py-3">{item.isActive ? "Aktif" : "Nonaktif"}</td>
                <td className="px-4 py-3">
                  <button onClick={() => edit(item)} className="mr-3 text-[#0a3d2e] hover:underline">
                    Edit
                  </button>
                  <button onClick={() => remove(item.id!)} className="text-red-600 hover:underline">
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
