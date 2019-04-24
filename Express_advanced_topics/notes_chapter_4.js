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
 * 
 */

