"use client";

import { useState } from "react";
import Navbar from "@/components/NavBar";

export default function Form() {
  const [Position, setPosition] = useState("");
  const [Team, setTeam] = useState("");
  const [Location, setLocation] = useState("");
  const [Tags, setTags] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating Job...");

    const jobData = {
      Position,
      Team,
      Location: Location.split(",").map((loc) => loc.trim()), 
      Tags: Tags.split(",").map((tag) => tag.trim()), 
    };

    try {
      const response = await fetch("http://befikr.in/insertdata.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Job Created Successfully");
        setPosition("");
        setTeam("");
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
    <>
    <Navbar/>
    <div className="min-h-screen pt-20 bg-[#f5f5f5] font-generalSansMedium">
      <main className="w-full no-scrollbar bg-[#f5f5f5]">
        <div className="p-24 pt-12 flex md:flex-row flex-col">
          <div className="flex-1">
            <h1 className="relative inline-block font-generalSansSemibold text-2xl">
              Create a new Job Listing
            </h1>
            <form onSubmit={handleSubmit} className="pt-6 max-w-md">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="position" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={Position} onChange={(e) => setPosition(e.target.value)} />
                <label htmlFor="position" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Position</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="team" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={Team} onChange={(e) => setTeam(e.target.value)} />
                <label htmlFor="team" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600">Team</label>
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
    </>
  );
}
