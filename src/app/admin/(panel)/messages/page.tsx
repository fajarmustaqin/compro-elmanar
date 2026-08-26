"use client";

import { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: string;
  isRead: boolean;
};

export default function AdminMessagesPage() {
  const [items, setItems] = useState<Message[]>([]);

  async function load() {
    const res = await fetch("/api/admin/messages");
    const data = await res.json();
    if (Array.isArray(data)) setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function toggleRead(item: Message) {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, isRead: !item.isRead }),
    });
    load();
  }

  async function remove(id: number) {
    if (!confirm("Hapus pesan ini?")) return;
    await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#0a3d2e]">Pesan Masuk</h2>
      <p className="mt-1 text-sm text-[#5c6b64]">
        Dari form kontak website ({items.filter((i) => !i.isRead).length} belum dibaca)
      </p>

      <div className="mt-6 space-y-3">
        {items.length === 0 && (
          <div className="rounded-xl bg-white p-8 text-center text-sm text-[#5c6b64] shadow-sm ring-1 ring-black/5">
            Belum ada pesan.
          </div>
        )}
        {items.map((item) => (
          <article
            key={item.id}
            className={`rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 ${
              item.isRead ? "opacity-80" : "ring-[#c9a24a]/60"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-[#0a3d2e]">{item.name}</h3>
                  {!item.isRead && (
                    <span className="rounded-full bg-[#c9a24a]/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#8a6a1f]">
                      Baru
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-[#5c6b64]">
                  {item.email}
                  {item.phone ? ` · ${item.phone}` : ""} ·{" "}
                  {new Date(item.createdAt).toLocaleString("id-ID")}
                </p>
                <p className="mt-3 whitespace-pre-wrap text-sm text-[#1a2e26]">{item.message}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <button onClick={() => toggleRead(item)} className="text-[#0a3d2e] hover:underline">
                  {item.isRead ? "Tandai belum dibaca" : "Tandai dibaca"}
                </button>
                <button onClick={() => remove(item.id)} className="text-red-600 hover:underline">
                  Hapus
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
