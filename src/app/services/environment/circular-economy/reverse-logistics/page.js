"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function ReverseLogistics() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Reverse Logistics Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <p className="pt-6 text-lg md:text-xl max-w-3xl">
              Managing Returns, Repairs, Recycling, and Refurbishments.
            </p>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                Reverse logistics is the process of managing the return of products from end users back to the supply chain, whether for returns, repairs, refurbishments, or recycling. It's a critical part of supply chain management, addressing issues like returns, product recalls, and handling end-of-life products.
              </p>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we provide reverse logistics services for businesses, helping them achieve their environmental goals while protecting both people and the planet through efficient reverse logistics services.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Key Aspects of Reverse Logistics</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Returns Management:</strong> Handling customer returns, which are a significant aspect of reverse logistics, especially in e-commerce.</li>
                <li><strong>Refurbishment and Repair:</strong> Taking returned products, repairing or refurbishing them, and potentially reselling them.</li>
                <li><strong>Recycling and Disposal:</strong> Properly managing the end-of-life of products, including recycling and disposal, to minimize environmental impact.</li>
                <li><strong>Supply Chain Optimization:</strong> Reverse logistics helps businesses recover value from returned products, reduce waste, and improve overall supply chain efficiency.</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Examples of Reverse Logistics in Action</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Customer Returns:</strong> An e-commerce company processing returns of products ordered online.</li>
                <li><strong>Product Recalls:</strong> A manufacturer recalling a product due to a defect and coordinating its return.</li>
                <li><strong>End-of-Life Products:</strong> Collecting and recycling electronic devices at the end of their useful life.</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Benefits of Reverse Logistics</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Cost Reduction:</strong> By optimizing returns and reducing waste, reverse logistics can significantly lower costs.</li>
                <li><strong>Improved Customer Satisfaction:</strong> Hassle-free returns and efficient handling of returned products can enhance customer loyalty.</li>
                <li><strong>Environmental Sustainability:</strong> Recycling and reusing products can reduce waste and minimize the environmental impact of the supply chain.</li>
                <li><strong>Enhanced Brand Image:</strong> Effective reverse logistics practices can demonstrate a company's commitment to environmental responsibility and customer satisfaction.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
