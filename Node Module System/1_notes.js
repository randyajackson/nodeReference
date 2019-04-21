/* global objects
--

Global Object
console.log(); //global

setTimeout()
clearTimeout();
setInterval();
clearInterval();

global objects in JS

usually in web:
window.console.log;

in node:
window = global
global.console.log

var message = '';
is not accessable through global
console.log(global.message)
>undefined

-----------

modules
--

in browsers:

var sayHello = function(){

}

is accessible by
window.sayHello();

avoid creating variable in the global scope

every file in a node environment is a module
if you need to use a file in a different module you need to explicity call it

console.log(module):

will show info about the current js file you are working in

-----------

creating a module
--
loading a module
--
check app.js and logger.js

built in / path module
--
popular modules built into node:
File System
HTTP
OS
Path
Process
Query Strings
Stream

check app2.js

OS module
--
check app2.js

File system module
--
check app2.js

Events module
--
Event - a signal that something has happened

Class:EventEmitter
core to node

check app2.js

Extending EventEmitter
--
check app2.js
check logger.js

to raise events in a module

you need to create a class that extends EventEmitter (in logger)

class Logger extends EventEmitter{
    send an HTTP request
    log(message) {
        console.log(message);
    }
    Raise an event
    this.emit('messageLogged', {id: 1, url: 'http://' });
}
then module.exports = Logger;
---

in other module
instead of creating an object of EventEmitter
you want to use the object from the other module
const Logger = require('./logger');
cont logger = new Logger();

----
HTTP Module
--




 */