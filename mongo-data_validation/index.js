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
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        trim: true
    },
    author: String,
    //tags: [String],//what if we want tags to have at least one tag
    tags: {
            type: Array,
            // validate: {      synchronous validator
            //     validator: function(v) {
            //         return v && v.length > 0;
            //     },
            validate:
            { //       asynchronous validator
                isAsync: true,
                validator: function(v, callback){
                    setTimeout( () => {
                        //Do some async work
                        const result = v && v.length > 0;
                        callback(result);
                    }, 4000);
                }
            },
            message: 'A course should have at least one tag.',
        },
    
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {//creates a conditional validation, has to be published to have a price
        type: Number,
        required: function() {return this.isPublished; }, // => will not work, it will not recognize "this" only within the function
        min: 10,
        max: 200,
        get: v => Math.round(v), // use to round a value to nearest number when entered at input
        set: v => Math.round(v) //use to round a value to nearest number for entries already in DB
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){

    const course = new Course({
            //name: 'Angular Course', if you require a String for name and try to save, you will get an exception error
            name: 'Angular Course',
            category: 'Web',//category has to be web, mobile, or network
            //category: 'web',
            author: 'Randy',
            //tags: ['angular', 'frontend'],
            tags: ['frontend'], // if you comment this out, validator will still ask for at least one tag
            isPublished: true,
            price: 15.8
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
        for(field in ex.errors) //this will iterate through each error instead of broad error message
        console.log(ex.errors[field].message);
    }
}

createCourse();