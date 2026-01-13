// Q 1. Store your name, age, and favorite hobby in variables and print a sentence using them.

// let name = "Vaibhav";
// let age = 21;
// let hobby = "coding";

// console.log(`${name} is ${age} years old and loves ${hobby}.`);

// 2. Store a temperature in Celsius and convert it to Fahrenheit using a formula.

// let celsiusTemp = 32;
// let fahrenheitTemp = (celsiusTemp * 9/5) + 32;

// console.log(`The CelsiusTemp ${celsiusTemp} to fahrenheitTemp ${fahrenheitTemp}`);

// 3. Declare a variable for your bank balance. Simulate a deposit and a withdrawal. Show the updated balance.

// let bankBalance = 5000;
// let deposit = (bankBalance + 1000);
// let withdrawal = (deposit - 500);
// let updatedBalance = (withdrawal);
// console.log(`The initial bank balance is ${bankBalance}`);
// console.log(`After depositing 1000, the balance is ${deposit}`);
// console.log(`After withdrawing 500, the balance is ${withdrawal}`);
// console.log(`Total ammount is ${updatedBalance}`);

// 4. Create 5 variables with meaningful names representing real-world objects or data.

// let studentName = " Vaibhav"
// let fruits = [Mango, Banana, Apple]
// let results = 400
// let isLoggedin = true
// let employees = {name:"vaibhav", position: "backend developer"}

// 5. Use var, let, and const in a block scope and global scope. Log their values inside and outside the block.

// var globalVar = "I am a global variable"

// function checkscope() {
//     console.log(globalVar); //code will be executed
// }
// checkscope();
// console.log(globalVar); //code will be executed by outside functions thats why this is global scope


// if(true){
//     const blocVar = "I am a Block scope variable"
//     // console.log(blocVar); // works
// }
// // console.log(blocVar); // throw ReferenceError because that is block scope variable

// if(true){
//     var blocVar = "I ignore blocks"
// }
// console.log(blocVar); //works !!


// 6. Create a const array and try adding new items to it.

// const addItems = [1,2,3,4,5]
// const newItem = addItems.push(6)
// console.log(addItems);

// 7. Try reassigning variables declared with let and const.

// let x = 5
// x = 6 // reassigning variables in let
// console.log(x);

// const x = 5
// x = 6 // x is not a reassigning variable becuase that is constant variable
// console.log(x);

// 8. Declare variables of each type: string, number, boolean, object, array, null, undefined. Use typeof to log each type.

// console.log(typeof "Hello"); // string
// console.log(typeof 20); // number
// console.log(typeof {}); // object primitive datatype
// console.log(typeof []); // object
// console.log(typeof null); // object but that's a bug
// console.log(typeof undefined); // undefined

// 9. Create an object to represent a book: title, author, year, and a boolean for if it’s read. Log the object.

// const books = {
//     b_title: "The Great Gatsby",
//     b_author: "F. Scott Fitzgerald",
//     b_publishedDate: 1925,
//     b_isRead: true
// }

// 10. Make an array that includes a number, string, boolean, object, and another array. Log each item.

// const array = [
//     42,
//     "Hello World",
//     false,
//     { name: "Vaibhav", age: 21 },
//     [1, 2, 3, 4, 5]
// ]
// console.log(array);

// 11. Convert two number strings to actual numbers and add them.

// const number = "4" + "4"
// console.log(number);

// 12. Convert a number to a string, concatenate it with other text, and log the result.

// const numTostring = 21;
// const result = numTostring.toString().concat(" age")
// console.log(result);

// 13. Use Boolean() to convert different values (0, 1, "", "hello", null, undefined) and log the results.

// console.log(Boolean(0)); //false
// console.log(Boolean(1)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// 14. Given a variable with user input as a string, check if it's a valid number using isNaN() and convert it.

// let userInput = "abc45";

// if(isNaN(userInput)){
    
//     console.log("Invalid Password");
// } 
// else{
//     console.log(" It is Valid Password")
// }

// 15. Use if-else to categorize a person based on age: child, teen, adult, senior.

// let age = 18;

// if (age < 13) {
//     console.log("Child");
// }
// else if(age <=19 && age >= 13){
//     console.log("Teen");
// }
// else if(age <=60 && age > 20){
//     console.log("Adult");
// }
// else {
//     console.log("Senior")
// }

// 16. Take a number and determine if it is even or odd using %.

// let number = 5;

// if(number % 2 == 1){
//     console.log("Even Number");
// }
// else if(number % 2 == 0){
//     console.log("Odd Number")
// }
// else{
//     console.log(number)
// }

// 17. Declare variables for stored username/password. Compare with user input and print login success or failure.

// let storedUsername = "vaibhav";
// let storedPassword = "vaibhav123";

// let inputUsername = "vaibhav";
// let inputPassword = "vaibhav123";   

// if (storedUsername === inputUsername && storedPassword === inputPassword){
//     console.log("Login Success")
// }
// else{
//     console.log("Login Fail");
// }

// 18. If purchase amount is over $100, apply a 10% discount. Otherwise, apply 5%. Show the final price.

// let purchaseAmount = 120;
// let finalPrice;

// if(purchaseAmount > 100){
//     finalPrice = purchaseAmount - (purchaseAmount * 0.10);
// }
// else{
//     finalPrice = purchaseAmount - (purchaseAmount * 0.05);
// }
// console.log(`The final price is ${finalPrice}`);

// 19. Take a score and assign a grade: A (90+), B (80–89), C (70–79), D (60–69), F (below 60).

// let score = 55;

// if(score >= 90){
//     console.log("Grade A");
// }
// else if(score >= 80){
//     console.log("Grade B");
// }
// else if(score >= 70){
//     console.log("Grade C");
// }       
// else if(score >= 60){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }

// 20. Based on a variable storing the color ("red", "yellow", "green"), print a message for what to do ("Stop", "Slow down", "Go").

// let traffiColor = "Yellow";

// if(traffiColor === "Red"){
//     console.log("Stop");
// }
// else if (traffiColor === "Yellow"){
//     console.log("Slow down")
// }
// else if (traffiColor === "Green") {
//     console.log("Go")
// }