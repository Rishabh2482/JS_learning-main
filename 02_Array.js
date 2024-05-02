// Learn about Array.of ,Array 

// Question -1-->>> How to join to arrays

   const arr1= [1,2];
   const arr2= ['a','b','c'];
//   (arr1.push(arr2))
//    console.log(arr1)             THis is not a way to join to array its output is =>>    [ 1, 2, [ 'a', 'b', 'c' ] ]
// console.log('Joined array: ',arr1.concat(arr2));        This does not modify the same array it returns new array.
const newarr= [...arr1,...arr2]             // This is widly used methode to combine two or more array,it is called as spread operator, it does not modifies two array it returns new array.
// console.log(newarr)

// Question -2--->>> How to flat an array of array  
   
const arr3 = [[1,'a'],[2,'b'],[[[5,'r',"Rishabh"]]]] ;
// const newarray=arr3.flat(3)   it returns a new array and it's output is [ 1, 'a', 2, 'b', 5, 'r', 'Rishabh' ]
// const newarray=arr3.flat(Infinity)
// console.log(newarray)

// Question--3>>> how to convert any data type value in array.
const val=Array.from("Hello World") 
console.log(val)
const val1=Array.from({name:"Rishabh",age:20})          // IMPORTANT ,INTRESTING NEED TO LEARN MORE.
console.log(val1)

// question -4--->> Crating an array from diffrent  datatype .
let var1= "Hello";
let var2=2;
let var3=true;
console.log(Array.of(var1,var2,var3))
// Question -->>>How to check the object is empty or not?
let obj={}
if(Object.keys(obj).length===0)
console.log("Empty");
else
console.log("Not Empty");

// Question -- >> How to find out the index of a element in an array ?





