
"use client";

import React from "react";
import Link from "next/link";
import { FiHome, FiList, FiUsers, FiEdit3 } from "react-icons/fi";
import { FiSearch, FiRefreshCw, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
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

const COLORS = ["#04B2D9", "#ef4444"];

const AdminLayout = ({
  jobs,
  totalApplications,
  newApplications,
  mostActiveJob,
  pieData,
  barData,
  expiringJobs,
  paginatedJobs,
  filterInput,
  setFilterInput,
  updateJobStatus,
  deleteJob,
  editJob,
  viewApplicants,
  currentPage,
  goToPage,
}) => {
  return (
    <div className="flex min-h-screen font-sans bg-gradient-to-tr from-blue-50 via-white to-cyan-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#04B2D9] to-[#057eac] text-white shadow-xl px-4 py-6">
        <h2 className="text-3xl font-bold mb-10 text-center tracking-wide">Admin</h2>
        <nav className="space-y-3">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10">
            <FiHome /> Dashboard
          </Link>
          <Link href="/admin/add" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10">
            <FiList /> Add Job
          </Link>
          <Link href="/admin/createuser" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10">
            <FiEdit3 /> Create User
          </Link>
          <Link href="/admin/testimonials" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10">
            <FiUsers /> Testimonials
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10">
            <FiList /> Services
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-6 overflow-auto">


        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[{
            label: "Total Open Positions",
            value: jobs.length
          }, {
            label: "Total Applications",
            value: totalApplications
          }, {
            label: "New This Week",
            value: newApplications
          }, {
            label: "Most Active Job",
            value: mostActiveJob.title || "N/A"
          }].map(({ label, value }) => (
            <div key={label} className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition">
              <p className="text-gray-500 mb-2 text-sm font-medium">{label}</p>
              <p className="text-3xl font-bold text-[#04B2D9]">{value}</p>
            </div>
          ))}
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Job Status</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={80} label>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Applicants per Job</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="title" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applicants" fill="#04B2D9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Expiring Jobs */}
        {expiringJobs.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
            <h3 className="text-red-600 font-semibold mb-3">⚠️ Jobs Expiring Soon</h3>
            <ul className="list-disc list-inside text-sm text-red-700">
              {expiringJobs.map((job) => (
                <li key={job.id}>{job.position} - Expires on <strong>{job.expiresAt}</strong></li>
              ))}
            </ul>
          </div>
        )}

        {/* Search */}
        <div className="mb-6 relative w-full md:w-1/2">
          <FiSearch className="absolute top-3.5 left-3 text-gray-400" />
          <input
            type="search"
            value={filterInput}
            onChange={(e) => {
              setFilterInput(e.target.value);
              goToPage(1);
            }}
            placeholder="Search job title..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#04B2D9]"
          />
        </div>

        {/* Job Table */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Jobs Management</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  {['Title', 'Location', 'Type', 'Posted', 'Expires', 'Status', 'Actions'].map(h => (
                    <th key={h} className="p-3 text-sm font-semibold text-gray-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedJobs.map((job, idx) => (
                  <tr
                    key={job.id}
                    className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-3">{job.position}</td>
                    <td className="p-3">{job.location}</td>
                    <td className="p-3">{job.job_type}</td>
                    <td className="p-3">{job.postedAt}</td>
                    <td className="p-3">{job.expiresAt}</td>
                    <td className={`p-3 font-semibold ${job.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </td>
                    <td className="p-3 flex gap-2">
                      <button onClick={() => updateJobStatus(job.id, job.status === "active" ? "closed" : "active")}
                              title="Toggle Status"
                              className="p-1.5 text-[#04B2D9] hover:bg-[#04B2D9] hover:text-white rounded">
                        <FiRefreshCw size={16} />
                      </button>
                      <button onClick={() => editJob(job.id)}
                              title="Edit"
                              className="p-1.5 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded">
                        <FiEdit2 size={16} />
                      </button>
                      <button onClick={() => deleteJob(job.id)}
                              title="Delete"
                              className="p-1.5 text-red-500 hover:bg-red-500 hover:text-white rounded">
                        <FiTrash2 size={16} />
                      </button>
                      <button onClick={() => viewApplicants(job.id)}
                              title="View Applicants"
                              className="p-1.5 text-gray-600 hover:bg-gray-600 hover:text-white rounded">
                        <FiEye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: Math.ceil(jobs.length / 5) }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`w-4 h-4 rounded-full transition-all ${pageNum === currentPage
                    ? "bg-[#04B2D9] scale-110 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;