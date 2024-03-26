const account=2344;
let name1="Rishabh"
var val=true;
city="Sonebhadra"
const hero=24;     // const declration must be initialized.
let num;    // let variable need not be initalized than it will take value as undefined;
/*
 If you declare a variable without using one of these keywords {let,var,const}, 
 the variable will be automatically declared as a global variable.
  This can lead to errors if you accidentally overwrite a global variable.
*/
console.table([account,name1,val,city,hero,num]);
console.log(account,name1,val,city);

/* Do not use use var just because it does not diffrenciate between the scope of variables. */