"use strict";
//Q 16:
const guests = ["Ali", "Hamza", "Zain"];
console.log("Found a bigger dinner table!");
guests.unshift("Sarah"); // Add a new guest to the beginning of the array
guests.splice(Math.floor(guests.length / 2), 0, "Amina"); // Add a new guest to the middle of the array
guests.push("Omar");
console.log("Invitation Messages:");
for (const guest of guests) {
    console.log(`Dear ${guest}, please join us for dinner!`);
}
//Q 17
console.log("Sorry, we can only invite two people for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (const guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner!`);
}
guests.length = 0; // Remove the last two names to have an empty list
console.log("Empty guest list:", guests);
//Q 18
const placesToVisit = [
    "Paris",
    "Tokyo",
    "New York",
    "china",
    "Sydney",
];
console.log("Original Order:", placesToVisit.join(", "));
console.log("Alphabetical Order:", [...placesToVisit].sort().join(", "));
console.log("Original Order (still):", placesToVisit.join(", "));
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse().join(", "));
console.log("Original Order (still):", placesToVisit.join(", "));
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit.join(", "));
placesToVisit.reverse();
console.log("Original Order (again):", placesToVisit.join(", "));
console.log("Sorted Alphabetically:", placesToVisit.sort().join(", "));
console.log("Sorted Reverse Alphabetically:", placesToVisit.sort().reverse().join(", "));
//Q 19
console.log(`Number of people invited to dinner: ${guests.length}`);
//Q 20
const favoriteMountains = ["Everest", "K2", "rakhaposhi"];
console.log("Favorite Mountains:", favoriteMountains.join(", "));
//Q 21
const objectsToStore = [
    { name: "Eiffel Tower", category: "Landmark" },
    { name: "Amazon Rainforest", category: "Natural Wonder" },
    { name: "Mona Lisa", category: "Artwork" },
];
console.log("Objects:", objectsToStore);
//Q 23
let car = "subaru";
console.log(`Is car == 'subaru'? I predict True.`);
console.log(car == "subaru");
console.log(`Is car !== 'subaru'? I predict false.`);
console.log(car == "subaru");
console.log(`Is car === 'subaru'? I predict True.`);
console.log(car == "subaru");
//Q 25
let alien_color = "green";
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}
//Q 26
alien_color = "green";
if (alien_color === "green") {
    console.log("Player earned 5 points for shooting the alien.");
}
else {
    console.log("Player earned 10 points for shooting the alien.");
}
//Q 27
alien_color = "red";
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("Player earned 15 points.");
}
//Q 28
const age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q 29
const favorite_fruits = ["bananas", "apples", "strawberries"];
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
//Q 30
const usernames = ["admin", "ali", "hamza", "zain", "sarah"];
for (const username of usernames) {
    if (username === "admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Q 31
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// Remove all usernames to test the message.
usernames.length = 0;
//Q 32
const current_users = ["ali", "hamza", "hamas", "muddasar", "Ahmed"];
const new_users = ["ahmer", "hussain", "hamas", "momin", "Ahmed"];
for (const new_user of new_users) {
    if (current_users.map((u) => u.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
//Q 33
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of numbers) {
    let ordinal = "";
    if (num === 1) {
        ordinal = "st";
    }
    else if (num === 2) {
        ordinal = "nd";
    }
    else if (num === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${num}${ordinal}`);
}
//Q 34
const favoritePizzas = ["Pepperoni", "Margherita", "Hawaiian"];
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
//Q 35
const commonAnimals = ["Dog", "Cat", "Rabbit"];
for (const animal of commonAnimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
//Q 37: Large Shirts
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "I love JavaScript"); // Small shirt with a different message
//Q 38
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("Paris");
describe_city("New York", "USA");
//Q 39
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Rome", "Italy"));
//Q 40
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
        tracks,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "Album1", 12));
console.log(make_album("Artist2", "Album2"));
console.log(make_album("Artist3", "Album3", 8));
//Q 41
const magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
console.log("Magicians:");
show_magicians(magicians);
//Q 42
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
const greatMagicians = make_great(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
//Q 43
const originalMagicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
];
const modifiedMagicians = make_great([...originalMagicians]);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("Modified Magicians:");
show_magicians(modifiedMagicians);
//Q 44
function make_sandwich(...ingredients) {
    console.log("Sandwich Ingredients:");
    for (const ingredient of ingredients) {
        console.log(ingredient);
    }
    console.log("Sandwich is ready!");
}
make_sandwich("Bread", "Cheese", "Tomato");
make_sandwich("Turkey", "Lettuce", "Mayo", "Bread");
make_sandwich("Peanut Butter", "Jelly", "Bread");
//Q 45
function describe_car(manufacturer, model, ...options) {
    const car_info = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const option of options) {
        const parts = option.split(":");
        if (parts.length === 2) {
            const [key, value] = parts;
            car_info[key] = value;
        }
    }
    return car_info;
}
console.log(describe_car("Toyota", "Camry", "color:Blue", "sunroof:true"));
console.log(describe_car("Honda", "Civic", "color:Red"));
console.log(describe_car("Ford", "Mustang", "color:Yellow", "spoiler:true"));
