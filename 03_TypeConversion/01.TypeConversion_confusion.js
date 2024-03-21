let score=48
let str=undefined       // TODO =>change "48" to null or undefined to find its output. it is important

console.log(typeof score)
console.log(typeof (str))

let valInNumber=Number(str);
console.log(valInNumber);
console.log(typeof(valInNumber))

// be carefull while type conversion using Number function it will try to convert the value to number and if it fails to do so it return "NaN", same goes for parseInt()

let val="eimv";
let num=parseInt(val);
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



