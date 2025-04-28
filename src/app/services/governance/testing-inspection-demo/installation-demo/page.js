"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function InstallationDemo() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Installation & Demo Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                Installation and demo services for consumer products offer a comprehensive approach to ensuring a smooth and satisfying customer experience. These services typically include professional installation and demos of the product. The service also demonstrates the product’s features and settings, helping customers understand and use its capabilities.
              </p>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we provide installation & demo services for consumer brand businesses, helping them achieve their governance goals.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">
              What is included in a typical Installation & Demo service?
            </h2>

            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li>
                  <strong>Professional Installation:</strong> This involves correctly mounting or placing the product (like a washing machine, dishwasher, refrigerator, etc) and connecting it to the necessary devices.
                </li>
                <li className="pt-2">
                  <strong>Product Demonstration:</strong> Our befikr BROTHER will guide the customer through the product's features, settings, and functionalities, ensuring they understand how to use it effectively.
                </li>
                <li className="pt-2">
                  <strong>Troubleshooting and Assistance:</strong> The service may include troubleshooting any initial issues.
                </li>
                <li className="pt-2">
                  <strong>Optional Add-ons:</strong> Some services may offer additional features like warranty extension, sale of respective product accessories.
                </li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">
              Benefits of choosing Installation & Demo services
            </h2>

            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li>
                  <strong>Peace of mind:</strong> Knowing that the product is installed correctly and set up properly can alleviate the stress and potential issues associated with DIY installation.
                </li>
                <li className="pt-2">
                  <strong>Expert guidance:</strong> A professional can ensure the product is used effectively and answer any initial questions or concerns.
                </li>
                <li className="pt-2">
                  <strong>Time-saving:</strong> Delegating the installation and setup to professionals can save time and effort, especially for consumer products.
                </li>
                <li className="pt-2">
                  <strong>Enhanced customer experience:</strong> A well-executed installation and demo can lead to a more positive customer experience and greater product satisfaction.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
