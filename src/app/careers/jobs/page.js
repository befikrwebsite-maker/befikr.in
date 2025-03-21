"use client";

import Navbar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./form";
import { Listbox, Transition } from "@headlessui/react";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function Page() {
  // data
  const cards = [
    {
      id: 1,
      position: "Electrical Safety Auditor",
      team: "Electrical and Energy Audits",
      location: ["Gujarat", "Delhi NCR", "Rajasthan"],
      desc: "The ES Auditor is responsible for conducting audits of banks, petrol pumps, and other facilities as per predefined plans. They will assess electrical and energy systems, identify inefficiencies or risks, and document their observations in a detailed report for the client/company. The role requires ensuring compliance with safety and efficiency standards while providing actionable recommendations for improvements.",
      tags: [
        "electrical",
        "safety",
        "auditor",
        "energy",
        "audits",
        "audit",
        "gujarat",
        "delhi",
        "ncr",
        "rajasthan",
      ],
      pay: "₹18,000.00 - ₹28,000.00 per month",
      jobtype: "fulltime",
      responsibilities: [
        "Visit Commercial Buildings, Offices, Bank Branches/Offices/ATMs, Petrol Pumps to study and verify the installation across various cities in different states of India",
        "To conduct comprehensive Electrical Safety Audit of the complete Electrical installation of Commercial Buildings, Offices, Bank Branches/Offices/ATMs, Petrol Pumps",
        "Suggest Corrective measures necessary towards Electrical safety and providing budgetary estimate for rectification works required",
        "Provide comprehensive report consisting of Observations on account of electrical and fire safety. Report must highlight critical areas/concerns which need immediate attention/ rectification as per given Audit Format.",
      ],
      skills: [
        "Education: B. Tech / B.E. (Electrical) / Diploma (Electrical)",
        "Experience: Minimum 2 years / 3 years for Diploma",
        "Must Be Familiar With Basic Electrical Tools Like- Multimeter, IR Tester And Earth Tester",
        "Must Be Familiar With Electrical Equipment Like- Diesel Generator, ServoStabilizer, UPS.",
        "Should Have Working Experience In 440 Volts Supply Lines.",
        "Must Be Aware About Commercial Building Electrical Installations.",
        "Must Be Skilled In Electrical Fault Identification And Rectification.",
      ],
      benefits: ["Health insurance"],
      schedule: ["Day shift"],
      supplemental_pay: ["Performance bonus"],
      questions: [
        "Are you available for immediate joining? (Preferable)",
        "Are you having an Electrical Engineering Degree (B.E. / B. Tech) or Diploma in Electrical Engineering?",
      ],
      experience: ["Electrical engineering: 2 years (Required)"],
      travel: ["75% (Required)"],
      work_location: "In person",
      expected_start_date: "18/01/2025",
    },
    {
      id: 2,
      position: "Defective Product Auditor",
      team: "Circular Economy Services",
      location: ["Gurgaon", "North Delhi", "Faridabad", "Nashik"],
      desc: "The Auditor will visit dealer partners as per the predefined schedule and inspect all products, including defective bulbs, following the Standard Operating Procedure (SOP) to ensure quality compliance.",
      tags: [
        "defective",
        "product",
        "auditor",
        "economy",
        "services",
        "circular",
        "audit",
        "service",
        "gurgaon",
        "delhi",
        "faridabad",
        "nashik",
        "ncr",
      ],
      pay: "",
      jobtype: "fulltime",
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
    },
    {
      id: 3,
      position: "Area Supervisor",
      team: "Circular Economy Services",
      location: ["Sonipat"],
      desc: "The Defective Lamp Supervisor is responsible for planning auditor schedules, coordinating with auditors and logistics teams, and ensuring smooth execution of inspection processes.",
      tags: [
        "area",
        "supervisor",
        "economy",
        "services",
        "circular",
        "service",
        "sonipat",
      ],
      pay: "",
      jobtype: "fulltime",
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
    },
    {
      id: 4,
      position: "Field Officer",
      team: "CSR Services",
      location: ["Delhi NCR"],
      pay: "",
      tags: ["field", "officer", "csr", "services", "service", "delhi", "ncr"],
      desc: "The Field Officer will visit various slum areas to identify and recruit entrepreneurial women who can effectively sell Proya Shakti (protein powder) door-to-door. This role requires strong community engagement and networking skills to onboard suitable candidates.",
      jobtype: "fulltime",
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
    },
    {
      id: 5,
      position: "Technician",
      team: "Master Service Partnerships",
      location: ["Noida"],
      desc: "The Technician will visit customers&#39; homes for appliance installation and demonstration. Additionally, they can promote and sell compatible stands to enhance the customer’s setup and experience.",
      tags: [
        "master",
        "service",
        "partnerships",
        "spartnership",
        "technician",
        "services",
        "noida",
      ],
      pay: "",
      jobtype: "fulltime",
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
    },
    {
      id: 6,
      position: "Manager- Operations",
      team: "Electrical and Energy Audits",
      location: ["Delhi NCR"],
      desc: "We are looking for an Operations Manager with expertise in Electrical Safety and Energy Audits to oversee nationwide audits across retail, commercial, and industrial sites. The role involves managing a team of 15-20 engineers, ensuring compliance with OISD standards, and driving post-audit interventions. Responsibilities include client visits, team training, and conducting surprise secondary audits.",
      tags: [
        "electrical",
        "energy",
        "audit",
        "audits",
        "manager",
        "operations",
        "operation",
        "delhi",
        "ncr",
      ],
      pay: "",
      jobtype: "fulltime",
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
    },
  ];

  // show form ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [formVisible, setFormVisible] = useState(false);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // search filter ///////////////////////////////////////////////////////////////////////////////////////////////////////
  function searchFilter(query) {
    if (!query.length || query[0] === "") {
      return cards;
    }
    return cards.filter((em) =>
      query.every((qe) => em.tags.map((el) => el.toLowerCase()).includes(qe))
    );
  }
  // setting the user input from the search
  const [query, setQuery] = useState([""]);
  const filtered = searchFilter(query);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // extracting unique teams positoins and locations /////////////////////////////////////////////////////////////////////
  const uniqueTeams = [...new Set(cards.map((el) => el.team))].sort();
  const uniquePositions = [...new Set(cards.map((el) => el.position))].sort();
  const locations = new Set();
  cards.map((el) => el.location.map((em) => locations.add(em)));
  const uniqueLocations = [...locations].sort();

  // State for selected filters
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const checkboxFilter = (job) =>
    (selectedTeams.length === 0 || selectedTeams.includes(job.team)) &&
    (selectedPositions.length === 0 ||
      selectedPositions.includes(job.position)) &&
    (selectedLocations.length === 0 ||
      job.location.some((loc) => selectedLocations.includes(loc)));

  // Apply both filters
  const filteredJobs = filtered.filter((job) => checkboxFilter(job));

  // Count Matching Jobs for Each Filter Option
  const getFilterCount = (filterType, value) => {
    return filteredJobs.filter((job) => {
      if (filterType === "team") return job.team === value;
      if (filterType === "position") return job.position === value;
      if (filterType === "location") return job.location.includes(value);
      return false;
    }).length;
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // using modalcomponent here ///////////////////////////////////////////////////////////////////////////////////////////
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
    window.history.pushState({}, "", "/work-with-us/job"); // Removes jobId from the URL
    window.history.pushState({}, "", "/work-with-us/job"); // Removes jobId from the URL
    setSelectedJob(null);
    setFormVisible(false);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f5] px-10 py-5 flex flex-col items-center">
        <div className="bg-white px-10 py-5 w-full max-w-7xl rounded-lg shadow-lg mt-8">
          <div className="text-left text-xl py-5 text-[#038DAF] font-generalSansSemibold">
            Job Openings
          </div>
          <div className="w-full max-w-6xl">
            <div className="flex px-4 py-2 rounded-md bg-[#f5f5f5] overflow-hidden border-2 w-full font-[sans-serif] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="20px"
                className="fill-companyBlue mr-3 rotate-90 font-extrabold "
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search Keywords"
                className="w-full outline-none bg-transparent text-gray-600 text-sm "
                onChange={(e) => {
                  setQuery(e.target.value.toLowerCase().split(" "));
                }}
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
              getFilterCount={(position) =>
                getFilterCount("position", position)
              }
            />
            <Dropdown
              label="Location"
              options={uniqueLocations}
              selected={selectedLocations}
              setSelected={setSelectedLocations}
              getFilterCount={(location) =>
                getFilterCount("location", location)
              }
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
                <p className="text-gray-900 text-base sm:text-lg font-generalSansSemibold ">
                  {items.position}
                </p>
                <p className="text-gray-700 font-generalSansMedium text-sm sm:text-base ">
                  {items.team}
                </p>
                <div className="flex flex-wrap gap-1 text-gray-700 text-xs sm:text-sm mt-2">
                  {Array.isArray(items.location)
                    ? items.location.map((loc, i) => (
                      <span key={i} className="bg-white-200  py-1 rounded-md">
                        {loc} |{" "}
                      </span>
                    ))
                    : null}
                </div>
                <div className="flex gap-2 mt-2">
                  {/* <button className="bg-sky-100 text-companyBlue font-generalSansRegular px-2 py-1 rounded-md text-xs sm:text-sm cursor-default">{items.pay}</button> */}
                  {/* <button className="bg-sky-100 text-companyBlue font-generalSansRegular px-2 py-1 rounded-md text-xs sm:text-sm cursor-default">{items.pay}</button> */}
                  <button className="bg-sky-100 text-companyBlue font-generalSansRegular px-2 py-1 rounded-md text-xs sm:text-sm cursor-default">
                    {items.jobtype}
                  </button>
                </div>
              </div>
              <div className="flex ">
                <button
                  onClick={() => setFormVisible(false)}
                  className="text-white font-generalSansSemibold tracking-wide  text-l bg-companyBlue px-3 py-2 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-3 hover:bg-cyan-50 hover:text-companyBlue hover:shadow-lg transition duration-300 mr-4"
                >
                  More Details
                </button>
                <button
                  onClick={() => {
                    setFormVisible(true);
                    setTimeout(() => {
                      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="text-white font-generalSansSemibold tracking-wide  text-l bg-companyBlue px-3 py-2 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-3 hover:bg-cyan-50 hover:text-companyBlue hover:shadow-lg transition duration-300"
                >
                  Apply Now
                </button>
              </div>
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
                className="bg-white w-full h-full md:w-3/4 md:h-4/5 rounded-xl shadow-2xl relative flex flex-col overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="sticky top-0 z-10 bg-white px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedJob.position}</h2>
                    <p className="text-gray-600 text-xl">{selectedJob.team}</p>

                  </div>
                  <button
                    onClick={closeJob}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Grid Layout */}
                <div className="p-8 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Section */}
                  <div>
                    <div className="mb-6">
                      <p className="text-cyan-400 font-bold">Job Type:</p>
                      <p className="text-gray-800">
                        {selectedJob.jobtype || "Not specified"}
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="text-cyan-400 font-bold">Pay:</p>
                      <p className="text-gray-800">
                        {selectedJob.pay || "Not specified"}
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="text-cyan-400 font-bold">
                        Expected Start Date:
                      </p>
                      <p className="text-gray-800">
                        {selectedJob.expected_start_date || "Not specified"}
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div>
                    <div className="mb-6">
                      <p className="text-cyan-400 font-bold">Location:</p>
                      {selectedJob.location.map((item, index) => (
                        <p key={index} className="text-gray-800">
                          • {item}
                        </p>
                      ))}
                    </div>
                    {selectedJob.work_location && (
                      <div className="mb-6">
                        <p className="text-cyan-400 font-bold">
                          Work Location:
                        </p>
                        <p className="text-gray-800">
                          {selectedJob.work_location}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 border-t border-gray-300 pt-6">
                  <h3 className="text-xl font-semibold text-companyBlue uppercase">
                    Job Description
                  </h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {selectedJob.desc}
                  </p>
                </div>

                {/* Responsibilities */}
                {selectedJob.responsibilities.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Responsibilities
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                {selectedJob.skills.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Skills
                    </h3>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {selectedJob.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {selectedJob.benefits.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Benefits
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {selectedJob.benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Schedule */}
                {selectedJob.schedule.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Schedule
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {selectedJob.schedule.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Experience */}
                {selectedJob.experience.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Experience
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {selectedJob.experience.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Supplemental Pay */}
                {selectedJob.supplemental_pay.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Supplemental Pay
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {selectedJob.supplemental_pay.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Questions */}
                {selectedJob.questions.length > 0 && (
                  <div className="mt-8 border-t border-gray-300 pt-6">
                    <h3 className="text-xl font-semibold text-companyBlue uppercase">
                      Questions
                    </h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {selectedJob.questions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Apply Button */}
                <div
                  id="apply"
                  onClick={() => setFormVisible(!formVisible)}
                  className="mt-auto flex flex-col "
                >
                  <button onClick={() => {
                    setTimeout(() => {
                      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }} className="px-6 py-3 mt-8 bg-companyBlue text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out active:scale-95 flex items-center gap-2">
                    Apply Now <ChevronDown className="w-5 h-5" />
                  </button>

                  {formVisible && <Form />}
                </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

// Dropdown Component using Headless UI
function Dropdown({ label, options, selected, setSelected, getFilterCount }) {
  return (
    <Listbox value={selected} onChange={setSelected} multiple>
      <div className="relative">
        <Listbox.Button className="flex text-gray-900 tracking-wide font-bold bg-[#f5f5f5] border rounded-md w-80  justify-center py-1 xl:w-[18rem] lg:w-[16rem] md:w-[10rem] sm:w-[8rem]  hover:shadow-lg transition duration-300  ">
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
                      <span className="text-gray-500 px-2">
                        ({getFilterCount(option)})
                      </span>
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
