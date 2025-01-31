"use client"

import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../components/MapComponent"), { ssr: false });

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col justify-start sm:p-9 min-h-screen font-generalSansRegular bg-[#F3F3F3] text-[#009DC8]">
      <div className="bg-[#F3F3F3] p-6 rounded-xl shadow-lg">
        <div className="flex justify-between">
        
        <div>
          <h1 className="block text-4xl md:text-6xl font-extrabold text-black mb-4 font-generalSansBold text-center sm:text-left">
            Coming Soon
          </h1>
          <p className="text-2xl md:text-xl pb-7  text-center sm:text-left">
            We’re currently upgrading our website to bring you a better experience.
          </p>

        </div>
        <img
          src="/logo.png"
          alt="Logo"
          className="max-w-[200px] justify-start" 
        />
        </div>
        <div className="bg-[#e9e9e9] rounded-xl shadow-lg p-6">
          <div>
            <p className="text-lg md:text-xl pt-6 text-black  inline-block">
              <b>Contact Us</b>
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
            <p className="text-black text-lg"><b>Address</b></p>
            <p className="">Befikr Office,</p>
            <p className="">Second Floor, 384/2, Plot, No.-1, 100 Feet Rd, opp. Union Bank,</p>
            <p className=""> Ghitorni, New Delhi,</p>
            <p className=""> Delhi</p>
            <p className="">11003 </p>
            <div className="pt-7 pb-7">
              <div className="h-[200px] sm:h-[170px]">
                <MapComponent className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
