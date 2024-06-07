const user={
    username : "rishabh",
    logincount : 9,
    signedIn: true,

    getUserDetails : function (){
        console.log(`Got user details from Database for ${user.username}`);
        // console.log(`UserAllDetails : ${this}`);
        console.log(this);


        // console.log(`UserAllDetails : ${JSON.stringify(this)}`);
        // console.log(`UserAllDetails : ${this.toString()}`);      The behaviour of above line and this line is same Understand it's internal detail.
    },

    obje: `${console.log(this)}`
}
// user.getUserDetails()
// console.log(user.obje);


//? Constructor function
function User(username, logincount,isLoggedIn){
    this.username= username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;

    return this
}
function demo(nam,val,isva){
}

// Importance of new Keyword
//~ const Userone = User("Rishabh", 13, true)
//~ console.log(Userone) 
//~ const Usertwo = User("Ram", 12, false)
//~ console.log(Userone)                    Due to THis reason we have to use new keyword because it create a new instence (copy) and does not do any change in the other object.

const Userone =new User("Rishabh", 13, true);
// console.log(Use.rone)
const Usertwo =new User("Ram",10, true);
// console.log(Userone)

console.log(Userone.constructor)        // It will point to the User function that was  used to instantiate the Userone object using the new keyword.


//!  Use of 'instanceof' Keyword.
console.log(Userone instanceof User);       // True
console.log(Userone instanceof demo);       // False
// ! What steps internaly occure when we use new keyword to create a object ?