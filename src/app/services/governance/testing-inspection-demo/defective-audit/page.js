
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "Defective Audit",
  "audit": "Defective Product Audit",
  "auditdesc": [
    "A defective product audit service typically involves inspecting, evaluating, and documenting products that fail to meet quality standards or have defects within their promised warranty period.",
    "This service is valuable for businesses that would like to be:",
    "1)\tfair to the consumers by evaluating the genuineness of defective claims within warranty and settling them basis service levels committed while selling the products.",
    "2)\taids the entire supply chain credibility including distributors, dealers and retailers through which the product was sold.",
    "3)\tproactive in identifying quality issues in their products, understanding the root causes of defects, and improving product quality avoiding subsequent product quality issues.",
    "At befikr, as an ESG services company, we provide product testing, inspection & defective audit services for brands facing consumers thus helping companies run well-governed ensuring Corporate Governance protocols are well followed."
  ],
  "image": "",
  "imageScope": "",
  "ArrayAppr": [
    {
      "title": "Step 1",
      "desc": "Setting clear criteria for what constitutes a defect (e.g., functional issues, cosmetic defects, safety concerns); and preparing the team to conduct inspections based on these criteria."
    },
    {
      "title": "Step 2",
      "desc": "Physical inspection: Checking the products for visible defects, such as damaged packaging, faulty components, or incomplete manufacturing processes."
    },
    {
      "title": "Step 3",
      "desc": "Functional inspection: Ensuring that products work as intended (for example, testing electronics, mechanical devices, etc.)."
    },
    {
      "title": "Step 4",
      "desc": "Recording findings in detailed reports, which include photographs, descriptions, and categorization of defects."
    },
    {
      "title": "Step 5",
      "desc": "Providing a comprehensive report to the client, which includes the number and type of defects found, any trends or patterns, and recommendations for improvement."
    }
  ],
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
