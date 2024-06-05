/*
// Creating the promise.
const promiseOne = new Promise(function(resolve,reject){
    // Do any async task.

    setTimeout(function(cal=10){
        console.log('Async task is completed')
        console.log(cal)
        resolve(cal)
    },1000)
});  

// Now we will consume the promise, and this is resolve callback function which will be executed only after the completion of the async task which is (i.e. setTimeout())
promiseOne.then(function(val){
    console.log("Promise consumed", val)
})
// Point to Remember :- resolve and reject are just like a callbacks().
*/


// This is second way of creating and resolving promise
new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log('This is async task')
        resolve('This is resolved')     // This line is important because it invokes the .then function() To execute.
    },1000)

}).then(function(msg){
    console.log(`This is Async Task 2 and ${msg}`)
})


/*
// Third Promise Passing the values to the .then function from resolve .
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('This is async task 3')
        resolve({username:"Rishabh",email:"rishah002@gmail.com"})
    },1000)
})
promiseThree.then(function(obj){
    console.log(obj);
})
*/

/*
// Four Promise-> How to return the value from one then or cathch function to other then or catch respectively.Use of finally 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "Rishabh",
                class: "ChaiaurCode"
            })
        } else {
            reject("Error Occured")
        }
    }, 1000)
})
// const val=promiseFour.then(function(obj){
//     // console.log(obj);
//     return obj.username;
// }).catch(function(err){
//     console.log(err)
// })
// console.log(val);

promiseFour.then(function (obj) {
    console.log(obj);
    return obj.username;
})
.then(function (uname) {
    console.log(uname)
})
.catch(function (error) {
    console.log(error);
}).finally(function(){
    console.log('The promise has been resolved or rejected')
})

*/


// Handiling promises using async await insted of using .then and .cathch .
// Creating the Promise.
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "Rishabh",
                class: "ChaiaurCode"
            })
        } else {
            reject("Error Occured")
        }
    }, 1000)
})

//console.log(typeof promiseFive);           //this is object not a function.So return type of promise is object
async function consumepromiseFive(){
    try {
        const response= await promiseFive;         // promiseFive is a object.
        console.log(response)                           
        console.log(response.username)
    } catch (error) {
        console.log(error);                         //value passed in reject is returned.
    }
}
consumepromiseFive();                          // We have to call the async function to execute the function.

