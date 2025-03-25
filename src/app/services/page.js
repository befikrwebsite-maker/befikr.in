import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
      <ServicePage/>
      </div>
      <Footer />
    </div>
  );
}