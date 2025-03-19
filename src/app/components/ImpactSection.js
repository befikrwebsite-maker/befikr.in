import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const impacts = [
  {
    title: "Positively Impacting Environment & Sustainability",
    desc: "Enabling Businesses to conserve energy & reduce the negative impact over environment along with creating a social sustainable impact.",
    image: "/service_img/logo-svg.svg",
  },
  {
    title: "Organising the Unorganised Business Services",
    desc: "Offering organised & dependable services to businesses thus helping them scale & sustain respective business environment.",
    image: "/service_img/logo-svg.svg",
  },
  {
    title: "Pan-India One-Stop Services Company",
    desc: "Setting up a national foot-print of business services bringing uniformity & single-point-of-contact for businesses.",
    image: "/service_img/logo-svg.svg",
  },
  {
    title: "In-House Team of Auditors, Engineers & Skilled Professionals",
    desc: "Creating a pool of qualified, skilled & professional Engineers-Handymen along with efficient Project Managers to Key Account Managers.",
    image: "/service_img/logo-svg.svg",
  },
];

export default function Impact() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % impacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % impacts.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + impacts.length) % impacts.length);

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={impacts[index].title}
          className="absolute w-full h-full flex items-center justify-center p-12 bg-[#f5f5f5]"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative p-6 bg-white rounded-lg shadow-lg transition-all duration-300 border w-full h-full">
            <img
              src={impacts[index].image}
              alt={impacts[index].title}
              className="absolute right-0 bottom-0 w-1/4 object-cover"
            />
            <div className="flex flex-col justify-center text-lg text-black p-4 z-10">
              <h3 className="text-4xl font-bold">{impacts[index].title}</h3>
              <p className="text-xl mt-2 w-1/2">{impacts[index].desc}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="absolute right-5 p-2 bg-gray-800 text-white rounded-full" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>
    </div>
  );
}