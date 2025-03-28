'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="z-[99999] fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
      <p className="text-sm">We use cookies to improve your experience. By continuing, you agree to our cookie policy.</p>
      <button onClick={acceptCookies} className="bg-blue-500 border border-companyBlue hover:border-white transition-all duration-200 text-white px-4 py-2 rounded-lg ml-4">
        Accept
      </button>
    </div>
  );
}
