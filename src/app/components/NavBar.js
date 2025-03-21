"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [link, setLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let path = window.location.pathname;

      // Remove .html for Next.js static export compatibility

      const pageNames = {
        "/": "home",
        "/services/": "services",
        "/about-us/": "about us",
        "/about-us/founders/": "founders",
        "/careers/": "careers",
        "/careers/jobs/": "jobs",
        "/reach-us": "reach Us"
      };

      setLink(pageNames[path] || ""); // Default to empty if not found
    }
  }, []);

  return (
    <header className="sticky  h-[80px] bg-white backdrop-blur-md z-50 shadow-md">
      <nav className="w-full mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
        {/* Logo & Page Name */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              className="max-w-[100px] md:justify-start drop-shadow-xl"
              alt="Company Logo"
            />
            <div className="w-[1px] ml-2 bg-black h-10"></div>
            <p className="text-md font-generalSansRegular">{link}</p>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 font-generalSansRegular items-center">
          <a href="/" className="text-black hover:text-companyBlue transition-colors">Home</a>
          <a href="/services" className="text-black hover:text-companyBlue transition-colors">Services</a>
          <a href="/about-us" className="text-black hover:text-companyBlue transition-colors">About Us</a>
          <a href="/careers" className="text-black hover:text-companyBlue transition-colors">Careers</a>
          <a href="/reach-us" className="text-black hover:text-companyBlue transition-colors flex items-center">
            <img src="/extraLogos/rev.png" className="h-12 w-auto" />
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#f5f5f5] shadow-md py-4 flex flex-col items-center space-y-4 z-50"
          >
            <a href="/" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/services" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="/about-us" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="/careers" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Careers</a>
            <a href="/reach-us" className="text-black hover:text-companyBlue transition-colors flex items-center" onClick={() => setIsOpen(false)}>
              <img src="/extraLogos/rev.png" className="h-8 w-auto" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
