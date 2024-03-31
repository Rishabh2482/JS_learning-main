// Dates

let myDate= new Date()
/*
console.log(myDate)
console.log(myDate.toString())                  // THis will include date,day ,time,month .
console.log(myDate.toDateString())              // This inlcude date in (day month date year) formate.
console.log(myDate.toTimeString())              // This include time accorting to IST.
console.log(myDate.toLocaleDateString())        // THis include date in( DD/MM/YY) formate.
console.log(myDate.toLocaleTimeString())        // This  include time in (hour:minutes:second AM/PM) formate
console.log(myDate.toISOString())               
console.log(myDate.toJSON())
console.log(myDate.getTimezoneOffset())         //THis gives to time-diffrence between the local system time and universal coordinate time.(UTC)
*/

// creating any random date
let createDate=new Date(2024,1,2)           // year,monthe,date formate
// console.log(createDate.toDateString())
// console.log(createDate.toLocaleString())

// let newDate=new Date("2024-03-31")
let newDate=new Date("03-31-2024")         // BOth formate are used and gives option to coustomize our need.
// console.log(newDate.toDateString())

let myTimeStamp=Date.now();                
/* 
console.log(myTimeStamp)                // This gives value in miliseconds gives current time in milisecond.
console.log(newDate.getTime())          // This gives value in miliseconds not in seconds.    
console.log(newDate.getMonth()+1)               // Jan is 0,feb is 1...
console.log(newDate.getFullYear())          
console.log(newDate.getDay())               // sunday is 0,monday is 1 etc....
console.log(newDate.getDate())              
*/

newDate.toLocaleString('default',{
    weekday:"long"
})

