"use strict";
//question 1 installation
//Question 2
const personName = "Eric";
const personalMessage = `Hello ${personName}, would you like to learn some Python today?`;
console.log("Question 1:");
console.log(personalMessage);
//question 3
const fullName = "mr. Saqlain zaheer";
const lowercaseName = fullName.toLowerCase();
const uppercaseName = fullName.toUpperCase();
const titlecaseName = fullName
    .split(" ")
    .map((title) => title.charAt(0).toLocaleUpperCase() + title.slice(1))
    .join(" ");
console.log("\nQuestion 2:");
console.log(`Original Name: ${fullName}`);
console.log(`Uppercase Name: ${uppercaseName}`); //mr. saqlain zaheer
console.log(`Lowercase Name: ${lowercaseName}`); //MR. SAQLAIN ZAHEER
console.log(`Titlecase Name: ${titlecaseName}`); //Mr.Saqlain Zaheer
//Question 03
const quote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";
console.log("\nQuestion 3:");
console.log(`${author} once said, "${quote}"`);
// Question 5
const famousPerson = "Albert Einstein";
const famousQuote = "A person who never made a mistake never tried anything new.";
const message = `${famousPerson} once said, "${famousQuote}"`;
console.log("\nQuestion 4:");
console.log(message);
