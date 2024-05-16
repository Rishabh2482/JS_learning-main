let score=48
let str=undefined       // TODO =>change "48" to null or undefined to find its output. it is important

console.log(typeof score)
console.log(typeof (str))

let valInNumber=Number(str);
console.log(valInNumber);
console.log(typeof(valInNumber))

// be carefull while type conversion using Number function it will try to convert the value to number and if it fails to do so it return "NaN"

let val="eimv";
let num=parseInt(val);

/*

 Remember This diffrence between the parseInt and Number function of javascript:- 
"The parseInt function in JavaScript is used to convert a string to an integer.
 When parseInt encounters a string, it reads the string character by character from the beginning and stops parsing when it encounters
  a character that is not valid in the specified radix (base). By default, parseInt uses base 10."

  
  
 " When using the Number function in JavaScript to convert a string to a number, the function attempts to convert the entire string.
   If the string contains any invalid characters for a number, the conversion fails and returns NaN (Not-a-Number)."
  
    that is why 
    const val=parseInt("4aa")
    console.log(val)          output will be 4, and not NAN.

    const val=Number("4aa")
    console.log(val)          output will be Nan, and not 4.
*/
console.log(num)
console.log(typeof(num))

// NOTE: "33" => 33 its type is number
//       "45abd" => NaN but its type is number
//      { true => 1 }but its type is number, and {false is converted to 0.}
//         undefind=> NaN , and type is number

// We can also do conversion to other preimitive data types like bignint ,Boolean.


// type conversion into Boolean type.
let bol= undefined;          // any value other than (null,0,Undefined) will be considerd as true and its type is "True".
console.log(Boolean(bol))     

// type conversion BigInt
let numb="56"
console.log(BigInt(numb))
console.log(typeof(BigInt(numb)))

let number=67
console.log(String(number))
console.log(typeof(String(number)))
    

// ******************************************************OPERATION ********************************//

// in 2nd part



