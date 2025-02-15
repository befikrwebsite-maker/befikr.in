"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function JobListings() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);

  // Dummy job data
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", description: "Build amazing UIs with React and Tailwind CSS." },
    { id: 2, title: "Backend Engineer", company: "DevSolutions", description: "Develop scalable APIs using Node.js and Express." },
    { id: 3, title: "Full Stack Developer", company: "InnovateX", description: "Work on both frontend and backend technologies." }
  ];

  // Read jobId from URL manually (since useSearchParams() doesn't work in static export)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const jobId = params.get("jobId");

    if (jobId) {
      const job = jobs.find((j) => j.id.toString() === jobId);
      setSelectedJob(job || null);
    } else {
      setSelectedJob(null);
    }
  }, []);

  // Open modal & update URL manually
  const openJob = (job) => {
    window.history.pushState({}, "", `?jobId=${job.id}`);
    setSelectedJob(job);
  };

  // Close modal & reset URL manually
  const closeJob = () => {
    window.history.pushState({}, "", "/admin"); // Removes jobId from the URL
    setSelectedJob(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition"
            onClick={() => openJob(job)}
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
        ))}
      </div>

      {/* Full-Screen Animated Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full h-full md:w-3/4 md:h-3/4 rounded-lg shadow-lg p-8 relative flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {/* Close Button */}
              <button
                onClick={closeJob}
                className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full"
              >
                ✖
              </button>

              {/* Job Details */}
              <h2 className="text-3xl font-bold">{selectedJob.title}</h2>
              <p className="text-gray-600 text-lg">{selectedJob.company}</p>
              <p className="mt-4 text-gray-800">{selectedJob.description}</p>

              {/* Apply Button */}
              <div className="mt-auto">
                <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full">
                  Apply Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
