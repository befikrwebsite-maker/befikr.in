'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import ServicesBreakdown from "./Services";
import { IndustryData } from "./dataArrays";


const cards = [
  {
    id: 1,
    position: "Electrical Safety Auditor",
    team: "Electrical and Energy Audits",
    location: ["Gujarat", "Delhi NCR", "Rajasthan"],
    desc: "The ES Auditor is responsible for conducting audits of banks, petrol pumps, and other facilities as per predefined plans. They will assess electrical and energy systems, identify inefficiencies or risks, and document their observations in a detailed report for the client/company. The role requires ensuring compliance with safety and efficiency standards while providing actionable recommendations for improvements.",
    tags: [
      "electrical",
      "safety",
      "auditor",
      "energy",
      "audits",
      "audit",
      "gujarat",
      "delhi",
      "ncr",
      "rajasthan",
    ],
    pay: "₹18,000.00 - ₹28,000.00 per month",
    jobtype: "Fulltime",
    responsibilities: [
      "Visit Commercial Buildings, Offices, Bank Branches/Offices/ATMs, Petrol Pumps to study and verify the installation across various cities in different states of India",
      "To conduct comprehensive Electrical Safety Audit of the complete Electrical installation of Commercial Buildings, Offices, Bank Branches/Offices/ATMs, Petrol Pumps",
      "Suggest Corrective measures necessary towards Electrical safety and providing budgetary estimate for rectification works required",
      "Provide comprehensive report consisting of Observations on account of electrical and fire safety. Report must highlight critical areas/concerns which need immediate attention/ rectification as per given Audit Format.",
    ],
    skills: [
      "Education: B. Tech / B.E. (Electrical) / Diploma (Electrical)",
      "Experience: Minimum 2 years / 3 years for Diploma",
      "Must Be Familiar With Basic Electrical Tools Like- Multimeter, IR Tester And Earth Tester",
      "Must Be Familiar With Electrical Equipment Like- Diesel Generator, ServoStabilizer, UPS.",
      "Should Have Working Experience In 440 Volts Supply Lines.",
      "Must Be Aware About Commercial Building Electrical Installations.",
      "Must Be Skilled In Electrical Fault Identification And Rectification.",
    ],
    benefits: ["Health insurance"],
    schedule: ["Day shift"],
    supplemental_pay: ["Performance bonus"],
    questions: [
      "Are you available for immediate joining? (Preferable)",
      "Are you having an Electrical Engineering Degree (B.E. / B. Tech) or Diploma in Electrical Engineering?",
      "How much experience do you have?"
    ],
    experience: ["Electrical engineering: 2 years (Required)"],
    travel: ["75% (Required)"],
    work_location: "In person",
    expected_start_date: "18/01/2025",
  },
  {
    id: 2,
    position: "Defective Product Auditor",
    team: "Circular Economy Services",
    location: ["Gurgaon", "North Delhi", "Faridabad", "Nashik"],
    desc: "The Auditor will visit dealer partners as per the predefined schedule and inspect all products, including defective bulbs, following the Standard Operating Procedure (SOP) to ensure quality compliance.",
    tags: [
      "defective",
      "product",
      "auditor",
      "economy",
      "services",
      "circular",
      "audit",
      "service",
      "gurgaon",
      "delhi",
      "faridabad",
      "nashik",
      "ncr",
    ],
    pay: "",
    jobtype: "Fulltime",
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [],
    experience: [],
    travel: [],
    work_location: "",
    expected_start_date: "",
  },
  {
    id: 3,
    position: "Area Supervisor",
    team: "Circular Economy Services",
    location: ["Sonipat"],
    desc: "The Defective Lamp Supervisor is responsible for planning auditor schedules, coordinating with auditors and logistics teams, and ensuring smooth execution of inspection processes.",
    tags: [
      "area",
      "supervisor",
      "economy",
      "services",
      "circular",
      "service",
      "sonipat",
    ],
    pay: "",
    jobtype: "Fulltime",
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [],
    experience: [],
    travel: [],
    work_location: "",
    expected_start_date: "",
  },
  {
    id: 4,
    position: "Field Officer",
    team: "CSR Services",
    location: ["Delhi NCR"],
    pay: "",
    tags: ["field", "officer", "csr", "services", "service", "delhi", "ncr"],
    desc: "The Field Officer will visit various slum areas to identify and recruit entrepreneurial women who can effectively sell Proya Shakti (protein powder) door-to-door. This role requires strong community engagement and networking skills to onboard suitable candidates.",
    jobtype: "Fulltime",
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [],
    experience: [],
    travel: [],
    work_location: "",
    expected_start_date: "",
  },
  {
    id: 5,
    position: "Technician",
    team: "Master Service Partnerships",
    location: ["Noida"],
    desc: "The Technician will visit customers&#39; homes for appliance installation and demonstration. Additionally, they can promote and sell compatible stands to enhance the customer’s setup and experience.",
    tags: [
      "master",
      "service",
      "partnerships",
      "spartnership",
      "technician",
      "services",
      "noida",
    ],
    pay: "",
    jobtype: "Fulltime",
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [],
    experience: [],
    travel: [],
    work_location: "",
    expected_start_date: "",
  },
  {
    id: 6,
    position: "Manager- Operations",
    team: "Electrical and Energy Audits",
    location: ["Delhi NCR"],
    desc: "We are looking for an Operations Manager with expertise in Electrical Safety and Energy Audits to oversee nationwide audits across retail, commercial, and industrial sites. The role involves managing a team of 15-20 engineers, ensuring compliance with OISD standards, and driving post-audit interventions. Responsibilities include client visits, team training, and conducting surprise secondary audits.",
    tags: [
      "electrical",
      "energy",
      "audit",
      "audits",
      "manager",
      "operations",
      "operation",
      "delhi",
      "ncr",
    ],
    pay: "",
    jobtype: "Fulltime",
    responsibilities: [],
    skills: [],
    benefits: [],
    schedule: [],
    supplemental_pay: [],
    questions: [
      "Are you having an Electrical Engineering Degree (B.E. / B. Tech) or Diploma in Electrical Engineering?",
      "How much experience do you have?"
    ],
    experience: [],
    travel: [],
    work_location: "",
    expected_start_date: "",
  },
];

export default function Footer() {

  const [jobNames, setJobNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://befikr.in/getJobs.php');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setJobNames(data.data.map(job => job.title));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


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
            <li>
                  <a
                    href="/services/environment/safety-audit/electrical-safety-audit"
                    className=" text-gray-700 hover:text-companyBlue duration-200"
                  >
                    Electrical Safety Audit Services
                  </a>
                </li>
            <li>
                  <a
                    href="/services/environment/safety-audit/energy-audit"
                    className=" text-gray-700 hover:text-companyBlue duration-200"
                  >
                    Energy Audit Services
                  </a>
                </li>
            <li>
                  <a
                    href="/services"
                    className=" text-gray-700 hover:text-companyBlue duration-200"
                  >
                    Greenhouse Gas Emission Audit Services
                  </a>
                </li>
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
            {cards.map((name, index) => (
              <a
               className="text-gray-700 hover:text-companyBlue transition-colors duration-200"
              href="/careers/jobs"
              >
            <li key={index}>{name.position}</li>
            </a>
          ))}
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
