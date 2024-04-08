function one()
{
    const username="rishabh"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)             -->> This will give error because website is nto defined here in this scope.

    two()
}
one()

// --------------------------------------------------------------------------//

// const username="Tishsbh"
// const name="RNa"
// const newval=username.concat(name);
// console.log(newval)


// *****************    Intresting Points   **********************??//

//  Below is an example of J.S. Hoisting.
console.log(addone(5))      // THis wiil not give error.
function addone(num)
{
    return num+1;
}



console.log(addTwo(4))          // THis will give error because of the way we have declared the function.
const addTwo=function(num)
{
    return num+2;
}
