//require is what is different command than site js
//you load modules here, can be npm downloaded or in this case
//using the logger.js as a module.
//node assumes that it is a js file
//   ./ is the current folder that app and logger are located in

//var logger = require('./logger');

//better to store variables in constants so if logger is used somewhere else, does not override

const log = require('./logger');

//use jshint to debug js code if there are overwrites.

console.log(log);

//Info: Start process (2:43:57 PM)
//{ log: [Function: log] }
//Info: End process (2:43:57 PM)

//can now call log in app.js

//logger.log('message');
//now, only the method is being exported from logger
log('message');
//F2 to change all variable names at once


/**Info: Start process (2:45:15 PM)
{ log: [Function: log] }
message
Info: End process (2:45:15 PM) */

