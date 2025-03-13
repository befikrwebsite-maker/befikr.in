"use client"

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
      <Navbar />
      <NavbarSub />

      <main className="w-[100%] md:w-full justify-self-center no-scrollbar bg-[#f5f5f5] flex flex-col">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10">
          <img
            src="/images/IMG1_F.png"
            className="w-full scale-105"
          />
          <div className="p-10">
            <h1 className="text-4xl md:pt-10 md:text-6xl font-generalSansMedium">
              About The Founders<span className="pt-6 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <div className="pt-16 md:pt-24 max-w-4xl text-left">
              <div className="text-3xl max-w-2xl font-generalSansLight">
                <p className="md:text-4xl font-generalSansRegular"><strong className=" text-companyBlue">Sumit Srivastava</strong> is a passionate fintech entrepreneur since 2016 & the co-founder of befikr.in, one of India’s leading B2B ESG services company founded along with a long-time colleague & friend Chirajay as his co-founder.</p>
                <p className="pt-4 pb-8 ">Today, befikr focuses on Business to Business services focusing on safety, energy & defective audits, circular economy, business sustainability as well as corporate social responsibility services. In addition, befikr is also involved in B2B2C & Institutional services with an experience of over 9 years in serving over a million households, fortune 500 companies, market leading consumer brands and prestigious institutions. </p>
                <p className="pt-4 pb-8">Sumit is an NDIM-Alumni affiliated to the prestigious Guru Gobind Singh Indraprastha University with masters in Finance. Born at Dhanbad, Sumit follows & practises mathematics, business algorithms & business strategy  and loves to spend quality time with the family & two lovely children.</p>
                <img
                  src=""
                ></img>
                <p className="pt-4 pb-8">Today, at befikr he is involved in setting up a strong foundation for the next decade with team & processes to be remembered leaving a strong impact in the spheres of environment, society & safety.</p>
                <div className="items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>
                <p className="md:text-4xl font-generalSansRegular"><strong className=" text-companyBlue">Chirajay Sharma</strong> is a passionate marketing entrepreneur since 2016 & the co-founder of befikr.in, one of India’s leading B2B ESG services company founded along with a long-time colleague & friend Sumit as his co-founder.</p>
                <p className="pt-4 pb-8 ">Today, befikr focuses on Business to Business services focusing on safety, energy & defective audits, circular economy, business sustainability as well as corporate social responsibility services. In addition, befikr is also involved in B2B2C & Institutional services with an experience of over 9 years in serving over a million households, fortune 500 companies, market leading consumer brands and prestigious institutions. </p>
                <p className="pt-4 pb-8">Chirajay is an IIM Kolkata Alumni with Masters in Pharmacology from Rajiv Gandhi University of Health Sciences, Bangalore & graduation from Rajasthan University. Born at Jodhpur, Chirajay follows the global consumer space with respect to marketing & branding. In his free time he loves exhibiting Interior design closely for family & friends.</p>
                <img
                  src=""
                ></img>
                <p className="pt-4 pb-8">Today, at befikr he is involved in setting up a strong foundation for the next decade as a brand to be remembered leaving a strong impact in the spheres of environment, society & safety.</p>
              </div>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  )
}

