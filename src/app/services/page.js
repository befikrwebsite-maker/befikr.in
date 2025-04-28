import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TabComponent from "@/components/TestComp";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
      <TabComponent/>
      </div>
      <Footer />
    </div>
  );
}