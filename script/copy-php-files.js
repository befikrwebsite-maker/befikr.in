const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..'); // Move up to root directory
const outDir = path.join(sourceDir, 'out'); // 'out' folder in root directory

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.php')) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(outDir, file));
    console.log(`Copied ${file} to ${outDir}`);
  }
});
