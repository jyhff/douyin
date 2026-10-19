const fs = require('fs');
const pen = JSON.parse(fs.readFileSync('douyin_mobile_prototype.pen', 'utf8'));

function dumpBoard(index) {
  const b = pen.children[index - 1];
  if (!b) {
    console.log(`Board ${index} not found`);
    return;
  }
  console.log(`=== [Board ${index}] ${b.name} (${b.id}) ===`);
  console.log(`Size: ${b.width} x ${b.height}, fill: ${b.fill}`);
  
  function printChildren(children, depth = 1) {
    if (!children) return;
    children.forEach(c => {
      const indent = '  '.repeat(depth);
      let info = `${indent}- [${c.type}] ${c.name || c.id}`;
      if (c.content) info += ` text="${c.content}"`;
      if (c.fill) info += ` fill=${c.fill}`;
      if (c.layout) info += ` layout=${c.layout}`;
      console.log(info);
      if (c.children && c.children.length > 0) {
        printChildren(c.children, depth + 1);
      }
    });
  }
  printChildren(b.children);
}

const target = process.argv[2] ? parseInt(process.argv[2], 10) : 10;
dumpBoard(target);
