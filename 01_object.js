/*  THere are two methode to create an object  1>>> As a Constructowr(it will be singalton)  ,
 2>>> As a Litral(multiple instence can be created.)
 */

 //---->> For now we wiil be focusing more on singleton.
 // singleton
    // Object.create


 /* Object as literals*/
const JsUser={
    name:"Rishabh",
    age:22,
    age:21,             // THis value is displayed not the 22.
    "married": false,
    "location":"Uttar Pradesh",
    "current location":"U.P.",
    lastloginday: ["Monday","Saturday"]

}
console.log(JsUser.age)
// THe key in the object is of string type internaly but it is not necessary that you have to write it in " "(double quotes). we can write keys without using double quotes it wiil be valid.

//--->>> There are Two important way to access the value for any key in objects.
        // console.log(JsUser.location);
        // console.log(JsUser."current location");   THis is not a way to acces
        // console.log(JsUser["current location"]);        // By using this way we can access this.


// ---------------------------------------------******************************>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<///////


            /* Question-1-->>How to create an key as a Symbol.
            THis is only syntax to use Symbol data type as key and access its value.
            const mykey=Symbol("key")
            const JsUser2={
                name:"Rishabh",
                age:22,
                "married": false,
                "location":"Uttar Pradesh",
                "current location":"U.P.",
                lastloginday: ["Monday","Saturday"],
                [mykey]:"This is key1"
            }
            console.log(JsUser2)
            console.log(JsUser2[mykey])
            console.log(JsUser2.mykey)   this is wrong way to acces the key.
----------------------**************************************************************/

// Changing the value of the js objects.
JsUser.name="Rishabh Kumar Chauhan"
// console.log(JsUser)

/* How to freez the objects in js, so that no changes will be reflected into the objects.
Object.freeze(JsUser);
JsUser.name="Rishabh Kumar";
console.log(JsUser);
*/

/* How to add any key value is the object.
JsUser.val="45"
console.log(JsUser);
*/

// Adding the Function in the Objects. and accesing that function using . operator
JsUser.greeting=Function()
{
    console.log("Hello User.")
}
console.log(JsUser.greeting());

JsUser.greeting1=Function()
{
    console.log(`Hello ${this.name} Welcome`)           // Why this is not working ?
}
console.log(JsUser.greeting1());


            
 

