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

  const closePage = () => {
    window.history.back();
  }

  return (
    <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 space-y-6">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-center text-[#04B2D9]">Welcome, Admin</h2>
        <button
          onClick={() => closePage()}
          type="button"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 mb-8 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-companyBlue"
          aria-label="Close Filters"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>


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
