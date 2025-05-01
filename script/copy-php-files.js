const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..'); 
const outDir = path.join(sourceDir, 'out/backend'); 

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.php')) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(outDir, file));
    console.log(`Copied ${file} to ${outDir}`);
  }
});
