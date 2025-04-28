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
      className="fixed left-0 w-full bg-white shadow-xl z-40"
      style={{
        top: "80px",
        minHeight: "calc(100vh - 200px)",
        display: "none"
      }}
      onMouseLeave={onMouseLeave}
    >
      {/* Optional Close Button for Mobile */}
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={onMouseLeave} className="text-gray-500 text-xl font-bold">
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
                        className="block text-gray-700 hover:text-companyBlue transition-colors"
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


function NavBarDropdown2({ isVisible, onMouseLeave, dropdownRef }) {
  const [activeSection, setActiveSection] = useState("Services");

  const menuData = {
    "Services": {
      "Environment": [
        "Electrical Safety Audit Services",
        "Energy Audit Services",
        "Circular Economy Services",
        "E-waste management services",
        "Reverse logistics services"
      ],
      "Social": [
        "Corporate Social Responsibility Services (CSR)",
      ],
      "Governance": [
        "Testing, Inspection & Certification Services (TIC)",
        "Defective Product Testing & Inspection Services",
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
    ],
    "Resources": [
      "Blog",
      "Case Studies",
      "Whitepapers"
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
      className="fixed left-0 w-full bg-white shadow-xl z-40"
      style={{
        top: "80px",
        minHeight: "calc(100vh - 200px)",
        display: "none"
      }}
      onMouseLeave={onMouseLeave}
    >
      {/* Optional Close Button for Mobile */}
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={onMouseLeave} className="text-gray-500 text-xl font-bold">
          ✕
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Navigation Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Explore</h3>
          <div className="flex flex-col space-y-4">
            {Object.keys(menuData).map((section) => (
              <button
                key={section}
                onMouseEnter={() => setActiveSection(section)}
                onClick={() => setActiveSection(section)}
                className={`text-left py-2 px-4 rounded-md transition-colors ${activeSection === section ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50'}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Content Column - Takes up remaining 3 columns */}
        <div className="md:col-span-3">
          {typeof menuData[activeSection] === 'object' && !Array.isArray(menuData[activeSection]) ? (
            // Services section with categories
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Organising {activeSection} for a sustainable Future for all</h3>
              <p className="text-gray-600 mb-8 max-w-2xl">
                We empower companies to comply with Environmental, Social & Governance business Goals around BRSR & ESG Framework.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.keys(menuData[activeSection]).map((category) => (
                  <div key={category} className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 border-b pb-2">{category}</h4>
                    <ul className="space-y-3">
                      {menuData[activeSection][category].map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Simple list for other sections
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{activeSection}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {menuData[activeSection].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-3 border border-gray-200 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors"
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