console.log('BEFORE');
console.log('AFTER');
//example of synchronous or blocking application
//before is executed, then after

console.log('1');

//const user = getUser(1);
//console.log(user); undefined since of the timeout

getUser(3, (user) => { // example of a callback or a callback function
    console.log('User', user);
});

console.log('2');
//this is asynchronous or nonblocking function, executes 1,2,3
//this function schedules a task to perform in the future
//asynchronous does not mean concurrent or multi threaded

//when dealing with disk commands, node uses asynchronous functions

function getUser(id, callback) { //call back is a function that we call when the result of an async function is ready
    setTimeout(() => {
        console.log('Reading name from database');
        callback({id: id, gitHub: "rajackson"});
    }, 2000);
}

//three ways to deal with asyynchronous code
//callbacks
//promises
//async/await