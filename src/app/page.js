"use client"

import Navbar from "./components/NavBar";



export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smooth: true, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
        <Navbar/>

      <main className="w-full no-scrollbar bg-[#f5f5f5] flex flex-col">
        <Hero/>
        <div className="bg-[#f5f5f5] pt-10 text-4xl font-generalSansSemibold pl-12 text-gray-900">Our Services</div>
        <ServicesSection/>
        <CareerSection/>
      </main>

      <Footer/>
    </div>
  )
}

