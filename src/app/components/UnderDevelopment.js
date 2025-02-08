"use client"

import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../components/MapComponent"), { ssr: false });

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col justify-start min-h-screen font-generalSansRegular text-[#009DC8]">
      <nav className=" bg-white text-black px-4 py-5 font-generalSansMedium">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        <img
          src="/logo.png"
          alt="Logo"
          className="max-w-[100px] md:justify-start justify-items-center" 
        />
        </div>
        </nav>

      <div className="bg-[#009DC8] h-full">
        <div className="flex flex-col p-6 md:flex-row justify-between">
        
        <div>
          <h1 className="block text-4xl md:text-6xl font-extrabold text-black mb-4 font-generalSansBold text-left sm:text-left">
            Coming Soon
          </h1>
          <p className="text-2xl md:text-xl pb-4 text-left sm:text-left text-black">
            We’re currently upgrading our website to bring you a better experience.
          </p>

        </div>

        </div>
        <div className="bg-[#ffffff] p-6 ">
          <div>
            <p className="text-lg md:text-xl pt-6 text-black  inline-block">
              <b className="font-generalSansSemibold">Contact Us</b>
            </p>
            <p className="text-lg md:text-xl ">+91 87997 55735</p>
            <p className="text-lg md:text-xl ">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bebefikr@befikr.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                bebefikr@befikr.in
              </a>
            </p>
            <br/>
            <p className="text-black text-lg"><b className="font-generalSansSemibold">Address</b></p>
            <p className="">Befikr Office,</p>
            <p className="">Second Floor, 384/2, Plot, No.-1, 100 Feet Rd, opp. Union Bank,</p>
            <p className=""> Ghitorni, New Delhi,</p>
            <p className=""> Delhi</p>
            <p className="">110003 </p>
            <div className="pt-7 pb-7">
              <div className="h-[200px] sm:h-[380px]">
                <MapComponent className=" w-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
