"use client";

import { useState, useEffect } from "react";

export default function Form({ questions, team, position, locations, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [questionAnswers, setQuestionAnswers] = useState(
    questions.reduce((acc, question) => {
      acc[question] = "";
      return acc;
    }, {})
  );

  const handleAnswerChange = (question, value) => {
    setQuestionAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const [resume, setResume] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(""); // "", "ongoing", "success", "failed"
  const [serverMessage, setServerMessage] = useState("");
  const [countdown, setCountdown] = useState(4);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      setSubmitStatus("failed");
      setServerMessage("Please upload a resume.");
      return;
    }
    if (selectedLocation.length === 0){
      setSubmitStatus("failed");
      setServerMessage("Please select a location.");
      return;
    }

    setSubmitStatus("ongoing");

    const form = new FormData();
    //form.append("application_id", id);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("team", team);
    form.append("position", position);
    form.append("location", selectedLocation.join(", "));
    form.append("qa_pairs", JSON.stringify(questionAnswers));
    form.append("resume", resume);

    try {
      const response = await fetch("https://befikr.in/mailmailer.php", {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      let result = JSON.parse(text);

      setServerMessage(result.message);

      if (result.status === "success") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setResume(null);
        setSelectedLocation([]);
      } else {
        setSubmitStatus("failed");
      }
    } catch (error) {
      setSubmitStatus("failed");
      setServerMessage("Something went wrong while sending your message.");
    }
  };

  useEffect(() => {
    if (submitStatus === "success") {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setSubmitStatus("");
            setCountdown(4);
            if (onClose) onClose(); // optional
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [submitStatus]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-companyBlue mb-4">Apply Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        {["name", "email"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium mb-1 capitalize">{field}</label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-gray-700 font-medium mb-1">Team</label>
          <p className="px-3 py-2 border rounded-lg">{team}</p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Position</label>
          <p className="px-3 py-2 border rounded-lg">{position}</p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Location</label>
          <p className="text-xs text-gray-500 mb-2">Tap to select one or more locations</p>
          <div className="flex flex-wrap gap-2 border p-2 rounded-lg">
            {locations.map((item) => (
              <span
                key={item}
                onClick={() => handleLocationChange(item)}
                className={`cursor-pointer px-2 py-1 rounded ${selectedLocation.includes(item)
                    ? "bg-companyBlue text-white"
                    : "border border-gray-300 hover:border-companyBlue"
                  }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {questions.map((question, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-1">{question}</label>
            <input
              type="text"
              value={questionAnswers[question]}
              onChange={(e) => handleAnswerChange(question, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-companyBlue"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-companyBlue"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="w-full px-3 py-2 border rounded-lg cursor-pointer"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitStatus === "ongoing"}
          className="w-full bg-companyBlue text-white font-bold uppercase py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {submitStatus === "ongoing" ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Apply Now"
          )}
        </button>
      </form>

      {serverMessage && submitStatus === "failed" && (
        <p className="text-center mt-4 text-red-600">{serverMessage}</p>
      )}

      {submitStatus === "success" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center w-80 shadow-xl animate-fadeIn">
            <div className="mx-auto mb-4">
              <svg className="text-green-500 w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-companyBlue">Application Submitted!</h2>
            <p className="text-sm text-gray-700 mt-2">We’ve received your application.</p>
            <p className="text-xs text-gray-500 mt-2">Closing in {countdown} second{countdown !== 1 && "s"}...</p>
          </div>
        </div>
      )}
    </div>
  );
}
