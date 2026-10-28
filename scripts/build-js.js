const fs = require('fs');
const path = require('path');

const src  = path.join(__dirname, '..', 'src', 'js', 'main.js');
const dest = path.join(__dirname, '..', 'dist', 'assets', 'main.min.js');

fs.mkdirSync(path.dirname(dest), { recursive: true });

let code = fs.readFileSync(src, 'utf8');

// Strip comments & collapse whitespace (basic minification without extra deps)
code = code
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/\n{3,}/g, '\n')
  .replace(/^\s+$/gm, '')
  .trim();

fs.writeFileSync(dest, code, 'utf8');
console.log(`JS → ${dest} (${(code.length / 1024).toFixed(1)} KB)`);
