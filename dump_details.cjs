const fs = require('fs');
const pen = JSON.parse(fs.readFileSync('douyin_mobile_prototype.pen', 'utf8'));

function dumpDetails(boardIdOrName) {
  const b = pen.children.find(c => c.id === boardIdOrName || c.name.includes(boardIdOrName));
  if (!b) return console.log('Not found');
  console.log(JSON.stringify(b, null, 2));
}

const target = process.argv[2] || '10';
dumpDetails(target);
