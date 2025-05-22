'use client';

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2017",
    category: "Governance",
    principle: "Consumer Responsibility",
    brsrPrinciple:
      "Businesses should engage with and provide value to their consumers in a responsible manner",
    strategy:
      "Businesses should treat customers fairly, respect their rights, and provide them with accurate and truthful information.",
    service: "Business to Business to Consumer Services (B2B2C)",
  },
  {
    year: "2020",
    category: "Environment",
    principle: "Product Responsibility",
    brsrPrinciple:
      "Businesses should provide goods and services in a manner that is sustainable and safe",
    strategy:
      "Businesses should minimize negative impacts throughout their product lifecycle.",
    service: "Circular economy services (EPR & E-Waste Management services)",
  },
  {
    year: "2020",
    category: "Social",
    principle: "Employee Well-being",
    brsrPrinciple:
      "Businesses should respect and promote the well-being of all employees, including those in their value chains",
    strategy:
      "Businesses should prioritize fair labor practices and a safe working environment.",
    service: "Electrical Safety Audit services, EHS Training services",
  },
  {
    year: "2020",
    category: "Social",
    principle: "Stakeholder Engagement",
    brsrPrinciple:
      "Businesses should respect the interests of and be responsive to all its stakeholders",
    strategy:
      "Businesses should responsibly engage with investors, customers, employees, and the community.",
    service: "Corporate Social Responsibility Services",
  },
  {
    year: "2020",
    category: "Social",
    principle: "Human Rights",
    brsrPrinciple: "Businesses should respect and promote human rights",
    strategy:
      "Businesses should respect and promote human rights throughout their operations and supply chains.",
    service: "POSCH Training services",
  },
  {
    year: "2023",
    category: "Environment",
    principle: "Sustainability",
    brsrPrinciple:
      "Businesses should respect and make efforts to protect and restore the environment",
    strategy:
      "Businesses should protect biodiversity, and minimize their environmental footprint.",
    service: "Energy Audit Services",
  },
  {
    year: "2024",
    category: "Social",
    principle: "Inclusive Development",
    brsrPrinciple:
      "Businesses should promote inclusive growth and equitable development",
    strategy:
      "Businesses should encourage and focus on upliftment of the communities where they operate.",
    service: "Corporate Social Responsibility Services",
  },
];

const getBadgeColor = (category) => {
  switch (category) {
    case "Environment":
      return "bg-green-800 text-green-300";
    case "Social":
      return "bg-blue-800 text-blue-300";
    case "Governance":
      return "bg-yellow-700 text-yellow-200";
    default:
      return "bg-gray-600 text-white";
  }
};

export default function Timeline() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;

    const autoScroll = () => {
      if (!container) return;
      container.scrollLeft += 1;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full bg-black py-16 text-white">
        <div className="flex flex-col items-center mb-10">
            <h2 className="text-4xl font-bold">Our Journey</h2>
            <p className="mt-2 text-gray-400"> befikr is a strategic & execution partner for environment, safety & social IMPACT services.</p>
            <p className="mt-2 text-gray-400">  We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services.
</p>
        </div>
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide"
      >
        <div className="flex gap-6 px-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="min-w-8xl max-w-8xl h-56 bg-zinc-900 rounded-xl p-5 border border-zinc-700 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold">{item.year}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(item.category)}`}>
                  {item.category}
                </span>
              </div>
              <p className="italic text-sm text-zinc-300 mb-2">{item.principle}</p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Principle:</strong> {item.brsrPrinciple}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Strategy:</strong> {item.strategy}
              </p>
              <p className="text-sm text-indigo-300">
                <strong>Service:</strong> {item.service}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
