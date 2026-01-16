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


// let number = 2;

// function checkEven(number){

//     return new Promise((resolve,reject) => {

//         if(number % 2 == 0){
//             resolve("Even Number");
//         }
//         else if(number % 2 == 1){
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

// task 4 = Create 3 functions:

// 	startTask() → resolves "Task started"

// 	processTask() → resolves "Task in progress"

// 	endTask() → resolves "Task completed"
	
// 	Call them in sequence using .then() chaining.

// function startTask() {
	
// 	return new Promise((resolve) => {
// 		setTimeout(()=>{
// 			resolve("Task Started");
// 		})
// 	});
// }

// function processTask() {
	
// 	return new Promise((resolve) => {
// 		setTimeout(()=>{
// 			resolve("Task in progress");
// 		},2000)
// 	});
// }

// function endTask() {
	
// 	return new Promise((resolve) => {
// 		setTimeout(()=>{
// 			resolve("Task completed");
// 		},3000)
// 	});
// }

// startTask().then(start => console.log(start));
// processTask().then(process => console.log(process));
// endTask().then(end => console.log(end));

// task 5=Step 1: User places an order — takes 1 second.

	// Step 2: Check if the item is in stock — takes 2 seconds.

	// 	If item is "pizza", it's available.

	// 	For any other item, reject with "Item not available".

	// Step 3: Process payment — takes 1.5 seconds.

	// Step 4: Confirm order.

// function pizzAvailable() {
	
// 	return new Promise((resolve,reject) => {
// 		let pizza = true;

// 			if(pizza == true){
// 				setTimeout(() => {
// 					console.log("User placed an order");
// 				},1000);

// 				setTimeout(() => {
// 					resolve("Pizza is available");
// 				},2000)

// 				setTimeout(() => {
// 					console.log("Process payment")
// 				},3500);

// 				setTimeout(() => {
// 					console.log("Confirm order")
// 				},5000)
// 			}
// 			else{
// 				reject("Item not available");
// 			}
// 	})
// }
// pizzAvailable()
// .then(msg => console.log(msg))
// .catch(err => console.log(err));