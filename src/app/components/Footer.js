import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {

  
  return (
    <footer className="bg-[#f5f5f5] text-gray-800 py-8 border-t-2  border-companyBlue">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <a
              href="/"
            >
            <img 
            alt="CompanyLogo"
            src="/logo.png"
            className="max-w-[100px]"
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
              <li><Link href="/" className="hover:text-companyBlue">Home</Link></li>
              <li><Link href="/what-we-do" className="hover:text-companyBlue">Services</Link></li>
              <li><Link href="/who-we-are" className="hover:text-companyBlue">About Us</Link></li>
              <li><Link href="/work-with-us" className="hover:text-companyBlue">Careers</Link></li>
              <li><Link href="/reach-us" className="hover:text-companyBlue">Reach Us</Link></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue"></h3>
            <div className="grid grid-cols-2 gap-2">
              <img
                src="/extraLogos/logo-transparent-png_6.png"
                className="w-32"
              />
               <img
                src="/extraLogos/logo-transparent-png_4.png"
                className="w-32"
              />
              <img
                src="/extraLogos/logo-transparent-png.png"
                className="w-32"
              />
              <img
                src="/extraLogos/logo-transparent-png_1.png"
                className="w-32"
              />
             
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Befikr. All Rights Reserved.</p>
        </div>
      </div>
          <a
            href="https://admin.befikr.in" target="_blank"
          ><p className="absolute right-0 text-xs underline p-4">Admin Login</p></a>
    </footer>
  );
}
