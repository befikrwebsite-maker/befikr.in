"use client";

import { useState } from "react";
import ServicesBreakdown from "@/components/Services";

export default function ServicesShowcase() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const [clickedCategory, setClickedCategory] = useState(null); // for mobile tap

  function handleCategoryClick(category) {
    if (clickedCategory === category) {
      setClickedCategory(null);
    } else {
      setClickedCategory(category);
    }
  }

  return (
    <main className="bg-white text-black font-sans pb-32">
      {/* Hero Section */}
      <section className="py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <h1 className="text-4xl md:text-6xl text-center font-bold font-generalSansMedium leading-tight">
            Our ESG Services
          </h1>
        </div>
      </section>

      {/* Category Blocks */}
      <section className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {ServicesBreakdown.map((category, index) => {
          const isActive = hoveredCategory === category.Cateogery || clickedCategory === category.Cateogery;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCategory(category.Cateogery)}
              onMouseLeave={() => {
                setHoveredCategory(null);
                setHoveredServiceIndex(null);
              }}
              onClick={() => handleCategoryClick(category.Cateogery)}
              className={`p-6 mb-8 md:m-8 relative cursor-pointer group w-full transition-all duration-300 ease-in-out overflow-hidden
              ${category.bgColor}
              ${isActive ? "h-auto md:h-[600px]" : "h-[250px] md:h-[400px]"}`}
            >
              {/* Background Overlay */}
              <div className={`absolute inset-0 transition-all duration-300 ${isActive ? "bg-black/30" : "bg-black/10"}`} />

              {/* Optional background image */}
              {category.image && (
                <img
                  src={category.image}
                  alt={category.Cateogery}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={() => (window.location.href = category.link)}
                />
              )}

              {/* Content */}
              <div className="flex flex-col h-full items-center justify-between relative z-10">
                {/* Category Title */}
                <h2
                  className={`text-2xl md:text-4xl text-white font-bold transition-all duration-300 text-center mt-4 md:mt-8
                    ${isActive ? "opacity-0 -translate-y-2 md:translate-y-0 md:opacity-100" : "opacity-100 translate-y-0"}`}
                >
                  {category.Cateogery}
                </h2>

                {/* Services Panel */}
                <div
                  className={`transition-all w-full duration-300 ease-in-out max-w-md mx-auto
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
                  `}
                >
                  <div className="bg-white/90 p-4 md:p-6 rounded-lg shadow-xl backdrop-blur-sm mt-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 border-b pb-2 text-center md:text-left">
                      Our {category.Cateogery} Services
                    </h3>

                    <div className="space-y-2 md:space-y-3">
                      {category.Services.map((serviceGroup, idx) => (
                        <div
                          key={idx}
                          className={`p-2 md:p-3 rounded-lg transition-all 
                          ${hoveredServiceIndex === idx ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"}`}
                          onMouseEnter={() => setHoveredServiceIndex(idx)}
                          onMouseLeave={() => setHoveredServiceIndex(null)}
                        >
                          <div className="flex items-center">
                            <a
                              href={serviceGroup?.SubServices[0].link}
                            >
                            <h4 className="font-semibold text-gray-800 flex-grow text-sm md:text-base">
                              {serviceGroup.Service}
                            </h4>
                            </a>
                            {!["Electrical Safety Audit Services","Energy Audit Services","Greenhouse Gas Emission Audit Services"].includes(serviceGroup.Service) &&
                            <svg
                              className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform ${hoveredServiceIndex === idx ? "rotate-90" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            }
                          </div>

                          {/* SubServices */}
                          {!["Electrical Safety Audit Services","Energy Audit Services","Greenhouse Gas Emission Audit Services"].includes(serviceGroup.Service) && hoveredServiceIndex === idx && (
                            <ul className="mt-2 pl-2 space-y-1 md:space-y-2">
                              {serviceGroup.SubServices.map((sub, i) => (
                                <li
                                  key={i}
                                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-start"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.location.href = `services/${sub.link}`;
                                  }}
                                >
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2" />
                                  {sub.title}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
