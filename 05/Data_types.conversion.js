/*

TODO--> Learn this important Remember the returnType of all variables ex array ,null,object etc.
                    Very very IMPORTANT

1) typeof 42;           --->>            Output: "number"
2) typeof "Hello";      --->>            Output: "string"
3) typeof true;         --->>            Output: "boolean"
4) typeof undefined;    --->>            Output: "undefined"
5) typeof null;         --->>            Output: "object"
6) typeof Symbol();     --->>            Output: "symbol"
7) typeof [];           --->>            Output: "object"
8) typeof {};           --->>            Output: "object"
9) typeof function() {};        --->>    Output: "function"





( Important for Interview)
---> In javscript there are two types of data types Primitive Data types and Non Premitive data types

--->> It is based on how does data is stored in memory and how it is used.

1.) Primitive datatypes (call by value)
- Number    
-String
-Symbol     ---->> It is used to make the values unique.
-Boolean 
-BigInt
-Null    - A special data type which holds the value null, this can be assigned to any variable type.It does not mean 0 because 0 is still a value, it means it contains nothing.
-Undefined      - It means it is uninitialized


    const id =Symbol('123')
    const anotherID=Symbol('123')
    console.log(id===anotherID); // false because they have different memory locations

2.) Refernce (N0n-Premitive)
- Objects       
-Array
-Functions
- Type of all non-premitive datatype is OBJECT.

const hero=["Batman", "SuperMan"]       ==>> THis is a array declaration this also a object type

let myobj={                             ==>> This is a declarion of Object
    name:"Rishabh",
    age:22
}

const value=function(){                    ==>> THis is a function as a variable
    console.log("I am a function");
}
console.log(typeof value);

.



 
See this about dataypes ---"https://262.ecma-international.org/5.1/#:~:text=ECMAScript%20operators%20include%20various%20unary,operators%2C%20and%20the%20comma%20operator."
*/

console.log(typeof bignumber)           // this is undefined even this  is not declared anywhere. than also it saying undefined. ?

