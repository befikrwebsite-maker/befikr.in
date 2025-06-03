"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";

const AddJobPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    status: "active",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added Job:", formData);
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#f0fbff] px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#04B2D9]">Post a New Job</h1>
        <p className="text-gray-600 mt-2 text-sm">Fill in the job details below and publish the opening for candidates.</p>
      </div>

      {/* Job Form Card */}
      <Card className="w-full max-w-3xl border border-gray-200 shadow-xl rounded-xl transition hover:shadow-2xl bg-white">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#04B2D9]">Job Information</h2>
          <hr className="border-gray-200" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                name="title"
                placeholder="e.g. Frontend Developer"
                onChange={handleChange}
                value={formData.title}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                name="location"
                placeholder="e.g. Remote, Bengaluru"
                onChange={handleChange}
                value={formData.location}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
              <input
                name="salary"
                placeholder="e.g. ₹10,00,000 per annum"
                onChange={handleChange}
                value={formData.salary}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Describe the job role, requirements and responsibilities."
                onChange={handleChange}
                value={formData.description}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9] transition"
                rows={5}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04B2D9] transition"
              >
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <Button
              type="submit"
              className="mt-4 w-full bg-[#04B2D9] hover:bg-[#039fc5] text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Post Job
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Optional Summary Section */}
      <div className="mt-12 w-full max-w-3xl text-sm text-gray-500 text-center">
        <p>After adding, you’ll be redirected to the Admin Dashboard where you can view and manage all job postings.</p>
      </div>
    </div>
  );
};

export default AddJobPage;
