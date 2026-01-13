// 1. Write a function that takes a string as input and returns the string reversed.

// const str = "Hello"

// function reverseString(str) {
   
//     let revStr = str.split("").reverse("").join("")
//     return revStr;
// }

// console.log(reverseString(str));

// const str = "Hello"

// function reverseString(str) {
    
//     res = '';

//     for(let i=str.length -1 ; i>=0; i--){

//         res = res + str[i]
//     }
//     return res;
// }

// console.log(reverseString(str));

// 2. Create a function that counts the number of vowels in a string.

// const str = "hello world";

// function countVowels(str) {

//     let count = 0;
   
//     for(let i=0; i<str.length; i++){

//         if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u' ){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels(str));

// 3. Write a function that takes a sentence and returns the sentence with each word capitalized.

// const str = "hello world from javascript";

// function capitalizedWords(str) {

//     let arr = str.split(' ');
//     let spl = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
//     return spl;
// }

// console.log(capitalizedWords(str));

// 4. Create a function that checks if a given string is a palindrome (reads the same forward and backward,
//  ignoring spaces and case).

// let str = "A man a plan a canal Panama";

// function palindrome(str) {

//     let lower = str.toLowerCase().replaceAll(" ",'');
    
//     let revStr = lower.split("").reverse("").join("");

//     if(revStr === lower){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(palindrome(str));

// 5. Write a function that returns the longest word in a sentence.

// let str = "I am learning JavaScript string methods";

// function findLongestWord(str) {
    
//     let arr = str.split(" ");
//     let longest = "";

//     for(let i=0 ; i<arr.length; i++){

//         if(arr[i].length > longest.length){
//             longest = arr[i];
//         }
//     }
//     return longest;
// }

// console.log(findLongestWord(str));

// let str = "I am learning JavaScript string methods";

// function findLongestWord(str) {
    
//     let arr = str.split(" ");
//     let longest = "";

//     for (const ele of arr) {
        
//         if(ele.length > longest.length){
//             longest = ele
//         }
//     }
//     return longest;
// }

// console.log(findLongestWord(str));

// 6. Create a function that repeats a given string n times without using the .repeat() method.

// let str = "abc";

// function repeatsString(str) {
    
//     let num = 3;

//     let str1 = str.split(" ");

//     for(let i=0; i<num -1; i++){
//         str1.push(str1[i]);
//     }

//     let res = str1.join("");
//     return res;
// }

// console.log(repeatsString(str));

// 7. Write a function that removes duplicate characters from a string.

// let str = "Javascript";

// function dublicateCharacters(str) {
    
//     const unique = new Set(str);

//     return [...unique].join("");
// }
// console.log(dublicateCharacters(str));

// let str = "Javascript";

// function dublicateCharacters(str) {
    
//     res = "";

//     for(let i=0 ; i<str.length; i++){

//         if(!res.includes(str[i])){
//             res = res + str[i]
//         }
//     }
//     return res;
// }
// console.log(dublicateCharacters(str));

// 8. Create a function that counts the number of occurrences of a specific character in a string.

// let str = "Hello world";

// function countOcurrences(str) {
    
//     let count = 0;
//     let res = "";

//     for(let i=0 ; i<str.length; i++){

//         if(str[i] == 'l'){

//             count++;
//             res = res + str[i];
//         }
//     }
//     return count;
// }

// console.log(countOcurrences(str)); 

// 9. Write a function that replaces all spaces in a string with a specific character (e.g., replace spaces with underscores)

// let str = "hello world";

// function replaceSpaces(str) {

//     res = "";

//     for(let i=0; i<str.length; i++){

//         if(str[i] == " "){
//             res = res + "_";
//         }
//         else{
//             res = res + str[i];
//         }
//     }
//     return res;
// }
// console.log(replaceSpaces(str));

// let str = "hello world";

// function replaceSpaces(str) {
    
//     let res = str.replaceAll(" ",'_');

//     return res; 
// }
// console.log(replaceSpaces(str));

// 10. Write a function that extracts the domain name from a given URL string.

// let url = "https://www.example.com/path?name=value"

// function extractDomain(url) {
    
//     let withoutProtocol = url.replaceAll("https://","");
//     let withoutWWW = withoutProtocol.replace("www.","");
//     let domain = withoutWWW.split("/")[0];

//     return domain;
// }

// console.log(extractDomain(url));

// 11. Write a function that takes a sentence as input and converts it to camelCase format.

// let str = "hello world from JavaScript";

// function toCamelcase(str) {

//     let arr = str.split(" ");

//     let camelCase = arr.map((ele, index) => {
//         if(index == 0){
//             return ele.toLowerCase();
//         }
//         else{
//             return ele[0].toUpperCase() + ele.slice(1);
//         }
// }).join("");

//     return camelCase;
// }

// console.log(toCamelcase(str));

// 12. Write a function that finds and returns the most frequent character in a string. If multiple characters 
// have the same frequency, return any one of them.

// let str = "javascript";

// function mostFrequentCharacter(str) {

//     let count = 0;

//     for(let i=0; i<str.length; i++){

//         let freq = 0;

//         for(let j=0; j<str.length; j++){

//             if(str[i] === str[j]){
//                 freq++;
//             }
//         }
//         if(freq > count){
//             count = freq;
//             res = str[i];
//         }
//     }
//     return res;
// }

// console.log(mostFrequentCharacter(str)); // output: "a"

// 13. Write a function that converts a numeric string (e.g., "1234") into words

// let str = "1234";

// function numberTowords(params) {

//     const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//     const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     let result = "";


//     if (str.length === 4) {
//         result = result + ones[parseInt(str[0])] + " Thousand ";
//         str = str.slice(1);
//     }
//     if (str.length === 3) {
//         result = result + ones[parseInt(str[0])] + " Hundred ";
//         str = str.slice(1);
//     }
//     if (str.length === 2) {
//         if (str[0] === '1') {
//             result = result + teens[parseInt(str[1])] + " ";
//             return result.trim();
//         } else {
//             result = result + tens[parseInt(str[0])] + " ";
//             str = str.slice(1);
//         }
//     }
//     if (str.length === 1) {
//         result = result + ones[parseInt(str[0])] + " ";
//     }

//     return result.trim();
// }
// console.log(numberTowords(str)); // output: "One Thousand Two Hundred Thirty Four"
// 14. Write a function that performs basic string compression using the counts of repeated characters. 
// If the compressed string is not shorter than the original, return the original string.

// let str = "aabcccccaaa";

// function compressString(str) {

//     let res = "";
//     let count = 1;

//     for(let i=0; i<=str.length-1; i++){

//         if(str[i] == str[i+1]){
//             count++;
//         }
//         else {
//             res = res + str[i] + count;
//             count = 1;
//         }
//     }
//         if(res.length < str.length){
//             return res;
//         }
//         else{
//             return str;
//         }
// }
// console.log(compressString(str)); // output: "a2b1c5a3"

// 15. Write a function that removes duplicate words from a sentence.

// let str = "this is is a test test";

// function removeDublicateWords(str) {
    
//     let str2 = str.split(" ");
//     let res = [];

//     for(let i=0; i<str2.length; i++){

//         if(!res.includes(str2[i])){
//             res.push(str2[i]);
//         }
//     }
//     return res.join(" ");
// }

// console.log(removeDublicateWords(str)); 

// let str = "this is is a test test";

// function removeDublicateWords(str) {
    
//     let arr = str.split(' ');

//     let uniqueWord = new Set(arr);

//     let uniqueWordArr = [...uniqueWord];

//     let result = uniqueWordArr.join(" ");

//     return result
// }

// console.log(removeDublicateWords(str));