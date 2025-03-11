const fs = require("fs");
const path = require("path");

const BASE_URL = "https://befikr.com"; // Replace with your actual domain

const pages = [
  "", // Homepage
  "reach-us",
  "what-we-do",
  "who-we-are",
  "work-with-us",
  "work-with-us/job",
  "who-we-are/founders",
  // Add more pages as needed
];

// Generate XML sitemap structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

// Write sitemap.xml to the public folder
fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);

console.log("✅ Sitemap generated successfully!");
