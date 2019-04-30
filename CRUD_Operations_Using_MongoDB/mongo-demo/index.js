const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')//connect creates a promise
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect', err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

//Classes, objects
//Human, John
//Course, nodeCourse

const Course = mongoose.model('Course', courseSchema);
//this is a class


async function createCourse(){

    const course = new Course({
            name: 'Angular Course',
            author: 'Randy',
            tags: ['angular', 'frontend'],
            isPublished: true
    });
    
    const result = await course.save();
    //course.save returns a promise
    //to use await, course object related needs to be in a function marked as async
    
    console.log(result);

}

async function updateCourse(id){
    //approach: query first
    //findByID()
    //Modify its properties
    //save()

    //Approach: update first
    //update directly
    //optionally: get the updated document

    const course = Course.findById(id);
    if(!course) return;
    course.isPublished = true;
    course.author = 'Another Author';
}

updateCourse();

async function getCourses(){
    //eq, ne, gt, gte, lt, lte, in, nin
    //or, and

    const pageNumber = 2;
    const pageSize = 10;
    // /api/courses?pageNumber=2&pageSize=10


    const courses = await Course
        //.find({ price: { $gte: 10, $lte: 20 } })
        //.find({ price: { $in: [10, 15, 20] } })
        //.find()
        //.or([ {author: 'Randy'}, {isPublished: true}])
        //.and([])
        //.find({author: /^Randy/})
        //string that starts with Randy
        //.find({author: /Jackson$/i})
        //$ ends with, ^ starts with
        //i is case sensitive
        //contains .* Word .* looks for zero or more characters befor or after the word
        //.find({author: /.*Randy.*/})
        .find({ author: 'Randy', isPublished: true})
        .limit(10)
        .sort({ name: 1 })
        .skip((pageNumber - 1) * pageSize) //this allows for pagination
        .limit(pageSize) // with this we get the documents for a given page
        //.count(); returns a count of the objects
        .select({ name: 1, tags: 1});

    console.log(courses);
}




