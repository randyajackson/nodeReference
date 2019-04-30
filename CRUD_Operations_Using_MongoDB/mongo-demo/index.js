const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')//connect creates a promise
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect', err));