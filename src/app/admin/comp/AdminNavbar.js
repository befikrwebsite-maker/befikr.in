"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiPlus,
  FiUserPlus,
  FiHome,
  FiMessageSquare,
  FiMenu,
  FiX,
  FiFilePlus,
} from "react-icons/fi";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: <FiHome size={18} /> },
  { label: "Add Job", path: "/admin/add", icon: <FiPlus size={18} /> },
  { label: "Testimonials", path: "/admin/testimonials", icon: <FiMessageSquare size={18} /> },
  { label: "Create User", path: "/admin/createuser", icon: <FiUserPlus size={18} /> },
  { label: "Services", path: "/admin/services", icon: <FiFilePlus size={18} /> },
];

const AdminNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    router.push(path);
    setMenuOpen(false); // Close sidebar on navigation (mobile)
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#04B2D9] tracking-wide">
             Admin Panel
          </h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            {navItems.map(({ label, path, icon }) => {
              const isActive = pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => handleNavigate(path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${isActive
                    ? "bg-[#04B2D9] text-white shadow"
                    : "bg-gray-100 text-gray-800 hover:bg-[#e0f7fc] hover:text-[#04B2D9]"
                  }`}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#04B2D9]">Admin Menu</h3>
          <button onClick={() => setMenuOpen(false)} className="text-gray-600">
            <FiX size={20} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-3">
          {navItems.map(({ label, path, icon }) => {
            const isActive = pathname === path;
            return (
              <button
                key={path}
                onClick={() => handleNavigate(path)}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium transition-all
                ${isActive
                  ? "bg-[#04B2D9] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-[#e0f7fc] hover:text-[#04B2D9]"
                }`}
              >
                {icon}
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AdminNavbar;
