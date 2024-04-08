// Immediately Invoked Function Expression(IIFE)

//  (interview-Question)Why we use IIFE--> The function which are invocked immediatly , and some time due to execution of global scope ther arise some pollution, so to remove that global scope pollution we use IIFE.
(function chai(){
    //  This is named IIFE
    console.log("DB is Connected");
})(); 
//  THis above syntax is called as iife.

/* 
Always use semicolon at the end of iife otherwise it might can cause error because of two iife invokation. 
 This below code is written with Arrow function.
*/
( (name) => {
    // This is an example of unnamed iife.
    console.log(`"DB is Connected 2" ${name}`)
} )("Rishabh");     // Passing the arguments to iife function.


/* (**************VERY IMPORTANT POINT************)
How does two iife invokation cause error if invocked without semicoloun */

(()=>{
    console.log(`Hello 1`)
})()

(()=>{
    console.log(`Hello 2`)
})()

