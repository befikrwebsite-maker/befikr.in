'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ServiceTemplateEditor from '../comp/ServiceEditor';
import AdminNavbar from '../comp/AdminNavbar';
import { useEffect, useState } from 'react';

export default function EditorPage() {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    fetch("http://befikr.in/verify_token.php", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.role !== "admin") {
          router.push("/admin/login");
        } else {
          setAuth(data.user);
          setLoading(false);
        }
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  return (
    <>
    <header>
      <AdminNavbar />
    </header>
      <DndProvider backend={HTML5Backend}>
        <ServiceTemplateEditor />
      </DndProvider>
    </>
  );
}
