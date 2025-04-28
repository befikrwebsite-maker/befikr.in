"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function CSR() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Corporate Social Responsibility Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                Businesses adopt Corporate Social Responsibility (CSR) activities to behave as ethical and responsible corporate organisations. Through CSR activities, organisations deliver last-mile benefits to different stakeholders of society & value to the stakeholders.
              </p>
              <p className="pt-4 pb-8">
                As an essential part of India's quest for development, inclusive growth is widely recognised reiterating a firm’s commitment to include those sections of society in the growth process which had hitherto remained excluded from the mainstream of development. In line with this national endeavour, CSR is an instrument for integrating social, environmental and human development concerns in the entire value chain of corporate business.
              </p>
              <p className="pt-4 pb-8">
                Profitable businesses have constitutionalised self-regulatory mechanisms to socially contribute to specific sectors of priority & interest to the business group. A well-thought-of CSR initiative eventually benefits the society & the country at large, magnifying various efforts from the government, NGOs as well as the private sector, thus creating a visible impact in the social frame of a country.
              </p>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we assist businesses in achieving their social goals (environmental, philanthropic, socio-economic) through sustainable CSR initiatives.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
