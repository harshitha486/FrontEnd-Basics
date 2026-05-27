const path = require('path');

console.log(path.sep);

const pathfile = path.join('/content','folder','index.txt');
console.log(pathfile);

const base = path.basename(pathfile);
console.log(base);

const absolute = path.resolve(__dirname, 'content','folder', 'index.txt');
console.log(absolute);