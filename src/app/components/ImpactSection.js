"use client"; // Required for Next.js App Router

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const impacts = [
  {
    title: "Positively Impacting Environment & Sustainability",
    desc: "Enabling Businesses to conserve energy & reduce the negative impact over \nenvironment along with creating a social sustainable impact.",
    image: "/impactSection/IMG-20250213-WA0005-removebg-preview.png",
  },
  {
    title: "Organising the Unorganised Business Services",
    desc: "Offering organised & dependable services to businesses thus helping them\n scale & sustain respective business environment.",
    image: "/impactSection/IMG-20250213-WA0002-removebg-preview.png",
  },
  {
    title: "Pan-India One-Stop Services Company",
    desc: "Setting up a national foot-print of business services bringing\n uniformity & single-point-of-contact for businesses.",
    image: "/impactSection/IMG-20250213-WA0003-removebg-preview.png",
  },
  {
    title: "In-House Team of Auditors, Engineers & Skilled Professionals",
    desc: "Creating a pool of qualified, skilled & professional Engineers-Handymen\nalong with efficient Project Managers to Key Account Managers.",
    image: "/impactSection/IMG-20250213-WA0004-removebg-preview.png",
  },
];


export default function Impact() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        setIndex((prev) => (prev + 1) % impacts.length);
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, scale: 1 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  const prevSlide = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        setIndex((prev) => (prev - 1 + impacts.length) % impacts.length);
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, scale: 1 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-10 pb-8 px-4 sm:px-8 bg-white">
      <div className="relative w-full  h-full flex  items-center justify-center">
        <div
          ref={containerRef}
          className="absolute w-full h-full p-6 bg-white border border-companyBlue shadow-lg rounded-lg flex flex-col sm:flex-row items-center justify-between duration-150"
        >
          {/* Text Content */}
          <div className="w-full sm:w-2/3 flex flex-col justify-center px-4 text-center sm:text-left">
            <div className="text-6xl text-companyBlue font-generalSansSemibold pb-10 pt-20">
              The befikr Impact
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              {impacts[index].title}
            </h3>

            <p className="mt-12 text-2xl font-generalSansRegular text-slate-900 text-left">
              {impacts[index].desc.split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-1/3 flex justify-center mt-10 sm:mt-0">
            <img
              src={impacts[index].image}
              alt={impacts[index].title}
              className="max-h-72 object-contain scale-150"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-2 mt-8 flex gap-2">
        {impacts.map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-all ${index === i ? "bg-gray-800 w-6" : "bg-gray-400"}`}
            onClick={() => {
              gsap.to(containerRef.current, {
                opacity: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                  setIndex(i);
                  gsap.fromTo(
                    containerRef.current,
                    { opacity: 0, scale: 1 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
                  );
                },
              });
            }}
          />
        ))}
      </div>

      <button
        className="absolute left-2 sm:left-4 p-3 bg-gray-800 text-white rounded-full z-50 hover:bg-gray-700"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 sm:right-4 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
