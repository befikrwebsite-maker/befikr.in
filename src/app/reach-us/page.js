"use client"

import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

const MapComponent = dynamic(() => import("../components/MapComponent"), { ssr: false });

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    message: "",
    designation: "",
    company: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState("");
  const [submitStatus, setSubmitStatus] = useState(""); // "failed", "ongoing", "success"

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      setSubmitStatus("ongoing");
      
      const response = await fetch("https://befikr.in/postal_service.php", {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch (jsonError) {
        setSubmitStatus("failed");
        setStatus("Server returned invalid JSON.");
        return;
      }

      setStatus(result.message);

      if (result.status === "success") {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          contact_number: "",
          message: "",
          designation: "",
          company: "",
          city: ""
        });
      } else {
        setSubmitStatus("failed");
      }
    } catch (error) {
      setSubmitStatus("failed");
      setStatus("Error delivering postcard.");
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content="Contact Befikr - We'd love to hear from you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Us - Befikr</title>
      </Head>
      <Navbar />
      
      <div className="flex w-full pt-24 pb-16 px-4 md:px-8 lg:px-16 flex-col justify-start min-h-screen bg-gradient-to-b from-white to-blue-50 font-generalSansRegular">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">We're here to help with your questions and needs. Fill out the form below and our team will get back to you promptly.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-[#009DC8] py-4 px-6">
                  <h2 className="text-xl font-semibold text-white">Send Us a Message</h2>
                </div>
                <form className="p-6 pb-24" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent pt-3 pb-2 px-0 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.name}
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                      >
                        Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent pt-3 pb-2 px-0 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.email}
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <input
                        type="tel"
                        name="contact_number"
                        id="contact_number"
                        pattern="[0-9]{10}"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent pt-3 pb-2 px-0 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.contact_number}
                        required
                      />
                      <label
                        htmlFor="contact_number"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                      >
                        Contact Number
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent pt-3 pb-2 px-0 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.city}
                        required
                      />
                      <label
                        htmlFor="city"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                      >
                        City
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="designation"
                        id="designation"
                        className="peer w-full border-b-2 border-gray-300 bg-transparent pt-3 pb-2 px-0 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.designation}
                        required
                      />
                      <label
                        htmlFor="designation"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                      >
                        Designation
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="peer w-full border-b-s2 border-gray-300 bg-transparent pt-3 pb-2 px-0 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors"
                        placeholder=" "
                        onChange={handleChange}
                        value={formData.company}
                        required
                      />
                      <label
                        htmlFor="company"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                      >
                        Company
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative mb-8">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="peer w-full border-2 border-gray-300 rounded-lg bg-transparent p-3 text-gray-900 focus:outline-none focus:border-[#009DC8] transition-colors resize-none"
                      placeholder=" "
                      onChange={handleChange}
                      value={formData.message}
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-[#009DC8] peer-focus:text-sm"
                    >
                      Your Message
                    </label>
                  </div>

                  {status && (
                    <div className={`mb-4 p-3 rounded-md text-sm ${
                      submitStatus === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}>
                      {status}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-[#009DC8] hover:bg-[#0081a3] text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {submitStatus === "ongoing" ? (
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : submitStatus === "success" ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    )}
                    <span>{submitStatus === "success" ? "Sent!" : "Send Message"}</span>
                  </button>
                </form>
              </div>
            </div>
            
            <div className="w-full">
              <div className="bg-gradient-to-br from-[#ffe084] to-[#ffd458] rounded-xl shadow-xl h-full overflow-hidden relative">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Your Message Preview</h3>
                    <img
                      src="/extraLogos/logo-transparent-png.png"
                      className="w-32 h-auto object-contain"
                      alt="Befikr Logo"
                    />
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 flex-grow shadow-inner">
                    <div className="space-y-2 text-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Name</p>
                          <p className="font-medium">{formData.name || "Your Name"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <p>{formData.email || "your.email@example.com"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Phone</p>
                          <p>{formData.contact_number || "XXXXXXXXXX"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">City</p>
                          <p>{formData.city || "Your City"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Designation</p>
                          <p>{formData.designation || "Your Role"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Company</p>
                          <p>{formData.company || "Your Company"}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <p className="text-sm font-medium text-gray-500">Message</p>
                        <div className="mt-2 p-3 bg-white/70 rounded border border-gray-200 min-h-[100px]">
                          {formData.message || "Your message will appear here..."}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Thank you for reaching out to us!</p>
                    <p className="text-xs text-gray-500 mt-1">We'll get back to you shortly</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#009DC8]/20 rounded-full"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#009DC8]/10 rounded-full"></div>
              </div>
            </div>
          </div>
          
         
        </div>

        <div className=" h-full pt-20">
          <div className="bg-white p-6 ">
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

