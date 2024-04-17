// literals object
        // const newuser={}

// creating the singalton object
const finduser=new Object();
/*
finduser.id=123;
finduser.name="Rishabh"
console.log(finduser);
*/

// THis  is nesting of objects
const userinfo={
    email:"rishabh@gmail.com",
    fullname:{
        userfullname:{
            name:"Rishabh",
        },
        userlastname:{
            name:"Chauhan",
        }
    }
}
// console.log(userinfo)
// console.log(userinfo.fullname.userlastname.name);


//Merging two objects
const obj1={1:"a",2:"b"};
const obj2={A:1,B:2,c:3};
const obj3={a:5,b:6,c:7};

const ansobj={obj1,obj2};    //This wiil output as -->>    { obj1: { '1': 'a', '2': 'b' }, obj2: { a: 1, b: 2, c: 3 } }

const newobj1={...obj1,...obj2,...obj3};  //This wiil output as -->>  { '1': 'a', '2': 'b', A: 1, B: 2, c: 7, a: 5, b: 6 }
const newobj2=Object.assign({},obj1,obj2,obj3)   //This wiil output as -->>{ '1': 'a', '2': 'b', A: 1, B: 2, c: 7, a: 5, b: 6 }
console.log((newobj1));


// const trying={a:  obj2.a + obj2.b};
// console.log(trying);

console.log(Object.keys(ansobj));
console.log(Object.values(newobj1));
console.log(Object.entries(newobj1));
console.log(obj1.hasOwnProperty('1'));


