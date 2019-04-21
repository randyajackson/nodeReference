//calling logger module to listen for events
const Logger = require('./logger');
const logger = new Logger();


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

//if you create EventEmitter here and logger.js
//those are 2 different objects
//const EventEmitter = require('events');
//EventEmitter is a class.
//const emitter = new EventEmitter();
//have to make an object

//Register a listener
//emitter.on('messageLogged', function(){
//    console.log('Listener called');
//});

//Making a noise, produce - signalling an event has happened.
//emitter.emit('messageLogged');

//register listener before emit
//---------------------
//create an event with data like id, etc

//emitter.on('messageLogged', function(arg){ // e, eventArg
//    console.log('Listener called', arg);
//});
//with arrow function
logger.on('messageLogged', (arg) => { // e, eventArg
    console.log('Listener called', arg);
});

logger.log('message');

//often when raising an event, we want to send some data about the event.
//emitter.emit('messageLogged',{id: 1, url: 'http://'});
//copied into logger.js

// Listener called { id: 1, url: 'http://' }

//Raise: logging (data: message)







