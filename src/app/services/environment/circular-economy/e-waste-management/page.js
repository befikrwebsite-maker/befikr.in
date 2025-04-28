"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function EWasteManagement() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              E-Waste Management Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <p className="pt-6 text-lg md:text-xl max-w-3xl">
              Impacting Environment & Lives.
            </p>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                E-waste management services handle the responsible disposal and recycling of electronic waste. These services include collection, sorting, and processing of e-waste, ensuring proper management and recovery of valuable resources. They also offer data destruction and asset refurbishment.
              </p>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we provide e-waste management services for businesses, helping them achieve their environmental goals while protecting both people and the planet through efficient e-waste management services.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Key aspects of e-waste management services.</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Collection and Pickup: </strong> Services offer convenient collection for businesses and households, ensuring safe transportation. </li>
                <li><strong>Sorting and Processing: </strong> E-waste is sorted to separate valuable materials and hazardous substances. </li>
                <li><strong>Data Destruction: </strong> Secure data deletion of hard drives from computers, laptops, and servers is provided to protect confidential information. </li>
                <li><strong>Asset Refurbishment: </strong>  Repairing and restoring electronic devices to extend their lifespan. </li>
                <li><strong>Recycling: </strong> Extracting valuable components like metals and plastics from e-waste for reuse and repurposing. </li>
                <li><strong>Disposal:</strong> Safe and environmentally responsible disposal of non-recyclable materials. </li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Benefits of e-waste recycling.</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Environmental Protection: </strong> Reduces the amount of hazardous materials ending up in landfills and water bodies. </li>
                <li><strong>Resource Conservation</strong> Recovers valuable materials like gold, silver, and copper. </li>
                <li><strong>Energy Conservation: </strong> Requires less energy than mining new resources. </li>
                <li><strong>Job Creation: </strong> Creates jobs in collection, sorting, and processing. </li>
                <li><strong>Economic Benefits: </strong> Generates revenue through recovered materials.  </li>
              </ul>
            </div>

            

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
