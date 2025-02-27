"use client";

import Navbar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./form";
import { Listbox, Transition } from "@headlessui/react";
import Footer from "@/components/Footer";

export default function Page() {
  const cards = [
    {
      id: 1,
      team: " Logistics Coordinator ",
      position: "E-Waste Collection",
      location: ["Delhi NCR"],
      desc: "We are seeking a proactive and detail-oriented Logistics Coordinator to manage our e-waste pickup operations from households based out of Delhi NCR.",
      tags: ["mac"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    },
    {
      id: 2,
      team: "team 1",
      position: "pos 2",
      location: ["loc 3", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["machine"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    },
    {
      id: 3,
      team: "team 1",
      position: "pos 3",
      location: ["loc 1", "loc 2", "loc 4"],
      desc: "Lorem Ipsum",
      tags: ["machine", "learning"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    },
    {
      id: 4,
      team: "team 2",
      position: "pos 1",
      location: ["loc 5"],
      desc: "Lorem Ipsum",
      tags: ["learning"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    },
    {
      id: 5,
      team: "team 3",
      position: "pos 2",
      location: ["loc 5", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["work"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    },
    {
      id: 6,
      team: "team 3",
      position: "pos 1",
      location: ["loc 1", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["work", "machine", "learning"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    },
    {
      id: 7,
      team: "team 2",
      position: "pos 2",
      location: ["loc 1", "loc 2", "loc 3", "loc 4"],
      desc: "Lorem Ipsum",
      tags: ["hello", "Learning", "work"],
      budget: "INR 17K-20K",
      jobtype: "fulltime"
    }
  ];

  // show form ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [formVisible, setFormVisible] = useState(false);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // search filter ///////////////////////////////////////////////////////////////////////////////////////////////////////
  function searchFilter(query) {
    if (!query.length || query[0] === "") {
      return cards
    }
    return cards.filter((em) => query.every(qe => em.tags.map(el => el.toLowerCase()).includes(qe)))
  }
  // setting the user input from the search
  const [query, setQuery] = useState([""]);
  const filtered = searchFilter(query);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // extracting unique teams positoins and locations /////////////////////////////////////////////////////////////////////
  const uniqueTeams = [...new Set(cards.map(el => el.team))];
  const uniquePositions = [...new Set(cards.map(el => el.position))];
  const locations = new Set()
  cards.map(el => el.location.map(em => locations.add(em)))
  const uniqueLocations = [...locations];

  // State for selected filters
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const checkboxFilter = (job) =>
    (selectedTeams.length === 0 || selectedTeams.includes(job.team)) &&
    (selectedPositions.length === 0 || selectedPositions.includes(job.position)) &&
    (selectedLocations.length === 0 || job.location.some((loc) => selectedLocations.includes(loc)));

  // Apply both filters
  const filteredJobs = filtered.filter((job) => checkboxFilter(job));

  // Count Matching Jobs for Each Filter Option
  const getFilterCount = (filterType, value) => {
    return cards.filter((job) => {
      if (filterType === "team") return job.team === value;
      if (filterType === "position") return job.position === value;
      if (filterType === "location") return job.location.includes(value);
      return false;
    }).length;
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // using modalcomponent here ///////////////////////////////////////////////////////////////////////////////////////////
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);

  // Read jobId from URL manually (since useSearchParams() doesn't work in static export)
  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    const jobId = param.get("jobId");

    if (jobId) {
      const job = cards.find((j) => j.id.toString() === jobId);
      setSelectedJob(job || null);
    } else {
      setSelectedJob(null);
    }
  }, []);
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);


  // Open modal & update URL manually
  const openJob = (job) => {
    window.history.pushState({}, "", `?jobId=${job.id}`);
    setSelectedJob(job);
  };

  // Close modal & reset URL manually
  const closeJob = () => {
    window.history.pushState({}, "", "/career/job"); // Removes jobId from the URL
    window.history.pushState({}, "", "/career/job"); // Removes jobId from the URL
    setSelectedJob(null);
    setFormVisible(false);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f5] px-10 py-5 flex flex-col items-center">
        <div className="bg-white px-10 py-5 w-full max-w-7xl rounded-lg shadow-lg mt-8">
          <div className="text-left text-xl py-5 text-[#038DAF] font-generalSansBold tracking-wider ">Job Openings</div>
          <div className="w-full max-w-6xl">
            <div className="flex px-4 py-2 rounded-md bg-[#f5f5f5] overflow-hidden border-2 w-full font-[sans-serif] ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
                className="fill-companyBlue mr-3 rotate-90 font-extrabold ">
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input type="text" placeholder="Search Keywords" className="w-full outline-none bg-transparent text-gray-600 text-sm "
                onChange={(e) => { setQuery(e.target.value.toLowerCase().split(" ")); }}
              />
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="w-full max-w-6xl flex flex-wrap justify-center gap-3 px-6 mt-6 xl:gap-[3.5rem] lg:gap-[0.5rem] md:gap-[1.5rem] sm:gap-[1.5rem]">
            <Dropdown
              label="Team"
              options={uniqueTeams}
              selected={selectedTeams}
              setSelected={setSelectedTeams}
              getFilterCount={(team) => getFilterCount("team", team)}
            />
            <Dropdown
              label="Position"
              options={uniquePositions}
              selected={selectedPositions}
              setSelected={setSelectedPositions}
              getFilterCount={(position) => getFilterCount("position", position)}
            />
            <Dropdown
              label="Location"
              options={uniqueLocations}
              selected={selectedLocations}
              setSelected={setSelectedLocations}
              getFilterCount={(location) => getFilterCount("location", location)}

            />
          </div>

          {/* Job Count */}
          <div className="flex text-gray-900 justify-center mt-4">
            <p className="text-gray-900 tracking-wide font-bold">
              Showing {filteredJobs.length} Jobs among the applied filters
            </p>
          </div>
        </div>


        <div className="py-10 px- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full max-w-7xl">
          {filteredJobs.map((items, index) => (
            <div
              key={items.id}
              onClick={() => openJob(items)}
              className="w-full max-w-[450px] h-auto sm:h-[240px] md:h-[230px] lg:h-[220px] rounded-lg bg-white shadow-md p-4 sm:p-5 flex flex-col justify-between transition duration-300 border transform hover:border-companyBlue hover:shadow-2xl"
            >
              <div className="flex flex-col ">
                <p className="text-gray-900 text-base sm:text-lg font-generalSansSemibold ">{items.team}</p>
                <p className="text-gray-700 font-generalSansMedium text-sm sm:text-base ">{items.position}</p>
                <div className="flex flex-wrap gap-1 text-gray-700 text-xs sm:text-sm mt-2">
                  {Array.isArray(items.location) ? items.location.map((loc, i) => (
                    <span key={i} className="bg-white-200  py-1 rounded-md">{loc}</span>
                  )) : null}
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="bg-sky-100 text-companyBlue font-generalSansRegular px-2 py-1 rounded-md text-xs sm:text-sm cursor-default">{items.budget}</button>
                  <button className="bg-sky-100 text-companyBlue font-generalSansRegular px-2 py-1 rounded-md text-xs sm:text-sm cursor-default">{items.jobtype}</button>
                </div>
              </div>
              <button
                onClick={() => setFormVisible(false)}
                className="text-white font-generalSansSemibold tracking-wide  text-l bg-companyBlue px-3 py-2 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-3 hover:bg-cyan-50 hover:text-companyBlue hover:shadow-lg transition duration-300"
              >
                More Details
              </button>
            </div>
          ))}
        </div>


        {/* Full-Screen Animated Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white w-full h-full  md:w-3/4 md:h-3/4 rounded-lg shadow-lg p-8 relative flex flex-col overflow-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Close Button */}
                <button
                  onClick={closeJob}
                  className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-tr-lg"
                >
                  ✖
                </button>

                {/* Job Details */}
                <h2 className="text-3xl font-bold">{selectedJob.team}</h2>
                <p className="text-gray-600 text-lg">{selectedJob.position}</p>
                <p className="mt-4 text-gray-800">Location: {selectedJob.location}</p>
                <p className=" text-gray-800">Field: {selectedJob.tags}</p>
                <p className=" text-gray-800">Job ID: {selectedJob.id}</p>
                <p className="mt-4 text-gray-800">{selectedJob.desc}</p>

                {/* apply with email integration */}
                {formVisible && <Form onClose={() => setFormVisible(false)} />}


                {/* Apply Button */}
                <div className="mt-auto">
                  <button onClick={() => setFormVisible(true)} className="mt-6 bg-companyBlue text-white px-6 py-3 rounded-lg w-full">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <Footer />
    </>
  );
};


// Dropdown Component using Headless UI
function Dropdown({ label, options, selected, setSelected, getFilterCount }) {
  return (
    <Listbox value={selected} onChange={setSelected} multiple>
      <div className="relative">
        <Listbox.Button className="flex text-gray-900 tracking-wide font-bold bg-[#f5f5f5] border rounded-md w-80  justify-center py-1 xl:w-[18rem] lg:w-[16rem] md:w-[10rem] sm:w-[8rem]  hover:shadow-lg transition duration-300 ">
          {label}
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute mt-2 w-80 bg-white border rounded-md shadow-lg z-10 xl:w-[18rem] lg:w-[16rem] md:w-[10rem] sm:w-[8rem]">
            {options.map((option, index) => (
              <Listbox.Option key={index} value={option} as="div">
                {({ selected }) => (
                  <label className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-900 ">
                    <input
                      type="checkbox"
                      checked={selected}
                      readOnly
                      className="mr-2"
                    />
                    {option}
                    <div className="">
                      <span className="text-gray-500 px-2">({getFilterCount(option)})</span>
                    </div>
                  </label>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}