"use client"

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Form() {

  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Location, setLocation] = useState([]);
  const [Tags, setTags] = useState([]);
  const [Message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...")

    const response = await fetch("https://befikr.in/insert-data.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Title, Desc, Location, Tags }),
    });

    const result = await response.json();
    if (result.success) {
      setMessage("Data inserted successfully!");
      setTitle("");
      setDesc("");
      setLocation([]);
      setTags([]);
    } else {
      setMessage(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
      <Navbar />

      <main className="w-full no-scrollbar bg-[#f5f5f5] flex flex-col">
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={Title}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={Desc}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Tags (comma-separated)"
                onChange={(e) => setTags(e.target.value.split(","))}
              />
              <input
                type="text"
                placeholder="Locations (comma-separated)"
                onChange={(e) => setLocations(e.target.value.split(","))}
              />
              <button type="submit">Submit</button>
            </form>
            <p>{Message}</p>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  )
}

