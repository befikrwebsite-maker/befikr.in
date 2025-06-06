"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { FiEdit2, FiTrash2, FiEye, FiRefreshCw, FiPlus, FiSearch } from "react-icons/fi";
import { toast } from "react-toastify"; // if you want toast notifications

const ITEMS_PER_PAGE = 5;
const COLORS = ["#04B2D9", "#ef4444", "#10B981", "#FBBF24"];

const AdminDashboard = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState({});
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch jobs from API
  const fetchJobs = () => {
    fetch("http://befikr.in/get_jobs.php")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data.jobs || []);
        setApplicants(data.applicants || {});
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        toast.error("Failed to fetch jobs. Please try again later.");
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Derived values for filtering, pagination etc.
  const filteredJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(filterInput.toLowerCase())
  );

  const totalApplications = Object.values(applicants).flat().length;
  const newApplications = 5; // mock or get from API if available
  const activeCount = jobs.filter((j) => j.status === "active").length;
  const closedCount = jobs.filter((j) => j.status === "closed").length;
  const expiringJobs = jobs.filter(
    (j) => new Date(j.expiresAt) - new Date() < 7 * 24 * 60 * 60 * 1000
  );

  const mostActiveJob = Object.entries(applicants).reduce(
    (max, [jobId, apps]) =>
      apps.length > max.count ? { id: jobId, count: apps.length } : max,
    { id: null, count: 0 }
  );

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pieData = [
    { name: "Active", value: activeCount },
    { name: "Closed", value: closedCount },
  ];

  const barData = jobs.map((job) => ({
    title: job.position,
    applicants: applicants[job.id]?.length || 0,
  }));

  // Handlers
  const toggleStatus = (id) =>
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              status: job.status === "active" ? "closed" : "active",
            }
          : job
      )
    );

  const deleteJob = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this job posting?");
    if (!confirmed) return;
    fetch("https://befikr.in/delete_job.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Job deleted successfully!");
          setJobs((prev) => prev.filter((job) => job.id !== id));
        } else {
          toast.error("Error: " + data.error);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete job. Please try again.");
      });
  };

  const viewApplicants = (id) => {
    setSelectedApplicants(applicants[id] || []);
  };

  const handleSearch = (e) => {
    setFilterInput(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-extrabold text-[#04B2D9]">Admin Dashboard</h1>
        <div className="flex items-center gap-3 w-full max-w-md">
          <div className="relative flex-grow">
            <FiSearch
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="search"
              value={filterInput}
              onChange={handleSearch}
              placeholder="Search job title..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#04B2D9] focus:border-transparent transition"
            />
          </div>
          <button
            onClick={() => router.push("/admin/add")}
            className="inline-flex items-center gap-2 bg-[#04B2D9] text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-[#038ab7] transition"
          >
            <FiPlus size={20} /> Add Job
          </button>
        </div>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Open Positions", value: jobs.length },
          { label: "Total Applications", value: totalApplications },
          { label: "New This Week", value: newApplications },
          {
            label: "Most Active Job",
            value: jobs.find((j) => j.id == mostActiveJob.id)?.title || "N/A",
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-xl shadow p-6 flex flex-col justify-center items-center text-center"
          >
            <p className="text-gray-600 font-medium mb-2">{label}</p>
            <p className="text-3xl font-bold text-[#04B2D9]">{value}</p>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-xl mb-4">Job Status</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={90} label>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-xl mb-4">Applicants per Job</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="title" tick={{ fontSize: 14 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applicants" fill="#04B2D9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Expiring Jobs */}
      {expiringJobs.length > 0 && (
        <section className="bg-red-50 border border-red-300 rounded-xl p-6 mb-10">
          <h2 className="text-red-600 font-bold text-lg mb-3">
            ⚠️ Job Postings Near Expiration
          </h2>
          <ul className="list-disc list-inside text-red-700 text-lg font-medium space-y-1">
            {expiringJobs.map((job) => (
              <li key={job.id}>
                {job.position} - Expires on <strong>{job.expiresAt}</strong>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Jobs Table */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-6">Jobs Management</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-gray-700">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                {["Title", "Location", "Type", "Posted", "Expires", "Status", "Actions"].map(
                  (header) => (
                    <th key={header} className="py-3 px-4 font-semibold">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {paginatedJobs.map((job, idx) => (
                <tr
                  key={job.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-4">{job.position}</td>
                  <td className="py-3 px-4">{job.location}</td>
                  <td className="py-3 px-4">{job.type}</td>
                  <td className="py-3 px-4">{job.postedAt}</td>
                  <td className="py-3 px-4">{job.expiresAt}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      job.status === "active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <button
                      title="Toggle Status"
                      onClick={() => toggleStatus(job.id)}
                      className="p-2 text-[#04B2D9] hover:bg-[#04B2D9] hover:text-white rounded transition"
                    >
                      <FiRefreshCw size={18} />
                    </button>
                    <button
                      title="Edit"
                      onClick={() => router.push(`/admin/edit?id=${job.id}`)}
                      className="p-2 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded transition"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => deleteJob(job.id)}
                      className="p-2 text-red-500 hover:bg-red-500 hover:text-white rounded transition"
                    >
                      <FiTrash2 size={18} />
                    </button>
                    <button
                      title="View Applicants"
                      onClick={() => viewApplicants(job.id)}
                      className="p-2 text-gray-600 hover:bg-gray-600 hover:text-white rounded transition"
                    >
                      <FiEye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedJobs.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-gray-400 italic">
                    No jobs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from(
            { length: Math.ceil(filteredJobs.length / ITEMS_PER_PAGE) },
            (_, i) => i + 1
          ).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`w-4 h-4 rounded-full transition-all ${
                pageNum === currentPage
                  ? "bg-[#04B2D9] scale-110 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${pageNum}`}
              title={`Page ${pageNum}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
