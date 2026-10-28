const fs   = require('fs');
const path = require('path');

const src  = path.join(__dirname, '..', 'index.html');
const dest = path.join(__dirname, '..', 'dist', 'index.html');

fs.mkdirSync(path.dirname(dest), { recursive: true });

let html = fs.readFileSync(src, 'utf8');

html = html
  .replace('href="dist/assets/styles.min.css"', 'href="assets/styles.min.css"')
  .replace('src="dist/assets/main.min.js"', 'src="assets/main.min.js"');

fs.writeFileSync(dest, html, 'utf8');
console.log(`HTML → ${dest}`);

// Also synchronize assets/images to dist/assets/images
const imagesSrc = path.join(__dirname, '..', 'assets', 'images');
const imagesDest = path.join(__dirname, '..', 'dist', 'assets', 'images');

if (fs.existsSync(imagesSrc)) {
  fs.mkdirSync(imagesDest, { recursive: true });
  fs.cpSync(imagesSrc, imagesDest, { recursive: true });
  console.log(`Synced images → ${imagesDest}`);
}
