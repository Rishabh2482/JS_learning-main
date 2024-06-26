// Stack (premitive/ call by value) ,Heap (Non-premitive / Refrence TYpe)

// 1--->>> Stack is call by value. ()
let nameOne="User";
let nameTwo;
let nameThree="User";
console.log(nameOne===nameThree); // true because they have the same memory location.

// passing the value not reference
nameTwo=nameOne
nameTwo="Rishabh";                  // This does not change the value of nameOne ,because it is callby value not call by Reference.
console.log(nameOne)
console.log(nameTwo)

// 2->>>>>  Heap (cALL BY Reference)
let detailOne={
    username:"User123",
    email:"User@123.com"
}
let detailTwo=
{
    username:"User123",
    email:"User@123.com"
}
console.log(detailOne===detailTwo);   // false because they are in different memory locations
// passing the reference not value.
detailTwo=detailOne

detailTwo['username']="Rishabh";
detailTwo.username="newName";

console.log(detailOne.username)
console.log(detailTwo.username)