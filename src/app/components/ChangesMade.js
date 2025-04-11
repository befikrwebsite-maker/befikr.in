'use client';

import { useState, useEffect } from 'react';

export default function ChangesMade() {
  const [showConsent, setShowConsent] = useState(false);

  const changes = [
    "Added more info in the careers section",
    "Improved performance and loading times",
    "Applied filters in the jobs section can now be seen and removed on a single click",
    "Changed the font of navbar to something soft and readable",
    "Updated the way services are mapped",
    "Optimized the video with a preload poster for better ranking on Google",
    "Created a different rough version for how the design of services section could look which can be seen on the reach us page of testing website",
  ];

  useEffect(() => {
    if (window.location.pathname === "/") {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="z-[99999] fixed left-4 right-4 md:right-auto md:w-[400px] bottom-6 bg-gray-900 bg-opacity-95 text-white p-5 rounded-xl shadow-2xl">
      <p className="text-base font-semibold mb-2">🔔 Changes Made in This Update</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 mb-4">
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
      <button
        onClick={acceptCookies}
        className="bg-companyBlue hover:bg-companyBlue/90 transition-all duration-200 text-white px-4 py-2 rounded-lg w-full text-sm font-medium"
      >
        Got it!
      </button>
    </div>
  );
}
