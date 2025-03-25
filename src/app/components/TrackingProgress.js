"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const TrackingComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [visitedServices, setVisitedServices] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Store analytics data in cookies
    const storedServices = Cookies.get("visitedServices");
    if (storedServices) {
      setVisitedServices(JSON.parse(storedServices));
    }
  }, []);

  const handleServiceClick = (service) => {
    const updatedServices = [...visitedServices, service];
    setVisitedServices(updatedServices);
    Cookies.set("visitedServices", JSON.stringify(updatedServices), { expires: 7 });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 right-0 left-0 z-50 w-full bg-transparent h-1">
        <span
          className="bg-companyBlue h-full block transition-all duration-200"
          style={{ width: `${scrollPercentage}%` }}
        ></span>
      </div>
      
      {/* Retargeting Message */}
      {visitedServices.length > 0 && (
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-md shadow-lg">
          <p>Interested in our {visitedServices[visitedServices.length - 1]} service? Let’s talk!</p>
        </div>
      )}
    </>
  );
};

export default TrackingComponent;
