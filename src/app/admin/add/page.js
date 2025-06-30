"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../comp/AdminNavbar";

const CreateJobForm = () => {

  const [auth, setAuth] = useState(null);

   useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return router.push("/admin/login");

    fetch("http://befikr.in/verify_token.php", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.user.role !== "admin") throw new Error();
        setAuth(data.user);
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    await fetch("http://befikr.in/create_user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    alert("User Created");
  };

  if (!auth) return <div>Loading...</div>;

  const router = useRouter();

  const [form, setForm] = useState({
    position: "",
    team: "",
    location: [],
    description: "",
    tags: [],
    pay: "",
    job_type: "",
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [],
    experience: [],
    travel: [],
    work_location: "",
    expected_start_date: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const arrayFields = [
      "location",
      "tags",
      "responsibilities",
      "skills",
      "benefits",
      "schedule",
      "supplemental_pay",
      "questions",
      "experience",
      "travel",
    ];

    setForm({
      ...form,
      [name]: arrayFields.includes(name)
        ? value.split(",").map((v) => v.trim())
        : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://befikr.in/create_job.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Job posted successfully!");
        setForm((prev) =>
          Object.fromEntries(
            Object.entries(prev).map(([k, v]) => [k, Array.isArray(v) ? [] : ""])
          )
        );
      } else {
        alert("❌ Failed: " + data.error);
      }
    } catch (err) {
      alert("❌ Network error.");
    }
  };

  const formGroups = {
    "Basic Info": [
      ["Position", "position"],
      ["Team", "team"],
      ["Location (comma separated)", "location"],
      ["Job Type", "job_type"],
    ],
    Description: [["Description", "description"]],
    "Compensation Details": [
      ["Pay (monthly/yearly)", "pay"],
      ["Benefits (comma separated)", "benefits"],
      ["Supplemental Pay (comma separated)", "supplemental_pay"],
    ],
    Requirements: [
      ["Skills (comma separated)", "skills"],
      ["Experience (comma separated)", "experience"],
      ["Schedule (comma separated)", "schedule"],
      ["Travel (comma separated)", "travel"],
    ],
    Additional: [
      ["Responsibilities (comma separated)", "responsibilities"],
      ["Questions (comma separated)", "questions"],
      ["Work Location", "work_location"],
      ["Expected Start Date", "expected_start_date"],
      ["Tags (comma separated)", "tags"],
    ],
  };

  return (
    <>
      <AdminNavbar />
      <div className="max-w-7xl mx-auto p-8 bg-white rounded-2xl shadow-xl my-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">📝 Post a New Job</h1>
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Go Back"
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {Object.entries(formGroups).map(([section, fields]) => (
            <div key={section}>
              <h2 className="text-xl font-semibold text-companyBlue border-l-4 border-companyBlue pl-3 mb-4">
                {section}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map(([label, name]) => (
                  <div key={name} className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                      {label}
                    </label>
                    {name === "description" ? (
                      <textarea
                        name={name}
                        rows={5}
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-companyBlue focus:outline-none"
                        placeholder="Enter detailed job description..."
                        value={form[name]}
                        onChange={handleChange}
                        required
                      />
                    ) : (
                      <input
                        type={name === "expected_start_date" ? "date" : "text"}
                        name={name}
                        value={Array.isArray(form[name]) ? form[name].join(", ") : form[name]}
                        onChange={handleChange}
                        required={["position", "team", "location", "description", "job_type"].includes(name)}
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-companyBlue focus:outline-none"
                        placeholder={
                          label.includes("comma") ? 'e.g. Item 1, Item 2, Item 3' : ""
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 text-white bg-companyBlue hover:bg-opacity-90 rounded-xl font-semibold text-lg transition"
          >
            ➕ Post Job
          </button>
        </form>
      </div>
    </>
  );
};


export default CreateJobForm;
