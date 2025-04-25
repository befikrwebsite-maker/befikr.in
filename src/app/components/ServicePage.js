"use client";

import { useState } from "react";
import ServicesBreakdown from "@/components/Services";

export default function ServicesShowcase() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  return (
    <main className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight md:w-1/2">
            OurCompany <br /> Services!
          </h1>
          <p className="text-gray-600 text-lg max-w-xl md:w-1/2">
            We are a full-service digital agency that builds immersive user experiences. Our team creates exceptional visualization and thoughtful functionality.
          </p>
        </div>
      </section>

      {/* Category Blocks */}
      <section className="flex flex-col divide-y divide-gray-200">
        {ServicesBreakdown.map((category, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCategory(category.Cateogery)}
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredServiceIndex(null);
            }}
            className={`relative group w-full transition-all duration-500 ease-in-out overflow-hidden 
                ${category.bgColor} 
                ${hoveredCategory === category.Cateogery ? "h-[400px]" : "h-[300px]"}`}
              

          >
            {/* Optional background image */}
            {category.image && (
              <img
                src={category.image}
                alt={category.Cateogery}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            )}

            {/* Content container */}
            <div className="flex h-full items-center justify-between px-10 relative z-10">
              {/* Category Title */}
              <h2
                className={`text-4xl md:text-5xl font-bold transition-all flex-1 text-center duration-500 ${
                  hoveredCategory === category.Cateogery
                    ? "translate-x-[-20%]"
                    : ""
                }`}
              >
                {category.Cateogery}
              </h2>

              {/* Service List Panel */}
              <div
                className={`transition-all duration-500 ease-in-out w-[50%] ${
                  hoveredCategory === category.Cateogery
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
              >
                <div className="bg-white/90 p-6 rounded-lg shadow-lg">
                  {category.Services.map((serviceGroup, idx) => (
                    <div
                      key={idx}
                      className="mb-4"
                      onMouseEnter={() => setHoveredServiceIndex(idx)}
                      onMouseLeave={() => setHoveredServiceIndex(null)}
                    >
                      <h3 className="font-semibold text-gray-800 mb-2 cursor-pointer">
                        {serviceGroup.Service}
                      </h3>
                      {hoveredServiceIndex === idx && (
                        <ul className="text-sm text-gray-600 space-y-1 pl-3">
                          {serviceGroup.SubServices.map((sub, i) => (
                            <li key={i}>• {sub.title}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
