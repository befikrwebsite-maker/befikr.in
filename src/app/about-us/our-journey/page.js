import Timeline from "@/components/TimelineComp";
import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function OurJourney() {
    return (
        <>
            <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
                <Navbar />
                <main className="w-[100%] pt-20 md:w-full justify-self-center no-scrollbar bg-[#f5f5f5] flex flex-col">
                    <NavbarSub />
                   
                    <Timeline />
                </main>
                <Footer />
            </div>
        </>
    )
}