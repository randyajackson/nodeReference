const express = require('express');
const Joi = require('joi');

//create express object which is by convention named app
const app = express();

app.use(express.json());
//when we call express.json we are calling middleware
//and when we call app.use we are using the middleware in the app pipeline

/*
app.get()
app.post()
app.put()
app.delete()
the crud functions are all found in express
*/

app.get('/', (req, res) =>{
    res.send('Hello World!!');
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

app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params);
});

//localhost:3000/api/posts/2018/1?sortBy=name
/**
 * {
 *  year: "2018"
 *  month: "1"
 * }
 * 
 * with express you can also get query string paramaters
 * ?sortBy=name
 * 
 * route paramaters /2018/1 for essential or required parameters
 * query string parameters ?sortBy=name for anything optional
 */
app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.query);
});

//-----------------------------------------------
//GETTING COURSES

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

//creating a route to get a single course
// /api/courses/1

//we want to use let and const in node
//let can be modified later, const cannot

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if(!course) // 404 Object not found
        res.status(404).send("Not found");
    else
        res.send(course);
});

//------------------------------------------------
//POSTING COURSES

// app.post('/api/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);

//     res.send(course);
// });

// send a post in postman
// select body, select json
// { "name" : "new course"}

//input validation
app.post('/api/courses', (req, res) => {
    // if(!req.body.name || req.body.name.length < 3){
    //     //return 400
    //     res.status(400).send('Name is required and should be minimum 3 characters.');
    //     return;
    // }
    //will use npm joi for input validation
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    //make request in postman
    //created a function validateCourse to use Joi.validate in 2 places

    const {error} = validateCourse(req.body); // this = result.error
    if(error)
        return res.status(400).send(error.details[0].message);


    //using Joi simplifies error messages for the different cases

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);

    res.send(course);
});

//--------------------------------------------------------
//PUT REQUEST

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if(!course) // 404 Object not found
        return res.status(404).send("Not found");

    //Validate
    //If invalid, return 400 - Bad request
    
    const {error} = validateCourse(req.body); // this = result.error
    if(error)
        return res.status(400).send(error.details[0].message);

    //Update course
    course.name = req.body.name;
    //Return the updated course
    res.send(course);

});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

//----------------------------------------------------------
//DELETE REQUEST
app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    //Does not exist, return 404
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if(!course) // 404 Object not found
        return res.status(404).send("Not found");

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(course);
});



