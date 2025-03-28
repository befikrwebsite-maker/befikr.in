"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function ElectricalSafetyAudit() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full pt-20 flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Electrical Safety Inspection & Audit
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <p className="pt-6 text-lg md:text-xl max-w-3xl">
              Impacting Environment & Lives.
            </p>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                An electrical safety audit comprehensively assesses electrical systems and infrastructure within a building, 
                facility, or industrial setting to evaluate electrical safety, power efficiency, regulatory compliance, and 
                overall performance for sectors such as Manufacturing, Oil & Gas, mines, Banking, and commercial buildings.
              </p>
              <p className="pt-4 pb-8">
                Regular electrical safety audits are recommended, typically every year, depending on the nature of business 
                operations and respective regulatory requirements. These regulations are primarily governed by the 
                <strong> Central Electricity Authority (CEA)</strong> (Measures relating to Safety and Electric Supply) Regulations, 2023, 
                along with other regulatory bodies such as the <strong> State Electricity Boards (SEB), Bureau of Indian Standards (BIS),</strong> 
                and the <strong> National Building Code of India (NBC).</strong>
              </p>
              <p className="pt-4 pb-8">
                An efficient electrical safety audit, through checks on wiring, equipment, earthing systems, and safety 
                devices, helps minimize the risk of electric shock, fire, and other electrical accidents. It also identifies 
                potential hazards, energy inefficiencies, and compliance issues, ensuring the safety of employees and assets. 
                Prioritizing electrical safety contributes to a secure and efficient working environment for individuals as well 
                as industries.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Our Audit Process</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Documentation Audit:</strong> Checking existing electrical drawings, maintenance records, and compliance certificates.</li>
                <li><strong>Visual Inspection:</strong> Examining the physical state of electrical installations and equipment.</li>
                <li><strong>Testing:</strong> Performing electrical tests like insulation resistance, earth continuity, and circuit breaker tripping characteristics.</li>
                <li><strong>Reporting:</strong> Preparing a detailed report outlining identified safety concerns, recommendations for corrective actions, and compliance status.</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Why do we need Electrical Safety Audits?</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Preservation of Life and Health:</strong> Prevent accidents and injuries from electrical hazards.</li>
                <li><strong>Risk Management:</strong> Identifies potential hazards and enables proactive safety improvements.</li>
                <li><strong>Compliance with Regulations:</strong> Ensures adherence to safety guidelines and regulatory compliance.</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Electrical Safety Instruments & Technology</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Infrared Thermography Cameras:</strong> Detect overheating and failure points through thermal imaging.</li>
                <li><strong>Insulation Resistance Testers:</strong> Check the electrical insulation of equipment.</li>
                <li><strong>Earth Resistance Testers:</strong> Measure the resistance of earthing systems.</li>
                <li><strong>Multimeter and Clamp Meters:</strong> Measure voltage, current, and resistance.</li>
                <li><strong>Lux Meters:</strong> Assess lighting levels to ensure adequate illumination.</li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
