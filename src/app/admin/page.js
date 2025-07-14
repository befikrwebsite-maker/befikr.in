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
import {
  FiEdit2,
  FiTrash2,
  FiEye,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";
import { toast } from "react-toastify";
import AdminLayout from "./comp/AdminLayout";
import AdminNavbar from "./comp/AdminNavbar";

const ITEMS_PER_PAGE = 5;
const COLORS = ["#04B2D9", "#ef4444", "#10B981", "#FBBF24"];

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    fetch("http://befikr.in/verify_token.php", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.role !== "admin") {
          router.push("/admin/login");
        } else {
          setAuth(data.user);
          setLoading(false);
        }
      })
      .catch(() => router.push("/admin/login"));
  }, []);

  if (loading) return <div>Loading...</div>;


const AdminDashboard = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [applicants, setApplicants] = useState({});
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);

  const fetchJobs = () => {
    fetch("http://befikr.in/get_jobs.php")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setJobs(data.jobs || []);
        setApplicants(data.applicants || {});
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        toast.error("Failed to fetch jobs.");
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

 

  const filteredJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(filterInput.toLowerCase())
  );

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalApplications = Object.values(applicants).flat().length;
  const newApplications = 5;
  const activeCount = jobs.filter((j) => j.status === "active").length;
  const closedCount = jobs.filter((j) => j.status === "closed").length;
  const expiringJobs = jobs.filter(
    (job) =>
      new Date(job.expiresAt) - new Date() < 7 * 24 * 60 * 60 * 1000 &&
      job.status === "active"
  );

  const allApplicants = Object.values(applicants || {}).flat();
  const countMap = allApplicants.reduce((acc, a) => {
    acc[a.position] = (acc[a.position] || 0) + 1;
    return acc;
  }, {});

  const mostActiveJob = Object.entries(countMap).reduce(
    (max, [title, count]) => {
      return count > max.count ? { id: title, count } : max;
    },
    { id: "", count: 0 }
  );

  const pieData = [
    { name: "Active", value: activeCount },
    { name: "Closed", value: closedCount },
  ];

  const barData = Object.entries(countMap).map(([title, count]) => ({
    title,
    applicants: count,
  }));

  const updateJobStatus = (id, status) => {
    fetch("https://befikr.in/update_job.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Job status updated successfully!");
          setJobs((prev) =>
            prev.map((job) => (job.id === id ? { ...job, status } : job))
          );
        } else {
          toast.error("Error: " + data.error);
        }
      })
      .catch(() => toast.error("Failed to update job status."));
  };

  const deleteJob = (id) => {
    if (!window.confirm("Are you sure you want to delete this job posting?")) return;
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
      .catch(() => toast.error("Failed to delete job."));
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
      <AdminLayout
        jobs={jobs}
        totalApplications={totalApplications}
        newApplications={newApplications}
        mostActiveJob={mostActiveJob}
        pieData={pieData}
        barData={barData}
        expiringJobs={expiringJobs}
        paginatedJobs={paginatedJobs}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        updateJobStatus={updateJobStatus}
        deleteJob={deleteJob}
        editJob={(id) => router.push(`/admin/edit?id=${id}`)}
        viewApplicants={viewApplicants}
        currentPage={currentPage}
        goToPage={goToPage}
        selectedApplicants={selectedApplicants}
      />
    </>
  );
};

export default AdminDashboard;
