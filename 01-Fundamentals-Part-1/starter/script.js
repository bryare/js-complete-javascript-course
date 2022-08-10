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
