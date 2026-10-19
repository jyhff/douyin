const fs = require('fs');
const pen = JSON.parse(fs.readFileSync('douyin_mobile_prototype.pen', 'utf8'));

for (let i = 1; i <= 18; i++) {
  const b = pen.children[i - 1];
  if (!b) continue;
  console.log(`\n========================================`);
  console.log(`BOARD ${i}: ${b.name} (${b.id})`);
  console.log(`Fill: ${b.fill}, W: ${b.width}, H: ${b.height}`);
  const topLevelChildren = (b.children || []).map(c => `[${c.type}] ${c.name || c.id} ${c.content ? `("${c.content}")` : ''}`).join(' | ');
  console.log(`Children: ${topLevelChildren}`);
}
