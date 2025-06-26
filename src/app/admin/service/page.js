import React, { useEffect, useState } from "react";

const ServiceCategories = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      {Object.entries(data).map(([categoryName, services]) => (
        <div key={categoryName}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{categoryName} Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.service_id} className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-blue-600">{service.service_name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {service.service_description || "No description provided."}
                </p>
                <a href={service.link} className="text-blue-500 text-sm mt-2 inline-block">View More</a>

                {service.subservices && service.subservices.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {service.subservices.map((sub) => (
                      <div key={sub.service_id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-300 dark:border-gray-600">
                        <h3 className="text-base font-bold text-gray-800 dark:text-white">{sub.service_name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {sub.service_description?.substring(0, 120)}...
                        </p>
                        <a href={sub.link} className="text-sm text-blue-500 mt-1 inline-block">Read More</a>

                        {sub.sections && (
                          <div className="mt-2 space-y-2">
                            {sub.sections.map((section) => (
                              <div key={section.section_id}>
                                <h4 className="font-medium text-gray-700 dark:text-gray-200">{section.section_name}</h4>
                                {section.design_format === "paragraph" ? (
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {JSON.parse(section.section_content).join(" ")}
                                  </p>
                                ) : (
                                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                                    {JSON.parse(section.section_content).map(([title, desc], idx) => (
                                      <li key={idx}><strong>{title}:</strong> {desc}</li>
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
  );
};

export default ServiceCategories;
