const { log } = require('console');
const fs = require('fs');

// Write File (Sync)
fs.writeFileSync('test.txt', 'Hello, Node.js 2025!');
console.log("file create successfully")

// Read File (Sync)
const data = fs.readFileSync('test.txt',{encoding: 'utf8'});
console.log('Read Synchronously:', data);


// console.log('This logs BEFORE async read/write completes!');