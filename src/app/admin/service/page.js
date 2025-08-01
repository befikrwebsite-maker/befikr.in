'use client'

import React, { useEffect, useState } from "react";
import AdminNavbar from "../comp/AdminNavbar";
import FloatingButton from "../comp/FloatingButton";

const ServiceCategories = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // Safely parses a double-encoded JSON string
  const safeParse = (content) => {
    try {
      return JSON.parse(JSON.parse(content));
    } catch (err) {
      console.warn("Failed to parse section content:", content, err);
      return [];
    }
  };

const handleDeleteService = (serviceId) => {
  if (!confirm("Are you sure you want to delete this service? This action cannot be undone.")) return;
  fetch("https://befikr.in/deleteservice.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ service_id: serviceId }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete service");
      return res.json();
    })
    .then((data) => {
      console.log("Service deleted successfully:", data);
      // Optionally, refresh the service list or update the UI
    })
    .catch((err) => {
      console.error("Error deleting service:", err);
    });
};

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return router.push("/admin/login");

    fetch("http://befikr.in/verify_token.php", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.user.role !== "admin") throw new Error();
        setAuth(data.user);
      })
      .catch(() => router.push("/admin/login"));
  }, []);


  useEffect(() => {
    fetch("https://befikr.in/getallservices.php")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-lg font-semibold">Loading services...</div>;
  }

  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <div className="p-6 space-y-12 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-950 min-h-screen">
        {Object.entries(data).map(([categoryName, services]) => (
          <div key={categoryName}>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2">{categoryName} Services</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.service_id} className="bg-white dark:bg-gray-900 shadow rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{service.service_name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {service.service_description || "No description provided."}
                  </p>
                  <a href={service.link} className="text-blue-500 text-sm mt-2 inline-block">View More</a>
                  <div className="pl-5 cursor-pointer" onClick={() => handleDeleteService(service.service_id)}> Delete </div>
                  {service.subservices?.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {service.subservices.map((sub) => (
                        <div key={sub.service_id} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border border-gray-300 dark:border-gray-600">
                          <h3 className="text-base font-bold text-gray-800 dark:text-white">{sub.service_name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {sub.service_description?.substring(0, 120)}...
                          </p>
                          <a href={sub.link} className="text-sm text-blue-500 mt-1 inline-block">Read More</a>

                          {sub.sections && sub.sections.length > 0 && (
                            <div className="mt-2 space-y-2">
                              {sub.sections.map((section) => (
                                <div key={section.section_id}>
                                  <h4 className="font-medium text-gray-700 dark:text-gray-200">{section.section_name}</h4>

                                  {section.design_format === "paragraph" ? (
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                      {safeParse(section.section_content).join(" ")}
                                    </p>
                                  ) : (
                                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                                      {safeParse(section.section_content).map(([title, desc], idx) => (
                                        <li key={idx}>
                                          <strong>{title}:</strong> {desc}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <FloatingButton onClick={() => window.location.href = "/admin/editor"} />
    </>
  );
};

export default ServiceCategories;
