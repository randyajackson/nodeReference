
var url = 'http://mylogger.io/log';
//send http request (get/post) to this url

function log(message){
    //send an HTTP request
    console.log(message);
}

//url and log are both scoped to logger.js
//private
//but we want to use them in app.js

//export the log object
//module.exports.log = log;
//we dont need to export an object, just a single method
module.exports = log;
//export the url variable
//module.exports.url = url;
//to export as a different name
//module.exports.endPoint = url;

//f8 to start running in node, f9 to stop

//dvd player with buttons
//the buttons are like the exports
//we dont need to export url var, so we comment it out.



