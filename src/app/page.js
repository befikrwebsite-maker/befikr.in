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
import MediaCoverage from "./components/MediaCoverage";
import CompanyLogoGrid from "./components/CompanyLogoGrid";
import ClockArea from "./components/ClockArea";
import Certificates from "./components/Certificate";

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
    <div className="min-h-screen relative bg-white font-generalSansMedium" style={{ height: "200vh" }}>
      <Navbar />

      <main className="w-full pt-20 bg-companyBlue flex flex-col">
        <Hero />
        <Clock />
        <div className="bg-white py-16 px-6 md:px-12 text-gray-900 font-generalSansSemibold">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl mb-6">Befikr - An ESG Compliance Partner</h2>
              <p className="text-xl font-generalSansMedium leading-relaxed">
                Befikr has emerged as an ESG (Environment, Social, Governance) services company dedicated to helping businesses comply with the newer Business Responsibility & Sustainability Reporting (BRSR) — an Indian regulatory and strategic framework enabling businesses to evolve as sustainable leaders.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 hidden md:flex justify-center items-center">
              <img
                src="/extraLogos/rev.png"
                alt="Befikr ESG Logo"
                className="w-64  transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        

        <Service />
        <ClockArea/>
        {/* <ScreenSizeComponent/> */}
    
        <Impact />
        <div className="bg-white pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Partners</div>
        <PartnerCarousel />
        <Certificates />

        {/* <CompanyLogoGrid/> */}

        <div className="bg-white pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Interviews & Articles</div>
        <MediaCoverage />
      </main>

      <Footer />
    </div>
  )
}

