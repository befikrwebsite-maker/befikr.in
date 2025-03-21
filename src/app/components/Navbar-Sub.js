"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pageNames = {
    "/about-us": "About Us",
    "/about-us/founders/": "Founders",
  };

  const normalizePath = (path) => path.replace(/\/$/, ""); // Remove trailing slash for consistency

  return (
    <header className="sticky h-[60px] bg-[#f5f5f5] backdrop-blur-md z-40 shadow-md">
      <nav className="w-full mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex w-full justify-evenly font-generalSansRegular">
          {Object.entries(pageNames).map(([path, name]) => {
            const isActive = normalizePath(pathname) === normalizePath(path);
            return (
              <a
                key={path}
                href={path}
                className={`transition-colors ${
                  isActive ? "text-companyBlue font-bold border-b-2 border-companyBlue" : "text-black hover:text-companyBlue"
                }`}
              >
                {name}
              </a>
            );
          })}
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
            className="md:hidden absolute mt-[-2] left-0 w-full bg-[#f5f5f5] shadow-md py-4 flex flex-col items-center space-y-4 z-40"
          >
            {Object.entries(pageNames).map(([path, name]) => {
              const isActive = normalizePath(pathname) === normalizePath(path);
              return (
                <a
                  key={path}
                  href={path}
                  className={`transition-colors ${
                    isActive ? "text-companyBlue font-bold border-b-2 border-companyBlue" : "text-black hover:text-companyBlue"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
