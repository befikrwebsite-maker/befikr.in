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
import Service from "./components/ServicePage"
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
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">
          <p className=" p-8 pb-0 text-2xl font-generalSansMedium tracking-wide ">Befikr, today has emerged as an ESG (Environment, Social, Governance) services company helping business comply to the newer BRSR (Business responsibility & sustainability reporting guidelines keeping  in view the recent regulations & relevance to the key attributes within the Indian market.
          </p>
        </div>
        <br />
        <Service />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Impact</div>
        <Impact />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">About Us</div>
        <CareerSection />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Partners</div>
        <PartnerCarousel />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Team</div>
        <Testimonial />
        <Clock />
      </main>

      <Footer />
    </div>
  )
}

