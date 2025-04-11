'use client';

import { useEffect, useState } from 'react';
import imageList from './imageList'; // Make sure this path matches your project

export default function CompanyLogoGrid() {
  const [logos, setLogos] = useState(() =>
    Array.from({ length: 12 }, () => getRandomLogo())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prev) =>
        prev.map((logo, index) =>
          Math.random() < 0.3 ? getRandomLogo(logo) : logo
        )
      );
    }, 5000); // update some logos every 5s

    return () => clearInterval(interval);
  }, []);

  function getRandomLogo(exclude) {
    const available = imageList.filter((logo) => logo.url !== exclude?.url);
    return available[Math.floor(Math.random() * available.length)];
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-companyBlue">
        Companies We Work With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <FadeLogo key={index} src={logo.url} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

function FadeLogo({ src, alt }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 700); // brief invisible transition of duration 700ms
    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <div className="w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-md p-4">
      <img
        src={src}
        alt={alt}
        className={`max-h-20 max-w-full object-contain transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
