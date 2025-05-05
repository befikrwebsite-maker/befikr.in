"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const impacts = [
  {
    title: "Positively Impacting Environment & Sustainability",
    desc: "Enabling Businesses to conserve energy & reduce the negative impact over environment along with creating a social sustainable impact.",
    image: "/impactSection/IMG-20250213-WA0005-removebg-preview.png",
  },
  {
    title: "Organising the Unorganised Business Services",
    desc: "Offering organised & dependable services to businesses thus helping them scale & sustain respective business environment.",
    image: "/impactSection/IMG-20250213-WA0002-removebg-preview.png",
  },
  {
    title: "Pan-India One-Stop Services Company",
    desc: "Setting up a national foot-print of business services bringing uniformity & single-point-of-contact for businesses.",
    image: "/impactSection/IMG-20250213-WA0003-removebg-preview.png",
  },
  {
    title: "In-House Team of Auditors, Engineers & Skilled Professionals",
    desc: "Creating a pool of qualified, skilled & professional Engineers-Handymen along with efficient Project Managers to Key Account Managers.",
    image: "/impactSection/IMG-20250213-WA0004-removebg-preview.png",
  },
];

export default function Impact() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const animateSlideChange = (direction) => {
    const tl = gsap.timeline();
    
    tl.to(textRef.current, {
      opacity: 0,
      y: direction === 'next' ? 20 : -20,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.out"
    }, 0)
    .add(() => {
      setIndex(prev => 
        direction === 'next' 
          ? (prev + 1) % impacts.length 
          : (prev - 1 + impacts.length) % impacts.length
      );
    })
    .fromTo(textRef.current, 
      { opacity: 0, y: direction === 'next' ? -20 : 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
    .fromTo(imageRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

    return tl;
  };

  const nextSlide = () => {
    animateSlideChange('next');
  };

  const prevSlide = () => {
    animateSlideChange('prev');
  };

  const goToSlide = (i) => {
    if (i !== index) {
      const direction = i > index ? 'next' : 'prev';
      animateSlideChange(direction);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className=" w-full mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-companyBlue mb-12 font-generalSansSemibold">
          The <span className="text-gray-900">befikr</span> Impact
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            ref={containerRef}
            className="w-full p-6 sm:p-8 bg-white rounded-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          >
            {/* Text Content */}
            <div 
              ref={textRef}
              className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-4"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {impacts[index].title}
              </h3>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {impacts[index].desc.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            {/* Image Section */}
            <div 
              ref={imageRef}
              className="w-full lg:w-1/2 flex justify-center items-center"
            >
              <div className="relative w-full max-w-md aspect-square to-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-8">
                <img
                  src={impacts[index].image}
                  alt={impacts[index].title}
                  className="w-full h-auto object-contain max-h-64 sm:max-h-80 transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute -left-4 sm:-left-8 p-3 bg-white text-gray-800 rounded-full shadow-lg z-50 hover:bg-gray-100 transition-colors duration-200"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button
            className="absolute -right-4 sm:-right-8 p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {impacts.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === i ? "bg-companyBlue w-8" : "bg-gray-300"}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}