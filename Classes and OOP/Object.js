const multiply= (val) => val*5;     //? This is a Arrow function
multiply.print="Rishabh"
console.log(multiply(5))
console.log(multiply.print);
console.log(multiply.prototype);

//? Below is an regular function. 
function multipleBy5(num){
    return num*5
}
console.log(multipleBy5.prototype);


//~ Ans to the Diffrence between the behaviour of arrow function and regular function.
//? Arrow Functions: Do not have a prototype property because they are not meant to be used as constructors.They are designed to be lightweight and do not support properties like prototype because they are not intended to be used as constructors with the 'new' keyword.Arrow functions do not have their own this context 

//? Regular Functions: Have a prototype property that is used when the function is used as a constructor to create new objects.

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
