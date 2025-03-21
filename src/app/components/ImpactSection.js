import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % impacts.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + impacts.length) % impacts.length);

  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-8 px-4 sm:px-8 bg-gray-100">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={impacts[index].title}
            className="absolute w-full h-full flex flex-col sm:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center p-4 text-center sm:text-left w-full sm:w-2/3">
              <h3 className="text-3xl font-bold text-gray-900">{impacts[index].title}</h3>
              <p className="text-lg text-gray-700 mt-2">{impacts[index].desc}</p>
            </div>
            <div className="w-full sm:w-1/3 flex justify-center">
              <img
                src={impacts[index].image}
                alt={impacts[index].title}
                className="max-h-60 object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 flex gap-2">
        {impacts.map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-all ${index === i ? "bg-gray-800 w-6" : "bg-gray-400"}`}
            onClick={() => setIndex(i)}
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
