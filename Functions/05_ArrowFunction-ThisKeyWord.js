const user={
    username:"Rishabh",
    prise:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website.`)
        console.log(this.obj.newfunction());
    },

    obj:{
        val:45,
        name:"Hero",
        newfunction: function(){
        console.log(this.username)  // Why this can not access username? Learn more about this keyword in js.
        console.log(this.name)
        }
    }
}
// this will refer to the object in which it is written.

/*
user.welcomeMessage() 
user.username="Sam"
user.welcomeMessage()
user.obj.newfunction()
*/

// console.log(this);
// (INTERVIEW -QUESTION **) When working with the browser output of console.log(this) is Window, but inside the node it is empty object.

/*------------------*/
//  function thisTest()
//  {
//     let username="rishabh"
//     console.log(this.username);         // This is not working in the fucntion.
//  }
//  thisTest()


// Funtion as a variable
// const thisTest=function()
// {                                                                    
//     let username="rishabh"       
//     console.log(this.username)            This is also not working here also in this type of function
// }
// thisTest()


// Arrow function
// const thisTest=()=>{
//     let username="rishabh"
//     console.log(this.username);
// }
// thisTest()

/*
const add=(num1,num2)=>num1+num2        // This is only valid for 1 line of code , in this no need to return value.(implecit return)
console.log(add(3,5))
*/

const add=(num1,num2)=>(num1+num2)          /*We can user brackets here and can write any number of line of code without using return it will work fine
                                                ,but if we use curly braces than we have to use return keyword.*/
// console.log(add(3,5))

// Question-1->> How can we rerturn an object using function
        // Ans 1>>
        const ob=function()
        {
            return obj={
                name:"rishabh"
            };
        }
        // console.log(ob())

        
        // Ans 2>> using arrow function

        const fn=()=>({username:"rishabh",
                        prise:69})
        console.log(fn())




