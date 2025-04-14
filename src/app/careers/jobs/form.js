"use client";

import { useState, useEffect } from "react";


export default function Form({ team, position, locations, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // resume: null, // Added for file input
  });

  // only three possible values - failed, ongoing, success
  const [submitStatus, setSubmitStatus] = useState("");

  const [userResume, setUserResume] = useState(null);

  const [status, setStatus] = useState("");

  const [selectedLocation, setSelectedLocation] = useState([]);

  const joinedLocations = selectedLocation.join(", ");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file input
    }));
  };

  const handleLocationChange = (location) => {
    if (selectedLocation.includes(location)) {
      setSelectedLocation((prev) => prev.filter((item) => item !== location));
    } else {
      setSelectedLocation((prev) => [...prev, location]);
    }
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
    form.append("team", team);
    form.append("position", position);
    form.append("location", joinedLocations);
    form.append("resume", userResume);

    // // Debugging: Check FormData contents
    // for (let [key, value] of form.entries()) {
    //   console.log(key, value);
    // }

    try {
      const response = await fetch("https://befikr.in/mailmailer.php", {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
        //console.log("server response: ", result);
      } catch (jsonError) {
        console.error("invalid json: ", text);
        setSubmitStatus("failed");
        setStatus("Server returned invalid JSON.");
      }

      //console.log(result); // Debug response

      setStatus(result.message);

      if (result.status === "success") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setUserResume(null);
      }
    } catch (error) {
      //console.error("Fetch error:", error);
      setSubmitStatus("failed");
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full mx-auto mt-10">
      <h2 className="text-2xl font-generalSansSemibold text-companyBlue mb-4">Apply Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
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
          <label className="block text-gray-700 font-medium mb-1">Team</label>
          <p className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue">
            {team}
          </p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Position</label>
          <p className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue">
            {position}
          </p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Locaiton <p className="block text-gray-700 mb-1 text-xs ">
              Tap the locations you want to select
            </p>
          </label>
          <div className="flex flex-wrap gap-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue">
            {locations.map((item, index) => (
              <span key={index} onClick={() => handleLocationChange(item)}
                className={`inline-block rounded select-none cursor-pointer ${selectedLocation.includes(item)
                  ? "border border-companyBlue bg-companyBlue text-white "
                  : "hover:border hover:border-companyBlue "}`}>
                <div className="m-1" >
                  {item}
                </div>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Message</label>
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
            accept=".pdf, .doc, .docx"
            name="resume"
            onChange={handleResumeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg cursor-pointer"
            required
          />
        </div>

        <button
          type="submit"
          onClick={() => setSubmitStatus("ongoing")}
          className="w-full bg-companyBlue text-white font-bold uppercase py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <div className="flex justify-center">
            {((submitStatus !== "failed") && (submitStatus === "ongoing")) ? (
              <div className="flex justify-center items-center" role="status">
                <svg aria-hidden="true" className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
              </div>
            ) : (<div className=""></div>)}
            {((submitStatus !== "failed") && (submitStatus === "success")) ? (
              <div className="flex justify-center items-center">
                <svg className="w-4 h-4 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              </div>
            ) : (<div className=""></div>)}
            Apply Now
          </div>

        </button>
      </form>
      {status && <p className="text-center mt-4 text-red-600">{status}</p>}
    </div>
  );
};
