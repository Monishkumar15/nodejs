console.log("Hello nodejs");

console.log(global);

const { log } = require('console');
const os = require('os');
const path = require('path')

const math = require('./math')

console.log(__dirname);
console.log(__filename);
console.log("-----");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename))

console.log(math.add(2,3))
console.log(math.sub(2,3))
console.log(math.mul(2,3))
console.log(math.div(2,3))




 




