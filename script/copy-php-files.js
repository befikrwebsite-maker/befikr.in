const fs = require('fs');
const path = require('path');

const sourceDir = __dirname; // Root directory
const outDir = path.join(__dirname, 'out'); // Next.js export folder

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.php')) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(outDir, file));
    console.log(`Copied ${file} to ${outDir}`);
  }
});
