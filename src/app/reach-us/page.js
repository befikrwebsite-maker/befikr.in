"use client"

import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

const MapComponent = dynamic(() => import("../components/MapComponent"), { ssr: false });



export default function UnderDevelopment() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    message: "",
    designation: "",
    company: "",
    city: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(status)
  };


  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("contact_number", formData.contact_number);
    // form.append("designation", formData.designation);
    // form.append("company", formData.company);
    // form.append("city", formData.city);
    form.append("message", formData.message);

    try {
      const response = await fetch("http://www.befikr.in/postal_service.php", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      setStatus(result.message);

      if (result.status === "success") {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error delivering postcard.");
    }
  }

  return (
    <>
      <Head>
        <meta name="description" content="We are upgrading our website for a better experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Befikr - Coming Soon</title>
      </Head>
      <Navbar />

      <div className="flex py-5 justify-center ">
        <div className="flex flex-row flex-wrap h-full w-4/6 bg-white shadow-xl  overflow-hidden border border-black">
          <div className="w-full flex justify-center">
            <p className="font-mono text-sm md:text-sm lg:text-2xl xl:text-2xl 2xl:text-2xl text-cyan-800 ">POSTCARD</p>
          </div>
          <div className="flex flex-grow">
            <div className="flex basis-2/4 ">
              <div className="flex-grow">
                <textarea
                  className="w-full text-grey-700 px-4 py-2 focus:outline-none bg-transparent resize-none scroll-smooth focus-within:bg-gray-200/35 font-serif text-sm md:text-sm lg:text-md xl:text-xl 2xl:text-xl"
                  name="message"
                  placeholder="Write your message to us..."
                  type="text"
                  rows={14}
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
                <form className="justify-self-end px-3 py-2  " onSubmit={handleSubmit} >
                  <button className="bg-blue-400 text-gray-200 rounded-full w-16 text-sm md:w-24 md:text-md lg:w-24 lg:text-md ">POST</button>
                </form>
                {status && <p className="text-center mt-4 text-red-600">{status}</p>}
              </div>
            </div>
            <div className="h-full w-[1px] bg-black m-2"></div>
            <div className="flex basis-2/4  ">
              <div className=" flex-grow grid grid-cols-1 gap-4 m-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 ">
                <div className="col-span-1 row-span-8 justify-items-end content-start px-5 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-3">
                  {/* <button disabled className=" bg-transparent border-2 border-dashed border-gray-400 rounded-full w-20 h-20 "></button> */}

                  <div className="flex justify-center items-center bg-transparent border-dashed border border-black  ">
                    <img
                      src="/logo_stamp.png"
                      className="w-40"
                      alt="Company Logo"
                    />
                  </div>
                </div>

                <div className="">
                  <input
                    className="w-full h-auto  text-grey-700 border-b-[0.2vw] font-serif text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl border-sky-300 focus-within:bg-gray-200/35 autofill:bg-transparent focus:outline-none bg-transparent"
                    name="name"
                    placeholder="Name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>

                <div className="">
                  <input
                    className="w-full h-auto text-grey-700 border-b-[0.2vw] font-serif text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl border-sky-300  focus-within:bg-gray-200/35 focus:outline-none bg-transparent"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>

                <div className=" ">
                  <input
                    className="w-full h-auto text-grey-700 border-b-[0.2vw] font-serif text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl border-sky-300 focus-within:bg-gray-200/35 focus:outline-none bg-transparent  "
                    name="contact_number"
                    placeholder="Contact Number"
                    type="tel"
                    pattern="[0-9]{10}"
                    onChange={handleChange}
                    value={formData.contact_number}
                    required
                  />
                </div>

                <div className="">
                  <input
                    className="w-full h-auto  text-grey-700 border-b-[0.2vw] font-serif text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl border-sky-300 focus-within:bg-gray-200/35 focus:outline-none bg-transparent"
                    name="designation"
                    placeholder="Designation"
                    type="text"
                    onChange={handleChange}
                    value={formData.designation}
                    required
                  />
                </div>

                <div className="">
                  <input
                    className="w-full h-auto  text-grey-700 border-b-[0.2vw] font-serif text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl border-sky-300 focus-within:bg-gray-200/35 focus:outline-none bg-transparent"
                    name="company"
                    placeholder="Comapany"
                    type="text"
                    onChange={handleChange}
                    value={formData.company}
                    required
                  />
                </div>

                <div className="">
                  <input
                    className=" w-full h-auto  text-grey-700 border-b-[0.2vw] font-serif text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl border-sky-300  focus-within:bg-gray-200/35 focus:outline-none bg-transparent"
                    name="city"
                    placeholder="City"
                    type="text"
                    onChange={handleChange}
                    value={formData.city}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



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
      <Footer />
    </>
  );
}
