"use client"

import Navbar from "../components/NavBar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
      <Navbar />

      <main className="w-full  no-scrollbar bg-[#f5f5f5] flex flex-col">
        <SectionOne />
        <SectionTwo />
      </main>


      <Footer />
    </div>
  )
}

