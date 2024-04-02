// Array --  These are Objects in javascript and in js an array can contain diffrent  types of data like string, number ,Array etc.
//           Array are resizable in java script.
//           In JS we use [] to declare an array.//
//           Array copy operation in javascript follow shallow copy concept not deep copy, (i.e Array's copies shares same the reference)

const arr=[0,1,2,18,4,5]
/*
console.log(arr)
console.log(arr[0]);
console.log(arr['3']);      //-->> This is also a way to access the array element with their corrspounding index.
console.log(arr["one"])         //--- >> This is wrong way it will show undifined.
*/

// Other methode of creating array by constructor.
const newarr=new Array('a','b','c')  //--->>>This creates an array by name "newarr" like as [ 'a', 'b', 'c' ]
// console.log(newarr['2']);


// Array Methode
/*
newarr.push(6);           //--->> It adds the element at last index.
newarr.push('d');          
console.log(newarr)

newarr.shift();          //--->> It removes first element from the array and return removed element).
console.log(newarr);

newarr.unshift("first")     //--->> It adds element at first index of the array and returns the new length of array.
console.log(newarr);


            // Use of join operation

console.log(newarr.includes('d'));   //--->>> Returns true if the given argument is present in the array otherwise returns fale.
const ans=newarr.join("-"); // THis methode does not creates a new array and does not modify in the same array.
console.log(newarr);    
console.log(ans);     
                  

             use of slice and splice( Very IMPORTANT)

  splice --->> Modifies the original array while,
  slice ----->> Does not modifies the original array.

const new1=arr.slice(1,4)
console.log(new1)       //--> > Output: [ 1, 2, 18 ]
console.log(arr)        //-->>  output: [0, 1, 2, 18, 4, 5]

const new2 = arr.splice(1,4)        // splice (starting point , how many elements you want to remove , what should be added )
console.log(new2)        // -->> Output: [ 1, 2, 18, 4]
console.log(arr)         // -->> Output: [ 0, 5 ]
*/


