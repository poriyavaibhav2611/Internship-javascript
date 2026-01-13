// 1. Write a function called greet that takes a name as a parameter and logs a greeting message.

// function greet(name) {
//     console.log("Welcome " + name);
// }

// greet("Vaibhav");

// 2. Write a function that takes a string representing a number (e.g., "42") and converts it to an actual number. Then, check if the number is greater than 50 and return a corresponding message.

// let a = "54";

// function (a) {
    
//     let num = parseInt(a);

//     if (num > 50) {
//         console.log("Number is greater than 50");
//     } else {
//         console.log("Number is less than 50");
//     }
//     return num;
// }

// name(a);

//3. Write a function that accepts a string with a number and converts it to a floating-point number. Return the result of multiplying the number by 2.

// let str = "4.2";

// function float(str) {
    
//     let num = parseFloat(str);

//     return num * 2;
// }

// let result = float(str);
// console.log(result);    

//4. Create a function that checks if the number is between 1 and 100 (inclusive). If it is, return "Valid", otherwise return "Invalid".

// let num = 101;
// function check(num) {
//     if(num >= 1 && num <= 100){
//         return "Valid"
//     }
//     else{
//         return "Invalid"
//     }
// }

// console.log(check(num));

// 5. Write a function that takes a grade (between 0 and 100) and returns the letter grade: "A" 
// for scores between 90 and 100, "B" for scores between 80 and 89, "C" for scores 
// between 70 and 79, and "F" for scores below 70.

// let mark = 65;

// function grade(mark) {
    
//     if(mark >= 90 && mark <= 100){
//         return "A";
//     }
//     else if (mark >= 80 && mark <=89){
//         return "B";
//     }
//     else if (mark >= 70 && mark <= 79){
//         return "C";
//     }
//     else {
//         return "F";
//     }
// }

// console.log(grade(mark));

// 6. Write a function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

// let num = 3;

// function isEven(num) {
    
//     if (num % 2 == 1) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEven(num));

// 7. Write a function that takes a string and checks if it contains only numbers. Return "Valid number" if
//  the string contains only digits, otherwise return "Invalid number".

// let str = "42";

// function numVal(str) {

//     if(!isNaN(str)){
//         return "Valid number"
//     }
//     else{
//         return "Invalid number"
//     }
// }

// console.log(numVal(str));

//8. Create a function that takes a string as an argument and returns "Vowel" if the string is a vowel (a, e, i, o, u) and "Not Vowel" if it is not.

// let str = "e";

// function strVow(str) {
    
//     if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){
//         return "Vowel"
//     }
//     else{
//         return "Not Vowel"
//     }
// }

// console.log(strVow(str));

// 9. Create a function that takes a string representing a day of the week (e.g., "Monday", "Saturday") and returns "Weekday" if
//  it is a weekday (Monday through Friday), and "Weekend" if it is a Saturday or Sunday.

// let week = "Sunday";

// function weekDay(week) {
//     if(week == "Monday" || week == "Tuesday" || week == "Wednesday" || week == "Thursday" || week == "Friday"){
//         return "Weekday"
//     }
//     else if (week == "Saturday" || week == "Sunday"){
//         return "Weekend"
//     }
//     else{
//         return "Invalid day"
//     }
// }

// console.log(weekDay(week));

// 10. Write a function that takes a number as an argument and returns "High" if the number is greater than 100, "Medium" if the number is between 50 and 100, and "Low" if it is less than 50.

// let num = 49;

// function numCheck(num) {
    
//     if(num > 100){
//         return "High"
//     }
//     else if(num >= 50 && num <= 100){
//         return "Medium"
//     }
//     else {
//         return "Low"
//     }
// }

// console.log(numCheck(num));

//11. Write a function that takes a string representing a month (e.g., "January", "August") and returns the season in which 
// the month falls. Assume that "Winter" is from December to February, "Spring" is from March to May, "Summer" is from
//  June to August, and "Fall" is from September to November.

// let month = "January";

// function seasonCheck(month) {
    
//     if(month == "December" || month == "January" || month == "February"){
//         return "Winter"
//     }
//     else if (month == "March" || month == "April" || month == "May"){
//         return "Spring"
//     }
//     else if (month == "June" || month == "July" || month == "August"){
//         return "Summer"
//     }
//     else if (month == "September" || month == "October" || month == "November"){
//         return "Fall"
//     }
//     else{
//         return "Invalid Month name"
//     }
// }

// console.log(seasonCheck(month));

// 12. Write a function that takes a year as an argument and returns whether the year is a leap year. 
// A year is a leap year if it is divisible by 4, but not divisible by 100 unless it is also divisible by 400.

// let year = 2024;

// function yearCheck(year) {
    
//     if(year % 4 == 0){
//         return "leap year"
//     }
//     else if(year % 400 == 0){
//         return "leap year"
//     }
//     else if (year % 100 == 0){
//         return "NOT leap year" 
//     }
//     else{
//         return "NOT leap year"
//     }
    
// }

// console.log(yearCheck(year));

// 13. Write a function that takes a number as input and checks if the number is a multiple of 7 or 11. 
// If it is, return "Multiple of 7 or 11", otherwise return "Not a multiple".

// let num = 14;

