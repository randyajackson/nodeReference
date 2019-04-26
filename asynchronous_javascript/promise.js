//-----------------------------------------------------
/**
 * A promise holds the eventual result of an asynchronous operation.
 * Either results in a value or an error.
 * 
 * When a promise is created it is in the pending state.
 * When a promise is complete it becomes fulfilled or resolved.
 * If something went wrong, the promise will be in a rejected state.
 */
//-----------------------------------------------------

const p = new Promise((resolve, reject) =>{
    //Kick off async work
    setTimeout(() => {
        //resolve(1);
        reject(new Error('message'));
    }, 2000);   
});
//basic promise

//chaining, ; only on last call
p
.then(result => console.log('Result', result))
    //basic use of a promise
.catch(err => console.log('Error', err.message));
    //basic reject of a promise
