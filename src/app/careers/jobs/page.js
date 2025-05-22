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
      location: ["Gujarat", "Delhi NCR", "Rajasthan","Pan India"],
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
      jobtype: "Fulltime",
      responsibilities: [
        "Visit Commercial Buildings, Offices, Bank Branches/Offices/ATMs, Petrol Pumps to study and verify the installation across various cities in different states of India",
        "To conduct comprehensive Electrical Safety Audit of the complete Electrical installation of Commercial Buildings, Offices, Bank Branches/Offices/ATMs, Petrol Pumps",
        "Suggest Corrective measures necessary towards Electrical safety and providing budgetary estimate for rectification works required",
        "Provide comprehensive report consisting of Observations on account of electrical and fire safety. Report must highlight critical areas/concerns which need immediate attention/ rectification as per given Audit Format.",
      ],
      eligibility: [
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
        "How much experience do you have?"
      ],
      travel: ["75% (Required)"],
      work_location: "In person",
      expected_start_date: "18/01/2025",
    },
    {
      id: 2,
      position: "Electrical Safety",
      team: "Manager Electrical And Energy Audits",
      location: ["Delhi NCR","Pan India"],
      desc: "We are seeking a dynamic and experienced Operations Manager with a robust background in Electrical Safety and Energy Audits. The ideal candidate will have a proven track record of managing teams of 15-20 engineers and will be responsible for overseeing audits across various locations including retail / commercial outlets, and industrial sites nationwide. This role demands exceptional planning and execution skills, a thorough understanding of compliance standards (including OISD), and a proactive approach to post audit interventions. Travel to meet clients, train engineering team and perform surprise secondary audits is required.",
      tags: [
        "electrical",
        "electric",
        "safety",
        "manager",
        "energy",
        "audits",
        "audit",
        "delhi",
        "delhi ncr",
        "ncr",
      ],
      pay: "₹55,000 – ₹62,500 per Month",
      jobtype: "Fulltime",
      responsibilities: [
        "Team Leadership &amp; Management: Lead and mentor a team of 15-20 electrical engineers. Coordinate team schedules and delegate tasks effectively to meet project deadlines. Foster a collaborative environment that encourages professional growth and high performance.",
        "Project Planning &amp; Execution: Develop comprehensive project plans for conducting electrical safety and energy audits across multiple sites. Strategically plan travel routes and site visits to optimize audit efficiency. Ensure timely execution of audits while adhering to project timelines, budgets, and client requirements.",
        "Client Engagement &amp; Field Operations: Serve as the primary point of contact for clients; arrange and lead on-site meetings and presentations. Conduct audits at diverse locations (e.g., petrol pumps, bank branches) ensuring compliance with industry standards.",
        "Technical Oversight &amp; Compliance: Ensure all audits comply with established safety regulations and industry standards, including OISD standards, IE Rules, NBC, IEC, IEEE, and NFPA. Oversee the development, review, and approval of technical documents and risk assessments. Plan and manage post audit interventions, including corrective action implementations, follow-up assessments, and client advisory services. Stay updated on emerging trends and regulatory changes within the electrical safety and energy audit domain.",
        "Efficiency &amp; Reporting: Monitor project progress, address operational challenges, and implement corrective actions when necessary. Maintain accurate records, track performance metrics, and provide regular updates to senior management. Identify opportunities for process improvements to enhance audit quality and operational efficiency.",
      ],
      eligibility: [
        "Minimum of 10-12 years of experience in Electrical Safety &amp; Energy Audits.",
        "Demonstrated success in managing a team of 15-20 engineers.",
        "Proven expertise in planning and executing multi-site audits.",
        "Familiarity with OISD standards and compliance requirements.",
        "Experience in planning and managing post audit interventions.",
        "Willingness and ability to travel extensively for site visits and client meetings.",
        "In-depth knowledge of electrical safety standards, compliance frameworks, and audit methodologies.",
        "Strong organizational, leadership, and problem-solving skills.",
        "Excellent communication and client relationship management abilities.",
        "Proficiency in MS Office, AutoCAD, and energy audit tool Certifications in Energy Auditing (e.g., BEE-Certified Energy Auditor/Manager) or Electrical Safety (e.g., NFPA, CEIG).",
        "Experience working with clients in sectors such as Banking, Oil &amp; Gas, Manufacturing, Pharma, or Chemicals.",

      ],
      benefits: [],
      schedule: [],
      supplemental_pay: [],
      questions: [],
      travel: [],
      work_location: "",
      expected_start_date: "",
    },
    {
      id: 3,
      position: "Electrical Engineer",
      team: "Electrical and energy audits",
      location: ["Delhi NCR","Pan India"],
      desc: "We are looking for an Electrical Engineer to work from our office, responsible for managing and verifying audit files submitted by Electrical Auditors. The role includes ensuring compliance with safety standards, reviewing reports for accuracy, and coordinating with auditors for necessary corrections. Additionally, the candidate will be responsible for client interactions related to billing and documentation.",
      tags: [
        "electrical",
        "engineer",
        "energy",
        "audit",
        "audits",
        "delhi",
        "ncr",
      ],
      pay: "₹15,000 – ₹20,000 per Month",
      jobtype: "Fulltime",
      responsibilities: [
        "Review and verify Electrical Safety Audit reports for accuracy and compliance.",
        "Coordinate with field auditors to rectify discrepancies in reports.",
        "Maintain proper documentation and ensure timely submission of audit files.",
        "Communicate with clients regarding billing, clarifications, and required documentation.",
        "Assist in preparing invoices based on completed audit reports.",
        "Ensure all reports and billing processes follow company policies and standards."
      ],
      eligibility: [
        "Bachelor&#39;s degree in Electrical Engineering or a related field.",
        "Strong understanding of electrical safety standards and audit procedures.",
        "Good communication skills for client interaction and coordination.",
        "Proficiency in MS Office and report management.",
        "Ability to work independently and manage multiple tasks efficiently."
      ],
      benefits: [],
      schedule: [],
      supplemental_pay: [],
      questions: [],
      travel: [],
      work_location: "",
      expected_start_date: "",
    },
    {
      id: 4,
      position: "Technical Electrical",
      team: "Circular economy services",
      location: ["Delhi NCR","Pan India"],
      pay: "₹12,000 – ₹16,000 per Month",
      tags: ["field", "officer", "csr", "services", "service", "delhi", "ncr"],
      desc: "Responsible for visit and conduct inspection of LED Products at various Channel Partners&#39; Premises. Inspection of LED Products as per defined SOP. Prepare Inspection Report as per defined format of the Company. Pack inspected LED products properly in given packaging items like Gunny Bags, Cartons etc. Travel to multiple districts and cities as per the location of Channel Partners and conduct LED Inspection. Report any major issues during inspection to Senior Management of the Company",
      jobtype: "Fulltime",
      responsibilities: [
        "Responsible for visit and conduct inspection of LED Products at various Channel Partners&#39; Premises.",
        "Inspection of LED Products as per defined SOP"
      ],
      eligibility: [
        "12 TH PASS / ITI"
      ],
      benefits: [],
      schedule: [],
      supplemental_pay: [],
      questions: [],
      travel: [],
      work_location: "",
      expected_start_date: "",
    },
    {
      id: 5,
      position: "Technician home appliance",
      team: "Master Service Partnerships",
      location: ["Delhi NCR","Pan India"],
      desc: "Technician will be responsible for doing installation and demo for the given products like - Washing machine, Fridge, Dishwasher.",
      tags: [
        "master",
        "service",
        "partnerships",
        "spartnership",
        "technician",
        "services",
        "delhi ncr",
        "delhi",
        "ncr"
      ],
      pay: "₹17,000 – ₹20,000 per Month",
      jobtype: "Fulltime",
      responsibilities: ["Installation and demo."],
      eligibility: [
        "ITI",
        "Polytechnic or basic education in relevant field."
      ],
      benefits: [],
      schedule: [],
      supplemental_pay: [],
      questions: [],
      travel: [],
      work_location: "",
      expected_start_date: "",
    },
    {
      id: 6,
      position: "Field Officer",
      team: "CSR Services",
      location: ["Delhi NCR","Pan India"],
      desc: "We are looking out to hire a profile with a couple of years of experience as &quot;Field Sales Officer&quot; preferably FMCG space. Identifying &amp; recruiting women entrepreneurs in small towns &amp; villages for door-to-door selling of a nutritional product. Giving sales training (on nutritional products) to the identified women entrepreneurs &amp; kick start sales operations with the team. Creating sales plans, executing marketing plans, &amp; monitoring the sales team of women entrepreneurs to ensure compliance with protocols &amp; attainment of sales. Supervising the group of women entrepreneurs on day-to-day working, roadblocks being faced &amp; sales achievements. Ensure regular screening of prospects as women entrepreneurs within the identified geography of operations/state/in and around city/towns.",
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
      pay: "₹18,000 – ₹22,000 per Month",
      jobtype: "Fulltime",
      responsibilities: [
        "Team Leadership & Management - Lead and mentor a team of 15-20 electrical engineers. Coordinate team schedules and delegate tasks effectively to meet project deadlines. Foster a collaborative environment that encourages professional growth and high performance.",
        "Project Planning & Execution - Develop comprehensive project plans for conducting electrical safety and energy audits across multiple sites. Strategically plan travel routes and site visits to optimize audit efficiency. Ensure timely execution of audits while adhering to project timelines, budgets, and client requirements.",
        "Client Engagement & Field Operations - Serve as the primary point of contact for clients; arrange and lead on-site meetings and presentations. Conduct audits at diverse locations (e.g., petrol pumps, bank branches) ensuring compliance with industry standards.",
        "Technical Oversight & Compliance - Ensure all audits comply with established safety regulations and industry standards, including OISD standards, IE Rules, NBC, IEC, IEEE, and NFPA. Oversee the development, review, and approval of technical documents and risk assessments. Plan and manage post audit interventions, including corrective action implementations, follow-up assessments, and client advisory services. Stay updated on emerging trends and regulatory changes within the electrical safety and energy audit domain.",
        "Operational Efficiency & Reporting - Monitor project progress, address operational challenges, and implement corrective actions when necessary. Maintain accurate records, track performance metrics, and provide regular updates to senior management. Identify opportunities for process improvements to enhance audit quality and operational efficiency.",
      ],
      eligibility: [
        "10+ years in Electrical Safety & Energy Audits",
        "Demonstrated success in managing a team of 15-20 engineers.",
        "Proven expertise in planning and executing multi-site audits.",
        "Familiarity with OISD standards and compliance requirements.",
        "Experience in planning and managing post audit interventions.",
        "Willingness and ability to travel extensively for site visits and client meetings.",
        "In-depth knowledge of electrical safety standards, compliance frameworks, and audit methodologies.",
        "Strong organizational, leadership, and problem-solving skills.",
        "Excellent communication and client relationship management abilities.",
        "Proficiency in MS Office, AutoCAD, and energy audit tools.",
        "Certifications in Energy Auditing (e.g., BEE-Certified Energy Auditor/Manager) or Electrical Safety (e.g., NFPA, CEIG).",
        "Experience working with clients in sectors such as Banking, Oil & Gas, Manufacturing, Pharma, or Chemicals."
      ],
      benefits: [],
      schedule: [],
      supplemental_pay: [],
      questions: [
        "Are you having an Electrical Engineering Degree (B.E. / B. Tech) or Diploma in Electrical Engineering?",
        "How much experience do you have?"
      ],
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

  // function to remove filters when they are clicked outside in the filter bar
  const handleCheckboxFilterRemoval = (type, value) => {
    if (type === "team") {
      setSelectedTeams((prev) => prev.filter((item) => item !== value));
    };
    if (type === "position") {
      setSelectedPositions((prev) => prev.filter((item) => item !== value));
    };
    if (type === "location") {
      setSelectedLocations((prev) => prev.filter((item) => item !== value));
    };
  }

  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);

  useEffect(() => {
    if (mobileFilterVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileFilterVisible]);

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
    window.history.pushState({}, "", "/careers/jobs"); // Removes jobId from the URL
    setSelectedJob(null);
    setFormVisible(false);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-[#f5f5f5] px-10 py-5 flex flex-col items-center">
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

          {/* Dropdown filters for mobile view */}
            <div className="flex pt-5">
              <div onClick={() => setMobileFilterVisible(true)} className="md:hidden flex justify-center items-center rounded-xl bg-[#ffa552] ">
                <img
                  src="\jobSectionImage\filter-svgrepo-com (1).svg"
                  className="w-6 h-6 m-2">
                </img>
                <p className="mr-2 text-white font-semibold">FILTERS</p>
              </div>
            </div>

            {/* Mobile Navigation Menu with Animation (Slide in from Left) */}
            <AnimatePresence>
              {mobileFilterVisible && (
                <>
                <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-full bg-black z-30"
        onClick={() => setMobileFilterVisible(false)}
      />
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-[#f5f5f5] shadow-md py-8 px-6 flex flex-col space-y-6 z-40"
                >
                  <div className=" mt-16 h-full w-full flex flex-wrap overflow-hidden items-start px-6 py-4 border-b border-gray-300 bg-white shadow-sm relative">
                    <div className="flex flex-wrap gap-3 justify-between items-center">
                      <h2 className="text-2xl font-semibold text-gray-800">Filters</h2>

                      <button
                        onClick={() => setMobileFilterVisible(false)}
                        type="button"
                        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-companyBlue"
                        aria-label="Close Filters"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div className="flex flex-wrap gap-6">
                        <Dropdown
                          label="Team"
                          options={uniqueTeams}
                          selected={selectedTeams}
                          setSelected={setSelectedTeams}
                          getFilterCount={(team) => getFilterCount("team", team)}
                          svgPath="\jobSectionImage\team-svgrepo-com.svg"
                          mobileFilterVisible={true}
                        />

                        <Dropdown
                          label="Position"
                          options={uniquePositions}
                          selected={selectedPositions}
                          setSelected={setSelectedPositions}
                          getFilterCount={(position) =>
                            getFilterCount("position", position)
                          }
                          svgPath="\jobSectionImage\employee-job-position-svgrepo-com.svg"
                          mobileFilterVisible={true}
                        />
                        <Dropdown
                          label="Location"
                          options={uniqueLocations}
                          selected={selectedLocations}
                          setSelected={setSelectedLocations}
                          getFilterCount={(location) =>
                            getFilterCount("location", location)
                          }
                          svgPath="\jobSectionImage\location-svgrepo-com.svg"
                          mobileFilterVisible={true}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                </>
              )}
            </AnimatePresence>


          {/* Dropdown Filters for destop */}
          <div className="hidden w-full max-w-6xl md:flex flex-wrap justify-center gap-3 px-6 mt-6 xl:gap-[3.5rem] lg:gap-[0.5rem] md:gap-[1.5rem] sm:gap-[1.5rem]">
            <Dropdown
              label="Team"
              options={uniqueTeams}
              selected={selectedTeams}
              setSelected={setSelectedTeams}
              getFilterCount={(team) => getFilterCount("team", team)}
              svgPath="\jobSectionImage\team-svgrepo-com.svg"
              mobileFilterVisible={false}
            />

            <Dropdown
              label="Position"
              options={uniquePositions}
              selected={selectedPositions}
              setSelected={setSelectedPositions}
              getFilterCount={(position) =>
                getFilterCount("position", position)
              }
              svgPath="\jobSectionImage\employee-job-position-svgrepo-com.svg"
              mobileFilterVisible={false}
            />
            <Dropdown
              label="Location"
              options={uniqueLocations}
              selected={selectedLocations}
              setSelected={setSelectedLocations}
              getFilterCount={(location) =>
                getFilterCount("location", location)
              }
              svgPath="\jobSectionImage\location-svgrepo-com.svg"
              mobileFilterVisible={false}
            />


          </div>

          {/* Job Count */}
          <div className="flex text-gray-900 justify-center mt-4">
            <p className="text-gray-900 tracking-wide font-bold">
              Showing {filteredJobs.length} Jobs among the applied filters
            </p>
          </div>
          <div className="flex justify-center flex-wrap">
            {selectedTeams.map((items, index) =>
            (
              <div onClick={() => handleCheckboxFilterRemoval("team", items)} key={index} className=" flex justify-center text-xs text-companyBlue hover:border-companyBlue hover:border rounded m-2 ">
                <div className="m-1 select-none">{items}</div>
                {/* <div className="text-black text-sm mb-1 select-none">×</div> */}
              </div>
            ))}
            {selectedPositions.map((items, index) =>
            (
              <div onClick={() => handleCheckboxFilterRemoval("position", items)} key={index} className=" flex justify-center text-xs text-companyBlue hover:border-companyBlue hover:border rounded m-2 ">
                <div className="m-1 select-none">{items}</div>
              </div>
            ))}
            {selectedLocations.map((items, index) =>
            (
              <div onClick={() => handleCheckboxFilterRemoval("location", items)} key={index} className=" flex justify-center text-xs text-companyBlue hover:border-companyBlue hover:border rounded m-2 ">
                <div className=" m-1 select-none">{items}</div>
              </div>
            ))}
            {(selectedTeams.length > 0 ||
              selectedPositions.length > 0 ||
              selectedLocations.length > 0) && (
                <div className="flex justify-center m-2">
                  <button
                    onClick={() => {
                      setSelectedTeams([]);
                      setSelectedPositions([]);
                      setSelectedLocations([]);
                    }}
                    className="text-xs text-red-600 border border-red-600 rounded px-4 py-1 hover:bg-red-50 transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
          </div>
        </div>



        <div className="py-10 px- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full max-w-7xl">
          {filteredJobs.map((items, index) => (
            <motion.div
              key={items.id}
              layoutId={`job-card-${items.id}`}
              onClick={() => openJob(items)}
              className="w-full max-w-[450px] h-auto sm:h-[240px] md:h-[230px] lg:h-[220px] rounded-lg bg-white shadow-md p-4 sm:p-5 flex flex-col justify-between transition duration-100 border transform hover:border-companyBlue hover:shadow-2xl cursor-pointer"
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
            </motion.div>
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
                layoutId={`job-card-${selectedJob.id}`}
                className="bg-white w-full h-full md:w-3/4 md:h-4/5 rounded-xl shadow-2xl relative flex flex-col overflow-y-auto"
                transition={{ type: "tween" }}
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


                  {/* Eligibility */}
                  {selectedJob.eligibility.length > 0 && (
                    <div className="mt-8 border-t border-gray-300 pt-6">
                      <h3 className="text-xl font-semibold text-companyBlue uppercase">
                        Eligibility
                      </h3>
                      <ul className="flex flex-wrap gap-2 mt-2">
                        {selectedJob.eligibility.map((skill, index) => (
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
                    className="mt-auto flex flex-col "
                  >
                    <button onClick={() => {
                      setFormVisible(!formVisible)
                      setTimeout(() => {
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }} className="px-6 py-3 mt-8 bg-companyBlue text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out active:scale-95 flex items-center gap-2">
                      Apply Now <ChevronDown className="w-5 h-5" />
                    </button>

                    {formVisible && <Form questions={selectedJob.questions} team={selectedJob.team} position={selectedJob.position} locations={selectedJob.location} />}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div >
      <Footer />
    </>
  );
}

// Dropdown Component using Headless UI
function Dropdown({ label, options, selected, setSelected, getFilterCount, svgPath, mobileFilterVisible }) {
  const handleOptionClick = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <Listbox value={selected} onChange={setSelected} multiple>
      <div className="relative">
        {/* possible colours #ffa552 ; #2176FF  */}

        <Listbox.Button className={` flex text-white tracking-wide font-bold bg-[#2176FF] hover:bg-[#3321ff] border rounded-md justify-center py-1 xl:w-[18rem] lg:w-[16rem] md:w-[10rem] sm:w-[8rem] hover:shadow-lg transition duration-300 ${mobileFilterVisible ? "w-52" : "w-80"}`}>

          <div className="flex w-full justify-end basis-2/3">
            <img
              src={svgPath}
              alt="image"
              className="w-6 h-6 mr-2">
            </img>
            {label}
          </div>
          <div className="flex w-full justify-end items-center basis-1/3">
            <img
              src="\jobSectionImage\chevron-down-black-svgrepo-com.svg"
              alt=""
              className="w-6 j-6 pr-2">
            </img>
          </div>

        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className={` ${mobileFilterVisible ? "w-52 h-52" : "w-80 h-60"} absolute mt-2 overflow-y-scroll bg-white border rounded-md shadow-lg z-10 xl:w-[18rem] lg:w-[16rem] md:w-[10rem] sm:w-[8rem]`}>
            {options.map((option, index) => {
              const isChecked = selected.includes(option);
              return (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-900"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    readOnly
                    className="mr-2 pointer-events-none"
                  />
                  <span>{option}</span>
                  <span className="text-gray-500 px-2 ml-auto">
                    ({getFilterCount(option)})
                  </span>
                </div>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
