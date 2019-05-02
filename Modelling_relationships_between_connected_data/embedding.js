const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  //adding embedded author property
  //author: authorSchema
  //how to create an array of sub documents
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

  //if you want to change the name of the author
async function updateAuthor(courseId){
  const course = await Course.update({_id: courseId},{
    $set: {
      'author.name' : 'John Smith'
    }
    //$unset: { 'author': '' } removes all of the author element
    });
  course.save();
}
//updateAuthor('5cca5de06cc9b93294f16eca');

//creates and updates an array of authors
async function addAuthor(courseId, author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  author.save();
}

//addAuthor('5cca6145ee416b09487d1e54', new Author({ name: 'Amy' }));
addAuthor('5cca6145ee416b09487d1e54', "5cca620f14ca2929340ace04");


//creates an array of authors
//createCourse('Node Course',[ new Author({ name: 'Randy' }), new Author({ name: 'John' })]);
