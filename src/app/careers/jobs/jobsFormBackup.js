"use client";

import { useState, useEffect } from "react";


export default function Form({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // resume: null, // Added for file input
  });

  const [userResume, setUserResume] = useState(null);

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file input
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setUserResume(file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userResume) {
      setStatus("Please upload a file.");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("resume", userResume);

    // // Debugging: Check FormData contents
    // for (let [key, value] of form.entries()) {
    //   console.log(key, value);
    // }

    try {
      const response = await fetch("http://localhost/Befikr/mailPHPMailer.php", {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
        //console.log("server response: ", result);
      } catch(jsonError){
        console.error("invalid json: ", text);
        setStatus("Server returned invalid JSON.");
      }
      
      //console.log(result); // Debug response

      setStatus(result.message);

      if (result.status === "success") {
        setFormData({ name: "", email: "", message: "" });
        setUserResume(null);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-0 flex justify-center items-center z-50">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-tr-lg"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold uppercase text-[#038DAF] text-center mb-4"></h2>
        <form onSubmit={handleSubmit} className="space-y-4 " encType="multipart/form-data" >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Message (specify the team, postion and location you are applying for)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume</label>
            <input
              type="file"
              accept=".pdf , .doc , .docx"
              name="resume"
              onChange={handleResumeChange} // Handling file input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg cursor-pointer"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-companyBlue text-white font-bold uppercase py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </button>
        </form>
        {status && <p className="text-center mt-4 text-red-600">{status}</p>}
      </div>
    </div>
  );
}
