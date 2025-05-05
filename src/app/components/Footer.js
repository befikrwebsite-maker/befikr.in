import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import ServicesBreakdown from "./Services";
import { IndustryData } from "./dataArrays";

export default function Footer() {


  return (
    <footer className="bg-white text-gray-800 py-8 border-t-2  border-companyBlue">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo & Tagline */}
          <div>
            <a href="/">
              <img
                alt="CompanyLogo"
                src="/logo.png"
                className="max-w-[100px]"
              />
            </a>
            <p className="mt-2 text-sm">
              Leave it to us and be <strong className="font-generalSansItalic">befikr</strong>
              <span className="inline-block text-companyBlue">.</span>
            </p>
          </div>

          {/* Navigation Links 1 */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/" className="hover:text-companyBlue">Home</Link></li>
              <li><Link href="/services" className="hover:text-companyBlue">Services</Link></li>
              <li><Link href="/about-us" className="hover:text-companyBlue">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-companyBlue">Careers</Link></li>
              <li><Link href="/reach-us" className="hover:text-companyBlue">Reach Us</Link></li>
            </ul>
          </div>

          {/* Navigation Links 2 */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue">Services</h3>
            <ul className="mt-2 space-y-2">
            {ServicesBreakdown?.map((category, index) =>
            category?.Services?.map((item, subIndex) =>
              Array.isArray(item?.SubServices) &&
              item.SubServices.map((subItem, subSubIndex) => (
                <li key={`${index}-${subIndex}-${subSubIndex}`}>
                  <a
                    href={subItem.link}
                    className=" text-gray-700 hover:text-companyBlue duration-200"
                  >
                    {subItem.title}
                  </a>
                </li>
              ))
            )
            )}
            </ul>
          </div>




          {/* Navigation Links 3 */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue">Industries</h3>
            <ul className="mt-2 space-y-2">
              {IndustryData?.Industries?.map((industry, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="text-gray-700 hover:text-companyBlue transition-colors duration-200"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-medium text-companyBlue">Careers</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/" className="hover:text-companyBlue">Home</Link></li>
              <li><Link href="/services" className="hover:text-companyBlue">Services</Link></li>
              <li><Link href="/about-us" className="hover:text-companyBlue">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-companyBlue">Careers</Link></li>
              <li><Link href="/reach-us" className="hover:text-companyBlue">Reach Us</Link></li>
            </ul>
          </div>

          {/* Social Media / Logos */}
          <div>
            <h3 className="text-lg font-medium text-companyBlue"></h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <img src="/extraLogos/logo-transparent-png_6.png" alt="Logo 6" className="w-32" />
              <img src="/extraLogos/logo-transparent-png_2.png" alt="Logo 4" className="w-32" />
              <img src="/extraLogos/image.png" alt="Logo 2" className="w-32" />
              <img src="/extraLogos/logo-transparent-png_1.png" alt="Logo 1" className="w-32" />
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
      ><p className="absolute right-0 text-xs underline pt-4 pr-4">Admin Login</p></a>
    </footer>
  );
}
