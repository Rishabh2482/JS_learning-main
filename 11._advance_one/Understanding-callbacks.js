// Aim is to understand the funcionality ,working and syntax of callbacks. and pyramid of dom/(callback hell).

// Important points for interview:
// 1. What is callback and how it is diffrent from normal function ?
// 2. Need of callback why do not we use name of function directly insted of using callback ?.
// 3. Drawback of callback ?
// 4. Solution to the problem arise by the use of callback.?
// 5. check the markdown file



//                                          Example-1
// function logMessage(message) {
//     console.log(message);
//   }
//   function delayedGreeting(name, callback) {
//     console.log("start")
//     setTimeout(() => {
//       logMessage(`Hello, ${name}!`);
//     }, 2000);
//     console.log("end")
//   }
//   delayedGreeting('Bob', logMessage);


//                                          Example-2
// function processData(data, callback) {
//     // Process data...
//     // callback(data);
//   }
//   function namef(data){
//     console.log('Processed data:', data);
//   };
//   processData(10, namef);
//   processData(20, (data) => {
//     console.log('Logging data:', data);
//   });


//                                          Example-3
// function call(callback)
// {
//     setTimeout(() => {
//         let num=Math.random();
//         let bol=num>0.5;
//         if(bol)
//             {
//                 callback(null,num);
//             }
//             else{
//                 callback('less than 0.5', num)
//             }
//     }, 3000);
// }
// call((error,data)=>{
//     if(error)
//         {
//             console.log(`error is : ${error}`, `data is : ${data}`)
//         }
//         else{
//             console.log(`No error: ${error}`, `data is : ${data}`)
//         }
// })


// This is an example of pyramid of DOM.

function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback(null, 'fetchedData', 10);
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        console.log('Data processed');
        callback(null, 'processedData', 20);
    }, 1000);
}

function saveData(data, callback) {
    setTimeout(() => {
        console.log('Data saved');
        callback(null, 'savedData', 30);
    }, 1000);
}

fetchData((err, fetchedData, val) => {
    if (err) {
        console.error('Error:', err);
        return;
    } else {
        console.log(val)
        processData(fetchedData, (err, processedData, val) => {
            if (err) {
                console.error('Error:', err);
                return;
            } else {
                console.log(val)
                saveData(processedData, (err, savedData, val) => {
                    if (err) {
                        console.error('Error:', err);
                        return;
                    } else {
                        console.log(val)
                        console.log('Operation completed successfully:', savedData);
                    }
                });
            }
        });
    }
});