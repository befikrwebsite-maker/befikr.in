"use client"

import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ExpandableList from "@/components/OrganicExpCards";
import TabComponent from "@/components/TestComp";
import NewService from "@/components/newServiceSection";

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
  };


  const [status, setStatus] = useState("");

  // only three possible values - failed, ongoing, success
  const [submitStatus, setSubmitStatus] = useState("");

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
      const response = await fetch("https://befikr.in/postal_service.php", {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
        //setStatus(result.message);
      } catch (jsonError) {
        //console.error("invalid json: ", text);
        setSubmitStatus("failed");
        setStatus("Server returned invalid JSON.");
      }

      setStatus(result.message);

      if (result.status === "success") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus("failed");
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
      <div className="flex w-full pt-20 flex-col justify-start min-h-screen font-generalSansRegular text-[#009DC8]">
        <TabComponent />
        <div className="grid grid-cols-1 sm:grid-cols-2 m-4">
          <form className="max-w-md sm:max-w-xl w-full mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
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
              onClick={() => setSubmitStatus("ongoing")}
              className="text-white bg-companyBlue hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="flex justify-center">
                {submitStatus === "ongoing" ? (
                  <div className="flex justify-center items-center" role="status">
                    <svg aria-hidden="true" className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                  </div>
                ) : (<div className=""></div>)}
                {submitStatus === "success" ? (
                  <div className="flex justify-center items-center">
                    <svg className="w-4 h-4 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  </div>
                ) : (<div className=""></div>)}
                Submit
              </div>

            </button>
          </form>
          {status && <p className="text-center mt-4 text-red-600">{status}</p>}
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">To Befikr</h3>
            <div className="flex w-full mt-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <div className="flex-1 mt-10 text-gray-700 dark:text-gray-300">
                <p className="mb-5"><strong>Name:</strong> {formData.name || "Your Name"}</p>
                <p className="mb-5"><strong>Email:</strong> {formData.email || "your.email@example.com"}</p>
                <p className="mb-5"><strong>Contact:</strong> {formData.contact_number || "XXXXXXXXXX"}</p>
                <p className="mb-5"><strong>Designation:</strong> {formData.designation || "Your Role"}</p>
                <p className="mb-5"><strong>Company:</strong> {formData.company || "Your Company"}</p>
                <p className="mb-5"><strong>City:</strong> {formData.city || "Your City"}</p>
                <p className="mt-4 mb-40"><strong>Message:</strong> {formData.message || "Your message goes here..."}</p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src="/extraLogos/logo-transparent-png.png"
                  className="w-56 object-cover"
                  alt="Thank You"
                />
              </div>

            </div>
          </div>
        </div>

        <div className="bg-[#009DC8] h-full">
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
