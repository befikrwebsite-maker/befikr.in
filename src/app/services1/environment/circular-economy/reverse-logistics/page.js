
'use client';
import { useEffect, useState } from 'react';
import ServiceTemplate from '@/services/components/ModifTemp';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://befikr.in/get_service_by_slug.php?slug=/services/environment/circular-economy/reverse-logistics")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load service:", err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading service details...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ServiceTemplate
        placeholder={data.service_name}
        audit={data.service_name}
        sections={data.sections || []}
      />
      <Footer />
    </>
  );
}
