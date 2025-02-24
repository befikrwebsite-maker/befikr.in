"use client";

import { useState } from "react";

export default function Form() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Location, setLocation] = useState("");
  const [Tags, setTags] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating Job...");

    const jobData = {
      Title,
      Desc,
      Location: Location.split(",").map((loc) => loc.trim()), // Convert to array
      Tags: Tags.split(",").map((tag) => tag.trim()), // Convert to array
    };

    try {
      const response = await fetch("http://localhost/myapp/insert-data.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Job Created Successfully");
        setTitle("");
        setDesc("");
        setLocation("");
        setTags("");
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <header className="sticky w-full bg-[#f5f5f5] backdrop-blur-md z-50 border-black">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
          <div className="text-2xl font-bold text-blue-600"></div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-companyBlue transition-colors">
              Home
            </a>
            <a href="/career/jobs" className="text-gray-600 hover:text-companyBlue transition-colors">
              Jobs
            </a>
          </div>
        </nav>
      </header>
      <main className="w-full no-scrollbar bg-[#f5f5f5]">
        <div className="p-24 pt-12 flex md:flex-row flex-col">
          <div className="flex-1">
            <h1 className="relative inline-block font-generalSansSemibold text-2xl">
              Create a new Job Listing
            </h1>
            <form onSubmit={handleSubmit} className="pt-6 max-w-md">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={Title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Job Title</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={Desc} onChange={(e) => setDesc(e.target.value)} />
                <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Description</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="tags" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Tags} onChange={(e) => setTags(e.target.value)} />
                <label htmlFor="tags" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Tags (comma-separated)</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="locations" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Location} onChange={(e) => setLocation(e.target.value)} />
                <label htmlFor="locations" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Locations (comma-separated)</label>
              </div>

              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Submit
              </button>
            </form>
            <p className="pt-12">{Message}</p>
          </div>
          <div className="flex-1">
            <div className="w-full h-full bg-black rounded-xl"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
