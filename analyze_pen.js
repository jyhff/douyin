const fs = require('fs');

const pen = JSON.parse(fs.readFileSync('douyin_mobile_prototype.pen', 'utf8'));
console.log('Total screens:', pen.children.length);

pen.children.forEach((c, idx) => {
  console.log('--- Screen ' + (idx + 1) + ': ' + c.name + ' ---');
  console.log('Size: ' + c.width + 'x' + c.height + ', pos: (' + c.x + ', ' + c.y + ')');
  if (c.children) {
    c.children.forEach((layer, lIdx) => {
      console.log('   [' + lIdx + '] ' + layer.name + ' (' + layer.type + ') pos: (' + layer.x + ',' + layer.y + ') size: ' + layer.width + 'x' + layer.height);
    });
  }
});
