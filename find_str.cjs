const fs = require('fs');
const term = process.argv[2] || 'standalone-settings';
const file = process.argv[3] || 'main.js';
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes(term)) {
    console.log(`${idx + 1}: ${l.trim()}`);
  }
});
