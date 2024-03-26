


// TODO:-->>> Implement the working of all string Methodes only implement not mugup them so that whenever needed it is Known to YOu that how to use them



// Two Methods for declaring the string
//1-Methode>> 
let name="Rishabh"

//2-Methode>> Using  Constructure's
let val=new String('Rishabh');

// above both declaration are same both works in similer way

//-------------------------------------------------------***********_________-------------------

/* 
As Strings Normally, strings like "John Doe", cannot have methods or properties because they are not objects.
But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.
In JS This freature exists with only Strings not with all premitive data types.
*/
let repoCount=10

// console.log(name + " " + repoCount)      THis is not used widely insetead of this prefer to use String Interpolation

// Modern Implementation. concationation we use String Interpolation or (Use Backticks ` `)
//console.log(`This is my gitHUb repositiry my name is ${name} and my Number of Repositiory is ${repoCount}.`)

//--->>>> Implemetnting some  basic method to our string object <<<<<-----
// Remember all this methods can be used just because they treat  a normal string as an Object, BUt as String is premitive datatype so it will not be changing the actual content insted it creater a new string.
let personName="   RIsh Jfda adjk    "
console.log(name.length);
console.log(name.__proto__); // This is a string Methode Used to  get the Prototype of any Object.
console.log(name[0]);        // We can access the charachter by using Indexing [].
console.log(name.slice(-3,5))  // index=-3 means value  from -3rd element and till 5th element will be shown.
console.log(name.slice(-3,-1))  // negtive values are counted from end in name e.g>>  -1 means last element 'h' , -2 means second last 'b', 
console.log(name.substring(0,4))
console.log(name.charAt(1))
console.log(name.substr(0,3))
console.log(name.trim())

console.log(name.trimEnd())
console.log(name.trimStart())
console.log(name.trimRight())
console.log(name.trimLeft())
