
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = {
  "placeholder": "Energy Audit",
  "auditdesc": [
    "An energy audit is a comprehensive assessment of energy-consuming mechanical & electrical infrastructure within a building, facility, or industrial setting to evaluate energy consumption patterns over some time.",
    "Periodical energy audits promote the use of energy-efficient processes, equipment, devices and systems, bring an effort to reduce energy intensity and ensure efficient use of energy and its conservation as per the guidelines & norms set by the Bureau of Energy Efficiency in India.",
    "An efficient energy audit helps encourage businesses to regularly drive energy efficiency programs, implement energy-conservation techniques and set up awareness drives within firms & organisations imbibing the philosophy of energy saving & conservation.",
    "At befikr, as an ESG services company, we provide energy audits for businesses, institutions & organisations helping them achieve their environmental goals while protecting both people and the planet through energy audits."
  ],
  "audit": "Energy Audit",
  "image": "/images/energy-audit/hero.jpg",
  "imageScope": "/images/energy-audit/scope.jpg",
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
  "scope": "An energy audit is held under applicable energy audit standards based on Bureau of Energy Efficiency (BEE) guidelines and in adherence with the Energy Saving Conservation Act 2001. "
};
  return (
    <>
      <Navbar />
      <ServiceTemplate {...props} />
      <Footer />
    </>
  );
}
