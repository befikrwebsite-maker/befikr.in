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
    //console.log(status)
  };


  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("contact_number", formData.contact_number);
    form.append("designation", formData.designation);
    form.append("company", formData.company);
    form.append("city", formData.city);
    form.append("message", formData.message);

    try {
      const response = await fetch("http://localhost/Befikr/postalService.php", {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      let result;

      try{
        result = JSON.parse(text);
        //setStatus(result.message);
      } catch (jsonError){
        //console.error("invalid json: ", text);
        setStatus("Server returned invalid JSON.");
      }
      
      setStatus(result.message);

      if (result.status === "success") {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      //console.error("Fetch error:", error);
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
              <div className="flex-auto m-4">
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                    Reach Us
                  </h2>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      name="contact_number"
                      id="contact_number"
                      pattern="[0-9]{10}"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.contact_number}
                      required
                    />
                    <label
                      htmlFor="contact_number"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact Number
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="designation"
                      id="designation"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.designation}
                      required
                    />
                    <label
                      htmlFor="designation"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Designation
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.company}
                      required
                    />
                    <label
                      htmlFor="company"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.city}
                      required
                    />
                    <label
                      htmlFor="city"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      City
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-companyBlue appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.message}
                      required
                    />
                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-companyBlue hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
                {status && <p className="text-center mt-4 text-red-600">{status}</p>}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
