// //returns a promise that is already resolved
// const p = Promise.resolve({id: 1});
// p.then(result => console.log(result));

// //returns a promise that is already rejected
// const e = Promise.reject(new Error('reason for rejection'));//new Error provides the call stack
// e.catch(error => console.log(error));

const p1 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log('Async operation 1....');
        resolve(1);
        //reject(new Error('something failed'));
    }, 2000);
});

const p2 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log('Async operation 2....');
        resolve(2);
    }, 2000);
});

// Promise.all([p1, p2])    //this promise will resolve when all promises in the array have been resolved
// .then(result => console.log(result))
// .catch(err => console.log('Error', err.message));

Promise.race([p1, p2])    //this promise will resolve when the first promise in the array has been resolved
.then(result => console.log(result))
.catch(err => console.log('Error', err.message));

