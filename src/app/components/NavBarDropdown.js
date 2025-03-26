"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function NavbarDropdown({ isVisible, onMouseLeave, dropdownRef }) {
  useEffect(() => {
    if (isVisible) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.3,
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        display: "none",
        duration: 0.3,
      });
    }
  }, [isVisible, dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className="fixed left-0 w-full bg-white shadow-xl z-40"
      style={{ 
        top: '80px', // Height of your navbar
        minHeight: 'calc(100vh - 200px)',
        display: 'none' // Start hidden
      }}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto py-8 px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Your dropdown content here */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-companyBlue border-b pb-2">Services</h3>
          <ul className="space-y-3">
            <li><a href="/services/web-development" className="hover:text-companyBlue transition-colors">Web Development</a></li>
            <li><a href="/services/mobile-apps" className="hover:text-companyBlue transition-colors">Mobile Applications</a></li>
            <li><a href="/services/ui-ux" className="hover:text-companyBlue transition-colors">UI/UX Design</a></li>
            <li><a href="/services/digital-marketing" className="hover:text-companyBlue transition-colors">Digital Marketing</a></li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-companyBlue border-b pb-2">Industries</h3>
          <ul className="space-y-3">
            <li><a href="/industries/fintech" className="hover:text-companyBlue transition-colors">Fintech</a></li>
            <li><a href="/industries/healthcare" className="hover:text-companyBlue transition-colors">Healthcare</a></li>
            <li><a href="/industries/ecommerce" className="hover:text-companyBlue transition-colors">E-Commerce</a></li>
            <li><a href="/industries/education" className="hover:text-companyBlue transition-colors">Education</a></li>
          </ul>
        </div>
{/*         
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-companyBlue border-b pb-2">Resources</h3>
          <ul className="space-y-3">
            <li><a href="/blog" className="hover:text-companyBlue transition-colors">Blog</a></li>
            <li><a href="/case-studies" className="hover:text-companyBlue transition-colors">Case Studies</a></li>
            <li><a href="/whitepapers" className="hover:text-companyBlue transition-colors">Whitepapers</a></li>
          </ul>
        </div>
        
        <div className="space-y-4 col-span-2 md:col-span-1">
          <h3 className="text-2xl font-bold text-companyBlue border-b pb-2">Featured</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Latest Case Study</h4>
            <p className="text-sm mb-3">How we helped Company X increase conversions by 150%</p>
            <a href="/case-studies/company-x" className="text-companyBlue text-sm font-medium hover:underline">Read More →</a>
          </div>
        </div> */}
      </div>
    </div>
  );
}