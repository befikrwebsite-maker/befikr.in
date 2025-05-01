
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "CSR Services",
  "audit": "CSR Audit",
  "auditdesc": [
    "Businesses adopt Corporate Social Responsibility (CSR) activities to behave as ethical and responsible corporate organisations. Through CSR activities, organisations deliver last-mile benefits to different stakeholders of society & value to the stakeholders.",
    "As an essential part of India's quest for development, inclusive growth is widely recognised reiterating a firm’s commitment to include those sections of society in the growth process which had hitherto remained excluded from the mainstream of development. In line with this national endeavour, CSR is an instrument for integrating social, environmental and human development concerns in the entire value chain of corporate business.",
    "Profitable businesses have constitutionalised self-regulatory mechanisms to socially contribute to specific sectors of priority & interest to the business group. A well-thought-of CSR initiative eventually benefits the society & the country at large, magnifying various efforts from the government, NGOs as well as the private sector, thus creating a visible impact in the social frame of a country.",
    "At befikr, as an ESG services company, we assist businesses in achieving their social goals (environmental, philanthropic, socio-economic) through sustainable CSR initiatives."
  ],
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
