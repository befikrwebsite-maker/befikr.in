
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "Reverse Logistics",
  "audit": "Reverse Logistics Audit",
  "auditdesc": [],
  "image": "",
  "imageScope": "",
  "ArrayAppr": [],
  "ArraySupp": [],
  "scope": ""
};
  return (
    <>
      <Navbar />
      <ServiceTemplate {...props} />
      <Footer />
    </>
  );
}
