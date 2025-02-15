"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky w-full bg-[#f5f5f5] backdrop-blur-md z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
      <div className="text-2xl font-bold text-blue-600">
        <img
          src="logo.png"
          className="max-w-[90px] md:justify-start justify-items-center drop-shadow-xl"
        /></div>
      <div className="hidden md:flex space-x-8">
        <a href="#services" className="text-gray-600 hover:text-companyBlue transition-colors">
          Our Impact
        </a>
        <a href="#about" className="text-gray-600 hover:text-companyBlue transition-colors">
          Who We Are
        </a>
        <a href="#testimonials" className="text-gray-600 hover:text-companyBlue transition-colors">
          What We Do
        </a>
        <a href="#contact" className="text-gray-600 hover:text-companyBlue transition-colors">
          Contact Us
        </a>
      </div>
    </nav>
    </header>
  );
}
