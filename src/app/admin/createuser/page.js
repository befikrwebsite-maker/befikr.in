'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const router = useRouter();
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) return router.push("/admin/login");

        fetch("http://befikr.in/verify_token.php", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(async (res) => {
                if (!res.ok) throw new Error();
                const data = await res.json();
                if (data.user.role !== "admin") throw new Error();
                setAuth(data.user);
            })
            .catch(() => router.push("/admin/login"));
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("jwt");
        await fetch("http://befikr.in/create_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(form),
        });
        alert("User Created");
    };

    if (!auth) return <div>Loading...</div>;

    return (
      <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 space-y-6">
  <h2 className="text-3xl font-bold text-center text-[#04B2D9]">Welcome, Admin</h2>

  <form onSubmit={handleCreate} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9]"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9]"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9]"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-[#04B2D9] text-white font-semibold rounded-lg hover:bg-[#0398b8] transition duration-200"
    >
      Create User
    </button>
  </form>
</div>

    );
}
