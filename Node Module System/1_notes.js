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




 */