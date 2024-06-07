let myName = "  Rishabh  "
// console.log(myName.trimEnd().length);
//! Add a new property in String object so that we can acces that method directly to remove the spaces at start or at end of the string, without using trim methode directly. 

let myHero = ["Thor" , "Hulk"]

let heroPower = {
    Thor : "Thunder",
    Hulk : "Muscles",

    getPowerOfHulk : function(){
        console.log(`The Power of Hulk is ${this.Hulk}`);
    }
}
// heroPower.getPowerOfHulk();

//? Giving my own method to 'Object'
Object.prototype.rishabh = function(){
    console.log('Rishabh is part of all objects either it is Array,String or Function');
}
// heroPower.rishabh()

//? Giving my own method to 'Array'
Array.prototype.nameRishabh = function(){
    console.log('Call the Name Rishabh');
}
// myHero.rishabh()
// myHero.nameRishabh()
// heroPower.nameRishabh()  This object can not acces this method because it is available to only array.


//!------>>  Inheritance<<-------|| How does an object can acces the property of other.

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      //? This line inherites the property of TeachingSupport, now This object also has a property isAvailable which is accesisable for only TeachingSupport object.
}

TASupport.__proto__=User;       //? This inherit the properties of User object.
console.log(TASupport.email);

//& The above Methods are outdated now the modern way of inheriting is by using 'setPrototypeOf' method.
Object.setPrototypeOf(TeachingSupport,User)
console.log(TeachingSupport.email);


//~ Now the Solution of our problem is
// step-1> create the required function
// function removeSpace (){
//     this.string.trim().length;
// }

// Object.setPrototypeOf(String,removeSpace);
// console.log(myName.removeSpace())

function removeSpace (){
    // return this.length;
     return(`True length is ${this.trim()}`);
}
String.prototype.trueLength=removeSpace;
console.log(myName.trueLength());
console.log("Rishabh   ".trueLength())


