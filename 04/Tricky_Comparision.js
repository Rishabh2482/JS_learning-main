// Basic operation are also but we focus on tricky operation 


// IN typescript we do not allow such kind of comparision is wiil give error and so in typescript we are allowed to do comparision betwee similer datatype things.
console.log("3">1)
console.log("0">1)
console.log(`02`>1)

// Using Comparision operator with null and undefined

console.log(null>undefined)
console.log(null>=undefined)
// when you run console.log(null >= undefined), the following steps occur:
// 1. null is converted to 0.
// 2. undefined is converted to NaN.
// 3. The comparison 0 >= NaN is performed.
// 4. The result of this comparison is false.
console.log(null<=undefined)
console.log(null==undefined)


console.log(null>0)
console.log(null>=0)
console.log(null<=0)
console.log(null===0)  

 /*The reasone is that equality check == and comparision <,>,<=,>= work diffrently is just because Comparision operator converts null to a number , treating it as 0.
 That's why 
 null>=0 is true, 
 and null >0 is false 
  but with equality check it does not change the value of null to 0.*/
