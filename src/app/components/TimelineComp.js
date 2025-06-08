"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, DotIcon } from "lucide-react";


const timelineData = [
  {
    year: "2017",
    category: "Governance",
    principle: "Consumer Responsibility",
    desc: "befikr successfully launched its ESG/Governance sector services in 2017. Today, befikr offers B2B2C services that assist companies in acting responsibly towards consumers by engaging with them truthfully and transparently, thereby providing value to their customers.",
    service: "Business to Business to Consumer Services (B2B2C)",
  },
  {
    year: "2020",
    category: "Environment",
    principle: "Product Responsibility",
    desc: "As a market leader in the Defective Audit business, befikr successfully launched its ESG/Environment/Circular Economy services in 2020. Today, befikr offers comprehensive reverse logistics and e-waste management services, helping companies demonstrate product responsibility by providing goods and services in a manner that is sustainable and safe.",
    service: "Circular economy services (EPR & E-Waste Management services)",
  },
  {
    year: "2020",
    category: "Social",
    principle: "Employee Well-being",
    desc: "befikr successfully launched its ESG/Environment/Social sector services in 2020. Today, befikr offers Electrical Safety audit services & training programs on Environment, Health & Safety (EHS), helping companies take care of employee well-being, including those in the value chains, thus offering a safe working environment.",
    service: "Electrical Safety Audit services, EHS Training services",
  },
  {
    year: "2023",
    category: "Social",
    principle: "Stakeholder Engagement",
    desc: "Through the enriching experience of working with thousands of hanymen in India, befikr successfully launched its ESG/CSR services in 2023. Today,  befikr offers Corporate Social Responsibility services, helping businesses implement community-based priorities and engagements that promote social upliftment, inclusive growth, and equitable development.",
    service: "Corporate Social Responsibility Services",
  },
  {
    year: "2023",
    category: "Environment",
    principle: "Sustainability",
    desc: "Being a market leader in the Electrical Safety Audit business, befikr successfully launched its ESG/Environment/Energy Audit services in 2023. Today,  befikr offers Comprehensive Energy Audit services & recommends Energy Efficiency measures, helping enterprises save energy, protect biodiversity & minimise environmental footprint.",
    service: "Energy Audit Services",
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

  // useEffect(() => {
  //   const container = scrollRef.current;
  //   let animationFrameId;

  //   const autoScroll = () => {
  //     if (!container) return;
  //     container.scrollLeft += 1;

  //     if (
  //       container.scrollLeft + container.clientWidth >=
  //       container.scrollWidth
  //     ) {
  //       container.scrollLeft = 0;
  //     }

  //     animationFrameId = requestAnimationFrame(autoScroll);
  //   };

  //   animationFrameId = requestAnimationFrame(autoScroll);
  //   return () => cancelAnimationFrame(animationFrameId);
  // }, []);

  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold">Our Journey</h2>
        <p className="mt-2 text-gray-400 p-4">
          {" "}
          befikr is a strategic & execution partner for environment, safety &
          social IMPACT services.
        </p>
        <p className="mt-2 text-gray-400 p-4">
          {" "}
          We work with businesses to exhibit Business Responsibility &
          Sustainability through direct impact ESG services.
        </p>
      </div>
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide"
      >
        {/* <div className="flex gap-10 px-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="min-w-[600px] max-w-[600px] bg-zinc-900 rounded-2xl p-7 border border-zinc-700 shadow-2xl text-wrap break-words"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">{item.year}</span>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${getBadgeColor(
                    item.category
                  )}`}
                >
                  ESG-{item.category}-{item.principle}
                </span>
              </div>
              <p className="text-base text-gray-300 mb-4 leading-relaxed">
                {item.desc}
              </p>
              <p className="text-base text-indigo-300 font-medium">
                <strong>Service:</strong> {item.service}
              </p>
            </motion.div>
          ))}
        </div> */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-transparent hidden md:block"></div>

          <div className="space-y-8 md:space-y-20">
            {timelineData.map((step, index) => (
              <div key={step.title} className="relative">
                <div className={`flex flex-col items-center gap-8 md:gap-8 `}>
                  {/* Content */}
                  <div className={`flex-1 `}>
                    <div className="bg-zinc-900 max-w-4xl p-6 m-4 text-wrap break-words rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        {/* <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-companyBlue font-bold mr-4">
                          {index + 1}
                        </div> */}
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl font-bold">{step.year}</span>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${getBadgeColor(
                              step.category
                            )}`}
                          >
                            ESG-{step.category}-{step.principle}
                          </span>
                        </div>
                      <p className="text-gray-300 leading-relaxed pl-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < timelineData.length - 1 && (
                  <div className="flex justify-center mt-8 md:mt-12">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 animate-bounce">
                      <ChevronDown className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center mb-10">
            <DotIcon className="h-8 w-8 opacity-25 text-blue-500" />
            <DotIcon className="h-8 w-8 opacity-50 text-blue-500" />
            <DotIcon className="h-8 w-8 opacity-75 text-blue-500" />
            <DotIcon className="h-8 w-8 opacity-100 text-blue-500" />
            <h2 className="text-4xl mt-8 font-bold">More to come...  </h2>

          </div>
        </div>
      </div>
    </section>
  );
}
