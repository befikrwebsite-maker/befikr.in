
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
      "title": "Pre-Audit ",
      "desc": "Documentation Audit: Checking existing drawings, cyclic maintenance records, and compliance certificates. ",
      "image": "/icons/step1.png"
    },
    {
      "title": "On-Site Energy Audit",
      "desc": "Visual inspection & Testing: Examining the physical state of electrical & mechanical installations and equipment, measuring & monitoring the energy-consuming machines & equipment under running conditions & timeframes.",
      "image": "/icons/step2.png"
    },
    {
      "title": "Data Analysis, Reporting & Final Recommendations",
      "desc": "Preparing a detailed report outlining energy readings & parameters & recommendations for corrective actions.",
      "image": "/icons/step3.png"
    }
  ],
  "ArraySupp": [
    {
      "desc": "Our team Identifies areas of opportunity for energy saving by spotting energy wastage in various running operations within the infrastructure."
    },
    {
      "desc": "Befikr tests the energy performance and efficiency of various mechanical & electrical equipment and study process optimisations."
    },
    {
      "desc": "We create recommendations for conserving energy & share the list of equipment to be replaced with more efficient equipment with projected benefits."
    },
    {
      "desc": "Suggest measures for minimising energy losses and alternative energy-saving measures that can effectively replace inefficient processes."
    },
    {
      "desc": "Recommend the action plan to bring down total energy costs in the organisation"
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
