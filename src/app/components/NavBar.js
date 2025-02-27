"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [link, setLink] = useState("Home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;

      // Mapping paths to readable names
      const pageNames = {
        "/": "",
        "/what-we-do": "What We Do",
        "/who-we-are": "Who We Are",
        "/career": "Work With Us",
        "/contact-us": "Contact Us",
        "/career/job": "Jobs"
      };

      setLink(pageNames[path] || "");
    }
  }, []);

  return (
    <header className="sticky w-full h-[80px] bg-[#f5f5f5] backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
        {/* Logo & Page Name */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              className="max-w-[120px] md:justify-start drop-shadow-xl"
            />
            <div className="w-[1px] ml-2 bg-black h-10"></div>
            <p className="text-xl font-semibold text-companyBlue">{link}</p>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
        <a href="/" className="text-black hover:text-companyBlue transition-colors">
            Home
          </a>
          <a href="/what-we-do" className="text-black hover:text-companyBlue transition-colors">
            What We Do
          </a>
          <a href="/who-we-are" className="text-black hover:text-companyBlue transition-colors">
            Who We Are
          </a>
          <a href="/career" className="text-black hover:text-companyBlue transition-colors">
            Work With Us
          </a>
          
        </div>
      </nav>
    </header>
  );
}
