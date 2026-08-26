import { Suspense } from "react";
import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a3d2e] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="text-center text-[10px] font-semibold tracking-[0.22em] text-[#c9a24a]">
          ELMANAR INDONESIA GROUP
        </p>
        <h1 className="mt-2 text-center text-2xl font-semibold text-[#0a3d2e]">
          Admin Login
        </h1>
        <p className="mt-2 text-center text-sm text-[#5c6b64]">
          Masuk untuk mengelola konten website
        </p>
        <div className="mt-6">
          <Suspense fallback={<p className="text-sm text-center">Memuat...</p>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
