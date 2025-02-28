"use client";

import Navbar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import Footer from "@/components/Footer";

{/*
    ESG                                                             
    - Environment - Electrical Safety Audit
                  - Energy
                  - Defective Audit
                  - E-Waste Management
                  - Reverse Logistics

    - Social - Corporate Social Response

    ESG   - EN                      Services - 
        - Socaila
        - gov
*/}


export default function Page() {
    const cards = [
        {
            id: 1,
            category: "Environment",
            title: "Electrical Safety Audit",
            desc: "",
            tags: ["electrical", "safety", "audit", "environment"]
        },
        {
            id: 2,
            category: "Environment",
            title: "Energy",
            desc: "",
            tags: ["energy", "environment"]
        },
        {
            id: 3,
            category: "Environment",
            title: "Defective Audit",
            desc: "",
            tags: ["defective", "audit", "environment"]
        },
        {
            id: 4,
            category: "Environment",
            title: "E-Waste Management",
            desc: "",
            tags: ["e", "waste", "e-waste", "management", "environment"]
        },
        {
            id: 5,
            category: "Environment",
            title: "Reverse Logistics",
            desc: "",
            tags: ["reverse", "logistics", "environment"]
        },
        {
            id: 6,
            category: "Social",
            title: "Corporate Social Response",
            desc: "",
            tags: ["corporate", "response", "social"]
        }
    ];

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

    // Extract unique ESG categories and their respective options
    const esgCategories = cards.reduce((acc, card) => {
        if (!acc[card.category]) acc[card.category] = [];
        acc[card.category].push(card.title);
        return acc;
    }, {});

    console.log(esgCategories); // Debug: See the generated ESG structure

    // Filter states
    const [selectedESG, setSelectedESG] = useState([]);

    const checkboxFilter = (service) =>
        (selectedESG.length === 0 || selectedESG.includes(service.title));

    // Apply both filters
    const filteredCards = filtered.filter((service) => checkboxFilter(service));

    // Count Matching Services for Each Filter Option
    const getFilterCount = (filterType, value) => {
        return filteredCards.filter((service) => {
            if (filterType === "team") return service.team === value;
            return false;
        }).length;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // using modalcomponent here ///////////////////////////////////////////////////////////////////////////////////////////
    const router = useRouter();
    const [selectedService, setSelectedService] = useState(null);

    // Read ServiceId from URL manually (since useSearchParams() doesn't work in static export)
    useEffect(() => {
        const param = new URLSearchParams(window.location.search);
        const serviceId = param.get("serviceId");

        if (serviceId) {
            const service = cards.find((j) => j.id.toString() === serviceId);
            setSelectedService(service || null);
        } else {
            setSelectedService(null);
        }
    }, []);

    // Open modal & update URL manually
    const openService = (service) => {
        window.history.pushState({}, "", `?serviceId=${service.id}`);
        setSelectedService(service);
    };

    // Close modal & reset URL manually
    const closeService = () => {
        window.history.pushState({}, "", "/services"); // Removes ServiceId from the URL
        setSelectedService(null);
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="min-h-screen bg-[#f5f5f5] px-10 py-5 flex flex-col items-center">
            <div className="bg-white px-10 py-5 w-full max-w-7xl rounded-lg shadow-lg mt-8">
                <div className="text-left text-xl py-5 font-extrabold font-generalSansSemibold text-gray-900">Our Services</div>
                <div className="w-full max-w-6xl">
                    <div className="flex px-4 py-2 rounded-md bg-[#f5f5f5] overflow-hidden border-2 w-full font-[sans-serif]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
                            className="fill-blue-600 mr-3 rotate-90 font-extrabold ">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                        <input type="text" placeholder="Search Keywords" className="w-full outline-none bg-transparent text-gray-600 text-sm "
                            onChange={(e) => { setQuery(e.target.value.toLowerCase().split(" ")); }}
                        />
                    </div>
                </div>

                {/* Dropdown Filters */}
                <div className="w-full max-w-6xl text-center flex flex-wrap justify-center gap-3 px-6 mt-6">
                    <DropdownESG
                        label="ESG Category"
                        categories={esgCategories}
                        selected={selectedESG}
                        setSelected={setSelectedESG}
                    />

                </div>

                {/* Service Count */}
                <div className="flex text-gray-900 justify-center mt-4">
                    <p className="text-gray-900 tracking-wide font-generalSansRegular">
                        Showing {filteredCards.length} Services among the applied filters
                    </p>
                </div>
            </div>


            <div className="py-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full max-w-7xl">
                {filteredCards.map((items, index) => (
                    <div key={items.id} onClick={() => openService(items)} className="w-full max-w-[450px] h-auto sm:h-[200px] md:h-[210px] lg:h-[220px] rounded-lg bg-white shadow-md p-4 sm:p-5 flex flex-col justify-between transition-shadow duration-300 ease-in hover:shadow-lg border">
                        <div className="flex flex-col ">
                            <p className="text-gray-900 text-base sm:text-lg font-bold text-left">{items.title}</p>
                            <p className="text-gray-700 font-semibold text-sm sm:text-base">{items.category}</p>
                            <div className="flex flex-wrap gap-1 text-gray-700 text-xs sm:text-sm  mt-2">
                                {Array.isArray(items.tags) ? items.tags.map((tag, i) => (
                                    <span key={i} className="bg-white-200 border rounded-3xl px-2 py-1 rounded-md">{tag}</span>
                                )) : null}
                            </div>
                        </div>
                        <button onClick={() => { }}
                            className="text-blue-600 font-extrabold tracking-wide uppercase text-l bg-blue-200 px-3 py-2 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-3 hover:bg-blue-500 hover:text-white ">More Details</button>
                    </div>
                ))}
            </div>

            {/* Full-Screen Animated Modal */}
            <AnimatePresence>
                {selectedService && (
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
                                onClick={closeService}
                                className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full"
                            >
                                ✖
                            </button>

                            {/* Service Details */}
                            <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                            <p className="text-gray-600 text-lg">{selectedService.category}</p>
                            <p className="mt-4 text-gray-800">{selectedService.tags}</p>
                            <p className="mt-4 text-gray-800">{selectedService.tags}</p>
                            <p className="mt-4 text-gray-800">{selectedService.id}</p>


                            {/* Apply Button */}
                            <div className="mt-auto">
                                <button onClick={() => { }} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full">
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

// ESG Cascading Dropdown Component
function DropdownESG({ label, categories, selected, setSelected }) {
    return (
        <Listbox value={selected} onChange={setSelected} multiple>
            <div className="relative">
                <Listbox.Button className="flex justify-center text-gray-900 font-bold bg-[#f5f5f5] border text-center rounded-md w-80 py-1 hover:shadow-lg">
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
                    <Listbox.Options className="absolute mt-2 w-80 bg-white border rounded-md shadow-lg z-10">
                        {Object.keys(categories).map((category, idx) => (
                            <div key={idx} className="p-2">
                                <p className="font-semibold text-gray-700">{category}</p>
                                {categories[category].map((option, index) => (
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
                                            </label>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </div>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}