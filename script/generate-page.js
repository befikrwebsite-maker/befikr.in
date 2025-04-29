// generateServicePages.js
const fs = require('fs');
const path = require('path');

// Adjust this import to a relative path if you're not using module aliases
const servicesData = require('../src/app/components/serviceData');

const basePath = 'D:/Projects/Websites/befikr/src/app/services'; // Adjust path if needed

const generatePageCode = (data) => `
'use client';
import ServiceTemplate from '@/services/components/ImageHolder';
import Navbar from "@/components/NavBar.js"
import Footer from "@/components/Footer.js"

export default function Page() {
  const props = ${JSON.stringify(data, null, 2)};
  return (
    <>
      <Navbar />
      <ServiceTemplate {...props} />
      <Footer />
    </>
  );
}
`;

Object.entries(servicesData).forEach(([servicePath, data]) => {
    const fullDirPath = path.join(basePath, servicePath);
    const filePath = path.join(fullDirPath, 'page.js');

    try {
        fs.mkdirSync(fullDirPath, { recursive: true });

        // Always overwrite the file
        fs.writeFileSync(filePath, generatePageCode(data), 'utf8');
        console.log(`✅ Generated (overwritten): ${filePath}`);
    } catch (err) {
        console.error(`❌ Error generating ${filePath}:`, err);
    }
});