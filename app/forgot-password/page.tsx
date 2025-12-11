"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md border rounded-lg p-6 shadow bg-white">
        <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
        <p className="text-sm mb-4">
          Enter your email and we will send you a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#800000] text-white py-2 rounded hover:bg-[#600000]"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </main>
  );
}
