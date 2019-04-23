const express = require('express');

//create express object which is by convention named app
const app = express();

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

app.get('/api/courses', (req,res) => {
    res.send([1,2,3]);
});


//app.listen(3000, () => console.log("Listening on port 3000"));
//in production environment, we cannot expect 3000 to be available
//PORT is an environment variable
//in cmd:
//set PORT = 5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

//creating a route to get a single course




