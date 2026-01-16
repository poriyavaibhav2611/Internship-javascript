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
//     let hours = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true }).replace(":", ".");

//     return `${dates}  ${hours}`;
// }

// let input = "2025-06-12T10:30:25";
// console.log(formatDateTime(input)); 

// 3 4 input Today: 12 June 2025
//  output 1 : 7 days from now: 19 June 2025
//  output 2 : 30 days ago: 13 May 2025

// let inputDate = "12 June 2025";

// function calculateDates(inputDate) {

//     let date = new Date();
    
//     let sevenDaysLater = new Date(date);
//     sevenDaysLater.setDate(date.getDate() + 7);

//     let thirtyDaysAgo = new Date(date);
//     thirtyDaysAgo.setDate(date.getDate() - 30);

//     let options = { year: "numeric", month: "long", day: "numeric" };
//     let sevenDaysLaterFormatted = sevenDaysLater.toLocaleDateString("en-US", options).replace(",", "");
//     let thirtyDaysAgoFormatted = thirtyDaysAgo.toLocaleDateString("en-US", options).replace(",", "");

//     console.log(`7 days from now: ${sevenDaysLaterFormatted}`);
//     console.log(`30 days ago: ${thirtyDaysAgoFormatted}`);
// }

// calculateDates(inputDate);