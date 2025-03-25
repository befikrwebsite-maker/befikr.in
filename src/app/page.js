"use client"

import Navbar from "./components/NavBar";
import Hero from "./components/HeroSection";
import CareerSection from "./components/CareersSection";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import {useRef,useEffect } from "react";
import PartnerCarousel from "./components/PartnerCarousel";
import Impact from "./components/ImpactSection";
import Clock from "./components/Clock";
import Service from "./components/ServicePage"
import Testimonial from "./components/Testimonial"
import MediaCoverage from "./components/MediaCoverage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", 
      },
    });
  }, []);

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

      <main className="w-full pt-20 bg-[#f5f5f5] flex flex-col">
        <Hero />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">
          <p className=" p-8 pb-0 text-2xl font-generalSansMedium tracking-wide ">Befikr has emerged as an ESG (Environment, Social, Governance) services company dedicated to helping businesses comply with the newer Business Responsibility & Sustainability Reporting - BRSR, an Indian regulatory compliance & strategic framework enabling businesses to evolve as sustainable leaders.
          </p>
        </div>
        <br />
        <div ref={textRef}>
        <Service />
        </div>
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Impact</div>
        <Impact />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">About Us</div>
        <CareerSection />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Partners</div>
        <PartnerCarousel />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Our Team</div>
        <Testimonial />
        <div className="bg-[#f5f5f5] pt-10 text-4xl md:text-left text-center font-generalSansSemibold md:pl-12 text-gray-900">Interviews & Articles</div>
        <MediaCoverage />
        <Clock />
      </main>

      <Footer />
    </div>
  )
}

