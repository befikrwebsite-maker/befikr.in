'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://befikr.in/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("jwt", data.token);
      router.push("/admin");
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-xl rounded-2xl p-8 space-y-6">
  <h2 className="text-3xl font-bold text-center text-[#04B2D9]">Admin Login</h2>

  <form onSubmit={handleLogin} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9]"
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-[#04B2D9] text-white font-semibold rounded-lg hover:bg-[#0398b8] transition duration-200"
    >
      Login
    </button>
  </form>
</div>

  );
}
