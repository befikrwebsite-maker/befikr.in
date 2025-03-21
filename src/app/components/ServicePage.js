"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import SimpleForm from "./SimpleForm.js";
import { ChevronDown } from "lucide-react";

export default function ServicePage() {
    const cards = [
        {
            id: 1,
            category: "Environment",
            title: "Electrical Safety Audit",
            desc: "An electrical audit is a comprehensive assessment of electrical systems & infrastructure within a building, facility, or industrial setting to evaluate electrical safety, power efficiency, electrical safety compliance with regulations, and overall performance. Regular electrical safety audits are recommended, typically every year depending on the nature of business operations and respective regulatory requirements. An efficient electrical safety audit helps prevent electrical accidents, to identify potential hazards, energy inefficiencies, opportunities for improvement, fires, and compliance issues while ensuring the safety of employees and assets.",
            tags: ["electrical", "safety", "audit", "environment"],
            image: "../service_img/logo-svgELECTRICAL.svg"
        },
        {
            id: 2,
            category: "Environment",
            title: "Energy Audit",
            desc: "An energy audit is a comprehensive assessment of energy consuming mechanical & electrical infrastructure within a building, facility, or industrial setting to evaluate energy consumption patterns over a period of time. Periodical energy audits promote use of energy efficient process¬es, equipment, devices and systems, brings an effort to reduce energy intensity, ensure efficient use of energy and its conservation as per the guidelines & norms set by Bureau of energy efficiency in India. An efficient energy audit helps promote businesses take steps for energy savings & energy conservation techniques Including spreading awareness of energy savings within businesses & organisations.",
            tags: ["energy", "environment"],
            image: "../service_img/logo-svgEnergy.svg"
        },
        {
            id: 3,
            category: "Environment",
            title: "Defective Audit",
            desc: "Defective audit is a process to evaluate the within warranty product function & usage as designed & manufactured to work seamless for a certain set period of time in years. A defective audit gets triggered after a malfunction appearance in a new product within years of warranty as specified in the product brochure & commitment from the manufacturer or the brand. Such defective product audits ensure the customers get a due replacement as either a new product or parts amended as replacement as a service commitment within warranty. An efficient defective audit helps businesses, dealers, retailers & consumers get due justice as well as control the supply chain leakages as well as risks for businesses.",
            tags: ["defective", "audit", "environment"],
            image: "../service_img/logo-svgDefective.svg"
        },
        // {
        //     id: 4,
        //     category: "Environment",
        //     title: "E-Waste Management",
        //     desc: "",
        //     tags: ["e", "waste", "e-waste", "management", "environment"]
        // },
        {
            id: 5,
            category: "Environment",
            title: "Reverse Logistics",
            desc: "Reverse logistics is a process to develop a reverse supply chain mechanism to collect & deliver defective products or e-waste materials back to the manufacturer base of product origin or e-waste warehouses efficiently & within the stipulated timeframe. Businesses need reverse logistics services through partners & strengthen their supply chain infrastructure for smooth end to end business operations. An efficient reverse logistics team ensures organising the fragmented unorganised services helping businesses, dealers, retailers & consumers for the products to complete their end of life processing & help strengthen the Indian circular economy.",
            tags: ["reverse", "logistics", "environment"],
            image: "../service_img/logo-svg.svg"
        },
        {
            id: 6,
            category: "Social",
            title: "Corporate Social Response",
            desc: "Corporate social responsibility services are taken up by businesses in profit as a self-regulatory mechanism to socially contribute to specific sectors of priority & interest to the business group. Through their CSR efforts companies try and create certain social impacts contributing to a country’s infrastructure & people through business profits. Through various projects & initiatives the CSR efforts ensure businesses & brands contribute not only in the society but also for their own learning & development in the sectors they operate in. A well thought of CSR initiative eventually benefits the society & the country at large magnifying various efforts from the government, NGOs as well as the private sector thus creating a visible impact in the social frame of a country.",
            tags: ["corporate", "response", "social"],
            image: "../service_img/logo-svg1.svg"
        }
    ];

    const [showForm, setShowForm] = useState(false);

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

    useEffect(() => {
        if (selectedService) {
            const scrollY = window.scrollY;
            document.documentElement.style.position = "fixed";
            document.documentElement.style.top = `-${scrollY}px`;
            document.documentElement.style.width = "100%";
        } else {
            const scrollY = parseInt(document.documentElement.style.top || "0") * -1;
            document.documentElement.style.position = "";
            document.documentElement.style.top = "";
            window.scrollTo(0, scrollY);
        }
    }, [selectedService]);


    // Open modal & update URL manually
    const openService = (service) => {
        setSelectedService(service);
        document.body.style.overflow = "hidden";
    };

    // Close modal & reset URL manually
    const closeService = () => {
        window.history.pushState({}, "", "/"); // Removes ServiceId from the URL
        setSelectedService(null);
        document.body.style.overflow = "";
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className=" max-w-full bg-[#f5f5f5] px-10 flex flex-col items-center">
            <div className="bg-white px-10 py-5 w-full items-center rounded-lg shadow-lg mt-8 flex flex-col justify-center  text-center">
                <div className="text-left text-xl py-5 font-extrabold font-generalSansSemibold text-gray-900"></div>
                <div className="w-full max-w-6xl">
                    <div className="flex px-4 py-2 rounded-md bg-[#f5f5f5] border-2 w-full font-[sans-serif]">
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
                        label="Our Services"
                        categories={esgCategories}
                        selected={selectedESG}
                        setSelected={setSelectedESG}
                    />

                </div>

                {/* Service Count */}
                <div className="flex text-gray-900 justify-center mt-4">
                    <p className="text-gray-900 tracking-wide font-generalSansRegular">
                        Showing <strong>{filteredCards.length}</strong> Services among the applied filters
                    </p>
                </div>
            </div>


            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full">
                {filteredCards.map((items) => (
                    <div key={items.id}

                        className="w-full h-auto sm:h-[200px] md:h-[210px] lg:h-[250px] rounded-lg bg-white shadow-md p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ease-in hover:shadow-lg hover:border-companyBlue border relative"
                    // style={{
                    //     backgroundImage: `url(${items.image})`,
                    //     backgroundSize: "contain", 
                    //     backgroundRepeat: "no-repeat",
                    //     backgroundPosition: "center",
                    // }}
                    >
                        <img
                            src={items.image}
                            alt={items.title}
                            className="absolute  right-0 h-full pb-10 object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-50  bg-opacity-0 rounded-lg"></div>


                        <div className="relative z-10 flex flex-col text-black">
                            <p className="text-base sm:text-lg font-bold">{items.title}</p>
                            <p className="font-semibold text-sm sm:text-base">{items.category}</p>
                            <div className="hidden flex-wrap gap-1 text-xs sm:text-sm mt-2">
                                {Array.isArray(items.tags)
                                    ? items.tags.map((tag, i) => (
                                        <span key={i} className="bg-white bg-opacity-20 border rounded-3xl px-2 py-1">
                                            {tag}
                                        </span>
                                    ))
                                    : null}
                            </div>
                            <p className="pt-6 font-generalSansMedium line-clamp-3 w-2/3 text-sm sm:text-base">
                                {items.desc}
                            </p>
                            <span className="cursor-pointer inline-block hover:text-companyBlue duration-100 transition-all"
                                onClick={() => openService(items)}
                            >Read More</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-Screen Animated Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white w-full h-full md:w-3/4 md:h-4/5 rounded-xl shadow-2xl p-8 relative flex flex-col overflow-y-auto"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 120 }}
                        >
                            {/* Close Button */}
                            <div className="relative">
                                <button
                                    onClick={closeService}
                                    className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    ✖
                                </button>
                            </div>
                            {/* Service Details */}
                            <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                            <p className="text-gray-600 text-lg">{selectedService.category}</p>
                            <p className="text-gray-700 pt-6 font-generalSansMedium text-sm sm:text-base">
                                {selectedService.desc}
                            </p>

                            {/* Apply Button */}
                            <div
                                id="apply"
                                className="mt-auto flex flex-col"
                            >
                                <button
                                    onClick={() => setShowForm(!showForm)}
                                    className="px-6 py-3 mt-8 bg-companyBlue text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out active:scale-95 flex items-center gap-2">
                                    Book A Meeting  <ChevronDown className="w-5 h-5" />
                                </button>

                                {showForm && <SimpleForm />}
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
            <div className="relative z-50"> {/* Higher z-index here */}
                <Listbox.Button className="flex justify-center text-gray-900 font-bold bg-[#f5f5f5] border text-center rounded-2xl w-60 md:w-80 py-1 transition-all duration-300 hover:shadow-lg">
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
                    <Listbox.Options className="absolute mt-2 w-80 bg-white border rounded-md shadow-lg z-50">
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
