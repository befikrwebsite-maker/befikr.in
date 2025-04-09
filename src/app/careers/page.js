"use client"

import Navbar from "../components/NavBar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import InterviewProcess from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
      <Navbar />

      <main className="w-full pt-20 no-scrollbar bg-[#f5f5f5] flex flex-col">
        <SectionOne />
        <SectionTwo />
        <InterviewProcess />
        <SectionFour />
      </main>


      <Footer />
    </div>
  )
}

