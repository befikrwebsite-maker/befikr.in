"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

function NavbarDropdown({ isVisible, onMouseLeave, dropdownRef }) {
  const [onHover, setOnHover] = useState(0);

  const sections = [
    { title: "Company", items: ["About Us", "Careers", "Contact Us"], link: "/about" },
    { title: "Services", items: ["Web Development", "Mobile Applications", "UI/UX Design", "Digital Marketing"], link: "/services/web-development" },
    { title: "Industries", items: ["Fintech", "Healthcare", "E-Commerce", "Education"], link: "/industries/fintech" },
    { title: "Resources", items: ["Blog", "Case Studies", "Whitepapers"], link: "/blog" },
    { title: "Featured", items: ["Latest Case Study"], link: "/case-studies/company-x" },
  ];

  useEffect(() => {
    if (isVisible) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.3,
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        display: "none",
        duration: 0.3,
      });
    }
  }, [isVisible, dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className="fixed left-0 w-full bg-companyBlue shadow-xl z-40"
      style={{
        top: "80px",
        minHeight: "calc(100vh - 200px)",
        display: "none"
      }}
      onMouseLeave={onMouseLeave}
    >
      {/* Optional Close Button for Mobile */}
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={onMouseLeave} className="text-white text-xl font-bold">
          ✕
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-4 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-companyBlue border-b pb-2">Services</h3>
          <div role="menu" className="flex flex-col space-y-3">
            {sections.map((section, index) => (
              <div
                className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                key={index}
              >
                <button
                  role="menuitem"
                  onMouseEnter={() => setOnHover(index)}
                  onClick={() => window.location.href = section.link}
                  className="w-full text-left hover:text-companyBlue"
                >
                  {section.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Detail View */}
        {onHover !== null && (
          <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-black border-b pb-2">{sections[onHover].title}</h3>
            <ul className="space-y-3">
              {sections[onHover].items.map((item, index) => (
                <li key={index}>
                  <a
                    href={`${sections[onHover].link}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-base hover:text-companyBlue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function NavBarDropdown1({ isVisible, onMouseLeave, dropdownRef }) {
  const [onHover, setOnHover] = useState(0);

  const sections = [
    {
      title: "Services",
      categories: [
        {
          heading: "Development",
          items: ["Web Development", "Mobile Applications", "Custom Software"],
          linkBase: "/services/development"
        },
        {
          heading: "Design",
          items: ["UI/UX Design", "Brand Identity", "Prototyping"],
          linkBase: "/services/design"
        },
        {
          heading: "Marketing",
          items: ["Digital Marketing", "SEO", "Social Media Management"],
          linkBase: "/services/marketing"
        }
      ]
    },
    {
      title: "Industries",
      categories: [
        {
          heading: "Focus Areas",
          items: ["Fintech", "Healthcare", "E-Commerce", "Education"],
          linkBase: "/industries"
        }
      ]
    },
    {
      title: "Company",
      categories: [
        {
          heading: "About",
          items: ["About Us", "Careers", "Contact Us"],
          linkBase: "/about"
        }
      ]
    },
    {
      title: "Resources",
      categories: [
        {
          heading: "Knowledge Center",
          items: ["Blog", "Case Studies", "Whitepapers"],
          linkBase: "/resources"
        }
      ]
    }
  ];

  useEffect(() => {
    if (isVisible) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.3,
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        display: "none",
        duration: 0.3,
      });
    }
  }, [isVisible, dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className="fixed left-0 w-full bg-white shadow-xl z-40"
      style={{
        top: "80px",
        minHeight: "calc(100vh - 200px)",
        display: "none"
      }}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto py-8 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-xl font-bold text-companyBlue border-b pb-2">{section.title}</h3>
            {section.categories.map((category, catIndex) => (
              <div key={catIndex}>
                <h4 className="text-base font-semibold text-black mb-2">{category.heading}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={`${category.linkBase}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-white hover:text-companyBlue transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import ServicesBreakdown from "./Services";

function NavBarDropdown2({ isVisible, onMouseLeave, dropdownRef }) {
  const [activeSection, setActiveSection] = useState("Services");
  

  const menuData = {
    "Services": {
      "Environment": [
        "Electrical Safety Audit Services",
        "Energy Audit Services",
        // "Greenhouse Gas Emission Audit Services",
        "E-Waste Management",
        "Reverse Logistics Services"
      ],
      "Social": [
        "Corporate Social Responsibility Services",
      ],
      "Governance": [
        "Testing, Inspection & Installation Services",
        "Defective Audit Services",
        // "Safety Mat Installation Service"
      ]
    },
    "Industries": [
      "Oil & Gas",
      "Banking",
      "Consumer Products",
      "Food & Quick Service Restaurants (QSR)",
      "Infotech",
      "Real Estate & Infrastructure",
      "Others"
    ]
  };

  useEffect(() => {
    if (isVisible) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.3,
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        display: "none",
        duration: 0.3,
      });
    }
  }, [isVisible, dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className="fixed left-0 w-full pt-10 text-white bg-emerald-600 shadow-xl z-40 transition-all duration-300 ease-in-out"
      style={{
        top: "80px",
        minHeight: "calc(100vh - 200px)",
        display: "none", // controlled elsewhere
      }}
      onMouseLeave={onMouseLeave}
    >
      {/* Close button for Mobile */}
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={onMouseLeave} className="text-white text-4xl font-bold">
          ✕
        </button>
      </div>
  
      <div className="max-w-6xl mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Explore Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-teal mb-4">Explore</h3>
          <div className="flex flex-col space-y-4">
            {Object.keys(menuData).map((section) => (
              <button
                key={section}
                onMouseEnter={() => setActiveSection(section)}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left text-xl font-bold py-3 px-4 rounded-md  transition-colors ${
                  activeSection === section
                    ? " text-black border border-black font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
  
        {/* Divider for mobile */}
        <div className="border-t border-gray-200 my-6 md:hidden"></div>
  
        {/* Content Section */}
        <div className="md:col-span-3">
          {typeof menuData[activeSection] === "object" && !Array.isArray(menuData[activeSection]) ? (
            // Services with categories
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Organizing ESG Services for a sustainable Future for all.
              </h3>
              <p className="text-white text-2xl mb-6 max-w-2xl">
                We empower companies to comply with Environmental, Social & Governance business Goals around BRSR & ESG Framework.
              </p>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(menuData[activeSection]).map(([category, serviceNames]) => (
  <div key={category} className="space-y-3">
    <h4 className="text-xl   font-semibold text-white border-b pb-2">{category}</h4>
    <ul className="space-y-2">
      {Array.isArray(serviceNames) &&
        serviceNames.map((serviceName) => {
          let matchedLink = null;

          // 1. Try matching in top-level Services
          for (const section of ServicesBreakdown) {
            const match = section.Services.find(service => service.Service === serviceName);
            if (match) {
              matchedLink = match.link;
              break;
            }
          }

          // 2. If not found, try matching in SubServices
          if (!matchedLink) {
            outer: for (const section of ServicesBreakdown) {
              for (const service of section.Services) {
                if (service.SubServices) {
                  for (const subService of service.SubServices) {
                    if (subService.title === serviceName) {
                      matchedLink = subService.link;
                      break outer;
                    }
                  }
                }
              }
            }
          }

          if (!matchedLink) return null; // Skip if no match

          return (
<li key={serviceName}>
    <a
      href={matchedLink}
      className="block text-white text-lg hover:text-black transition-colors"
    >
      {serviceName}
    </a>

    {/* Hardcoded subservice for "Electrical Safety Audit Services" */}
    {serviceName === "Electrical Safety Audit Services" && (
      <ul className="ml-4 mt-2 space-y-1 border-l border-gray-400 pl-4">
        <li>
          <a
            href="/services/"
            className="block text-white text-sm hover:text-black transition-colors"
          >
            Safety Mat Installation Service
          </a>
        </li>
      </ul>
    )}
  </li>
          );
        })}
    </ul>
  </div>
))}


              </div>
            </div>
          ) : (
            // Simple links list
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{activeSection}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {menuData[activeSection]?.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 border border-gray-200 rounded-md  hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
  
export default NavBarDropdown2;