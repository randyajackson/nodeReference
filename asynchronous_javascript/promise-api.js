//returns a promise that is already resolved
const p = Promise.resolve({id: 1});
p.then(result => console.log(result));

//returns a promise that is already rejected
const p = Promise.reject(new Error('reason for rejection'));
p.then(result => console.log(result));