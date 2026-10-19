const fs = require('fs');
const pen = JSON.parse(fs.readFileSync('douyin_mobile_prototype.pen', 'utf8'));
pen.children.forEach((c, idx) => {
  console.log(`${idx + 1}. [${c.id}] ${c.name} (w: ${c.width}, h: ${c.height})`);
});
