
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "E-Waste Management",
  "audit": "E-Waste Audit",
  "auditdesc": [
    "E-waste management services handle the responsible disposal and recycling of electronic waste. These services include collection, sorting, and processing of e-waste, ensuring proper management and recovery of valuable resources. They also offer data destruction and asset refurbishment. ",
    "At befikr, as an ESG services company, we provide e-waste management services for businesses, helping them achieve their environmental goals while protecting both people and the planet through efficient e-waste management services."
  ],
  "image": "",
  "imageScope": "",
  "ArrayAppr": [
    {
      "title": "Collection and Pickup",
      "desc": "Services offer convenient collection for businesses and households, ensuring safe transportation.",
      "image": ""
    },
    {
      "title": "Sorting and Processing",
      "desc": "E-waste is sorted to separate valuable materials and hazardous substances.",
      "image": ""
    },
    {
      "title": "Data Destruction",
      "desc": "Secure data deletion of hard drives from computers, laptops, and servers is provided to protect confidential information.",
      "image": ""
    },
    {
      "title": "Asset Refurbishment",
      "desc": "Repairing and restoring electronic devices to extend their lifespan.",
      "image": ""
    },
    {
      "title": "Recycling",
      "desc": "Extracting valuable components like metals and plastics from e-waste for reuse and repurposing.",
      "image": ""
    },
    {
      "title": "Disposal",
      "desc": "Safe and environmentally responsible disposal of non-recyclable materials.",
      "image": ""
    }
  ],
  "ArraySupp": [
    {
      "desc": "Environmental Protection: Reduces the amount of hazardous materials ending up in landfills and water bodies."
    },
    {
      "desc": "Resource Conservation: Recovers valuable materials like gold, silver, and copper."
    },
    {
      "desc": "Energy Conservation: Requires less energy than mining new resources."
    },
    {
      "desc": "Job Creation: Creates jobs in collection, sorting, and processing."
    },
    {
      "desc": "Economic Benefits: Generates revenue through recovered materials."
    }
  ],
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
