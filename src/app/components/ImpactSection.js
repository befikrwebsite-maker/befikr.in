import { useState } from "react";

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const impacts = [
    {
      title: "Positively Impacting Environment & Sustainability",
      desc: "Enabling Businesses to conserve energy & reduce the negative impact over environment along with creating a social sustainable impact.",
      image: "../service_img/logo-svg.svg",
    },
    {
      title: "Organising the Unorganised Business Services",
      desc: "Offering organised & dependable services to businesses thus helping them scale & sustain respective business environment.",
      image: "../service_img/logo-svg.svg",
    },
    {
      title: "Pan-India One-Stop Services Company",
      desc: "Setting up a national foot-print of business services bringing uniformity & single-point-of-contact for businesses.",
      image: "../service_img/logo-svg.svg",
    },
    {
      title: "In-House Team of Auditors, Engineers & Skilled Professionals",
      desc: "Creating a pool of qualified, skilled & professional Engineers-Handymen along with efficient Project Managers to Key Account Managers.",
      image: "../service_img/logo-svg.svg",
    },
  ];

  return (
    <div className="p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {impacts.map((impact, index) => (
          <div
            key={index}
            className={`flex items-center bg-gray-200 p-6 rounded-lg shadow-lg transition-all duration-300`}
            
          >
            {/* Image on Right */}
            <div className="w-1/3 flex items-center justify-center">
              <img src={impact.image} alt="Impact" className="w-full h-auto object-contain rounded-lg" />
            </div>

            {/* Text on Left */}
            <div className="w-2/3 flex flex-col justify-center text-lg text-black p-4">
              <h3 className="text-xl font-bold">{impact.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{impact.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
