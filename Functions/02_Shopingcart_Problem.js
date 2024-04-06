/* While handling with shoping carts we often got a task where we have two add all the cart values intered by
the user, but we do not know how many cart items are added we do not know directly so in that case it is important
to handle such kind of dynamic parameters being passed. so  to solve such problem we use rest or spread operator */

function calculateCartPrise(num1,num2,...num)
{
    console.log(num1,num2);
    return num;
}
console.log(calculateCartPrise(3,4,5,6,7,8));
// Using above function we can able to atlest create an array of all data parametes being passed now we can add all these value by applying loop over the created array.


// Handling the objects being passed as function parameter.
function handlingObjects(anyObject)
{
    return(`This is ${anyObject.name} and cart prise is ${anyObject.prise}`);
}
console.log(handlingObjects({
    name:"Rishabh",
    prise:690
}))

// Handling the Array's being passed as function parameter.
const myArray=[200,300,400,500]
function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(myArray));