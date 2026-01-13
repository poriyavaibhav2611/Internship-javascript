// Count how many keys are in an object.

// let obj = {
//     name: "Vaibhav",
//     age: "21",
//     city: "Surat"
// }

// const objKeys = Object.keys(obj);
// console.log(objKeys.length);

// Change all values in an object to uppercase.

// let obj2 = {
//     name: "Vaibhav",
//     age: "21",
//     city: "Surat"
// }

// function res() {
    
//     let res = '';
//     for(let name in obj2){
        
//         res = res + obj2[name].toUpperCase() + ' ';
//     }
//     return res;
// }

// console.log(res());

// Swap keys and values in an object.

// function Swap() {
    
//     let obj3 = {
    
//     oneplus: "samsung",
//     iphone: "apple",
//     redmi: "xiaomi"
// }
//     let swap = {}

//     for(let key in obj3){
//         swap[obj3[key]] = key; 
//     }

//     return swap;
// }

// console.log(Swap());

// let obj3 = {
    
//     oneplus: "samsung",
//     iphone: "apple",
//     redmi: "xiaomi"
// }

// let swap = Object.fromEntries(
//     Object.entries(obj3).map(([key,value]) => ([value,key]))
// );

// console.log(swap);

// 1. Merge two objects into one (new object).

// let obj1 = {
//     f_name: "Vaibhav",
//     l_name: "Poriya"
// }

// let obj2 = {
//     oneplus: "samsung",
//     iphone: "apple",
//     redmi: "xiaomi"
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);

// 2. Find the key that has a certain value.

// let obj1 = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire",
    
// }

// function certainValue(obj1, val) {

//     for(let key in obj1){

//         if(obj1[key] == val){
//             return key;
//         }
//     }
// }

// console.log(certainValue(obj1, "Bmw"));

// 3. Check if an object has no keys.

// let empty = {}

// function noKeys(empty) {
    
//     if(Object.keys(empty).length == 0){
//         return "no key available";
//     }
//     else{
//         return "key available"
//     }
// }

// console.log(noKeys(empty));

// 4. Add all the numbers in an object’s values.

// let numObj = {
//     val1: 10,
//     val2: 20,
//     val3: 30
// }

// function addNumber(numObj) {
    
//     let sum = 0;

//     for(let key in numObj){

//         sum = sum + numObj[key];
//     }
//     return sum;
// }

// console.log(addNumber(numObj));

// 5. Delete all keys where the value is null or undefined.

// function deleteVal() {
    
//     let obj = {
//         val1 : 10,
//         val2 : null,
//         val3 : 30
//     }

//     for(let x in obj){

//         if(obj[x] == null || obj[x] == undefined){
//             delete obj[x]
//         }
//     }
//     return obj;
// }
// console.log(deleteVal());

// 6. Get a nested value from an object like obj.user.name.first.

// function accessVal() {
    
//     let obj1 = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire", 

        
//         obj2: {
//             ph_name1: "samsung",
//             ph_name2: "apple",
//             ph_name3: "xiaomi"
//         }
//     }
//     return obj1.obj2.ph_name1;
// }

// console.log(accessVal());

// 7. Change a nested value inside an object.

// function changeVal() {
    
//     let obj1 = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire", 

        
//         obj2: {
//             ph_name1: "samsung",
//             ph_name2: "apple",
//             ph_name3: "xiaomi"
//         }
//     }

//     obj1.obj2.ph_name1 = "oneplus";

//     return obj1;
// }

// console.log(changeVal()); 

// 8. Find the length of an array that’s inside an object like obj.friends.

// function objLength() {
    
//     let obj = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire", 
//     friends: ["Vaibhav", "Paras", "Sanjay"]
//     }

//     return obj.friends.length

// }

// console.log(objLength());

// 9. Add a value to an array that’s inside an object.

// function addVal(params) {
    
//     let obj = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire", 
//     friends: ["Vaibhav", "Paras", "Sanjay"]
//     }

//     obj.friends[obj.friends.length] ="Virat"

//     return obj.friends

// }

// console.log(addVal());

// 10. Rename some keys in an object using a mapping.

// function renameKey() {
    
//     let obj = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire",         
//     }

//     let rename = Object.fromEntries(
//         Object.entries(obj).map(([key, car1]) => {
//             if(key == 'car1'){
//                 return ['vehicle1', car1];
//             }
//             if(key == 'car2'){
//                 return ['vehicle2', car1];
//             }
//             if(key == 'car3'){
//                 return ['vehicle3', car1];
//             }

//             return [key, car1];
//         })
//     )
//     return rename;
// }

// console.log(renameKey());

// function renameKey() {
    
//     let obj = {
//     car1 : "Bmw",
//     car2 : "Xuv 700",
//     car3 : "Dzire",         
//     }

//     let obj2 = {
//         car1: "vehicle1",
//         car2: "vehicle2",
//         car3: "vehicle3"
//     }

//     return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => 
//             [obj2[key] || key, value]
//     ));
    
// }

// console.log(renameKey());

// 11. Turn "a=1,b=2" into an object like { a: "1", b: "2" }.

// function stringTobject() {
    
//     let str = "a=1,b=2";

//     let res = Object.fromEntries(
//         str.split(',').map(val => val.split('='))
//     );
//     return res;
// }

// console.log(stringTobject());

// 12. Flatten one level of a nested object (e.g. { a: { b: 1 } } → { 'a.b': 1 }).

// function flattenOne() {
    
//     let obj = { a: {b: 1} }
//     let res = {};

//     for(let key in obj){

//         if(typeof obj[key] === 'object' || obj[key] !== null){
//             for(let nestedKey in obj[key]){
//                 res[`${key}.${nestedKey}`] = obj[key][nestedKey];
//             }
//         } else {
//             res[key] = obj[key];
//         }
//     }

//     return res;
// }

// console.log(flattenOne());