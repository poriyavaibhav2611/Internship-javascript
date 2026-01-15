// task 1 = Create a function that returns a Promise and resolves after 2 seconds with the message "Hello after delay"

// function delayHello() {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello after delay");
//         },2000);
//     })
// }

// delayHello().then(msg => console.log(msg));

// task 2 = Goal: Create a function checkEven(number) that returns a Promise.

	// Resolve with "Even number" if even.

	// Reject with "Odd number" if odd.


let number = 3;

function checkEven(number){

    return new Promise((resolve,reject) => {

        if(number % 2 == 1){
            resolve("Even Number");
        }
        else if(number % 2 == 0){
            reject("Odd number")
        }
    })
}

checkEven(number).then(msg => console.log(msg)).catch(err => console.log(err));