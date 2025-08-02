"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, DotIcon } from "lucide-react";

const timelineData = [
  {
    year: "2017",
    category: "Governance",
    principle: "Consumer Responsibility",
    desc: "befikr successfully launched its ESG/Governance sector services in 2017. Today, befikr offers B2B2C services that assist companies in acting responsibly towards consumers by engaging with them truthfully and transparently, thereby providing value to their customers.",
    service: "Business to Business to Consumer Services (B2B2C)",
  },
  {
    year: "2020",
    category: "Environment",
    principle: "Product Responsibility",
    desc: "As a market leader in the Defective Audit business, befikr successfully launched its ESG/Environment/Circular Economy services in 2020. Today, befikr offers comprehensive reverse logistics and e-waste management services, helping companies demonstrate product responsibility by providing goods and services in a manner that is sustainable and safe.",
    service: "3PL (Third-Party Logistics) Services, Circular economy services (Reverse Logistics, EPR & E-Waste Management services)",
  },
  {
    year: "2020",
    category: "Social",
    principle: "Employee Well-being",
    desc: "befikr successfully launched its ESG/Environment/Social sector services in 2020. Today, befikr offers Electrical Safety audit services & training programs on Environment, Health & Safety (EHS), helping companies take care of employee well-being, including those in the value chains, thus offering a safe working environment.",
    service: "Electrical Safety Audit services, EHS Training services",
  },
  {
    year: "2023",
    category: "Social",
    principle: "Stakeholder Engagement",
    desc: "Through the enriching experience of working with thousands of hanymen in India, befikr successfully launched its ESG/CSR services in 2023. Today,  befikr offers Corporate Social Responsibility services, helping businesses implement community-based priorities and engagements that promote social upliftment, inclusive growth, and equitable development.",
    service: "Corporate Social Responsibility Services",
  },
  {
    year: "2023",
    category: "Environment",
    principle: "Sustainability",
    desc: "Being a market leader in the Electrical Safety Audit business, befikr successfully launched its ESG/Environment/Energy Audit services in 2023. Today,  befikr offers Comprehensive Energy Audit services & recommends Energy Efficiency measures, helping enterprises save energy, protect biodiversity & minimise environmental footprint.",
    service: "Energy Audit Services",
  },
];

const getBadgeColor = (category) => {
  switch (category.toLowerCase()) {
    case "environment":
      return "bg-green-800 text-green-300";
    case "social":
      return "bg-blue-800 text-blue-300";
    case "governance":
      return "bg-yellow-700 text-yellow-200";
    default:
      return "bg-gray-600 text-white";
  }
};

