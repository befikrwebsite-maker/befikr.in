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
import AdminNavbar from "./comp/AdminNavbar";
const ITEMS_PER_PAGE = 5;
const COLORS = ["#04B2D9", "#ef4444", "#10B981", "#FBBF24"];

const AdminDashboard = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState({});
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);

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

  // Check authentication
  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (!token) {
  //     router.push("/admin/login");
  //     return;
  //   }

  //   fetch("http://befikr.in/verify_token.php", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.user?.role !== "admin") {
  //         router.push("/admin/login");
  //       } else {
  //         setAuth(data.user);
  //         setLoading(false);
  //       }
  //     })
  //     .catch(() => router.push("/admin/login"));
  // }, []);

  // if (loading) return <div>Loading...</div>;


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

  const allApplicants = Object.values(applicants || {}).flat();

  const countMap = allApplicants.reduce((acc, a) => {
    acc[a.position] = (acc[a.position] || 0) + 1;
    return acc;
  }, {});

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pieData = [
    { name: "Active", value: activeCount },
    { name: "Closed", value: closedCount },
  ];

  const barData = Object.entries(countMap).map(([title, count]) => ({
    jobTitle: title,
    applicants: count
  }));

  console.log(barData)

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

  const updateJobStatus = (id, status) => {
    fetch("https://befikr.in/job_status.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Job status updated successfully!");
          setJobs((prev) =>
            prev.map((job) =>
              job.id === id ? { ...job, status } : job
            )
          );
        } else {
          toast.error("Error: " + data.error);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update job status. Please try again.");
      });
  }

  const editJob = (id) => {
    fetch('https://befikr.in/update_job.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Job updated successfully!");
          setJobs((prev) =>
            prev.map((job) =>
              job.id === id ? { ...job, ...data.job } : job
            )
          );
        } else {
          toast.error("Error: " + data.error);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update job. Please try again.");
      });
  };

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
    <>
    <AdminNavbar />
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
  {/* Header */}
  <header className="flex flex-wrap justify-between items-center mb-10 gap-4">
    <div className="flex flex-wrap gap-3 w-full md:w-full">
      <div className="relative flex-grow w-full md:flex-grow-0 md:w-full">
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="search"
          value={filterInput}
          onChange={handleSearch}
          placeholder="Search job title..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#04B2D9] transition"
        />
      </div>
    </div>
  </header>

  {/* Stats */}
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
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
        className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition"
      >
        <p className="text-gray-500 font-medium mb-2">{label}</p>
        <p className="text-4xl font-bold text-[#04B2D9]">{value}</p>
      </div>
    ))}
  </section>

  {/* Charts */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="font-semibold text-xl text-gray-800 mb-4">Job Status</h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie data={pieData} dataKey="value" outerRadius={90} label>
            {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="font-semibold text-xl text-gray-800 mb-4">Applicants per Job</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={barData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="title" tick={{ fontSize: 13 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="applicants" fill="#04B2D9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </section>

  {/* Expiring Jobs */}
  {expiringJobs.length > 0 && (
    <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10 shadow-sm">
      <h2 className="text-red-600 font-semibold text-lg mb-3">
        ⚠️ Job Postings Near Expiration
      </h2>
      <ul className="list-disc list-inside text-red-700 text-base font-medium space-y-1">
        {expiringJobs.map((job) => (
          <li key={job.id}>
            {job.position} - Expires on <strong>{job.expiresAt}</strong>
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Jobs Table */}
  <section className="bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Jobs Management</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-gray-700 text-sm md:text-base">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {["Title", "Location", "Type", "Posted", "Expires", "Status", "Actions"].map(
              (header) => (
                <th key={header} className="py-3 px-4 font-semibold text-gray-600">
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
              <td className="py-3 px-4">{job.job_type}</td>
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
                  onClick={() => updateJobStatus(job.id, job.status === "active" ? "closed" : "active")}
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
      {Array.from({ length: Math.ceil(filteredJobs.length / ITEMS_PER_PAGE) }, (_, i) => i + 1).map(
        (pageNum) => (
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
        )
      )}
    </div>
  </section>
</div>

  </>

  );
};

export default AdminDashboard;
