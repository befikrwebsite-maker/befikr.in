"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function EnergyAudit() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Energy Audit Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <p className="pt-6 text-lg md:text-xl max-w-3xl">
              Conserving Energy for Future.
            </p>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                An energy audit is a comprehensive assessment of energy-consuming mechanical & electrical infrastructure within a building, facility, or industrial setting to evaluate energy consumption patterns over some time.
              </p>
              <p className="pt-4 pb-8">
                Periodical energy audits promote the use of energy-efficient processes, equipment, devices and systems, bring an effort to reduce energy intensity and ensure efficient use of energy and its conservation as per the guidelines & norms set by the Bureau of Energy Efficiency in India.
              </p>
              <p className="pt-4 pb-8">
                An efficient energy audit helps encourage businesses to regularly drive energy efficiency programs, implement energy-conservation techniques and set up awareness drives within firms & organisations imbibing the philosophy of energy saving & conservation.
              </p>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we provide energy audits for businesses, institutions & organisations helping them achieve their environmental goals while protecting both people and the planet through energy audits.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Our Audit Process</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Documentation Audit:</strong>Checking existing drawings, cyclic maintenance records, and compliance certificates. </li>
                <li><strong>Visual Inspection & Testing:</strong> Examining the physical state of electrical & mechanical installations and equipment, measuring & monitoring the energy-consuming machines & equipment under running conditions & timeframes.</li>
                <li><strong>Data Analysis, Reporting & Final Recommendations:</strong> Preparing a detailed report outlining energy readings & parameters & recommendations for corrective actions.</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Befikr supports Energy Audits.</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li>Our team Identifies areas of opportunity for energy saving by spotting energy wastage in various running operations within the infrastructure.</li>
                <li>Befikr tests the energy performance and efficiency of various mechanical & electrical equipment and study process optimisations.</li>
                <li>We create recommendations for conserving energy & share the list of equipment to be replaced with more efficient equipment with projected benefits.</li>
                <li>Suggest measures for minimising energy losses and alternative energy-saving measures that can effectively replace inefficient processes.</li>
                <li>Recommend the action plan to bring down total energy costs in the organisation</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Scope of Audit Services</h2>
            <div className="pt-6 text-lg text-left">
              <p className="">An energy audit is held under applicable energy audit standards based on <strong>Bureau of Energy Efficiency (BEE)</strong> guidelines and in adherence with the Energy Saving Conservation Act 2001. </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
