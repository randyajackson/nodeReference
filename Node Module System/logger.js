//var x=;
/**(function (exports, require, module, __filename, __dirname) { var x=;
 * var url = ...
 * ...}
 * if you run var x=;
 * you can see that modules are wrapped in a default function
 * require is local to each module
 * Module wrapper function
 * this is why exports.log = log; works but exports = log; does not work
 */
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';
//send http request (get/post) to this url

//----Now sending an event over to app2.js
const EventEmitter = require('events');
//EventEmitter is a class.

//---------------------------------------

class Logger extends EventEmitter{
    log(message){
        //send an HTTP request
        console.log(message);
    
        //we want to raise an event here and in app2.js we will listen for it.
        this.emit('messageLogged',{id: 1, url: 'http://'});
    }
}
//when fuction is in a class, it is a method




//url and log are both scoped to logger.js
//private
//but we want to use them in app.js

//export the log object
//module.exports.log = log;
//we dont need to export an object, just a single method
//module.exports = log;
module.exports = Logger;
//export the url variable
//module.exports.url = url;
//to export as a different name
//module.exports.endPoint = url;

//f8 to start running in node, f9 to stop

//dvd player with buttons
//the buttons are like the exports
//we dont need to export url var, so we comment it out.