// function multipleCheck(num) {
//     if(num % 7 == 0 || num % 11 == 0){
//         return "Multiple of 7 or 11"
//     }
//     else{
//         return "Not a multiple"
//     }
    
// }

// console.log(multipleCheck(num));

// 14. Write a function called isDivisibleByBoth that takes a number and checks if it’s divisible by both 3 and 5.

// let num = 41;

// function isDivisibleByBoth(num) {
//     if(num % 3 == 0 && num % 5 == 0){
//         return "it’s divisible by both 3 and 5."
//     }
//     else{
//         return "it’s not divisible by both 3 and 5."
//     }
// }

// console.log(isDivisibleByBoth(num));

// 15. Create a function called timeToSeconds that takes two parameters, hours and minutes, and returns the total time in seconds.

// let hours = 1;
// let minutes = 30;

// function timeToSeconds(hours, minutes) {
//     let htosecond = hours * 60 * 60;
//     let mtosecond = minutes * 60

//     return htosecond + mtosecond;
// }

// console.log(timeToSeconds(hours,minutes));

// 16. Create a function called ageInDays that takes a person’s age in years and returns their approximate age in days.

// let age = 20;

// function ageInDays(age) {
    
//     let Tdays = age * 365;

//     return Tdays;
// }

// console.log(ageInDays(age));


// 17. Write a function factorial that takes a positive integer n and returns its factorial using a for loop.

// let num = 4;

// function factorial(num) {

//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(num));

// 18. Write a function sumOfOddNumbers that takes a number n and returns the sum of all odd numbers from 1 to n.

// let num = 4;

// function sumOfOddNumbers(num) {
    
//     let result = 0;
//     for(let i = 1; i<= num; i++){
//         if(i % 2 == 1){
//             result += i;
//         }
//     }
//     return result;
// }

// console.log(sumOfOddNumbers(num));

// 19. Write a function that takes a number and checks if it is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors 
// (excluding the number itself). For example, 6 is a perfect number because 1 + 2 + 3 = 6.

// let num = 6;

// function pnum(num) {

//     let sum = 0;
//     for(let i=1 ; i<= num ; i++){
//         if(num % i == 0){
//             sum += i;
//         }
//     }
//     return sum == num;
// }
// console.log(pnum(num));

//20. Write a function that takes a 3 digit number and check whether number is Armstrong or not. example: 153 is 3 digit armstrong number

// let num = 153;

// function armstrong(num) {
//     let nofdigit = num.toString().length;
//     let sum = 0;

//     for(let i = 0; i < nofdigit; i++){
//         sum += Math.pow(num.toString().charAt(i), nofdigit);
//     }
//     if(sum == num){
//         console.log("This number is armstrong")
//     }
//     else{
//         console.log("This number is not a armstrong")
//     }
// }

// console.log(armstrong(num));

let num = 153;

function armstrong(num){
    let sum = 0;
    let temp = num;

    while (temp>0) {
        let rem = temp % 10;
        let res = Math.pow(rem,3);
        sum = sum + res;
        temp = Math.floor(temp/10);
    }

    if(sum == num){
        console.log("This number is armstrong");
    }
    else{
        console.log("This number is not a armstrong");
    }
}
armstrong(num);

// 21. Write a function that take a number and checks if it is a prime number or not. example: 5, 7 is prime numbers

// let num = 6;

// function prime(num) {
//     let isPrime = true;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     return isPrime;
// }
// console.log(prime(num));

//22. Write a function that take a number and checks if it is a pallindrom number or not. example: 35253, 5151515 is pallindrom number

// let num = 35253;

// function numCheck(num) {
    
//     let numstr = num.toString();
//     let strNum = numstr.split('').reverse('').join('');
    
//     if(strNum === numstr){
//         console.log("pallindrom number");
//     }
//     else{
//         console.log("Not a pallindrom number");
//     }
//     return num;

// }
// console.log(numCheck(num));

// let num = 352553;

// function numCheck(num) {
//     let numstr = num.toString();
//     let newString = "";

//     for(let i = numstr.length - 1; i >= 0; i--){
//         newString += numstr[i];
//     }
//     return newString == numstr;

// }

// console.log(numCheck(num));

// 23. Write a JavaScript loop to calculate the digital root of a number without using arrays, objects, or strings. The digital root of 
// a number is the single-digit value obtained by an iterative process of summing its digits until a single digit is reached.

// let num = 421;

// function digitalRoot(num) {

//     while (num>10) {
//        let sum = 0;
//        let temp = num;
       
//        while(temp > 0){
//             const last_digit = temp % 10;
//             sum += last_digit;

//             temp = Math.floor(temp/10);
//        }
//        num = sum;
//     }
//     return num;
// }

// console.log(digitalRoot(num))


// 24. Write a JavaScript loop to print the first 10 numbers in the Fibonacci sequence, but instead of using arrays or
//  recursion, store only the last two Fibonacci numbers in variables.

let n = 10;

function Fibonacci(n) {
    let a = 0, b = 1;
    let next;

    console.log(a);
    console.log(b);

    for(let i = 2; i<= n; i++){
        next = a + b;
        console.log(next);
        a = b;
        b = next;
        
    }

    // return n;
}
Fibonacci(n);