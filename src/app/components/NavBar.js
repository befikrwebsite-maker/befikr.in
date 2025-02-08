"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" bg-white text-black px-4 py-5 font-generalSansMedium">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        <img
          src="/logo.png"
          alt="Logo"
          className="max-w-[100px] md:justify-start justify-items-center" 
        />

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-20"
        >
          {isOpen ? (
            <X size={28} className="text-black" />
          ) : (
            <Menu size={28} className="text-black" />
          )}
        </button>

        <ul className="hidden md:flex space-x-8">
          <li className="transition-color duration-500 hover:text-blue-300">
            <a href="#">Home</a>
          </li>
          <li className="transition-color duration-500 hover:text-blue-300">
            <a href="#">Who We Are</a>
          </li>
          <li className="transition-color duration-500 hover:text-blue-300">
            <a href="#">What We Do</a>
          </li>
          <li className="transition-color duration-500 hover:text-blue-300">
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <ul
          className={`absolute top-0 left-0 w-full bg-white text-black transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center md:hidden pt-16 space-y-4 z-10`}
        >
          <li className="hover:text-blue-400">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#">About</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
