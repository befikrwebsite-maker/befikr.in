// generateServicePages.js
const fs = require('fs');
const path = require('path');

// Adjust this import to a relative path if you're not using module aliases
const servicesData = require('../src/app/components/serviceData');

const basePath = 'D:/Projects/Websites/befikr/src/app/services1'; // Adjust path if needed

const generatePageCode = (slugPath) => `
'use client';
import { useEffect, useState } from 'react';
import ServiceTemplate from '@/services/components/ModifTemp';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://befikr.in/get_service_by_slug.php?slug=${slugPath}")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load service:", err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading service details...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ServiceTemplate
        placeholder={data.service_name}
        audit={data.service_name}
        sections={data.sections || []}
      />
      <Footer />
    </>
  );
}
`;

Object.entries(servicesData).forEach(([servicePath, _]) => {
  const fullDirPath = path.join(basePath, servicePath);
  const filePath = path.join(fullDirPath, 'page.js');
  const slugPath = `/services/${servicePath}`;

  try {
    fs.mkdirSync(fullDirPath, { recursive: true });
    fs.writeFileSync(filePath, generatePageCode(slugPath), 'utf8');
    console.log(`✅ Generated (live fetch): ${filePath}`);
  } catch (err) {
    console.error(`❌ Error generating ${filePath}:`, err);
  }
});