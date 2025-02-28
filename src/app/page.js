"use client"

import Navbar from "./components/NavBar";
import Hero from "./components/HeroSection";
import CareerSection from "./components/CareersSection";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import PartnerCarousel from "./components/PartnerCarousel";
import Impact from "./components/ImpactSection";
import Clock from "./components/Clock";
import Service from "./services/page"
import Testimonial from "./components/Testimonial"

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
      <Navbar />

      <main className="w-full no-scrollbar bg-[#f5f5f5] flex flex-col">
        <Hero />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Services</div>
        <br />
        <Service/>
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Impact</div>
        <Impact/>
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Partners</div>
        <PartnerCarousel/>
        <Testimonial/>
        <Clock/>
        <CareerSection />
      </main>

      <Footer />
    </div>
  )
}

