if(true)
{
    let a=30
    var b=40
    const c=50
    console.log("Inner :",a);
    console.log("Inner :",b);
    console.log("Inner :",c);
}

// console.log("Outer :",a);
console.log("Outer :",b);           // var is globaly scoped that is why it is working and not giving any error.
// console.log("Outer :",c);

//  JUST because the var is globaly scoped we should not use var insted we should use let,const.



/* (INTERVIEW QUESTION>>>) REMEMBER: Scope of any variable in browser and scope of any variable in 
code environment (i.e. in node environment) both are diffrent.*/