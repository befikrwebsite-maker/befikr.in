"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky w-full h-[80px] bg-[#f5f5f5] backdrop-blur-md z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
      <div className="text-2xl font-bold text-blue-600">
        <a 
          href="/"
        >
        <img
          src="/logo.png"
          className="max-w-[120px] md:justify-start justify-items-center drop-shadow-xl"
        />
        </a></div>
        <p></p>
      <div className="hidden md:flex space-x-8">
        <a href="/what-we-do" className="text-gray-600 hover:text-companyBlue transition-colors">
          What We Do
        </a>
        <a href="/who-we-are" className="text-gray-600 hover:text-companyBlue transition-colors">
          Who We Are
        </a>
        <a href="/career" className="text-gray-600 hover:text-companyBlue transition-colors">
          Work With Us
        </a>
        <a href="/contact-us" className="text-gray-600 hover:text-companyBlue transition-colors">
          Contact Us
        </a>
      </div>
    </nav>
    </header>
  );
}
