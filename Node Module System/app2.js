const path = require('path');
//node assumes this is a built in module.
//if not, it looks for a location

var pathObj = path.parse(__filename);

console.log(pathObj);
/**
 * { root: 'c:\\',
  dir:
   'c:\\Users\\dell\\Desktop\\nodeReference\\node_reference\\Node Module System',
  base: 'node_de55e298bedb9.tmp',
  ext: '.tmp',
  name: 'node_de55e298bedb9' }
 */

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//Template string
//ES6 / ES2015 : ECMAScript 6
//uses ` and ${variableName}

console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);

//before node, could not get this kind of info

//file system uses syncronous an ascynchronous methods
//better to use asynchronous
const fs = require('fs');

//calling readdir synchronous
//const files = fs.readdirSync('./');
//console.log(files);

//calling readdir asynchronous
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Result', files);
});


