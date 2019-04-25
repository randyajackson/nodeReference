/**
 * In this section:
 * middleware
 * configuration
 * debugging
 * template engines
 * 
 * middleware function = function that takes a request object and either returns a response
 * to the client or passes control to another middleware function
 * 
 * app.get('/', (req, res) => { res.send('test'); }); middleware function
 * takes req object, returns res object
 * 
 * app.use(express.json()); middleware function, app.use creates req.body
 * 
 * request processing pipeline
 * 
 * request > json() > route() > response
 * 
 * express is a lot of middleware functions
 * 
 * app.use is used to call a middleware function in a request processing pipeline
 * 
 * logger.js for creating middleware function
 * 
 * 
 * in more complex program
 * need to know what environment program is running on
 * some features for development evironment, some for production
 * 
 * process.env.NODE_ENV // undefinded if not set
 * 
 * app.get('env') //returns development by default
 * 
 * if(app.get('env') === 'development')
 * {
 * app.use(morgan('tiny'));
 * console.log('Morgan enabled');
 * }
 * 
 * set NODE_ENV=production
 * to set the environment in cmd
 * 
 * configuration
 * 
 * use config module
 * npm i config
 * 
 * create a folder called config
 * add json files for different configs
 * 
 * Change the environment and use
 * 
 * console.log('Application name: ' + config.get('name'));
 * console.log('Application name: ' + config.get('mail.host'));
 * 
 * the settings can be accessed with config
 * no sensitive information in the json files
 * 
 * use environment variables
 * 
 * set app_password=1234
 * 
 * create custom-environment-variables.json
 * {
 * "mail": 
    * {
    *      "password": "app_password"
    * }
 * }
 * 
 * debugging
 * 
 * console.log is often used for debugging
 * we can use a module that enables/disables using them
 * so we dont have to delete them and write them back in
 * 
 * npm i debug
 * 
 * set environment variables
 * set DEBUG=app:startup
 * 
 * set DEBUG=
 * to erase, same with environment
 * 
 * set DEBUG=app:startup,app:db
 * to set multiple debuggers
 * 
 * set DEBUG=app:*
 * to set all
 * 
 * DEBUG=app:db nodemon index.js
 * to set debug at runtime
 * 
 * templating engines
 * pug
 * mustache
 * ejs
 * 
 * create views folder
 //--------------------------------------express loads the pug engine without requiring it
app.set('view engine', 'pug');
app.set('views', './config/views'); //put all your paths and templates in views

app.get('/', (req, res) =>{
    res.render('index', {title: 'My express app', message: 'hello'}); // using the template
});
 * 
 * Database integration
 * 
 * use express for integration
 * 
 * 
 * 
 * 
 * 
 */

