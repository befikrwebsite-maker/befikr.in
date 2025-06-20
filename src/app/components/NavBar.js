"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, Router, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarDropdown from "./NavBarDropdown";
import { useLenis } from "./hook/LenisContext";

export default function Navbar() {
  const [link, setLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [direction, setDirection] = useState("up");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const textRef = useRef(null);
  const dropdownRef = useRef(null);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(textRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    gsap.set(dropdownRef.current, { opacity: 0, y: -10, display: "none" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setDirection("down");
      } else {
        setDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(".navbar", {
      y: direction === "down" ? "-100%" : "0%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [direction]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let path = window.location.pathname;

      const pageNames = {
        "/": "home",
        "/services/": "what we do",
        "/about-us/": "who we are",
        "/about-us/founders/": "founders",
        "/careers/": "work with us",
        "/careers/jobs/": "jobs",
        "/reach-us/": "reach Us",
      };

      setLink(pageNames[path] || "");
      setActivePath(path);
    }
  }, []);

  const handleMouseEnter = () => {
    gsap.to(dropdownRef.current, { opacity: 1, y: 0, display: "block", duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(dropdownRef.current, { opacity: 0, y: -10, display: "none", duration: 0.3 });
  };

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

  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    dropdownOpen ? lenis.stop() : lenis.start();
  }, [dropdownOpen]);

  return (
    <>
      <header
        ref={textRef}
        className="fixed w-full navbar mb-20 h-[80px] bg-white backdrop-blur-md z-50 shadow-md"
        style={{ top: 0, left: 0 }}
      >
        <div className="fixed top-0 right-0 left-0 z-[9999] w-full bg-transparent h-1">
          <span
            className="bg-companyBlue h-full block transition-all duration-200"
            style={{ width: `${scrollPercentage}%` }}
          ></span>
        </div>
        <nav className="w-full mx-auto px-6 flex justify-between h-full tracking-wide items-center rounded-xl">
          {/* Logo & Page Name */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                className="max-w-[100px] pb-4 pt-4 md:justify-start drop-shadow-xl"
                alt="Company Logo"
              />
              <div className="w-[1px] ml-2 bg-black h-10"></div>
              <p className="text-md font-generalSansRegular">{link}</p>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex text-xl h-full space-x-14 font-WorkSans font-thin items-center">

            <a href="/" className={`flex items-center gap-2 transition-colors duration-300 ${activePath === "/" ? "text-companyBlue font-bold" : "text-gray-500 hover:text-companyBlue"}`}>
              Home
            </a>

            <div className="relative"
              onMouseEnter={() => setDropdownOpen(true)}>
              <a href="/services" className={`z-40 flex items-center gap-2 transition-colors duration-300 ${activePath === "/services/" ? "text-companyBlue font-bold" : "text-gray-500 hover:text-companyBlue"}`}>
                Services
              </a>
            </div>


            <a href="/about-us" className={`flex items-center gap-2 transition-colors duration-300 ${activePath === "/about-us/" ? "text-companyBlue font-bold" : "text-gray-500 hover:text-companyBlue"}`}>
              About Us
            </a>

            <a href="/careers" className={`flex items-center gap-2 transition-colors duration-300 ${activePath === "/careers/" ? "text-companyBlue font-bold" : "text-gray-500 hover:text-companyBlue"}`}>
              Careers
            </a>

            <a href="/reach-us" className={`flex items-center gap-2 transition-colors duration-300 ${activePath === "/reach-us/" ? "text-companyBlue font-bold" : "text-gray-500 hover:text-companyBlue"}`}>
              Reach Us
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden font-generalSansRegular absolute top-20 left-0 w-full bg-[#f5f5f5] shadow-md py-4 flex flex-col items-center space-y-4 z-50"
            >
              <a href="/" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Home</a>
              <a href="/services" className="text-black hover:text-companyBlue transition-colors" >Services</a>
              <a href="/about-us" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
              <a href="/careers" className="text-black hover:text-companyBlue transition-colors" onClick={() => setIsOpen(false)}>Careers</a>
              <a href="/reach-us" className="text-black hover:text-companyBlue transition-colors flex items-center" onClick={() => setIsOpen(false)}>Reach Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <NavbarDropdown
        isVisible={dropdownOpen}
        onMouseLeave={() => setDropdownOpen(false)}
        dropdownRef={dropdownRef}
      />
    </>
  );
}
