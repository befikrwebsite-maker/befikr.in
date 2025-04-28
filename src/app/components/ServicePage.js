"use client";

import { useState } from "react";
import ServicesBreakdown from "@/components/Services";

export default function ServicesShowcase() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  function handleCategoryClick(category) {
    setHoveredCategory(category);
  }

  return (
    <main className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <h1 className="text-5xl md:text-6xl font-bold font-generalSansMedium leading-tight md:w-1/2">
            Our Services
          </h1>
        </div>
      </section>

      {/* Category Blocks */}
      <section className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {ServicesBreakdown.map((category, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCategory(category.Cateogery)}
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredServiceIndex(null);
            }}
            className={`p-6 relative m-8 cursor-pointer group w-full transition-all duration-300 ease-in-out overflow-hidden 
          ${category.bgColor} 
          ${hoveredCategory === category.Cateogery ? "md:h-[500px]" : "h-[300px]"}`}
          >
            {/* Background overlay for better text contrast */}
            <div className={`absolute inset-0 transition-all duration-300 ${hoveredCategory === category.Cateogery ? 'bg-black/30' : 'bg-black/10'
              }`}></div>

            {/* Optional background image */}
            {category.image && (
              <img
                onClick={() => (window.location.href = category.link)}
                src={category.image}
                alt={category.Cateogery}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Content container */}
            <div className="flex flex-col h-full items-center justify-between relative z-10">
              {/* Category Title */}
              <h2
                className={`text-3xl md:text-4xl text-white font-bold transition-all duration-300 text-center mt-8 ${hoveredCategory === category.Cateogery
                  ? "opacity-0 -translate-y-4"
                  : "opacity-100 translate-y-0"
                  }`}
              >
                {category.Cateogery}
              </h2>

              {/* Service List Panel */}
              <div
                className={`transition-all w-full duration-300 ease-in-out max-w-md mx-auto ${hoveredCategory === category.Cateogery
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
              >
                <div className="bg-white/90 p-6 rounded-lg shadow-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                    Our {category.Cateogery} Services
                  </h3>

                  <div className="space-y-3">
                    {category.Services.map((serviceGroup, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg transition-all ${hoveredServiceIndex === idx
                          ? "bg-blue-50 border-l-4 border-blue-500"
                          : "hover:bg-gray-50"
                          }`}
                        onMouseEnter={() => setHoveredServiceIndex(idx)}
                        onMouseLeave={() => setHoveredServiceIndex(null)}
                      >
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-800 flex-grow">
                            {serviceGroup.Service}
                          </h4>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform ${hoveredServiceIndex === idx ? "rotate-90" : ""
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {hoveredServiceIndex === idx && (
                          <ul className="mt-2 pl-2 space-y-2">
                            {serviceGroup.SubServices.map((sub, i) => (
                              <li
                                key={i}
                                className="text-gray-600 hover:text-blue-600 transition-colors flex items-start"
                                onClick={() => (window.location.href = sub.depth)}>
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
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
        ))}
      </section>
    </main>
  );
}
