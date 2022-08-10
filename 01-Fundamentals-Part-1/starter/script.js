// Linking a JavaScript File

/* let js = "amazing";
console.log(40 + 8 + 23 - 10); */

// Values and Variables

/* console.log("Jonas");
console.log(23);

let firstName = "Bryan";
console.log(firstName);

let jonas_matildas = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415; */

// Data Types

/* true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Bryan");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

// let, const, and var

/* let age = 30;
age = 31;

const birthYear = 1991;

// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName); */

// Basic Operators

/* const dateNow = 2037;
const ageBryan = dateNow - 1997;
const ageSarah = dateNow - 2018;
console.log(ageBryan, ageSarah);

// Math Operators
console.log(ageBryan * 2, ageBryan / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Bryan";
const lastName = "Arevalo";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4; // x = x * 4;
x++;
x--;
console.log(x);

//Comparison Operators

console.log(ageBryan > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(dateNow - 1991 > dateNow - 2018); */

// Operator Precedence

/* const dateNow = 2037;
const ageBryan = dateNow - 1997;
const ageSarah = dateNow - 2018;
console.log(dateNow - 1991 > dateNow - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageBryan + ageSarah) / 2;
console.log(ageBryan, ageSarah, averageAge); */

// Strings and Template Literals

/* const firstName = "Bryan";
const job = "programmer";
const birthYear = 1997;
const year = 2037;
const bryan =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(bryan);

const bryanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(bryanNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`); */

// Taking Decisions: if / else Statements

/* const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
} */

// Type Conversion and Coercion

/* Type conversion */
/* const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Bryan"));
console.log(typeof NaN);

console.log(String(23), 23); */

/* Type coercion */
/* console.log("I am " + 23 + " years old");
console.log("23" - " 10" - 3);
console.log("23" / " 10");

let n = "1" + 1;
n = n - 1;
console.log(n); */

/* String 1 plus number 1 = 11 minus 1 equals ten */

// Truthy and Falsy Values

// 5 falsy values: 0, "", undefined, null, NaN

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Bryan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("Yay! height is defined");
} else {
  console.log("Height is undefined"); // height is not actually undefined, its 0, so this is a bug
} */

// Equality Operators: == vs ===

/* const age = "18";
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23"); */

// Logical Operators

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
} */

// The switch statement

/* const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
} */
