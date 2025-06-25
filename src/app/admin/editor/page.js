'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ServiceTemplateEditor from '../comp/ServiceEditTemplate';

export default function EditorPage() {

  // Check authentication
  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (!token) {
  //     router.push("/admin/login");
  //     return;
  //   }

  //   fetch("http://befikr.in/verify_token.php", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.user?.role !== "admin") {
  //         router.push("/admin/login");
  //       } else {
  //         setAuth(data.user);
  //         setLoading(false);
  //       }
  //     })
  //     .catch(() => router.push("/admin/login"));
  // }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <ServiceTemplateEditor />
    </DndProvider>
  );
}
