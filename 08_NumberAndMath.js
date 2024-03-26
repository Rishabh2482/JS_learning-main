//---------------Number------------------<<<<<<<<<<<<<<<<<<<

// Two ways to declare  a number variable:
let num1 = 42000000000000;// ---> This is a first methode
const num2= new Number(3450.78)// ---> This is a Second methode
// console.log(num2)

// console.log(num1.toString())
// console.log(typeof(num1.toString()))

// console.log(num2.toFixed(5))  // It starts working after the dot  and shows five numbers.
// console.log(num2.toPrecision(5)) // Bothe are imporatant function toFixed(), and toPrecision().

// console.log(num1.toLocaleString('en-US'))   // THis functiion convetes the Numbers into String with , sepration in US formate
// console.log(num1.toLocaleString('en-IN'))   // THis functiion convetes the Numbers into String with , sepration in INDIAN number formate


//-------------------------Maths---------------------<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>

/* Math object in JavaScript has various properties and methods that can be used for mathematics*/
// console.log(Math.PI)

// console.log(Math.round(num2)); 
// console.log(Math.ceil(num2)); 
// console.log(Math.floor(num2)); 
//console.log(Math.exp(0)) // this is 'e' ka power 0 which is 1.
// console.log(Math.min(3,4,32,2))
// console.log(Math.max(3,4,32,2))

// console.log(Math.cos(90*(Math.PI/180)));   

// this is function to check cos value
const cos  =function(degree)
{
     radian= degree *(Math.PI/180)
     return radian;
};
// console.log(Math.cos(cos(60)));

// console.log(Math.sqrt(16));   
// console.log(Math.round(Math.random()*10 +1))     // THis is always genrate values in range 1-10. and excludign 0.


// TODO :--> IMportant formula to get value between any given range.
const min=10
const max=100;
console.log(Math.floor( Math.random()*(max-min+1))+min) // This is very important function







