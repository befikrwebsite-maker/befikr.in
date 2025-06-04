"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { FiEdit2, FiTrash2, FiEye, FiRefreshCw, FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import JobCard from './comp/Card';
import JobFormModal from './comp/JobFormModal';

const COLORS = ['#04B2D9', '#ef4444']; // company blue and red

const AdminDashboard = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [jobCount, setJobCount] = useState(0);
  const [applicants, setApplicants] = useState({});
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchJobs = () => {
    fetch('http://befikr.in/get_jobs.php') // Update path accordingly
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data.jobs || []);
        setJobCount(data.jobs_count);
        setApplicants(data.applicants || {});
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      });
  }

    useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const dummyApplicants = {
      1: [{ name: 'Alice' }, { name: 'Bob' }],
      2: [{ name: 'Charlie' }],
    };
    setApplicants(dummyApplicants);
  }, []);

  const activeCount = jobs.filter(j => j.status === 'active').length;
  const closedCount = jobs.filter(j => j.status === 'closed').length;

  const toggleStatus = (id) => {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, status: job.status === 'active' ? 'closed' : 'active' } : job
    ));
  };

  const deleteJob = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this job posting?');
    if (!confirmed) return;
    fetch('https://befikr.in/delete_job.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast.success('Job deleted successfully!');
          setJobs(jobs.filter(job => job.id !== id));
        } else {
          toast.error('Error: ' + data.error);
        }
      })
      .catch(err => console.error(err));
  };

  const viewApplicants = (id) => {
    setSelectedApplicants(applicants[id] || []);
  };

  const data = [
    { name: 'Active', value: activeCount, color: COLORS[0] },
    { name: 'Closed', value: closedCount, color: COLORS[1] },
  ];

  const parse = (str) => {
    try {
      return JSON.parse(str);
    } catch {
      return [];
    }
  };



  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontWeight="bold"
        fontSize={14}
        style={{ userSelect: 'none' }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-tr from-gray-50 to-gray-100 font-sans text-gray-900 select-none animate-fadeIn">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:mb-0 text-[#04B2D9]">
          Admin Dashboard
        </h1>
        <Button
          onClick={() => router.push('/admin/add')}
          className="inline-flex items-center gap-2 px-5 py-2 text-white bg-[#04B2D9] hover:bg-[#039fc5] shadow-lg transition rounded-md font-semibold"
        >
          <FiPlus size={18} />
          Add Job
        </Button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {[{ label: 'Total Jobs', value: jobCount },
        { label: 'Total Applicants', value: Object.values(applicants).flat().length },
        { label: 'Active Jobs', value: activeCount }].map(({ label, value }) => (
          <Card key={label} className="shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-gray-500 uppercase font-semibold">{label}</p>
              <p className="mt-2 text-3xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Donut Chart */}
      <Card className="shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition mb-10">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#04B2D9]">
            Active vs Closed Jobs
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                dataKey="value"
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                label={renderCustomizedLabel}
                isAnimationActive={true}
                stroke="#fff"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value} job${value > 1 ? 's' : ''}`}
                contentStyle={{ backgroundColor: '#f9fafb', borderRadius: '8px', borderColor: '#ddd' }}
              />
              <Legend
                verticalAlign="bottom"
                height={40}
                formatter={(value, entry) => <span style={{ color: entry.color, fontWeight: '600' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card className="shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-8 text-[#04B2D9]">
            Jobs Management
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  {['Title', 'Location', 'Type', 'Status', 'Actions'].map((head) => (
                    <th key={head} className="p-4 text-left font-semibold text-gray-700 select-none">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => (
                  <tr
                    key={job.id}
                    className="bg-white border-t border-gray-200 hover:bg-[#04B2D9]/10 transition cursor-default"
                  >
                    <td className="p-4">{job.position}</td>
                    <td className="p-4">{parse(job.location)}</td>
                    <td className="p-4">{job.job_type}</td>
                    <td
                      className={`p-4 capitalize font-semibold ${job.status === 'active' ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {job.status}
                    </td>
                    <td className="p-4 space-x-2 whitespace-nowrap">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 hover:bg-green-100 text-green-700 border-green-700 transition"
                        onClick={() => toggleStatus(job.id)}
                      >
                        <FiRefreshCw />
                        {job.status === 'active' ? 'Close' : 'Activate'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 hover:bg-blue-100 text-blue-700 border-blue-700 transition"
                        onClick={() => { setEditingJob(job); setModalOpen(true); }}
                      >
                        <FiEdit2 />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex items-center gap-1 px-3 py-1 hover:bg-red-100 text-red-700 border-red-700 transition"
                        onClick={() => deleteJob(job.id)}
                      >
                        <FiTrash2 />
                        Delete
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 hover:bg-gray-100 text-gray-700 border-gray-700 transition"
                        onClick={() => viewApplicants(job.id)}
                      >
                        <FiEye />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <JobFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        editingJob={editingJob}
        onSaved={fetchJobs}
      />

      {/* Applicants View */}
      {selectedApplicants.length > 0 && (
        <Card className="fixed bottom-10 right-10 max-w-xs w-full shadow-lg rounded-xl border border-gray-300 bg-white z-50 animate-slideIn">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#04B2D9]">Applicants</h3>
            <ul className="list-disc list-inside text-gray-800 max-h-60 overflow-y-auto">
              {selectedApplicants.map((app, idx) => (
                <li key={idx} className="mb-1">{app.name}</li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full"
              onClick={() => setSelectedApplicants([])}
              variant="outline"
            >
              Close
            </Button>
          </CardContent>
        </Card>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
