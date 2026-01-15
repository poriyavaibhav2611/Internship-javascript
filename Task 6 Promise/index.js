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


// let number = 3;

// function checkEven(number){

//     return new Promise((resolve,reject) => {

//         if(number % 2 == 1){
//             resolve("Even Number");
//         }
//         else if(number % 2 == 0){
//             reject("Odd number")
//         }
//     })
// }

// checkEven(number).then(msg => console.log(msg)).catch(err => console.log(err));

// task 3 = Simulate a fake API call that takes 3 seconds and returns a list of users

// let f_api = 
// [
//   {
//     "id": 1,
//     "name": "John Doe",
//     "email": "john@example.com",
//     "status": "active"
//   },
//   {
//     "id": 2,
//     "name": "Jane Smith",
//     "email": "jane@example.com",
//     "status": "inactive"
//   },
//   {
//     "id": 3,
//     "name": "Peter Jones",
//     "email": "peter@example.com",
//     "status": "active"
//    }
// ];

// function apiResponse(f_api) {
    
//     return new Promise((resolve, reject)=>{

//         let sucess = true; // true or false to test both resolve and reject
//         if(sucess){
//             setTimeout(() => {
//                 resolve(f_api);
//             }, 3000);
//         }
//         else{
//             reject("Error: Unable to fetch data"); 
//         }
//     })
// }

// apiResponse(f_api)
// .then(getdata => console.log(getdata))
// .catch(err => console.log(err));