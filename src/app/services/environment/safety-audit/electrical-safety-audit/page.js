
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "Electrical Safety Audir",
  "audit": "Electrical Safety Audit",
  "auditdesc": [
    "An electrical safety audit comprehensively assesses electrical systems and infrastructure within a building, facility, or industrial setting to evaluate electrical safety, power efficiency, regulatory compliance, and overall performance for sectors such as Manufacturing, Oil & Gas, mines, Banking and commercial buildings.",
    "Regular electrical safety audits are recommended, typically every year depending on the nature of business operations and respective regulatory requirements. These regulations are primarily governed by the Central Electricity Authority (CEA) (Measures relating to Safety and Electric Supply) Regulations, 2023. In addition to CEA, the other regulatory bodies & regulations come from State Electricity Boards (SEB), the Bureau of Indian Standards (BIS) & the National Building Code of India (NBC).",
    "An efficient electrical safety audit, through checks on wiring, equipment, earthing systems, and safety devices, helps minimise the risk of electric shock, fire, and other electrical accidents originating from the electrical infrastructure. It also identifies potential hazards, energy inefficiencies, and compliance issues, ensuring the safety of employees and assets. Prioritizing electrical safety contributes to a secure and efficient working environment for individuals as well as the industry.",
    "At befikr, as an ESG services company, we offer electrical safety audit services that assist businesses in protecting both people and the planet."
  ],
  "image": "",
  "imageScope": "",
  "ArrayAppr": [
    {
      "title": "Documentation Audit",
      "description": "Checking existing electrical drawings, cyclic maintenance records, and compliance certificates. ",
      "image": "/icons/step1.png"
    },
    {
      "title": "Visual inspection",
      "description": "Examining the physical state of electrical installations and equipment. ",
      "image": "/icons/step2.png"
    },
    {
      "title": "Testing",
      "description": "Performing electrical tests like insulation resistance, earth continuity, and circuit breaker tripping characteristics. ",
      "image": "/icons/step3.png"
    },
    {
      "title": "Reporting",
      "description": "Preparing a detailed report outlining identified safety concerns, recommendations for corrective actions, and compliance status. ",
      "image": "/icons/step3.png"
    }
  ],
  "ArraySupp": [
    {
      "desc": "Preservation of Life and Health by averting accidents & Injuries originating from fire."
    },
    {
      "desc": "Following electrical safety guidelines helps reduce the risk of electrical shocks, burns, and injuries to personnel, thus preserving human lives."
    },
    {
      "desc": "Following electrical safety guidelines helps reduce the risk of electrical shocks, burns, and injuries to personnel, thus preserving human lives."
    },
    {
      "desc": "Identifying potential electrical hazards through regular audits, proactive repairs & improvement activities, manages the risk of damages to equipment & real estate infrastructure, thus preserving the business economy."
    },
    {
      "desc": "Compliance with Regulations through compliance verification, documentation, record keeping, employee training & awareness. "
    },
    {
      "desc": "Following electrical safety regulations and standards ensures legal compliance & setting up self-governing mechanisms for smooth & safe business operations."
    }
  ],
  "scope": "",
  "ArrayInstrumentsAndTechnology": [
    {
      "title": "Infrared Thermography Cameras",
      "description": "To detect overheating and potential failure points through thermal imaging.",
      "image": "/icons/step1.png"
    },
    {
      "title": "Insulation Resistance Testers",
      "description": "For checking the electrical insulation of equipment.",
      "image": "/icons/step2.png"
    },
    {
      "title": "Earth Resistance Testers",
      "description": "To measure the resistance of earthing systems.",
      "image": "/icons/step3.png"
    },
    {
      "title": "Multimeter and Clamp Meters",
      "description": "For measurement of voltage, current, and resistance.",
      "image": "/icons/step4.png"
    },
    {
      "title": "Lux Meters",
      "description": "For assessing lighting levels and ensuring adequate illumination.",
      "image": "/icons/step5.png"
    }
  ]
};
  return (
    <>
      <Navbar />
      <ServiceTemplate {...props} />
      <Footer />
    </>
  );
}