export default function EditTimeline() {
  const scrollRef = useRef(null);
  const [timeline, setTimeline] = useState(timelineData);
  const [newTimelineComp, setNewTimelineComp] = useState({
    year: "",
    category: "",
    principle: "",
    desc: "",
    service: ""
  })
  const [openTimelineForm, setOpenTimelineForm] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...timeline];
    updated[index][field] = value;
    setTimeline(updated);
  };

  const handleAdd = () => {
    setTimeline([
      ...timeline,
      {
        year: newTimelineComp.year,
        category: newTimelineComp.category,
        principle: newTimelineComp.principle,
        desc: newTimelineComp.desc,
        service: newTimelineComp.service,
      },
    ]);
    setOpenTimelineForm(false);
    setNewTimelineComp({ year: "", category: "", principle: "", desc: "", service: "" });
    //console.log(timeline);
  };



  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold">Our Journey</h2>
        <p className="mt-2 text-gray-400 p-4">
          {" "}
          befikr is a strategic & execution partner for environment, safety &
          social IMPACT services.
        </p>
        <p className="mt-2 text-gray-400 p-4">
          {" "}
          We work with businesses to exhibit Business Responsibility &
          Sustainability through direct impact ESG services.
        </p>
      </div>
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide"
      >

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-transparent hidden md:block"></div>

          <div className="space-y-8 md:space-y-20">
            {timeline.map((step, index) => (
              <div key={step.title} className="relative">
                <div className={`flex flex-col items-center gap-8 md:gap-8 `}>
                  {/* Content */}
                  <div className={`flex-1 `}>
                    <div className="bg-zinc-900 w-[900px] max-w-4xl p-6 m-4 text-wrap break-words rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">

                      <div className="flex justify-between items-center mb-4 w-full">
                        <input
                          className=" text-white p-2 w-full mb-2 bg-transparent"
                          placeholder="Year"
                          value={step.year}
                          onChange={(e) => handleChange(index, "year", e.target.value)}
                        />
                        <span
                          className={`text-sm text-center px-3 py-1 w-3/4  rounded-full ${getBadgeColor(
                            step.category
                          )}`}
                        > ESG - <input style={{ width: `${(step.category.length + 1) * 8}px` }} className="bg-transparent min-h-4 " placeholder="Category" value={step.category} onChange={(e) => handleChange(index, "category", e.target.value)} /> - <input style={{ width: `${(step.principle.length + 1) * 8}px` }} className="bg-transparent min-h-4 " placeholder="Principle" value={step.principle} onChange={(e) => handleChange(index, "principle", e.target.value)} />
                          {/* <input
                            className=" text-white  p-2 w-full mb-2 bg-transparent"
                            placeholder="Category"
                            value={step.category}
                            onChange={(e) => handleChange(index, "category", e.target.value)}
                          /> */}
                          {/* <input
                            className=" text-white  p-2 w-full mb-2 bg-transparent"
                            placeholder="Principle"
                            value={step.principle}
                            onChange={(e) => handleChange(index, "principle", e.target.value)}
                          /> */}
                        </span>
                      </div>
                      <textarea
                        className="text-white  p-2 w-full mb-2 bg-transparent"
                        placeholder="Description"
                        style={{ height: `${step.desc.length / 2 + 39}px` }}
                        value={step.desc}
                        onChange={(e) => handleChange(index, "desc", e.target.value)}
                      />
                      <p className="text-base text-indigo-300 font-medium">
                        <strong>Service:</strong>
                        <textarea
                          className="  p-2 w-full mb-2 bg-transparent"
                          placeholder="Service"
                          value={step.service}
                          onChange={(e) => handleChange(index, "service", e.target.value)}
                        />

                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < timeline.length - 1 && (
                  <div className="flex justify-center mt-8 md:mt-12">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 animate-bounce">
                      <ChevronDown className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center mb-10">
            <DotIcon className="h-8 w-8 opacity-25 text-blue-500" />
            <DotIcon className="h-8 w-8 opacity-50 text-blue-500" />
            <DotIcon className="h-8 w-8 opacity-75 text-blue-500" />
            <DotIcon className="h-8 w-8 opacity-100 text-blue-500" />
            <h2 className="text-4xl mt-8 font-bold">More to come...  </h2>
          

          <div className="text-center mt-8">
            {openTimelineForm ? (
              <form className="flex flex-col gap-4 bg-zinc-800 p-6 rounded-lg max-w-4xl text-left text-white shadow-md">
                <div>
                  <label className="block text-sm mb-1">Year:</label>
                  <input
                    className="w-full p-2 bg-zinc-900 border border-gray-600 rounded"
                    value={newTimelineComp.year}
                    onChange={(e) =>
                      setNewTimelineComp({ ...newTimelineComp, year: e.target.value })
                    }
                    placeholder="e.g., 2025"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Category:</label>
                  <input
                    className="w-full p-2 bg-zinc-900 border border-gray-600 rounded"
                    value={newTimelineComp.category}
                    onChange={(e) =>
                      setNewTimelineComp({ ...newTimelineComp, category: e.target.value })
                    }
                    placeholder="e.g., Social"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Principle:</label>
                  <input
                    className="w-full p-2 bg-zinc-900 border border-gray-600 rounded"
                    value={newTimelineComp.principle}
                    onChange={(e) =>
                      setNewTimelineComp({
                        ...newTimelineComp,
                        principle: e.target.value,
                      })
                    }
                    placeholder="e.g., Employee Well-being"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Description:</label>
                  <textarea
                    className="w-full p-2 bg-zinc-900 border border-gray-600 rounded"
                    value={newTimelineComp.desc}
                    onChange={(e) =>
                      setNewTimelineComp({ ...newTimelineComp, desc: e.target.value })
                    }
                    placeholder="Write a short description..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Service:</label>
                  <input
                    className="w-full p-2 bg-zinc-900 border border-gray-600 rounded"
                    value={newTimelineComp.service}
                    onChange={(e) =>
                      setNewTimelineComp({ ...newTimelineComp, service: e.target.value })
                    }
                    placeholder="e.g., EHS Training"
                  />
                </div>

                <div className="flex justify-between gap-4 mt-4">
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="w-full py-2 bg-green-600 rounded hover:bg-green-700"
                  >
                    Add Timeline Item
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenTimelineForm(false)}
                    className="w-full py-2 bg-red-600 rounded hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setOpenTimelineForm(true)}
                className="px-6 py-3 bg-companyBlue text-black rounded hover:text-white transition-all"
              >
                Add New Timeline Item
              </button>
            )}
          </div>


          {/* <div className="text-center mt-8">
              {openTimelineForm ? (
                <form className="flex flex-col justify-start bg-transparent text-white">
                  <label className="">Year:</label>
                  <input className="bg-transparent border rounded" value={newTimelineComp.year} onChange={(e) => newTimelineComp.year = e.target.value}/>
                  <label className="">Category:</label>
                  <input className="bg-transparent border rounded" value={newTimelineComp.category} onChange={(e) => newTimelineComp.category = e.target.value}/>
                  <label className="">Description:</label>
                  <textarea className="bg-transparent border rounded" value={newTimelineComp.desc} onChange={(e) => newTimelineComp.desc = e.target.value}/>
                  <label className="">Principle:</label>
                  <input className="bg-transparent border rounded" value={newTimelineComp.principle} onChange={(e) => newTimelineComp.principle = e.target.value}/>
                  <label className="">Service:</label>
                  <input className="bg-transparent border rounded" value={newTimelineComp.service} onChange={(e) => newTimelineComp.service = e.target.value}/>
                </form>
                // <button className="" onClick={handleAdd}>Add</button>
                // <button className="" onClick={setOpenTimelineForm(false)}>Cancel</button>
              ) : (
                <button
                onClick={setOpenTimelineForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add New Timeline Item
              </button>
              )}
              
            </div> */}
</div>
        </div>
      </div>
    </section>
  );
}




{/*  */ }



