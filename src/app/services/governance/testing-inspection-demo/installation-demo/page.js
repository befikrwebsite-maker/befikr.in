
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "Installation Demo",
  "audit": "Installation Demo Audit",
  "auditdesc": [
    "Installation and demo services for consumer products offer a comprehensive approach to ensuring a smooth and satisfying customer experience. These services typically include professional installation and demos of the product. The service also demonstrates the product’s features and settings, helping customers understand and use its capabilities.",
    "At befikr, as an ESG services company, we provide installation & demo services for consumer brand businesses, helping them achieve their governance goals."
  ],
  "image": "",
  "imageScope": "",
  "ArrayAppr": [
    {
      "title": "Professional Installation",
      "desc": "This involves correctly mounting or placing the product (like a washing machine, dishwasher, refrigerator, etc) and connecting it to the necessary devices."
    },
    {
      "title": "Product Demonstration",
      "desc": "Our befikr BROTHER will guide the customer through the product's features, settings, and functionalities, ensuring they understand how to use it effectively."
    },
    {
      "title": "Troubleshooting and Assistance",
      "desc": "The service may include troubleshooting any initial issues."
    },
    {
      "title": "Optional Add-ons",
      "desc": "Some services may offer additional features like warranty extension, sale of respective product accessories."
    }
  ],
  "ArraySupp": [
    {
      "title": "Peace of mind",
      "desc": "Knowing that the product is installed correctly and set up properly can alleviate the stress and potential issues associated with DIY installation."
    },
    {
      "title": "Expert guidance",
      "desc": "A professional can ensure the product is used effectively and answer any initial questions or concerns."
    },
    {
      "title": "Time-saving",
      "desc": "Delegating the installation and setup to professionals can save time and effort, especially for consumer products."
    },
    {
      "title": "Enhanced customer experience",
      "desc": "A well-executed installation and demo can lead to a more positive customer experience and greater product satisfaction."
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
