//when we call express.json we are calling middleware
//and when we call app.use we are using the middleware in the app pipeline
//------------------------------------------------------------------------------------------------------------
//creating middleware function

exports.log = function(req, res, next) {
    console.log('logging');
    next(); // next is used for passing function to next step in the pipeline
};

exports.auth = function(req, res, next) {
    console.log('authenticating');
    next(); // above is executed and next sends to this function
};

//the middleware functions are called in sequence

//------------------------------------------------------------------------------------------------------------