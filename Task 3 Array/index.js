// 1. Write a function that takes an array of numbers and returns the maximum number in the array.

// let arr = [1,26,15,2,4];
// let result = Math.max(...arr);
// function maxNum(result) {
//     return result;
// }   

// console.log(maxNum(result));

// 2. Write a function that takes an array of numbers and returns the minimum number in the array.

// let arr = [1,26,15,2,4];
// let result = Math.min(...arr);
// function maxNum(result) {
//     return result;
// }   

// console.log(maxNum(result));

// 3. Write a function that takes an array of numbers and returns the sum of all elements.

// let array = [10,30,40,20,10];
// let sum = array.reduce((pre, cur) => {
//     return pre + cur;
// })

// console.log(sum);

// 4. Write a function that takes an array and returns a new array with elements in reverse order.

// let arr = [1,2,3,4,5,6]
// let reverse_order = arr.sort(function (a,b){
//     return b - a;
// })
// console.log(reverse_order);

// let arr = [1,2,3,4,5,6];

// function reverse(arr) {

//     let reverse_order = arr.reverse()
//     return reverse_order;
// }

// console.log(reverse(arr));


// function reverse() {
    
//     let arr = [1,2,3,4,5,6];
//     let rev = [];

//     for(i=arr.length - 1; i>=0; i--){
//     rev.push(arr[i]);
    
//     }
//     return rev;
// }
// console.log(reverse());

// 5. Write a function that checks if a given value exists in an array.

// let arr = [1,2,3,4,5];

// function vExists(arr) {
    
//     let result = arr.includes(6);

//     return result;
// }

// console.log(vExists(arr));

// 6. Write a function that counts how many times a specific element appears in an array.

// let arr2 = [1,2,3,3,4,5];

// function sElements(arr2,target) {
    
//     let count = 0;

//     for(let i=0 ; i<=arr2.length; i++){

//         if(arr2[i] == target ){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(sElements(arr2 , 4));

// 7. Write a function that removes duplicate elements from an array and returns a new array.

// let arr2 = [1,2,3,3,4,5];

// function sElements(arr2,target) {
    
//     let count = 0;

//     for(let i=0 ; i<=arr2.length; i++){

//         if(arr2[i] == target ){
//             count++
//         }
//     }

//     return [...new Set(arr2)];
// }

// console.log(sElements(arr2 , 4));

// let arr2 = [1,2,2,3,4,5]

// function dublicate(arr2) {
    
//     unique = [];

//     for(i=0 ; i<=arr2.length -1; i++){
//         if(!unique.includes(arr2[i])){
//             unique.push(arr2[i]);
//         }
//     }
//     return unique;
// }

// console.log(dublicate(arr2));

// 8. Write a function that returns the second largest number in an array.

// let arr = [20,40,10,30,10]

// function sLargest(arr) {

//     num = [];
    
//     for(i=0 ; i<=arr.length - 1; i++){
//         if(!num.includes(arr[i])){
//             num.push(arr[i]);
//         }
//         return sLargest;
//     }
// }

// console.log(sLargest(arr));

// let arr = [20,40,10,30,10];

// function sLargest(arr) {

//     arr.sort((a,b)=>{
//         return b - a;
//     })
//     return arr[1];
// }
// console.log(sLargest(arr));

// 9. Write a function that merges two sorted arrays into a single sorted array.

// let arr1 = [1,3,4,5,2];
// let arr2 = [7,8,6,9,10];

// function sortedArr(arr1,arr2) {
    
//     let merge = arr1.concat(arr2)
//     let result = merge.sort((a,b)=>{
//         return a - b;
//     })
//     return result;
// }

// console.log(sortedArr(arr1,arr2));

// 10. Write a function that rotates an array to the right by k positions.

// let arr = [1,2,3,4,5,6,7,8,9];

// function rotates(arr) {
    
//     let num = arr.length;
//     let k = 3;
//     k = k % num;

//     for(let i=0; i<k ; i++){
//         let pop = arr.pop();
//         arr.unshift(pop);
//     }
//     return arr;
// }

// console.log(rotates(arr));

// 11. Given an array containing n distinct numbers taken from 0 to n, find the missing number.

// let arr = [0,1,2,3,5,6]

