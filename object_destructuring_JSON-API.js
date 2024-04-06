// Object Destructuring--> It is a way to extract properties from the objects.
const cource={
    courceName:"JS in HINDI",
    prise:"999",
    courceINstructor:"Rishabh"
}
// console.log(cource.courceINstructor);
// console.log(cource.prise);                          
// Insted of writing such long line we can use object destructuring to reduce the number of line.



// This below is the object destructuring syntax and and its implementation.
const {courceINstructor:instructure,prise}= cource;
console.log((instructure));
console.log((prise));
// console.log((courceName));   this wiil give error, but above two will work fine.

// --->>>> We will be further studying about the JSON API, after some time.

