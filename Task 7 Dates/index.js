// 1. Create a JavaScript program that displays:
//    Today’s full date and time using toString()
//    Just the date using toDateString()
//    Just the time using toTimeString()

// let currentDate = new Date();

// console.log("Today’s full date: " + currentDate.toString());
// console.log("Just the date: " + currentDate.toDateString());
// console.log("Just the time: " + currentDate.toTimeString());

// 2 input 2025-06-12T10.30.25
//  output 12 june, 2025 10.30 AM

// function formatDateTime(input) {
    
//     let date = new Date(input);

//     let options = {year: "numeric", month: "long", day: "numeric" };
//     let dates = date.toLocaleDateString("en-US", options);
//     let hours = date.toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit', hour12: true }).replace(":", ".");

//     return `${dates}  ${hours}`;
// }

// let input = "2025-06-12T10:30:25";
// console.log(formatDateTime(input)); 

// 3 input 2025-06-12T10.30.25
//   output 12 june, 2025 4.00 PM

// function formatDateTime(input) {
    
//     let date = new Date(input);

//     let options = {year: "numeric", month: "long", day: "numeric" };
//     let dates = date.toLocaleDateString("en-US", options);
//     let hours = date.toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit', hour12: true }).replace(":", ".");

//     return `${dates}  ${hours}`;
// }

// let input = "2025-06-12T16:00:25";
// console.log(formatDateTime(input)); 

// 3 4 input Today: 12 June 2025
//  output 1 : 7 days from now: 19 June 2025
//  output 2 : 30 days ago: 13 May 2025

// function calculateDates(input) {

//     let date = new Date(input);

//     let daysFromNow = new Date(date);
//     daysFromNow.setDate(date.getDate() + 7);

//     let daysAgo = new Date(date);
//     daysAgo.setDate(date.getDate() - 30);

//     let options = { year: "numeric", month: "long", day: "numeric" };

//     let fromNowFormatted = daysFromNow.toLocaleDateString("en-US", options);
//     let agoFormatted = daysAgo.toLocaleDateString("en-US", options);

//     console.log(`7 days from now: ${fromNowFormatted}`);
//     console.log(`30 days ago: ${agoFormatted}`);
// }

// let input = "Today: 12 June 2025";
// calculateDates(input);

//5 Convert UTC Time to IST and AUS
//  input = "2025-06-12T10:30:25Z"; 
//  output 1 : "12 June, 2025, 4:00 PM" (IST)
//  output 2 : "12 June, 2025, 8:00 PM" (AUS)

// let input = "2025-06-12T10:30:25Z"

// function convertedUTC(input) {
    
//     let date = new Date(input)

//     let options = { year:"numeric", month:"long", day:"numeric" }

//     let istDate = date.toLocaleDateString("en-IN", options);
//     let istHour = date.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: 'numeric', minute: '2-digit', hour12: true });

//     let ausDate = date.toLocaleDateString("en-IN", options);
//     let ausHour = date.toLocaleTimeString("en-IN", { timeZone: "Australia/Sydney", hour: 'numeric', minute: '2-digit', hour12: true });

//     console.log(`${istDate}, ${istHour} (IST)`);
//     console.log(`${ausDate}, ${ausHour} (AUS)`);
// }

// convertedUTC(input);