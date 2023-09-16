"use strict";
// Question 11
const names = ["ali", "hamza", "husnain", "babar", "rizwan"];
// Question 12
console.log("Greetings to my friends:");
for (const name of names) {
    console.log(`Hello, ${name}!`);
}
// Question 13
const transportation = ["motorcycle", "car", "bicycle", "bus"];
for (const mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}
// Question 14
const guestList = ["ali", "hamza", "abdullah"];
console.log("\nDinner invitations:");
for (const guest of guestList) {
    console.log(`Dear ${guest}, you ar invited to dinner .`);
}
// Question 15
const canceledGuest = "akbar";
const newGuest = "saqlain";
const indexOfCanceledGuest = guestList.indexOf(canceledGuest);
if (indexOfCanceledGuest !== -1) {
    guestList[indexOfCanceledGuest] = newGuest;
    console.log(`\n${canceledGuest} can't make it  Inviting ${newGuest} instead.`);
}
console.log("\nUpdated dinner invitations:");
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}
