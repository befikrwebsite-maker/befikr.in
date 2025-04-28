"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function DefectiveProductManagement() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Defective Product Audit Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                A defective product audit service typically involves inspecting, evaluating, and documenting products that fail to meet quality standards or have defects within their promised warranty period.
              </p>
              <p className="pt-4 pb-8">
                This service is valuable for businesses that would like to be:
              </p>
              <ul className="list-disc pl-6 pb-8">
                <li className="pt-2">
                  Fair to the consumers by evaluating the genuineness of defective claims within warranty and settling them basis service levels committed while selling the products.
                </li>
                <li className="pt-2">
                  Aids the entire supply chain credibility including distributors, dealers and retailers through which the product was sold.
                </li>
                <li className="pt-2">
                  Proactive in identifying quality issues in their products, understanding the root causes of defects, and improving product quality avoiding subsequent product quality issues.
                </li>
              </ul>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we provide product testing, inspection & defective audit services for brands facing consumers thus helping companies run well-governed ensuring Corporate Governance protocols are well followed.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Here’s a general overview of how a defective product audit service works at befikr.</h2>

            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li className="pt-2">
                  <strong>Step 1:</strong> Setting clear criteria for what constitutes a defect (e.g., functional issues, cosmetic defects, safety concerns); and preparing the team to conduct inspections based on these criteria.
                </li>
                <li className="pt-2">
                  <strong>Step 2:</strong> Physical inspection: Checking the products for visible defects, such as damaged packaging, faulty components, or incomplete manufacturing processes.
                </li>
                <li className="pt-2">
                  <strong>Step 3:</strong> Functional inspection: Ensuring that products work as intended (for example, testing electronics, mechanical devices, etc.).
                </li>
                <li className="pt-2">
                  <strong>Step 4:</strong> Recording findings in detailed reports, which include photographs, descriptions, and categorization of defects.
                </li>
                <li className="pt-2">
                  <strong>Step 5:</strong> Providing a comprehensive report to the client, which includes the number and type of defects found, any trends or patterns, and recommendations for improvement.
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
