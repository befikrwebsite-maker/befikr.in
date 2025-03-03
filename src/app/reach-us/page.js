"use client"

import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
const MapComponent = dynamic(() => import("../components/MapComponent"), { ssr: false });

export default function UnderDevelopment() {
  return (
    <>
      <Head>
        <meta name="description" content="We are upgrading our website for a better experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Befikr - Coming Soon</title>
      </Head>
      <Navbar/>

      <div className="flex flex-col justify-start min-h-screen font-generalSansRegular text-[#009DC8]">
        <div className="bg-[#009DC8] h-full">
          <div className="bg-[#f5f5f5] p-6 ">
            <div>
              <p className="text-lg md:text-xl pt-6 text-black  inline-block">
                <b className="font-generalSansSemibold">Contact Us</b>
              </p>
              <p className="text-lg md:text-xl ">+91 92201 95506</p>
              <p className="text-lg md:text-xl ">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bebefikr@befikr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bebefikr@befikr.in
                </a>
              </p>
              <br />
              <p className="text-black text-lg"><b className="font-generalSansSemibold">Address</b></p>
              <p className="">Befikr Office,</p>
              <p className="">Second Floor, 384/2, Plot, No.-1, 100 Feet Rd, opp. Union Bank,</p>
              <p className=""> Ghitorni, New Delhi,</p>
              <p className=""> Delhi</p>
              <p className="">110030 </p>
              <div className="pt-7 pb-7">
                <div className="h-[200px] sm:h-[380px]">
                  <MapComponent className=" w-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
