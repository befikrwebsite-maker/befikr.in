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
        "/": "Home",
        "/what-we-do/": "What We Do",
        "/who-we-are": "Who We Are",
        "/work-with-us": "Work With Us",
        "/work-with-us/job": "Jobs",
      };

      setLink(pageNames[path] || ""); // Default to empty if not found
    }
  }, []);

  return (
    <header className="sticky w-full h-[80px] bg-[#f5f5f5] backdrop-blur-md z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
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
        <div className="hidden md:flex space-x-8 font-generalSansRegular">
          <a href="/" className="text-black hover:text-companyBlue transition-colors">Home</a>
          <a href="/what-we-do" className="text-black hover:text-companyBlue transition-colors">What We Do</a>
          <a href="/who-we-are" className="text-black hover:text-companyBlue transition-colors">Who We Are</a>
          <a href="/work-with-us" className="text-black hover:text-companyBlue transition-colors">Work With Us</a>
          <a href="/reach-us" className="text-black hover:text-companyBlue transition-colors">Reach Us</a>
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
            <a href="/what-we-do" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>What We Do</a>
            <a href="/who-we-are" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Who We Are</a>
            <a href="/work-with-us" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Work With Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
