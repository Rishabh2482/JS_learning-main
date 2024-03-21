// *************************************OPERATION************************************//

let value=4
let negVal=-value
//console.log(negVal);

// basic airthmatic operation like{ + , - , **(power operation) , * , / , % }.

            // Triky -1
// console.log("1" +2+3) // If string comes first it implecitly convert string to number than concatinate it . 
// console.log("1" +2-3) // If string comes first it implecitly convert string to number than perform  airthmatic operation
// console.log(1 +2+"3") 
// console.log(1 +2+3)

            //Triky -2
console.log(true)               // here the value is "true " no conversion is done here.
console.log(+true)          // here the value of true is converted into 1 and than it is evalueated  output=>>{1}
console.log(-true)          // here the value of true is converted into 1 and than it is evalueated  output=>>{-1}
console.log(+" ")           // as we know empty string is treated as false so the value is implicitly type casted to 0.

            //Tricky-3
let num1,num2=8,num3                        // this will give undefined value to each variable num1,num2,num3. but if we give some value to num3 than it will not give undefined values
num1=num2=num3
console.log(num1,num2,num3)


// TODO =>> Study from "https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations" 
