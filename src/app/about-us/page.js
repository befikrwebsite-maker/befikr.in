"use client"

import Navbar from "../components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium items-center justify-center" style={{ height: "200vh" }}>
      <Navbar />

      

      <main className="w-[100%] pt-20 md:w-full justify-self-center no-scrollbar bg-[#f5f5f5] flex flex-col">
      <NavbarSub />
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10">
          <img
            src="/images/IMG1.jpg"
            className="w-full"
          />
          <div>
          <div className="p-10">
            <h1 className="text-4xl md:pt-10  md:text-6xl font-generalSansMedium">
              Who We Are <span className="pt-6 inline-block font-generalSansItalic text-companyBlue">?</span>
            </h1>
            <div className="pt-16 md:pt-24 max-w-4xl text-left">
              <div className="text-2xl max-w-2xl font-generalSansLight">
                <p className="md:text-4xl font-generalSansRegular"><strong className=" text-companyBlue">befikr</strong> is a strategic & execution partner for environment, safety & social IMPACT services.</p>
                <p className="pt-4 pb-8">We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services.</p>
                <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
                <p className="pt-4 pb-8">Our Environment (E) IMPACT services are Energy audit, Electrical safety audit, Circular economy (Defective inspection, e-waste collection & Reverse logistics management). Today, befikr has also become the last mile partner for brands looking to comply with the Extended Producer Responsibility by managing & embracing the complete circular economy chain efficiently.</p>
                <img
                  src=""
                ></img>
                <p className="pt-4 pb-8">Our Social (S) IMPACT services include CSR (Corporate Social Responsibility) touching lives & employability through training & development services for the under privileged & deserving to contribute towards a Developed India.</p>
                <img
                  src=""
                ></img>
                <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
                <p className="pt-4 pb-8">We carry a credible track record of winning multiple years of service contracts from Banking, Oil & Gas & Consumer brands setting year on year new standards & controls through diligent Inspection-investigation-Auditing-Remidiation services.</p>
                <img
                  src=""
                ></img>
                <p className="pt-4 pb-8"> Established in 2016, today we take pride in serving market leaders like HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of India, Indian Oil, Hindustan Petroleum, Jubilant Food-works (Dominos India), Crompton, Bosch & Siemens, American Embassy, Attero & many such prestigious organisations.</p>
                <img
                  src=""
                ></img>
                <p className="pt-4 pb-8"> Our unique propositions for businesses comprises offering a one stop end to end service through a well trained professional team of engineers with a pan-India execution network to help businesses get serviced as well scale sustainably.</p>
                <img
                  src="/images/IMG-20250220-WA0004.jpg"
                ></img>
                <p className="pt-4 pb-8">Today, befikr is successfully addressing businesses protecting their risks as well as helping them welcome growth opportunities.</p>
                <img
                  src=""
                ></img>
                <p className="pt-4 pb-8">The brand “befikr” is owned and operated by Opera Gratia Pvt Ltd. The company has its headquarters in Delhi.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  )
}

