const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect', err));


const courseSchema = new mongoose.Schema({
    name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
            //match: /pattern/
        }, //validates that name is a string
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {//creates a conditional validation, has to be published to have a price
        type: Number,
        required: function() {return this.isPublished; }, // => will not work, it will not recognize "this" only within the function
        min: 10,
        max: 200
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){

    const course = new Course({
            //name: 'Angular Course', if you require a String for name and try to save, you will get an exception error
            name: 'Angular Course',
            //category: '-',category has to be web, mobile, or network

            author: 'Randy',
            tags: ['angular', 'frontend'],
            isPublished: true
    });
    
    try{    //use a try catch when trying to create collections with validaters 
        // await course.validate((err) => {
        //     if (err) {}
        // }); another way to catch errors, but do not use

        const result = await course.save();
        console.log(result);
    }
    catch (ex)
    {
        console.log(ex.message);
    }
}

createCourse();