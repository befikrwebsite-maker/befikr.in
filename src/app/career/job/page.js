"use client";

import Navbar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./form";
import { Listbox,Transition } from "@headlessui/react";

export default function Page() {
  const cards = [
    {
      id: 1,
      team: "team 1",
      position: "pos 1",
      location: ["loc 1", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["mac"]
    },
    {
      id: 2,
      team: "team 1",
      position: "pos 2",
      location: ["loc 3", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["machine"]
    },
    {
      id: 3,
      team: "team 1",
      position: "pos 3",
      location: ["loc 1", "loc 2", "loc 4"],
      desc: "Lorem Ipsum",
      tags: ["machine", "learning"]
    },
    {
      id: 4,
      team: "team 2",
      position: "pos 1",
      location: ["loc 5"],
      desc: "Lorem Ipsum",
      tags: [""]
    },
    {
      id: 5,
      team: "team 3",
      position: "pos 2",
      location: ["loc 5", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["work"]
    },
    {
      id: 6,
      team: "team 3",
      position: "pos 1",
      location: ["loc 1", "loc 2"],
      desc: "Lorem Ipsum",
      tags: ["work", "machine", "learning"]
    },
    {
      id: 7,
      team: "team 2",
      position: "pos 2",
      location: ["loc 1", "loc 2", "loc 3", "loc 4", "loc 5", "loc 6"],
      desc: "Lorem Ipsum",
      tags: ["hello", "Learning", "work"]
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

  // Open modal & update URL manually
  const openJob = (job) => {
    window.history.pushState({}, "", `?jobId=${job.id}`);
    setSelectedJob(job);
  };

  // Close modal & reset URL manually
  const closeJob = () => {
    window.history.pushState({}, "", "/careers/job"); // Removes jobId from the URL
    setSelectedJob(null);
    setFormVisible(false);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-white">
      <div className="flex-auto">
        <div className="flex">
          <a href="/"><img alt="logo" src="../logo.png" className="w-[130px] h-[80px]" /></a>
        </div>
      </div>
      <div className="">
        <div className="flex px-4 py-3 rounded-full overflow-hidden max-w-xl border-2 mx-auto font-[sans-serif]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            className="fill-gray-600 mr-3 rotate-90">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
          <input type="text" placeholder="Search Keywords" className="w-full outline-none bg-transparent text-gray-600 text-sm"
            onChange={(e) => { setQuery(e.target.value.toLowerCase().split(" ")); }}
          />
        </div>
      </div>

      {/* Dropdown Filters */}
      <div className="flex px-32 py-2 justify-between mx-auto max-w-xl">
        <Dropdown
          label="Team"
          options={uniqueTeams}
          selected={selectedTeams}
          setSelected={setSelectedTeams}
          getFilterCount = {(team) => getFilterCount("team",team)}
        />
        <Dropdown
          label="Position"
          options={uniquePositions}
          selected={selectedPositions}
          setSelected={setSelectedPositions}
          getFilterCount = {(position) => getFilterCount("position",position)}
        />
        <Dropdown
          label="Location"
          options={uniqueLocations}
          selected={selectedLocations}
          setSelected={setSelectedLocations}
          getFilterCount = {(location) => getFilterCount("location",location)}
        />
      </div>

      {/* Job Count */}
      <div className="flex text-gray-900 justify-center">
        <p className="text-gray-900 font-bold">
          Showing {filteredJobs.length} Jobs among the applied filters 
        </p>
      </div>



      <div className="py-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-items-center ">
        {filteredJobs.map((items, index) => (
          <div key={items.id} onClick={() => openJob(items)} className="w-[350px] h-[150px] sm:w-[290px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[490px] lg:h-[300px] rounded-md flex-auto bg-white shadow-[#B1B1B1_0px_0px_10px_0px] duration-300 ease-in  hover:shadow-[#B1B1B1_0px_0px_0px_0px] hover:border-2">
            <p className="flex text-gray-900 text-2xl m-3">{items.team}</p>
            <p className="flex text-gray-900 m-4"></p>
            <p className="flex text-gray-900 px-4">{items.location}</p>
            <p className="flex text-gray-900 px-4">{items.position}</p>
            <p className="flex text-gray-900 px-4">{items.id}</p>
            <p className="text-gray-900">{items.tags}</p>
            <button onClick={() => setFormVisible(true)} className="text-gray-900 border-2 m-2">Apply!</button>
          </div>
        ))};
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
              <h2 className="text-3xl font-bold">{selectedJob.position}</h2>
              <p className="text-gray-600 text-lg">{selectedJob.team}</p>
              <p className="mt-4 text-gray-800">{selectedJob.location}</p>
              <p className="mt-4 text-gray-800">{selectedJob.tags}</p>
              <p className="mt-4 text-gray-800">{selectedJob.id}</p>

              {/* apply with email integration */}
              {formVisible && (<Form></Form>)}


              {/* Apply Button */}
              <div className="mt-auto">
                <button onClick={() => setFormVisible(true)} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full">
                  Apply Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};


// Dropdown Component using Headless UI
function Dropdown({ label, options, selected, setSelected, getFilterCount }) {
  return (
    <Listbox value={selected} onChange={setSelected} multiple>
      <div className="relative">
        <Listbox.Button className="flex text-gray-900 border rounded-full w-32 justify-center py-1">
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
          <Listbox.Options className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
            {options.map((option, index) => (
              <Listbox.Option key={index} value={option} as="div">
                {({ selected }) => (
                  <label className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-900">
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