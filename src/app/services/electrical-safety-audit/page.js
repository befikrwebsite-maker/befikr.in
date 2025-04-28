import ServiceTemplate from "../components/ImageHolder";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ElectricalSafetyAudit() {
  return (
    <>
      <Navbar />
      <ServiceTemplate
        placeholder="Electrical Safety Audit"
        image="/images/electrical-safety-audit.jpg"
        audit="Electrical Safety Audit"
        desc="An Electrical Safety Audit is a comprehensive evaluation of an organization's electrical systems and practices to ensure compliance with safety standards and regulations. It involves inspecting electrical installations, identifying potential hazards, and recommending corrective actions to enhance safety and prevent electrical accidents."
        Array={[]}
        imageScope="/images/electrical-safety-audit.jpg"/>
    <Footer />
    </>
  );
}