// function missingNum(arr) {
    
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] != i){
//             return i ;
//         }
//     }
// }

// console.log(missingNum(arr));

// 12. Write a function that takes an array and a target sum and returns all pairs of numbers that add up to the target.

// let arr = [1,2,3,4,5];

// function pairs(arr,target) {
    
//     let pair = []

//     for(i=0; i<arr.length; i++){
//         for(j= i + 1; j<arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 pair.push([arr[i],arr[j]])
//             }
//         }
//     }
//     return pair;
// }

// console.log(pairs(arr,5))

// 13. Given two arrays, return a new array containing elements that appear in both arrays (without duplicates).

// let arr = [1,2,3,4,5]
// let arr2 = [6,2,8,9,4]

// function newArr(arr, arr2) {

//     let arr3 = [];

//     for(i=0 ; i<=arr.length - 1; i++){
        
//         for(j=0; j<=arr2.length - 1; j++){

//             if(arr2[j] == arr[i]){
//                 arr3.push(arr[i]);
//             }
//         }
      
//     }
//     return arr3;
// }

// console.log(newArr(arr,arr2))

// 14. Given an array of integers, find the first element that appears only once.

// let arr = [1,2,3,2,3,1,4,5,4,5,6]

// function once(arr) {
    
//     const count = {}
//     let res = []
//     for(i=0; i< arr.length; i++){
//         const ele = arr[i];
//         count[ele] = (count[ele] || 0)+ 1; // agar ele count me hai to uska value 0 hoga aur usme 1 add ho jayega, agar nahi hai to undefined hoga aur usme 1 add ho jayega
//     }
   
//     for(i=0; i< arr.length; i++){
//         const ele = arr[i];
        
//         if(count[ele] == 1){
//             res.push(arr[i]);
//         }
//     }

//     return res;
// }

// console.log(once(arr))

// let arr = [1,2,3,2,3,1,4,5,4,5,6]

// function once(arr) {

//     let res = [];
    
//     for(i=0; i< arr.length; i++){
//         let count = 0;
//         for(j=0; j< arr.length; j++){
//             if(arr[i] == arr[j]){
//                 count++;
//             }
//         }
//         if(count == 1){
//             res.push(arr[i]);
//             return res;
//         }
//     }
// }
// console.log(once(arr));

// let arr = [1,2,3,2,3,1,4,5,4,5,6];

// function once(arr) {
//     res = [];

//     for(i=0; i<=arr.length-1; i++){

//         res = res ^ arr[i]; // XOR operation, jo same number ka XOR 0 hota hai aur different number ka XOR 1 hota hai
//     }
//     return res;
// }
// console.log(once(arr));


// 15. Implement a function to sort an array without using JavaScript’s built-in sort() method.

// let arr = [1,4,2,5,3,6];

// function sort(arr) {

//     let st= 0;
//     let end = arr.length - 1;
//     let temp;
    
//     while(true){

//         if(st == end){
//             st = 0;
//             end--;
//         }
//         if(end == 0){
//             break;
//         }
//         st++;

//         //swapping
//         if(arr[st] > arr[end]){
//             temp = arr[st];
//             arr[st] = arr[end];
//             arr[end] = temp;
//         }
//     }
//     return arr;
// }


// console.log(sort(arr)); 

// let arr = [1,4,2,5,3,6];

// function sort(arr) {

//     for(i=0 ; i<=arr.length - 1 ; i++){

//         for(j=0; j<=arr.length -1 ; j++){

//             if(arr[j] > arr[j+1]){

//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(sort(arr));

// 16. Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers.

// let arrL = [1,5,4,24,7,6]

// function length(arrL) {
    
//     let longest = 0;
//     let current = 1;
//     arrL.sort((a, b) => a - b);
//     for(i=0; i<arrL.length - 1; i++){
//         if(arrL[i] + 1 == arrL[i+1]){
//             current++;
//         }else{
//             longest = Math.max(longest, current);
//             current = 1;
//         }
//     }
//     return Math.max(longest, current);
// }

// console.log(length(arrL));

// 17. Given an array of numbers, return an array where each element at index i is the product of all elements except 
// the one at i, without using division.

// let numArr = [1,2,3,4];

// function ele(numArr) {

//     let result = [];

//     for(i=0; i< numArr.length; i++){
//         let prev = 1;

//         for(j=0; j< numArr.length; j++){
//             if(i != j){
//                prev = prev * numArr[j];
//             }
//         }
//         result.push(prev);
//     }
//     return result;

// }
// console.log(ele(numArr));

// 18. Given an array of positive and negative numbers, rearrange it so that numbers alternate in sign while maintaining relative order.

// const array = [1,2,-3,-4,-5,6];

// function rearrange(array) {
    
//     let positive = [];
//     let negative = [];
//     let result = [];

//     for(let i=0 ; i<array.length; i++){
//         if(array[i] < 0){
//             negative.push(array[i]);   
//         }
//         else{
//             positive.push(array[i]);
//         }
//     }
//     let i = 0;
//     let j = 0;
//     while(i < positive.length || j < negative.length){
//         if(i < positive.length){
//             result.push(positive[i]);
//             i++;
//         }
//         if(j < negative.length){
//             result.push(negative[j]);
//             j++;
//         }

//     }
//     return result;
// }

// console.log(rearrange(array));

// 19. Given an array of integers, find the contiguous subarray (containing at least one number) 
// that has the largest sum and return that sum.

// let arr = [2, 3, -8, 7, -1, 2, 3];

// function sum(arr) {

//     let res = arr[0];

//     for(let i = 0; i<arr.length ; i++){

//         let currsum = 0

//         for(let j= i ; j<arr.length; j++){

//             currsum = currsum + arr[j];

//             res = Math.max(res, currsum);
//         }
//     }
//     return res;
// }

// console.log(sum(arr));

// 20. Given an array, find the element that appears more than n/2 times 
// (where n is the array length). Assume that such an element always exists.

// let num = [1,2,3,3,3,4,5]

// function lengthNum(num) {
    
//     let count = {}
//     let n = num.length - 1;

//     for(ele of num){
//         if(count[ele]){
//             count[ele]++;
//         }
//         else{
//         count[ele]= 1;
//         }
//     }

//     for(ele in count){
        
//         if(count[ele] >= n/2){
//             console.log(`The element that appears more than n/2 times is = ${ele}`);
//         }
//     }  
    
// }

// lengthNum(num);