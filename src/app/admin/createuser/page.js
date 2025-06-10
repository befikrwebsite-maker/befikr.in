// pages/admin/index.js

'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function AdminPanel() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return router.push("/login");

    axios.get("http://localhost/api/verify_token.php", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      if (res.data.user.role !== "admin") throw new Error();
      setAuth(res.data.user);
    })
    .catch(() => router.push("/login"));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    await axios.post("http://localhost/api/create_user.php", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("User Created");
  };

  if (!auth) return <div>Loading...</div>;

  return (
    <div>
      <h2>Welcome, Admin</h2>
      <form onSubmit={handleCreate}>
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button>Create User</button>
      </form>
    </div>
  );
}
