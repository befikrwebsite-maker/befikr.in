import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {

  
  return (
    <footer className="bg-[#f5f5f5] text-gray-800 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <a
              href="/"
            >
            <img 
            src="./logo.png"
            className="max-w-[90px]"
            />
            </a>
            <p className="mt-2 text-sm">
              Leave it to us and be <strong className="font-generalSansItalic">befikr</strong><span className="inline-block text-companyBlue">.</span>
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="hover:text-companyBlue">About Us</Link></li>
              <li><Link href="/services" className="hover:text-companyBlue">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-companyBlue">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-companyBlue">Careers</Link></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-companyBlue text-xl"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-companyBlue text-xl"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-companyBlue text-xl"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-companyBlue text-xl"><Instagram /></a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Befikr. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
