const helmet = require('helmet');
const morgan = require('morgan');

const config = require('config');

const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

const express = require('express');
const Joi = require('joi');
const logger = require('./logger');

const courses = require('./routes/courses');
//module for courses.js where course commands are located

//create express object which is by convention named app
const app = express();

//--------------------------------------express loads the pug engine without requiring it
app.set('view engine', 'pug');
app.set('views', './config/views'); //put all your paths and templates in views
//res.render('index', {title: 'My express app', message: 'hello'});

//using debugger
//set DEBUG=app:startup
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

//db work...

dbDebugger('Connected to database');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//urlencoded parses incoming requests with url encoded payloads
//key=value&key=value
//parses url.body
//extended:  true makes it so that we can pass url encoded arrays

app.use(express.static('public'));
//static serves static files
//css, images, etc
// http://localhost:5000/readme.txt shows the readme file

app.use(helmet());



app.use(morgan('tiny'));
//morgan logs all requests
//can configure it to keep in a file


//when we call express.json we are calling middleware
//and when we call app.use we are using the middleware in the app pipeline
//------------------------------------------------------------------------------------------------------------
//creating middleware function
app.use(logger.log);

app.use(logger.auth);

//the middleware functions are called in sequence


//------------------------------------------------------------------------------------------------------------

app.use('/api/courses', courses);
//********************************************************************************************************* */
// for any routes that start with /api/courses use the courses router


//CONFIGURATION
console.log('Application name: ' + config.get('name'));
console.log('Application name: ' + config.get('mail.host'));
/*
app.get()
app.post()
app.put()
app.delete()
the crud functions are all found in express
*/

app.get('/', (req, res) =>{
    //res.send('Hello World!!');
    res.render('index', {title: 'My express app', message: 'hello'}); // using the template
});

//    / is the path
/*
(req, res) =>{
    res.send('Hello World');
});
the route handler
*/

//app.listen(3000, () => console.log("Listening on port 3000"));
//in production environment, we cannot expect 3000 to be available
//PORT is an environment variable
//in cmd:
//set PORT = 5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



//-----------------------------------------------
//GETTING COURSES






